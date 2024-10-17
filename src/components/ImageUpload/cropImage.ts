import { createImage, getRadianAngle } from './utils';

export const getCroppedImg = async (imageSrc: string | null, croppedAreaPixels: any, rotation = 0) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D ;

  const maxSize = Math.max(image?.width, image?.height);
  canvas.width = maxSize;
  canvas.height = maxSize;

  // Rotate image
  ctx.translate(maxSize / 2, maxSize / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.translate(-maxSize / 2, -maxSize / 2);

  ctx.drawImage(
    image,
    0,
    0
  );

  const data = ctx.getImageData(0, 0, maxSize, maxSize);

  // Setcanvas
  canvas.width = croppedAreaPixels.width;
  canvas.height = croppedAreaPixels.height;

  // Paste image to canvas
  ctx?.putImageData(
    data,
    Math.round(-croppedAreaPixels.x),
    Math.round(-croppedAreaPixels.y)
  );

  // get image data URL
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob);
    }, 'image/jpeg');
  });
};

export default getCroppedImg;
