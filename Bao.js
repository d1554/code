// emby_client_clean.js
let headers = $request.headers;

// 修改 X-Emby-Client 为 SenPlayer
headers['X-Emby-Client'] = 'SenPlayer';


$done({ headers });