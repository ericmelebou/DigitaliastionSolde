package com.digitalisationSolde.model;


import jakarta.persistence.*;

import java.util.*;

@Entity
public class Document {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name="id", updatable = false, nullable = false)
   private int id;
   private Date dateSaisie;
   private Date dateControle;
   private Date dateValidation;
   private Date dateModification;
   private String matricule;
   private String userSaisie;
   private String userControle;
   private String userValidation;

}