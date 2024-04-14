import React, { useState } from "react";
import "../styles/ForgotPass1.css"; // Import custom CSS for styling

interface ForgotPasswordStep1Props {
  onNextStep: () => void;
}

const ForgotPasswordStep1: React.FC<ForgotPasswordStep1Props> = ({
  onNextStep,
}) => {
  const [email, setEmail] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");
  const [error, setError] = useState<string>("");

  const validateRegisterNumber = (input: string): boolean => {
    const registerNumberRegex = /^(21|22|23)[A-Za-z]{3}\d{4}$/;
    return registerNumberRegex.test(input);
  };

  const validateEmail = (input: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@vitstudent\.ac\.in$/;
    return emailRegex.test(input);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateRegisterNumber(registerNumber)) {
      setError(
        "Invalid register number format. Please enter a valid register number."
      );
      return;
    }

    if (!validateEmail(email)) {
      setError("Email must be from vitstudent.ac.in domain.");
      return;
    }

    // Clear any previous error
    setError("");

    // Proceed to the next step if input is valid
    onNextStep();
  };

  return (
    <div className="maindivtag">
      <h2>Forgot Password - Step 1</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="labelcolor" htmlFor="email">
            Email
          </label>
          <input
            className="nes-input is-dark text-white outline-none"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="labelcolor" htmlFor="registerNumber">
            Register Number
          </label>
          <input
            className="nes-input is-dark text-white outline-none"
            type="text"
            id="registerNumber"
            value={registerNumber}
            onChange={(e) => setRegisterNumber(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button className="Nextbutton" type="submit">
          Next
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordStep1;
