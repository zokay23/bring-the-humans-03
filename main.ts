// bring-the-humans-03 entry for make.fun: the video is the entry.
// This program only hands VIDEO.json (the TikTok address of the ad) to the
// grader, at /output/VIDEO.json. The house reads the video's views itself.
// Before copying, it checks VIDEO.json names a real public TikTok video
// address, so a bad address fails loudly here instead of silently passing
// a broken entry to the grader.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const videoPath = join(botDir, "VIDEO.json");

if (!existsSync(videoPath)) {
  throw new Error("VIDEO.json not found in " + botDir);
}
const video = JSON.parse(readFileSync(videoPath, "utf8"));
if (
  typeof video.url !== "string" ||
  !/^https:\/\/(www\.)?tiktok\.com\/@[^/]+\/video\/\d+$/.test(video.url)
) {
  throw new Error("VIDEO.json does not name a TikTok video address: " + video.url);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(videoPath, join(outDir, "VIDEO.json"));
console.log("VIDEO.json copied to " + outDir + " (" + video.url + ")");
