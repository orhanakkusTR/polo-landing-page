/// <reference types="vite/client" />

interface Window {
  gtag: (...args: any[]) => void;
  dataLayer: any[];
}
