# 8.1 Variabili Centrali e Modello di Stabilità

## Definizione delle Variabili Centrali

### Variabili di Liquidità
**P(t)** = Fondi totali del pool di liquidità al tempo t
**I(t)** = Tasso di afflusso di fondi al tempo t
**O(t)** = Tasso di deflusso di fondi al tempo t
**N(t)** = Numero di partecipanti attivi al tempo t

### Parametri di Dimensione di Risonanza
**Dᵢ** = Importo di investimento della i-esima dimensione (i=1,2,3,4)
**Tᵢ** = Ciclo di risonanza della i-esima dimensione (1,7,15,30 giorni)
**Rᵢ** = Tasso di amplificazione di risonanza della i-esima dimensione (0.5%,5%,13%,30%)

### Parametri di Struttura di Rete
**Cᵢⱼ** = Contributo del partecipante i al consenso regionale per il partecipante j
**Wₖ** = Peso di valore del k-esimo nodo di prosperità
**α** = Rapporto di allocazione del pool di prosperità (20%)

## Modello di Stabilità Base del Sistema

### Equazione di Equilibrio di Liquidità

La stabilità base del sistema può essere descritta attraverso l'equazione di equilibrio di liquidità:

**dP(t)/dt = I(t) - O(t)**

Dove:

**I(t) = Σ[i=1 to 4] λᵢ(t) · Dᵢ · Nᵢ(t)** (tasso di afflusso)
**O(t) = Σ[i=1 to 4] μᵢ(t) · Dᵢ · (1 + Rᵢ) · Nᵢ(t - Tᵢ)** (tasso di deflusso)

## Condizioni di Stabilità

### Condizione di Stabilità Critica
La condizione necessaria per mantenere la stabilità del sistema è:

**P(t) >= Σ[i=1 to 4] Σ[s=t to t+24h] Oᵢ(s)**

Ovvero i fondi del pool di liquidità devono essere in grado di coprire tutti i pagamenti in scadenza nelle prossime 24 ore.

### Condizione di Stabilità a Lungo Termine

**lim[T->∞] (1/T) · ∫[0 to T] [I(t) - O(t)]dt >= 0**

### Analisi di Stabilità Sotto Scala di Partecipazione

In situazioni di piccola scala, il sistema esibisce caratteristiche di crescita esponenziale:

**N(t) = N₀ · e^(r·t)**

Dove il tasso di crescita è principalmente guidato dal meccanismo di consenso regionale:

**r = Σ[i=1 to 5] βᵢ · R_zone,i - δ**

βᵢ sono i coefficienti di espansione per ogni regione, δ è il tasso di attrito naturale.

**Analisi di Stabilità: A piccola scala, il sistema è altamente dipendente dalla crescita di nuovi utenti, con alta volatilità.**

## Sistema di Scala Media

Il sistema entra nella fase di crescita a forma di S, seguendo il modello Logistico:

**dN/dt = rN(1 - N/K)**

Dove K è il limite superiore della capacità del sistema, correlato alla capacità di elaborazione della rete BSC.

### Caratteristiche di Stabilità:
- Il tasso di crescita rallenta gradualmente ma diventa più stabile
- Il meccanismo di riavvio Phoenix inizia a svolgere un ruolo regolatorio
- Il meccanismo dei nodi di prosperità fornisce stabilità aggiuntiva

## Sistema di Grande Scala

Il sistema entra in uno stato di equilibrio dinamico, dove il numero di partecipanti oscilla attorno al punto di equilibrio:

**N(t) = Neq + A · sin(ωt + φ) · e^(-γt)**

Dove Neq è il numero equilibrato di partecipanti, γ è il coefficiente di smorzamento.

**Garanzia di Stabilità: Il meccanismo di riavvio Phoenix assicura la stabilità a lungo termine del sistema su grande scala.**