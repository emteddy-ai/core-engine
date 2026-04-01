// types.ts

import { IPlugin } from './plugin';

interface ICoreEngine {
  plugins: IPlugin[];
  registerPlugin(plugin: IPlugin): void;
}

interface IPlugin {
  name: string;
  description: string;
  load(): void;
  unload(): void;
}

interface IPluginOptions {
  name: string;
  description: string;
}

interface IPluginLoadOptions {
  plugin: IPlugin;
  core: ICoreEngine;
}

interface IPluginUnloadOptions {
  plugin: IPlugin;
  core: ICoreEngine;
}