# Color scheme generator
An app that allows you to generate color schemes based on your selection of seed color and color mode. The UI is built with React and the color data is fetched from [The Color Api](https://www.thecolorapi.com/).
This is a rebuilt of a similar app that I built in vanilla JavaScript. The original app had some issues with the UI/UX and with accessibility, so this rebuilt is all about implementing improvements on those areas.

## In this document:
1. [App URL](#app-url)
2. [UI/UX issues and improvements](#ui/ux-issues-and-improvements)
3. [Accessibility issues and improvements](#accessibility-issues-and-improvements)


## App URL
[https://symphonious-swan-26e8af.netlify.app/](https://symphonious-swan-26e8af.netlify.app/)


## UI/UX issues and improvements
### Issues
1. The basic functionallity of the app was unclear to some users. They reported back to me that a set of user instructions would be helpful.
2. Though already fully responsive, the UI did not work equally well on all devices.

### Improvements
1. On the very first render, a modal describing how to use the app is rendered to the page. Using local storage and conditional rendering, the modal is rendered to new users only.
2. By checking if the user is on a touch device, the UI is adapted to the type of device and certain hover/focus effects are omitted from touch devices to avoid cluttering the UI.

## Accessibility issues and improvements
### Issues
1. The label on the form elements were invisible not only on the screen but also to screen readers.
2. Keyboard navigation was not fully possible.

### Improvements
1. To maintain the clean design that I was going for, the labels are still hidden from the screen, but the CSS rules are changed and optimized to ensure that the labels are now accessible to screen readers.
2. Every clickable element is now accessible with keyboard navigation and the entire functional logic has been refactored to ensure an equally good UX for all users.