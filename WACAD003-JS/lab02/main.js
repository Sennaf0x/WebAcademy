 const thumbBar = document.querySelector('.thumb-bar');
 const displayedImg = document.querySelector('.displayed-img');
 const overlay = document.querySelector('.overlay');
 const btn = document.querySelector('.dark');

 for (let i = 1; i <= 5; i++) {
     const novaImagem = document.createElement('img');
     novaImagem.setAttribute('src', `images/pic${i}.jpg`);
     novaImagem.addEventListener('click', function() {
         displayImage(novaImagem.getAttribute('src'));
     });
     thumbBar.appendChild(novaImagem);
 }

 function displayImage(src) {
     displayedImg.setAttribute('src', src);
 }

 btn.addEventListener('click', function() {
     if (btn.getAttribute("class") === "dark") {
         btn.setAttribute("class", "light");
         btn.textContent = "Lighten";
         overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
     } else {
         btn.setAttribute("class", "dark");
         btn.textContent = "Darken";
         overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
     }
 });

