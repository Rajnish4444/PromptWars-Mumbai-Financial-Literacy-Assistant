# Google Cloud Run Deployment Guide

Because you need this project specifically hosted natively on Google Cloud (GCP) for your hackathon (and not utilizing the Firebase hosting wrapper), we have containerized the application. It leverages a lightweight `nginx:alpine` image tuned specifically to render Angular Single Page Applications without breaking the internal URL router.

To deploy this project from your native terminal to the Internet safely, you must follow these exact instructions:

## Step 1: Install & Set Up Google Cloud SDK 
If you do not have the native CLI installed, download it from [Google Cloud CLI Install](https://cloud.google.com/sdk/docs/install).

Authenticate with your hackathon Google account:
```bash
gcloud auth login
```

Set your active Google Cloud Project ID:
```bash
gcloud config set project phrasal-lyceum-493106-j8
```

## Step 2: Enable Requires APIs
Google Cloud restricts services by default. You need to enable the serverless registry and the build endpoints:
```bash
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
```

## Step 3: Trigger the Build & Deploy
Once your CLI is hooked to your active account and project, you can deploy the entire repository directly from your terminal.

Execute this command natively in the root directory where the `Dockerfile` sits:

```bash
gcloud run deploy finlit-lab \
    --source . \
    --platform managed \
    --region us-central1 \
    --allow-unauthenticated \
    --port 80
```

### What this command does:
- `--source .`: Pushes the local source code up to Google Cloud Build, which will safely execute the `Dockerfile` we just created.
- `--platform managed`: Tells GCP we want a severless deployment (scales to 0 when no traffic occurs to save you money!).
- `--region us-central1`: Defines the geographical location of the servers.
- `--allow-unauthenticated`: Essential for web apps! It exposes the app to the public web so judges can see it.
- `--port 80`: Explicitly binds to the port our Nginx configuration is mapping traffic toward.

Once Cloud Build finishes processing the node modules (which usually takes about ~3 minutes), your CLI will output a shiny new `https://` Service URL holding your live application!
