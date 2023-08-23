package com.digitalisationSolde.service;

import com.digitalisationSolde.model.TypeDossier;
import com.digitalisationSolde.repository.TypeDossierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TypeDossierService {
    @Autowired
    private TypeDossierRepository typeDossierRepository;

    public Optional<TypeDossier> getTypeDossier(final Long id){
        return typeDossierRepository.findById(id);
    }

    public Iterable<TypeDossier> getTypeDossiers(){
        return typeDossierRepository.findAll();
    }

    public void deleteTypeDossier(final Long id){
        typeDossierRepository.deleteById(id);
    }

    public TypeDossier saveTypeDossier(TypeDossier typeDossier){
        return typeDossierRepository.save(typeDossier);
    }
}
