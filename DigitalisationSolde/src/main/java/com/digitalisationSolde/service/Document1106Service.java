package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Document1106;
import com.digitalisationSolde.repository.Document1106Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Document1106Service {
    @Autowired
    private Document1106Repository documentRepository;

    public Optional<Document1106> getDocument1106(final Long id){
        return documentRepository.findById(id);
    }

    public Iterable<Document1106> getDocument1106s(){
        return documentRepository.findAll();
    }

    public void deleteDocument1106(final Long id){
        documentRepository.deleteById(id);
    }

    public Document1106 saveDocument1106(Document1106 document){
        return documentRepository.save(document);
    }
}
