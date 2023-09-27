package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Document;
import com.digitalisationSolde.service.DocumentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class DocumentController {
    @Autowired
    private DocumentService documentService;

    @PostMapping("/document")
    public Document createDocument(@RequestBody Document document) {
        return documentService.saveDocument(document);
    }

    @GetMapping("/document/{id}")
    public Document getDocument(@PathVariable("id") final Long id) {
        Optional<Document> Document = documentService.getDocument(id);
        if(Document.isPresent()) {
            return Document.get();
        } else {
            return null;
        }
    }

    @GetMapping("/documents")
    public Iterable<Document> getDocuments() {

        return documentService.getDocuments();
    }

    @PutMapping("/document/{id}")
    public Document updateDocument(@PathVariable("id") final Long id, @RequestBody Document document) {
        Optional<Document> s = documentService.getDocument(id);
        if (s.isPresent()) {
            Document currentDocument = s.get();
            String status = document.getStatus();
            if (status != null) {
                currentDocument.setStatus(status);
            }
            String motifRejet = document.getMotifRejet();
            if (motifRejet != null) {
                currentDocument.setMotifRejet(motifRejet);
            }
            documentService.saveDocument(currentDocument);
            return currentDocument;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/document/{id}")
    public void deleteDocument(@PathVariable ("id") final Long id) {
        documentService.deleteDocument(id);
    }
}
