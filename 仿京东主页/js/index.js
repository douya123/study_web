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
            console.log(k);
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