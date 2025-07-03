document.addEventListener("DOMContentLoaded",function(){
    
    let search = document.querySelector(".search")
    let btn_search = document.querySelector("#btn_search")
    const searchForm = document.querySelector(".search form")

    btn_search.addEventListener("click", function(e){
        e.preventDefault()
        search.classList.add("on")
    })

    search.addEventListener("click",(event)=>{
        //폼태그를 클릭하면 닫히지가 않아야 됨
        // console.log(event)
        if(searchForm.contains(event.target)){return}

        search.classList.remove("on")
    })




})