const http = require('http');
http.createServer(function (req, res) {
    res.write('Hello World!221sdsdasas111фіф12212ывыв12фыфы121211322vv231111');
    res.end();
}).listen(1700);
/*


cf-argo-plugin process-result olegz-test-local --cf-host=http://local.codefresh.io --cf-token=5f3e42bb73f1334ed0bb0f1b.fd70dad43822e17b1f606b02cd7f7a0b --cf-integration="argo" --pipeline-id=argo/cd --build-id=5f3e42bb73f1334ed0bb0f17

 */
