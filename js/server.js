// Importa a biblioteca 'ws' para WebSockets
const WebSocket = require('ws');

// Cria um servidor WebSocket que escuta na porta 8081
const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', (ws) => {
  console.log('Cliente conectado.');

  // Quando o servidor recebe uma mensagem do cliente
  ws.on('message', (message) => {
    console.log(`Gatilho recebido do cliente: ${message}`);

    // Se a mensagem for 'executar_acao'
    if (message === 'executar_acao') {
      console.log('Ação executada no servidor Node.js');
      ws.send('Ação executada com sucesso!');  // Responde ao cliente
    }
  });

  // Envia uma mensagem de boas-vindas quando o cliente se conecta
  ws.send('Bem-vindo ao servidor WebSocket do Node.js');
});

console.log('Servidor WebSocket rodando na porta 8081');

