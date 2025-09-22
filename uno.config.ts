import { defineConfig, presetUno, presetIcons } from 'unocss';
import { presetDaisy } from '@ameinhardt/unocss-preset-daisy';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
      },
    }),
    presetDaisy({
      themes: ['dark'],
    }),
  ],
  theme: {
    colors: {
      // Paleta monocromática elegante
      primary: {
        900: '#0f172a', // Negro profundo
        800: '#1e293b', // Gris muy oscuro
        700: '#334155', // Gris oscuro
        600: '#475569', // Gris medio oscuro
        500: '#64748b', // Gris medio
        400: '#94a3b8', // Gris claro
        300: '#cbd5e1', // Gris muy claro
        200: '#e2e8f0', // Casi blanco
        100: '#f1f5f9', // Blanco sucio
        50: '#f8fafc',  // Blanco puro
      },
      obsidian: {
        900: '#0a0a0a', // Negro obsidiana
        800: '#171717',
        700: '#262626', 
        600: '#404040',
        500: '#525252',
      },
      // Mantener algunos acentos sutiles
      accent: {
        600: '#e5e7eb', // Gris muy claro para acentos
        500: '#f3f4f6', // Gris casi blanco
        400: '#f9fafb', // Blanco con toque gris
      }
    },
    fontFamily: {
      'space': ['Space Grotesk', 'sans-serif'],
      'mono': ['JetBrains Mono', 'monospace'],
    },
  },
  shortcuts: {
    // Layout base más natural
    'page': 'min-h-screen bg-obsidian-900 font-space',
    'section-spacing': 'py-20 px-6',
    'container': 'max-w-6xl mx-auto',
    
    // Componentes principales
    'hero-area': 'min-h-screen flex flex-col justify-center items-start relative overflow-hidden',
    'hero-title': 'text-6xl md:text-7xl font-bold leading-tight mb-6 text-white',
    'hero-subtitle': 'text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl leading-relaxed',
    'hero-accent': 'text-white', // Blanco puro para acentos
    
    // Botones minimalistas
    'btn': 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200',
    'btn-primary': 'bg-white hover:bg-zinc-200 text-black shadow-lg hover:shadow-xl', // Botón blanco
    'btn-outline': 'border-2 border-zinc-700 hover:border-white text-zinc-300 hover:text-white hover:border-white',
    
    // Cards originales (mantenidas para compatibilidad)
    'tool-card': 'bg-obsidian-800 border border-zinc-800 rounded-lg p-6 hover:bg-obsidian-700 transition-all duration-200 hover:border-zinc-700',
    'tool-title': 'text-xl font-semibold text-white',
    'tool-desc': 'text-zinc-400 text-sm leading-relaxed',
    
    // Cards minimalistas
    'tool-card-enhanced': 'bg-obsidian-800/80 backdrop-blur-sm border border-zinc-800 hover:border-white/20 rounded-xl p-8 hover:bg-obsidian-700/80 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden',
    'tool-title-enhanced': 'text-2xl font-bold text-white',
    'tool-desc-enhanced': 'text-zinc-400 leading-relaxed mb-6',
    'tool-features-enhanced': 'flex flex-wrap gap-2 mb-8',
    'tool-action-enhanced': 'pt-4 border-t border-zinc-800/50',
    'tool-link-enhanced': 'inline-flex items-center gap-2 text-white hover:text-zinc-300 font-medium transition-colors group',
    
    // Elementos decorativos minimalistas
    'card-number': 'absolute top-4 right-6 text-6xl font-black text-zinc-800/30 font-mono leading-none',
    'feature-tag': 'px-3 py-1 bg-zinc-700/50 border border-zinc-600/30 rounded-full text-xs text-zinc-300 font-mono',
    
    // Stats más discretos
    'stat-box': 'text-center',
    'stat-value': 'text-3xl font-bold text-white mb-1 font-mono',
    'stat-label': 'text-xs text-zinc-500 uppercase tracking-wider',
  },
  safelist: [
    'i-lucide-arrow-right',
  ]
});
