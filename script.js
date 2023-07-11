
class book{
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    get title(){
        return this._title;
    }
    set title(value){
        if(value.length<4){
            alert('length of author is less than 4');
            return ;
        }
        this._title = value;
    }

}

const book1 = new book("TheHobbit","J.R.R.",298,false);
const book2 = new book("Mein kampf","A.H.",298,true);
let myLibrary = [book1,book2];
let myAttri = ['title','author','pages','read']
const form1 = document.querySelector('.add');
const subBtn = document.querySelector('#sub-btn');
let size = myLibrary.length;
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const btn2 = document.querySelector('#sudo-btn');
const lower = document.querySelector('.lower');

function display(){
    lower.innerHTML = "";
for(i=0;i<size;i++){
    let card = document.createElement('div');
    card.classList.add('card');
    let cardList = document.createElement('ul');
    let rem = document.createElement('button');
        rem.setAttribute("type","generic");
        
    for(j=0;j<4;j++){
        let listEle = document.createElement('li');
        let data = document.createElement('p');
        card.setAttribute("author2",myLibrary[i][myAttri[0]]);
        data.innerHTML = `${capitalize(myAttri[j])} : ${myLibrary[i][myAttri[j]]}`;
        console.log(data.innerHTML);
        listEle.appendChild(data);
        cardList.appendChild(listEle);
        card.appendChild(cardList);
        if(j==myAttri.length-1){
            rem.classList.add('btn-rem');
            
            rem.innerHTML = "Remove";
            
            listEle.appendChild(rem);
        }
        if(myLibrary[i]['read']==true||myLibrary[i]['read']=="true"){
            
            card.style.backgroundColor = 'white';
        }
        else{
            card.style.backgroundColor = 'darkorange';
        }

    }
    
    lower.appendChild(card);
}
}
display();

btn2.addEventListener('click',()=>{
    form1.style.visibility = "visible";

});
let formData;
form1.addEventListener('submit',(e)=>{
    e.preventDefault();
    formData = new FormData(form1);
    let myL = []
    for (const pair of formData.entries()) {
        myL.push(pair[1]);
      }
      let bookNew = new book(myL[0],myL[1],myL[2],myL[3]);
      if(bookNew.title != undefined){
      myLibrary.push(bookNew);}
      size = myLibrary.length;
      display();
      
      
      form1.style.visibility = "hidden";
      remCard();
    
});

function remCard(){
    const btn = document.querySelectorAll('.btn-rem');
for(i=0;i<size;i++){
    console.log(i);
    console.log(btn[i]);
btn[i].addEventListener('click',(e)=>{
    let title2 = e.target.parentNode.parentNode.parentNode.getAttribute("author2");
    
    ((e.target.parentNode).parentNode).parentNode.remove();
    for(j=0;j<size;j++){
        if(myLibrary[j][myAttri[0]]==title2){
            myLibrary.splice(j,1);
        }
    }
    

});
}
};
remCard();




