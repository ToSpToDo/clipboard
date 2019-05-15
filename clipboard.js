(function f() {
    document.getElementById('clipboardDataBtn').addEventListener('click', function (e) {
        let _text = document.getElementById('clipboardData').innerText
        console.log(_text);
        clipboardDataFunc(_text);
    });

    document.getElementById('execCommandBtn').addEventListener('click', function (e) {
        let _text = document.getElementById('execCommand').innerText
        console.log(_text);
        execCommandFunc(_text);
    })

    clipboardFunc();

})();


function clipboardDataFunc(_text) {
    if (window.clipboardData.setData("text", _text)) {
        alert(`复制成功!${_text}`)
    } else {
        alert(`复制失败!${_text}`)
    }

}


function execCommandFunc() {
    let obj=document.getElementById('execCommand');
    obj.select();
    let js=obj.createTextRange();
    js.execCommand("Copy");
}

function clipboardFunc() {
    let clipboard = new ClipboardJS('#clipboardBtn');

    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        alert(`Text:, ${e.text}`);
        console.info('Trigger:', e.trigger);

        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });
}