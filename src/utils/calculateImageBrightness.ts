export const calculateImageBrightness = (imageUrl: string): Promise<number> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // To handle CORS issues for some images
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(255); // Default to bright if no context
        return;
      }
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const { data } = imageData;

      let r, g, b, avg;
      let colorSum = 0;

      for (let x = 0; x < data.length; x += 4) {
        r = data[x];
        g = data[x + 1];
        b = data[x + 2];

        avg = (r + g + b) / 3;
        colorSum += avg;
      }

      const brightness = colorSum / (data.length / 4);
      resolve(brightness);
    };

    img.onerror = () => resolve(255); // Default to bright on error
  });
};
