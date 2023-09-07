package com.digitalisationSolde.repository;

import com.digitalisationSolde.model.AffectationDossier;
import com.digitalisationSolde.model.Agent;
import com.digitalisationSolde.model.IdAffectationDossier;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AffectationDossierRepository extends CrudRepository<AffectationDossier, Long> {
    @Query("SELECT ad FROM AffectationDossier ad WHERE ad.idDossier = ?1 ORDER BY ad.dateAffectation DESC")
    Optional<AffectationDossier> findLatestByDossierId(Long dossierId);

}
