(function (w, u) {
    var 
        c,

        douya = function (a ,b) {
            return new douya.fn.init(a,b,c);
        };
        douya.fn= douya.prototype = {
            a : "123",
            init : function (a,b,c) {
                if (!a) {
                    return this;
                }
                if (typeof a === "string") {
                    return 
                }
                if (typeof a === "number") {
                    alert ("number");
                }
            }
            
        }
        // 这里的目的主要还是让这个返回的是一个对象
        douya.fn.init.prototype = douya.fn;
        
        
        
        
        w.douya = w.$ = douya;
})(window);