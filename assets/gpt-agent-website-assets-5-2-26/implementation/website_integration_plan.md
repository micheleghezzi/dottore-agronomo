# Website integration plan

## Goal

Create a minimal, credible professional website for Dott. Agr. Michele Ghezzi using only sourced claims and permission-safe assets.

## Recommended page structure

### 1. Hero

Use the headline:

> Consulenza agronomica per piccoli frutti, colture biologiche e sistemi sostenibili

Use a short paragraph from `content/website_copy_it.md`.

Visual: Michele-provided headshot or farm/berry image. If no image is available, use a clean text-first hero with a botanical line illustration or neutral background.

### 2. Chi sono

Use 2 short paragraphs. Avoid overloading the homepage with all crop categories. Link to a fuller services section.

### 3. Servizi

Use 5 cards:

1. Piccoli frutti
2. Fertilizzazione sostenibile
3. Fuori suolo e vaso
4. Suolo, acqua e valutazione del sito
5. Formazione tecnica

Pull copy from `content/services_section_it.md`.

### 4. Pubblicazioni

Create a book card.

Recommended fields:
- Title
- Subtitle
- Authors
- Publisher
- ISBN/EAN
- short description
- external link

Do not show book cover unless Michele provides permission.

### 5. Interventi e formazione

Show recent items first:
- Macfrut / Berry Area 2026
- Macfrut / Berry Area 2025
- Cosmogarden 2024
- Fondazione Fojanini course
- Cosmogarden 2022

Use links from `data/sources.csv`.

### 6. Sperimentazioni e collaborazioni

Optional. Add CLT/Fojanini item only after Michele confirms wording.

### 7. Contatti

Use only contact information Michele explicitly provides.

## Suggested file integration for a static site

```text
src/
  data/
    micheleProfile.json    # copy from site-data/profile.json
  content/
    website_copy_it.md
  components/
    Hero.tsx
    Services.tsx
    Publications.tsx
    Events.tsx
    Contact.tsx
```

## External links to include

Use external links rather than hosting third-party files:
- Libreria Universitaria book listing
- ItalianBerry book article
- ItalianBerry/Macfrut 2025 article
- Macfrut 2025 official program
- Macfrut 2026 official program
- Macfrut/Berry Area 2025 presentation PDF
- Cosmogarden 2024 event page
- Fondazione Fojanini course PDF
- CLT/Fojanini experimentation page

## SEO suggestions

Page title:
> Dott. Agr. Michele Ghezzi | Consulenza agronomica piccoli frutti

Meta description:
> Consulenza agronomica per piccoli frutti, coltivazioni biologiche, fertilizzazione sostenibile, microrganismi utili e sistemi fuori suolo in Lombardia.

H1:
> Consulenza agronomica per piccoli frutti e sistemi sostenibili

H2s:
- Chi sono
- Servizi
- Pubblicazioni
- Interventi e formazione
- Sperimentazioni e collaborazioni
- Contatti

## Verification workflow before publishing

1. Run through `data/claim_register.csv`.
2. Remove or reword anything marked `confirm_before_publishing`.
3. Ask Michele the questions in `confirmation_questions_for_michele.md`.
4. Replace all placeholder images with Michele-supplied images.
5. Check every external link.
6. Confirm the site does not contain scraped contact details or copyrighted images.
