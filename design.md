# Fusion Asiana — Design System & Website Direction

## Purpose

This is the single source of truth for the Fusion Asiana website's visual design, layout language, interaction patterns, animation direction, responsive behavior, and content structure.

The provided ThrillHikers screenshots are **visual/interaction references only**. Do not copy their logo, text, imagery, destinations, reviews, prices, or business content. Recreate the design language for Fusion Asiana with original content and assets.

---

## 1. Brand Direction

**Brand:** Fusion Asiana

**Business:** Premium, professionally managed homestay in Chowkidingee, Dibrugarh, Assam.

### Desired feeling
- Premium
- Warm
- Modern
- Comfortable
- Clean
- Editorial
- Hospitality-focused
- Professional
- Local without looking rustic

### Avoid
- Generic hotel-template design
- Generic Himalayan/travel-agency imagery
- Excessive gradients
- Neon colors
- Over-animation
- AI-looking imagery
- Cluttered UI
- Unsupported claims

---

## 2. Reference Design Language

Follow the visual language visible in the supplied reference screenshots:

- Floating rounded navigation
- Warm cream background
- Deep navy primary UI
- Warm orange accent
- Large bold geometric typography
- Tiny uppercase eyebrow labels
- Large rounded cards
- Editorial spacing
- Subtle dotted texture
- Thin decorative dashed curves
- Horizontal carousels
- Floating / tilted photograph cards
- Scroll-linked movement
- Large full-width CTA sections
- Strong section transitions
- Clean mobile compositions

**Recreate the experience, not the content.**

---

## 3. Typography

### Primary font

Use **Poppins** consistently.

Weights:
- 400 — body
- 500 — secondary text
- 600 — navigation, labels, buttons
- 700 — card titles and section headings
- 800 — major headings and hero typography

Large headings:
- Bold
- Compact
- Slightly tight letter spacing
- Natural 2–3 line wrapping

Eyebrow labels:
- Uppercase
- 600–700 weight
- 10–12px desktop
- 10–11px mobile
- Letter spacing around 0.18em–0.25em

Body:
- 15–17px desktop
- 14–16px mobile
- line-height 1.5–1.7
- warm muted gray

---

## 4. Color System

Use a restrained palette.

### Cream
`#F5EEDF`

Alternative:
`#F3ECDE`

### Deep Navy
`#173F7A`

Alternative:
`#16458A`

### Navy Text
`#123F7F`

### Dark Text
`#24231F`

### Orange
`#C9571D`

Alternative:
`#CF5B20`

### Muted Text
`#8A857A`

### White
`#FFFFFF`

Keep the palette consistent throughout the website.

---

## 5. Global Background

Use the warm cream background throughout the main content.

Add a **very subtle dotted texture**:
- tiny dots
- low contrast
- large spacing
- never distracting

Use subtle decorative dashed curved lines sparingly.

---

# 6. Navigation

Create the same floating rounded navigation concept shown in the reference.

### Desktop
- centered horizontally
- floating near the top
- large pill/capsule
- deep navy background
- glassmorphism-inspired highlight
- subtle border
- soft shadow
- generous horizontal padding
- `border-radius: 9999px`
- sticky/fixed behavior

### Structure

Left:
- Fusion Asiana logo

Center:
- Home
- Rooms
- Nearby Places
- FAQ
- About

Right:
- Search icon if needed
- `BOOK A ROOM`

The booking CTA is a white/light pill nested inside the navy navigation with a small circular navy arrow.

### Mobile
- same floating rounded navy capsule
- logo left
- search/menu right
- desktop links hidden
- clean animated mobile menu
- never use a generic rectangular navbar

---

# 7. Hero

Create a full-screen cinematic hero for Fusion Asiana.

The hero must communicate:
- Assam
- Dibrugarh
- homestay
- comfort
- premium hospitality

Use the approved Fusion Asiana hero imagery.

Avoid generic Himalayan imagery.

### Main hero title

**FUSION ASIANA**

Location/message may reference:

**Chowkidingee, Dibrugarh, Assam**

Typography may use an outlined/faded treatment inspired by the reference.

Do not overcrowd the hero.

---

# 8. Hero → Rooms Transition

This is critical.

The next cream section must physically **rise over the hero** during scroll.

Behavior:
- hero stays behind
- cream section starts below
- cream section moves upward with scroll
- large rounded top-left/top-right corners
- hero progressively gets covered
- subtle depth/shadow
- smooth scroll-linked animation

Do NOT simply fade the hero into the next section.

On mobile use the same concept with shorter movement and lighter parallax.

