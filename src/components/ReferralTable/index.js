import './index.css'

const ReferralTable=props=>{
    const {referrals}=props

    return(
        <div className="table-card">
            <h2>All referrals</h2>
            <table className="referral-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Profit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        referrals.map(each=>(
                            <tr key={each.id}>
                                <td>{each.name}</td>
                                <td>{each.serviceName}</td>
                                <td>{each.date}</td>
                                <td>{each.profit}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ReferralTable