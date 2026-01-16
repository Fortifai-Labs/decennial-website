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
  strokeWidth = 4,
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

  // Decennial logo sections - original viewBox: 0 0 403.88 394.29
  // Each path represents one of the 4 sections of the X logo
  const sections = [
    {
      id: 'section-right',
      // Right arm of the X
      path: "M276.47,236.78l-12.21-13.23-12.94-13.97-11.93-12.97c-2.97-3.22-6.33-5.72-8.52-9.74,2.85-3.51,5.73-6.21,8.53-9.2l14.9-15.94,14.95-15.96,14.96-15.96,14.96-15.95,14.96-15.95,14.95-15.93c4.26-4.53,8.46-8.73,12.96-13.42l19.15,9.31,42.7,21.04-.02,197-15.84,7.63-34.12,16.66c-5.58-5.64-11.15-11.72-16.83-17.87l-11.97-12.95-11.97-12.96-11.98-12.96-12.93-13.96-11.75-12.69Z",
    },
    {
      id: 'section-left',
      // Left arm of the X
      path: "M130.89,232.25l-11.22,12.24-11.95,12.96-10.99,11.97-11.95,12.96-10.99,11.97-11.95,12.96-11.74,13.01-38.23-18.81c-3.96-1.95-7.67-3.37-11.87-5.63l-.02-196.97,40-19.74c7.09-3.5,13.68-6.56,20.55-10.09,4.43,4.97,8.82,9.18,13.28,13.89l17.92,18.93,17.95,18.95,17.95,18.95,17.95,18.95,17.88,18.93c2.83,2.99,5.63,5.75,8.51,9.15-1.55,3.37-4.17,5.26-6.52,7.81l-11.88,12.96-10.98,11.97-11.71,12.69Z",
    },
    {
      id: 'section-bottom',
      // Bottom arm of the X
      path: "M88.12,338.33c3.69-2.91,5.7-6.3,8.44-9.24l12.99-13.92,10.5-11.45,10.98-11.96,10.97-11.97,11.98-12.96,10.96-11.96,10.96-11.98,11.95-12.99c3.87-4.21,8.19-7.68,11.19-12.71.6-1.01,2.16-1.52,2.95-1.63,1.38-.19,1.96,1.21,3.16,2.55l108.69,121.06c-4.44,3.86-9.57,5.06-14.33,7.4l-39.38,19.4-42.84,20.9-15.55,7.43c-6.42-3.31-12.19-6.05-18.43-9.09l-43.54-21.24-40.71-20.02c-3.61-1.77-6.84-2.19-10.94-5.62Z",
    },
    {
      id: 'section-top',
      // Top arm of the X
      path: "M198.21,155.42l-11.72-12.65-10.98-11.96-11.95-12.96-11.95-12.96-10.99-11.97-11.95-12.96-11.94-12.96-10.09-10.82c-1.87-2-3.08-3.89-5.58-6.57,8.46-4.54,16.36-8.25,24.8-12.37l43.53-21.24L201.8,0l30.71,15,42.84,20.89,28.5,13.96c-8.5,8.81-13.97,14.82-21.65,23.13l-11.97,12.96-12.95,13.96-12.96,13.96-12.95,13.96-11.99,12.97-13.36,14.52c-1.15,1.25-2.02,2.86-3.29,3.32-2.17.8-2.92-1.47-4.52-3.2Z",
    },
  ];

  return (
    <div className={clsx('relative w-full max-w-md mx-auto', className)}>
      <svg viewBox="0 0 403.88 394.29" className="w-full h-auto">
        <defs>
          {sections.map((section) => (
            <clipPath key={section.id} id={section.id}>
              <path d={section.path} />
            </clipPath>
          ))}
        </defs>

        {/* Image sections - each clipped to a section of the logo */}
        {sections.map((section, index) => (
          <g key={section.id} clipPath={`url(#${section.id})`}>
            <image
              href={images[imageIndices[index] % images.length]}
              x="0"
              y="0"
              width="403.88"
              height="394.29"
              preserveAspectRatio="xMidYMid slice"
              className={clsx(
                'transition-opacity duration-300',
                transitioningSection === index && 'opacity-0'
              )}
            />
          </g>
        ))}

        {/* Logo outline strokes */}
        {sections.map((section) => (
          <path
            key={`${section.id}-stroke`}
            d={section.path}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </div>
  );
}