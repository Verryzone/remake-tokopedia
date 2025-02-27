import { Axios } from "axios";
import { headers } from "next/headers";

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        "X-Requested-With":"XMLHttpRequest"
    },
    withCredentials: true
})

export default axios;