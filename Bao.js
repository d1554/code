// emby_client_clean.js
let headers = $request.headers;

// 修改 X-Emby-Client 为 SenPlayer
headers['X-Emby-Client'] = 'SenPlayer';

// 修改 User-Agent 为指定值
^https:\/\/www\.qdz1\.top\/ url request-header (\r\n)User-Agent:.+?(\r\n) request-header $1User-Agent: SenPlayer/5.5.0 (iPhone; iOS 18.3.2; Scale/3.00)$2

$done({ headers });