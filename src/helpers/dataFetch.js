import { useEffect, useState } from "react";


//build in caching
const useOukapi = (urlParam) => {

    const [data, setData] = useState({});
    const [url, setUrl] = useState(urlParam);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        
        const fetchContent = async() => {
            setIsError(false);
        

        try {
            const response = await fetch(url);
            if (response.status === 200 ) {
                setData(await response.json())

            }
            
        } catch(error) {
            console.log("any errors? ", error);
            setIsError(true);
        }
    }
        fetchContent();

    }, [url]);
    console.log("any data? ", data)
    return[{data, isError}, setUrl]
    };

    export default useOukapi;