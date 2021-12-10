import { createGlobalStyle } from 'styled-components';
import { header1, header2, header3 } from './typography/headers';
import { ParagraphBody } from './typography/paragraphs';

export const GlobalStyles = createGlobalStyle`
   :root {
  font-size: 62.5%;
    }
    
    body{
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
