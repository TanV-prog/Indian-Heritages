# Testing Guide — Indian Heritage Platform

This project includes automated testing suites for both the **Next.js frontend** and the **Django backend**.

---

## 1. Testing the Next.js Frontend

From the root project folder:

```bash
# 1. Install dependencies (if not already done)
npm install

# 2. Run the test suite
npm test
```

### What `npm test` Validates:
- **Project Structure**: Presence of `requirements.txt`, `README.md`, `package.json`.
- **Packaging Integrity**: Verifies the download zip archive is built and complete.
- **Data Integrity**: Asserts all Living Heritage entries, Knowledge Keepers, Oral Stories, Learning Modules, and Quiz Questions are loaded and well-formed.
- **Terminology & Compliance**: Asserts no forbidden or obsolete hackathon references exist.
- **Component Availability**: Validates that all critical React/Next.js components and modals exist.
- **Django Configuration**: Checks that backend models, views, and test suites are intact.

---

## 2. Testing the Django Backend

If you are running or evaluating the Python/Django backend:

```bash
# 1. Navigate to the django_project directory
cd django_project

# 2. Ensure dependencies are installed in your environment
pip install -r requirements.txt

# 3. Run migrations for local database
python manage.py migrate

# 4. Run the Django test suite
python manage.py test
```

### What `python manage.py test` Validates:
- **Model Tests**: Heritage entry slug generation, knowledge keeper profiles, story models, and learning module relations.
- **View & Routing Tests**: Home page, explore directory with filter/search queries, heritage detail page, interactive map, stories, and learning hub.
- **API Endpoints**: Real-time search query endpoint (`/api/search/?q=...`).
- **Community Contribution Workflow**: Validates POST submissions and verification pipeline statuses.

---

## 3. Production Build Test

To test production compilation:

```bash
npm run build
```
