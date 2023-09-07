package com.digitalisationSolde.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jdk.jfr.Timestamp;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@Entity
public class AffectationDossier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "id_dossier")
    private Long idDossier;

    @Column(name = "id_agent")
    private Long idAgent;

    @CreationTimestamp
    private LocalDateTime dateAffectation;
    private Long idAffectateur;
    private Boolean status;

}
