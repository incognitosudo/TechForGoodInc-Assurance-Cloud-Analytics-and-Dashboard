// import useSWR from "swr";

export function RetrieveFromDatabase() {
    // const { data, error } = useSWR('url', fetcher)

    // return { data };

    var test = {
        1021938: {
            "Incident Date": "December 31, 2017",
            "State": "Alabama",
            "City Or County": "Selma",
            "Address": "1700 block of Water Ave",
            "# Killed": 0,
            "# Injured": 2,
            "Operations": "N/A"
        },
        1021362: {
            "Incident Date": "December 31, 2017",
            "State": "Texas",
            "City Or County": "Kilgore",
            "Address": "1910 Meadowgreen Dr",
            "# Killed": 1,
            "# Injured": 0,
            "Operations": "N/A"
        },
        1018010: {
            "Incident Date": "December 31, 2017",
            "State": "Alabama",
            "City Or County": "Huntsville",
            "Address": "1409 Lancewood Dr NW",
            "# Killed": 0,
            "# Injured": 1,
            "Operations": "N/A"
        }
    };

    return test;
}