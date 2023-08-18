package com.digitalisationSolde.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "dossiers")
public class Dossier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", updatable = false, nullable = false)
    private Long id;
    @Column(name="code_identification")
    private String codeIdentification;
    @Column(name="nombre_piece")
    private int nombrePiece;
    @Column(name="date_depot")
    private LocalDateTime dateDepot;
    @Column(name="type")
    private String type;
    @Column(name="nombre_agents_concernes")
    private String nombreAgentsConcernes;
    @Column(name="status")
    private String status;
    @Column(name="url_piece")
    private String urlPiece;
    @Column(name="url_demande")
    private String urlDemande;
    @Column(name="origine")
    private String origine;
    @OneToMany(targetEntity = Document.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_dossier", referencedColumnName = "id")
    private List<Document> documents;
    @OneToMany(mappedBy = "dossier", cascade = CascadeType.ALL)
    //@JsonIgnore
    private Collection<AffectationDossier> affectationDossiers;
}
