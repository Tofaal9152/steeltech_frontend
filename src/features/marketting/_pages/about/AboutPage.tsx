import AboutHeroCarousel from "./AboutHeroCarousel";
import ClientsAndPartners from "./ClientsAndPartners";
import Leadership from "./Leadership";
import LeadershipStats from "./LeadershipStats";
import NotableProjects from "./notable-projects/NotableProjects";
import ProfileMissionVisson from "./ProfileMissionVisson";

const AboutPage = () => {
  return (
    <div >
      <AboutHeroCarousel />
      <ProfileMissionVisson />
      <NotableProjects />
      <Leadership />
      <ClientsAndPartners/>
      <LeadershipStats />
    </div>
  );
};

export default AboutPage;
