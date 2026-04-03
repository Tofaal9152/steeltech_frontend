import ClientsAndPartners from "./ClientsAndPartners";
import Leadership from "./Leadership";
import LeadershipStats from "./LeadershipStats";
import NotableProjects from "./notable-projects/NotableProjects";
import ProfileMissionVisson from "./ProfileMissionVisson";

const AboutPage = () => {
  return (
    <div >
      <ProfileMissionVisson />
      <NotableProjects />
      <Leadership />
      <LeadershipStats />
      <ClientsAndPartners/>
    </div>
  );
};

export default AboutPage;
