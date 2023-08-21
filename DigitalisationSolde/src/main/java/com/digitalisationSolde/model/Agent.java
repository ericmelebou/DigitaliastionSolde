package com.digitalisationSolde.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "agents")
public class Agent implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", updatable = false, nullable = false)
    private Long id;
    @Column(name="nom")
    private String nom;
    @Column(name="prenom")
    private String prenom;
    @Column(name="email", unique = true, nullable = false)
    private String email;
    @Column(name="password", nullable = false)
    private String password;
    @CreationTimestamp
    private Date creationDate;
    @UpdateTimestamp
    private Date updatedDate;
    private Boolean activated;
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "utilisateur_roles",
            joinColumns = {@JoinColumn(name = "id_agent", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "id_role", referencedColumnName = "id")})
    @JsonManagedReference
    private Set<Role> roles;
    @OneToMany(targetEntity = Dossier.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_agent", referencedColumnName = "id")
    private List<Dossier> dossiers;
    private String resetPasswordToken;
    private int deleted;
    @OneToMany(mappedBy = "agent", cascade = CascadeType.ALL)
    private Collection<AffectationDossier> affectationDossiers;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<GrantedAuthority> authorities = new HashSet<>();
        if(roles == null) {
            authorities.add(new SimpleGrantedAuthority("USER"));
            return authorities;
        } else {
            for (Role role : roles) {
                authorities.add(new SimpleGrantedAuthority(""+role.getNom()));
            }
        }

        return authorities;
    }

    public Agent(String nom, String prenom, String email, String password, Boolean activated, Set<Role> role) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.activated = activated;
        this.roles = role;
    }

    public Agent(String email, String password, Boolean activated) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.activated = activated;
    }

    public Agent(String email, String password, Boolean activated, Set<Role> role) {
        this.email = email;
        this.password = password;
        this.activated = activated;
        this.roles = role;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
