import axios from "axios";
import { useRouter } from "next/router"
import { useEffect } from "react";
import useSWR, { mutate } from "swr";

export const useAuth = ({middlewware} = {}) => {
    const router = useRouter();

    // loading
    const [isLoading, setIsLoading] = useState(true);
    // user
    const {data: user, error, mutate} = useSWR("/api/v1/user", 
        () => axios
        .get("/api/v1/user")
        .then(response => response.data.data)
        .catch(error => {
            if(error.response.status !== 409)
                throw error
        })
    )

    // csrf
    const csrf = () => axios.get("/sanctum/csrf-cookie");

    // login
    const login = async({setErrors, ...props}) => {
        setErrors([]);
        await csrf();
        axios
            .post("/login", props)
            .then( () => mutate() && router.push("dashboard"))
            .catch(error => {
                if(error.response.status != 442) throw error

                setErrors(Object.values(error.response.data.error).flat())
            })
    }

    // logout
    const logout = async () => {
        await axios.post("/logout")

        mutate(null)

        router.push("/")
    }

    useEffect(() => {
      if(user || error) {
        setIsLoading(false)
      }

      if(middlewware == 'guest' && user) router.push("/");
      if(middlewware == "auth" && error) router.push("/login")
    
      return () => {
        second
      }
    }, [third])
    


    return {
        user,
        csrf,
        isLoading,
        login,
        logout,
    }
}
