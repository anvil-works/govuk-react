import * as React from 'react';
import { LEVEL_SIZE } from '@govuk-react/constants';
import { Heading } from './heading';

export const H1: React.FC<React.ComponentProps<typeof Heading>> = React.forwardRef((props, ref) => (
  <Heading as="h1" size={LEVEL_SIZE[1]} {...props} ref={ref}/>
));
export const H2: React.FC<React.ComponentProps<typeof Heading>> = React.forwardRef((props, ref) => (
  <Heading as="h2" size={LEVEL_SIZE[2]} {...props} ref={ref}/>
));
export const H3: React.FC<React.ComponentProps<typeof Heading>> = React.forwardRef((props, ref) => (
  <Heading as="h3" size={LEVEL_SIZE[3]} {...props} ref={ref}/>
));
export const H4: React.FC<React.ComponentProps<typeof Heading>> = React.forwardRef((props, ref) => (
  <Heading as="h4" size={LEVEL_SIZE[4]} {...props} ref={ref}/>
));
export const H5: React.FC<React.ComponentProps<typeof Heading>> = React.forwardRef((props, ref) => (
  <Heading as="h5" size={LEVEL_SIZE[5]} {...props} ref={ref}/>
));
export const H6: React.FC<React.ComponentProps<typeof Heading>> = React.forwardRef((props, ref) => (
  <Heading as="h6" size={LEVEL_SIZE[6]} {...props} ref={ref}/>
));
