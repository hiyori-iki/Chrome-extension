let myLeads=[]
let i=0
let isEmpty=true;
const inputBtn=document.getElementById("input-btn")
const deleteBtn=document.getElementById("delete-btn")
const ulEl=document.getElementById("ul-el")
const tabBtn=document.getElementById("tab-btn")
const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]
tabBtn.addEventListener('click',()=>{
    myLeads.push(window.location.href)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderleads()
})


const leadsFromLocalstorage=JSON.parse(localStorage.getItem("myLeads", myLeads))
if (leadsFromLocalstorage) {
    myLeads=leadsFromLocalstorage
    for(let j=0;j<myLeads.length;j++)
    {
        renderleads()
    } 
}
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
deleteBtn.addEventListener('dblclick',()=>{
    localStorage.clear();
    ulEl.innerText=""
    myLeads=[]
    i=0;
    
})
function renderleads()
{
    const li = document.createElement("li")
    li.innerHTML =`<a href= '${myLeads[i]}' > ${myLeads[i]}  </a>`
    ulEl.append(li)
    i++;
}