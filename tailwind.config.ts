import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Inclui todos os arquivos relevantes na pasta src
  ],
  theme: {
    extend: {
      // Extenda o tema padrão do Tailwind aqui
      colors: {
        primary: '#1DA1F2', // Exemplo de cor personalizada
        secondary: '#14171A', // Outra cor personalizada
      },
    },
  },
  plugins: [],
};

export default config;
