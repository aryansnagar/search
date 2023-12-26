var searchInput = document.getElementById("container_input");

window.onload = function () {
     searchInput.focus();
};

searchInput.addEventListener("keypress", function (event) {
     if (event.keyCode === 13) {
          var searchTerm = searchInput.value;

          if (searchTerm.toLowerCase().endsWith('.com') || searchTerm.toLowerCase().endsWith('.in') || searchTerm.toLowerCase().endsWith('.org')) {
               window.location.href = "http://" + searchTerm;
          } else if (searchTerm.toLowerCase().startsWith('y ')) {
               var youtubeSearchUrl = "https://www.youtube.com/results?search_query=" + encodeURIComponent(searchTerm.substring(2));
               window.location.href = youtubeSearchUrl;
          } else {
               var googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
               window.location.href = googleSearchUrl;
          }

          searchInput.value = "";
     }
});