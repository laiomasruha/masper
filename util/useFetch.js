import useSWR from 'swr';

const { API_PATH } = process.env;

export function useFetch(url) {
    const APIUrl = `${API_PATH}/api/${url}`;
    console.log(APIUrl)
    const { data, error } = useSWR(APIUrl, async APIUrl => {
        const response = await fetch(APIUrl);
        const data = await response.json();

        return data;
    });

    return { data, error }
}