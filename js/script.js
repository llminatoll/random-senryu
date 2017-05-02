$(function() {
  $('#get_answer').on('click', function() {
    // 前回の結果を消す
    $('.senryu').remove();

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

      // 描画
      $main.append($('<p>').prop('id', 'kami').prop('class', 'senryu').html(kami).hide());
      $main.append($('<p>').prop('id', 'naka').prop('class', 'senryu').html(naka).hide());
      $main.append($('<p>').prop('id', 'shimo').prop('class', 'senryu').html(shimo).hide());
      $('.senryu').fadeIn();
    }); // getJSON
  }); // on click
}); // document ready
