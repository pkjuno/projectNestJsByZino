import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from 'path';
import * as hbs from 'hbs';
import * as fs from 'fs';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  // 부분 템플릿 폴더 내의 모든 파일을 등록
  const partialsDir = join(__dirname, '..', 'views/partials');
  const filenames = fs.readdirSync(partialsDir);
  filenames.forEach(filename => {
    const matches = filename.match(/(.+)\.hbs$/);
    if (!matches) return;
    const partialName = matches[1];
    const template = fs.readFileSync(join(partialsDir, filename), 'utf-8');
    hbs.registerPartial(partialName, template);
  });

  await app.listen(3000);
}
bootstrap();
