import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You bagged the eggs under the milk, so I'll log it as an omelette, pre-mixed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
