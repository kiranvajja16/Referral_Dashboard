import {useNavigate} from 'react-router-dom'

import './index.css'

const ReferralTable = props => {
  const {referrals} = props
  const navigate = useNavigate()

  return (
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
        {referrals.map(each => {
          console.log(each)
          return (
          <tr
            key={each.id}
            className="table-row"
            onClick={() =>
               navigate(`/referral/${each.id}`, {
              state: {referral: each},
            })
         }
>
            <td>{each.name}</td>
            <td>{each.serviceName}</td>
            <td>{each.date}</td>
            <td>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              }).format(each.profit)}
            </td>
          </tr>
        )})}
      </tbody>
    </table>
  )
}

export default ReferralTable