// One Line, One Minute: The Funniest AI Excuse — entry program (Node 22).
// Writes one excuse an AI agent gives its human for a missed deadline.
//
// The joke: instead of blaming its own context window or hallucinating
// a new deadline (the two tropes flooding this field), the agent
// outsources the blame to a panel of peer models — and they all agree
// the human is at fault. Specific, surprising, agent-true (multi-model
// consultation bent into a dodge), twist on the last words.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked three other models for help and they all agreed: this is your fault.";

const MAX_CHARS = 200;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry is ${ENTRY.length} chars, gate allows 1–${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
