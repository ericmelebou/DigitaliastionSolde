package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Document2101;
import com.digitalisationSolde.model.Document3001;
import com.digitalisationSolde.service.Document3001Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class Document3001Controller {
    @Autowired
    private Document3001Service document3001Service;

    @PostMapping("/document3001")
    public Document3001 createDocument3001(@RequestBody Document3001 document3001) {
        return document3001Service.saveDocument3001(document3001);
    }

    @GetMapping("/document3001/{id}")
    public Document3001 getDocument3001(@PathVariable("id") final Long id) {
        Optional<Document3001> Document3001 = document3001Service.getDocument3001(id);
        if(Document3001.isPresent()) {
            return Document3001.get();
        } else {
            return null;
        }
    }

    @GetMapping("/document3001s")
    public Iterable<Document3001> getDocument3001s() {

        return document3001Service.getDocument3001s();
    }

    @PutMapping("/document3001/{id}")
    public Document3001 updateDocument3001(@PathVariable("id") final Long id, @RequestBody Document3001 document3001) {
        Optional<Document3001> s = document3001Service.getDocument3001(id);
        if (s.isPresent()) {
            Document3001 currentDocument3001 = s.get();
            int tauxRappel = document3001.getTauxRappel();
            if (tauxRappel != 0) {
                currentDocument3001.setTauxRappel(tauxRappel);
            }
            int pointsRappel = document3001.getPointsRappel();
            if (pointsRappel != 0) {
                currentDocument3001.setPointsRappel(pointsRappel);
            }
            Date dateDebutRappel = document3001.getDateDebutRappel();
            if (dateDebutRappel != null) {
                currentDocument3001.setDateDebutRappel(dateDebutRappel);
            }
            Date dateFinRappel = document3001.getDateFinRappel();
            if (dateFinRappel != null) {
                currentDocument3001.setDateFinRappel(dateFinRappel);
            }
            int codePoste = document3001.getCodePoste();
            if (codePoste != 0) {
                currentDocument3001.setCodePoste(codePoste);
            }
            int nombreJoursRappel = document3001.getNombreJoursRappel();
            if (nombreJoursRappel != 0) {
                currentDocument3001.setNombreJoursRappel(nombreJoursRappel);
            }
            int montant = document3001.getMontant();
            if (montant != 0) {
                currentDocument3001.setMontant(montant);
            }
            document3001Service.saveDocument3001(currentDocument3001);
            return currentDocument3001;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/document3001/{id}")
    public void deleteDocument3001(@PathVariable ("id") final Long id) {
        document3001Service.deleteDocument3001(id);
    }
}
