import {useEffect,useState} from 'react'

import {Link,useParams} from 'react-router-dom'
import Cookies from 'js-cookie'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './index.css'

const ReferralDetails=()=>{
    const {id}=useParams()

    const [referral,setReferral]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    const [errorMsg,setErrorMsg]=useState('')

    useEffect(()=>{
        const getReferralDetails=async()=>{
            const token=Cookies.get('jwt_token')
            console.log('Referral ID:', id)
            const url = `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?id=${id}`

            const options={
                method:'GET',
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            }
            try{
                const response=await fetch(url,options)
                console.log('Status',response.status)
                const data=await response.json()
                console.log('DATA', JSON.stringify(data, null, 2))

               if (response.ok) {
                const selectedReferral = data.data.referrals.find(
                each => each.id === parseInt(id)
                )
                setReferral(selectedReferral)
                }
                else{
                    setErrorMsg(data.message||'Referral not found')
                }
            }
            catch(error){
                console.log(error)
                setErrorMsg(error.message)
            }
            setIsLoading(false)
        }
        getReferralDetails()
    },[id])

    const renderContent=()=>{
        if(isLoading){
            return <p>Loading...</p>
        }
        if(errorMsg!==''){
            return (
                <div className="error-container">
                    <h1>Referral not found</h1>
                </div>
            )
        }
        if (!referral) {
            return (
            <div className="error-container">
                <h1>Referral not found</h1>
            </div>
        )
        }

        return(
            <div className="details-card">
                <Link to="/" className="back-link">
                        ←Back to dashboard
                </Link>
                <h1 className="details-heading">
                    Referral Details
                </h1>
                <h2 className="partner-name">
                    {referral.name}
                </h2>
                <div className="details-grid">
                    <div className="details-item">
                        <p className="detail-label">
                            Referral ID
                        </p>
                        <h3>{referral.id}</h3>
                    </div>
                    <div className="details-item">
                        <p className="detail-label">
                            Service Name
                        </p>
                        <h3>{referral.serviceName}</h3>
                    </div>
                    <div className="details-item">
                        <p className="detail-label">
                            Date
                        </p>
                        <h3>{referral.date}</h3>
                    </div>
                    <div className="detail-item">
                        <p className="detail-label">Profit</p>
                        <h3>
                         {new Intl.NumberFormat('en-US', {
                             style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 0,
                        }).format(referral.profit)}
                        </h3>
                      </div>
                </div>
                
            </div>
        )
    }

    return (

        <>
        <Navbar/>
        <div className='details-container'>
            {renderContent()}
        </div>
        <Footer/>
        </>
    )

}

export default ReferralDetails