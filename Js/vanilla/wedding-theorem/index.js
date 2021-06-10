// Liczba mężczyzn lub kobiet
N = 4

// Ta funkcja zwraca wartość true, jeśli kobieta „w” woli mężczyznę „m1” od mężczyzny „m”
function wPrefersM1OverM(prefer, w, m, m1) {
  for (var i = 0; i < N; i++) {
    if (prefer[w][i] == m1) return true
    if (prefer[w][i] == m) return false
  }
}

// Drukuje stabilne dopasowanie dla N chłopców i N dziewcząt. Chłopcy są ponumerowani od 0 do
// N-1. Dziewczęta są ponumerowane od N do 2N-1.
function stableMarriage(prefer) {
  // Sklepy partnerka kobiet.
  // przechowuje informacje o płatnościach. Wartość wPartner[i]
  // wskazuje partnera przypisanego do kobiety N+i.
  // liczba kobiet od N do 2*N-1. Wartość -1
  // wskazuje, że (N+i)ta kobieta jest wolna
  const wPartner = new Array(N)

  // Tablica do przechowywania dostępności mężczyzn. Jeśli mFree[i] to
  // fałsz, wtedy człowiek 'i' jest wolny, w przeciwnym razie zajęty.
  mFree = new Array(N)

  // Uwolniłem wszystkich mężczyzn i kobiety wolnymi
  wPartner.fill(-1)
  mFree.fill(false)
  let freeCount = N

  // While there are free men
  while (freeCount > 0) {
    // Wybieram pierwszą wolną osobę (możemy wybrać każdego)
    let m
    for (m = 0; m < N; m++) if (mFree[m] == false) break

    // Jedna po drugiej trafiają do wszystkich kobiet zgodnie z moimi preferencjami.
    // Tutaj m jest wybranym wolnym człowiekiem
    for (var i = 0; i < N && mFree[m] == false; i++) {
      const w = prefer[m][i]

      // Kobieta preferencji jest wolna, w i m stają się
      // partnerzy (partnerstwo może ulec zmianie później).
      //  Możemy więc powiedzieć, że są zaręczeni, a nie małżeństwem
      if (wPartner[w - N] == -1) {
        wPartner[w - N] = m
        mFree[m] = true
        freeCount--
      } // Jeśli w nie jest wolne
      else {
        const m1 = wPartner[w - N]

        // Jeśli w woli m od jej obecnego zaangażowania m1,
        // następnie zerwij zaangażowanie między w i m1 oraz
        // zaangażuj m z w.
        if (wPrefersM1OverM(prefer, w, m, m1) == false) {
          wPartner[w - N] = m
          mFree[m] = true
          mFree[m1] = false
        }
      }
    }
  }

  // Wydrukuję rozwiązanie
  let solution
  for (var i = 0; i < N; i++) {
    solution = ' ' + (i + N) + '	 ' + wPartner[i]
  }

  return solution
}

const prefer = [
  [7, 5, 6, 4],
  [5, 4, 6, 7],
  [4, 5, 6, 7],
  [4, 5, 6, 7],
  [0, 1, 2, 3],
  [0, 1, 2, 3],
  [0, 1, 2, 3],
  [0, 1, 2, 3],
]
console.log(stableMarriage(prefer))
