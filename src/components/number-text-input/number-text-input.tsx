import { useState } from "react";
import "./number-text-input.css";

export function NumberTextInput() {
  // keeping state inside for this test
  // but should receive as props

  const [text, setText] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    console.log(e.target.value);
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    console.log(onlyNumbers);
    const final: string[] = [];
    for (let i = 0; i < onlyNumbers.length; i++) {
      final.push(onlyNumbers[i]);
      if ((i + 1) % 4 === 0) {
        final.push(" ");
      }
    }
    setText(final.join(""));
  };

  return (
    <input className="numberTextInput" value={text} onChange={handleChange} />
  );
}
