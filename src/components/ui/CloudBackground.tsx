import React from 'react';

const CloudBackground = () => {
  return (
    // ИЗМЕНЕНИЯ ЗДЕСЬ:
    // 1. absolute вместо fixed — чтобы скроллилось вместе со страницей
    // 2. min-h-screen — чтобы на пустых страницах фон был во весь экран
    // 3. w-full h-full — чтобы растягивалось на всю ширину и высоту контента
    <div className="absolute inset-0 -z-50 overflow-hidden bg-white min-h-screen w-full">

      {/* СЛОЙ 1: Цветные акценты */}

      {/* 1. Мятный (Mint) - Верхний левый */}
      <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] rounded-full opacity-50 blur-[130px] bg-[#ECFDF5]" />

      {/* 2. Лавандовый (Lavender) - Верхний правый */}
      <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full opacity-45 blur-[120px] bg-[#F5F3FF]" />

      {/* 3. Лаймовый (Lime) - Нижний правый */}
      <div className="absolute bottom-[-10%] right-[-20%] w-[80%] h-[80%] rounded-full opacity-50 blur-[130px] bg-[#F7FEE7]" />

      {/* 4. Голубой (Sky Blue) - Нижний левый */}
      <div className="absolute bottom-[-5%] left-[-10%] w-[70%] h-[70%] rounded-full opacity-45 blur-[120px] bg-[#E0F2FE]" />

      {/* Центральное связующее пятно */}
      <div className="absolute top-[25%] left-[25%] w-[50%] h-[50%] rounded-full opacity-30 blur-[100px] bg-[#F8FAFC]" />


      {/* СЛОЙ 2: Текстура шума */}
      {/* ВАЖНО: preserveAspectRatio="none" может понадобиться, если шум начнет растягиваться некрасиво, 
          но обычно для cloud noise это не критично. */}
      <svg className="absolute inset-0 w-full h-full opacity-60 mix-blend-multiply pointer-events-none">
        <filter id="cloudNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.0005"
            numOctaves="4"
            seed="150"
            stitchTiles="stitch"
          />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#cloudNoise)" />
      </svg>

      {/* СЛОЙ 3: Вуаль */}
      <div className="absolute inset-0 bg-white/10" />
    </div>
  );
};

export default CloudBackground;
