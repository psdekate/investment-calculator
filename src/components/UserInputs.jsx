export function UserInput({ onChange, userInput }) {
  return (
    <div className="inputs">
      <div className="input">
        <label htmlFor="field">Initial Investment</label>
        <input
          type="number"
          id="field"
          onChange={(e) => onChange("initialInvestment", e.target.value)}
          required
          value={userInput.initialInvestment}
        />
      </div>
      <div className="input">
        <label htmlFor="field">Annual Investment</label>
        <input
          type="number"
          id="field"
          onChange={(e) => onChange("annualInvestment", e.target.value)}
          required
          value={userInput.annualInvestment}
        />
      </div>
      <div className="input">
        <label htmlFor="field">Expected Return</label>
        <input
          type="number"
          id="field"
          onChange={(e) => onChange("expectedReturn", e.target.value)}
          required
          value={userInput.expectedReturn}
        />
      </div>
      <div className="input">
        <label htmlFor="field">Duration</label>
        <input
          type="number"
          id="field"
          onChange={(e) => onChange("duration", e.target.value)}
          required
          value={userInput.duration}
        />
      </div>
    </div>
  );
}
