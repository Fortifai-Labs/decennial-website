// components/AnimatedTimeline.tsx
import { useState, useEffect, useRef, useCallback } from 'react';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import { Section } from './Section';
import { Heading, Text } from './Typography';
import { Padding, GradientConfig } from '../types';

interface TimelineItem {
  title: string;
  description: string;
  date?: string;
  image?: string;
  status?: 'completed' | 'current' | 'upcoming';
}

interface AnimatedTimelineProps {
  title?: string;
  subtitle?: string;
  items: TimelineItem[];
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
  paddingY?: Padding;
  gradient?: GradientConfig;
  className?: string;
}

export function AnimatedTimeline({
  title,
  subtitle,
  items,
  bgColor = 'bg-white',
  textColor = 'text-gray-900',
  accentColor = 'var(--decennial-secondary)',
  paddingY = 'xl',
  gradient,
  className,
}: AnimatedTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-based tracking: find the item whose top is closest to viewport center.
  // This avoids IntersectionObserver threshold issues that cause skipping.
  const handleScroll = useCallback(() => {
    const center = window.innerHeight / 2;
    let closest = 0;
    let closestDist = Infinity;

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      const dist = Math.abs(itemCenter - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const progress = ((activeIndex + 1) / items.length) * 100;

  return (
    <Section
      bgColor={bgColor}
      textColor={textColor}
      paddingY={paddingY}
      gradient={gradient}
      className={className}
    >
      {title && (
        <div className="text-center mb-12">
          <Heading as="h2" fontSize="4xl" textAlign="center" className="mb-4 text-white">
            {title}
          </Heading>
          {subtitle && (
            <Text fontSize="lg" textAlign="center" textColor="text-white" className="max-w-2xl mx-auto">
              {subtitle}
            </Text>
          )}
        </div>
      )}

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline track background */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

        {/* Animated progress line */}
        <div
          className="absolute left-4 top-0 w-0.5 transition-all duration-500 ease-out origin-top"
          style={{
            height: `${progress}%`,
            backgroundColor: accentColor,
          }}
        />

        {/* Timeline items */}
        <div className="space-y-16">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={clsx(
                'relative flex gap-6 transition-all duration-500',
                activeIndex === index
                  ? 'opacity-100'
                  : 'opacity-40'
              )}
            >
              {/* Timeline node */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={clsx(
                    'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                    index <= activeIndex
                      ? 'scale-100'
                      : 'scale-75'
                  )}
                  style={{
                    backgroundColor: index <= activeIndex ? accentColor : '#e5e7eb',
                  }}
                >
                  {index < activeIndex ? (
                    <Check className="w-4 h-4 text-[var(--decennial-primary)]" />
                  ) : index === activeIndex ? (
                    <div className="w-3 h-3 rounded-full bg-[var(--decennial-primary)]" />
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-gray-400" />
                  )}
                </div>
              </div>

              {/* Content + Image */}
              <div
                className={clsx(
                  'flex-1 pt-1 transition-all duration-500',
                  activeIndex === index
                    ? 'translate-x-0'
                    : 'translate-x-2'
                )}
              >
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  className="mb-1"
                  textColor="text-[var(--decennial-secondary)]"
                >
                  {item.date}
                </Text>
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="semibold"
                  className={clsx(
                    'mb-2 transition-all duration-300',
                    activeIndex === index ? 'text-white' : '!opacity-50 !text-white'
                  )}
                >
                  {item.title}
                </Heading>
                <Text className={`transition-all duration-300 ${activeIndex === index ? 'text-white' : '!opacity-50 !text-white'}`}>
                  {item.description}
                </Text>

                {/* Image inline per section */}
                {item.image && (
                  <div className="mt-4 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
