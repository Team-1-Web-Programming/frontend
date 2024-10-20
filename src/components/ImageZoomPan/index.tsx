import Zoom from "react-medium-image-zoom";
import PannableImage from "./Pannable";
import "react-medium-image-zoom/dist/styles.css";

const ZoomPanImage = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) => {
  return (
    <Zoom>
      <PannableImage src={src} alt={alt} width={width} height={height} />
    </Zoom>
  );
};

export default ZoomPanImage;
