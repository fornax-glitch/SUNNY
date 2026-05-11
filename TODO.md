# TODO - SunnySideUp Building Maintenance update

- [ ] Update SEO + JSON-LD LocalBusiness schema in `index.html` (Vancouver Island only; add Window/Carpet; remove AB/SK/MB).
- [ ] Update `src/data/index.ts`:
  - [ ] Remove painting touch-up service item.
  - [ ] Add Window Cleaning + Carpet Cleaning services with realistic copy.
  - [ ] Update service areas to ONLY Vancouver Island cities.
  - [ ] Update stats/copy to remove Western Canada.
- [ ] Update `src/pages/HomePage.tsx` hero + local/trusted copy and remove non-local/national wording.
- [ ] Update `src/components/Navbar.tsx` dropdown + top bar copy to match Vancouver Island only; remove multi-province wording.
- [ ] Update `src/components/Footer.tsx` service areas section to ONLY Vancouver Island.
- [ ] Ensure dynamic service routing `/services/:slug` works for:
  - [ ] `/services/window-cleaning`
  - [ ] `/services/carpet-cleaning`
- [ ] Run project-wide search for banned terms (Western Canada, Alberta, Saskatchewan, Manitoba, painting touch-ups).
- [ ] Run `npm run build` to confirm zero TS/React Router errors.
- [ ] Produce final summary of modified files + added/removed content.

