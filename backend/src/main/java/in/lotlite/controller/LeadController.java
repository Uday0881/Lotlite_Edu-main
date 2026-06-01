package in.lotlite.controller;

import in.lotlite.model.Lead;
import in.lotlite.service.LeadService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * LeadController — REST endpoints for lead form submissions.
 *
 * POST /api/leads   — Submit a new lead (from frontend form)
 * GET  /api/leads   — Fetch all leads (for Admin dashboard)
 * GET  /api/health  — Health check
 */
@RestController
@RequestMapping("/api")
public class LeadController {

    private final LeadService leadService;

    // Standard constructor injection
    public LeadController(LeadService leadService) {
        this.leadService = leadService;
    }

    /** Submit a new lead from the React frontend form */
    @PostMapping("/leads")
    public ResponseEntity<Lead> submitLead(@Valid @RequestBody Lead lead) {
        Lead saved = leadService.saveLead(lead);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    /** Fetch all leads for the Admin dashboard */
    @GetMapping("/leads")
    public ResponseEntity<List<Lead>> getAllLeads() {
        return ResponseEntity.ok(leadService.getAllLeads());
    }

    /** Simple health check */
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        return ResponseEntity.ok(Map.of("status", "OK", "service", "Lotlite Backend"));
    }
}

