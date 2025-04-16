import PublicLayout from "@/components/layouts/public-layout";
import type { Route } from "./+types/home";
import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "@/components/forms/login-form";
import PrivateLayout from "@/components/layouts/private-layout";
import { useUserStore } from "@/stores/userUserStore";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Dashboard" },
  ];
}

export default function Dashboard() {
  const {user} = useUserStore();
  return (
    <PrivateLayout>
      <div>
        <h1>Dashboard</h1>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </PrivateLayout>
  )
}
