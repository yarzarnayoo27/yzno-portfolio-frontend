"use client";
import TypingLoop from "../component/profile/TypingLoop";
import { Mail } from "lucide-react";
import Technologies from "../component/profile/Technologies";
import HeroPhoto from "../component/profile/HeroPhoto";
import ProfileButton from "../component/profile/ProfileButton";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Profile = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
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
              Front-End Engineer at{" "}
              <a
                href="https://www.abank.com.mm/"
                className={`relative group`}
              >
                <span
                  className={`${
                    theme === "dark" ? "text-[#eab308]" : "text-[#a855f7]"
                  } underline`}
                >
                  A Bank
                </span>
                <span
                  className={`
                              absolute left-1/2 -translate-x-1/2 -top-7 
                              whitespace-nowrap rounded px-2 py-1 
                              opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 
                              transition-all duration-300
                              text-sm shadow-md
                              ${theme === "dark" ? "bg-slate-900" : "bg-white"}
                            `}
                >
                  Visit the official A Bank website
                </span>
              </a>
              , specializing in React, Next.js, Redux, and modern web
              technologies.
            </p>
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
            <ProfileButton href="mailto:yarzarnayoo27@gmail.com">
              Hire me
            </ProfileButton>
            <ProfileButton variant="filled" icon={<Mail size={18} />} href="/yzno_resume.pdf">
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
