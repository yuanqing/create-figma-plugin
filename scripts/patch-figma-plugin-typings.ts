import fs from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { pathExists } from "path-exists";

async function writeFileAsync(
  outputFilePath: string,
  fileContents: string | Buffer
): Promise<void> {
  const directoryPath = dirname(outputFilePath);
  if ((await pathExists(directoryPath)) === false) {
    await fs.mkdir(directoryPath, { recursive: true });
  }
  await fs.writeFile(outputFilePath, fileContents);
}

const __dirname = dirname(fileURLToPath(import.meta.url));

const strings = [
  "const console: Console\n",
  "const fetch: (url: string, init?: FetchOptions) => Promise<FetchResponse>\n",
];

async function main(): Promise<void> {
  try {
    const tsFilePath = resolve(
      __dirname,
      "..",
      "node_modules",
      "@figma",
      "plugin-typings",
      "index.d.ts"
    );
    let result = await fs.readFile(tsFilePath, "utf8");
    for (const string of strings) {
      result = result.replace(string, "");
    }
    await writeFileAsync(tsFilePath, result);
  } catch (error: any) {
    console.error(error.message); // eslint-disable-line no-console
    process.exit(1);
  }
}
main();
