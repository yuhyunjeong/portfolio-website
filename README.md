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

### send email using Next.js

https://resend.com/docs/send-with-nextjs

```
npm install resend
```

https://github.com/resend/resend-nextjs-app-router-example

```
in .env.local

RESEND_API_KEY=""
```

request: POST http://localhost:3000/api/send

```
in Terminal

curl -X POST http://localhost:3000/api/send
```

### e.preventDefault()

- prevent the form from actually being submitted and the page from refreshing.
- useful for collecting data entered by the user and using JavaScript to process that data.
- when using a form to send an email or perform a search, you can process the results without the page refreshing.

```
const EmailSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
...
```

### useState(false)

- when the component renders for the first time, this state will be initialized to false.
- can update it to true or any other value as needed.
- it could be used to control the visibility of UI elements like modals or dropdown menus

```
const [emailSubmitted, setEmailSubmitted] = useState(false);
...
setEmailSubmitted(true);
```

### useRef

- useRef Hook allows you to persist values between renders
- can be used to store a mutable value that does not cause a re-render when updated

  - If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.

- can be used to access a DOM element directly

### useTransition

React Hook that lets you update the state without blocking the UI

- useTransition does not take any parameters.
- useTransition returns an array with exactly two items:
  1. isPending flag that tells you whether there is a pending transition
  2. startTransition function that lets you mark a state update as a transition

```
import { useTransition } from 'react';

function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
}
```

The startTransition function returned by useTransition lets you mark a state update as a transition

<hr>

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

### framer-motion

Framer Motion is a simple yet powerful motion library for React

It powers the amazing animations and interactions in Framer, the web builder for creative pros. Zero code, maximum speed

```
// install
npm install framer-motion

// importing
"use client";

import { motion } from "framer-motion"
```

https://www.framer.com/motion/introduction/

### useInView

A simple state hook for when an element is within the viewport

- useInView is a tiny (0.6kb) hook that detects when the provided element is within the viewport
- useInView can track the visibility of any HTML element. Pass a ref object to both useInView and the HTML element
- While the element is outside the viewport, useInView will return false. When it moves inside the view, it'll re-render the component and return true

```
import { useInView } from "framer-motion"

function Component() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return <div ref={ref} />
}
```

https://www.framer.com/motion/use-in-view/

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

### Unhandled Runtime Error: Image with src "/github-icon.png" is missing required "width" property.

Solution:

Add width and height properties to the Image component. If you don't know the actual size of the image, you can use the layout="fill" attribute to set the image to fill the size of the parent element.

When referencing files in the public directory in Next.js, make sure to use absolute paths that start with a / (forward slash).

```
<Link href="https://github.com/yuhyunjeong/">
  <div className="relative w-14 h-14">
    <Image src="/github-icon.png" alt="Github Icon" layout="fill" />
  </div>
</Link>
```

###

```
{
    "data": null,
    "error": {
        "statusCode": 403,
        "message": "The gmail.com domain is not verified. Please, add and verify your domain on https://resend.com/domains",
        "name": "validation_error"
    }
}
```

Solution:

```
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // test email address. no gmail
      to: ["yuhyunjungdev@gmail.com"],
      subject: "Hello world",
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
```
