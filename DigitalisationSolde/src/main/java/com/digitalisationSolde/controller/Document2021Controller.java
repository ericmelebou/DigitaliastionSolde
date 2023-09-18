package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Document2021;
import com.digitalisationSolde.service.Document2021Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class Document2021Controller {
    @Autowired
    private Document2021Service document2021Service;

    @PostMapping("/document2021")
    public Document2021 createDocument2021(@RequestBody Document2021 document2021) {
        return document2021Service.saveDocument2021(document2021);
    }

    @GetMapping("/document2021/{id}")
    public Document2021 getDocument2021(@PathVariable("id") final Long id) {
        Optional<Document2021> Document2021 = document2021Service.getDocument2021(id);
        if(Document2021.isPresent()) {
            return Document2021.get();
        } else {
            return null;
        }
    }

    @GetMapping("/document2021s")
    public Iterable<Document2021> getDocument2021s() {

        return document2021Service.getDocument2021s();
    }

    @PutMapping("/document2021/{id}")
    public Document2021 updateDocument2021(@PathVariable("id") final Long id, @RequestBody Document2021 document2021) {
        Optional<Document2021> s = document2021Service.getDocument2021(id);
        if (s.isPresent()) {
            Document2021 currentDocument2021 = s.get();


            document2021Service.saveDocument2021(currentDocument2021);
            return currentDocument2021;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/document2021/{id}")
    public void deleteDocument2021(@PathVariable ("id") final Long id) {
        document2021Service.deleteDocument2021(id);
    }
}
