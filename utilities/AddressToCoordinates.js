import React, {useEffect, useState} from 'react';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (...args) => axios.get(...args).then(function(response) {
    return response;
});

export function AddressToCoordinates(address) {
    const { data, error } = useSWR(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaW5jb2duaXRvYnVyaXRvIiwiYSI6ImNrcmdyajlibDVuajEyeHF1Nnh3emp3Y2EifQ.YQJ1WIZtPqiJhV6635h0Vg`, fetcher);

    if (error) {
        return (
            <h1> {error} </h1>
        )
    };

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}