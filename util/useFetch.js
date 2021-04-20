import useSWR from 'swr';

export function useFetch(url) {
    const APIUrl = `api/${url}`;
    console.log(APIUrl)
    const { data, error } = useSWR(APIUrl, async APIUrl => {
        const response = await fetch(APIUrl);
        const data = await response.json();

        return data;
    });

    return { data, error }
}