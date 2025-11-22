import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component scrolls the window to the top whenever the route changes
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top with smooth effect
  }, [pathname]);

  return null;
}
