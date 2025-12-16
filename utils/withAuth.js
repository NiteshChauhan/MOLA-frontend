import React from 'react';

export default function withAuth(Component) {
  return function ProtectedPage(props) {
    const [authorized, setAuthorized] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      if (typeof window !== "undefined") {
        setMounted(true);
      }
    }, []);

    React.useEffect(() => {
      if (!mounted) return;

      const token = localStorage.getItem("auth_token");

      if (!token) {
        // Safe client-side redirect (NO useRouter)
        window.location.href = "/auth";
      } else {
        setAuthorized(true);
      }
    }, [mounted]);

    // Prevent SSR render
    if (!mounted || !authorized) {
      return null;
    }

    return <Component {...props} />;
  };
}

