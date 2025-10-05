import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // 開発時は '/'、ビルド時は '/clean_guild_web/'
  const base = command === 'serve' ? '/' : '/clean_guild_web/';

  return {
    plugins: [react()],
    base: base,
  }
})