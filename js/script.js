
function PromedioAlum (alum, nota1, nota2, nota3) {

    let SumarNota = nota1 + nota2 + nota3
    let Promedio = SumarNota / 3 

    if (Promedio >= 7){
        alert(`El estudiante ${alum} ha promocionado con ${Promedio}`)}
    else if (Promedio >= 4){
        alert(`El estudiante ${alum} rendira final por tener promedio de ${Promedio}`)
    }
    else {
        alert(`El estudiante ${alum} debe recursar por tener promdio de ${Promedio}`)
    }
    }


    let CantidadAlum = parseInt(prompt("Ingrese la cantidad de alumnos a evaluar"))
    for(i=0; i < CantidadAlum; i++){

    let alum;
       do{
        alum = (prompt("Ingrese nombre del alumno: "))
       }
       while(!isNaN(alum))
        
    let nota1;
    do{
        nota1 = parseInt(prompt("Ingrese la nota 1: "))
       }
       while(isNaN(nota1))
    let nota2;
    do{
        nota2 = parseInt(prompt("Ingrese la nota 2: "))
       }
       while(isNaN(nota2))
    let nota3;
    do{
        nota3 = parseInt(prompt("Ingrese la nota 3: "))
       }
       while(isNaN(nota3))
    PromedioAlum (alum, nota1, nota2, nota3);}
    

