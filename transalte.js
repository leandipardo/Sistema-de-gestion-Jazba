const $btn=document.getElementById("translate"),
$container = document.getElementById("card-container");
export default function translate(){
    document.addEventListener("click",e=>{
        if(e.target.matches("#translate")){
            e.preventDefault();
            $container.classList.toggle("translate");
            $btn.classList.toggle("rotate");
        }
    })
}