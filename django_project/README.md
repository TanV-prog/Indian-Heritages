# Indian Heritage — Living Traditions Preservation Platform
**Living Knowledge & Generational Continuity Initiative**

> “Preserving the stories, skills and traditions that make India unique.”

*Indian Heritage* is a digital platform dedicated to discovering, documenting, preserving, and learning about India's traditional knowledge and cultural heritage — including traditional dryland farming, local crafts, folklore, folk arts, traditional recipes, seasonal festivals, oral histories, and village life architecture.

---

## Architecture & Technology Stack

- **Backend:** Python 3.10+, Django 5.1+
- **Database:** SQLite (default for development/demo), extensible to PostgreSQL via `DATABASE_URL`
- **Frontend:** Semantic HTML5, peaceful rural palette CSS3, Vanilla JavaScript (ES6+), Leaflet.js + OpenStreetMap
- **Production Server:** Gunicorn + Whitenoise for static assets
- **Deployment Ready:** Pre-configured with `render.yaml` and `build.sh`

---

## Project Structure

```
django_project/
├── manage.py
├── requirements.txt
├── render.yaml
├── build.sh
├── .gitignore
├── config/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── heritage/
│   ├── models.py          # HeritageEntry, Story, Contribution, LearningModule, QuizQuestion
│   ├── views.py           # home, explore, detail, map, stories, contribute, learn
│   ├── forms.py           # ContributionForm with permission verification
│   ├── admin.py           # Moderation queue with Approve/Reject actions
│   ├── urls.py
│   ├── migrations/
│   │   └── 0001_initial.py
│   └── management/commands/
│       └── seed_data.py   # Seeder for Andhra, Telangana, Rajasthan, Kerala & Bengal records
├── templates/
│   ├── base.html
│   ├── home.html
│   ├── explore.html
│   ├── heritage_detail.html
│   ├── map.html
│   ├── stories.html
│   ├── contribute.html
│   ├── learn.html
│   ├── 404.html
│   └── 500.html
└── static/
    ├── css/style.css
    ├── js/main.js
    ├── js/quiz.js
    ├── js/map.js
    └── images/
```

---

## Quickstart Local Development

### 1. Clone repository & create virtual environment
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

### 3. Run migrations
```bash
python manage.py migrate
```

### 4. Populate realistic sample heritage data
```bash
python manage.py seed_data
```

### 5. Create superuser for Django Admin
```bash
python manage.py createsuperuser
```

### 6. Run local development server
```bash
python manage.py runserver
```
Visit `http://127.0.0.1:8000` in your web browser. Access the Django Admin moderation dashboard at `http://127.0.0.1:8000/admin/`.

---

## Archival Governance & Review Workflow

In accordance with cultural heritage ethics, user-submitted traditions do **not** automatically become verified public records:
1. Contributors submit through the `Help Preserve a Tradition` form (`/contribute/`).
2. Submissions are saved with `status = "Pending Review"`.
3. An administrator logs into `/admin/heritage/contribution/` to review details and toggle:
   - **Pending Review**
   - **Approved**
   - **Rejected**
4. Approved entries are promoted into public exhibition catalogs.

---

## Deployment to Render

1. Connect your GitHub repository to [Render.com](https://render.com).
2. Choose **New Web Service** and select this repository.
3. Render will auto-detect `render.yaml` or you can manually configure:
   - **Environment:** `Python 3`
   - **Build Command:** `./build.sh`
   - **Start Command:** `gunicorn config.wsgi:application --bind 0.0.0.0:$PORT`
4. Set Environment Variables:
   - `DJANGO_SECRET_KEY`: Set a secure random string
   - `DJANGO_DEBUG`: `False`
   - `DJANGO_ALLOWED_HOSTS`: `.onrender.com`
