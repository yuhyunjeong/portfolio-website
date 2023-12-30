# portfolio

## 💻 Process

## ✅ What I Learned

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
