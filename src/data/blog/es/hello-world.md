---
title: "Hola Mundo"
description: "Un pequeño artículo sobre mi motivación y el tech-stack detrás de esta página."
author: "Luis Fonseca"
published_date: "07-30-2025"
reading_time: 2
---

¡Hola mundo!, este es mi primer blog. Espero poder escribir más en el futuro sobre temas que me parescan interesantes. Por ahora, para este primer artículo me gustaría hablar sobre el porqué quise hacer esta página y el framework que usé.

## Motivación

En los últimos días me he topado con varios sitios web personales de algunos *devs* (realmente no recuerdo el porqué, tal vez los vi en Twitter), y como estudiante me pareció interesante el hacer uno propio. No creo que el frontend sea mi fuerte, pero me pareció un reto curioso.

## Framework

Mi idea era hacer un sitio web donde (al menos para esta sección del blog) pudiera escribir archivos markdown y que se renderizaran automáticamente como HTML, así que necesitaba encontrar el framework adecuado para esta tarea.

En realidad ya conocía (de nombre) algunos frameworks como React, Angular, Svelte o Vue, pero necesitaba algo que estuviera hecho específicamente para un sitio web estático y centrado en contenido. Ahí es donde recordé que existe [Astro](https://astro.build).

### Características de Astro

Astro hizo que el proceso de crear esta página fuera muy fácil gracias a sus [Content collections](https://docs.astro.build/es/guides/content-collections/). Las colecciones permiten cargar el contenido que escriba en el markdown para el blog y renderizarlo en el navegador mediante rutas dinámicas y con esquemas *type-safe* para el *frontmatter*.

Si vemos el archivo `src/blog/[id].astro` que se muestra en la documentación de Astro:

```astro [id].astro
---
import { getCollection, render } from 'astro:content';
// 1. Generate a new path for every collection entry
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { id: post.id },
    props: { post },
  }));
}
// 2. For your template, you can get the entry directly from the prop
const { post } = Astro.props;
const { Content } = await render(post);
---
<h1>{post.data.title}</h1>
<Content />
```

Solo con un archivo ya puedo renderizar mi markdown en una ruta diferente para cada entrada del blog. Bastante práctico.

También tienen un tutorial sobre cómo hacer un blog, aunque no le presté mucha atención, probablemente sea una buena forma de aprender el framework.

### Personalización

Con el *framework* listo, necesitaba agregar mi propio estilo al sitio web, y para eso terminé usando [Tailwind](https://tailwindcss.com). Como podran notar, no es como que le haya prestado mucha atención al asunto, y eso es porque sé que puedo ser muy exigente con el diseño y la apariencia general de las cosas que hago. Por eso decidí mantenerlo simple y minimalista por el momento.

## Planes a futuro

En cuanto al sitio web en general, quiero agregar una sección de proyectos o portafolio una vez que tenga algo de trabajo real. Y en cuanto al blog, realmente quiero seguir agregando entradas de vez en cuando, ya sea hablando de cosas que me parezcan interesantes o proyectos interesantes que haga en mi tiempo libre.
