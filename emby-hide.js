// ==UserScript==
// @name         Emby Header Cleaner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove specific headers from Emby requests
// @author       Your Name
// @match        *://www.qdz1.top/emby/Users/AuthenticateByName*
// @grant        none
// ==/UserScript==

let headers = $request.headers;

// 删除敏感头字段
delete headers['X-Emby-Client'];
delete headers['X-Emby-Authorization'];

$done({headers});