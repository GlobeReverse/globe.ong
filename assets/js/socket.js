// Remade all my self since the original was fucking obfuscated for no reason???
async function Update() {
    const request = await fetch(`https://api.lanyard.rest/v1/users/${USER_ID}`)
    const Userdata = await request.json()
    
    if (!Userdata.success) 
        return

    // Status Color
    document.getElementById("status").style.backgroundColor = STATUS[Userdata.data.discord_status].color

    // Avatar 
    document.getElementById('av').src = `https://cdn.discordapp.com/avatars/${Userdata.data.discord_user.id}/${Userdata.data.discord_user.avatar}`

    // Badges
    if (document.getElementById('badge')) 
        return 

    for (let i = 0; i < BADGES.length; i++) {
        const Parent = document.createElement("div");
        Parent.className = 'badge'
        Parent.id = "badge"

        const BadgeImage = document.createElement("img");
        BadgeImage.src = BADGES[i].image;
    
        Parent.appendChild(BadgeImage);
        document.getElementById("badges").appendChild(Parent)
    }
}

Update()
const socket = new WebSocket('wss://api.lanyard.rest/socket')

socket.addEventListener('open', (event) => {
    socket.send(JSON.stringify({ op: 2, d: { subscribe_to_ids: [ USER_ID ] } }));
})

socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data)
    
    if (data.t == "PRESENCE_UPDATE") 
        Update()
})
