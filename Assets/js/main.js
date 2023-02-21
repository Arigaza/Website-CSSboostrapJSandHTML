window.onload = () => {
  d = document
  currentdate = d.querySelector('#currentdate');
  if (currentdate != null) {
    currentdate.innerHTML = new Date().getFullYear();
  }
  footer = d.querySelector('#footer')
  // tab & dropdown show content 
  // let tab1 = d.querySelector('#tab1')
  // let tab2 = d.querySelector('#tab2')
  // let tab3 = d.querySelector('#tab3')
  let tab = d.querySelector('#tabselector')
  let tab1content = d.querySelector('#tab1content')
  let tab2content = d.querySelector('#tab2content')
  let tab3content = d.querySelector('#tab3content')

  let tabview = d.querySelector('#tabview')
  let tab1B = false
  let tab2B = false
  let tab3B = false
  let notab = true
  if (tab !== null) {

    tab.addEventListener('click', (e) => {
      let $this = e.target;
      if (notab || !(tab1B == tab2B == tab3B == false)) {

        switch ($this.id) {

          case 'tab1':
            console.log(tab1B)
            if (!tab1B) {
              tab1B = true
              tab2B = false
              tab3B = false
              console.log('tab1')
              notab = false
              tabview.innerHTML = tab1content.innerHTML
            } else {
              notab = true
              tabview.innerHTML = ''
              tab1B = false
            }
            break;

          case 'tab2':
            console.log(tab2B)

            if (!tab2B) {
              tab2B = true
              tabview.innerHTML = tab2content.innerHTML
              tab1B = false
              tab3B = false
              notab = false
            } else {
              notab = true
              tabview.innerHTML = ''
              tab2B = false
            }
            break;

          case 'tab3':
            console.log(tab3B)

            if (!tab3B) {

              tab3B = true
              tabview.innerHTML = tab3content.innerHTML
              tab2B = false
              tab1B = false
              console.log('tab3')
              notab = notab
            } else {
              notab = true
              tab3B = false
              tabview.innerHTML = ''
            }
            break;
        }
      } else {
        console.log('notab')
        tabview.innerHTML = ''
        notab = true
        tab1B = false
        tab2B = false
        tab3B = false
      }
      // console.log( 'notab : ' + (tab1B==tab2B==tab3B) ? true : false)

    })

  }

  // modal

  // Fetch
  if (footer !== null) {

    fetch('popup.html')
      .then(function (response) {
        // When the page is loaded convert it to text
        return response.text()
      })
      .then(function (html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM 
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;
        let title = doc.querySelector('#title').innerHTML
        let content = doc.querySelector('#content').innerHTML
        let popuptitle = d.querySelector('div#myModal h1')
let popupcontent = d.querySelector('div#myModal p')
        // console.log(popuptitle.innerHTML + popupcontent.innerHTML);
        popuptitle.innerHTML = title
        popupcontent.innerHTML = content

      })
      .catch(function (err) {
        console.log('Failed to fetch page: ', err);
      });

    // Get the modal
    var modal = d.getElementById("myModal");

    // Get the button that opens the modal
    var btn = d.getElementById("footer");

    // Get the <span> element that closes the modal
    var span = d.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  // carousel text save
  
}



