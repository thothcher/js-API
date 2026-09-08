# API Lecture Presentation

An interactive frontend lecture presentation about APIs, HTTP methods, and async/await in JavaScript.

## Overview

This project contains a single-file HTML presentation (`prez-api.html`) that teaches API concepts through interactive slides. The presentation is self-contained and requires no build step or server — simply open it in a browser.

## Features

- **Interactive Slides**: Navigate using arrow keys (→/←) or on-screen controls
- **Live Code Examples**: Demonstrates fetch(), async/await, and error handling
- **HTTP Method Explorer**: Click buttons to learn about GET, POST, PUT, DELETE
- **Status Code Reference**: Explore HTTP status codes and their meanings
- **URL Query Builder**: Interactively see how query parameters affect API calls
- **JSON Path Navigator**: Understand nested JSON responses
- **Progressive Code Build**: Watch a complete fetch() function build step-by-step
- **DevTools Integration**: Designed to work with browser DevTools Network tab

## Content Outline

The presentation covers 8+ sections:

1. **Introduction** — What is an API?
2. **Analogy** — The waiter is the API (client → API → server + database)
3. **Definition** — API structure and how it differs from libraries
4. **Request Anatomy** — The four parts: Method, URL, Headers, Body
5. **URL Structure** — Protocol, host, path, query parameters
6. **HTTP Methods** — GET, POST, PUT, DELETE and CRUD operations
7. **Status Codes** — 2xx, 3xx, 4xx, 5xx responses and what to do with them
8. **Headers** — Authorization, Content-Type, and API authentication
9. **JSON** — Parsing nested responses (`.data.products`)
10. **Building fetch()** — Complete example with error handling
11. **CRUD Dashboard** — Full working example
12. **Security** — API keys, CORS, and browser visibility

## Quick Start

1. Open `prez-api.html` in any modern browser (double-click it)
2. Use **arrow keys** (→/←) to navigate slides
3. Open **DevTools** (F12) → **Network** tab to see real API calls
4. Click interactive elements: buttons, code blocks, and method cards

## Technical Stack

- **HTML5** — Semantic structure
- **Tailwind CSS v4** — via CDN (no build step)
- **Vanilla JavaScript** — Progressive enhancement
- **Google Fonts** — Noto Sans/Serif Georgian, IBM Plex Mono

## Key Learning Outcomes

Students will understand:
- ✓ What an API is and why it matters
- ✓ How HTTP requests are structured
- ✓ The difference between REST methods (CRUD)
- ✓ How to use `fetch()` with async/await
- ✓ How to handle errors and status codes
- ✓ How to work with API authentication (headers)
- ✓ How to parse and use JSON responses

## API Used

The presentation uses **restaurantapi.stepacademy.ge** as a teaching API, which provides:
- Product listings
- Filtering and sorting
- Full CRUD operations

**Note**: API key is included in code for educational purposes only. Never commit real API keys to repositories.

## Customization

### Change the API
Edit these constants in the HTML:
```javascript
const API_KEY = 'your-key-here';
const API_URL = 'https://your-api.com/endpoint';
```

### Change colors
Modify the `@theme` section in the `<style>` tag:
```css
--color-live: #1e33e0;    /* Primary accent */
--color-get:  #2e7d4f;    /* GET method */
--color-post: #1f6fb2;    /* POST method */
```

### Translate
The presentation is in Georgian. Search/replace Georgian text with your language, keeping the HTML structure intact.

## Notes for Presenters

- **Full screen mode**: Press F11 in browser for distraction-free presentation
- **DevTools demo**: Encourage students to open Network tab early — they'll see every API call live
- **Pause points**: Each section has speaker notes (data-notes attribute) suggesting where to pause
- **Interactive labs**: Slides with `id="urlLab"`, `id="methodLab"`, etc. are hands-on — take time here

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Modern mobile browsers

## File Size

Single file: ~75KB (HTML + embedded CSS + inline JavaScript)
- No external dependencies beyond Tailwind CDN and Google Fonts
- Works offline after first load (fonts are cached)

## License

Created for educational purposes.

---

**To start**: Open `prez-api.html` in your browser and press the right arrow key (→).
