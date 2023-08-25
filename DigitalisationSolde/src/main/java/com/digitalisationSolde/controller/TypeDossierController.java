package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.TypeDossier;
import com.digitalisationSolde.model.Dossier;
import com.digitalisationSolde.service.TypeDossierService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class TypeDossierController {
    @Autowired
    private TypeDossierService typeDossierService;

    @PostMapping("/typeDossier")
    public TypeDossier createTypeDossier(@RequestBody TypeDossier typeDossier) {
        return typeDossierService.saveTypeDossier(typeDossier);
    }

    @GetMapping("/typeDossier/{id}")
    public TypeDossier getTypeDossier(@PathVariable("id") final Long id) {
        Optional<TypeDossier> TypeDossier = typeDossierService.getTypeDossier(id);
        if(TypeDossier.isPresent()) {
            return TypeDossier.get();
        } else {
            return null;
        }
    }

    @GetMapping("/typeDossiers")
    public Iterable<TypeDossier> getTypeDossiers() {

        return typeDossierService.getTypeDossiers();
    }

    @PutMapping("/typeDossier/{id}")
    public TypeDossier updateTypeDossier(@PathVariable("id") final Long id, @RequestBody TypeDossier typeDossier) {
        Optional<TypeDossier> s = typeDossierService.getTypeDossier(id);
        if (s.isPresent()) {
            TypeDossier currentTypeDossier = s.get();

            String libelle = typeDossier.getLibelle();
            if (libelle != null) {
                currentTypeDossier.setLibelle(libelle);
            }
            String informations = typeDossier.getInformations();
            if (informations != null) {
                currentTypeDossier.setInformations(libelle);
            }
            Set<Dossier> dossiers = typeDossier.getDossiers();
            if (dossiers != null) {
                currentTypeDossier.setDossiers(dossiers);
            }
            typeDossierService.saveTypeDossier(currentTypeDossier);
            return currentTypeDossier;
        } else {
            return null;
        }
    }
    @DeleteMapping ("/typeDossier/{id}")
    public void deleteTypeDossier(@PathVariable ("id") final Long id) {
        typeDossierService.deleteTypeDossier(id);
    }
}
