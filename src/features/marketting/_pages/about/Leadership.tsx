import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const leadershipTestimonials = [
  {
    quote:
      "Mr. Ebrahim Dawood Mamoon brings nearly four decades of leadership experience across the aluminium, stainless steel, metal, and ceramics industries in Bangladesh. As Chairman of KAI Group, including Steeltech Industries, KAI Bangladesh Aluminium, Altech Aluminium Industries, and other manufacturing and trading concerns, he has built one of the country’s most diversified industrial portfolios. He also serves as the Honorary Consul of Ghana in Bangladesh. His vision is rooted in international quality standards, continuous innovation, disciplined management, and customer focused manufacturing. Over the years, he has traveled to more than fifty countries to build partnerships, explore advanced technologies, and bring global best practices to Bangladesh’s industrial sector. Under his guidance, the group has grown through integrity, long term planning, operational excellence, and a strong commitment to value creation.",
    name: "Mr. Ebrahim Dawood Mamoon",
    designation: "Chairman",
    src: "/images/about/ebrahim-dawood-mamoon.jpg",
  },
  {
    quote:
      "Mr. Anas Mamoon is a dynamic business leader whose energy, sincerity, and integrity have helped shape the growth of Steeltech Industries Ltd. As Deputy Managing Director, he is known for accepting new challenges and turning them into practical achievements through efficient decision making and disciplined execution. He believes progress comes from constant innovation, research, refinement, and testing, and that success depends on delivering quality on time, every time. Under his leadership, the company continues strengthening relationships with existing customers while reaching new markets with trust and confidence. Steeltech Industries Ltd. has played a major role in supplying stainless steel based products in Bangladesh since 2003, serving key sectors where sheets, pipes, and decorative solutions are widely used. The company manages the journey from importing raw materials to factory production, combining automation with skilled manual work. With a strong focus on construction and manufacturing excellence, he remains committed to quality, customer satisfaction, and long term industrial growth. ",
    name: "Anas Mamoon",
    designation: "Deputy Managing Director",
    src: "/images/about/anas-mamoon.jpg",
  },
  {
    quote:
      "Our mission is to work for the success of our customers by providing the best quality stainless steel at a highly competitive price. At Steeltech Industries Ltd., we have accepted the challenge of the new millennium with a clear goal: to become one of the finest extruders in the nation. We are committed to continuously improving our products, services, and systems so that we can serve our customers better every day. Our pursuit of excellence is driven by customer needs, practical solutions, and a long term commitment to reliability and value. We believe true progress comes from innovation, disciplined production, quality assurance, and sincere relationships with customers and partners. Every achievement inspires us to raise our standards further and deliver even better performance in the years ahead. On behalf of the management and employees of Steeltech Industries Ltd., I would like to thank our customers and well wishers for their continued trust, encouragement, and support.",
    name: "Mohammad Maaz",
    designation: "Managing Director",
    src: "/images/about/mohammad-maaz.jpg",
  },
  {
    quote:
      "Steeltech Industries Ltd. has been playing a major role in producing and supplying the Stainless Steel based products in the country since more than 20 years. Steeltech Industries Ltd. came to market in 2003. From the beginning we are serving in all the major sectors in Bangladesh where stainless steel, sheets, pipes is used. Since the use of regular Stainless Steel (SS) pipes, USA standard SS pipes and design/decorative SS pipes market is expanding day by day. We don’t just build structures. We innovate, research, refine, test and then do it all over again. We simply thrive on challenges. We have always delivered on time, every time. More than 80% of business comes from existing customers. We are constantly reaching out to new customers and building a strong connection with them by helping them to meet their expectations while building trust and loyalty towards our brand and products. It is my great pleasure to reach out to our customers and prospective customers through the medium of the web.",
    name: "Omar Bin Aziz Beg",
    designation: "Director & CEO",
    src: "/images/about/omar-bin-aziz-beg.jpg",
  },
];
const Leadership = () => {
  return (
    <section id="leader" className="container mx-auto  pb-10 md:px-0">
      <div>
        <div className="mb-8 px-4 md:px-0">
          <h1 className="text-3xl font-bold">Leadership Team & Profiles</h1>
          <p className="text-muted-foreground mt-2 max-w-6xl">
            Meet the leaders behind Steeltech Industries Ltd. and their vision
            for quality, innovation, and long-term growth.
          </p>
        </div>

        <div className="relative overflow-hidden  ">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage: "url('/images/about/bg-image.jpg')",
               backgroundPosition: "top",
            }}
          />

          <div className="relative z-10">
            <AnimatedTestimonials
              testimonials={leadershipTestimonials}
              autoplay
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
