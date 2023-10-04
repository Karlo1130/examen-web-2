const persona = {
    nombre: "Hola",
    primerApellido: "que",
    segundoApellido: "tal",
    comida_favorita: ["JAJAJA","SIII","OK","MUY BUENO"],
    graduado: false,
}

console.log(persona.comida_favorita[1]);
if (persona.graduado == false){
    console.log("AHHHH ME MUERO");
}else{
    console.log("AHHHH NO ME MUERO");
}

const objetoJAJAJA = {
    pares: [],
}
for (var i = 0; i < 10; i++) {
    objetoJAJAJA.pares[i] = Math.floor(Math.random() * 100);
  }
  for (var i = 0; i < 10; i++) {
    console.log(objetoJAJAJA.pares[i])
  }