import { registerUser } from "@/api/auth/auth";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useRegister() {
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            if(data?.data?.access_token) {
                toast("Account created successfully. Redirecting to dashboard...");
                localStorage.setItem("access_token", data.data.access_token);
                navigate("/dashboard");
            }
        },
        onError: (data) => {
            toast.error("Please use a different email.");
        },
    });

    return mutation;


}
