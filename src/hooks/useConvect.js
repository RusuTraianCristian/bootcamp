import { useState } from 'react';

const useConvect = () => {
    const [data, setData] = useState(1);
    return [data, setData];
}

export default useConvect;

