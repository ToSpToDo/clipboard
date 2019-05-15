(function f() {
    execCommandCheck();

    document.getElementById('clipboardDataBtn').addEventListener('click', function (e) {
        let _text = document.getElementById('clipboardData').innerText
        console.log(_text);
        clipboardDataFunc(_text);
    });

    document.getElementById('execCommandBtn').addEventListener('click', function (e) {
        let _text = document.getElementById('execCommand')
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


function execCommandFunc(node) {
    let range = document.createRange();
    range.selectNode(node);
    window.getSelection().addRange(range);

    try {
        // Now that we've selected the anchor text, execute the copy command
        let successFlag = document.execCommand('copy');

        console.log('Copy email command was ' + successFlag);
        document.getElementById('content').innerText = JSON.stringify(successFlag);
    } catch (err) {
        console.log('Oops, unable to copy');
        document.getElementById('content').innerText = JSON.stringify(err);
    }

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported
    window.getSelection().removeAllRanges();

}

function clipboardFunc() {
    let clipboard = new ClipboardJS('#clipboardBtn');
    clipboard.on('success', function (e) {
        document.getElementById('content').innerText = JSON.stringify(e);

        e.clearSelection();
    });

    clipboard.on('error', function (e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        document.getElementById('content').innerText = JSON.stringify(e);
    });
}


function execCommandCheck() {
    document.getElementById('execCommandCheck').innerText = document.execCommand.toString()
}

window.onerror = function () {
    document.getElementById('err').innerText = JSON.stringify(arguments);
}