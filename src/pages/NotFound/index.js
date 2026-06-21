import {Link} from 'react-router-dom'

import './index.css'

const NotFound=()=>{
    return(
        <div className='not-found-container'>
            <h1 className='not-found-heading'>
                404
            </h1>
            <p className='not-found-description'>
                Page not found
            </p>
            <Link to="/" className='back-home-link'>
                Back to Dashboard
            </Link>
        </div>
    )
}

export default NotFound