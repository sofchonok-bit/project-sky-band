function onTelegramAuth(user){


    console.log("Telegram пользователь:", user);



    document.getElementById("login-result").innerHTML = `

    <p>
    Привет, ${user.first_name}!
    </p>

    `;


}