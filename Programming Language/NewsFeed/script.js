var currentPage = 1;
        document.getElementById("newContainer").style.display = "grid";
        document.getElementById("secondContainer").style.display = "none";

        function firstPage() {
            currentPage = 1;
            document.getElementById("secondContainer").classList.add("hidden");
            document.getElementById("newContainer").classList.remove("hidden");
            loadNewsFeed();
        }

        function secondPage() {
            currentPage = 2;
            document.getElementById("newContainer").classList.add("hidden");
            document.getElementById("secondContainer").classList.remove("hidden");
            loadNewsFeed();
        }

        const NewsArticle = [
            {
                Title: "7 soldiers injured in landmine explosion",
                Description: "The troops were on patrol duty when one of the soldiers accidentally stepped over the landmine near Khamba Fort in Nowshera sector.",
                imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6cuvFXjYYui065H_nEr981JkpwvqflO2dw&s"
            },
            {
                Title: "Rain forecast in Mumbai disrupts flights",
                Description: "Heavy rain is expected to disrupt flights and bring traffic to a standstill in the city this week.",
                imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTEj63-B23Yx_nOElenRzuHWO8QXrrhPtmA&s"
            },
            {
                Title: "Tech stocks surge in the stock market",
                Description: "Market recovery boosts the tech industry, with major players reporting significant gains in their quarterly results.",
                imgURL: "https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2024/06/Stock-gain-ft-760x570.png"
            },
            {
                Title: "Sports events canceled due to heatwave",
                Description: "A severe heatwave has forced authorities to cancel several outdoor sports events across the country.",
                imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZiSlp1J6KDD2cM4Y8HoxlwfcLLVScMtHrNA&s"
            },
            {
                Title: "Sonu Sood has ditched chapatis",
                Description: "Sonu Sood has ditched chapatis, eats ‘hospital food at home’; know what happens to the body when you completely eliminate rotis from diet",
                imgURL: "https://images.indianexpress.com/2025/01/sonu-sood-what-happens.jpg?w=640"
            },
            {
                Title: "Kumbh Mela, explained: Its mythology, history, astrology, and why millions flock to it",
                Description: "Maha Kumbh Mela Mythology, History, Astrology: What is the Kumbh Mela, and why is it held in four cities periodically? What is Ardh Kumbh and Maha Kumbh? What is the origin of this pilgrimage festival?",
                imgURL: "https://images.indianexpress.com/2025/01/Internal-migration.jpg?w=640"
            },
            {
                Title: "Internal migrants drive development but ‘better life’ remains elusive for them",
                Description: "Internal migrants play a crucial role in improving the economy of their home areas and driving development. However, only a few manage to improve their own lives after moving to urban areas. Why?",
                imgURL: "https://images.indianexpress.com/2025/01/Internal-migration.jpg?w=640"
            },
            {
                Title: "Gloves off between Rahul Gandhi, Arvind Kejriwal, where does INDIA go from here",
                Description: "That there is no love lost between Arvind Kejriwal and Rahul Gandhi is well-known. Kejriwal’s Aam Aadmi Party (AAP) is the only regional outfit to have ousted the Congress from power in two states (Delhi and Punjab) in recent history. Besides, Rahul, like most Congress leaders, believes it was the Anna Hazare movement, of which Kejriwal was a part, that triggered the party’s nationwide collapse over a decade ago.",
                imgURL: "https://images.indianexpress.com/2025/01/rahul-kejri-1.jpg?w=640"
            },
            {
                Title: "Amid farmers’ stir, Shivraj Singh Chouhan goes the extra mile, reaches out to states",
                Description: "As farmers’ protests persist over several demands including a legal guarantee for minimum support price (MSP), the Union Ministry of Agriculture and Farmers’ Welfare, led by Shivraj Singh Chouhan, has taken one more step to enhance coordination between the Centre and states.",
                imgURL: "https://images.indianexpress.com/2025/01/shivraj-farmers-pulse.jpg?w=640"
            }
        ];

        function loadNewsFeed() {
            const container = currentPage === 1 ? document.getElementById("newContainer") : document.getElementById("secondContainer");
            container.innerHTML = "";

            const startIndex = (currentPage - 1) * 6;
            const endIndex = startIndex + 6;
            const pageArticles = NewsArticle.slice(startIndex, endIndex);

            pageArticles.forEach((article) => {
                const newsItem = `
                    <li>
                        <div class="bg-white rounded shadow p-4">
                            <img src="${article.imgURL}" alt="Card image" class="w-full h-48 object-cover rounded mb-4">
                            <h4 class="text-lg font-semibold mb-2">${article.Title}</h4>
                            <p class="text-gray-700">${article.Description}</p>
                        </div>
                    </li>`;
                container.innerHTML += newsItem;
            });
        }

        var AddArticle = (event) => {
            event.preventDefault();
            var Title = document.getElementById("title").value;
            var Description = document.getElementById("description").value;
            var imgURL = document.getElementById("imgURl").value;
            var obj = { Title, Description, imgURL };
            NewsArticle.push(obj);
            document.querySelector("form").reset();
            loadNewsFeed();
        };

        window.onload = firstPage;