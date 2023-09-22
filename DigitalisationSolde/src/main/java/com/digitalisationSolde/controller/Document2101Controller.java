package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Document2101;
import com.digitalisationSolde.service.Document2101Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class Document2101Controller {
    @Autowired
    private Document2101Service document2101Service;

    @PostMapping("/document2101")
    public Document2101 createDocument2101(@RequestBody Document2101 document2101) {
        return document2101Service.saveDocument2101(document2101);
    }

    @GetMapping("/document2101/{id}")
    public Document2101 getDocument2101(@PathVariable("id") final Long id) {
        Optional<Document2101> Document2101 = document2101Service.getDocument2101(id);
        if(Document2101.isPresent()) {
            return Document2101.get();
        } else {
            return null;
        }
    }

    @GetMapping("/document2101s")
    public Iterable<Document2101> getDocument2101s() {

        return document2101Service.getDocument2101s();
    }

    @PutMapping("/document2101/{id}")
    public Document2101 updateDocument2101(@PathVariable("id") final Long id, @RequestBody Document2101 document2101) {
        Optional<Document2101> s = document2101Service.getDocument2101(id);
        if (s.isPresent()) {
            Document2101 currentDocument2101 = s.get();
            int numeroEcriture = document2101.getNumeroEcriture();
            if (numeroEcriture != 0) {
                currentDocument2101.setNumeroEcriture(numeroEcriture);
            }
            int codePoste = document2101.getCodePoste();
            if (codePoste != 0) {
                currentDocument2101.setCodePoste(codePoste);
            }
            Date dateDebut = document2101.getDateDebut();
            if (dateDebut != null) {
                currentDocument2101.setDateDebut(dateDebut);
            }
            document2101Service.saveDocument2101(currentDocument2101);
            return currentDocument2101;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/document2101/{id}")
    public void deleteDocument2101(@PathVariable ("id") final Long id) {
        document2101Service.deleteDocument2101(id);
    }
}