---

# 9. Section 2 — Our Rooms

### Eyebrow
`OUR ROOMS`

### Heading
**A Comfortable Stay in the Heart of Dibrugarh**

Use this wording as the preferred heading.

### Layout
- spacious cream section
- heading left
- CTA right
- horizontal room carousel

### CTA
`VIEW ALL ROOMS →`

### Room cards
- 270–300px desktop width
- tall image
- about 350px height
- 20–24px radius
- real room photography
- dark bottom gradient
- white typography
- small information pill
- circular arrow
- subtle hover transform

Possible names only if they match the actual property:
- ROOM ONE
- ROOM TWO
- DELUXE ROOM
- FAMILY ROOM

Do not invent specifications.

---

# 10. Section 3 — Nearby Places

### Eyebrow
`NEARBY PLACES`

### Heading
**Discover Dibrugarh & Beyond**

Purpose: show guests places they can visit while staying at Fusion Asiana.

Use the floating/rotating photo-card language from the reference.

Each card:
- real location photograph
- white photo border
- slight rotation
- soft shadow
- rounded corners
- information panel
- place name
- short factual description

Animation:
- cards move horizontally at slightly different rates
- subtle rotation differences
- scroll-linked reveal
- controlled parallax

Do not copy reference destinations or review content.

---

# 11. Section 4 — FAQ

### Eyebrow
`BEFORE YOU STAY`

### Heading
**THE QUESTIONS EVERYONE ASKS US**

Supporting text should explain that guests can get straightforward answers before booking.

### Left side
- heading
- supporting copy
- `ASK US ANYTHING`
- `WHATSAPP US`

### Right side accordion

Suggested questions:
1. What time is check-in and check-out?
2. Where is Fusion Asiana located?
3. What amenities are available?
4. Is parking available?
5. Can guests use the kitchen?
6. How many guests can stay in each room?
7. What are the house rules?
8. How do I book a room?

Only publish answers confirmed by the business.

Accordion:
- warm cream cards
- subtle border
- rounded corners
- navy question text
- circular plus button
- smooth height animation
- accessible keyboard interaction
- `aria-expanded`

---

# 12. Section 5 — Why Choose Us

### Eyebrow
`WHY CHOOSE US`

### Heading
**A Better Stay, Right in the Heart of Dibrugarh**

Explain that Fusion Asiana is newly opened, professionally managed, located in Chowkidingee, and focused on clean rooms and comfortable stays.

Do not use unsupported exaggerated claims.

### Highlight statistics

Use only verified information:

**NEW**  
Freshly opened

**4.9★**  
Average rating

**CHOWKIDINGEE**  
In the heart of the city

**CLEAN ROOMS**  
Carefully maintained

### Feature cards

**PROFESSIONAL HOMESTAY**  
Thoughtfully managed spaces and a professional approach to every guest stay.

**CLEAN & COMFORTABLE**  
Clean rooms and carefully maintained spaces designed for a comfortable stay.

**RIGHT IN CHOWKIDINGEE**  
A convenient location close to Dibrugarh's key areas and everyday necessities.

---

# 13. Section 6 — Book Your Room CTA

Create a dramatic full-width orange CTA.

Background:
`#C9571D`

Use subtle dashed curves and an original Fusion Asiana/Assam-inspired decorative element.

Do not copy the reference hiking graphic.

### Eyebrow
`YOUR STAY STARTS HERE`

### Heading
**READY TO BOOK  
YOUR ROOM?**

### Supporting text
**Choose your room, pick your dates, and get in touch with us to reserve your stay at Fusion Asiana.**

### Buttons
`BOOK A ROOM →`

`WHATSAPP US`

Requirements:
- full width
- generous vertical spacing
- centered content
- very large bold typography
- strong contrast
- major visual pause before the final gallery/footer

---

# 14. Section 7 — Gallery / Reels

### Eyebrow
`FROM FUSION ASIANA`

### Heading
**A GLIMPSE OF YOUR STAY**

Show:
- rooms
- property
- common areas
- dining
- surroundings
- guest moments
- short videos/reels

Use a horizontal portrait media strip inspired by the reference.

Cards:
- tall portrait
- rounded corners
- real photography
- subtle overlay
- small bottom labels
- horizontal movement
- optional video

Possible labels:
- THE ROOMS
- SLOW MORNINGS
- THE LIVING SPACE
- DINING
- AROUND DIBRUGARH
- LITTLE DETAILS
- HOME AWAY FROM HOME

Only use labels that match the supplied media.

---

# 15. Section 8 — Other Businesses

