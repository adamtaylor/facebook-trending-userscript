// ==UserScript==
// @id            Remove Facebook Trending
// @name          Remove Facebook Trending
// @version       1.0
// @author        Adam Taylor
// @description   Remove Facebook trending box by altering the CSS
// @include       http://facebook.com/*
// @include       https://facebook.com/*
// @include       http://*.facebook.com/*
// @include       https://*.facebook.com/*
// ==/UserScript==

GM_addStyle("._5mym { display: none; }");
