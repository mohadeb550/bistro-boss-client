import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export default function useMenu() {

    const { data: menus, isLoading } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
          const data = await axios.get('/menu.json');
          return data.data;
        }
      })
      return { menus, isLoading };
}
