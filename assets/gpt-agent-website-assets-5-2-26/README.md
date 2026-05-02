# Michele Ghezzi website asset package

**Purpose:** add this folder to the website project as a source-backed content pack for a minimal professional website for **Dott. Agr. Michele Ghezzi**.

**Research date:** 2026-05-02  
**Standard used:** public, website-relevant information only. No private databases, no scraped personal contact data, and no reused copyrighted images.

## How to use this package

1. Start with `content/website_copy_it.md`. This contains ready-to-adapt Italian website copy.
2. Use `data/claim_register.csv` as the factual control layer. Every claim is marked as:
   - `publishable_with_source`
   - `confirm_before_publishing`
   - `archive_only_after_confirmation`
3. Use `data/asset_register.csv` before adding any images, logos, PDFs, or external cards.
4. Use `implementation/website_integration_plan.md` to add the content to the site.
5. Before publishing, send Michele `implementation/confirmation_questions_for_michele.md`.

## Important editorial rules

- **Do not publish phone, email, address, Partita IVA, or registration details unless Michele gives the exact wording.**
- **Do not scrape or reuse images from ItalianBerry, Macfrut, Cosmogarden, CLT, Facebook, LinkedIn, or book retailers.**
- **Prefer external links to public articles, programs, and presentations.**
- **Use only first-party photos supplied by Michele or images with explicit license/permission.**
- **Treat Agriterra collaboration as unverified.** No reliable public source was found in the web checks in this package.
- **Treat older Filnova references as archive-only.** Do not represent Filnova as a current affiliation unless Michele confirms it.

## Suggested website sections

1. Hero
2. Chi sono
3. Servizi
4. Pubblicazioni
5. Interventi e formazione
6. Sperimentazioni e collaborazioni
7. Contatti

## Package structure

```text
michele-ghezzi-website-assets/
  README.md
  content/
    website_copy_it.md
    website_copy_en_optional.md
    publication_card_it.md
    events_section_it.md
    services_section_it.md
    do_not_publish_without_confirmation.md
  data/
    sources.csv
    claim_register.csv
    asset_register.csv
    publications.csv
    public_appearances.csv
    affiliations_collaborations.csv
  site-data/
    profile.json
  implementation/
    website_integration_plan.md
    agent_prompt_for_integration.md
    confirmation_questions_for_michele.md
    image_and_rights_policy.md
  research/
    search_log.md
    negative_findings.md
    source_notes.md
```

## Fast integration recommendation

For a first clean version, implement these five cards:

1. **Book card** linking to the Libreria Universitaria page.
2. **Macfrut 2026 card** linking to the official Macfrut Berry Area page.
3. **Macfrut 2025 presentation card** linking to the external PDF.
4. **Cosmogarden 2024 event card** linking to the official Cosmogarden event page.
5. **CLT / Fojanini experimentation card** linking to the CLT article, after Michele confirms the preferred relationship wording.

## Quality-control note

This package intentionally separates strong public evidence from confirmation-needed material. The strongest public sources are Cosmogarden, Macfrut, ItalianBerry, Libreria Universitaria, Fondazione Fojanini, and Centro Lombricoltura Toscano.
