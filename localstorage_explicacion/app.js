// Clave usada en los ejercicios 3 y 4 (editar / eliminar un solo valor)
const claveNombre = "localstorage_explicacion_nombre";

// Referencias a elementos del DOM
const nombreGuardar = document.getElementById("nombreGuardar");
const resultadoGuardar = document.getElementById("resultadoGuardar");

// ============================================
// Ejercicio 1: Guardar un nombre (lista JSON)
// ============================================
function guardarNombre() {
    let nombre = document.getElementById("nombreGuardar").value.trim();

    if (nombre === "") {
        alert("Por favor ingrese el nombre");
        return;
    } else {
        let listaNombres = JSON.parse(localStorage.getItem("Nombre")) || [];
        listaNombres.push(nombre);

        localStorage.setItem("Nombre", JSON.stringify(listaNombres));

        document.getElementById("nombreGuardar").value = "";
        document.getElementById("resultadoGuardar").innerText = `Nombre guardado: ${nombre}`;
        document.getElementById("resultadoGuardar").className = "resultado-ok";
    }
}

// ============================================
// Ejercicio 2: Mostrar los nombres guardados
// ============================================
function mostrarNombre() {
    let listaNombres = JSON.parse(localStorage.getItem("Nombre")) || [];
    let resultado = document.getElementById("resultadoMostrar");
    resultado.textContent = "";

    if (listaNombres.length === 0) {
        const item = document.createElement("li");
        item.textContent = "No hay nombres guardados";
        resultado.appendChild(item);
        return;
    }

    listaNombres.forEach(function (nombre) {
        const item = document.createElement("li");
        item.textContent = nombre;
        resultado.appendChild(item);
    });
}

// ============================================
// Ejercicio 3: Editar el nombre guardado
// ============================================
const formEditar = document.getElementById("formEditar");
const nombreEditar = document.getElementById("nombreEditar");
const resultadoEditar = document.getElementById("resultadoEditar");

formEditar.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nuevoNombre = nombreEditar.value.trim();
    if (nuevoNombre === "") {
        resultadoEditar.textContent = "Escribe el nuevo nombre.";
        resultadoEditar.className = "resultado-error";
        return;
    }

    localStorage.setItem(claveNombre, nuevoNombre);
    resultadoEditar.textContent = "Nombre actualizado correctamente.";
    resultadoEditar.className = "resultado-ok";
    formEditar.reset();
});

// ============================================
// Ejercicio 4: Eliminar el nombre guardado
// ============================================
const formEliminar = document.getElementById("formEliminar");
const resultadoEliminar = document.getElementById("resultadoEliminar");

formEliminar.addEventListener("submit", function (evento) {
    evento.preventDefault();

    localStorage.removeItem(claveNombre);
    resultadoEliminar.textContent = "Nombre eliminado.";
    resultadoEliminar.className = "resultado-ok";
});

// ============================================
// Ejemplo: Guardar una mascota como objeto
// ============================================
const formMascota = document.getElementById("formMascota");
const resultadoMascota = document.getElementById("resultadoMascota");

formMascota.addEventListener("submit", (event) => {
    event.preventDefault();

    const mascota = {
        nombre: document.getElementById("mascota").value.trim(),
        raza: document.getElementById("raza").value.trim(),
        edad: Number(document.getElementById("edad").value)
    };

    if (!mascota.nombre || !mascota.raza || isNaN(mascota.edad)) {
        resultadoMascota.textContent = "Completa todos los campos correctamente.";
        resultadoMascota.className = "resultado-error";
        return;
    }

    localStorage.setItem("mascota", JSON.stringify(mascota));
    resultadoMascota.textContent = `Mascota guardada: ${mascota.nombre} (${mascota.raza}, ${mascota.edad} años)`;
    resultadoMascota.className = "resultado-ok";
    formMascota.reset();
});
