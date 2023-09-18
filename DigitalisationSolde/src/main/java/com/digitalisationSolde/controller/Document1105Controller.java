package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Document1105;
import com.digitalisationSolde.service.Document1105Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class Document1105Controller {
    @Autowired
    private Document1105Service document1105Service;

    @PostMapping("/document1105")
    public Document1105 createDocument1105(@RequestBody Document1105 document1105) {
        return document1105Service.saveDocument1105(document1105);
    }

    @GetMapping("/document1105/{id}")
    public Document1105 getDocument1105(@PathVariable("id") final Long id) {
        Optional<Document1105> Document1105 = document1105Service.getDocument1105(id);
        if(Document1105.isPresent()) {
            return Document1105.get();
        } else {
            return null;
        }
    }

    @GetMapping("/document1105s")
    public Iterable<Document1105> getDocument1105s() {

        return document1105Service.getDocument1105s();
    }

    @PutMapping("/document1105/{id}")
    public Document1105 updateDocument1105(@PathVariable("id") final Long id, @RequestBody Document1105 document1105) {
        Optional<Document1105> s = document1105Service.getDocument1105(id);
        if (s.isPresent()) {
            Document1105 currentDocument1105 = s.get();


            document1105Service.saveDocument1105(currentDocument1105);
            return currentDocument1105;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/document1105/{id}")
    public void deleteDocument1105(@PathVariable ("id") final Long id) {
        document1105Service.deleteDocument1105(id);
    }
}
