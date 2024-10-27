// src/components/ProjectCard.tsx
import Image from 'next/image';

type ProjectProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

const ProjectCard: React.FC<ProjectProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg ">
      <Image src={imageUrl} alt={title} width={500} height={300} className="w-full" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-200">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <button className='mt-5 mb-4'><a href={link} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 py-3 px-4
        rounded-lg hover:bg-blue-400">View Project</a></button>
      </div>
    </div>
  );
};

export default ProjectCard;
