function ajaxQueue(url,options,queue) {
    queue = queue || 'default';
    
    options = options|| {};

    if(!requestQueue[queue]) requestQueue[queue] = [];
    
    var userCompleteListener = options.completeListener;

    options.completeListener = function() {
        
        if(userCompleteListener) {
            userCompleteListener.apply(this,arguments);        
        };
        
        requestQueue[queue].shift();        
        
        if(requestQueue[queue][0]) {
            requestQueue[queue][0].send()            
        }
    }
}