### Eyebrow
`OUR OTHER BUSINESSES`

Show the actual businesses supplied by the client.

Each item can have:
- logo/photo
- business name
- short description
- `EXPLORE →`

Do not invent businesses or claims.

Keep the section visually consistent with the rest of the site.

---

# 16. Footer

Large dark navy footer.

### Left
Fusion Asiana logo

Short description:
**Fusion Asiana is a comfortable, professionally managed homestay in Chowkidingee, Dibrugarh.**

### Column 2
`EXPLORE`
- Home
- Rooms
- Nearby Places
- FAQ

### Column 3
`COMPANY`
- About
- Contact
- Privacy Policy
- Terms & Conditions

### Column 4
`TALK TO US`
- Phone
- Email
- WhatsApp
- Instagram

Add subtle oversized decorative artwork in the bottom-right.

Bottom divider.

`© 2026 Fusion Asiana. All rights reserved.`

`Dibrugarh • Assam`

---

# 17. Animation System

Preferred:
**GSAP + ScrollTrigger** where appropriate.

Required:
- hero text reveal
- subtle hero parallax
- cream sheet transition
- navbar entrance
- section reveal
- horizontal room movement
- floating nearby-place cards
- FAQ accordion
- statistic reveal/count-up where meaningful
- booking CTA reveal
- gallery horizontal movement

Animation must feel:
- smooth
- intentional
- cinematic
- premium

Avoid:
- bounce
- elastic effects
- excessive zoom
- random motion
- rapid flashing
- unnecessary animation

Support `prefers-reduced-motion`.

---

# 18. Responsive Design

Desktop must follow the reference proportions.

Mobile is a deliberate composition, not a scaled desktop.

### Mobile
- floating rounded navbar
- hamburger menu
- large but controlled typography
- horizontally swipeable room cards
- centered nearby-place card with partial neighbors
- stacked FAQ
- 2-column or stacked statistics
- stacked CTA buttons where needed
- stacked footer
- no horizontal page overflow

Hero-to-cream transition must work on mobile.

---

# 19. Image Direction

Use real supplied photography wherever possible.

Images must:
- look natural
- retain realistic colors
- not be unnecessarily filtered
- not look AI-generated
- preserve room/property details
- use correct object positioning

Use:
- lazy loading
- responsive image sizes
- modern formats where possible

---

# 20. Components

Use reusable components:

- Navbar
- MobileMenu
- Hero
- RoomSection
- RoomCard
- NearbyPlacesSection
- FloatingPlaceCard
- FAQSection
- FAQItem
- WhyChooseUs
- StatItem
- FeatureCard
- BookingCTA
- GallerySection
- GalleryCard
- OtherBusinesses
- Footer

Keep content/data separate from components.

---

# 21. Accessibility

Implement:
- semantic HTML
- logical heading hierarchy
- alt text
- keyboard navigation
- visible focus states
- accessible buttons
- `aria-expanded` for FAQ
- sufficient contrast
- reduced-motion support

---

# 22. Performance

Prioritize:
- fast initial load
- optimized images
- lazy loading
- responsive images
- GPU-friendly transforms
- minimal layout shifts
- efficient scroll logic
- transforms/opacity for animations

---

# 23. Content Rules

Never invent:
- room specifications
- amenities
- prices
- ratings
- distances
- travel times
- opening dates
- house rules
- business claims

If information is missing, use a clearly marked placeholder until confirmed.

---

# 24. Final Visual Checklist

- [ ] Floating rounded navy navigation
- [ ] Poppins typography throughout
- [ ] Warm cream background
- [ ] Navy + orange palette
- [ ] Subtle dotted texture
- [ ] Rounded cards
- [ ] Hero-to-cream rising-sheet transition
- [ ] Rooms horizontal carousel
- [ ] Nearby Places floating photo animation
- [ ] FAQ accordion
- [ ] Why Choose Us section
- [ ] Large orange Book Your Room CTA
- [ ] Gallery/Reels horizontal strip
- [ ] Other Businesses section
- [ ] Large navy footer
- [ ] Mobile-specific layouts
- [ ] No horizontal overflow
- [ ] Reduced-motion support
- [ ] Realistic photography
- [ ] No copied ThrillHikers content or branding

---

# 25. Core Design Principle

The final website should feel like:

**A premium Assam homestay presented through a modern editorial hospitality website.**

The reference provides the **visual grammar**.

Fusion Asiana provides the **identity, content, imagery and story**.

Do not make a clone.

Make Fusion Asiana feel like an independently designed, professionally art-directed hospitality brand.
