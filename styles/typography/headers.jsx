import { css } from 'styled-components';
import { color, fontSize, fontWeight, lineHeight } from '../theme';

export const header1 = css`
    color: ${color.black};
    font-size: ${fontSize.turbo};
    font-weight: ${fontWeight.extrabold};
    line-height: ${lineHeight};
`.join('');

export const header2 = css`
    color: ${color.black};
    font-size: ${fontSize.xlarge};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight};
`.join('');

export const header3 = css`
    color: ${color.black};
    font-size: ${fontSize.large};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight};
`.join('');
