const arrows= document.getElementsByClassName("arrow");
console.log(arrows);

const paras= document.getElementsByClassName("para");
console.log(paras);

const heads= document.getElementsByClassName("h");
console.log(heads);

const list= document.getElementsByClassName("list");
console.log(list);

let dropdown= false;
let selfdropdown=false;

for(let i=0; i<list.length; i++){
    for(let j=0; j<list.length; j++){
        list[i].addEventListener('click', () =>{
            
                arrows[i].classList.add("cls");
                arrows[i].classList.remove("cls2");
                paras[i].style.visibility="visible";
                paras[i].style.display="block";
                heads[i].style.fontWeight="700";
                list[i].style.color="black";
            
            if(j != i){
                paras[j].style.visibility="";
                paras[j].style.display="";
                heads[j].style.fontWeight="400";
                arrows[j].classList.add("cls2");
                arrows[j].classList.remove("cls");
                list[i].style.color="black";
            }
            if(dropdown===false){
                list[i].addEventListener('mouseover', () =>{
                    list[i].style.color="red";
                });
            }
            if(dropdown===true){
                paras[i].style.visibility="hidden";
                paras[i].style.display="none";
                heads[i].style.fontWeight="400";
                arrows[i].classList.remove("cls");
                arrows[i].classList.remove("cls2");
            }
            console.log(i,j);
            // dropdown= !dropdown;
        });

        list[i].addEventListener('mouseover', () =>{
            list[i].style.color="hsl(14, 88%, 65%)";
        })
        list[i].addEventListener('mouseout', () =>{
            list[i].style.color="";
        });

    }
}
