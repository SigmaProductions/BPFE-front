import { createGlobalStyle } from 'styled-components';
import { header1, header2, header3 } from './typography/headers';
import { ParagraphBody } from './typography/paragraphs';

export const GlobalStyles = createGlobalStyle`
   :root {
  font-size: 62.5%;
    }
    head, #__next{
        width: 100%;
        height: 100%;
    }
    #__next{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    body{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    h1{
        ${header1};
    }
    h2{
        ${header2};
    }
    h3{
        ${header3};
    }
    p{
        ${ParagraphBody};
    }
    `;
