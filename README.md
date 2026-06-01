#  Google AntiGravity — Landing Page

> *"The future of movement is weightless."*

A sleek, animated landing page for **Google AntiGravity** — a fictional experimental zero-gravity product by Google. Built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies.

---

##  Repository

Link -> [github.com/KarasEmad09/Project](https://github.com/KarasEmad09/Project.git)

Live Link of the project -> [karasemad09.github.io/Project](https://karasemad09.github.io/Project/)

---

##  Screenshots

**Hero Section**
![Hero Section](https://raw.githubusercontent.com/KarasEmad09/Project/f561f15650c6c03cf9a7430e7ef73ea12d982d4f/Screenshot%202026-06-01%20002657.png)

**Live Status Badge & Headline**
![Live Status Badge and Headline](https://raw.githubusercontent.com/KarasEmad09/Project/f561f15650c6c03cf9a7430e7ef73ea12d982d4f/Screenshot%202026-06-01%20002729.png)

**Capabilities / Features Grid**
![Capabilities Grid](https://raw.githubusercontent.com/KarasEmad09/Project/f561f15650c6c03cf9a7430e7ef73ea12d982d4f/Screenshot%202026-06-01%20002738.png)

**How It Works Section**
![How It Works](https://raw.githubusercontent.com/KarasEmad09/Project/f561f15650c6c03cf9a7430e7ef73ea12d982d4f/Screenshot%202026-06-01%20002801.png)

**Early Access Sign-Up Form**
![Early Access Form](https://raw.githubusercontent.com/KarasEmad09/Project/f561f15650c6c03cf9a7430e7ef73ea12d982d4f/Screenshot%202026-06-01%20002811.png)

---

## Features

- **Animated Hero Section** — Full-screen hero with floating background orbs, rising particles, and smooth fade-in animations
- **Parallax Tilt Effect** — Interactive 3D device mockup that responds to mouse movement
- **Rotating Orbit Rings** — Dual SVG orbit rings (clockwise & counter-clockwise) around the phone mockup
- **Scroll Reveal Animations** — Sections and feature cards animate into view using `IntersectionObserver`
- **Capabilities Grid** — 2×2 feature cards with staggered reveal animations
- **How It Works** — Vertical step-by-step guide with a connected timeline line
- **Early Access Form** — Validated sign-up form with:
  - Real-time input error highlighting (shake animation)
  - Submitting state on the button
  - Smooth success state transition after submission
  - Webhook POST integration (configurable endpoint)
- **Google Brand Colors** — Blue `#4285F4`, Red `#EA4335`, Yellow `#FBBC05`, Green `#34A853`
- **Fully Responsive** — Mobile-friendly layout with breakpoints at `768px` and `576px`
- **Glassmorphism Navbar** — Fixed top nav with `backdrop-filter: blur` and scroll transparency
- **Dark Footer** — Clean dark footer with Google dots and contact link

---

##  Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure & semantic markup |
| CSS3 | Styling, animations, keyframes, responsive layout |
| JavaScript (Vanilla) | Interactivity, particles, scroll reveal, form logic |
| Google Fonts | `Inter` (body) & `Outfit` (headings) |

> Built using **Antigravity** — an AI-powered IDE that generates code from text descriptions.

---

##  Project Structure

```
Project/
├── antigravity.html   # Main HTML file
├── styles.css         # All styles, animations, and responsive rules
├── app.js             # JS logic (particles, scroll reveal, form, tilt)
└── logo.png           # Floating logo visual inside the device mockup
```

>  **Note:** Make sure `logo.png` is present in the root of the repository. Without it, the phone mockup inside the hero section will show a broken image.

---

##  Getting Started

No build tools or package manager needed. It's plain HTML/CSS/JS.

### 1. Clone the repository

```bash
git clone https://github.com/KarasEmad09/Project.git
cd Project
```

### 2. Open in browser

Simply open `antigravity.html` in any modern browser:

```bash
# Option A — Double-click the file
open antigravity.html

# Option B — Use VS Code Live Server extension
# Right-click antigravity.html → "Open with Live Server"
```
---

##  Customization

| What to change | Where |
|---|---|
| Brand colors | `styles.css` → `:root` CSS variables |
| Hero headline & subtitle | `antigravity.html` → `.hero-headline`, `.hero-subtitle` |
| Features & descriptions | `antigravity.html` → `#capabilities-grid` |
| Step-by-step guide | `antigravity.html` → `#steps-list-container` |
| Particle count & colors | `app.js` → `initParticles()` |
| Tilt sensitivity | `app.js` → `initTiltEffect()` (max degrees value) |

---

##  Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

##  License

This project is licensed under the **MIT License**.

```
MIT License — feel free to use, modify, and distribute.
```

---

<p align="center">
  &copy; 2026 Google LLC · AntiGravity is an experimental preview concept · Built with the using of Antigravity IDE
</p>
