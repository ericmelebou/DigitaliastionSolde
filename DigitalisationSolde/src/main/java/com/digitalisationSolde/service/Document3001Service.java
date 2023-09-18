package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Document3001;
import com.digitalisationSolde.repository.Document3001Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Document3001Service {
    @Autowired
    private Document3001Repository documentRepository;

    public Optional<Document3001> getDocument3001(final Long id){
        return documentRepository.findById(id);
    }

    public Iterable<Document3001> getDocument3001s(){
        return documentRepository.findAll();
    }

    public void deleteDocument3001(final Long id){
        documentRepository.deleteById(id);
    }

    public Document3001 saveDocument3001(Document3001 document){
        return documentRepository.save(document);
    }
}
