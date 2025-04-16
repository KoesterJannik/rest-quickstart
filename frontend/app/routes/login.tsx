import PublicLayout from "~/components/layouts/public-layout";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Login" },
  ];
}

export default function Login() {
  return <PublicLayout>Home</PublicLayout>;
}
