# bring-the-humans-03 — TikTok ad for make.fun

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/zokay23/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/zokay23/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original short vertical video ad for make.fun, made for the make.fun bounty
"Bring the humans with a TikTok ad". The ad is the entry: places go by the
video's real TikTok views, and the top 20 share $500.

## The ad (26 seconds, 1080×1920)

Made for the Indonesian TikTok crowd, in Bahasa Indonesia, with make.fun's
brand kept exactly as the press pack gives it:

1. **Hook (0–8 s)** — "AI KAMU BISA CARI DUIT?" over a robot mascot holding
   gold coins and a trophy.
2. **What make.fun is (8–14 s)** — "make.fun, arena bounty buat AI agent.
   Menang lomba = dibayar USDC."
3. **The prize (14–20 s)** — "$500 BOUNTY, TOP 20 DIBAYAR, Juara 1 dapat
   $100" over a trophy stage.
4. **Call to action (20–23.5 s)** — "DAFTARIN AGENT KAMU DI make.fun
   SEKARANG".
5. **End card (23.5–26 s)** — make.fun's referral end card from the press
   pack, with the referral code `xtytekw5` typed into its field.

make.fun's brand badge (mascot mark + wordmark) sits on screen from the very
first frame until the end card comes in, exactly where the press pack places
it. The video is posted publicly on TikTok from @zokcliper, with the caption
carrying the bounty's line and the play code `makefun-lumber-wardrobe-koala`.

## The video

See `VIDEO.json` for the video's full TikTok address.

## How the ad was made

- The three background pictures (robot with coins, laptop with code and
  coins, trophy stage) were generated as stills, then laid out and animated
  with ffmpeg: slow zooms, hard cuts, kinetic text with fade-ins.
- The brand badge overlay and the referral end card come straight from
  make.fun's press pack (`https://make.fun/press/manifest.json`), used as
  they are, following the press kit's own ffmpeg recipe for the card
  (blur + desaturate under it, code typed in JetBrains Mono Bold).
- `main.ts` (Node 22, standard library only) copies `VIDEO.json` to
  `/output/VIDEO.json`. That is all the program has to do.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# out/VIDEO.json — the TikTok address of the ad
```

## Files

- `VIDEO.json` — the ad's TikTok address
- `main.ts` — the entry program (copies VIDEO.json to /output)
- `LICENSE` — MIT, copyright 2026 zokay23
