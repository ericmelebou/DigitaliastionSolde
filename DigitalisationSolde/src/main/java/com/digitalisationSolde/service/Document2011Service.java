package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Document2011;
import com.digitalisationSolde.repository.Document2011Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Document2011Service {
    @Autowired
    private Document2011Repository documentRepository;

    public Optional<Document2011> getDocument2011(final Long id){
        return documentRepository.findById(id);
    }

    public Iterable<Document2011> getDocument2011s(){
        return documentRepository.findAll();
    }

    public void deleteDocument2011(final Long id){
        documentRepository.deleteById(id);
    }

    public Document2011 saveDocument2011(Document2011 document){
        return documentRepository.save(document);
    }
}
