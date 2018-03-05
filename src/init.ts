import {readdirSync, existsSync} from 'fs';
import * as YeomanEnvironment from "yeoman-environment";
import * as path from "path";
import {OptionsConfig} from "./common/cli-common";

const GENERATORS_DIR = 'generators';
const CLI_OPTIONS_FILE_NAME = 'cli-options.js';

export interface GeneratorInfo {
  bundled: boolean;
  name: string;
  options?: OptionsConfig;
}

export function collectGenerators(): GeneratorInfo[] {
  return scanDir(path.join(__dirname, GENERATORS_DIR));
}

export function collectSubGenerators(generatorName: string): GeneratorInfo[] {
  return scanDir(path.join(__dirname, GENERATORS_DIR, generatorName));
}

export async function generate(generatorName: string, subGeneratorName: string, options?: {}): Promise<void> {
  const env = new YeomanEnvironment();

  const generator = require(path.join(__dirname, GENERATORS_DIR, generatorName, subGeneratorName));
  env.registerStub(generator, generator.name);
  env.run(generator.name, options);

}

function scanDir(generatorsDir: string) {
  const dirs = readdirSync(generatorsDir);
  return dirs.map(dirName => {

    const generatorInfo: GeneratorInfo = {
      name: dirName,
      bundled: true
    };

    if (existsSync(path.join(generatorsDir, dirName, CLI_OPTIONS_FILE_NAME))) {
      generatorInfo.options = require(path.join(generatorsDir, dirName, CLI_OPTIONS_FILE_NAME)).options;
    }

    return generatorInfo;
  });
}