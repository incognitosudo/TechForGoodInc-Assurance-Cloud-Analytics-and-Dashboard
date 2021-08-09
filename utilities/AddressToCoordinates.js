import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

// const fetcher = (...args) => fetch(...args).then((response) => response.json());

export async function AddressToCoordinates(address) {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaW5jb2duaXRvYnVyaXRvIiwiYSI6ImNrcmdyajlibDVuajEyeHF1Nnh3emp3Y2EifQ.YQJ1WIZtPqiJhV6635h0Vg`
    );

    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    return error;
  }
}