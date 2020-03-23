import { Server } from 'http';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as serverless from 'aws-serverless-express';
import { INestApplication } from '@nestjs/common';


export async function bootstrap() {
    const expressApp = require('express')();
    const adapter = new ExpressAdapter(expressApp);

    const nestApp = await NestFactory.create(AppModule, adapter);

    nestApp.enableCors();
    await nestApp.listen(8088);
}