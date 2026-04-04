import WhoWeAreSection from "./WhoWeAreSection";

const ProfileMissionVisson = () => {
  return (
    <div className="container mx-auto px-4 py-10 md:px-0">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">About Steeltech Industries Ltd.</h1>
        <p className="text-muted-foreground mt-2 max-w-6xl">
          Steeltech Industries Ltd. is Bangladesh&apos;s most established
          stainless steel pipe manufacturer — trusted since 2003 by
          infrastructure developers, architects, and fabricators across the
          country.
        </p>
      </div>

      <WhoWeAreSection />
    </div>
  );
};

export default ProfileMissionVisson;