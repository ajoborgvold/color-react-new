# Color scheme generator
An app that allows you to generate color schemes based on your selection of seed color and color mode. The UI is built with React.js and the color data is fetched from [The Color Api](https://www.thecolorapi.com/).  
This is a rebuilt of a vanilla JavaScript color scheme generator. The original app had some issues with the UI/UX and with accessibility, so this rebuilt is all about implementing improvements on those areas.

## In this document:
1. [App URL](#app-url)
2. [Technologies used](#technologies-used)
3. [UI/UX improvements](#ui/ux-improvements)
4. [Accessibility improvements](#accessibility-improvements)
5. [Stumbling and learning points](#stumbling-and-learning-points)


## App URL
[https://symphonious-swan-26e8af.netlify.app/](https://symphonious-swan-26e8af.netlify.app/)


## Technologies used
1. [React.js](https://react.dev/)
2. [The Color Api](https://www.thecolorapi.com/)
3. [react-colorful](https://www.npmjs.com/package/react-colorful)
4. [typewriter-effect](https://www.npmjs.com/package/typewriter-effect)


## UI/UX improvements
### Issues
1. The basic functionallity of the app was unclear to some users. They reported back to me that a set of user instructions would be helpful.
2. Though already fully responsive, the UI did not work equally well on all devices.
3. The selected seed color and the corresponding hex code is not part of the generated color scheme, i.e. the hex code was not visible to the user.

### Improvements
1. On the very first render, a modal describing how to use the app is rendered to the page. Using local storage and conditional rendering, the modal is rendered to new users only.
2. The UI is adapted to the type of device that the user is on, and certain hover/focus effects are omitted from touch devices to prevent the UI from being cluttered and confusing.
3. Right above the generated color scheme, the selected seed color code is now displayed and made clickable, allowing the user to copy it.


## Accessibility improvements
### Issues
1. The label on the form elements were invisible not only on the screen but also to screen readers.
2. Keyboard navigation was not possible.

### Improvements
1. To maintain the clean design that I was going for, the labels are still hidden from the screen, but the CSS rules are changed and optimized to ensure that the labels are now accessible to screen readers.
2. Every clickable element is now accessible with keyboard navigation and the entire functional logic has been refactored to ensure an equally good UX for all users.


## Stumbling and learning points
### Working with react-colorful
For aesthetic reasons, I chose not to use the HTML `input` element `type="color"` and instead use the `<HexColorPicker />` component from the third-party library react-colorful. This allowed me to customize the styling of the displayed color swatch to better match the app's overall design. Since I've never worked with this third-party library before, it challenged me in various ways, e.g.:
- Accessing the color data correctly, storing it in a JS object together with the data from the JSX `select` element, continuously updating this object using `useState` whenever the value of either the color picker or the select menu changes, and passing its values appropriately when making the fetch request to the API.
- Ensuring both accessibility and a good UX on all types of devices and for mouse as well as keyboard navigation.