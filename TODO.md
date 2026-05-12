# TODO

## Footer premium refinement (SUNNYSIDEUP)

- [ ] Read current `src/components/Footer.tsx` and identify all required UI sections (brand, services links, contact, quick quote card, social icons, service area chips, bottom bar).
- [ ] Add footer atmosphere layer: absolute positioned blurred sunny yellow + sky blue glows, keep readability (dark base).
- [ ] Add cinematic top transition: ~80–100px gradient fade into `gray-900` before footer content.
- [ ] Upgrade brand paragraph copy to stronger SUNNYSIDEUP identity (local, dependable, commercial-professional, island-based).
- [ ] Upgrade “Quick Quote” section into a premium card:
  - [ ] Gradient dark card background, subtle sunny border, stronger shadow, rounded corners, improved padding.
  - [ ] Add small label “FAST RESPONSE” + bold title “Request a Quick Quote” above the form.
  - [ ] Preserve form logic, inputs, and submit button functionality.
- [ ] Replace fake social icons (f/in/ig) with lucide-react icons: Facebook, Linkedin, Instagram.
  - [ ] Glass/dark hover, rounded buttons, smooth transitions.
- [ ] Upgrade service area tags to premium “glassy/dark chip” style with hover.
- [ ] Add trust/stats row above bottom copyright bar:
  - [ ] 4 compact items: 25+ Years Experience, Victoria-Based Team, Flexible Scheduling, Island-Wide Support.
  - [ ] Subtle clean responsive grid.
- [ ] Improve spacing/layout + typography polish:
  - [ ] Increase breathing room (py-20/py-24), better column gaps and vertical rhythm.
  - [ ] Cleaner hover states and hierarchy for headings/metadata.
- [ ] Run TypeScript build/lint (or `npm test`/`npm run build`) to ensure no regressions.
- [ ] Verify footer routes and form behavior remain intact.

