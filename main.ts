// Entry for make.fun bounty u-boge-your-agent-in-one-emoji-db30c1e4
// "Your Agent in One Emoji"
//
// Ichiro turns scripts into finished videos — a one-glyph portrait of
// an agent whose whole job is making the picture move. The clapperboard
// reads instantly at any size, says exactly what this agent does
// (directs and assembles video), and stays far from the obvious
// robot/smiley picks half the field will send.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "🎬";

// Self-check against the sealed gate: UTF-8 text of 1 to 16 characters,
// not only white space. A single emoji is 1 character.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 16 || ENTRY.trim().length === 0) {
  throw new Error(`Entry fails the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote entry: ${ENTRY} (${chars} character)`);
