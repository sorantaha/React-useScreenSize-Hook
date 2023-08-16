import { useState, useEffect } from 'react';

const screens_breakpoints = {
  breakpoints: [640, 768, 1024, 1280, 1536],
  screens: ['sm', 'md', 'lg', 'xl', '2xl'],
};

const initialScreenSize = (innerWidth) => {
  let initialBreakpoint = 0;

  for (let i = 0; i < screens_breakpoints.breakpoints.length; i++) {
    if (innerWidth < screens_breakpoints.breakpoints[i]) {
      initialBreakpoint = screens_breakpoints.breakpoints[i];
      break;
    } else {
      initialBreakpoint =
        screens_breakpoints.breakpoints[
          screens_breakpoints.breakpoints.length - 1
        ];
    }
  }

  return initialBreakpoint;
};

const getBreakpoint = (screen) => {
  let breakpoint = 0;

  for (let i = 0; i < screens_breakpoints.screens.length; i++) {
    screen == screens_breakpoints.screens[i]
      ? (breakpoint = screens_breakpoints.breakpoints[i])
      : '';
  }

  return breakpoint;
};

const getScreen = (breakpoint) => {
  let screen = '';

  for (let i = 0; i < screens_breakpoints.breakpoints.length; i++) {
    breakpoint == screens_breakpoints.breakpoints[i]
      ? (screen = screens_breakpoints.screens[i])
      : '';
  }

  return screen;
};

export default function useScreenSize() {
  let initialBreakpoint = initialScreenSize(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState(initialBreakpoint);

  const screenSize = () => {
    for (let i = 0; i < screens_breakpoints.breakpoints.length; i++) {
      if (window.innerWidth < screens_breakpoints.breakpoints[i]) {
        setBreakpoint(screens_breakpoints.breakpoints[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', screenSize);
    return () => {
      window.removeEventListener('resize', screenSize);
    };
  }, [breakpoint]);

  return { breakpoint, getScreen, getBreakpoint };
}
