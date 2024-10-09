This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Netlify

Check out the [Next.js Demo](https://zagros-podcast.netlify.app/)

### Documentation

this project built using the follwing libs as you can find them in `package.json`

`axios`, `tanstack-query`, `typescript`, `redux/tookit`, `context-api`, `createPortl`.

## Folder Structor

# api

this folder has all the api required to request data from the server
it has podcasts, posts and auth folders conresponding each endpoint

# app

app the routing and main components and live in this section
we have route group for `/panel` including

`/` for login page
`/books` for login posts page
`/podcasts` for products page

# components

all ui peaces live in this folder including modal, tab, global card or buttons and etc.

`tabs` component in this section using React Context api to provide capsulating logic which is very good for
developers who tired of create and using `useState` hand handling `activeIndex` to makes the currnet tab active.

`modal` this component powered by `createPortal` feature of react. we do this to achive the animation boundaries of
modal opening and closing.

# config

all the config of the website such as list of menu.

# hooks

all global hooks including some custom hooks that help us using the `tanstack-query` hooks in very much cleaner way.

# icons

some icons and previusly build using `svgr` library with cli command.

# layout

main building block of website such as `Header`, `Footer`, `Aside`.

# modules

this folder is a bit tricky.
this component is similar to `components` folder bug includes a major component that ca act like complex UI
that consider important part of the UI. like player they kinda give meaning to UI they nor consider `components` neither `page`.

# service

all service like axios.
`axios` service works like a middleware for all requests and if `refreshToken` expires it automaticaly update the `refreshToekn` the re-fetch the faild requests.

# store

redux store is here.
i try to use redux for global purposes. fortunately it was simple and its no complicated.
maybe it can get complicated in future use so this better to have one that not at all.

# utils

only helper `function`
