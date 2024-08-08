/**
 *
 * @authors liwb (you@example.org)
 * @date    2024/8/8 11:49
 * @version $ IIFE
 */
import fs from 'node:fs';
// @ts-check
/**
 * Tip: please add the prebundled packages to `tsconfig.json#paths`.
 */
import { join } from 'node:path';

function replaceFileContent(filePath, replaceFn) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const newContent = replaceFn(content);
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent);
  }
}

export default {
  prettier: true,
  externals: {
    // External caniuse-lite data, so users can update it manually.
    'caniuse-lite': 'caniuse-lite',
    '/^caniuse-lite(/.*)/': 'caniuse-lite$1',
    webpack: 'webpack',
    typescript: 'typescript',
  },
  dependencies: [
    // autoprefixer
    {
      name: 'autoprefixer',
      dtsExternals: ['browserslist'],
      externals: {
        'postcss': 'postcss'
      }
    },
    {
      name: 'browserslist',
      // preserve the `require(require.resolve())`
      beforeBundle(task) {
        replaceFileContent(join(task.depPath, 'node.js'), (content) =>
          content.replaceAll(
            'require(require.resolve',
            'eval("require")(require.resolve',
          ),
        );
      },
    },
  ]
};
