import './index.css'

const ServiceSummary=props=>{
    const {serviceSummary}=props

    return (
        <div className="service-summary-card">
            <h2 className="service-summary-heading">
                Service Summary
            </h2>
            <div className="summary-grid">
                <div className="service-summary-item">
                    <p>
                        Service
                    </p>
                    <h3>{serviceSummary.service}</h3>
                </div>
                <div className="service-summary-item">
                    <p>Your Referrals</p>
                    <h3>{serviceSummary.yourReferrals}</h3>
                </div>
                <div className="service-summary-item">
                    <p>Active Referrals</p>
                    <h3>{serviceSummary.activeReferrals}</h3>
                </div>
                <div className="service-summary-item">
                    <p> Total Ref. Earnings</p>
                    <h3>{serviceSummary.totalRefEarnings}</h3>
                </div>
            </div>      
        </div>
    )
}

export default ServiceSummary