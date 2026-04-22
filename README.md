# DentalFlow Demo

Frontend-only demo for a dental clinic online booking widget and admin panel.

## Demo capabilities

- Public landing page with a floating booking button
- Multi-step booking modal for patients
- Admin login with demo credentials
- Dashboard with appointment filters and status actions
- Manual appointment creation and editing
- Localized UI in Kazakh and Russian
- Mock settings for services, doctors, and working hours

## Default language

- Kazakh (`kk`) is the default UI language
- Russian (`ru`) can be switched from the top bar

## Admin login

- `demo`
- `dental123`

## Run locally

Use the bundled Node runtime or any installed Node.js:

```bash
node server.js
```

Then open:

```text
http://127.0.0.1:4173
```

## Notes

- This is a demo without backend or persistence
- Data is stored only in browser memory for the current session
- React is loaded from CDN, so internet access is required when opening the page
