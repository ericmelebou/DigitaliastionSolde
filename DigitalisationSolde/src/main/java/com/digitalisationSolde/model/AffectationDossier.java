package com.digitalisationSolde.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class AffectationDossier {
    @EmbeddedId
    private IdAffectationDossier idAffectationDossier;
    @JsonIgnore
    @ManyToOne
    @MapsId("idDossier")
    @JoinColumn(name = "id_dossier")
    private Dossier dossier;
    @JsonIgnore
    @ManyToOne
    @MapsId("idAgent")
    @JoinColumn(name = "id_agent")
    private Agent agent;
    private LocalDateTime dateAffectation;
    private Long idAffectateur;
    private Boolean status;

}
