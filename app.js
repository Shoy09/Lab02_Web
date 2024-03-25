const express = require('express');
const app = express();
const path = require('path');

// Ruta al directorio que contiene tu archivo index.html
const publicDirectoryPath = path.join(__dirname, '/public');

// Configurar el servidor para servir archivos estáticos desde el directorio public
app.use(express.static(publicDirectoryPath));

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
