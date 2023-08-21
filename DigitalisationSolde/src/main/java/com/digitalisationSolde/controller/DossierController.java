package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.AffectationDossier;
import com.digitalisationSolde.model.Document;
import com.digitalisationSolde.model.Dossier;
import com.digitalisationSolde.service.DossierService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class DossierController {
    @Autowired
    private DossierService dossierService;

    PasswordEncoder passwordEncoder;
    @PostMapping("/dossier")
    public Dossier createDossier(@RequestBody Dossier Dossier) {
        return dossierService.saveDossier(Dossier);
    }

    @GetMapping("/dossier/{id}")
    public Dossier getDossier(@PathVariable("id") final Long id) {
        Optional<Dossier> Dossier = dossierService.getDossier(id);
        if(Dossier.isPresent()) {
            return Dossier.get();
        } else {
            return null;
        }
    }

    @GetMapping("/dossiers")
    public Iterable<Dossier> getDossiers() {

        return dossierService.getDossiers();
    }

    @PutMapping("/dossier/{id}")
    public Dossier updateDossier(@PathVariable("id") final Long id, @RequestBody Dossier dossier) {
        Optional<Dossier> p = dossierService.getDossier(id);
        if(p.isPresent()) {
            Dossier currentDossier = p.get();

            String codeIdentification = dossier.getCodeIdentification();
            if(codeIdentification != null) {
                currentDossier.setCodeIdentification(codeIdentification);
            }

            int nombrePiece = dossier.getNombrePiece();
            if(nombrePiece != 0) {
                currentDossier.setNombrePiece(nombrePiece);
            }

            LocalDateTime dateDepot = dossier.getDateDepot();
            if(dateDepot != null) {
                currentDossier.setDateDepot(dateDepot);
            }
            String urlDemande = dossier.getUrlDemande();
            if(urlDemande != null) {
                currentDossier.setUrlDemande(urlDemande);
            }
            String urlPiece = dossier.getUrlPiece();
            if(urlPiece != null) {
                currentDossier.setUrlPiece(urlPiece);
            }
            String origine = dossier.getOrigine();
            if(origine != null) {
                currentDossier.setOrigine(origine);
            }
            int nombreAgentsConcernes = dossier.getNombreAgentsConcernes();
            if(nombreAgentsConcernes != 0) {
                currentDossier.setNombreAgentsConcernes(nombreAgentsConcernes);
            }
            String status = dossier.getStatus();
            if(status != null) {
                currentDossier.setStatus(status);
            }
            String type = dossier.getType();
            if(type != null) {
                currentDossier.setType(type);
            }
            List<Document> documents = dossier.getDocuments();
            if(documents != null) {
                currentDossier.setDocuments(documents);
            }
            Collection<AffectationDossier> affectationDossiers = dossier.getAffectationDossiers();
            if(affectationDossiers != null) {
                currentDossier.setAffectationDossiers(affectationDossiers);
            }
            dossierService.saveDossier(currentDossier);
            return currentDossier;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/dossier/{id}")
    public void deleteDossier(@PathVariable ("id") final Long id) {
        dossierService.deleteDossier(id);
    }

}
