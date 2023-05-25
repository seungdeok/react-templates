import { useEffect, useState } from 'react';

const INTERVAL_TIME = 1000;

export const useCountDown = (
  initialValue: number,
  onTimerCallback: () => void,
): [number, () => void, () => void, () => void] => {
  const [seconds, setSeconds] = useState<number>(initialValue);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prev: number) => {
          if (prev > 0) {
            return prev - 1;
          }

          clearInterval(intervalId as NodeJS.Timeout);
          onTimerCallback();
          return 0;
        });
      }, INTERVAL_TIME);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isActive, onTimerCallback]);

  const start = () => {
    setIsActive(true);
  };

  const stop = () => {
    setIsActive(false);
  };

  const reset = () => {
    setIsActive(false);
    setSeconds(initialValue);
  };

  return [seconds, start, stop, reset];
};
