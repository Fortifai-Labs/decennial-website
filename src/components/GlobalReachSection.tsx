import TexturedGlobe from './TexturedGlobe';
import GlobeTexture from '../assets/Other/Decennial_Global_Reach_Map.png';

interface GlobalReachSectionProps {
  className?: string;
}

const GlobalReachSection: React.FC<GlobalReachSectionProps> = ({ className = '' }) => {
  const stats = [
    { value: '43', label: 'Decennial Team Members' },
    { value: '200+', label: 'Employees through formal joint ventures' },
    { value: '15+', label: 'Countries with active development & operations' },
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
                <div key={index} className="border-l-4 border-[var(--decennial-secondary)] pl-4">
                  <div className="text-3xl lg:text-4xl font-bold text-[var(--decennial-secondary)]">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Globe */}
          <div className="h-[200px] lg:h-[300px] relative overflow-visible">
            <TexturedGlobe
                textureUrl={GlobeTexture}
                className="w-full h-full"
                autoRotate={true}
                autoRotateSpeed={0.0005}
                initialRotationX={0.1}
                initialRotationY={-0.5}
                ambientLightIntensity={2.5}
                bobSpeed={0.5}
                bobAmount={8}
                shadowOpacity={0.3}
                />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;