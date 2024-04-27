# React-useScreenSize-Hook
this hook useful when component needed to render by changing the screen breakpoints
contains two states (  breakpoint, screen ) and two helper functions (  getScreen, getBreakpoint )
* import useScreenSize from './use_screen_size.js'
* const { breakpoint, screen, getScreen, getBreakpoint } = useScreenSize();
* console.log(breakpoint, screen, getScreen(1280), getBreakpoint("lg"));
