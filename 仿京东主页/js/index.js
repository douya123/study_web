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
            // var hour = document.getElementById('h');
            // var minute = document.getElementById('m');
            // var second = document.getElementById('s');
            /*
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
                    // 这里让它返回出数组 
                    hour.innerHTML = h;
                    minute.innerHTML = m;
                    second.innerHTML = s;
                    
                    // return aCont;
                } 
                // else {
                    // 这下面的切换一直是有问题的，每次太慢了
                    // 这里加载的速度还是太慢，要从天数开始加，不然小时的花要加12次，大大的拖慢了计时器加载的速度 
                    // 重新写计算的顺序，减少加载时间 
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
                    // 获取当前的天数 
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
            // 之后要解决时间加载太慢的问题 
            t();
            setInterval(function() {
                t();
                // 这是之前错误的一种想法，有时间再整理到错题集里 
                //  判断并赋值 
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
            */
        /* 重写这个试试 */
            var hour = document.getElementById('h');
            var minute = document.getElementById('m');
            var second = document.getElementById('s');
                function time4() {
                    var zDate = new Date();
                    var endTwo = new Date();
                    // if 竟然可以这样连写，那以后都这样写了
                    if (zDate.getHours() % 2 === 0) {
                        endTwo.setHours(zDate.getHours()+2);
                    } else {
                        endTwo.setHours(zDate.getHours()+1);
                    }
                    
                    endTwo.setMinutes(0);
                    endTwo.setSeconds(0);
                    setTimeout(function(){
                        var nowTime = new Date();
                        var x = endTwo - nowTime;
                        h = Math.floor(x/1000/60/60%24);    //这里是相差的小时
                        m = Math.floor(x/1000/60%60);       //这里是相差的分钟数
                        s = Math.floor(x/1000%60);          //这里是相差的秒数
                        h = _t2(h); m = _t2(m); s = _t2(s);
                        hour.innerHTML = h;
                        minute.innerHTML = m;
                        second.innerHTML = s;
                        // 如果时间差都小于零了的话，证明到时间了，然后就重新打开这个定时器
                        if (x > 0) {
                            setTimeout(function() {
                                time4();
                            },1000/60)
                        } else {
                            // console.log("下一次");
                            time4();
                        }
                    },1000/60)
                }
            time4();
            // setInterval(function() {
            //     time4();
            // },1000*60);

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
    /* 倒计时下面中间 */   
        // new Tab("jd-2_middle-content");
    /* 写兼容ie8 9 的鼠标移入变色的js 这样就解决了ie8 和9的变色问题 */
        // 这里主要就时还有兼容ie8不能用classname来获取标签，所以还要用正则来判断一哈
        var aClass = getByClassName("fr_div-");
        // alert(aClass.length)
        for(var i=0; i<aClass.length; i++) {
            aClass[i].onmouseover = function () {
                var a = this.getElementsByTagName("div")[0];
                a.style.filter = "alpha(opacity:70)";
            }
            aClass[i].onmouseout = function () {
                var a = this.getElementsByTagName("div")[0];
                a.style.filter = "alpha(opacity:100)";
            }
        }
        var aClass1 = document.getElementById('jd-more_ul');
        var aClass1_li = aClass1.getElementsByTagName('li');
        for (var i=0; i<aClass1_li.length; i++) {
            aClass1_li[i].onmouseover = function () {
                var a = this.getElementsByTagName("div")[0];
                var b = this.getElementsByTagName("b")[0];
                a.style.filter = "alpha(opacity:70)";
                b.style.filter = "alpha(opacity:20)";
            }
            aClass1_li[i].onmouseout = function () {
                var a = this.getElementsByTagName("div")[0];
                var b = this.getElementsByTagName("b")[0];
                b.style.filter = a.style.filter = "alpha(opacity:100)";
            }
        }
    /* 排行榜那里的js */
        // 如果用jq的话代码量确实这里就要少好多，但是现在我暂时还是不用框架，也不是很会用，但是大概还是知道怎么写的
        // 我都已经用我写的辣鸡选项卡的js了这里代码还是这么难看。。。。。。。。。。。
        var oRankTitle = document.getElementById("ranking_title");
        var aRankTitle = oRankTitle.getElementsByTagName("a");
        var oRankContent = document.getElementById("ranking_content");
        var aRankContent = oRankContent.getElementsByTagName("strong");
        _douya.tabControl.normal(aRankTitle, aRankContent, "active3");
        
        var oRankInContent1 = document.getElementById("rank_in_content1");
        var aRankInContent1 = oRankInContent1.getElementsByTagName("ul");
        var oRankInPoint1 = document.getElementById("rank_in_point1");
        var aRankInPoint1 = oRankInPoint1.getElementsByTagName("i");
        _douya.tabControl.normal(aRankInPoint1, aRankInContent1,"rank_i");

        var oRankInContent2 = document.getElementById("rank_in_content2");
        var aRankInContent2 = oRankInContent2.getElementsByTagName("ul");
        var oRankInPoint2 = document.getElementById("rank_in_point2");
        var aRankInPoint2 = oRankInPoint2.getElementsByTagName("i");
        _douya.tabControl.normal(aRankInPoint2, aRankInContent2,"rank_i");

        var oRankInContent3 = document.getElementById("rank_in_content3");
        var aRankInContent3 = oRankInContent3.getElementsByTagName("ul");
        var oRankInPoint3 = document.getElementById("rank_in_point3");
        var aRankInPoint3 = oRankInPoint3.getElementsByTagName("i");
        _douya.tabControl.normal(aRankInPoint3, aRankInContent3,"rank_i");

        var oRankInContent4 = document.getElementById("rank_in_content4");
        var aRankInContent4 = oRankInContent4.getElementsByTagName("ul");
        var oRankInPoint4 = document.getElementById("rank_in_point4");
        var aRankInPoint4 = oRankInPoint4.getElementsByTagName("i");
        _douya.tabControl.normal(aRankInPoint4, aRankInContent4,"rank_i");

        var oRankInContent5 = document.getElementById("rank_in_content5");
        var aRankInContent5 = oRankInContent5.getElementsByTagName("ul");
        var oRankInPoint5 = document.getElementById("rank_in_point5");
        var aRankInPoint5 = oRankInPoint5.getElementsByTagName("i");
        _douya.tabControl.normal(aRankInPoint5, aRankInContent5,"rank_i");

        // var oRankInContent6 = document.getElementById("rank_in_content6");
        // var aRankInContent = oRankInContent.getElementsByTagName("ul");
        // var oRankInPoint6 = document.getElementById("rank_in_point6");
        // var aRankInPoint = oRankInPoint.getElementsByTagName("i");
        // _douya.tabControl.normal(aRankInPoint6, aRankInContent6,"rank_i");
        var oRankingContent = document.getElementById("ranking_content");
        var aRankingContentLi = oRankingContent.getElementsByTagName("li");
        for (var i=0; i<aRankingContentLi.length; i++) {
            aRankingContentLi[i].onmouseover = function() {
                var a = this.getElementsByTagName("a")[0];
                var b = this.getElementsByTagName("b")[0];
                var c = this.getElementsByTagName("p")[0];
                a.style.opacity = "0.7";
                a.style.filter = "alpha(opacity:70)";
                b.style.color = "red";
                c.style.color = "red";
            }
            aRankingContentLi[i].onmouseout = function() {
                var a = this.getElementsByTagName("a")[0];
                var b = this.getElementsByTagName("b")[0];
                var c = this.getElementsByTagName("p")[0];
                a.style.opacity = "1";
                a.style.filter = "alpha(opacity:100)";
                b.style.color = "";
                c.style.color = "";
            }
        }

    /* 排行榜后面的那里 */
        NewTab("jd-2-tab");

        // 要加轮播的话可以直接这样写        测试了一下，这样写，不行，不会倒退，再研究
        // setInterval(function() {
        //     NewTab("jd-2-tab").NewTabNext.onclick();
        // },3000)
        // NewTab("jd-2-tab").NewTabPrew.style.display = "block";
        // NewTab("jd-2-tab").NewTabNext.style.display = "block";
        
        NewTab("jd-2-3-tab");
        NewTab("jd-3-1-tab");
    /*  */
    /* 京东特色 */
        NewTab("jd-feature_out_w");
        


    

}

