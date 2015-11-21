var pagetop, navbar, yPos;
function yScroll() {
    pagetop = document.getElementById('pagetop');
    navbar = document.getElementById('navbar');
    yPos = window.pageYOffset;
    if (yPos > 150) {
        pagetop.style.height = "30px";
        pagetop.style.paddingTop = "15px";
        navbar.style.height = "0px";
        navbar.style.overflow = "hidden";
        document.getElementById('sections_panel').style.height = "0px";
        document.getElementById('navarrow').innerHTML = "&#9662;";
        document.getElementById('parallax_lyr_1').style.webkitFilter = "blur(5px)";
        document.getElementById('parallax_lyr_2').style.webkitFilter = "blur(0px)";
    }
    else {
        pagetop.style.height = "100px";
        pagetop.style.paddingTop = "40px";
        navbar.style.height = "50px";
        navbar.style.overflow = "visible";
        document.getElementById('parallax_lyr_1').style.webkitFilter = "blur(0px)";
        document.getElementById('parallax_lyr_2').style.webkitFilter = "blur(5px)";
    }
}
window.addEventListener("scroll", yScroll);
function parallax() {
    var prlx_lyr_1 = document.getElementById('parallax_lyr_1');
    var prlx_lyr_2 = document.getElementById('parallax_lyr_2');
    prlx_lyr_1.style.top = -(window.pageYOffset / 4) + 'px';
    prlx_lyr_2.style.top = -(window.pageYOffset / 2) + 'px';
}
window.addEventListener("scroll", parallax, false);
function toggleNavPanel(x) {
    var panel = document.getElementById(x), content = document.getElementById('content_holder'), navarrow = document.getElementById('navarrow'), maxH = "300px";
    if (panel.style.height == maxH) {
        panel.style.height = "0px";
        navarrow.innerHTML = "&#9662;";
    }
    else {
        panel.style.height = maxH;
        navarrow.innerHTML = "&#9652;";
    }
}
function togelmenu() {
    var menu = document.getElementById('menu_slide'), menumaxright = "0px", div1 = document.getElementById('di1'), div3 = document.getElementById('di3'), div2 = document.getElementById('di2');
    if (menu.style.right == menumaxright) {
        menu.style.right = "-1360px";
        div1.style.width = "30px";
        div1.style.margin = "5px 0px 0px 0px";
        div1.style.transform = "rotate(0deg)";
        div3.style.width = "30px";
        div3.style.margin = "5px 0px 0px 0px";
        div3.style.transform = "rotate(0deg)";
        div1.style.background = "white";
        div2.style.background = "white";
        div3.style.background = "white";
    }
    else {
        menu.style.right = "0px";
        div1.style.width = "15px";
        div1.style.margin = "10px 0px -5px 15px";
        div1.style.transform = "rotate(40deg)";
        div3.style.width = "15px";
        div3.style.margin = "-5px 0px 10px 15px";
        div3.style.transform = "rotate(-40deg)";
        div1.style.background = "yellow";
        div2.style.background = "yellow";
        div3.style.background = "yellow";
    }
}

//----------------------3D CUBE-----------------------------
window.xAngle = 0;
window.yAngle = 0;
function checkKeyPressed(e) {
    var cube = document.getElementById('cube');
    switch (e.keyCode) {

        //case 37: // left 
        //    yAngle -= 90; 
        //    break; 

        //case 38: // up 
        //    xAngle += 90; 
        //    break; 

        //case 39: // right 
        //    yAngle += 90; 
        //    break; 

        //case 40: // down 
        //    xAngle -= 90; 
        //    break; 
        case 65: // A
            yAngle -= 45;
            break;

        case 87: // W
            xAngle += 45;
            break;

        case 68: // D
            yAngle += 45;
            break;

        case 83: // S
            xAngle -= 45;
            break;
    }
    cube.style.webkitTransform = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
}
window.addEventListener("keydown", checkKeyPressed, false);
window.flag = 0;
window.Xpos = 0;
window.Ypos = 0;
window.MaxH = window.outerHeight;
window.MaxW = window.outerWidth;
function mouseDown() {
    flag = 1;
    Xpos = event.clientX;
    Ypos = event.clientY;
    document.getElementById('txtX').value = "X:" + Xpos;
    document.getElementById('txtY').value = "Y:" + Ypos;
}

function mouseUp() {
    flag = 0;
}
function mouseMove() {

    if (flag) {
        var x = Xpos - event.clientX;
        var y = Ypos - event.clientY;
        document.getElementById('txtX').value = "X:" + xAngle;
        document.getElementById('txtY').value = "Y:" + yAngle;
        if (x > 0) 
        {
            xAngle -= x/20;console.log("xAngle for more than 0 : " + xAngle);
        }
        if (x < 0) 
        {
            xAngle += (x - ((x * 2)))/20;console.log("xAngle for less than 0" + xAngle);
        }
        if (y > 0) 
        {
            yAngle += y / 20; console.log("yAngle for more than 0 : " + yAngle);
        }
        if (y < 0) 
        {
            yAngle -= (y + (-(y * 2))) / 20; console.log("yAngle for less than 0" + yAngle);
        }
        document.getElementById('cube').style.webkitTransform = "rotateX(" + yAngle + "deg) rotateY(" + xAngle + "deg)";
    }
}
window.addEventListener("mousemove", mouseMove, false);
window.addEventListener("mouseup", mouseUp, false);
window.addEventListener("mousedown", mouseDown, false);