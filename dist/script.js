$(document).ready.function() {

  
  var key = 'AIzaSyCLZh_CYROnaZmLfrnGJVx9AMF00FIjfso';
  
  var playlistId = 'PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V&index=30'
  
  var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
  
  var options = {
    part: 'snippet',
    key: key,
    maxResult: 20,
    playListId: playListId
    
  }
  
  loadsVids();
  
  
  function loadVids() {
    $.getJSON(URL, options, function(data){
      var id = item.snippet.resourceId.videoId;
      mainVid(id);
      resultLoops(data);
      
    })
  }
    
    function mainVid(id) {
      $(#'video').html(`  <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
    }
  
  function resultsLoop(data) {
    
    $.each(data.items, function(i, item){
        
    })
    
    var thumb = data.item[0].snippet.thumbnails.medium.url;
    var title = item.snippet.title;
    var desc = item.snippet.description;
    var vid = item.snippet.resourceId.videoId;
    
    $('main').append(`
    
      <article class="item" data-keys="${vid}">
          <img src="${}" alt="" class="thumb">
          
          <div class="detailes">
            
            <h4>${title}</h4>
            <p>${desc}</p>
          </div>          
        </article>
    
    `)
   

    });
});

    $('main').on('click', 'article', function() {
      var id = $(this).attr('data-key');
      mainVid(id);
      
    });
});