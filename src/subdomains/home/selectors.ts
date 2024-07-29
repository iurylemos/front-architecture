import { selector } from "recoil";
import { textStateAtom } from "./atoms";

export const charCountSelector = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textStateAtom);

    return text.length;
  },
});
