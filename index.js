const path = require('path');
const express = require('express');


const app = express();

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});

app.get('/auth/discord', (request, response) => {
	return response.sendFile('dashboard.html', { root: '.' });
});

const port = '53134';
app.listen(port, () => console.log(`App listening at https://v0909m8vw09vmyw09bmvy9bymu9bmybym98y9ym90u0ybmt9umubmuybtm.zfair45.repl.co`));