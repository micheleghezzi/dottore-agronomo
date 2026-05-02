# Prompt for an IDE agent integrating this package into a website

You are an implementation agent working on a static professional website for Dott. Agr. Michele Ghezzi.

## Inputs

Use this folder as the source of truth:
- `README.md`
- `content/website_copy_it.md`
- `content/services_section_it.md`
- `content/events_section_it.md`
- `data/claim_register.csv`
- `data/sources.csv`
- `data/asset_register.csv`
- `site-data/profile.json`

## Constraints

- Do not invent biographical details.
- Do not publish contact information unless explicitly provided in the website project by the human owner.
- Do not download or reuse images from external websites.
- Do not represent Agriterra as a verified collaboration.
- Do not represent Filnova as a current affiliation.
- Use external links for public pages and PDFs.
- Keep the design simple, professional, clean, and readable.
- Default website language: Italian.

## Task

1. Add or update the website content using `site-data/profile.json` and `content/website_copy_it.md`.
2. Build these sections:
   - Hero
   - Chi sono
   - Servizi
   - Pubblicazioni
   - Interventi e formazione
   - Optional: Sperimentazioni e collaborazioni
   - Contatti
3. Use the source URLs from `data/sources.csv` as external links.
4. Add comments in code where the human must provide first-party assets, especially headshot, field images, and contact details.
5. Before finishing, produce a checklist of any items that still need confirmation from Michele.
