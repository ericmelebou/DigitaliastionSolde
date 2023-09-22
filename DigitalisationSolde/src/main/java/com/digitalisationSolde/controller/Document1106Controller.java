package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Document1106;
import com.digitalisationSolde.service.Document1106Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class Document1106Controller {
    @Autowired
    private Document1106Service document1106Service;

    @PostMapping("/document1106")
    public Document1106 createDocument1106(@RequestBody Document1106 document1106) {
        return document1106Service.saveDocument1106(document1106);
    }

    @GetMapping("/document1106/{id}")
    public Document1106 getDocument1106(@PathVariable("id") final Long id) {
        Optional<Document1106> Document1106 = document1106Service.getDocument1106(id);
        if(Document1106.isPresent()) {
            return Document1106.get();
        } else {
            return null;
        }
    }

    @GetMapping("/document1106s")
    public Iterable<Document1106> getDocument1106s() {

        return document1106Service.getDocument1106s();
    }

    @PutMapping("/document1106/{id}")
    public Document1106 updateDocument1106(@PathVariable("id") final Long id, @RequestBody Document1106 document1106) {
        Optional<Document1106> s = document1106Service.getDocument1106(id);
        if (s.isPresent()) {
            Document1106 currentDocument1106 = s.get();

            int codePositionSolde = document1106.getCodePositionSolde();
            if (codePositionSolde != 0) {
                currentDocument1106.setCodePositionSolde(codePositionSolde);
            }
            document1106Service.saveDocument1106(currentDocument1106);
            return currentDocument1106;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/document1106/{id}")
    public void deleteDocument1106(@PathVariable ("id") final Long id) {
        document1106Service.deleteDocument1106(id);
    }
}
