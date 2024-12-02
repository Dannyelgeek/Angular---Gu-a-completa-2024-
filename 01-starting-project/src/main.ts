/* El código contenido en este archivo será el que se ejecutará cuando se cargue el sitio web */

/*
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

Esta linea importa el componente que pide la función 'bootstrapApplication()' */

/*
bootstrapApplication(AppComponent).catch((err) => console.error(err));

La función 'bootstrapApplication()' es proporcionada por el paquete Angular y pide como argumento
un componente idependiente Angular que en este caso es 'AppComponent' para buscar la etiqueta HTML personalizada
del componente 'app-root' y reemplazarla con el contenido del componente personalizado */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
/* Con el resultado de la función 'pletformBrowserDynamic()' se llama a la función 'bootstrapModule()' a la cual
se le pasa una referencia a la clase del módulo principal de la aplicación que en este caso es 'AppModule'  */
