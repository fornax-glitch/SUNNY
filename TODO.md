# TODO

## FINAL CLIENT READABILITY + HUMANIZATION PASS (content-only)

*(Approved by user for implementation in the next step.)*


### Step 1: Gather and review files
- [x] Locate and inspect homepage + proof components for over-optimized language.
- [x] Identify dense phrases: “problem state”, “restored outcome”, “repeatable execution”, “structured workflow”, “operational proof”, “commercial-ready communication”, “evidence layer”, “recurring maintenance clients”, and “Trusted by” copy.

### Step 2: Approve edit plan
- [x] Get plan approval before any code edits.


### Step 3: Implement content-only changes
- [ ] Edit `src/pages/HomePage.tsx` copy in these areas:
  - Hero trust indicator labels and subtext.

  - Commercial Cleaning featured section paragraph + bullet chips.
  - Proof slider section heading/subtext and Before/After labels.
  - Trusted-by section headline, supporting lines, and confidentiality note.

- [ ] Edit `src/components/ProofShowcase.tsx` copy in these areas:
  - Before/After heading + intro paragraph.
  - Stat card labels.
  - Before/After labels passed to `BeforeAfterSlider`.

- [ ] Edit `src/components/ProofShowcaseExpanded.tsx` copy in these areas:
  - Section tag and heading.
  - Main paragraph.
  - Category descriptions.
  - “Repeatable execution—built for reliability” row.

### Step 4: Validate
- [ ] Run `npm test` or `npm run build` (whichever exists) to confirm no build errors.

### Step 5: Reporting (final output)
- [ ] Provide:
  - List of simplified/humanized copy areas
  - Any sections still dense
  - Confirmation: no routing/layout/structure changes
  - Build validation result

