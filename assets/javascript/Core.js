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

    $('.content').anchorific({
      navigation: '.anchorific', // position of navigation
      speed: 200, // speed of sliding back to top
      anchorClass: 'anchor', // class of anchor links
      anchorText: '#', // prepended or appended to anchor headings
      top: '.top', // back to top button or link class
      spy: true, // highlight active links as you scroll
      position: 'append' // position of anchor text
    });
    
    // this.disqusLoad(window.location.href, window.location.pathname);
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
    var pageTitle = url.split('/').pop();
    document.title = 'Developer Docs - ' + pageTitle.replace(/-/g, ' ');
    this.switchContent(url);
  }

  historyPop() {
    window.addEventListener('popstate', (e) => {
      // e.state is equal to the url passed to the history.js function
      this.historyPush(e.state);
    });
  }

  switchContent(path) {
    let mprogress = new Mprogress();
    mprogress.start();
    $('.content > .container').fadeOut(() => {
      this.disqusHide();
      mprogress.set(0.25);
      mprogress.set(0.35);
      $('.content > .container').load(path + ' .content > .container', () => {
        mprogress.set(0.45);
        $('.content > .container').fadeIn(() => {
          this.disqusReload(path);
          mprogress.set(0.50);
          //refreash dom binded elements
          this.tabsInit();
          mprogress.set(0.75);
          this.highlightCode();
          mprogress.set(0.85);
        });
        $('body').animate({ scrollTop:0 }, '500', 'swing');
        mprogress.end();
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
    let $tabs = $('.tabs');
    $tabs.each(function (index, value) {
      let $this = $(this);
      let $links = $this.find('a');
      let $tabContent = $this.find('.tab__content');

      $links.each((index, value) => {
        $(value).on('click', event => {
          event.preventDefault();
          $(value).parent().addClass('current');
          $(value).parent().siblings().removeClass('current');
          const tab = $(value).attr('href');

          $tabContent.not(tab).css('display', 'none');

          $this.find(tab).fadeIn();
        });
      });
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
