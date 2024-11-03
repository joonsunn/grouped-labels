import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3001'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Automatically strips out properties not defined in the DTO
      forbidNonWhitelisted: true, // Throws an error when non-whitelisted properties are provided
      transform: true, // Automatically transform payloads to the expected types
    }),
  );
  await app.listen(PORT, () => {
    console.log(`Application is running on port: ${PORT}`);
  });
}
bootstrap();
