# SAI GEVO Design Notes

These notes document the current design choices across the SAI folder and the better-solution check used for the redesign.

## North Star

- Goal: create a project website in the spirit of GEVO and a classroom/tool library that is familiar to users of Google Classroom.
- GEVO reference: the public GEVO site uses a school-first navigation model, large editorial headings, programme/mission/vision sections, and language around context, community, technology, and modern education.
- Classroom reference: the library keeps the familiar workflow shape: subject list, subject cards, stream, classwork, people, and teacher management.
- Constraint: every link remains relative so the whole `SAI` folder can move between computers without changing paths.

## Global Choices

- Static HTML/CSS/JS only.
  - Why: it matches the current folder rules and keeps prototypes portable.
  - Better option later: a small hosted app with real accounts, but only after the local prototype settles.
- Shared theme key `sai-theme`.
  - Why: light/dark mode follows the user through the portal, library, map, and tools.
  - Better option later: server-side preference after real login exists.
- GEVO-like palette: green, deep blue, gold, white/off-white, and restrained dark mode.
  - Why: it feels closer to school identity than generic Google blue.
  - Better option later: replace these approximations with official GEVO brand tokens if available.
- 8px radii and thin borders.
  - Why: practical school software should be calm and readable, not decorative.
  - Better option checked: larger rounded cards looked more like consumer apps, so they were avoided.

## Landing Page

- H1 is `SAI GEVO`.
  - Why: a project page should show identity first and explain purpose in supporting copy.
  - Better option checked: `Jednotná stránka pro prototypy SAI` was more descriptive but weaker as a project landing headline.
- Sticky desktop header.
  - Why: navigation to project, library, and about should remain reachable on longer pages.
  - Better option later: add a compact mobile drawer only if navigation grows.
- Right-side portal sketch.
  - Why: it gives the landing page a visual product signal without depending on external images.
  - Better option later: replace it with real screenshots once the library and map are stable.
- Tool cards with top accent borders.
  - Why: they scan quickly and avoid marketing-card clutter.
  - Better option checked: full-color cards were visually heavier and less consistent with GEVO-style white sections.

## About Page

- Location: `Landing page/Jednotna stranka/o-projektu.html`.
  - Why: the about page belongs to the main SAI site, not inside the tool library.
  - Better option later: turn it into a full project documentation page when deployment, permissions, and ownership are defined.
- Four outline panels: purpose, roles, technical direction, next steps.
  - Why: this is enough structure for a prototype without pretending the backend already exists.
  - Better option later: add timeline, stakeholders, and deployment plan after the prototype is reviewed.

## Library

- Classroom-like layout: left subject list, central cards, top tabs inside each subject.
  - Why: teachers and students already understand the workflow from classroom tools.
  - Better option checked: a marketing-style tool gallery was less useful for daily school work.
- General tools are pinned; other subjects sort alphabetically.
  - Why: shared tools should be predictable, while subjects remain easy to find.
  - Better option later: use account-based sorting by enrolled classrooms.
- Subject cards show subject, teacher placeholder, task summary, and tool count.
  - Why: this mirrors the information students need first.
  - Better option later: replace placeholder task summaries with real unseen updates and due dates.
- Teacher management is in its own tab with collapsible classes and students.
  - Why: it keeps student assignment controls out of the normal student-facing subject view.
  - Better option later: add group-based assignment once real class groups exist.
- Stream, classwork, people, and more tabs.
  - Why: this is the familiar classroom structure without copying Google’s visuals or code.
  - Better option later: add materials, assignments, submissions, and role-aware permissions.

## History Timeline Tool

- Single contained HTML file.
  - Why: tools under `Nastroje do hodin` must deploy as one file.
  - Better option later: split into modules only if deployment rules change.
- Editable fields are the timeline itself, with pencil hints.
  - Why: students work directly in context instead of managing a separate form.
  - Better option checked: an add-new-point form was removed because it separated editing from the timeline.
- Plus buttons between events and minus buttons per event.
  - Why: students can insert missing context and remove mistakes where they happen.
  - Better option later: drag-to-reorder could help advanced editing but is not needed for the prototype.
- Undo and redo.
  - Why: editable classroom tools need low-risk experimentation.
  - Better option later: persistent draft save per user.
- Export preview is fixed to four lines.
  - Why: it reduces rendering work and keeps the page visually stable.
  - Better option later: add a modal/full export view for long notes.

## School Map

- CSS/HTML schematic instead of a heavy 3D engine.
  - Why: the current work is a sketch of navigation and room search, not a final walkthrough.
  - Better option later: move to Three.js or exported school geometry after room data is real.
- Separate index, CSS, and JS.
  - Why: the map is a larger website-like prototype and is allowed to use split files.
  - Better option later: add graphics assets or real floor plans once available.
- Floor selector, room search, room list, highlighted map room.
  - Why: these are the core navigation interactions to validate first.
  - Better option later: add routing, NFC/deep links, and timetable integration.

## Links And Portability

- All internal links are relative.
  - Why: the folder should work in `Documents/SAI`, `Downloads/SAI`, `Desktop/SAI`, or after unzipping elsewhere.
  - Better option later: generate links from a manifest if the project becomes large enough.
- Landing page is the main entry point.
  - Why: it prevents tool pages from becoming isolated prototypes.
  - Better option later: add a root `index.html` redirect if the SAI folder is hosted directly.
