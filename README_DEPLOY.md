# How to Deploy EliteLandingPage.jsx

This landing page is built as a highly responsive, modern standalone React component using Tailwind CSS utility classes and inline SVG icons (no external icon package required).

## Step-by-Step Implementation

### 1. Copy the Component
Copy the [EliteLandingPage.jsx](EliteLandingPage.jsx) file into your React project (typically under `src/components/` or `src/pages/`).

### 2. Configure Tailwind CSS
Ensure Tailwind is configured in your project. If you are using a standard Vite + React template, your `tailwind.config.js` should cover your source files. Here is a standard configuration that matches the styling:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can customize colors here to match gigitekai.com branding
      }
    },
  },
  plugins: [],
}
```

### 3. Mount the Page (Vite Router / App.jsx)
To make this component live on your `elite-ai` subdomain, you can set it up in your router or mount it directly in `App.jsx` if this is a dedicated Vite build for the subdomain.

#### Standard Router (React Router DOM) Example:
```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EliteLandingPage from './components/EliteLandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EliteLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
```

#### Direct Mount (Standalone build) in `App.jsx`:
```javascript
import EliteLandingPage from './EliteLandingPage';

function App() {
  return <EliteLandingPage />;
}

export default App;
```

### 4. Wire the Lead Submission
Inside `EliteLandingPage.jsx`, search for the `handleSubmit` function. You can wire this up to your CRM, HubSpot, email service (e.g., SendGrid/Formspree), or standard backend endpoint:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Example API Post
  try {
    const response = await fetch('YOUR_API_ENDPOINT/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead)
    });
    if (response.ok) {
      setSubmitted(true);
    }
  } catch (error) {
    console.error("Error submitting lead:", error);
  }
};
```

## Subdomain Setup (elite-ai.gigitekai.com)
1. **Build the app:** Run `npm run build` in your Vite project.
2. **Deploy to hosting:** Deploy the build output (`dist` folder) to your hosting provider (Vercel, Netlify, AWS Amplify, Cloudflare Pages, etc.).
3. **DNS Configuration:** In your DNS provider (e.g., GoDaddy, Cloudflare, Namecheap), add a **CNAME record**:
   - **Name:** `elite-ai`
   - **Value:** The domain/host provided by your hosting platform (e.g., `your-app.vercel.app` or `pages.dev`).
4. **SSL:** Your hosting platform should automatically provision a free SSL certificate for the subdomain.


---

## Deploying to Cloudflare Pages (Recommended)

Cloudflare Pages is a perfect fit for this React + Vite site. It is extremely fast, free for standard sites, and handles SSL/subdomains seamlessly.

### Step 1: Push Your Code to GitHub/GitLab
Create a private or public repository on GitHub (or GitLab) and push your React/Vite project files (including `EliteLandingPage.jsx`).

### Step 2: Connect to Cloudflare Pages
1. Log in to your **Cloudflare Dashboard**.
2. Navigate to **Workers & Pages** in the left sidebar and click **Create application** -> **Pages** -> **Connect to Git**.
3. Select your GitHub account and choose the repository you just pushed.

### Step 3: Configure Build Settings
Cloudflare Pages has built-in presets for Vite. Set the following build settings:
*   **Framework preset:** `Vite`
*   **Build command:** `npm run build` (or `yarn build` / `pnpm build`)
*   **Build output directory:** `dist`
*   **Root directory:** `/` (or subfolder if your React app is in a subfolder)

Click **Save and Deploy**. Cloudflare will build and deploy your landing page in under a minute!

### Step 4: Map Your Custom Subdomain (`elite-ai.gigitekai.com`)
Since your main domain (`gigitekai.com`) is likely managed on Cloudflare or another registrar:
1. In your Pages project dashboard, go to the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter `elite-ai.gigitekai.com` and click **Continue**.
4. **If your DNS is managed by Cloudflare:** Cloudflare will automatically add the necessary DNS records and provision the SSL certificate for you.
5. **If your DNS is managed elsewhere (e.g., GoDaddy, Namecheap):** Cloudflare will give you a CNAME record to copy. Go to your registrar's DNS settings and add:
   - **Type:** `CNAME`
   - **Name:** `elite-ai`
   - **Target:** `your-pages-subdomain.pages.dev` (provided by Cloudflare)

Once added, Cloudflare will automatically secure the subdomain with an SSL certificate. Your page is now live!
