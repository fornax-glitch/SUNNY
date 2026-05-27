# TODO — TLS Guardrail (SUNNYSIDEUP)

## P0 — Required (must implement)
- [ ] Configure a lint/static regex forbidden-token detector
  - [ ] Scan only: `src/components/**` and `src/pages/**`
  - [ ] Skip only: `src/pages/PrivacyPolicy.tsx` and `src/pages/TermsOfService.tsx`
  - [ ] Detect tokens (case-insensitive): `insured`, `insurance`, and `insur*` prefix/fragment substrings
  - [ ] Hard fail (non-zero exit) on any match
  - [ ] Output: exact file path, exact matched substring(s), line number, and line content
- [ ] Add CI job to run the detector and fail builds/PRs

## P1 — Quality of failure output
- [ ] Ensure both local and CI enforcement produce consistent actionable error messages

## P2 (Optional) — Trust UI vocabulary
- [ ] Add centralized allowed vocabulary layer for trust UI components
- [ ] Restrict trust UI components to use only approved vocabulary

## P3 — Expansion
- [ ] If project gains new unsafe directories, explicitly add them later (no implicit expansion)

