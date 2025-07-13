import Link from "next/link";
import Image from "next/image";

interface ColorCombinationCardProps {
  heading: string;
  description: string;
  img: string;
  href: string; // New prop for dynamic navigation
}

const ColorCombinationCard: React.FC<ColorCombinationCardProps> = ({
  heading,
  description,
  img,
  href,
}) => {
  return (
    <div className="group bg-white rounded-xl border border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1.5 overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={img}
          alt={heading}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-montserrat">
          {heading}
        </h2>
        
        <p className="text-gray-600 leading-relaxed text-justify font-poppins">
          {description}
        </p>

        <Link 
          href={href} 
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-poppins"
        >
          Explore Scheme
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ColorCombinationCard;
