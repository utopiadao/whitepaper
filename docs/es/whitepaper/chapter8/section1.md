# 8.1 Variables Centrales y Modelo de Estabilidad

## Definición de Variables Centrales

### Variables de Liquidez
**P(t)** = Fondos totales del pool de liquidez en el tiempo t
**I(t)** = Tasa de flujo de entrada de fondos en el tiempo t
**O(t)** = Tasa de flujo de salida de fondos en el tiempo t
**N(t)** = Número de participantes activos en el tiempo t

### Parámetros de Dimensión de Resonancia
**Dᵢ** = Monto de inversión de la i-ésima dimensión (i=1,2,3,4)
**Tᵢ** = Ciclo de resonancia de la i-ésima dimensión (1,7,15,30 días)
**Rᵢ** = Tasa de amplificación de resonancia de la i-ésima dimensión (0.5%,5%,13%,30%)

### Parámetros de Estructura de Red
**Cᵢⱼ** = Contribución del participante i al consenso regional para el participante j
**Wₖ** = Peso de valor del k-ésimo nodo de prosperidad
**α** = Ratio de asignación del pool de prosperidad (20%)

## Modelo Básico de Estabilidad del Sistema

### Ecuación de Balance de Liquidez

La estabilidad básica del sistema puede describirse mediante la ecuación de balance de liquidez:

**dP(t)/dt = I(t) - O(t)**

Donde:

**I(t) = Σ[i=1 to 4] λᵢ(t) · Dᵢ · Nᵢ(t)** (tasa de entrada)
**O(t) = Σ[i=1 to 4] μᵢ(t) · Dᵢ · (1 + Rᵢ) · Nᵢ(t - Tᵢ)** (tasa de salida)

## Condiciones de Estabilidad

### Condición de Estabilidad Crítica
La condición necesaria para mantener la estabilidad del sistema es:

**P(t) >= Σ[i=1 to 4] Σ[s=t to t+24h] Oᵢ(s)**

Es decir, los fondos del pool de liquidez deben poder cubrir todos los pagos vencidos en las próximas 24 horas.

### Condición de Estabilidad a Largo Plazo

**lim[T->∞] (1/T) · ∫[0 to T] [I(t) - O(t)]dt >= 0**

### Análisis de Estabilidad Bajo Escala de Participación

En situaciones de pequeña escala, el sistema exhibe características de crecimiento exponencial:

**N(t) = N₀ · e^(r·t)**

Donde la tasa de crecimiento está impulsada principalmente por el mecanismo de consenso regional:

**r = Σ[i=1 to 5] βᵢ · R_zone,i - δ**

βᵢ son los coeficientes de expansión para cada región, δ es la tasa de desgaste natural.

**Análisis de Estabilidad: A pequeña escala, el sistema depende altamente del crecimiento de nuevos usuarios, con alta volatilidad.**

## Sistema de Escala Media

El sistema entra en la fase de crecimiento en forma de S, siguiendo el modelo Logístico:

**dN/dt = rN(1 - N/K)**

Donde K es el límite superior de capacidad del sistema, relacionado con la capacidad de procesamiento de la red BSC.

### Características de Estabilidad:
- La tasa de crecimiento se ralentiza gradualmente pero se vuelve más estable
- El mecanismo de reinicio Fénix comienza a desempeñar un papel regulador
- El mecanismo de nodos de prosperidad proporciona estabilidad adicional

## Sistema de Gran Escala

El sistema entra en un estado de equilibrio dinámico, donde el número de participantes oscila alrededor del punto de equilibrio:

**N(t) = Neq + A · sin(ωt + φ) · e^(-γt)**

Donde Neq es el número equilibrado de participantes, γ es el coeficiente de amortiguación.

**Garantía de Estabilidad: El mecanismo de reinicio Fénix asegura la estabilidad a largo plazo del sistema a gran escala.**