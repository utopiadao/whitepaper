# Spiegazione Dettagliata del Modello Economico di Utopia

## Panoramica del Sistema

Utopia è una rete patrimoniale di consenso decentralizzata basata sulla catena BSC, che realizza il flusso e la distribuzione automatici del valore attraverso smart contract. Il sistema adotta la filosofia di progettazione "distribuisci una volta, non aggiornare mai", garantendo regole trasparenti e immutabili.

### Meccanismi Centrali
- **Sistema Pool di Risonanza**: Quattro dimensioni di scelte di risonanza del valore
- **Rete di Consenso Regionale**: Sistema di consenso a tre livelli basato sul flusso di valore
- **Meccanismo Nodi di Prosperità**: Selezione settimanale dei 36 principali contributori di valore
- **Meccanismo Riavvio Phoenix**: Gestione automatica del rischio del sistema ed eredità del valore

---

## I. Sistema di Valore del Pool di Risonanza

### Spiegazione Dettagliata delle Dimensioni di Risonanza

| Dimensione | Input di Valore | Ciclo di Risonanza | Ritorno di Risonanza | Tasso di Amplificazione | Permessi Sbloccati |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Prima Dimensione | 100 USDT | T+1 giorno | 100,5 USDT | 0,5% | Nessun permesso aggiuntivo |
| Seconda Dimensione | 1.000 USDT | T+7 giorni | 1.050 USDT | 5% | Permessi consenso Zona A |
| Terza Dimensione | 2.000 USDT | T+15 giorni | 2.260 USDT | 13% | Permessi consenso Zona A+B |
| Quarta Dimensione | 3.000 USDT | T+30 giorni | 3.900 USDT | 30% | Permessi consenso Zona A+B+C |

### Regole Importanti
1. **Limitazione Risonanza Singola**: Ogni indirizzo può detenere solo un ordine di risonanza attivo alla volta
2. **Meccanismo di Rilascio del Valore**: Richiesta rivendicazione manuale dopo il completamento della risonanza, conteggiata nel valore di rete dopo la rivendicazione
3. **Modello di Pre-calcolo**: Tutti i ritorni di risonanza sono determinati al momento del deployment del contratto, completamente trasparenti e prevedibili

---

## II. Meccanismo della Rete di Consenso Regionale

### Regole di Divisione delle Zone

Il sistema divide automaticamente la rete di valore dei partecipanti in tre zone di consenso:

**Zona A (Zona Centrale)**
- Definizione: La linea con il contributo più alto nella rete di flusso di valore diretto
- Calcolo: Somma di tutti i valori degli ordini di risonanza attivi in questa linea

**Zona B (Zona Alone)**
- Definizione: La linea con il secondo contributo più alto nella rete di flusso di valore diretto
- Calcolo: Somma di tutti i valori degli ordini di risonanza attivi in questa linea

**Zona C (Zona Galassia)**
- Definizione: Tutte le altre linee di flusso di valore tranne Zone A e B
- Calcolo: Somma dei valori degli ordini di risonanza attivi per tutte le linee rimanenti

### Formule di Calcolo del Consenso Regionale

