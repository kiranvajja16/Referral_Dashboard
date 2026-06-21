import './index.css'

const Overview = props =>{
    const {metrics}=props

    return (
        <section className="overview-section">
            <h2>Overview</h2>

            <div className="metrics-container">
                {metrics.map(each=>(
                    <div key={each.id} className="metric-card">
                        <h3>{each.title}</h3>
                        <p>{each.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Overview