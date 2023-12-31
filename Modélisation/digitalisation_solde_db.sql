PGDMP     4                    {            bd_digitalisation_solde    15.2    15.2 S    c           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            d           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            e           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            f           1262    93040    bd_digitalisation_solde    DATABASE     �   CREATE DATABASE bd_digitalisation_solde WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'French_France.1252';
 '   DROP DATABASE bd_digitalisation_solde;
                postgres    false                        3079    118347 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            g           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    119281    affectation_dossier    TABLE     �   CREATE TABLE public.affectation_dossier (
    id integer NOT NULL,
    date_affectation timestamp(6) without time zone,
    id_affectateur bigint,
    id_agent bigint,
    id_dossier bigint,
    status boolean
);
 '   DROP TABLE public.affectation_dossier;
       public         heap    postgres    false            �            1259    119280    affectation_dossier_id_seq    SEQUENCE     �   CREATE SEQUENCE public.affectation_dossier_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.affectation_dossier_id_seq;
       public          postgres    false    216            h           0    0    affectation_dossier_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.affectation_dossier_id_seq OWNED BY public.affectation_dossier.id;
          public          postgres    false    215            �            1259    119287    agent_roles    TABLE     _   CREATE TABLE public.agent_roles (
    id_agent bigint NOT NULL,
    id_role bigint NOT NULL
);
    DROP TABLE public.agent_roles;
       public         heap    postgres    false            �            1259    119293    agents    TABLE     �  CREATE TABLE public.agents (
    id bigint NOT NULL,
    activated boolean,
    creation_date timestamp(6) without time zone,
    deleted integer NOT NULL,
    email character varying(255) NOT NULL,
    nom character varying(255),
    password character varying(255) NOT NULL,
    prenom character varying(255),
    reset_password_token character varying(255),
    updated_date timestamp(6) without time zone,
    id_struture bigint
);
    DROP TABLE public.agents;
       public         heap    postgres    false            �            1259    119292    agents_id_seq    SEQUENCE     v   CREATE SEQUENCE public.agents_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.agents_id_seq;
       public          postgres    false    219            i           0    0    agents_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.agents_id_seq OWNED BY public.agents.id;
          public          postgres    false    218            �            1259    119302    categories_documents    TABLE     i   CREATE TABLE public.categories_documents (
    id bigint NOT NULL,
    libelle character varying(255)
);
 (   DROP TABLE public.categories_documents;
       public         heap    postgres    false            �            1259    119301    categories_documents_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_documents_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.categories_documents_id_seq;
       public          postgres    false    221            j           0    0    categories_documents_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.categories_documents_id_seq OWNED BY public.categories_documents.id;
          public          postgres    false    220            �            1259    127614 	   documents    TABLE     E  CREATE TABLE public.documents (
    dtype character varying(31) NOT NULL,
    id integer NOT NULL,
    date_controle timestamp(6) without time zone,
    date_modification timestamp(6) without time zone,
    date_saisie timestamp(6) without time zone,
    date_validation timestamp(6) without time zone,
    id_dossier bigint,
    matricule character varying(255),
    user_controle character varying(255),
    user_saisie character varying(255),
    user_validation character varying(255),
    categorie_imp_irpp integer,
    code_salaire_unique integer,
    code_sexe integer,
    code_situation_matrimoniale integer,
    code_statut integer,
    code_titre integer,
    nom character varying(255),
    nombre_enfant_af integer,
    code_categorie_anc character varying(255),
    code_categorie_nv character varying(255),
    code_echelle_corps_anc character varying(255),
    code_echelle_corps_nv character varying(255),
    code_grade_anc integer,
    code_grade_nv integer,
    code_indice_anc integer,
    code_indice_nv integer,
    code_service_anc integer,
    code_service_nv integer,
    code_emploi integer,
    date_fin_emploi timestamp(6) without time zone,
    code_lieu_affectation integer,
    code_position_solde integer,
    cle_rib integer,
    code_agence integer,
    code_mode_reglement integer,
    numero_compte_en_banque integer,
    date_mariage timestamp(6) without time zone,
    code_poste integer,
    date_debut timestamp(6) without time zone,
    date_fin timestamp(6) without time zone,
    montant integer,
    montant_global integer,
    numero_ecriture integer,
    date_debut_rappel timestamp(6) without time zone,
    date_fin_rappel timestamp(6) without time zone,
    nombre_jours_rappel integer,
    points_rappel integer,
    taux_rappel integer,
    id_categorie_document bigint,
    status character varying(255)
);
    DROP TABLE public.documents;
       public         heap    postgres    false            �            1259    127613    documents_id_seq    SEQUENCE     �   CREATE SEQUENCE public.documents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.documents_id_seq;
       public          postgres    false    234            k           0    0    documents_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.documents_id_seq OWNED BY public.documents.id;
          public          postgres    false    233            �            1259    119316    dossiers    TABLE     �  CREATE TABLE public.dossiers (
    id bigint NOT NULL,
    code_identification character varying(255),
    date_depot timestamp(6) without time zone,
    id_agent bigint,
    nombre_agents_concernes integer,
    nombre_piece integer,
    origine character varying(255),
    status character varying(255),
    url_demande character varying(255),
    url_piece character varying(255),
    id_type_dossier bigint
);
    DROP TABLE public.dossiers;
       public         heap    postgres    false            �            1259    119315    dossiers_id_seq    SEQUENCE     x   CREATE SEQUENCE public.dossiers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.dossiers_id_seq;
       public          postgres    false    223            l           0    0    dossiers_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.dossiers_id_seq OWNED BY public.dossiers.id;
          public          postgres    false    222            �            1259    119325    pieces_justificatives    TABLE     j   CREATE TABLE public.pieces_justificatives (
    id bigint NOT NULL,
    libelle character varying(255)
);
 )   DROP TABLE public.pieces_justificatives;
       public         heap    postgres    false            �            1259    119324    pieces_justificatives_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pieces_justificatives_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.pieces_justificatives_id_seq;
       public          postgres    false    225            m           0    0    pieces_justificatives_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.pieces_justificatives_id_seq OWNED BY public.pieces_justificatives.id;
          public          postgres    false    224            �            1259    119332    roles    TABLE     <  CREATE TABLE public.roles (
    id bigint NOT NULL,
    nom character varying(20),
    CONSTRAINT roles_nom_check CHECK (((nom)::text = ANY ((ARRAY['ADMIN'::character varying, 'USAGER'::character varying, 'CONTROLLEUR'::character varying, 'SAISIE'::character varying, 'VALIDATEUR'::character varying])::text[])))
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    119331    roles_id_seq    SEQUENCE     u   CREATE SEQUENCE public.roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    227            n           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    226            �            1259    119340 
   structures    TABLE     [   CREATE TABLE public.structures (
    id bigint NOT NULL,
    nom character varying(255)
);
    DROP TABLE public.structures;
       public         heap    postgres    false            �            1259    119339    structures_id_seq    SEQUENCE     z   CREATE SEQUENCE public.structures_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.structures_id_seq;
       public          postgres    false    229            o           0    0    structures_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.structures_id_seq OWNED BY public.structures.id;
          public          postgres    false    228            �            1259    119346    type_dossier_pieces    TABLE     }   CREATE TABLE public.type_dossier_pieces (
    id_type_dossier bigint NOT NULL,
    id_piece_justificative bigint NOT NULL
);
 '   DROP TABLE public.type_dossier_pieces;
       public         heap    postgres    false            �            1259    119352    types_dossiers    TABLE     �   CREATE TABLE public.types_dossiers (
    id bigint NOT NULL,
    informations character varying(255),
    libelle character varying(255)
);
 "   DROP TABLE public.types_dossiers;
       public         heap    postgres    false            �            1259    119351    types_dossiers_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.types_dossiers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.types_dossiers_id_seq;
       public          postgres    false    232            p           0    0    types_dossiers_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.types_dossiers_id_seq OWNED BY public.types_dossiers.id;
          public          postgres    false    231            �           2604    119284    affectation_dossier id    DEFAULT     �   ALTER TABLE ONLY public.affectation_dossier ALTER COLUMN id SET DEFAULT nextval('public.affectation_dossier_id_seq'::regclass);
 E   ALTER TABLE public.affectation_dossier ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �           2604    119296 	   agents id    DEFAULT     f   ALTER TABLE ONLY public.agents ALTER COLUMN id SET DEFAULT nextval('public.agents_id_seq'::regclass);
 8   ALTER TABLE public.agents ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    119305    categories_documents id    DEFAULT     �   ALTER TABLE ONLY public.categories_documents ALTER COLUMN id SET DEFAULT nextval('public.categories_documents_id_seq'::regclass);
 F   ALTER TABLE public.categories_documents ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    127617    documents id    DEFAULT     l   ALTER TABLE ONLY public.documents ALTER COLUMN id SET DEFAULT nextval('public.documents_id_seq'::regclass);
 ;   ALTER TABLE public.documents ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    233    234    234            �           2604    119319    dossiers id    DEFAULT     j   ALTER TABLE ONLY public.dossiers ALTER COLUMN id SET DEFAULT nextval('public.dossiers_id_seq'::regclass);
 :   ALTER TABLE public.dossiers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    119328    pieces_justificatives id    DEFAULT     �   ALTER TABLE ONLY public.pieces_justificatives ALTER COLUMN id SET DEFAULT nextval('public.pieces_justificatives_id_seq'::regclass);
 G   ALTER TABLE public.pieces_justificatives ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    119335    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226    227            �           2604    119343    structures id    DEFAULT     n   ALTER TABLE ONLY public.structures ALTER COLUMN id SET DEFAULT nextval('public.structures_id_seq'::regclass);
 <   ALTER TABLE public.structures ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    119355    types_dossiers id    DEFAULT     v   ALTER TABLE ONLY public.types_dossiers ALTER COLUMN id SET DEFAULT nextval('public.types_dossiers_id_seq'::regclass);
 @   ALTER TABLE public.types_dossiers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    231    232            N          0    119281    affectation_dossier 
   TABLE DATA           q   COPY public.affectation_dossier (id, date_affectation, id_affectateur, id_agent, id_dossier, status) FROM stdin;
    public          postgres    false    216   tk       O          0    119287    agent_roles 
   TABLE DATA           8   COPY public.agent_roles (id_agent, id_role) FROM stdin;
    public          postgres    false    217   m       Q          0    119293    agents 
   TABLE DATA           �   COPY public.agents (id, activated, creation_date, deleted, email, nom, password, prenom, reset_password_token, updated_date, id_struture) FROM stdin;
    public          postgres    false    219   >m       S          0    119302    categories_documents 
   TABLE DATA           ;   COPY public.categories_documents (id, libelle) FROM stdin;
    public          postgres    false    221   bo       `          0    127614 	   documents 
   TABLE DATA           H  COPY public.documents (dtype, id, date_controle, date_modification, date_saisie, date_validation, id_dossier, matricule, user_controle, user_saisie, user_validation, categorie_imp_irpp, code_salaire_unique, code_sexe, code_situation_matrimoniale, code_statut, code_titre, nom, nombre_enfant_af, code_categorie_anc, code_categorie_nv, code_echelle_corps_anc, code_echelle_corps_nv, code_grade_anc, code_grade_nv, code_indice_anc, code_indice_nv, code_service_anc, code_service_nv, code_emploi, date_fin_emploi, code_lieu_affectation, code_position_solde, cle_rib, code_agence, code_mode_reglement, numero_compte_en_banque, date_mariage, code_poste, date_debut, date_fin, montant, montant_global, numero_ecriture, date_debut_rappel, date_fin_rappel, nombre_jours_rappel, points_rappel, taux_rappel, id_categorie_document, status) FROM stdin;
    public          postgres    false    234   o       U          0    119316    dossiers 
   TABLE DATA           �   COPY public.dossiers (id, code_identification, date_depot, id_agent, nombre_agents_concernes, nombre_piece, origine, status, url_demande, url_piece, id_type_dossier) FROM stdin;
    public          postgres    false    223   �q       W          0    119325    pieces_justificatives 
   TABLE DATA           <   COPY public.pieces_justificatives (id, libelle) FROM stdin;
    public          postgres    false    225   �r       Y          0    119332    roles 
   TABLE DATA           (   COPY public.roles (id, nom) FROM stdin;
    public          postgres    false    227   x       [          0    119340 
   structures 
   TABLE DATA           -   COPY public.structures (id, nom) FROM stdin;
    public          postgres    false    229   \x       \          0    119346    type_dossier_pieces 
   TABLE DATA           V   COPY public.type_dossier_pieces (id_type_dossier, id_piece_justificative) FROM stdin;
    public          postgres    false    230   yx       ^          0    119352    types_dossiers 
   TABLE DATA           C   COPY public.types_dossiers (id, informations, libelle) FROM stdin;
    public          postgres    false    232   �z       q           0    0    affectation_dossier_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.affectation_dossier_id_seq', 40, true);
          public          postgres    false    215            r           0    0    agents_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.agents_id_seq', 15, true);
          public          postgres    false    218            s           0    0    categories_documents_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.categories_documents_id_seq', 1, false);
          public          postgres    false    220            t           0    0    documents_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.documents_id_seq', 40, true);
          public          postgres    false    233            u           0    0    dossiers_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.dossiers_id_seq', 9, true);
          public          postgres    false    222            v           0    0    pieces_justificatives_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.pieces_justificatives_id_seq', 315, true);
          public          postgres    false    224            w           0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 5, true);
          public          postgres    false    226            x           0    0    structures_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.structures_id_seq', 1, false);
          public          postgres    false    228            y           0    0    types_dossiers_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.types_dossiers_id_seq', 45, true);
          public          postgres    false    231            �           2606    119286 ,   affectation_dossier affectation_dossier_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.affectation_dossier
    ADD CONSTRAINT affectation_dossier_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.affectation_dossier DROP CONSTRAINT affectation_dossier_pkey;
       public            postgres    false    216            �           2606    119291    agent_roles agent_roles_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.agent_roles
    ADD CONSTRAINT agent_roles_pkey PRIMARY KEY (id_agent, id_role);
 F   ALTER TABLE ONLY public.agent_roles DROP CONSTRAINT agent_roles_pkey;
       public            postgres    false    217    217            �           2606    119300    agents agents_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.agents
    ADD CONSTRAINT agents_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.agents DROP CONSTRAINT agents_pkey;
       public            postgres    false    219            �           2606    119307 .   categories_documents categories_documents_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.categories_documents
    ADD CONSTRAINT categories_documents_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.categories_documents DROP CONSTRAINT categories_documents_pkey;
       public            postgres    false    221            �           2606    127621    documents documents_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.documents DROP CONSTRAINT documents_pkey;
       public            postgres    false    234            �           2606    119323    dossiers dossiers_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.dossiers
    ADD CONSTRAINT dossiers_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.dossiers DROP CONSTRAINT dossiers_pkey;
       public            postgres    false    223            �           2606    119330 0   pieces_justificatives pieces_justificatives_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.pieces_justificatives
    ADD CONSTRAINT pieces_justificatives_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.pieces_justificatives DROP CONSTRAINT pieces_justificatives_pkey;
       public            postgres    false    225            �           2606    119338    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    227            �           2606    119345    structures structures_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.structures
    ADD CONSTRAINT structures_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.structures DROP CONSTRAINT structures_pkey;
       public            postgres    false    229            �           2606    119350 ,   type_dossier_pieces type_dossier_pieces_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.type_dossier_pieces
    ADD CONSTRAINT type_dossier_pieces_pkey PRIMARY KEY (id_type_dossier, id_piece_justificative);
 V   ALTER TABLE ONLY public.type_dossier_pieces DROP CONSTRAINT type_dossier_pieces_pkey;
       public            postgres    false    230    230            �           2606    119359 "   types_dossiers types_dossiers_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.types_dossiers
    ADD CONSTRAINT types_dossiers_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.types_dossiers DROP CONSTRAINT types_dossiers_pkey;
       public            postgres    false    232            �           2606    119361 #   agents uk_6nicrn4ojbvsy06bwtbe719md 
   CONSTRAINT     _   ALTER TABLE ONLY public.agents
    ADD CONSTRAINT uk_6nicrn4ojbvsy06bwtbe719md UNIQUE (email);
 M   ALTER TABLE ONLY public.agents DROP CONSTRAINT uk_6nicrn4ojbvsy06bwtbe719md;
       public            postgres    false    219            �           2606    119392 /   type_dossier_pieces fk26dnrvmdj8rjyxv2nmmylcut2    FK CONSTRAINT     �   ALTER TABLE ONLY public.type_dossier_pieces
    ADD CONSTRAINT fk26dnrvmdj8rjyxv2nmmylcut2 FOREIGN KEY (id_piece_justificative) REFERENCES public.pieces_justificatives(id);
 Y   ALTER TABLE ONLY public.type_dossier_pieces DROP CONSTRAINT fk26dnrvmdj8rjyxv2nmmylcut2;
       public          postgres    false    230    225    3245            �           2606    119367 '   agent_roles fk87g4u5ppfyntavmns4m67q0uk    FK CONSTRAINT     �   ALTER TABLE ONLY public.agent_roles
    ADD CONSTRAINT fk87g4u5ppfyntavmns4m67q0uk FOREIGN KEY (id_agent) REFERENCES public.agents(id);
 Q   ALTER TABLE ONLY public.agent_roles DROP CONSTRAINT fk87g4u5ppfyntavmns4m67q0uk;
       public          postgres    false    219    3237    217            �           2606    119397 /   type_dossier_pieces fkec3m3ocblatpj0esgkv7a2295    FK CONSTRAINT     �   ALTER TABLE ONLY public.type_dossier_pieces
    ADD CONSTRAINT fkec3m3ocblatpj0esgkv7a2295 FOREIGN KEY (id_type_dossier) REFERENCES public.types_dossiers(id);
 Y   ALTER TABLE ONLY public.type_dossier_pieces DROP CONSTRAINT fkec3m3ocblatpj0esgkv7a2295;
       public          postgres    false    232    230    3253            �           2606    119387 $   dossiers fkil19il64cwoju8nnygsink0qa    FK CONSTRAINT     �   ALTER TABLE ONLY public.dossiers
    ADD CONSTRAINT fkil19il64cwoju8nnygsink0qa FOREIGN KEY (id_type_dossier) REFERENCES public.types_dossiers(id);
 N   ALTER TABLE ONLY public.dossiers DROP CONSTRAINT fkil19il64cwoju8nnygsink0qa;
       public          postgres    false    3253    223    232            �           2606    119372 "   agents fkjc2f7vb6a76vtktn40jxv97vs    FK CONSTRAINT     �   ALTER TABLE ONLY public.agents
    ADD CONSTRAINT fkjc2f7vb6a76vtktn40jxv97vs FOREIGN KEY (id_struture) REFERENCES public.structures(id);
 L   ALTER TABLE ONLY public.agents DROP CONSTRAINT fkjc2f7vb6a76vtktn40jxv97vs;
       public          postgres    false    229    3249    219            �           2606    127622 %   documents fkjfi70bvwhxp3cxtx15rup4qaa    FK CONSTRAINT     �   ALTER TABLE ONLY public.documents
    ADD CONSTRAINT fkjfi70bvwhxp3cxtx15rup4qaa FOREIGN KEY (id_categorie_document) REFERENCES public.categories_documents(id);
 O   ALTER TABLE ONLY public.documents DROP CONSTRAINT fkjfi70bvwhxp3cxtx15rup4qaa;
       public          postgres    false    3241    234    221            �           2606    119362 '   agent_roles fkmfauqgs84weqqw08c7ltmf5ur    FK CONSTRAINT     �   ALTER TABLE ONLY public.agent_roles
    ADD CONSTRAINT fkmfauqgs84weqqw08c7ltmf5ur FOREIGN KEY (id_role) REFERENCES public.roles(id);
 Q   ALTER TABLE ONLY public.agent_roles DROP CONSTRAINT fkmfauqgs84weqqw08c7ltmf5ur;
       public          postgres    false    227    3247    217            N   �  x�e��q�0гU���ZrN�*�h�#߀�D�`d����x���	�a�:���hW5DY1�T`_Jn�������W�r�CYfζ�W٦�0�V�jť(�ԅb Aq�ٽ?x�zULCx�@{ɩd*_ʞ�j?L#��捼��SIe��xSJ�$��OɮdpB��FK�z�}cj�,e�꼺{,{A��d��T�慭d�N���pX�_�sn�L�2P��JK�j���vէ���q/ś����+u)ٕ��Be�%���,%+.�%߭K�ʀ�7�R����J���k��@��e�$7e2��ʼ�o�������L9���z��=��K5횣�&D<(z+ ���Uw_�}��)^�Y����iu�w      O   (   x�3�4�2�4b#.s06� Җ`l�eh�i����� pT8      Q     x�u��r�@ �3>E���<`"��q���i������9�Ŧ��d�T�����뿑P
b� �عCRî����"���G��qX����r6�p��=��hiW�xxR�3�[�)ae174�VC`�[�Hg�cO��(x��+�=�k�8-�%�]Q�Uи��&���"�>�2b��ָQm��a>qO�����Vgkq^?��A^��G�K�N�A��q䷮��ܥ\��.$< A�c,y��o��C5�Le�����.3C4��cƑH�p>@/m9���cu��4�Y�^��ܲ �@�Y5Mb��Aդ�������F�]�GvYX�iK#د�v��=|nG�"n�e:^�x$��ބ5;a}�r��`!t;]Q���aE�_U�4>Z}�vx��
!%9)����2���[��Y`Z^_9�G�7pWc<��o���5��� b�㜿 $�Y��y�$������F������]l'��%����Y�$u�plx�)���S&�)5M��E��ޯ�i\4u��\��V�7����      S      x������ � �      `   f  x�՗Mn�0���)t�3C����:Y�e^�h4N�=Tn��uHɶ,��d[)
�0 -~|3o�ۗ�������\�pW��C\#���Z���k��`0V�6iJ|�7�l_�9׽o�M����>&��!s>׫���Ϗ���mǎ(���M��W ��)x�T�
Me�#��,������zS/���o1<�f	���i�t�g*}�G! )���C6n�hn�B��������2� fdl�8"dV��v%������t��H�zQ�?�4T̙�:�����8�E6e.w�+.��j�ix<�|CJ�ce�'���Q�d���懊iʶ�?s"�tL4�:fk�9j�C�IJ[��4hu$v�q���KI�K�6g��d ���<U#�;h�ظ�T��.��`I'���Ҡ�.��+9�L_�-c�&�@��6��,j�5;�ȹ͕,g����d���P{c�{+bي2�؝�����~��4�6��<����(���L��V�_u7إ(gR4��L��bzh���iEa�N_�i3��w	����]�ʲ�\��ا�]�gG�S����\��?]�1��bHR���&�9�׿p��6�_���ў��}�b=��b�/��      U   �   x�}�=j1���)��	�~,�Z�B:���[�FI�I����bY/!؍y���{
��|�}%����|0�`�p�w�r�Si���7��J��O�+lZjC���\�sM=�3�	�Z���J��]*%W�������so��-�1^P4k�!���;`��c��<��k��t�}��Z�Yh��ȝ��H�d�rAz���ݱ�/�3����E0�~��Z�      W     x��[ˎ+E]O�"�{%�ʧ�Kt%$$�ذc�7��m)�I�5��������IHq�(˻u���S��O����y^?�����v;o��y9�Wx�4��v�L���~>.����i>��l��i�������e�0���x�g���e�������a���z;m^vׇoW����ێ�˟o�\p��������M����|8-�e�6��=�7�|��[~y����/}����͗�iޟ?��ۚ�x�����s�׽=�^v��7;����՚�,޼]��]���ޱʷW<9����2���O?|�*���}W�^6�8
��VQ��4E�5�q�g��mV��7'H�~ �PF7�0��p�����$���K��=��Î�a|��ػG|2sh����18����A<x��`V�Cd��]kC#:C��;:�������n��YJ���Ʊ���J0&E)N4�C�����DӘ�LIar7��; �U��?uߩ�<��9J�!���!g3כ�uú(º0��4�2k��E�t��2��ע����G�6tŰ�ȸj`F��1��j`m4��Y��Ħ�C�ɍ�.�~��)`'�d���'7ΩəUj"E�&b�65�/�f-��ɉ�zM4����W��Ť��D�8���"u&�K�3u��ɒ(��t��B���xz��ηv��u/��oTu�p�׺�k�=0܋�x�L�n/�N��ud��51j�b��rpG;b5Wq��Sl�{� ��6E��E�֚�&��qa�RC٦đ�$3Sj��b���jy�'�p~�d�܂2+2w��Ό�Iٮ�����y:�'Nd'�Q�l�� u�!�P�hyiyQy�y�Z�"ck'�ѻ�7k�鷪,�(�2��ߌ��M�nN�r���*Ĕj&��u�{�)8\C^�c�<�؁�1�WpݹΌ��5N��Y�11P#+��� ��xֆ,����&;���6�T_ 3��Q1t'm@� o (N���e�Y�Z�
�:|�xZ������y�+F�<����V1��LB?�A���z��F����$#($�*�T2�V�V�`��)5����t�&���8bw��$�"iXu��r����h����Ð�)ܻ&6�4�vhh�lȌb
YCC��h��ѯ�!k�����N%CnQ2�
�"�QÂ(\]�dR��r�����Z^�o2�]�r�d��,�j`�-N^��f�U�}���+s8�*r:��ٻn��3;��N!�x��}����q�����m�f�5��̋y3���2O݅�+�1o�a��_�V��OG�      Y   @   x�3�tt����2�vtw�2�t��	���q�2�v��t�2�s��tq���qqq �'?      [      x������ � �      \   8  x�%չ��0Q[
f��W.���2X��!��x�:�S:Sg��7��su����d��|�����U�댷��Nv�3;��;�O\%���D';ՙ�zruv�t�R_gt��Oe�:��:�s:�=��:���Tgv�{��;�s��uF':���g�;��n�����w�Gn��;����x�qo�|�p�MW��s�����v����zn��;��nW������>�P�	K,�p�m��)[$LX�ဦ-�
&h�\��2���(��`Ák�i1Ā���	4�_��h�̀�M��i��FM)�P0a�M��i;���P�)�?-��p�-��)�?��)��`�M��iè���	������	���o~�`����]�P0a���8pM��	��O�v�,�p���є��$LX�AS�Q��6�]3  �@S�X���5�]3@S�H(��`�M9��0  �`��������5�]3 @�0�?����`Ák�������	4E���5�hẁ�M��iw͂n��]�)%
&,ؠ)��y�v�H(����}�V�3$      ^   �   x�}Ի�PD�د
W`1��/&wN~ �~*���H3�y�<�۽����>~������:E��N�:�t�өN�:iM� D " �P*�����bp1�\.�������4 p	p	p	p	p	p	pIpIpIpIzpIpY����Y��     