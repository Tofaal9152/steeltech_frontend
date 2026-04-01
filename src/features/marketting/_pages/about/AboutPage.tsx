import Leadership from "./Leadership";
import ProfileMissionVisson from "./ProfileMissionVisson";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 py-10">
      <ProfileMissionVisson />
      <Leadership />
    </div>
  );
};

export default AboutPage;
