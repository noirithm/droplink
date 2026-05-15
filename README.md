# DROPLINK

> Browser-to-browser file transfer. No server. No cloud. Just a share code.

Droplink lets you send files directly from one browser to another using WebRTC. There's no file upload, no cloud storage, and no middleman — files travel peer-to-peer between devices. A lightweight signaling server helps browsers find each other, then gets out of the way.

---

## How It Works

1. **Sender** opens Droplink and selects a file — a unique share code is generated.
2. **Receiver** enters the share code on their end.
3. The two browsers establish a direct WebRTC data channel.
4. The file transfers peer-to-peer. Nothing touches a server.

---

## Features

- **Zero cloud storage** — files never leave your devices via a server
- **No account needed** — just open and share
- **Simple share codes** — no long URLs or QR codes required
- **Works in-browser** — no installs or extensions

---

## Stack

| Layer | Technology |
|---|---|
| File Transfer | WebRTC (RTCDataChannel) |
| Signaling | Socket.io |
| Server | Node.js + Express |
| Frontend | HTML, JavaScript |

---

## Project Structure

```
droplink/
├── client/       # Frontend (HTML + JS)
└── server/       # Signaling server (Node.js + Express + Socket.io)
```

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

```bash
git clone https://github.com/noirithm/droplink.git
cd droplink
```

### Running the Signaling Server

```bash
cd server
npm install
node index.js
```

The server will start on `http://localhost:3000` (or whichever port is configured).

### Running the Client

Open `client/index.html` in your browser, or serve it with a static file server:

```bash
cd client
npx serve .
```

> Make sure the client points to your running signaling server.

---

## Deployment

The live demo is deployed at: **[droplink-noir.vercel.app](https://droplink-noir.vercel.app)**

- **Client** — deployable to any static host (Vercel, Netlify, GitHub Pages)
- **Server** — deployable to any Node.js host (Railway, Render, Fly.io)

---

## Status

🚧 **In progress** — active development, expect changes.

---

## License

Not specified. Contact the author for usage rights.
