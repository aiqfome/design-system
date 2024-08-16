import React from 'react'

import { render } from '../utils/test/render'

import { LoadingBar } from './LoadingBar'

describe('LoadingBar', () => {
  it('should have to render without crashing', () => {
    const component = render(<LoadingBar />)
    expect(component).toBeTruthy()
  })

  it('should render an empty bar when percent is 0', () => {
    const { getByTestId } = render(<LoadingBar percent={0} />)
    const bar = getByTestId('loading-bar')
    expect(bar).toHaveStyle(`width: 0%`)
  })

  it('should render a full bar when percent is 100', () => {
    const { getByTestId } = render(<LoadingBar percent={100} />)
    const bar = getByTestId('loading-bar')
    expect(bar).toHaveStyle(`width: 100%`)
  })
})
