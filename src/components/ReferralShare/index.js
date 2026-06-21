import './index.css'

const ReferralShare =props =>{
    const {referral}=props
    const copyLink=()=>{
        navigator.clipboard.writeText(referral.link)
    }
    const copyCode=()=>{
        navigator.clipboard.writeText(referral.code)
    }

    return (
        <div className="referral-share-card">
            <h2>Refer friends and earn more</h2>

            <div className="referral-field">
                <p>Your Referral Link</p>
                <div className="copy-container">
                    <input type="text" value={referral.link}
                    readOnly className="referral-input"/>
                    <button type="button" onClick={copyLink}>
                        Copy
                    </button>
                </div>
            </div>

            <div className="referral-field">
                <p>Your Referral Code</p>
                <div className="copy-container">
                    <input type="text" value={referral.code} readOnly className="referral-input"/>
                    <button type="button" onClick={copyCode}>
                        Copy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReferralShare