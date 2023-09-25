package com.digitalisationSolde.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Getter
@Setter
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
    @CreationTimestamp
    private LocalDateTime dateDepot;
    @Column(name="nombre_agents_concernes")
    private int nombreAgentsConcernes;
    @Column(name="status")
    private String status;

    @Column(name="url_piece")
    private String urlPiece;
    @Column(name="url_demande")
    private String urlDemande;
    @JsonIgnore
    @Transient
    private MultipartFile demandeFile;
    @JsonIgnore
    @Transient
    private MultipartFile piecesFile;
    @Column(name="origine")
    private String origine;

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "id_type_dossier")
    private TypeDossier typeDossier;
    @Column(name = "id_agent")
    private Long idAgent;

    // Méthode pour enregistrer les fichiers dans le dossier
    public void saveFiles(String uploadDir) throws IOException {
        if (demandeFile != null) {
            String demandeFilename = StringUtils.cleanPath(demandeFile.getOriginalFilename());
            Path demandeFilePath = Paths.get(uploadDir, demandeFilename);
            Files.copy(demandeFile.getInputStream(), demandeFilePath, StandardCopyOption.REPLACE_EXISTING);
            urlDemande = demandeFilename;
        }

        if (piecesFile != null) {
            String fichierFilename = StringUtils.cleanPath(piecesFile.getOriginalFilename());
            Path fichierFilePath = Paths.get(uploadDir, fichierFilename);
            Files.copy(piecesFile.getInputStream(), fichierFilePath, StandardCopyOption.REPLACE_EXISTING);
            urlPiece = fichierFilename;
        }
    }
    public void updateFiles(String uploadDir, MultipartFile newDemandeFile, MultipartFile newPiecesFile) throws IOException {
        if (newDemandeFile != null) {
            // Supprimez l'ancien fichier de demande s'il existe
            if (urlDemande != null) {
                Path demandeFilePath = Paths.get(uploadDir, urlDemande);
                Files.deleteIfExists(demandeFilePath);
            }

            // Enregistrez le nouveau fichier de demande
            String demandeFilename = StringUtils.cleanPath(newDemandeFile.getOriginalFilename());
            Path demandeFilePath = Paths.get(uploadDir, demandeFilename);
            Files.copy(newDemandeFile.getInputStream(), demandeFilePath, StandardCopyOption.REPLACE_EXISTING);
            urlDemande = demandeFilename;
        }

        if (newPiecesFile != null) {
            // Supprimez l'ancien fichier de pièces s'il existe
            if (urlPiece != null) {
                Path fichierFilePath = Paths.get(uploadDir, urlPiece);
                Files.deleteIfExists(fichierFilePath);
            }

            // Enregistrez le nouveau fichier de pièces
            String fichierFilename = StringUtils.cleanPath(newPiecesFile.getOriginalFilename());
            Path fichierFilePath = Paths.get(uploadDir, fichierFilename);
            Files.copy(newPiecesFile.getInputStream(), fichierFilePath, StandardCopyOption.REPLACE_EXISTING);
            urlPiece = fichierFilename;
        }
    }

}
