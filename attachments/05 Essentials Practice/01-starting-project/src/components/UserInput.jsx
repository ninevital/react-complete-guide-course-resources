export default function UserInput({data, handleInputChange}) {
    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">
                        Initial Investment
                    </label>
                    <input id="initialInvestment" type="number" value={data.initialInvestment} onChange={handleInputChange} required />
                </p>
                <p>
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input id="annualInvestment" type="number" value={data.annualInvestment} onChange={handleInputChange} required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="eexpectedReturn">Expected Return</label>
                    <input id="expectedReturn" type="number" value={data.expectedReturn} onChange={handleInputChange} required />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input id="duration" type="number" value={data.duration} onChange={handleInputChange} required />
                </p>
            </div>
        </div>
    );
}
