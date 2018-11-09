# Base app

### Constants

```
src/constants.js
```

App-wide constants e.g. `export const SITE_NAME = 'My Cool App'`

### Setup tests

Create React App allows for a global setup file to be run before the tests. Useful if there are global variables or libraries that need to be initialized and used within the context of your tests.

```
src/setupTests.js
```

For example:

```
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })

global.toJson = toJson
```

### Styles

Setup the global styles for the app using `styled-normalize` to "normailse" the CSS and `styled-components`'s `createGlobalStyle`. Used to reset the base browser CSS and define our own base CSS rules such as the font.

## Base components

### Layout

Generally speaking each page in the app will have three sections: Header, Main and Footer.

The header and footer are used to provide a quick high level picture of where a user is in the app, manage navigation and display important metadata that might be relevant to the user about the application as well as important page content agnostic app features that a user might need as part of using the for example signing in / out and profile / account links.

The main section of the app is where the current page content and component views are rendered.

The Layout component provides us a place to manage these top level components in a way that can be maintained searately from and resued across the pages.

Though the Footer, Header and Main components are located within the Layout component in the source code they are exported separately which allows for flexibilty in how they pulled into each page.

Footer
- Copyright
- FooterLink
- FooterNav
- FooterSeparator
- FooterWrapper

Header
- HeaderLink
- HeaderNav
- HeaderSeparator
- HeaderWrapper
- Logo

Main

### Reactify

### SiteWrapper (App)

### Switchboard (routing)

## gql

## state

## Base pages

## utilities

## wrappers