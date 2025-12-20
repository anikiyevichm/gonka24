export {};

declare global {
  interface Window {
    Tally: {
      openPopup: (formId: string, options?: any) => void;
      closePopup: (formId: string) => void;
    };
  }
}
