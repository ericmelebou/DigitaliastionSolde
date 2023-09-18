package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Document2101;
import com.digitalisationSolde.repository.Document2101Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Document2101Service {
    @Autowired
    private Document2101Repository documentRepository;

    public Optional<Document2101> getDocument2101(final Long id){
        return documentRepository.findById(id);
    }

    public Iterable<Document2101> getDocument2101s(){
        return documentRepository.findAll();
    }

    public void deleteDocument2101(final Long id){
        documentRepository.deleteById(id);
    }

    public Document2101 saveDocument2101(Document2101 document){
        return documentRepository.save(document);
    }
}
