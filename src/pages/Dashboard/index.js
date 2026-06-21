import {useEffect,useState} from 'react'
import Cookies from 'js-cookie'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Overview from '../../components/Overview'
import ServiceSummary from '../../components/ServiceSummary'
import ReferralShare from '../../components/ReferralShare'
import ReferralTable from '../../components/ReferralTable'

import './index.css'

const Dashboard = () =>{

    const [dashboardData,setDashboardData]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState('')

    useEffect(()=>{
        const getDashboardData=async()=>{
            const token=Cookies.get('jwt_token')
            const url='https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals'
            const options={
                method:'GET',
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            }

            try{
                const response=await fetch(url,options)
                const data=await response.json()
                if(response.ok){
                    setDashboardData(data.data)
                }
                else{
                    setError(data.message||'Failed to fetch data')
                }
            }
            catch(error){
                setError('Something went wrong')
            }
            setIsLoading(false)
        }
        getDashboardData()
    },[])

    const renderContent=()=>{
        if(isLoading){
            return (
            <div className="Loading-container">
                <p>Loading...</p>
            </div>
            )
        }

        if(error !== ''){
            return (
                <div className="error-container">
                    <p>{error}</p>
                </div>
            )
        }
        if (!dashboardData) {
        return <p>No data available</p>
        }
        const {metrics,serviceSummary,referral,referrals}=dashboardData

        return (
            <>
            <div className="dashboard-header">
                <h1 className="dashboard-heading">
                    Referral Dashboard
                </h1>
                <p className="dashboard-description">
                    Track you referrals ,earnings and partner activity in on place.
                </p>
            </div>
        <Overview metrics={metrics} />
        <ServiceSummary serviceSummary={serviceSummary} />
         <ReferralShare referral={referral} />
        <ReferralTable referrals={referrals} />
            </>
        )

    }
    return (
        <>
            <Navbar />

            <div className="dashboard-container">
                {renderContent()}
            </div>

            <Footer />
        </>
    )
}

export default Dashboard