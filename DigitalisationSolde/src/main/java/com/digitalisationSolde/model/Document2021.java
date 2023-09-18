package com.digitalisationSolde.model;

import jakarta.persistence.Entity;
import lombok.Data;

import java.util.*;
@Entity
@Data
public class Document2021 extends Document {
   private int codePoste;
   private Date dateDebut;
   private Date dateFin;
   private int montant;
   private int montantGlobal;

}