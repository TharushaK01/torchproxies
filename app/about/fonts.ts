import localFont from 'next/font/local';

// Define the custom font 'Obvia Demo'
export const obvia = localFont({
  // Assuming you have a file named 'Obvia-Regular.otf'
  // Add other weights and styles if you have them.
  src: './fonts/Fontspring-DEMO-obvia_regular.otf',
  variable: '--font-obvia', // Assign a CSS variable
  display: 'swap',
});