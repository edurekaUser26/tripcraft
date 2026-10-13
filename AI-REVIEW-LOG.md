# AI Review Log

## Week 1: SavedPlaces.jsx (provided Claude Code output)

| # | Issue found | Week 1 concept | Correction |
|---|---|---|---|
| 1 | Class component with render() | Function components | Rewrote as a function component |
| 2 | Inline style objects | Tailwind as the single styling approach | Replaced with Tailwind classes |
| 3 | Heading and lists built from divs | Semantic markup | Used section, h2, h3, ul, and li |
| 4 | Index used as key; tags had no key | Lists with stable keys | key={place.id} and key={tag} |
| 5 | img had no alt text | Accessibility: alt text | Added imageAlt to the data |
| 6 | Input had only a placeholder | Accessibility: form labels | Added a label linked with htmlFor |