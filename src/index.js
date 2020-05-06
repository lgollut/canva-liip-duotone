const { imageHelpers } = window.canva;
const canva = window.canva.init();

canva.onReady(async (opts) => {
  const img = await imageHelpers.toImageElement(opts.image);
  document.body.appendChild(img);
});
