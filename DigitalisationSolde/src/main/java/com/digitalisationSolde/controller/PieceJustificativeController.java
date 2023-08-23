package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.PieceJustificative;
import com.digitalisationSolde.model.TypeDossier;
import com.digitalisationSolde.service.PieceJustificativeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class PieceJustificativeController {
    @Autowired
    private PieceJustificativeService pieceJustificativeService;

    @PostMapping("/pieceJustificative")
    public PieceJustificative createPieceJustificative(@RequestBody PieceJustificative pieceJustificative) {
        return pieceJustificativeService.savePieceJustificative(pieceJustificative);
    }

    @GetMapping("/pieceJustificative/{id}")
    public PieceJustificative getPieceJustificative(@PathVariable("id") final Long id) {
        Optional<PieceJustificative> PieceJustificative = pieceJustificativeService.getPieceJustificative(id);
        if(PieceJustificative.isPresent()) {
            return PieceJustificative.get();
        } else {
            return null;
        }
    }

    @GetMapping("/pieceJustificatives")
    public Iterable<PieceJustificative> getPieceJustificatives() {
        return pieceJustificativeService.getPieceJustificatives();
    }

    @PutMapping("/pieceJustificative/{id}")
    public PieceJustificative updatePieceJustificative(@PathVariable("id") final Long id, @RequestBody PieceJustificative pieceJustificative) {
        Optional<PieceJustificative> r = pieceJustificativeService.getPieceJustificative(id);
        if (r.isPresent()) {
            PieceJustificative currentPieceJustificative = r.get();

            String libelle = pieceJustificative.getLibelle();
            if (libelle != null) {
                currentPieceJustificative.setLibelle(libelle);
            }

            Set<TypeDossier> typeDossiers = pieceJustificative.getTypeDossiers();
            if (typeDossiers != null) {
                currentPieceJustificative.setTypeDossiers(typeDossiers);
            }

            pieceJustificativeService.savePieceJustificative(currentPieceJustificative);
            return currentPieceJustificative;
        } else {
            return null;
        }
    }
    @DeleteMapping ("/pieceJustificative/{id}")
    public void deletePieceJustificative(@PathVariable ("id") final Long id) {
        pieceJustificativeService.deletePieceJustificative(id);
    }
}
