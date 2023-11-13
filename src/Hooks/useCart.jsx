import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


export default function useCart() {
    const axiosSecure = useAxios();
    const { currentUser } = useAuth();

    const { data = [], refetch} = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${currentUser.email}`);
            return res.data;
        }
    })
    return [refetch, data]
}
