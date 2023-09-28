var cardData = [
    {
        imgSrc: "img-20230927T044336Z-001/img/blog/cbl-1.png",
        title: "Etherum Summit Governance plan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellendus nostrum enim. Eos accusantium sit neque dolor minus reprehenderit officia facere harum voluptatem enim maiores ipsafugiat, ratione corporis"
    },
    {
        imgSrc: "img-20230927T044336Z-001/img/blog/cbl-2.png",
        title: "Etherum Summit Governance plan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellendus nostrum enim. Eos accusantium sit neque dolor minus reprehenderit officia facere harum voluptatem enim maiores ipsafugiat, ratione corporis."
    },
    {
        imgSrc: "img-20230927T044336Z-001/img/blog/cbl-3.png",
        title: "Etherum Summit Governance plan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellendus nostrum enim. Eos accusantium sit neque dolor minus reprehenderit officia facere harum voluptatem enim maiores ipsafugiat, ratione corporis"
    },
    {
        imgSrc: "img-20230927T044336Z-001/img/blog/cbl-1.png",
        title: "Etherum Summit Governance plan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellendus nostrum enim. Eos accusantium sit neque dolor minus reprehenderit officia facere harum voluptatem enim maiores ipsafugiat, ratione corporis"
    }
];

var cardRow = document.getElementById("cardRow"); // Get the row element

cardData.forEach(function(cardInfo) {
    // Create a <div> element with class "col-md-3" to create columns
    var colDiv = document.createElement("div");
    colDiv.className = "col-md-3";

    // Create a <div> element with class "card mb-3" and style attribute
    var cardDiv = document.createElement("div");
    cardDiv.className = "card mb-3";
    cardDiv.style.maxWidth = "100%";

    // Create an <img> element with class "card-img-top" and set the src
    var img = document.createElement("img");
    img.src = cardInfo.imgSrc;
    img.className = "card-img-top";
    img.alt = "...";

    // Create a <div> element with class "card-body"
    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    // Create an <h5> element with class "card-title" and set the title
    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = cardInfo.title;

    // Create a <p> element with class "card-text" and set the text
    var cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = cardInfo.text;

    // Append the elements to build the card
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    // Append the card to the column
    colDiv.appendChild(cardDiv);

    // Append the column to the cardRow
    cardRow.appendChild(colDiv);
});


