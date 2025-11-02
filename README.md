# My Classroom

A lightweight toolkit to organize classes, assignments, and student repositories — designed to work smoothly with GitHub.

> **Goal:** make it easy to spin up a course workspace, distribute starter code, and collect submissions while keeping everything version‑controlled.

---

## ✨ Features

* **Assignment templates**: distribute starter code from a template repository.
* **One‑click student repos**: generate per‑student repos or team repos.
* **Autograding‑ready**: place your tests in `/.github/workflows` to grade on push.
* **Roster import**: import students from CSV or your LMS (optional).
* **Progress overview**: quick links to each student repo and CI status.
* **Extensible**: simple configuration via environment variables.

> This project is intentionally minimal; plug in your own workflows (CI, linters, tests) to match your course.

---

## 🧱 Tech Stack (example)

* **Frontend:** React + Vite + TypeScript + Tailwind CSS
* **Backend (optional):** Node.js + Express (or serverless functions)
* **CI/CD:** GitHub Actions
* **Auth (optional):** GitHub OAuth App / PAT

> If your repository differs, update this section to reflect your exact stack.

---

## 📦 Project Structure (suggested)

```
my-classroom/
├─ .github/workflows/        # CI, autograding, lint/tests, etc.
├─ public/                   # static assets
├─ src/
│  ├─ components/            # reusable UI
│  ├─ pages/                 # route-level components
│  ├─ hooks/                 # custom hooks
│  ├─ lib/                   # api clients, helpers
│  ├─ styles/                # global styles
│  └─ main.tsx               # app entry
├─ scripts/                  # helper scripts (e.g., repo creation)
├─ .env.example              # example env vars
├─ package.json
└─ README.md
```

---

## 🚀 Getting Started

### Prerequisites

* **Node.js** v18+ (recommended)
* **npm** v9+ or **pnpm**/**yarn**
* A **GitHub account** (and optionally a Personal Access Token if you will call the GitHub API)

### 1) Clone the repo

```bash
git clone https://github.com/fnmiranda/my-classroom.git
cd my-classroom
```

### 2) Install dependencies

```bash
npm install
# or
pnpm install
```

### 3) Configure environment variables

Create a `.env` from the provided example:

```bash
cp .env.example .env
```

Fill in values as needed. Typical variables:

```
# Frontend
VITE_API_URL=http://localhost:5173

# GitHub API (only if you call GitHub from the app)
GITHUB_OWNER=your-org-or-user
GITHUB_TOKEN=ghp_examplePATwithRepoScope
GITHUB_CLASSROOM_ORG=your-classroom-org
```

> Never commit real secrets. Use `.env` locally and provider secrets in CI/CD.

### 4) Start the dev server

```bash
npm run dev
```

Open the printed URL (usually `http://localhost:5173`).

---

## 🧪 Testing & Quality

* **Unit tests:**

```bash
npm run test
```

* **Lint & format:**

```bash
npm run lint
npm run format
```

> Configure ESLint/Prettier/Vitest/Jest as you prefer. Add status checks in GitHub Actions.

---

## 🔌 Integration with GitHub (optional patterns)

* **Template Repos:** keep starter code in a template repo; student repos are created from it.
* **Autograding:** add a workflow like `autograde.yml` that runs tests on push and posts results.
* **Feedback PR:** enable a dedicated `Feedback` pull request in each student repo to leave comments.

> If using GitHub Classroom, you can map each assignment to a template and let it create the student repos automatically.

---

## 🗺️ Scripts (examples)

You can automate management tasks with Node scripts under `scripts/`:

* `create-repos.ts`: create student repositories from a template.
* `link-roster.ts`: read a CSV roster and map GitHub usernames.
* `report-status.ts`: fetch CI status across all repos.

Run with:

```bash
npm run scripts:create-repos
```

(Map these in `package.json` as needed.)

---

## 🧰 Environment Variables (summary)

| Name                   | Example                 | Required | Description                              |
| ---------------------- | ----------------------- | -------- | ---------------------------------------- |
| `VITE_API_URL`         | `http://localhost:5173` | no       | Frontend base URL                        |
| `GITHUB_OWNER`         | `your-org`              | yes*     | Organization or user that owns the repos |
| `GITHUB_TOKEN`         | `ghp_xxx`               | yes*     | PAT with repo scope (for automation)     |
| `GITHUB_CLASSROOM_ORG` | `my-course-2025`        | no       | Org dedicated to Classroom               |

> `*` Only required if you run API‑based automation from this project.

---

## 📸 Screenshots

Add screenshots or short clips of the flow: assignment creation, student view, autograding results, etc.

```
/docs/screenshots/
  ├─ dashboard.png
  ├─ assignment.png
  └─ feedback-pr.png
```

---

## 🚢 Deployment

* **Static Frontend:** Vercel, Netlify, GitHub Pages.
* **Server/Functions:** Vercel Functions, Netlify Functions, Railway, Fly.io, or your own Node server.
* **Secrets:** set PATs and org names in your provider’s secret manager.

### Example (Vercel)

1. Push to GitHub.
2. Import the repo on Vercel.
3. Set environment variables.
4. Deploy main branch.

---

## 🗺️ Roadmap

* [ ] Student progress dashboard
* [ ] CSV roster import
* [ ] Bulk repo creation from template
* [ ] Autograding examples (Jest/Vitest/PyTest)
* [ ] Feedback PR automation
* [ ] Admin metrics (submissions on time, test pass rate)

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push: `git push origin feat/your-feature`
5. Open a Pull Request

Please follow conventional commits if possible.

---

## 📄 License

This project is licensed under the **MIT License** (see `LICENSE`).

---

## 🙌 Acknowledgements

* GitHub and GitHub Classroom teams
* Open‑source community for tooling and examples

---

### Notes for Maintainers

* Update **Tech Stack**, **Env Vars**, and **Scripts** to match the real code if the structure differs.
* If this repository is private, ensure PAT scopes are minimal (e.g., `repo`, `workflow`).
* When teaching, test the onboarding path with a demo student before launching an assignment.
