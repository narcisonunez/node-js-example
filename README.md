# node-js-example

Minimal Node.js + Express app used as a demo/test project for Dokploy deployments.

## Run locally

```bash
npm install
npm start
```

Visit `http://localhost:3000`.

## Docker

```bash
docker build -t node-js-example .
docker run -p 3000:3000 node-js-example
```
