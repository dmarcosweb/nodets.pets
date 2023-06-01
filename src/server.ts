import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from '../src/routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//* Static
server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

// 404 Not found
server.use((req, res) => {
    res.send('PAGE NOT FOUND');
});

server.listen(process.env.PORT);
