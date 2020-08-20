import { createGlobalStyle } from "styled-components";

import inkWoff from "./InkFree.woff";
import inkWoff2 from "./InkFree.woff2";
import comicWoff from "./ComicSansMS.woff";
import comicWoff2 from "./ComicSansMS.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Ink Free';
        src: local('Ink Free'), local('InkFree'),
        url(${inkWoff2}) format('woff2'),
        url(${inkWoff}) format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Comic Sans MS';
        src: local('Comic Sans MS'), local('ComicSansMS'),
        url(${comicWoff2}) format('woff2'),
        url(${comicWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
