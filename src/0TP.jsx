import { useEffect, useState, useRef } from "react";

export default function OTP({ otpLength = 6 }) {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);
  if (key === "ArrowLeft") {
    if (index > 0) ref.current[index - 1].focus();
  }
  if (key === "ArrowRight") {
    if (index + 1 < otpFields) ref.current[index + 1].focus();
  }
  console.log(otpFields);
  const handleKeyDown = (e, index) => {
    const key = e.key;
    const copyotpfields = { ...otpFields };
    if (key === "Backspace") {
      copyotpfields[index] = "";
      setOtpFields(copyotpfields);
      if (index > 0) ref.current[index - 1].focus();
      return;
    }
    if (isNaN(key)) {
      return;
    }

    copyotpfields[index] = key;
    if (index + 1 < otpFields) ref.current[index + 1].focus();
    setOtpFields(copyotpfields);
  };

  useEffect(() => {
    ref.current["0"].focus();
  }, []);
  return (
    <div className="container">
      {otpFields.map((value, index) => {
        return (
          <input
            key={index}
            ref={(currentInput) => (ref.current[index] = current)}
            type="text"
            value={value}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
}
