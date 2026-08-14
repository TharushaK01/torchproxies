import localFont from 'next/font/local';

// Define the custom font 'Obvia Demo'
export const obvia = localFont({
  src: './fonts/Fontspring-DEMO-obvia_regular.otf',
  variable: '--font-obvia', // Assign a CSS variable
  display: 'swap',
});