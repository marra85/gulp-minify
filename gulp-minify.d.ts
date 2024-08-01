/// <reference path="../typings/main.d.ts" />

declare namespace GulpMinify {
  interface MinifyOptions {
    ext?: {
      src?: string;
      min?: string;
    };
    exclude?: Array<string>;
    ignoreFiles?: Array<string>;
    /**
     * defines if the source files are in ES6 moudule format
     */
    module?: boolean;
  }
}

declare module "gulp-minify" {
  import { Duplex } from "stream";

  function minify(options?: GulpMinify.MinifyOptions): Duplex;

  export = minify;
}
