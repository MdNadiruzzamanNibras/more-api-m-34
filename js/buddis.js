const loadbuddis = ()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddis(data))
}
loadbuddis()
const displayBuddis =(data)=>{
    const buddis =data.results
    const div =document.getElementById('buddis')
    for(const buddy of buddis){
    console.log(buddy.name)
    const p = document.createElement('p')
    p.innerHTML= `name: ${buddy.name.title}  ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`;
    div.appendChild(p)}
}