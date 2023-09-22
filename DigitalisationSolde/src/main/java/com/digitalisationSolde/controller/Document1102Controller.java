package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Document1102;
import com.digitalisationSolde.service.Document1102Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class Document1102Controller {
    @Autowired
    private Document1102Service document1102Service;

    @PostMapping("/document1102")
    public Document1102 createDocument1102(@RequestBody Document1102 document1102) {
        return document1102Service.saveDocument1102(document1102);
    }

    @GetMapping("/document1102/{id}")
    public Document1102 getDocument1102(@PathVariable("id") final Long id) {
        Optional<Document1102> Document1102 = document1102Service.getDocument1102(id);
        if(Document1102.isPresent()) {
            return Document1102.get();
        } else {
            return null;
        }
    }

    @GetMapping("/document1102s")
    public Iterable<Document1102> getDocument1102s() {

        return document1102Service.getDocument1102s();
    }

    @PutMapping("/document1102/{id}")
    public Document1102 updateDocument1102(@PathVariable("id") final Long id, @RequestBody Document1102 document1102) {
        Optional<Document1102> s = document1102Service.getDocument1102(id);
        if (s.isPresent()) {
            Document1102 currentDocument1102 = s.get();
            String codeCategorieAnc = document1102.getCodeCategorieAnc();
            if (codeCategorieAnc != null) {
                currentDocument1102.setCodeCategorieAnc(codeCategorieAnc);
            }
            String codeEchelleCorpsAnc = document1102.getCodeEchelleCorpsAnc();
            if (codeEchelleCorpsAnc != null) {
                currentDocument1102.setCodeEchelleCorpsAnc(codeEchelleCorpsAnc);
            }
            int codeGradeAnc = document1102.getCodeGradeAnc();
            if (codeGradeAnc != 0) {
                currentDocument1102.setCodeGradeAnc(codeGradeAnc);
            }
            int codeIndiceAnc = document1102.getCodeIndiceAnc();
            if (codeIndiceAnc != 0) {
                currentDocument1102.setCodeIndiceAnc(codeIndiceAnc);
            }
            String codeCategorieNv = document1102.getCodeCategorieNv();
            if (codeCategorieNv != null) {
                currentDocument1102.setCodeCategorieNv(codeCategorieNv);
            }
            String codeEchelleCorpsNv = document1102.getCodeEchelleCorpsNv();
            if (codeEchelleCorpsNv != null) {
                currentDocument1102.setCodeEchelleCorpsNv(codeEchelleCorpsNv);
            }
            int codeGradeNv = document1102.getCodeGradeNv();
            if (codeGradeNv != 0) {
                currentDocument1102.setCodeGradeNv(codeGradeNv);
            }
            int codeIndiceNv = document1102.getCodeIndiceNv();
            if (codeIndiceNv != 0) {
                currentDocument1102.setCodeIndiceNv(codeIndiceNv);
            }

            document1102Service.saveDocument1102(currentDocument1102);
            return currentDocument1102;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/document1102/{id}")
    public void deleteDocument1102(@PathVariable ("id") final Long id) {
        document1102Service.deleteDocument1102(id);
    }
}
