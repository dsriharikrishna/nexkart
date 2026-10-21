# Website & UI/UX Design System Rules

For every website, web application, component, and user experience built in this project:

1. **UI/UX Pro Max Reference Integration**:
   - Reference and follow the design guidelines, style catalogs, color systems, and font pairings in [.agents/skills/ui-ux-pro-max/SKILL.md](file:///.agents/skills/ui-ux-pro-max/SKILL.md).
   - Leverage the companion skills installed in `.agents/skills/`:
     - `ui-ux-pro-max` (comprehensive UI intelligence, 79 UI styles, 192 palettes, 74 font pairings, 119 UX guidelines)
     - `design-system` (tokens, component systems, atomic consistency)
     - `ui-styling` (CSS architecture, modern animation, responsive layout)
     - `brand` (identity, tone, and brand cohesion)
     - `banner-design` (hero sections, banners, visual graphics)

2. **Design Intelligence Query Workflow**:
   - When initiating a new website page or theme, run the UI/UX Pro Max query script to fetch tailored recommendations:
     `python .agents/skills/ui-ux-pro-max/scripts/search.py "<product-type-or-topic>"`
   - Use the returned primary/secondary styles, color palettes, and UX patterns to construct design tokens and interface structures.

3. **Visual Quality Standards**:
   - Deliver production-grade visual polish with intentional contrast, clean typography scales, and fluid responsive interactions.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
