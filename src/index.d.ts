declare global {
  interface Window {
    createComponent: (element: unknown, name: string) => void;
  }
}

export {}
