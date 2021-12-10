import { css } from 'styled-components';
import { color, fontSize, fontWeight, lineHeight } from '../theme';

export const ParagraphBody = css`
  color: ${color.black};
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.medium};
  line-height: ${lineHeight};
`.join('');

export const ParagraphSmall = css`
  color: ${color.brown};
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.thin};
  line-height: ${lineHeight};
`.join('');
