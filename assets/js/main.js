document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay")
    const enterButton = document.getElementById("enterButton")
    const backgroundVideo = document.getElementById("backgroundVideo")

    backgroundVideo.controls = false
    backgroundVideo.src = "https://cdn.discordapp.com/attachments/1206489703457628182/1212379211663151144/Song_2_1.mp4?ex=65f19f20&is=65df2a20&hm=63bcc8f799f9ba1dd405f2263f68ec17e89e2f9c1862188990ec94dff47e20b9&"

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
