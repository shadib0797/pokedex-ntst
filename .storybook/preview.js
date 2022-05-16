import React from 'react'
import { GlobalStyles, theme } from 'twin.macro'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});


const cache = createCache({ prepend: true, key: 'twin' })

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
}

export const decorators = [
  Story => (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Story />
    </CacheProvider>
  ),
]