// THE SUNDAY ATLAS — news-image-20261122 v3 entry program.
// The composed front page ships in this repository as entry.png (JPEG bytes
// under a .png name; the competition tells formats apart by their first
// bytes). This program copies that file, unchanged, into the output
// directory, so both scored runs emit exactly the same bytes. It reads no
// network and no clock.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");
copyFileSync(new URL("./entry.png", import.meta.url), target);
console.log("wrote", target, statSync(target).size, "bytes");
