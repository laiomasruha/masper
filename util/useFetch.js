import useSWR from 'swr';

const { NEXT_PUBLIC_VERCEL_URL } = process.env;

export function useFetch(url) {
    const APIUrl = `${NEXT_PUBLIC_VERCEL_URL}/api/${url}`;
    console.log(APIUrl);
    const { data, error } = useSWR(APIUrl, async APIUrl => {
        const response = await fetch(APIUrl);
        const data = await response.json();

        return data;
    });

    return { data, error }
}
