# MedTour Istanbul

MedTour Istanbul is a modern ReactJS medical tourism booking dashboard that helps clinics manage patient requests, services, appointment dates, and treatment statuses. The project includes CRUD operations, search, filters, dashboard statistics, responsive design, and LocalStorage persistence.

The interface is designed for a luxury medical tourism clinic or agency in Istanbul, with a clean premium layout, soft shadows, rounded cards, professional blue, teal, emerald, white, and slate colors, and responsive behavior for mobile, tablet, and desktop.

## Technologies Used

- ReactJS
- Vite
- JavaScript
- Tailwind CSS
- LocalStorage
- Netlify-ready static deployment

## Features

- Add new medical tourism requests
- List all saved requests in responsive cards
- Edit and update existing requests
- Delete requests
- Save and load all request data from LocalStorage
- Seed 3 sample requests only when LocalStorage is empty
- Search by patient name, country, or phone
- Filter by status and service
- English and Turkish language toggle with saved language preference
- Dashboard statistics for total, pending, confirmed, completed, and cancelled requests
- Required-field validation for full name, phone, country, service, appointment date, and status
- Premium clinic-style UI with status badges, hover effects, and smooth transitions

## Data Model

Each request contains:

- `id`
- `fullName`
- `phone`
- `country`
- `service`
- `appointmentDate`
- `status`
- `notes`
- `createdAt`

## How To Run Locally

Install dependencies (preferred: pnpm / Corepack). For Windows PowerShell follow the steps below.

Option 1 — enable Corepack and use `pnpm` (recommended):

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
corepack enable
corepack prepare pnpm@latest --activate
cd "C:\Users\LENOVO\Documents\New project 2\MedTour Istanbul"
pnpm install
pnpm run dev
```

Option 2 — install `pnpm` via npm and use it:

```powershell
"C:\Program Files\nodejs\npm.cmd" install -g pnpm
cd "C:\Users\LENOVO\Documents\New project 2\MedTour Istanbul"
pnpm install
pnpm run dev
```

Option 3 — (not recommended) use `npm` if you don't have pnpm workspaces in your environment. If PowerShell blocks `npm` scripts, run the `npm.cmd` shim or relax the execution policy first:

```powershell
# use shim to avoid PowerShell .ps1 handling
"C:\Program Files\nodejs\npm.cmd" install
"C:\Program Files\nodejs\npm.cmd" run dev
# or allow signed scripts for the current user then run npm normally
# Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
# npm install
# npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## CRUD Explanation

- Create: The request form adds a new patient request with a generated `id` and `createdAt` timestamp.
- Read: Saved requests are loaded from LocalStorage and displayed in the request list.
- Update: The Edit button fills the form with the selected request, then saves changes back into state and LocalStorage.
- Delete: The Delete button removes the selected request from state and LocalStorage.

## LocalStorage Explanation

The app uses `src/utils/localStorage.js` to read and write requests with the `medtour-istanbul-requests` key. On first load, if no saved requests exist, the app stores and displays three sample requests:

- Sara Ahmed from Tunisia for Dental Treatment with Pending status
- Mohamed Ali from Algeria for Hair Transplant with Confirmed status
- Lina Hassan from Morocco for Eye Surgery with Completed status

After every add, update, or delete action, the current request list is saved automatically. Refreshing the page restores the saved data without a backend or database.

## Deployment Note

This project is fully deployable on Netlify as a static Vite app.

Build command:

```bash
npm run build
```

Publish directory:

```bash
dist
```
