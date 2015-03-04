/* mason img gallery*/

$(document).ready(function(){
  var image=new Array();
  var current=0;

  image[0]=new Image();
  image[0].src="images/detailed_product/productdetails_mason.jpg";
  image[1]=new Image();
  image[1].src="images/detailed_product/productdetails_mason_closeup.jpg";
  image[2]=new Image();
  image[2].src="images/detailed_product/productdetails_mason_lid.jpg";
  image[3]=new Image();
  image[3].src="images/detailed_product/productdetails_mason_context.jpg";
  

   $("#left").click(function(){
    if(current-1<0){
      current=image.length-1;
      $("#mason-image").attr("src", image[current].src);
    }
    else{
      --current;
      $("#mason-image").attr("src", image[current].src);
    }
  });

  $("#right").click(function(){
    if(current+1>image.length-1){
      current=0;
      $("#mason-image").attr("src", image[current].src);
    }
    else{
      ++current;
      $("#mason-image").attr("src", image[current].src);
    }
  });

})

/* wine glass img gallery*/

$(document).ready(function(){
  var image=new Array();
  var current=0;

  image[0]=new Image();
  image[0].src="images/detailed_product/productdetails_wine_context.jpg";
  image[1]=new Image();
  image[1].src="images/detailed_product/productdetails_wine_closeup.jpg";

  

   $("#left2").click(function(){
    if(current-1<0){
      current=image.length-1;
      $("#wine-image").attr("src", image[current].src);
    }
    else{
      --current;
      $("#wine-image").attr("src", image[current].src);
    }
  });

  $("#right2").click(function(){
    if(current+1>image.length-1){
      current=0;
      $("#wine-image").attr("src", image[current].src);
    }
    else{
      ++current;
      $("#wine-image").attr("src", image[current].src);
    }
  });

})







