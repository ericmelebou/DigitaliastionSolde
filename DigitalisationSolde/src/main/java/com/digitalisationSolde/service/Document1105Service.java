package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Document1105;
import com.digitalisationSolde.repository.Document1105Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Document1105Service {
    @Autowired
    private Document1105Repository documentRepository;

    public Optional<Document1105> getDocument1105(final Long id){
        return documentRepository.findById(id);
    }

    public Iterable<Document1105> getDocument1105s(){
        return documentRepository.findAll();
    }

    public void deleteDocument1105(final Long id){
        documentRepository.deleteById(id);
    }

    public Document1105 saveDocument1105(Document1105 document){
        return documentRepository.save(document);
    }
}
