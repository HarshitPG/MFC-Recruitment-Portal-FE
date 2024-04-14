import React, { useState } from "react";
import "../styles/ForgotPass2.css"; // Import custom CSS for styling

const ResetPassword: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState<string>("");

  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate password length
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Reset password and complete process
    onReset();
  };

  return (
    <div className="reset-password-container">
      <h2 className="reset-password-heading">Reset Password</h2>
      <form onSubmit={handleResetPassword} className="reset-password-form">
        <div className="form-group">
          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setError(""); // Clear error message when input changes
            }}
            className="form-input"
            required
          />
          {error && <p className="error-message">{error}</p>}
        </div>

        <button type="submit" className="reset-password-button">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
