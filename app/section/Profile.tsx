import TypingLoop from "../component/profile/TypingLoop";
import { Mail } from "lucide-react";
import Technologies from "../component/profile/Technologies";
import HeroPhoto from "../component/profile/HeroPhoto";
import ProfileButton from "../component/profile/ProfileButton";

const Profile = () => {
  return (
    <div className="px-0">
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4">
        <HeroPhoto />
        <div className="mx-[10%] md:mx-0 flex-1 flex flex-col items-start">
          <div className="pl-[10%] mt-3 md:pl-0 mt-0">
            <h2 className="text-2xl">Hi there, I'm</h2>
            <TypingLoop />
          </div>

          <div className="mt-10 ml-10 mb-5 flex flex-col gap-5">
            <p>
              Designing modern, responsive, interactive, and accessible UIs
              using MVC, MVVM, and Clean Architecture patterns.
            </p>
            <p>
              Building Scalable and Maintainable Backend Architectures with
              RESTful API Design and Microservices.
            </p>
          </div>
          <div className="w-full flex gap-5 items-center justify-center md:justify-start">
            <ProfileButton onClick={() => alert("Hire me clicked")}>
              Hire me
            </ProfileButton>
            <ProfileButton variant="filled" icon={<Mail size={18} />}>
              Resume
            </ProfileButton>
          </div>
          <div className="flex justify-center my-6 w-full">
            <div className="h-[0.1px] w-full bg-[#64748B] opacity-15"></div>
          </div>
          <div>
            <p className="">Core Technologies:</p>
            <Technologies />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;