

function changerCouleur() {
    let couleur = '#';
    const lettres = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      couleur += lettres[Math.floor(Math.random() * 16)];
    }
    return couleur;
  }

const liste=document.querySelector("#liste");

liste.addEventListener("click",(e)=>

{   const el=Array.from(liste.querySelectorAll("li"));
    
    if (el.includes(e.target))
    {const c=changerCouleur();
    e.target.style.color=c;
        
    }
}
);