import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        setTimeout(() => {
            fetch(url)
            .then(resp => {
                if(!resp.ok){
                    throw Error('could not fetch data');
                }
                return resp.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        },1000);
    }, []);

    return {data, isPending, error};
}

export default useFetch;