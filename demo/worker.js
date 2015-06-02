onmessage=function(e){
    var j=0;
    for(var i=0;i< e.data;i++){
        j+=1;
    };
    postMessage(j);//传递线程消息
}