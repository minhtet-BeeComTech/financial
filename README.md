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


## Project Structure

```
.
├── app
│   ├── account
│   │   └── [key]
│   │       └── page.tsx
│   ├── auth
│   │   ├── signin
│   │   │   └── page.tsx
│   │   └── signup
│   │       └── page.tsx
│   ├── container.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── provider.tsx
│   ├── service
│   │   └── [key]
│   │       └── page.tsx
│   └── system
│       └── [key]
│           └── page.tsx
├── components
│   ├── card
│   │   ├── card.tsx
│   │   └── index.ts
│   ├── chart
│   │   ├── barchart.tsx
│   │   ├── index.ts
│   │   ├── piechart.tsx
│   │   ├── stackedareachart.tsx
│   │   └── tinylinechart.tsx
│   ├── form
│   │   ├── fields
│   │   │   ├── fieldcontainer.tsx
│   │   │   ├── index.ts
│   │   │   └── input.tsx
│   │   ├── index.ts
│   │   └── validatedfields
│   │       ├── formcontainer.tsx
│   │       ├── index.ts
│   │       └── input.tsx
│   ├── index.ts
│   └── layout
│       ├── header
│       │   ├── header.tsx
│       │   └── index.ts
│       ├── index.ts
│       └── sidebar
│           ├── index.ts
│           └── sidebar.tsx
├── hook
│   ├── common
│   │   ├── auth.ts
│   │   └── index.ts
│   ├── custom
│   │   ├── auth.ts
│   │   ├── index.ts
│   │   └── theme.ts
│   └── index.ts
├── store
│   ├── api
│   │   ├── HttpError.ts
│   │   ├── Routes.tsx
│   │   └── index.ts
│   ├── index.ts
│   └── reducer
│       ├── auth.ts
│       ├── index.ts
│       └── theme.ts
├── themes
│   ├── dark.css
│   └── light.css
└── utils
    ├── config.ts
    ├── general.ts
    └── index.ts
```


## Learn More

You can view the live page at: [https://financial-pi.vercel.app](https://financial-pi.vercel.app)