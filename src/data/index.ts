import { Story } from '../types';
import { ot1Stories } from './stories-ot1';
import { ot2Stories } from './stories-ot2';
import { nt1Stories } from './stories-nt1';
import { nt2Stories } from './stories-nt2';

// Combine all stories from every book of the Bible
export const stories: Story[] = [
  ...ot1Stories,
  ...ot2Stories,
  ...nt1Stories,
  ...nt2Stories,
];
