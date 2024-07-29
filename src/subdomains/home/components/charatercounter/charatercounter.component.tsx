import { CharacterCount } from "@/subdomains/home/components/charactercount/charactercount.component";
import { TextInput } from "@/subdomains/home/components/textinput/textinput.component";

export function CharacterCounter(): JSX.Element {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
