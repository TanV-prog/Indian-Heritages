# Indian Heritage — Living Traditions Preservation Platform

A comprehensive digital platform dedicated to identifying, documenting, verifying, and learning India's traditional knowledge commons.

---

## Quick Start on Your Desktop

### Option A: Next.js Interactive Web App (Recommended Frontend)
This is the full Next.js 15 application featuring the interactive Living Map, Audio Storytelling, Traditions at Risk Vitality Index, Knowledge Keepers directory, and the Curatorial Verification Pipeline.

```bash
# 1. Install Node.js dependencies
npm install

# 2. Start the local development server
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

### Option B: Django Backend & Admin Platform
This is the Django 5 relational database backend with pre-seeded SQLite database, Heritage models, admin portal, and REST API.

#### From the project root:
```bash
# 1. Install Python dependencies (requirements.txt is provided at root and in django_project/)
pip install -r requirements.txt

# 2. Navigate to the Django directory
cd django_project

# 3. Apply any database migrations (pre-seeded SQLite is already included)
python manage.py migrate

# 4. Start the Django server
python manage.py runserver
```
Open **[http://127.0.0.1:8000](http://127.0.0.1:8000)** in your browser.

#### Alternatively, if you are already inside `django_project`:
```bash
cd django_project
pip install -r requirements.txt
python manage.py runserver
```

---

## Project Structure

```
indian-heritage/
├── app/                  # Next.js 15 App Router pages & API routes
│   ├── api/              # Backend Next.js endpoints (Gemini, Download, Contributions)
│   ├── layout.tsx        # Root layout & typography
│   └── page.tsx          # Main interactive living heritage experience
├── components/           # Modular UI components
│   ├── ArchiveToAction.tsx
│   ├── ContributeSection.tsx
│   ├── ExportDesktopModal.tsx
│   ├── FeaturedTraditions.tsx
│   ├── HeritageHealth.tsx
│   ├── HeritageMap.tsx
│   ├── KnowledgeKeepers.tsx
│   ├── LearningSection.tsx
│   ├── StoriesSection.tsx
│   └── TraditionsAtRisk.tsx
├── django_project/       # Standalone Django 5 Backend
│   ├── config/           # Django settings, WSGI, ASGI
│   ├── heritage/         # Django apps, models, views, admin, urls
│   ├── templates/        # Django server-rendered HTML templates
│   ├── static/           # Static CSS and assets
│   ├── db.sqlite3        # Pre-seeded SQLite database
│   ├── manage.py         # Django CLI
│   └── requirements.txt  # Django pip dependencies
├── lib/                  # Data stores & heritage continuity records
│   ├── heritage-data.ts  # In-depth records, knowledge keepers, quiz, audio tracks
│   └── utils.ts          # Utility functions
├── public/               # Public assets, images, audio files & downloadable bundle
│   ├── images/           # Authentic cultural illustrations & photography
│   └── download/         # Pre-packaged project ZIP
├── package.json          # Node.js dependencies & scripts
├── requirements.txt      # Root Python dependencies for quick install
└── README.md             # This guide
```
