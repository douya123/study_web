/* 
    还是全部用js本来的一些简单的dom和bom操作，像使用对象，但是发现我现在理解还不充分，
    到最后了有时间的话再把这个代码改一些吧。。。
    我用对象的一些现在还不熟悉的地方：怎么把这些连接起来，还有就是如果用了对象的话感觉对我现在的技术来说还更不好操作
    倒是如果用了对象的话，书写以及很多东西都要简单的多。。。但是关键是自己还不能完全掌握的时候还是用最简单最笨的方法来写
    而且用这种方法来写，var的比较多的话，对性能的影响也会比较多吧。所以现在感觉面向对象非常重要的
*/
window.onload = function () {

    /* 这里是地区部分的js，暂时没有去封装，就这样先写着 */
        var oBtnArea = document.getElementById('area');
        var oArea = document.getElementById('area-case');
        var oFont = document.getElementById('area-font');
        var oTrans = "";  //这个是公用的用来储存临时的class的变量
        // var oTrans = oFont.className;
        var oTrans1 = oFont.className;
        oBtnArea.onmouseover = function () {
            // oTrans = oFont.className;
            // oTrans = oTrans1;
            oArea.style.display = 'block';        
            oFont.className = oTrans1 + ' active';
        }
        oBtnArea.onmouseout = function () {
            oArea.style.display = 'none';
            oFont.className = oTrans1;
        }
        function aBtnArea() {
            oArea.style.display = 'none';
            oFont.className = oTrans1;
        }
        // alert(oTrans+'active');
        var aArea = oArea.getElementsByTagName('div');
        var oAreaAlter = document.getElementById('area-alter');
        var oTopNavLeft = document.getElementById('topnav-left');
        for (var i = 0; i < aArea.length; i++) {
            aArea[i].index = i;
            aArea[i].onclick = function () {
                // aBtnArea();  // 暂时不让你点击就消失
                if (this.index == 9 || this.index == 10 || this.index == 33) {
                    oTopNavLeft.style.width = '269.56px';
                    oBtnArea.style.width = '69.56px';
                } else {
                    oTopNavLeft.style.width = '257.56px';
                    oBtnArea.style.width = '57.56px';
                }
                oTrans = "";
                for (var i = 0; i < aArea.length; i++) {
                    aArea[i].children[0].className = oTrans;
                }
                oAreaAlter.innerHTML = this.children[0].innerHTML;
                this.children[0].className = 'a-active1';
                // alert(a);
                // alert(oAreaAlter.innerHTML);
                // 之前我都不知道标签的要第一个元素的innerhtml才是
                // alert(this.children[0].innerHTML);
            }
        }
        // alert(oAreaAlter);

    /* 我的京东部分 */
        var oBtnUser = document.getElementById('user');
        var oUserFont = document.getElementById('user-font');
        var oUser = document.getElementById('user-case');
        // var oTrans = null;
        oBtnUser.onmouseover = function () {
            oTrans = oUserFont.className;
            oUser.style.display = 'block';
            oUserFont.className = oTrans + ' active';
        }
        oBtnUser.onmouseout = function () {
            oUser.style.display = 'none';
            oUserFont.className = oTrans;
        }


    /* 客户服务部分 */
        var oBtnServices = document.getElementById('services');
        var oServicesFont = document.getElementById('services-font');
        var oServices = document.getElementById('services-case');
        oBtnServices.onmouseover = function () {
            oTrans = oServicesFont.className;
            oServices.style.display = 'block';
            oServicesFont.className = oTrans + ' active';
        }
        oBtnServices.onmouseout = function () {
            oServices.style.display = 'none';
            oServicesFont.className = oTrans;
        }
    

    /* 网站导航部分 */
        var oBtnWebnav = document.getElementById('webnav');
        var oWebnavFont = document.getElementById('webnav-font');
        var oWebnav = document.getElementById('webnav-case');
        oBtnWebnav.onmouseover = function () {
            oTrans = oWebnavFont.className;
            oWebnav.style.display = 'block';
            oWebnavFont.className = oTrans + ' active';
        }
        oBtnWebnav.onmouseout = function () {
            oWebnav.style.display = 'none';
            oWebnavFont.className = oTrans;
        }
     
    /* 我的购物车 */
        var oShoppingcart = document.getElementById('shoppingcart');
        var oShoppingcartW = document.getElementById('shoppingcart-w');
        var oShoppingcartCase = document.getElementById('shoppingcart-case');
        oShoppingcart.onmouseover = function () {
            oShoppingcartW.style.borderTop = '1px solid #ccc';
            oShoppingcartW.style.borderLeft = '1px solid #ccc';
            oShoppingcartW.style.borderRight = '1px solid #ccc';
            oShoppingcartW.style.borderBottom = '1px solid #fff';
            oShoppingcartW.style.zIndex = '5';
            oShoppingcartCase.style.display = 'block';
            // oShoppingcartW.style.backgroundColor = 'blue';
        }
        oShoppingcart.onmouseout = function () {
            oShoppingcartCase.style.display = 'none';
            oShoppingcartW.style.border = '1px solid #e3e4e5';

            
        }
    /* 聚焦中关于导航的js */
        var oLeftNav = document.getElementById('fs-leftnav1');
        var aLeftNav = oLeftNav.getElementsByTagName('li');
        var oMenuW = document.getElementById('menu-w');
        var aMenuW = oMenuW.children;
        var timer;
        // var oTrans_1 = aLeftNav[0].className;
        //还是分层两部分来做：
        for (var i = 0; i < aLeftNav.length; i++) {
            aLeftNav[i].index = i;
            aMenuW[i].index = i;
            aLeftNav[i].onmouseover = function () {
                if (this.nextElementSibling) {
                    oTrans = this.nextElementSibling.className;
                } else {
                    /* 
                        以后再进一步的思考这里
                        为了解决ie8，写一个判断来试试 ：嗯，这样写解决了ie7/8 的不能点击的问题， 嗯ie6是完全不兼容 
                    */
                    if (this.previousElementSibling) {
                        oTrans = this.previousElementSibling.className;
                    } else {
                        oTrans = "";
                    }
                    
                    /* 下边是原来的 */
                    // oTrans = this.previousElementSibling.className;
                }
                    for (var i = 0; i < aLeftNav.length; i++) {
                        aMenuW[i].style.display = 'none';
                    }
                this.className = oTrans + ' active1';
                oMenuW.style.display = 'block';
                aMenuW[this.index].style.display = 'block';
            }
            aLeftNav[i].onmouseout  = function () {
                this.className = oTrans;
            }
            oMenuW.onmouseout = oLeftNav.onmouseout = function () {
                timer = setTimeout(function () {
                    oMenuW.style.display = 'none';
                },200); 
            }
            oLeftNav.parentNode.onmouseover = function () {
                clearTimeout(timer);
            }
            aMenuW[i].onmouseover = function () {
                clearTimeout(timer);
                aLeftNav[this.index].className = oTrans + ' active1';
            }
            aMenuW[i].onmouseout = function () {
                aLeftNav[this.index].className = oTrans;
            }
            // // alert(oTrans);
            // oLeftNav[i].onmouseout = function () {
            //     this.className = oTrans;
            // }   
        }

        /* 要删掉的 */
            // alert(aMenuW.length);
            // for (var i = 0; i < aLeftNav.length; i++) {
            //     aLeftNav[i].index = i;
            //     oTrans = aLeftNav[0].className;
            //     aLeftNav[i].onmouseover = function () {
            //         for (var i = 0; i < aLeftNav.length; i++) {
            //             aLeftNav[i].className = oTrans;
            //             aMenuW[i].style.display = 'none';
            //         }
            //         this.className = oTrans + ' active1';
            //         oMenuW.style.display = 'block';
            //         aMenuW[this.index].style.display = 'block';
            //     }
            //     oLeftNav.onmouseout = function () {
            //         aLeftNav[i].className = oTrans;
            //         oMenuW.style.display = 'none';
            //     }
            //     aMenuW[i].onmouseover = function () {
            //         this.style.display = 'block';
            //     }
            //     // aMenuW[i].onmouseout = function () {
            //     //     this.style.display = 'none';
            //     // }
            // }
            // // for (var i = 0; i < aLeftNav.length; i++) {
                
            // // }
        

    /* fs里面轮播的js */
        var oSlideshowPhoto = document.getElementById('slideshow-photo');
        var aSlideshowPhoto = oSlideshowPhoto.getElementsByTagName('li');
        var oIndicator = document.getElementById('slideshow-indicator');
        var aIndicator = oIndicator.getElementsByTagName('i');
        var oBtnPrew = document.getElementById('slideshow-prew');
        var oBtnNext = document.getElementById('slideshow-next');
        var n = aIndicator.length;
        var j = 0;
        var timer1;
        var k;
        // var k = 0;
        for (var i = 0; i < aIndicator.length; i++) { 
            aIndicator[i].index = i;
            aSlideshowPhoto[i].index = i;
            aIndicator[i].onmouseover = function () {
                // var j = k;
                for (var i = 0; i < aIndicator.length; i++) {
                    aIndicator[i].className = '';
                    aSlideshowPhoto[i].className = '';
                }
                this.className = 'indicator';
                aSlideshowPhoto[this.index].className = 'appear';
                j = this.index;
            }
            oBtnNext.onclick = function () {
                for (var i = 0; i < aIndicator.length; i++) {
                    aIndicator[i].className = '';
                    aSlideshowPhoto[i].className = '';
                }
                if (j < n - 1) {
                    j++;
                } else {
                    j = 0;
                }
                aIndicator[j].className = 'indicator';
                aSlideshowPhoto[j].className = 'appear';
                // if (j < n-2) {
                //     j++;
                // } else {
                //     j = -1;
                // }
                return j; 
            }
            oBtnPrew.onclick = function () {
                // alert(k);
                // var j = k;
                for (var i = 0; i < aIndicator.length; i++) {
                    aIndicator[i].className = '';
                    aSlideshowPhoto[i].className = '';
                } 
                if (j > 0) {
                    j--;
                } else {
                    j = n - 1;
                }
                aIndicator[j].className = 'indicator';
                aSlideshowPhoto[j].className = 'appear';
                return j;
            }
            oBtnNext.onmouseover = oBtnPrew.onmouseover = function () {
                oBtnPrew.style.display = 'block';
                oBtnNext.style.display = 'block';
                this.style.backgroundColor = 'blue';
                this.style.backgroundColor = 'blue';
                k = 1;
            }
            oBtnNext.onmouseout = oBtnPrew.onmouseout = function () {
                oBtnPrew.style.display = 'none';
                oBtnNext.style.display = 'none';
                this.style.backgroundColor = 'red';
                this.style.backgroundColor = 'red';
            }
            aSlideshowPhoto[i].onmouseenter = aIndicator[i].onmouseenter = function() {
                k = 1;
                oBtnPrew.style.display = 'block';
                oBtnNext.style.display = 'block';
            }   
            aSlideshowPhoto[i].onmouseout = aIndicator[i].onmouseout = function() {
                // 1.当document.onmousemove的时候其实是没有产生新的k的，而是使用的这里传出的k
                k = 2;
                oBtnPrew.style.display = 'none';
                oBtnNext.style.display = 'none';
            }
            // if (k == 1) {
            //     oBtnPrew.style.display = 'block';
            //     oBtnNext.style.display = 'block';
            // } else if (k == 2) {
            //     oBtnPrew.style.display = 'none';
            //     oBtnNext.style.display = 'none';
            // }          
        } 
        /* 一定要放在循环外边 */
        
        timer1 = setInterval(oBtnNext.onclick,2000);
        document.onmousemove = function () {
            // console.log(k);
            if (k == 1) {
                clearInterval(timer1);
            } else if (k == 2) {
                k++;    // k + 1 让它不在进入这个if语句
                if (k == 3) {
                    clearInterval(timer1);
                    timer1 = setInterval(oBtnNext.onclick,2000);
                }
                // alert(k);
                // 2.所以在这里的时候k就已经变为3了，不会进入这个循环了，而只有当重新进入aSlideshowPhoto[i].onmouseout的时候，才会产生k=2；
            } 
        }
        /* 轮播的淡入淡出还没有做，就是js的运动部分 */
        
    /* fs里的公告选项卡效果 */
        var oSales = document.getElementById('sales');
        var oDeclare = document.getElementById('declare');
        var oSalesF = document.getElementById('sales-f');
        var oDeclareF = document.getElementById('declare-f');
        var oNoticeRed = document.getElementById('notice-red');
        oSales.onmouseover = function () {
            oSalesF.style.display = 'block';
            oDeclareF.style.display = 'none';    
            oNoticeRed.style.transform = '';         
            /* transform其实可以用js的运动来写，兼容性可能就好很多 */          
        }
        oDeclare.onmouseover = function () {
            oDeclareF.style.display = 'block';
            oSalesF.style.display = 'none';  
            oNoticeRed.style.transform = 'translateX(59px)';                   
        }  
    /* floor里的计时器 */
        /* 这里的计时器之后再写过，这个只能一次订到一个时间，不能设置 */
        // var sy, sm, sd, sh, smin, ss;
        // sy = 2018; sm = 1; sd = 8; sh = 23; smin = 44; ss = 5;
        // sm = _t2(sm);sd = _t2(sd);sh = _t2(sh);smim = _t2(smin);ss = _t2(ss);
        // var settime = sy + "/" + sm + "/" + sd + "/," + sh + ":" + smin + ":" + ss;
        // var endTime = new Date(settime);
        // var aCont = new Array();
        var hour = document.getElementById('h');
        var minute = document.getElementById('m');
        var second = document.getElementById('s');
        var sy, sm, sd, sh, smin, ss;
        sy = 2018; sm = 1; sd = 10; sh = 21; smin = 57; ss = 5;
        function t() {
            sm = _t2(parseInt(sm));sd = _t2(parseInt(sd));sh = _t2(parseInt(sh));smim = _t2(parseInt(smin));ss = _t2(parseInt(ss));
            var settime = sy + "/" + sm + "/" + sd + "/," + sh + ":" + smin + ":" + ss;
            var endTime = new Date(settime);
            // var aCont = new Array();
            var d, h, m, s;
            var nowTime = new Date();
            var x = endTime - nowTime;
            if ( x > 0) {
                d = Math.floor(x/1000/60/60/24);    //这里是相差的天数
                h = Math.floor(x/1000/60/60%24);    //这里是相差的小时
                m = Math.floor(x/1000/60%60);       //这里是相差的分钟数
                s = Math.floor(x/1000%60);          //这里是相差的秒数
                // if(h==0 && m==0 && s==0) {
                //     sy = parseInt(nowTime.getFullYear());
                //     sd = parseInt(nowTime.getDay());
                //     sh = parseInt(sh);
                //     if ((sh + 2) > 24 ) {
                //         sh = 0;
                //         sd++;
                //         if (sd > 365) {
                //             sd = 0;
                //             sy++;
                //         }
                //     } else {
                //         sh = sh + 2;
                //     }
                // }
                d = _t2(d); h = _t2(h); m = _t2(m); s = _t2(s);
                // aCont[0] = d; aCont[1] = h; aCont[2] = m; aCont[0] = s;
                /* 这里让它返回出数组 */
                hour.innerHTML = h;
                minute.innerHTML = m;
                second.innerHTML = s;
                
                // return aCont;
            } 
            // else {
                // 这下面的切换一直是有问题的，每次太慢了
                /* 这里加载的速度还是太慢，要从天数开始加，不然小时的花要加12次，大大的拖慢了计时器加载的速度 */
                /* 重新写计算的顺序，减少加载时间 */
                sy = parseInt(nowTime.getFullYear());
                sd = parseInt(nowTime.getDay());
                sh = parseInt(sh);
                if ((sh + 2) > 24 ) {
                    sh = 0;
                    sd++;
                    if (sd > 365) {
                        sd = 0;
                        sy++;
                    }
                } else {
                    sh = sh + 2;
                }
                /* 获取当前的天数 */
                // sd = parseInt(nowTime.getDay());
                // sh = parseInt(sh) + 2;
                // if (sh > 24) {
                //     sh = 0;
                //     sd = parseInt(sd) + 1;
                //     aCont[0] = sh;
                //     aCont[1] = sd;
                //     if (sd > 365) {
                //         sd = 0;
                //         parseInt(sy) + 1;
                //         aCont[1] = sd;
                //         aCont[2] = sy;
                //     }
                // } else {
                //     aCont[0] = sh;
                // }
            // }           
        }
        /* 之后要解决时间加载太慢的问题 */
        t();
        setInterval(function() {
            t();
            /* 这是之前错误的一种想法，有时间再整理到错题集里 */
            // /* 判断并赋值 */
            // if ( typeof t()[2] === "number") {
            //     alert("y:" + t()[2])
                
            //     sy = t()[2];
            // } else if ( typeof t()[1] === "number") {
            //     alert("d:" + t()[1])
            //     sd = t()[1];
            // } else if ( typeof t()[0] === "number") {
            //     alert("h:" + t()[0])
            //     sh = t()[0];
            //     alert(sh)
            // }
            // alert("小时" + sh)
            // alert("天数" + sd)
        },1000);
            
        // if ( h == 00 && m == 00 && s == 00 ) {
        //     alert("抢购完毕，期待下轮");
        // }
    /* 倒计时那里的切换图片 */
        var oJd1_2_point = document.getElementById('jd-1_2pointer');
        var aJd1_2_point = oJd1_2_point.getElementsByTagName('i');
        var oJd1_2_photo = document.getElementById('jd-1_2-photo');
        var aJd1_2_photo = oJd1_2_photo.getElementsByTagName('a');
        // _tabControl(aJd1_2_point, aJd1_2_photo, " active2");
        _douya.tabControl.normal(aJd1_2_point, aJd1_2_photo, "active2");
        /* 这一段是测试那个函数正确没有的 */
        // for (var i=0; i<aJd1_2_point.length; i++) {
        //     aJd1_2_point[i].style.backgroundColor = 'red';
        //     aJd1_2_point[i].onmouseenter = function () {
        //         this.backgroundColor = 'red';
        //     }
        // }
    /* 关于物品切换 */
        // 还是乖乖的获取元素来写，this对现在的我来说还有点难
        var jd1_1 = document.getElementById('jd-1_1');
        var jd1_1_w = document.getElementById('jd-1_1-w');
        var jd1_1_prew = document.getElementById('jd-1_1_prew');
        var jd1_1_next = document.getElementById('jd-1_1_next');
        var timer3 = null;
        jd1_1.onmouseover = function () {
            jd1_1_prew.style.display = jd1_1_next.style.display = 'block';
        }
        jd1_1.onmouseout = function () {
            jd1_1_prew.style.display = jd1_1_next.style.display = 'none';
        }
        /* 这两个的定时器必须是一样的 */
        jd1_1_prew.onclick = function () {
            var jd_width = parseInt(_douya.getStyle(jd1_1, "width"));
            var jd_offsetleft = jd1_1_w.offsetLeft;
            var end_s = jd_offsetleft + jd_width;
            if (jd_offsetleft % jd_width == 0) {
                clearInterval(timer3);
                timer3 = setInterval(function() {
                    var speed = Math.abs((end_s - jd1_1_w.offsetLeft)/8);
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if (jd1_1_w.offsetLeft > end_s) {

                        jd1_1_w.style.left = end_s + "px";
                        clearInterval(timer3);
                    } else {
                        jd1_1_w.style.left = jd1_1_w.offsetLeft + speed + "px";
                    }
                },1000/60)
            }
            
        }
        jd1_1_next.onclick = function () {
            var jd_width = parseInt(_douya.getStyle(jd1_1, "width"));
            var jd_offsetleft = jd1_1_w.offsetLeft;
            var end_s = jd_offsetleft - jd_width;
            if (jd_offsetleft % jd_width == 0) {    //这个if是判断只有当上一个运动完成才能进行下一个,必须位置对齐
                clearInterval(timer3);
                timer3 = setInterval(function() {
                    // var a = jd1_1_w.offsetLeft;
                    // if ( end_s === -(7*jd_width)) {
                    //     jd1_1_w.style.left = "-799px";
                    //     return a = "-1598px";
                    // }
                    var speed = Math.abs((end_s - jd1_1_w.offsetLeft)/8);
                    // 做变速运动的话，这下面这句话很重要
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if (jd1_1_w.offsetLeft < end_s) {
                        jd1_1_w.style.left = end_s + "px";
                        clearInterval(timer3);  
                    } else {
                        jd1_1_w.style.left = jd1_1_w.offsetLeft - speed + "px";
                    }
                    // if (jd1_1_w.offsetLeft <= -4794) {
                    //     jd1_1_w.style.left = "-799px";
                    // }
                },1000/60)
            } 
        }
        /* 本来想不开这个定时器然后无缝切换，但是发现那个只要两个真的实现不了那么无缝。。。 */
        setInterval(function() {
            if (jd1_1_w.offsetLeft <= -4794) {
                jd1_1_w.style.left = "-799px";
                clearInterval(timer3);
            }
            if (jd1_1_w.offsetLeft >= 0) {
                jd1_1_w.style.left = "-3995px";
                clearInterval(timer3);
            }
        },1000/60)
        
    /*  */
        


    

}

