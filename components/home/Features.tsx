import { Feature } from "@/templates/home";

// icons
import { BsPostcard } from "react-icons/bs";
import { RiAiGenerate } from "react-icons/ri";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdHowToVote } from "react-icons/md";

const Features = () => {
  return (
    <section id="features" className="bg-primary-100 p-3 py-20">
      <p className="text-center mb-20 text-3xl font-bold text-primary-300">
        Some of the features provided by the platform
      </p>
      <div className="flex flex-wrap gap-10 justify-center lg:gap-20">
        <Feature
          Icon={BsPostcard}
          descriptionPoints={[
            "Track and prioritize issues by department, type, and audience.",
            "Publicly accessible status updates for transparency.",
            "User voting system to prioritize issues.",
          ]}
          title="Complains"
        />

        <Feature
          Icon={RiAiGenerate}
          descriptionPoints={[
            "Users can publicly rate the services provided by the authorities.",
            "Service ratings are publicly visible",
            "Share experiences and contribute to improving public services.",
          ]}
          title="Service Rating"
        />

        <Feature
          Icon={AiFillSafetyCertificate}
          descriptionPoints={[
            "Secure authentication with multi-factor options.",
            "Only authentic users can use the platform.",
            "Role-based access control for different user levels.",
          ]}
          title="Authenticity"
        />

        <Feature
          Icon={MdHowToVote}
          descriptionPoints={[
            "Cast primary and secondary votes in political elections.",
            "Access information on candidates and parties.",
            "Integration with official election authorities for real-time updates.",
          ]}
          title="Political Voting"
        />

        <Feature
          Icon={MdHowToVote}
          descriptionPoints={[
            "Public forums for political discussions and debates.",
            "Sharing options for issues and discussions on social media platforms.",
            "Opportunities for community involvement and activism.",
          ]}
          title="Public Engagement"
        />
      </div>
    </section>
  );
};

export default Features;
