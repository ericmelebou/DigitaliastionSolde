package com.digitalisationSolde.model;

import jakarta.persistence.Entity;
import lombok.Data;

import java.util.*;

@Entity
@Data
public class Document1101 extends Document {
   private int codeTitre;
   private String nom;
   private int codeSexe;
   private int codeSituationMatrimoniale;
   private int codeStatut;
   private int nombreEnfantAf;
   private int codeSalaireUnique;
   private int categorieImpIrpp;

}