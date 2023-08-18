package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.CategorieDocument;
import com.digitalisationSolde.model.Document;
import com.digitalisationSolde.service.CategorieDocumentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CategorieDocumentController {
    @Autowired
    private CategorieDocumentService categorieDocumentService;

    PasswordEncoder passwordEncoder;
    @PostMapping("/categorieDocument")
    public CategorieDocument createCategorieDocument(@RequestBody CategorieDocument categorieDocument) {
        return categorieDocumentService.saveCategorieDocument(categorieDocument);
    }

    @GetMapping("/categorieDocument/{id}")
    public CategorieDocument getCategorieDocument(@PathVariable("id") final Long id) {
        Optional<CategorieDocument> CategorieDocument = categorieDocumentService.getCategorieDocument(id);
        if(CategorieDocument.isPresent()) {
            return CategorieDocument.get();
        } else {
            return null;
        }
    }

    @GetMapping("/categorieDocuments")
    public Iterable<CategorieDocument> getCategorieDocuments() {

        return categorieDocumentService.getCategorieDocuments();
    }

    @PutMapping("/categorieDocument/{id}")
    public CategorieDocument updateCategorieDocument(@PathVariable("id") final Long id, @RequestBody CategorieDocument categorieDocument) {
        Optional<CategorieDocument> s = categorieDocumentService.getCategorieDocument(id);
        if (s.isPresent()) {
            CategorieDocument currentCategorieDocument = s.get();

            String libelle = categorieDocument.getLibelle();
            if (libelle != null) {
                currentCategorieDocument.setLibelle(libelle);
            }
            List<Document> documents = categorieDocument.getDocuments();
            if (documents != null) {
                currentCategorieDocument.setDocuments(documents);
            }
            categorieDocumentService.saveCategorieDocument(currentCategorieDocument);
            return currentCategorieDocument;
        } else {
            return null;
        }
    }
    @DeleteMapping ("/categorieDocument/{id}")
    public void deleteCategorieDocument(@PathVariable ("id") final Long id) {
        categorieDocumentService.deleteCategorieDocument(id);
    }
}
