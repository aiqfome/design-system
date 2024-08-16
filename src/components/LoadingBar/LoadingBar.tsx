import React from 'react'
import { Flex, Props } from '../Flex'

interface LoadingBarProps extends Props {
  colorBar?: string
  percent?: number
}

export const LoadingBar = ({
  percent = 0,
  colorBar = 'darkPink',
  ...props
}: LoadingBarProps) => {
  return (
    <Flex
      backgroundColor='mediumGrey'
      height='12px'
      width='160px'
      borderRadius='8px'
      {...props}
    >
      <Flex
        data-testid='loading-bar'
        backgroundColor={colorBar}
        height='100%'
        width={`${percent}%`}
        borderRadius='8px'
      />
    </Flex>
  )
}
