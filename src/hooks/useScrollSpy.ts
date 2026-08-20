import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState<string>(ids[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      // Dapatkan posisi scroll saat ini, ditambah offset untuk memperhitungkan tinggi navbar
      const scrollPosition = window.scrollY + offset;

      // Iterasi terbalik agar seksi paling bawah yang terlihat diprioritaskan
      for (const id of [...ids].reverse()) {
        const element = document.getElementById(id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          const elementAbsoluteTop = top + window.scrollY;

          // Jika posisi scroll sudah mencapai atau melewati batas atas elemen
          if (scrollPosition >= elementAbsoluteTop - 150) { 
            setActiveId(id);
            return;
          }
        }
      }
      
      // Jika scroll paling atas, set ke id pertama
      if (window.scrollY === 0) {
        setActiveId(ids[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Panggil sekali saat mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
}
