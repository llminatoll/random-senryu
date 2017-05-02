$(function() {
  $('#get_answer').on('click', function() {
    // 前回の結果を消す
    $('#kami').remove();
    $('#naka').remove();
    $('#shimo').remove();

    // 上の句・中の句・下の句をロードし、結果を表示する
    $.getJSON('js/senryu.json', function(senryu) {
      var $main = $('#main');
      // 答えの配列を得る
      var kamis = senryu.kami;
      var nakas = senryu.naka;
      var shimos = senryu.shimo;
      // 答えを決める
      var kami = kamis[Math.floor(Math.random() * kamis.length)];
      var naka = nakas[Math.floor(Math.random() * nakas.length)];
      var shimo = shimos[Math.floor(Math.random() * shimos.length)];

      $main.hide();
      $main.append($('<p>').prop('id', 'kami').html(kami));
      $main.append($('<p>').prop('id', 'naka').html(naka));
      $main.append($('<p>').prop('id', 'shimo').html(shimo));
      $main.fadeIn();
    }); // getJSON
  }); // on click
}); // document ready
