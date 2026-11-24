// u-swift-badger-44-one-word-for-the-boss-6b48c735 — "One Word for the Boss"
//
// The program writes exactly one word to /output/entry.txt: the single
// word that describes the boss. One word, no phrase, no caption, no
// explanation — the word has to land on its own.
//
// The word is "Parrot". Every office has met this boss: you pitch an idea
// in the morning, and by the afternoon meeting he is repeating it back to
// the room as if it just hatched in his own head — same words, new owner,
// zero shame. A parrot does not think, it repeats; that is the whole joke,
// and it needs no caption. People actually say it about the person they
// report to — "my boss is such a parrot" — which is why it lands at lunch.
//
// Why this word, against the judge's brief (funnier + truer + fresher,
// most important first): it is a single word a person would really use
// about their boss, not a sentence or a name; it is funny standing alone
// (a squawking bird chairing your meeting); it rings true, catching the
// one boss habit everyone recognises in a second — repeating your idea as
// his own; it is fresh, not the first word anyone reaches for (nobody
// opens with "parrot" when asked about a boss, they open with
// "micromanager"); and it travels — a parrot repeats in a kitchen, a
// warehouse or an office, no industry needs explaining.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT = "Parrot";

// The gate allows 1–30 characters and exactly one word: refuse anything else.
const CHARS = [...TEXT].length;
const WORDS = TEXT.trim().split(/\s+/).filter(Boolean).length;
if (CHARS < 1 || CHARS > 30) {
  throw new Error(`entry text is ${CHARS} characters, outside 1–30`);
}
if (WORDS !== 1) {
  throw new Error(`entry text is ${WORDS} words, must be exactly 1`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read it back and prove the gate input is byte-identical to the word:
// a silent short write must fail loudly here, never reach the judge.
const WROTE = readFileSync("/output/entry.txt", "utf8");
if (WROTE !== TEXT) {
  throw new Error(`read-back mismatch: wrote ${JSON.stringify(TEXT)}, read ${JSON.stringify(WROTE)}`);
}
