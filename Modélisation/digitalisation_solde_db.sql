PGDMP     2                    {            bd_digitalisation_solde    15.2    15.2 T    d           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            e           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            f           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            g           1262    93040    bd_digitalisation_solde    DATABASE     �   CREATE DATABASE bd_digitalisation_solde WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'French_France.1252';
 '   DROP DATABASE bd_digitalisation_solde;
                postgres    false                        3079    118347 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            h           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
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
       public          postgres    false    216            i           0    0    affectation_dossier_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.affectation_dossier_id_seq OWNED BY public.affectation_dossier.id;
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
       public          postgres    false    219            j           0    0    agents_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.agents_id_seq OWNED BY public.agents.id;
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
       public          postgres    false    221            k           0    0    categories_documents_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.categories_documents_id_seq OWNED BY public.categories_documents.id;
          public          postgres    false    220            �            1259    119309 	   documents    TABLE     �   CREATE TABLE public.documents (
    id bigint NOT NULL,
    type character varying(255),
    id_dossier bigint,
    id_categorie_document bigint
);
    DROP TABLE public.documents;
       public         heap    postgres    false            �            1259    119308    documents_id_seq    SEQUENCE     y   CREATE SEQUENCE public.documents_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.documents_id_seq;
       public          postgres    false    223            l           0    0    documents_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.documents_id_seq OWNED BY public.documents.id;
          public          postgres    false    222            �            1259    119316    dossiers    TABLE     �  CREATE TABLE public.dossiers (
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
       public          postgres    false    225            m           0    0    dossiers_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.dossiers_id_seq OWNED BY public.dossiers.id;
          public          postgres    false    224            �            1259    119325    pieces_justificatives    TABLE     j   CREATE TABLE public.pieces_justificatives (
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
       public          postgres    false    227            n           0    0    pieces_justificatives_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.pieces_justificatives_id_seq OWNED BY public.pieces_justificatives.id;
          public          postgres    false    226            �            1259    119332    roles    TABLE     <  CREATE TABLE public.roles (
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
       public          postgres    false    229            o           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    228            �            1259    119340 
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
       public          postgres    false    231            p           0    0    structures_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.structures_id_seq OWNED BY public.structures.id;
          public          postgres    false    230            �            1259    119346    type_dossier_pieces    TABLE     }   CREATE TABLE public.type_dossier_pieces (
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
       public          postgres    false    234            q           0    0    types_dossiers_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.types_dossiers_id_seq OWNED BY public.types_dossiers.id;
          public          postgres    false    233            �           2604    119284    affectation_dossier id    DEFAULT     �   ALTER TABLE ONLY public.affectation_dossier ALTER COLUMN id SET DEFAULT nextval('public.affectation_dossier_id_seq'::regclass);
 E   ALTER TABLE public.affectation_dossier ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �           2604    119296 	   agents id    DEFAULT     f   ALTER TABLE ONLY public.agents ALTER COLUMN id SET DEFAULT nextval('public.agents_id_seq'::regclass);
 8   ALTER TABLE public.agents ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    119305    categories_documents id    DEFAULT     �   ALTER TABLE ONLY public.categories_documents ALTER COLUMN id SET DEFAULT nextval('public.categories_documents_id_seq'::regclass);
 F   ALTER TABLE public.categories_documents ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            �           2604    119312    documents id    DEFAULT     l   ALTER TABLE ONLY public.documents ALTER COLUMN id SET DEFAULT nextval('public.documents_id_seq'::regclass);
 ;   ALTER TABLE public.documents ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    119319    dossiers id    DEFAULT     j   ALTER TABLE ONLY public.dossiers ALTER COLUMN id SET DEFAULT nextval('public.dossiers_id_seq'::regclass);
 :   ALTER TABLE public.dossiers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    119328    pieces_justificatives id    DEFAULT     �   ALTER TABLE ONLY public.pieces_justificatives ALTER COLUMN id SET DEFAULT nextval('public.pieces_justificatives_id_seq'::regclass);
 G   ALTER TABLE public.pieces_justificatives ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    119335    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    119343    structures id    DEFAULT     n   ALTER TABLE ONLY public.structures ALTER COLUMN id SET DEFAULT nextval('public.structures_id_seq'::regclass);
 <   ALTER TABLE public.structures ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    119355    types_dossiers id    DEFAULT     v   ALTER TABLE ONLY public.types_dossiers ALTER COLUMN id SET DEFAULT nextval('public.types_dossiers_id_seq'::regclass);
 @   ALTER TABLE public.types_dossiers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    233    234            O          0    119281    affectation_dossier 
   TABLE DATA           q   COPY public.affectation_dossier (id, date_affectation, id_affectateur, id_agent, id_dossier, status) FROM stdin;
    public          postgres    false    216   Sc       P          0    119287    agent_roles 
   TABLE DATA           8   COPY public.agent_roles (id_agent, id_role) FROM stdin;
    public          postgres    false    217   �c       R          0    119293    agents 
   TABLE DATA           �   COPY public.agents (id, activated, creation_date, deleted, email, nom, password, prenom, reset_password_token, updated_date, id_struture) FROM stdin;
    public          postgres    false    219   d       T          0    119302    categories_documents 
   TABLE DATA           ;   COPY public.categories_documents (id, libelle) FROM stdin;
    public          postgres    false    221   �e       V          0    119309 	   documents 
   TABLE DATA           P   COPY public.documents (id, type, id_dossier, id_categorie_document) FROM stdin;
    public          postgres    false    223   �e       X          0    119316    dossiers 
   TABLE DATA           �   COPY public.dossiers (id, code_identification, date_depot, id_agent, nombre_agents_concernes, nombre_piece, origine, status, url_demande, url_piece, id_type_dossier) FROM stdin;
    public          postgres    false    225   �e       Z          0    119325    pieces_justificatives 
   TABLE DATA           <   COPY public.pieces_justificatives (id, libelle) FROM stdin;
    public          postgres    false    227   "f       \          0    119332    roles 
   TABLE DATA           (   COPY public.roles (id, nom) FROM stdin;
    public          postgres    false    229   �g       ^          0    119340 
   structures 
   TABLE DATA           -   COPY public.structures (id, nom) FROM stdin;
    public          postgres    false    231   �g       _          0    119346    type_dossier_pieces 
   TABLE DATA           V   COPY public.type_dossier_pieces (id_type_dossier, id_piece_justificative) FROM stdin;
    public          postgres    false    232   h       a          0    119352    types_dossiers 
   TABLE DATA           C   COPY public.types_dossiers (id, informations, libelle) FROM stdin;
    public          postgres    false    234   xh       r           0    0    affectation_dossier_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.affectation_dossier_id_seq', 15, true);
          public          postgres    false    215            s           0    0    agents_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.agents_id_seq', 8, true);
          public          postgres    false    218            t           0    0    categories_documents_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.categories_documents_id_seq', 1, false);
          public          postgres    false    220            u           0    0    documents_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.documents_id_seq', 1, false);
          public          postgres    false    222            v           0    0    dossiers_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.dossiers_id_seq', 1, true);
          public          postgres    false    224            w           0    0    pieces_justificatives_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.pieces_justificatives_id_seq', 42, true);
          public          postgres    false    226            x           0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 5, true);
          public          postgres    false    228            y           0    0    structures_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.structures_id_seq', 1, false);
          public          postgres    false    230            z           0    0    types_dossiers_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.types_dossiers_id_seq', 6, true);
          public          postgres    false    233            �           2606    119286 ,   affectation_dossier affectation_dossier_pkey 
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
       public            postgres    false    221            �           2606    119314    documents documents_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.documents DROP CONSTRAINT documents_pkey;
       public            postgres    false    223            �           2606    119323    dossiers dossiers_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.dossiers
    ADD CONSTRAINT dossiers_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.dossiers DROP CONSTRAINT dossiers_pkey;
       public            postgres    false    225            �           2606    119330 0   pieces_justificatives pieces_justificatives_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.pieces_justificatives
    ADD CONSTRAINT pieces_justificatives_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.pieces_justificatives DROP CONSTRAINT pieces_justificatives_pkey;
       public            postgres    false    227            �           2606    119338    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    229            �           2606    119345    structures structures_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.structures
    ADD CONSTRAINT structures_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.structures DROP CONSTRAINT structures_pkey;
       public            postgres    false    231            �           2606    119350 ,   type_dossier_pieces type_dossier_pieces_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.type_dossier_pieces
    ADD CONSTRAINT type_dossier_pieces_pkey PRIMARY KEY (id_type_dossier, id_piece_justificative);
 V   ALTER TABLE ONLY public.type_dossier_pieces DROP CONSTRAINT type_dossier_pieces_pkey;
       public            postgres    false    232    232            �           2606    119359 "   types_dossiers types_dossiers_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.types_dossiers
    ADD CONSTRAINT types_dossiers_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.types_dossiers DROP CONSTRAINT types_dossiers_pkey;
       public            postgres    false    234            �           2606    119361 #   agents uk_6nicrn4ojbvsy06bwtbe719md 
   CONSTRAINT     _   ALTER TABLE ONLY public.agents
    ADD CONSTRAINT uk_6nicrn4ojbvsy06bwtbe719md UNIQUE (email);
 M   ALTER TABLE ONLY public.agents DROP CONSTRAINT uk_6nicrn4ojbvsy06bwtbe719md;
       public            postgres    false    219            �           2606    119392 /   type_dossier_pieces fk26dnrvmdj8rjyxv2nmmylcut2    FK CONSTRAINT     �   ALTER TABLE ONLY public.type_dossier_pieces
    ADD CONSTRAINT fk26dnrvmdj8rjyxv2nmmylcut2 FOREIGN KEY (id_piece_justificative) REFERENCES public.pieces_justificatives(id);
 Y   ALTER TABLE ONLY public.type_dossier_pieces DROP CONSTRAINT fk26dnrvmdj8rjyxv2nmmylcut2;
       public          postgres    false    3247    232    227            �           2606    119367 '   agent_roles fk87g4u5ppfyntavmns4m67q0uk    FK CONSTRAINT     �   ALTER TABLE ONLY public.agent_roles
    ADD CONSTRAINT fk87g4u5ppfyntavmns4m67q0uk FOREIGN KEY (id_agent) REFERENCES public.agents(id);
 Q   ALTER TABLE ONLY public.agent_roles DROP CONSTRAINT fk87g4u5ppfyntavmns4m67q0uk;
       public          postgres    false    219    217    3237            �           2606    119377 %   documents fk8as8aojhhe026604y3gd70h1s    FK CONSTRAINT     �   ALTER TABLE ONLY public.documents
    ADD CONSTRAINT fk8as8aojhhe026604y3gd70h1s FOREIGN KEY (id_dossier) REFERENCES public.dossiers(id);
 O   ALTER TABLE ONLY public.documents DROP CONSTRAINT fk8as8aojhhe026604y3gd70h1s;
       public          postgres    false    223    225    3245            �           2606    119397 /   type_dossier_pieces fkec3m3ocblatpj0esgkv7a2295    FK CONSTRAINT     �   ALTER TABLE ONLY public.type_dossier_pieces
    ADD CONSTRAINT fkec3m3ocblatpj0esgkv7a2295 FOREIGN KEY (id_type_dossier) REFERENCES public.types_dossiers(id);
 Y   ALTER TABLE ONLY public.type_dossier_pieces DROP CONSTRAINT fkec3m3ocblatpj0esgkv7a2295;
       public          postgres    false    3255    232    234            �           2606    119387 $   dossiers fkil19il64cwoju8nnygsink0qa    FK CONSTRAINT     �   ALTER TABLE ONLY public.dossiers
    ADD CONSTRAINT fkil19il64cwoju8nnygsink0qa FOREIGN KEY (id_type_dossier) REFERENCES public.types_dossiers(id);
 N   ALTER TABLE ONLY public.dossiers DROP CONSTRAINT fkil19il64cwoju8nnygsink0qa;
       public          postgres    false    3255    234    225            �           2606    119372 "   agents fkjc2f7vb6a76vtktn40jxv97vs    FK CONSTRAINT     �   ALTER TABLE ONLY public.agents
    ADD CONSTRAINT fkjc2f7vb6a76vtktn40jxv97vs FOREIGN KEY (id_struture) REFERENCES public.structures(id);
 L   ALTER TABLE ONLY public.agents DROP CONSTRAINT fkjc2f7vb6a76vtktn40jxv97vs;
       public          postgres    false    3251    231    219            �           2606    119382 %   documents fkjfi70bvwhxp3cxtx15rup4qaa    FK CONSTRAINT     �   ALTER TABLE ONLY public.documents
    ADD CONSTRAINT fkjfi70bvwhxp3cxtx15rup4qaa FOREIGN KEY (id_categorie_document) REFERENCES public.categories_documents(id);
 O   ALTER TABLE ONLY public.documents DROP CONSTRAINT fkjfi70bvwhxp3cxtx15rup4qaa;
       public          postgres    false    3241    223    221            �           2606    119362 '   agent_roles fkmfauqgs84weqqw08c7ltmf5ur    FK CONSTRAINT     �   ALTER TABLE ONLY public.agent_roles
    ADD CONSTRAINT fkmfauqgs84weqqw08c7ltmf5ur FOREIGN KEY (id_role) REFERENCES public.roles(id);
 Q   ALTER TABLE ONLY public.agent_roles DROP CONSTRAINT fkmfauqgs84weqqw08c7ltmf5ur;
       public          postgres    false    229    217    3249            O   r   x�]���@E�u�
�����T@�"	H���ѕ�@���Vk$y��l|�5�WU=� ���,��P����S�𶠚�u��lQǉ�ֱ���`][��T����q��4�� ɳ(�      P      x�3�4�2�4b#.s06� �1z\\\ 64�      R   q  x�u�[S�@����St�m� �� K����7۲�X�<|��f*&k�~��y1(A�^#�u���#����@�*D7�%)��0�c�[g�MX�6^�U����)�敨r��'M��Ȧ�m��Ӑ�d�OK������k��]�T����bM�
��h���KdէN�/��̜�V�O��5c|k����2��Ħ�eb��q`$�,�D~��	K��˥���i��b���A��V�9�\���x���p�/��}`#���Gz�|��-�,�Cu� K�߬fW���,$��JV��$d���4�;�2:3i�aq��Y����n�w�<�S'6ue3��a��	T�-~+����ݕ�5l�Z��!      T      x������ � �      V      x������ � �      X   T   x�3�46vs�5��4202�5��50W04�22�2��3�4�04�4�4 Bϼ�Ԣ�TN׼����+9�2�@��
R�P9�\1z\\\ ��      Z   p  x��T=N�0��Sxl%�b;i�UBBB����u^TK���k���k�&��8��&��l�l��y�$�p���΋��VV�h��B
nq�6��h��J�EOZ��J=pť�Lj�w���V����r�J�{W͘�s��(|��ǹlꪑ����m�Ÿ}lJ���Wũh�w��#����'G��:��wQ��U}7���=�qj��b8�$j.�h;�����DUK�a��C�)˲�V�8�6!�)�B�R�d��$]��&��'��lY��v��I�T�Q��F�Ύ�.'���3�tr�i��$O~��Ϝy�f,�(���K���,f�v���̲`�؟Zr�_�x�F}̼�      \   @   x�3�tt����2�vtw�2�t��	���q�2�v��t�2�s��tq���qqq �'?      ^      x������ � �      _   Y   x���1�7��p4�\�qh���R�2��xڕ'�((���,�6��T.
oˤ���M����S�((��i|[m:t�^������RI      a   7   x�3���t�H�KO�M�+QHIU(N-*�LN�2�-e�[���)n)3�R1z\\\ �6:     