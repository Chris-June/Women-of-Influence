/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-purple-50', 'bg-purple-100', 'bg-purple-600', 'text-purple-600', 'text-purple-700', 'text-purple-800', 'text-purple-900',
    'bg-green-50', 'bg-green-100', 'bg-green-600', 'text-green-600', 'text-green-700', 'text-green-800', 'text-green-900',
    'bg-blue-50', 'bg-blue-100', 'bg-blue-600', 'text-blue-600', 'text-blue-700', 'text-blue-800', 'text-blue-900',
    'bg-teal-50', 'bg-teal-100', 'bg-teal-600', 'text-teal-600', 'text-teal-700', 'text-teal-800', 'text-teal-900',
    'bg-orange-50', 'bg-orange-100', 'bg-orange-600', 'text-orange-600', 'text-orange-700', 'text-orange-800', 'text-orange-900',
    'bg-red-50', 'bg-red-100', 'bg-red-600', 'text-red-600', 'text-red-700', 'text-red-800', 'text-red-900',
    'hover:bg-purple-50', 'hover:bg-green-50', 'hover:bg-blue-50', 'hover:bg-teal-50', 'hover:bg-orange-50', 'hover:bg-red-50',
    'border-purple-300', 'border-green-300', 'border-blue-300', 'border-teal-300', 'border-orange-300', 'border-red-300',
    'hover:border-purple-400', 'hover:border-green-400', 'hover:border-blue-400', 'hover:border-teal-400', 'hover:border-orange-400', 'hover:border-red-400'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        purple: {
          '50': '#f3e5f5',
          '100': '#e1bee7',
          '200': '#ce93d8',
          '300': '#ba68c8',
          '400': '#ab47bc',
          '500': '#9c27b0',
          '600': '#8e24aa',
          '700': '#7b1fa2',
          '800': '#6a1b9a',
          '900': '#4a148c'
        },
        green: {
          '50': '#e8f5e9',
          '100': '#c8e6c9',
          '200': '#a5d6a7',
          '300': '#81c784',
          '400': '#66bb6a',
          '500': '#4caf50',
          '600': '#43a047',
          '700': '#388e3c',
          '800': '#2e7d32',
          '900': '#1b5e20'
        },
        blue: {
          '50': '#e3f2fd',
          '100': '#bbdefb',
          '200': '#90caf9',
          '300': '#64b5f6',
          '400': '#42a5f5',
          '500': '#2196f3',
          '600': '#1e88e5',
          '700': '#1976d2',
          '800': '#1565c0',
          '900': '#0d47a1'
        },
        teal: {
          '50': '#e0f2f1',
          '100': '#b2dfdb',
          '200': '#80cbc4',
          '300': '#4db6ac',
          '400': '#26a69a',
          '500': '#009688',
          '600': '#00897b',
          '700': '#00796b',
          '800': '#00695c',
          '900': '#004d40'
        },
        orange: {
          '50': '#fff3e0',
          '100': '#ffe0b2',
          '200': '#ffcc80',
          '300': '#ffb74d',
          '400': '#ffa726',
          '500': '#ff9800',
          '600': '#fb8c00',
          '700': '#f57c00',
          '800': '#ef6c00',
          '900': '#e65100'
        },
        red: {
          '50': '#ffebee',
          '100': '#ffcdd2',
          '200': '#ef9a9a',
          '300': '#e57373',
          '400': '#ef5350',
          '500': '#f44336',
          '600': '#e53935',
          '700': '#d32f2f',
          '800': '#c62828',
          '900': '#b71c1c'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")]
};
