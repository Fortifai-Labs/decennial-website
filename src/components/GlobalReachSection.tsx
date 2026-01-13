import TexturedGlobe from './TexturedGlobe';
import GlobeTexture from '../assets/Other/Decennial_Global_Reach_Map.png';

interface GlobalReachSectionProps {
  className?: string;
}

const GlobalReachSection: React.FC<GlobalReachSectionProps> = ({ className = '' }) => {
  const stats = [
    { value: '15+', label: 'Countries' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '10GW+', label: 'Energy Capacity' },
    { value: '24/7', label: 'Global Operations' },
  ];

  const regions = [
    { name: 'North America', description: 'Headquarters and primary operations' },
    { name: 'Europe', description: 'Strategic partnerships and development' },
    { name: 'Asia Pacific', description: 'Emerging market expansion' },
    { name: 'Middle East', description: 'Energy infrastructure projects' },
  ];

  return (
    <section className={`w-full bg-white text-black ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Data */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Global Reach with Local Expertise
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Decennial Group operates across multiple continents, delivering 
                critical infrastructure and energy solutions to markets worldwide.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="border-l-2 border-amber-500 pl-4">
                  <div className="text-3xl lg:text-4xl font-bold text-amber-500">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors">
              Explore Our Projects
            </button>
          </div>

          {/* Right Column - Globe */}
          <div className="h-[200px] lg:h-[300px]">
            <TexturedGlobe
              textureUrl={GlobeTexture}
              className="w-full h-full"
              autoRotate={true}
              autoRotateSpeed={0.0005}
              initialRotationX={0.1}
              initialRotationY={-0.5}
              ambientLightIntensity={2.5}
              directionalLightIntensity={.7}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;