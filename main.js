require.config({ paths: { 'vs': 'monaco/min/vs' } });
require(['vs/editor/editor.main'], function () {
    var editor = monaco.editor.create(document.getElementById('editor'), {
        value: [
            '<!DOCTYPE html>',
            '<html lang="en"></html>',
            '<head>',
            '\n</head>',
            '<body>',
            '\n</body>',
            '</html>'
        ].join('\n'),
        language: 'html'
    });
    //The current out-of-the-box available themes are: 'vs' (default), 'vs-dark', 'hc-black'.
    monaco.editor.setTheme("vs-dark");
    function refresh() {
        //gets editor's content....
        var content = editor.getValue();
        //writes to an iframe..
        var iframeDocument = document.getElementById("iframe").contentWindow.document;
        iframeDocument.open('text/html', 'replace');
        iframeDocument.write(content);
        iframeDocument.close();

    }
    document.getElementById("editor").onkeyup = refresh;
});