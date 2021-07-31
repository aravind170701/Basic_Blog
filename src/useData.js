import { useEffect, useState } from "react";

const useData = (url) => {

    // React Hook
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState("Loading..!");
    //

    useEffect(() =>{

        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, {signal : abortController.signal})
            .then((response) => {
                return response.json();
            })
            .then((op) =>{
                setData(op);
                setLoading(false);
                console.log(op);
            })
            .catch((err) =>{
                if(!abortController.signal.aborted)
                    setLoading("Error Loading Data..!");
                else
                    console.log(err);
            })
        }, 1000);
            
        
        return () => abortController.abort();
    }, [url]);

    return {data, loading};
}
 
export default useData;