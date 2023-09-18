package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Document1109;
import com.digitalisationSolde.repository.Document1109Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Document1109Service {
    @Autowired
    private Document1109Repository documentRepository;

    public Optional<Document1109> getDocument1109(final Long id){
        return documentRepository.findById(id);
    }

    public Iterable<Document1109> getDocument1109s(){
        return documentRepository.findAll();
    }

    public void deleteDocument1109(final Long id){
        documentRepository.deleteById(id);
    }

    public Document1109 saveDocument1109(Document1109 document){
        return documentRepository.save(document);
    }
}
