package com.digitalisationSolde.model;

import jakarta.persistence.Entity;
import lombok.Data;

import java.util.*;
@Entity
@Data
public class Document3001 extends Document {
   private int tauxRappel;
   private int pointsRappel;
   private Date dateDebutRappel;
   private Date dateFinRappel;
   private int nombreJoursRappel;
   private int codePoste;
   private int montant;

}