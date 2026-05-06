This is a Node.js Express application that serves a simple web page. To test it and view in browser:

1. Run Docker: `docker build -t kubernetes-argocd-learning-app .`
2. Run the container: `docker run -p 3000:3000 kubernetes-argocd-learning-app`
3. Open browser to `http://localhost:3000`

The app includes a health check endpoint at `/health` that returns JSON status.
