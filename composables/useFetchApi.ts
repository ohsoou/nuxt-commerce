
import {useFetch, useRuntimeConfig} from "#app";

export const useFetchApi: typeof useFetch = (request, opts?) => {
    const config = useRuntimeConfig()

    return useFetch(request, { baseURL: config.public.baseURL, ...opts})
}