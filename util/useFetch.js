import useSWR from 'swr';

export function useFetch(url) {    
    const { data, error } = useSWR(url, async url => {
        const APIUrl = `${process.env.NEXT_PUBLIC_API_PATH}/api/${url}`;
        const response = await fetch(APIUrl);
        const data = await response.json();

        return data;
    });

    return { data, error }
}