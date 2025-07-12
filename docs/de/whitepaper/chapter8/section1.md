# 8.1 Kernvariablen und Stabilitätsmodell

## Definition der Kernvariablen

### Liquiditätsvariablen
**P(t)** = Gesamtkapital des Liquiditätspools zum Zeitpunkt t
**I(t)** = Kapitalzuflussrate zum Zeitpunkt t
**O(t)** = Kapitalabflussrate zum Zeitpunkt t
**N(t)** = Anzahl aktiver Teilnehmer zum Zeitpunkt t

### Resonanzdimensions-Parameter
**Dᵢ** = Investitionsbetrag der i-ten Dimension (i=1,2,3,4)
**Tᵢ** = Resonanzzyklus der i-ten Dimension (1,7,15,30 Tage)
**Rᵢ** = Resonanzverstärkungsrate der i-ten Dimension (0.5%,5%,13%,30%)

### Netzwerkstruktur-Parameter
**Cᵢⱼ** = Beitrag von Teilnehmer i zum regionalen Konsens für Teilnehmer j
**Wₖ** = Wertgewichtung des k-ten Wohlstandsknotens
**α** = Verteilungsanteil des Wohlstandspools (20%)

## Grundlegendes Stabilitätsmodell des Systems

### Liquiditätsgleichgewichtsgleichung

Die grundlegende Stabilität des Systems kann durch die Liquiditätsgleichgewichtsgleichung beschrieben werden:

**dP(t)/dt = I(t) - O(t)**

Wobei:

**I(t) = Σ[i=1 to 4] λᵢ(t) · Dᵢ · Nᵢ(t)** (Zuflussrate)
**O(t) = Σ[i=1 to 4] μᵢ(t) · Dᵢ · (1 + Rᵢ) · Nᵢ(t - Tᵢ)** (Abflussrate)

## Stabilitätsbedingungen

### Kritische Stabilitätsbedingung
Die notwendige Bedingung für die Aufrechterhaltung der Systemstabilität ist:

**P(t) >= Σ[i=1 to 4] Σ[s=t to t+24h] Oᵢ(s)**

Das bedeutet, dass die Liquiditätspool-Mittel alle fälligen Zahlungen in den nächsten 24 Stunden abdecken können müssen.

### Langfristige Stabilitätsbedingung

**lim[T->∞] (1/T) · ∫[0 to T] [I(t) - O(t)]dt >= 0**

### Stabilitätsanalyse unter Teilnahmegröße

Bei kleiner Größe zeigt das System exponentielles Wachstumsverhalten:

**N(t) = N₀ · e^(r·t)**

Wobei die Wachstumsrate hauptsächlich durch den regionalen Konsensmechanismus angetrieben wird:

**r = Σ[i=1 to 5] βᵢ · R_zone,i - δ**

βᵢ sind die Expansionskoeffizienten für jede Region, δ ist die natürliche Verlustrate.

**Stabilitätsanalyse: Bei kleiner Größe ist das System stark abhängig vom Wachstum neuer Benutzer, mit hoher Volatilität.**

## Mittleres System

Das System tritt in die S-förmige Wachstumsphase ein und folgt dem Logistic-Modell:

**dN/dt = rN(1 - N/K)**

Wobei K die obere Grenze der Systemkapazität ist, die mit der Verarbeitungskapazität des BSC-Netzwerks zusammenhängt.

### Stabilitätsmerkmale:
- Die Wachstumsrate verlangsamt sich allmählich, wird aber stabiler
- Der Phoenix-Neustart-Mechanismus beginnt eine regulierende Rolle zu spielen
- Der Wohlstandsknoten-Mechanismus bietet zusätzliche Stabilität

## Großes System

Das System tritt in einen dynamischen Gleichgewichtszustand ein, bei dem die Teilnehmerzahl um den Gleichgewichtspunkt oszilliert:

**N(t) = Neq + A · sin(ωt + φ) · e^(-γt)**

Wobei Neq die ausgeglichene Teilnehmerzahl ist, γ ist der Dämpfungskoeffizient.

**Stabilitätsgarantie: Der Phoenix-Neustart-Mechanismus gewährleistet die langfristige Stabilität des Systems bei großer Größe.**