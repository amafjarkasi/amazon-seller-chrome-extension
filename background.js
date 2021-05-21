chrome.browserAction.onClicked.addListener(function (tab) {
        var endpoint_url = 'https://hook.integromat.com/juqo1kw4cp5r77v75l0icdststkdgm80';        
        title = tab.title;
        url = tab.url;
        console.log(endpoint_url);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", endpoint_url);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({url: url, title: title}));
    });

