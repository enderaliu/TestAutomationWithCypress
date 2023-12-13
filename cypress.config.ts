import { defineConfig } from 'cypress';
import webpackPreprocessor from '@cypress/webpack-preprocessor';

export default defineConfig({
  e2e: {
    baseUrl: 'https://app.stagetokensoft.com',
    setupNodeEvents(on, config) {
      const webpackOptions = {
        resolve: {
          extensions: ['.ts', '.tsx', '.js']
        },
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: [
                {
                  loader: 'ts-loader',
                  options: { transpileOnly: true }
                }
              ],
              exclude: [/node_modules/]
            }
          ]
        }
      };

      on('file:preprocessor', webpackPreprocessor({ webpackOptions }));
    },
  }
});
