import { useRef } from "react";
import { Box } from "@mui/material";

// Type definition for the handler functions
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
type FocusEvent = React.FocusEvent<HTMLInputElement>;
type ClipboardEvent = React.ClipboardEvent<HTMLInputElement>;

const VerifyCodeInput = ({
  code,
  setCode,
  status,
}: {
  code: string;
  setCode: Function;
  status: string;
}) => {
  // Refs to control each digit input element
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Handle input
  function handleInput(e: InputEvent, index: number) {
    const input = e.target;
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    // Update code state with single digit
    const newCode = [...code];
    // Convert lowercase letters to uppercase
    if (/^[a-z]+$/.test(input.value)) {
      const uc = input.value.toUpperCase();
      newCode[index] = uc;
      inputRefs[index].current!.value = uc;
    } else {
      newCode[index] = input.value;
    }
    setCode(newCode.join(""));

    input.select();

    if (input.value === "") {
      // If the value is deleted, select previous input, if exists
      if (previousInput) {
        previousInput.current!.focus();
      }
    } else if (nextInput) {
      // Select next input on entry, if exists
      nextInput.current!.select();
    }
  }

  // Select the contents on focus
  function handleFocus(e: FocusEvent) {
    e.target.select();
  }

  // Handle backspace key
  function handleKeyDown(e: KeyboardEvent, index: number) {
    const input = e.target as HTMLInputElement;
    const previousInput = inputRefs[index - 1];

    if ((e.key === "Backspace" || e.key === "Delete") && input.value === "") {
      e.preventDefault();
      const newCode = code.slice(0, index) + code.slice(index + 1);
      setCode(newCode);
      if (previousInput) {
        previousInput.current!.focus();
      }
    }
  }

  // Capture pasted characters
  const handlePaste = (e: ClipboardEvent) => {
    const pastedCode = e.clipboardData.getData("text");
    if (pastedCode.length === 6) {
      setCode(pastedCode);
      inputRefs.forEach((inputRef, index) => {
        if (inputRef.current) {
          inputRef.current.value = pastedCode.charAt(index);
        }
      });
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <input
          style={{
            width: 25,
            padding: 3,
            paddingTop: 7,
            paddingBottom: 7,
            textAlign: "center",
            backgroundColor: status === "danger" ? "#FB9999" : "#FFFFFF",
            borderRadius: 2,
            border: status === "danger" ? "none" : "1px solid grey",
          }}
          key={index}
          onChange={(e) => handleInput(e, index)}
          ref={inputRefs[index]}
          autoFocus={index === 0}
          onFocus={handleFocus}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
        />
      ))}
    </Box>
  );
};

export default VerifyCodeInput;
