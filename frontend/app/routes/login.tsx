import PublicLayout from "@/components/layouts/public-layout";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Login" },
  ];
}

export default function Login() {
  return <PublicLayout>

    <h1 className="text-red-500">
      Login
    </h1>
  </PublicLayout>;
}
