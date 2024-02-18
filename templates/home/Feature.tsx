import { FeatureCard } from "@/types";

const Feature = ({ Icon, descriptionPoints, title }: FeatureCard) => {
  return (
    <div className="shadow-lg relative shadow-primary-200 bg-white rounded-xl flex flex-col gap-3 max-w-xs py-5 px-10 justify-between items-center">
      <div className="flex flex-col items-center">
        <Icon className="text-3xl text-primary-200" />
        <p className="text-3xl font-bold text-center text-primary-300">
          {title}
        </p>
      </div>
      <ul>
        {descriptionPoints.map((point, i) => (
          <li key={i} className="list-disc">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feature;
