function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

// TEST 1
if (suma(2, 2) !== 4) {
  throw new Error(" Error en suma");
}


if (resta(5, 3) !== 2) {
  throw new Error(" Error en resta");
}


if (suma(-1, -1) !== -2) {
  throw new Error(" Error con negativos");
}

console.log("Todos los tests pasaron");