/* 转换为正数 */ 
function _z(a) {
    return a < 0 ? -a : a;
}
/* t2（）是把小于10的数字变为字符串并且补0 */
    function _t2(tn) {
        if (tn < 10) {
            return "0" + tn;
        } else {
            return "" + tn;
        }
    }

/* 获取非行间样式 */
    function getStyle(obj, attr, value) {
        if(arguments.length==2) {
            if(obj.currentStyle) {
                return obj.currentStyle[attr];
            } else {
                return getComputedStyle(obj, false) [attr];
            }
        } else {
            obj.style[attr]= value; 
        }
    }
/* 试着自己写一个选项卡的js, 卧槽竟然写成功了，可以解决一些选项卡的重复类容了 */
/* aTitle表示的是标题所在的列表，aContent表示的是内容的列表，classname表示的是标题列表的样式 */
    function _tabControl(aTitle, aContent, classN) {
        var oTrans = "";
        for (var i=0; i<aTitle.length; i++) {
            aTitle[i].index = i;
            aContent[i].index = i;
            aTitle[i].onmouseenter = function () {
                if (oTrans !== oTrans) {
                    if (this.nextElementSibling) {
                        oTrans = this.nextElementSibling.className;
                    } else {
                        /* 
                            以后再进一步的思考这里
                            为了解决ie8，写一个判断来试试 ：嗯，这样写解决了ie7/8 的不能点击的问题， 嗯ie6是完全不兼容 
                        */
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
                    // this.className = temclassT + "'" + "" + className + "'";
                    this.className = oTrans + classN;
                    aContent[this.index].style.display = "block";
                }
            }
        }
    }
/* 当鼠标进入是显示和隐藏的代码 */
    // 新建对象 ：采用函数构造模式
    // function Found(name) {
    //     this.name = name;   //这是属性
    //     this.Fn = function () {
    //         // 这是方法
    //     }
    // }
    // var a = new Found(nnnn);    //这就是创建这个对象
    // 这个只是采用函数构造模式创建的一个对象
    
    // function shide(obj,Cname) {
    //     function Found(Cname) {
    //         this.name = Cname;
    //     }
    //     obj.onmouseenter = obj.onmouseover = function () {
    //         var a = new Found(Cname);
    //         if (a.name == )
    //     }
    // }
    /*  */
    // (function(w,u) {

    //     var ya = function () {
    //         return new ya;
    //     }
    //      知道可以不用这种方法，但是看ljq感觉这种写法是真的方便吧。。
        
    //     ya.name({

    //     })
    //     window.ya = window._  = ya;
    // })(window)