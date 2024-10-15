// convert degrees => radians
export const getRadianAngle = (degreeValue: number) => {
  return (degreeValue * Math.PI) / 180;
};

// Create image from URL
export const createImage = (
  url: string | ArrayBuffer | null
): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // !For CORS
    image.src = url as string;
  });
