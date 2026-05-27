# TLS Guardrail Implementation Translation Guide (SUNNYSIDEUP)

This guide translates the enforcement contract into **unambiguous interpretation rules** for engineers implementing it.

## 1. ENFORCEMENT SEMANTICS INTERPRETATION RULES

### 1.1 Meaning of MUST / SHOULD / OPTIONAL
- **MUST**: required for the system to be considered implemented correctly.
  - Any MUST item left out or weakened is an **invalid implementation**.
- **SHOULD**: strongly recommended, but not strictly required.
- **OPTIONAL**: may be implemented, but must not be relied upon to satisfy any MUST requirement.

### 1.2 “Unsafe zones” interpretation
- **Unsafe zones are path-defined**, not semantic-defined.
- **Unsafe zones include**:
  - everything under `src/components/**`
  - everything under `src/pages/**`
- The only exception to this unsafe zone coverage is the explicit SAFE exception list (Section 1.3).

### 1.3 “SAFE exception list” interpretation
- SAFE is an **explicit exception list only**.
- SAFE includes exactly:
  - `src/pages/PrivacyPolicy.tsx`
  - `src/pages/TermsOfService.tsx`
- Implementations must:
  - skip scanning ONLY these exact file paths
  - scan every other `src/pages/**` file
- Adding “similar” files to SAFE without explicit review is prohibited.

### 1.4 Forbidden token match interpretation (“insur*”)
- Token matching is **case-insensitive**.
- Forbidden tokens are matched as follows:
  - `insured`: match any occurrence of the substring `insured` in any casing.
  - `insurance`: match any occurrence of the substring `insurance` in any casing.
  - `insur*`: match any occurrence of a substring that begins with `insur` (prefix/fragment substring match).
    - It must match within longer words and within embedded strings.
    - It must NOT be implemented as a word-boundary match.
- **No weakened matching**:
  - “word boundary only” is invalid.
  - “exact word only” is invalid.
  - “startsWith whole-token only” is invalid.

### 1.5 Output and reporting interpretation
- Reporting must be **actionable and deterministic**.
- Each match must report using the required TLS VIOLATION REPORT FORMAT fields:
  - FILE_PATH
  - LINE_NUMBER
  - MATCHED_STRING
  - FULL_LINE_CONTEXT

### 1.6 Enforcement mode interpretation
- “Fail build” / “block merge” means:
  - exit status must be **non-zero** on any match
  - the pipeline must not proceed to deploy/pre-deploy stages
  - no warning-only mode is permitted

## 2. IMPLEMENTATION COMPLETION CHECKLIST

The TLS system is considered **fully implemented** only if all MUST items pass.

### 2.1 Local enforcement completeness (MUST)
- [ ] There exists a local developer enforcement mechanism that runs **at least** at `git commit` stage.
- [ ] On detection, it hard fails (non-zero exit) and blocks the commit.

### 2.2 CI enforcement completeness (MUST)
- [ ] CI includes a dedicated TLS guardrail validation job/stage.
- [ ] The job runs after required repo setup (checkout) and before build/deploy.
- [ ] On detection, the CI job exits non-zero.
- [ ] The pipeline halts such that deployment/pre-deploy cannot be reached.

### 2.3 Detection scope completeness (MUST)
- [ ] The scanner enumerates files within:
  - `src/components/**/*.(ts|tsx|js|jsx)`
  - `src/pages/**/*.(ts|tsx|js|jsx)`
- [ ] The SAFE exception list is applied exactly to:
  - `src/pages/PrivacyPolicy.tsx`
  - `src/pages/TermsOfService.tsx`
- [ ] No other SAFE exclusions exist unless explicitly updated via the change control rules (Section 4).

### 2.4 Forbidden token completeness (MUST)
- [ ] The scanner detects tokens case-insensitively.
- [ ] The scanner implements `insur*` as prefix/fragment substring matching.
- [ ] The scanner produces match metadata sufficient to fill:
  - FILE_PATH, LINE_NUMBER, MATCHED_STRING, FULL_LINE_CONTEXT

### 2.5 Reporting contract completeness (MUST)
- [ ] Enforcement output conforms exactly to the TLS VIOLATION REPORT FORMAT field list.
- [ ] Reports include exact file path and exact line content.

### 2.6 “Merge blocking” confirmation (MUST)
- [ ] There is a verifiable guarantee that any violation causes merge/build to fail (CI non-zero).

## 3. INVALID IMPLEMENTATION DEFINITIONS

Any implementation exhibiting any of the following is **INVALID**.

### 3.1 Partial implementation is INVALID
- Local enforcement missing entirely (if CI exists) is still **invalid** if the checklist requires local MUST items.
- CI enforcement missing entirely is **invalid**.

### 3.2 Logging-only is INVALID
- If the scanner prints matches but returns zero exit status, it is INVALID.
- If the pipeline continues to deploy after detection, it is INVALID.

### 3.3 Warning-only mode is INVALID
- “Treat as warning” / “continue-on-error” is INVALID.

### 3.4 Scope downgrade is INVALID
- If scanner scope excludes additional directories beyond the SAFE exceptions without explicit change control, it is INVALID.
- If SAFE exclusions are generalized (e.g., skipping all legal pages) it is INVALID.

### 3.5 Regex downgrade is INVALID
- Implementing `insur*` using word boundaries or whole-word matching is INVALID.
- Implementing it as `insur` as a full token only is INVALID.
- Making the match case-sensitive is INVALID.

### 3.6 Reporting contract mismatch is INVALID
- If output omits any required field (FILE_PATH, LINE_NUMBER, MATCHED_STRING, FULL_LINE_CONTEXT), it is INVALID.

### 3.7 Bypass conditions are INVALID
- Any mechanism that allows skipping TLS validation in CI without an explicit, documented override policy is INVALID.
  - (In particular: “CI job marked optional” or “continue-on-error” is INVALID.)

## 4. CHANGE CONTROL & VERSIONING RULES

### 4.1 Forbidden tokens change control
- Any change to the forbidden token set (including regex adjustments) requires:
  - explicit review
  - an explicit update to the forbidden pattern specification
  - preservation of blocking semantics

### 4.2 SAFE list change control
- Any change to SAFE exception file paths requires explicit review.
- SAFE must not grow implicitly.

### 4.3 CI behavior preservation rule
- CI changes must preserve:
  - non-zero exit on any match
  - pipeline halting before deployment
  - reporting field contract

### 4.4 Non-regression rule for insur*
- The `insur*` semantics MUST remain prefix/fragment substring matching.
- Any change that introduces word-boundary restriction is considered a downgrade and is prohibited.

## 5. HUMAN ERROR PREVENTION LAYER

### 5.1 Prevent accidental local bypass
- Developers must understand that local enforcement is a gate at commit time.
- Implementation must be configured so it runs automatically at commit stage.

### 5.2 Prevent CI skipping due to configuration errors
- CI integration MUST be non-optional.
- Implementations must avoid patterns where the job can be skipped unintentionally:
  - no “optional job” settings
  - no “continue-on-error” behaviors

### 5.3 Prevent silent regex weakening
- Implementations must use a match strategy that cannot be silently weakened without noticeable diff:
  - require tests or validation checks against known forbidden strings
  - require that `insur*` still catches embedded fragments (e.g., “insurancE”)

### 5.4 Drift prevention
- Local and CI detection logic must be based on the same forbidden pattern specification.
- If the system is implemented with two separate definitions, they must be kept in sync via shared configuration principles.

---

End of translation guide.

