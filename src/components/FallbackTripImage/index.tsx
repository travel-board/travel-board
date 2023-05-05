import fallbackURL from "../../assets/fallback.jpg";
import { StyledImg } from "./style";

interface ImgProps {
  alt: string;
}

export const FallbackTripImage = ({ alt }: ImgProps) => (
  <StyledImg src={fallbackURL} alt={alt} />
);
