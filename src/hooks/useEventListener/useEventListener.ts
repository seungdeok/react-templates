import { RefObject, useEffect } from 'react';

type EventType<T extends HTMLElement = HTMLElement> = {
  [K in keyof HTMLElementEventMap]: (
    event: HTMLElementEventMap[K] & { target: T },
  ) => void;
};
export const useEventListener = <
  T extends HTMLElement = HTMLElement,
  K extends keyof HTMLElementEventMap = keyof HTMLElementEventMap,
>(
  eventName: K,
  handler: EventType<T>[K],
  ref?: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
) => {
  useEffect(() => {
    const target = ref?.current ?? window;

    if (!(target && target.addEventListener)) return;

    const eventListener = handler as EventListener;
    target.addEventListener(eventName, eventListener, options);

    // eslint-disable-next-line consistent-return
    return () => {
      target.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, ref, options, handler]);
};
