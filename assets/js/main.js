document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay")
    const enterButton = document.getElementById("enterButton")
    const backgroundVideo = document.getElementById("backgroundVideo")
    const RandomChooser = Math.round((Math.random() * 4) + 1)

    backgroundVideo.controls = false
    
    switch (RandomChooser) {
        case 4:
            backgroundVideo.src = "https://cdn.discordapp.com/attachments/718589480285765662/1195608109398376448/Bis_X_Blanco_X_Active_X_MizOrMac_-_Kennington_Where_It_Started_HarlemSpartans_-_Trim.mp4?ex=65b49bd2&is=65a226d2&hm=e2f927d59c8abb681e9157d03831d9a8838a97d548a33d873e495315e80614bb&"
            break 
        case 3:
            backgroundVideo.src = "https://cdn.discordapp.com/attachments/718589480285765662/1195608109398376448/Bis_X_Blanco_X_Active_X_MizOrMac_-_Kennington_Where_It_Started_HarlemSpartans_-_Trim.mp4?ex=65b49bd2&is=65a226d2&hm=e2f927d59c8abb681e9157d03831d9a8838a97d548a33d873e495315e80614bb&" 
            break
        case 2:
            backgroundVideo.src = "https://cdn.discordapp.com/attachments/718589480285765662/1195608912284631050/TPL_Sava_x_Bm_x_Mini_OTP_-_Haringey_Borough_Music_Video_-_Trim.mp4?ex=65b49c92&is=65a22792&hm=28599f3356f21e136ea3596e46778bea73ae5f02ce7e15827204c85a21253d2d&"
            break
        default:
            backgroundVideo.src = "https://cdn.discordapp.com/attachments/718589480285765662/1195608912284631050/TPL_Sava_x_Bm_x_Mini_OTP_-_Haringey_Borough_Music_Video_-_Trim.mp4?ex=65b49c92&is=65a22792&hm=28599f3356f21e136ea3596e46778bea73ae5f02ce7e15827204c85a21253d2d&"
    }

    enterButton.addEventListener("click", function() {
        backgroundVideo.play()
        overlay.style.visibility = "hidden"
        overlay.style.opacity = 0
    })
})

function Scroll(text) {
    document.title = text;
    
    setTimeout(function() {
        Scroll(text.substr(1) + text.substr(0, 1));
    }, 300);
}

Scroll("Globe | @Namecall ")
