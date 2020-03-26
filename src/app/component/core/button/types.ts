import {MouseEvent} from 'react';

interface ClickHandler {
  (event: MouseEvent): void
}

export interface ButtonProps {
  text?: string,
  className?: string,
  handler?:  ClickHandler
}