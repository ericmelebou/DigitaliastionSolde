package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.AffectationDossier;
import com.digitalisationSolde.model.Document;
import com.digitalisationSolde.model.Dossier;
import com.digitalisationSolde.service.DossierService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class DossierController {
    @Autowired
    private DossierService dossierService;
    @Value("${upload-dir}")
    private String uploadDir;

    @PostMapping(value="/dossier")
    public Dossier createDossier(@ModelAttribute Dossier dossier) {
        try {
            String codeIdentification;
            boolean codeIdentificationExists;
            do {
                codeIdentification = UUID.randomUUID().toString();
                codeIdentificationExists = dossierService.codeIdentificationExists(codeIdentification);
            } while (codeIdentificationExists);
            dossier.setCodeIdentification(codeIdentification);
            dossier.saveFiles(uploadDir);
            return dossierService.saveDossier(dossier);
        } catch (IOException e) {
            return null;
        }
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
    @GetMapping("/dossiers/{idAgent}")
    public Iterable<Dossier> getDossiersByAgent(@PathVariable Long idAgent) {
        return dossierService.getDossiersByAgent(idAgent);
    }

    @PostMapping("/updateDossier")
    public Dossier updateDossier(@ModelAttribute Dossier dossier) throws IOException {
        Optional<Dossier> p = dossierService.getDossier(dossier.getId());
        if(p.isPresent()) {
            Dossier currentDossier = p.get();
            currentDossier.updateFiles(uploadDir, dossier.getDemandeFile(), dossier.getPiecesFile());

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
