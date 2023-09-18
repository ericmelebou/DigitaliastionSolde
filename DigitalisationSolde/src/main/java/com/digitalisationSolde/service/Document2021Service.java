package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Document2021;
import com.digitalisationSolde.repository.Document2021Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Document2021Service {
    @Autowired
    private Document2021Repository documentRepository;

    public Optional<Document2021> getDocument2021(final Long id){
        return documentRepository.findById(id);
    }

    public Iterable<Document2021> getDocument2021s(){
        return documentRepository.findAll();
    }

    public void deleteDocument2021(final Long id){
        documentRepository.deleteById(id);
    }

    public Document2021 saveDocument2021(Document2021 document){
        return documentRepository.save(document);
    }
}
