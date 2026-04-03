import { NotableProjectsSlider } from "./NotableProjectsSlider";

const NotableProjects = () => {
  return (
    <div >
      <div className="container mx-auto px-4 md:px-0 ">
        <h1 className="text-3xl font-bold"> Notable Projects</h1>
        <p className="text-muted-foreground mt-2 max-w-6xl">
          A showcase of our most impactful projects, demonstrating our
          commitment to quality and innovation in stainless steel pipe
          manufacturing across Bangladesh.
        </p>
      </div>
      <NotableProjectsSlider />
    </div>
  );
};

export default NotableProjects;
