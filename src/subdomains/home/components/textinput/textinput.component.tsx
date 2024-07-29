"use client";

import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { textStateAtom } from "../../atoms";

export function TextInput(): JSX.Element {
  const [text, setText] = useRecoilState(textStateAtom);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
