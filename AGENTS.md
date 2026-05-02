# AGENTS.md — instructions for AI agents

This repository contains the static website for Dottore Agronomo Michele Ghezzi.

## Working language

- Communicate with the user in English.
- Write website copy in Italian unless the user explicitly asks for another language.
- Keep the tone of website copy professional, concrete, agricultural, and not overly promotional.

## Project context

The site represents Michele Ghezzi and his agronomic consulting work, but the repository is being managed by another person on his behalf. Do not assume Michele is the one operating the repository, writing commits, or handling GitHub.

## Goals

Keep the site simple, clear, and professional, with these priorities:

1. present Michele Ghezzi as an agronomic consultant;
2. explain the services offered;
3. highlight specialization in biological and natural technical products;
4. generate consulting requests from farms and agricultural producers;
5. support, without exaggerated marketing claims, consulting or sales guidance related to biological products.

## Content rules

- Do not invent certifications, partnerships, customer counts, brands, or production results.
- Do not publish email addresses, phone numbers, street addresses, or personal data unless they have been confirmed.
- When referring to products, prefer "mezzi tecnici biologici", "principi attivi biologici", or "prodotti biologici e naturali" unless the user gives more specific wording.
- Keep it clear that consulting helps choose protocols and products, while the producer remains free to purchase wherever they prefer, unless the user explicitly asks for a direct sales site.
- Before adding factual professional claims, make sure they are verifiable.

## Visual style

- Keep the site static: HTML, CSS, and minimal JavaScript.
- Do not add frameworks or a build system.
- Colors: agricultural green, natural tones, light background.
- Layout: clean and readable on smartphones.
- Primary CTA: request a consultation.

## Technical structure

- `index.html` contains the whole page.
- `styles.css` contains all styling.
- `assets/` contains images, icons, and logos.
- GitHub Pages should publish from the root of the `main` branch.

## Git and publishing

- Prefer repository-local Git configuration when setting author identity or SSH behavior, so this repo can coexist with other GitHub accounts on the same machine.
- When possible, use a dedicated SSH key or repository-specific authentication rather than changing global Git credentials.
- Preserve a simple GitHub Pages setup that works directly from the repository root on `main`.

## Checklist before each change

1. Does the site work without build tools?
2. Is the page readable on mobile?
3. Are contacts correct or still placeholders?
4. Are professional claims verifiable?
5. Does the text help an agricultural producer understand what they can ask Michele?
