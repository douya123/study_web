window.onload = function () {

    /* 这里是地区部分的js，暂时没有去封装，就这样先写着 */
        var oBtnArea = document.getElementById('area');
        var oArea = document.getElementById('area-case');
        var oFont = document.getElementById('area-font');
        var oTrans = null;
        // var oTrans = oFont.className;
        oBtnArea.onmouseover = function () {
            oTrans = oFont.className;
            oArea.style.display = 'block';        
            oFont.className = oTrans + ' active';
        }
        oBtnArea.onmouseout = function () {
            oArea.style.display = 'none';
            oFont.className = oTrans;
        }
        // alert(oTrans+'active');


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


    

}