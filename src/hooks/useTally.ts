import { useCallback } from 'react';


export const useTally = () => {
  const openTally = useCallback((options?: { hiddenFields?: Record<string, string> }) => {
    const formId = 'RGdRaQ';
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // In new tab, hidden fields must be passed as URL query params if needed
      // Tally URL format: https://tally.so/r/FORMID?field=value
      let url = `https://tally.so/r/${formId}`;

      if (options?.hiddenFields) {
        const params = new URLSearchParams(options.hiddenFields);
        url += `?${params.toString()}`;
      }

      window.open(url, '_blank');
    } else {
      window.Tally?.openPopup(formId, {
        hiddenFields: options?.hiddenFields,
        width: 700,
        emoji: {
          text: '👋',
          animation: 'wave'
        }
      });
    }
  }, []);

  return { openTally };
};
