function CallMenu(){
    let n_ejercicio=parseInt(
        prompt(
            "Ingrese el número de ejercicio : \r\n 1.suma.\r\n 2.promedio de examenes.\r\n 3.area rectángulo.\r\n 4.area triangulo\r\n 5.area circunferencia\r\n 6.calcular sueldo\r\n 7.metros a pulgadas\r\n 8.cambiar soles a dolares"
            
         )
    );
    if(isNaN(n_ejercicio) && (n_ejercicio==1 || n_ejercicio==2)){

        alert("ingresa 1 o 2")

    }else{
        MenuEjercicios(n_ejercicio);
    }
}

function MenuEjercicios(n_ejercicio){
    switch(n_ejercicio){
        
        case 1:
            let valor1=parseInt(prompt("ingrese el valor 1"));
            let valor2=parseInt(prompt("ingrese el valor 1"));
            alert("TOTAL: "+ej1_suma(valor1,valor2));
        break;
           
        case 2:
            let nota1=parseInt(prompt("ingrese nota 1"));
            let nota2=parseInt(prompt("ingrese nota 2"));
            let nota3=parseInt(prompt("ingrese nota 3"));
            let nota4=parseInt(prompt("ingrese nota 4"));
            alert("PROMEDIO: "+ej2_promedio(nota1,nota2,nota3,nota4));
        break;

        case 3:
            let base=parseInt(prompt("ingrese base"));
            let altura=parseInt(prompt("ingrese altura"));
            alert("AREA: "+ej3_area(base,altura));
        break;

        case 4:
            let base2=parseInt(prompt("ingrese base"));
            let altura2=parseInt(prompt("ingrese altura"));
            alert("AREA TRIANGULO: "+ej4_areaT(base2,altura2));
        break;

        case 5:
            let radio=parseInt(prompt("ingrese radio"));
            alert("AREA CIRCULO: "+ej5_areaC(radio));
        break;

        case 6:
            let horas=parseInt(prompt("ingrese horas trabajadas"));
            let pago=parseFloat(prompt("ingrese pago por hora"));
            alert("SUELDO SEMANAL: "+ej6_sueldo(horas,pago));
        break;

        case 7:
            let metros=parseInt(prompt("ingrese metros"));
            alert("PULGADAS: "+ej7_mtTop(metros));
        break;

        case 8:
            let soles=parseFloat(prompt("ingrese soles"));
            let cambio=parseFloat(prompt("ingrese tipo de cambio"));
            alert("DOLARES: "+ej8_solesToDolares(soles,cambio));
        break;
    }
}

function ej1_suma(a,b){
    if(isNaN(a) || isNaN(b)){
        return "ingrese números";
    }else{
        return a+b;
    }
}

function ej2_promedio(a,b,c,d){
    if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)){
        return "ingrese números";
    }else{
        return (a+b+c+d)/4;
    }
}

function ej3_area(b,h){
    if(isNaN(b) || isNaN(h)){
        return "ingrese números";
    }else{
        return b*h;
    }
}

function ej4_areaT(b,h){
    if(isNaN(b) || isNaN(h)){
        return "ingrese números";
    }else{
        return (b*h)/2;
    }
}

function ej5_areaC(radio){
    if(isNaN(radio)){
        return "ingrese número";
    }else{
        return 3.1416*radio^2;
    }
}

function ej6_sueldo(horas,pago){
    if(isNaN(horas) || isNaN(pago)){
        return "ingrese números";
    }else{
        return horas*pago;
    }
}

function ej7_mtTop(metros){
    if(isNaN(metros)){
        return "ingrese número";
    }else{
        return metros*100/2.54;
    }
}

function ej8_solesToDolares(soles,tipo){
    if(isNaN(soles) || isNaN(tipo)){
        return "ingrese número";
    }else{
        return soles/tipo;
    }
}


