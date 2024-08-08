import { Plugin as Plugin_2 } from 'postcss';

declare function autoprefixer<T extends string[]>(
...args: [...T, autoprefixer.Options]
): Plugin_2 & autoprefixer.ExportedAPI

declare function autoprefixer(
browsers: string[],
options?: autoprefixer.Options
): Plugin_2 & autoprefixer.ExportedAPI

declare function autoprefixer(
options?: autoprefixer.Options
): Plugin_2 & autoprefixer.ExportedAPI

declare namespace autoprefixer {
    type GridValue = 'autoplace' | 'no-autoplace'

    interface Options {
        /** environment for `Browserslist` */
        env?: string

        /** should Autoprefixer use Visual Cascade, if CSS is uncompressed */
        cascade?: boolean

        /** should Autoprefixer add prefixes. */
        add?: boolean

        /** should Autoprefixer [remove outdated] prefixes */
        remove?: boolean

        /** should Autoprefixer add prefixes for @supports parameters. */
        supports?: boolean

        /** should Autoprefixer add prefixes for flexbox properties */
        flexbox?: boolean | 'no-2009'

        /** should Autoprefixer add IE 10-11 prefixes for Grid Layout properties */
        grid?: boolean | GridValue

        /** custom usage statistics for > 10% in my stats browsers query */
        stats?: Stats

        /**
         * list of queries for target browsers.
         * Try to not use it.
         * The best practice is to use `.browserslistrc` config or `browserslist` key in `package.json`
         * to share target browsers with Babel, ESLint and Stylelint
         */
        overrideBrowserslist?: string | string[]

        /** do not raise error on unknown browser version in `Browserslist` config. */
        ignoreUnknownVersions?: boolean
    }

    interface ExportedAPI {
        /** Autoprefixer data */
        data: {
            browsers: { [browser: string]: object | undefined }
            prefixes: { [prefixName: string]: object | undefined }
        }

        /** Autoprefixer default browsers */
        defaults: string[]

        /** Inspect with default Autoprefixer */
        info(options?: { from?: string }): string

        options: Options

        browsers: string | string[]
    }

    /** Autoprefixer data */
    let data: ExportedAPI['data']

    /** Autoprefixer default browsers */
    let defaults: ExportedAPI['defaults']

    /** Inspect with default Autoprefixer */
    let info: ExportedAPI['info']

    let postcss: true
}
export default autoprefixer;

/**
 * Return array of browsers by selection queries.
 *
 * ```js
 * browserslist('IE >= 10, IE 8') //=> ['ie 11', 'ie 10', 'ie 8']
 * ```
 *
 * @param queries Browser queries.
 * @param opts Options.
 * @returns Array with browser names in Can I Use.
 */
declare function browserslist(
queries?: string | readonly string[] | null,
opts?: browserslist.Options
): string[]

declare namespace browserslist {
    interface Query {
        compose: 'or' | 'and'
        type: string
        query: string
        not?: true
    }

    interface Options {
        /**
         * Path to processed file. It will be used to find config files.
         */
        path?: string | false
        /**
         * Processing environment. It will be used to take right queries
         * from config file.
         */
        env?: string
        /**
         * Custom browser usage statistics for "> 1% in my stats" query.
         */
        stats?: Stats | string
        /**
         * Path to config file with queries.
         */
        config?: string
        /**
         * Do not throw on unknown version in direct query.
         */
        ignoreUnknownVersions?: boolean
        /**
         * Throw an error if env is not found.
         */
        throwOnMissing?: boolean
        /**
         * Disable security checks for extend query.
         */
        dangerousExtend?: boolean
        /**
         * Alias mobile browsers to the desktop version when Can I Use
         * doesn’t have data about the specified version.
         */
        mobileToDesktop?: boolean
    }

    type Config = {
        defaults: string[]
        [section: string]: string[] | undefined
    }

    interface Stats {
        [browser: string]: {
            [version: string]: number
        }
    }

    /**
     * Browser names aliases.
     */
    let aliases: {
        [alias: string]: string | undefined
    }

    /**
     * Aliases to work with joined versions like `ios_saf 7.0-7.1`.
     */
    let versionAliases: {
        [browser: string]:
        | {
            [version: string]: string | undefined
        }
        | undefined
    }

    /**
     * Can I Use only provides a few versions for some browsers (e.g. `and_chr`).
     *
     * Fallback to a similar browser for unknown versions.
     */
    let desktopNames: {
        [browser: string]: string | undefined
    }

    let data: {
        [browser: string]:
        | {
            name: string
            versions: string[]
            released: string[]
            releaseDate: {
                [version: string]: number | undefined | null
            }
        }
        | undefined
    }

    let nodeVersions: string[]

    interface Usage {
        [version: string]: number
    }

    let usage: {
        global?: Usage
        custom?: Usage | null
        [country: string]: Usage | undefined | null
    }

    let cache: {
        [feature: string]: {
            [name: string]: {
                [version: string]: string
            }
        }
    }

    /**
     * Default browsers query
     */
    let defaults: readonly string[]

    /**
     * Which statistics should be used. Country code or custom statistics.
     * Pass `"my stats"` to load statistics from `Browserslist` files.
     */
    type StatsOptions = string | 'my stats' | Stats | { dataByBrowser: Stats }

    /**
     * Return browsers market coverage.
     *
     * ```js
     * browserslist.coverage(browserslist('> 1% in US'), 'US') //=> 83.1
     * ```
     *
     * @param browsers Browsers names in Can I Use.
     * @param stats Which statistics should be used.
     * @returns Total market coverage for all selected browsers.
     */
    function coverage(browsers: readonly string[], stats?: StatsOptions): number

    /**
     * Get queries AST to analyze the config content.
     *
     * @param queries Browser queries.
     * @param opts Options.
     * @returns An array of the data of each query in the config.
     */
    function parse(
    queries?: string | readonly string[] | null,
    opts?: browserslist.Options
    ): Query[]

    function clearCaches(): void

    function parseConfig(string: string): Config

    function readConfig(file: string): Config

    function findConfig(...pathSegments: string[]): Config | undefined

    interface LoadConfigOptions {
        config?: string
        path?: string
        env?: string
    }

    function loadConfig(options: LoadConfigOptions): string[] | undefined
}

export declare type ExportedAPI = autoprefixer.ExportedAPI;

export declare type GridValue = autoprefixer.GridValue;

export declare type Options = autoprefixer.Options;

declare type Stats = browserslist.Stats;

export { }
