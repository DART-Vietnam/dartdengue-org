import pub from "@/util/pub";
import dateComp from "@/util/dateComp";

const colorCode = {
  abstract: "bg-indigo-100 text-indigo-800",
  paper: "bg-pink-100 text-pink-800",
};

const posts: pub[] = [
  {
    title: "A high-resolution dengue forecasting system in Vietnam",
    href: "https://www.asiadenguesummit.org/wp-content/uploads/6th-Asia-Dengue-Summit-Programme-Book.pdf#page=95",
    category: {
      name: "Abstract",
      href: "#",
      color: colorCode["abstract"],
    },
    description: "Asia Dengue Summit 2023",
    date: "June 15, 2023",
    datetime: "2023-06-15",
    author: {
      name: "Tuyen Huynh Ngoc",
      href: "/team",
      imageUrl: "/tuyen-huynh.jpg",
    },
  },
  {
    title:
      "Reemergence of Cosmopolitan Genotype Dengue Virus Serotype 2, Southern Vietnam",
    href: "https://doi.org/10.3201/eid2910.230529",
    category: { name: "Paper", href: "#", color: colorCode["paper"] },
    description: "Emerging Infectious Diseases",
    date: "Oct 2023",
    datetime: "2023-10-01",
    author: {
      name: "Vi Thuy Tran",
      href: "#",
      imageUrl: "/vi-tran.jpg",
    },
  },
  {
    title:
      "Quantifying the Value of Early Warning System on Dengue Control in Vietnam: A Hybrid ODE-ABM Triple-Diffusion Approach",
    href: "#",
    category: {
      name: "Abstract",
      href: "#",
      color: colorCode["abstract"],
    },
    description:
      "The 12th International Conference on Complex Networks and their Applications",
    date: "Oct 2023",
    datetime: "2023-10-01",
    author: {
      name: "Phong Hong",
      href: "#",
      imageUrl: "/phong-hong.jpeg",
    },
  },
];

posts.sort(dateComp);

export default posts;
