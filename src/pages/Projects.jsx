import { useState, useEffect } from 'react';
import TangyLeafImg from '../assets/TangyLeaf.png';
import Ecommerce from '../assets/E-Commerce Website.png';
import NetflixDashboard from '../assets/NetflixDashboard.png';
import LoanEligibility from '../assets/LoanEligibility.jpg';
import SalesDashboard from '../assets/SalesDashboard.png';
import DiabetesPrediction from'../assets/DiabetesPrediction.png';

const categories = [
  {
    key: 'web',
    label: 'Web & UI Projects',
  },
  {
    key: 'data',
    label: 'Data Analytics & ML Projects',
  },
];

const projects = {
  web: [
    {
      title: 'Cafe Website with AI Chatbot',
      image: TangyLeafImg, // Use imported image
      tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Ollama'],
      desc: 'A personal portfolio to showcase my work and skills, built with React and Tailwind.',
      github: 'https://github.com/saroj-swadithya',
    },
    {
      title: 'E-Commerce Website',
      image: Ecommerce,
      tech: ['Next.js', 'Styled Components'],
      desc: 'A modern e-commerce UI with smooth animations and responsive design.',
      github: 'https://github.com/Saroj-Swadithya',
    },
  ],
  data: [
    {
      title: 'Netflix Dashboard',
      image: NetflixDashboard,
      tech: ['Tableau'],
      desc: "This interactive Tableau dashboard presents a detailed analysis of Netflix's global content library. As my first data visualization project, it highlights my foundational skills in data storytelling, visual design, and insight extraction using real-world datasets. \nThe dashboard empowers content teams to make data-driven decisions on content acquisition, genre focus, and recommendation strategies based on user behavior and global trends.",
      github: 'https://github.com/Saroj-Swadithya/Netflix-Dashboard',
    },
    {
      title: 'Loan Eligibility Prediction',
      image: LoanEligibility,
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Numpy', 'Matplotlib'],
      desc: 'Built a machine learning model to predict loan eligibility using real-world financial data from Kaggle. I explored and compared Decision Tree and Naive Bayes classifiers. What sets this project apart is my focus on hypothesis-driven EDA, feature engineering, and hands-on comparison of algorithms to select the best-performing model. This showcases my ability to think critically, work with raw data, and build optimized predictive systems end-to-end.',
      github: 'https://github.com/Saroj-Swadithya/Loan-Eligibility-Prediction',
    },
    {
      title: 'E-Commerce Sales Dashboard',
      image: SalesDashboard,
      tech: ['Tableau'],
      desc: 'Built an interactive Tableau dashboard to help a local dress shop understand and improve their e-commerce sales. By exploring patterns in product categories, regions, sales channels, and sizes, the dashboard revealed what was working and where there was room to grow. With over 20 dynamic KPIs and filters, it gave clear, actionable insights into customer behavior, order fulfillment, and sales trends. This project really reflects my passion for turning data into stories and building dashboards that not only look great but also help businesses make smarter decisions.',
      github: 'https://github.com/Saroj-Swadithya/E-Commerce-Sales-Dashboard/assets/131875995/0a7d7c9e-e781-4dfb-8a57-86c925322338',
    },
    {
      title: 'Diabetes Prediction Model',
      image: DiabetesPrediction,
      tech: ['Python', 'Numpy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      desc: 'Built a Random Forest model to predict diabetes using real-world health data. Handled missing values, applied feature scaling, and achieved strong accuracy. Saved the model with Pickle for real-time predictions. Highlighted key risk factors through feature importance.',
      github: 'https://github.com/Saroj-Swadithya/diabetese-prediction',
    },
  ],
};

const selectedGradient = 'bg-gradient-to-r from-[#bcbfe0] to-[#f7bfc8]';
const unselectedGradient = 'bg-gradient-to-r from-[#e3e4fa] to-[#ffe6e8]';
const techStackGradient = 'bg-gradient-to-r from-[#734f96] to-[#e56e94]';

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 relative flex flex-col animate-fadeIn"
        style={{ maxHeight: '90vh' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-4 text-2xl text-darkLavender hover:text-blushRed focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="w-full h-56 bg-gradient-to-br from-[#e3e4fa] to-[#ffe6e8] rounded-xl mb-4 flex items-center justify-center">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-xl" />
          ) : (
            <span className="text-6xl text-darkLavender opacity-30">🖼️</span>
          )}
        </div>
        <h3 className="text-2xl font-bold mb-2 text-darkLavender">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tech.map((tech) => (
            <span key={tech} className={`${techStackGradient} text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm border border-[#e6a9ec]`}>{tech}</span>
          ))}
        </div>
        <div className="overflow-y-auto mb-4 text-sm text-darkLavender/80" style={{ maxHeight: 120 }}>
          {project.desc}
        </div>
        <div className="flex justify-end mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#24292e] text-white rounded-full px-4 py-2 shadow hover:brightness-110 transition font-semibold"
          >
            View on GitHub
          </a>
        </div>
      </div>
      <style>{`.animate-fadeIn{animation:fadeIn .2s cubic-bezier(.4,0,.2,1)}`}
      </style>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}`}</style>
    </div>
  );
}

function ProjectCard({ proj, onViewMore }) {
  return (
    <div
      className="bg-lavenderBlue rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex flex-col cursor-pointer transform hover:scale-105"
      onClick={onViewMore}
    >
      <div className="w-full h-40 bg-gradient-to-br from-[#e3e4fa] to-[#ffe6e8] rounded-xl mb-4 flex items-center justify-center">
        {proj.image ? (
          <img src={proj.image} alt={proj.title} className="w-full h-full object-cover rounded-xl" />
        ) : (
          <span className="text-5xl text-darkLavender opacity-30">🖼️</span>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 text-darkLavender">{proj.title}</h3>
      <div className="flex flex-wrap gap-2 mb-2">
        {proj.tech.map((tech) => (
          <span key={tech} className={`${techStackGradient} text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm border border-[#e6a9ec]`}>{tech}</span>
        ))}
      </div>
      <div className="text-sm text-darkLavender/80 mb-2">
        {proj.desc.length > 120 ? (
          <>
            {proj.desc.slice(0, 120)}...
            <button
              className="ml-2 text-[#734f96] underline text-xs font-semibold focus:outline-none"
              onClick={e => { e.stopPropagation(); onViewMore(); }}
              type="button"
            >
              View More
            </button>
          </>
        ) : (
          proj.desc
        )}
      </div>
      <div className="flex justify-end mt-2">
        <a
          href={proj.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#24292e] text-white rounded-full px-4 py-2 shadow hover:brightness-110 transition font-semibold"
          onClick={e => e.stopPropagation()}
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState('web');
  const [modal, setModal] = useState(null);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-5xl w-full">
        <h2 className="text-3xl font-heading text-center mb-10 text-darkLavender">Projects</h2>
        <div className="flex justify-center gap-6 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelected(cat.key)}
              className={`px-6 py-2 rounded-full font-semibold transition-all text-lg shadow-md focus:outline-none border-2 border-transparent
                ${selected === cat.key
                  ? selectedGradient + ' text-darkLavender hover:scale-105 shadow-lg'
                  : unselectedGradient + ' text-darkLavender hover:scale-105 border-[#e6a9ec]'}
              `}
              style={{ minWidth: 200 }}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects[selected].map((proj, idx) => (
            <ProjectCard key={proj.title} proj={proj} onViewMore={() => setModal(proj)} />
          ))}
        </div>
      </div>
      <ProjectModal project={modal} onClose={() => setModal(null)} />
    </section>
  );
}
