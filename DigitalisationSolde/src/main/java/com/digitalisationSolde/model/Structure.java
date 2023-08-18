package com.digitalisationSolde.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "structures")
public class Structure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", updatable = false, nullable = false)
    private Long id;
    @Column(name="nom")
    private String nom;
    @OneToMany(targetEntity = Agent.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_struture", referencedColumnName = "id")
    private List<Agent> agents;
}
