package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Document1107;
import com.digitalisationSolde.service.Document1107Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class Document1107Controller {
    @Autowired
    private Document1107Service document1107Service;

    @PostMapping("/document1107")
    public Document1107 createDocument1107(@RequestBody Document1107 document1107) {
        return document1107Service.saveDocument1107(document1107);
    }

    @GetMapping("/document1107/{id}")
    public Document1107 getDocument1107(@PathVariable("id") final Long id) {
        Optional<Document1107> Document1107 = document1107Service.getDocument1107(id);
        if(Document1107.isPresent()) {
            return Document1107.get();
        } else {
            return null;
        }
    }

    @GetMapping("/document1107s")
    public Iterable<Document1107> getDocument1107s() {

        return document1107Service.getDocument1107s();
    }

    @PutMapping("/document1107/{id}")
    public Document1107 updateDocument1107(@PathVariable("id") final Long id, @RequestBody Document1107 document1107) {
        Optional<Document1107> s = document1107Service.getDocument1107(id);
        if (s.isPresent()) {
            Document1107 currentDocument1107 = s.get();
            int codeModeReglement = document1107.getCodeModeReglement();
            if (codeModeReglement != 0) {
                currentDocument1107.setCodeModeReglement(codeModeReglement);
            }
            int numeroCompteEnBanque = document1107.getNumeroCompteEnBanque();
            if (numeroCompteEnBanque != 0) {
                currentDocument1107.setNumeroCompteEnBanque(numeroCompteEnBanque);
            }
            int codeAgence = document1107.getCodeAgence();
            if (codeAgence != 0) {
                currentDocument1107.setCodeAgence(codeAgence);
            }
            int cleRib = document1107.getCleRib();
            if (cleRib != 0) {
                currentDocument1107.setCleRib(cleRib);
            }
            document1107Service.saveDocument1107(currentDocument1107);
            return currentDocument1107;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/document1107/{id}")
    public void deleteDocument1107(@PathVariable ("id") final Long id) {
        document1107Service.deleteDocument1107(id);
    }
}
