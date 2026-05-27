# TLS Guardrail Production Wiring Plan (SUNNYSIDEUP)

This document defines **exact production wiring and execution flow** for the TLS enforcement system described in:
- `TLS_GUARDRAIL_ARCHITECTURE.md`
- `TODO_TLS_GUARDRAIL.md`
- `TLS_GUARDRAIL_IMPLEMENTATION_TRANSLATION_GUIDE.md`

No code is provided here. This is an unambiguous integration plan.

---

# 1. CI/CD PIPELINE INTEGRATION

## 1A) CI system assumption
- Applies to GitHub Actions OR equivalent CI with the same stages/jobs.
- The exact CI product can differ; the required **ordering and blocking semantics** must remain identical.

## 1B) Required pipeline ordering (hard constraints)
The TLS guardrail scan MUST be placed in the pipeline as follows (conceptual single pipeline):

1. **install**
   - dependencies installed
2. **lint (optional but allowed)**
   - standard lint steps may run here
3. **TLS guardrail scan (MANDATORY, blocking)**
   - run static regex scan over UNSAFE zones with SAFE exceptions
   - MUST fail with non-zero exit status on any match
4. **build**
   - only runs if TLS guardrail scan passes
5. **deploy**
   - only runs if both lint (if used) and TLS guardrail scan pass

### Hard rule about ordering
- `TLS guardrail scan` MUST occur **before** `build` and **before** any deploy/release gating.

## 1C) PR pipeline stages
For pull requests:
- Trigger: PR open + PR synchronize (update)
- Jobs:
  1. `install`
  2. `lint` (optional)
  3. `tls-guardrail`
  4. `build` (optional if your CI builds PRs)

**Blocking semantics:**
- If `tls-guardrail` fails, the PR must be marked failing.
- Branch protection must require the `tls-guardrail` job (or the CI check that encapsulates it) as a required status.

## 1D) Deployment pipeline stages
For pushes to main/release branches:
- Run the same stages as PR at minimum through `tls-guardrail`.

**Hard rule:**
- Deployment must have a dependency on `tls-guardrail` success.

---

# 2. LOCAL DEVELOPMENT HOOKS

## 2A) pre-commit hook integration (primary local safety)
- Trigger point: `git commit` stage.
- Enforcement requirement:
  - MUST run the same forbidden-token scan logic and scope filtering as CI.
  - MUST hard-fail (non-zero exit) on violations.
- Purpose: early feedback; CI remains mandatory.

## 2B) optional pre-push hook
- Trigger point: `git push` stage.
- Enforcement requirement:
  - optional only.
  - if implemented, MUST hard-fail on violations.

## 2C) where the scan “lives” in local workflow (script location rule)
- The scan script location is not specified here, but the integration must satisfy:
  - the script must be callable by both local hook and CI job
  - the script must ingest the single-source forbidden pattern specification

(Implementation can choose path; the wiring contract is what matters.)

---

# 3. TLS SINGLE SOURCE OF TRUTH MODEL

## 3A) Authoritative sources
The three documentation files are the canonical references for enforcement meaning:
1. `TLS_GUARDRAIL_ARCHITECTURE.md` (what/where/why)
2. `TLS_GUARDRAIL_IMPLEMENTATION_TRANSLATION_GUIDE.md` (semantics and invalidity)
3. `TODO_TLS_GUARDRAIL.md` (completeness checklist)

## 3B) Required usage model
Implementations (developers/tooling) must treat these as:
- **runtime reference** for behavior (what is “must” behavior)
- **CI reference** for gate ordering and blocking rules
- **developer reference** for interpretation and correctness

## 3C) Drift prevention wiring rule
- Local hook and CI must use the same forbidden-token semantics:
  - case-insensitive
  - `insur*` as prefix/fragment substring match
  - SAFE exceptions by exact file path only
- If two implementations exist, drift becomes invalid under the completion checklist.

---

# 4. FAILURE FLOW IN REAL SYSTEM

## 4A) CI violation response (what exactly happens)
When TLS violation(s) are detected during the `tls-guardrail` job:
1. The TLS scan process exits with a **non-zero** status.
2. The `tls-guardrail` job is marked **FAILED**.
3. Any downstream jobs (`build`, `deploy`) must be prevented from running.
4. CI failure output must include TLS VIOLATION REPORTS for each match, with fields:
   - FILE_PATH
   - LINE_NUMBER
   - MATCHED_STRING
   - FULL_LINE_CONTEXT

## 4B) PR state
- The PR gets a failing required status check.
- Merge is blocked by branch protection requiring the `tls-guardrail` status.

## 4C) developer feedback loop
- Developer views CI logs.
- Each match report includes a line-level context allowing immediate removal from UNSAFE zones.
- After fix, PR is updated → CI reruns → merge allowed only when `tls-guardrail` passes.

---

# 5. DEPLOYMENT BLOCKING GUARANTEE

This section defines a guarantee that prevents bypass even under partial CI misconfiguration.

## 5A) Primary guarantee (normal operation)
- Deployment pipeline must depend on `tls-guardrail` success.
- `deploy` stage must be unreachable if `tls-guardrail` fails.

## 5B) Secondary guarantee (branch protection + required check)
- Configure repo branch protection so that merges cannot occur without successful completion of the TLS guardrail check.
- Even if build steps are green, the TLS check must be required.

## 5C) Tertiary guarantee (no-warning-only policy)
- The TLS job must have hard-fail semantics:
  - non-zero exit code
  - no continue-on-error
  - no warning-only mode

## 5D) Explicitly invalid bypass conditions
Any of the following is considered an invalid deployment setup:
- CI job marked optional/allowed to fail
- CI job allowed to pass with warnings
- deployment step does not declare dependency on TLS success
- TLS scan placed after build/deploy steps

---

# Compliance
This wiring plan is compliant only if it preserves the MUST ordering/semantics and enforces hard-fail blocking with the strict violation report format.

