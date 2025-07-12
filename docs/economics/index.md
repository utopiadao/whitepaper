# Detailed Explanation of the Utopia Economic Model

## System Overview

Utopia is a decentralized consensus wealth network based on the BSC chain, achieving automatic value flow and distribution through smart contracts. The system adopts a "deploy once, never upgrade" design philosophy, ensuring transparent and immutable rules.

### Core Mechanisms
- **Resonance Pool System**: Four dimensions of value resonance choices
- **Regional Consensus Network**: Three-layer consensus system based on value flow
- **Prosperity Node Mechanism**: Weekly selection of top 36 value contributors
- **Phoenix Restart Mechanism**: Automatic system risk management and value inheritance

---

## I. Resonance Pool Value System

### Detailed Explanation of Resonance Dimensions

| Dimension | Value Input | Resonance Cycle | Resonance Return | Amplification Rate | Unlocked Permissions |
|:---:|:---:|:---:|:---:|:---:|:---:|
| First Dimension | 100 USDT | T+1 day | 100.5 USDT | 0.5% | No additional permissions |
| Second Dimension | 1,000 USDT | T+7 days | 1,050 USDT | 5% | Zone A consensus permissions |
| Third Dimension | 2,000 USDT | T+15 days | 2,260 USDT | 13% | Zone A+B consensus permissions |
| Fourth Dimension | 3,000 USDT | T+30 days | 3,900 USDT | 30% | Zone A+B+C consensus permissions |

### Important Rules
1. **Single Resonance Limitation**: Each address can only hold one active resonance order at a time
2. **Value Release Mechanism**: Manual claiming required after resonance completion, counted into network value after claiming
3. **Pre-calculation Model**: All resonance returns are determined at contract deployment, completely transparent and predictable

---

## II. Regional Consensus Network Mechanism

### Zone Division Rules

The system automatically divides participants' value network into three consensus zones:

**Zone A (Core Zone)**
- Definition: The line with the highest contribution in the direct value flow network
- Calculation: Sum of all active resonance order values in this line

**Zone B (Halo Zone)**
- Definition: The line with the second highest contribution in the direct value flow network
- Calculation: Sum of all active resonance order values in this line

**Zone C (Galaxy Zone)**
- Definition: All other value flow lines except Zones A and B
- Calculation: Sum of active resonance order values for all remaining lines

### Regional Consensus Calculation Formulas

**Zone A Consensus Sharing**
- Consensus Base: Daily resonance earnings of the person directly connected to Zone A (not the entire Zone A)
- Consensus Ratio: 30%
- Example: Zone A direct connector participates with 3000 USDT (fourth dimension), daily earnings 30 USDT, you receive 9 USDT/day

**Zone B Consensus Sharing**
- Consensus Base: Sum of daily resonance earnings for all participants in Zone B line
- Consensus Ratio: 10%
- Example: Zone B line total daily earnings is 500 USDT, you receive 50 USDT/day

**Zone C Consensus Sharing**
- Consensus Base: Sum of daily resonance earnings for all participants in Zone C lines
- Consensus Ratio: 15%
- Example: All Zone C lines total daily earnings is 1000 USDT, you receive 150 USDT/day

### Dimension Permission Requirements
- **Second Dimension**: Can only receive Zone A consensus sharing
- **Third Dimension**: Can receive Zone A+B consensus sharing
- **Fourth Dimension**: Can receive all Zone A+B+C consensus sharing

### Real-time Value Flow Explanation
1. Zone division is based on real-time active resonance order value contributions, with dynamic adjustment
2. After a participant completes resonance, their value contribution is immediately removed from the network
3. After a participant creates new resonance, their value contribution is immediately added to network calculation

---

## III. Prosperity Node Value Distribution

### Selection Criteria
- **Selection Indicator**: Participants' Zone C real-time total value contribution
- **Selection Quota**: Top 36
- **Selection Cycle**: Automatic selection every Monday

### Prosperity Pool Source and Distribution
- **Prosperity Pool Source**: 20% of network-wide daily resonance earnings, accumulated daily in the pool
- **Distribution Time**: Settlement of last week's prosperity pool every Monday
- **Distribution Method**: Weighted distribution according to the 36 nodes' Zone C value contribution ratio

