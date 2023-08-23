package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Agent;
import com.digitalisationSolde.model.Structure;
import com.digitalisationSolde.service.StructureService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class StructureController {
    @Autowired
    private StructureService structureService;

    @PostMapping("/structure")
    public Structure createStructure(@RequestBody Structure structure) {
        return structureService.saveStructure(structure);
    }

    @GetMapping("/structure/{id}")
    public Structure getStructure(@PathVariable("id") final Long id) {
        Optional<Structure> Structure = structureService.getStructure(id);
        if(Structure.isPresent()) {
            return Structure.get();
        } else {
            return null;
        }
    }

    @GetMapping("/structures")
    public Iterable<Structure> getStructures() {

        return structureService.getStructures();
    }

    @PutMapping("/structure/{id}")
    public Structure updateStructure(@PathVariable("id") final Long id, @RequestBody Structure structure) {
        Optional<Structure> s = structureService.getStructure(id);
        if (s.isPresent()) {
            Structure currentStructure = s.get();

            String nom = structure.getNom();
            if (nom != null) {
                currentStructure.setNom(nom);
            }
            List<Agent> agents = structure.getAgents();
            if (agents != null) {
                currentStructure.setAgents(agents);
            }
            structureService.saveStructure(currentStructure);
            return currentStructure;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/structure/{id}")
    public void deleteStructure(@PathVariable ("id") final Long id) {
        structureService.deleteStructure(id);
    }
}
