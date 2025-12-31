# Project Setup & Fixes Documentation

## 1. Radix / shadcn UI Setup

- **Issue:** Confusion between installed Radix UI packages and `npx shadcn add` commands.
- **Cause:** Radix packages were already in `package.json`, `shadcn` generates additional components (not just Radix).
- **Solution:** Keep Radix dependencies as-is, run `npx shadcn add` only for new UI components you need.

## 2. React Version / npm Install Conflicts

- **Issue:** `npm install` failed with peer dependency errors (React 19 vs Next-Themes expecting <=18).
- **Cause:** React version in package.json was too high for some dependencies.
- **Solution:** Downgrade React/ReactDOM to compatible versions (e.g., `^18.3`) and reinstall.

## 3. PostCSS / Tailwind Import Order

- **Issue:** Error: `@import must precede all other statements`.
- **Cause:** Tailwind directives were not first in CSS.
- **Solution:** Move `@tailwind base; @tailwind components; @tailwind utilities;` **before any @import** in your CSS.

## 4. React Icons JSX Warning

- **Issue:** `type is invalid -- expected a string or component but got: <FaPython />`.
- **Cause:** JSX elements were stored in `PROJECTS` array instead of icon components.
- **Solution:** Store icon **references** (e.g., `FaPython`) in array, render `<Icon />` in `ProjectCard`.

## 5. Experience Section Tech Stack

- **Issue:** Tech stack icons were not displayed.
- **Cause:** `techStack` was a string array but no icons were mapped.
- **Solution:** Create `iconMap` linking tech names to React Icons and render dynamically under each experience.

## 6. Logo in Header

- **Issue:** Wanted a profile image next to name.
- **Cause:** Original `<a>` contained only text.
- **Solution:** Wrap name and `<img>` in `flex items-center gap-3`, add `rounded-full object-cover` for circular avatar.

## 7. Favicon / Site Icon

- **Issue:** Browser tab didn’t show your photo.
- **Cause:** Missing `<link rel="icon">` tag.
- **Solution:** Add the following in `<head>`:

```html
<link rel="icon" type="image/png" href="/Images/adeshinaDP.jpg" />
```
