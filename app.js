  const btnEl = document.getElementById("btn");
        const jokeEl = document.getElementById("joke");

        const apiKey = "yTjnvLPrO04G9TO/JhzeqQ==Qk04YEYIMDSSIvd8";
        const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

        const options = {
            method : "GET",
            headers : {
                "X-Api-Key" : apiKey
            }
        }
        async function getJoke(){
            try {
                jokeEl.innerText = "Updating...";
                btnEl.disabled = true;
                btnEl.innerText = "Loading";

                const response = await fetch(apiUrl,options);
                const data = await response.json();
                jokeEl.innerText = data[0].joke;

                btnEl.disabled = false;
                btnEl.innerText = "tell me a joke";
            } catch (error) {
                jokeEl.innerText = "An error happened, try again later!";
                btnEl.disabled = false;
                btnEl.innerText = "tell me a joke";
            }
        }

        btnEl.addEventListener("click",getJoke);