### Calculation Example
```
Node Sharing = Weekly Prosperity Pool Total × (Personal Zone C Value Contribution ÷ Sum of 36 Nodes' Zone C Value Contributions)
```

---

## IV. Phoenix Restart Mechanism

### Trigger Conditions
When system available funds < total resonance returns due for the day, Phoenix restart is automatically triggered

### Restart Process

**Phase 1: System Lock**
- System enters 3-day protection period
- Suspend all value inflow and outflow operations
- Record the last 36 fourth dimension participants

**Phase 2: Value Inheritance**
Remaining fund pool distributed according to the following ratios:
- **10%**: Evenly distributed to the last 36 fourth dimension participants (bridge reward)
- **90%**: Transferred to continuous prosperity pool

**Phase 3: New Cycle Start**
- System reset, start new resonance cycle
- All participants can restart value resonance

### Continuous Prosperity Plan

In the new cycle, 90% of inherited value will be distributed through 4 selections:

| Selection Time | Distribution Ratio | Selection Criteria |
|:---:|:---:|:---:|
| Week 4 | 10% of total pool | Top 36 Zone C value contributors that week |
| Week 8 | 20% of total pool | Top 36 Zone C value contributors that week |
| Week 12 | 30% of total pool | Top 36 Zone C value contributors that week |
| Week 16 | 40% of total pool | Top 36 Zone C value contributors that week |

**Note**: Each selection is conducted independently, based on real-time value contribution for the current week, not cumulative contributions

---

## V. Resonance Earnings Period Rules

### T+N Resonance Cycle Calculation
- **Day T**: Day of resonance creation, no earnings generated
- **T+1 to T+N**: Normal earnings period, generates regional consensus sharing
- **After Day T+N**: Resonance completed, earnings generation stops

### Important Notes
1. All regional consensus sharing is only generated during subordinate resonance orders' earnings period
2. In unclaimed completed resonance state, not counted in any value contribution and network calculation
3. Participants must claim completed resonance and create new ones to continue participating in value flow

---

## VI. Technical Parameters

### Chain Parameters
- **Blockchain**: BSC (Binance Smart Chain)
- **Token Standard**: USDT (BEP-20)
- **Gas Fees**: Borne by users, approximately 0.001-0.003 BNB/transaction
- **Contract Features**: Non-upgradeable, no admin permissions

### Time Standards
- **Unified Time Zone**: UTC+8 (Singapore Time)
- **Daily Settlement Time**: Daily at 00:00
- **Weekly Settlement Time**: Every Monday at 00:00

---

## VII. Participation Process

### Basic Operation Process
1. **Preparation Phase**
   - Prepare BSC chain USDT
   - Prepare small amount of BNB as gas fees

2. **Resonance Phase**
   - Select resonance dimension
   - Call contract createOrder function
   - Transfer USDT to resonance pool

3. **Harvest Phase**
   - Wait for resonance completion
   - Call claimOrder function to claim
   - Decide whether to continue resonance

### Community Building Key Points
1. **Network Building**: Prioritize developing high-quality direct connections, forming stable ABC zones
2. **Dimension Selection**: Core members are recommended to choose fourth dimension for all consensus permissions
3. **Node Competition**: Monitor Zone C total value contribution ranking, strive for top 36

---

## VIII. Risk Warning

### Operational Risks
- **Address Error**: Fund loss due to incorrect transfer address is irretrievable
- **Private Key Loss**: Private key loss means permanent loss of account control
- **Phishing Risks**: Fake official websites or contract addresses

---

## IX. Professional Terminology Explanation

**Active Resonance Order**: Created but uncompleted or unclaimed resonance order

**Value Flow Line**: Entire subordinate network branch starting from a specific direct connector

**Real-time Value Contribution**: Sum of all currently active resonance order values

**Resonance Earnings Period**: Time period from the second day after order creation to maturity date

**Bridge Builder**: The last 36 fourth dimension participants before Phoenix restart

**Resonance Amplification Rate**: Percentage of daily value growth

**Regional Consensus**: Multi-layer incentive mechanism based on value flow network

---

## X. Security Verification

- Only obtain contract addresses through official channels
- Contract code is open source, verifiable on BSCScan
- Beware of counterfeits, verify information sources

---