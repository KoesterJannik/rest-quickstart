import { loginUser, registerUser } from "@/api/auth/auth";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useLogin() {
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            if(data?.data?.access_token) {
                toast("Login successful. Redirecting to dashboard...");
                localStorage.setItem("access_token", data.data.access_token);
                navigate("/dashboard");
            }
        },
        onError: (data) => {
            toast.error("Invalid email or password.");
        },
    });

    return mutation;


}
