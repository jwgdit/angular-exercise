import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js'; //Added this import for Stackblitz

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
