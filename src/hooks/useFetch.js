import { useState } from 'react';

const useFetch = (url = '', options = {}) => {
    const [data, setData] = useState(null);
    if (!data) {
        const getData = async () => {
            const blob = await fetch(url, options);
            const fetched = await blob.json();
            setData(fetched.base_experience);
        }
        getData();
    }
    return [data, setData];
}

export default useFetch;






// const options = {
    //     method: 'POST',
    //     mode: 'cors',
    //     cache: 'no-cache',
    //     credentials: 'same-origin',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     redirect: 'follow',
    //     referrerPolicy: 'no-referrer',
    //     body: JSON.stringify("insert data blob here")
    // };
