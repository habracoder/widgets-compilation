
var widget = JSON.parse(__WIDGET__);

MarketGidBaseBlockC605 = function(root_id, context, fallback, containerId, uniqId, versionWidget) {
  var self = this;

  this.context = context;
  this.root = this.context.document.getElementById(root_id);
  this.containerId = containerId;
  this.uniqId = uniqId;
  this.fallbackMode = fallback;
  this.page = 1;
  this.iteration = 1;
  this.adlink = '';
  this.template = '';
  this.id = 605;
  this.originalId = 605;
  this.tickerShow = 0;
  this.pvid = 0;
  this.linkerLinks = [];
  this.muid = "";
  this.cookieStorage = {};
  this.sharedCookieStorage = {};
  this.beforeLoadNewsHooks = [];
  this.afterLoadNewsHooks = [];
  this.afterInitHooks = [];
  this.blocksAddress = "";
  this.tickerPrefix = "";
  this.countLoadBlocks = 0;
  this.blockIds = {};
  this.preTemplate = "";
  this.postTemplate = "";
  this.banners = {};
  this.crashStep = 0;
  this.loadedDefault = false;
  this.teaserHashes = {};
  this.teaserData = {};
  this.json = [];
  this.servicerData = {};
  this.childWidgetsData = [];
  this.versionWidget = versionWidget;
  this.sspPerformance = '10' >= Math.ceil(Math.random() * 100);

  this.fakeMode = 0;

  this.requestParams = {};

  self.webProtocol = 'https:';

  if (self.context.self !== self.context.top) {
    refererUrl = self.context.document.referrer;
    var parts = refererUrl.split('/');
    self.intExchangeProtocol = parts[0].indexOf('http') == 0 ? parts[0] : 'https:';
  } else {
    var protocol = self.context.document.location.protocol;
    self.intExchangeProtocol = protocol.indexOf('http') == 0 ? protocol : 'https:';
  }

  self.sourceName = "";

  this.templates = [];
  this.templateId = 0;

  self.setStyles = function(styles) {
    self.styles = styles.replace(/\((\'|\")?\/\//g, '($1' + self.webProtocol + '//');
  };

  self.setTemplate = function(template) {
    template = template.replace(/^\s*[\r\n]|\s{2,}/gm, '');
    template = template.replace(/\((\'|\")?\/\//g, '($1' + self.webProtocol + '//');
    template = template.replace('src="//', 'src="' + self.webProtocol + '//');
    self.templateText = template.replace('href="//', 'href="' + self.webProtocol + '//');
  };

  this.servicerDomain = "servicer.alpha.marketgid.com";
  self.setTemplate('<table class="mctable" >              <tr>                  {foreach}<td valign="top" class="mcteaser" style="width:33.33%; height:100%;">                                                 <table cellpadding="0" cellspacing="1" style="width:100%; height:100%;">                                                     <tr><td style="height:100%;width:90px" valign="top" class="mccc"><div class="mcimage"><a {$target} {$href} ><img  class="mcimage" {$src} /></a></div></td><td style="height:100%;" valign="top" class="mcrc"><div class="mctitle"><a {$target} {$href} class="mctitle">{$title}</a></div><div class="mcdesc"><a {$target} {$href} class="mcdesc">{$desc}</a></div></td></tr></table></td>{if $iteration%3 == 0 && $iteration!=3}</tr><tr>{/if}                 {/foreach}             </tr>             </table>');
  self.setStyles('.mctable, .mctable * {margin:0; padding:0; border:0; font-style:normal; font-size:100.01%; line-height:1; text-decoration:none; color:#000; line-height:1.1em;} .mctable cite{color:red;} .mctable{border-spacing:2px; margin:auto !important; font:11px Tahoma, Verdana, Arial;} .mctable{ font-family: Tahoma,Geneva,sans-serif; width: 728px; border-width: 1px; border-style: solid; border-color: #e6e6fa; } .mctable *{ letter-spacing: 0em; } .mctitle{ font-weight: bold; font-size: 11px; text-decoration: underline; color: #4169e1; } .mctitle *{ color: #4169e1 !important; } div.mcimage{ text-align: center; } .mcdesc{ font-size: 11px; color: #000000; } .mcdesc *{ color: #000000 !important; } .mcsource{ color: #000000; font-size: 11px; } .mcsource *{ color: #000000 !important; } .mcteaser{ padding: 0px; } .mccc{ padding: 0px; } .mcrc{ padding: 0px; } .mctc{ padding: 0px; background-color: #e6e6fa; } .mcbc{ padding: 0px; } ');
  self.adBlockStyles = '';

  self.adBlockStyles = self.adBlockStyles.replace(/\((\'|\")?\/\//g, '($1' + self.webProtocol + '//');

  self.clickTracking = "";

  self.loadedType = '';

  self.funcBlocks = {};

  self.teaserData = {};

  self.loadedPopularTeaser = false;

  self.deviceType = "desktop";

  self.hrefAttr = "href";
  self.enabledCooperationTypes = [];

  self.consentData = '';
  self.cmpEnabled = false;
  self.cookieMatchingDomain =  'cm.marketgid.com' ;

  self.context._mgIntExchangeNews = self.context._mgIntExchangeNews || {};

  this.MarketCutStr = function(str,limit,dots) {
    if (str.length<=limit) return str;

    var word=new Array();
    word=str.split(" ");
    var ret=word[0] + ' ';
    var test;

    for (i=1;i<word.length;i++){
      test=ret+word[i];
      if (test.length>limit) return ret + (typeof(dots) == 'undefined' || dots ? '...' : '');
      else ret+=word[i] + ' ';
    }
    return str;
  };

  this.MarketParseStr = function(str,limit){
    var word=new Array();
    var i;
    var ret='';
    word=str.split(" ");
    for (i=0;i<word.length;i++){
      if (word[i].length>limit && word[i].search(/&\w+;/)<0)
        ret+=word[i].substr(0,limit) + ' ' + word[i].substr(limit) + ' ';
      else ret+=word[i] + ' ';
    }
    return ret;
  };

  this.prepareTitle = function(title) {
    title=this.MarketParseStr(title,15);         title=this.MarketCutStr(title,60,1);
    return title;
  };

  this.prepareDesc = function(desc) {
    desc=this.MarketParseStr(desc,15);         desc=this.MarketCutStr(desc,60);
    return desc;
  };

  this.isArray = function(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
  };

  self.fixGetElementsByClassNameHandler = function(el) {
    if (el.getElementsByClassName == undefined) {
      el.getElementsByClassName = function(cl) {
        var retnode = [];
        var myclass = new RegExp('\\b'+cl+'\\b');
        var elem = this.getElementsByTagName('*');
        for (var i = 0; i < elem.length; i++) {
          var classes = elem[i].className;
          if (myclass.test(classes)) retnode.push(elem[i]);
        }
        return retnode;
      };
    }
  };

  this.hidePreloadDiv = function() {
    if (!self.fallbackMode) {
      if (self.context.document.getElementById("MarketGidPreloadC" + this.containerId)) {
        self.context.document.getElementById("MarketGidPreloadC" + this.containerId).style.display = 'none';
      } else if (self.context.document.getElementById("M180PreloadC" + this.containerId)) {
        self.context.document.getElementById("M180PreloadC" + this.containerId).style.display = 'none';
      }
    } else if (self.fallbackMode && this.countLoadBlocks == 0) {
      self.root.innerHTML = "";
      if (self.context.document.getElementById("M180PreloadC605")) {
        self.context.document.getElementById("M180PreloadC605").style.display = 'none';
      }
    }
  };

  this.MarketGidLoadNews = function(json, servicerData) {
    this.hidePreloadDiv();

    if (typeof servicerData != 'undefined') {
      self.servicerData = servicerData;
      if (typeof servicerData.dt != 'undefined') {
        self.deviceType = servicerData.dt;
      }


      if (self.servicerData.hasOwnProperty('templateId') && self.templates[self.servicerData.templateId]) {
        var templateScript = this.context.document.createElement('script');

        templateScript.type = 'text/javascript';
        templateScript.charset = 'windows-1251';
        templateScript.src = self.webProtocol + '//' + self.templates[self.servicerData.templateId];

        var getTemplate = function() {
          var i, templates = self.context._mgtemplates;

          for (i in templates) {
            if ((templates[i].widgetId == self.id || templates[i].widgetId == self.originalId) && templates[i].templateId == self.servicerData.templateId) {
              return templates[i];
            }
          }

          return null;
        };

        this.root.parentNode.appendChild(templateScript);

        var attempts = 5;
        var interval = setInterval(function() {
          var template = getTemplate();

          if (null === template) {
            if (--attempts >= 0) {
              return;
            } else {
              (new Image(0, 0)).src = self.webProtocol + '//c.marketgid.com/widget-template-timeout?id=' + self.id;
            }
          } else {
            self.templateId = template.templateId;

            self.setStyles(template.styles);
            self.setTemplate(template.template);
          }

          clearInterval(interval);

          self.MarketGidLoadNews(json);
        }, self.servicerData.tsi || 15);

        return;
      }
    }

    if (self.fakeMode == 0) {
      for (var i = 0; i < self.beforeLoadNewsHooks.length; i++) {
        self[self.beforeLoadNewsHooks[i]]();
      }
    }

    if (this.isArray(json)){

      var template = self["templateFunc"](self, json);
      self.json = json;

      if (this.root && template) {
        if (typeof self.parseAdvertLink == 'function') {
          template = self.parseAdvertLink(template);
        }
        if (this.fallbackMode && this.countLoadBlocks == 0) {
          this.root.innerHTML = ""
        }

        this.addTemplate(template);

        this.renderBanners();
      }
    }
    else {
      if (this.root && this.countLoadBlocks==0) {
        this.root.innerHTML='';
        return;
      }
    }

    if (self.servicerData && self.servicerData.muidn && self.servicerData.pvid && self.pvid != 0 && self.servicerData.pvid == self.pvid) {
      try {
        if (self.context.localStorage) {
          self.context.localStorage.setItem('mgMuidn', self.servicerData.muidn);
        }
      } catch (e) {}
    }

    this.cookieStorage["page"] = this.page;
    this.cookieStorage['time'] = (new Date()).getTime();
    this.setCookie();

    var hrefs = this.root.getElementsByTagName("a");
    for (var i = 0; i < hrefs.length; i++) {
      hrefs[i].rel = "nofollow noopener";
    }

    if (typeof self.templateId !== "undefined" && self.templateId !== 0) {
      self.injectStyle(self.styles, self.context.document.getElementsByClassName('MarketGidC605')[0]);
    }

    this.countLoadBlocks++;

    if (self.fakeMode == 0) {
      for (var i = 0; i < self.afterLoadNewsHooks.length; i++) {
        self[self.afterLoadNewsHooks[i]]();
      }
    } else {
      if (typeof(self.responsiveInit) == "function") {
        self.responsiveInit();
      }
    }
  };

  this.addTemplate = function(template) {
    this.root.insertAdjacentHTML('beforeend', this.preTemplate + template + this.postTemplate);
  };

  this.getViewportHeight = function() {
    var d = this.context.document, w = this.context, dE = 'documentElement', cH = 'clientHeight', cW = 'clientWidth', iH = 'innerHeight', iW = 'innerWidth', sH = 'scrollHeight', sW = 'scrollWidth', oH = 'offsetHeight', oW = 'offsetWidth', oL = 'offsetLeft', oT = 'offsetTop', sT = 'scrollTop', sL = 'scrollLeft';
    if (w[iW]) {
      return {"c": w[iH], "s": w.pageYOffset};
    } else if (d[dE] && d[dE][cW]) {
      return {"c": d[dE][cH], "s": d[dE][sT]};
    } else if (d.body[cW]) {
      return {"c": d.body[cH], "s": d.body[sT]};
    }
    return 0;
  };


  this.renderItem = function(n, callbackText, type) {
    if ('html' in n) {
      var bid = 'mgBanner_605_' + this.page + '_' + this.iteration;
      var width = typeof n.width != 'undefined' ? n.width + 'px' : "100%";
      var height = typeof n.height != 'undefined' ? n.height + 'px' : "100%";
      var styles = 'width: ' + width + '; height: ' + height + '; border: 0px; margin: 0px; overflow: hidden; position: relative;';
      var banner = '<iframe id="' + bid + '" scrolling="no" style="' + styles + '"></iframe>';

      this.banners[bid] = n;
      n = ['', this.iteration];
    } else {
      var banner = '';
    }

    if (self.isArray(n)) {
      var p = self.prepareTeaserData(n, type);

      if (p.id && (!(p.id in self.blockIds) || (typeof self.isElastic !== 'undefined' && self.isElastic == true))) {
        if (typeof p.hash !== 'undefined' && typeof p.id !== 'undefined') {
          self.teaserHashes[p.id] = p.hash;
        }
        self.blockIds[p.id] = 1;

        var addClasses = [];
        if (!self.loadedPopularTeaser && typeof(p.other.adc) != 'undefined' && (
          p.other.adc.toString().indexOf('mrsadca') >= 0 || p.other.adc.toString().indexOf('mrsadcp') >= 0
        )) {
          addClasses.push('mgpopular');
          self.loadedPopularTeaser = true;
        }

        addClasses.push('teaser-' + p.id);
        if ('l' in p.other && null != p.other.l.match(/[\?|&]u=/)) {
          addClasses.push('dsp');
        }
        if ('type' in p.other) {
          addClasses.push('type-' + p.other.type);
        }

        var createWebLink = function(url) {
          return url && url.indexOf('//') === 0 ? self.webProtocol + url : url;
        };

        var price = p.price.replace(new RegExp('[^0-9.]'), '');
        var priceOld = p.priceold.replace(new RegExp('[^0-9.]'), '');

        var vars = [
          [/\{\*.*?\*\}/, ''],
          [/\{\$href\}/g, self.hrefAttr + '="' + self.prepareNiceHref(p.hash) + '" data-hash="' + p.hash + '"'],
          [/\{\$pmc_item\}/, self.id],
          [/\{\$hash\}/g, p.hash],
          [/\{\$target\}/g, ((typeof p.other.type !== 'undefined' && p.other.type == 'i') || (typeof self.servicerData.ats !== 'undefined' && self.servicerData.ats)) ? 'target="_top"' : 'target="_blank"'],
          [/(class\=\"[^+]?)(mgline)([^+]?\")/, '$1$2 ' + addClasses.join(' ') + '$3'],
          [/\{\$source\}/g, p.source],
          [/\{\$src\}/g, 'width="90" height="90"' + ' data-i="'+p.id+'" src="'+ createWebLink(p.other["i"]) + '"'],
          [/\{\$title\}/g, self.prepareTitle(p.title)],
          [/\{\$desc\}/g, self.prepareDesc(p.desc)],
          [/\{\$iteration\}/g, self.iteration],
          [/\$iteration/g, self.iteration],
          [/this\.iteration/g, self.iteration],
          [/\{\$price\}/g, p.price],
          [/\{\$priceold\}/g, p.priceold],
          [/\{\$discount\}/g, p.discount],
          [/\{if \$price\}/g, "{if '' != " + price + "}"],
          [/\{if !\$price\}/g, "{if '' == " + price + "}"],
          [/\{if \$priceold\}/g, "{if '' != " + priceOld + "}"],
          [/\{if \$price != " "\}/g, "{if " + p.price.trim().length + " != 0}"],
          [/\{if \$price == " "\}/g, "{if " + p.price.trim().length + " == 0}"],
          [/\$priceold/g, p.priceold],
          [/\$price/g, p.price],
          [/\{if \$rep\}/g, "{if p.isReplic}"],
          [/\{\$banner\}/g, banner],
          [/\{if \$teaser\}/g, "{if '' == '" + banner + "'}"],
          [/\{if \$banner\}/g, "{if '' != '" + banner + "'}"],
          [/\{\$category\}/g, p.other.category || ''],
          [/\{\$sourceName\}/g, self.sourceName]
        ];

        for (var i = 0 ; i < vars.length; i++) {
          callbackText = callbackText.replace(vars[i][0], vars[i][1]);
        }

        while (true) {
          var x = callbackText;
          var r = /\{if ([^\}]*?)\}(((?!\{(?:\/)?if).)*)\{\/if\}/g;
          callbackText = callbackText.replace(r, function(str, p1, p2) {
            if (self.expressionParser(p1)) {
              return p2;
            } else {
              return '';
            }
          });
          if (x == callbackText) break;
        }

        this.iteration++;

        return callbackText;
      }
      else {
        self.blockIds[p.id]++;
        return "";
      }
    }
  };

  this.renderBanners = function() {
    for (var i in self.banners) {
      var iframe = self.context.document.getElementById(i);

      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write("<html><body>" + self.banners[i].html + "</body></html>");
      iframe.contentWindow.document.close();

      iframe.contentWindow.document.body.addEventListener('click', function(event) {
        var node = event.target;
        var isLink = false;

        while (node.parentElement) {
          if (node.tagName === 'A') {
            isLink = true;
            break;
          } else {
            node = node.parentElement;
          }
        }

        if (isLink) {
          var image = new Image();
          image.src = self.banners[i].clickUrl + self.getAntifraudQueryParameter(self.banners[i].clickUrl);
        }
      }, true);
    }
  };

  this.expressionMap = {
    '||': function(parts) {
      for (var i in parts) {
        if (self.expressionParser(parts[i])) {
          return true;
        }
      }

      return false;
    },
    '&&': function(parts) {
      for (var i in parts) {
        if (!self.expressionParser(parts[i])) {
          return false;
        }
      }

      return true;
    },
    '==': function(parts) {
      return self.expressionParser(parts[0]) == self.expressionParser(parts[1]);
    },
    '!=': function(parts) {
      return self.expressionParser(parts[0]) != self.expressionParser(parts[1]);
    },
    '+': function(parts) {
      return self.expressionParser(parts[0]) + self.expressionParser(parts[1]);
    },
    '-': function(parts) {
      return self.expressionParser(parts[0]) - self.expressionParser(parts[1]);
    },
    '*': function(parts) {
      return self.expressionParser(parts[0]) * self.expressionParser(parts[1]);
    },
    '/': function(parts) {
      return self.expressionParser(parts[0]) / self.expressionParser(parts[1]);
    },
    '%': function(parts) {
      return self.expressionParser(parts[0]) % self.expressionParser(parts[1]);
    }
  };

  this.expressionParser = function(expression) {
    for (var i in self.expressionMap) {
      if (expression.indexOf(i) !== -1) {
        return self.expressionMap[i](expression.split(i));
      }
    }

    return (expression || '').replace(/^([\'|\s]+)|([\'|\s]+)$/g, '');
  };

  this.generateTemplate = function(templateText) {
    self["templateText"] = templateText;

    self["templateFunc"] = function(inf, json) {
      var parts = /(.*)?\{foreach\}(.*)?\{\/foreach\}(.*)?/.exec(self["templateText"]);
      if (!parts) {
        return;
      }
      var template = typeof(parts[1]) != 'undefined' ? parts[1] : '';
      for (var i = 0; i < json.length; i++) {
        template += inf.renderItem(json[i], parts[2], 'goods');
      }
      template += typeof(parts[3]) != 'undefined' ? parts[3] : '';
      return template;
    };

    return true;
  };

  this.getPageCount = function () {
    var pagesCountNews = parseInt('');
    var pagesCountGoods = parseInt('20');

    return pagesCountNews && pagesCountGoods
      ? Math.min(pagesCountNews, pagesCountGoods)
      : (pagesCountNews ? pagesCountNews : pagesCountGoods);
  };

  this.init = function() {
    if (typeof JSON !== 'object') {
      this.hidePreloadDiv();
      console.log('Unsupported browser');
    }

    if (this.root) {
      this.getCookie();
      var cookiePage = parseInt(this.cookieStorage["page"]);
      this.linkerLinks = this.root.getElementsByTagName('a');

      var pageOffset = (this.context['MarketGidPageOffset'] ? parseInt(this.context['MarketGidPageOffset']) : 0);
      self.addEvent(self.root, 'click', self.hangNiceLinkListener);
      /* \x63\x6f\x6e\x74\x65\x78\x74 = context. Чтобы не исключать context из обфускатора*/
      self.addEvent(self.root, "\x63\x6f\x6e\x74\x65\x78\x74menu", self.hangNiceLinkListener);
      self.addEvent(self.root, 'mouseup', self.hangNiceLinkListener);
      self.addEvent(self.root, 'touchstart', self.hangNiceLinkListener);

      var pagesCount = self.getPageCount();

      if (cookiePage != null && cookiePage < pagesCount && cookiePage > 0 ) {
        this.page = cookiePage + 1;
      } else if (cookiePage > (pagesCount - 1) || cookiePage < 1 ) {
        this.page = 1 + pageOffset;
      }

      if ((new Date()).getTime() - (this.cookieStorage['time']!=undefined ? this.cookieStorage['time'] : 0) >= 6e5) {
        this.page = 1+pageOffset;
      }

      if (!this.page) this.page = 1;
      this.pageUnlim = this.page - 1;
      this.cookieStorage["page"] = this.page;
      this.setCookie();

      if (!this.context.document.cookie) {
        var dt = new Date();
        this.page = dt.getSeconds()%pagesCount+1;
      }

      this.blocksAddress = self.webProtocol + '//'+this.servicerDomain+'/';


      self.clickTracking = typeof(self.context.MGClickTracking) != 'undefined' ? self.context.MGClickTracking : "";

      if (!self.generateTemplate(self.templateText)) {
        return;
      }

      self.context.onClickExcludes = self.context.onClickExcludes || [];
      self.context.onClickExcludes.push(self.root);



      if (typeof self.adBlockStatement !== "undefined" && self.adBlockStatement == 1 && '' !== "headline-in-picture") {
        self.injectStyle(self.adBlockStyles);
      } else {
        self.injectStyle(self.styles);
      }

      for (var i=0; i<this.afterInitHooks.length; i++) {
        this[this.afterInitHooks[i]]();
      }
    }
  };

  this.resetPage = function() {
    this.page = 1;
  };

  this.getMostTopWindow = function() {
    var w = self.context;
    while (w != w.parent) {
      try {
        var test = w.parent.document.body;
        w = w.parent;
      } catch (e) {
        break;
      }
    }
    return w;
  };

  this.getCbusterParameter = function() {
    return 'cbuster=' + (this.context.MG_CacheBuster || ((new Date().getTime()) + '' + Math.floor((Math.random() * 1000000000) + 1)));
  };

  this.injectScript = function(forceShow, refresh) {
    if ((typeof self.widgetPreload != "undefined" && self.widgetPreload) || typeof self.updatePrecalcRect == "undefined") {
      self.injectionScriptMethod(forceShow, refresh);
    } else {
      self.updatePrecalcRect(self.injectionScriptMethod)
    }
  };

  this.injectionScriptMethod = function (forceShow, refresh) {
    var isOnlyOwnSubnet = parseInt('0');
    var isPopunder = parseInt('0');
    var isYandex = self.context.navigator.userAgent.indexOf('YaBrowser') >= 0;
    var isMarketgid = self.servicerDomain.indexOf('marketgid.com') >= 0;
    /* Яндекс браузер блокирует раздатчик marketgid.com, в таких случаях выдаем ответ с tovarro */
    if (isMarketgid && isYandex && !isOnlyOwnSubnet && !isPopunder) {
      self.blocksAddress = self.webProtocol + '//'+self.subnetMirrorServicers[2]+'/';
    }

    self.adBlockStatement = false;

    if (self.adBlockStatement) {
      self.requestParams.limitads = "limitads=" + '3';
    }

    var script = self.context.document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'windows-1251';

    var scriptSrc = "";

    var fs = forceShow ? 'fs/' : '';
    scriptSrc += self.blocksAddress + fs + '605/' + self.page;

    if (refresh) {
      self.requestParams.rsh = "rsh=" + refresh;
    }

    if (typeof self.context.MGi != "undefined") {
      self.requestParams.geo = "geo_zone=" + self.context.MGi;
    }
    self.requestParams.pv = "pv=5";



    self.requestParams.cbuster = self.getCbusterParameter();

    if (JSON.parse('[]').indexOf('int_exchange') >= 0
      || 0 ) {

      var ogUrlEl = self.context.document.querySelector('meta[property="og:url"]');
      var ogTitleEl = self.context.document.querySelector('meta[property="og:title"]');

      if (self.context !== self.context.top) {
        ogUrlEl = self.context.document.referrer.split('?')[0];
      }

      if (ogUrlEl) {
        self.requestParams.ogurl = 'ogurl=' + encodeURIComponent(typeof ogUrlEl === "object"
          ? ogUrlEl.getAttribute('content')
          : ogUrlEl);
      }

      if (ogTitleEl) {
        self.requestParams.ogtitle = 'ogtitle=' + encodeURIComponent(ogTitleEl.getAttribute('content'));
      }
    }

    if (self.uniqId != '') {
      self.requestParams.uniqId = "uniqId=" + self.uniqId;
    }

    if (self.getActiveChilds().length) {
      self.requestParams.childs = "childs=" + self.getActiveChilds().join(",");
    }

    if (typeof self.context.MG_setRequestNonPersonalizedAds != 'undefined' && self.context.MG_setRequestNonPersonalizedAds == 1) {
      self.requestParams.npa = "npa=1";
    }

    if ('0' == '1' && self.getInternalIds().length != 0) {
      self.requestParams.viewedInternalIds = "exclude_int_exchange=" + self.getInternalIds().join(',');
    }

    if (self.cmpEnabled) {
      var consentData = {
        "consentData": "",
        "gdprApplies": false
      };

      if (self.consentData != '' && typeof self.consentData.gdprApplies !== 'undefined' && typeof self.consentData.consentData !== 'undefined') {
        consentData = self.consentData;
      } else {
        if (self.context.localStorage) {
          try {
            var data = JSON.parse(self.context.localStorage.getItem('MG_ConsentData'));
            if (data != null && typeof data.gdprApplies !== 'undefined' && typeof data.consentData !== 'undefined') {
              consentData = data;
            }
          } catch (err) {}
        }
      }

      self.requestParams.consentData = "consentData=" + consentData.consentData;
      self.requestParams.gdprApplies = "gdprApplies=" + consentData.gdprApplies;
    }

    if (scriptSrc.indexOf('?') == -1) {
      scriptSrc += '?';
    } else {
      scriptSrc += '&';
    }
    var params = [];
    for (var key in self.requestParams) {
      params.push(self.requestParams[key]);
    }

    var isIframe = self.context.self !== self.context.top;
    try {
      self.context.top.body;
      var isCrossIframe = true;
    } catch (e) {
      var isCrossIframe = false;
    }

    params.push('ref=' + encodeURIComponent(isIframe && isCrossIframe ? self.context.parent.document.referrer : self.context.document.referrer));

    /* Параметр iframe должен быть последним в url пока о нем ничего не знает раздатчик */
    if (isIframe) {
      params.push('iframe=1');
    }
    try {
      if (!sessionStorage.MG_Session_lastUpdate || Number(sessionStorage.MG_Session_lastUpdate) + 30 * 60 * 1000 < Date.now()) {
        var refererUrl = isIframe ? self.context.parent.document.referrer : self.context.document.referrer;
        var matchDomain = refererUrl.match(/:\/\/([^\/:]+)/i);
        sessionStorage.MG_Session_pr = matchDomain && matchDomain[1] ? matchDomain[1] : '';
        sessionStorage.MG_Session_lu = isIframe ? self.context.parent.location.href : self.context.location.href;
      }
      sessionStorage.MG_Session_lastUpdate = Date.now();

      if (sessionStorage && sessionStorage.MG_Session_pr) {
        params.push('pr=' + encodeURIComponent(sessionStorage.MG_Session_pr))
      }
      if (sessionStorage && sessionStorage.MG_Session_lu) {
        params.push('lu=' + encodeURIComponent(sessionStorage.MG_Session_lu))
      }
    } catch(err) {
    }

    var w = self.getMostTopWindow();
    if (typeof w._mgPageView180 == 'undefined') {
      w._mgPageView180 = true;
      params.push('pageView=1');
    } else {
      params.push('pageView=0');
    }

    self.pvid = (new Date()).getTime().toString(16) + (Math.round(Math.random() * 1000000000)+2147483648).toString(16);
    params.push('pvid=' + self.pvid);

    if (self.versionWidget != '') {
      params.push('implVersion=' + self.versionWidget);
    }

    try {
      if (self.context.localStorage) {
        var mgMuidn = self.context.localStorage.getItem('mgMuidn');
        if (mgMuidn) {
          params.push('muid=' + mgMuidn);
          self.muid = mgMuidn;
        }
      }
    } catch (ex) {}

    scriptSrc += params.join("&");

    script.src = scriptSrc;

    if (self.sspPerformance) {
      script.onload = function() {
        self.context.performance.getEntries().map(function(entry) {
          if (entry.name === scriptSrc) {
            var duration = Math.ceil(entry.responseEnd - entry.startTime);

            (new Image(0, 0)).src = self.webProtocol + '//c.marketgid.com/widget-ssp-performance?time=' + duration;
          }
        });
      };
    }

    (self.realRoot != undefined ? self.realRoot : self.root).parentNode.appendChild(script);

    script.onerror = function () {
      self.isAdblock = true;
    };

  };

  this.getActiveChilds = function() {

    return [];
  };

  this.start = function() {
    if (self.root && self.countLoadBlocks == 0) {
      if ("function" == typeof self.context.__cmp) {
        self.cmpEnabled = true;
        try {
          self.context.__cmp("getConsentData", null, function (result) {
            self.consentData = result;
            if (self.context.localStorage) {
              self.context.localStorage.setItem('MG_ConsentData', JSON.stringify(result));
            }
          });
          setTimeout(function() {
            self.injectScript();
          }, 50);
        } catch (e) {
          self.injectScript();
        }
      } else {
        self.injectScript();
      }
    }
  };

  this.addEvent = function(elem, type, handler) {
    if (elem.addEventListener) {
      elem.addEventListener(type, handler, false)
    } else {
      elem.attachEvent('on' + type, handler)
    }
  };

  this.removeEvent = function(elem, type, handler) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handler, false)
    } else {
      elem.detachEvent('on' + type, handler)
    }
  };

  this.getMainCssSelector = function() {
    return "#" + (this.realRoot ? this.realRoot.id : this.root.id);
  };

  this.doubleClickHandler = function(parameters) {
    var i, query = [], image = new Image(0, 0);

    if (parameters.url.tagName != 'A') {
      parameters.url = self.getParentLink(parameters.url);

      if (null == parameters.url) {
        return;
      }
    }

    for (i in parameters) {
      query.push(encodeURIComponent(i) + '=' + encodeURIComponent(parameters[i]));
    }

    image.src = self.webProtocol + '//c.marketgid.com/doubleclick?' + query.join('&');
  };

  this.adBlockDetect = function () {
    var states = {ABP_NOT_DETECTED: 0, ABP_DETECTED: 1};
    var classList = ["banner_ad", "sponsored_ad"];

    var createBlockDetectionDiv = function (className) {
      var trigger = self.context.document.createElement("div");
      trigger.className = className;
      trigger.innerHTML = '.';
      self.root.appendChild(trigger);

      return trigger;
    };

    var isBlockDetectedOnDiv = function (e) {
      return !e.offsetHeight;
    };

    var isBlockDetectedOnClassNames = function (e) {
      var i, r = e.length, o;

      for (i = 0; i < r; i++) {
        o = createBlockDetectionDiv(e[i]);
        var blockDetect = isBlockDetectedOnDiv(o);
        self.root.removeChild(o);
        if (blockDetect) {
          return true;
        }
      }

      return false;
    };

    var getBlockedState = function (e) {
      return isBlockDetectedOnClassNames(e) ? states.ABP_DETECTED : states.ABP_NOT_DETECTED;
    };

    return getBlockedState(classList);
  };
};

var mgCanLoad605  = false;
var mgFallback605 = false;
var mgShortWidget605 = false;
if (document.getElementById("MG_ID")) {
  var rootId605 = document.getElementById("MG_ID").innerHTML;
  var mgRootId605 = parent.window.document.getElementById("MarketGidScriptRootC" + rootId605) ? ("MarketGidScriptRootC" + rootId605) : ("M180ScriptRootC" + rootId605);
  if (parent.window.document.getElementById(mgRootId605)) {
    mgCanLoad605 = true;
  }
} else {
  var mgRootId605 = document.getElementById("MarketGidScriptRootC" + 605) ? ("MarketGidScriptRootC" + 605) : ("M180ScriptRootC" + 605);
  if (document.getElementById(mgRootId605)) {
    mgCanLoad605 = true;
    mgFallback605 = true;
    mgShortWidget605 = true;
  }
}
if (document.getElementById("MarketGidComposite605") || document.getElementById("M180Composite605")) {
  mgCanLoad605  = true;
  mgFallback605 = true;
}

if (this['mgCanLoad605']) {
  if (!mgFallback605) {
    var uniqId = "";
    if ('0' == '1') {
      uniqId = ("00000" + Math.round(Math.random()*100000).toString(16)).slice(-5);
    }
    var uniqStr = uniqId != "" ? ("_" + uniqId) : "";

    var rootId605 = document.getElementById("MG_ID").innerHTML;
    var div605 = parent.window.document.createElement('div');
    div605.id = "MarketGidComposite605" + uniqStr;
    var mgRootId605 = parent.window.document.getElementById("MarketGidScriptRootC" + rootId605) ? ("MarketGidScriptRootC" + rootId605) : ("M180ScriptRootC" + rootId605);
    var versionWidget = parent.window.document.getElementById("MarketGidScriptRootC" + rootId605) ? '9' : '10';
    parent.window.document.getElementById(mgRootId605).id = mgRootId605 + uniqStr;
    var mgPreloadId605 = parent.window.document.getElementById("MarketGidPreloadC" + rootId605) ? ("MarketGidPreloadC" + rootId605) : ("M180PreloadC" + rootId605);
    if (parent.window.document.getElementById(mgPreloadId605)) {
      parent.window.document.getElementById(mgPreloadId605).id = mgPreloadId605 + uniqStr;
    }
    mgRootId605 = mgRootId605 + uniqStr;
    parent.window.document.getElementById(mgRootId605).appendChild(div605);
    MarketGidInfC605 = new MarketGidBaseBlockC605(div605.id, parent.window, false, rootId605 + uniqStr, uniqId, versionWidget);
  } else if (mgShortWidget605) {
    var uniqId = "";
    if ('0' == '1') {
      uniqId = ("00000" + Math.round(Math.random()*100000).toString(16)).slice(-5);
    }
    var uniqStr = uniqId != "" ? ("_" + uniqId) : "";
    if (!window.document.getElementById("MarketGidComposite605")
      || !window.document.getElementById("M180Composite605")
    ) {
      var div605 = window.document.createElement('div');
      div605.id = "MarketGidComposite605" + uniqStr;
      var rootDiv605 = window.document.getElementById("MarketGidScriptRootC" + 605) ? ("MarketGidScriptRootC" + 605) : ("M180ScriptRootC" + 605);
      window.document.getElementById(rootDiv605).appendChild(div605);
      window.document.getElementById(rootDiv605).id = rootDiv605 + uniqStr;
    }
    var mgPreloadId605 = window.document.getElementById("MarketGidPreloadC" + 605) ? ("MarketGidPreloadC" + 605) : ("M180PreloadC" + 605);
    if (window.document.getElementById(mgPreloadId605)) {
      window.document.getElementById(mgPreloadId605).id = mgPreloadId605 + uniqStr;
    }
    var mgRootId605 = document.getElementById("MarketGidComposite605" + uniqStr) ? "MarketGidComposite605"  + uniqStr : "M180Composite605"  + uniqStr;
    MarketGidInfC605 = new MarketGidBaseBlockC605(mgRootId605, window, false, 605 + uniqStr, uniqId, 11);
  } else {
    var mgRootId605 = document.getElementById("MarketGidComposite605") ? "MarketGidComposite605" : "M180Composite605";
    var versionWidget = document.getElementById("MarketGidComposite605") ? '3' : '4';
    document.getElementById(mgRootId605).innerHTML = "";
    MarketGidInfC605 = new MarketGidBaseBlockC605(mgRootId605, window, false, 0, '', versionWidget);
  }

  /**
   * Основные дополнения которые необходимы в обеих скриптах news и composite
   * @param self
   */
  this['MarketGidCMainBlock605'] = function(self)
  {
    /*  */

    self.addEvent(self.root, 'mousemove' ,function (e) {
      self.root.mouseX = e.pageX - self.root.offsetLeft;
      self.root.mouseY = e.pageY - self.root.offsetTop;
    });

    /**
     * Метод подготовки ссылки для тизера
     */
    self.prepareHref = function(hash, event, element) {
      var href = "";
      var data = self.teaserData[hash];

      if (element && typeof self.context._mgExternalLinkChanger !== 'undefined' && self.context._mgExternalLinkChanger == 1) {
        href = element.protocol + "//" + element.hostname + element.pathname;
        var paramsStr = element.search;
        if (paramsStr != '') {
          paramsStr = paramsStr.replace("?", "");
          var params = paramsStr.split("&");
          for (var i = 0; i < params.length; i++) {
            var param = params[i].split("=");
            if (param[0] != 'k' && param[0] != 'dc') {
              href += (i == 0 ? "?" : "&") + params[i];
            }
          }
        }
      } else {
        href = self.clickTracking + self.webProtocol;

        if (data) {
          if (data.link) {
            if (/^http[s]?:/.test(data.link)) {
              href = self.clickTracking + data.link;
            } else if (data['coopType'] == 'i') {
              href = self.clickTracking + self.intExchangeProtocol + data.link;
            } else {
              href = self.clickTracking + self.webProtocol + data.link;
            }
          }
        } else {
          href = "#";
        }
      }

      var dcparam = "";

      if (typeof self.clickableDelay !== 'undefined' && self.clickableDelay) {
        if (typeof self.isWagesLink === 'function' && self.isWagesLink(element)) {
          dcparam = 'dc=1';
        }
      }

      /* Делай клик для уходов с информеров на транзитке */
      var delayClickParam = self.getQueryParameterByName('dc');
      if (delayClickParam) {
        dcparam = 'dc=' + parseInt(delayClickParam);
      }

      var clickZone = self.getClickZone();

      if (clickZone !== '' && dcparam == "") {
        dcparam = 'dc=' + self.getClickZone();
      }

      if (dcparam !== "") {
        href += ((href.indexOf('?') >= 0) ? '&' : '?') + dcparam;
      }

      if (typeof self.getAntifraudParams == 'function' && data && data['coopType'] != 'i') {
        href += self.getAntifraudQueryParameter(href, event, element);
      }

      if (self.clickTracking && href.indexOf(self.clickTracking) !== -1) {
        href = self.clickTracking + encodeURIComponent(href.replace(self.clickTracking, ''));
      }

      if (self.templateId) {
        href += ((href.indexOf('?') >= 0) ? '&' : '?') + 'tpl=' + self.templateId;
      }

      /* пробрасываем в ссылку на клик muid из localStorage если есть */
      try {
        if (self.context.localStorage) {
          var mgMuidn = self.context.localStorage.getItem('mgMuidn');
          if (typeof (mgMuidn) == "string" && mgMuidn.length > 0 ) {
            href += ((href.indexOf('?') >= 0) ? '&' : '?') + 'muid=' + mgMuidn;
          }
        }
      } catch (e) {};

      if (true == parseInt('0')) {
        var template = '//%host%/r/%title%?u=%rurl%';
        template = template.replace(/^(\/\/)/, self.context.location.protocol + '$1');
        template = template.replace(/(%host%)/, self.context.location.host);
        template = template.replace(/(%title%)/, self.transliterate(data[3]));
        href = template.replace(/(%rurl%)/, self.tox64String(href, true));
      }

      return href;
    };

    self.getClickZone = function() {
      var coordinate = JSON.parse('[]');

      if (coordinate.length == 0) {
        return '';
      }

      if (typeof coordinate.top == "undefined"
        || typeof coordinate.left == "undefined"
        || typeof coordinate.right == "undefined"
        || typeof coordinate.bottom == "undefined"
      ) {
        return '';
      }

      var height = self.root.offsetHeight;
      var width = self.root.offsetWidth;

      var pixelCoordinate = [];

      pixelCoordinate['top'] = parseInt(height / 100 * coordinate.top);
      pixelCoordinate['left'] = parseInt(width / 100 * coordinate.left);
      pixelCoordinate['right'] = width - parseInt(width / 100 * coordinate.right);
      pixelCoordinate['bottom'] = height - parseInt(height / 100 * coordinate.bottom);

      var mouseX = self.root.mouseX;
      var mouseY = self.root.mouseY;

      var zoneIds = [
        [2, 3,  4],
        [5, '', 6],
        [7, 8,  9],
      ];

      return zoneIds[
        (mouseY <= pixelCoordinate['top']) ? 0 : (mouseY >= pixelCoordinate['bottom'] ? 2 : 1)
        ][
        (mouseX <= pixelCoordinate['left']) ? 0 : (mouseX >= pixelCoordinate['right'] ? 2 : 1)
        ];
    };

    self.getAntifraudQueryParameter = function(href, event, element) {
      var params = self.getAntifraudParams(event, element);

      if (params) {
        var suffix = self.id;

        return ((href.indexOf('?') >= 0) ? '&' : '?') + 'k=' + suffix + 'f' + params;
      }

      return '';
    };

    /**
     * Метод подготовки "красивой" ссылки для тизера
     */
    self.prepareNiceHref = function(hash, event, element) {
      var href;
      var data = self.teaserData[hash];

      if (data.other['sdl'] == 1 && data['coopType'] != 'i') {

        href = self.clickTracking;

        if (typeof(data.other['dl']) != 'undefined' && data.other['dl'] != '') {
          href += data.other['dl'];
        } else {
          var source = decodeURIComponent(data[0].replace(/[`|',:\/?;$%&\(\)^*!@\s]/g, '')).toLowerCase();
          var title = decodeURIComponent(data[3].replace(/[`|',:\/?;$%&\(\)^*!@]/g, '')).replace(/\s/g, '_');
          href += self.webProtocol + '//' + (source ? source + '/' : '') + title;
        }

        if (self.clickTracking && href.indexOf(self.clickTracking) !== -1) {
          href = self.clickTracking + encodeURIComponent(href.replace(self.clickTracking, ''));
        }
      } else {
        href = self.prepareHref(hash, event, element);
      }

      return href;
    };

    /**
     * Вспомагательная функция для транслитерации фраз
     * @param {string} str
     * @returns {string}
     */
    self.transliterate = function(str) {
      var a = {
        'Ё':'YO','Й':'I','Ц':'TS','У':'U','К':'K','Е':'E','Н':'N','Г':'G','Ш':'SH','Щ':'SCH',
        'З':'Z','Х':'H','Ъ':'','ё':'yo','й':'i','ц':'ts','у':'u','к':'k','е':'e','н':'n',
        'г':'g','ш':'sh','щ':'sch','з':'z','х':'h','ъ':'\'','Ф':'F','Ы':'I','В':'V','А':'a',
        'П':'P','Р':'R','О':'O','Л':'L','Д':'D','Ж':'ZH','Э':'E','ф':'f','ы':'i','в':'v','а':'a',
        'п':'p','р':'r','о':'o','л':'l','д':'d','ж':'zh','э':'e','Я':'Ya','Ч':'CH','С':'S',
        'М':'M','И':'I','Т':'T','Ь':'','Б':'B','Ю':'YU','я':'ya','ч':'ch','с':'s','м':'m',
        'и':'i','т':'t','ь':'','б':'b','ю':'yu',' ':'_', 'і':'i', 'І':'I', 'ї':'i', 'Ї':'I'
      };

      return str.split('').map(function (char) {
        if (char.match(/[a-z0-9_\-]/i)) {
          return char;
        }
        return a[char] || '';
      }).join('');
    };

    /**
     * Вспомагательная функция для получения параметра с URL
     * @param {String} name
     * @return {*}
     */
    self.getQueryParameterByName = function(name) {
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
      var results = regex.exec(self.context.location.href);

      if (!results) {
        return null;
      }

      if (!results[2]) {
        return '';
      }

      return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    /**
     * Воспомагательная функция, которая ищет родительскую ссылку
     * @param {Element} el
     * @returns {Element}
     */
    self.getParentLink = function(el) {
      while (el && el.tagName !== 'BODY') {
        if (el.tagName == "A") {
          return el;
        } else {
          el = el.parentNode;
        }
      }

      return null;
    };

    /**
     * Get the closest matching element up the DOM tree.
     * @param  {Element} element     Starting element
     * @param  {String}  selector Selector to find
     * @return {Boolean|Element}  Returns null if not match found
     */
    self.findClosest = function (element, selector) {
      var foundElements;
      while (element.parentNode) {
        foundElements = element.parentNode.querySelectorAll(selector);
        for (var i = 0; i < foundElements.length; i++) {
          if (element.isEqualNode(foundElements[i])) {
            return foundElements[i];
          }
        }

        element = element.parentNode;
      }

      return null;
    };

    /**
     * Метод сбора данных по каждому тизеру с ответа раздатчика
     * @param data
     * @param type
     * @returns {Object}
     */
    self.prepareTeaserData = function(data, type)
    {
      var t = {};
      t.source = data[0];
      t.id = data[1];
      t.title = (typeof data[3] != 'undefined') ? data[3] : "";
      t.desc = (typeof data[4] != 'undefined') ? data[4] : "";
      if (type.toLowerCase() == 'news') {
        t.mirror = data[5] ? data[5] : self.subnetMirrors[self.currentSubnet];
        t.hash = data[6];
        t.other = data[7];
        t.price = " ";
        t.priceold = t.discount = "";
        t.isReplic = false;
      } else {
        t.mirror = self.subnetMirrors[self.currentSubnet];
        t.key = data[6];
        t.price = (typeof data[7] != 'undefined') ? data[7].replace(".00", "") : "";
        t.priceold = (typeof data[8] != 'undefined') ? data[8].replace(".00", "") : "";
        t.discount = t.priceold.replace(new RegExp('[^0-9.]'), '') == '' ? '' : Math.floor((1 - t.price.replace(/[^\d,]+/g, '').replace(',', '.') / t.priceold.replace(/[^\d,]+/g, '').replace(',', '.')) * 100) + '%';
        t.hash = data[9];
        t.other = (typeof data[10] != 'undefined') ? data[10] : {};

        var titleLower = t.title.toLowerCase();
        var descLower = t.desc.toLowerCase();
        var replicWords = ["копия", "подделка", "реплика", "как оригинал"];
        var replicInsertWords = ["Копия. ", "Реплика. "];

        if (data[5] == '1') {
          t.isReplic = true;
          for (var i = 0; i < replicWords.length; i++) {
            if (self.prepareTitle(titleLower).indexOf(replicWords[i]) > -1 ||
              self.prepareDesc(descLower).indexOf(replicWords[i]) > -1) {
              t.isReplic = false;
              break;
            }
          }
        } else {
          t.isReplic = false;
        }
      }

      if (self.deviceType != 'desktop') {
        t.other.sdl = 0;
      }

      data['other'] = t.other;
      self.teaserData[t.hash] = data;
      self.teaserData[t.hash]['id'] = t.id;
      self.teaserData[t.hash]['img'] = typeof(t.other['i']) != 'undefined' ? t.other['i'] : null;
      self.teaserData[t.hash]['source'] = t.source;
      self.teaserData[t.hash]['img'] = t.other["i"];
      self.teaserData[t.hash]['type'] = type;
      self.teaserData[t.hash]['link'] = typeof(t.other['l']) != 'undefined' ? t.other['l'] : null;
      self.teaserData[t.hash]['mirror'] = t.mirror;
      self.teaserData[t.hash]['coopType'] = typeof(t.other['type']) != 'undefined' ? t.other['type'] : null;
      self.teaserData[t.hash]['clicktrackers'] = typeof(t.other['clicktrackers']) != 'undefined' ? t.other['clicktrackers'] : [];
      self.teaserData[t.hash]['cdomain'] = t.other.cdomain || null;
      self.teaserData[t.hash]['ccid'] = t.other.ccid || null;
      self.teaserData[t.hash]['ch'] = t.other.ch || null;
      self.teaserData[t.hash]['imp'] = typeof(t.other['imp']) != 'undefined' ? t.other['imp'] : [];

      if (self.teaserData[t.hash]['coopType'] == 'i') {
        self.context._mgIntExchangeNews[t.id] = 1;
      }

      return t;
    };

    self.getInternalIds = function() {
      return Object.keys(self.context._mgIntExchangeNews);
    };

    /**
     * Альтернатива btoa функции
     * @param {string} s строка
     * @param {boolean} replaceChars - заменять симлолы для корректной url строки
     * @returns {string}
     */
    self.tox64String = function(s, replaceChars) {
      replaceChars = typeof replaceChars == 'undefined' ? replaceChars : false;
      var b64c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      var b64e = '';
      var c1, c2, c3, e1, e2, e3, e4;
      var i = 0;
      while (i < s.length) {
        c1 = s.charCodeAt(i++);
        c2 = s.charCodeAt(i++);
        c3 = s.charCodeAt(i++);
        e1 = c1 >> 2;
        e2 = ((c1&3) << 4) | (c2 >> 4);
        e3 = isNaN(c2) ? 64 : (((c2&15) << 2) | (c3 >> 6));
        e4 = isNaN(c3) ? 64 : (c3&63);
        b64e += b64c.charAt(e1) + b64c.charAt(e2) + b64c.charAt(e3) + b64c.charAt(e4);
      }

      if (true == replaceChars) {
        b64e = b64e.replace('+', '-').replace('/', '_').replace('=', '*');
      }

      return b64e;
    };

    /**
     * Обрабатывает клик по ссылкам тизера и меняет "красивую" ссылку на нормальную
     * @param event
     */
    self.hangNiceLinkListener = function(event)
    {
      if (self.loadedDefault) {
        return;
      }

      if (!event) {
        var event = self.context.event;
      }
      if (!event.target) {
        event.target = event.srcElement;
      }
      var element = event.target;
      if (element.tagName != 'A') {
        var element = self.getParentLink(element);
        if (null == element) {
          return;
        }
      }
      var hash = element['data-hash'] || element.getAttribute('data-hash');
      if (hash != undefined) {

        if (typeof self.teaserData[hash] != 'undefined'
          && typeof self.teaserData[hash]['other'] != 'undefined'
          && typeof self.teaserData[hash]['other']['sdl'] != 'undefined'
        ) {
          self.teaserData[hash]['other']['sdl'] = 0;
        }

        element[self.hrefAttr] = self.prepareHref(hash, event, element);
      }
    };

    /**
     *
     * @param html
     * @returns {*}
     */
    self.htmlToElement = function (html) {
      var template = document.createElement('div');
      template.innerHTML = html;
      return template.firstChild;
    };

    /**
     *
     * @param html
     * @returns {*}
     */
    self.htmlToElements = function (html) {
      var template = self.context.document.createElement('div');
      template.innerHTML = html;
      return Array.prototype.slice.call(template.childNodes);
    };


    /**
     * Проверка является ли текущий элемент спрятаным на странице
     * @param el {HTMLElement}
     * @returns {boolean}
     */
    self.isHiddenElement = function (el) {
      while (el.tagName !== 'BODY') {
        if ('fixed' != el.style.position && null == el.offsetParent) {
          return true;
        }

        if ('hidden' == el.style.visibility) {
          return true;
        }

        if ('none' == el.style.display) {
          return true;
        }

        el = el.parentNode;
      }

      return false;
    };

    self.injectStyle = function(style, container) {
      style = style.replace(/(@media \([^(]*\) {)/g, "$1}");

      style = style.replace(/((?:^|}|,)\W*)((?:\w+)?\.(?:mc|mg)[\-\w]+)/g, "$1" + this.getMainCssSelector() + " $2");

      style = style.replace(/((@media \([^(]*\) \{)\})/g, "$2");

      style = style.replace(/video-cdn\.(.+)\/mgPlayer/g, self.currentSubnetDomain);

      if (style == "") return;

      if (!container) {
        var MGst = self.context.document.createElement('style');
        MGst.className = 'MarketGidC605';
        MGst.type = 'text/css';
        (self.realRoot != undefined ? self.realRoot : self.root).appendChild(MGst);
        if (MGst.styleSheet) {
          MGst.styleSheet.cssText = style;
        } else {
          MGst.appendChild(self.context.document.createTextNode(style));
        }
        ;
      } else {
        var MGst = container;
        MGst.className = 'MarketGidC605';
        if (MGst.styleSheet) {
          MGst.styleSheet.cssText = style;
        } else {
          while (MGst.firstChild) {
            MGst.removeChild(MGst.firstChild);
          }
          MGst.appendChild(self.context.document.createTextNode(style));
        }
        ;
      }
    };
  };        this['MarketGidCMainBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['Main'] = 'MarketGidCMainBlock605';
  MarketGidCCookieBlock605 = function(self)
  {
    this.storageName = "MarketGidStorage" + (this.context.MarketGidPageOffset ? this.context.MarketGidPageOffset : "");

    this.getCookieValue = function() {
      var matches = this.context.document.cookie.match(new RegExp("(?:^|; )" + this.storageName + "=([^;]*)"));
      var res = {};
      if (matches) {
        try {
          res = JSON.parse(decodeURIComponent(matches[1]));
        }
        catch (e) {};
      }
      return res;
    };

    this.getCookie = function() {
      var value = this.getCookieValue();
      if (value["C605"]!=undefined) {
        this.cookieStorage = value["C605"];
      }
      else this.cookieStorage = {};

      if (value["0"]!=undefined) {
        this.sharedCookieStorage = value["0"];
      }
      else this.sharedCookieStorage = {};
    };

    this.setCookie = function() {
      var totalCookie = this.getCookieValue();
      totalCookie["C605"] = this.cookieStorage;
      totalCookie["0"] = this.sharedCookieStorage;
      var value = encodeURIComponent(JSON.stringify(totalCookie));
      this.context.document.cookie = this.storageName+"="+value+";path=/";
    };
  };        this['MarketGidCCookieBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['Cookie'] = 'MarketGidCCookieBlock605';
  MarketGidCSubnetsBlock605 = function() {
    var self = this;
    self.funcBlocks["Subnets"] = "MarketGidCSubnetsBlock605";

    this.afterInitHooks.push("subnetsLoad");

    this.currentSubnet = "";

    this.subnetMirrors = {};
    this.subnetMirrorServicers = {};
    this.subnetMirrorsImages = {};
    this.subnetMirrorsAdvert = {};
    this.subnetMirrorsAdLinkBlocks = {};
    this.subnetMirrorsUtm = {};
    this.subnetDashboardDomains = {};
    this.subnetMirrorNames = {};

    this.subnetMirrors['0'] = 'marketgid.com';
    this.subnetMirrorServicers['0'] = 'servicer.alpha.marketgid.com';
    this.subnetMirrorNames['marketgid'] = parseInt('0');
    this.subnetMirrorsImages['0'] = 'alpha.marketgid.com';
    this.subnetMirrorsAdLinkBlocks['0'] = '<div class="mgheader"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id widgets_logo%id"><a href="http://usr.marketgid.com/demo/celevie-posetiteli%utm%id" target="_blank"></a></div></div><style>.mghead{font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: "Open Sans", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{min-height:12px; cursor: default; display: table !Important; width: 100% !important;}.widgets_logo%id{position:relative}.widgets_logo%id a{background:url(//cdn.marketgid.com/images/widgets_marketgid.png) no-repeat;width:88px;height:15px;position:absolute;display:block;bottom:-15px;right:7px}.mgbox{margin-bottom:15px!important;}.widgets_logo%id:hover a{background:url(//cdn.marketgid.com/images/widgets_marketgid_hover.png) no-repeat}</style>';
    this.subnetMirrorsUtm['0'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
    this.subnetDashboardDomains['0'] = self.webProtocol + '//dashboard.marketgid.com';            this.subnetMirrors['1'] = 'ladycenter.ru';
    this.subnetMirrorServicers['1'] = 'servicer.alpha.marketgid.com';
    this.subnetMirrorNames['lady'] = parseInt('1');
    this.subnetMirrorsImages['1'] = 'alpha.marketgid.com';
    this.subnetMirrorsAdLinkBlocks['1'] = '<div class="mg_addad%id"><a href="http://ladycenter.ru/celevie-posetiteli.html%utm%id" class="mg_addad%id" target="_blank"><img src="//img.marketgid.com/images/search/2/icon-2.png"> Добавить объявление</a></div><style type="text/css">div.mg_addad%id{text-align: center;} div.mg_addad%id a{font:normal 11px Tahoma, Arial, sans-serif; color:#009966; text-decoration: none;} div.mg_addad%id img{margin-bottom: -1px;}</style>';
    this.subnetMirrorsUtm['1'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
    this.subnetDashboardDomains['1'] = self.webProtocol + '//dashboard.marketgid.com';            this.subnetMirrors['2'] = 'tovarro.com';
    this.subnetMirrorServicers['2'] = 'servicer.alpha.tovarro.com';
    this.subnetMirrorNames['tovarro'] = parseInt('2');
    this.subnetMirrorsImages['2'] = 'alpha.tovarro.com';
    this.subnetMirrorsAdLinkBlocks['2'] = '<div class="mgheader"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id widgets_logo"><a href="http://tovarro.com/%utm%id" target="_blank"></a></div></div><style>.widgets_logo{position:relative}.widgets_logo a {background:url(//cdn.tovarro.com/images/tovarro/add-advert.png) no-repeat right top;width: 48px;height: 20px;position:absolute;display: block;bottom: -15px;right: 4px;opacity: 0.7;}.widgets_logo a:hover {opacity: 1;background:url(//cdn.tovarro.com/images/tovarro/add-advert.png) no-repeat right top;}.mgheader {display: block !Important;width: 100% !important;}.mgbox{    margin-bottom:20px!important;}</style>';
    this.subnetMirrorsUtm['2'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
    this.subnetDashboardDomains['2'] = self.webProtocol + '//dashboard.tovarro.com';            this.subnetMirrors['3'] = 'lentainform.com';
    this.subnetMirrorServicers['3'] = 'servicer.alpha.lentainform.com';
    this.subnetMirrorNames['lentainform'] = parseInt('3');
    this.subnetMirrorsImages['3'] = 'alpha.lentainform.com';
    this.subnetMirrorsAdLinkBlocks['3'] = '<div class="mgheader"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id widgets_logo"><a href="http://partner.lentainform.com" target="_blank"></a></div></div><style>.widgets_logo{position:relative}.widgets_logo a{background:url(https://cdn.marketgid.com/images/lentainform/widgets_lentainform.png) no-repeat;width:88px;height:10px;position:absolute;display:block;bottom:-10px;right:7px}.mgbox{margin-bottom:15px!important;}.widgets_logo:hover a{background:url(https://cdn.marketgid.com/images/lentainform/widgets_lentainform_hover.png) no-repeat}</style>';
    this.subnetMirrorsUtm['3'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
    this.subnetDashboardDomains['3'] = self.webProtocol + '//dashboard.lentainform.com';            this.subnetMirrors['4'] = 'marketgid.com';
    this.subnetMirrorServicers['4'] = 'servicer.alpha.marketgid.com';
    this.subnetMirrorNames['marketgid'] = parseInt('4');
    this.subnetMirrorsImages['4'] = 'alpha.marketgid.com';
    this.subnetMirrorsAdLinkBlocks['4'] = '<div class="mgheader"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id widgets_logo%id"><a href="http://usr.marketgid.com/demo/celevie-posetiteli%utm%id" target="_blank"></a></div></div><style>.mghead{font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: "Open Sans", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{min-height:12px; cursor: default; display: table !Important; width: 100% !important;}.widgets_logo%id{position:relative}.widgets_logo%id a{background:url(//cdn.marketgid.com/images/widgets_marketgid.png) no-repeat;width:88px;height:15px;position:absolute;display:block;bottom:-15px;right:7px}.mgbox{margin-bottom:15px!important;}.widgets_logo%id:hover a{background:url(//cdn.marketgid.com/images/widgets_marketgid_hover.png) no-repeat}</style>';
    this.subnetMirrorsUtm['4'] = '?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=';
    this.subnetDashboardDomains['4'] = self.webProtocol + '//dashboard.marketgid.com';
    this.afterInitHooks.push("subnetsLoad");

    var informerData = [];
    informerData.push({"id": "605"});


    this.subnetsLoad = function() {
      for (var i = 0; i < informerData.length; i++) {
        var tickerId = informerData[i].id;
        if ('0' !== '1') {
          (function(tickerId) {
            self.context["MarketGidLoadGoods" + tickerId + (self.uniqId != '' ? ('_' + self.uniqId) : '')] = function(json, awd) {
              self.originalId = self.id;
              self.id = tickerId;
              self.loadedType = 'goods';
              self.currentSubnet = '0';
              self.currentSubnetDomain = 'marketgid.com';
              self["MarketGidLoadNews"](json, awd);
            };
            self.context["MarketGidCReject" + tickerId] = self['MarketGidReject'];
          })(tickerId);
        }
        if ('1' !== '1') {
          (function(tickerId) {
            self.context["MarketGidLoadGoods" + tickerId + (self.uniqId != '' ? ('_' + self.uniqId) : '')] = function(json, awd) {
              self.originalId = self.id;
              self.id = tickerId;
              self.loadedType = 'goods';
              self.currentSubnet = '1';
              self.currentSubnetDomain = 'ladycenter.ru';
              self["MarketGidLoadNews"](json, awd);
            };
            self.context["MarketGidCReject" + tickerId] = self['MarketGidReject'];
          })(tickerId);
        }
        if ('2' !== '1') {
          (function(tickerId) {
            self.context["TovarroLoadGoods" + tickerId + (self.uniqId != '' ? ('_' + self.uniqId) : '')] = function(json, awd) {
              self.originalId = self.id;
              self.id = tickerId;
              self.loadedType = 'goods';
              self.currentSubnet = '2';
              self.currentSubnetDomain = 'tovarro.com';
              self["MarketGidLoadNews"](json, awd);
            };
            self.context["TovarroCReject" + tickerId] = self['MarketGidReject'];
          })(tickerId);
        }
        if ('3' !== '1') {
          (function(tickerId) {
            self.context["LentaInformLoadGoods" + tickerId + (self.uniqId != '' ? ('_' + self.uniqId) : '')] = function(json, awd) {
              self.originalId = self.id;
              self.id = tickerId;
              self.loadedType = 'goods';
              self.currentSubnet = '3';
              self.currentSubnetDomain = 'lentainform.com';
              self["MarketGidLoadNews"](json, awd);
            };
            self.context["LentaInformCReject" + tickerId] = self['MarketGidReject'];
          })(tickerId);
        }
        if ('4' !== '1') {
          (function(tickerId) {
            self.context["MarketGidLoadGoods" + tickerId + (self.uniqId != '' ? ('_' + self.uniqId) : '')] = function(json, awd) {
              self.originalId = self.id;
              self.id = tickerId;
              self.loadedType = 'goods';
              self.currentSubnet = '4';
              self.currentSubnetDomain = 'marketgid.com';
              self["MarketGidLoadNews"](json, awd);
            };
            self.context["MarketGidCReject" + tickerId] = self['MarketGidReject'];
          })(tickerId);
        }
      }
    };

    self.getSubnetByMirror = function(mirror) {
      var subnet = 0;

      if (typeof self.subnetMirrorNames[mirror] != 'undefined') {
        subnet = self.subnetMirrorNames[mirror];
      }

      return subnet;
    }
  };        this['MarketGidCSubnetsBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['Subnets'] = 'MarketGidCSubnetsBlock605';
  MarketGidCInternalExchangeLoggerBlock605 = function(self)
  {
    self.afterLoadNewsHooks.push("iExchangeLoggerInit");

    self.iExchangeLoggerInit = function () {
      self.addEvent(self.root, "click", function(event) {
        if (!event) var event = self.context.event;
        if (!event.target) {
          event.target = event.srcElement;
        }

        self.allowReturnParams = true;
        var element = event.target;
        if (element.tagName != 'A') {
          var element = self.getParentLink(element);

          if (null == element) {
            return;
          }
        }

        if (!element.hasAttribute('data-hash')) {
          return;
        }

        var hash = element.getAttribute('data-hash');

        if (self.teaserData[hash] && self.teaserData[hash]['coopType'] == 'i') {
          var img = document.createElement('IMG');

          var data = "cid=" + self.id + "&tid=" + self.teaserData[hash]['id'] + "&h=" + hash;
          if (typeof self.servicerData['isBot'] !== 'undefined') {
            data += "&bot=" + self.servicerData['isBot'];
          }
          if (typeof self.servicerData['tt'] !== 'undefined') {
            data += "&tt=" + self.servicerData['tt'];
          }
          if (typeof self.servicerData['ts'] !== 'undefined') {
            data += "&ts=" + self.servicerData['ts'];
          }

          var scriptSrc = "//c.marketgid.com/clie?" + data;

          img.src = self.webProtocol + scriptSrc;
          img.onerror = function () {
          };
        }
      });
    };
  };        this['MarketGidCInternalExchangeLoggerBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['InternalExchangeLogger'] = 'MarketGidCInternalExchangeLoggerBlock605';
  /**
   * Блок по внутреннему обмену
   * @param self
   * @constructor
   */
  MarketGidCInternalExchangeBlock605 = function(self)
  {
    self.afterLoadNewsHooks.push("initIntExchangeLabels");

    /**
     * Поиск всех комментариев внутри информера
     * @param context
     * @return {Array}
     */
    function getComments(context)
    {
      var foundComments = [];
      var elementPath = [context];
      while (elementPath.length > 0) {
        var el = elementPath.pop();
        for (var i = 0; i < el.childNodes.length; i++) {
          var node = el.childNodes[i];
          if (node.nodeType === Node.COMMENT_NODE) {
            foundComments.push(node);
          } else {
            elementPath.push(node);
          }
        }
      }

      return foundComments;
    }

    /**
     * Поиск и подмена плейсхолдеров на картинки
     */
    self.initIntExchangeLabels = function () {

      if (self.enabledCooperationTypes.indexOf('int_exchange') == -1) {
        return;
      }

      var comments = getComments(self.root);
      for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        var mgline = self.findClosest(comment, '.mgline');

        /* Если блок .mgline не найден, то уходим, без него продолжение безполезно */
        if (!mgline) {
          continue;
        }

        /* Рекламное лого нужно только для товарных тизеров */
        if (mgline.className.indexOf('type-w') == -1) {
          continue;
        }

        /* Создаем изображение */
        var img = self.context.document.createElement("IMG");

        img.setAttribute('height', 20);

        if (comment.data == 'intExchangeWagesImagePlace') {
          img.className = 'mcimgad';
          img.src = self.webProtocol + "//alpha-cdn.marketgid.com/images/marketgid/int_exchange_wages_ad.svg";
        }

        /* Извлекаем данные тизера */
        var link = mgline.querySelector('a');
        var hash = link['data-hash'] || link.getAttribute('data-hash');

        /* Проверяем не пустой ли домен тизера */
        if (hash && self.teaserData[hash] && !!self.teaserData[hash]['source']) {
          if (comment.data == 'intExhangeWagesSourcePlace') {
            img.className = 'mcimgsrc';
            img.src = self.webProtocol + "//alpha-cdn.marketgid.com/images/marketgid/int_exchange_wages_src.svg";
          }
        }

        /* Какой-то другой коммент, не наш маркер, пропускаем */
        if (!img.src) {
          continue;
        }

        /* Маркер заменяем на подготовленное изображение */
        comment.parentNode.replaceChild(img, comment);
      }
    }
  };        this['MarketGidCInternalExchangeBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['InternalExchange'] = 'MarketGidCInternalExchangeBlock605';
  this['MarketGidCAntiAdblockBlock605'] = function(self) {

    self.isAdblock = false;
    self.isServerSide = typeof loadServerSideAds18742 == 'function';
    self.afterInitHooks.push('initServerSide');
    self.afterLoadNewsHooks.push("initAntiAdblock");
    self.initServerSide = function (){
      if (self.isServerSide && self.isAdblock){
        self.context._mgq = self.context._mgq || [];
        loadServerSideAds18742(self.context._mgq);
      }
    };

    self.initAntiAdblock = function () {
      if (self.isAdblock){
        var displayType = "block";
        if (self.root.style.display != ""){
          displayType = self.root.style.display;
        }
        self.root.style.setProperty("visibility", "visible", "important");
        self.root.style.setProperty("display", displayType, "important");
        self.appendVisibleRecursive(self.root);
        self.root.addEventListener("click", function (t) {
          t.preventDefault();
          var e = t.target;
          var n = '';
          if (e.tagName == 'A') {
            return self.context.location = e.href;
          }
          else {
            while ("A" != e.tagName) {
              e = e.parentNode;
              if (e == self.root) {
                return false;
              }
            }
            n = e.href;
          }
          return self.context.location = n;
        });
      }
    };
    self.appendVisibleRecursive = function (node) {
      for (var i = -1, l = node.childNodes.length; ++i < l;) {
        var el = node.childNodes[i];
        var displayType = "block";
        if (typeof el.style != 'object'){
          continue;
        }
        if (el.style.display == 'none') {
          continue;
        }
        if (el.tagName=='STYLE' || el.tagName == 'SCRIPT'){
          continue;
        }
        if (el.tagName=='TD'){
          displayType = "table-cell";
        }
        if (el.tagName=='TR'){
          displayType = "table-row";
        }
        if (el.className.length > 0 && el.className.split(' ').indexOf('mgbox') > -1){
          displayType = "flex";
        }
        if (el.className.length > 0 && el.className.split(' ').indexOf('mgline') > -1){
          displayType = "inline-block";
        }
        if (el.tagName == 'A' && el.parentNode.className.length > 0 && el.parentNode.className.split(' ').indexOf('submit') > -1){
          if (parseInt('') == 1) {
            displayType = "inline-block";
          } else {
            continue;
          }
        }
        if (el.className.length > 0 && el.className.split(' ').indexOf('fake') > -1){
          continue;
        }
        el.style.setProperty("visibility", "visible", "important");
        el.style.setProperty("display", displayType, "important");
        if (el.childNodes.length > 0){
          self.appendVisibleRecursive(el);
        }
      }
    };
  };        this['MarketGidCAntiAdblockBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['AntiAdblock'] = 'MarketGidCAntiAdblockBlock605';
  MarketGidCUtilsBlock605 = function(self)
  {
    self.utils = {};

    /**
     * Возвращает кроссбраузерно значения скролла
     *
     * @returns {{top: *, left: *}}
     *
     */
    self.utils.getScroll = function() {
      var w = self.utils.getWindow();
      return {
        top: w.document.body.scrollTop || w.document.documentElement.scrollTop || 0,
        left: w.document.body.scrollLeft || w.document.documentElement.scrollLeft || 0
      }
    };

    /**
     * Возвращает позицию элемента
     * @param element
     * @param {boolean} withScroll Учитывать ли скролл для top и left (т.е. показывать от верха страницы, а не от верха окна)
     *
     * @returns {{top: *, bottom: *, left: *, right: *, height: *, width: *}}
     *
     */
    self.utils.getRect = function(element, withScroll) {
      var rect = element.getBoundingClientRect();
      var toReturn = {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
        height: (rect.height ? rect.height : rect.bottom - rect.top),
        width: (rect.width ? rect.width : rect.right - rect.left)
      };
      if (self.context.self !== self.context.top) {
        var frame = self.utils.getFrame();
        if (frame) {
          var iframeRect = frame.getBoundingClientRect();
          toReturn.top += iframeRect.top;
          toReturn.bottom += iframeRect.top;
          toReturn.left += iframeRect.left;
          toReturn.right += iframeRect.left;
        }
      }
      if (withScroll) {
        var scroll = self.utils.getScroll();
        toReturn.top += scroll.top;
        toReturn.bottom += scroll.top;
        toReturn.left += scroll.left;
        toReturn.right += scroll.left;
      }
      return toReturn;
    };

    /**
     * Возвращает размеры видимой области страницы
     *
     * @returns {{width: (Number|number), height: (Number|number)}}
     *
     */
    self.utils.getViewportSize = function() {
      var w = self.utils.getWindow();
      return {
        width: (w.innerWidth || w.document.documentElement.clientWidth),
        height: (w.innerHeight || w.document.documentElement.clientHeight)
      };
    };

    /** объект window для определения scroll */
    var currentWindow = undefined;

    /**
     * Возвращает объект window для определения scroll, viewport и т.п. с учетом iframe и доступа к родителю из него
     *
     * @returns {Window}
     *
     */
    self.utils.getWindow = function() {
      if (currentWindow === undefined) {
        var w = self.context;
        if (self.context.parent != self.context.self) {
          try {
            if (self.context.top.document != undefined) {
              w = self.context.top;
            }
          }
          catch (err) { }
        }
        currentWindow = w;
      }
      return currentWindow;
    };

    /** объект самого верхнего iframe */
    var topFrame = undefined;

    /**
     * Возвращает объект самого верхнего iframe для определения его позиции
     *
     * @returns {Window}
     *
     */
    self.utils.getFrame = function() {
      if (topFrame === undefined) {
        try {
          for (var w = self.context, frame = w.frameElement; w.frameElement; w = w.parent) {
            frame = w.frameElement;
          }
          topFrame = frame;
        } catch(err) {
          topFrame = null;
        }
      }
      return topFrame;
    }
  };        this['MarketGidCUtilsBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['Utils'] = 'MarketGidCUtilsBlock605';
  MarketGidCRtbBlock605 = function(self)
  {

    this.afterLoadNewsHooks.push("cmPixelLoad");

    this.cmPixelLoad = function(fpQuery) {
      if (!self.context['i.js.loaded'] && self.cookieMatchingDomain) {
        self.context['i.js.loaded'] = true;
        var script = MarketGidInfC605.context.document.createElement('script');
        script.charset = 'windows-1251';
        var scriptSrc = self.webProtocol + '//' + self.cookieMatchingDomain + '/i.js?' + self.getCbusterParameter();
        if (typeof(fpQuery) == 'string' && fpQuery != "") {
          scriptSrc += fpQuery;
        }
        script.src = scriptSrc;
        script.type = 'text/javascript';
        script.async = true;
        script.onerror = function () {
          self.context['i.js.loaded'] = false;
        };

        var currentRoot = MarketGidInfC605.realRoot != undefined ? MarketGidInfC605.realRoot : MarketGidInfC605.root;
        currentRoot.parentNode.appendChild(script);
      }

      if (!self.context['i-noref.js.loaded'] && self.cookieMatchingDomain) {
        self.context['i-noref.js.loaded'] = true;
        var iframe = document.createElement('IFRAME');
        iframe.src = 'about:blank';
        iframe.frameBorder = 0;
        iframe.style.position = 'absolute';
        iframe.style.top = '0px';
        iframe.style.left = '-1px';
        iframe.style.width = '0px';
        iframe.style.height = '0px';
        iframe.style.display = 'none';

        iframe.onload = function () {
          var script = this.contentDocument.createElement('script');
          script.charset = 'windows-1251';
          var scriptSrc = self.webProtocol + '//' + self.cookieMatchingDomain + '/i-noref.js?' + self.getCbusterParameter();
          script.src = scriptSrc;
          script.type = 'text/javascript';
          script.async = true;
          script.onerror = function () {
            self.context['i-noref.js.loaded'] = false;
          };
          this.contentDocument.body.appendChild(script);
        };
        document.body.appendChild(iframe);
      }
    };
  };        this['MarketGidCRtbBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['Rtb'] = 'MarketGidCRtbBlock605';
  MarketGidCMgqBlock605 = function(self)
  {
    this.isLongCheck = false;

    this.afterInitHooks.push("mgqInit");

    this.mgqWorker = function() {
      var length = self.context._mgq.length;
      var pool = self.context._mgq.slice(0);
      var mgqRemovedCounter = 0;
      for (var i = 0; i < length; i++) {
        var el = pool[i];
        if (typeof(self.context[el[0]]) == 'function') {
          try {
            self.context[el[0]].apply(self.context, el.slice(1));
          } catch (e) { }
          self.context._mgq.splice(i - mgqRemovedCounter, 1);
          mgqRemovedCounter++;
        }
      }
      if (!self.context._mgqi) {
        self.context._mgqi = self.context.setInterval(function() {
          self.mgqWorker();
        }, 5);
      }

      if (!self.isLongCheck) {
        if ((new Date()).getTime() - self.context._mgqt > 10000) {
          self.isLongCheck = true;
          self.context.clearInterval(self.context._mgqi);
          self.context._mgqi = self.context.setInterval(function() {
            self.mgqWorker();
          }, 100);
        }
      }
    };

    this.mgqInit = function() {
      self.context._mgq = self.context._mgq || [];
      if (typeof(self.context._mgqp) == 'undefined') {
        self.context._mgqp = self.mgqWorker;
        self.context._mgqt = (new Date()).getTime();
        self.mgqWorker();
      }
    };
  };        this['MarketGidCMgqBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['Mgq'] = 'MarketGidCMgqBlock605';
  MarketGidCMobileDoubleClickBlock605 = function(self)
  {
    var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

    if (isTouch){
      this.afterLoadNewsHooks.push("doubleClickHook");
      this.informerId = this.root.getAttribute('id');
      this.injectStyle(
        '.MarketGidDButton605{' +
        'display:       inline-block;' +
        'width:         168px;' +
        'height:        48px;' +
        'background:    -moz-linear-gradient(#7DC586, #5BA860);' +
        'background:    -o-linear-gradient(#7DC586, #5BA860);' +
        'background:    -webkit-linear-gradient(#7DC586, #5BA860);' +
        'background:    linear-gradient(#7DC586, #5BA860);' +
        'border:        1px solid #3C9342;' +
        'color:         #fff !important;' +
        'font:          normal 700 21px/48px "Zapf Dingbats", sans-serif;' +
        'opacity: 0;' +
        'left: -100%;' +
        'text-align:    center;' +
        'text-shadow:   none;' +
        'position: absolute;' +
        'text-decoration: none !important;' +
        'transition:all 1s;'+
        '}' +
        '.MarketGidDLayout605{' +
        'height: 100%;' +
        'width: 100%;' +
        'position: absolute;' +
        'top: 0px;' +
        'left: 0px;' +
        'background-color: rgba(0, 0, 0, 0.5);' +
        'z-index: 99999;' +
        '}'+
        '#MarketGidComposite605 .mgline {position:relative}'
      );
    }

    this.doubleClickHook = function(){
      self.doubleClickTimeLoaded = parseInt((new Date()).getTime()/1000);
      var informer = this.root;
      informer.addEventListener("click", this.showDoubleClickButton.bind(this), false);
    };

    this.showDoubleClickButton = function(event) {
      self.linksBlocked = false;
      var clickedElement = event.target;

      self.doubleClickHandler({ url: clickedElement });

      var currentTime = parseInt((new Date()).getTime()/1000);
      var doubleClickDeactivationDelay = 0;

      if (clickedElement.className != 'MarketGidDButton605' && (doubleClickDeactivationDelay === 0 || currentTime - self.doubleClickTimeLoaded < doubleClickDeactivationDelay)){
        self.linksBlocked = true;
        event.preventDefault();

        while (clickedElement.tagName != 'A' && clickedElement.id != this.informerId) {
          clickedElement = clickedElement.parentNode;
          if (clickedElement.id == this.informerId) {
            return;
          }
        }
        var href = clickedElement.getAttribute(self.hrefAttr);
        clickedElement = event.target;
        while (clickedElement.className.indexOf('mgline') == -1) {
          clickedElement = clickedElement.parentNode;
        }
        var teaserDiv = clickedElement;
        var layoutDiv = this.context.document.createElement('div');
        layoutDiv.className = 'MarketGidDLayout605';
        var button = this.context.document.createElement('a');
        var buttonHeight = 50;
        var buttonWidth = 170;
        var top = (1-buttonHeight/teaserDiv.offsetHeight)/2*100;
        var scale = teaserDiv.offsetWidth/ buttonWidth*0.98;
        var symbol = navigator.userAgent.toLowerCase().match(/windows/) ? '&#187;' : '&#10093;';

        var link = clickedElement.querySelector('a');
        if (link && link.getAttribute('data-hash')) {
          button.setAttribute('data-hash', link.getAttribute('data-hash'));
        }

        button.innerHTML ='Перейти '+symbol;
        button.href = href;
        button.style.top = top+'%';

        var left = scale > 1 ? (1-buttonWidth/teaserDiv.offsetWidth)/2*100 : 0;
        if (scale < 1){
          button.style.transform = 'scale3d('+scale+','+scale+','+scale+')';
          button.style.webkitTransform = 'scale3d('+scale+','+scale+','+scale+')';
          button.style.transformOrigin = 'left';
          button.style.webkitTransformOrigin = 'left';
        }
        button.target = '_blank';
        button.className = 'MarketGidDButton605';
        layoutDiv.appendChild(button);
        teaserDiv.appendChild(layoutDiv);

        var buttonDelay = 0;
        setTimeout(function(){
          button.style.left = left+'%';button.style.opacity = 1;
        }, buttonDelay);

        setTimeout(function(){layoutDiv.parentNode.removeChild(layoutDiv)}, 10000);
      }
    };

  };        this['MarketGidCMobileDoubleClickBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['MobileDoubleClick'] = 'MarketGidCMobileDoubleClickBlock605';
  MarketGidCDesktopDoubleClickBlock605 = function(self)
  {
    var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    var isGoodBrowser = ('addEventListener' in window.document);

    if (!isTouch && isGoodBrowser){
      this.afterLoadNewsHooks.push("desktopDoubleClickHook");
      this.informerId = this.root.getAttribute('id');
      self.styles +=
        '.MarketGidDButton605{' +
        'display:       inline-block;' +
        'width:         168px;' +
        'height:        33.33%;' +
        'background:    -moz-linear-gradient(#7DC586, #5BA860);' +
        'background:    -o-linear-gradient(#7DC586, #5BA860);' +
        'background:    -webkit-linear-gradient(#7DC586, #5BA860);' +
        'background:    linear-gradient(#7DC586, #5BA860);' +
        'border:        1px solid #3C9342;' +
        'color:         #fff !important;' +
        'font:          normal 700 21px/48px "Zapf Dingbats", sans-serif;' +
        'opacity: 0;' +
        'left: -100%;' +
        'text-align:    center;' +
        'text-shadow:   none;' +
        'position: absolute;' +
        'text-decoration: none !important;' +
        'transition:all 1s;'+
        '}' +
        '.MarketGidDLayout605{' +
        'height: 100%;' +
        'width: 100%;' +
        'position: absolute;' +
        'top: 0px;' +
        'left: 0px;' +
        'background-color: rgba(0, 0, 0, 0.5);' +
        'z-index: 100;' +
        '}'+
        '#MarketGidComposite605 .mgline {position:relative}'
        + '.MarketGidDButton605:before{' +
        'content: "";' +
        'display: inline-block;' +
        'vertical-align: middle;' +
        'opacity: 0;' +
        'visibility: hidden;' +
        'height: 100%;' +
        'width: 0;}'
      ;
    }


    this.desktopDoubleClickHook = function(){
      self.doubleClickTimeLoaded = parseInt((new Date()).getTime()/1000);
      var informer = this.root;
      informer.addEventListener("click", this.showDesktopDoubleClickButton.bind(this), false);
    };

    this.showDesktopDoubleClickButton = function(event) {
      self.linksBlocked = false;
      var clickedElement = event.target;
      var currentTime = parseInt((new Date()).getTime()/1000);
      var doubleClickDeactivationDelay = 0;

      self.doubleClickHandler({ url: clickedElement });

      if (clickedElement.className != 'MarketGidDButton605' && (doubleClickDeactivationDelay === 0 || currentTime-self.doubleClickTimeLoaded < doubleClickDeactivationDelay)){
        event.preventDefault();

        /* Отключаем временно сторонние пиксели */
        self.linksBlocked = true;

        while (clickedElement.tagName != 'A' && clickedElement.id != this.informerId) {
          clickedElement = clickedElement.parentNode;
          if (clickedElement.id == this.informerId) {
            return;
          }
        }
        var href = clickedElement.getAttribute(self.hrefAttr);
        clickedElement = event.target;
        while (clickedElement.className.indexOf('mgline') == -1) {
          clickedElement = clickedElement.parentNode;
        }
        var teaserDiv = clickedElement,
          teaserHeight = teaserDiv.offsetHeight;
        var layoutDiv = this.context.document.createElement('div');
        layoutDiv.className = 'MarketGidDLayout605';
        var button = this.context.document.createElement('a');
        var buttonHeight = teaserHeight/3 + 2;
        var buttonWidth = 170;
        var top = (1-buttonHeight/teaserDiv.offsetHeight)/2*100;
        (function getButtonPosition() {
          var clickY = event.clientY - teaserDiv.getBoundingClientRect().top;
          if (clickY < teaserHeight / 2) {
            return top = (1 - 2*buttonHeight/teaserHeight)*100/4 + 50;
          }
          return top = (1 - 2*buttonHeight/teaserHeight)*100/4;
        })();
        var scale = teaserDiv.offsetWidth/ buttonWidth*0.98;
        var symbol = navigator.userAgent.toLowerCase().match(/windows/) ? '&#187;' : '&#10093;';

        button.innerHTML ='Перейти '+symbol;
        button.href = href;
        var link = clickedElement.querySelector('a');
        if (link && link.getAttribute('data-hash')) {
          button.setAttribute('data-hash', link.getAttribute('data-hash'));
        }

        button.style.top = top+'%';

        var left = scale > 1 ? (1-buttonWidth/teaserDiv.offsetWidth)/2*100 : 0;
        if (scale < 1){
          button.style.transform = 'scale3d('+scale+','+scale+','+scale+')';
          button.style.webkitTransform = 'scale3d('+scale+','+scale+','+scale+')';
          button.style.transformOrigin = 'left';
          button.style.webkitTransformOrigin = 'left';
        }
        button.target = '_blank';
        button.className = 'MarketGidDButton605';
        layoutDiv.appendChild(button);
        teaserDiv.appendChild(layoutDiv);

        setTimeout(function(){
          button.style.left = left+'%';button.style.opacity = 1;
        }, 500);

        setTimeout(function(){layoutDiv.parentNode.removeChild(layoutDiv)}, 10000);
      }
    };

  };        this['MarketGidCDesktopDoubleClickBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['DesktopDoubleClick'] = 'MarketGidCDesktopDoubleClickBlock605';
  /**
   * Блок антинакрутки
   * @param self
   */
  this['MarketGidCAntifraudBlock605'] = function(self)
  {
    self.afterLoadNewsHooks.push('hangAFListener');
    self.afterInitHooks.push('initAntiFraud');

    self.timerFromScroll       = null;
    self.miliSecondsFromScroll = null;
    self.allowReturnParams     = false;
    self.afCookieData          = '';
    self.afCookieRealData      = '';
    self.afPrimaryReferrer     = '';
    self.afReferrer            = '';
    self.afHref                = '';
    self.afDeepSession         = '';
    self.afOrigHref            = ''; /* переменная хранит ссылку, по которой произошел клик. */
    self.afOrigHrefLink        = ''; /* переменная хранит изначальный адрес ссылки, по которой произошел клик. */
    self.afMouseMoves          = ''; /* строка, которая хранит траекторию передвижения курсора мыши (в виде координат), если было произведено смещение информера.  */
    self.afMgLoaded            = 0;
    self.afImgLoaded           = 0;
    self.afSnapshotProperties  = ''; /* снимок DOM-свойств, который нужен для определения группы браузера */
    self.afCoords              = ''; /* координаты информера в формате h|w|x|y */
    self.afBrowserFlag         = '';
    self.afPlugins             = '';
    self.afCountMimeTypes      = '';
    self.afFocus               = 1;
    self.afFocusFlag           = '';
    self.afCharging            = -1;
    self.afLevel               = -1;
    self.topIFrame             = undefined;

    /**
     * Constructor
     */
    self.initAntiFraud = function()
    {
      /* запись в куки первичного реферера, svspr - название куки */
      if (typeof(self.sharedCookieStorage['svspr']) === 'undefined') {
        self.afPrimaryReferrer = self.trimString(self.context.document.referrer, 500);
        self.sharedCookieStorage['svspr'] = self.afPrimaryReferrer;
        self.setCookie();
      } else {
        self.afPrimaryReferrer = self.sharedCookieStorage['svspr'];
      }

      self.afReferrer = self.context.document.referrer;
      self.afHref = self.context.document.location.href;

      /* если включен сокращенный режим параметров */
      var r = [];
      r = self.packReferrers(70, 50, 50);

      self.afPrimaryReferrer = self.x64String(r[0]);
      self.afReferrer = self.x64String(r[1]);
      self.afHref = self.x64String(r[2]);

      if (typeof(self.sharedCookieStorage['svsds']) !== 'undefined') {
        self.afDeepSession = self.sharedCookieStorage['svsds'];
        self.afDeepSession++;
      } else {
        self.afDeepSession = 1;
      }
      self.sharedCookieStorage['svsds'] = self.afDeepSession;
      self.setCookie();

      var d = new Date();
      /* переменная для хранения строки, которая записывается в cookie. */
      self.afCookieData = d.getTime()
        + '' + self.id + Math.floor(Math.random()*100)
        + ''
        + (2*Math.floor(Math.random()*4));
      self.afCookieData += 1;
      self.afCookieData = self.compressNumber(self.trimString(self.afCookieData, 16, 1));

      self.afMgLoaded = self.compressNumber(d.getTime()); /* время загрузки скрипта. */

      if (typeof(self.sharedCookieStorage['TejndEEDj']) === 'undefined') {
        self.sharedCookieStorage['TejndEEDj'] = self.afCookieData;
        self.setCookie();
      }

      self.afSnapshotProperties = self.getSnapshotProperties();
      self.afBrowserFlag = self.getBrowserFlag();
      self.afFocusFlag = self.getFocusFlag();
      self.afPlugins = self.x64String(self.getPlugins());
      self.afCountMimeTypes = self.compressNumber(self.getCountMimeTypes());
      self.generateBatteryInfo();
    };

    /**
     * функция для перевода строки в кодировку base64. Для усложнения понимания злоумышленником работы системы,
     * также производится следующая замена символов в результирующей строке: «S» = «$», «f» = «*», «+» = «-», «/» = «_».
     * Строка символов для осуществления кодирования (b64c) представлена в виде escape-последовательностей.
     * @param {string} s
     * @returns {string}
     */
    self.x64String = function(s)
    {
      s = s.toString();
      s = unescape(encodeURIComponent(s));
      /* Настоящая строка - ABCDEFGHIJKLMNOPQR$TUVWXYZabcde*ghijklmnopqrstuvwxyz0123456789+-_ */
      var b64c = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x24\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x2a\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
      var b64e = '';
      var c1, c2, c3, c4, e1, e2, e3, e4;
      for (var i = 0; i < s.length;) {
        c1 = s.charCodeAt(i++);
        c2 = 2 << 5;
        e1 = c1 >> (c2 / 32);
        c3 = s.charCodeAt(i++);
        e2 = ((c1 & 3) << (c2 / 16)) | (c3 >> (c2 / 16));
        c4 = s.charCodeAt(i++);
        e3 = isNaN(c3) ? c2 : (((c3 & 15) << (c2 / 32)) | (c4 >> (c2 - 58)));
        e4 = isNaN(c4) ? c2 : (c4 & (c2 - 1));
        b64e += b64c.charAt(e1) + b64c.charAt(e2) + b64c.charAt(e3) + b64c.charAt(e4);
      }

      return b64e;
    };

    /**
     * функция для получения шестнадцатеричного представления числа.
     * @param {number|boolean} n - булевый тип конвертится в соответственные значения 0 и 1
     * @returns {string}
     */
    self.toHexString = function(n)
    {
      return n ? Math.round(n).toString(16) : '';
    };

    /**
     * функция обрезания строки до нужного размера.
     * @param {string} str
     * @param {number} n
     * @param {number} r
     * @returns {string}
     */
    self.trimString = function(str, n, r)
    {
      var length = str.length;
      if (length <= n) {
        return str;
      }
      var start = r ? length - n : 0;
      return str.substr(start, n);
    };

    /**
     * функция получения координат элемента относительно документа
     * @param {Element} element
     * @returns { {x: number, y: number} }
     */
    self.getCoordsElementOfPage = function(element)
    {
      var offsetLeft = 0, offsetTop = 0;
      do {
        offsetLeft += element.offsetLeft;
        offsetTop  += element.offsetTop;
      } while (element = element.offsetParent);

      return {
        'x': offsetLeft,
        'y': offsetTop
      };
    };

    /**
     * функция получения координат курсора мышки относительно документа
     * @param {MouseEvent} event
     * @returns { {x: number, y: number} }
     */
    self.getCoordsClickOfPage = function(event)
    {
      var x = 0, y = 0;
      if (!event) event = self.context.event;

      if (event.pageX || event.pageY) {
        x = event.pageX;
        y = event.pageY;
      } else if (event.touches && event.touches[0]) {
        x = event.touches[0].pageX;
        y = event.touches[0].pageY;
      } else if (event.clientX || event.clientY) {
        x = event.clientX + (self.context.document.documentElement.scrollLeft || self.context.document.body.scrollLeft) - self.context.document.documentElement.clientLeft;
        y = event.clientY + (self.context.document.documentElement.scrollTop || self.context.document.body.scrollTop) - self.context.document.documentElement.clientTop;
      }

      return {
        'x':x,
        'y':y
      };
    };

    /**
     * функция получения координат курсора мышки относительно окна
     * @param {MouseEvent} event
     * @returns { {x: number, y: number} }
     */
    self.getCoordsClickOfWindow = function(event)
    {
      var x = 0, y = 0;
      if (event.clientX || event.clientY) {
        x = event.clientX;
        y = event.clientY;
      } else if (event.touches && event.touches[0]) {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
      }

      return {
        'x':x,
        'y':y
      };
    };

    /**
     * Получить поддержку свойства maxTouchPoints
     * @returns {number}
     */
    self.getMaxTouchPoints = function()
    {
      var r = 98;
      if (typeof(self.context.navigator.maxTouchPoints) !== 'undefined') {
        r = self.context.navigator.maxTouchPoints;
      } else {
        r = 99;
      }
      return r;
    };

    /**
     * Получение флага браузера
     * @returns {number}
     */
    self.getBrowserFlag = function()
    {
      var browserFlag = 0;
      if (self.context.opera) {
        /* opera */
        browserFlag += 1;
      }
      if (self.context.opera && self.context.opera.buildNumber) {
        /* opera */
        browserFlag += 2;
      }
      if (self.context.document.all || self.context.MSStream) {
        /* ie */
        browserFlag += 4;
      }
      if (!self.context.btoa || self.context.navigator.msPointerEnabled || typeof(self.context.clearImmediate) !== 'undefined') {
        /* ie */
        browserFlag += 8;
      }
      if (self.context.chrome) {
        /* chrome */
        browserFlag += 16;
      }
      if (typeof(self.context.mozInnerScreenX) !== 'undefined') {
        /* firefox */
        browserFlag += 32;
      }
      if (!self.context.external) {
        /* safari */
        browserFlag += 64;
      }

      return browserFlag;
    };

    /**
     * Получение флага браузера
     * @returns {number}
     */
    self.getFocusFlag = function()
    {
      var focusFlag = 0;
      if (self.context.opera) {
        /* opera */
        focusFlag += 1;
      }
      if (self.context.opera && self.context.opera.buildNumber) {
        /* opera */
        focusFlag += 2;
      }
      if (self.context.document.all || self.context.MSStream) {
        /* ie */
        focusFlag += 4;
      }
      if (!self.context.btoa || self.context.navigator.msPointerEnabled || typeof(self.context.clearImmediate) !== 'undefined') {
        /* ie */
        focusFlag += 8;
      }
      if (self.context.chrome) {
        /* chrome */
        focusFlag += 16;
      }
      if (typeof(self.context.mozInnerScreenX) !== 'undefined') {
        /* firefox */
        focusFlag += 32;
      }
      if (!self.context.external) {
        /* safari */
        focusFlag += 64;
      }

      return focusFlag;
    };

    /**
     * функция проверки поддержки java
     * @returns {number}
     */
    self.isJavaEnabled = function()
    {
      return self.context.navigator.javaEnabled() ? 1 : 0;
    };

    /**
     * функция проверки поддержки flash
     * @returns {number}
     */
    self.isFlashEnabled = function()
    {
      var b = 0;
      /* Проверка для всех браузеров, кроме IE */
      if (typeof(self.context.navigator.plugins) !== 'undefined' && typeof(self.context.navigator.plugins["Shockwave Flash"]) == 'object') {
        b = 1;
      } else if (typeof(self.context.ActiveXObject) !== 'undefined') {
        /* Проверка для IE */
        try {
          if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) {
            b = 1;
          }
        } catch(e) {}
      }

      return b;
    };

    /**
     * функция проверки поддержки cookie
     * @returns {number}
     */
    self.isCookieEnabled = function()
    {
      return self.context.navigator.cookieEnabled ? 1 : 0;
    };

    /**
     * функция проверки поддержки SessionStorage
     * @returns {number}
     */
    self.isSessionStorageEnabled = function()
    {
      if (self.context.sessionStorage) {
        try {
          var e = null;
          self.context.sessionStorage.setItem('svs', 1);
          e = self.context.sessionStorage.getItem('svs');
        } catch (n) {}
      }
      return e ? 1 : 0;
    };

    /**
     * функция проверки поддержки LocalStorage
     * @returns {number}
     */
    self.isLocalStorageEnabled = function()
    {
      if (self.context.localStorage) {
        try {
          var e = null;
          self.context.localStorage.setItem('svs', 1);
          e = self.context.localStorage.getItem('svs');
        } catch (n) {}
      }
      return e ? 1 : 0;
    };

    /**
     * Получение флага группированных битовых параметров
     * @returns {number}
     */
    self.groupBitParams = function()
    {
      var b = 0;
      if (self.isJavaEnabled()) b += 1;
      if (self.isFlashEnabled()) b += 2;
      if (self.isCookieEnabled()) b += 4;
      if (self.isLocalStorageEnabled()) b += 8;
      if (self.isSessionStorageEnabled()) b += 16;
      if (self.isTouchStart()) b += 32;
      return b;
    };

    /**
     * Поддержка ontouchstart
     * @returns {boolean}
     */
    self.isTouchStart = function()
    {
      return typeof(self.context.ontouchstart) !== 'undefined';
    };

    /**
     * Преобразование десятичного числа в символ
     * @param {number} number
     * @returns {string}
     */
    self.dec2chr = function(number)
    {
      return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcde.ghijklmnopqrstuv0123456789wxyz-_'.substr(number, 1);
    };

    /**
     * Преобразование восьмиричного числа в символ
     * @param {number} number
     * @returns {string}
     */
    self.oct2chr = function(number)
    {
      var dict = {
        '00': 'A', '01': 'B', '02': 'C', '03': 'D', '04': 'E', '05': 'F', '06': 'G',
        '07': 'H', 10: 'I', 11: 'J', 12: 'K', 13: 'L', 14: 'M', 15: 'N', 16: 'O', 17: 'P',
        20: 'Q', 21: 'R', 22: 'S', 23: 'T', 24: 'U', 25: 'V', 26: 'W', 27: 'X', 30: 'Y',
        31: 'Z', 32: 'a', 33: 'b', 34: 'c', 35: 'd', 36: 'e', 37: '.', 40: 'g', 41: 'h',
        42: 'i', 43: 'j', 44: 'k', 45: 'l', 46: 'm', 47: 'n', 50: 'o', 51: 'p', 52: 'q',
        53: 'r', 54: 's', 55: 't', 56: 'u', 57: 'v', 60: '0', 61: '1', 62: '2', 63: '3',
        64: '4', 65: '5', 66: '6', 67: '7', 70: '8', 71: '9', 72: 'w', 73: 'x', 74: 'y',
        75: 'z', 76: '-', 77: '_', 0: '!', 1: '*', 2: ';', 3: ':', 4: '=', 5: '+', 6: '$', 7: '~'
      };
      return dict[number];
    };

    /**
     * Упаковка рефереров
     * @param {string} primary referrer
     * @param {string} referrer
     * @param {string} href
     * @returns {Array}
     */
    self.packReferrers = function(l1, l2, l3)
    {
      var arr = [self.afPrimaryReferrer, self.afReferrer, self.afHref];
      var sizes = [l1, l2, l3];
      var totalSize = 0;
      var totalLength = 0;
      for (var i = 0; i < sizes.length; i++) {
        totalSize += sizes[i];
        totalLength += arr[i].length;
      }
      if (totalLength <= totalSize) return arr;

      var completes = [0, 0, 0];
      var buffer = [];
      for (var i = 0; i < arr.length; i++) {
        var end = -1;
        if (arr[i].length >= 8) {
          end = arr[i].indexOf("/", 8);
        }
        if (end == -1) {
          buffer[i] = arr[i];
          arr[i] = '';
        } else {
          buffer[i] = arr[i].substr(0, end);
          arr[i] = arr[i].substr(end);
        }
        sizes[i] -= buffer[i].length;
      }
      var domains = buffer.slice();
      var replaces = [];
      if (domains[0] == domains[1]) {
        replaces[0] = "++";
      } else if (domains[0] == domains[2]) {
        replaces[0] = "::";
      }
      if (domains[1] == domains[2]) {
        replaces[1] = ";;";
      }
      while(1) {
        var bFlag = 0;
        for (var i = 0; i < arr.length; i++) {
          if (!completes[i] && !arr[i].length) {
            completes[i] = 1;
            for (var j = 0; j < completes.length; j++) {
              if (!completes[j]) {
                sizes[j] += sizes[i];
                sizes[i] = 0;
                break;
              }
            }
          } else if (!completes[i]) {
            bFlag = 1;
            buffer[i] += arr[i][0];
            if (arr[i].length != 1) {
              arr[i] = arr[i].substr(1);
            } else {
              arr[i] = '';
            }
            sizes[i]--;
            if (!sizes[i]) {
              completes[i] = 1;
            }
          }
        }
        if (!bFlag) {
          for (var i = 0; i < arr.length; i++) {
            if (!arr[i].length) continue;
            for (var j = 0; j < sizes.length; j++) {
              if (sizes[j]) {
                completes[i] = 0;
                sizes[i] = sizes[j];
                sizes[j] = 0;
                bFlag = 1;
                break;
              }
            }
            if (bFlag) {
              break;
            }
          }
        }
        if (!bFlag) {
          break;
        }
      }
      for (var i in replaces) {
        buffer[i] = buffer[i].split(domains[i]).join(replaces[i]);
      }
      return buffer;
    };

    /**
     * Сжатие числа
     * @param {number} number
     * @returns {string}
     */
    self.compressNumber = function(number)
    {
      if (number == null) {
        return '';
      }
      number = Math.abs(number);
      var oct = parseInt(number, 10).toString(8);
      var sizeChar = 2;
      var n = Math.ceil(oct.length/sizeChar);
      var chars = '';
      for (var i = 0; i < n; i++) {
        var part = oct.substr(i*sizeChar, sizeChar);
        chars += self.oct2chr(part);
      }
      return chars;
    };

    /**
     * Получить снимок DOM свойств
     * @returns {string}
     */
    self.getSnapshotProperties = function()
    {
      var propertiesDom = {"props":{"3":"window.close","13":"window.navigator.taintEnabled","16":"window.EventTarget.toString","18":"window.navigator.appName","20":"window.ApplicationCacheErrorEvent","22":"window.clearImmediate","23":"window.CryptoKey","25":"window.external.AddSearchProvider","32":"window.chrome.search","33":"window.clientInformation.vendor","40":"window.TouchEvent","43":"window.DeviceMotionEvent","46":"window.navigator.webkitGetGamepads","49":"window.Notification","56":"window.BeforeLoadEvent","57":"window.Entity","72":"window.AnalyserNode","74":"window.ArrayBufferView","76":"window.HTMLBaseFontElement","86":"window.self.SharedWorker","87":"window.Touch","91":"window.DOMException.ABORT_ERR","92":"window.Set","98":"window.document.createTouch","138":"window.NaN","139":"window.document.prepend","163":"window.SiteBoundCredential","165":"window.CanvasCaptureMediaStreamTrack","166":"window.core.version","167":"window.Blob"},"rules":{"contains":{"3":["({command:\"window.close.self\"})"],"18":["MicrosoftInternetExplorer"],"33":["GoogleInc."]},"not_empty":[13,16,18,20,22,23,25,32,40,43,46,49,56,57,76,86,87,91,92,98,138,139,163,165,166],"undefined":[25,46,72,74,87,167]}};
      var snapshotProperties = '';
      for (var i in propertiesDom['props']) {
        i = parseInt(i, 10);
        var node = window;
        var value = '';
        var tree = propertiesDom['props'][i].split('.');

        for (var depth in tree) {
          if (tree[depth] in node) {
            try {
              node = node[tree[depth]];
            } catch (e) {
              node = 'undefined';
            }
          } else {
            node = 'undefined';
            break;
          }
        }

        value = (node + '').replace(/\s/g, '');

        if (propertiesDom['rules']['contains'] && i in propertiesDom['rules']['contains']) {
          for (var j in propertiesDom['rules']['contains'][i]) {
            snapshotProperties += value.indexOf(propertiesDom['rules']['contains'][i][j]) != -1 ? "1" : "0";
          }
        }
        if (propertiesDom['rules']['empty'] && propertiesDom['rules']['empty'].indexOf(i) != -1) {
          snapshotProperties += value == "" ? "1" : "0";
        }
        if (propertiesDom['rules']['not_empty'] && propertiesDom['rules']['not_empty'].indexOf(i) != -1) {
          snapshotProperties +=  (value != "undefined" && value != "") ? "1" : "0";
        }
        if (propertiesDom['rules']['undefined'] && propertiesDom['rules']['undefined'].indexOf(i) != -1) {
          snapshotProperties += value == "undefined" ? "1" : "0";
        }
      }
      var sizeChar = 6;
      var n = Math.ceil(snapshotProperties.length/sizeChar);
      var chars = '';
      for (var i = 0; i < n; i++) {
        var part = snapshotProperties.substr(i*sizeChar, sizeChar);
        var dec = parseInt(part, 2);
        chars += self.dec2chr(dec);
      }
      return chars;
    };

    /**
     * Функция проверки прозрачности элемента
     * @param {Element} element
     * @returns {number}
     */
    self.isTransparent = function(el)
    {
      while (el.firstChild && el.firstChild.nodeType == 1) {
        el = el.firstChild;
      }
      while (el.parentNode) {
        if (self.context.getComputedStyle(el).getPropertyValue('opacity') <= 0.2) {
          return 1;
        }
        if (el == self.context.document.body) {
          break;
        }
        el = el.parentNode;
      }
      return 0;
    };

    /**
     * Получить ко-во mimeTypes
     * @returns {number}
     */
    self.getCountMimeTypes = function()
    {
      var n = 0;
      if (typeof(self.context.navigator.mimeTypes) !== 'undefined') {
        n = self.context.navigator.mimeTypes.length;
      }
      return n;
    };

    /**
     * Получить установленные плагины
     * @returns {string}
     */
    self.getPlugins = function()
    {
      var str = '';
      if (typeof(self.context.navigator.plugins) !== 'undefined') {
        var arr = self.context.navigator.plugins;
        var pl = [];
        for(var i = 0; i < arr.length; i++) {
          pl.push(arr[i]['name']);
        }
        str = self.trimString(pl.join('|').replace(/\s/g,""), 300);
      }
      return str;
    };

    /**
     * Получить координату X относительно экрана
     * @returns {number}
     */
    self.getScreenX = function()
    {
      var r = 0;
      if (typeof(self.context.screenX) !== 'undefined') {
        r = Math.abs(self.context.screenX);
      }
      return r;
    };

    /**
     * Получить координату Y относительно экрана
     * @returns {number}
     */
    self.getScreenY = function()
    {
      var r = 0;
      if (typeof(self.context.screenY) !== 'undefined') {
        r = Math.abs(self.context.screenY);
      }
      return r;
    };

    /**
     * Фокус на странице установлен
     */
    self.setFocus = function()
    {
      self.afFocus = 1;
    };

    /**
     * Фокус на странице не установлен
     */
    self.unsetFocus = function()
    {
      self.afFocus = 0;
    };

    /**
     * Поддерживает ли браузер html5
     * @returns {number}
     */
    self.isSupportHtml5 = function()
    {
      var elem = self.context.document.createElement('canvas');
      return (elem.getContext && elem.getContext('2d')) ? 1 : 0;
    };

    /**
     * Находится ли пользователь в сети
     * @returns {number}
     */
    self.isOnLine = function()
    {
      var r = 1;
      if (typeof(self.context.navigator.onLine) !== 'undefined') {
        r = self.context.navigator.onLine ? 1 : 0;
      }
      return r;
    };

    /**
     * Получить информацию о батарее
     * @returns {string}
     */
    self.generateBatteryInfo = function()
    {
      if(self.context.navigator.getBattery) {
        self.context.navigator.getBattery().then(function(battery) {
          self.afCharging = +battery.charging;
          self.afLevel = battery.level * 100;
        })
      }
    };

    /**
     * сетим координаты информера в формате h|w|x|y
     */
    self.setCoords = function()
    {
      var rect = self.root.getBoundingClientRect();
      self.afCoords = parseInt(rect.height) + '|' + parseInt(rect.width) + '|' + parseInt(rect.x) + '|' + parseInt(rect.y);
    };

    /**
     * Возвращает позицию элемента
     * @param element
     * @returns { {top: *, bottom: *, left: *, right: *, height: *, width: *} }
     */
    self.getRectOfElement = function(element) {
      var rect = element.getBoundingClientRect();
      var toReturn = {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
        height: (rect.height ? rect.height : rect.bottom - rect.top),
        width: (rect.width ? rect.width : rect.right - rect.left)
      };
      if (self.context.self !== self.context.top) {
        var frame = self.getFrameElement();
        if (frame) {
          var iframeRect = frame.getBoundingClientRect();
          toReturn.top += iframeRect.top;
          toReturn.bottom += iframeRect.top;
          toReturn.left += iframeRect.left;
          toReturn.right += iframeRect.left;
        }
      }
      return toReturn;
    };

    /**
     * Возвращает объект самого верхнего iframe для определения его позиции
     * @returns {Window}
     */
    self.getFrameElement = function() {
      if (self.topIFrame === undefined) {
        try {
          for (var w = self.context, frame = w.frameElement; w.frameElement; w = w.parent) {
            frame = w.frameElement;
          }
          self.topIFrame = frame;
        } catch(err) {
          self.topIFrame = null;
        }
      }
      return self.topIFrame;
    };

    /**
     * Функция получения параметров
     * @param {MouseEvent} event
     * @param {Element} element
     */
    self.getAntifraudParams = function(event, element)
    {
      if (false == self.allowReturnParams) {
        return;
      }
      var element = element || self.context.document.createElement('A');
      var event = event || self.context.document.createEvent('MouseEvent');
      var date = new Date();
      var coordClickOfPage = self.getCoordsClickOfPage(event);
      var coordClickOfWindow = self.getCoordsClickOfWindow(event);
      var b = self.getRectOfElement(element);
      var coordLinkOfPage = self.getCoordsElementOfPage(element);
      var d = self.context.document;

      var tsp = self.isTransparent(element);

      self.setCoords();
      var paramString = '';
      for (var i = 1; i <= Math.ceil((self.afBrowserFlag + 1) / 68) * 48; i++) {
        if ((i % 26 == 0) || ((i % 26 == 6) && (((i % 26) + 5) % 11 == 0))) {
          continue;
        }
        paramString += (i == 1 ? String.fromCharCode(98 + (i % 26)) : String.fromCharCode(102));
        var paramPart = '';
        if (i > 48) {
          break;
        }
        /* Значимые параметры 1, 3, 4, 7, 8, 9, 10, 11, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48*/
        switch (i) {
          case 1: /* Cookie */
            paramPart = self.afCookieData;
            break;
          case 2: /* координата нижней границы */
            paramPart = self.compressNumber(b.bottom);
            break;
          case 3: /* Время загрузки */
            paramPart = self.afMgLoaded;
            break;
          case 4: /* Время клика */
            paramPart = self.compressNumber(date.getTime());
            break;
          case 5: /* высота видимой части окна */
            paramPart = self.compressNumber(d.body.clientHeight);
            break;
          case 7: /* X клика относительно окна */
            paramPart = self.compressNumber(coordClickOfWindow.x);
            break;
          case 8: /* Y клика относительно окна */
            paramPart = self.compressNumber(coordClickOfWindow.y);
            break;
          case 9: /* X ссылки относительно окна */
            paramPart = self.compressNumber(b.left);
            break;
          case 10:
            paramPart = self.compressNumber(self.miliSecondsFromScroll);
            break;
          case 11: /* Y ссылки относительно окна */
            paramPart = self.compressNumber(b.top);
            break;
          case 12:
            paramPart = self.compressNumber(d.body.clientHeight - coordClickOfWindow.y);
            break;
          case 13: /* ширина ссылки */
            paramPart = self.compressNumber(b.width);
            break;
          case 14: /* высота ссылки */
            paramPart = self.compressNumber(b.height);
            break;
          case 15:
            paramPart = self.afSnapshotProperties;
            break;
          case 16: /* вертикальная координата (в соответствии с клиентской областью) указателя мыши */
            paramPart = self.compressNumber(event.clientY);
            break;
          case 17: /* браузер */
            paramPart = self.compressNumber(self.afBrowserFlag);
            break;
          case 18: /* признак наведения и движения мыши */
            /* \x64\x61\x74\x61\x2d\x72\x65\x6C == data-rel */
            paramPart = self.compressNumber(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
            break;
          case 19: /* адрес страницы */
            paramPart = self.afHref;
            break;
          case 20: /* реферер */
            paramPart = self.afReferrer;
            break;
          case 21: /* первоначальный реферер */
            paramPart = self.afPrimaryReferrer;
            break;
          case 22: /* глубина сессии */
            paramPart = self.compressNumber(self.afDeepSession);
            break;
          case 23: /* X клика относительно документа */
            paramPart = self.compressNumber(coordClickOfPage.x);
            break;
          case 24: /* Y клика относительно документа */
            paramPart = self.compressNumber(coordClickOfPage.y);
            break;
          case 25: /* X ссылки относительно документа */
            paramPart = self.compressNumber(coordLinkOfPage.x);
            break;
          case 27: /* Y ссылки относительно документа */
            paramPart = self.compressNumber(coordLinkOfPage.y);
            break;
          case 28: /* поддержка java, flash, cookie, localStorage, sessionStorage */
            paramPart = self.dec2chr(self.groupBitParams());
            break;
          case 29: /* координаты информера в формате h|w|x|y */
            paramPart = self.x64String(self.afCoords);
            break;
          case 30: /* разрешение экрана по горизонтали */
            paramPart = self.compressNumber(self.context.screen.width);
            break;
          case 31: /* разрешение экрана по вертикали */
            paramPart = self.compressNumber(self.context.screen.height);
            break;
          case 33: /* время загрузки первой картинки*/
            paramPart = self.compressNumber(self.afImgLoaded);
            break;
          case 34: /* прозрачность элемента */
            paramPart = self.compressNumber(tsp);
            break;
          case 35: /* юзерагент */
            paramPart = self.x64String(self.context.navigator.userAgent);
            break;
          case 36: /* плагины */
            paramPart = self.afPlugins;
            break;
          case 37: /* кол-во mime-types */
            paramPart = self.afCountMimeTypes;
            break;
          case 38: /* платформа */
            paramPart = self.x64String(self.context.navigator.platform);
            break;
          case 39: /* смещение часового пояса */
            paramPart = self.x64String(-date.getTimezoneOffset());
            break;
          case 40: /* свободная ячейка */
            paramPart = self.x64String(self.afCharging+'|'+self.afLevel);
            break;
          case 41: /* доступная ширина экрана */
            paramPart = self.compressNumber(self.context.screen.availWidth);
            break;
          case 42: /* доступная высота экрана */
            paramPart = self.compressNumber(self.context.screen.availHeight);
            break;
          case 43: /* координата x относительно экрана  */
            paramPart = self.compressNumber(self.getScreenX());
            break;
          case 44: /* координата y относительно экрана  */
            paramPart = self.compressNumber(self.getScreenY());
            break;
          case 45: /* фокус на окне */
            paramPart = self.compressNumber(self.afFocusFlag);
            break;
          case 46: /* свободная ячейка */
            paramPart = self.compressNumber(self.getMaxTouchPoints());
            break;
          case 47: /* поддержка html5 */
            paramPart = self.compressNumber(self.isSupportHtml5());
            break;
          case 48: /* пользователь имеет статус online */
            paramPart = self.compressNumber(self.isOnLine());
            break;
        }
        paramString += paramPart;
      }

      return encodeURIComponent(paramString);
    };

    /**
     * Перезапись ссылки
     * @param {Event} event
     * @param {Element} element
     */
    self.reWriteHref = function(event, element)
    {
      if (!event) var event = self.context.event;
      if (!event.target) {
        event.target = event.srcElement;
      }

      var hash = element['data-hash'] || element.getAttribute('data-hash');

      /* если element не тег а или нет атрибута хеш, то уходим */
      if (typeof(hash) == 'undefined' || element.tagName != 'A') {
        return;
      }

      element[self.hrefAttr] = self.prepareNiceHref(hash, event, element);
    };

    /**
     * Обработчик события onmousedown
     * @param {MouseEvent} event
     */
    self.linkMouseDown = function(event)
    {
      if (!event) var event = self.context.event;
      if (!event.target) {
        event.target = event.srcElement;
      }

      self.allowReturnParams = true;
      var element = event.target;
      if (element.tagName != 'A') {
        var element = self.getParentLink(element);

        if (null == element) {
          return;
        }
      }

      if (!element.hasAttribute('data-hash')) {
        return;
      }

      var v = 0;

      if (parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C'])) {
        v = parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
      }

      if (!((v >> 1) & (16 >> 1))) {
        element['\x64\x61\x74\x61\x2d\x72\x65\x6C'] = v + 16;
      }

      self.reWriteHref(event, element);
    };

    /**
     * Обработчик клика по ссылке
     * @param {MouseEvent} event
     */
    self.linkClick = function(event)
    {
      if (!event) var event = self.context.event;
      if (!event.target) {
        event.target = event.srcElement;
      }

      self.allowReturnParams = true;
      var element = event.target;
      if (element.tagName != 'A') {
        var element = self.getParentLink(element);

        if (null == element) {
          return;
        }
      }

      if (!element.hasAttribute('data-hash')) {
        return;
      }

      self.reWriteHref(event, element);



      /* после нажатия прятаем антинакруточные параметры */
      self.context.setTimeout(function() {
        self.allowReturnParams = false;
        self.reWriteHref(event, element);
      }, 100);
    };

    /**
     * Обработчик наведения мыши
     * \x64\x61\x74\x61\x2d\x72\x65\x6C == data-rel
     * @param {MouseEvent} event
     */
    self.linkMouseOver = function(event)
    {
      if (!event) var event = self.context.event;
      if (!event.target) {
        event.target = event.srcElement;
      }

      self.allowReturnParams = true;
      var element = event.target;
      if (element.tagName != 'A') {
        var element = self.getParentLink(element);

        if (null == element) {
          return;
        }
      }

      if (!element.hasAttribute('data-hash')) {
        return;
      }

      var v = 0;
      if (parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C'])) {
        v = parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
      }

      if (v % 2 != 1) {
        element['\x64\x61\x74\x61\x2d\x72\x65\x6C'] = v + 1;
      }

      self.reWriteHref(event, element);
    };

    /**
     * Замеряем время от прокрутки до клика
     * @param {MouseEvent} event
     */
    self.timeFromScroll = function(event)
    {
      if (!event) var event = self.context.event;
      if (!event.target) {
        event.target = event.srcElement;
      }

      self.miliSecondsFromScroll = 0;
      self.context.clearInterval(self.timerFromScroll);

      self.timerFromScroll = self.context.setInterval(function() {
        self.miliSecondsFromScroll++;
      }, 100);
    };

    /**
     * Обработчик движения мыши
     * \x64\x61\x74\x61\x2d\x72\x65\x6C == data-rel
     * @param {MouseEvent} event
     */
    self.linkMouseMove = function(event)
    {
      if (!event) var event = self.context.event;
      if (!event.target) {
        event.target = event.srcElement;
      }

      self.allowReturnParams = true;
      var element = event.target;
      if (element.tagName != 'A') {
        var element = self.getParentLink(element);

        if (null == element) {
          return;
        }
      }

      if (!element.hasAttribute('data-hash')) {
        return;
      }

      var v = 0;

      if (parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C'])) {
        v = parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
      }

      if ((v >> 1) % 2 != 1) {
        element['\x64\x61\x74\x61\x2d\x72\x65\x6C'] = v + 2;
      }

      self.reWriteHref(event, element);
    };

    self.linkTouchStart = function(event)
    {
      self.allowReturnParams = true;
      var element = event.target;
      if (element.tagName != 'A') {
        var element = self.getParentLink(element);

        if (null == element) {
          return;
        }
      }

      if (!element.hasAttribute('data-hash')) {
        return;
      }

      var v = 0;

      if (parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C'])) {
        v = parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
      }

      if (!((v >> 1) & (4 >> 1))) {
        element['\x64\x61\x74\x61\x2d\x72\x65\x6C'] = v + 4;
      }

      self.reWriteHref(event, element);
    };

    self.linkTouchEnd = function(event)
    {
      if (!event) var event = self.context.event;
      if (!event.target) {
        event.target = event.srcElement;
      }

      self.allowReturnParams = true;
      var element = event.target;
      if (element.tagName != 'A') {
        var element = self.getParentLink(element);

        if (null == element) {
          return;
        }
      }

      if (!element.hasAttribute('data-hash')) {
        return;
      }

      var v = 0;

      if (parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C'])) {
        v = parseInt(element['\x64\x61\x74\x61\x2d\x72\x65\x6C']);
      }

      if (!((v >> 1) & (8 >> 1))) {
        element['\x64\x61\x74\x61\x2d\x72\x65\x6C'] = v + 8;
      }

      self.reWriteHref(event, element);
    };

    /**
     * Фиксация загрузки картинки
     */
    self.fixTimeImageLoaded = function()
    {
      if (!self.afImgLoaded) {
        self.afImgLoaded = (new Date()).getTime();
      }
    };

    /**
     * Добавление слушателей собитий ссылки
     * @param {Element} element
     */
    self.hangAFListener = function(element)
    {
      if (typeof element == 'undefined') {
        element = self.root;
      }

      self.addEvent(element, "mousedown", self.linkMouseDown);
      self.addEvent(element, "mouseup", self.linkClick);
      self.addEvent(element, "mouseover", self.linkMouseOver);
      self.addEvent(element, "mousemove", self.linkMouseMove);
      self.addEvent(element, "touchstart", self.linkTouchStart);
      self.addEvent(element, "touchend", self.linkTouchEnd);
      self.addEvent(self.context.document, "scroll", self.timeFromScroll);
      self.addEvent(self.context, "focus", self.setFocus);
      self.addEvent(self.context, "blur", self.unsetFocus);

      var regex = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/;
      var regexNewFormat = /\/\/s-img.*\/([\d]+)\/.*\.(jpg|gif)/;
      var images = self.root.getElementsByTagName('IMG');
      for (var i = 0; i < images.length; i++) {
        var res = regex.exec(images[i].src);
        if (!res) {
          res = regexNewFormat.exec(images[i].src);
        }
        self.addEvent(images[i], "load", self.fixTimeImageLoaded);
      }
    };
  };        this['MarketGidCAntifraudBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['Antifraud'] = 'MarketGidCAntifraudBlock605';
  MarketGidCDiscountBlock605 = function(self)
  {
    this.afterLoadNewsHooks.push("discountsLoader");

    this.discountMouseOver = function(event) {
      self.helpIE(this);
      var pricesold = this.getElementsByClassName('mcpriceold312');
      var prices = this.getElementsByClassName('mcprice312');
      var discounts = this.getElementsByClassName('mcdiscount312');
      if (pricesold.length > 0) {
        pricesold[0].style.display = 'none';
        prices.length > 1 ? prices[1].style.display = 'none' : null;
        discounts.length > 0 ? discounts[0].style.display = 'inline' : null;
      }
    };

    this.discountMouseOut = function(event) {
      self.helpIE(this);
      var discounts = this.getElementsByClassName('mcdiscount312');
      var prices = this.getElementsByClassName('mcprice312');
      var pricesold = this.getElementsByClassName('mcpriceold312');
      if (pricesold.length > 0) {
        discounts.length > 0 ? discounts[0].style.display = 'none' : null;
        prices.length > 1 ? prices[1].style.display = 'inline' : null;
        pricesold[0].style.display = 'inline';
      }
    };

    this.discountsLoader = function()
    {
      if (this.root) {
        this.helpIE(this.root);
        var teasers = this.root.getElementsByClassName('mcteaser312');
      }
      for (var MG_t in teasers) {
        teasers[MG_t].onmouseout = this.discountMouseOut;
        teasers[MG_t].onmouseover = this.discountMouseOver;
      }
    };

    this.helpIE = function(el) {
      if (el.getElementsByClassName == undefined) {
        el.getElementsByClassName = function(cl) {
          var retnode = [];
          var myclass = new RegExp('\\b'+cl+'\\b');
          var elem = this.getElementsByTagName('*');
          for (var i = 0; i < elem.length; i++) {
            var classes = elem[i].className;
            if (myclass.test(classes)) retnode.push(elem[i]);
          }
          return retnode;
        };
      }
    };
  };        this['MarketGidCDiscountBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['Discount'] = 'MarketGidCDiscountBlock605';
  MarketGidCCountersBlock605 = function(self)
  {
    this.afterLoadNewsHooks.push("countersLoad");

    this.countersLoad = function() {

      var partnerId = '';

      if (self.id != 605) {
        var child = self.childWidgetsData[self.id];
        partnerId = child.hasNewsWidget ? child.newsWidgetIdPartner : null;
      }


    };

  };        this['MarketGidCCountersBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['Counters'] = 'MarketGidCCountersBlock605';
  this['MarketGidCAdvertLinkBlock605'] = function(self) {
    self.beforeLoadNewsHooks.push("refreshAdvertLink");
    self.afterLoadNewsHooks.push("initAdvertPopup");

    self.getAdvertLinkValue = function() {
      return parseInt('1');
    };

    self.removeElements = function(elements) {
      for (var i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
      }
    };

    self.refreshAdvertLink = function() {
      var adLink = self.getAdvertLinkValue();

      if (adLink) {
        try {
          var adLinkBlock = self.subnetMirrorsAdLinkBlocks[self.currentSubnet].replace(/%id/g, self.id);
          var widgetTitle = "" || "";


          adLinkBlock = adLinkBlock.replace("%WIDGET_TITLE%", widgetTitle);
          adLinkBlock = adLinkBlock.replace(/\((\'|\")?\/\//g, '($1' + self.webProtocol + '//');
          adLinkBlock = adLinkBlock.replace('src="//', 'src="' + self.webProtocol + '//');
          adLinkBlock = adLinkBlock.replace('href="//', 'href="' + self.webProtocol + '//');

          var utm = '';

          if (utm == '') {
            utm = self.subnetMirrorsUtm[self.currentSubnet];
          }

          self.tickerPrefix = adLinkBlock.replace(/%utm/, utm);

          if (adLink === 1) {
            return;
          }

          var container = document.createElement('div');
          container.innerHTML = self.tickerPrefix;

          /* Removing widget logo */
          if (adLink === 2) {
            self.removeElements(container.getElementsByClassName('mg_addad' + self.id));
          }

          /* Removing widget title */
          if (adLink === 3) {
            self.removeElements(container.getElementsByClassName('mghead'));
          }

          self.tickerPrefix = container.innerHTML;
        } catch (e) {
        }
      } else {
        self.tickerPrefix = '';
      }
    };

    /**
     * Парсинг рекламной ссылки в шаблоне информера
     */
    self.parseAdvertLink = function(template)
    {
      var marker = '<!--advertPrefix-->';
      var adLink = self.getAdvertLinkValue();
      var isMarkerInTheSecondPart = template.indexOf(marker) > (template.length / 2);

      /* Для резиновых информеров и если ссылка во второй половине шаблона
         необходимо убрать дублирование логотипа */
      if (isMarkerInTheSecondPart) {
        self.fixGetElementsByClassNameHandler(self.root);
        self.removeElements(self.root.getElementsByClassName('mg_addad' + self.id));
      }

      if (isMarkerInTheSecondPart || self.countLoadBlocks == 0) {
        if (template.indexOf(marker) >= 0) {
          template = template.replace(marker, this.tickerPrefix);
        } else {
          template = self.tickerPrefix + template;
        }
      }

      return template;
    };

    /**
     * Подвешивание рекламного попапа, по необходимости
     */
    self.initAdvertPopup = function () {

      /* Не загружены ли информер с iframe */
      if (self.context.top != self.context.self) {
        return;
      }

      /* Не банерный формат */
      if ('' == 'banner') {
        return;
      }

      /* Не попап */
      if ('' == 'exit-pop-up' || parseInt('0') > 0) {
        return;
      }

      /* Мобильное устройство */
      if (['tablet', 'desktop'].indexOf(self.deviceType) == -1) {
        return;
      }

      /* Мы не в предпросмотре каба */
      if (typeof self.context._mgDisableAdvertPopup != 'undefined') {
        return;
      }

      /* Мы не в конструкторе информеров */
      if (typeof MarketGidCConstructorBlock605 == 'function') {
        return;
      }

      var adEl = self.root.querySelector('.mg_addad' + self.id);

      if (adEl) {
        adEl.addEventListener("click", self.showAdvertPopup);
      }
    };

    /**
     * Инициализация и показ попапа
     *
     * @param event {Event}
     * @returns {boolean | null}
     */
    self.showAdvertPopup = function (event) {
      /* Если не задан аттрибут с сылкой на iframe попапа то выполняем клик как обычно */
      var srcEl = self.findClosest(event.target, '[data-advert-url]');
      if (!srcEl) {
        return null;
      }

      event.preventDefault();

      /* Размещаем рядом с родительской нодой так как elastic информер постоянно перерисовывает попап */
      var root = (self.realRoot != undefined ? self.realRoot : self.root).parentNode;

      var container = root.querySelector('._mgAdvertPopupC605');
      var innerEl = root.querySelector('._mgPopupInner');

      var scrollTo = function(element, to, duration) {
        if (duration <= 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function() {
          element.scrollTop = element.scrollTop + perTick;
          if (element.scrollTop === to) return;
          scrollTo(element, to, duration - 10);
        }, 10);
      };

      if (!container) {
        /* Подгружаем шаблон попапа */
        var template = '<style>    ._mgAdvertPopupC605 {        position: fixed;        width: 100%;        height: 100%;        top: 0px;        left: 0px;        font-family: "PTSans", Arial, sans-serif;        font-size: 16px;        color: #696969;        line-height: 1.3;        z-index: 999;        -webkit-box-sizing: border-box;        -moz-box-sizing: border-box;        box-sizing: border-box;    }    ._mgAdvertPopupC605 iframe {        width: 100%;        height: 377px;    }    ._mgAdvertPopupC605 ._mgPopupShadow {        position: absolute;        top: 0px;        left: 0px;        width: 100%;        height: 100%;        background-color: #000;        opacity: 0.4;        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";        z-index: 1;    }    ._mgAdvertPopupC605 ._mgPopupInner {        position: relative;        top: 50%;        margin-left: -375px;        left: 50%;        padding: 36px;        width: 750px;        background-color: #f8f8f8;        z-index: 2;        -webkit-box-sizing: border-box;        -moz-box-sizing: border-box;        box-sizing: border-box;    }    ._mgAdvertPopupC605 ._mgPopupInner.fixPop {        position: absolute!important;        top: 30px!important;        margin-top: 0!important;    }    ._mgAdvertPopupC605 ._mgClosePopup {        position: absolute;        overflow: hidden;        top: 5px;        right: 5px;        height: 21px;        width: 21px;        text-indent: -9999px;        background: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALAgMAAADUwp+1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVmZmZmZmb///+E1CFqAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAlSURBVAjXY3BgYGEQAEIWBgcGRkYGBgYXIBaA0CA+SBwkD1QHACp2Ae2BHO8IAAAAAElFTkSuQmCC\') no-repeat center center;        background-color: transparent;    }    ._mgAdvertPopupC605 ._mgClosePopup:hover {        background-color: #dfdfdf;    }</style><div class="_mgAdvertPopupC605">    <div class="_mgPopupShadow"></div>    <div class="_mgPopupInner">        <a href="#" class="_mgClosePopup" title="Close"></a>        <iframe frameborder="0"></iframe>    </div></div>';
        var elements = self.htmlToElements(template);

        for (var i = 0; i < elements.length; i++) {
          root.appendChild(elements[i]);
        }

        container = root.querySelector('._mgAdvertPopupC605');

        /* Уходим если в загруженом шаблоне контейнер попапа не найден */
        if (!container) {
          return false;
        }

        innerEl = container.querySelector('._mgPopupInner');

        var shadowEl = container.querySelector('._mgPopupShadow');

        /* Подставляем более корректный отступ сверху */
        innerEl.style.marginTop = -(innerEl.clientHeight / 2) + 'px';

        /* hide select-options on outer click */
        shadowEl.addEventListener('click', function(event) {
          if (null == self.findClosest(event.target, '._mgPopupInner')) {
            container.setAttribute('style', 'display: none');
          }
        });

        /* close button */
        var closeButton = container.querySelector('._mgClosePopup');
        if (closeButton) {
          closeButton.addEventListener('click', function (event) {
            event.preventDefault();
            container.setAttribute('style', 'display: none');
          })
        }

        /* Установка ссылки для iframe */
        var iframe = container.querySelector('iframe');
        iframe.setAttribute('src', srcEl.getAttribute('data-advert-url'));

        /* Определяем корректный метод для текущего браузера */
        var eventMethod = self.context.addEventListener ? "addEventListener" : "attachEvent";
        var eventer = self.context[eventMethod];
        var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

        /* Слушаем сообщение из попапа, он сообщит свои размеры при изменении */
        eventer(messageEvent,function(e) {
          var key = e.message ? "message" : "data";
          var data = JSON.parse(e[key]);
          /* Уходим если это не сообщение из попапа */
          if (typeof data.target == 'undefined' || data.target != 'correct-popup-height') {
            return true;
          }

          /* корректируем высоту блока iframe */
          iframe.style.height = data.height + 'px';

          /* Для мобильного сафари немного костылей, он не понимает фиксированного позиционирования */
          if (data.safariIPad) {
            if (data.keyboard) {
              scrollTo(self.context.document.body, 0, 500);
              innerEl.classList.add('fixPop');
            } else {
              innerEl.classList.remove('fixPop');
            }
          }

          /* корректируем отступы */
          innerEl.style.marginTop = -(innerEl.clientHeight / 2) + 'px';
        }, false);
      }

      container.setAttribute('style', 'display: block');

      if (innerEl.className.indexOf('fixPop') >= 0) {
        scrollTo(self.context.document.body, 0, 500);
      }
    };
  };        this['MarketGidCAdvertLinkBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['AdvertLink'] = 'MarketGidCAdvertLinkBlock605';
  /**
   * Блок кнопки блокировки тизера в информере.
   * @param self
   */
  this['MarketGidCRejectBlock605'] = function(self) {
    self.isInsertedRejectStyles = false;

    self['MarketGidReject'] = function () {
      var baseUrl = self.subnetDashboardDomains[self.getSubnetByMirror('marketgid')];

      self.fixGetElementsByClassNameHandler(self.root);
      var mglines = self.root.getElementsByClassName('mgline');
      for (var i = 0; i < mglines.length; i++) {
        (function(mgline) {
          if (mgline.className.indexOf('dsp') >= 0) {
            return;
          }
          self.fixGetElementsByClassNameHandler(mgline);
          var imgList = mgline.getElementsByClassName('mcimg');
          var img = false;
          for (var j = 0; j < imgList.length; j++) {
            if (imgList[j].tagName == "DIV") {
              img = imgList[j];
              break;
            }
          }
          if (!img) {
            return;
          }

          self.fixGetElementsByClassNameHandler(img);
          var el = img.getElementsByClassName('close-informer');
          var matchId = mgline.className.match(/teaser-([0-9]+)/);
          if (null == matchId) {
            return;
          }
          var matchType = mgline.className.match(/type-(w|e|i)/);
          if (null == matchType || matchType[1] == 'i') {
            return;
          }
          if (el.length == 0) {
            var url = baseUrl;
            url += '/publisher/blocked';
            var a = self.context.document.createElement('a');
            var imgStyles = self.context.getComputedStyle(img);
            a.className = "close-informer";
            a.href      = url + '/teaser/' + matchId[1] + '/widget/' + (matchType[1] == 'w' ? '18742/type/goods' : '/type/news');
            a.target    = '_blank';
            a.rel       = "nofollow";
            a.style.top   = (parseInt(imgStyles.borderTopWidth) + 3) + 'px';
            a.style.right = (parseInt(imgStyles.borderRightWidth) +3) + 'px';
            img.style.position = "relative";
            img.appendChild(a);
          }

        })(mglines[i]);
      }
    };

    self.initRejectStyles = function() {
      if (self.isInsertedRejectStyles) {
        return;
      }

      var rejectStyles = '\
        div.mcimg a.close-informer {\
            width: 14px;\
            height: 14px;\
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzI0ODBDMzY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzI0ODBDNDY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3MjQ4MEMxNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk3MjQ4MEMyNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uNcpEQAAAHxJREFUeNqckgEKwCAIRe3fYjfKc2zX6hydaLRbbDnGkLDIPggl/5lKIcbIRJRqbDSnUmOHE6LPm+CEfhj6lnN+o5WVh1VOm6xColCXc/cgLWYev9gaejnQojCab5RDzyDt6RantqoBaz5zq54ZywJ3CXjIwQGd8skfAQYALdQqftYulocAAAAASUVORK5CYIJ0ZW50Ij4NCiA8ZGl2IGNsYXNzPSJjb250ZW50LWNvbnRhaW5lciI+PGZpZWxkc2V0Pg0KICA8aDI+NTAyIC0gV2ViIHNlcnZlciByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHkgc2VydmVyLjwvaDI+DQogIDxoMz5UaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yLCBhbmQgaXQgY2Fubm90IGJlIGRpc3BsYXllZC4gV2hlbiB0aGUgV2ViIHNlcnZlciAod2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSkgY29udGFjdGVkIHRoZSB1cHN0cmVhbSBjb250ZW50IHNlcnZlciwgaXQgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIHRoZSBjb250ZW50IHNlcnZlci48L2gzPg0KIDwvZmllbGRzZXQ+PC9kaXY+DQo8L2Rpdj4NCjwvYm9keT4NCjwvaHRtbD4NCg==");\
            display: block;\
            opacity: 0;\
            position: absolute;\
            right: 3px;\
            top: 3px;\
            z-index: 1;\
            cursor: pointer;\
        }\
        div.mgline:hover a.close-informer {\
            opacity: 0.7;\
            -moz-transition: all 0.3s ease-out;\
            -o-transition: all 0.3s ease-out;\
            -webkit-transition: all 0.3s ease-out;\
            -ms-transition: all 0.3s ease-out;\
            transition: all 0.3s ease-out;\
        }\
        div.mgline a.close-informer:hover {\
            opacity: 1;\
            -moz-transition: all 0.3s ease-out;\
            -o-transition: all 0.3s ease-out;\
            -webkit-transition: all 0.3s ease-out;\
            -ms-transition: all 0.3s ease-out;\
            transition: all 0.3s ease-out;\
        }\
        div.mcimg {\
            position: relative;\
            display: inline-block\
        }\
        div.image-with-price {\
            position: relative;\
        }\
        .mgline .image-container {\
            width: auto;\
            margin: 0 auto;\
            position: relative;\
        }';

      self.styles += rejectStyles;

      self.isInsertedRejectStyles = true;
    };

    self.beforeLoadNewsHooks.push('initRejectStyles');
  };        this['MarketGidCRejectBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['Reject'] = 'MarketGidCRejectBlock605';
  /**
   * VT-21966 Сторонние пиксели в js-коде информеров
   * @param self
   */
  this['MarketGidCExternalCountersBlock605'] = function(self)
  {
    self.linksBlocked;

    self.afterLoadNewsHooks.push("handleExternalCountersListener");

    /* Обработчик */
    var linkHandler = function (event) {

      /* Ссылка заблочена даблкликом */
      if (self.linksBlocked && event.target.className.indexOf('Button') === -1) {
        return;
      }

      if (!event) {
        event = self.context.event;
      }

      if (!event.target) {
        event.target = event.srcElement;
      }

      /* Нужна только ссылка */
      var element = event.target;
      if (element.tagName != 'A') {
        element = self.getParentLink(element);

        if (null == element) {
          return;
        }
      }

      /* Необходима идентификация тизера */
      if (!element.hasAttribute('data-hash')) {
        return;
      }

      /* По хешу ищем пиксели для тизера */
      var hash = element.getAttribute('data-hash');
      if (!self.teaserData[hash]) {
        return;
      }

      /* Набор урлов для пикселей должен быть массивом */
      if (!Array.isArray(self.teaserData[hash]['clicktrackers'])) {
        return;
      }

      /* Передан массив пикселей */
      var clicktrackers = self.teaserData[hash]['clicktrackers'];
      if (!clicktrackers.length) {
        return;
      }

      /* Создаем объекты изображений, тем самым отправляем запроссы  */
      for (var i = 0; i < clicktrackers.length; i++) {
        var img = self.context.document.createElement('IMG');
        img.src = clicktrackers[i];
      }
    };

    /**
     * Навешивание js обработчика
     * @param element - Документ на который необходимо повешать событие
     */
    self.handleExternalCountersListener = function(element) {
      if (typeof element == 'undefined') {
        element = self.root;
      }

      self.addEvent(element, 'click', linkHandler);
    };
  };        this['MarketGidCExternalCountersBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['ExternalCounters'] = 'MarketGidCExternalCountersBlock605';
  MarketGidCCriteoBlock605 = function(self)
  {
    self.context.LoadCriteoAllPlaces = function (params) {
      self.criteoNurl = params.l;
      var s = self.context.document.createElement('script');
      self.criteoParams = params.pos;
      s.type = 'text/javascript';
      s.async = 'async';
      s.src = 'https://static.criteo.net/js/ld/publishertag.js';
      var h = self.context.document.getElementsByTagName('script')[0];
      h.parentNode.insertBefore(s, h);
      self.context.Criteo = self.context.Criteo || {};
      self.context.Criteo.events = self.context.Criteo.events || [];
      self.context.Criteo.events.push(function() {
        var adUnit = {
          "placements": [
            {
              "slotid": self.root.id,
              "zoneid": params.z,
              "nativeCallback": function(assets) {
                self.context.ProcessCriteo(assets);
              }
            },
          ]
        };
        self.context.Criteo.Passback.RequestBids(adUnit, 1500);
      });

      self.context.Criteo.events.push(function() {
        self.context.Criteo.Passback.RenderAd({
          adUnit: self.root.id,
          passback: function(adunit){}
        });
      });
    };
    self.context.ProcessCriteo = function (response) {
      self.countLoadBlocks = 0;
      self.root.innerHTML = '';
      self.iteration = 1;
      self.blockIds = [];
      var hashes = [];
      var data = self.json;
      var advDomain = "";
      if ("advertiser" in response && "domain" in response.advertiser) {
        advDomain = response.advertiser.domain;
      }
      var host = 1 === 1 ? 'marketgid' : 'mgid';
      var placements = response.products.length;
      for (var k = 0; k < placements; k++) {
        self.criteoPlacement = k;
        if (typeof data[k] === 'undefined'){
          continue;
        }
        data[self.criteoPlacement][0] = advDomain;
        data[self.criteoPlacement][1] = k+1;
        data[self.criteoPlacement][3] = response.products[k].title;
        data[self.criteoPlacement][4] = response.products[k].description;
        data[self.criteoPlacement][7] = response.products[k].price;
        data[self.criteoPlacement][8] = "";
        data[self.criteoPlacement][10].i = self.webProtocol + "//imggprx." + host + ".com/i/resize?img=" + encodeURIComponent(response.products[k].image.url) + "&size=9";
        data[self.criteoPlacement][10].l = self.criteoParams[k]+"&u="+self.tox64String(response.products[k].click_url);
        data[self.criteoPlacement][10].adc = [];
        hashes.push(self.teaserHashes[data[k].id]);
      }
      self.MarketGidLoadNews(data);
      for (var k = 0; k < placements; k++) {
        self.criteoPlacement = k;
        if (data[k] == undefined) {
          continue;
        }
        if (response.hasOwnProperty('privacy') && response.privacy.hasOwnProperty('optout_click_url') && response.privacy.hasOwnProperty('optout_image_url')) {
          var imgElement = self.root.getElementsByClassName('mgline')[self.criteoPlacement].getElementsByClassName('mcimg')[0];
          var privacyDiv = self.context.document.createElement('DIV');
          privacyDiv.style.position = 'absolute';
          privacyDiv.style.zIndex = '100';
          privacyDiv.style.left = '90%';
          privacyDiv.style.top = '0';
          var privacyHref = self.context.document.createElement('A');
          privacyHref.setAttribute('href', response.privacy.optout_click_url);
          privacyHref.setAttribute('target', "_blank");
          var privacyImg = self.context.document.createElement('IMG');
          privacyImg.setAttribute('src', response.privacy.optout_image_url);
          privacyHref.appendChild(privacyImg);
          privacyDiv.appendChild(privacyHref);
          imgElement.appendChild(privacyDiv);

          if (response.hasOwnProperty('impression_pixels')) {
            for (var i in response.impression_pixels) {
              if (response.impression_pixels[i].hasOwnProperty('url')) {
                var im = self.context.document.createElement('IMG');
                im.src = response.impression_pixels[i].url;
                self.context.document.body.appendChild(im)
              }
            }
          }
        }
      }

      var n = self.context.document.createElement('IMG');
      n.src = self.criteoNurl + "&ads=" + hashes.join(',');
      self.context.document.body.appendChild(n);
    };
  };        this['MarketGidCCriteoBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['Criteo'] = 'MarketGidCCriteoBlock605';
  MarketGidCSendDimensionsBlock605 = function(self)
  {
    self.blankImage = "data:image/gif;base64,R0lGODlhWgBaAPAAAAAAAAAAACH5BAEAAAAALAAAAABaAFoAAAJlhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCh4VgAAOw==";

    self.precalcRect = {};

    self.updatePrecalcRect = function(callback) {
      self.loadedType = "goods";
      self.currentSubnet = '0';
      self.fakeMode = true;
      self.realRoot = self.root;
      var cnt = self.context.document.createElement('div');
      var newRoot = self.context.document.createElement('div');
      newRoot.id = self.root.id;
      self.root.id += "_";
      cnt.appendChild(newRoot);
      self.root.appendChild(cnt);
      self.root = newRoot;
      self.realRoot.style.height = "0px";
      self.realRoot.style.overflow = "hidden";

      var countNews = 3;

      var lorem = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";

      var data = [];
      for (var i = 1; i <= countNews; i++) {
        data.push(['', i,'', lorem, lorem, '', '', '', '', '', {i: self.blankImage}]);
      }

      self.MarketGidLoadNews(data);

      setTimeout(function () {
        var h = self.getViewportHeight();
        self.fixGetElementsByClassNameHandler(self.root);
        var widgetRect = self.root.getBoundingClientRect();
        if (self.root.getElementsByClassName("mgbox")[0]) {
          widgetRect = self.root.getElementsByClassName("mgbox")[0].getBoundingClientRect();
        }
        self.precalcRect.width = parseInt(widgetRect.width ? widgetRect.width : widgetRect.right - widgetRect.left);
        self.precalcRect.height = parseInt(widgetRect.height ? widgetRect.height : widgetRect.bottom - widgetRect.top);
        self.precalcRect.top = widgetRect.top;
        self.precalcRect.bottom = widgetRect.bottom;
        self.requestParams.w = "w=" + self.precalcRect.width;
        self.requestParams.h = "h=" + self.precalcRect.height;

        var cols = 0;

        var elx = self.root.getElementsByClassName('mgline');
        var bannerPlacement = ''.split(',').map(Number) || [];

        for (i = 0; i < elx.length; i++) {
          var elementCount = i + 1;
          var rect = elx[i].getBoundingClientRect();
          if (bannerPlacement.indexOf(elementCount) !== -1) {
            var height = parseInt(rect.height ? rect.height : rect.bottom - rect.top);
            var width = parseInt(rect.width ? rect.width : rect.right - rect.left);
            self.requestParams['p' + elementCount + '_w'] = 'p' + elementCount + '_w=' + width;
            self.requestParams['p' + elementCount + '_h'] = 'p' + elementCount + '_h=' + height;
          }
          if (typeof prepTop != "undefined" && prepTop < rect.top && cols === 0) { cols = i;}
          var prepTop = rect.top;
        }

        if (cols == 0) {
          cols = elx.length;
        }

        self.requestParams.cols = "cols=" + cols;
        self.fakeMode = false;
        self.root = self.realRoot;
        self.root.removeChild(cnt);
        self.root.id = self.root.id.substr(0, self.root.id.length - 1);
        self.root.style.height = "auto";
        self.root.style.overflow = "visible";
        self.loadedType = "";
        self.currentSubnet = "";
        self.countLoadBlocks = 0;
        self.template = "";
        self.iteration = 1;
        self.blockIds = {};

        if (typeof callback == "function") {
          self.widgetPreload = true;
          callback();
        }
      }.bind(callback), 0);
    };
  };        this['MarketGidCSendDimensionsBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['SendDimensions'] = 'MarketGidCSendDimensionsBlock605';
  MarketGidCMonitorBlock605 = function(self)
  {
    this.afterLoadNewsHooks.push("monitorInit");

    this.shownBlocks = {};

    this.monitorTimeout = null;

    this.isFirstByType = {};

    this.isFirstByCid = {};

    this.monitorInit = function() {
      var regex = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/;
      var regexNewFormat = /\/\/s-img.*\/([\d]+)\/.*\.(jpg|gif)/;
      if (typeof (IntersectionObserver) === 'function' && self.servicerData.cv === 3) {
        var threshold = 0.9;
        var thresholdMs = 1000;
        var observedCollected = 0;
        var observeCount = 0;
        var intersectingObjs = [];
        var intersectTimeOut = null;
        var setIntersectingTime = function () {
          var shown = 0;
          for (var i = 0; i < intersectingObjs.length; i++) {
            if (!!intersectingObjs[i]) {
              if (intersectingObjs[i].dataset.shown) {
                shown++
              } else {
                if (intersectingObjs[i].dataset.observeStart > 0) {
                  var observeTime = parseFloat(intersectingObjs[i].dataset.observeTime) + ((new Date()).getTime() - intersectingObjs[i].dataset.observeStart);
                  if (observeTime > thresholdMs) {
                    self.intersectionObserver.unobserve(intersectingObjs[i]);
                    self.intersectionObserver.observe(intersectingObjs[i]);
                  }
                }
              }
            }
          }
          if (shown < observedCollected) {
            setTimeout(arguments.callee, 100)
          }
        };

        if (!self.intersectionObserver) {
          var callback = function(entries) {
            if (!intersectTimeOut) {
              intersectTimeOut = setTimeout(setIntersectingTime, 100);
            }
            var newBlocks = {};
            var newBlocksCount = 0;
            for (var i = 0; i < entries.length; i++) {
              var entry = entries[i];
              if (!entry.target.dataset.i || entry.target.dataset.shown) {
                continue;
              }
              if (entry.target.width + entry.target.height == 0) {
                self.intersectionObserver.unobserve(entry.target);
                (function() {
                    var img = entry.target;
                    setTimeout(function() {
                      self.intersectionObserver.observe(img);
                    }, 100);
                  }
                )();
                continue;
              }
              if (entry.intersectionRatio >= threshold) {
                if (entry.target.dataset.observeStart == 0) {
                  entry.target.dataset.observeStart = (new Date()).getTime()
                } else {
                  observeTime = (new Date()).getTime() - entry.target.dataset.observeStart;
                  entry.target.dataset.observeTime = parseFloat(entry.target.dataset.observeTime) + observeTime;
                }
              } else {
                entry.target.dataset.observeTime = 0;
                entry.target.dataset.observeStart = 0;
              }
              if (entry.target.dataset.observeTime >= thresholdMs) {
                entry.target.dataset.shown = 1;
                self.intersectionObserver.unobserve(entry.target);
                var teaserBlock = self.getParentTeaserBlock(entry.target);
                if (teaserBlock) {
                  var teaserDims = self.utils.getRect(teaserBlock, true);
                  newBlocks[entry.target.dataset.i] = {
                    width: entry.target.width,
                    height: entry.target.height,
                    atf: teaserDims.top < self.utils.getViewportSize().height,
                    align: self.getTeaserAlign(teaserDims),
                    desc: self.isTeaserElementVisible(teaserBlock, 'mcdesc'),
                    price: self.isTeaserElementVisible(teaserBlock, 'mcprice'),
                    domain: self.isTeaserElementVisible(teaserBlock, 'mcdomain')
                  };
                } else {
                  newBlocks[entry.target.dataset.i] = {
                    width: Math.round(entry.target.width),
                    height: Math.round(entry.target.height),
                    desc: false,
                    price: false,
                    domain: false
                  };
                }
                newBlocksCount++;
              }

            }
            if (newBlocksCount) {
              self.prepareCappingData(newBlocks, self.servicerData.cv);
            }
          };
          self.intersectionObserver = new IntersectionObserver(callback, {threshold: [0,threshold,1]});
        }
        var collectObjs = [];
        var collectTimeout = null;
        var collectCallback = function() {
          collectTimeout = null;
          for (var obj = collectObjs.pop(); !!obj; obj = collectObjs.pop()) {
            self.intersectionObserver.observe(obj);
          }
        };
        var intersectionObserverCollect = function(obj) {
          collectObjs.push(obj);
          intersectingObjs.push(obj);
          observedCollected++;
          if (collectTimeout) {
            clearTimeout(collectTimeout)
          }
          if (observedCollected < observeCount) {
            console.log("collectTimeout");
            collectTimeout = setTimeout(collectCallback, 100);
          } else {
            console.log("collectCallback");
            collectCallback()
          }
        };
        (function() {
          var images = self.root.getElementsByTagName('IMG');
          if (images.length) {
            for (var i = 0; i < images.length; i++) {
              if (!images[i].dataset.observing) {
                var res = regex.exec(images[i].src);
                if (!res) {
                  res = regexNewFormat.exec(images[i].src);
                }
                if (!res && images[i].dataset.i) {
                  res = [];
                  res[1] = images[i].dataset.i;
                }
                if (res && res[1]) {
                  images[i].dataset.observeTime = 0;
                  images[i].dataset.observeStart = 0;
                  images[i].dataset.observing = "yes";
                  if (!images[i].dataset.i) {
                    images[i].dataset.i = res[1]
                  }
                  images[i].addEventListener("load", function() {
                    intersectionObserverCollect(this);
                  });
                  images[i].addEventListener("error", function() {
                    intersectionObserverCollect(this);
                  });
                  observeCount++;
                } else {
                  images[i].dataset.observing = "no";
                }
              }
            }
          }
        }())
      } else {
        if (!this.monitorTimeout) {
          (function () {
            var newBlocks = {};
            var viewportSize = self.utils.getViewportSize();
            var images = self.root.getElementsByTagName('IMG');
            for (var i = 0; i < images.length; i++) {
              if (self.isElementInViewport(images[i])) {
                var res = regex.exec(images[i].src);
                if (!res) {
                  res = regexNewFormat.exec(images[i].src);
                }
                if (!res) {
                  if (images[i].dataset.i) {
                    res = [];
                    res[1] = images[i].dataset.i;
                  }
                }
                if (res && res[1] && !self.shownBlocks[res[1]]) {
                  var teaserBlock = self.getParentTeaserBlock(images[i]);
                  var imageRect = self.utils.getRect(images[i], true);
                  if (teaserBlock) {
                    var teaserDims = self.utils.getRect(teaserBlock, true);
                    newBlocks[res[1]] = {
                      width: Math.round(imageRect.width),
                      height: Math.round(imageRect.height),
                      atf: teaserDims.top < viewportSize.height,
                      align: self.getTeaserAlign(teaserDims),
                      desc: self.isTeaserElementVisible(teaserBlock, 'mcdesc'),
                      price: self.isTeaserElementVisible(teaserBlock, 'mcprice'),
                      domain: self.isTeaserElementVisible(teaserBlock, 'mcdomain')
                    };
                  } else {
                    newBlocks[res[1]] = {
                      width: Math.round(imageRect.width),
                      height: Math.round(imageRect.height),
                      desc: false,
                      price: false,
                      domain: false
                    };
                  }
                  self.shownBlocks[res[1]] = 1;
                }
              }
            }
            self.prepareCappingData(newBlocks, "2");
            self.monitorTimeout = setTimeout(arguments.callee, 1000);
          })();
        }
      }
    };

    this.prepareCappingData = function(blocks, pv) {
      var data = [];
      var counter = [];
      var multiCappingData = [];
      var multiCappingCounter = [];
      for (var i in blocks) {
        /** @link http://redmine.dt00.net:3001/projects/docs/wiki/Кеппинг#Клиентская-часть */
        var prefix = blocks[i].width + "|"
          + blocks[i].height + "|"
          + ( (blocks[i].desc ? 1 : 0)
            + (blocks[i].price ? 2 : 0)
            + (blocks[i].domain ? 4 : 0)
            + (blocks[i].atf ? 8 : 0)
            + (blocks[i].align == 'right' ? 16 : 0)
            + (blocks[i].align == 'left' ? 32 : 0)) + "|";
        var showHash = self.teaserHashes[i];
        if (showHash && self.teaserData[showHash]) {
          var type = self.teaserData[showHash]['coopType'];

          if (
            self.teaserData[showHash].ch
            && self.teaserData[showHash].ccid
            && self.teaserData[showHash].cdomain
          ) {
            multiCappingData = self.prepareMultiCappingData(multiCappingData, showHash, prefix, type, pv);
            multiCappingCounter = multiCappingData['counter'];

            if (multiCappingCounter[type][self.teaserData[showHash]['cdomain']] > 20) {
              self.multiSendCappingData(multiCappingData[type]);
              multiCappingData[type] = [];
              multiCappingCounter = [];
            }
          }

          data = self.prepareSingleCappingData(data, showHash, prefix, type, pv);
          counter = data['counter'];

          if (counter[type] > 20) {
            self.sendCappingData(data[type]);
            data[type] = "";
            counter[type] = 0;
          }

          var imp = self.teaserData[showHash]['imp'];
          for(var k in imp) {
            self.sendCustomCounter(imp[k]);
          }
        }
      }

      for (var type in counter) {
        if (counter[type] > 0) {
          self.sendCappingData(data[type]);
        }
      }
      for (var type in multiCappingCounter) {
        if (Object.keys(multiCappingCounter[type]).length > 0) {
          self.multiSendCappingData(multiCappingData[type]);
        }
      }
    };

    this.prepareMultiCappingData = function (multiCappingData, showHash, prefix, type, pv) {
      var cdomain = self.teaserData[showHash]['cdomain'];
      var servicerShowHash = self.teaserData[showHash]['ch'];
      var ccid = self.teaserData[showHash]['ccid'];
      var query = 'pv='+pv;

      if (typeof multiCappingData[type] == "undefined") {
        multiCappingData[type] = [];
        if (typeof multiCappingData['counter'] == "undefined") {
          multiCappingData['counter'] = [];
        }
        if (typeof multiCappingData['counter'][type] == "undefined") {
          multiCappingData['counter'][type] = [];
        }
      }

      if (typeof multiCappingData[type][cdomain] == "undefined") {
        multiCappingData[type][cdomain] = [];
        multiCappingData['counter'][type][cdomain] = 0;
      }

      if (typeof multiCappingData[type][cdomain][ccid] == "undefined") {
        multiCappingData[type][cdomain][ccid] = '';
      }

      query += '&v=' + prefix + servicerShowHash;

      if (pv != "0" && !self.isFirstByType[type + ccid] || !self.isFirstByCid[type + ccid]) {
        query += '&f' + type + "=1";
        self.isFirstByType[type + ccid] = 1;
        self.isFirstByCid[type + ccid] = 1;
      }

      multiCappingData[type][cdomain][ccid] += query;
      multiCappingData['counter'][type][cdomain]++;

      return multiCappingData;
    };

    this.prepareSingleCappingData = function (data, showHash, prefix, type, pv) {
      if (typeof data[type] == 'undefined') {
        data[type] = 'pv='+pv;
        if (typeof data['counter'] == "undefined") {
          data['counter'] = [];
        }
      }

      if (typeof data['counter'][type] == "undefined") {
        data['counter'][type] = 0;
      }

      data[type] += "&v=" + prefix + showHash;

      if (pv != "0" && !self.isFirstByType[type]) {
        data[type] += '&f' + type + "=1";
        self.isFirstByType[type] = 1;
      }

      data['counter'][type]++;

      return data;
    };

    this.multiSendCappingData = function (data) {
      for (var domain in data) {
        for (var cid in data[domain]) {
          var query = data[domain][cid] + '&cid=' + cid;
          self.sendCappingData(query, domain);
        }
      }
    };

    this.sendCappingData = function (dataQuery, domain) {
      var img = document.createElement('IMG');
      var cidPosition =  dataQuery.search('&cid=');
      var ispv2 = dataQuery.search('pv=0&') == -1;

      if (-1 != cidPosition) {
        var cid = dataQuery.substr(cidPosition + 5).split('&')[0];
      }

      if (ispv2) {
        if (typeof self.context._mgwcapping == 'undefined'
          || self.context._mgwcapping.indexOf(self.id.toString()) == -1
          || (typeof cid != "undefined" && self.context._mgwcapping.indexOf(cid.toString()) == -1)) {
          dataQuery = "f=1&" + dataQuery;
        }

        self.context._mgwcapping = self.context._mgwcapping || [];

        if (typeof cid == "undefined") {
          dataQuery += "&cid=" + self.id.toString();
          self.context._mgwcapping.push(self.id.toString());
        } else {
          self.context._mgwcapping.push(cid);
        }
      } else if (typeof cid == "undefined") {
        dataQuery += "&cid=" + self.id.toString();
      }

      if (self.servicerData && self.servicerData.h2) {
        dataQuery += '&h2=' + self.servicerData.h2;
      }
      if (self.servicerData && self.servicerData.rid) {
        dataQuery += '&rid=' + self.servicerData.rid;
      }
      if (self.servicerData && self.servicerData.tt) {
        dataQuery += '&tt=' + self.servicerData.tt;
      }
      if (self.servicerData && self.servicerData.ts) {
        dataQuery += '&ts=' + self.servicerData.ts;
      }
      if (self.context.localStorage) {
        var mgMuidn = self.context.localStorage.getItem('mgMuidn');
        if (typeof (mgMuidn) == "string" && mgMuidn.length > 0 ) {
          dataQuery += '&muid=' + mgMuidn;
        }
      }

      var cappingDomain = self.webProtocol + "//";

      if (typeof domain !== "undefined") {
        cappingDomain += domain;
      } else {
        cappingDomain += "c.marketgid.com";
      }

      dataQuery += '&' + self.getCbusterParameter();
      dataQuery += '&tpl=' + self.templateId;

      img.src = cappingDomain + "/c?" + dataQuery;
    };

    this.isElementInViewport = function(el) {
      var rect = self.utils.getRect(el, false);
      var viewport = self.utils.getViewportSize();
      return (
        rect.height > 0 &&
        rect.width > 0 &&
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= viewport.height &&
        rect.right <= viewport.width
      );
    };

    this.getParentTeaserBlock = function(el) {
      var current = el;
      while (current != self.root && current != self.context) {
        if (current.className.indexOf("mgline") >= 0) {
          return current;
        } else {
          current = current.parentNode;
        }
      }
      return null;
    };

    this.isTeaserElementVisible = function(el, className) {
      self.fixGetElementsByClassNameHandler(el);
      var elements = el.getElementsByClassName(className);
      if (elements.length > 0) {
        var dims = elements[0].getBoundingClientRect();
        if (dims.right - dims == 0 || dims.bottom - dims.top == 0) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    };

    /**
     * Возвращает положение тизера на странице
     * @param teaserDims
     * @returns {*} (left|right|center)
     */
    this.getTeaserAlign = function(teaserDims) {
      var bodyWidth = self.context.document.body.scrollWidth;
      if (teaserDims.right < 0.3 * bodyWidth) {
        return 'left';
      } else if (teaserDims.left >= 0.7 * bodyWidth) {
        return 'right'
      } else {
        return 'center';
      }
    };

    this.sendCustomCounter = function (url) {
      var img = document.createElement('img');
      img.src = url;
    }
  };        this['MarketGidCMonitorBlock605'].call(this['MarketGidInfC605'], this['MarketGidInfC605']);
  this['MarketGidInfC605']['funcBlocks']['Monitor'] = 'MarketGidCMonitorBlock605';


  MarketGidInfC605.init();
  if (typeof MarketGidInfC605.context.MarketGidC605DisableStart == 'undefined') {
    MarketGidInfC605.start();
  }
}
