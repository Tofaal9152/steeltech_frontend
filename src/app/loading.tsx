import { imagePath } from "@/constants/imagePath";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center h-screen bg-[#fbfefb]">
      <div className="flex items-center justify-center h-screen w-full">
        {/* loading gif */}
        <Image
          src={imagePath.loading}
          alt="Loading..."
          width={800} // Adjust to match your GIF's actual width
          height={800} // Adjust to match your GIF's actual height
          priority // Prioritizes loading this image above others
          unoptimized // Prevents Next.js from breaking animated GIFs

        />
      </div>
    </div>
  );
};

export default Loading;
