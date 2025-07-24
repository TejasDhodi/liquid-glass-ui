# 🌊 liquid-glass-ui

**Liquid Glass UI** is a lightweight React component library that provides elegant glassmorphism (frosted glass) UI components using **pure CSS**, built to work seamlessly with **React + Vite**. No Tailwind. No external animation libraries. Just clean, modern UI.

[![NPM Version](https://img.shields.io/npm/v/liquid-glass-ui.svg)](https://www.npmjs.com/package/liquid-glass-ui)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/tejasdhodi/liquid-glass-ui?style=social)](https://github.com/TejasDhodi/liquid-glass-ui)

---

## ✨ Features

- 🧊 Pure glassmorphism effect using plain CSS
- ⚛️ Built for React (Vite compatible)
- 🎨 Easily customizable with inline styles
- 💡 Perfect for cards, modals, and UI blocks

---

## 📦 Installation

```bash
npm install liquid-glass-ui
```

or

```bash
yarn add liquid-glass-ui
```

---

## 🚀 Usage

```tsx
import { GlassCard } from 'liquid-glass-ui'

function App() {
  return (
    <div style={{ padding: '40px' }}>
      <GlassCard style={{ width: '300px', height: '200px' }}>
        <h2>Hello, Glass World!</h2>
        <p>This is a frosted glass card.</p>
      </GlassCard>
    </div>
  )
}
```

---

## 🎛️ Props

### `<GlassCard />`

| Prop      | Type                   | Default | Description                          |
|-----------|------------------------|---------|--------------------------------------|
| `children`| `React.ReactNode`      | –       | Content inside the glass card        |
| `style`   | `React.CSSProperties`  | `{}`    | Inline styles to customize the card  |

---

## 🧪 Preview

> Here's what a `GlassCard` looks like:

![GlassCard Preview](https://raw.githubusercontent.com/tejasdhodi/liquid-glass-ui/main/assets/glass-preview.png)

---

## 🛠 Roadmap

- [x] Basic glass card
- [ ] Glass buttons
- [ ] Glass modal component
- [ ] Customization via props (blur, transparency, color)
- [ ] Dark mode support

---

## 💻 Local Development (for contributors)

1. Clone the repo:
   ```bash
   git clone https://github.com/tejasdhodi/liquid-glass-ui.git
   cd liquid-glass-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the library:
   ```bash
   npm run build
   ```

4. Link for local testing:
   ```bash
   npm link
   # Then inside another React project:
   npm link liquid-glass-ui
   ```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

- ⭐ Star the repo
- 📥 Open issues for bugs or ideas
- 📢 Submit a pull request for new components or enhancements

### Guidelines

- Use plain CSS — no utility frameworks
- Stick to consistent class naming (`glass-*`)
- Keep components minimal and reusable

---

## 📄 License

This project is licensed under the MIT License.

---

## 🌐 Links

- 📦 NPM: [https://www.npmjs.com/package/use-liquid-glass-ui](https://www.npmjs.com/package/use-liquid-glass-ui)
- 🛠 GitHub: [https://github.com/TejasDhodi/liquid-glass-ui](https://github.com/TejasDhodi/liquid-glass-ui)

---

Made with ❤️ by [Tejas Dhodi](https://github.com/tejasdhodi)