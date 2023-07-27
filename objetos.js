const carro={
    color:"azul",
    motor:4.0,
    modelo:"gtr",
    marca:"nissan",
    nuevo:true
};

const persona={
    edad:35,
    nombre:"fabio",
    sexo:"M",
   mayorDeEdad:true,
   dni:"06812899",
   nacionalidad:"peruano"
};




console.log(persona.nombre);

persona.profesion="ingeniero";
persona["celular"]=990081302;

console.table(persona);

const celular={
    marca:"Honor",
    modelo:"Magig 5 lite",
    memoria:12,
    camara:24,
    precio:1400,
    color:"negro"
}

celular.memoria=8;
celular.pantalla="QLed";

console.log(celular);

function getDatos(object,key1,key2){

    resultado=[object[key1],object[key2]];
    return resultado;
}

const datos=getDatos(celular,"marca","precio");

console.log(`MARCA: ${datos[0]}" PRECIO: ${datos[1]}`);
