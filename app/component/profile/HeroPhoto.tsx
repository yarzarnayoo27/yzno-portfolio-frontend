import { yznoPhoto, yznoPhotoBW } from "../../constants";
import Photo from "./Photo";

const HeroPhoto = () => {
  return (
    <div className="flex-1 flex justify-center">
      <Photo
        photoLight={yznoPhoto}
        photoDark={yznoPhotoBW}
        role="Front-End Engineer"
        experience="3+ Years Experience"
      />
    </div>
  );
};

export default HeroPhoto;
