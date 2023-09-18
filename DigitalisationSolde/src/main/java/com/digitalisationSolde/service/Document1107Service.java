package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Document1107;
import com.digitalisationSolde.repository.Document1107Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Document1107Service {
    @Autowired
    private Document1107Repository documentRepository;

    public Optional<Document1107> getDocument1107(final Long id){
        return documentRepository.findById(id);
    }

    public Iterable<Document1107> getDocument1107s(){
        return documentRepository.findAll();
    }

    public void deleteDocument1107(final Long id){
        documentRepository.deleteById(id);
    }

    public Document1107 saveDocument1107(Document1107 document){
        return documentRepository.save(document);
    }
}
