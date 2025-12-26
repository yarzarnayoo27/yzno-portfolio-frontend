import Image from "next/image"
import { yznoPhoto, yznoPhotoBW } from "./constants";

export default function Home() {
  return (
    <>
      {/* Home Section */}
      <div className="text-black">

        <Image src={yznoPhoto} width={250} height={250} alt="Owner's Photo" />
        <Image src={yznoPhotoBW} width={250} height={250} alt="Owner's Photo" />
        <h2>Hi there, I'm</h2>
        <h1>Yar Zar Nay Oo</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          voluptatem itaque animi distinctio provident doloremque, minima iure
          non recusandae sapiente praesentium. Aut, ullam? Odio quae quisquam
          commodi suscipit necessitatibus earum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          debitis enim placeat incidunt quae, molestiae nam. Debitis quod, error
          perspiciatis sapiente facilis repellendus laboriosam optio laborum
          magnam exercitationem mollitia sit.
        </p>
        <button>
          Hello
        </button>
        <button>
          Contact Me
        </button>
      </div>

      {/* About Section */}
      <div></div>

      {/* Project Section */}
      <div></div>

      {/* Experience Section */}
      <div></div>

      {/* Education Section */}
      <div></div>
    </>
  );
}
