# Fusion Asiana — SEO Specification

## Purpose

This file is the SEO source of truth for the Fusion Asiana website.

Fusion Asiana is a professionally managed homestay in **Chowkidingee, Dibrugarh, Assam, India**.

The SEO strategy should target people searching for:
- homestays in Dibrugarh
- hotels/homestays near Chowkidingee
- rooms/stays in Dibrugarh
- accommodation in Dibrugarh
- places to stay in Dibrugarh
- stays for visitors travelling through Upper Assam

IMPORTANT:
Never invent facts, amenities, ratings, prices, distances, landmarks, awards, or business claims.

Use only verified information supplied by the business.

---

# 1. SEO PRINCIPLES

The website must be:

- Search-engine friendly
- Fast
- Mobile-first
- Accessible
- Semantically structured
- Locally optimized
- Helpful to real visitors
- Natural in language

Do NOT keyword-stuff.

Do NOT create unnatural paragraphs simply to rank.

SEO must never damage the premium visual design.

---

# 2. PRIMARY BUSINESS INFORMATION

Use this information consistently:

**Business Name:**
Fusion Asiana

**Business Type:**
Homestay

**Location:**
Chowkidingee, Dibrugarh, Assam, India

**City:**
Dibrugarh

**State:**
Assam

**Country:**
India

Do not add a street address until the exact public address is confirmed.

Do not invent a phone number or email address.

---

# 3. PRIMARY SEO TARGET

Primary topic:

**Homestay in Dibrugarh**

Secondary topics:

- homestay in Chowkidingee
- homestay in Dibrugarh Assam
- rooms in Dibrugarh
- stay in Dibrugarh
- accommodation in Dibrugarh
- places to stay in Dibrugarh
- comfortable stay in Dibrugarh
- homestay near Dibrugarh city
- rooms near Chowkidingee Dibrugarh

Only use a keyword when it naturally fits the page.

---

# 4. HOMEPAGE SEO

Recommended title:

**Fusion Asiana | Homestay in Dibrugarh, Assam**

Alternative if character length requires shortening:

**Fusion Asiana | Homestay in Dibrugarh**

Recommended meta description:

**Stay at Fusion Asiana, a professionally managed homestay in Chowkidingee, Dibrugarh, Assam. Explore comfortable rooms and plan your stay in the heart of the city.**

Do not claim amenities that have not been confirmed.

---

# 5. TITLE TAG RULES

Every page must have a unique `<title>`.

Target length:
approximately 50–60 characters where practical.

Place the primary topic naturally toward the beginning.

Examples:

Homepage:
`Fusion Asiana | Homestay in Dibrugarh, Assam`

Rooms:
`Rooms at Fusion Asiana | Homestay in Dibrugarh`

Nearby Places:
`Places to Visit Near Dibrugarh | Fusion Asiana`

FAQ:
`FAQs | Fusion Asiana Homestay, Dibrugarh`

About:
`About Fusion Asiana | Homestay in Dibrugarh`

Contact:
`Contact Fusion Asiana | Dibrugarh Homestay`

Do not duplicate titles.

---

# 6. META DESCRIPTION RULES

Every indexable page should have a unique meta description.

Target:
approximately 140–160 characters where practical.

Descriptions should explain what the visitor will find.

Do not:
- keyword stuff
- make false promises
- use clickbait
- claim guaranteed availability
- claim "best" or "number one"

---

# 7. URL STRUCTURE

Use clean lowercase URLs.

Recommended:

`/`
`/rooms`
`/nearby-places`
`/faq`
`/about`
`/contact`

Avoid:

`/page?id=123`
`/rooms-page-final-new`
`/home2`
`/abc123`

Use hyphens.

Keep URLs short and descriptive.

---

# 8. CANONICAL URLS

Every indexable page should contain a self-referencing canonical URL.

Example:

```html
<link rel="canonical" href="https://YOUR-DOMAIN.com/rooms">
```

Do not hardcode a fake domain.

Use the actual production domain once confirmed.

---

# 9. OPEN GRAPH

Add Open Graph metadata.

Required:

```html
<meta property="og:type" content="website">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:url" content="...">
<meta property="og:site_name" content="Fusion Asiana">
```

Use a high-quality Fusion Asiana image.

Recommended OG image:
- 1200 × 630
- real property/hero photography
- no excessive text
- readable when cropped

Do not use a ThrillHikers image.

---

# 10. TWITTER / X CARD

