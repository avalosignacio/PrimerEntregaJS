
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

    let alum = prompt("Ingrese nombre de alumno")
    let nota1 = parseInt(prompt("Ingrese la nota 1"))
    let nota2 = parseInt(prompt("Ingrese la nota 2"))
    let nota3 = parseInt(prompt("Ingrese la nota 3"))
    PromedioAlum (alum, nota1, nota2, nota3);}
    

