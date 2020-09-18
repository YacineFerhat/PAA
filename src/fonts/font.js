import { createGlobalStyle } from "styled-components";

import inkWoff from "./InkFree.woff";
import inkWoff2 from "./InkFree.woff2";
import comicWoff from "./ComicSansMS.woff";
import comicWoff2 from "./ComicSansMS.woff2";
import autolinkWoff from "./Autolinker.woff";
import autolinkWoff2 from "./Autolinker.woff2";
import autolinkTtf from "./Autolinker.ttf";
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

    @font-face {
        font-family: 'Autolinker;
        src: local('Autolinker'), local('Autolinker'),
        url(${autolinkWoff}) format('woff2'),
        url(${autolinkTtf}) format('ttf'),
        url(${autolinkWoff2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
