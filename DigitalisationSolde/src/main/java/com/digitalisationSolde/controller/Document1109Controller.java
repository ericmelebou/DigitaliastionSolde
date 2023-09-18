package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Document1109;
import com.digitalisationSolde.service.Document1109Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class Document1109Controller {
    @Autowired
    private Document1109Service document1109Service;

    @PostMapping("/document1109")
    public Document1109 createDocument1109(@RequestBody Document1109 document1109) {
        return document1109Service.saveDocument1109(document1109);
    }

    @GetMapping("/document1109/{id}")
    public Document1109 getDocument1109(@PathVariable("id") final Long id) {
        Optional<Document1109> Document1109 = document1109Service.getDocument1109(id);
        if(Document1109.isPresent()) {
            return Document1109.get();
        } else {
            return null;
        }
    }

    @GetMapping("/document1109s")
    public Iterable<Document1109> getDocument1109s() {

        return document1109Service.getDocument1109s();
    }

    @PutMapping("/document1109/{id}")
    public Document1109 updateDocument1109(@PathVariable("id") final Long id, @RequestBody Document1109 document1109) {
        Optional<Document1109> s = document1109Service.getDocument1109(id);
        if (s.isPresent()) {
            Document1109 currentDocument1109 = s.get();


            document1109Service.saveDocument1109(currentDocument1109);
            return currentDocument1109;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/document1109/{id}")
    public void deleteDocument1109(@PathVariable ("id") final Long id) {
        document1109Service.deleteDocument1109(id);
    }
}
