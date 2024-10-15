# React-useScreenSize-Hook
This hook is useful when a component needs to render based on screen breakpoints.
It contains two states (**breakpoint**, **screen**) and two helper functions (**getScreen**, **getBreakpoint**).

```js
import useScreenSize from './use_screen_size.js';
const [breakpoint, screen, getScreen, getBreakpoint] = useScreenSize();
console.log(breakpoint, screen, getScreen(1280), getBreakpoint("lg"));

