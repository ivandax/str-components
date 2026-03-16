import { useState } from "react";
import "./month-input.css";

export function MonthInput() {
  const [raw, setRaw] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setRaw(onlyNumbers);
  };

  const format = (numbers: string) => {
    const final: string[] = [];
    const chars = numbers.split("");
    for (let i = 0; i < chars.length; i++) {
      final.push(chars[i]);
      if (i === 1) {
        final.push("/");
      }
    }
    return final.join("");
  };

  return (
    <input className="monthInput" value={format(raw)} onChange={handleChange} />
  );
}
