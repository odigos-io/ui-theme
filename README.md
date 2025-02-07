# Odigos UI Theme

This library contains the base theme for all Odigos UI libraries ([ui-icons](https://github.com/odigos-io/ui-icons), [ui-components](https://github.com/odigos-io/ui-components), [ui-containers](https://github.com/odigos-io/ui-containers)).

## Installation

Using **npm**:

```shell
npm i @odigos/ui-theme
```

Using **yarn**:

```shell
yarn add @odigos/ui-theme
```

## Usage

Wrap your app with the theme provider:

```tsx
import Theme from '@odigos/ui-theme'

const AppProviders = () => {
  return (
    <Theme.Provider>
      <App />
    </Theme.Provider>
  )
}
```

You can then access one of: `useDarkMode`, `useTheme`, `animations`, `opacity` from the Theme object:

```tsx
import Theme from '@odigos/ui-theme'

const App = () => {
  const { darkMode } = Theme.useDarkMode()

  return <div>{darkMode ? 'it is dark in here' : 'it is light in here'}</div>
}
```
