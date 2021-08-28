// const loadBuddies = () => {
//     fetch('https://randomuser.me/api/?results=5')
//         .then(res => res.json())
//         .then(data => displayBuddies(data));
// }
// loadBuddies();

// const displayBuddies = data => {
//     console.log(data);
//     const buddies = data.results;
//     const buddiesDiv = document.getElementById('buddies');
//     for (const buddy of buddies) {
//         const p = document.createElement('p');
//         p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`;
//         buddiesDiv.appendChild(p);
//     }
// }
const loadBuddies =()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data =>displayBuddies(data))

}
loadBuddies();

const displayBuddies=data =>{
    // console.log(data);
    const buddys=data.results;
    const buddyDiv=document.getElementById('buddies');
    
    for(buddy of buddys){
        const p =document.createElement('p')
        p.classList.add('bud');
        p.innerText=`Email: ${buddy.email}
        `;
        buddyDiv.appendChild(p);
    }
}
