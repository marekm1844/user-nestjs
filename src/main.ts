import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { bootstrap as express } from './app.express';
import { bootstrap as fastify } from './app.fastify';


//express();
fastify();
