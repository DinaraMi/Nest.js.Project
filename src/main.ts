import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Пет-проект на Nest.js')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('DinaraMi')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/doc', app, document)

  await app.listen(3001);
}
bootstrap();
