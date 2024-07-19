import { Github, Linkedin, Instagram, Twitter, Unlink2 } from "lucide-react";

export const LINKS = [
  { href: "/", label: "Me" },
  { href: "/experience", label: "Experience" },
  // { href: "/projects", label: "Projects" },
];

export const PROFILES = [
  {
    title: "GitHub",
    url: "https://github.com/TunahanOrhan",
    icon: <Github size={16} strokeWidth={1} />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/tunahan-orhan/",
    icon: <Linkedin size={16} strokeWidth={1} />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/tunahanorh/",
    icon: <Instagram size={16} strokeWidth={1} />,
  },
  {
    title: "Twitter",
    url: "https://x.com/tunahanorh",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
  },
  // {
  //   title: "Read.cv",
  //   url: "https://read.cv/tunahanorhan",
  //   icon: <Unlink2 size={16} />,
  // },
];

export const PHOTOS = [
  {
    src: "/img-1.avif",
  },
  {
    src: "/img-2.avif",
  },
  {
    src: "/img-3.avif",
  },
  {
    src: "/img-4.avif",
  },
  {
    src: "/img-5.avif",
  },
];
