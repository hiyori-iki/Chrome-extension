let myLeads=[]
let i=0
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
inputBtn.addEventListener('click',()=>{
    const inputEl=document.getElementById("input-el")
    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderleads()
})
function renderleads()
{
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
    i++;
}