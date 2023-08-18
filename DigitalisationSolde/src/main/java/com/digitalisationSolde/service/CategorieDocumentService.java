package com.digitalisationSolde.service;

import com.digitalisationSolde.model.CategorieDocument;
import com.digitalisationSolde.repository.CategorieDocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategorieDocumentService {
    @Autowired
    private CategorieDocumentRepository categorieDocumentRepository;

    public Optional<CategorieDocument> getCategorieDocument(final Long id){
        return categorieDocumentRepository.findById(id);
    }

    public Iterable<CategorieDocument> getCategorieDocuments(){
        return categorieDocumentRepository.findAll();
    }

    public void deleteCategorieDocument(final Long id){
        categorieDocumentRepository.deleteById(id);
    }

    public CategorieDocument saveCategorieDocument(CategorieDocument categorieDocument){
        return categorieDocumentRepository.save(categorieDocument);
    }
}
