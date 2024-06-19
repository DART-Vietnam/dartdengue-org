import { bio } from "./interfaces";

export default function bioAlphaComp(obj1: bio, obj2: bio) {
  return obj1.name < obj2.name ? -1 : obj1.name > obj2.name ? 1 : 0;
}
