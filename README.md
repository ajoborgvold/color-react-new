# Color scheme generator
An app that allows you to generate color schemes based on your selection of seed color and color mode. The UI is built with React and the color data is fetched from [The Color Api](https://www.thecolorapi.com/).
This is a rebuilt of a similar app that I built in vanilla JavaScript. The original app had some issues with the UI/UX and with accessibility, so this rebuilt is all about implementing improvements on those areas.

## In this document:
1. [App URL](#app-url)
2. [UI/UX issues and improvements](#ui/ux-issues-and-improvements)


### App URL
[https://symphonious-swan-26e8af.netlify.app/](https://symphonious-swan-26e8af.netlify.app/)


### UI/UX issues and improvements
#### Issues
1. The basic functionallity of the app was unclear to some users. They reported back to me that a set of user instructions would be helpful.
2. Though already fully responsive, the UI did not work equally well on all devices.

#### Improvements
1. On the very first render, a modal describing how to use the app is rendered to the page. Using local storage and conditional rendering, the modal is rendered to new users only.
2. 