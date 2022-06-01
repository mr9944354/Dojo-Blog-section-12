import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isspending, setIsspending] = useState(true)
    const [error, setError] = useState(null)
     
    useEffect(() => {
        setTimeout(() => {
            fetch('url')
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resources');
           }
           return res.json();
       })
          .then(data => {
              setData(data);
              setIsspending(false);
              setError(null);
          })
                .catch(err => {
                    setIsspending(false);
                    setError(err.message)
            })
           
       }, 2000);
    },[url]);
     return{data,isspending,error}
}
export default useFetch;