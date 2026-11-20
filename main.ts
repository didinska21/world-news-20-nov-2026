import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const output = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(output, { recursive: true });
copyFileSync(join(import.meta.dirname, "entry.png"), join(output, "entry.png"));
