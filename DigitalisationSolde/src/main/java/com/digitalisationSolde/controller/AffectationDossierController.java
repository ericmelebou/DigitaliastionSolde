package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.AffectationDossier;
import com.digitalisationSolde.model.IdAffectationDossier;
import com.digitalisationSolde.service.AffectationDossierService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AffectationDossierController {
    @Autowired
    private AffectationDossierService affectationDossierService;

    @PostMapping("/affectationDossier")
    public AffectationDossier createAffectationDossier(@RequestBody AffectationDossier affectationDossier) {
        return affectationDossierService.saveAffectationDossier(affectationDossier);
    }

    @GetMapping("/affectationDossier/{id}")
    public AffectationDossier getAffectationDossier(@PathVariable("id") final Long id) {
        Optional<AffectationDossier> AffectationDossier = affectationDossierService.getAffectationDossier(id);
        if(AffectationDossier.isPresent()) {
            return AffectationDossier.get();
        } else {
            return null;
        }
    }
    @GetMapping("/affectationDossierByDossierId/{id}")
    public AffectationDossier getLatestByDossierId(@PathVariable("id") final Long id) {
        return affectationDossierService.getLatestByDossierId(id).orElse(null);
    }


    @GetMapping("/affectationDossiers")
    public Iterable<AffectationDossier> getAffectationDossiers() {

        return affectationDossierService.getAffectationDossiers();
    }

    @PutMapping("/affectationDossier/{id}")
    public AffectationDossier updateAffectationDossier(@PathVariable("id") final Long id, @RequestBody AffectationDossier affectationDossier) {
        Optional<AffectationDossier> s = affectationDossierService.getAffectationDossier(id);
        if (s.isPresent()) {
            AffectationDossier currentAffectationDossier = s.get();

            Long idAffectateur = affectationDossier.getIdAffectateur();
            if (idAffectateur != null) {
                currentAffectationDossier.setIdAffectateur(idAffectateur);
            }
            Boolean status = affectationDossier.getStatus();
            if (status != null) {
                currentAffectationDossier.setStatus(status);
            }
            affectationDossierService.saveAffectationDossier(currentAffectationDossier);
            return currentAffectationDossier;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/affectationDossier/{id}")
    public void deleteAffectationDossier(@PathVariable ("id") final Long id) {
        affectationDossierService.deleteAffectationDossier(id);
    }
}