Add:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
```

Use the same high-quality branded image unless a better verified asset exists.

---

# 11. LOCAL SEO

The website should clearly communicate:

Fusion Asiana
Chowkidingee
Dibrugarh
Assam
India

Use location naturally in:
- homepage title
- homepage H1
- introduction copy
- rooms page
- contact page
- footer where appropriate
- image alt text when location is genuinely relevant

Do NOT repeat "Dibrugarh" unnaturally in every sentence.

---

# 12. H1 STRUCTURE

Each indexable page should have exactly one primary H1 where practical.

Homepage:

**A Comfortable Stay in the Heart of Dibrugarh**

The brand name can appear prominently in the hero without needing to be the H1 if the page structure benefits from a descriptive H1.

Rooms:

**Our Rooms**

Nearby Places:

**Discover Dibrugarh & Beyond**

FAQ:

**The Questions Everyone Asks Us**

About:

**About Fusion Asiana**

Contact:

**Get in Touch with Fusion Asiana**

---

# 13. HEADING HIERARCHY

Use:

H1
→ primary page topic

H2
→ major sections

H3
→ cards/subsections

Do not skip heading levels unnecessarily.

Do not use headings only for visual styling.

---

# 14. IMAGE SEO

Every meaningful image needs descriptive alt text.

Bad:

`room1.jpg`

Bad alt:

`image`

Better:

`Bright bedroom at Fusion Asiana homestay in Dibrugarh`

For decorative images:

```html
alt=""
```

Do not keyword-stuff alt text.

Do not describe things that cannot actually be seen.

---

# 15. IMAGE FILENAMES

Use descriptive filenames.

Prefer:

`fusion-asiana-room-dibrugarh.webp`

`fusion-asiana-bedroom-chowkidingee.webp`

`fusion-asiana-living-space.webp`

`fusion-asiana-dibrugarh-property.webp`

Avoid:

`IMG_2837.jpg`

`final-final2.png`

`image123.webp`

Use lowercase and hyphens.

---

# 16. IMAGE PERFORMANCE

Use:
- WebP or AVIF where supported
- responsive `srcset`
- appropriate dimensions
- lazy loading below the fold
- eager loading for the main hero when appropriate
- explicit width/height to reduce layout shift

Do not lazy-load the main LCP hero image if doing so harms loading performance.

---

# 17. STRUCTURED DATA

Implement JSON-LD structured data where accurate.

Potential schema:

### LodgingBusiness

Use `LodgingBusiness` or the most accurate supported subtype.

Include only verified information:

- name
- image
- URL
- address
- telephone
- price range if actually supplied
- aggregate rating only if the rating is genuine and publicly supported
- sameAs for official social profiles

Do not invent values.

Example structure:

```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Fusion Asiana",
  "url": "https://YOUR-DOMAIN.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dibrugarh",
    "addressRegion": "Assam",
    "addressCountry": "IN"
  }
}
```

Only add exact street address once confirmed.

---

# 18. RATING / REVIEW SCHEMA

The design information mentions an average rating of 4.9.

Do NOT automatically put `4.9` into structured data.

Only add `aggregateRating` if:
- the rating is genuine
- the source is legitimate
- the number of reviews is known
- the rating is eligible for the chosen schema
- the displayed website claim accurately represents the underlying source

Never manufacture review counts.

Never create fake reviews.

---

# 19. BREADCRUMBS

For multi-page navigation, use breadcrumb structured data where useful.

Example:

Home
→ Rooms

Home
→ Nearby Places

Home
→ FAQ

Keep breadcrumbs visually subtle.

---

# 20. INTERNAL LINKING

Create logical links between relevant sections/pages.

Examples:

Homepage → Rooms

Homepage → Nearby Places

Rooms → Book Your Room

Nearby Places → Book Your Room

FAQ → Contact / WhatsApp

Footer → all major pages

Use descriptive anchor text.

Prefer:

`Explore our rooms`

instead of:

`Click here`

---

# 21. ROOM PAGES

If individual room pages are created, each should have unique:

- title
- H1
- description
- image alt text
- URL
- meta description
- canonical URL

Example:

`/rooms/room-name`

Do not create thin pages with only a title and one image.

Only create separate room pages when there is enough genuine information to make each useful.

---

# 22. NEARBY PLACES SEO

The Nearby Places section should target useful local discovery searches without turning the page into a keyword list.

Use factual information for each place:

- name
- short description
- verified location
- approximate distance only when verified
- approximate travel time only when verified

Never invent distances or travel times.

Potential topics:

- places to visit in Dibrugarh
- things to do in Dibrugarh
- attractions near Chowkidingee
- Dibrugarh sightseeing

Only use specific attractions after verifying them.

---

# 23. FAQ SEO

The FAQ page/section should answer real guest questions.

Use concise, useful answers.

Potential topics:

- check-in
- check-out
- location
- rooms
- amenities
- parking
- kitchen
- guest capacity
- house rules
- booking

Do not publish unverified answers.

FAQ structured data should only be implemented if the content and eligibility requirements are satisfied.

---

# 24. LOCAL BUSINESS CONSISTENCY

Keep the business name and location spelling consistent:

**Fusion Asiana**

**Chowkidingee, Dibrugarh, Assam, India**

Do not alternate randomly between:
- Fusion Asia
- Fusion Asiana Homestay
- Fusion Asian
- Fusion Asiana Hotel

unless an official business name variation is confirmed.

---

# 25. ROBOTS.TXT

Create a valid `/robots.txt`.

Allow normal search engine crawling.

Do not block:
- CSS
- JavaScript
- important images

Example:

```txt
User-agent: *
Allow: /

