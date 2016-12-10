$(function(){
  function loadFavorites(){

    $.get('/favorite_albums',function(res){
    res.forEach(function(post,index){
      var title = post.title;
      var artist = post.artist;
      var img = post.img;
      var id = post._id;

      var albumpost = [
        '<li>',
        '<div class="post" data-postid=',id, '>',
          '<section class="title">',title,'</section>',
          '<section class="artist">',artist,'</section>',
          '<img class="img img-responsive" src="',img,'" alt="album image">',
        '</div>',
        '</li>'
      ].join('');
      $('.album_list').prepend(albumpost);
    });
  });

  function addEventListeners(){
    $('body').on('click','a.edit-post',function(event){
      event.preventDefault();
      var $post = $(this).closest('.post');
      var postId = $post.data('postid');
      var $postTitle = $post.find('.title').text();
      var $postArtist = $post.find('.artist').text();
      var $postImg = $post.find('.img').attr('src');
      console.log($postImg);

    });
  }
}
// function addEventListeners(){
//   $('body').on('click',)
// }
function main(){
  loadFavorites();
}
main();
});
