function ajaxQueue(url,options,queue) {
    queue = queue || 'default';
    
    options = options|| {};

    if(!requestQueue[queue]) requestQueue[queue] = [];

    options.completeListener = function() {       
        
        if(options.completeListener) {
            
            options.completeListener.apply(this,arguments);        
        };
        
        requestQueue[queue].shift();        
        
        if(requestQueue[queue][0]) {
            requestQueue[queue][0].send()            
        }
    }
}