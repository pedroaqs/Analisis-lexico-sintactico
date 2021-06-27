let identificadores = {
  patron: /[a-z]/,
  lexemas: [],
  token: "Id",
};
let numeros = {
  patron: /[0-9]/,
  lexemas: [],
  token: "num",
};
let operadores = {
  patron: /\+|-|\*|\/|\%/,
  lexemas: [],
  token: "oper",
};
let asignacion = {
  patron: /=/,
  lexemas: [],
  token: "asignacion",
};
let parentesis = {
  patron: /\(|\)/,
  lexemas: [],
  token: "parentesis",
};
let separador = {
  patron: /;/,
  lexemas: [],
  token: "separador",
};
let bloque = {
  patron: /{|}/,
  lexemas: [],
  token: "bloque",
};
let lectura = {
  patron: /R/,
  lexemas: [],
  token: "R",
};
let escritura = {
  patron: /W/,
  lexemas: [],
  token: "W",
};
let main = {
  patron: /M/,
  lexemas: [],
  token: "M",
};
let vError = {
  patron: /[A-L|N-Q|S-V|X-Z]/,
  lexemas: [],
  token: "Error",
};
let TDS = []; //Vector para llenar la tabla de simbolos
let ST = []; //Vector para llenar la secuencia de tokens
function lexer(fuente) {
  let indexTDS = 0;
  for (let index = 0; index < fuente.length; index++) {
    if (identificadores.patron.test(fuente[index])) {
      if (!identificadores.lexemas.some((e) => e == fuente[index])) {
        identificadores.lexemas.push(fuente[index]);
      }
      TDS.push({ indexTDS, valor: fuente[index] });
      ST.push({ token: identificadores.token, indexTDS });
      indexTDS++;
    }
    if (numeros.patron.test(fuente[index])) {
      if (!numeros.lexemas.some((e) => e == fuente[index])) {
        numeros.lexemas.push(fuente[index]);
      }
      TDS.push({ indexTDS, valor: fuente[index] });
      ST.push({ token: numeros.token, indexTDS });
      indexTDS++;
    }
    if (operadores.patron.test(fuente[index])) {
      if (!operadores.lexemas.some((e) => e == fuente[index])) {
        operadores.lexemas.push(fuente[index]);
      }
      TDS.push({ indexTDS, valor: fuente[index] });
      ST.push({ token: operadores.token, indexTDS });
      indexTDS++;
    }
    if (asignacion.patron.test(fuente[index])) {
      if (!asignacion.lexemas.some((e) => e == fuente[index])) {
        asignacion.lexemas.push(fuente[index]);
      }
      ST.push({ token: asignacion.token });
    }
    if (parentesis.patron.test(fuente[index])) {
      if (!parentesis.lexemas.some((e) => e == fuente[index])) {
        parentesis.lexemas.push(fuente[index]);
      }
      TDS.push({ indexTDS, valor: fuente[index] });
      ST.push({ token: parentesis.token, indexTDS });
      indexTDS++;
    }
    if (separador.patron.test(fuente[index])) {
      if (!separador.lexemas.some((e) => e == fuente[index])) {
        separador.lexemas.push(fuente[index]);
      }
      ST.push({ token: separador.token });
    }
    if (bloque.patron.test(fuente[index])) {
      if (!bloque.lexemas.some((e) => e == fuente[index])) {
        bloque.lexemas.push(fuente[index]);
      }
      TDS.push({ indexTDS, valor: fuente[index] });
      ST.push({ token: bloque.token, indexTDS });
      indexTDS++;
    }
    if (lectura.patron.test(fuente[index])) {
      if (!lectura.lexemas.some((e) => e == fuente[index])) {
        lectura.lexemas.push(fuente[index]);
      }
      ST.push({ token: lectura.token });
    }
    if (escritura.patron.test(fuente[index])) {
      if (!escritura.lexemas.some((e) => e == fuente[index])) {
        escritura.lexemas.push(fuente[index]);
      }
      ST.push({ token: escritura.token });
    }
    if (main.patron.test(fuente[index])) {
      if (!main.lexemas.some((e) => e == fuente[index])) {
        main.lexemas.push(fuente[index]);
      }
      ST.push({ token: main.token });
    }
    if (vError.patron.test(fuente[index])) {
      if (!vError.lexemas.some((e) => e == fuente[index])) {
        vError.lexemas.push(fuente[index]);
      }
      TDS.push({ indexTDS, valor: fuente[index] });
      ST.push({ token: vError.token, indexTDS });
      indexTDS++;
    }
  }
}
function clear() {
  identificadores.lexemas = [];
  numeros.lexemas = [];
  operadores.lexemas = [];
  asignacion.lexemas = [];
  parentesis.lexemas = [];
  separador.lexemas = [];
  bloque.lexemas = [];
  lectura.lexemas = [];
  escritura.lexemas = [];
  main.lexemas = [];
  vError.lexemas = [];
  TDS = [];
  ST = [];
  document.getElementById("consola").innerHTML = "";
  document.getElementById("st").innerHTML = "";
  document.getElementById("tcl").innerHTML = "";
  document.getElementById("ts").innerHTML = "";
  document.getElementById("pi").innerHTML = "";
}
function pintarST() {
  let html = ST.map((s) => {
    return `<tr><td>${s.token}</td><td>${
      s.indexTDS == undefined ? "" : s.indexTDS
    }</td></tr>`;
  }).join("");
  document.getElementById("st").innerHTML = `<table>
        <thead>
            <tr><td>TOKEN</td><td>INDICE SIMBOLO</td></tr>
        </thead>
        <tbody>
            ${html}
        </tbody>
    </table>`;
}

