const inviteButton = document.getElementById("invite-button");

inviteButton.addEventListener("click",() => {
    window.open("https://discord.com/oauth2/authorize?client_id=1054186963474862110&permissions=8&scope=bot")
})
