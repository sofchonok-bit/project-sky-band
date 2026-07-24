/* =====================================================
   ADMIN.JS
   Добавление новостей в Supabase
===================================================== */


const form = document.getElementById("news-form");

const result = document.getElementById("result");



form.addEventListener("submit", async (event) => {


    event.preventDefault();



    const title = document.getElementById("title").value;

    const content = document.getElementById("content").value;

    const author = document.getElementById("author").value;



    result.textContent = "Публикация...";





    const { data, error } = await supabaseClient

        .from("news")

        .insert([

            {

                title: title,

                content: content,

                author: author

            }

        ]);





   if(error){

    console.error("Ошибка Supabase:", error);

    result.textContent =
    error.message;

    return;

}





    result.textContent =
    "Новость опубликована!";



    form.reset();



});