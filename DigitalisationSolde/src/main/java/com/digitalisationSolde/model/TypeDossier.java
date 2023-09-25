package com.digitalisationSolde.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "types_dossiers")
public class TypeDossier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", updatable = false, nullable = false)
    private Long id;
    @Column(name="libelle")
    private String libelle;

    @Column(name="informations")
    private String informations;
    @JsonBackReference
    @OneToMany(mappedBy = "typeDossier")
    private Set<Dossier> dossiers;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "type_dossier_pieces",
            joinColumns = {@JoinColumn(name = "id_type_dossier", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "id_piece_justificative", referencedColumnName = "id")})
    @JsonManagedReference
    private Set<PieceJustificative> piecesJustificatives;

    public TypeDossier(String libelle, Set<PieceJustificative> pieceJustificatives) {
        this.libelle = libelle;
        this.piecesJustificatives = pieceJustificatives;
    }
}
