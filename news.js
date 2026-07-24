/* =====================================================
   NEWS.JS
   Загрузка новостей из Supabase
===================================================== */


const newsContainer = document.getElementById("news-container");



async function loadNews(){


    const { data, error } = await supabaseClient

        .from("news")

        .select("*")

        .order("id", { ascending:false });



    if(error){


        console.error("Ошибка загрузки новостей:", error);


        newsContainer.innerHTML = `

            <div class="news-loading">

                <i class="fa-solid fa-triangle-exclamation"></i>

                <p>
                Не удалось загрузить новости
                </p>

            </div>

        `;


        return;

    }





    if(!data || data.length === 0){


        newsContainer.innerHTML = `

        <div class="news-loading">

            <i class="fa-solid fa-cloud"></i>

            <p>
            Пока новостей нет
            </p>

        </div>

        `;


        return;

    }





    newsContainer.innerHTML = "";





    data.forEach(news => {



        const card = document.createElement("article");


        card.className = "news-card";



        card.innerHTML = `


            <h2>
                ${news.title}
            </h2>



            <div class="news-text">

                ${news.content}

            </div>



            <div class="news-info">


                <span>

                    <i class="fa-solid fa-user"></i>

                    ${news.author || "Администрация"}

                </span>



                <span>

                    <i class="fa-solid fa-calendar"></i>

                    ${news.created_at 
                    ? new Date(news.created_at)
                    .toLocaleDateString("ru-RU")
                    : ""}

                </span>



            </div>


        `;



        newsContainer.appendChild(card);



    });


}





loadNews();