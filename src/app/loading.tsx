import { imagePath } from "@/constants/imagePath";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-full ">
      {/* loading gif */}
      <img src={imagePath.loading} alt="Loading..." />
    </div>
  );
}
