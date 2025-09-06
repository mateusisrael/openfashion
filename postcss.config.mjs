const config = {
  plugins: ["@tailwindcss/postcss"],

  theme: {
    extend: {
      colors: {
        text: {
          title: '#000000',       // Title-Active
          body: '#333333',        // Body
          label: '#555555',       // Label
          placeholder: '#888888', // Placeholder
        },
        surface: {
          line: '#E0CFBA',        // Line
          input: '#F9F9F9',       // Input Background
          background: '#F8F0E7',  // Background
          offwhite: '#FCFCFC',    // Off-white
        },
        brand: {
          primary: {
            light: '#DD8560',    // Primary Light
            dark: '#A8715A',     // Primary Dark
          },
          primary: {
            light: '#DD8560',    // Primary Light
            dark: '#A8715A',     // Primary Dark
          },
          secondary: {
            light: "#DD8560"
          }
        },
      },
      fontSize: {
        title: ['1.125rem', { lineHeight: '40px', letterSpacing: '4px'}],              // title
        subtitle: ['0.875rem', { lineHeight: '20px', letterSpacing: '2px'}],           // sub-title
        price: ['0.938rem', { lineHeight: '24px', letterSpacing: '0'}],                // price
        bodyLarge: ['1rem', { lineHeight: '24px', letterSpacing: '0'}],                // Body (Large)
        bodyMedium: ['0.875rem', { lineHeight: '24px', letterSpacing: '0'}],           // Body (Medium)
        bodySmall: ['0.075rem', { lineHeight: '18px', letterSpacing: '0'}],            // Body (Small)
      },
      textTransform: {
        uppercase: 'uppercase',
      },
    },
  },
};

export default config;
