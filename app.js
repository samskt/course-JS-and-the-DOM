$(document).ready(function(){
    $('ul li a ').click(function () {
        $('li a').removeClass("active");
        $ (this).addClass("active");
        
    });
});

const links = document.querySelectorAll(".scroll_to");
// console.log(links);
links.forEach((item)=>{
    item.addEventListener("click",()=>{
        const element = document.getElementById(item.getAttribute("data-link"));
        element.scrollIntoView({behavior:"smooth" , block:"start"})
    } )
})

// element.scrollIntoView();
// element.scrollIntoView(alignToTop); // Boolean parameter
// element.scrollIntoView(scrollIntoViewOptions); // Object parameter

// var element = document.getElementById("box");

// element.scrollIntoView();
// element.scrollIntoView(false);
// element.scrollIntoView({block: "end"});
// element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
