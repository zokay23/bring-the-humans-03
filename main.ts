// bring-the-humans-03 entry for make.fun: the video is the entry.
// This program only hands VIDEO.json (the TikTok address of the ad) to the
// grader, at /output/VIDEO.json. The house reads the video's views itself.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
console.log("VIDEO.json copied to " + outDir);
