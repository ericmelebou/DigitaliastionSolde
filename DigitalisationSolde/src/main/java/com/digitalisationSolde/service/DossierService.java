package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Dossier;
import com.digitalisationSolde.repository.DossierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DossierService {
    @Autowired
    private DossierRepository dossierRepository;

    public Optional<Dossier> getDossier(final Long id){
        return dossierRepository.findById(id);
    }

    public Iterable<Dossier> getDossiers(){
        return dossierRepository.findAll();
    }

    public void deleteDossier(final Long id){
        dossierRepository.deleteById(id);
    }

    public Dossier saveDossier(Dossier dossier){
        return dossierRepository.save(dossier);
    }
}
