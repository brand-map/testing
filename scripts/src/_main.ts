import { resolve } from "node:path";
import process from "node:process";
import { Command } from "@cliffy/command";
import type { ExecMain } from "./types";

const script = new Command()
  .name("script")
  .version("0.1.0")
  .description("Run script")
  .arguments("<script:string> [...args]")
  .option("-D, --debug", "Enable debug output.")
  .action(async (options, ...args) => {
    const scriptPath = resolve(import.meta.dirname, `${args.at(0)}.ts`);

    const sciptModule = (await import(scriptPath)) as { main: ExecMain };

    await sciptModule.main({ options, args: args.slice(1) });
  });

await new Command().command("script", script).parse(process.argv.slice(2));
