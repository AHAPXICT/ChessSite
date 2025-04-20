import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

let __dirname = dirname(fileURLToPath(import.meta.url))

const pages = {
	main: resolve(__dirname, 'index.html'),
	settings: resolve(__dirname, 'settings.html'),
	game: resolve(__dirname, 'game.html'),
	history: resolve(__dirname, 'history.html'),
	user: resolve(__dirname, 'user.html'),
	learn: resolve(__dirname, 'learn.html'),
}

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/ChessSite/',
	build: {
		rollupOptions: {
			input: {
				...pages,
			},
		},
		outDir: 'docs',
	},
})