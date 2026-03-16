import { useState } from "react";
import "./number-text-input.css";

export function NumberTextInput() {
  // keeping state inside for this test
  // but should receive as props

  const [text, setText] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setText(onlyNumbers.slice(0, 16));
  };

  const format = (numbers: string) => {
    const final: string[] = [];
    const chars = numbers.split("");
    for (let i = 0; i < chars.length; i++) {
      final.push(chars[i]);
      if ((i + 1) % 4 === 0 && i !== chars.length - 1) {
        final.push(" ");
      }
    }
    return final.join("");
  };

  return (
    <input
      className="numberTextInput"
      value={format(text)}
      onChange={handleChange}
    />
  );
}
