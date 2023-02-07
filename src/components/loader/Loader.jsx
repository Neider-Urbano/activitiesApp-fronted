import React from "react"
import {useEffect, useState} from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loader=()=> {
    let [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 8000);
      },[]
    )
    return(
        <div>
            {
                <ClimbingBoxLoader
                  loading={loading}
                  size={40} 
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  color="#84bad3"
                  speedMultiplier={2}
                />
            }
        </div>
    )
}
export default Loader;