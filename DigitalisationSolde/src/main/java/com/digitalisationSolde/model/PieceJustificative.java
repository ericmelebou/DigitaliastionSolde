package com.digitalisationSolde.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "pieces_justificatives")
public class PieceJustificative {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="libelle")
    private String libelle;

    @ManyToMany(mappedBy = "piecesJustificatives", fetch = FetchType.LAZY)
    @JsonBackReference
    private Set<TypeDossier> typeDossiers;

    public PieceJustificative(String libelle) {
        this.libelle = libelle;
    }
}
