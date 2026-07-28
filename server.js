const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
	res.send(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Test project for dokploy</title>
<style>
	:root {
		color-scheme: light dark;
	}
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif;
		background: radial-gradient(circle at top, #1e293b, #0f172a 60%);
	}
	.card {
		padding: 3rem 3.5rem;
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.12);
		backdrop-filter: blur(10px);
		text-align: center;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
	}
	.badge {
		display: inline-block;
		padding: 0.35rem 0.9rem;
		border-radius: 999px;
		font-size: 0.75rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #34d399;
		background: rgba(52, 211, 153, 0.12);
		border: 1px solid rgba(52, 211, 153, 0.35);
		margin-bottom: 1.25rem;
	}
	h1 {
		margin: 0;
		font-size: 2rem;
		background: linear-gradient(135deg, #38bdf8, #a78bfa);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	p {
		margin-top: 0.75rem;
		color: #94a3b8;
		font-size: 0.95rem;
	}
</style>
</head>
<body>
	<div class="card">
		<span class="badge">● Running</span>
		<h1>Test project for dokploy</h1>
		<p>Deployed straight from a plain Node.js + Dockerfile setup.</p>
	</div>
</body>
</html>`);
});

app.listen(port, () => {
	console.log(`Test project for dokploy listening on port ${port}`);
});
