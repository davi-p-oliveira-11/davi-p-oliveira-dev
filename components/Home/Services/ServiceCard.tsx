import React from "react";
import Image from "next/image";

type serviceCardProps = {
  icon: string;
  name: string;
  description: string;
  comingSoon?: boolean;
};

const ServiceCard = ({ description, icon, name, comingSoon }: serviceCardProps) => {
  return (
    <div className="relative p-2">
      {/* Badge */}
      {comingSoon && (
        <span className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg shadow-md">
          Coming Soon
        </span>
      )}

      <Image src={icon} alt="img" width={60} height={60} />

      <h1 className="mt-6 text-xl md:text-2xl font-bold text-gray-200">
        {name}
      </h1>

      <p className="mt-6 text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
