# Explication Détaillée du Modèle Économique d'Utopia

## Aperçu du Système

Utopia est un réseau de richesse de consensus décentralisé basé sur la chaîne BSC, réalisant le flux et la distribution automatiques de valeur grâce aux contrats intelligents. Le système adopte une philosophie de conception "déployer une fois, ne jamais mettre à jour", garantissant des règles transparentes et immuables.

### Mécanismes Centraux
- **Système de Pool de Résonance** : Quatre dimensions de choix de résonance de valeur
- **Réseau de Consensus Régional** : Système de consensus à trois couches basé sur le flux de valeur
- **Mécanisme de Nœuds de Prospérité** : Sélection hebdomadaire des 36 principaux contributeurs de valeur
- **Mécanisme de Redémarrage Phoenix** : Gestion automatique des risques du système et héritage de valeur

---

## I. Système de Valeur du Pool de Résonance

### Explication Détaillée des Dimensions de Résonance

| Dimension | Entrée de Valeur | Cycle de Résonance | Retour de Résonance | Taux d'Amplification | Permissions Débloquées |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Première Dimension | 100 USDT | T+1 jour | 100,5 USDT | 0,5% | Aucune permission supplémentaire |
| Deuxième Dimension | 1 000 USDT | T+7 jours | 1 050 USDT | 5% | Permissions de consensus Zone A |
| Troisième Dimension | 2 000 USDT | T+15 jours | 2 260 USDT | 13% | Permissions de consensus Zone A+B |
| Quatrième Dimension | 3 000 USDT | T+30 jours | 3 900 USDT | 30% | Permissions de consensus Zone A+B+C |

### Règles Importantes
1. **Limitation de Résonance Unique** : Chaque adresse ne peut détenir qu'une seule commande de résonance active à la fois
2. **Mécanisme de Libération de Valeur** : Réclamation manuelle requise après l'achèvement de la résonance, comptée dans la valeur du réseau après réclamation
3. **Modèle de Pré-calcul** : Tous les retours de résonance sont déterminés lors du déploiement du contrat, complètement transparents et prévisibles

---

## II. Mécanisme du Réseau de Consensus Régional

### Règles de Division des Zones

Le système divise automatiquement le réseau de valeur des participants en trois zones de consensus :

**Zone A (Zone Centrale)**
- Définition : La ligne avec la plus haute contribution dans le réseau de flux de valeur direct
- Calcul : Somme de toutes les valeurs des commandes de résonance actives dans cette ligne

**Zone B (Zone Halo)**
- Définition : La ligne avec la deuxième plus haute contribution dans le réseau de flux de valeur direct
- Calcul : Somme de toutes les valeurs des commandes de résonance actives dans cette ligne

**Zone C (Zone Galaxie)**
- Définition : Toutes les autres lignes de flux de valeur sauf les Zones A et B
- Calcul : Somme des valeurs des commandes de résonance actives pour toutes les lignes restantes

### Formules de Calcul du Consensus Régional

**Partage de Consensus Zone A**
- Base de Consensus : Gains quotidiens de résonance de la personne directement connectée à la Zone A (pas toute la Zone A)
- Proportion de Consensus : 30%
- Exemple : Le connecteur direct de la Zone A participe avec 3000 USDT (quatrième dimension), gains quotidiens 30 USDT, vous recevez 9 USDT/jour

**Partage de Consensus Zone B**
- Base de Consensus : Somme des gains quotidiens de résonance pour tous les participants de la ligne Zone B
- Proportion de Consensus : 10%
- Exemple : Les gains quotidiens totaux de la ligne Zone B sont de 500 USDT, vous recevez 50 USDT/jour

**Partage de Consensus Zone C**
- Base de Consensus : Somme des gains quotidiens de résonance pour tous les participants des lignes Zone C
- Proportion de Consensus : 15%
- Exemple : Les gains quotidiens totaux de toutes les lignes Zone C sont de 1000 USDT, vous recevez 150 USDT/jour

### Exigences de Permission par Dimension
- **Deuxième Dimension** : Peut recevoir uniquement le partage de consensus Zone A
- **Troisième Dimension** : Peut recevoir le partage de consensus Zone A+B
- **Quatrième Dimension** : Peut recevoir tout le partage de consensus Zone A+B+C

### Explication du Flux de Valeur en Temps Réel
1. La division des zones est basée sur les contributions de valeur des commandes de résonance actives en temps réel, avec ajustement dynamique
2. Après qu'un participant complète la résonance, sa contribution de valeur est immédiatement retirée du réseau
3. Après qu'un participant crée une nouvelle résonance, sa contribution de valeur est immédiatement ajoutée au calcul du réseau

---

## III. Distribution de Valeur des Nœuds de Prospérité

### Critères de Sélection
- **Indicateur de Sélection** : Contribution totale de valeur en temps réel de la Zone C des participants
- **Quota de Sélection** : Top 36
- **Cycle de Sélection** : Sélection automatique chaque lundi

### Source et Distribution du Pool de Prospérité
- **Source du Pool de Prospérité** : 20% des gains de résonance quotidiens de tout le réseau, accumulés quotidiennement dans le pool
- **Temps de Distribution** : Règlement du pool de prospérité de la semaine dernière chaque lundi
- **Méthode de Distribution** : Distribution pondérée selon la proportion de contribution de valeur Zone C des 36 nœuds

### Exemple de Calcul
```
Partage du Nœud = Total du Pool de Prospérité Hebdomadaire × (Contribution Personnelle de Valeur Zone C ÷ Somme des Contributions de Valeur Zone C des 36 Nœuds)
```