function llenarTC(objeto) {
  let lexema = objeto.lexemas
    .map((l) => {
      return `${l},`;
    })
    .join("");
  lexema = lexema.substring(0, lexema.length - 1);
  let patron = objeto.patron;
  let token = objeto.token;
  return `<td>${lexema}</td><td>${patron}</td><td>${token}</td>`;
}
function pintarTC() {
  let html = `<table>
        <thead>
            <tr>
                <td>Lexema</td>
                <td>Patron</td>
                <td>Token</td>
            </tr>
        </thead>
        <tbody>
            <tr>${llenarTC(identificadores)}</tr>
            <tr>${llenarTC(numeros)}</tr>
            <tr>${llenarTC(operadores)}</tr>
            <tr>${llenarTC(asignacion)}</tr>
            <tr>${llenarTC(parentesis)}</tr>
            <tr>${llenarTC(separador)}</tr>
            <tr>${llenarTC(bloque)}</tr>
            <tr>${llenarTC(lectura)}</tr>
            <tr>${llenarTC(escritura)}</tr>
            <tr>${llenarTC(main)}</tr>
        </tbody>
    </table>`;
  document.getElementById("tcl").innerHTML = html;
}
function pintarTS() {
  let html = TDS.map((s) => {
    return `<tr><td>${s.indexTDS}</td><td>${s.valor}</td></tr>`;
  }).join("");
  document.getElementById("ts").innerHTML = `<table>
        <thead>
            <tr><td>INDICE</td><td>VALOR</td></tr>
        </thead>
        <tbody>
            ${html}
        </tbody>
    </table>`;
}

const Parser = require("../parser");

window.onload = function () {
  let frm = document.querySelector("#form-analisis");
  let fuente = document.querySelector("#fuente");
  let resetVariables = document.querySelector("#clear");
  resetVariables.addEventListener("click", function (e) {
    e.preventDefault();
    clear();
    fuente.value = "";
  });
  frm.addEventListener("submit", function (e) {
    e.preventDefault();
    clear();
    lexer(fuente.value);
    if (vError.lexemas.length > 0) {
      let html = vError.lexemas
        .map((error) => {
          return `<li class="error">${error}: elemento no reconocido</li>`;
        })
        .join("");
      document.getElementById(
        "consola"
      ).innerHTML = `<div><h5>Errores:</h5><ul>${html}</ul></div>`;
    } else {
      document.getElementById(
        "consola"
      ).innerHTML = `<div><h5>Analizado con exito.</h5></div>`;
      pintarST();
      pintarTC();
      pintarTS();
      let cadena = fuente.value;
      cadena = cadena.replace(/ /g, "");
      console.log(cadena);
      let x = new Parser(cadena);
      x.Programa();
      document.querySelector("#pi").innerHTML = x.parse;
    }
  });
};
