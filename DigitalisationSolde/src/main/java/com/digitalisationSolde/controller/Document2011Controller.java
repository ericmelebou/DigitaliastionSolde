package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Document2011;
import com.digitalisationSolde.service.Document2011Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class Document2011Controller {
    @Autowired
    private Document2011Service document2011Service;

    @PostMapping("/document2011")
    public Document2011 createDocument2011(@RequestBody Document2011 document2011) {
        return document2011Service.saveDocument2011(document2011);
    }

    @GetMapping("/document2011/{id}")
    public Document2011 getDocument2011(@PathVariable("id") final Long id) {
        Optional<Document2011> Document2011 = document2011Service.getDocument2011(id);
        if(Document2011.isPresent()) {
            return Document2011.get();
        } else {
            return null;
        }
    }

    @GetMapping("/document2011s")
    public Iterable<Document2011> getDocument2011s() {

        return document2011Service.getDocument2011s();
    }

    @PutMapping("/document2011/{id}")
    public Document2011 updateDocument2011(@PathVariable("id") final Long id, @RequestBody Document2011 document2011) {
        Optional<Document2011> s = document2011Service.getDocument2011(id);
        if (s.isPresent()) {
            Document2011 currentDocument2011 = s.get();


            document2011Service.saveDocument2011(currentDocument2011);
            return currentDocument2011;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/document2011/{id}")
    public void deleteDocument2011(@PathVariable ("id") final Long id) {
        document2011Service.deleteDocument2011(id);
    }
}
