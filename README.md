# Odigos UI Theme

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
import { Theme } from '@odigos/ui-theme'

const AppProviders = () => {
  const darkMode = true

  return (
    <Theme.Provider darkMode={darkMode}>
      <App />
    </Theme.Provider>
  )
}
```
