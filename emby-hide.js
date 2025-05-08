// emby-hide.js
let headers = $request.headers;

// 删除敏感头字段
delete headers['X-Emby-Client'];
delete headers['X-Emby-Authorization'];

$done({headers});