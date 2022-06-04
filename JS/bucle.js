let opcion = prompt ("1-Tipo de pokemon\n2-Salir");

if (opcion=="1") {
    let tipo = prompt ("Ingrese un Pokemon");
    if(tipo<99)
    alert("Por favor ingresar un Pokemon");
    else {
        alert("Gracias por elegir su Pokemon");
        let tipo = prompt ("Ingrese el tipo del Pokemon elegido");

        while(tipo<99) {
        alert("Reingrese tipo")
        tipo = prompt("Ingrese el tipo del Pokemon elegido")}
    
        for (let i = 0; i < 2; i++){
            tipo= tipo + prompt("Ingrese debilidad del pokemon elegido")
        }
        alert(tipo)
    }
}