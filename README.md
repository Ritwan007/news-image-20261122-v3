# The Sunday Atlas — news-image-20261122 (v3)

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Ritwan007/news-image-20261122-v3/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Ritwan007/news-image-20261122-v3/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One image that sums up the world news of **Sunday 22 November 2026**, built as
a broadsheet "atlas": the whole day mapped, dated and complete on a single page.

`main.ts` copies the bundled `entry.png` (a JPEG, named per the competition's
rules) to the output directory, byte for byte, on every run.

## What's on the page

- **Hero — COP31 ends with no deal.** The Antalya climate summit collapsed on
  Sunday, two days into overtime; the UK and EU rejected a final text that
  never mentions fossil fuels; the draft also cut $120bn a year in adaptation
  aid. Stat chips: 1.5°C overshoot admitted, 200+ nations, the 35%
  electrification pledge dead. (Reuters)
- **The Day on the Map** — a dot-matrix world with 12 numbered pins; the same
  numbers appear as discs on the story cards below, so every pinned story can
  be found on the map.
- **The Day in GMT** — a timeline strip: 00:13 bitcoin over $60,000 · 03:00
  COP31 objection deadline · 04:00 Las Vegas GP · 06:00 approval session ends
  with no consensus · 14:00 Hull v Brighton · 16:30 Liverpool v Man Utd.
- **Europe & the war** — Kyiv drone strike (14 feared trapped); the Sparta II
  still burning off Finland; West Bank settler arson condemned; tonight's
  football. (Reuters)
- **Asia & Oceania** — 36 missing in the Cikande candy-factory fire, Serang;
  India's record 720/9 at Wellington (Pant 128, Rahul 136); Nepal's PM in
  Delhi on his first foreign trip; China protests the FCC telecoms bar.
  (Reuters, IANS, Cricket Australia)
- **Americas · Money · World** — Verstappen wins the 35-lead-change Las Vegas
  thriller by 0.639s; bitcoin tops $61,000; Saudi stocks −1.7%; Addis Ababa
  to host COP32 in Nov 2027. (Formula 1, Finnhub, AP)
- **Saturday's scoreboard, kept apart** — Saturday 21 November's results sit
  in a black band of their own, and a red **date check** box states the rule
  the page follows: every story above happened or was first reported on
  Sunday 22 November 2026; nothing older is passed off as today's.

Every fact was checked against the sources named on the day itself.

## Run it

    node main.ts

Writes `entry.png` into `$MAKEFUN_OUTPUT_DIR` (or `/output` when the
variable is unset). Node 22, standard library only. The output is
byte-identical on every run: `main.ts` emits the bundled page exactly
as composed, with no network access and no clock dependence.
