# Astro Starter Kit: Minimal

```sh
bun create astro@latest -- --template minimal
```

## 🚀 Project Structure

Inside of your Astro with backend express and integrated OpenAPI compiler by tsoa, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── controller/
│   │   └── controller.ts
│   ├── pages/
│   │   └── index.astro
│   ├── prisma/
│   │    ├── .env
│   │    └── schema.prisma 
│   ├── server/
│       ├── server.ts
│       └── swagger.json
── package.json
── tsconfig.json
── tsoa.config
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.
