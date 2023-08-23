package com.digitalisationSolde.service;

import com.digitalisationSolde.model.PieceJustificative;
import com.digitalisationSolde.repository.PieceJustificativeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PieceJustificativeService {
    @Autowired
    private PieceJustificativeRepository pieceJustificativeRepository;

    public Optional<PieceJustificative> getPieceJustificative(final Long id){
        return pieceJustificativeRepository.findById(id);
    }

    public Iterable<PieceJustificative> getPieceJustificatives(){
        return pieceJustificativeRepository.findAll();
    }

    public void deletePieceJustificative(final Long id){
        pieceJustificativeRepository.deleteById(id);
    }

    public PieceJustificative savePieceJustificative(PieceJustificative pieceJustificative){
        return pieceJustificativeRepository.save(pieceJustificative);
    }


}
