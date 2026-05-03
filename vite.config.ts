import { resolve } from 'path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [tailwindcss()],
	base: '/ultimate-gsap-starter/',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				animation1: resolve(__dirname, 'src/pages/animation1/index.html'),
				animation2: resolve(__dirname, 'src/pages/animation2/index.html'),
				animation3: resolve(__dirname, 'src/pages/animation3/index.html'),
				animation4: resolve(__dirname, 'src/pages/animation4/index.html'),
				animation5: resolve(__dirname, 'src/pages/animation5/index.html'),
				animation6: resolve(__dirname, 'src/pages/animation6/index.html'),
				animation7: resolve(__dirname, 'src/pages/animation7/index.html'),
				animation8: resolve(__dirname, 'src/pages/animation8/index.html'),
				animation9: resolve(__dirname, 'src/pages/animation9/index.html'),
				animation10: resolve(__dirname, 'src/pages/animation10/index.html'),
			},
		},
	},
})
