import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import { Avatar } from './Avatar'

const listOfProps = ['src', 'alt', 'palette', 'size', 'fallback', 'variant']

export default {
  component: Avatar,
  title: 'Avatar',
  decorators: [withKnobs],
  parameters: {
    docs: {
      include: new RegExp(`^(${listOfProps.join('|')})`)
    }
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['box', 'rounded']
    }
  },
  args: {
    alt: 'Avatar',
    size: '32px',
    palette: 'primary'
  }
}

export const Basic = args => (
  <Avatar
    alt={text('Label', 'Avatar')}
    src={text('src', '')}
    palette={select(
      'palette',
      { Primary: 'primary', Secondary: 'secondary' },
      'primary'
    )}
    {...args}
  />
)
Basic.args = {
  variant: 'box'
}

export const WithUrl = args => (
  <Avatar
    palette={select(
      'palette',
      { Primary: 'primary', Secondary: 'secondary' },
      'primary'
    )}
    src={text(
      'src',
      'https://lh3.googleusercontent.com/rALGk_PU3JMf_5NS5FEYScz9zxgjRBNePvMheCnHIO_lrSs089QcwguwqRVaDLWWAQ'
    )}
    alt={text('alt', 'Avatar')}
    {...args}
  />
)
WithUrl.args = {
  src: 'https://lh3.googleusercontent.com/rALGk_PU3JMf_5NS5FEYScz9zxgjRBNePvMheCnHIO_lrSs089QcwguwqRVaDLWWAQ',
  variant: 'box'
}

export const Rounded = args => (
  <Avatar
    palette={select(
      'palette',
      { Primary: 'primary', Secondary: 'secondary' },
      'primary'
    )}
    alt={text('alt', 'Avatar')}
    variant='rounded'
    {...args}
  />
)

Rounded.args = {
  variant: 'rounded'
}
