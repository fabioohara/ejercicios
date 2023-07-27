

const alumnos=["luis","karen","pepito","bryan"];
const notas=[20,15,11,10];
const juegos=["domino","sapito","cuerda","gumbound"];

console.log(alumnos[0]+" tiene "+notas[0]+" en programación y juega "+juegos[3]);

console.log(
    `${alumnos[1]} tiene ${notas[3]} en programación y juega ${juegos[2]}`
);

//función flecha Arrow function
const cuadrados=(n1,n2)=>{
    const resultado=[n1*n1,n2*n2];
    return resultado;
};

const cuadradoNum=[cuadrados(5,10)];
console.log(cuadradoNum[0][0]);
console.log(`el primer cuadrado es: ${cuadradoNum[0][0]} y el segundo cuadrado es: ${cuadradoNum[0][1]}`);


const evaluar=(edad)=>{
    if(edad>=18){
        resultado="mayor de edad";
    }else{
        resultado="menor de edad";
    }
    
    return `la persona es: ${resultado}`;
};

console.log(evaluar(18));
