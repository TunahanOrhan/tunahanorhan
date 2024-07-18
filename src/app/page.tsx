import { PHOTOS, PROFILES } from "@/lib/constants";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="flex items-center gap-10 flex-col lg:flex-row min-h-72">
        <div className="flex flex-col flex-1 gap-10">
          <Image
            src="/me.avif"
            alt="Tunahan Orhan"
            width={64}
            height={64}
            className="rounded-full w-16 h-16 object-cover mx-auto lg:mx-px"
            loading="lazy"
          />
          <span className="text-xl md:text-3xl text-nowrap">
            Hello! I&apos;m Tunahan Orhan
          </span>
        </div>
        <div className="flex flex-col flex-1 gap-10">
          <span className="text-xl md:text-3xl text-nowrap text-center lg:text-left">
            A software developer based in <br /> Istanbul, Turkey
          </span>
          <div className="flex gap-4 mx-auto lg:mx-px">
            {PROFILES.map((profile) => (
              <a
                key={profile.title}
                href={profile.url}
                className="gap-4 border border-[#a3a3a3] inline-block p-2 rounded-full transition hover:scale-110 hover:shadow-lg"
                target="_blank"
              >
                {profile.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8">
          {PHOTOS.map((photo: any, index: number) => (
            <div
              className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl ${
                index % 2 === 0 ? "rotate-2" : "-rotate-2"
              }`}
              key={photo.title}
            >
              <Image
                src={photo.src}
                alt="Photo"
                width={200}
                height={200}
                className={`absolute inset-0 w-full h-full object-cover`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
