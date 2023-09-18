package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Document1103;
import com.digitalisationSolde.repository.Document1103Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Document1103Service {
    @Autowired
    private Document1103Repository documentRepository;

    public Optional<Document1103> getDocument1103(final Long id){
        return documentRepository.findById(id);
    }

    public Iterable<Document1103> getDocument1103s(){
        return documentRepository.findAll();
    }

    public void deleteDocument1103(final Long id){
        documentRepository.deleteById(id);
    }

    public Document1103 saveDocument1103(Document1103 document){
        return documentRepository.save(document);
    }
}
