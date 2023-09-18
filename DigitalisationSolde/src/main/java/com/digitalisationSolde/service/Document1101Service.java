package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Document1101;
import com.digitalisationSolde.repository.Document1101Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Document1101Service {
    @Autowired
    private Document1101Repository documentRepository;

    public Optional<Document1101> getDocument1101(final Long id){
        return documentRepository.findById(id);
    }

    public Iterable<Document1101> getDocument1101s(){
        return documentRepository.findAll();
    }

    public void deleteDocument1101(final Long id){
        documentRepository.deleteById(id);
    }

    public Document1101 saveDocument1101(Document1101 document){
        return documentRepository.save(document);
    }
}