**Condivisione Consenso Zona A**
- Base Consenso: Guadagni giornalieri di risonanza della persona direttamente connessa alla Zona A (non l'intera Zona A)
- Proporzione Consenso: 30%
- Esempio: Il connettore diretto della Zona A partecipa con 3000 USDT (quarta dimensione), guadagni giornalieri 30 USDT, ricevi 9 USDT/giorno

**Condivisione Consenso Zona B**
- Base Consenso: Somma dei guadagni giornalieri di risonanza per tutti i partecipanti nella linea Zona B
- Proporzione Consenso: 10%
- Esempio: I guadagni giornalieri totali della linea Zona B sono 500 USDT, ricevi 50 USDT/giorno

**Condivisione Consenso Zona C**
- Base Consenso: Somma dei guadagni giornalieri di risonanza per tutti i partecipanti nelle linee Zona C
- Proporzione Consenso: 15%
- Esempio: I guadagni giornalieri totali di tutte le linee Zona C sono 1000 USDT, ricevi 150 USDT/giorno

### Requisiti di Permesso per Dimensione
- **Seconda Dimensione**: Può ricevere solo condivisione consenso Zona A
- **Terza Dimensione**: Può ricevere condivisione consenso Zona A+B
- **Quarta Dimensione**: Può ricevere tutta la condivisione consenso Zona A+B+C

### Spiegazione del Flusso di Valore in Tempo Reale
1. La divisione delle zone si basa sui contributi di valore degli ordini di risonanza attivi in tempo reale, con aggiustamento dinamico
2. Dopo che un partecipante completa la risonanza, il suo contributo di valore viene immediatamente rimosso dalla rete
3. Dopo che un partecipante crea una nuova risonanza, il suo contributo di valore viene immediatamente aggiunto al calcolo di rete

---

## III. Distribuzione del Valore dei Nodi di Prosperità

### Criteri di Selezione
- **Indicatore di Selezione**: Contributo totale di valore in tempo reale Zona C dei partecipanti
- **Quota di Selezione**: Top 36
- **Ciclo di Selezione**: Selezione automatica ogni lunedì

### Fonte e Distribuzione del Pool di Prosperità
- **Fonte Pool di Prosperità**: 20% dei guadagni di risonanza giornalieri dell'intera rete, accumulati giornalmente nel pool
- **Tempo di Distribuzione**: Liquidazione del pool di prosperità della settimana scorsa ogni lunedì
- **Metodo di Distribuzione**: Distribuzione ponderata secondo la proporzione di contributo di valore Zona C dei 36 nodi

### Esempio di Calcolo
```
Condivisione Nodo = Totale Pool di Prosperità Settimanale × (Contributo Personale Valore Zona C ÷ Somma Contributi Valore Zona C dei 36 Nodi)
```

---

## IV. Meccanismo di Riavvio Phoenix

### Condizioni di Attivazione
Quando i fondi disponibili del sistema < ritorni totali di risonanza dovuti per il giorno, il riavvio Phoenix viene attivato automaticamente

### Processo di Riavvio

**Fase 1: Blocco del Sistema**
- Il sistema entra in un periodo di protezione di 3 giorni
- Sospendere tutte le operazioni di afflusso e deflusso di valore
- Registrare gli ultimi 36 partecipanti di quarta dimensione

**Fase 2: Eredità del Valore**
Il pool di fondi rimanente viene distribuito secondo le seguenti proporzioni:
- **10%**: Distribuito equamente agli ultimi 36 partecipanti di quarta dimensione (ricompensa ponte)
- **90%**: Trasferito al pool di prosperità continua

**Fase 3: Inizio del Nuovo Ciclo**
- Reset del sistema, inizio del nuovo ciclo di risonanza
- Tutti i partecipanti possono riavviare la risonanza del valore

### Piano di Prosperità Continua

Nel nuovo ciclo, il 90% del valore ereditato sarà distribuito attraverso 4 selezioni:

| Tempo di Selezione | Proporzione di Distribuzione | Criterio di Selezione |
|:---:|:---:|:---:|
| Settimana 4 | 10% del pool totale | Top 36 contributori di valore Zona C quella settimana |
| Settimana 8 | 20% del pool totale | Top 36 contributori di valore Zona C quella settimana |
| Settimana 12 | 30% del pool totale | Top 36 contributori di valore Zona C quella settimana |
| Settimana 16 | 40% del pool totale | Top 36 contributori di valore Zona C quella settimana |

**Nota**: Ogni selezione viene condotta indipendentemente, basata sul contributo di valore in tempo reale per la settimana corrente, non sui contributi cumulativi

---

## V. Regole del Periodo di Guadagno di Risonanza

### Calcolo del Ciclo di Risonanza T+N
- **Giorno T**: Giorno di creazione della risonanza, non genera guadagni
- **T+1 a T+N**: Periodo di guadagno normale, genera condivisione consenso regionale
- **Dopo il Giorno T+N**: Risonanza completata, la generazione di guadagni si ferma

### Note Importanti
1. Tutta la condivisione del consenso regionale viene generata solo durante il periodo di guadagno degli ordini di risonanza subordinati
2. Nello stato di risonanza completata non rivendicata, non viene conteggiato in alcun contributo di valore e calcolo di rete
3. I partecipanti devono rivendicare la risonanza completata e crearne di nuove per continuare a partecipare al flusso di valore

---

## VI. Parametri Tecnici

### Parametri di Catena
- **Blockchain**: BSC (Binance Smart Chain)
- **Standard Token**: USDT (BEP-20)
- **Commissioni Gas**: A carico degli utenti, circa 0,001-0,003 BNB/transazione
- **Caratteristiche del Contratto**: Non aggiornabile, nessun permesso admin

### Standard Temporali
- **Fuso Orario Unificato**: UTC+8 (Ora di Singapore)
- **Ora di Liquidazione Giornaliera**: Giornalmente alle 00:00
- **Ora di Liquidazione Settimanale**: Ogni lunedì alle 00:00

---

## VII. Processo di Partecipazione

### Processo Operativo di Base
1. **Fase di Preparazione**
   - Preparare USDT catena BSC
   - Preparare piccola quantità di BNB come commissioni gas

2. **Fase di Risonanza**
   - Selezionare dimensione di risonanza
   - Chiamare funzione createOrder del contratto
   - Trasferire USDT al pool di risonanza

3. **Fase di Raccolta**
   - Attendere completamento risonanza
   - Chiamare funzione claimOrder per rivendicare
   - Decidere se continuare la risonanza

### Punti Chiave di Costruzione della Comunità
1. **Costruzione della Rete**: Prioritizzare lo sviluppo di connessioni dirette di alta qualità, formando zone ABC stabili
2. **Selezione Dimensione**: Si raccomanda ai membri principali di scegliere la quarta dimensione per tutti i permessi di consenso
3. **Competizione Nodi**: Monitorare classifica contributo valore totale Zona C, sforzarsi per top 36

---

## VIII. Avviso di Rischio

### Rischi Operativi
- **Errore Indirizzo**: La perdita di fondi per indirizzo di trasferimento errato è irrecuperabile
- **Perdita Chiave Privata**: La perdita della chiave privata significa perdita permanente del controllo dell'account
- **Rischi Phishing**: Siti web ufficiali falsi o indirizzi contratto

---

## IX. Spiegazione della Terminologia Professionale

**Ordine di Risonanza Attivo**: Ordine di risonanza creato ma non completato o non rivendicato

**Linea di Flusso di Valore**: Intero ramo di rete subordinato che parte da uno specifico connettore diretto

**Contributo di Valore in Tempo Reale**: Somma di tutti i valori degli ordini di risonanza attualmente attivi

**Periodo di Guadagno di Risonanza**: Periodo di tempo dal secondo giorno dopo la creazione dell'ordine alla data di scadenza

**Costruttore di Ponte**: Gli ultimi 36 partecipanti di quarta dimensione prima del riavvio Phoenix

**Tasso di Amplificazione della Risonanza**: Percentuale di crescita giornaliera del valore

**Consenso Regionale**: Meccanismo di incentivazione multi-livello basato sulla rete di flusso di valore

---

## X. Verifica di Sicurezza

- Ottenere indirizzi contratto solo attraverso canali ufficiali
- Il codice del contratto è open source, verificabile su BSCScan
- Attenzione alle contraffazioni, verificare le fonti di informazione

---