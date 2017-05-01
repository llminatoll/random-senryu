$(function(){
  $("#get_answer").click(
   function(){

     // 前回の結果を消す
     $("#kami").remove();
     $("#naka").remove();
     $("#shimo").remove();
     
     
     // 上の句・中の句・下の句をロードし、結果を表示する
     $.getJSON(
       "js/kami.json",
       function(json){
        var kamis = json; // 答えの配列を得る
        var kami = kamis[Math.floor(Math.random() * kamis.length)];
        $("<p id='kami'></p>")
          .html( kami )
          .appendTo( $("#main") )
          .hide()
          .fadeIn()
        ;
       }
     ); // getJSON
    
     $.getJSON(
       "js/naka.json",
       function(json){
        var nakas = json; // 答えの配列を得る
        var naka = nakas[Math.floor(Math.random() * nakas.length)];
        $("<p id='naka'></p>")
          .html( naka )
          .appendTo( $("#main") )
          .hide()
          .fadeIn()
        ;
       }
     ); // getJSON

     
     $.getJSON(
       "js/shimo.json",
       function(json){
        var shimos = json; // 答えの配列を得る
        var shimo = shimos[Math.floor(Math.random() * shimos.length)];
        $("<p id='shimo'></p>")
          .html( shimo )
          .appendTo( $("#main") )
          .hide()
          .fadeIn()
        ;
       }
     ); // getJSON
     
   }
  );// click

});