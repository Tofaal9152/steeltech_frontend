import { imagePathForLanding } from "@/constants/imagePath";
import Image from "next/image";

const features = [
  {
    title: "Premium Stainless Steel",
    description: "Manufactured with highest quality raw materials",
    iconImage: imagePathForLanding.premiumSteelIcon,
  },
  {
    title: "Export Quality",
    description: "Strict adherence to international standards",
    iconImage: imagePathForLanding.exportQualityIcon,
  },
  {
    title: "Rust-Resistant Durability",
    description: "Engineered for the tropical climate of Bangladesh",
    iconImage: imagePathForLanding.rustResistantIcon,
  },
  {
    title: "ISO 9001:2015 Certified",
    description: "Certified for quality management excellence",
    iconImage: imagePathForLanding.isoCertifiedIcon,
  },
];

const projects = [
  {
    title: "Hatirjheel",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQHI6USo8BQSBg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1680160683510?e=1776297600&v=beta&t=cE83hUjbPdh5PvXTU08jOw1iPNZNjV10cz4MYYjWTsU",
  },
  {
    title: "Hazrat Shahjalal Int. Airport",
    image:
      "https://d2u0ktu8omkpf6.cloudfront.net/4951c0f5936563cda82b655106aac23cf5ba1b8d6efdeb7d.jpeg",
  },
  {
    title: "Bangladesh Army Tent Project",
    image: "https://senakalyan.org/dynamic_gallery/1706676717.jpg",
  },
  {
    title: "North South University",
    image: "https://myunigate.com/wp-content/uploads/2025/06/nsu-1024x538.jpeg",
  },
];

const FloatingCompanyIntro = () => {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-white/20 bg-[#d9d8da] px-4 py-8 shadow-xl md:px-8 md:py-12">
      {/* Background */}
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: `url(${imagePathForLanding.companyProfileBgImage})`,
        }}
      />

      {/* Diagonal gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-white/80 via-white/70 to-white/1" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-4  ">
        {/* Top Intro */}
        <div className=" grid gap-6 lg:grid-cols-[1fr_220px] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#2d2d2d] md:text-5xl">
              Bangladesh’s Pioneer in Stainless Steel Piping
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-8 text-[#4a4a4a] md:text-2xl md:leading-10">
              Leading the stainless steel piping industry in Bangladesh for over
              20 years, Steeltech Limited has been manufacturing and exporting
              premium stainless steel pipes since 2003 with a focus on quality,
              integrity, and innovation.
            </p>
          </div>

          <Image
            src={imagePathForLanding.since2003}
            alt="Since 2003"
            width={400}
            height={400}
            className="h-full w-full object-cover brightness-[0.88] contrast-[1.05] saturate-[1.05] transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Features */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-[22px] border border-white/60 bg-white/55 p-5 shadow-md backdrop-blur-sm"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center ">
                  <Image
                    src={item.iconImage}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold leading-7 text-[#ed8c2f] md:text-2xl">
                  {item.title}
                </h3>
              </div>

              <p className="text-base leading-7 text-[#444] md:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-2xl font-bold text-[#2d2d2d] md:text-4xl">
            Trusted by Landmark Projects Across Bangladesh
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative h-62.5 overflow-hidden rounded-[18px] border border-white/70 shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
              >
                <Image
                  width={400}
                  height={250}
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* overall cinematic dark overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/10" />

                {/* warm orange glow at bottom like reference */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#ed8c2f]/55 via-[#b95f1d]/20 to-transparent" />

                {/* subtle inner vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35),inset_0_-40px_80px_rgba(0,0,0,0.35)]" />

                {/* title */}
                <div className="absolute inset-x-0 bottom-0 px-4 pb-5">
                  <h4
                    className="text-center text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#f6dfb0]"
                    style={{
                      textShadow:
                        "0 2px 0 rgba(86,45,10,0.95), 0 4px 10px rgba(0,0,0,0.55)",
                    }}
                  >
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingCompanyIntro;
