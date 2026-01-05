import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function withAdminAuth(WrappedComponent) {
  return function ProtectedPage(props) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        router.replace("/auth");
        return;
      }

      setAuthorized(true);
    }, []);

    if (!authorized) {
      return null; // or loader
    }

    return <WrappedComponent {...props} />;
  };
}
