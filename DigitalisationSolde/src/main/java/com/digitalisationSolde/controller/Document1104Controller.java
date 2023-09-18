package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Document1104;
import com.digitalisationSolde.service.Document1104Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class Document1104Controller {
    @Autowired
    private Document1104Service document1104Service;

    @PostMapping("/document1104")
    public Document1104 createDocument1104(@RequestBody Document1104 document1104) {
        return document1104Service.saveDocument1104(document1104);
    }

    @GetMapping("/document1104/{id}")
    public Document1104 getDocument1104(@PathVariable("id") final Long id) {
        Optional<Document1104> Document1104 = document1104Service.getDocument1104(id);
        if(Document1104.isPresent()) {
            return Document1104.get();
        } else {
            return null;
        }
    }

    @GetMapping("/document1104s")
    public Iterable<Document1104> getDocument1104s() {

        return document1104Service.getDocument1104s();
    }

    @PutMapping("/document1104/{id}")
    public Document1104 updateDocument1104(@PathVariable("id") final Long id, @RequestBody Document1104 document1104) {
        Optional<Document1104> s = document1104Service.getDocument1104(id);
        if (s.isPresent()) {
            Document1104 currentDocument1104 = s.get();


            document1104Service.saveDocument1104(currentDocument1104);
            return currentDocument1104;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/document1104/{id}")
    public void deleteDocument1104(@PathVariable ("id") final Long id) {
        document1104Service.deleteDocument1104(id);
    }
}