/* 兼容获取classname的js */
    function getByClassName(a) {
        // 这里用正则来筛选一下，卧槽，觉得正则好有用，一定要学会
        var re = new RegExp(a,"g");
        var aEle = document.getElementsByTagName('*');
        var arr=[];
        for (var i=0; i<aEle.length; i++) {
            if(aEle[i].className.search(re) >= 0) {
                arr.push(aEle[i]);
            }
        }
        return arr;
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


/* 再写一次走马轮播的js代码，因为页面上用到的比较多 （这次写成功了18.1.14）*/
    function NewTab(id) {
        // 这里面的所有的classname都是必须按照规定的写，不然就要出错
        return new NewTab.fn.main(id);
    }
    NewTab.fn = NewTab.prototype = {
        // 创建的一个用于上下一张和指针的属性    初始为0；
        thePoint : 0,
        timer : null,
        main: function (id) {
            var a = document.getElementById(id);
            var tag = a.getElementsByTagName("*");
            // 给这个对象添加属性，根据我已经设置好的模板
            for (var i=0; i<tag.length; i++) {
                // 这里定义：图片的类名必须是：PictureIn 外壳必须是：NewTabPicture
                // 指针的的类名必须是：NewTabPoint
                // 上一个按钮的的类名必须是：NewTabPrew  下一个按钮的的类名必须是：NewTabNext
                // 全部通过获取classname来获取的元素。因为ie不可以重用，所有我就这样写一个兼容的classname的获取方式
                var re1 = new RegExp("NewTabPicture","g");
                var re2 = new RegExp("NewTabPoint","g");
                var re3 = new RegExp("NewTabPrew","g");
                var re4 = new RegExp("NewTabNext","g");
                if (tag[i].className.search(re1) >= 0) {
                    this.NewTabPicture = tag[i];
                    // 获得里面框架里的那个绝对定位的div   
                    var NewTabPictureIn = this.NewTabPicture.getElementsByTagName("*");
                    var re5 = new RegExp("PictureIn","g");
                    for (var i=0; i<NewTabPictureIn.length; i++) {
                        if (NewTabPictureIn[i].className.search(re5) >= 0) {
                            // 这一个才是要移动的那个div   （刚才在移动的时候写成NewTabPictureIn了，结果报错了）
                            this.PictureIn = NewTabPictureIn[i];
                        }
                    }             
                }
                // 获取指针小点
                if (tag[i].className.search(re2) >= 0) {
                    this.NewTabPoint = tag[i];
                    // 这是一个数组
                    this.NewPointIn = this.NewTabPoint.getElementsByTagName("i");
                }
                // 获取上一个按钮
                if (tag[i].className.search(re3) >= 0) {
                    this.NewTabPrew = tag[i];
                }
                // 获取下一个按钮
                if (tag[i].className.search(re4) >= 0) {
                    this.NewTabNext = tag[i];
                }
            }
            // 这里是直接给这个对象添加直接的功能    *之前我做过一个失败了，今天做发现之前错误的原因是把这里的东西写在上一个for循环里了
            // 有一个if进行判断的话应该就不那么容易出错，而且以后写其他的东西的时候，也可以用这个思想进行分流
            var _this = this;
            // 判断有没有指针选项的时候，有就执行下面这一段
            if (this.NewPointIn) {
                for (var i=0; i < this.NewPointIn.length; i++) {
                    this.NewPointIn[i].index = i;
                    this.NewPointIn[i].onmouseover = function () {
                        // test
                        // alert("test");
                        _this.PointControl(this);
                    }
                }
            }
            // 判断有没有上一个按钮，如果有的话就添加这个事件
            if (this.NewTabPrew) {
                this.NewTabPrew.onclick = function () {
                    _this.PrewControl();
                }
            }
            // 判断有没有下一个按钮，如果有的话就添加这个事件
            if (this.NewTabNext) {
                this.NewTabNext.onclick = function () {
                    _this.NextControl();
                }
            }
            // 判断是否两个按钮都有的情况
            if (this.NewTabPrew && this.NewTabNext) {
                a.onmouseover = this.NewTabPrew.onmouseover = this.NewTabNext.onmouseover = function () {
                    _this.ToLook();
                }
                a.onmouseout = function () {
                    _this.ToHidden();
                }
            }
            // 一定要有这个return，不然应该是不能返回这个对象的这些属性和方法       上一次写好像就没有这个东西
            return this;
        },
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
        PrewControl : function () {
            var picW =parseInt(this.getStyle(this.NewTabPicture, "width"));
            if (this.PictureIn.offsetLeft % picW == 0) {
                // 变换样式之前要清除之前指针的样
                for (var i=0; i<this.NewPointIn.length; i++) {
                    this.NewPointIn[i].className = "";
                }
                // 这里要把this.thePoint还是要储存起来，等一下进行判断的时候也好用
                var a = this.thePoint;
                if (a > 0) {
                    a = a - 1;
                } else {
                    a = this.NewPointIn.length-1;
                }
                if (a == this.NewPointIn.length-1) {
                    // 这里要让它往左跑
                    var s = (this.NewPointIn.length-1)*picW;
                } else {
                    var s = -picW;
                }
                /* *************************************************************************************/
                // 之前的代码：
                // this.PictureIn.style.left = this.PictureIn.offsetLeft - s + "px";
                /* *************************************************************************************/
                /* *************************************************************************************/
                // 改的速度的代码：

                    var inOffset = this.PictureIn.offsetLeft;
                    var b = 10, t = 0;  //b表示的是加速度，t表示的是事件
                    var speed = picW/40 - b*t;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    
                    // alert("a")
                    var _this = this;   //用的不是匿名函数的话，里面的this就会变，所以要传进去
                    clearInterval(this.timer);
                    this.timer = setInterval(function() {
                        // alert(s)                        
                        // a  为this.NewPointIn.length-1的时候证明是要返回到最后张的时候
                        if (a == _this.NewPointIn.length-1) {
                            // alert("a");
                            // alert(_this.PictureIn.offsetLeft);
                            // alert(inOffset-s);
                                // 这个情况下s就是最远的距离
                            if (_this.PictureIn.offsetLeft <= inOffset-s) {
                                _this.PictureIn.style.left = inOffset - s + "px";
                                clearInterval(_this.timer);
                            } else {
                                // alert("d") 
                                _this.PictureIn.style.left = _this.PictureIn.offsetLeft - speed + "px";
                                return t += 10;
                            }
                        } else {
                            // _this.PictureIn.offsetLeft 表示的是这个盒子一直再变的左边距 
                            // inOffset-s 表示的是这次要到达的一个左边距
                            if (inOffset-s <= _this.PictureIn.offsetLeft) {
                                _this.PictureIn.style.left = inOffset - s + "px";
                                clearInterval(_this.timer);
                            } else {
                                // alert("b")
                                _this.PictureIn.style.left = _this.PictureIn.offsetLeft + speed + "px";
                                return t += 10;
                            }
                        }
                    },1000/60)

                /* *************************************************************************************/        
                // 这里要注意的是同时指针的样式也要跟着变化所以下面这里写样式的
                // alert(this.thePoint)
                this.NewPointIn[a].className = "rank_i";

                return this.thePoint = a;
            }
        },
        NextControl : function () {
                var picW =parseInt(this.getStyle(this.NewTabPicture, "width"));
                // // 要让前面一个完全归位了之后才能点击
                // 应该让所以的代码都在这个里面
                if (this.PictureIn.offsetLeft % picW == 0) {
                    // 变换样式之前要清除之前指针的样
                    for (var i=0; i<this.NewPointIn.length; i++) {
                        this.NewPointIn[i].className = "";
                    }
                        var a = this.thePoint;
                        if (a < this.NewPointIn.length-1) {
                            a = a + 1;
                        } else {
                            // 这一个不是按照层级切换的，所以到了后一张的时候应该是立马拉回第一张，所以这里的写法会不同，
                            // 但是为了照顾小圆点的样式，所以就不该，改下面的s
                            a = 0;
                        }
                        // 这里是根据a的值判断移动的距离
                        if (a == 0) {
                            // 这里要往左移动，往左为+，但是我下面的left为 "-"  所以这里也要为 "-" 负负得正
                            var s = -(this.NewPointIn.length - 1)*picW;
                            // alert(s);
                        } else {
                            // 之前我这里弄错了，不应该是这个的倍数，而是每一次都是1倍。。。要做的就是判断方向（正负号）
                            var s = picW;
                        }

                        /* *************************************************************************************/
                        // 之前的代码
                        // this.PictureIn.style.left = this.PictureIn.offsetLeft - s + "px";
                        /* *************************************************************************************/
                        /* *************************************************************************************/ 
                        
                        // 新增代码 这个变速有点难的,先暂时不写了,bug太多
                            // // 这是之前写变速的代码
                            // var speed =Math.abs((s - this.PictureIn.offsetLeft)/30);     (这个不行,把s改为picW还是可以用)
                            // // 变速必须要解决速度产生很多为小数的情况
                            // speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                            // // 我喜欢把它变为正的后面才好操作
                            // // speed = Math.abs(speed);
                            // // 判断速度的正负
                            // if (this.thePoint > a) {
                            //     // 图片向左走 总的移动符号为+
                            //     speed = -speed;
                            // }
                           
                            
                                var inOffset = this.PictureIn.offsetLeft;
                                var b = 10, t = 0;  //b表示的是加速度，t表示的是事件
                                var speed = picW/10 - b*t;
                                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                                // alert(speed)

                             
                            
                            // alert("a")
                            var _this = this;   //用的不是匿名函数的话，里面的this就会变，所以要传进去
                            clearInterval(this.timer);
                            this.timer = setInterval(function() {
                                // a  为0的时候证明是要返回到第一张的时候
                                if (a == 0) {
                                    if (_this.PictureIn.offsetLeft >= 0) {
                                        _this.PictureIn.style.left = inOffset - s + "px";
                                        clearInterval(_this.timer);
                                    } else {
                                        // alert("d") 
                                        _this.PictureIn.style.left = _this.PictureIn.offsetLeft + speed + "px";
                                        return t += 20;
                                    }
                                } else {
                                    // 因为测试来看到最后的时候不能回去，所以是这里的方向应该是让这个产生了错误
                                    // 这里的s正常情况下是正的，到终点的时候s才为负返回出去，所以这里要这样写
                                    // _this.PictureIn.offsetLeft 表示的是这个盒子一直再变的左边距 
                                    // inOffset-s 表示的是这次要到达的一个左边距
                                    if (inOffset-s >= _this.PictureIn.offsetLeft) {
                                        // alert("c")
                                        _this.PictureIn.style.left = inOffset - s + "px";
                                        clearInterval(_this.timer);
                                    } else {
                                        // alert("b")
                                        _this.PictureIn.style.left = _this.PictureIn.offsetLeft - speed + "px";
                                        return t += 10;
                                    }
                                }
                            },1000/60)
                                
                        /************************************************************************************* */
                            

                    this.NewPointIn[a].className = "rank_i";

                    return this.thePoint = a;
                }
        },
        PointControl : function (a) {
            // 首先要获得图片外固定窗口的宽度：并换算成数字类型 (一次切换一个窗口的长度，所以需要图片设置好对于的大小)
            var picW =parseInt(this.getStyle(this.NewTabPicture, "width"));
            // 暂时让它等于这个的时候才能点击，但是按照原理来说不应该这样的   （这个地方距离的获取应该不这样才对的）
            if (this.PictureIn.offsetLeft % picW == 0) {
                for (var i=0; i<this.NewPointIn.length; i++) {
                    // 让每一个指针的classname恢复初始的样子
                    this.NewPointIn[i].className = "";
                }
                // 这是之前写好的classname；
                a.className = "rank_i";
                // 获取当前的指针的index值，并且要返回答这个对象中   这是为了等一会儿操作上下一张的时候也能用    
                // 计算图片移动的距离(正负的话这里直接就有了)   这里刚才检查的时候也差点就写错了要写this.thePoint，因为我是在对象上定义的
                // this.thePoint是之前的指针的位置，a.index是点击的这个的指针位置
                var s = (a.index - this.thePoint)*picW;
                var ends = this.PictureIn.offsetLeft - s;
                /* *************************************************************************************/
                // s是要运动到的距离
                // 要运动的距离应该是当前的进入时的offset加要到的距离     设置了一个ends表要运动到的offset
                /* *************************************************************************************/
                
                /* *************************************************************************************/
                // 之前的代码：
                // 这里要注意，html里的NewPointIn的这个属性一定要设置为绝对定位    (left要加style，我又忘了加，又导致错误)
                // 这里也要注意，我又没想到，我们的向前向后和left是相反的，所有往右走的话left要减。所以在下面写成减号就好了
                // 卧槽，经过几次的修改，这里终于好了
                this.PictureIn.style.left = this.PictureIn.offsetLeft - s + "px";
                /* *************************************************************************************/
                /* *************************************************************************************
                // 新增速度的值：(暂时还有问题) 先做其他的
                // alert(ends)
                    var b = 10, t = 0;  //b表示的是加速度，t表示的是事件
                    var speed = picW/40 - b*t;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    var _this = this;
                    clearInterval(this.timer)
                    this.timer = setInterval(function() {
                        // 我自己在这里闯，这个条件设置起了的话，小于零的时候就是从前面一个点向后面一个，其他情况就是从后一个点向前面一个。。。
                        if (_this.PictureIn.offsetLeft - ends <= 0) {
                            // alert("a")
                            _this.PictureIn.style.left = this.PictureIn.offsetLeft - s + "px";
                            clearInterval(_this.timer);
                        } else {
                            // alert("b");
                            _this.PictureIn.style.left = this.PictureIn.offsetLeft - s + "px";
                            t += 10;
                        }
                    },1000/60)
                * *************************************************************************************/

                // 这里返回指针的值，这个很重要，为了等会儿上一张和下一张也能同样的使用
                return this.thePoint = a.index;
            }
        },
        ToLook : function () {
            this.NewTabPrew.style.display = this.NewTabNext.style.display = "block";
        },
        ToHidden : function () {
            this.NewTabPrew.style.display = this.NewTabNext.style.display = "none";
        }
        
    }
    NewTab.fn.main.prototype = NewTab.fn;

/* 写失败了的代码 */
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

    /* 点击轮播的js面向对象的代码 试着写*/
        // bug太多，运行不起，重写。。。。
        /* function Tab(id) {
            var _oDiv = document.getElementById(id);
            var _oDivIn = _oDiv.children;
            // 以后再去研究完全兼容的子节点取法https://www.jianshu.com/p/33d0c4041705
            this.oContent = _oDivIn[0];
            var oContent_in = this.oContent.getElementsByTagName("div");
            this.oContent_in = oContent_in[0];
            this.oContent_in.style.backgroundColor = "yellow";
            this.oPoint = _oDivIn[1];
            this.oBtn = _oDivIn[2];
            this.aPonit = this.oPoint.getElementsByTagName("i");
            this.oBtnPrew = this.oBtn[0];
            this.oBtnNext = this.oBtn[1];
            var oldclass = "";
            var oldindex = 0;
            var _this = this;   //这里的this如果new的话就是那个id的那个div
            
            for (var i=0; i<this.aPonit.length; i++) {
                this.aPonit[i].index = i;
                this.aPonit[i].onmouseover = this.aPonit[i].onmouseenter = function () {
                    // 因为这个函数试一个匿名函数，this会指向window?又好像不对，这里的this因为用了onclick，所以this应该指代的是当前的指针
                    // 所以这里_this指代的是前面的那个div对象，后面的this指代的是当点击到的指针（意思是相当于在上一个函数上加了一个属性）
                    _this.oTrans(this);
                    _this.table(this);
                }
            }
            this.onmouseover = this.oBtnPrew.onmouseover = this.oBtnNext.onmouseover = function () {
                _this.oBtnPrew.style.display = "block";
                _this.oBtnNext.style.display = "block";
            }
            this.onmouseout = this.oBtnPrew.onmouseout = this.oBtnNext.onmouseout = function () {
                this.oBtnPrew.style.display = this.oBtnNext.style.display = "none";
            }
            this.oBtnPrew.onclick = this.oBtnNext.onclick = function () {
                var c = oldindex - this.aPonit.index;
                this.oContent_in.style.left = this.oContent_in.offsetLeft + c + "px"; 
                oldindex = this.aPonit.index;
            }
        }
        Tab.prototype.table = function (a) {
            for (var i=0; i<this.aPonit.length; i++) {
                this.aPonit[i].className = oldclass;
            }
            a.className = oldclass + " active";      //active样式需要自己在css里写入
            var c = oldindex - a.index;
            if (c === 0) {
                return oldindex = a.index;
            } else {
                // 只要不相等，是负的就就往负方向跑，是正的就往正方向跑，s是运行的距离
                var s = c*(this.getStyle(this.oContent, "width"));
            }
            this.oContent_in.style.left = this.oContent_in.offsetLeft + s + "px"; 
        }
        Tab.prototype.oTrans = function (a) {
            if (this.oTrans !== this.oTrans) {
                if (a.nextElementSibling) {
                    return oldclass = a.nextElementSibling.className;
                } else {
                    if (a.previousElementSibling) {
                        return oldclass = a.previousElementSibling.className;
                    } else {
                        return oldclass = "";
                    }
                }
            }
        }
        Tab.prototype.getStyle = function (a, b, c) {
            if(arguments.length==2) {
                if(a.currentStyle) {
                    return a.currentStyle[b];
                } else {
                    return getComputedStyle(a, false) [b];
                }
            } else {
                a.style[b]= c; 
            }
        } */


/* 在一次重写切换那里的面向对象的代码，希望这次能成功运行，这次用一个东西传进去好了 */
    // (function(w,u) {
    //     var 
    //     a,
    //     b,
    //     c,
    //     _dy = function () {
    //         return new _dy.fn.init(a, b, c);
    //     };
    //     _dy.fn = _dy.prototype = {
    //         constructor: _dy,
    //         init : function (a, b, c) {
    //             if (!a) {
    //                 return this;
    //             }
    //             if (typeof a === "string") {

    //             }
    //         }
    //     }
    //     _dy.fn.init.prototype = _dy.fn;
    //     window._dy = _dy;

    // })(window) 



/* 乱保存的代码1 */
    // var _this = this;
    //                 this.NewTabPrew.onclick = function () {
    //                     _this.PrewControl();
    //                 }
    //                 this.NewTabNext[0].onclick = function () {
    //                     _this.NextControl();
    //                 }
                    // for (var i=0; i<this.NewPointIn.length; i++) {
                    //     this.NewPointIn[i].index = i;
                    //     this.NewPointIn[i].onmouseover = function () {
                    //         // test
                    //         alert("test");
                    //         _this.PointControl(this);
                    //     }
                    // }





/* 备份一份轮播的，没有加变速效果的 */
    /* 没有加变速的时候的代码
        function NewTab(id) {
            // 这里面的所有的classname都是必须按照规定的写，不然就要出错
            return new NewTab.fn.main(id);
        }
        NewTab.fn = NewTab.prototype = {
            // 创建的一个用于上下一张和指针的属性    初始为0；
            thePoint : 0,
            main: function (id) {
                var a = document.getElementById(id);
                var tag = a.getElementsByTagName("*");
                // 给这个对象添加属性，根据我已经设置好的模板
                for (var i=0; i<tag.length; i++) {
                    // 这里定义：图片的类名必须是：PictureIn 外壳必须是：NewTabPicture
                    // 指针的的类名必须是：NewTabPoint
                    // 上一个按钮的的类名必须是：NewTabPrew  下一个按钮的的类名必须是：NewTabNext
                    // 全部通过获取classname来获取的元素。因为ie不可以重用，所有我就这样写一个兼容的classname的获取方式
                    var re1 = new RegExp("NewTabPicture","g");
                    var re2 = new RegExp("NewTabPoint","g");
                    var re3 = new RegExp("NewTabPrew","g");
                    var re4 = new RegExp("NewTabNext","g");
                    if (tag[i].className.search(re1) >= 0) {
                        this.NewTabPicture = tag[i];
                        // 获得里面框架里的那个绝对定位的div   
                        var NewTabPictureIn = this.NewTabPicture.getElementsByTagName("*");
                        var re5 = new RegExp("PictureIn","g");
                        for (var i=0; i<NewTabPictureIn.length; i++) {
                            if (NewTabPictureIn[i].className.search(re5) >= 0) {
                                // 这一个才是要移动的那个div   （刚才在移动的时候写成NewTabPictureIn了，结果报错了）
                                this.PictureIn = NewTabPictureIn[i];
                            }
                        }             
                    }
                    // 获取指针小点
                    if (tag[i].className.search(re2) >= 0) {
                        this.NewTabPoint = tag[i];
                        // 这是一个数组
                        this.NewPointIn = this.NewTabPoint.getElementsByTagName("i");
                    }
                    // 获取上一个按钮
                    if (tag[i].className.search(re3) >= 0) {
                        this.NewTabPrew = tag[i];
                    }
                    // 获取下一个按钮
                    if (tag[i].className.search(re4) >= 0) {
                        this.NewTabNext = tag[i];
                    }
                }
                // 这里是直接给这个对象添加直接的功能    *之前我做过一个失败了，今天做发现之前错误的原因是把这里的东西写在上一个for循环里了
                // 有一个if进行判断的话应该就不那么容易出错，而且以后写其他的东西的时候，也可以用这个思想进行分流
                var _this = this;
                // 判断有没有指针选项的时候，有就执行下面这一段
                if (this.NewPointIn) {
                    for (var i=0; i < this.NewPointIn.length; i++) {
                        this.NewPointIn[i].index = i;
                        this.NewPointIn[i].onmouseover = function () {
                            // test
                            // alert("test");
                            _this.PointControl(this);
                        }
                    }
                }
                // 判断有没有上一个按钮，如果有的话就添加这个事件
                if (this.NewTabPrew) {
                    this.NewTabPrew.onclick = function () {
                        _this.PrewControl();
                    }
                }
                // 判断有没有下一个按钮，如果有的话就添加这个事件
                if (this.NewTabNext) {
                    this.NewTabNext.onclick = function () {
                        _this.NextControl();
                    }
                }
                // 判断是否两个按钮都有的情况
                if (this.NewTabPrew && this.NewTabNext) {
                    a.onmouseover = this.NewTabPrew.onmouseover = this.NewTabNext.onmouseover = function () {
                        _this.ToLook();
                    }
                    a.onmouseout = function () {
                        _this.ToHidden();
                    }
                }
                // 一定要有这个return，不然应该是不能返回这个对象的这些属性和方法       上一次写好像就没有这个东西
                return this;
            },
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
            PrewControl : function () {
                // 变换样式之前要清除之前指针的样
                for (var i=0; i<this.NewPointIn.length; i++) {
                    this.NewPointIn[i].className = "";
                }
                    var picW =parseInt(this.getStyle(this.NewTabPicture, "width"));
                    // 这里要把this.thePoint还是要储存起来，等一下进行判断的时候也好用
                    var a = this.thePoint;
                    if (a > 0) {
                        a = a - 1;
                    } else {
                        a = this.NewPointIn.length-1;
                    }
                    if (a == this.NewPointIn.length-1) {
                        // 这里要让它往左跑
                        var s = (this.NewPointIn.length-1)*picW;
                    } else {
                        var s = -picW;
                    }
                    this.PictureIn.style.left = this.PictureIn.offsetLeft - s + "px";
                    // 这里要注意的是同时指针的样式也要跟着变化所以下面这里写样式的
                    // alert(this.thePoint)
                    this.NewPointIn[a].className = "rank_i";

                return this.thePoint = a;
            },
            NextControl : function () {
                // 变换样式之前要清除之前指针的样
                for (var i=0; i<this.NewPointIn.length; i++) {
                    this.NewPointIn[i].className = "";
                }
                    var picW =parseInt(this.getStyle(this.NewTabPicture, "width"));
                    var a = this.thePoint;
                    if (a < this.NewPointIn.length-1) {
                        a = a + 1;
                    } else {
                        // 这一个不是按照层级切换的，所以到了后一张的时候应该是立马拉回第一张，所以这里的写法会不同，
                        // 但是为了照顾小圆点的样式，所以就不该，改下面的s
                        a = 0;
                    }
                    // 这里是根据a的值判断移动的距离
                    if (a == 0) {
                        // 这里要往左移动，往左为+，但是我下面的left为 "-"  所以这里也要为 "-" 负负得正
                        var s = -(this.NewPointIn.length - 1)*picW;
                        // alert(s);
                    } else {
                        // 之前我这里弄错了，不应该是这个的倍数，而是每一次都是1倍。。。要做的就是判断方向（正负号）
                        var s = picW;
                    }

                this.PictureIn.style.left = this.PictureIn.offsetLeft - s + "px";
                this.NewPointIn[a].className = "rank_i";

                return this.thePoint = a;
            },
            PointControl : function (a) {
                // 首先要获得图片外固定窗口的宽度：并换算成数字类型 (一次切换一个窗口的长度，所以需要图片设置好对于的大小)
                var picW =parseInt(this.getStyle(this.NewTabPicture, "width"));
                // 获取当前的指针的index值，并且要返回答这个对象中   这是为了等一会儿操作上下一张的时候也能用    
                // 计算图片移动的距离(正负的话这里直接就有了)   这里刚才检查的时候也差点就写错了要写this.thePoint，因为我是在对象上定义的
                // this.thePoint是之前的指针的位置，a.index是点击的这个的指针位置
                var s = (a.index - this.thePoint)*picW;
                for (var i=0; i<this.NewPointIn.length; i++) {
                    // 让每一个指针的classname恢复初始的样子
                    this.NewPointIn[i].className = "";
                }
                // 这是之前写好的classname；
                a.className = "rank_i";
                // 这里要注意，html里的NewPointIn的这个属性一定要设置为绝对定位    (left要加style，我又忘了加，又导致错误)
                // 这里也要注意，我又没想到，我们的向前向后和left是相反的，所有往右走的话left要减。所以在下面写成减号就好了
                // 卧槽，经过几次的修改，这里终于好了
                this.PictureIn.style.left = this.PictureIn.offsetLeft - s + "px";

                // 这里返回指针的值，这个很重要，为了等会儿上一张和下一张也能同样的使用
                return this.thePoint = a.index;
            },
            ToLook : function () {
                this.NewTabPrew.style.display = this.NewTabNext.style.display = "block";
            },
            ToHidden : function () {
                this.NewTabPrew.style.display = this.NewTabNext.style.display = "none";
            }
            
        }
        NewTab.fn.main.prototype = NewTab.fn;
    */