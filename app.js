// Función para encriptar el texto
function encryptText() {
    // Obtener el texto que el usuario escribió en el área de texto
    let text = document.getElementById('inputText').value;

    // Verificar si el texto tiene solo letras minúsculas y espacios
    if (!/^[a-z\s]*$/.test(text)) {
        alert('Por favor, ingresa solo letras minúsculas y sin acentos.');
        return; // Si el texto tiene algo más, mostrar un mensaje y no hacer nada más
    }

    // Reemplazar las letras según las reglas de encriptación
    let encryptedText = text.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');

    // Mostrar el texto encriptado en el área de salida
    document.getElementById('outputText').value = encryptedText;
}

// Función para desencriptar el texto
function decryptText() {
    // Obtener el texto que el usuario escribió en el área de texto
    let text = document.getElementById('inputText').value;

    // Verificar si el texto tiene solo letras minúsculas y espacios
    if (!/^[a-z\s]*$/.test(text)) {
        alert('Por favor, ingresa solo letras minúsculas y sin acentos.');
        return; // Si el texto tiene algo más, mostrar un mensaje y no hacer nada más
    }

    // Reemplazar las palabras encriptadas por las letras originales
    let decryptedText = text.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');

    // Mostrar el texto desencriptado en el área de salida
    document.getElementById('outputText').value = decryptedText;
}

// Función para copiar el texto del área de salida
function copyText() {
    // Obtener el texto del área de salida
    let outputText = document.getElementById('outputText');

    // Seleccionar el texto
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto seleccionado al portapapeles
    document.execCommand('copy');

    // Mostrar un mensaje de que el texto fue copiado
    alert('Texto copiado al portapapeles');
}
