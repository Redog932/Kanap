// Recuperation info du tableau

const url = "http://localhost:3000/api/products"

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);



        const pieces = data;
        const articles = pieces[0];
        console.log(pieces)

        // **test Boucle For
        for (let i = 0; i < pieces.length; i++) {
            console.log("coucou")

            
            // Récupération de l'élément du DOM qui accueillera les fiches
            const itemsElement = document.createElement("article");

            const sectionItems = document.getElementById("items");
            const link = document.createElement("a");

            const colorsElement = document.createElement("p");
            colorsElement.innerText = pieces[i].colors;

            const altTxtElement = document.createElement("alt");
            altTxtElement.innerText = pieces[i].altTxt;

            const descriptionElement = document.createElement("p");
            descriptionElement.innerText = pieces[i].description;

            const imageElement = document.createElement("img");
            imageElement.src = pieces[i].imageUrl;

            const nameElement = document.createElement("h2");
            nameElement.innerText = pieces[i].name;

            const priceElement = document.createElement("p");
            priceElement.innerText = `Prix: ${pieces[i].price} €`;


            link.appendChild(itemsElement);
            itemsElement.appendChild(imageElement);
            itemsElement.appendChild(nameElement);
            imageElement.appendChild(altTxtElement)
            itemsElement.appendChild(descriptionElement);
            itemsElement.appendChild(priceElement);
            sectionItems.appendChild(link);
            
        }
    })