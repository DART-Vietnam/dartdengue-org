import pub from "./pub";

export default function dateComp(obj1: pub, obj2: pub) {
  let date1 = new Date(obj1.datetime).getTime();
  let date2 = new Date(obj2.datetime).getTime();

  return date2 - date1;
}
