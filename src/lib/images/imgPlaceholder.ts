export const imgPlaceholder = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#43cea2" offset="0%" />
      <stop stop-color="#185a9d" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#43cea2" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
</svg>`;
