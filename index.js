let myLeads=[]
let i=0
let isEmpty=true;
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
inputBtn.addEventListener('click',()=>{
    const inputEl=document.getElementById("input-el")
    if(inputEl.value!='')
    {
        myLeads.push(inputEl.value)
        console.log(myLeads)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderleads()
    }
    inputEl.value=""
})
function renderleads()
{
    const li = document.createElement("li")
    li.innerHTML =`<a href= '${myLeads[i]}' > ${myLeads[i]}  </a>`
    ulEl.append(li)
    i++;
}