Sitemap: https://YOUR-DOMAIN.com/sitemap.xml
```

Replace `YOUR-DOMAIN.com` with the real production domain.

---

# 26. XML SITEMAP

Create `/sitemap.xml`.

Include only canonical, indexable URLs.

Potential pages:

`/`
`/rooms`
`/nearby-places`
`/faq`
`/about`
`/contact`

Do not include:
- duplicate URLs
- query parameters
- admin pages
- test pages
- development routes
- redirects
- `noindex` pages

Update automatically if the framework supports dynamic sitemap generation.

---

# 27. INDEXING

Index:
- homepage
- rooms
- nearby places
- FAQ
- about
- contact

Do not index:
- admin pages
- internal dashboard
- development routes
- duplicate pages
- temporary test pages

Use `noindex` intentionally where appropriate.

---

# 28. PERFORMANCE / CORE WEB VITALS

SEO implementation must preserve the premium animations without sacrificing performance.

Prioritize:
- LCP
- CLS
- INP

Avoid:
- huge unoptimized images
- blocking scripts
- unnecessary animation libraries
- layout-changing animations
- excessive DOM nodes

Use transform/opacity for animations whenever possible.

---

# 29. ACCESSIBILITY + SEO

Implement:

- semantic HTML
- proper labels
- accessible navigation
- alt text
- keyboard support
- visible focus
- proper button elements
- descriptive link text
- accessible accordions
- sufficient color contrast

Accessibility improvements should also improve crawlability and usability.

---

# 30. SOCIAL SHARING

Every major public page should have correct:

- Open Graph title
- Open Graph description
- Open Graph image
- Open Graph URL
- Twitter/X card

Use consistent Fusion Asiana branding.

---

# 31. CONTACT / CONVERSION SEO

The website should make it easy for visitors to:

- view rooms
- ask questions
- contact Fusion Asiana
- use WhatsApp
- book a room

Important CTA text:

`BOOK A ROOM`

`WHATSAPP US`

`VIEW OUR ROOMS`

Do not use misleading urgency.

---

# 32. CONTENT QUALITY

Write for guests first.

Good:

“Stay in Chowkidingee, Dibrugarh, with comfortable rooms and a professionally managed homestay experience.”

Bad:

“Best cheap affordable top homestay in Dibrugarh Assam Chowkidingee rooms.”

Natural language wins.

---

# 33. SEARCH INTENT

Prioritize these intents:

### Transactional
Visitor wants to book accommodation.

### Commercial
Visitor is comparing places to stay in Dibrugarh.

### Local
Visitor wants accommodation near Chowkidingee / Dibrugarh.

### Informational
Visitor wants to know what to visit around Dibrugarh.

The website should support all four without creating unnecessary pages.

---

# 34. DO NOT MAKE SEO CLAIMS

Never write:

- Best homestay in Dibrugarh
- #1 homestay
- Cheapest homestay
- Most luxurious
- Award-winning
- Top-rated

unless there is a verifiable basis and the wording is genuinely supported.

Prefer factual wording.

---

# 35. TECHNICAL SEO CHECKLIST

Before deployment verify:

- [ ] Unique title on every page
- [ ] Unique meta description
- [ ] One clear H1
- [ ] Correct heading hierarchy
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] Twitter/X tags
- [ ] Sitemap
- [ ] Robots.txt
- [ ] JSON-LD
- [ ] Correct image alt text
- [ ] Descriptive filenames
- [ ] Mobile responsive
- [ ] No horizontal overflow
- [ ] Fast hero loading
- [ ] Lazy-loaded below-fold images
- [ ] No broken internal links
- [ ] No placeholder production URLs
- [ ] No fake reviews
- [ ] No invented business information
- [ ] HTTPS in production
- [ ] Proper 404 page

---

# 36. FINAL SEO PRINCIPLE

The website should rank because it is genuinely useful for people looking for a comfortable stay in Dibrugarh.

SEO should support the design, not overpower it.

The final result should communicate clearly:

**Fusion Asiana — a professionally managed homestay in Chowkidingee, Dibrugarh, Assam.**

Use real information, real images, real reviews, and real business details.

Never fabricate content for SEO.
