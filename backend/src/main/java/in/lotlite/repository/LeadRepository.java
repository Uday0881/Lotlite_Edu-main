package in.lotlite.repository;

import in.lotlite.model.Lead;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * LeadRepository — Spring Data MongoDB repository.
 * Add custom query methods here as needed.
 */
@Repository
public interface LeadRepository extends MongoRepository<Lead, String> {
    List<Lead> findByProgramInterest(String programInterest);
}
