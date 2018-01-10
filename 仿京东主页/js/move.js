/* 运动之前一般都要先获取元素的属性值吧 */
    function _getStyle(obj, attr, value) {
        if (arguments.length === 2) {
            if (obj.currentStyle) {
                return obj.currentStyle[attr];
            } else {
                return getComputedStyle(attr, false)[attr];
            } 
        } else {
            obj.style[attr] = value;
        }
    }
/* getid 的方法，本来想写一个复杂一点的，但是发现写jq的那种判断很难，所有先写个简单的，简化一下代码量就好了 所有就不用$了*/
    function _id(a) {
        return document.getElementById(a);
    }
/* 下面写基础的运动框架 */
    window.onload = function () {
        var oDiv = document.getElementById('div1');
        var timer = setInterval(function () {
            if (oDiv.offsetLeft === 300) {
                clearInterval(timer);
            }
            oDiv.style.left = oDiv.offsetLeft + 1 +"px";
        }, 1000/60);
        var oDiv2 = document.getElementById("div2");
        oDiv2.onmouseover = function () {
            sidebar(0,"w");
            alert('a');
        }
    }

/* sidebar */
    /* a 表示是哪边的offset */
    function sidebar(s, a) {
        var speed = 10;
            if (a === "n") {
                s > this.offsettop ? speed = speed : speed = -speed;
                clearInterval(this.timer);
                this.timer = setInterval (function() {
                    if (this.b === s) {
                        clearInterval(this.timer);
                    } else {
                        this.style[c] = this[b] + speed + "px";
                    }
                },1000/60);
            } 
            if (a === "e") {
                s > this.offsetright ? speed = speed : speed = -speed;
                itr("offsetright","right");
            } 
            if (a === "s") {
                s > this.offsetbottom ? speed = speed : speed = -speed;
                itr("offsetbottom","bottom");
            } 
            if (a === "w") {
                s > this.offsetLeft ? speed = speed : speed = -speed;
                clearInterval(this.timer);
                this.timer = setInterval (function() {
                    if (this.offsetLeft === s) {
                        clearInterval(this.timer);
                    } else {
                        this.style.left = this.offsetLeft + speed + "px";
                    }
                },1000/60);
            }
            function itr(b,c) {
                alert(this);
                clearInterval(this.timer);
                this.timer = setInterval (function() {
                    if (this.b === s) {
                        clearInterval(this.timer);
                    } else {
                        this.style[c] = this[b] + speed + "px";
                    }
                },1000/60);
            }
    }

/* 这下面用json来写一个函数集 */
var Douya = {
    _getStyle : function(obj, attr, value) {
                if (arguments.length === 2) {
                    if (obj.currentStyle) {
                        return obj.currentStyle[attr];
                    } else {
                        return getComputedStyle(attr, false)[attr];
                    } 
                } else {
                    obj.style[attr] = value;
                }
            }
}


