window.onload = function () {

    /* 这里是地区部分的js，暂时没有去封装，就这样先写着 */
        var oBtnArea = document.getElementById('area');
        var oArea = document.getElementById('area-case');
        var oFont = document.getElementById('area-font');
        var oTrans;  //这个是公用的用来储存临时的class的变量
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
                    oTrans = this.previousElementSibling.className;
                }
                    for (var i = 0; i < aLeftNav.length; i++) {
                        aMenuW[i].style.display = 'none';
                    }
                // alert(oTrans);
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