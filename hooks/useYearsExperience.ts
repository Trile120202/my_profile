import { useState, useEffect } from 'react';

export function useYearsExperience(startDate: Date) {
  const [years, setYears] = useState('0');

  useEffect(() => {
    const calculateYears = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      const yearValue = (diff / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
      setYears(yearValue);
    };

    calculateYears();
    const timer = setInterval(calculateYears, 1000);
    return () => clearInterval(timer);
  }, [startDate]);

  return years;
}
