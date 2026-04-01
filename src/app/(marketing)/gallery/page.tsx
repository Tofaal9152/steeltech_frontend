import Galary from "@/features/marketting/_pages/galary/ui/GalaryPage";
import { Loader } from "lucide-react";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader className="animate-spin" />}>
      <div className="bg-gray-100 pt-20">
        <Galary />
      </div>
    </Suspense>
  );
};

export default page;
