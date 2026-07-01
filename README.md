# AEObility Web & Portfolio Platform

A modern, high-performance web platform built with **Next.js 16 (App Router)**. This repository houses the main AEObility corporate platform, Vincent Baker's professional portfolio, and a native Google Wallet digital business card pass integration.

---

## 🚀 Key Modules & Routes

### 1. **Corporate Hub (`/`)**
The landing page and primary site structure for **AEObility**—focusing on AI Search Optimisation (AEO), Local SEO, and practical AI workflow automation.

### 2. **Professional Portfolio (`/my-portfolio`)**
Vincent Baker's complete professional resume, core competencies, and featured case studies detailing high-impact AI and automation projects (such as the *AI Video Engine* and *Baby Bento Social Reel Generator*). 

### 3. **Digital Business Card (`/vince-baker`)**
A mobile-optimised, brand-aligned digital business card featuring interactive contact triggers, direct links, and a native wallet integration.

### 4. **Support Centre (`/support`)**
A dedicated support page for the Google Business Profile including direct communication channels, contact forms, and automated answers to frequently asked questions.

---

## 💳 Google Wallet Pass Integration

The platform features a custom, dependency-free Google Wallet Pass implementation, allowing visitors to save Vincent's business card directly to their Google Wallet.

### Technical Architecture:
* **Serverless Pass Generator (`/api/wallet-pass`)**: A Next.js API Route Handler that dynamically compiles a Google Wallet `GenericObject` and signs the payload into an **RS256 JWT** using Node's native `crypto` module.
  * *Template Fallback*: Uses the Google default template layout (omits `classTemplateInfo`) to avoid manual template validation errors in the Merchant Console.
  * *Environment Resiliency*: Sanitises surrounding double quotes and handles formatting (`\n`) for the private key, and supports both `GOOGLE_WALLET_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_WALLET_CLIENT_EMAIL`.
  * *Origins Validation*: Includes `origins` validation to secure browser save transactions on both development and production hosts.
* **Dynamic vCard Server (`/vince-baker.vcf`)**: A route handler that outputs the raw vCard data with explicit `Content-Type: text/vcard; charset=utf-8` and inline disposition headers.
* **Front-of-Pass QR Code**: The Google Wallet pass embeds a QR code linked directly to `https://aeobility.com.au/vince-baker.vcf`. Scanning this QR code from the wallet pass instantly triggers the smartphone's native **"Add to Contacts"** drawer.
* **Adblock-Resilient Icon**: Uses a locally hosted `google-wallet-icon.png` asset to prevent adblockers or privacy extensions from incorrectly hiding the button.

---

## 🛠️ Getting Started

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a local environment variables file:
   Create a `.env.local` file in the root directory:
   ```env
   GOOGLE_WALLET_ISSUER_ID=3388000000023168657
   GOOGLE_WALLET_SERVICE_ACCOUNT_EMAIL=wallet-service-account@wallet-businesscard.iam.gserviceaccount.com
   GOOGLE_WALLET_PROJECT_ID=wallet-businesscard
   GOOGLE_WALLET_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## ⚙️ Production Configuration (Vercel)

To enable the Google Wallet pass generation on the live site, configure the following Environment Variables in your Vercel project settings:

| Variable Name | Description |
|---|---|
| `GOOGLE_WALLET_ISSUER_ID` | Your Issuer ID from Google Pay & Wallet Console |
| `GOOGLE_WALLET_SERVICE_ACCOUNT_EMAIL` / `GOOGLE_WALLET_CLIENT_EMAIL` | Service Account Client Email (supports both configurations) |
| `GOOGLE_WALLET_PROJECT_ID` | Google Cloud Project ID |
| `GOOGLE_WALLET_PRIVATE_KEY` | Full service account Private Key (with `\n` linebreaks, quotes handled automatically) |

*After adding variables, trigger a redeployment on Vercel to rebuild the Serverless Functions.*
