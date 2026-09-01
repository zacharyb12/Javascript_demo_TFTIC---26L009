const titre = document.getElementById("titre");
const paragraphe = document.querySelector("body > p");
const bouton1 = document.getElementById("bouton1");
const bouton2 = document.getElementById("bouton2");
const liste = document.getElementById("liste");
const suffixe = ' (Modifié)';

titre.innerText = titre.innerText + suffixe;
paragraphe.innerText = paragraphe.innerText + suffixe;

bouton1.addEventListener('click', function() {
    paragraphe.className = 'styleBouton1';
    console.log(paragraphe.className);    
});

bouton2.addEventListener('click', function() {
    paragraphe.classList.toggle('styleBouton2');
});

liste.querySelectorAll('li').forEach(function(li) {
    li.addEventListener('click', function() {
        li.innerText = li.innerText.endsWith(suffixe) ? li.innerText.replace(suffixe, '') : li.innerText + suffixe;
        
        // if(li.innerText.endsWith(suffixe))
        // {
        //     li.innerText = li.innerText.replace(suffixe, '');
        // }
        // else
        // {
        //     li.innerText = li.innerText + suffixe;
        // }
    });
});



