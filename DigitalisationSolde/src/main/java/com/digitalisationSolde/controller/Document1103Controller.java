package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Document1103;
import com.digitalisationSolde.service.Document1103Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class Document1103Controller {
    @Autowired
    private Document1103Service document1103Service;

    @PostMapping("/document1103")
    public Document1103 createDocument1103(@RequestBody Document1103 document1103) {
        return document1103Service.saveDocument1103(document1103);
    }

    @GetMapping("/document1103/{id}")
    public Document1103 getDocument1103(@PathVariable("id") final Long id) {
        Optional<Document1103> Document1103 = document1103Service.getDocument1103(id);
        if(Document1103.isPresent()) {
            return Document1103.get();
        } else {
            return null;
        }
    }

    @GetMapping("/document1103s")
    public Iterable<Document1103> getDocument1103s() {

        return document1103Service.getDocument1103s();
    }

    @PutMapping("/document1103/{id}")
    public Document1103 updateDocument1103(@PathVariable("id") final Long id, @RequestBody Document1103 document1103) {
        Optional<Document1103> s = document1103Service.getDocument1103(id);
        if (s.isPresent()) {
            Document1103 currentDocument1103 = s.get();

            int codeServiceAnc = document1103.getCodeServiceAnc();
            if (codeServiceAnc != 0) {
                currentDocument1103.setCodeServiceAnc(codeServiceAnc);
            }
            int codeServiceNv = document1103.getCodeServiceNv();
            if (codeServiceNv != 0) {
                currentDocument1103.setCodeServiceNv(codeServiceNv);
            }

            document1103Service.saveDocument1103(currentDocument1103);
            return currentDocument1103;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/document1103/{id}")
    public void deleteDocument1103(@PathVariable ("id") final Long id) {
        document1103Service.deleteDocument1103(id);
    }
}
