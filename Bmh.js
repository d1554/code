[Rewrite_local]
^https:\/\/www\.qdz1\.top\/ url request-header (\r\n)User-Agent:.+?(\r\n) request-header $1User-Agent: SenPlayer/5.5.0 (iPhone; iOS 18.3.2; Scale/3.00)$2
[MITM]
hostname = *.qdz1.top,