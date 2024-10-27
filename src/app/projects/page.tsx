
import ProjectCard from "@/components/projects";

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Static Resume',
      description: "This project is a simple resume built as an assignment, utilizing HTML, CSS, and TypeScript. It features a clean and user-friendly interface that allows users to navigate through different sections, such as education and experience. The resume's interactive functionality enables users to expand each section by clicking on the titles, revealing more information. A subsequent click will close the section, providing a smooth and efficient user experience.This project has boosted my design skills",
      imageUrl: '/images/project1.png',
      link: 'https://hackathon-wheat-sigma.vercel.app/',
    },
    {
      title: 'simple webpage ',
      description: "This project is a simple one-page website developed as an assignment to showcase my skills in layout design using Next.js and Tailwind CSS. The task required building a cohesive header, footer, and hero section, which I implemented with a focus on clean and responsive design. Although this project does not include interactive functionalities, the emphasis on layout helped me build a strong foundation in structuring webpages with Tailwind CSS and Next.js. This experience strengthened my skills in creating visually balanced designs that prioritize user-friendly navigation.",
      imageUrl: '/images/project4.png',
      link: 'https://quote-haven-blue.vercel.app/',
    },
    {
        title: 'Dynamic Resume Builder',
        description: "This project is a simple resume builder developed as an assignment that enables users to create personalized resumes effortlessly. Built using HTML, CSS, and TypeScript, the application features an intuitive interface where users can input their information, such as work experience, education, and skills. A key highlight of this resume builder is the ability to download and share the completed resume in various formats, making it easy for users to present their qualifications to potential employers. ",
        imageUrl: '/images/project3.png',
        link: 'https://hackathon-milestone05-green.vercel.app/',
      },
    // Add more projects as needed
  ];

  return (
    <div className="p-6 bg-slate-900 mt-1">
      <h1 className="text-3xl font-bold mb-14 mt-8 text-center text-gray-300">What I Have created so far?</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
