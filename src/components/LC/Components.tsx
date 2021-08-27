/* eslint-disable react/display-name */
import { Box as OriginalBox } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';
import { fixedHeight, fixedWidth } from 'styled-mixins';

import { getHorizontalProps, getVerticalProps } from './props';
import { CommonProps } from './types';

const spaceUnit = 1;

export const Space = styled.div<{ size: number }>(({ size = 1 }) => ({
  ...fixedHeight(spaceUnit * size),
  ...fixedWidth(spaceUnit * size),
}));

const HorizontalSC = styled(OriginalBox)<CommonProps>(getHorizontalProps);

const VerticalSC = styled(OriginalBox)<CommonProps>(getVerticalProps);

export const Horizontal: React.FC<CommonProps> = forwardRef<
  HTMLDivElement,
  Omit<CommonProps, 'invert'>
>((props, ref) => <HorizontalSC {...props} ref={ref} />);

export const Vertical: React.FC<CommonProps> = forwardRef<
  HTMLDivElement,
  Omit<CommonProps, 'invert'>
>((props, ref) => <VerticalSC {...props} ref={ref} />);

export const MHorizontal = motion(Horizontal);

export const MVertical = motion(Vertical);
