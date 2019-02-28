# Boilerplate

#### Main Framework:

Create React App with Typescript, Emotion.js, Styled System. Also includes a number of styling components to assist with theming, layout, fonts & typography, and asset management.

## Setup

- `git clone git@github.com:havandenberg/boilerplate.git project-name` && `cd project-name`
- Optionally upgrade packages using `yarn upgrade`
- `yarn`
- `git remote add origin [your repo url]`
- `git remote -set-url origin master`

## Meta

- Upload favicon to `public/favicon.ico` (https://realfavicongenerator.net/)
- Update `<title>` tag in `public/index.html`
- Add meta tags (https://www.heymeta.com/)
- Update `manifest.json`

## Assets

- Follow font setup below
- Edit images.d.ts to add image types (default: svg, png, jpg, json)
- Batch resizing and compressing images (https://bulkresizephotos.com/)

## Styles

Components are styled using `react-emotion`, and styled-system is used make them more powerful.

There are 3 main style files located in `src/styles`:

- `theme.ts` - theme variables
- `typography.ts` - styled text components
- `layout.ts` - styled layout components

### Theme

Styling variables to be reused throughout the app.

- `borders`
- `breakpoints`
- `colors`
- `fontSizes` - uses array of values for breakpoints with styled-system
- `fonts`
- `gradients`
- `heights`
- `scrollOptions` - options for scrolling using react-scroll
- `shadows`
- `spacing`
- `transitions`
- `widths`
- `z`

### Typography

Text components augmented with styled system. `textOptions` compiles useful style functions from styled system to make them available to all typography components so defaults can be overridden easily.

- `Title`
- `Subtitle`
- `H1`, `H2`, `H3`
- `Text`
- `Anchor` - `a` tag
- `Link` - `react-router` link
- `TextButton`
- `HelpText`

#### Fonts

1. Add font files to `src/assets/fonts.css`
2. Add font family names to `src/styles/fonts.css`
3. Update `fonts` in `src/styles/theme.ts` and `src/styles/typography.ts`

#### Layout

Built around `Flex` component, which aggregates a bunch of styled-system props functions and sets a bunch of opinionated defaults.

- `Flex` - base row component. Use for horizontal layouts.
- `Break`
- `Caption`
- `FlexCentered`
- `FlexColumn`
- `Img`
- `Space` - main spacing component. Use instead of base divs
- `GalleryWrapper` - use with react-grid-gallery
- `Scroll` - use with react-scroll
- `ScrollFlex`
- `Section`
- `Page`
- `Red`
- `BorderLine`
- `Line`

Add project specific layout components below the above.

## Useful components

### Form

Description coming, but its awesome especially with typescript.

### HOCs

- `withScroll` - scrolls page to component with `id: top`, or another `id` passed in as a query param

## External Packages

A list of the packages included and their intended purposes. The ones that are most likely relevant to all projects are included in the `package.json` but others that I have used in other projects that work with the rest of the config are listed below for various purposes.

### Types

Some are compatible with typescript, some have `@types` files, and the others are stubbed in `src/types/definitions`.

### Included

- `body-scroll-lock` (`@types`) - lock the body scrolling when modal is opened
- `emailjs-com` - sending emails (contact forms, etc)
- `emoji-strip` (stub) - strip emojis from strings
- `firebase` - Database and authentication
- `moment` - date manipulation
- `query-string` (`@types`) - query parameter handling
- `ramda` - utils
- `react-dropzone` - used for file input
- `react-grid-gallery` (stub) - photo galleries
- `react-modal` (`@types`) - modals
- `react-pose` - animations
- `react-router-dom` (`@types`) - routing
- `react-scroll` (`@types`) - Scrolling utility
- `react-spinners` - loading spinners
- `react-stickynode` (`@types`) - sticky components
- `react-waypoint` - waypoint

### Other

- `blob-util` (`@types`) - file blob manipulation
- `react-big-calendar` (`@types`) - calendar util (can use with google calendar)
- `react-countup` (stub) - countup animation
- `react-google-maps` (`@types`) - google maps
- `react-mailchimp-subscribe` - subscribe to mailchimp lists
- `@react-pdf/renderer` (stub) - PDF reading and rendering
- `react-social-login-buttons` - social media authentication
- `rrule` (stub) - reading rrules