---

## IV. Mécanisme de Redémarrage Phoenix

### Conditions de Déclenchement
Lorsque les fonds disponibles du système < retours totaux de résonance dus pour la journée, le redémarrage Phoenix est automatiquement déclenché

### Processus de Redémarrage

**Phase 1 : Verrouillage du Système**
- Le système entre dans une période de protection de 3 jours
- Suspension de toutes les opérations d'entrée et de sortie de valeur
- Enregistrement des 36 derniers participants de quatrième dimension

**Phase 2 : Héritage de Valeur**
Le pool de fonds restant est distribué selon les proportions suivantes :
- **10%** : Distribués équitablement aux 36 derniers participants de quatrième dimension (récompense de pont)
- **90%** : Transférés au pool de prospérité continue

**Phase 3 : Début du Nouveau Cycle**
- Réinitialisation du système, début d'un nouveau cycle de résonance
- Tous les participants peuvent redémarrer la résonance de valeur

### Plan de Prospérité Continue

Dans le nouveau cycle, 90% de la valeur héritée sera distribuée à travers 4 sélections :

| Temps de Sélection | Proportion de Distribution | Critère de Sélection |
|:---:|:---:|:---:|
| Semaine 4 | 10% du pool total | Top 36 contributeurs de valeur Zone C cette semaine |
| Semaine 8 | 20% du pool total | Top 36 contributeurs de valeur Zone C cette semaine |
| Semaine 12 | 30% du pool total | Top 36 contributeurs de valeur Zone C cette semaine |
| Semaine 16 | 40% du pool total | Top 36 contributeurs de valeur Zone C cette semaine |

**Note** : Chaque sélection est effectuée indépendamment, basée sur la contribution de valeur en temps réel de la semaine actuelle, non sur les contributions cumulatives

---

## V. Règles de la Période de Gains de Résonance

### Calcul du Cycle de Résonance T+N
- **Jour T** : Jour de création de la résonance, ne génère pas de gains
- **T+1 à T+N** : Période de gains normale, génère le partage de consensus régional
- **Après le Jour T+N** : Résonance terminée, la génération de gains s'arrête

### Notes Importantes
1. Tout le partage de consensus régional n'est généré que pendant la période de gains des commandes de résonance subordonnées
2. Dans l'état de résonance terminée non réclamée, rien n'est compté dans la contribution de valeur et le calcul du réseau
3. Les participants doivent réclamer la résonance terminée et en créer de nouvelles pour continuer à participer au flux de valeur

---

## VI. Paramètres Techniques

### Paramètres de Chaîne
- **Blockchain** : BSC (Binance Smart Chain)
- **Standard de Token** : USDT (BEP-20)
- **Frais de Gas** : Supportés par les utilisateurs, environ 0,001-0,003 BNB/transaction
- **Caractéristiques du Contrat** : Non-évolutif, sans permissions d'administrateur

### Standards de Temps
- **Fuseau Horaire Unifié** : UTC+8 (Heure de Singapour)
- **Heure de Règlement Quotidien** : Quotidiennement à 00:00
- **Heure de Règlement Hebdomadaire** : Chaque lundi à 00:00

---

## VII. Processus de Participation

### Processus d'Opération de Base
1. **Phase de Préparation**
   - Préparer l'USDT de la chaîne BSC
   - Préparer une petite quantité de BNB comme frais de gas

2. **Phase de Résonance**
   - Sélectionner la dimension de résonance
   - Appeler la fonction createOrder du contrat
   - Transférer l'USDT au pool de résonance

3. **Phase de Récolte**
   - Attendre l'achèvement de la résonance
   - Appeler la fonction claimOrder pour réclamer
   - Décider de continuer la résonance

### Points Clés de Construction Communautaire
1. **Construction du Réseau** : Prioriser le développement de connexions directes de haute qualité, formant des zones ABC stables
2. **Sélection de Dimension** : Les membres principaux sont recommandés de choisir la quatrième dimension pour toutes les permissions de consensus
3. **Compétition de Nœuds** : Surveiller le classement de contribution de valeur totale Zone C, s'efforcer d'être dans le top 36

---

## VIII. Avertissement de Risques

### Risques Opérationnels
- **Erreur d'Adresse** : La perte de fonds due à une adresse de transfert incorrecte est irrécupérable
- **Perte de Clé Privée** : La perte de clé privée signifie la perte permanente du contrôle du compte
- **Risques de Phishing** : Faux sites web officiels ou adresses de contrat

---

## IX. Explication de la Terminologie Professionnelle

**Commande de Résonance Active** : Commande de résonance créée mais non terminée ou non réclamée

**Ligne de Flux de Valeur** : Branche entière du réseau subordonné commençant par un connecteur direct spécifique

**Contribution de Valeur en Temps Réel** : Somme de toutes les valeurs des commandes de résonance actuellement actives

**Période de Gains de Résonance** : Période de temps du deuxième jour après la création de la commande jusqu'à la date d'échéance

**Constructeur de Pont** : Les 36 derniers participants de quatrième dimension avant le redémarrage Phoenix

**Taux d'Amplification de Résonance** : Pourcentage de croissance quotidienne de la valeur

**Consensus Régional** : Mécanisme d'incitation multi-couches basé sur le réseau de flux de valeur

---

## X. Vérification de Sécurité

- Obtenir uniquement les adresses de contrat via les canaux officiels
- Le code du contrat est open source, vérifiable sur BSCScan
- Méfiez-vous des contrefaçons, vérifiez les sources d'information

---