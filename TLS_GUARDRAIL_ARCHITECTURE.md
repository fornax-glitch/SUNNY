# TLS Guardrail Architecture (SUNNYSIDEUP)

## 0) Goal
Prevent TLS violations (“insured / insurance / insur*”) from **ever** re-entering the codebase by adding **systemic enforcement**.

- Not a refactor.
- Not a content fix.
- Strict prevention via structural controls only (lint + CI + optional vocabulary layer).

---

## 1) TLS Guardrail Architecture

### Layer A — Lint-level protection (structure-scoped)
**Type:** Static regex forbidden-token detector

**Scope (UNSAFE zones only):**
- `src/components/**`
- `src/pages/**`

**Exception (SAFE zones only):**
Skip scanning ONLY these exact files:
- `src/pages/PrivacyPolicy.tsx`
- `src/pages/TermsOfService.tsx`

**Match policy:**
- hard fail (non-zero exit)
- block local workflows (pre-commit or lint script)

**Detection output requirements:**
- Print the exact violating file path(s)
- Print exact matching substring(s)
- Print exact line number + line content

---

### Layer B — CI-level enforcement (mandatory PR gate)
Run the same forbidden-token detector in CI:

- **Fail build if any forbidden tokens appear** in UNSAFE zones.
- **Block merge** until PR is resolved.

---

### Layer C (Optional) — Shared vocabulary enforcement for trust UI
Purpose:
- ensure “trust UI” text surfaces cannot introduce banned vocabulary indirectly.

Mechanism (structural):
- Trust UI components must import text from a centralized vocabulary module that only allows approved strings.

This layer is optional because Layers A + B already enforce text-level bans.

---

## 2) Forbidden Pattern Specification

### Forbidden token set
Must detect **case-insensitive** occurrences of:
- `insured`
- `insurance`
- `insur*`

### Required matching behavior (confirmed)
- `insur*` is a **prefix / fragment** rule:
  - match ANY substring containing `insur` followed by any characters (including embedded occurrences inside longer words)
  - MUST NOT rely on strict word boundaries
- Case-insensitive
- Partial substring match allowed (embedded occurrences must be caught)

### Example concept matches
- insured
- insurance
- insuring
- insurer
- insurancE
- any longer variants containing `insur` as a prefix fragment

---

## 3) Safe vs Unsafe Zone Map

### SAFE ZONES (excluded from scanning)
- `src/pages/PrivacyPolicy.tsx`
- `src/pages/TermsOfService.tsx`

**Interpretation rule (confirmed):**
- SAFE is an explicit exception list only.
- Do NOT generalize the SAFE rule beyond the exact listed paths.

### UNSAFE ZONES (strict ban scanning)
All other files under:
- `src/components/**`
- `src/pages/**`

Including (by policy category intent):
- trust UI systems
- chips / badges
- marketing copy

---

## 4) Detection Strategy (required)

### Static regex scan
Algorithm (conceptual):
1. Enumerate files under UNSAFE zones:
   - `src/components/**/*.{ts,tsx,js,jsx}`
   - `src/pages/**/*.{ts,tsx,js,jsx}`
2. Skip ONLY:
   - `src/pages/PrivacyPolicy.tsx`
   - `src/pages/TermsOfService.tsx`
3. For each file, run the forbidden token detection pattern.
4. Collect all matches.
5. If any match exists:
   - fail with actionable output.

### Pre-commit hook OR CI step
- CI is the mandatory gate.
- Pre-commit is optional but recommended for developer fast feedback.

### Failure behavior (confirmed)
- Block merge/build (hard fail)
- No warnings-only mode.

---

## 5) Failure Mode Handling (required)
When a violation is detected:

1. CI/Lint prints:
   - Exact file path(s) containing matches
   - Exact string match output:
     - matched substring(s)
     - line number
     - full line content
2. The CI job fails and PR is blocked.
3. PR must be updated until scan returns clean.

---

## 6) Implementation Priority (P0–P3)

- **P0:** Layer A + Layer B (scoped lint + mandatory CI enforcement)
- **P1:** Ensure failure output includes file path + exact match + line content
- **P2 (optional):** Layer C shared vocabulary for trust UI text surfaces
- **P3:** Expand unsafe scanning scope only if future directories appear

