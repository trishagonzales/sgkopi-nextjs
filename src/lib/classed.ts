import { twMerge } from 'tailwind-merge';
import { createClassed } from '@tw-classed/react';

export const { classed } = createClassed({ merger: twMerge });
export { classed as classedCore } from '@tw-classed/core';
