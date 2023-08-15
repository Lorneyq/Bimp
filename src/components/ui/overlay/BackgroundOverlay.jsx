import { useEffect } from 'react';
import scrollLock from 'scroll-lock';

const BackgroundOverlay = ({ onClick }) => {
  useEffect(() => {
    scrollLock.disablePageScroll();
    return () => {
      scrollLock.enablePageScroll();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-10 bg-transparent-black"
      onClick={onClick}
    ></div>
  );
};

export default BackgroundOverlay;
