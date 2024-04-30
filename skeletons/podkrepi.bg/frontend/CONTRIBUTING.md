# Contributing

Table of contents:

- [Development setup](#development)
- [Linting](#linting)
- [Production setup](#production)
- [Pull requests guidelines](#pull-requests)
- [Branching strategy](#branching-strategy)
- [React guidelines](#react-guidelines)
  - [Imports](#imports)
  - [File structure](#file-structure)
  - [Types](#types)
  - [Components definition](#components)
  - [Styles](#styles)
    - [Box model](#styles-using-the-box--component)
    - [JSS Hook](#styles-using-usestyles-hook)
    - [SCSS](#styles-using-somethingmodulescss)
  - [Translations](#translations-i18n)

## Development

### Setup local dev environment

To run and develop the module NodeJS 16 is required. In this section 2 ways of configuring a development environment are described.

### Installing the dependencies

The following dependencies are required in order to be able to run the project:

- [NodeJS 16 LTS](https://nodejs.org/en/download/)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install)

### Development container

If you wish to keep your host clean, it is also possible to develop the module in a Docker container. You can do that by using the [Visual Studio Code](https://code.visualstudio.com/download)'s [Remote Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) and read [how to initialize your dev container](https://code.visualstudio.com/docs/remote/containers).

### Cloning and initializing the repo

```shell
git clone https://github.com/podkrepi-bg/frontend
cd frontend

# Symlink dev environment on unix
ln -hfs .env.local.example .env.local

# Symlink dev environment on Windows
mklink .env.local .env.local.example

# Install dependencies
yarn
```

### NOTE! For existing clones update github remote to podkrepi-bg/frontend

```
# View existing remotes
git remote -v
# Change the 'origin' remote's URL
git remote set-url origin https://github.com/podkrepi-bg/frontend
# Check updated remotes
git remote -v
```

### Start development server

```shell
yarn dev
```

Visit <http://localhost:3040/>

### Start dev server via Docker Compose

Install the binary via <https://docs.docker.com/compose/install/>

#### Start the container in foreground

```shell
docker-compose up
```

#### Start the container in background

```shell
docker-compose up -d
docker-compose logs -f
```

Stop the docker container with `docker-compose down`

## Linting

```shell
yarn lint
yarn lint:styles
yarn format
yarn type-check
```

## Production

### Build frontend

```shell
yarn build
```

### Build Docker image

```shell
docker build . \
    --file ./Dockerfile \
    --target production \
    --build-arg NODE_ENV=production
```

## Pull requests

All PRs must:

- pass all checks before they will be considered for review
- have proper title and description
- have at least one screenshot if the changeset leads to visual difference

## Branching strategy

Inherits the process from <https://nvie.com/posts/a-successful-git-branching-model/>

Good branch names: :sun_with_face:

- `nice-kebab-cased-titles`
- `fixes-footer-links`
- `4411290-setup-state-management-integration`
- `feature/new-design`
- `hotfix/db-connection`
- `release-1.2.3`

Bad branch names: :partly_sunny:

- `patch-1` - not enough context
- `camelCasedBranchNames` - camel case
- `PascalCasedBranchNames` - pascal case
- `long-titles-above-80-chars-{.....}` - too long
- `#58/something` - shell understands it as comment

| Branching model                            | Merges                                            |
| ------------------------------------------ | ------------------------------------------------- |
| ![](https://nvie.com/img/git-model@2x.png) | ![](https://nvie.com/img/merge-without-ff@2x.png) |

## React guidelines

### Imports

A common way to sort the imports in the file is by their source: `external`, `absolute`, `relative` separated by an empty line. Each of those groups can be sorted by line length, but that's not super important.

```tsx
import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'

import Nav from 'components/layout/Nav'
import Layout from 'components/layout/Layout'

import SimpleForm from './SimpleForm'
import styles from './advanced.module.scss'
```

### File structure

Inherits AirBnb naming convention <https://github.com/airbnb/javascript/tree/master/react#naming>

Use PascalCase for React components and camelCase for their instances

#### Naming convention react components

Pascal cased file names `src/components/GenericForm.tsx`

```tsx
export default function GenericForm() {}
```

Filename and default component of the file should have the same name.

#### Naming convention non react components

Camel cased file names `src/utils/hooks/useUser.ts`

#### Naming convention folders

Lowercase kebab cased folders `src/components/common/password-reset/ResetForm.tsx`

#### Naming convention pages

Lowercase kebab cased files located in `src/pages/sample-page.tsx` which correspond to `/sample-page` url.

### Types

The common convention is that the main type of the component's props is called after the component itself with suffic `-Props`.
Prop types of `AdvancedForm` becomes `AdvancedFormProps`.

```tsx
type AdvancedFormProps = React.PropsWithChildren({
  title?: string
  age?: number
})

export default function AdvancedForm({ title = 'Nice', children, age }: AdvancedFormProps) {
  return (
    <div title={title} data-age={age}>
      {children}
    </div>
  )
}
```

### Components

#### Preferred export style :sun_with_face

- Nice IDE support and readability

```tsx
export default function RegisterPage() {
  return <div>page</div>
}
```

#### Alternative export styles

- Named function

  :partly_sunny: Allows attaching static props to the function

  ```tsx
  function RegisterPage() {
    return <div>page</div>
  }

  Register.getInitialProps = async (ctx) => {
    return { stars: 128 }
  }

  export default RegisterPage
  ```

- Const arrow function

  :sun_with_face: Nice for locally defined components

  ```tsx
  const RegisterForm = () => <form>page</form>

  export default function RegisterPage() {
    return <RegisterForm />
  }
  ```

  :partly_sunny: Okay for default exports, but not preferred

  ```tsx
  const RegisterPage = () => <form>page</form>

  export default RegisterPage
  ```

- Unnamed arrow function :cloud_with_lightning_and_rain:

  **Discouraged**

  <https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md>

  ```tsx
  export default () => <div>page</div>
  ```

- Class components :cloud_with_lightning_and_rain:

  **Discouraged** as hooks cannot be used inside the class components

  ```tsx
  class Page extends React.Component {
    render() {
      return <div>page</div>
    }
  }
  ```

### Styles

There are three common ways to style a component:

#### Styles using the [`<Box />` component](https://material-ui.com/components/box/)

Single component that inherits all sizing props from MUI <https://material-ui.com/system/basics/#all-inclusive>

:sun_with_face: Nice for quick layouts that should follow the theme

```tsx
<Box component="nav" px={5} mt={2}>
  <a>{t('nav.forgottenPassword')}</p>
</Box>
```

:partly*sunny: Not the best for custom scenarios with more than \_six* props passed to it. **Use `hooks` instead**

:partly*sunny: Not nice when the children have clear nesting structure of more than \_three* levels. **Use `hooks` or `scss` instead**

```tsx
<Box component="nav" px={5} pb={12} mt={2} mb={4} lineHeight={2} letterSpacing={none} fontSize={20}>
  <Box component="span" px={5} pb={12} mt={2} mb={4} lineHeight={2} letterSpacing={none} fontSize={17}>
    <a>{t('nav.forgottenPassword')}</p>
  </Box>
  <Box component="span" px={5} pb={12} mt={2} mb={4} lineHeight={2} letterSpacing={none} fontSize={13}>
    <a>{t('nav.forgottenPassword')}</p>
  </Box>
</Box>
```

#### Styles using `sx` property

:sun_with_face: Nice for very specific styling that leverages `theme` methods and props

```tsx
export default function SomeBox() {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 4,
        margin: theme.spacing(5, 3, 4),
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          color: theme.palette.secondary.dark,
        },
      })}>
      <p>{t('nav.forgottenPassword')}</p>
    </Box>
  )
}
```

:partly_sunny: Too verbose for simple use cases, if it contains less than 2 css rules. **Use `Box` instead**

:partly_sunny: Not the best when dealing with styling of deep nested structures within the same component. **Use `scss` instead**

#### Styles using SCSS files

Next.js supports [SCSS](https://sass-lang.com/) out of the box. Read more at <https://nextjs.org/docs/basic-features/built-in-css-support#sass-support>

File convention is based on a suffix `.module.scss` (ex. `about.module.scss`)

:sun_with_face: Nice when dealing with complex nested structures that are scoped in a single component. When dealing with sub-components we're not sure if some of the rules will be left unused.

```scss
@import 'styles/variables';

.page {
  color: $text-color;

  .nav {
    background-color: $nav-color;

    a {
      text-decoration: none;
      text-transform: uppercase;
    }
  }
}
```

```tsx
import styles from './about.module.scss'
;<Box className={styles.page}>
  <p>{t('nav.forgottenPassword')}</p>
</Box>
```

:partly_sunny: Too verbose for simple use cases, if it contains less than 2 css rules in a dedicated file. **Use `Box` instead**

```scss
@import 'styles/variables';

a {
  text-decoration: none;
}
```

:cloud_with_lightning_and_rain: Cannot use theme support or theme variables **Use `hook` instead**

## Translations (i18n)

### Translation namespaces

Default namespace is called `common` and contains translations used on _all pages_ (Layout, Nav, etc) and is stored at `frontend/public/locales/{locale}/common.json`

Namespaces (scopes, domains) are stored in separate json files at `frontend/public/locales/{locale}/{namespace}.json`
One namespace can combine the translations keys from several pages with common reusable strings ex. `auth` scope collects keys for `login` and `register` pages.

### Translation keys

It is preferred to use [kebab-case](https://en.wiktionary.org/wiki/kebab_case) for translation keys and extract another level of nesting when the common prefix of the keys is above 3 or makes sense to be separated as new keys might be added in the future.

- Namespace is separated with `:`
- Translation nesting levels are separated with `.`
- Words in a translation key are separated with `-`

`domain:pages.nested-level.another-nested-level.translation-key`

```json
{
  "cta": {
    "login": "Log In",
    "register": "Register",
    "send": "Send",
    "reset": "Reset"
  },
  "fields": {
    "email": "Email",
    "password": "Password",
    "confirm-password": "Confirm Password",
    "first-name": "First name",
    "last-name": "Last name"
  },
  "pages": {
    "forgotten-password": {
      "instructions": "To reset your password, please type your email address below.",
      "greeting": "Hello {{name}}!"
    }
  }
}
```

### Usage in React

Usage of translation hook `useTranslation` is preferred over usage of `<Trans />` component, whenever possible.

#### Usage in components

```tsx
import { useTranslation } from 'next-i18next'

export default function CustomComponent() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('nav.custom-page')}</h1>
      <h2>{t('auth:pages.forgotten-password.greeting', { name: 'Interpolation' })}</h2>
      <p>{t('auth:pages.forgotten-password.instructions')}</p>
    </div>
  )
}
```

#### SSR preloading i18n in pages

```tsx
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Page from 'components/forgottenPassword/ForgottenPasswordPage'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'bg', ['common', 'auth'])), // List used namespaces
  },
})

export default Page
```

## Recognizing contributions

We're integrated with <https://allcontributors.org/> bot

Comment on [this issue](https://github.com/podkrepi-bg/frontend/issues/2), asking @all-contributors bot to add a contributor:

```
@all-contributors please add @<username> for <contributions>
```

`<contribution>`: See the [Emoji Key (Contribution Types Reference)](https://allcontributors.org/docs/en/emoji-key) for a list of valid contribution types.
