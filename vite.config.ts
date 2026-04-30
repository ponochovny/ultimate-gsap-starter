import { resolve } from 'path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [tailwindcss()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				animation1: resolve(__dirname, 'src/pages/animation1/index.html'),
				animation2: resolve(__dirname, 'src/pages/animation2/index.html'),
				animation3: resolve(__dirname, 'src/pages/animation3/index.html'),
			},
		},
	},
})
