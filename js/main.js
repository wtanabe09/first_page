/* global $ MobileDetect */

// モバイルブラウザかどうか判定
const isMobile = !!new MobileDetect(window.navigator.userAgent).mobile();


/**
 * -----------------------
 * イベントハンドラの登録
 * -----------------------
 */
 
/**
* animatedクラスを持つ要素が画面内に入ったら
* Animate.cssのfadeInUpエフェクトを適用
*/
$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たらhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '60%',
});
  

/**
 * ナビゲーションバーのリンクをクリックしたら、
 * スムーズにスクロールしながら対象位置に移動
 */
$('.gnav-link').on('click', (e) => {
  const destination = $(e.target).attr('href');
  
  //本来のクリックイベントは処理しない
  e.preventDefault();
  
  $('html, body').animate(
    {
      scrollTop: $(destination).offset().top,
    },
    750,
  );
  
  // $('.navbar-toggler:visible').trigger('click');
});

/**
 * -------------------------------------------
 * ページの読み込みが完了したタイミングで行うDOM操作
 * -------------------------------------------
 */
// initParallax();