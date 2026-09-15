# Image folder guide

Every image lives in the folder for the section it belongs to. To replace or
add a photo, find the matching folder below — you do not need to touch any
code.

| Folder | What goes here |
|---|---|
| `brand/` | Logo, logo variations, favicon, social share image |
| `hero/` | Homepage hero photo(s) |
| `airport-transfer/` | Standard airport transfer photos |
| `luxury-airport-transfer/` | Alphard / premium airport transfer photos |
| `car-charter/` | Private daily driver / car charter photos |
| `vehicles/<vehicle-slug>/` | One folder per vehicle (see below) |
| `tours/<tour-slug>/` | One folder per tour package (see below) |
| `drivers/<driver-slug>/` | One folder per driver |
| `testimonials/` | Customer photos, only with permission |
| `instagram/` | Hand-picked photos for the Instagram section |
| `about/` | About page photo(s) |
| `contact/` | Contact page photo(s) |

## Vehicles

Each vehicle folder (e.g. `vehicles/toyota-alphard/`) can contain:
`main.webp`, `front.webp`, `side.webp`, `interior.webp`, `luggage.webp`,
`additional.webp`. None are required — the site only shows the files that
exist.

Current vehicle folders: `terios`, `avanza-xenia`, `apv`, `innova-zenix`,
`toyota-hiace`, `hiace-luxury-premio`, `toyota-alphard`.

## Tours

Each tour folder (e.g. `tours/nusa-penida/`) can contain: `cover.webp`,
`gallery-01.webp`, `gallery-02.webp`, etc. The number of gallery images is
not fixed — one image or ten both work.

Current tour folders: `south-bali`, `ubud-culture`, `east-bali`,
`north-bali`, `nusa-penida`, `nusa-penida-snorkeling`,
`jeep-sunrise-black-lava`, `blue-lagoon-snorkeling`.

## Drivers

Add a new folder per driver, e.g. `drivers/yogi/`, with `portrait.webp`,
`driving.webp`, `with-guests.webp`. Then add a matching entry in
`src/content/drivers.ts` (see the commented example there).

## After adding a file

Naming rules: lowercase, hyphens instead of spaces, no `IMG_1234.jpg` /
`WhatsApp Image ...` filenames — rename before adding.

Adding the file to its folder is not enough by itself — you also need to
point to it from the matching content file in `src/content/` (e.g.
`src/content/vehicles.ts` for a vehicle photo) by setting that image's `src`
to `/images/<folder>/<filename>`. See `CONTENT_GUIDE.md` in the project root
for the full picture.
