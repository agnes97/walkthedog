import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { getAliases } from 'vite-aliases'

const aliases = getAliases({
	allowGlobalAlias: false,
})

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	resolve: { alias: aliases },
})
