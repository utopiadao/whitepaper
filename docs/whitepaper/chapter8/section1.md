# 8.1 Core Variables and Stability Model

## Core Variable Definition

### Liquidity Variables
**P(t)** = Total funds in the liquidity pool at time t
**I(t)** = Fund inflow rate at time t
**O(t)** = Fund outflow rate at time t
**N(t)** = Number of active participants at time t

### Resonance Dimension Parameters
**Dᵢ** = Investment amount of the i-th dimension (i=1,2,3,4)
**Tᵢ** = Resonance cycle of the i-th dimension (1,7,15,30 days)
**Rᵢ** = Resonance amplification rate of the i-th dimension (0.5%,5%,13%,30%)

### Network Structure Parameters
**Cᵢⱼ** = Participant i's contribution to regional consensus for participant j
**Wₖ** = Value weight of the k-th prosperity node
**α** = Prosperity pool allocation ratio (20%)

## Basic System Stability Model

### Liquidity Balance Equation

The basic stability of the system can be described by the liquidity balance equation:

**dP(t)/dt = I(t) - O(t)**

Where:

**I(t) = Σ[i=1 to 4] λᵢ(t) · Dᵢ · Nᵢ(t)** (inflow rate)
**O(t) = Σ[i=1 to 4] μᵢ(t) · Dᵢ · (1 + Rᵢ) · Nᵢ(t - Tᵢ)** (outflow rate)

## Stability Conditions

### Critical Stability Condition
The necessary condition for maintaining system stability is:

**P(t) >= Σ[i=1 to 4] Σ[s=t to t+24h] Oᵢ(s)**

That is, the liquidity pool funds must be able to cover all due payments in the next 24 hours.

### Long-term Stability Condition

**lim[T->∞] (1/T) · ∫[0 to T] [I(t) - O(t)]dt >= 0**

### Stability Analysis Under Participation Scale

In small-scale situations, the system exhibits exponential growth characteristics:

**N(t) = N₀ · e^(r·t)**

Where the growth rate is mainly driven by the regional consensus mechanism:

**r = Σ[i=1 to 5] βᵢ · R_zone,i - δ**

βᵢ are the expansion coefficients for each region, δ is the natural attrition rate.

**Stability Analysis: At small scale, the system is highly dependent on new user growth, with high volatility.**

## Medium-scale System

The system enters the S-shaped growth phase, following the Logistic model:

**dN/dt = rN(1 - N/K)**

Where K is the system capacity upper limit, related to BSC network processing capacity.

### Stability Characteristics:
- Growth rate gradually slows down but becomes more stable
- Phoenix restart mechanism begins to play a regulatory role
- Prosperity node mechanism provides additional stability

## Large-scale System

The system enters a dynamic equilibrium state, where the number of participants oscillates around the equilibrium point:

**N(t) = Neq + A · sin(ωt + φ) · e^(-γt)**

Where Neq is the balanced number of participants, γ is the damping coefficient.

**Stability Guarantee: The Phoenix restart mechanism ensures long-term stability of the system at large scale.**