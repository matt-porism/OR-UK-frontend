import { useEffect, useState } from "react";


//build in caching
const useOukapi = (urlParam) => {

    const [data, setData] = useState({});
    const [isError, setIsError] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [url, setUrl] = useState(urlParam);

    useEffect(() => {
        const fetchContent = async() => {
            setIsError(false);
        
            console.log(urlParam)
            //value not set checks call error page

        try {
            const response = await fetch(url);
            if (response.status === 200 ) {
                setData(await response.json())
                setIsFetching(false)

            }
            
        } catch(error) {
            console.log("any errors? ", error);
            setIsError(true);
            setIsFetching(false);
        }
    }
        fetchContent();

    }, [url, urlParam]);
    console.log("any data? ", data)
    return[{data, isError}, isFetching, setUrl]
    };

    export default useOukapi; 