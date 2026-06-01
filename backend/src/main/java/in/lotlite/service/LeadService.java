package in.lotlite.service;

import in.lotlite.model.Lead;
import in.lotlite.repository.LeadRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * LeadService — handles:
 *  1. Saving lead to MongoDB
 *  2. Forwarding lead data to Google Sheets via the Apps Script web app webhook
 *
 * Configure the Google Sheets webhook URL in application.properties:
 *   lotlite.sheets.webhook-url=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
 */
@Service
public class LeadService {

    private static final Logger log = LoggerFactory.getLogger(LeadService.class);

    private final LeadRepository leadRepository;
    private final RestTemplate restTemplate;

    @Value("${lotlite.sheets.webhook-url:}")
    private String sheetsWebhookUrl;

    // Standard constructor injection
    public LeadService(LeadRepository leadRepository, RestTemplate restTemplate) {
        this.leadRepository = leadRepository;
        this.restTemplate = restTemplate;
    }

    /**
     * Save a lead to MongoDB and forward to Google Sheets.
     */
    public Lead saveLead(Lead lead) {
        // Set timestamp if not already set
        if (lead.getSubmittedAt() == null) {
            lead.setSubmittedAt(Instant.now());
        }

        // Save to MongoDB
        Lead saved = leadRepository.save(lead);
        log.info("Lead saved to MongoDB: id={}, email={}", saved.getId(), saved.getEmail());

        // Forward to Google Sheets asynchronously (non-blocking)
        forwardToGoogleSheets(saved);

        return saved;
    }

    public List<Lead> getAllLeads() {
        return leadRepository.findAll();
    }

    /**
     * POST the lead data to Google Sheets via Apps Script webhook.
     * Fails silently — MongoDB save is NOT affected if Sheets fails.
     */
    private void forwardToGoogleSheets(Lead lead) {
        if (sheetsWebhookUrl == null || sheetsWebhookUrl.isBlank()) {
            log.debug("No Sheets webhook URL configured — skipping.");
            return;
        }
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, Object> body = new HashMap<>();
            body.put("fullName", lead.getFullName());
            body.put("email", lead.getEmail());
            body.put("phone", lead.getPhone());
            body.put("programInterest", lead.getProgramInterest());
            body.put("source", lead.getSource());
            body.put("submittedAt", lead.getSubmittedAt().toString());

            HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);
            restTemplate.postForObject(sheetsWebhookUrl, request, String.class);
            log.info("Lead forwarded to Google Sheets: email={}", lead.getEmail());
        } catch (Exception e) {
            log.warn("Failed to forward lead to Google Sheets (non-critical): {}", e.getMessage());
        }
    }
}

