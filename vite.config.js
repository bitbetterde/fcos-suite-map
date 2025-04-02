import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { devDependencies } from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/FabCityMap.tsx'),
      name: '@fchh/fcos-suite-map',
      fileName: 'fcos-suite-map',
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys(devDependencies), 'react', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [react(), dts({ insertTypesEntry: true })],
});
