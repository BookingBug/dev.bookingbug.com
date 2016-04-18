'use strict';

class Core {
  constructor() {
    this.log('Loaded Core JavaScript');
    this.menuLinks();

    const $toggle = $('.menu-toggle');
    const $target = $('.main-menu');

    this.menuBind($target, $toggle);

    this.tabsInit();
    this.highlightCode();
    this.historyPop();

    this.disqusLoad(window.location.href, window.location.pathname);
    // TODO if url matches menu item href add class active  to said menu item
  }

  log(message) {
    console.log(message);
  }

  menuLinks() {
    const $menuItem = $('nav.main-menu a');

    $menuItem.each((index, value) => {
      $(value).on('click', event => {
        if ($(value).attr('target')) {
          return;
        } else {
          event.preventDefault();
          const $url = $(value).attr('href');
          this.menuClose($('.main-menu'), $('.menu-toggle'));
          this.historyPush($url);
        }
      });
    });
  }

  historyPush(url) {
    history.pushState(url, null, url);
    this.switchContent(url);
  }

  historyPop() {
    window.addEventListener('popstate', (e) => {
      // e.state is equal to the url passed to the history.js function
      this.historyPush(e.state);
    });
  }

  switchContent(path) {
    $('.content > .container').fadeOut(() => {
      this.disqusHide();
      $('.content > .container').load(path + ' .content > .container', () => {
        $('.content > .container').fadeIn(() => {
          this.disqusReload(path);
          //refreash dom binded elements
          this.tabsInit();
          this.highlightCode();
        });
        $('body').animate({ scrollTop:0 }, '500', 'swing');
      });
    });
  }

  menuBind($target, $toggle) {
    $toggle.on('click', (e) => {
      e.preventDefault();
      if ($target.hasClass('active')) {
        this.menuClose($target, $toggle);
      } else {
        this.menuOpen($target, $toggle);
      }
    });
  }

  menuOpen($target, $toggle) {
    $target.addClass('active');
    $toggle.addClass('active');
  }

  menuClose($target, $toggle) {
    $target.removeClass('active');
    $toggle.removeClass('active');
  }

  tabsInit() {
    $('.tabs__menu a').on('click', function(event) {
      event.preventDefault();
      $(this).parent().addClass('current');
      $(this).parent().siblings().removeClass('current');
      const tab = $(this).attr('href');
      $('.tab__content').not(tab).css('display', 'none');
      $(tab).fadeIn();
    });
  }

  disqusLoad(url, path) {
    var disqus_config = function () {
      this.page.url = url;
      this.page.identifier = path;
    };
    this.disqusBuildDom();
  }

  disqusReload(path) {
    this.disqusBuildDom(() => {
      DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = path;
          this.page.url = window.location.protocol + '://' + window.location.host + path;
        }
      });
    });
  }

  disqusBuildDom() {
    var d = document, s = d.createElement('script');
    s.src = '//devdocsbookingbug.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    this.disqusShow()
  }

  disqusShow() {
    const $comments = $('.comments');
    $comments.fadeIn(500);
  }

  disqusHide() {
    const $comments = $('.comments');
    $comments.hide();
  }

  highlightCode() {
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
  }
}

new Core();
