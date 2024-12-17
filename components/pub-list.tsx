import dateComp from "@/util/dateComp";
import { pub } from "@/util/interfaces";

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
    date: "Nov 28, 2023",
    datetime: "2023-11-28",
    author: {
      name: "Phong Hong",
      imageUrl: "/phong-hong.jpeg",
    },
  },
  {
    title:
      "Skilful probabilistic medium‐range precipitation and temperature forecasts over Vietnam for the development of a future dengue early warning system",
    href: "https://doi.org/10.1002/met.2222",
    category: { name: "Paper", href: "#", color: colorCode["paper"] },
    description: "Meteorological Applications",
    date: "Aug 2024",
    datetime: "2024-8-07",
    author: {
      name: "Lucy Main",
      imageUrl: "",
    },
  },
];

posts.sort(dateComp);

export default posts;
