document.addEventListener("DOMContentLoaded",function(){

    let btn_all_menu = document.querySelector("#btn_all_menu")
    let hidden_menu = document.querySelector(".hidden_menu")
    let btn_close_hidden_menu = document.querySelector("#btn_close_hidden_menu")

    let menuState = false;
    btn_all_menu.addEventListener("click",function(){
        if(menuState==false){
            btn_all_menu.children[0].innerHTML = '<img src="./img/icon_closeBtn 1.svg" alt="닫기버튼">'
            hidden_menu.classList.add("on")
            menuState=true
        }else{
            btn_all_menu.children[0].innerHTML = '<img src="./img/icon_menu_30px.svg" alt="메뉴 열기 버튼">'
            hidden_menu.classList.remove("on")
            menuState=false
        }
        // hidden_menu.classList.toggle("on")
    })


    
})