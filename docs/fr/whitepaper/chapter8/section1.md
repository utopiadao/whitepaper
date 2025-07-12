# 8.1 Variables Centrales et Modèle de Stabilité

## Définition des Variables Centrales

### Variables de Liquidité
**P(t)** = Fonds totaux du pool de liquidité au temps t
**I(t)** = Taux d'entrée des fonds au temps t
**O(t)** = Taux de sortie des fonds au temps t
**N(t)** = Nombre de participants actifs au temps t

### Paramètres de Dimension de Résonance
**Dᵢ** = Montant d'investissement de la i-ème dimension (i=1,2,3,4)
**Tᵢ** = Cycle de résonance de la i-ème dimension (1,7,15,30 jours)
**Rᵢ** = Taux d'amplification de résonance de la i-ème dimension (0.5%,5%,13%,30%)

### Paramètres de Structure de Réseau
**Cᵢⱼ** = Contribution du participant i au consensus régional pour le participant j
**Wₖ** = Poids de valeur du k-ème nœud de prospérité
**α** = Ratio d'allocation du pool de prospérité (20%)

## Modèle de Stabilité de Base du Système

### Équation d'Équilibre de Liquidité

La stabilité de base du système peut être décrite par l'équation d'équilibre de liquidité :

**dP(t)/dt = I(t) - O(t)**

Où :

**I(t) = Σ[i=1 to 4] λᵢ(t) · Dᵢ · Nᵢ(t)** (taux d'entrée)
**O(t) = Σ[i=1 to 4] μᵢ(t) · Dᵢ · (1 + Rᵢ) · Nᵢ(t - Tᵢ)** (taux de sortie)

## Conditions de Stabilité

### Condition de Stabilité Critique
La condition nécessaire pour maintenir la stabilité du système est :

**P(t) >= Σ[i=1 to 4] Σ[s=t to t+24h] Oᵢ(s)**

C'est-à-dire que les fonds du pool de liquidité doivent pouvoir couvrir tous les paiements dus dans les 24 heures suivantes.

### Condition de Stabilité à Long Terme

**lim[T->∞] (1/T) · ∫[0 to T] [I(t) - O(t)]dt >= 0**

### Analyse de Stabilité Sous l'Échelle de Participation

Dans les situations de petite échelle, le système présente des caractéristiques de croissance exponentielle :

**N(t) = N₀ · e^(r·t)**

Où le taux de croissance est principalement alimenté par le mécanisme de consensus régional :

**r = Σ[i=1 to 5] βᵢ · R_zone,i - δ**

βᵢ sont les coefficients d'expansion pour chaque région, δ est le taux d'attrition naturel.

**Analyse de Stabilité : À petite échelle, le système dépend fortement de la croissance de nouveaux utilisateurs, avec une forte volatilité.**

## Système de Moyenne Échelle

Le système entre dans la phase de croissance en forme de S, suivant le modèle Logistique :

**dN/dt = rN(1 - N/K)**

Où K est la limite supérieure de capacité du système, liée à la capacité de traitement du réseau BSC.

### Caractéristiques de Stabilité :
- Le taux de croissance ralentit progressivement mais devient plus stable
- Le mécanisme de redémarrage Phoenix commence à jouer un rôle régulateur
- Le mécanisme de nœuds de prospérité fournit une stabilité supplémentaire

## Système de Grande Échelle

Le système entre dans un état d'équilibre dynamique, où le nombre de participants oscille autour du point d'équilibre :

**N(t) = Neq + A · sin(ωt + φ) · e^(-γt)**

Où Neq est le nombre équilibré de participants, γ est le coefficient d'amortissement.

**Garantie de Stabilité : Le mécanisme de redémarrage Phoenix assure la stabilité à long terme du système à grande échelle.**