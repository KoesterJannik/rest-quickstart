import { getUserDetails } from "@/api/auth/auth";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useUser() {
   
    const query = useQuery({
        queryKey: ["user"],
        queryFn: getUserDetails,
        retry:false
    });

    return query;


}
