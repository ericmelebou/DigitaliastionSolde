package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Document1102;
import com.digitalisationSolde.repository.Document1102Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Document1102Service {
    @Autowired
    private Document1102Repository documentRepository;

    public Optional<Document1102> getDocument1102(final Long id){
        return documentRepository.findById(id);
    }

    public Iterable<Document1102> getDocument1102s(){
        return documentRepository.findAll();
    }

    public void deleteDocument1102(final Long id){
        documentRepository.deleteById(id);
    }

    public Document1102 saveDocument1102(Document1102 document){
        return documentRepository.save(document);
    }
}
