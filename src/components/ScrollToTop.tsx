import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Trigger effect whenever pathname changes

  return null; // This component does not render anything
}

export default ScrollToTop; 