import Galary from "@/features/marketting/_pages/galary/ui/Galary";
import { Loader } from "lucide-react";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader className="animate-spin" />}>
      <Galary />
    </Suspense>
  );
};

export default page;
