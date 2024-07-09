const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de directorios estáticos y motor de vistas EJS
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de bodyParser para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de conexión a la base de datos SQL Server
const dbConfig = {
    user: 'SA',
    password: 'TuPassword123!', 
    server: 'localhost',
    port: 1434,
    database: 'Formulario',
    options: {
        encrypt: false,
        enableArithAbort: true
    }
};

// Middleware para manejar la conexión a la base de datos
let pool;
async function connectDB() {
    try {
        pool = await sql.connect(dbConfig);
        console.log('Connected to SQL Server');
    } catch (err) {
        console.error('Database connection failed: ', err);
    }
}

// Conexión inicial a la base de datos al iniciar el servidor
connectDB();

// Ruta POST para manejar el envío del formulario
app.post('/submit', async (req, res) => {
    const { nombre, apellido, email } = req.body;
    
    try {
        // Verificar si el correo ya existe en la base de datos
        const checkEmail = await pool.request()
            .input('email', sql.NVarChar, email)
            .query('SELECT COUNT(*) AS count FROM usuarios WHERE email = @email');
        
        const existingEmailCount = checkEmail.recordset[0].count;
        
        if (existingEmailCount > 0) {
            // Si el correo ya existe, renderizar la plantilla EJS de correo usado
            console.log("emailUsado")
            return res.render('emailUsado');
        }
        
        // Si el correo no existe, proceder con la inserción
        const insertResult = await pool.request()
            .input('nombre', sql.NVarChar, nombre)
            .input('apellido', sql.NVarChar, apellido)
            .input('email', sql.NVarChar, email)
            .query('INSERT INTO usuarios (nombre, apellido, email) OUTPUT INSERTED.id VALUES (@nombre, @apellido, @email)');
        
        const id = insertResult.recordset[0].id; // Obtener el ID del usuario insertado
        
        // Renderizar la vista posFormulario.ejs con el ID del usuario
        res.render('posFormulario', { id: id });
    } catch (err) {
        console.error(err); // Imprime el error en la consola
        res.status(500).send('Error al guardar los datos: ' + err.message); // Devuelve el mensaje de error al cliente
    }
});

// Iniciar el servidor Express
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
