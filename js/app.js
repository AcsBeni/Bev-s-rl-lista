//values
let nameField =document.getElementById("nameField");
let priceField = document.getElementById("priceField");
let countField = document.getElementById("countField");
let Addbtn = document.getElementById("Addbtn");
let itemsList = document.getElementById("itemsList");
let summLBL = document.getElementById("summLBL");
let Items =[];
let sum=0
//
Addbtn.addEventListener('click', ()=>{
    if(nameField.value =="" || countField.value==0 || priceField.value ==0){
        alert("Nem adtál meg minden adatot")
        return;
    }
    
    Items.push({
        name: nameField.value,
        price: Number(priceField.value),
        count: Number(countField.value),
        sum: priceField.value * countField.value
    })
    refreshtable();
    clearform();
    save();
    
    });
    
    

function refreshtable(){
    itemsList.innerHTML = '';
    sum = 0;
    for(let i = 0; i<Items.length; i++){
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let btn = document.createElement('button')

        td1.innerHTML =i+1+ '.';
        td2.innerHTML = Items[i].name;
        td3.innerHTML = Items[i].price + 'Ft';
        td4.innerHTML= Items[i].count + 'db';
        td5.innerHTML= Items[i].sum + 'ft';
        btn.classList.add('btn', 'btn-danger', 'btn-sm')
        btn.innerHTML = "X"
        btn.addEventListener('click', ()=>{
            deleteitem(i)
        })

        td3.classList.add('text-end');
        td4.classList.add('text-end');
        td5.classList.add('text-end');
        td6.classList.add('text-center')

        sum += Items[i].sum;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        td6.appendChild(btn);
        
        itemsList.appendChild(tr);
        
    }
    summLBL.innerHTML = sum
    
   
}

function clearform(){
    nameField.value = ""
    priceField.value = 0
    countField.value = 0
    
}
function deleteitem(idx){
    if(confirm('Biztosan törlöd az itemet?')){
        
        Items.splice(idx, 1)
        refreshtable();
        save();

    }
    
}
function save(){
    localStorage.setItem("bevLista", JSON.stringify(Items))
}
function load(){
    if(localStorage.getItem("bevLista")){
        Items = JSON.parse(localStorage.getItem("bevLista"));
    }
}
//induláskor
load();
refreshtable();
clearform();