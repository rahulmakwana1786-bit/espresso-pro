import { useEffect } from "react";
import CaseStudies from "../components/CaseStudies.jsx";

export default function CaseStudiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#fbf8f3] min-h-screen pt-[120px] pb-20">
      <CaseStudies />
    </div>
  );
}
