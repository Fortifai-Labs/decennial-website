// components/DecennialHeroImage.tsx
import { useState, useEffect } from 'react';
import clsx from 'clsx';

interface DecennialHeroImageProps {
  images: string[];
  rotateImages?: boolean;
  interval?: number;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
}

export function DecennialHeroImage({
  images,
  rotateImages = true,
  interval = 3000,
  strokeColor = 'white',
  strokeWidth = 8,
  className,
}: DecennialHeroImageProps) {
  const [imageIndices, setImageIndices] = useState([0, 1, 2, 3]);
  const [transitioningSection, setTransitioningSection] = useState<number | null>(null);

  useEffect(() => {
    if (!rotateImages || images.length < 4) return;

    const timer = setInterval(() => {
      const section = Math.floor(Math.random() * 4);
      setTransitioningSection(section);

      setTimeout(() => {
        setImageIndices((prev) => {
          const newIndices = [...prev];
          newIndices[section] = (newIndices[section] + 1) % images.length;
          return newIndices;
        });
      }, 150);

      setTimeout(() => {
        setTransitioningSection(null);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, rotateImages]);

  // SVG coordinates for a hexagon in 200x200 viewBox
  const hex = {
    top: { x: 100, y: 10 },
    topRight: { x: 180, y: 50 },
    bottomRight: { x: 180, y: 150 },
    bottom: { x: 100, y: 190 },
    bottomLeft: { x: 20, y: 150 },
    topLeft: { x: 20, y: 50 },
    center: { x: 100, y: 100 },
  };

  const sections = [
    {
      id: 'section-top',
      path: `M${hex.center.x},${hex.center.y} L${hex.topLeft.x},${hex.topLeft.y} L${hex.top.x},${hex.top.y} L${hex.topRight.x},${hex.topRight.y} Z`,
    },
    {
      id: 'section-right', 
      path: `M${hex.center.x},${hex.center.y} L${hex.topRight.x},${hex.topRight.y} L${hex.bottomRight.x},${hex.bottomRight.y} Z`,
    },
    {
      id: 'section-bottom',
      path: `M${hex.center.x},${hex.center.y} L${hex.bottomRight.x},${hex.bottomRight.y} L${hex.bottom.x},${hex.bottom.y} L${hex.bottomLeft.x},${hex.bottomLeft.y} Z`,
    },
    {
      id: 'section-left',
      path: `M${hex.center.x},${hex.center.y} L${hex.bottomLeft.x},${hex.bottomLeft.y} L${hex.topLeft.x},${hex.topLeft.y} Z`,
    },
  ];

  return (
    <div className={clsx('relative w-full max-w-md mx-auto', className)}>
      <svg viewBox="0 0 200 200" className="w-full h-auto">
        <defs>
          {sections.map((section, index) => (
            <clipPath key={section.id} id={section.id}>
              <path d={section.path} />
            </clipPath>
          ))}
        </defs>

        {/* Image sections */}
        {sections.map((section, index) => (
          <g key={section.id} clipPath={`url(#${section.id})`}>
            <image
              href={images[imageIndices[index] % images.length]}
              x="0"
              y="0"
              width="200"
              height="200"
              preserveAspectRatio="xMidYMid slice"
              className={clsx(
                'transition-all duration-300',
                transitioningSection === index && 'opacity-0'
              )}
            />
          </g>
        ))}

        {/* X lines */}
        <line
          x1={hex.topLeft.x}
          y1={hex.topLeft.y}
          x2={hex.bottomRight.x}
          y2={hex.bottomRight.y}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <line
          x1={hex.topRight.x}
          y1={hex.topRight.y}
          x2={hex.bottomLeft.x}
          y2={hex.bottomLeft.y}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Hexagon outline */}
        <polygon
          points={`${hex.top.x},${hex.top.y} ${hex.topRight.x},${hex.topRight.y} ${hex.bottomRight.x},${hex.bottomRight.y} ${hex.bottom.x},${hex.bottom.y} ${hex.bottomLeft.x},${hex.bottomLeft.y} ${hex.topLeft.x},${hex.topLeft.y}`}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}