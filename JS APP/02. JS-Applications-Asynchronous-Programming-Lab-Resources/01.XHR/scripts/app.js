function loadRepos() {
   let button = document.querySelector('button');


   button.addEventListener('click', function () {
      let XML = new XMLHttpRequest;
      let url = 'https://api.github.com/users/testnakov/repos';
      XML.addEventListener('readystatechange', function () {
         if (XML.readyState == 4 && XML.status == 200) {
            document.getElementById('res').textContent = XML.responseText;
         }
      });
      XML.open('GET', url);
      XML.send();
   })
}