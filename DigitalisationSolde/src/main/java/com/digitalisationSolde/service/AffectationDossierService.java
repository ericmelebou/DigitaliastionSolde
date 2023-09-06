package com.digitalisationSolde.service;

import com.digitalisationSolde.model.AffectationDossier;
import com.digitalisationSolde.model.IdAffectationDossier;
import com.digitalisationSolde.repository.AffectationDossierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AffectationDossierService {
    @Autowired
    private AffectationDossierRepository affectationDossierRepository;

    public Optional<AffectationDossier> getAffectationDossier(final IdAffectationDossier id){
        return affectationDossierRepository.findById(id);
    }

    public Optional<AffectationDossier> getLatestByDossierId(final Long id){
        return affectationDossierRepository.findLatestByDossierId(id);
    }

    public Iterable<AffectationDossier> getAffectationDossiers(){
        return affectationDossierRepository.findAll();
    }

    public void deleteAffectationDossier(final IdAffectationDossier id){
        affectationDossierRepository.deleteById(id);
    }

    public AffectationDossier saveAffectationDossier(AffectationDossier affectationDossier){
        return affectationDossierRepository.save(affectationDossier);
    }
}
