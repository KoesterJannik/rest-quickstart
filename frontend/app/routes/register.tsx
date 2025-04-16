import PublicLayout from "@/components/layouts/public-layout";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register" },
    { name: "description", content: "Register" },
  ];
}

export default function Register() {
  return <PublicLayout>Home</PublicLayout>;
}
