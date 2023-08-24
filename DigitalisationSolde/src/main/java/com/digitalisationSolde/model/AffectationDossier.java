package com.digitalisationSolde.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;


@Entity
public class AffectationDossier {
    @EmbeddedId
    private IdAffectationDossier idAffectationDossier;
    @ManyToOne
    @MapsId("idDossier")
    @JoinColumn(name = "id_dossier")
    private Dossier dossier;
    @ManyToOne
    @MapsId("idAgent")
    @JoinColumn(name = "id_agent")
    private Agent agent;
    private LocalDateTime dateAffectation;
    private Long idAffectateur;
    private Boolean status;

}
