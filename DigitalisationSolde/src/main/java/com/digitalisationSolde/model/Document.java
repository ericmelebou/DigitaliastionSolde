package com.digitalisationSolde.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "documents")
public class Document {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name="id", updatable = false, nullable = false)
   private int id;
   @CreationTimestamp
   private Date dateSaisie;
   private Date dateControle;
   private Date dateValidation;
   @UpdateTimestamp
   private Date dateModification;
   private String matricule;
   private String userSaisie;
   private String userControle;
   private String userValidation;
   @Column(name="status")
   private String status;
   @Column(name = "id_dossier")
   private Long idDossier;
}