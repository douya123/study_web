/**
 * @ _douya : json
 * @ _douya.getStyle(obj, "attr", "value")
 * @ _douya.tabControl.normal(aTitle, aContent, classN)
 * @ _douya.nowTime()
 * 
 * 
 */

var _douya = {
    name : "douya",
    // 参数：a 传入对象， b 传入属性， c 传入属性的值
    getStyle : function (a, b, c) {
        var n = arguments.length;
        if (n === 2) { 
            return a.currentStyle ? a.currentStyle[b] : getComputedStyle(a, false)[b]; 
        }
        if (n === 3) { 
            return a.style[b] = c; 
        }
        if (n !==2 && n !==3) { 
            return '_douya.getStyle(obj, "attr", "value") | error!';
        }
    },
    tabControl : {
        normal : function (aTitle, aContent, classN) {
            var oTrans = "";
            for (var i=0; i<aTitle.length; i++) {
                aTitle[i].index = i;
                aTitle[i].onmouseenter = function () {
                    if (oTrans !== oTrans) {
                        if (this.nextElementSibling) {
                            oTrans = this.nextElementSibling.className;
                        } else {
                            if (this.previousElementSibling) {
                                oTrans = this.previousElementSibling.className;
                            } else {
                                oTrans = "";
                            }
                        }
                    } else {
                        for (var i=0; i<aTitle.length; i++) {
                            aTitle[i].className = oTrans;
                            aContent[i].style.display = "none";
                        }
                        this.className = oTrans + "" + classN;
                        aContent[this.index].style.display = "block";
                    }
                }
            }
        },
        tab2 : function (a) {
            return 0;
        }
    },
    slideShow : function () {

    },

}

    
