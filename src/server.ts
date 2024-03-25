import express, { Application } from 'express';
import routes from './routes';


const app: Application = express();
const port = process.env.PORT || 3000; // Escolha a porta que desejar
const cors = require('cors');
// Middleware para análise de corpo em formato JSON
app.use(cors({
    origin: process.env.ORIGIN
    /*origin:'http://192.168.33.138:5173'*/
 }));
app.use(express.json())

// Configuração das rotas
app.use('/', routes);

// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
