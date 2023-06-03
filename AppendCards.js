
const CreateCards = () => {
   
    var x = 0;

    while(x < 10){
        // Create elements
        var card = document.createElement('div');
        var img = document.createElement('img');
        var txt = document.createElement('p');
    
        // Set image source and text value.
        img.src = './Images/Placeholder.png';
        txt.innerHTML = 'Title';
        card.setAttribute('id', 'card');
        
        // Append the image and the text to the card element
        card.appendChild(img);
        card.appendChild(txt);

        // Append classList for styling
        card.classList.add('card');
        img.classList.add('img');
        txt.classList.add('title');

        // Append whole card to the slider element
        document.getElementById('slider-inner').appendChild(card);
        x++;        
    }
}

CreateCards();