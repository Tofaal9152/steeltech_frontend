type ProcessItem = {
  title: string;
  description: string;
  image: string;
  step: string;
  phase: string;
};

export const processItems: ProcessItem[] = [
  {
    step: "01",
    phase: "INPUT",
    title: "Coil Slitting",
    description:
      "Steel coils are slit into precise widths for accurate downstream pipe production.",
    image: "/images/hero/manufacture/coil_slitting.jpg",
  },
  {
    step: "02",
    phase: "ACTIVE",
    title: "Pipe Forming",
    description:
      "Slit coils are shaped into strong, uniform pipes using advanced forming and precision netting technology.",
    image: "/images/hero/manufacture/pipe_forming.png",
  },
  {
    step: "03",
    phase: "ANALYSIS",
    title: "Automated QC",
    description:
      "Each pipe passes through automated inspection stations that check for weld integrity, dimensional accuracy, and surface consistency — ensuring only defect-free product moves forward",
    image: "/images/hero/manufacture/automated_qc.jpg",
  },
  {
    step: "04",
    phase: "TRACKING",
    title: "Weight and Count Tracking",
    description:
      "Each pipe is automatically tracked for weight and quantity to ensure production accuracy, inventory visibility, and process control.",
    image: "/images/hero/manufacture/weight_load_cell.jpg",
  },
  {
    step: "05",
    phase: "FINISH",
    title: "Polish",
    description:
      "Pipes are polished for a refined surface finish and premium visual appearance standard.",
    image: "/images/hero/manufacture/polish.jpg",
  },
  // {
  //   step: "06",
  //   phase: "AUDIT",
  //   title: "Manual QC",
  //   description:
  //     "Experienced inspectors perform final checks before the products move to logistics.",
  //   image: "/images/hero/manufacture/5.jpg",
  // },
  {
    step: "06",
    phase: "LOGISTICS",
    title: "Packing",
    description:
      "Finished pipes are securely packed to ensure safe storage and long-distance transport.",
    image: "/images/hero/manufacture/packaing.png",
  },
  {
    step: "07",
    phase: "COMPLETION",
    title: "Delivery",
    description:
      "Products are dispatched through a reliable delivery network with timely handling and real-time tracking.",
    image: "/images/hero/manufacture/delivery.png",
  },
];