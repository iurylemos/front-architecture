import { useRecoilValue } from "recoil";
import { charCountSelector } from "@/subdomains/home/selectors";

export function CharacterCount(): JSX.Element {
  const count = useRecoilValue(charCountSelector);

  return <>Character Count: {count}</>;
}
