### 🎯 Description

Questo progetto fornisce una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

Attualmente quelle supportate sono:

- `reverseString` = Inverte una stringa.
- `isPalindrome` = Verifica se una stringa è palindroma (ignorando maiuscole/minuscole e spazi).
- `truncateString` = Tronca una stringa a una lunghezza massima, aggiungendo "..." se necessario.
- `countCharacters` = Conta i caratteri di una stringa.

### 📜 Prerequisites

- **Node.js** ≥ `v18`
- **npm** (viene installato di default con Node.js)
- [**Git**](https://git-scm.com/) (raccomandato)

Per verificare che `node` e `git` siano installati correttamente digitare sul terminale

```bash
node -v
```

```bash
git -v
```

### 🔧 Installation

Per Git, **cloniamo** il progetto localmente e **installiamo le dipendenza** con il gestore di pacchetti npm

```bash
git clone https://github.com/FlavioVentu/LAB2.git
cd LAB2
npm ci
```

ℹ️ Se non stai usando un sistema di versionamento, puoi scaricare il progetto manualmente con il bottone "**Download ZIP**" nella sezione **Code**. Dopo aver estratto lo zip, navigare dentro lo zip e procedere con i passi citati in precedenza.

(⚠️ il progetto senza git non sarà automaticamente aggiornato)

### 🎮 Usage

Per lanciare la CLI digitare nella directory principale del progetto `npm start` aggiungendo i seguenti parametri:

- `<numero_funzione>` = un numero che corrisponde alle seguenti operazioni :
  - 1 --> `reverseString`.
  - 2 --> `isPalindrome`.
  - 3 --> `truncateString`.
  - 4 --> `countCharacters`.
- `<stringa_input>` = la stringa che vogliamo manipolare.
- `[parametro_aggiuntivo]` = indispensabile per la funzione `truncateString` mentre non ha nessun effetto sulle altre operazioni.

Esempi di esecuzione possono essere:

- `npm start 1 pippo` che produce la stringa `oppip`
- `npm start 2 apa` che restituisce vero.
- `npm start 3 pippo 1` che produce la stringa `p...`.
- `npm start 4 pippo` che restituisce il conteggio `p: 3, i: 1, o: 1`.

### 🧪 Testing

Questo progetto usa [Jest](https://jestjs.io/) framework per gli unit test.

per runnare la **test suite** e vedere la **coverage** digitare sul terminale

```bash
npm test
```

Il coverage report sarà salvato nella cartella `tests/coverage`.

### ♾️ CI pipeline

Questo progetto include una **GitHub Actions workflow** perla CI, che viene runnato ad ogni pull request sul ramo principale (main). Esegue la test suite, genera un report e lo salva come artefatto per poter essere visionato facilmente. Per scaricare questo artefatto andare nella sezione [Actions tab](https://github.com/FlavioVentu/LAB2/actions) su GitHub.
