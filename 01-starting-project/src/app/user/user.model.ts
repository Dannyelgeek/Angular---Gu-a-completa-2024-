/* Un 'archivo.model.ts' es un archivo cuyo contenido define modelos de datos como 'type' o 'interface', es un patrón
común en proyectos Angular externalizar definiciones de tipos para mantener el código del componente lo más simple
posible. */

/*
type User = {
  id: string;
  name: string;
  avatar: string;
}

La palabra clave 'type' es usada para crear tipos basándose en objetos, para nombrar un nuevo tipo se escribir
la primera letra en mayúscula */

export interface User {
  id: string;
  name: string;
  avatar: string;
}

/* 'interface' es una caracterisctica de TypeScript que de igual manera que la palabra clave 'type' sirve para
definir un tipo de objeto, a diferencia de 'type' una interfaz no necesita del signo igual '=' para ser definida */
