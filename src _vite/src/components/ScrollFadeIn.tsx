import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const animationClassName = inView ? 'fade-in-scroll-visible' : 'fade-in-scroll-start';

  return (
    <div ref={ref} className={`${className} ${animationClassName}`.trim()}>
      {children}
    </div>
  );
};

export default ScrollFadeIn; 