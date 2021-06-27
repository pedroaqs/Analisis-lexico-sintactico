class Parser {
  constructor(_cadena) {
    this.consola = document.querySelector("#consola");
    if (_cadena == null) {
      console.log("Cadena vacia");
    } else {
      console.log("Cadena que se analizara: ", _cadena);
      this.cadena = _cadena;
      this.parse = "";
      this.cont = 0;
    }
  }
  Programa() {
    if (this.cadena.length > 0) {
      console.log("Analisis sintactico: <Programa>");
      this.parse = this.parse + "1";
      if (this.cadena[this.cont] == "M") this.cont = this.cont + 1;
      else {
        this.Errores(8);
        return;
      }
      if (this.cadena[this.cont] == "{") this.cont = this.cont + 1;
      else {
        this.Errores(9);
        return;
      }
      this.Bloque();
      if (this.cadena[this.cont] == "}") this.cont = this.cont + 1;
      else {
        this.Errores(2);
        return;
      }
      console.log("Analisis sintactito finalisado");
    }
  }
  Bloque() {
    console.log("Analisis sintactico: <bloque>");
    this.parse = this.parse + "2";
    this.Sentencia();
    this.Otra_sentencia();
  }
  Sentencia() {
    console.log("Analisis sintactico: <sentencia>");
    if (this.cadena[this.cont] >= "a" && this.cadena <= "z") {
      this.parse = this.parse + "5";
      this.Asignacion();
    } else if (this.cadena[this.cont] == "R") {
      this.parse = this.parse + "6";
      this.cont = this.cont + 1;
      this.Lectura();
    } else if (this.cadena[this.cont] == "W") {
      this.parse = this.parse + "7";
      this.cont = this.cont + 1;
      this.Escritura();
    } else {
      this.Errores(6);
    }
  }
  Otra_sentencia() {
    if (this.cadena[this.cont] == ";") {
      console.log("Analisis sintactico: <otra_sentencia>");
      this.parse = this.parse + "3";
      this.cont = this.cont + 1;
      this.Sentencia();
      this.Otra_sentencia();
    } else {
      this.parse = this.parse + "4";
      this.parse = this.parse + "<u>60</u> ";
    }
  }
  Asignacion() {
    console.log("Analisis sintactico: <asignacion>");
    this.parse = this.parse + "8";
    this.Variable();
    if (this.cadena[this.cont] == "=") {
      this.cont = this.cont + 1;
    } else {
      this.Errores(3);
      return;
    }
    this.Expresion();
  }
  Lectura() {
    console.log("Analisis sintactico: <lectura> ", this.cadena[this.cont]);
    this.parse = this.parse + "<u>21</u> ";
    if (this.cadena[this.cont] >= "a" && this.cadena[this.cont] <= "z") {
      this.Variable();
    } else {
      this.Errores(5);
    }
  }
  Escritura() {
    console.log("Analisis sintactico: <escritura> ", this.cadena[this.cont]);
    this.parse = this.parse + "<u>22</u> ";
    if (this.cadena[this.cont] >= "a" && this.cadena[this.cont] <= "z") {
      this.Variable();
    } else {
      this.Errores(5);
    }
  }
  Variable() {
    console.log("Analisis sintactico: <variable>");
    switch (this.cadena[this.cont]) {
      case "a":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>23</u> ";
        break;
      case "b":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>24</u> ";
        break;
      case "c":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>25</u> ";
        break;
      case "d":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>26</u> ";
        break;
      case "e":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>27</u> ";
        break;
      case "f":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>28</u> ";
        break;
      case "g":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>29</u> ";
        break;
      case "h":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>30</u> ";
        break;
      case "i":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>31</u> ";
        break;
      case "j":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>32</u> ";
        break;
      case "k":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>33</u> ";
        break;
      case "l":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>34</u> ";
        break;
      case "m":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>35</u> ";
        break;
      case "n":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>36</u> ";
        break;
      case "ñ":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>37</u> ";
        break;
      case "o":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>38</u> ";
        break;
      case "p":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>39</u> ";
        break;
      case "q":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>40</u> ";
        break;
      case "r":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>41</u> ";
        break;
      case "s":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>42</u> ";
        break;
      case "t":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>43</u> ";
        break;
      case "u":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>44</u> ";
        break;
      case "v":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>45</u> ";
        break;
      case "w":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>46</u> ";
        break;
      case "x":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>47</u> ";
        break;
      case "y":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>48</u> ";
        break;
      case "z":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>49</u> ";
        break;
      default:
        this.Errores(5);
        break;
    }
  }
  Expresion() {
    console.log("Analisis sintactico: <expresion>");
    this.parse = this.parse + `9`;
    this.Termino();
    this.Mas_terminos();
  }
  Termino() {
    console.log("Analisis sintactico: <termino>");
    this.parse = this.parse + "<u>13</u> ";
    this.Factor();
    this.Mas_factores();
  }
  Mas_terminos() {
    console.log("Analisis sintactico: <mas_terminos>");
    if (this.cadena[this.cont] == "+") {
      this.parse = this.parse + "<u>10</u> ";
      this.cont = this.cont + 1;
      this.Termino();
      this.Mas_terminos();
    } else if (this.cadena[this.cont] == "-") {
      this.parse = this.parse + "<u>11</u> ";
      this.cont = this.cont + 1;
      this.Termino();
      this.Mas_terminos();
    } else {
      this.parse = this.parse + "<u>12</u> ";
      this.parse = this.parse + "<u>60</u> ";
    }
  }
  Factor() {
    console.log("Analisis sintactico: <factor>");
    if (this.cadena[this.cont] >= "0" && this.cadena[this.cont] <= "9") {
      this.parse = this.parse + "<u>20</u> ";
      this.Constante();
    } else if (this.cadena[this.cont] == "(") {
      this.cont = this.cont + 1;
      this.parse = this.parse + "<u>18</u> ";
      this.Expresion();
      if (this.cadena[this.cont] == ")") this.cont = this.cont + 1;
      else this.Errores(4);
    } else if (this.cadena[this.cont] >= "a" && this.cadena[this.cont] <= "z") {
      this.parse = this.parse + "<u>19</u> ";
      this.Variable();
    }
  }
  Mas_factores() {
    console.log("Analisis sintactico: <mas_factores>");
    switch (this.cadena[this.cont]) {
      case "*":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>14</u> ";
        this.Factor();
        this.Mas_factores();
        break;
      case "/":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>15</u> ";
        this.Factor();
        this.Mas_factores();
        break;
      case "%":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>16</u> ";
        this.Factor();
        this.Mas_factores();
        break;
      default:
        this.parse = this.parse + "<u>17</u> ";
        this.parse = this.parse + "<u>60</u> ";
        break;
    }
  }
  Constante() {
    console.log("Analisis sintactico: <constante>");
    switch (this.cadena[this.cont]) {
      case "0":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>50</u> ";
        break;
      case "1":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>51</u> ";
        break;
      case "2":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>52</u> ";
        break;
      case "3":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>53</u> ";
        break;
      case "4":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>54</u> ";
        break;
      case "5":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>55</u> ";
        break;
      case "6":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>56</u> ";
        break;
      case "7":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>57</u> ";
        break;
      case "8":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>58</u> ";
        break;
      case "9":
        this.cont = this.cont + 1;
        this.parse = this.parse + "<u>59</u> ";
        break;
      default:
        this.Errores(7);
        break;
    }
  }
  Errores(codigo) {
    switch (codigo) {
      case 1:
        console.log("Esperaba un ;");
        this.consola.innerHTML += `<li class="error">Esperaba un ;</li>`;
        break;
      case 2:
        console.log("Esperaba una }");
        this.consola.innerHTML += `<li class="error">Esperaba una }</li>`;
        break;
      case 3:
        console.log("Esperaba un =");
        this.consola.innerHTML += `<li class="error">Esperaba un =</li>`;
        break;
      case 4:
        console.log("Esperaba un )");
        this.consola.innerHTML += `<li class="error">Esperaba un )</li>`;
        break;
      case 5:
        console.log("Esperaba un IDENTIFICADOR");
        this.consola.innerHTML += `<li class="error">Esperaba un IDENTIFICADOR</li>`;
        break;
      case 6:
        console.log("Instruccion desconocida");
        this.consola.innerHTML += `<li class="error">Instruccion desconocida</li>`;
        break;
      case 7:
        console.log("Esperaba una CONSTANTE");
        this.consola.innerHTML += `<li class="error">Esperaba una CONSTANTE</li>`;
        break;
      case 8:
        console.log("Esperaba una M de MAIN");
        this.consola.innerHTML += `<li class="error">Esperaba una M de MAIN</li>`;
        break;
      case 9:
        console.log("Esperaba una {");
        this.consola.innerHTML += `<li class="error">Esperaba una {</li>`;
        break;
      default:
        console.log("NO DOCUMENTADO");
        this.consola.innerHTML += `<li class="error">NO DOCUMENTADO</li>`;
        break;
    }
    this.parse = "";
  }
}
module.exports = Parser;
