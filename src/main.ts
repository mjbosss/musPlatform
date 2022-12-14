const packageJSON = require('../package.json');
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const HOST = 'localhost';
const DEFAULT_PORT = 5001;
const SWAGGER_PATH = 'api/docs';

const start = async () => {
  try {
    const PORT = process.env.PORT || DEFAULT_PORT;
    const app = await NestFactory.create(AppModule);

    const documentConfig = new DocumentBuilder()
      .setTitle('REST API')
      .setDescription('REST API документация')
      .setVersion(packageJSON.version)
      .build();

    const document = SwaggerModule.createDocument(app, documentConfig);
    SwaggerModule.setup(SWAGGER_PATH, app, document);

    await app.listen(PORT, () =>
      console.log(`Server started on PORT: ${PORT}`),
    );

    console.log(`Swagger: http://${HOST}:${PORT}/${SWAGGER_PATH}`);
  } catch (e) {
    console.log(e);
  }
};

start();
