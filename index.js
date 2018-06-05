    if (window.Notification) {
    let button = document.getElementById('button'), text = document.getElementById('text');
    
    let popNotice = function() {
        if (Notification.permission == "granted") {
            let notification = new Notification("通道预警", {
                body: '测试用通道出现异常',
                icon: './favicon.ico',
                silent: true,
                sticky: true,
                renotify: false
            })
            
        }    
    }
    
    button.onclick = function() {
        if (Notification.permission == "granted") {
            popNotice();
        } else if (Notification.permission != "denied") {
            Notification.requestPermission(function (permission) {
              popNotice();
            });
        }
    };
} else {
    alert('浏览器不支持Notification');    
}
