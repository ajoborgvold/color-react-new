# Color scheme generator
An app that allows you to generate color schemes based on your selection of seed color and color mode. The UI is built with React.js and the color data is fetched from [The Color Api](https://www.thecolorapi.com/).  
This is a rebuilt of a vanilla JavaScript color scheme generator. The original app had some issues with the UI/UX and with accessibility, so this rebuilt is all about implementing improvements on those areas.

## In this document:
1. [App URL](#app-url)
2. [App screenshot](#app-screenshot)
3. [Technologies used](#technologies-used)
4. [UI/UX improvements](#ui/ux-improvements)
5. [Accessibility improvements](#accessibility-improvements)
6. [Stumbling and learning points](#stumbling-and-learning-points)
7. [Ideas for future improvements](#ideas-for-future-improvements)


## App URL
[https://colorschemegenerator-ajo-b.netlify.app/](https://colorschemegenerator-ajo-b.netlify.app/)


## App screenshot
![Color scheme generator](/src/assets/screenshot.png)
*The color scheme generated when the app first loads*


## Technologies used
1. [React.js](https://react.dev/)
2. [The Color Api](https://www.thecolorapi.com/)
3. [react-colorful](https://www.npmjs.com/package/react-colorful)
4. [typewriter-effect](https://www.npmjs.com/package/typewriter-effect)


## UI/UX improvements
### Issues
1. The basic functionallity of the app was unclear to some users. They reported that a set of user instructions would be helpful.
2. Though already fully responsive, the UI did not work equally well on all devices.
3. The selected seed color and the corresponding hex code is not part of the generated color scheme, i.e. the seed color code was not visible to the user.

### Improvements
1. On the very first render, a modal describing how to use the app is rendered to the page. Using local storage and conditional rendering, the modal is rendered to new users only.
2. The UI is adapted to the type of device that the user is on, and certain hover/focus effects are omitted from touch devices to prevent the UI from being cluttered and confusing.
3. Right above the generated color scheme, the selected seed color code is now displayed and made clickable, allowing the user to copy it.


## Accessibility improvements
### Issues
1. The label on the form elements were invisible not only on the screen but also to screen readers.
2. Keyboard navigation was not possible.

### Improvements
1. To maintain the clean design that I was aiming for, the labels are still hidden from the screen, but the CSS rules are changed and optimized to ensure that the labels are now accessible to screen readers.
2. Every clickable element is now accessible with keyboard navigation and the entire functional logic has been refactored to ensure an equally good UX for all users.


## Stumbling and learning points
### Working with react-colorful
For aesthetic reasons, I chose not to use the HTML `input` element `type="color"` and instead use the `<HexColorPicker />` component from the third-party library react-colorful. This allows customized styling of the displayed color swatch and ensures consistency in styling across browsers and devices. Working with this third-party library involved e.g.:
- Accessing the color data and managing it using the React hook `useState` together with the data from the HTML `select` element. Due to the color picker not being a native HTML element, the data from the two form elements has to be handled differently.
- Ensuring both accessibility and a good UX on all types of devices and for mouse as well as keyboard navigation.


## Ideas for future improvements
- Add tooltips on form elements to provide information to the user about the functionallity of each element. This should be a supplement to the modal with user instructions.
- Turn the app into a PWA.