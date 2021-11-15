$(document).ready(function(){
  $.get("https://jsonplaceholder.typicode.com/users", function(data, status){
  console.log(data);

  data.forEach(function(dt){
    $("#tdata").append("<tr>"+
    "<td id='"+dt.id+"' onclick='valorId(this.id);'>"+dt.username+"</td>"
    +"</tr>"
    );
  });
});
});


function valorId(id) {  
  $(document).ready(function(){
    $('td').click(function(){
      $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
      let post = document.getElementById('tposts');
      post.innerHTML = '';
      
      data.forEach(function(dt){
       
        if (id == dt.userId) {
          console.log(dt)
          $("#tposts").append("<tr>"+
          "<td>"+dt.title+"</td>"
          +"</tr>"
          );
        }  
      });
      });
    })
    });
}

