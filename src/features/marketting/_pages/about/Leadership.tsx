import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const leadershipTestimonials = [
  {
    quote:
      "Mr. Ebrahim Dawood Mamoon brings nearly four decades of leadership experience across aluminum, stainless steel, metal, and ceramics industries in Bangladesh. As Chairman of the KAI Group — which includes Steeltech Industries, KAI Bangladesh Aluminium, Altech Aluminium Industries, and several other manufacturing and trading companies — he has built one of the country's most diversified industrial portfolios. Mr. Mamoon also serves as the Honorary Consul of Ghana in Bangladesh. His business vision is grounded in international quality standards, continuous innovation, and customer-centric manufacturing. He has traveled to over 50 countries to forge partnerships and bring global best practices to Bangladesh's industrial sector.",
    name: "Mr. Ebrahim Dawood Mamoon",
    designation: "Chairman",
    src: "/images/about/ebrahim-dawood-mamoon.jpg",
  },
  {
    quote:
      "Mr. Anas Mamoon is a young but talented business personality in Bangladesh. He has business experience over years. He was appointed Deputy Managing Director of Steeltech Industries Ltd. His boldness to take new challenges and proven record of his ability to win that challenges efficiently and effectively was the driving force behind his appointment as Deputy Managing Director to Steeltech Industries Ltd. His boldness, sincere efforts, and integrity in whatever he does, has helped him to become a solid and sound businessman over the year. We don’t just build structures. We innovate, research, refine, test and then do it all over again. We simply thrive on challenge. We have always delivered on time, every time. Not surprisingly, more than 80% of business comes from existing customers. It is my great pleasure to reach out to our customers and prospective customers through the medium of the web. Steeltech Industries Ltd. has been playing a major role in producing and supplying the stainless steel based products in the country since more than 20 years. Steeltech Industries Ltd. came to market in 2003. From the beginning we are serving in all the major sectors in Bangladesh where stainless steel, sheets, pipes is needed. Since the uses of regular Stainless Steel (SS) pipes, USA standard SS pipes and design/decorative SS pipes market is growing high. Just like others we also complete all the stages just like importing raw materials to factory production. Our 80 percent production work is done in automation system and the rest 20 percent work is completed by manual procedure. We mainly focus in the construction sector. Our group of companies tends to produce regular Stainless Steel (SS) pipes, USA standard SS pipes and design/decorative SS pipes based on the highest level of quality and the application of highest systems followed quality standards, also obtain international quality certificates and that to compete in markets and the aim of innovation, excellence and integrity, and work to deliver our customers the best quality and the highest rate of satisfaction. Extends our innovation to bring new ideas, new methods, products and services form carefully and customized to suit the diverse needs of customers and markets. Steeltech Industries Ltd. is one of the most technologically advanced manufacturers of extruded Stainless Steel products in the region. We at Steeltech Industries Ltd. are looking at the future with a lot of optimism and are ready to make the best of opportunities with our high quality standards and strong relationship with our customers. We recognize that the only lasting competitive advantage is providing high quality regular Stainless Steel (SS) pipes, USA standard SS pipes and design/decorative SS pipes based on the highest level of quality to our clients at an affordable cost. Therefore, we are continuously focusing on the details that make for better quality and for improved manufacturing processes. I would like to thank our customer and well-wisher for their continued support.",
    name: "Anas Mamoon",
    designation: "Deputy Managing Director",
    src: "/images/about/anas-mamoon.jpg",
  },
  {
    quote:
      "Our mission is to work for the success of our customer, by providing best quality Stainless Steel at a very competitive price. Management of Steeltech Industries Ltd has taken the challenge of the new millennium to be the best extruder of the nation. It is our utmost desire to improve our product and services to serve our customers better. Our commitment for excellence will continue by providing customer driven solution. On behalf of the management and employees of Steeltech Industries Ltd, I would like to thank our customer and well-wisher for their continued support.",
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
    <section className="container mx-auto px-4 pb-10 md:px-0">
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Leadership Team & Profiles</h1>
          <p className="text-muted-foreground mt-2 max-w-6xl">
            Meet the leaders behind Steeltech Industries Ltd. and their vision
            for quality, innovation, and long-term growth.
          </p>
        </div>

        <div className="rounded-[22px] border border-[#ed8c2f]/10 bg-white p-4 shadow-[0_18px_60px_rgba(17,24,39,0.06)] sm:rounded-[28px] sm:p-6 md:p-8">
          <AnimatedTestimonials
            testimonials={leadershipTestimonials}
            autoplay
          />
        </div>
      </div>
    </section>
  );
};

export default Leadership;
