const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Route to render a simple HTML page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Kubernetes & ArgoCD Learning App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f5f5;
        }
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
          color: #333;
          text-align: center;
        }
        p {
          color: #666;
          line-height: 1.6;
        }
        .status {
          background-color: #e8f5e8;
          border: 1px solid #4caf50;
          color: #2e7d32;
          padding: 10px;
          border-radius: 5px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Kubernetes & ArgoCD Learning App</h1>
        <p>Welcome to your basic application for learning Kubernetes and ArgoCD!</p>
        <p>This simple Node.js Express app is designed to help you understand:</p>
        <ul>
          <li>Containerization with Docker</li>
          <li>Kubernetes deployments</li>
          <li>ArgoCD for GitOps</li>
          <li>Continuous deployment workflows</li>
        </ul>
        <div class="status">
          <strong>Status:</strong> Application is running successfully! 🎉
        </div>
        <p><em>Next steps: Containerize this app, deploy to Kubernetes, and set up ArgoCD for continuous deployment.</em></p>
      </div>
    </body>
    </html>
  `);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Kubernetes & ArgoCD Learning App listening at http://localhost:${port}`);
});