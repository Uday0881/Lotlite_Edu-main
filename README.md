# Lotlite School of Real Estate — Full-Stack Project

A complete React + Spring Boot + MongoDB clone of the Lotlite launchpad site.

---

## 📁 Project Structure

```
Lotlite_Edu/
├── frontend/               # React (Vite) — runs on :5173 in dev
│   └── src/
│       ├── components/
│       │   ├── home/       # One file per homepage section
│       │   ├── layout/     # Header, Footer, Layout
│       │   └── shared/     # Reusable: LeadForm, ApplyDialog, FAQ, BlogSection…
│       ├── constants/      # animations.js — all Framer Motion variants
│       ├── data/           # homeData.js, blogData.js, faqData.js … (edit content here)
│       ├── hooks/          # usePageTheme.js
│       ├── lib/            # submitLead.js, utils.js
│       └── pages/          # Home, Contact, Incubation, Outcomes, Admin, programs/…
│
├── backend/                # Spring Boot — runs on :8080
│   └── src/main/java/in/lotlite/
│       ├── LotliteApplication.java
│       ├── config/WebConfig.java          # CORS + RestTemplate
│       ├── controller/LeadController.java # POST /api/leads, GET /api/leads
│       ├── exception/GlobalExceptionHandler.java
│       ├── model/Lead.java                # MongoDB document
│       ├── repository/LeadRepository.java
│       └── service/LeadService.java       # Save to MongoDB + webhook to Sheets
│
└── google-apps-script/
    └── Code.gs             # Paste into Google Sheets → Apps Script
```

---

## 🚀 Getting Started

### Frontend

```powershell
cd frontend
npm install
npm run dev          # http://localhost:5173
```

### Backend

Install Maven first, then:

```powershell
# Option A: Install Maven via Chocolatey (run as admin)
choco install maven

# Option B: Download from https://maven.apache.org/download.cgi
# and add bin/ to your PATH

cd backend
mvn spring-boot:run  # http://localhost:8080
```

Make sure MongoDB is running locally on port 27017, or update `application.properties` with your Atlas URI.

---

## ⚙️ Configuration

### Backend `application.properties`

| Property | Description |
|---|---|
| `spring.data.mongodb.uri` | MongoDB connection string |
| `spring.data.mongodb.database` | Database name (`lotlite`) |
| `lotlite.sheets.webhook-url` | Google Apps Script deployment URL |

### Google Sheets Integration

1. Open Google Sheets → Extensions → Apps Script
2. Paste the contents of `google-apps-script/Code.gs`
3. Click **Deploy → New Deployment → Web App** (execute as: Me, access: Anyone)
4. Copy the deployment URL
5. Paste into `application.properties`:
   ```
   lotlite.sheets.webhook-url=https://script.google.com/macros/s/YOUR_ID/exec
   ```

---

## 🎨 How to Edit Content

All content is centralized in data files. No need to touch component code:

| File | Controls |
|---|---|
| `src/data/homeData.js` | Hero, stats, partners, pillars, life cards, demo day, outcomes, testimonials |
| `src/data/blogData.js` | Blog post cards in the carousel |
| `src/data/faqData.js` | FAQ accordion questions |
| `src/data/admissionsData.js` | Admissions process steps |
| `src/data/incubationData.js` | Incubation page content |
| `src/pages/programs/*.jsx` | Program curriculum (MBA, DS, IT, CRM) |

---

## 🌓 Theme System

- Dark / Light mode toggled via the header toggle
- Mode stored in `localStorage` under key `lotlite-mode`
- Each page sets a `data-theme` attribute on `<html>` via `usePageTheme()`
- 5 color palettes: `home`, `ds`, `it`, `crm`, `inc`, `outcomes`

---

## 🔐 Admin Panel

Visit `/admin` — default password: `lotlite2024`

Change it in `src/pages/Admin.jsx`, line: `const ADMIN_PASSWORD = 'lotlite2024'`

The Admin page fetches all leads from `GET /api/leads` and displays them in a table.

---

## 📊 Google Analytics

GA tag `G-QNP8DSN21V` is already configured in `frontend/index.html`.
