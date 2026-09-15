# Content & image architecture

This project separates **content data** (`src/content/`) from **UI
components** (`src/components/`, `src/app/`). Nothing in a component should
ever hardcode a price, description, or image path — it all comes from
content data, typed by `src/types/content.ts`.

## Where things live

| To change... | Edit this file | Images go in |
|---|---|---|
| Vehicle (price, description, photos) | `src/content/vehicles.ts` | `public/images/vehicles/<slug>/` |
| Tour package | `src/content/tours.ts` | `public/images/tours/<slug>/` |
| Service (airport transfer, car charter, etc.) | `src/content/services.ts` | `public/images/<service-slug>/` |
| Driver | `src/content/drivers.ts` | `public/images/drivers/<slug>/` |
| Testimonial | `src/content/testimonials.ts` | `public/images/testimonials/` |
| Instagram picks | `src/content/instagram.ts` | `public/images/instagram/` |
| Brand, contact info, social links | `src/content/site.ts` | `public/images/brand/` |
| Homepage hero photo | `src/content/hero.ts` | `public/images/hero/` |

See `public/images/README.md` for the full folder-by-folder image guide.

## Adding a photo to an existing item

1. Rename the file to lowercase-with-hyphens (e.g. `toyota-alphard-front.webp`)
   and drop it in its folder under `public/images/...`.
2. Open the matching content file and set that image's `src` to
   `/images/<folder>/<filename>`, e.g.:

   ```ts
   images: [
     { src: "/images/vehicles/toyota-alphard/main.webp", alt: "Toyota Alphard — main photo" },
   ],
   ```

3. That's it — no component needs to change. Every image is rendered
   through `<ContentImagePlaceholder>` (`src/components/ui/ContentImage.tsx`),
   which shows a labeled placeholder box for any image with no `src` yet,
   so a missing photo never breaks the layout.

## Adding a brand-new vehicle, tour, service or driver

1. Create its image folder under `public/images/...`.
2. Add one new object to the relevant array in `src/content/*.ts`, following
   the shape of the existing entries.
3. Vehicle, tour and service detail pages are dynamic routes
   (`src/app/vehicles/[slug]`, `src/app/tours/[slug]`,
   `src/app/services/[slug]`) — a new content entry gets its own page
   automatically, no new route file needed.

## Removing an item

Delete its entry from the content array (and its image folder, if no
longer needed). No component changes required.

## Placeholders

Until the client confirms real business information, content uses explicit
placeholders instead of invented values:

- `USD XX` — price not yet confirmed
- `[TOUR DESCRIPTION]`, `[VEHICLE DESCRIPTION]`, `[SERVICE DESCRIPTION]` — copy not yet written
- `[CLIENT CONFIRMATION REQUIRED]` — a fact (capacity, duration, itinerary, contact info) that must come from the client, not be guessed
- `[IMAGE REQUIRED]` — shown automatically by `<ContentImagePlaceholder>` whenever an image has no `src`

**Before production launch, search the codebase for these markers and
replace every one with confirmed content.** A quick way to find them all:

```bash
grep -rn "CLIENT CONFIRMATION REQUIRED\|USD XX\|\[TOUR DESCRIPTION\]\|\[VEHICLE DESCRIPTION\]\|\[SERVICE DESCRIPTION\]" src/content
```

Testimonials are the one exception: the array starts empty, and a
testimonial should only be added once the client has confirmed the quote
(and photo, if any) is real and approved for publication.
