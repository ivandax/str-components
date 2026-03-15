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
    setText(onlyNumbers);
  };

  return (
    <input className="numberTextInput" value={text} onChange={handleChange} />
  );
}
