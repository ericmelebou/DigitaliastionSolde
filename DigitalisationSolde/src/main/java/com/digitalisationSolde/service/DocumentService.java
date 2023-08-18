package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Document;
import com.digitalisationSolde.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DocumentService {
    @Autowired
    private DocumentRepository documentRepository;

    public Optional<Document> getDocument(final Long id){
        return documentRepository.findById(id);
    }

    public Iterable<Document> getDocuments(){
        return documentRepository.findAll();
    }

    public void deleteDocument(final Long id){
        documentRepository.deleteById(id);
    }

    public Document saveDocument(Document document){
        return documentRepository.save(document);
    }
}
