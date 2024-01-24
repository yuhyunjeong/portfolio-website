# portfolio

## 💻 Process

## ✅ What I Learned

### About NEXT.js 💡

an open-source web development framework created by Vercel providing React-based web applications with server-side rendering and static website generation.

https://nextjs.org/docs/getting-started/installation

```
// install
npx create-next-app@latest

// options
What is your project named? portfolio-website
Would you like to use TypeScript? No
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like to use `src/` directory? Yes
Would you like to use App Router? (recommended)Yes
Would you like to customize the default import alias (@/*)? No
What import alias would you like configured? @/*

// run
npm run dev
```

### Shortcut by Snippets

https://github.com/r5n-dev/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md

<details>
<summary>rafc</summary>
<div markdown="1">

```
import React from 'react'

export const page = () => {
  return (
    <div>page</div>
  )
}
```

</div>
</details>
<details>
<summary>rafce</summary>
<div markdown="1">

react component utilizing an arrow function

```
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
```

</div>
</details>

### Wrap text with Tags

1.  Select the text you want to wrap with a tag.
2.  Ctrl + Shift + P on Windows and Linux<p>
    Command + Shift + P on macOS

3.  Type wrap and select Emmet: Wrap with Abbreviation.

### react-type-animation

A customizable React typing animation component

```
npm install react-type-animation
```

https://www.npmjs.com/package/react-type-animation

### heroicons

```
npm install @heroicons/react
```

https://heroicons.com/

## 🛠️ Trouble Shooting

### Parsing error: Cannot find module 'next/babel'

Solution: <p>
Create file called .babelrc in your root directory and add this code:

```
{
  "presets": ["next/babel"],
  "plugins": []
}
```

And in .eslintrc.json, replace the existing code with:

```
{
  "extends": ["next/babel","next/core-web-vitals"]
}
```

### You are using Node.js 18.16.0. For Next.js, Node.js version >= v18.17.0 is required.

need to update Node.js version to at least v18.17.0

### "next/font" requires SWC although Babel is being used due to a custom babel config being present.

Solution: delete .babelrc

### No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.

Solution:

```
  in tailwind.config.js

    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    to

    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

```

### Error: useRef only works in Client Components.

Solution : Add the "use client" directive at the top of the file to use it
