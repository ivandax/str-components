import { useState } from "react";
import "./month-input.css";

export function MonthInput() {
  const [raw, setRaw] = useState("");
  const [error, setError] = useState<null | string>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setRaw(onlyNumbers.slice(0, 4));
    const month = onlyNumbers.slice(0, 2);
    if (parseInt(month) > 12 || parseInt(month) === 0) {
      setError("Error");
    } else {
      setError(null);
    }
  };

  const format = (numbers: string) => {
    const final: string[] = [];
    const chars = numbers.split("");
    for (let i = 0; i < chars.length; i++) {
      final.push(chars[i]);
      if (i === 1 && i !== chars.length - 1) {
        final.push("/");
      }
    }
    return final.join("");
  };

  return (
    <>
      <input
        className="monthInput"
        value={format(raw)}
        onChange={handleChange}
      />
      {error && <span>Month invalid</span>}
    </>
  );
}
