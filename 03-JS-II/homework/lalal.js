
console.log(1 < 0)

{/* < > <= >= === == !== Quokka.js */}

// AND --> &&

// OR --> ||

// NOT --> !

/*
    1E      2E     &&     ||
    true    true   true   true
    trye    false  false  true
    false   true   false  true
    false   false  false  false
*/    

// = == ===
 
var variable = "Variable"

function moctrarNumeros() {
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
    console.log(6)
    console.log(7)
    console.log(8)
    console.log(9)
    console.log(10)
}

mostrarNumero()

function moctrarNumeros(numeroLimite) {
  //  for (var i = 0; i <= numeroLimite; i = i + 1)
  //  console.log(i)
  //  };
  var i = 1;
  while (i <= numeroLimite) {
      console.log(i);
      i++;
      i = i + 1;
  };
  console.log("Se termino el bucle/loop/ciclo")
} 
mostrarNumero(10)

function moctrarNumeros(numeroLimite) {
    //  for (var i = 0; i <= numeroLimite; i = i + 1)
    //  console.log(i)
    //  };
    var i = 1;
    var seguir = true;
    while (seguir) {
        console.log(i);
        i++;
        if(i === 11) {
            seguir = false;
        }
    };
    console.log("Se termino el bucle/loop/ciclo")
  } 
  mostrarNumero(10)



  function moctrarNumeros(numeroLimite) {
    //  for (var i = 0; i <= numeroLimite; i = i + 1)
    //  console.log(i)
    //  };
    var i = 1;
    var seguir = true;
    do  {
        console.log(i);
        i++;
        if(i === 2) {
            seguir = false;
        }
    } while (seguir);

    console.log("Se termino el bucle/loop/ciclo")
  } 
  mostrarNumero(10)