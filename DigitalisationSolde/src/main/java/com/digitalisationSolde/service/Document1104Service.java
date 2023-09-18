package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Document1104;
import com.digitalisationSolde.repository.Document1104Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Document1104Service {
    @Autowired
    private Document1104Repository documentRepository;

    public Optional<Document1104> getDocument1104(final Long id){
        return documentRepository.findById(id);
    }

    public Iterable<Document1104> getDocument1104s(){
        return documentRepository.findAll();
    }

    public void deleteDocument1104(final Long id){
        documentRepository.deleteById(id);
    }

    public Document1104 saveDocument1104(Document1104 document){
        return documentRepository.save(document);
    }
}
