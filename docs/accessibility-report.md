# Accessibility (A11y) Evaluation

FinLit Lab is built to be inclusive by default. We recognize that financial literacy information should not be restricted by motor mechanics or visual impairments.

### Core Implementation
- **Angular Material Directives**: Most UI controllers (`mat-slider`, `mat-button`, `mat-card`) inherit Angular Material's native ARIA compliance out of the box, drastically reducing tabindex fragmentation bugs.
- **Data Fallbacks**: Not everyone can easily parse complex charting visuals like the Compound Interest plot. We actively ship `<app-data-viz-fallback>` components alongside *every* chart. These elements silently degrade into highly legible, screen-reader-friendly text tables ensuring the exact mathematical concepts are accessible even if the DOM canvas isn't visibly rendered.
- **Color Contrast**: Maintained a strict structural hierarchy through custom SCSS palettes mapping to `var(--mat-sys-on-surface)` logic ensuring contrast constraints are met (WCAG AA). 

### Hackathon Sweep
During the final polish, specific logic bounds were reviewed mapping manual `aria-labels` to complex interactive layout spaces (like the AI Tutor's `scroll-container`), to guarantee full logical traversal for assistive toolchains.
