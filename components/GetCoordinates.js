import { AddressToCoordinates } from "../utilities/AddressToCoordinates";

function GetCoordinates() {
    const { data, isLoading, isError } = AddressToCoordinates("11211 Mission Walk St Parker CO");

    if (isLoading) {
        return (
            <div>
                <h1>LOADING!</h1>
            </div>
        )
    }
    if (isError) {
        return (
            <div>
                <h1>Error!</h1>
            </div>
        )
    }
    if (!isLoading) {
        return (
            <div>
                <h1>Your Coordinates Are: {data.data.features[0].geometry.coordinates}</h1>
            </div>
        );
    }
}

export default GetCoordinates;