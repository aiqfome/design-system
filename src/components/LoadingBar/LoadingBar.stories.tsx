import React from 'react'

import { Flex } from '../Flex'

import { createPageExport } from '../../utils/storybook'
import { LoadingBar } from './LoadingBar'

export const Basic = () => (
  <Flex justifyContent='center' alignItems='center' height='100vh' gap='22px'>
    <LoadingBar percent={0} />
    <LoadingBar percent={50} />
    <LoadingBar percent={100} />
  </Flex>
)

export default createPageExport(Basic, 'LoadingBar', ['color', 'size'])
