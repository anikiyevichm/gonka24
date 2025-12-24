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
      // Desktop/Tablet: Try Tally Modal first (best experience)
      if (window.Tally) {
        window.Tally.openPopup(formId, {
          hiddenFields: options?.hiddenFields,
          layout: 'modal',
          overlay: true,
          width: 700,
          emoji: {
            text: '👋',
            animation: 'wave'
          }
        });
      } else {
        // Fallback: Centered Popup Window
        const width = 700;
        const height = 800;
        const left = window.screen.width / 2 - width / 2;
        const top = window.screen.height / 2 - height / 2;

        let url = `https://tally.so/r/${formId}`;
        if (options?.hiddenFields) {
          const params = new URLSearchParams(options.hiddenFields);
          url += `?${params.toString()}`;
        }

        window.open(
          url,
          'GonkaConnect',
          `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,status=yes`
        );
      }
    }
  }, []);

  return { openTally };
};
