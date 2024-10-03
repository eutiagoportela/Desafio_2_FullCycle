const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configuração do MySQL
const db = mysql.createConnection({
    host: 'db', // Nome do serviço do banco de dados definido no docker-compose
    user: 'root', // Nome de usuário do banco de dados
    password: 'root', // Senha do banco de dados
    database: 'nodedb' // Nome do banco de dados
});

// Conexão ao MySQL
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});

// Adiciona um registro (Exemplo)
app.get('/add/:name', (req, res) => {
    const name = req.params.name;
    db.query('INSERT INTO people (name) VALUES (?)', [name], (err) => {
        if (err) {
            console.error('Erro ao adicionar nome:', err);
            return res.status(500).send('Erro ao adicionar nome.');
        }
        res.send('<h1>Full Cycle Rocks!</h1><br />' + name + ' foi adicionado.');
    });
});

// Rota para listar todos os nomes
app.get('/', (req, res) => {
    db.query('SELECT * FROM people', (err, results) => {
        if (err) {
            console.error('Erro ao buscar nomes:', err);
            return res.status(500).send('Erro ao buscar nomes.');
        }
        const names = results.map(row => row.name).join('<br />');
        res.send(`<h1>Full Cycle Rocks!</h1><br />${names}`);
    });
});

app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
});
