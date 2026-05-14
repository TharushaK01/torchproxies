declare module 'react-simple-maps' {
  export interface Geography {
    rsmKey: string;
    properties: {
      name: string;
      // Add other properties as needed
    };
    // Add other fields as needed
  }

  export const ComposableMap: any;
  export const Geographies: any;
  export const Geography: any;
}