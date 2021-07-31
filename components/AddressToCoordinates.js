import React, {useEffect, useState} from 'react';
import axios from 'axios';

function AddressToCoordinates() {
    const [data, setData] = useState();

    
    useEffect(() => {
        
        const location = 'springfield';

        const baseUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiaW5jb2duaXRvYnVyaXRvIiwiYSI6ImNrcmdyajlibDVuajEyeHF1Nnh3emp3Y2EifQ.YQJ1WIZtPqiJhV6635h0Vg`

        axios.get(baseUrl).then(function(response) {
            console.log(response.data)
        });

    }, [])

    return (
        <div>
    
        </div>
    )
}

export default AddressToCoordinates
