---
title: "Hello World"
description: "A brief entry on the motivation and tech-stack behind this website."
author: "Luis Fonseca"
published_date: "07-30-2025"
---

# Hello world!

Hello world, this is my first ever blog post! I hope there are many more to come with more interesting topics, but for now I would like to talk about why I decided to make this website and how I did it.

## Motivation

I came across a lot of personal websites from multiple software developers in the last couple of days, and as a computer science student myself, I thought: why not make one for myself? Frontend is not quite my strength, but it seemed like a fun task to accomplish.

## Framework

I knew I wanted to build a website where (at least for this blog section) I could write markdown files and automatically render them as HTML on the browser. So, I needed to find the right framework for this task.

Of course, I know about React, Angular and other frameworks like Svelte or Vue, but I needed something built specifically for a content-driven static website, and that's where [Astro](https://astro.build) comes in!

### Features

Astro made this process so easy with their [Content collections](https://docs.astro.build/en/guides/content-collections/). With it, I can load all my blog content and render them with dynamic routes and with type-safe schemas for the frontmatter.

Take a look at the `src/blog/[id].astro` file showed in the Astro documentation:

```astro
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

With just one file I can render my markdown on a different route path for each entry in the blog collection. Super neat!

They also have a tutorial on building your own blog, which is also a great way to learn the framework, although I did not really use it that much.

### Styling

With the framework ready, I needed to add my own style to the website, and for that I ended up using [Tailwind](https://tailwindcss.com). As you all might see, it is not like I put that much thought into it, and that's because I know I can get really picky with the design and overall look of the things I do. That's why I decided to keep it simple and minimalistic for the time being.

## Future plans

As for the overall website, I want to add a projects or portfolio section of some sort once I get to do some real-world work. And as for the blog, I do really want to keep adding entries once in a while, whether it is talking about stuff that I find interesting or side projects that I do.
