import React, {useEffect, useState} from 'react';
import axios from 'axios';

export async function AddressToCoordinates( address ) {
    const [data, setData] = useState();
    var res;
        
    useEffect(() => {

        const baseUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaW5jb2duaXRvYnVyaXRvIiwiYSI6ImNrcmdyajlibDVuajEyeHF1Nnh3emp3Y2EifQ.YQJ1WIZtPqiJhV6635h0Vg`

        axios.get(baseUrl).then(function(response) {
            res = response.data.features[0].geometry.coordinates;
        });

    }, [])

    return (res)
}