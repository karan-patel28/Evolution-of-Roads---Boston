import React, { ReactNode } from 'react';

interface DynamicCardProps {
  imageSrc: string;
  title: ReactNode;
  description: ReactNode;
}

const DynamicCard: React.FC<DynamicCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="card card-compact w-full h-full shadow-xl">
      <div className="card-body p-8">
        {title && (
          <div>
            {title}
          </div>
        )}
        {description && (
          <p className="text-lg lg:text-xl mb-4 text-white">
            {description}
          </p>
        )}
      </div>
      <figure>
        <img src={imageSrc} alt="Card image" className="w-full h-auto" />
      </figure>
    </div>
  );
};

export default DynamicCard;
