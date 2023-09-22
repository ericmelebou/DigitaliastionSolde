package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Document;
import com.digitalisationSolde.model.Document1101;
import com.digitalisationSolde.service.Document1101Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class Document1101Controller {
    @Autowired
    private Document1101Service document1101Service;

    @PostMapping("/document1101")
    public Document1101 createDocument1101(@RequestBody Document1101 document1101) {
        return document1101Service.saveDocument1101(document1101);
    }

    @GetMapping("/document1101/{id}")
    public Document1101 getDocument1101(@PathVariable("id") final Long id) {
        Optional<Document1101> Document1101 = document1101Service.getDocument1101(id);
        if(Document1101.isPresent()) {
            return Document1101.get();
        } else {
            return null;
        }
    }

    @GetMapping("/document1101s")
    public Iterable<Document1101> getDocument1101s() {

        return document1101Service.getDocument1101s();
    }

    @PutMapping("/document1101/{id}")
    public Document1101 updateDocument1101(@PathVariable("id") final Long id, @RequestBody Document1101 document1101) {
        Optional<Document1101> s = document1101Service.getDocument1101(id);
        if (s.isPresent()) {
            Document1101 currentDocument1101 = s.get();
            String nom = document1101.getNom();
            if (nom != null) {
                currentDocument1101.setNom(nom);
            }
            int codeSexe = document1101.getCodeSexe();
            if (codeSexe != 0) {
                currentDocument1101.setCodeSexe(codeSexe);
            }
            int codeTitre = document1101.getCodeTitre();
            if (codeTitre != 0) {
                currentDocument1101.setCodeTitre(codeTitre);
            }
            int codeSituationMatrimoniale = document1101.getCodeSituationMatrimoniale();
            if (codeSituationMatrimoniale != 0) {
                currentDocument1101.setCodeSituationMatrimoniale(codeSituationMatrimoniale);
            }
            int codeStatut = document1101.getCodeStatut();
            if (codeStatut != 0) {
                currentDocument1101.setCodeStatut(codeStatut);
            }
            int nombreEnfantAf = document1101.getNombreEnfantAf();
            if (nombreEnfantAf != 0) {
                currentDocument1101.setNombreEnfantAf(nombreEnfantAf);
            }
            int codeSalaireUnique = document1101.getCodeSalaireUnique();
            if (codeSalaireUnique != 0) {
                currentDocument1101.setCodeSalaireUnique(codeSalaireUnique);
            }
            int categorieImpIrpp = document1101.getCategorieImpIrpp();
            if (categorieImpIrpp != 0) {
                currentDocument1101.setCategorieImpIrpp(categorieImpIrpp);
            }
            document1101Service.saveDocument1101(currentDocument1101);
            return currentDocument1101;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/document1101/{id}")
    public void deleteDocument1101(@PathVariable ("id") final Long id) {
        document1101Service.deleteDocument1101(id);
    }
}
