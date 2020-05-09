import React from 'react'
import { Link } from 'react-router-dom';

function Err404(props) {
    return (
        <div  >

            <img src="/404-error.png" alt="error 404" width="100%" />

            <p style={{ textAlign: "center" }}>
                <Link to="/">Go to Home </Link>
            </p>
        </div>
    )
}
export default Err404