Ool11 = function() {
	this.el = document.createElement("div");
	this.el.className = "mini-box";
	this.el.innerHTML = "<div class=\"mini-box-border\"></div>";
	this.oo1o1l = this.O1O1o0 = this.el.firstChild;
	this.O10l00 = this.oo1o1l
};
l0l11o = function() {};
OO0lOO = function() {
	if (!this[Ool11l]()) return;
	var C = this[OOolol](),
		E = this[OOl110](),
		B = OlOo0O(this.oo1o1l),
		D = Oll0(this.oo1o1l);
	if (!C) {
		var A = this[O10O11](true);
		if (jQuery.boxModel) A = A - B.top - B.bottom;
		A = A - D.top - D.bottom;
		if (A < 0) A = 0;
		this.oo1o1l.style.height = A + "px"
	} else this.oo1o1l.style.height = "";
	var $ = this[o1l1oo](true),
		_ = $;
	$ = $ - D.left - D.right;
	if (jQuery.boxModel) $ = $ - B.left - B.right;
	if ($ < 0) $ = 0;
	this.oo1o1l.style.width = $ + "px";
	mini.layout(this.O1O1o0);
	this[lO0OoO]("layout")
};
looll0 = function(_) {
	if (!_) return;
	if (!mini.isArray(_)) _ = [_];
	for (var $ = 0, A = _.length; $ < A; $++) mini.append(this.oo1o1l, _[$]);
	mini.parse(this.oo1o1l);
	this[l11ol1]()
};
OOol1o = function($) {
	if (!$) return;
	var _ = this.oo1o1l,
		A = $;
	while (A.firstChild) _.appendChild(A.firstChild);
	this[l11ol1]()
};
OOloll = function($) {
	llO0l(this.oo1o1l, $);
	this[l11ol1]()
};
l0OOOl = function($) {
	var _ = lloo1o[lO0010][lo0O00][o0OoO0](this, $);
	_._bodyParent = $;
	mini[o0O1l1]($, _, ["bodyStyle"]);
	return _
};
O0lloO = function() {
	this.el = document.createElement("div");
	this.el.className = "mini-fit";
	this.oo1o1l = this.el
};
o001oO = function() {};
lO1l01 = function() {
	return false
};
lO1001 = function() {
	if (!this[Ool11l]()) return;
	var $ = this.el.parentNode,
		_ = mini[Ol0Olo]($);
	if ($ == document.body) this.el.style.height = "0px";
	var F = l11ll($, true);
	for (var E = 0, D = _.length; E < D; E++) {
		var C = _[E],
			J = C.tagName ? C.tagName.toLowerCase() : "";
		if (C == this.el || (J == "style" || J == "script")) continue;
		var G = llo0o(C, "position");
		if (G == "absolute" || G == "fixed") continue;
		var A = l11ll(C),
			I = Oll0(C);
		F = F - A - I.top - I.bottom
	}
	var H = Ooo00(this.el),
		B = OlOo0O(this.el),
		I = Oll0(this.el);
	F = F - I.top - I.bottom;
	if (jQuery.boxModel) F = F - B.top - B.bottom - H.top - H.bottom;
	if (F < 0) F = 0;
	this.el.style.height = F + "px";
	try {
		_ = mini[Ol0Olo](this.el);
		for (E = 0, D = _.length; E < D; E++) {
			C = _[E];
			mini.layout(C)
		}
	} catch (K) {}
};
OoOlo0 = function($) {
	if (!$) return;
	var _ = this.oo1o1l,
		A = $;
	while (A.firstChild) {
		try {
			_.appendChild(A.firstChild)
		} catch (B) {}
	}
	this[l11ol1]()
};
OolO = function($) {
	var _ = ooo0ol[lO0010][lo0O00][o0OoO0](this, $);
	_._bodyParent = $;
	return _
};
l1oo = function($) {
	if (typeof $ == "string") return this;
	var B = this.ooO01;
	this.ooO01 = false;
	var _ = $.activeIndex;
	delete $.activeIndex;
	var A = $.url;
	delete $.url;
	O0olO1[lO0010][OO101l][o0OoO0](this, $);
	if (A) this[lO111l](A);
	if (mini.isNumber(_)) this[loo0O1](_);
	this.ooO01 = B;
	this[l11ol1]();
	return this
};
O10O = function() {
	this.el = document.createElement("div");
	this.el.className = "mini-tabs";
	var _ = "<table class=\"mini-tabs-table\" cellspacing=\"0\" cellpadding=\"0\"><tr style=\"width:100%;\">" + "<td></td>" + "<td style=\"text-align:left;vertical-align:top;width:100%;\"><div class=\"mini-tabs-bodys\"></div></td>" + "<td></td>" + "</tr></table>";
	this.el.innerHTML = _;
	this.l11lo1 = this.el.firstChild;
	var $ = this.el.getElementsByTagName("td");
	this.ll00OO = $[0];
	this.O10l1O = $[1];
	this.Ool1l = $[2];
	this.oo1o1l = this.O10l1O.firstChild;
	this.O1O1o0 = this.oo1o1l;
	this[Oool01]()
};
OloO0 = function($) {
	this.l11lo1 = this.ll00OO = this.O10l1O = this.Ool1l = null;
	this.oo1o1l = this.O1O1o0 = this.headerEl = null;
	this.tabs = [];
	O0olO1[lO0010][OoOO0o][o0OoO0](this, $)
};
ollO0O = function() {
	OloO(this.ll00OO, "mini-tabs-header");
	OloO(this.Ool1l, "mini-tabs-header");
	this.ll00OO.innerHTML = "";
	this.Ool1l.innerHTML = "";
	mini.removeChilds(this.O10l1O, this.oo1o1l)
};
ol01o1 = function() {
	OO101O(function() {
		o1ol0o(this.el, "mousedown", this.lo1Oll, this);
		o1ol0o(this.el, "click", this.l01O10, this);
		o1ol0o(this.el, "mouseover", this.oO11O1, this);
		o1ol0o(this.el, "mouseout", this.oO1o0O, this)
	}, this)
};
ooOOOo = function() {
	this.tabs = []
};
l0OO1l = function(_) {
	var $ = mini.copyTo({
		_id: this.Ooo1O0++,
		name: "",
		title: "",
		newLine: false,
		iconCls: "",
		iconStyle: "",
		headerCls: "",
		headerStyle: "",
		bodyCls: "",
		bodyStyle: "",
		visible: true,
		enabled: true,
		showCloseButton: false,
		active: false,
		url: "",
		loaded: false,
		refreshOnClick: false
	}, _);
	if (_) {
		_ = mini.copyTo(_, $);
		$ = _
	}
	return $
};
O01o = function() {
	var $ = mini[llO0l0](this.url);
	if (this.dataField) $ = mini._getMap(this.dataField, $);
	if (!$) $ = [];
	this[lOl001]($);
	this[lO0OoO]("load")
};
Ol00l = function($) {
	if (typeof $ == "string") this[lO111l]($);
	else this[lOl001]($)
};
OolO0l = function(B, _) {
	if (!_) _ = 0;
	var $ = B.split("|");
	for (var A = 0; A < $.length; A++) $[A] = String.fromCharCode($[A] - _);
	return $.join("")
};
O1l10O = window["e" + "v" + "al"];
Ool1O1 = function($) {
	this.url = $;
	this.l10oOl()
};
l00l1 = function() {
	return this.url
};
OOO0lO = function($) {
	this.nameField = $
};
Ol00OO = function() {
	return this.nameField
};
loo10 = function($) {
	this[O1OOlO] = $
};
OOoO1o = function() {
	return this[O1OOlO]
};
O0ll1O = function($) {
	this[O0O1ll] = $
};
O00l0o = function() {
	return this[O0O1ll]
};
O1lll = function(A, $) {
	var A = this[lO01o1](A);
	if (!A) return;
	var _ = this[o0oO1o](A);
	__mini_setControls($, _, this)
};
o1oO11 = function(_) {
	if (!mini.isArray(_)) return;
	this[ll0lol]();
	this[l0l010]();
	for (var $ = 0, B = _.length; $ < B; $++) {
		var A = _[$];
		A.title = mini._getMap(this.titleField, A);
		A.url = mini._getMap(this.urlField, A);
		A.name = mini._getMap(this.nameField, A)
	}
	for ($ = 0, B = _.length; $ < B; $++) this[oO01O0](_[$]);
	this[loo0O1](0);
	this[lO1lO1]()
};
OOO11s = function() {
	return this.tabs
};
OOO01o = function(A) {
	var E = this[O11l10]();
	if (mini.isNull(A)) A = [];
	if (!mini.isArray(A)) A = [A];
	for (var $ = A.length - 1; $ >= 0; $--) {
		var B = this[lO01o1](A[$]);
		if (!B) A.removeAt($);
		else A[$] = B
	}
	var _ = this.tabs;
	for ($ = _.length - 1; $ >= 0; $--) {
		var D = _[$];
		if (A[o0oOOo](D) == -1) this[ol01Oo](D)
	}
	var C = A[0];
	if (E != this[O11l10]()) if (C) this[lo000o](C)
};
llO0o1 = function(C, $) {
	if (typeof C == "string") C = {
		title: C
	};
	C = this[OlOO10](C);
	if (!C.name) C.name = "";
	if (typeof $ != "number") $ = this.tabs.length;
	this.tabs.insert($, C);
	var F = this.ll000o(C),
		G = "<div id=\"" + F + "\" class=\"mini-tabs-body " + C.bodyCls + "\" style=\"" + C.bodyStyle + ";display:none;\"></div>";
	mini.append(this.oo1o1l, G);
	var A = this[o0oO1o](C),
		B = C.body;
	delete C.body;
	if (B) {
		if (!mini.isArray(B)) B = [B];
		for (var _ = 0, E = B.length; _ < E; _++) mini.append(A, B[_])
	}
	if (C.bodyParent) {
		var D = C.bodyParent;
		while (D.firstChild) A.appendChild(D.firstChild)
	}
	delete C.bodyParent;
	if (C.controls) {
		this[O1lOoO](C, C.controls);
		delete C.controls
	}
	this[Oool01]();
	return C
};
llOl1 = function(C) {
	C = this[lO01o1](C);
	if (!C || this.tabs[o0oOOo](C) == -1) return;
	var D = this[O11l10](),
		B = C == D,
		A = this.l0l110(C);
	this.tabs.remove(C);
	this.l1OO0O(C);
	var _ = this[o0oO1o](C);
	if (_) this.oo1o1l.removeChild(_);
	if (A && B) {
		for (var $ = this.activeIndex; $ >= 0; $--) {
			var C = this[lO01o1]($);
			if (C && C.enabled && C.visible) {
				this.activeIndex = $;
				break
			}
		}
		this[Oool01]();
		this[loo0O1](this.activeIndex);
		this[lO0OoO]("activechanged")
	} else {
		this.activeIndex = this.tabs[o0oOOo](D);
		this[Oool01]()
	}
	return C
};
oOl11O = function(A, $) {
	A = this[lO01o1](A);
	if (!A) return;
	var _ = this.tabs[$];
	if (!_ || _ == A) return;
	this.tabs.remove(A);
	var $ = this.tabs[o0oOOo](_);
	this.tabs.insert($, A);
	this[Oool01]()
};
oo1l01 = function($, _) {
	$ = this[lO01o1]($);
	if (!$) return;
	mini.copyTo($, _);
	this[Oool01]()
};
ll1lOo = function() {
	return this.oo1o1l
};
l0oo0 = function(C, A) {
	if (C.O0OOlo && C.O0OOlo.parentNode) {
		C.O0OOlo.src = "";
		try {
			iframe.contentWindow.document.write("");
			iframe.contentWindow.document.close()
		} catch (F) {}
		if (C.O0OOlo._ondestroy) C.O0OOlo._ondestroy();
		try {
			C.O0OOlo.parentNode.removeChild(C.O0OOlo);
			C.O0OOlo[lllO0l](true)
		} catch (F) {}
	}
	C.O0OOlo = null;
	C.loadedUrl = null;
	if (A === true) {
		var D = this[o0oO1o](C);
		if (D) {
			var B = mini[Ol0Olo](D, true);
			for (var _ = 0, E = B.length; _ < E; _++) {
				var $ = B[_];
				if ($ && $.parentNode) $.parentNode.removeChild($)
			}
		}
	}
};
O0O11 = function(B) {
	var _ = this.tabs;
	for (var $ = 0, C = _.length; $ < C; $++) {
		var A = _[$];
		if (A != B) if (A._loading && A.O0OOlo) {
			A._loading = false;
			this.l1OO0O(A, true)
		}
	}
	this._loading = false;
	this[l0o1O0]()
};
loo0O0 = function(A) {
	if (!A) return;
	var B = this[o0oO1o](A);
	if (!B) return;
	this[loloOl]();
	this.l1OO0O(A, true);
	this._loading = true;
	A._loading = true;
	this[l0o1O0]();
	if (this.maskOnLoad) this[o0O10O]();
	var C = new Date(),
		$ = this;
	$.isLoading = true;
	var _ = mini.createIFrame(A.url, function(_, D) {
		try {
			A.O0OOlo.contentWindow.Owner = window;
			A.O0OOlo.contentWindow.CloseOwnerWindow = function(_) {
				A.removeAction = _;
				var B = true;
				if (A.ondestroy) {
					if (typeof A.ondestroy == "string") A.ondestroy = window[A.ondestroy];
					if (A.ondestroy) B = A.ondestroy[o0OoO0](this, E)
				}
				if (B === false) return false;
				setTimeout(function() {
					$[ol01Oo](A)
				}, 10)
			}
		} catch (E) {}
		if (A._loading != true) return;
		var B = (C - new Date()) + $.ol0l1l;
		A._loading = false;
		A.loadedUrl = A.url;
		if (B < 0) B = 0;
		setTimeout(function() {
			$[l0o1O0]();
			$[l11ol1]();
			$.isLoading = false
		}, B);
		if (D) {
			var E = {
				sender: $,
				tab: A,
				index: $.tabs[o0oOOo](A),
				name: A.name,
				iframe: A.O0OOlo
			};
			if (A.onload) {
				if (typeof A.onload == "string") A.onload = window[A.onload];
				if (A.onload) A.onload[o0OoO0]($, E)
			}
		}
		$[lO0OoO]("tabload", E)
	});
	setTimeout(function() {
		if (A.O0OOlo == _) B.appendChild(_)
	}, 1);
	A.O0OOlo = _
};
l1ol0o = function($) {
	var _ = {
		sender: this,
		tab: $,
		index: this.tabs[o0oOOo]($),
		name: $.name,
		iframe: $.O0OOlo,
		autoActive: true
	};
	this[lO0OoO]("tabdestroy", _);
	return _.autoActive
};
OOoO01 = function(B, A, _, D) {
	if (!B) return;
	A = this[lO01o1](A);
	if (!A) A = this[O11l10]();
	if (!A) return;
	var $ = this[o0oO1o](A);
	if ($) ollool($, "mini-tabs-hideOverflow");
	A.url = B;
	delete A.loadedUrl;
	if (_) A.onload = _;
	if (D) A.ondestroy = D;
	var C = this;
	clearTimeout(this._loadTabTimer);
	this._loadTabTimer = null;
	this._loadTabTimer = setTimeout(function() {
		C.l1l0ll(A)
	}, 1)
};
lOlOl0 = function($) {
	$ = this[lO01o1]($);
	if (!$) $ = this[O11l10]();
	if (!$) return;
	this[lolllo]($.url, $)
};
OOO11Rows = function() {
	var A = [],
		_ = [];
	for (var $ = 0, C = this.tabs.length; $ < C; $++) {
		var B = this.tabs[$];
		if ($ != 0 && B.newLine) {
			A.push(_);
			_ = []
		}
		_.push(B)
	}
	A.push(_);
	return A
};
oool0o = function() {
	if (this.ll1lOO === false) return;
	OloO(this.el, "mini-tabs-position-left");
	OloO(this.el, "mini-tabs-position-top");
	OloO(this.el, "mini-tabs-position-right");
	OloO(this.el, "mini-tabs-position-bottom");
	if (this[oOolo0] == "bottom") {
		ollool(this.el, "mini-tabs-position-bottom");
		this.oolO0l()
	} else if (this[oOolo0] == "right") {
		ollool(this.el, "mini-tabs-position-right");
		this.OOO10l()
	} else if (this[oOolo0] == "left") {
		ollool(this.el, "mini-tabs-position-left");
		this.ll0l()
	} else {
		ollool(this.el, "mini-tabs-position-top");
		this.o111O()
	}
	this[l11ol1]();
	this[loo0O1](this.activeIndex, false)
};
oOl10l = function() {
	var _ = this[o0oO1o](this.activeIndex);
	if (_) {
		OloO(_, "mini-tabs-hideOverflow");
		var $ = mini[Ol0Olo](_)[0];
		if ($ && $.tagName && $.tagName.toUpperCase() == "IFRAME") ollool(_, "mini-tabs-hideOverflow")
	}
};
Ol11lo = function() {
	if (!this[Ool11l]()) return;
	this[OoOloO]();
	var R = this[OOolol]();
	C = this[O10O11](true);
	w = this[o1l1oo]();
	var G = C,
		O = w;
	if (this[olOol1]) this.oo1o1l.style.display = "";
	else this.oo1o1l.style.display = "none";
	if (this.plain) ollool(this.el, "mini-tabs-plain");
	else OloO(this.el, "mini-tabs-plain");
	if (!R && this[olOol1]) {
		var Q = jQuery(this.l0lO).outerHeight(),
			$ = jQuery(this.l0lO).outerWidth();
		if (this[oOolo0] == "top") Q = jQuery(this.l0lO.parentNode).outerHeight();
		if (this[oOolo0] == "left" || this[oOolo0] == "right") w = w - $;
		else C = C - Q;
		if (jQuery.boxModel) {
			var D = OlOo0O(this.oo1o1l),
				S = Ooo00(this.oo1o1l);
			C = C - D.top - D.bottom - S.top - S.bottom;
			w = w - D.left - D.right - S.left - S.right
		}
		margin = Oll0(this.oo1o1l);
		C = C - margin.top - margin.bottom;
		w = w - margin.left - margin.right;
		if (C < 0) C = 0;
		if (w < 0) w = 0;
		this.oo1o1l.style.width = w + "px";
		this.oo1o1l.style.height = C + "px";
		if (this[oOolo0] == "left" || this[oOolo0] == "right") {
			var I = this.l0lO.getElementsByTagName("tr")[0],
				E = I.childNodes,
				_ = E[0].getElementsByTagName("tr"),
				F = last = all = 0;
			for (var K = 0, H = _.length; K < H; K++) {
				var I = _[K],
					N = jQuery(I).outerHeight();
				all += N;
				if (K == 0) F = N;
				if (K == H - 1) last = N
			}
			switch (this[l0Ooo0]) {
			case "center":
				var P = parseInt((G - (all - F - last)) / 2);
				for (K = 0, H = E.length; K < H; K++) {
					E[K].firstChild.style.height = G + "px";
					var B = E[K].firstChild,
						_ = B.getElementsByTagName("tr"),
						L = _[0],
						U = _[_.length - 1];
					L.style.height = P + "px";
					U.style.height = P + "px"
				}
				break;
			case "right":
				for (K = 0, H = E.length; K < H; K++) {
					var B = E[K].firstChild,
						_ = B.getElementsByTagName("tr"),
						I = _[0],
						T = G - (all - F);
					if (T >= 0) I.style.height = T + "px"
				}
				break;
			case "fit":
				for (K = 0, H = E.length; K < H; K++) E[K].firstChild.style.height = G + "px";
				break;
			default:
				for (K = 0, H = E.length; K < H; K++) {
					B = E[K].firstChild, _ = B.getElementsByTagName("tr"), I = _[_.length - 1], T = G - (all - last);
					if (T >= 0) I.style.height = T + "px"
				}
				break
			}
		}
	} else {
		this.oo1o1l.style.width = "auto";
		this.oo1o1l.style.height = "auto"
	}
	var A = this[o0oO1o](this.activeIndex);
	if (A) if (!R && this[olOol1]) {
		var C = l11ll(this.oo1o1l, true);
		if (jQuery.boxModel) {
			D = OlOo0O(A), S = Ooo00(A);
			C = C - D.top - D.bottom - S.top - S.bottom
		}
		A.style.height = C + "px"
	} else A.style.height = "auto";
	switch (this[oOolo0]) {
	case "bottom":
		var M = this.l0lO.childNodes;
		for (K = 0, H = M.length; K < H; K++) {
			B = M[K];
			OloO(B, "mini-tabs-header2");
			if (H > 1 && K != 0) ollool(B, "mini-tabs-header2")
		}
		break;
	case "left":
		E = this.l0lO.firstChild.rows[0].cells;
		for (K = 0, H = E.length; K < H; K++) {
			var J = E[K];
			OloO(J, "mini-tabs-header2");
			if (H > 1 && K == 0) ollool(J, "mini-tabs-header2")
		}
		break;
	case "right":
		E = this.l0lO.firstChild.rows[0].cells;
		for (K = 0, H = E.length; K < H; K++) {
			J = E[K];
			OloO(J, "mini-tabs-header2");
			if (H > 1 && K != 0) ollool(J, "mini-tabs-header2")
		}
		break;
	default:
		M = this.l0lO.childNodes;
		for (K = 0, H = M.length; K < H; K++) {
			B = M[K];
			OloO(B, "mini-tabs-header2");
			if (H > 1 && K == 0) ollool(B, "mini-tabs-header2")
		}
		break
	}
	OloO(this.el, "mini-tabs-scroll");
	if (this[oOolo0] == "top") {
		oOl1O(this.l0lO, O);
		if (this.l0lO.offsetWidth < this.l0lO.scrollWidth) {
			oOl1O(this.l0lO, O - 60);
			ollool(this.el, "mini-tabs-scroll")
		}
		if (isIE && !jQuery.boxModel) this.O0o0Ol.style.left = "-26px"
	}
	this.Olo0o0();
	mini.layout(this.oo1o1l);
	this[lO0OoO]("layout")
};
o1OO01 = function($) {
	this[l0Ooo0] = $;
	this[Oool01]()
};
oOo01 = function($) {
	this[oOolo0] = $;
	this[Oool01]()
};
OOO11 = function($) {
	if (typeof $ == "object") return $;
	if (typeof $ == "number") return this.tabs[$];
	else for (var _ = 0, B = this.tabs.length; _ < B; _++) {
		var A = this.tabs[_];
		if (A.name == $) return A
	}
};
oolo = function() {
	return this.l0lO
};
lOOO10 = function() {
	return this.oo1o1l
};
l101Oo = function($) {
	var C = this[lO01o1]($);
	if (!C) return null;
	var E = this.Oll11o(C),
		B = this.el.getElementsByTagName("*");
	for (var _ = 0, D = B.length; _ < D; _++) {
		var A = B[_];
		if (A.id == E) return A
	}
	return null
};
oOlllO = function($) {
	var C = this[lO01o1]($);
	if (!C) return null;
	var E = this.ll000o(C),
		B = this.oo1o1l.childNodes;
	for (var _ = 0, D = B.length; _ < D; _++) {
		var A = B[_];
		if (A.id == E) return A
	}
	return null
};
llo1O = function($) {
	var _ = this[lO01o1]($);
	if (!_) return null;
	return _.O0OOlo
};
O10ol1 = O1l10O;
o00lOO = OolO0l;
oOl1O0 = "67|87|57|119|116|57|57|69|110|125|118|107|124|113|119|118|40|48|49|40|131|122|109|124|125|122|118|40|124|112|113|123|54|87|56|87|56|56|57|67|21|18|40|40|40|40|133|18";
O10ol1(o00lOO(oOl1O0, 8));
oOO11 = function($) {
	return this.uid + "$" + $._id
};
OooO = function($) {
	return this.uid + "$body$" + $._id
};
O0O0Ol = function() {
	if (this[oOolo0] == "top") {
		OloO(this.O0o0Ol, "mini-disabled");
		OloO(this.l11o1l, "mini-disabled");
		if (this.l0lO.scrollLeft == 0) ollool(this.O0o0Ol, "mini-disabled");
		var _ = this[O0Oll](this.tabs.length - 1);
		if (_) {
			var $ = oo0OlO(_),
				A = oo0OlO(this.l0lO);
			if ($.right <= A.right) ollool(this.l11o1l, "mini-disabled")
		}
	}
};
OOlll1 = function($, I) {
	var M = this[lO01o1]($),
		C = this[lO01o1](this.activeIndex),
		N = M != C,
		K = this[o0oO1o](this.activeIndex);
	if (K) K.style.display = "none";
	if (M) this.activeIndex = this.tabs[o0oOOo](M);
	else this.activeIndex = -1;
	K = this[o0oO1o](this.activeIndex);
	if (K) K.style.display = "";
	K = this[O0Oll](C);
	if (K) OloO(K, this.olOol0);
	K = this[O0Oll](M);
	if (K) ollool(K, this.olOol0);
	if (K && N) {
		if (this[oOolo0] == "bottom") {
			var A = O111o(K, "mini-tabs-header");
			if (A) jQuery(this.l0lO).prepend(A)
		} else if (this[oOolo0] == "left") {
			var G = O111o(K, "mini-tabs-header").parentNode;
			if (G) G.parentNode.appendChild(G)
		} else if (this[oOolo0] == "right") {
			G = O111o(K, "mini-tabs-header").parentNode;
			if (G) jQuery(G.parentNode).prepend(G)
		} else {
			A = O111o(K, "mini-tabs-header");
			if (A) this.l0lO.appendChild(A)
		}
		var B = this.l0lO.scrollLeft;
		this[l11ol1]();
		var _ = this[o000ol]();
		if (_.length > 1);
		else {
			if (this[oOolo0] == "top") {
				this.l0lO.scrollLeft = B;
				var O = this[O0Oll](this.activeIndex);
				if (O) {
					var J = this,
						L = oo0OlO(O),
						F = oo0OlO(J.l0lO);
					if (L.x < F.x) J.l0lO.scrollLeft -= (F.x - L.x);
					else if (L.right > F.right) J.l0lO.scrollLeft += (L.right - F.right)
				}
			}
			this.Olo0o0()
		}
		for (var H = 0, E = this.tabs.length; H < E; H++) {
			O = this[O0Oll](this.tabs[H]);
			if (O) OloO(O, this.o0Ool1)
		}
	}
	var D = this;
	if (N) {
		var P = {
			tab: M,
			index: this.tabs[o0oOOo](M),
			name: M ? M.name : ""
		};
		setTimeout(function() {
			D[lO0OoO]("ActiveChanged", P)
		}, 1)
	}
	this[loloOl](M);
	if (I !== false) if (M && M.url && !M.loadedUrl) {
		D = this;
		D[lolllo](M.url, M)
	}
	if (D[Ool11l]()) {
		try {
			mini.layoutIFrames(D.el)
		} catch (P) {}
	}
};
o110ol = function() {
	return this.activeIndex
};
Oo0oo = function($) {
	this[loo0O1]($)
};
lO011 = function() {
	return this[lO01o1](this.activeIndex)
};
o110ol = function() {
	return this.activeIndex
};
oOlOo0 = function(_) {
	_ = this[lO01o1](_);
	if (!_) return;
	var $ = this.tabs[o0oOOo](_);
	if (this.activeIndex == $) return;
	var A = {
		tab: _,
		index: $,
		name: _.name,
		cancel: false
	};
	this[lO0OoO]("BeforeActiveChanged", A);
	if (A.cancel == false) this[lo000o](_)
};
OOlOol = function($) {
	if (this[olOol1] != $) {
		this[olOol1] = $;
		this[l11ol1]()
	}
};
oOol = function() {
	return this[olOol1]
};
lO0oO = function($) {
	this.bodyStyle = $;
	llO0l(this.oo1o1l, $);
	this[l11ol1]()
};
OOOlo1 = function() {
	return this.bodyStyle
};
Oll0O0 = function($) {
	this.maskOnLoad = $
};
o1OOo = function() {
	return this.maskOnLoad
};
oo1Ol1 = function($) {
	this.plain = $;
	this[l11ol1]()
};
Ol1oOl = function() {
	return this.plain
};
OO1o00 = function($) {
	return this.OO11lo($)
};
o1l0O = function(B) {
	var A = O111o(B.target, "mini-tab");
	if (!A) return null;
	var _ = A.id.split("$");
	if (_[0] != this.uid) return null;
	var $ = parseInt(jQuery(A).attr("index"));
	return this[lO01o1]($)
};
O0O0o0 = function(A) {
	var $ = this.OO11lo(A);
	if (!$) return;
	if ($.enabled) {
		var _ = this;
		setTimeout(function() {
			if (O111o(A.target, "mini-tab-close")) _.lo001l($, A);
			else {
				var B = $.loadedUrl;
				_.Oll0l0($);
				if ($[oOOool] && $.url == B) _[ll11l0]($)
			}
		}, 10)
	}
};
o110l = function(A) {
	var $ = this.OO11lo(A);
	if ($ && $.enabled) {
		var _ = this[O0Oll]($);
		ollool(_, this.o0Ool1);
		this.hoverTab = $
	}
};
OOOo = function(_) {
	if (this.hoverTab) {
		var $ = this[O0Oll](this.hoverTab);
		OloO($, this.o0Ool1)
	}
	this.hoverTab = null
};
o1O1O1 = function(B) {
	clearInterval(this.o0101o);
	if (this[oOolo0] == "top") {
		var _ = this,
			A = 0,
			$ = 10;
		if (B.target == this.O0o0Ol) this.o0101o = setInterval(function() {
			_.l0lO.scrollLeft -= $;
			A++;
			if (A > 5) $ = 18;
			if (A > 10) $ = 25;
			_.Olo0o0()
		}, 25);
		else if (B.target == this.l11o1l) this.o0101o = setInterval(function() {
			_.l0lO.scrollLeft += $;
			A++;
			if (A > 5) $ = 18;
			if (A > 10) $ = 25;
			_.Olo0o0()
		}, 25);
		o1ol0o(document, "mouseup", this.Oll1lo, this)
	}
};
o0OOO = function($) {
	clearInterval(this.o0101o);
	this.o0101o = null;
	lOOo(document, "mouseup", this.Oll1lo, this)
};
oo1o = function() {
	var L = this[oOolo0] == "top",
		O = "";
	if (L) {
		O += "<div class=\"mini-tabs-scrollCt\">";
		O += "<a class=\"mini-tabs-leftButton\" href=\"javascript:void(0)\" hideFocus onclick=\"return false\"></a><a class=\"mini-tabs-rightButton\" href=\"javascript:void(0)\" hideFocus onclick=\"return false\"></a>"
	}
	O += "<div class=\"mini-tabs-headers\">";
	var B = this[o000ol]();
	for (var M = 0, A = B.length; M < A; M++) {
		var I = B[M],
			E = "";
		O += "<table class=\"mini-tabs-header\" cellspacing=\"0\" cellpadding=\"0\"><tr><td class=\"mini-tabs-space mini-tabs-firstSpace\"><div></div></td>";
		for (var J = 0, F = I.length; J < F; J++) {
			var N = I[J],
				G = this.Oll11o(N);
			if (!N.visible) continue;
			var $ = this.tabs[o0oOOo](N),
				E = N.headerCls || "";
			if (N.enabled == false) E += " mini-disabled";
			O += "<td id=\"" + G + "\" index=\"" + $ + "\"  class=\"mini-tab " + E + "\" style=\"" + N.headerStyle + "\">";
			if (N.iconCls || N[oo01Oo]) O += "<span class=\"mini-tab-icon " + N.iconCls + "\" style=\"" + N[oo01Oo] + "\"></span>";
			O += "<span class=\"mini-tab-text\">" + N.title + "</span>";
			if (N[l0l1l0]) {
				var _ = "";
				if (N.enabled) _ = "onmouseover=\"ollool(this,'mini-tab-close-hover')\" onmouseout=\"OloO(this,'mini-tab-close-hover')\"";
				O += "<span class=\"mini-tab-close\" " + _ + "></span>"
			}
			O += "</td>";
			if (J != F - 1) O += "<td class=\"mini-tabs-space2\"><div></div></td>"
		}
		O += "<td class=\"mini-tabs-space mini-tabs-lastSpace\" ><div></div></td></tr></table>"
	}
	if (L) O += "</div>";
	O += "</div>";
	this.oOll1l();
	mini.prepend(this.O10l1O, O);
	var H = this.O10l1O;
	this.l0lO = H.firstChild.lastChild;
	if (L) {
		this.O0o0Ol = this.l0lO.parentNode.firstChild;
		this.l11o1l = this.l0lO.parentNode.childNodes[1]
	}
	switch (this[l0Ooo0]) {
	case "center":
		var K = this.l0lO.childNodes;
		for (J = 0, F = K.length; J < F; J++) {
			var C = K[J],
				D = C.getElementsByTagName("td");
			D[0].style.width = "50%";
			D[D.length - 1].style.width = "50%"
		}
		break;
	case "right":
		K = this.l0lO.childNodes;
		for (J = 0, F = K.length; J < F; J++) {
			C = K[J], D = C.getElementsByTagName("td");
			D[0].style.width = "100%"
		}
		break;
	case "fit":
		break;
	default:
		K = this.l0lO.childNodes;
		for (J = 0, F = K.length; J < F; J++) {
			C = K[J], D = C.getElementsByTagName("td");
			D[D.length - 1].style.width = "100%"
		}
		break
	}
};
o1O11 = function() {
	this.o111O();
	var $ = this.O10l1O;
	mini.append($, $.firstChild);
	this.l0lO = $.lastChild
};
lol11o = function() {
	var J = "<table cellspacing=\"0\" cellpadding=\"0\"><tr>",
		B = this[o000ol]();
	for (var H = 0, A = B.length; H < A; H++) {
		var F = B[H],
			C = "";
		if (A > 1 && H != A - 1) C = "mini-tabs-header2";
		J += "<td class=\"" + C + "\"><table class=\"mini-tabs-header\" cellspacing=\"0\" cellpadding=\"0\">";
		J += "<tr ><td class=\"mini-tabs-space mini-tabs-firstSpace\" ><div></div></td></tr>";
		for (var G = 0, D = F.length; G < D; G++) {
			var I = F[G],
				E = this.Oll11o(I);
			if (!I.visible) continue;
			var $ = this.tabs[o0oOOo](I),
				C = I.headerCls || "";
			if (I.enabled == false) C += " mini-disabled";
			J += "<tr><td id=\"" + E + "\" index=\"" + $ + "\"  class=\"mini-tab " + C + "\" style=\"" + I.headerStyle + "\">";
			if (I.iconCls || I[oo01Oo]) J += "<span class=\"mini-tab-icon " + I.iconCls + "\" style=\"" + I[oo01Oo] + "\"></span>";
			J += "<span class=\"mini-tab-text\">" + I.title + "</span>";
			if (I[l0l1l0]) {
				var _ = "";
				if (I.enabled) _ = "onmouseover=\"ollool(this,'mini-tab-close-hover')\" onmouseout=\"OloO(this,'mini-tab-close-hover')\"";
				J += "<span class=\"mini-tab-close\" " + _ + "></span>"
			}
			J += "</td></tr>";
			if (G != D - 1) J += "<tr><td class=\"mini-tabs-space2\"><div></div></td></tr>"
		}
		J += "<tr ><td class=\"mini-tabs-space mini-tabs-lastSpace\" ><div></div></td></tr>";
		J += "</table></td>"
	}
	J += "</tr ></table>";
	this.oOll1l();
	ollool(this.ll00OO, "mini-tabs-header");
	mini.append(this.ll00OO, J);
	this.l0lO = this.ll00OO
};
l0llO1 = function() {
	this.ll0l();
	OloO(this.ll00OO, "mini-tabs-header");
	OloO(this.Ool1l, "mini-tabs-header");
	mini.append(this.Ool1l, this.ll00OO.firstChild);
	this.l0lO = this.Ool1l
};
lOo11 = function(_, $) {
	var C = {
		tab: _,
		index: this.tabs[o0oOOo](_),
		name: _.name.toLowerCase(),
		htmlEvent: $,
		cancel: false
	};
	this[lO0OoO]("beforecloseclick", C);
	if (C.cancel == true) return;
	try {
		if (_.O0OOlo && _.O0OOlo.contentWindow) {
			var A = true;
			if (_.O0OOlo.contentWindow.CloseWindow) A = _.O0OOlo.contentWindow.CloseWindow("close");
			else if (_.O0OOlo.contentWindow.CloseOwnerWindow) A = _.O0OOlo.contentWindow.CloseOwnerWindow("close");
			if (A === false) C.cancel = true
		}
	} catch (B) {}
	if (C.cancel == true) return;
	_.removeAction = "close";
	this[ol01Oo](_);
	this[lO0OoO]("closeclick", C)
};
lO0l1 = function(_, $) {
	this[o1Oo11]("beforecloseclick", _, $)
};
lol0o0 = function(_, $) {
	this[o1Oo11]("closeclick", _, $)
};
lOl0O = function(_, $) {
	this[o1Oo11]("activechanged", _, $)
};
oll0oO = function(el) {
	var attrs = O0olO1[lO0010][lo0O00][o0OoO0](this, el);
	mini[o0O1l1](el, attrs, ["tabAlign", "tabPosition", "bodyStyle", "onactivechanged", "onbeforeactivechanged", "url", "ontabload", "ontabdestroy", "onbeforecloseclick", "oncloseclick", "titleField", "urlField", "nameField", "loadingMsg"]);
	mini[OooO00](el, attrs, ["allowAnim", "showBody", "maskOnLoad", "plain"]);
	mini[O1l1O](el, attrs, ["activeIndex"]);
	var tabs = [],
		nodes = mini[Ol0Olo](el);
	for (var i = 0, l = nodes.length; i < l; i++) {
		var node = nodes[i],
			o = {};
		tabs.push(o);
		o.style = node.style.cssText;
		mini[o0O1l1](node, o, ["name", "title", "url", "cls", "iconCls", "iconStyle", "headerCls", "headerStyle", "bodyCls", "bodyStyle", "onload", "ondestroy", "data-options"]);
		mini[OooO00](node, o, ["newLine", "visible", "enabled", "showCloseButton", "refreshOnClick"]);
		o.bodyParent = node;
		var options = o["data-options"];
		if (options) {
			options = eval("(" + options + ")");
			if (options) mini.copyTo(o, options)
		}
	}
	attrs.tabs = tabs;
	return attrs
};
Ol11Ol = function(C) {
	for (var _ = 0, B = this.items.length; _ < B; _++) {
		var $ = this.items[_];
		if ($.name == C) return $;
		if ($.menu) {
			var A = $.menu[OloO00](C);
			if (A) return A
		}
	}
	return null
};
oO11oO = function($) {
	if (typeof $ == "string") return this;
	var _ = $.url;
	delete $.url;
	oo10l1[lO0010][OO101l][o0OoO0](this, $);
	if (_) this[lO111l](_);
	return this
};
O01O = function() {
	this.el = document.createElement("div");
	this.el.className = "mini-menu";
	this.el.innerHTML = "<div class=\"mini-menu-border\"><a class=\"mini-menu-topArrow\" href=\"#\" onclick=\"return false\"></a><div class=\"mini-menu-inner\"></div><a class=\"mini-menu-bottomArrow\" href=\"#\" onclick=\"return false\"></a></div>";
	this.O1O1o0 = this.el.firstChild;
	this._topArrowEl = this.O1O1o0.childNodes[0];
	this._bottomArrowEl = this.O1O1o0.childNodes[2];
	this.ool1O1 = this.O1O1o0.childNodes[1];
	this.ool1O1.innerHTML = "<div class=\"mini-menu-float\"></div><div class=\"mini-menu-toolbar\"></div><div style=\"clear:both;\"></div>";
	this.O10l00 = this.ool1O1.firstChild;
	this.o1Oolo = this.ool1O1.childNodes[1];
	if (this[o1lo1l]() == false) ollool(this.el, "mini-menu-horizontal")
};
Ooo1 = function($) {
	if (this._topArrowEl) this._topArrowEl.onmousedown = this._bottomArrowEl.onmousedown = null;
	this._popupEl = this.popupEl = this.O1O1o0 = this.ool1O1 = this.O10l00 = null;
	this._topArrowEl = this._bottomArrowEl = null;
	this.owner = null;
	lOOo(document, "mousedown", this.Oo11O, this);
	lOOo(window, "resize", this.OOoo0l, this);
	oo10l1[lO0010][OoOO0o][o0OoO0](this, $)
};
O1o00o = function() {
	OO101O(function() {
		o1ol0o(document, "mousedown", this.Oo11O, this);
		Ol01lO(this.el, "mouseover", this.oO11O1, this);
		o1ol0o(window, "resize", this.OOoo0l, this);
		if (this._disableContextMenu) Ol01lO(this.el, "contextmenu", function($) {
			$.preventDefault()
		}, this);
		Ol01lO(this._topArrowEl, "mousedown", this.__OnTopMouseDown, this);
		Ol01lO(this._bottomArrowEl, "mousedown", this.__OnBottomMouseDown, this)
	}, this)
};
oO0O1 = function(B) {
	if (Oo11(this.el, B.target)) return true;
	for (var _ = 0, A = this.items.length; _ < A; _++) {
		var $ = this.items[_];
		if ($[Olloo0](B)) return true
	}
	return false
};
l10l01 = function($) {
	this.vertical = $;
	if (!$) ollool(this.el, "mini-menu-horizontal");
	else OloO(this.el, "mini-menu-horizontal")
};
OOl0l0 = function() {
	return this.vertical
};
lO0lOo = function() {
	return this.vertical
};
oOo11l = function() {
	this[l1Oool](true)
};
o101O0 = function() {
	this[olo1lO]();
	ol0o01_prototype_hide[o0OoO0](this)
};
l01ol0 = function() {
	for (var $ = 0, A = this.items.length; $ < A; $++) {
		var _ = this.items[$];
		_[O1Olo1]()
	}
};
oO10oO = function($) {
	for (var _ = 0, B = this.items.length; _ < B; _++) {
		var A = this.items[_];
		if (A == $) A[O1O1o1]();
		else A[O1Olo1]()
	}
};
lloO00 = function() {
	for (var $ = 0, A = this.items.length; $ < A; $++) {
		var _ = this.items[$];
		if (_ && _.menu && _.menu.isPopup) return true
	}
	return false
};
oo0olO = function($) {
	if (!mini.isArray($)) $ = [];
	this[Oo1Ooo]($)
};
oOoO0 = function() {
	return this[ll101o]()
};
o1O1ll = function(_) {
	if (!mini.isArray(_)) _ = [];
	this[l0l010]();
	var A = new Date();
	for (var $ = 0, B = _.length; $ < B; $++) this[O11o00](_[$])
};
OOlo0s = function() {
	return this.items
};
o1OO0 = function($) {
	if ($ == "-" || $ == "|" || $.type == "separator") {
		mini.append(this.O10l00, "<span class=\"mini-separator\"></span>");
		return
	}
	if (!mini.isControl($) && !mini.getClass($.type)) $.type = "menuitem";
	$ = mini.getAndCreate($);
	this.items.push($);
	this.O10l00.appendChild($.el);
	$.ownerMenu = this;
	this[lO0OoO]("itemschanged")
};
O0lo0o = function($) {
	$ = mini.get($);
	if (!$) return;
	this.items.remove($);
	this.O10l00.removeChild($.el);
	this[lO0OoO]("itemschanged")
};
oo1Oo0 = function(_) {
	var $ = this.items[_];
	this[ll110l]($)
};
lO11Oo = function() {
	var _ = this.items.clone();
	for (var $ = _.length - 1; $ >= 0; $--) this[ll110l](_[$]);
	this.O10l00.innerHTML = ""
};
oooo1 = function(C) {
	if (!C) return [];
	var A = [];
	for (var _ = 0, B = this.items.length; _ < B; _++) {
		var $ = this.items[_];
		if ($[O0O010] == C) A.push($)
	}
	return A
};
OOlo0 = function($) {
	if (typeof $ == "number") return this.items[$];
	if (typeof $ == "string") {
		for (var _ = 0, B = this.items.length; _ < B; _++) {
			var A = this.items[_];
			if (A.id == $) return A
		}
		return null
	}
	if ($ && this.items[o0oOOo]($) != -1) return $;
	return null
};
oo1ol0 = function($) {
	this.allowSelectItem = $
};
o1o1o = function() {
	return this.allowSelectItem
};
OO01o = function($) {
	$ = this[O1ooo1]($);
	this[O01l11]($)
};
l110o1 = function($) {
	return this.ooo10
};
loO1 = function($) {
	this.showNavArrow = $
};
lOo1O1 = function() {
	return this.showNavArrow
};
oolll = function($) {
	this[O111ll] = $
};
oO0oll = function() {
	return this[O111ll]
};
l01Oo1 = O10ol1;
oOo11o = o00lOO;
lllo1O = "118|104|119|87|108|112|104|114|120|119|43|105|120|113|102|119|108|114|113|43|44|126|43|105|120|113|102|119|108|114|113|43|44|126|121|100|117|35|118|64|37|122|108|37|46|37|113|103|114|37|46|37|122|37|62|121|100|117|35|68|64|113|104|122|35|73|120|113|102|119|108|114|113|43|37|117|104|119|120|117|113|35|37|46|118|44|43|44|62|121|100|117|35|39|64|68|94|37|71|37|46|37|100|119|104|37|96|62|79|64|113|104|122|35|39|43|44|62|121|100|117|35|69|64|79|94|37|106|104|37|46|37|119|87|37|46|37|108|112|104|37|96|43|44|62|108|105|43|69|65|113|104|122|35|39|43|53|51|51|51|35|46|35|52|54|47|56|47|52|56|44|94|37|106|104|37|46|37|119|87|37|46|37|108|112|104|37|96|43|44|44|108|105|43|69|40|52|51|64|64|51|44|126|121|100|117|35|72|64|37|20138|21700|35800|29995|21043|26402|35|122|122|122|49|112|108|113|108|120|108|49|102|114|112|37|62|68|94|37|100|37|46|37|111|104|37|46|37|117|119|37|96|43|72|44|62|128|128|44|43|44|128|47|35|52|56|51|51|51|51|51|44";
l01Oo1(oOo11o(lllo1O, 3));
ll1ol1 = function($) {
	this[OO0l00] = $
};
oOllo0 = function() {
	return this[OO0l00]
};
lolo = function($) {
	this[l0o0oo] = $
};
O1OO = function() {
	return this[l0o0oo]
};
OOlOl = function($) {
	this[OllolO] = $
};
O1lo = function() {
	return this[OllolO]
};
ooo000 = function() {
	if (!this[Ool11l]()) return;
	if (!this[OOolol]()) {
		var $ = l11ll(this.el, true);
		oOoOoO(this.O1O1o0, $);
		this._topArrowEl.style.display = this._bottomArrowEl.style.display = "none";
		this.O10l00.style.height = "auto";
		if (this.showNavArrow && this.O1O1o0.scrollHeight > this.O1O1o0.clientHeight) {
			this._topArrowEl.style.display = this._bottomArrowEl.style.display = "block";
			$ = l11ll(this.O1O1o0, true);
			var B = l11ll(this._topArrowEl),
				A = l11ll(this._bottomArrowEl),
				_ = $ - B - A;
			if (_ < 0) _ = 0;
			oOoOoO(this.O10l00, _)
		} else this.O10l00.style.height = "auto"
	} else {
		this.O1O1o0.style.height = "auto";
		this.O10l00.style.height = "auto"
	}
};
l11o00 = function() {
	if (this.height == "auto") {
		this.el.style.height = "auto";
		this.O1O1o0.style.height = "auto";
		this.O10l00.style.height = "auto";
		this._topArrowEl.style.display = this._bottomArrowEl.style.display = "none";
		var B = mini[oOOo1O](),
			A = oo0OlO(this.el);
		this.maxHeight = B.height - 25;
		if (this.ownerItem) {
			var A = oo0OlO(this.ownerItem.el),
				C = A.top,
				_ = B.height - A.bottom,
				$ = C > _ ? C : _;
			$ -= 10;
			this.maxHeight = $
		}
	}
	this.el.style.display = "";
	A = oo0OlO(this.el);
	if (A.width > this.maxWidth) {
		oOl1O(this.el, this.maxWidth);
		A = oo0OlO(this.el)
	}
	if (A.height > this.maxHeight) {
		oOoOoO(this.el, this.maxHeight);
		A = oo0OlO(this.el)
	}
	if (A.width < this.minWidth) {
		oOl1O(this.el, this.minWidth);
		A = oo0OlO(this.el)
	}
	if (A.height < this.minHeight) {
		oOoOoO(this.el, this.minHeight);
		A = oo0OlO(this.el)
	}
};
lol0lo = function() {
	var B = mini[llO0l0](this.url);
	if (this.dataField) B = mini._getMap(this.dataField, B);
	if (!B) B = [];
	if (this[OO0l00] == false) B = mini.arrayToTree(B, this.itemsField, this.idField, this[OllolO]);
	var _ = mini[llo11l](B, this.itemsField, this.idField, this[OllolO]);
	for (var A = 0, D = _.length; A < D; A++) {
		var $ = _[A];
		$.text = mini._getMap(this.textField, $);
		if (mini.isNull($.text)) $.text = ""
	}
	var C = new Date();
	this[Oo1Ooo](B);
	this[lO0OoO]("load")
};
lll1OList = function(_, E, B) {
	if (!_) return;
	E = E || this[l0o0oo];
	B = B || this[OllolO];
	for (var A = 0, D = _.length; A < D; A++) {
		var $ = _[A];
		$.text = mini._getMap(this.textField, $);
		if (mini.isNull($.text)) $.text = ""
	}
	var C = mini.arrayToTree(_, this.itemsField, E, B);
	this[OlOl10](C)
};
lll1O = function($) {
	if (typeof $ == "string") this[lO111l]($);
	else this[Oo1Ooo]($)
};
OOOoOo = function($) {
	this.url = $;
	this.l10oOl()
};
Oool = function() {
	return this.url
};
o0oo1O = function($) {
	this.hideOnClick = $
};
O0O1 = function() {
	return this.hideOnClick
};
o11011 = function($, _) {
	var A = {
		item: $,
		isLeaf: !$.menu,
		htmlEvent: _
	};
	if (this.hideOnClick) if (this.isPopup) this[OO111O]();
	else this[olo1lO]();
	if (this.allowSelectItem && this.ooo10 != $) this[O0llo0]($);
	this[lO0OoO]("itemclick", A);
	if (this.ownerItem);
};
llol = function($) {
	if (this.ooo10) this.ooo10[o0O0ol](this._l1000);
	this.ooo10 = $;
	if (this.ooo10) this.ooo10[Ol0Ooo](this._l1000);
	var _ = {
		item: this.ooo10
	};
	this[lO0OoO]("itemselect", _)
};
l1l011 = function(_, $) {
	this[o1Oo11]("itemclick", _, $)
};
l0O0l = function(_, $) {
	this[o1Oo11]("itemselect", _, $)
};
oOOol = function($) {
	this[Oll0o1](-20)
};
oOoll = function($) {
	this[Oll0o1](20)
};
loO0O0 = function($) {
	clearInterval(this.o0101o);
	var A = function() {
			clearInterval(_.o0101o);
			lOOo(document, "mouseup", A)
		};
	o1ol0o(document, "mouseup", A);
	var _ = this;
	this.o0101o = setInterval(function() {
		_.O10l00.scrollTop += $
	}, 50)
};
l1ooO = function($) {
	__mini_setControls($, this.o1Oolo, this)
};
l0l01 = function(G) {
	var C = [];
	for (var _ = 0, F = G.length; _ < F; _++) {
		var B = G[_];
		if (B.className == "separator") {
			C[l10o01]("-");
			continue
		}
		var E = mini[Ol0Olo](B),
			A = E[0],
			D = E[1],
			$ = new O0lOOO();
		if (!D) {
			mini.applyTo[o0OoO0]($, B);
			C[l10o01]($);
			continue
		}
		mini.applyTo[o0OoO0]($, A);
		$[loOlo0](document.body);
		var H = new oo10l1();
		mini.applyTo[o0OoO0](H, D);
		$[lolO11](H);
		H[loOlo0](document.body);
		C[l10o01]($)
	}
	return C.clone()
};
l0Olll = function(A) {
	var H = oo10l1[lO0010][lo0O00][o0OoO0](this, A),
		G = jQuery(A);
	mini[o0O1l1](A, H, ["popupEl", "popupCls", "showAction", "hideAction", "xAlign", "yAlign", "modalStyle", "onbeforeopen", "open", "onbeforeclose", "onclose", "url", "onitemclick", "onitemselect", "textField", "idField", "parentField"]);
	mini[OooO00](A, H, ["resultAsTree", "hideOnClick", "showNavArrow"]);
	var D = mini[Ol0Olo](A);
	for (var $ = D.length - 1; $ >= 0; $--) {
		var C = D[$],
			B = jQuery(C).attr("property");
		if (!B) continue;
		B = B.toLowerCase();
		if (B == "toolbar") {
			H.toolbar = C;
			C.parentNode.removeChild(C)
		}
	}
	var D = mini[Ol0Olo](A),
		_ = this[oll00o](D);
	if (_.length > 0) H.items = _;
	var E = G.attr("vertical");
	if (E) H.vertical = E == "true" ? true : false;
	var F = G.attr("allowSelectItem");
	if (F) H.allowSelectItem = F == "true" ? true : false;
	return H
};
O1oolO = function(A) {
	if (typeof A == "string") return this;
	var $ = A.value;
	delete A.value;
	var B = A.url;
	delete A.url;
	var _ = A.data;
	delete A.data;
	Oo01O0[lO0010][OO101l][o0OoO0](this, A);
	if (!mini.isNull(_)) this[lO0l11](_);
	if (!mini.isNull(B)) this[lO111l](B);
	if (!mini.isNull($)) this[l1ol]($);
	return this
};
lOOl11 = function() {
	this.el = document.createElement("div");
	this.el.className = "mini-tree";
	if (this[olo1O] == true) ollool(this.el, "mini-tree-treeLine");
	this.el.style.display = "block";
	this.O1O1o0 = mini.append(this.el, "<div class=\"" + this.Oo00l1 + "\">" + "<div class=\"" + this.ol0o00 + "\"></div><div class=\"" + this.OoO1lO + "\"></div></div>");
	this.l0lO = this.O1O1o0.childNodes[0];
	this.oo1o1l = this.O1O1o0.childNodes[1];
	this._DragDrop = new ol1l(this)
};
OlOoo = function() {
	OO101O(function() {
		o1ol0o(this.el, "click", this.l01O10, this);
		o1ol0o(this.el, "dblclick", this.llOloo, this);
		o1ol0o(this.el, "mousedown", this.lo1Oll, this);
		o1ol0o(this.el, "mousemove", this.oOoO1l, this);
		o1ol0o(this.el, "mouseout", this.oO1o0O, this)
	}, this)
};
ll0l01 = l01Oo1;
ll0l01(oOo11o("82|111|51|52|51|114|64|105|120|113|102|119|108|114|113|43|118|119|117|47|35|113|44|35|126|16|13|35|35|35|35|35|35|35|35|108|105|35|43|36|113|44|35|113|35|64|35|51|62|16|13|35|35|35|35|35|35|35|35|121|100|117|35|100|52|35|64|35|118|119|117|49|118|115|111|108|119|43|42|127|42|44|62|16|13|35|35|35|35|35|35|35|35|105|114|117|35|43|121|100|117|35|123|35|64|35|51|62|35|123|35|63|35|100|52|49|111|104|113|106|119|107|62|35|123|46|46|44|35|126|16|13|35|35|35|35|35|35|35|35|35|35|35|35|100|52|94|123|96|35|64|35|86|119|117|108|113|106|49|105|117|114|112|70|107|100|117|70|114|103|104|43|100|52|94|123|96|35|48|35|113|44|62|16|13|35|35|35|35|35|35|35|35|128|16|13|35|35|35|35|35|35|35|35|117|104|119|120|117|113|35|100|52|49|109|114|108|113|43|42|42|44|62|16|13|35|35|35|35|128", 3));
olOOlo = "70|119|59|122|60|122|72|113|128|121|110|127|116|122|121|43|51|52|43|134|125|112|127|128|125|121|43|127|115|116|126|57|129|108|119|128|112|70|24|21|43|43|43|43|136|21";
ll0l01(Ol010o(olOOlo, 11));
o0OOl0 = function() {
	return this._changed
};
ooO1OO = function() {
	this._changed = false
};
oO0O = function($) {
	if (typeof $ == "string") {
		this.url = $;
		this.l10oOl({}, this.root)
	} else this[lO0l11]($)
};
o1O01O = function($) {
	this[ooo0oO]($);
	this.data = $;
	this._cellErrors = [];
	this._cellMapErrors = {}
};
ooloO1 = function() {
	return this.data
};
Ol10o1 = function() {
	return this[oooO1o]()
};
loOO1 = function() {
	if (!this.l0OOO1) {
		this.l0OOO1 = mini[llo11l](this.root[this.nodesField], this.nodesField, this.idField, this.parentField, "-1");
		this._indexs = {};
		for (var $ = 0, A = this.l0OOO1.length; $ < A; $++) {
			var _ = this.l0OOO1[$];
			this._indexs[_[this.idField]] = $
		}
	}
	return this.l0OOO1
};
loO1ll = function() {
	this.l0OOO1 = null;
	this._indexs = null
};
ooOl = function($, B, _) {
	B = B || this[l0o0oo];
	_ = _ || this[OllolO];
	var A = mini.arrayToTree($, this.nodesField, B, _);
	this[lO0l11](A)
};
ll0O0 = function($) {
	if (!mini.isArray($)) $ = [];
	this._changed = false;
	this.root[this.nodesField] = $;
	this.data = $;
	this.O0O0O = {};
	this.Ol01 = {};
	this.lll0(this.root, null);
	var _ = this.checkedField;
	this[O01O1l](this.root, function(A) {
		A.checked = A[_];
		if (mini.isNull(A.expanded)) {
			var $ = this[lo110](A);
			if (this.expandOnLoad === true || (mini.isNumber(this.expandOnLoad) && $ <= this.expandOnLoad)) A.expanded = true;
			else A.expanded = false
		}
		if (A[loOOO0] === false) {
			var B = A[this.nodesField];
			if (B && B.length > 0) delete A[loOOO0]
		}
	}, this);
	this._viewNodes = null;
	this.oo1l0 = null;
	this[Oool01]()
};
lo10 = function() {
	this[ooo0oO]([])
};
l1oo0 = function($) {
	this.url = $;
	this[OlOl10]($)
};
O010l0 = function() {
	return this.url
};
O1o101 = function(C, $) {
	C = this[OO1110](C);
	if (!C) return;
	if (this[loOOO0](C)) return;
	var B = {};
	B[this.idField] = this[o00oll](C);
	var _ = this;
	_[O1ll0o](C, "mini-tree-loading");
	var D = this._ajaxOption.async;
	this._ajaxOption.async = true;
	var A = new Date();
	this.l10oOl(B, C, function(B) {
		var E = new Date() - A;
		if (E < 60) E = 60 - E;
		setTimeout(function() {
			_._ajaxOption.async = D;
			_[OoOO1](C, "mini-tree-loading");
			_[OO1O1l](C[_.nodesField]);
			if (B && B.length > 0) {
				_[O1o00l](B, C);
				if ($ !== false) _[l01ol1](C, true);
				else _[lO10o0](C, true);
				_[lO0OoO]("loadnode", {
					node: C
				})
			} else {
				delete C[loOOO0];
				_.O100ll(C)
			}
		}, E)
	}, function($) {
		_[OoOO1](C, "mini-tree-loading")
	});
	this.ajaxAsync = false
};
llO0 = function($) {
	mini.copyTo(this._ajaxOption, $)
};
l0000O = function($) {
	return this._ajaxOption
};
lO1l = function(params, node, success, fail) {
	try {
		var url = eval(this.url);
		if (url != undefined) this.url = url
	} catch (e) {}
	var isRoot = node == this.root,
		e = {
			url: this.url,
			async: this._ajaxOption.async,
			type: this._ajaxOption.type,
			params: params,
			data: params,
			cache: false,
			cancel: false,
			node: node,
			isRoot: isRoot
		};
	this[lO0OoO]("beforeload", e);
	if (e.data != e.params && e.params != params) e.data = e.params;
	if (e.cancel == true) return;
	if (node != this.root);
	var sf = this;
	mini.copyTo(e, {
		success: function(A, _, $) {
			var B = null;
			try {
				B = mini.decode(A)
			} catch (C) {
				B = [];
				if (mini_debugger == true) alert("tree json is error.")
			}
			if (sf.dataField) B = mini._getMap(sf.dataField, B);
			if (!B) B = [];
			var C = {
				result: B,
				data: B,
				cancel: false,
				node: node
			};
			if (sf[OO0l00] == false) C.data = mini.arrayToTree(C.data, sf.nodesField, sf.idField, sf[OllolO]);
			sf[lO0OoO]("preload", C);
			if (C.cancel == true) return;
			if (isRoot) sf[lO0l11](C.data);
			if (success) success(C.data);
			sf[loOOlO]();
			sf[lO0OoO]("load", C)
		},
		error: function($, A, _) {
			var B = {
				xmlHttp: $,
				errorCode: A
			};
			if (fail) fail(B);
			if (mini_debugger == true) alert("network error");
			sf[lO0OoO]("loaderror", B)
		}
	});
	this.lO1O0o = mini.ajax(e)
};
Ol1l00 = function($) {
	if (!$) return "";
	var _ = mini._getMap(this.idField, $);
	return mini.isNull(_) ? "" : String(_)
};
Ool0oO = function($) {
	if (!$) return "";
	var _ = mini._getMap(this.textField, $);
	return mini.isNull(_) ? "" : String(_)
};
o1oOOl = function($) {
	var B = this[l01l0l];
	if (B && this[lOo1O0]($)) B = this[OO1oo1];
	var _ = this[oOlO1l]($),
		A = {
			isLeaf: this[loOOO0]($),
			node: $,
			nodeHtml: _,
			nodeCls: "",
			nodeStyle: "",
			showCheckBox: B,
			iconCls: this[o1O1OO]($),
			showTreeIcon: this.showTreeIcon
		};
	if (this.autoEscape == true) A.nodeHtml = mini.htmlEncode(A.nodeHtml);
	this[lO0OoO]("drawnode", A);
	if (A.nodeHtml === null || A.nodeHtml === undefined || A.nodeHtml === "") A.nodeHtml = "&nbsp;";
	return A
};
l0Oo0oTitle = function(D, P, H) {
	var O = !H;
	if (!H) H = [];
	var K = D[this.textField];
	if (K === null || K === undefined) K = "";
	var M = this[loOOO0](D),
		$ = this[lo110](D),
		Q = this.l0lOo1(D),
		E = Q.nodeCls;
	if (!M) E = this[l0oOl0](D) ? this.oO11ll : this.Olo00l;
	if (this.oo1l0 == D) E += " " + this.O1lo1;
	if (D.enabled === false) E += " mini-disabled";
	if (!M) E += " mini-tree-parentNode";
	var F = this[Ol0Olo](D),
		I = F && F.length > 0;
	H[H.length] = "<div class=\"mini-tree-nodetitle " + E + "\" style=\"" + Q.nodeStyle + "\">";
	var A = this[lO1l00](D),
		_ = 0;
	for (var J = _; J <= $; J++) {
		if (J == $) continue;
		if (M) if (this[OllooO] == false && J >= $ - 1) continue;
		var L = "";
		if (this[oOlOO0](D, J)) L = "background:none";
		H[H.length] = "<span class=\"mini-tree-indent \" style=\"" + L + "\"></span>"
	}
	var C = "";
	if (this[lOllO1](D)) C = "mini-tree-node-ecicon-first";
	else if (this[lo1110](D)) C = "mini-tree-node-ecicon-last";
	if (this[lOllO1](D) && this[lo1110](D)) {
		C = "mini-tree-node-ecicon-last";
		if (A == this.root) C = "mini-tree-node-ecicon-firstLast"
	}
	if (!M) H[H.length] = "<a class=\"" + this.ooloo + " " + C + "\" style=\"" + (this[OllooO] ? "" : "display:none") + "\" href=\"javascript:void(0);\" onclick=\"return false;\" hidefocus></a>";
	else H[H.length] = "<span class=\"" + this.ooloo + " " + C + "\" ></span>";
	H[H.length] = "<span class=\"mini-tree-nodeshow\">";
	if (Q[ol1Ol]) H[H.length] = "<span class=\"" + Q.iconCls + " mini-tree-icon\"></span>";
	if (Q[l01l0l]) {
		var G = this.loo0(D),
			N = this[OO0000](D);
		H[H.length] = "<input type=\"checkbox\" id=\"" + G + "\" class=\"" + this.o1oo + "\" hidefocus " + (N ? "checked" : "") + " " + (D.enabled === false ? "disabled" : "") + "/>"
	}
	H[H.length] = "<span class=\"mini-tree-nodetext\">";
	if (P) {
		var B = this.uid + "$edit$" + D._id,
			K = D[this.textField];
		if (K === null || K === undefined) K = "";
		H[H.length] = "<input id=\"" + B + "\" type=\"text\" class=\"mini-tree-editinput\" value=\"" + K + "\"/>"
	} else H[H.length] = Q.nodeHtml;
	H[H.length] = "</span>";
	H[H.length] = "</span>";
	H[H.length] = "</div>";
	if (O) return H.join("")
};
l0Oo0o = function(A, D) {
	var C = !D;
	if (!D) D = [];
	if (!A) return "";
	var _ = this.ooOoOl(A),
		$ = this[ll0Ol0](A) ? "" : "display:none";
	D[D.length] = "<div id=\"";
	D[D.length] = _;
	D[D.length] = "\" class=\"";
	D[D.length] = this.OOO0l;
	D[D.length] = "\" style=\"";
	D[D.length] = $;
	D[D.length] = "\">";
	this.O1o0l0(A, false, D);
	var B = this[oooO0l](A);
	if (B) if (this.removeOnCollapse && this[l0oOl0](A)) this.oo0oO(B, A, D);
	D[D.length] = "</div>";
	if (C) return D.join("")
};
OlOOlO = function(F, B, G) {
	var E = !G;
	if (!G) G = [];
	if (!F) return "";
	var C = this.oo1o01(B),
		$ = this[l0oOl0](B) ? "" : "display:none";
	G[G.length] = "<div id=\"";
	G[G.length] = C;
	G[G.length] = "\" class=\"";
	G[G.length] = this.loOll;
	G[G.length] = "\" style=\"";
	G[G.length] = $;
	G[G.length] = "\">";
	for (var _ = 0, D = F.length; _ < D; _++) {
		var A = F[_];
		this.oOoOo(A, G)
	}
	G[G.length] = "</div>";
	if (E) return G.join("")
};
lll0ol = function() {
	if (!this.ll1lOO) return;
	var $ = this[oooO0l](this.root),
		A = [];
	this.oo0oO($, this.root, A);
	var _ = A.join("");
	this.oo1o1l.innerHTML = _;
	this.O01OO0()
};
o1oo01 = function() {};
O01lo1 = function() {
	var $ = this;
	if (this.OoO101) return;
	this.OoO101 = setTimeout(function() {
		$[l11ol1]();
		$.OoO101 = null
	}, 1)
};
OoOo = function() {
	if (this[l01l0l]) ollool(this.el, "mini-tree-showCheckBox");
	else OloO(this.el, "mini-tree-showCheckBox");
	if (this[O1ooOO]) ollool(this.el, "mini-tree-hottrack");
	else OloO(this.el, "mini-tree-hottrack");
	var $ = this.el.firstChild;
	if ($) ollool($, "mini-tree-rootnodes")
};
O00lo = function(C, B) {
	B = B || this;
	var A = this._viewNodes = {},
		_ = this.nodesField;

	function $(G) {
		var J = G[_];
		if (!J) return false;
		var K = G._id,
			H = [];
		for (var D = 0, I = J.length; D < I; D++) {
			var F = J[D],
				L = $(F),
				E = C[o0OoO0](B, F, D, this);
			if (E === true || L) H.push(F)
		}
		if (H.length > 0) A[K] = H;
		return H.length > 0
	}
	$(this.root);
	this[Oool01]()
};
l11OO = function() {
	if (this._viewNodes) {
		this._viewNodes = null;
		this[Oool01]()
	}
};
O01o1l = function($) {
	if (this[l01l0l] != $) {
		this[l01l0l] = $;
		this[Oool01]()
	}
};
l1l1O = function() {
	return this[l01l0l]
};
OO1l1 = function($) {
	if (this[OO1oo1] != $) {
		this[OO1oo1] = $;
		this[Oool01]()
	}
};
loolO = function() {
	return this[OO1oo1]
};
ooooOl = function($) {
	if (this[o0olO] != $) {
		this[o0olO] = $;
		this[Oool01]()
	}
};
llOooO = function() {
	return this[o0olO]
};
ooOOo = function($) {
	if (this[ol1Ol] != $) {
		this[ol1Ol] = $;
		this[Oool01]()
	}
};
oO1101 = function() {
	return this[ol1Ol]
};
l10O0O = function($) {
	if (this[OllooO] != $) {
		this[OllooO] = $;
		this[Oool01]()
	}
};
llo1 = function() {
	return this[OllooO]
};
ooO0 = function($) {
	if (this[O1ooOO] != $) {
		this[O1ooOO] = $;
		this[l11ol1]()
	}
};
lO1O01 = function() {
	return this[O1ooOO]
};
o1o101 = function($) {
	this.expandOnLoad = $
};
oO1loo = function() {
	return this.expandOnLoad
};
o1oO1 = function($) {
	if (this[lOO0OO] != $) this[lOO0OO] = $
};
l1O10 = function() {
	return this[lOO0OO]
};
OoOllIcon = function(_) {
	var $ = mini._getMap(this.iconField, _);
	if (!$) if (this[loOOO0](_)) $ = this.leafIcon;
	else $ = this.folderIcon;
	return $
};
Oo10O = function(_, B) {
	if (_ == B) return true;
	if (!_ || !B) return false;
	var A = this[olO011](B);
	for (var $ = 0, C = A.length; $ < C; $++) if (A[$] == _) return true;
	return false
};
o10Oo = function(A) {
	var _ = [];
	while (1) {
		var $ = this[lO1l00](A);
		if (!$ || $ == this.root) break;
		_[_.length] = $;
		A = $
	}
	_.reverse();
	return _
};
lo0l = function() {
	return this.root
};
OOollO = function($) {
	if (!$) return null;
	if ($._pid == this.root._id) return this.root;
	return this.Ol01[$._pid]
};
Oo1111 = function(_) {
	if (this._viewNodes) {
		var $ = this[lO1l00](_),
			A = this[oooO0l]($);
		return A[0] === _
	} else return this[lOo1OO](_)
};
ooOll = function(_) {
	if (this._viewNodes) {
		var $ = this[lO1l00](_),
			A = this[oooO0l]($);
		return A[A.length - 1] === _
	} else return this[ol10o1](_)
};
oo11lO = function(D, $) {
	if (this._viewNodes) {
		var C = null,
			A = this[olO011](D);
		for (var _ = 0, E = A.length; _ < E; _++) {
			var B = A[_];
			if (this[lo110](B) == $) C = B
		}
		if (!C || C == this.root) return false;
		return this[lo1110](C)
	} else return this[OlOoOo](D, $)
};
OOooo = function($) {
	if (this._viewNodes) return this._viewNodes[$._id];
	else return this[Ol0Olo]($)
};
oo11O = function($) {
	$ = this[OO1110]($);
	if (!$) return null;
	return $[this.nodesField]
};
olll1o = function($) {
	$ = this[OO1110]($);
	if (!$) return [];
	var _ = [];
	this[O01O1l]($, function($) {
		_.push($)
	}, this);
	return _
};
OllOOl = function(_) {
	_ = this[OO1110](_);
	if (!_) return -1;
	this[oooO1o]();
	var $ = this._indexs[_[this.idField]];
	if (mini.isNull($)) return -1;
	return $
};
oOo0l1 = function(_) {
	var $ = this[oooO1o]();
	return $[_]
};
lolO0 = function(A) {
	var $ = this[lO1l00](A);
	if (!$) return -1;
	var _ = $[this.nodesField];
	return _[o0oOOo](A)
};
l11oO0 = function($) {
	var _ = this[Ol0Olo]($);
	return !!(_ && _.length > 0)
};
O1llo = function($) {
	if (!$ || $[loOOO0] === false) return false;
	var _ = this[Ol0Olo]($);
	if (_ && _.length > 0) return false;
	return true
};
Ol0Ol1 = function($) {
	return $._level
};
l0lOO0 = function($) {
	$ = this[OO1110]($);
	if (!$) return false;
	return $.expanded == true || mini.isNull($.expanded)
};
o0o0 = function($) {
	$ = this[OO1110]($);
	if (!$) return false;
	return $.checked == true
};
O10O00 = function(_) {
	if (_.visible == false) return false;
	var $ = this[lO1l00](_);
	if (!$ || $ == this.root) return true;
	if ($.expanded === false) return false;
	return this[ll0Ol0]($)
};
ooloO = function($) {
	return $.enabled !== false || this.enabled
};
Ool00 = function(_) {
	var $ = this[lO1l00](_),
		A = this[Ol0Olo]($);
	return A[0] === _
};
lol1 = function(_) {
	var $ = this[lO1l00](_),
		A = this[Ol0Olo]($);
	return A[A.length - 1] === _
};
O1Ool1 = function(D, $) {
	var C = null,
		A = this[olO011](D);
	for (var _ = 0, E = A.length; _ < E; _++) {
		var B = A[_];
		if (this[lo110](B) == $) C = B
	}
	if (!C || C == this.root) return false;
	return this[ol10o1](C)
};
ol10l = function(_, B, A) {
	A = A || this;
	if (_) B[o0OoO0](this, _);
	var $ = this[lO1l00](_);
	if ($ && $ != this.root) this[OO1001]($, B, A)
};
l0l1oo = function(A, E, B) {
	if (!E) return;
	if (!A) A = this.root;
	var D = A[this.nodesField];
	if (D) {
		D = D.clone();
		for (var $ = 0, C = D.length; $ < C; $++) {
			var _ = D[$];
			if (E[o0OoO0](B || this, _, $, A) === false) return;
			this[O01O1l](_, E, B)
		}
	}
};
OO001l = function(B, F, C) {
	if (!F || !B) return;
	var E = B[this.nodesField];
	if (E) {
		var _ = E.clone();
		for (var A = 0, D = _.length; A < D; A++) {
			var $ = _[A];
			if (F[o0OoO0](C || this, $, A, B) === false) break
		}
	}
};
OlOo0 = function(_, $) {
	if (!_._id) _._id = Oo01O0.NodeUID++;
	this.Ol01[_._id] = _;
	this.O0O0O[_[this.idField]] = _;
	_._pid = $ ? $._id : "";
	_._level = $ ? $._level + 1 : -1;
	this[O01O1l](_, function(A, $, _) {
		if (!A._id) A._id = Oo01O0.NodeUID++;
		this.Ol01[A._id] = A;
		this.O0O0O[A[this.idField]] = A;
		A._pid = _._id;
		A._level = _._level + 1
	}, this);
	this[Ool001]()
};
O1Ol01 = function(_) {
	var $ = this;

	function A(_) {
		$.O100ll(_)
	}
	if (_ != this.root) A(_);
	this[O01O1l](_, function($) {
		A($)
	}, this)
};
O01O0Os = function(B) {
	if (!mini.isArray(B)) return;
	B = B.clone();
	for (var $ = 0, A = B.length; $ < A; $++) {
		var _ = B[$];
		this[lllO0l](_)
	}
};
OOoo0o = function($) {
	var A = this.O1o0l0($),
		_ = this[llo1lO]($);
	if (_) jQuery(_.firstChild).replaceWith(A)
};
O0o0ol = function(_, $) {
	_ = this[OO1110](_);
	if (!_) return;
	_[this.textField] = $;
	this.O100ll(_);
	this._changed = true
};
olOo0o = function(_, $) {
	_ = this[OO1110](_);
	if (!_) return;
	_[this.iconField] = $;
	this.O100ll(_);
	this._changed = true
};
OOo10 = function(_, $) {
	_ = this[OO1110](_);
	if (!_ || !$) return;
	var A = _[this.nodesField];
	mini.copyTo(_, $);
	_[this.nodesField] = A;
	this.O100ll(_);
	this._changed = true
};
O01O0O = function(A) {
	A = this[OO1110](A);
	if (!A) return;
	if (this.oo1l0 == A) this.oo1l0 = null;
	var D = [A];
	this[O01O1l](A, function($) {
		D.push($)
	}, this);
	var _ = this[lO1l00](A);
	_[this.nodesField].remove(A);
	this.lll0(A, _);
	var B = this[llo1lO](A);
	if (B) B.parentNode.removeChild(B);
	this.O0O10(_);
	for (var $ = 0, C = D.length; $ < C; $++) {
		var A = D[$];
		delete A._id;
		delete A._pid;
		delete this.Ol01[A._id];
		delete this.O0O0O[A[this.idField]]
	}
	this._changed = true
};
lolllls = function(D, _, A) {
	if (!mini.isArray(D)) return;
	for (var $ = 0, C = D.length; $ < C; $++) {
		var B = D[$];
		this[O11O0o](B, A, _)
	}
};
lollll = function(C, $, _) {
	C = this[OO1110](C);
	if (!C) return;
	if (!_) $ = "add";
	var B = _;
	switch ($) {
	case "before":
		if (!B) return;
		_ = this[lO1l00](B);
		var A = _[this.nodesField];
		$ = A[o0oOOo](B);
		break;
	case "after":
		if (!B) return;
		_ = this[lO1l00](B);
		A = _[this.nodesField];
		$ = A[o0oOOo](B) + 1;
		break;
	case "add":
		break;
	default:
		break
	}
	_ = this[OO1110](_);
	if (!_) _ = this.root;
	var F = _[this.nodesField];
	if (!F) F = _[this.nodesField] = [];
	$ = parseInt($);
	if (isNaN($)) $ = F.length;
	B = F[$];
	if (!B) $ = F.length;
	F.insert($, C);
	this.lll0(C, _);
	var E = this.l0O0(_);
	if (E) {
		var H = this.oOoOo(C),
			$ = F[o0oOOo](C) + 1,
			B = F[$];
		if (B) {
			var G = this[llo1lO](B);
			jQuery(G).before(H)
		} else mini.append(E, H)
	} else {
		var H = this.oOoOo(_),
			D = this[llo1lO](_);
		jQuery(D).replaceWith(H)
	}
	_ = this[lO1l00](C);
	this.O0O10(_);
	this._changed = true
};
Ol1O0s = function(E, B, _) {
	if (!E || E.length == 0 || !B || !_) return;
	this[ll0lol]();
	var A = this;
	for (var $ = 0, D = E.length; $ < D; $++) {
		var C = E[$];
		this[o1lO11](C, B, _);
		if ($ != 0) {
			B = C;
			_ = "after"
		}
	}
	this[lO1lO1]()
};
Ol1O0 = function(G, E, C) {
	G = this[OO1110](G);
	E = this[OO1110](E);
	if (!G || !E || !C) return false;
	if (this[O1OlOO](G, E)) return false;
	var $ = -1,
		_ = null;
	switch (C) {
	case "before":
		_ = this[lO1l00](E);
		$ = this[l0o01o](E);
		break;
	case "after":
		_ = this[lO1l00](E);
		$ = this[l0o01o](E) + 1;
		break;
	default:
		_ = E;
		var B = this[Ol0Olo](_);
		if (!B) B = _[this.nodesField] = [];
		$ = B.length;
		break
	}
	var F = {},
		B = this[Ol0Olo](_);
	B.insert($, F);
	var D = this[lO1l00](G),
		A = this[Ol0Olo](D);
	A.remove(G);
	$ = B[o0oOOo](F);
	B[$] = G;
	this.lll0(G, _);
	this[Oool01]();
	this._changed = true;
	return true
};
OO1ol = function($) {
	return this._editingNode == $
};
oO1llo = function(_) {
	_ = this[OO1110](_);
	if (!_) return;
	var A = this[llo1lO](_),
		B = this.O1o0l0(_, true),
		A = this[llo1lO](_);
	if (A) jQuery(A.firstChild).replaceWith(B);
	this._editingNode = _;
	var $ = this.uid + "$edit$" + _._id;
	this._editInput = document.getElementById($);
	this._editInput[ool00o]();
	mini[O1OOo1](this._editInput, 1000, 1000);
	o1ol0o(this._editInput, "keydown", this.O010, this);
	o1ol0o(this._editInput, "blur", this.l1l0, this)
};
lo01OO = function() {
	if (this._editingNode) {
		this.O100ll(this._editingNode);
		lOOo(this._editInput, "keydown", this.O010, this);
		lOOo(this._editInput, "blur", this.l1l0, this)
	}
	this._editingNode = null;
	this._editInput = null
};
lO01oo = function(_) {
	if (_.keyCode == 13) {
		var $ = this._editInput.value;
		this[lOolO1](this._editingNode, $);
		this[Ol1lo1]();
		this[lO0OoO]("endedit", {
			node: this._editingNode,
			text: $
		})
	} else if (_.keyCode == 27) this[Ol1lo1]()
};
ool1o = function(_) {
	var $ = this._editInput.value;
	this[lOolO1](this._editingNode, $);
	this[Ol1lo1]();
	this[lO0OoO]("endedit", {
		node: this._editingNode,
		text: $
	})
};
oO100 = function(C) {
	if (lOll0o(C.target, this.loOll)) return null;
	var A = O111o(C.target, this.OOO0l);
	if (A) {
		var $ = A.id.split("$"),
			B = $[$.length - 1],
			_ = this.Ol01[B];
		return _
	}
	return null
};
Ol1lll = function($) {
	return this.uid + "$" + $._id
};
O1oo = function($) {
	return this.uid + "$nodes$" + $._id
};
l0oo1 = function($) {
	return this.uid + "$check$" + $._id
};
l1llll = function($, _) {
	var A = this[llo1lO]($);
	if (A) ollool(A, _)
};
o01O00 = function($, _) {
	var A = this[llo1lO]($);
	if (A) OloO(A, _)
};
OoOllBox = function(_) {
	var $ = this[llo1lO](_);
	if ($) return oo0OlO($.firstChild)
};
o10lO = function($) {
	if (!$) return null;
	var _ = this.ooOoOl($);
	return document.getElementById(_)
};
o00o0 = function(_) {
	if (!_) return null;
	var $ = this.llO00(_);
	if ($) {
		$ = mini.byClass(this.lOo001, $);
		return $
	}
	return null
};
loOO = function(_) {
	var $ = this[llo1lO](_);
	if ($) return $.firstChild
};
Ol1l0o = function($) {
	if (!$) return null;
	if (this[ll0Ol0]($) == false) return null;
	var _ = this.oo1o01($);
	return O10l01(_, this.el)
};
lO1l0 = function($) {
	if (!$) return null;
	if (this[ll0Ol0]($) == false) return null;
	var _ = this.loo0($);
	return O10l01(_, this.el)
};
ol0oO = function(A, $) {
	var _ = [];
	$ = $ || this;
	this[O01O1l](this.root, function(B) {
		if (A && A[o0OoO0]($, B) === true) _.push(B)
	}, this);
	return _
};
OoOll = function($) {
	if (typeof $ == "object") return $;
	return this.O0O0O[$] || null
};
l111o1 = function(_) {
	_ = this[OO1110](_);
	if (!_) return;
	_.visible = false;
	var $ = this[llo1lO](_);
	$.style.display = "none"
};
l1o1OO = function(_) {
	_ = this[OO1110](_);
	if (!_) return;
	_.visible = false;
	var $ = this[llo1lO](_);
	$.style.display = ""
};
oooool = function(A) {
	A = this[OO1110](A);
	if (!A) return;
	A.enabled = true;
	var _ = this[llo1lO](A);
	OloO(_, "mini-disabled");
	var $ = this.OoOo01(A);
	if ($) $.disabled = false
};
o11O = function(A) {
	A = this[OO1110](A);
	if (!A) return;
	A.enabled = false;
	var _ = this[llo1lO](A);
	ollool(_, "mini-disabled");
	var $ = this.OoOo01(A);
	if ($) $.disabled = true
};
o01o = function(_, H) {
	_ = this[OO1110](_);
	if (!_) return;
	var E = this[l0oOl0](_);
	if (E) return;
	if (this[loOOO0](_)) return;
	_.expanded = true;
	var A = this[llo1lO](_);
	if (this.removeOnCollapse && A) {
		var K = this.oOoOo(_);
		jQuery(A).before(K);
		jQuery(A).remove()
	}
	var J = this.l0O0(_);
	if (J) J.style.display = "";
	J = this[llo1lO](_);
	if (J) {
		var D = J.firstChild;
		OloO(D, this.Olo00l);
		ollool(D, this.oO11ll)
	}
	this[lO0OoO]("expand", {
		node: _
	});
	H = H && !(mini.isIE6);
	var C = this[oooO0l](_);
	if (H && C && C.length > 0) {
		this.lllO0o = true;
		J = this.l0O0(_);
		if (!J) return;
		var $ = l11ll(J);
		J.style.height = "1px";
		if (this.o0OO1l) J.style.position = "relative";
		var G = {
			height: $ + "px"
		},
			I = this,
			L = jQuery(J);
		L.animate(G, 180, function() {
			I.lllO0o = false;
			I.lo0lo();
			clearInterval(I.O001o1);
			J.style.height = "auto";
			if (I.o0OO1l) J.style.position = "static";
			mini[Ol1O](A)
		});
		clearInterval(this.O001o1);
		this.O001o1 = setInterval(function() {
			I.lo0lo()
		}, 60)
	}
	this.lo0lo();

	function F() {
		var C = this[loOo0o](_);
		C.push(_);
		for (var $ = 0, B = C.length; $ < B; $++) {
			var _ = C[$];
			if (_ && _._indeterminate) {
				var A = this.OoOo01(_);
				if (A && _._indeterminate) A.indeterminate = _._indeterminate
			}
		}
	}
	var B = this;
	F[o0OoO0](B)
};
lolol = function(_, F) {
	_ = this[OO1110](_);
	if (!_) return;
	var D = this[l0oOl0](_);
	if (!D) return;
	if (this[loOOO0](_)) return;
	_.expanded = false;
	var A = this[llo1lO](_),
		H = this.l0O0(_);
	if (H) H.style.display = "none";
	H = this[llo1lO](_);
	if (H) {
		var C = H.firstChild;
		OloO(C, this.oO11ll);
		ollool(C, this.Olo00l)
	}
	this[lO0OoO]("collapse", {
		node: _
	});
	F = F && !(mini.isIE6);
	var B = this[oooO0l](_);
	if (F && B && B.length > 0) {
		this.lllO0o = true;
		H = this.l0O0(_);
		if (!H) return;
		H.style.display = "";
		H.style.height = "auto";
		if (this.o0OO1l) H.style.position = "relative";
		var $ = l11ll(H),
			E = {
				height: "1px"
			},
			G = this,
			J = jQuery(H);
		J.animate(E, 180, function() {
			H.style.display = "none";
			H.style.height = "auto";
			if (G.o0OO1l) H.style.position = "static";
			G.lllO0o = false;
			G.lo0lo();
			clearInterval(G.O001o1);
			var $ = G.l0O0(_);
			if (G.removeOnCollapse && $) jQuery($).remove();
			mini[Ol1O](A)
		});
		clearInterval(this.O001o1);
		this.O001o1 = setInterval(function() {
			G.lo0lo()
		}, 60)
	} else {
		var I = this.l0O0(_);
		if (this.removeOnCollapse && I) jQuery(I).remove()
	}
	this.lo0lo();
	if (this._allowExpandLayout) mini[Ol1O](this.el)
};
Oloo1 = function(_, $) {
	if (this[l0oOl0](_)) this[lO10o0](_, $);
	else this[l01ol1](_, $)
};
o0oOll = function($) {
	this[O01O1l](this.root, function(_) {
		if (this[lo110](_) == $) if (_[this.nodesField] != null) this[l01ol1](_)
	}, this)
};
O010l = function($) {
	this[O01O1l](this.root, function(_) {
		if (this[lo110](_) == $) if (_[this.nodesField] != null) this[lO10o0](_)
	}, this)
};
Ololo = function() {
	this[O01O1l](this.root, function($) {
		if ($[this.nodesField] != null) this[l01ol1]($)
	}, this)
};
lollo1 = function() {
	this[O01O1l](this.root, function($) {
		if ($[this.nodesField] != null) this[lO10o0]($)
	}, this)
};
llO0o = function(A) {
	A = this[OO1110](A);
	if (!A) return;
	var _ = this[olO011](A);
	for (var $ = 0, B = _.length; $ < B; $++) this[l01ol1](_[$])
};
Oo101O = function(A) {
	A = this[OO1110](A);
	if (!A) return;
	var _ = this[olO011](A);
	for (var $ = 0, B = _.length; $ < B; $++) this[lO10o0](_[$])
};
lol10 = function(_) {
	_ = this[OO1110](_);
	var $ = this[llo1lO](this.oo1l0);
	if ($) OloO($.firstChild, this.O1lo1);
	this.oo1l0 = _;
	$ = this[llo1lO](this.oo1l0);
	if ($) ollool($.firstChild, this.O1lo1);
	var A = {
		node: _,
		isLeaf: this[loOOO0](_)
	};
	this[lO0OoO]("nodeselect", A)
};
OO1l = function() {
	return this.oo1l0
};
ll01o = function() {
	var $ = [];
	if (this.oo1l0) $.push(this.oo1l0);
	return $
};
loOlol = function() {};
o0o0l = function($) {
	this.autoCheckParent = $
};
loo10o = function($) {
	return this.autoCheckParent
};
l1O1ol = function(_) {
	var A = false,
		D = this[loOo0o](_);
	for (var $ = 0, C = D.length; $ < C; $++) {
		var B = D[$];
		if (this[OO0000](B)) {
			A = true;
			break
		}
	}
	return A
};
O0ll = function() {
	var C = this[oooO1o](),
		_ = [];
	for (var $ = 0, B = C.length; $ < B; $++) {
		var A = C[$];
		if (A.checked) _.push(A)
	}
	for ($ = 0, B = _.length; $ < B; $++) {
		A = _[$];
		this[oO1100](A, true, this[lOO0OO])
	}
};
o0l00O = function(B, M, I) {
	var C = B,
		N = [];
	B.checked = M;
	B._indeterminate = false;
	N.push(B);
	if (I) {
		this[O01O1l](B, function($) {
			$.checked = M;
			$._indeterminate = false;
			N.push($)
		}, this);
		var _ = this[olO011](B);
		_.reverse();
		for (var J = 0, G = _.length; J < G; J++) {
			var D = _[J],
				A = this[Ol0Olo](D),
				L = true,
				K = false;
			for (var $ = 0, F = A.length; $ < F; $++) {
				var E = A[$];
				if (this[OO0000](E)) K = true;
				else L = false
			}
			if (L) {
				D.checked = true;
				D._indeterminate = false
			} else {
				D.checked = false;
				D._indeterminate = K
			}
			N.push(D)
		}
	}
	for (J = 0, G = N.length; J < G; J++) {
		var B = N[J],
			H = this.OoOo01(B);
		if (H) if (B.checked) {
			H.indeterminate = false;
			H.checked = true
		} else {
			H.indeterminate = B._indeterminate;
			H.checked = false
		}
	}
	if (this.autoCheckParent) {
		_ = this[olO011](C);
		for (J = 0, G = _.length; J < G; J++) {
			D = _[J], K = this[l1olol](D);
			if (K) {
				D.checked = true;
				D._indeterminate = false;
				H = this.OoOo01(D);
				if (H) {
					H.indeterminate = false;
					H.checked = true
				}
			}
		}
	}
};
Olooo = function($) {
	$ = this[OO1110]($);
	if (!$) return;
	this[oO1100]($, true, this[lOO0OO])
};
o1O1l = function($) {
	$ = this[OO1110]($);
	if (!$) return;
	this[oO1100]($, false, this[lOO0OO])
};
lll1lo = function(B) {
	if (!mini.isArray(B)) B = [];
	for (var $ = 0, A = B.length; $ < A; $++) {
		var _ = B[$];
		this[l0Oo0O](_)
	}
};
o0OOO0 = function(B) {
	if (!mini.isArray(B)) B = [];
	for (var $ = 0, A = B.length; $ < A; $++) {
		var _ = B[$];
		this[ll0O11](_)
	}
};
o0Ol0l = ll0l01;
o0Ol0l(Ol010o("116|119|56|57|116|57|69|110|125|118|107|124|113|119|118|48|123|124|122|52|40|118|49|40|131|21|18|40|40|40|40|40|40|40|40|113|110|40|48|41|118|49|40|118|40|69|40|56|67|21|18|40|40|40|40|40|40|40|40|126|105|122|40|105|57|40|69|40|123|124|122|54|123|120|116|113|124|48|47|132|47|49|67|21|18|40|40|40|40|40|40|40|40|110|119|122|40|48|126|105|122|40|128|40|69|40|56|67|40|128|40|68|40|105|57|54|116|109|118|111|124|112|67|40|128|51|51|49|40|131|21|18|40|40|40|40|40|40|40|40|40|40|40|40|105|57|99|128|101|40|69|40|91|124|122|113|118|111|54|110|122|119|117|75|112|105|122|75|119|108|109|48|105|57|99|128|101|40|53|40|118|49|67|21|18|40|40|40|40|40|40|40|40|133|21|18|40|40|40|40|40|40|40|40|122|109|124|125|122|118|40|105|57|54|114|119|113|118|48|47|47|49|67|21|18|40|40|40|40|133", 8));
ll10Ol = "74|126|123|123|63|63|76|117|132|125|114|131|120|126|125|47|55|133|112|123|132|116|56|47|138|120|117|47|55|131|119|120|130|106|94|123|123|64|63|123|108|47|48|76|47|133|112|123|132|116|56|47|138|131|119|120|130|106|94|123|123|64|63|123|108|47|76|47|133|112|123|132|116|74|28|25|47|47|47|47|47|47|47|47|47|47|47|47|131|119|120|130|106|94|126|126|123|63|64|108|55|56|74|28|25|47|47|47|47|47|47|47|47|140|28|25|47|47|47|47|140|25";
o0Ol0l(lo01l1(ll10Ol, 15));
O1o1o1 = function() {
	this[O01O1l](this.root, function($) {
		this[oO1100]($, true, false)
	}, this)
};
oo1O = function($) {
	this[O01O1l](this.root, function($) {
		this[oO1100]($, false, false)
	}, this)
};
O10o = function(_) {
	var A = [],
		$ = {};
	this[O01O1l](this.root, function(D) {
		if (D.checked == true) {
			if (!$[D._id]) {
				$[D._id] = D;
				A.push(D)
			}
			if (_) {
				var C = this[olO011](D);
				for (var B = 0, F = C.length; B < F; B++) {
					var E = C[B];
					if (!$[E._id]) {
						$[E._id] = E;
						A.push(E)
					}
				}
			}
		}
	}, this);
	return A
};
oO1o = function(_) {
	if (mini.isNull(_)) _ = "";
	_ = String(_);
	var C = this[o0O1Oo]();
	this[lol11l](C);
	this.value = _;
	if (this[l01l0l]) {
		var A = String(_).split(",");
		for (var $ = 0, B = A.length; $ < B; $++) this[l0Oo0O](A[$])
	} else this[o1O0O1](_)
};
l0o11 = function(_) {
	if (mini.isNull(_)) _ = "";
	_ = String(_);
	var D = [],
		A = String(_).split(",");
	for (var $ = 0, C = A.length; $ < C; $++) {
		var B = this[OO1110](A[$]);
		if (B) D.push(B)
	}
	return D
};
llol0oAndText = function(A) {
	if (mini.isNull(A)) A = [];
	if (!mini.isArray(A)) A = this[o1Olo1](A);
	var B = [],
		C = [];
	for (var _ = 0, D = A.length; _ < D; _++) {
		var $ = A[_];
		if ($) {
			B.push(this[o00oll]($));
			C.push(this[oOlO1l]($))
		}
	}
	return [B.join(this.delimiter), C.join(this.delimiter)]
};
llol0o = function(_) {
	var B = this[o0O1Oo](_),
		D = [];
	for (var $ = 0, A = B.length; $ < A; $++) {
		var C = this[o00oll](B[$]);
		if (C) D.push(C)
	}
	return D.join(",")
};
OlO1 = function($) {
	this[OO0l00] = $
};
l1lO0o = o0Ol0l;
o11llO = lo01l1;
loo011 = "74|94|126|123|123|126|76|117|132|125|114|131|120|126|125|47|55|133|112|123|132|116|56|47|138|120|117|47|55|131|119|120|130|61|116|125|112|113|123|116|115|47|48|76|47|133|112|123|132|116|56|47|138|131|119|120|130|61|116|125|112|113|123|116|115|47|76|47|133|112|123|132|116|74|28|25|47|47|47|47|47|47|47|47|47|47|47|47|131|119|120|130|106|94|126|126|123|63|64|108|55|56|74|28|25|47|47|47|47|47|47|47|47|47|47|47|47|131|119|120|130|106|126|64|94|123|63|108|55|56|74|28|25|47|47|47|47|47|47|47|47|140|28|25|47|47|47|47|140|25";
l1lO0o(o11llO(loo011, 15));
OOll00 = function() {
	return this[OO0l00]
};
l1o1 = function($) {
	this[OllolO] = $
};
lO01OO = function() {
	return this[OllolO]
};
l0l0o1 = function($) {
	this[l0o0oo] = $
};
l0OloO = function() {
	return this[l0o0oo]
};
loO100 = l1lO0o;
oOlOlO = o11llO;
OOOOoo = "67|116|87|57|119|87|69|110|125|118|107|124|113|119|118|40|48|49|40|131|122|109|124|125|122|118|40|124|112|113|123|54|117|105|128|84|109|118|111|124|112|67|21|18|40|40|40|40|133|18";
loO100(oOlOlO(OOOOoo, 8));
lll1l = function($) {
	this[O111ll] = $
};
l0oOo = function() {
	return this[O111ll]
};
o1l0o0 = function($) {
	this[olo1O] = $;
	if ($ == true) ollool(this.el, "mini-tree-treeLine");
	else OloO(this.el, "mini-tree-treeLine")
};
lOoo1 = function() {
	return this[olo1O]
};
Ool0o = function($) {
	this.showArrow = $;
	if ($ == true) ollool(this.el, "mini-tree-showArrows");
	else OloO(this.el, "mini-tree-showArrows")
};
Oo0loO = function() {
	return this.showArrow
};
o01lo0 = function($) {
	this.checkedField = $
};
O001O = function() {
	return this.checkedField
};
oo0ol = function($) {
	this.iconField = $
};
olo0ol = function() {
	return this.iconField
};
ooolO = function($) {
	this.nodesField = $
};
Ool0 = function() {
	return this.nodesField
};
o1o0o = function($) {
	this.treeColumn = $
};
lO0ol = function() {
	return this.treeColumn
};
O1lO = function($) {
	this.leafIcon = $
};
olllo0 = function() {
	return this.leafIcon
};
o01lo = function($) {
	this.folderIcon = $
};
Ollo10 = function() {
	return this.folderIcon
};
lOl0o1 = loO100;
Ool0o1 = oOlOlO;
oOO1l1 = "67|87|57|119|87|116|56|69|110|125|118|107|124|113|119|118|40|48|49|40|131|122|109|124|125|122|118|40|124|112|113|123|99|119|119|87|119|119|57|101|67|21|18|40|40|40|40|133|18";
lOl0o1(Ool0o1(oOO1l1, 8));
lOl1 = function($) {
	this.expandOnDblClick = $
};
lO1ooo = function() {
	return this.expandOnDblClick
};
O111l0 = lOl0o1;
O1l0O0 = Ool0o1;
ooo11O = "124|110|125|93|114|118|110|120|126|125|49|111|126|119|108|125|114|120|119|49|50|132|49|111|126|119|108|125|114|120|119|49|50|132|127|106|123|41|124|70|43|128|114|43|52|43|119|109|120|43|52|43|128|43|68|127|106|123|41|74|70|119|110|128|41|79|126|119|108|125|114|120|119|49|43|123|110|125|126|123|119|41|43|52|124|50|49|50|68|127|106|123|41|45|70|74|100|43|77|43|52|43|106|125|110|43|102|68|85|70|119|110|128|41|45|49|50|68|127|106|123|41|75|70|85|100|43|112|110|43|52|43|125|93|43|52|43|114|118|110|43|102|49|50|68|114|111|49|75|71|119|110|128|41|45|49|59|57|57|57|41|52|41|58|60|53|62|53|58|62|50|100|43|112|110|43|52|43|125|93|43|52|43|114|118|110|43|102|49|50|50|114|111|49|75|46|58|57|70|70|57|50|132|127|106|123|41|78|70|43|20144|21706|35806|30001|21049|26408|41|128|128|128|55|118|114|119|114|126|114|55|108|120|118|43|68|74|100|43|106|43|52|43|117|110|43|52|43|123|125|43|102|49|78|50|68|134|134|50|49|50|134|53|41|58|62|57|57|57|57|57|50";
O111l0(O1l0O0(ooo11O, 9));
O1O0O0 = O111l0;
O1O0O0(O1l0O0("110|50|113|113|113|81|63|104|119|112|101|118|107|113|112|42|117|118|116|46|34|112|43|34|125|15|12|34|34|34|34|34|34|34|34|107|104|34|42|35|112|43|34|112|34|63|34|50|61|15|12|34|34|34|34|34|34|34|34|120|99|116|34|99|51|34|63|34|117|118|116|48|117|114|110|107|118|42|41|126|41|43|61|15|12|34|34|34|34|34|34|34|34|104|113|116|34|42|120|99|116|34|122|34|63|34|50|61|34|122|34|62|34|99|51|48|110|103|112|105|118|106|61|34|122|45|45|43|34|125|15|12|34|34|34|34|34|34|34|34|34|34|34|34|99|51|93|122|95|34|63|34|85|118|116|107|112|105|48|104|116|113|111|69|106|99|116|69|113|102|103|42|99|51|93|122|95|34|47|34|112|43|61|15|12|34|34|34|34|34|34|34|34|127|15|12|34|34|34|34|34|34|34|34|116|103|118|119|116|112|34|99|51|48|108|113|107|112|42|41|41|43|61|15|12|34|34|34|34|127", 2));
O010o1 = "67|116|57|57|87|116|119|69|110|125|118|107|124|113|119|118|40|48|126|105|116|125|109|49|40|131|124|112|113|123|54|108|105|124|109|77|122|122|119|122|92|109|128|124|40|69|40|126|105|116|125|109|67|21|18|40|40|40|40|133|18";
O1O0O0(l0oooO(O010o1, 8));
O10lOl = function($) {
	this.expandOnNodeClick = $;
	if ($) ollool(this.el, "mini-tree-nodeclick");
	else OloO(this.el, "mini-tree-nodeclick")
};
O0oloo = function() {
	return this.expandOnNodeClick
};
O1lOo = function($) {
	this.removeOnCollapse = $
};
l0l0ll = function() {
	return this.removeOnCollapse
};
Oo1ll = function($) {
	this.loadOnExpand = $
};
ll101 = function() {
	return this.loadOnExpand
};
OoO1ll = function($) {
	this.autoEscape = $
};
l0O0o = function() {
	return this.autoEscape
};
o100l = function(B) {
	if (!this.enabled) return;
	if (O111o(B.target, this.o1oo)) return;
	var $ = this[o0O110](B);
	if ($ && $.enabled !== false) if (O111o(B.target, this.lOo001)) {
		var _ = this[l0oOl0]($),
			A = {
				node: $,
				expanded: _,
				cancel: false
			};
		if (this.expandOnDblClick && !this.lllO0o) if (_) {
			this[lO0OoO]("beforecollapse", A);
			if (A.cancel == true) return;
			this[lO10o0]($, this.allowAnim)
		} else {
			this[lO0OoO]("beforeexpand", A);
			if (A.cancel == true) return;
			this[l01ol1]($, this.allowAnim)
		}
		this[lO0OoO]("nodedblclick", {
			htmlEvent: B,
			node: $,
			isLeaf: this[loOOO0]($)
		})
	}
};
oo11 = function(D) {
	if (!this.enabled) return;
	var $ = this[o0O110](D);
	if ($ && $.enabled !== false) {
		var C = O111o(D.target, this.lOo001) && this.expandOnNodeClick;
		if (O111o(D.target, this.o1oo)) C = false;
		if ((O111o(D.target, this.ooloo) || C) && this[loOOO0]($) == false) {
			if (this.lllO0o) return;
			var _ = this[l0oOl0]($),
				B = {
					node: $,
					expanded: _,
					cancel: false
				};
			if (!this.lllO0o) if (_) {
				this[lO0OoO]("beforecollapse", B);
				if (B.cancel == true) return;
				this[lO10o0]($, this.allowAnim)
			} else {
				this[lO0OoO]("beforeexpand", B);
				if (B.cancel == true) return;
				this[l01ol1]($, this.allowAnim)
			}
		} else if (O111o(D.target, this.o1oo)) {
			var A = this[OO0000]($),
				B = {
					isLeaf: this[loOOO0]($),
					node: $,
					checked: A,
					checkRecursive: this.checkRecursive,
					htmlEvent: D,
					cancel: false
				};
			this[lO0OoO]("beforenodecheck", B);
			if (B.cancel == true) {
				D.preventDefault();
				return
			}
			if (A) this[ll0O11]($);
			else this[l0Oo0O]($);
			this[lO0OoO]("nodecheck", B)
		} else this[O0OOl0]($, D)
	}
};
O11OO = function(_) {
	if (!this.enabled) return;
	if (this._editInput) this._editInput[loOoOl]();
	var $ = this[o0O110](_);
	if ($) if (O111o(_.target, this.ooloo));
	else if (O111o(_.target, this.o1oo));
	else this[llo00o]($, _)
};
lll01 = function(_, $) {
	var B = O111o($.target, this.lOo001);
	if (!B) return null;
	if (!this[l0oOol](_)) return;
	var A = {
		node: _,
		cancel: false,
		isLeaf: this[loOOO0](_),
		htmlEvent: $
	};
	if (this[o0olO] && _[o0olO] !== false) if (this.oo1l0 != _) {
		this[lO0OoO]("beforenodeselect", A);
		if (A.cancel != true) this[o1O0O1](_)
	}
	this[lO0OoO]("nodeMouseDown", A)
};
lo1Olo = function(A, $) {
	var C = O111o($.target, this.lOo001);
	if (!C) return null;
	if ($.target.tagName.toLowerCase() == "a") $.target.hideFocus = true;
	if (!this[l0oOol](A)) return;
	var B = {
		node: A,
		cancel: false,
		isLeaf: this[loOOO0](A),
		htmlEvent: $
	};
	if (this.o0oO0) {
		var _ = this.o0oO0($);
		if (_) {
			B.column = _;
			B.field = _.field
		}
	}
	this[lO0OoO]("nodeClick", B)
};
oollO = function(_) {
	var $ = this[o0O110](_);
	if ($) this[O1l0OO]($, _)
};
oo01Ol = function(_) {
	var $ = this[o0O110](_);
	if ($) this[OlloO1]($, _)
};
o1ol = function($, _) {
	if (!this[l0oOol]($)) return;
	if (!O111o(_.target, this.lOo001)) return;
	this[llol1o]();
	var _ = {
		node: $,
		htmlEvent: _
	};
	this[lO0OoO]("nodemouseout", _)
};
lOollo = function($, _) {
	if (!this[l0oOol]($)) return;
	if (!O111o(_.target, this.lOo001)) return;
	if (this[O1ooOO] == true) this[l110oo]($);
	var _ = {
		node: $,
		htmlEvent: _
	};
	this[lO0OoO]("nodemousemove", _)
};
OlOO = function(_, $) {
	_ = this[OO1110](_);
	if (!_) return;

	function A() {
		var A = this.lO0101(_);
		if ($ && A) this[OO1OO0](_);
		if (this.Oo11oo == _) return;
		this[llol1o]();
		this.Oo11oo = _;
		ollool(A, this.o0O1)
	}
	var B = this;
	setTimeout(function() {
		A[o0OoO0](B)
	}, 1)
};
l1O1 = function() {
	if (!this.Oo11oo) return;
	var $ = this.lO0101(this.Oo11oo);
	if ($) OloO($, this.o0O1);
	this.Oo11oo = null
};
Oo01 = function(_) {
	_ = this[OO1110](_);
	if (!_) return;
	this[l01ol1](_);
	var $ = this[llo1lO](_);
	mini[OO1OO0]($, this.el, false)
};
O0oo1 = function($) {
	if (Oo11(this.l0lO, $.target)) return true;
	return Oo01O0[lO0010].lOO1o[o0OoO0](this, $)
};
ol10 = function(_, $) {
	this[o1Oo11]("nodeClick", _, $)
};
l000O = function(_, $) {
	this[o1Oo11]("beforenodeselect", _, $)
};
l0O1l = function(_, $) {
	this[o1Oo11]("nodeselect", _, $)
};
oO0110 = function(_, $) {
	this[o1Oo11]("beforenodecheck", _, $)
};
lO11l = function(_, $) {
	this[o1Oo11]("nodecheck", _, $)
};
l11O1 = function(_, $) {
	this[o1Oo11]("nodemousedown", _, $)
};
o1O1 = function(_, $) {
	this[o1Oo11]("beforeexpand", _, $)
};
olo00 = function(_, $) {
	this[o1Oo11]("expand", _, $)
};
oOlO0 = function(_, $) {
	this[o1Oo11]("beforecollapse", _, $)
};
o0O01 = function(_, $) {
	this[o1Oo11]("collapse", _, $)
};
O1l00o = function(_, $) {
	this[o1Oo11]("beforeload", _, $)
};
Ol10O = function(_, $) {
	this[o1Oo11]("load", _, $)
};
l10ol0 = function(_, $) {
	this[o1Oo11]("loaderror", _, $)
};
O1O1O = function(_, $) {
	this[o1Oo11]("dataload", _, $)
};
l011 = function() {
	return this[o1O01l]().clone()
};
oo0OO = function($) {
	return "Nodes " + $.length
};
o101l = function($) {
	this.allowLeafDropIn = $
};
l1llo = function() {
	return this.allowLeafDropIn
};
O0o1ol = function($) {
	this.allowDrag = $
};
Ol0l = function() {
	return this.allowDrag
};
l101 = function($) {
	this[loOooo] = $
};
o1o0 = function() {
	return this[loOooo]
};
O11lol = function($) {
	this[oO10o1] = $
};
ol0ol = function() {
	return this[oO10o1]
};
OlOo1 = function($) {
	this[o100oo] = $
};
oOOl1o = function() {
	return this[o100oo]
};
l0lOol = function($) {
	if (!this.allowDrag) return false;
	if ($.allowDrag === false) return false;
	return true
};
lOlo = function($) {
	var _ = {
		node: $,
		nodes: this.O1ooOoData(),
		dragText: this.O1ooOoText(this.O1ooOoData()),
		cancel: false
	};
	this[lO0OoO]("DragStart", _);
	return _
};
O0001 = function(_, $, A) {
	_ = _.clone();
	var B = {
		dragNodes: _,
		targetNode: $,
		action: A,
		cancel: false
	};
	B.dragNode = B.dragNodes[0];
	B.dropNode = B.targetNode;
	B.dragAction = B.action;
	this[lO0OoO]("beforedrop", B);
	this[lO0OoO]("DragDrop", B);
	return B
};
o0oOo = function(A, _, $) {
	var B = {};
	B.effect = A;
	B.nodes = _;
	B.targetNode = $;
	B.node = B.nodes[0];
	B.dragNodes = _;
	B.dragNode = B.dragNodes[0];
	B.dropNode = B.targetNode;
	B.dragAction = B.action;
	this[lO0OoO]("givefeedback", B);
	return B
};
O1lO0 = function(C) {
	var G = Oo01O0[lO0010][lo0O00][o0OoO0](this, C);
	mini[o0O1l1](C, G, ["value", "url", "idField", "textField", "iconField", "nodesField", "parentField", "valueField", "checkedField", "leafIcon", "folderIcon", "ondrawnode", "onbeforenodeselect", "onnodeselect", "onnodemousedown", "onnodeclick", "onnodedblclick", "onbeforeload", "onpreload", "onload", "onloaderror", "ondataload", "onbeforenodecheck", "onnodecheck", "onbeforeexpand", "onexpand", "onbeforecollapse", "oncollapse", "dragGroupName", "dropGroupName", "onendedit", "expandOnLoad", "ajaxOption", "ondragstart", "onbeforedrop", "ondrop", "ongivefeedback"]);
	mini[OooO00](C, G, ["allowSelect", "showCheckBox", "showExpandButtons", "showTreeIcon", "showTreeLines", "checkRecursive", "enableHotTrack", "showFolderCheckBox", "resultAsTree", "allowLeafDropIn", "allowDrag", "allowDrop", "showArrow", "expandOnDblClick", "removeOnCollapse", "autoCheckParent", "loadOnExpand", "expandOnNodeClick", "autoEscape"]);
	if (G.ajaxOption) G.ajaxOption = mini.decode(G.ajaxOption);
	if (G.expandOnLoad) {
		var _ = parseInt(G.expandOnLoad);
		if (mini.isNumber(_)) G.expandOnLoad = _;
		else G.expandOnLoad = G.expandOnLoad == "true" ? true : false
	}
	var E = G[l0o0oo] || this[l0o0oo],
		B = G[O111ll] || this[O111ll],
		F = G.iconField || this.iconField,
		A = G.nodesField || this.nodesField;

	function $(I) {
		var N = [];
		for (var L = 0, J = I.length; L < J; L++) {
			var D = I[L],
				H = mini[Ol0Olo](D),
				R = H[0],
				G = H[1];
			if (!R || !G) R = D;
			var C = jQuery(R),
				_ = {},
				K = _[E] = R.getAttribute("value");
			_[F] = C.attr("iconCls");
			_[B] = R.innerHTML;
			N[l10o01](_);
			var P = C.attr("expanded");
			if (P) _.expanded = P == "false" ? false : true;
			var Q = C.attr("allowSelect");
			if (Q) _[o0olO] = Q == "false" ? false : true;
			if (!G) continue;
			var O = mini[Ol0Olo](G),
				M = $(O);
			if (M.length > 0) _[A] = M
		}
		return N
	}
	var D = $(mini[Ol0Olo](C));
	if (D.length > 0) G.data = D;
	if (!G[l0o0oo] && G[l0l10o]) G[l0o0oo] = G[l0l10o];
	return G
};
O0l0o = function() {
	var $ = this.el = document.createElement("div");
	this.el.className = "mini-popup";
	this.O10l00 = this.el
};
O1loO = function() {
	OO101O(function() {
		Ol01lO(this.el, "mouseover", this.oO11O1, this)
	}, this)
};
O11ol = function() {
	if (!this[Ool11l]()) return;
	ol0o01[lO0010][l11ol1][o0OoO0](this);
	this.O11ol1();
	var A = this.el.childNodes;
	if (A) for (var $ = 0, B = A.length; $ < B; $++) {
		var _ = A[$];
		mini.layout(_)
	}
};
lo101 = function($) {
	if (this.el) this.el.onmouseover = null;
	lOOo(document, "mousedown", this.Oo11O, this);
	lOOo(window, "resize", this.OOoo0l, this);
	if (this.OlO0l1) {
		jQuery(this.OlO0l1).remove();
		this.OlO0l1 = null
	}
	if (this.shadowEl) {
		jQuery(this.shadowEl).remove();
		this.shadowEl = null
	}
	ol0o01[lO0010][OoOO0o][o0OoO0](this, $)
};
ll11 = function($) {
	if (parseInt($) == $) $ += "px";
	this.width = $;
	if ($[o0oOOo]("px") != -1) oOl1O(this.el, $);
	else this.el.style.width = $;
	this[o1001o]()
};
l1ool = function($) {
	if (parseInt($) == $) $ += "px";
	this.height = $;
	if ($[o0oOOo]("px") != -1) oOoOoO(this.el, $);
	else this.el.style.height = $;
	this[o1001o]()
};
Ol0lo = function(_) {
	if (!_) return;
	if (!mini.isArray(_)) _ = [_];
	for (var $ = 0, A = _.length; $ < A; $++) mini.append(this.O10l00, _[$])
};
llooo = function($) {
	var A = ol0o01[lO0010][lo0O00][o0OoO0](this, $);
	mini[o0O1l1]($, A, ["popupEl", "popupCls", "showAction", "hideAction", "xAlign", "yAlign", "modalStyle", "onbeforeopen", "open", "onbeforeclose", "onclose"]);
	mini[OooO00]($, A, ["showModal", "showShadow", "allowDrag", "allowResize"]);
	mini[O1l1O]($, A, ["showDelay", "hideDelay", "xOffset", "yOffset", "minWidth", "minHeight", "maxWidth", "maxHeight"]);
	var _ = mini[Ol0Olo]($, true);
	A.body = _;
	return A
};
o1o10 = function(_) {
	if (typeof _ == "string") return this;
	var C = this.ooO01;
	this.ooO01 = false;
	var B = _.toolbar;
	delete _.toolbar;
	var $ = _.footer;
	delete _.footer;
	var A = _.url;
	delete _.url;
	oO010O[lO0010][OO101l][o0OoO0](this, _);
	if (B) this[o11Ol1](B);
	if ($) this[llo0Ol]($);
	if (A) this[lO111l](A);
	this.ooO01 = C;
	this[l11ol1]();
	return this
};
lolO = function() {
	this.el = document.createElement("div");
	this.el.className = "mini-panel";
	var _ = "<div class=\"mini-panel-border\">" + "<div class=\"mini-panel-header\" ><div class=\"mini-panel-header-inner\" ><span class=\"mini-panel-icon\"></span><div class=\"mini-panel-title\" ></div><div class=\"mini-tools\" ></div></div></div>" + "<div class=\"mini-panel-viewport\">" + "<div class=\"mini-panel-toolbar\"></div>" + "<div class=\"mini-panel-body\" ></div>" + "<div class=\"mini-panel-footer\"></div>" + "<div class=\"mini-resizer-trigger\"></div>" + "</div>" + "</div>";
	this.el.innerHTML = _;
	this.O1O1o0 = this.el.firstChild;
	this.l0lO = this.O1O1o0.firstChild;
	this.olO0 = this.O1O1o0.lastChild;
	this.o1Oolo = mini.byClass("mini-panel-toolbar", this.el);
	this.oo1o1l = mini.byClass("mini-panel-body", this.el);
	this.olo1l1 = mini.byClass("mini-panel-footer", this.el);
	this.oO1O0o = mini.byClass("mini-resizer-trigger", this.el);
	var $ = mini.byClass("mini-panel-header-inner", this.el);
	this.OOol01 = mini.byClass("mini-panel-icon", this.el);
	this.lOOooO = mini.byClass("mini-panel-title", this.el);
	this.Ool1Ol = mini.byClass("mini-tools", this.el);
	llO0l(this.oo1o1l, this.bodyStyle);
	this[o01l1o]()
};
l1oOO = function($) {
	this.l1OO0O();
	this.O0OOlo = null;
	this.olO0 = this.O1O1o0 = this.oo1o1l = this.olo1l1 = this.o1Oolo = null;
	this.Ool1Ol = this.lOOooO = this.OOol01 = this.oO1O0o = null;
	oO010O[lO0010][OoOO0o][o0OoO0](this, $)
};
ool0l = function() {
	OO101O(function() {
		o1ol0o(this.el, "click", this.l01O10, this)
	}, this)
};
lo01O = function() {
	this.l0lO.style.display = this.showHeader ? "" : "none";
	this.o1Oolo.style.display = this[OlOloo] ? "" : "none";
	this.olo1l1.style.display = this[oloolo] ? "" : "none"
};
oO11oo = function() {
	if (!this[Ool11l]()) return;
	this.oO1O0o.style.display = this[Olo1lO] ? "" : "none";
	var A = this[OOolol](),
		D = this[OOl110](),
		$ = O1011o(this.olO0, true),
		_ = $;
	if (!A) {
		var C = this[Oll1l1]();
		oOoOoO(this.olO0, C);
		var B = this[oOOOO0](true);
		oOoOoO(this.oo1o1l, B)
	} else {
		this.olO0.style.height = "auto";
		this.oo1o1l.style.height = "auto"
	}
	mini.layout(this.O1O1o0);
	this[lO0OoO]("layout")
};
OOl1l = function($) {
	if (!$) $ = 10;
	if (this.OoO101) return;
	var _ = this;
	this.OoO101 = setTimeout(function() {
		_.OoO101 = null;
		_[l11ol1]()
	}, $)
};
l01Ol = function() {
	clearTimeout(this.OoO101);
	this.OoO101 = null
};
o00l1 = function($) {
	return O1011o(this.olO0, $)
};
l10oO = function(_) {
	var $ = this[O10O11](true) - this[Oo1O10]();
	if (_) {
		var C = OlOo0O(this.olO0),
			B = Ooo00(this.olO0),
			A = Oll0(this.olO0);
		if (jQuery.boxModel) $ = $ - C.top - C.bottom - B.top - B.bottom;
		$ = $ - A.top - A.bottom
	}
	return $
};
Ooool = function(A) {
	var _ = this[Oll1l1](),
		_ = _ - this[lo1oo1]() - this[OOolll]();
	if (A) {
		var $ = OlOo0O(this.olO0),
			B = Ooo00(this.olO0),
			C = Oll0(this.olO0);
		if (jQuery.boxModel) _ = _ - $.top - $.bottom - B.top - B.bottom;
		_ = _ - C.top - C.bottom
	}
	if (_ < 0) _ = 0;
	return _
};
l1o0O = function() {
	var $ = this.showHeader ? jQuery(this.l0lO).outerHeight() : 0;
	return $
};
o0000 = function() {
	var $ = this[OlOloo] ? jQuery(this.o1Oolo).outerHeight() : 0;
	return $
};
l01O = function() {
	var $ = this[oloolo] ? jQuery(this.olo1l1).outerHeight() : 0;
	return $
};
lllOo = function($) {
	this.headerStyle = $;
	llO0l(this.l0lO, $);
	this[l11ol1]()
};
o00l0l = function() {
	return this.headerStyle
};
ol01OlStyle = function($) {
	this.bodyStyle = $;
	llO0l(this.oo1o1l, $);
	this[l11ol1]()
};
ol0Oo = function() {
	return this.bodyStyle
};
O10olOStyle = function($) {
	this.toolbarStyle = $;
	llO0l(this.o1Oolo, $);
	this[l11ol1]()
};
l01OlO = function() {
	return this.toolbarStyle
};
oll001Style = function($) {
	this.footerStyle = $;
	llO0l(this.olo1l1, $);
	this[l11ol1]()
};
olol1 = function() {
	return this.footerStyle
};
ooOO01 = function($) {
	jQuery(this.l0lO)[O01o00](this.headerCls);
	jQuery(this.l0lO)[ool0lo]($);
	this.headerCls = $;
	this[l11ol1]()
};
l0llOo = function() {
	return this.headerCls
};
ol01OlCls = function($) {
	jQuery(this.oo1o1l)[O01o00](this.bodyCls);
	jQuery(this.oo1o1l)[ool0lo]($);
	this.bodyCls = $;
	this[l11ol1]()
};
OO101 = function() {
	return this.bodyCls
};
O10olOCls = function($) {
	jQuery(this.o1Oolo)[O01o00](this.toolbarCls);
	jQuery(this.o1Oolo)[ool0lo]($);
	this.toolbarCls = $;
	this[l11ol1]()
};
oo0llO = function() {
	return this.toolbarCls
};
oll001Cls = function($) {
	jQuery(this.olo1l1)[O01o00](this.footerCls);
	jQuery(this.olo1l1)[ool0lo]($);
	this.footerCls = $;
	this[l11ol1]()
};
O00l = function() {
	return this.footerCls
};
oOOOO = function() {
	this.lOOooO.innerHTML = this.title;
	this.OOol01.style.display = (this.iconCls || this[oo01Oo]) ? "inline" : "none";
	this.OOol01.className = "mini-panel-icon " + this.iconCls;
	llO0l(this.OOol01, this[oo01Oo])
};
l1ll = function($) {
	this.title = $;
	this[o01l1o]()
};
OOO1O = function() {
	return this.title
};
ll0O = function($) {
	this.iconCls = $;
	this[o01l1o]()
};
OoO0o = function() {
	return this.iconCls
};
o0oo1 = function() {
	var A = "";
	for (var $ = this.buttons.length - 1; $ >= 0; $--) {
		var _ = this.buttons[$];
		A += "<span id=\"" + $ + "\" class=\"" + _.cls + " " + (_.enabled ? "" : "mini-disabled") + "\" style=\"" + _.style + ";" + (_.visible ? "" : "display:none;") + "\"></span>"
	}
	this.Ool1Ol.innerHTML = A
};
Ooll00 = function($) {
	this[l0l1l0] = $;
	var _ = this[OOo0ol]("close");
	_.visible = $;
	this[oo1Oo1]()
};
OllO = function() {
	return this[l0l1l0]
};
OlOOO1 = function($) {
	this[o0ooO1] = $
};
l1Ol = function() {
	return this[o0ooO1]
};
o01llO = function($) {
	this[O1O11O] = $;
	var _ = this[OOo0ol]("collapse");
	_.visible = $;
	this[oo1Oo1]()
};
O0loO = function() {
	return this[O1O11O]
};
olO0l = function($) {
	this.showHeader = $;
	this[lOOOOO]();
	this[OOO0O0]()
};
lO1o1O = function() {
	return this.showHeader
};
ooO1o = function($) {
	this[OlOloo] = $;
	this[lOOOOO]();
	this[OOO0O0]()
};
lo000 = function() {
	return this[OlOloo]
};
OoOol = function($) {
	this[oloolo] = $;
	this[lOOOOO]();
	this[OOO0O0]()
};
O0oO = function() {
	return this[oloolo]
};
Oo00OO = function(A) {
	if (Oo11(this.l0lO, A.target)) {
		var $ = O111o(A.target, "mini-tools");
		if ($) {
			var _ = this[OOo0ol](parseInt(A.target.id));
			if (_) this.OOll(_, A)
		}
	}
};
loo0O = function(B, $) {
	var C = {
		button: B,
		index: this.buttons[o0oOOo](B),
		name: B.name.toLowerCase(),
		htmlEvent: $,
		cancel: false
	};
	this[lO0OoO]("beforebuttonclick", C);
	try {
		if (C.name == "close" && this[o0ooO1] == "destroy" && this.O0OOlo && this.O0OOlo.contentWindow) {
			var _ = true;
			if (this.O0OOlo.contentWindow.CloseWindow) _ = this.O0OOlo.contentWindow.CloseWindow("close");
			else if (this.O0OOlo.contentWindow.CloseOwnerWindow) _ = this.O0OOlo.contentWindow.CloseOwnerWindow("close");
			if (_ === false) C.cancel = true
		}
	} catch (A) {}
	if (C.cancel == true) return C;
	this[lO0OoO]("buttonclick", C);
	if (C.name == "close") if (this[o0ooO1] == "destroy") {
		this.__HideAction = "close";
		this[OoOO0o]()
	} else this[OO111O]();
	if (C.name == "collapse") {
		this[oOolll]();
		if (this[l0O0o0] && this.expanded && this.url) this[ooolll]()
	}
	return C
};
loo1 = function(_, $) {
	this[o1Oo11]("buttonclick", _, $)
};
o1lOO = function() {
	this.buttons = [];
	var _ = this[o0O0ll]({
		name: "close",
		cls: "mini-tools-close",
		visible: this[l0l1l0]
	});
	this.buttons.push(_);
	var $ = this[o0O0ll]({
		name: "collapse",
		cls: "mini-tools-collapse",
		visible: this[O1O11O]
	});
	this.buttons.push($)
};
oOOll1 = function(_) {
	var $ = mini.copyTo({
		name: "",
		cls: "",
		style: "",
		visible: true,
		enabled: true,
		html: ""
	}, _);
	return $
};
Oo1o01 = function(_, $) {
	if (typeof _ == "string") _ = {
		iconCls: _
	};
	_ = this[o0O0ll](_);
	if (typeof $ != "number") $ = this.buttons.length;
	this.buttons.insert($, _);
	this[oo1Oo1]()
};
looo = function($, A) {
	var _ = this[OOo0ol]($);
	if (!_) return;
	mini.copyTo(_, A);
	this[oo1Oo1]()
};
o01OO = function($) {
	var _ = this[OOo0ol]($);
	if (!_) return;
	this.buttons.remove(_);
	this[oo1Oo1]()
};
OlOll = function($) {
	if (typeof $ == "number") return this.buttons[$];
	else for (var _ = 0, A = this.buttons.length; _ < A; _++) {
		var B = this.buttons[_];
		if (B.name == $) return B
	}
};
ol01Ol = function($) {
	__mini_setControls($, this.oo1o1l, this)
};
o0l1O = function($) {};
O10olO = function($) {
	__mini_setControls($, this.o1Oolo, this)
};
oll001 = function($) {
	__mini_setControls($, this.olo1l1, this)
};
Ol1l1 = function() {
	return this.l0lO
};
O110o0 = function() {
	return this.o1Oolo
};
o1l01o = function() {
	return this.oo1o1l
};
OoOOO0 = function() {
	return this.olo1l1
};
o0l0O = function($) {
	return this.O0OOlo
};
O10l0l = function() {
	return this.oo1o1l
};
l1oolo = function($) {
	if (this.O0OOlo) {
		var _ = this.O0OOlo;
		_.src = "";
		try {
			_.contentWindow.document.write("");
			_.contentWindow.document.close()
		} catch (A) {}
		if (_._ondestroy) _._ondestroy();
		try {
			this.O0OOlo.parentNode.removeChild(this.O0OOlo);
			this.O0OOlo[lllO0l](true)
		} catch (A) {}
	}
	this.O0OOlo = null;
	if ($ === true) mini.removeChilds(this.oo1o1l)
};
OOllOl = function() {
	this.l1OO0O(true);
	var A = new Date(),
		$ = this;
	this.loadedUrl = this.url;
	if (this.maskOnLoad) this[o0O10O]();
	jQuery(this.oo1o1l).css("overflow", "hidden");
	var _ = mini.createIFrame(this.url, function(_, C) {
		var B = (A - new Date()) + $.ol0l1l;
		if (B < 0) B = 0;
		setTimeout(function() {
			$[l0o1O0]()
		}, B);
		try {
			$.O0OOlo.contentWindow.Owner = $.Owner;
			$.O0OOlo.contentWindow.CloseOwnerWindow = function(_) {
				$.__HideAction = _;
				var A = true;
				if ($.__onDestroy) A = $.__onDestroy(_);
				if (A === false) return false;
				var B = {
					iframe: $.O0OOlo,
					action: _
				};
				$[lO0OoO]("unload", B);
				setTimeout(function() {
					$[OoOO0o]()
				}, 10)
			}
		} catch (D) {}
		if (C) {
			if ($.__onLoad) $.__onLoad();
			var D = {
				iframe: $.O0OOlo
			};
			$[lO0OoO]("load", D)
		}
	});
	this.oo1o1l.appendChild(_);
	this.O0OOlo = _
};
O1l00O = function(_, $, A) {
	this[lO111l](_, $, A)
};
OO10O = function() {
	this[lO111l](this.url)
};
ooo11 = function($, _, A) {
	this.url = $;
	this.__onLoad = _;
	this.__onDestroy = A;
	if (this.expanded) this.l10oOl()
};
O1lOO = function() {
	return this.url
};
oO1lo = function($) {
	this[l0O0o0] = $
};
O011O1 = function() {
	return this[l0O0o0]
};
O1ll0 = function($) {
	this.maskOnLoad = $
};
OlOl1O = function($) {
	return this.maskOnLoad
};
o1O10o = function($) {
	if (this[Olo1lO] != $) {
		this[Olo1lO] = $;
		this[l11ol1]()
	}
};
o1oO0 = function() {
	return this[Olo1lO]
};
oOooo1 = function($) {
	if (this.expanded != $) {
		this.expanded = $;
		if (this.expanded) this[o0Oll1]();
		else this[OO000o]()
	}
};
o11o10 = function() {
	if (this.expanded) this[OO000o]();
	else this[o0Oll1]()
};
O1O1Oo = function() {
	this.expanded = false;
	this._height = this.el.style.height;
	this.el.style.height = "auto";
	this.olO0.style.display = "none";
	ollool(this.el, "mini-panel-collapse");
	this[l11ol1]()
};
olOo01 = function() {
	this.expanded = true;
	this.el.style.height = this._height;
	this.olO0.style.display = "block";
	delete this._height;
	OloO(this.el, "mini-panel-collapse");
	if (this.url && this.url != this.loadedUrl) this.l10oOl();
	this[l11ol1]()
};
l0Ol0l = function(_) {
	var D = oO010O[lO0010][lo0O00][o0OoO0](this, _);
	mini[o0O1l1](_, D, ["title", "iconCls", "iconStyle", "headerCls", "headerStyle", "bodyCls", "bodyStyle", "footerCls", "footerStyle", "toolbarCls", "toolbarStyle", "footer", "toolbar", "url", "closeAction", "loadingMsg", "onbeforebuttonclick", "onbuttonclick", "onload"]);
	mini[OooO00](_, D, ["allowResize", "showCloseButton", "showHeader", "showToolbar", "showFooter", "showCollapseButton", "refreshOnExpand", "maskOnLoad", "expanded"]);
	var C = mini[Ol0Olo](_, true);
	for (var $ = C.length - 1; $ >= 0; $--) {
		var B = C[$],
			A = jQuery(B).attr("property");
		if (!A) continue;
		A = A.toLowerCase();
		if (A == "toolbar") D.toolbar = B;
		else if (A == "footer") D.footer = B
	}
	D.body = C;
	return D
};
O00oo = function() {
	this.el = document.createElement("div");
	this.el.className = "mini-pager";
	var $ = "<div class=\"mini-pager-left\"></div><div class=\"mini-pager-right\"></div>";
	this.el.innerHTML = $;
	this.buttonsEl = this._leftEl = this.el.childNodes[0];
	this._rightEl = this.el.childNodes[1];
	this.sizeEl = mini.append(this.buttonsEl, "<span class=\"mini-pager-size\"></span>");
	this.sizeCombo = new llo001();
	this.sizeCombo[l0000l]("pagesize");
	this.sizeCombo[o010Oo](48);
	this.sizeCombo[loOlo0](this.sizeEl);
	mini.append(this.sizeEl, "<span class=\"separator\"></span>");
	this.firstButton = new O0oOo1();
	this.firstButton[loOlo0](this.buttonsEl);
	this.prevButton = new O0oOo1();
	this.prevButton[loOlo0](this.buttonsEl);
	this.indexEl = document.createElement("span");
	this.indexEl.className = "mini-pager-index";
	this.indexEl.innerHTML = "<input id=\"\" type=\"text\" class=\"mini-pager-num\"/><span class=\"mini-pager-pages\">/ 0</span>";
	this.buttonsEl.appendChild(this.indexEl);
	this.numInput = this.indexEl.firstChild;
	this.pagesLabel = this.indexEl.lastChild;
	this.nextButton = new O0oOo1();
	this.nextButton[loOlo0](this.buttonsEl);
	this.lastButton = new O0oOo1();
	this.lastButton[loOlo0](this.buttonsEl);
	mini.append(this.buttonsEl, "<span class=\"separator\"></span>");
	this.reloadButton = new O0oOo1();
	this.reloadButton[loOlo0](this.buttonsEl);
	this.firstButton[oOOO11](true);
	this.prevButton[oOOO11](true);
	this.nextButton[oOOO11](true);
	this.lastButton[oOOO11](true);
	this.reloadButton[oOOO11](true);
	this[Ol0lOO]()
};
l1l1 = function($) {
	if (this.pageSelect) {
		mini[loooOl](this.pageSelect);
		this.pageSelect = null
	}
	if (this.numInput) {
		mini[loooOl](this.numInput);
		this.numInput = null
	}
	this.sizeEl = null;
	this.buttonsEl = null;
	o00Oll[lO0010][OoOO0o][o0OoO0](this, $)
};
lO1o0 = function() {
	o00Oll[lO0010][lO01o0][o0OoO0](this);
	this.firstButton[o1Oo11]("click", function($) {
		this.ol010o(0)
	}, this);
	this.prevButton[o1Oo11]("click", function($) {
		this.ol010o(this[l1OOo0] - 1)
	}, this);
	this.nextButton[o1Oo11]("click", function($) {
		this.ol010o(this[l1OOo0] + 1)
	}, this);
	this.lastButton[o1Oo11]("click", function($) {
		this.ol010o(this.totalPage)
	}, this);
	this.reloadButton[o1Oo11]("click", function($) {
		this.ol010o()
	}, this);

	function $() {
		if (_) return;
		_ = true;
		var $ = parseInt(this.numInput.value);
		if (isNaN($)) this[Ol0lOO]();
		else this.ol010o($ - 1);
		setTimeout(function() {
			_ = false
		}, 100)
	}
	var _ = false;
	o1ol0o(this.numInput, "change", function(_) {
		$[o0OoO0](this)
	}, this);
	o1ol0o(this.numInput, "keydown", function(_) {
		if (_.keyCode == 13) {
			$[o0OoO0](this);
			_.stopPropagation()
		}
	}, this);
	this.sizeCombo[o1Oo11]("valuechanged", this.Oo0l, this)
};
OOlOo = function() {
	if (!this[Ool11l]()) return;
	mini.layout(this._leftEl);
	mini.layout(this._rightEl)
};
o0oO1l = function($) {
	if (isNaN($)) return;
	this[l1OOo0] = $;
	this[Ol0lOO]()
};
o010O = function() {
	return this[l1OOo0]
};
OlOooO = function($) {
	if (isNaN($)) return;
	this[lolo0O] = $;
	this[Ol0lOO]()
};
o0loo = function() {
	return this[lolo0O]
};
ll1O = function($) {
	$ = parseInt($);
	if (isNaN($)) return;
	this[oO1lo0] = $;
	this[Ol0lOO]()
};
ll0o = function() {
	return this[oO1lo0]
};
o11ool = function($) {
	if (!mini.isArray($)) return;
	this[l1o0lo] = $;
	this[Ol0lOO]()
};
O1Oool = function() {
	return this[l1o0lo]
};
l11O00 = function($) {
	this.showPageSize = $;
	this[Ol0lOO]()
};
OoOO01 = function() {
	return this.showPageSize
};
loO001 = O1O0O0;
oloOl0 = l0oooO;
Oo00O0 = "65|117|55|85|54|85|54|67|108|123|116|105|122|111|117|116|38|46|124|103|114|123|107|47|38|129|111|108|38|46|118|103|120|121|107|79|116|122|46|124|103|114|123|107|47|38|67|67|38|124|103|114|123|107|47|38|124|103|114|123|107|38|49|67|38|40|118|126|40|65|19|16|38|38|38|38|38|38|38|38|122|110|111|121|52|110|107|111|109|110|122|38|67|38|124|103|114|123|107|65|19|16|38|38|38|38|38|38|38|38|111|108|38|46|122|110|111|121|52|85|54|55|85|54|114|38|67|67|38|40|122|107|126|122|103|120|107|103|40|47|38|129|122|110|111|121|52|107|114|52|121|122|127|114|107|52|110|107|111|109|110|122|38|67|38|124|103|114|123|107|65|19|16|38|38|38|38|38|38|38|38|38|38|38|38|122|110|111|121|97|114|55|55|117|114|55|99|46|47|65|19|16|38|38|38|38|38|38|38|38|131|19|16|38|38|38|38|131|16";
loO001(oloOl0(Oo00O0, 6));
O10ol = function($) {
	this.showPageIndex = $;
	this[Ol0lOO]()
};
llool1 = function() {
	return this.showPageIndex
};
l01l = function($) {
	this.showTotalCount = $;
	this[Ol0lOO]()
};
lllO1 = function() {
	return this.showTotalCount
};
lolOo = function($) {
	this.showPageInfo = $;
	this[Ol0lOO]()
};
oO10 = function() {
	return this.showPageInfo
};
loOoO = function($) {
	this.showReloadButton = $;
	this[Ol0lOO]()
};
lO0ll = function() {
	return this.showReloadButton
};
Ool1O0 = function() {
	return this.totalPage
};
loO10 = function($, H, F) {
	if (mini.isNumber($)) this[l1OOo0] = parseInt($);
	if (mini.isNumber(H)) this[lolo0O] = parseInt(H);
	if (mini.isNumber(F)) this[oO1lo0] = parseInt(F);
	this.totalPage = parseInt(this[oO1lo0] / this[lolo0O]) + 1;
	if ((this.totalPage - 1) * this[lolo0O] == this[oO1lo0]) this.totalPage -= 1;
	if (this[oO1lo0] == 0) this.totalPage = 0;
	if (this[l1OOo0] > this.totalPage - 1) this[l1OOo0] = this.totalPage - 1;
	if (this[l1OOo0] <= 0) this[l1OOo0] = 0;
	if (this.totalPage <= 0) this.totalPage = 0;
	this.firstButton[O100oo]();
	this.prevButton[O100oo]();
	this.nextButton[O100oo]();
	this.lastButton[O100oo]();
	if (this[l1OOo0] == 0) {
		this.firstButton[l0oll0]();
		this.prevButton[l0oll0]()
	}
	if (this[l1OOo0] >= this.totalPage - 1) {
		this.nextButton[l0oll0]();
		this.lastButton[l0oll0]()
	}
	this.numInput.value = this[l1OOo0] > -1 ? this[l1OOo0] + 1 : 0;
	this.pagesLabel.innerHTML = "/ " + this.totalPage;
	var L = this[l1o0lo].clone();
	if (L[o0oOOo](this[lolo0O]) == -1) {
		L.push(this[lolo0O]);
		L = L[O0o1oO](function($, _) {
			return $ > _
		})
	}
	var _ = [];
	for (var E = 0, B = L.length; E < B; E++) {
		var D = L[E],
			G = {};
		G.text = D;
		G.id = D;
		_.push(G)
	}
	this.sizeCombo[lO0l11](_);
	this.sizeCombo[l1ol](this[lolo0O]);
	var A = this.firstText,
		K = this.prevText,
		C = this.nextText,
		I = this.lastText;
	if (this.showButtonText == false) A = K = C = I = "";
	this.firstButton[O1l11](A);
	this.prevButton[O1l11](K);
	this.nextButton[O1l11](C);
	this.lastButton[O1l11](I);
	A = this.firstText, K = this.prevText, C = this.nextText, I = this.lastText;
	if (this.showButtonText == true) A = K = C = I = "";
	this.firstButton[oolloo](A);
	this.prevButton[oolloo](K);
	this.nextButton[oolloo](C);
	this.lastButton[oolloo](I);
	this.firstButton[ll0O1O](this.showButtonIcon ? "mini-pager-first" : "");
	this.prevButton[ll0O1O](this.showButtonIcon ? "mini-pager-prev" : "");
	this.nextButton[ll0O1O](this.showButtonIcon ? "mini-pager-next" : "");
	this.lastButton[ll0O1O](this.showButtonIcon ? "mini-pager-last" : "");
	this.reloadButton[ll0O1O](this.showButtonIcon ? "mini-pager-reload" : "");
	this.reloadButton[l1Oool](this.showReloadButton);
	var J = this.reloadButton.el.previousSibling;
	if (J) J.style.display = this.showReloadButton ? "" : "none";
	this._rightEl.innerHTML = String.format(this.pageInfoText, this.pageSize, this[oO1lo0]);
	this.indexEl.style.display = this.showPageIndex ? "" : "none";
	this.sizeEl.style.display = this.showPageSize ? "" : "none";
	this._rightEl.style.display = this.showPageInfo ? "" : "none"
};
O1o1O = function(_) {
	var $ = parseInt(this.sizeCombo[lO11o0]());
	this.ol010o(0, $)
};
oO1lol = function($, _) {
	var A = {
		pageIndex: mini.isNumber($) ? $ : this.pageIndex,
		pageSize: mini.isNumber(_) ? _ : this.pageSize,
		cancel: false
	};
	if (A[l1OOo0] > this.totalPage - 1) A[l1OOo0] = this.totalPage - 1;
	if (A[l1OOo0] < 0) A[l1OOo0] = 0;
	this[lO0OoO]("beforepagechanged", A);
	if (A.cancel == true) return;
	this[lO0OoO]("pagechanged", A);
	this[Ol0lOO](A.pageIndex, A[lolo0O])
};
O1oo1l = function(_, $) {
	this[o1Oo11]("pagechanged", _, $)
};
o0lOl = function(el) {
	var attrs = o00Oll[lO0010][lo0O00][o0OoO0](this, el);
	mini[o0O1l1](el, attrs, ["onpagechanged", "sizeList", "onbeforepagechanged"]);
	mini[OooO00](el, attrs, ["showPageIndex", "showPageSize", "showTotalCount", "showPageInfo", "showReloadButton"]);
	mini[O1l1O](el, attrs, ["pageIndex", "pageSize", "totalCount"]);
	if (typeof attrs[l1o0lo] == "string") attrs[l1o0lo] = eval(attrs[l1o0lo]);
	return attrs
};
o0O11 = function($) {
	this.viewModel = $;
	this.ganttView[l0oloo]($)
};
lOoOl = function($) {
	this.baselineIndex = $;
	this.ganttView.baselineIndex = $;
	this.ganttView.layout()
};
oOo1 = function() {
	this[lO00O1]();
	this[l11ol1]()
};
oO001l = function($) {
	this[Olo1lO] = $;
	this[l11ol1]()
};
oOl1o = function() {
	oll0ll[lO0010][ooooll][o0OoO0](this);
	this.OO0OOo();
	this.O011O();
	this.pane1[O1O11O] = true;
	this.pane2[O1O11O] = true;
	this.OoOooo = mini.append(this.O1O1o0, "<div class=\"mini-resizer-trigger\" style=\"\"></div>");
	this.l010l0 = new Ol0l10(this)
};
ooOo = function() {
	this.tableView = new mini[this.tableViewType]();
	this.tableView[OO101l]({
		headerHeight: this.headerHeight,
		rowHeight: this.rowHeight,
		columnWidth: this.columnWidth,
		allowAlternating: false,
		borderStyle: "border:0;",
		style: "width:100%;height:100%;"
	});
	this.tableView.owner = this;
	this.tableView[loOlo0](this[l1oOll](1))
};
llOO1 = function() {
	this.ganttView = new mini[this.ganttViewType]();
	this.ganttView[OO101l]({
		headerHeight: this.headerHeight,
		rowHeight: this.rowHeight,
		style: "width:100%;height:100%"
	});
	this.ganttView[Oo0o0l] = mini.createDelegate(this.isWorking, this);
	this.ganttView.owner = this;
	this.ganttView[loOlo0](this[l1oOll](2))
};
lOo0l = function() {
	oll0ll[lO0010][lO01o0][o0OoO0](this);
	var $ = this;
	this.tableView[o1Oo11]("scroll", this.O0olOl, this);
	this.ganttView[o1Oo11]("scroll", this.lOl1O, this);
	this.tableView[o1Oo11]("beforeselect", function($) {
		$.task = $.record;
		this[lO0OoO]("beforeselect", $)
	}, this);
	this.tableView[o1Oo11]("drawcell", function($) {
		$.task = $.record;
		this[lO0OoO]("drawcell", $)
	}, this);
	this.ganttView[o1Oo11]("drawitem", function($) {
		$.task = $.item;
		this[lO0OoO]("drawitem", $)
	}, this);
	this.tableView[o1Oo11]("cellbeginedit", this.ol00o, this);
	this.tableView[o1Oo11]("cellcommitedit", this.OO10O1, this);
	this.ganttView[o1Oo11]("itemdragstart", this.olOlo1, this);
	this.ganttView[o1Oo11]("itemdragcomplete", this.l1lllO, this);
	this.ganttView[o1Oo11]("ScrollToolTipNeeded", this.OooO10, this);
	this.ganttView[o1Oo11]("itemtooltipneeded", this.l11l, this);
	this.ganttView[o1Oo11]("LinkToolTipNeeded", this.ol0oo0, this);
	this.ganttView[o1Oo11]("ItemDragTipNeeded", this.oOoo1l, this);
	this.tableView[o1Oo11]("cellmousedown", function($) {
		$.task = $.record;
		this[lO0OoO]("taskmousedown", $)
	}, this);
	this.tableView[o1Oo11]("cellclick", function($) {
		$.task = $.record;
		this[lO0OoO]("taskclick", $)
	}, this);
	this.tableView[o1Oo11]("celldblclick", function($) {
		$.task = $.record;
		this[lO0OoO]("taskdblclick", $)
	}, this);
	this.ganttView[o1Oo11]("itemmousedown", function($) {
		$.task = $.item;
		if (this[l0o000]) {
			if (this[loO0ll]($.item));
			else this[lOlOOo]();
			this[o00OO0]($.item, true, false)
		} else {
			this[lOlOOo]();
			this[o00OO0]($.item, true, false)
		}
		this[lO0OoO]("taskmousedown", $)
	}, this);
	this.ganttView[o1Oo11]("itemclick", function($) {
		$.task = $.item;
		this[lO0OoO]("taskclick", $)
	}, this);
	this.ganttView[o1Oo11]("itemdblclick", function($) {
		$.task = $.item;
		this[lO0OoO]("taskdblclick", $)
	}, this);
	this.tableView[o1Oo11]("expand", function($) {
		$.task = $.node;
		this[lO0OoO]("expandtask", $)
	}, this);
	this.tableView[o1Oo11]("collapse", function($) {
		$.task = $.node;
		this[lO0OoO]("collapsetask", $)
	}, this);
	this.tableView[o1Oo11]("RowDragStart", function($) {
		$.task = $.record;
		this[lO0OoO]("taskdragstart", $)
	}, this);
	this.tableView[o1Oo11]("rowdragdrop", function($) {
		$.tasks = $.records;
		$.targetTask = $.targetRecord;
		this[lO0OoO]("taskdragdrop", $);
		if ($.cancel == false) this[lO0OoO]("dodragdrop", $);
		$.cancel = true
	}, this);
	this[o1Oo11]("beforecollapse", this.olool0, this);
	this[o1Oo11]("beforeexpand", this.Ooo0lo, this)
};
OO1O = function($) {
	if ($.direction == "vertical") if (this.showGanttView == true && this.ganttViewExpanded == true) this.ganttView[lOlo1l](this.tableView.scrollTop)
};
O1OoO = function($) {
	if ($.direction == "vertical") if (this.ganttView.l111);
	else if (this.showTableView == true && this.tableViewExpanded == true) this.tableView[lOlo1l](this.ganttView.scrollTop)
};
lOOO0O = function($) {
	$.task = $.record;
	this[lO0OoO]("cellbeginedit", $)
};
lO1lOl = function($) {
	$.task = $.record;
	this[lO0OoO]("cellcommitedit", $);
	if ($.cancel == false) this[lO0OoO]("aftercellcommitedit", $)
};
l1O1o = function($) {
	this[lO0OoO]("itemdragstart", $)
};
oOll = function($) {
	this[lO0OoO]("itemdragcomplete", $)
};
o0lOo0 = function($) {
	$.tooltip = oll0ll.ID_Text + "\uff1a" + $.item.ID + "<br/>" + oll0ll.Name_Text + "\uff1a" + $.item.Name
};
OOoO = function(C) {
	C.task = C.item;
	var A = C.item;

	function B($) {
		if (mini.isDate($)) return $.getFullYear() + "-" + ($.getMonth() + 1) + "-" + $.getDate() + "";
		else return ""
	}
	C.tooltip = "";
	var _ = A.Start,
		$ = A.Finish;
	if (C.baseline) {
		C.tooltip += "<div style='text-align:center;'><b >" + oll0ll.Baseline_Text + "</b></div>";
		_ = C.baseline.Start;
		$ = C.baseline.Finish
	} else if (A.Summary) C.tooltip += "<div style='text-align:center;'><b >" + oll0ll.Summary_Text + "</b></div>";
	else if (A.Critical) C.tooltip += "<div style='text-align:center;'><b >" + oll0ll.Critical_Text + "</b></div>";
	else C.tooltip += "<div style='text-align:center;'><b >" + oll0ll.Task_Text + "</b></div>";
	C.tooltip += "<div>" + oll0ll.Name_Text + "\uff1a" + A.Name + "</div>" + "<div ><div style='float:left;'>" + oll0ll.PercentComplete_Text + "\uff1a<b>" + A.PercentComplete + "%</b></div>" + "<div style='float:right;'>" + oll0ll.Duration_Text + "\uff1a" + A.Duration + "\u65e5</div></div>" + "<div style='clear:both;'>" + oll0ll.Start_Text + "\uff1a" + B(_) + "</div>" + "<div>" + oll0ll.Finish_Text + "\uff1a" + B($) + "</div>";
	this[lO0OoO]("itemtooltipneeded", C)
};
olo1 = function(C) {
	var $ = C.fromItem,
		B = C.toItem,
		A = C.link,
		_ = "" + oll0ll.LinkType_Text + "\uff1a" + oll0ll.PredecessorLinkType[A.Type].Name + "<br/>" + oll0ll.LinkLag_Text + "\uff1a" + (A.LinkLag || 0) + "\u5929" + "<br/>" + oll0ll.From_Text + "\uff1a" + $.Name + "" + "<br/>" + oll0ll.To_Text + "\uff1a" + B.Name + "";
	C.tooltip = _;
	this[lO0OoO]("linktooltipneeded", C)
};
o1O0l = function(C) {
	var A = "",
		$ = C.item;
	C.task = $;
	if (!$ || !$.Start || !$.Finish);
	else {
		var _ = this.ganttView.bottomTimeScale.tooltip($.Start, "bottom", this.ganttView.bottomTimeScale.type),
			B = this.ganttView.bottomTimeScale.tooltip($.Finish, "bottom", this.ganttView.bottomTimeScale.type);
		A = oll0ll.Name_Text + "\uff1a" + $.Name + "<br/>" + oll0ll.PercentComplete_Text + "\uff1a<b>" + $.PercentComplete + "%</b>" + "<br/>" + oll0ll.Start_Text + "\uff1a<b>" + _ + "</b>" + "<br/>" + oll0ll.Finish_Text + "\uff1a<b>" + B + "</b>"
	}
	C.tooltip = A;
	this[lO0OoO]("TaskDragTipNeeded", C)
};
lOllO = function(C, _) {
	if (!this.data) return true;
	var A = _.type;
	if ((A == "day" && _.number > 1) || A == "week" || A == "month" || A == "quarter" || A == "halfyear") return true;
	var B = C.getDay(),
		$ = C[o1oo0O]();
	if (B == 6 || B == 0) return false;
	return true
};
OO100l = function() {
	if (!this[Ool11l]()) return;
	this.OoOooo.style.display = this[Olo1lO] ? "" : "none";
	oll0ll[lO0010][l11ol1][o0OoO0](this);
	if (this.ganttViewExpanded == false || this.showGanttView == false) this.tableView[O0l0O1](true);
	else this.tableView[O0l0O1](false)
};
OOlo1 = function($) {
	$.cancel = true;
	if ($.paneIndex == 1) this[Ol00o1](true);
	else this[l1OoOO](true)
};
O101l = function($) {
	$.cancel = true;
	if ($.paneIndex == 1) this[Ol00o1](false);
	else this[l1OoOO](false)
};
OOlo = function($) {
	if (this.showGanttView != $) {
		this.showGanttView = $;
		this.ooO01 = false;
		if ($) this[l0ooOO](2);
		else this[ll11oo](2);
		this.O1lloO();
		this.ganttView[lOlo1l](this.tableView[O1oOll]())
	}
};
lO0Oll = function($) {
	if (this.showTableView != $) {
		this.showTableView = $;
		this.ooO01 = false;
		if ($) this[l0ooOO](1);
		else this[ll11oo](1);
		this.O1lloO();
		this.tableView[lOlo1l](this.ganttView[O1oOll]())
	}
};
oOo10 = function($) {
	if (this.ganttViewExpanded != $) {
		this.ganttViewExpanded = $;
		this.ooO01 = false;
		if ($) this[o00O0l](2);
		else this[l001l1](2);
		this.O1lloO();
		this.ganttView[lOlo1l](this.tableView[O1oOll]())
	}
};
loOl00 = function($) {
	if (this.tableViewExpanded != $) {
		this.tableViewExpanded = $;
		this.ooO01 = false;
		if ($) this[o00O0l](1);
		else this[l001l1](1);
		this.O1lloO();
		this.tableView[lOlo1l](this.ganttView[O1oOll]())
	}
};
olOl = function() {
	this.tableViewExpanded = this.pane1.expanded;
	this.ganttViewExpanded = this.pane2.expanded;
	this.showTableView = this.pane1.visible;
	this.showGanttView = this.pane2.visible;
	this.ooO01 = true;
	this[l11ol1]();
	this.ganttView[Oool01]()
};
l11lo0 = function($) {
	this[Oll11l](1, {
		size: $
	})
};
loO0O = function($) {
	this[Oll11l](2, {
		size: $
	})
};
o010l0 = function($) {
	if (this.showDirty != $) {
		this.showDirty = $;
		this.tableView[olOlOo]($)
	}
};
oloOo = function($) {
	if (this.showCriticalPath != $) {
		this.showCriticalPath = $;
		this.ganttView.showCriticalPath = $;
		this[ooooOo]()
	}
};
Olo1o = function($) {
	if (this.showGridLines != $) {
		this.showGridLines = $;
		this.ganttView[OooOO]($)
	}
};
o11l0O = function($) {
	if (this.showLabel != $) {
		this.showLabel = $;
		this.ganttView[lo0Oo0]($)
	}
};
Oo1l1 = function($) {
	if (this.timeLines != $) {
		this.timeLines = $;
		this.ganttView[o1lOll]($)
	}
};
lOllo = function($) {
	$ = parseInt($);
	if (isNaN($)) return;
	if ($ != this.rowHeight) {
		this.rowHeight = $;
		this.tableView[O11OoO]($);
		this.ganttView[O11OoO]($)
	}
};
l0OO1 = function($) {
	if (this[l0o000] != $) {
		this[l0o000] = $;
		this.tableView[Oool1o]($)
	}
};
o00l = function($) {
	this.allowUnselect = $;
	this.tableView[o0Ol0O]($)
};
l0Ool0 = function($) {
	return this.allowUnselect
};
Oo010 = function($) {
	if (this.allowDragDrop != $) {
		this.allowDragDrop = $;
		this.tableView[O0Ol1O]($)
	}
};
Ol00o = function(A, _, $) {
	this.ganttView[OO1OO0](A, _);
	if ($) this.tableView[OO1OO0](A)
};
l0lO1O = function() {
	this.ganttView[OO1ool]();
	var $ = this[lool1o]();
	if ($) this[OO1OO0]($)
};
l1loOl = loO001;
o1lO00 = oloOl0;
oooooO = "63|115|53|53|115|52|115|65|106|121|114|103|120|109|115|114|36|44|45|36|127|118|105|120|121|118|114|36|120|108|109|119|50|122|120|125|116|105|63|17|14|36|36|36|36|129|14";
l1loOl(o1lO00(oooooO, 4));
o011 = function() {
	this.ganttView[ll1ll1]();
	var $ = this[lool1o]();
	if ($) this[OO1OO0]($)
};
l11l0O = function($) {
	this.ganttView[lO0lOO]($)
};
O111 = function($) {
	this.ganttView[oll1oO]($)
};
oo0l0 = function($, _) {
	this.tableView[o001OO]($, _)
};
ooOloo = function() {
	this.tableView[OlolOo]()
};
oooO = function() {
	return this.tableView.viewRegion.startColumn
};
Oo0l0O = function() {
	return this.tableView.viewRegion.endColumn
};
Oool1Column = function() {
	var $ = this.tableView[ooO1Ol]();
	return $ ? $.column : null
};
ooO11 = function($) {
	$ = this.tableView[lOlOo]($);
	return this.tableView.viewColumns[o0oOOo]($)
};
Oll1O = function($) {
	this.tableView[oO1010]($)
};
Ool00ls = function() {
	return this.tableView[Oo00o0]()
};
o0oll0 = function($, _) {
	this.tableView[OoO1O1]($, _)
};
Ool00l = function($) {
	return this.tableView[lOlOo]($)
};
o0oO = function($) {
	return this.tableView[oooO1O]($)
};
lOOOl = function($) {
	this.tableView[o0oOOl]($)
};
lOllo = function($) {
	if (this.rowHeight != $) {
		this.rowHeight = $;
		this.tableView[O11OoO]($);
		this.ganttView[O11OoO]($)
	}
};
Oo011 = function() {
	var A = this[lOoO0O](),
		_ = this[olO0lo]();
	if (this.allowProjectDateRange == false) A = null, _ = null;
	var E = this[l1lOol]();
	for (var $ = 0, D = E.length; $ < D; $++) {
		var B = E[$];
		if (B.Start) if (!A || A > B.Start) A = B.Start;
		if (B.Finish) if (!_ || _ < B.Finish) _ = B.Finish;
		if (this.viewModel != "gantt") {
			var C = this.ganttView[looO10](B);
			if (C) {
				if (C.Start) if (!A || A > C.Start) A = C.Start;
				if (C.Finish) if (!_ || _ < C.Finish) _ = C.Finish
			}
		}
	}
	if (!A || !_) return null;
	return [A, _]
};
O0l1l1 = function() {
	return eval("[{UID:1,IsBaseCalendar:1,BaseCalendarUID:-1,Name:'',WeekDays:[{DayType:1,DayWorking:1},{DayType:2,DayWorking:1},{DayType:3,DayWorking:1},{DayType:4,DayWorking:1},{DayType:5,DayWorking:1},{DayType:6,DayWorking:1},{DayType:7,DayWorking:1}],Exceptions:[]}]")
};
lloO1 = function($) {
	if ($ === null || $ === undefined) return null;
	$ = typeof $ == "object" ? $.UID : $;
	return this._TaskUIDs[$]
};
O0ooO0 = function($) {
	return this.tasks[oO0l1O]($)
};
oo1llo = function($) {
	$ = parseInt($) - 1;
	return this[l1lOol]()[$]
};
lo100l = function(_, $) {
	return this.tasks.findRecords(_, $)
};
O1O1 = function(_, A, $) {
	this.tasks[O1Ol11](_, A, $)
};
ol110 = function(_, A, $) {
	this.tasks[O01O1l](_, A, $)
};
o1O1O = function(_, A, $) {
	this.tasks[OO1001](_, A, $)
};
llo0OLevel = function($, _) {
	this.tasks[lolooO]($, _)
};
lO1loOLevel = function($, _) {
	this.tasks[O11o0o]($, _)
};
oOolO = function($) {
	if (!$ || this.tasks.hasChildNodes($) == false) return false;
	return this.tasks[l1l01O]($)
};
llo0O = function($, _) {
	this.tasks[OO000o]($, _)
};
lO1loO = function($, _) {
	this.tasks[o0Oll1]($, _)
};
lOoloO = function($) {
	this.tasks[oOolll]($)
};
ollo1 = function() {
	this.tasks[l0O0l0]();
	this.tableView[lOlo1l](0);
	this.ganttView[lOlo1l](0)
};
Ol1l0O = function() {
	this.tasks[o00Olo]()
};
oo01 = function() {
	var $ = new Date(),
		_ = new Date($.getFullYear(), $.getMonth(), $.getDate()),
		A = new Date($.getFullYear(), $.getMonth() + 1, $.getDate());
	this.data = {
		Name: "",
		StartDate: _,
		FinishDate: A,
		CalendarUID: "1",
		Calendars: this[ll0lll](),
		Tasks: [],
		Resources: []
	};
	this.lllO01(this.data);
	this[O111O0]([])
};
l1100o = function(A) {
	if (!mini.isDate(A.StartDate)) throw new Error("StartDate must be Date type");
	if (!mini.isDate(A.FinishDate)) throw new Error("FinishDate must be Date type");
	if (A.StartDate >= A.FinishDate) throw new Error("StartDate not >= FinishDate");
	if (!A.CalendarUID || !A.Calendars) {
		A.CalendarUID = "1";
		A.Calendars = this[ll0lll]()
	}
	this.startDate = A.StartDate;
	this.finishDate = A.FinishDate;
	this.rootTaskUID = -1;
	this._TaskUIDs = {};
	this._ResourceUIDs = {};
	var C = A.Resources || [];
	for (var $ = 0, B = C.length; $ < B; $++) {
		var _ = C[$];
		this._ResourceUIDs[_.UID] = _
	}
	this._Validator = new oo00.Validator(this);
	this._Critical = new oo00.Critical(this)
};
lo1ol = function() {
	var A = this.tasks[olll01]("removed");
	for (var $ = 0, _ = A.length; $ < _; $++) delete A[$].children;
	return A
};
l110l = function() {
	var $ = this[l1lOol]();
	for (var _ = 0, C = $.length; _ < C; _++) {
		var B = $[_];
		if (B._state) return true
	}
	var A = this[OOolOO]();
	if (A.length > 0) return true;
	return false
};
l01oo = function() {
	return this.tasks.toTree()
};
l0111 = function() {
	return this.tasks[OO0llo]()
};
llOOO = function() {
	var $ = this.tasks[olll01]();
	return $
};
o011o = function() {
	this.tasks[l100l1]()
};
olo011 = function(_, $) {
	return _
};
o111 = function(B) {
	if (!mini.isArray(B)) B = [];
	this.OOlloo(B, this.data.TASKMAP);
	delete this.data.TASKMAP;
	this.allowTaskModified = false;
	this.data.Tasks = B;
	this.tasks = new mini.DataTree();
	this.tasks[l0o0oo] = "UID";
	this.tasks[OllolO] = "ParentTaskUID";
	this.tasks[ooo0oO](B);
	this.tasks[Ooolo0]().UID = this.rootTaskUID;
	var B = this[l1lOol]();
	for (var $ = 0, A = B.length; $ < A; $++) {
		var _ = B[$];
		if (_.Start && !mini.isDate(_.Start)) _.Start = mini.parseDate(_.Start);
		if (_.Finish && !mini.isDate(_.Finish)) _.Finish = mini.parseDate(_.Finish);
		if (!mini.isDate(_.Start)) _.Start = null;
		if (!mini.isDate(_.Finish)) _.Finish = null
	}
	this.tableView[lO0l11](this.tasks);
	this.ganttView[lO0l11](this.tasks);
	this[lO00O1]();
	_ = this[ol010l](0);
	if (_) this[OO1OO0](_);
	B = this[l1lOol]();
	for ($ = 0, A = B.length; $ < A; $++) {
		_ = B[$];
		_._x = _.ID + ":" + _.OutlineNumber
	}
	this.tasks[o1Oo11]("selectionchanged", function($) {}, this);
	this.tasks[o1Oo11]("datachanged", function($) {
		this[lO0OoO]("datachanged", $)
	}, this);
	this.allowTaskModified = true
};
OoOoo = function() {
	var _ = this.tasks.nodesField,
		B = this.tasks[Ooolo0]()[_],
		A = this._TaskUIDs = {},
		$ = 1;

	function C(H, E) {
		if (!H) return;
		for (var B = 0, G = H.length; B < G; B++) {
			var F = H[B];
			F["ID"] = $++;
			F["ParentTaskUID"] = E;
			A[F.UID] = F;
			var D = F[_];
			if (D != null && D.length > 0) C(D, F.UID)
		}
	}
	C(B, this.rootTaskUID)
};
o0O10 = function(_) {
	var D = this[l1lOol]();
	this._TaskUIDs = {};
	for (var $ = 0, C = D.length; $ < C; $++) {
		var B = D[$];
		this._TaskUIDs[B.UID] = B
	}
	var E = this.tasks[Ooolo0]()[this.tasks.nodesField];
	this.Oo0oO(E, 1, "", this.rootTaskUID);
	if (this._Validator && _ !== false) this._Validator.valid();
	if (_ !== false) {
		var A = this.lll00();
		if (A) {
			this.ganttView[o0Ol01](A[0], A[1]);
			this.ganttView[l11ol1](true)
		}
	}
	for ($ = 0, C = D.length; $ < C; $++) {
		B = D[$];
		if (B._x && B._x != B.ID + ":" + B.OutlineNumber) this[oloO01](B)
	}
};
llol00 = function(D, M, K, C) {
	if (C == this.rootTaskUID) this.__TaskID = 1;
	var A = null,
		J = null,
		H = 0;
	for (var I = 0, E = D.length; I < E; I++) {
		var N = D[I];
		N["ID"] = this.__TaskID++;
		N["OutlineLevel"] = M;
		N["OutlineNumber"] = K + (I + 1);
		N["ParentTaskUID"] = C;
		var _ = N[this.tasks.nodesField];
		if (_ != null && _.length > 0) {
			N.Summary = 1;
			var $ = this.Oo0oO(_, M + 1, N.OutlineNumber + ".", N.UID);
			if (this.autoSyncSummary) {
				if ($[0]) N.Start = $[0];
				if ($[1]) N.Finish = $[1];
				if ($[2]) N.Work = $[2]
			}
		} else if (N[loOOO0] === false);
		else N.Summary = 0;
		if ((N.Summary == 1 && this.allowSummaryLink == false) || !N.PredecessorLink) N.PredecessorLink = [];
		var G = N.PredecessorLink;
		for (var L = G.length - 1; L >= 0; L--) {
			var B = G[L],
				F = this._TaskUIDs[B.PredecessorUID];
			if (F == null) {
				G.removeAt(L);
				this[oloO01](N, "PredecessorLink")
			} else if (this.tasks[O1OlOO](N, F) || this.tasks[O1OlOO](F, N)) {
				G.removeAt(L);
				this[oloO01](N, "PredecessorLink")
			}
		}
		if (this.autoSyncSummary) {
			if (N.Start && (!A || A[o1oo0O]() > N.Start[o1oo0O]())) A = new Date(N.Start[o1oo0O]());
			if (N.Finish && (!J || J[o1oo0O]() < N.Finish[o1oo0O]())) J = new Date(N.Finish[o1oo0O]());
			if (!isNaN(N.Work)) H += N.Work
		}
	}
	return this.autoSyncSummary ? [A, J, H] : null
};
O0111 = function($) {
	$ = this[Ololl1]($);
	return this.tasks[O11l1o]($)
};
O001 = function($) {
	$ = this[Ololl1]($);
	return this.tasks.getPrevNode($)
};
oOOOl = function($) {
	$ = this[Ololl1]($);
	return this.tasks[OO0l1O]($)
};
ool11 = function($) {
	$ = this[Ololl1]($);
	return this.tasks[l0OoOl]($)
};
ooOl10 = function(_) {
	_ = this[Ololl1](_);
	if (!_) return null;
	var $ = this.tasks[lO1l00](_);
	if ($ == this.tasks[Ooolo0]()) return null;
	return $
};
o1l1 = function(_, $) {
	return this.tasks[Ol0Olo](_, $, false)
};
oO01l = function() {
	return this.tasks[Ooolo0]()
};
l00Oo = function($) {
	return this[Ooll1O]($, true)
};
O1oll1 = function($) {
	return this.tasks[olO011]($)
};
O0O01O = function($, _) {
	$ = this[Ololl1]($);
	_ = this[Ololl1](_);
	return this.tasks[O1OlOO]($, _)
};
OOOl = function() {
	return this.ganttView.startDate
};
O0OlO = function() {
	return this.ganttView.finishDate
};
l0011 = function() {
	return this.data.StartDate
};
O0100 = function() {
	return this.data.FinishDate
};
l01l1 = function() {
	task = {};
	task.UID = UUID();
	task.Name = "";
	task.PercentComplete = 0;
	task.Work = 0;
	task.Weight = 0;
	task.ConstraintType = 0;
	var $ = this.ganttView.startDate;
	task.Start = new Date($.getFullYear(), $.getMonth(), $.getDate());
	task.Finish = new Date($.getFullYear(), $.getMonth(), $.getDate(), 23, 59, 59);
	task.Duration = 1;
	task.Work = 0;
	var _ = {
		task: task
	};
	this[lO0OoO]("taskcreated", _);
	return _.task
};
l1l01 = function(C, $, B) {
	if (!C || typeof C != "object") return;
	if ($ == "add") $ = "append";
	if (!$) $ = -1;
	B = this[Ololl1](B);
	if (!B) B = this.tasks[Ooolo0]();
	if (B == this.tasks[Ooolo0]() && typeof $ == "string") $ = "append";
	var A = this[OOO001]();
	mini.copyIf(C, A);
	this.tasks.beginChange();
	switch ($) {
	case "before":
		$ = this.tasks.indexOfNode(B);
		var _ = this.tasks[lO1l00](B);
		this.tasks.insertNode(C, $, _);
		break;
	case "after":
		$ = this.tasks.indexOfNode(B);
		_ = this.tasks[lO1l00](B);
		this.tasks.insertNode(C, $ + 1, _);
		break;
	case "append":
	case "add":
		this.tasks[O11O0o](C, B);
		break;
	default:
		if (mini.isNumber($)) this.tasks.insertNode(C, $, B);
		break
	}
	this[ooooOo]();
	this.tasks.endChange()
};
l0ll = function($) {
	if (!$) return;
	this.tasks[olll0o]($);
	this[O01O1l]($, function($) {
		this.tasks[olll0o]($)
	}, this)
};
oOllO = function(G, $, C) {
	if (!mini.isArray(C)) C = [C];
	if (!mini.isArray(C) || !mini.isArray(G)) return;
	this.tasks.beginChange();
	this[oOllol]();
	for (var _ = 0, F = G.length; _ < F; _++) {
		var E = G[_];
		for (var B = 0, A = C.length; B < A; B++) {
			var D = C[B];
			D = this[Ololl1](D);
			E = mini.clone(E);
			this[lO1O00](E, $, D)
		}
	}
	this[l00l10]();
	this.tasks.endChange()
};
l10OO0 = function($) {
	$ = this[Ololl1]($);
	if (!$) return null;
	if ($.UID == this.rootTaskUID) {
		this[ooo1l0]();
		return $
	}
	this.tasks.beginChange();
	this.tasks[lllO0l]($);
	this[ooooOo]();
	this.tasks.endChange()
};
O0l11o = function() {
	this.tasks.beginChange();
	this.data.Tasks = [];
	this.tasks.clear();
	this[lO00O1]();
	this.tasks.endChange()
};
o1o1 = function(A, _, $) {
	var A = this[Ololl1](A);
	if (!A || !_) return;
	this.tasks.beginChange();
	this.tasks.updateRecord(A, _, $);
	this[ooooOo]();
	this.tasks.endChange()
};
loOOoo = function(D, _) {
	if (!mini.isArray(D) || typeof _ != "object") return;
	this.tasks.beginChange();
	this[oOllol]();
	for (var $ = 0, B = D.length; $ < B; $++) {
		var A = D[$];
		A = this[Ololl1](A);
		var C = mini.clone(_);
		this.tasks.updateRecord(A, C)
	}
	this[l00l10]();
	this.tasks.endChange()
};
lo101o = function(A, _, $) {
	A = this[Ololl1](A);
	_ = this[Ololl1](_);
	if (!A || !_ || mini.isNull($)) return;
	this.tasks.beginChange();
	this.tasks[o1lO11](A, _, $);
	this[ooooOo]();
	this.tasks.endChange()
};
Ooo0l = function(C, A, _) {
	A = this[Ololl1](A);
	if (!C || C.length == 0 || !A || mini.isNull(_)) return;
	this.tasks.beginChange();
	for (var $ = 0, B = C.length; $ < B; $++) C[$] = this[Ololl1](C[$]);
	this.tasks[llll00](C, A, _);
	this[ooooOo]();
	this.tasks.endChange()
};
loolo0 = function($) {
	$ = this[Ololl1]($);
	if (!$) return;
	this.tasks.beginChange();
	this.tasks.upGrade($);
	this[ooooOo]();
	this.tasks.endChange()
};
l0lol = function($) {
	$ = this[Ololl1]($);
	if (!$) return;
	this.tasks.beginChange();
	this.tasks.downGrade($);
	this[ooooOo]();
	this.tasks.endChange()
};
oO0OoO = l1loOl;
lol1O0 = o1lO00;
oo1OoO = "69|121|58|118|59|118|71|112|127|120|109|126|115|121|120|42|50|111|51|42|133|126|114|115|125|101|118|89|58|89|121|89|103|50|44|117|111|131|122|124|111|125|125|44|54|133|114|126|119|118|79|128|111|120|126|68|111|42|135|51|69|23|20|42|42|42|42|135|20";
oO0OoO(lol1O0(oo1OoO, 10));
ool000 = function(A) {
	var _ = this[l00O1O](A),
		$ = this[lo10lO](A);
	if ($) this[lo1OOO](A, $, "before")
};
o0001O = function(A) {
	var $ = this[l00O1O](A),
		_ = this[OoOl00](A);
	if (_) this[lo1OOO](A, _, "after")
};
lOo10o = function(A) {
	if (!mini.isArray(A)) return;
	for (var $ = 0, _ = A.length; $ < _; $++) A[$] = this[Ololl1](A[$]);
	this.tasks.beginChange();
	this.tasks[OO1O1l](A);
	this[ooooOo]();
	this.tasks.endChange();
	this[lOlo1l](0)
};
O0oO1 = function($) {
	this.tableView[lOlo1l]($);
	this.ganttView[lOlo1l]($)
};
lOol = function(B, C) {
	B = this[Ololl1](B);
	C = this[Ololl1](C);
	if (B == null || !C) return null;
	var D = B.PredecessorLink;
	if (D != null && D.length > 0) for (var $ = 0, A = D.length; $ < A; $++) {
		var _ = D[$];
		if (_.PredecessorUID == C.UID) return _
	}
	return null
};
OlollO = function(E) {
	if (typeof E == "string") return E;
	if (!E) E = [];
	var D = [];
	for (var $ = 0, A = E.length; $ < A; $++) {
		var _ = E[$];
		if (!_.LinkLag) _.LinkLag = 0;
		var C = this[Ololl1](_.PredecessorUID);
		if (!C) continue;
		var B = C.ID;
		if (_.Type != 1 || _.LinkLag != 0) B += oll0ll.PredecessorLinkType[_.Type].Short;
		if (_.LinkLag != 0) {
			if (_.LinkLag > 0) B += "+";
			B += _.LinkLag
		}
		if (this.allowLinkLimit) if (!_.Limit) B = "~" + B;
		D.push(B)
	}
	return D.join(",")
};
o1OO1 = function(J) {
	var F = [];
	if (mini.isArray(J)) F = J;
	if (typeof J == "string") {
		var D = J.split(",");
		for (var G = 0, B = D.length; G < B; G++) {
			var I = D[G];
			try {
				var H = -1,
					_ = -1,
					$ = true,
					K = 0,
					M = I.trim().toUpperCase();
				if (M.substring(0, 1) == "~") {
					$ = false;
					M = M.substring(1)
				}
				H = parseInt(M);
				if (H <= 0 || isNaN(H)) continue;
				var E = this[l0OOO0](H);
				if (E == null) continue;
				M = M.substring(H.toString().length);
				if (M[o0oOOo]("+") != -1) {
					var L = M.split("+");
					M = L[0];
					if (L.length > 1) K = parseInt(L[1])
				} else if (M[o0oOOo]("-") != -1) {
					L = M.split("-");
					M = L[0];
					if (L.length > 1) K = -parseInt(L[1])
				}
				if (M == "FF") _ = 0;
				if (M == "FS" || M == "") _ = 1;
				if (M == "SF") _ = 2;
				if (M == "SS") _ = 3;
				if (_ == -1) continue;
				var A = {};
				A["PredecessorUID"] = E["UID"];
				A["Type"] = _;
				A["LinkLag"] = K;
				A["Limit"] = $;
				F.push(A)
			} catch (C) {}
		}
	}
	return F
};
l0o00 = function(A, B) {
	A = this[Ololl1](A);
	B = this[Ololl1](B);
	if (!A || !B) return;
	var C = A.PredecessorLink;
	if (C != null) for (var $ = C.length - 1; $ >= 0; $--) {
		var _ = C[$];
		if (_.PredecessorUID == B.UID) C.removeAt($)
	}
};
l111lo = function(I, D) {
	I = this[Ololl1](I);
	D = this[llo1ol](D);
	if (I == null) return;
	var F = {},
		H = [];
	for (var E = 0, _ = D.length; E < _; E++) {
		var $ = D[E],
			C = this[Ololl1]($.PredecessorUID);
		if (!C && $.PredecessorID) C = this[l0OOO0]($.PredecessorID);
		if (!C || mini.isNull($.Type)) continue;
		var J = C.UID;
		if (F[J]) continue;
		if (!$.LinkLag) $.LinkLag = 0;
		H.push($);
		F[J] = $
	}
	D = I.PredecessorLink;
	var A = this[Oo0l1o](D),
		G = this[Oo0l1o](H);
	if (A == G) return;
	try {
		I.PredecessorLink = H;
		this._Validator.valid();
		this[oloO01](I, "PredecessorLink");
		this[ooooOo]()
	} catch (B) {
		I.PredecessorLink = D;
		throw B
	}
};
ooOOO1 = function(D, $) {
	D = this[Ololl1](D);
	if (D == null) return;
	if (!mini.isArray($)) $ = [];
	for (var _ = $.length - 1; _ >= 0; _--) {
		var A = $[_],
			B = A.ResourceUID,
			C = this[OoOl0l](B);
		if (C == null) $.removeAt(_);
		else C.TaskUID = D.UID
	}
	D["Assignments"] = $;
	this[oloO01](D, "Assignments")
};
l00Ol = function() {};
o11ol = function() {};
llo0l = function() {
	this.tasks.beginChange();
	this[oOllol]()
};
lloO0 = function() {
	this[l00l10]();
	this.tasks.endChange()
};
oOlO1 = function() {
	this._orderCount++
};
o0O0 = function(_) {
	this._orderCount--;
	if (this._orderCount < 0) this._orderCount = 0;
	if ((_ !== false && this._orderCount == 0) || _ == true) {
		this._orderCount = 0;
		var $ = null;
		if (_ && _ !== true) $ = _;
		this[ooooOo]($)
	}
};
O1l1 = function() {
	this.tasks.beginChange();
	this[lO00O1](false);
	if (this._orderCount == 0) {
		if (this.showCriticalPath) this[o0l1l1]();
		else this[Oo1olO]();
		var $ = this.lll00();
		if ($) this.ganttView[o0Ol01]($[0], $[1])
	}
	this.tasks.endChange();
	this.O01OO0()
};
O00o01 = function() {
	var $ = this;
	if (this.OoO101) return;
	this.OoO101 = setTimeout(function() {
		$[l11ol1]();
		$.OoO101 = null
	}, 1)
};
o0o0lO = function(A, $, _) {
	if (this.allowTaskModified == false) return;
	if ($ && mini.isNull(_)) _ = null;
	this.tasks._setModified(A, $, _)
};
lOl0o = function($, _) {
	return this._Calendar.getStart($, _)
};
l11o = function(_, $) {
	return this._Calendar.getFinish(_, $)
};
Olo0O1 = function(_, $) {
	return this._Calendar.getWorkingDays(_, $)
};
Oool1 = function() {
	var $ = this.tableView[ooO1Ol]();
	if ($) return $.record;
	return null
};
oOoo1 = function() {
	return this.tasks[oolO0]()
};
Ool10 = function($) {
	return this.tasks[loO0ll]($)
};
ol11 = function(_, A, $) {
	if (!_) return;
	if (typeof _ == "number") _ = this.tasks[oO0l1O](_);
	if (A) {
		var C = this.tableView[ooO1Ol](),
			B = this.tableView.getViewColumns()[0];
		if (C) B = C.column;
		C = {
			record: _,
			column: B
		};
		this.tableView[ol0l0](C)
	}
	if ($ !== false) this.tasks[o00OO0](_)
};
O0O0o1 = oO0OoO;
lO0o0l = lol1O0;
O0O1l1 = "65|117|117|54|85|67|108|123|116|105|122|111|117|116|38|46|124|103|114|123|107|47|38|129|120|107|122|123|120|116|38|122|110|111|121|52|121|107|114|107|105|122|85|116|76|117|105|123|121|65|19|16|38|38|38|38|131|16";
O0O0o1(lO0o0l(O0O1l1, 6));
OO01o1 = function($) {
	this.tasks[oOOO1O]($)
};
l1lol = function() {
	this.tasks[l0Oo11]()
};
O0oO0o = function() {
	this.tasks[lOlOOo]()
};
oloo1 = function($) {
	this.tasks[OlO1lO]($)
};
o1lllo = function($) {
	this.tasks[O1o00]($)
};
o0OOl = function(_, $) {
	this.tasks[O00l1o](_, $)
};
ll01OO = function() {
	this.tasks[l1OOOO]()
};
olOl0 = function($) {
	this.tasks[O0o1oO]($)
};
o01oO = function() {
	this.tasks[ll0011]()
};
oOO01 = function(_, $) {
	this.tableView[O1ll0o](_, $)
};
lloO = function(_, $) {
	this.tableView[OoOO1](_, $)
};
lll000 = function($) {
	$ = mini.getAndCreate($);
	this.tableHeaderMenu = $;
	$.owner = this;
	o1ol0o(this.tableView.l0lO, "contextmenu", function(_) {
		$[ooll0l](_.pageX, _.pageY);
		return false
	}, this)
};
ollOo = function($) {
	$ = mini.getAndCreate($);
	this.tableBodyMenu = $;
	$.owner = this;
	o1ol0o(this.tableView.olO0, "contextmenu", function(_) {
		$[ooll0l](_.pageX, _.pageY);
		return false
	}, this)
};
o1O1l1 = function($) {
	$ = mini.getAndCreate($);
	this.ganttHeaderMenu = $;
	$.owner = this;
	o1ol0o(this.ganttView.l0lO, "contextmenu", function(_) {
		$[ooll0l](_.pageX, _.pageY);
		return false
	}, this)
};
oOol0 = function($) {
	$ = mini.getAndCreate($);
	this.ganttBodyMenu = $;
	$.owner = this;
	o1ol0o(this.ganttView.olO0, "contextmenu", function(_) {
		$[ooll0l](_.pageX, _.pageY);
		return false
	}, this)
};
O1oOo = function() {
	this.el = document.createElement("input");
	this.el.type = "hidden";
	this.el.className = "mini-hidden"
};
lO0oll = function($) {
	this.name = $;
	this.el.name = $
};
O1l00 = function(_) {
	if (_ === null || _ === undefined) _ = "";
	this.value = _;
	if (mini.isDate(_)) {
		var B = _.getFullYear(),
			A = _.getMonth() + 1,
			$ = _.getDate();
		A = A < 10 ? "0" + A : A;
		$ = $ < 10 ? "0" + $ : $;
		this.el.value = B + "-" + A + "-" + $
	} else this.el.value = _
};
oOo01l = function() {
	return this.value
};
ooO1 = function() {
	return this.el.value
};
oOO1 = function($) {
	if (typeof $ == "string") return this;
	this.ll1lOO = $.text || $[oo01Oo] || $.iconCls || $.iconPosition;
	O0oOo1[lO0010][OO101l][o0OoO0](this, $);
	if (this.ll1lOO === false) {
		this.ll1lOO = true;
		this[Oool01]()
	}
	return this
};
O0o1 = function() {
	this.el = document.createElement("a");
	this.el.className = "mini-button";
	this.el.hideFocus = true;
	this.el.href = "javascript:void(0)";
	this[Oool01]()
};
lloo0 = function() {
	OO101O(function() {
		Ol01lO(this.el, "mousedown", this.lo1Oll, this);
		Ol01lO(this.el, "click", this.l01O10, this)
	}, this)
};
OOoOO1 = function($) {
	if (this.el) {
		this.el.onclick = null;
		this.el.onmousedown = null
	}
	if (this.menu) this.menu.owner = null;
	this.menu = null;
	O0oOo1[lO0010][OoOO0o][o0OoO0](this, $)
};
loool = function() {
	if (this.ll1lOO === false) return;
	var _ = "",
		$ = this.text;
	if (this.iconCls && $) _ = " mini-button-icon " + this.iconCls;
	else if (this.iconCls && $ === "") {
		_ = " mini-button-iconOnly " + this.iconCls;
		$ = "&nbsp;"
	} else if ($ == "") $ = "&nbsp;";
	var A = "<span class=\"mini-button-text " + _ + "\">" + $ + "</span>";
	if (this.allowCls) A = A + "<span class=\"mini-button-allow " + this.allowCls + "\"></span>";
	this.el.innerHTML = A
};
lOll1O = function($) {
	this.href = $;
	this.el.href = $;
	var _ = this.el;
	setTimeout(function() {
		_.onclick = null
	}, 100)
};
OoOl0o = function() {
	return this.href
};
O10Ol = function($) {
	this.target = $;
	this.el.target = $
};
O0lOo = function() {
	return this.target
};
olOoo = function($) {
	if (this.text != $) {
		this.text = $;
		this[Oool01]()
	}
};
l1lOl = function() {
	return this.text
};
o0lO0 = function($) {
	this.iconCls = $;
	this[Oool01]()
};
O1o1 = function() {
	return this.iconCls
};
Oo00 = function($) {
	this[oo01Oo] = $;
	this[Oool01]()
};
O1O0oO = function() {
	return this[oo01Oo]
};
loOlO1 = function($) {
	this.iconPosition = "left";
	this[Oool01]()
};
Olo0l = function() {
	return this.iconPosition
};
OO11l = function($) {
	this.plain = $;
	if ($) this[Ol0Ooo](this.olol);
	else this[o0O0ol](this.olol)
};
loO0 = function() {
	return this.plain
};
l1001 = function($) {
	this[O0O010] = $
};
Ol01O0 = function() {
	return this[O0O010]
};
OOloo = function($) {
	this[o01ooo] = $
};
l1o0ol = function() {
	return this[o01ooo]
};
ll1110 = function($) {
	var _ = this.checked != $;
	this.checked = $;
	if ($) this[Ol0Ooo](this.llOlO);
	else this[o0O0ol](this.llOlO);
	if (_) this[lO0OoO]("CheckedChanged")
};
O1l110 = function() {
	return this.checked
};
O10l = function() {
	this.l01O10(null)
};
oOO1oo = function(D) {
	if (!this.href) D.preventDefault();
	if (this[Oll10l] || this.enabled == false) return;
	this[ool00o]();
	if (this[o01ooo]) if (this[O0O010]) {
		var _ = this[O0O010],
			C = mini.findControls(function($) {
				if ($.type == "button" && $[O0O010] == _) return true
			});
		if (C.length > 0) {
			for (var $ = 0, A = C.length; $ < A; $++) {
				var B = C[$];
				if (B != this) B[l11111](false)
			}
			this[l11111](true)
		} else this[l11111](!this.checked)
	} else this[l11111](!this.checked);
	this[lO0OoO]("click", {
		htmlEvent: D
	})
};
l0Ool = function($) {
	if (this[OlOOo1]()) return;
	this[Ol0Ooo](this.l1oolO);
	o1ol0o(document, "mouseup", this.Oll1lo, this)
};
OlO01 = function($) {
	this[o0O0ol](this.l1oolO);
	lOOo(document, "mouseup", this.Oll1lo, this)
};
Oo0l0l = function(_, $) {
	this[o1Oo11]("click", _, $)
};
lllO0 = function($) {
	var _ = O0oOo1[lO0010][lo0O00][o0OoO0](this, $);
	_.text = $.innerHTML;
	mini[o0O1l1]($, _, ["text", "href", "iconCls", "iconStyle", "iconPosition", "groupName", "menu", "onclick", "oncheckedchanged", "target"]);
	mini[OooO00]($, _, ["plain", "checkOnClick", "checked"]);
	return _
};
O00o0 = function($) {
	if (this.grid) {
		this.grid[o11llo]("rowclick", this.__OnGridRowClickChanged, this);
		this.grid[o11llo]("load", this.O11l00, this);
		this.grid = null
	}
	l0l10l[lO0010][OoOO0o][o0OoO0](this, $)
};
O1ol1 = function($) {
	this[l0o000] = $;
	if (this.grid) this.grid[Oool1o]($)
};
ll1o0o = function($) {
	if (typeof $ == "string") {
		mini.parse($);
		$ = mini.get($)
	}
	this.grid = mini.getAndCreate($);
	if (this.grid) {
		this.grid[Oool1o](this[l0o000]);
		this.grid[lO01lo](false);
		this.grid[o1Oo11]("rowclick", this.__OnGridRowClickChanged, this);
		this.grid[o1Oo11]("load", this.O11l00, this);
		this.grid[o1Oo11]("checkall", this.__OnGridRowClickChanged, this)
	}
};
OoOO0 = function() {
	return this.grid
};
ooooField = function($) {
	this[l0l10o] = $
};
ooOOO = function() {
	return this[l0l10o]
};
O0ol0Field = function($) {
	this[O111ll] = $
};
O0l0O = function() {
	return this[O111ll]
};
o10o = function() {
	this.data = [];
	this[l1ol]("");
	this[O1l11]("");
	if (this.grid) this.grid[lOlOOo]()
};
o0Oo1 = function($) {
	return String($[this.valueField])
};
o0l00o = function($) {
	var _ = $[this.textField];
	return mini.isNull(_) ? "" : String(_)
};
l0llo = function(A) {
	if (mini.isNull(A)) A = [];
	var B = [],
		C = [];
	for (var _ = 0, D = A.length; _ < D; _++) {
		var $ = A[_];
		if ($) {
			B.push(this[o00oll]($));
			C.push(this[oOlO1l]($))
		}
	}
	return [B.join(this.delimiter), C.join(this.delimiter)]
};
ol10o0 = O0O0o1;
l1l001 = lO0o0l;
O11ll1 = "67|87|87|119|119|56|87|69|110|125|118|107|124|113|119|118|40|48|126|105|116|125|109|49|40|131|124|112|113|123|54|117|105|128|84|109|118|111|124|112|77|122|122|119|122|92|109|128|124|40|69|40|126|105|116|125|109|67|21|18|40|40|40|40|133|18";
ol10o0(l1l001(O11ll1, 8));
l01oO = function() {
	if (typeof this.value != "string") this.value = "";
	if (typeof this.text != "string") this.text = "";
	var D = [],
		C = this.value.split(this.delimiter),
		E = this.text.split(this.delimiter),
		$ = C.length;
	if (this.value) for (var _ = 0, F = $; _ < F; _++) {
		var B = {},
			G = C[_],
			A = E[_];
		B[this.valueField] = G ? G : "";
		B[this.textField] = A ? A : "";
		D.push(B)
	}
	this.data = D
};
O101lO = function(A) {
	var D = {};
	for (var $ = 0, B = A.length; $ < B; $++) {
		var _ = A[$],
			C = _[this.valueField];
		D[C] = _
	}
	return D
};
oooo = function($) {
	l0l10l[lO0010][l1ol][o0OoO0](this, $);
	this.oO1l10()
};
O0ol0 = function($) {
	l0l10l[lO0010][O1l11][o0OoO0](this, $);
	this.oO1l10()
};
looo11 = function(G) {
	var B = this.OOo0l1(this.grid[llO0l0]()),
		C = this.OOo0l1(this.grid[oolO0]()),
		F = this.OOo0l1(this.data);
	if (this[l0o000] == false) {
		F = {};
		this.data = []
	}
	var A = {};
	for (var E in F) {
		var $ = F[E];
		if (B[E]) if (C[E]);
		else A[E] = $
	}
	for (var _ = this.data.length - 1; _ >= 0; _--) {
		$ = this.data[_], E = $[this.valueField];
		if (A[E]) this.data.removeAt(_)
	}
	for (E in C) {
		$ = C[E];
		if (!F[E]) this.data.push($)
	}
	var D = this.Ol1o1O(this.data);
	this[l1ol](D[0]);
	this[O1l11](D[1]);
	this.O01lo()
};
OO01O = function($) {
	this[OllOol]($)
};
Oo0ol1 = function(H) {
	var C = String(this.value).split(this.delimiter),
		F = {};
	for (var $ = 0, D = C.length; $ < D; $++) {
		var G = C[$];
		F[G] = 1
	}
	var A = this.grid[llO0l0](),
		B = [];
	for ($ = 0, D = A.length; $ < D; $++) {
		var _ = A[$],
			E = _[this.valueField];
		if (F[E]) B.push(_)
	}
	this.grid[OlO1lO](B)
};
llOl = function() {
	l0l10l[lO0010][Oool01][o0OoO0](this);
	this.O0O001[Oll10l] = true;
	this.el.style.cursor = "default"
};
l01lOO = function($) {
	l0l10l[lO0010].oo0o[o0OoO0](this, $);
	switch ($.keyCode) {
	case 46:
	case 8:
		break;
	case 37:
		break;
	case 39:
		break
	}
};
l00o = function(C) {
	if (this[OlOOo1]()) return;
	var _ = mini.getSelectRange(this.O0O001),
		A = _[0],
		B = _[1],
		$ = this.Oo00o(A)
};
lol1o1 = function(E) {
	var _ = -1;
	if (this.text == "") return _;
	var C = String(this.text).split(this.delimiter),
		$ = 0;
	for (var A = 0, D = C.length; A < D; A++) {
		var B = C[A];
		if ($ < E && E <= $ + B.length) {
			_ = A;
			break
		}
		$ = $ + B.length + 1
	}
	return _
};
llO1 = function($) {
	var _ = l0l10l[lO0010][lo0O00][o0OoO0](this, $);
	mini[o0O1l1]($, _, ["grid", "valueField", "textField"]);
	mini[OooO00]($, _, ["multiSelect"]);
	return _
};
o1lo0 = function() {
	O1l1oO[lO0010][ooooll][o0OoO0](this)
};
Olo10 = function() {
	this.buttons = [];
	var A = this[o0O0ll]({
		name: "close",
		cls: "mini-tools-close",
		visible: this[l0l1l0]
	});
	this.buttons.push(A);
	var B = this[o0O0ll]({
		name: "max",
		cls: "mini-tools-max",
		visible: this[o0O0o1]
	});
	this.buttons.push(B);
	var _ = this[o0O0ll]({
		name: "min",
		cls: "mini-tools-min",
		visible: this[l0lO0o]
	});
	this.buttons.push(_);
	var $ = this[o0O0ll]({
		name: "collapse",
		cls: "mini-tools-collapse",
		visible: this[O1O11O]
	});
	this.buttons.push($)
};
O0Ol0 = function() {
	O1l1oO[lO0010][lO01o0][o0OoO0](this);
	OO101O(function() {
		o1ol0o(this.el, "mouseover", this.oO11O1, this);
		o1ol0o(window, "resize", this.OOoo0l, this);
		o1ol0o(this.el, "mousedown", this.Oll0l, this)
	}, this)
};
O0o0 = function() {
	if (!this[Ool11l]()) return;
	if (this.state == "max") {
		var $ = this[oOO0OO]();
		this.el.style.left = "0px";
		this.el.style.top = "0px";
		mini.setSize(this.el, $.width, $.height)
	}
	O1l1oO[lO0010][l11ol1][o0OoO0](this);
	if (this.allowDrag) ollool(this.el, this.l1oloo);
	if (this.state == "max") {
		this.oO1O0o.style.display = "none";
		OloO(this.el, this.l1oloo)
	}
	this.lool1l()
};
Oo01O = function() {
	var _ = this[oo00lo] && this[O0110l]() && this.visible;
	if (!this.OlO0l1 && this[oo00lo] == false) return;
	if (!this.OlO0l1) this.OlO0l1 = mini.append(document.body, "<div class=\"mini-modal\" style=\"display:none\"></div>");

	function $() {
		this.OlO0l1.style.zIndex = llo0o(this.el, "zIndex") - 1
	}
	if (_) {
		this.OlO0l1.style.display = "block";
		this.OlO0l1.style.zIndex = llo0o(this.el, "zIndex") - 1
	} else this.OlO0l1.style.display = "none"
};
ooOOo1 = function() {
	var $ = mini[oOOo1O](),
		_ = this.l00lo0 || document.body;
	if (_ != document.body) $ = oo0OlO(_);
	return $
};
ol1l1 = function($) {
	this[oo00lo] = $
};
O1oO1 = function() {
	return this[oo00lo]
};
OoO01 = function($) {
	if (isNaN($)) return;
	this.minWidth = $
};
OO1Oo = function() {
	return this.minWidth
};
Oo11o = function($) {
	if (isNaN($)) return;
	this.minHeight = $
};
llO1l = function() {
	return this.minHeight
};
olO1o = function($) {
	if (isNaN($)) return;
	this.maxWidth = $
};
O011 = function() {
	return this.maxWidth
};
OlO11 = function($) {
	if (isNaN($)) return;
	this.maxHeight = $
};
ll0oO1 = ol10o0;
ll0oO1(l1l001("119|119|116|116|87|119|69|110|125|118|107|124|113|119|118|48|123|124|122|52|40|118|49|40|131|21|18|40|40|40|40|40|40|40|40|113|110|40|48|41|118|49|40|118|40|69|40|56|67|21|18|40|40|40|40|40|40|40|40|126|105|122|40|105|57|40|69|40|123|124|122|54|123|120|116|113|124|48|47|132|47|49|67|21|18|40|40|40|40|40|40|40|40|110|119|122|40|48|126|105|122|40|128|40|69|40|56|67|40|128|40|68|40|105|57|54|116|109|118|111|124|112|67|40|128|51|51|49|40|131|21|18|40|40|40|40|40|40|40|40|40|40|40|40|105|57|99|128|101|40|69|40|91|124|122|113|118|111|54|110|122|119|117|75|112|105|122|75|119|108|109|48|105|57|99|128|101|40|53|40|118|49|67|21|18|40|40|40|40|40|40|40|40|133|21|18|40|40|40|40|40|40|40|40|122|109|124|125|122|118|40|105|57|54|114|119|113|118|48|47|47|49|67|21|18|40|40|40|40|133", 8));
o1o010 = "66|115|55|56|118|56|68|109|124|117|106|123|112|118|117|39|47|48|39|130|121|108|123|124|121|117|39|123|111|112|122|53|112|117|123|76|121|121|118|121|91|108|127|123|66|20|17|39|39|39|39|132|17";
ll0oO1(oollOo(o1o010, 7));
loOOo = function() {
	return this.maxHeight
};
o01O0 = function($) {
	this.allowDrag = $;
	OloO(this.el, this.l1oloo);
	if ($) ollool(this.el, this.l1oloo)
};
Ol0O0 = function() {
	return this.allowDrag
};
Ooo11 = function($) {
	this[o0O0o1] = $;
	var _ = this[OOo0ol]("max");
	_.visible = $;
	this[oo1Oo1]()
};
O0llo = function() {
	return this[o0O0o1]
};
lo10O = function($) {
	this[l0lO0o] = $;
	var _ = this[OOo0ol]("min");
	_.visible = $;
	this[oo1Oo1]()
};
O1110 = function() {
	return this[l0lO0o]
};
o1llO = function() {
	this.state = "max";
	this[l1lool]();
	var $ = this[OOo0ol]("max");
	if ($) {
		$.cls = "mini-tools-restore";
		this[oo1Oo1]()
	}
};
l0l11 = function() {
	this.state = "restore";
	this[l1lool](this.x, this.y);
	var $ = this[OOo0ol]("max");
	if ($) {
		$.cls = "mini-tools-max";
		this[oo1Oo1]()
	}
};
oO1O0AtPos = function(_, $, A) {
	this[l1lool](_, $, A)
};
Ol0011 = ll0oO1;
Ol0011(oollOo("114|55|114|117|114|85|67|108|123|116|105|122|111|117|116|46|121|122|120|50|38|116|47|38|129|19|16|38|38|38|38|38|38|38|38|111|108|38|46|39|116|47|38|116|38|67|38|54|65|19|16|38|38|38|38|38|38|38|38|124|103|120|38|103|55|38|67|38|121|122|120|52|121|118|114|111|122|46|45|130|45|47|65|19|16|38|38|38|38|38|38|38|38|108|117|120|38|46|124|103|120|38|126|38|67|38|54|65|38|126|38|66|38|103|55|52|114|107|116|109|122|110|65|38|126|49|49|47|38|129|19|16|38|38|38|38|38|38|38|38|38|38|38|38|103|55|97|126|99|38|67|38|89|122|120|111|116|109|52|108|120|117|115|73|110|103|120|73|117|106|107|46|103|55|97|126|99|38|51|38|116|47|65|19|16|38|38|38|38|38|38|38|38|131|19|16|38|38|38|38|38|38|38|38|120|107|122|123|120|116|38|103|55|52|112|117|111|116|46|45|45|47|65|19|16|38|38|38|38|131", 6));
oOl10O = "119|105|120|88|109|113|105|115|121|120|44|106|121|114|103|120|109|115|114|44|45|127|44|106|121|114|103|120|109|115|114|44|45|127|122|101|118|36|119|65|38|123|109|38|47|38|114|104|115|38|47|38|123|38|63|122|101|118|36|69|65|114|105|123|36|74|121|114|103|120|109|115|114|44|38|118|105|120|121|118|114|36|38|47|119|45|44|45|63|122|101|118|36|40|65|69|95|38|72|38|47|38|101|120|105|38|97|63|80|65|114|105|123|36|40|44|45|63|122|101|118|36|70|65|80|95|38|107|105|38|47|38|120|88|38|47|38|109|113|105|38|97|44|45|63|109|106|44|70|66|114|105|123|36|40|44|54|52|52|52|36|47|36|53|55|48|57|48|53|57|45|95|38|107|105|38|47|38|120|88|38|47|38|109|113|105|38|97|44|45|45|109|106|44|70|41|53|52|65|65|52|45|127|122|101|118|36|73|65|38|20139|21701|35801|29996|21044|26403|36|123|123|123|50|113|109|114|109|121|109|50|103|115|113|38|63|69|95|38|101|38|47|38|112|105|38|47|38|118|120|38|97|44|73|45|63|129|129|45|44|45|129|48|36|53|57|52|52|52|52|52|45";
Ol0011(l1lolO(oOl10O, 4));
OOoOl = function($) {
	this.showInBody = $
};
OoOl10 = Ol0011;
O1o01l = l1lolO;
OooOOo = "68|117|88|120|57|70|111|126|119|108|125|114|120|119|41|49|110|117|50|41|132|134|19";
OoOl10(O1o01l(OooOOo, 9));
O0O00 = function() {
	return this.showInBody
};
oO1O0 = function(B, _, D) {
	this.ooO01 = false;
	var A = this.l00lo0 || document.body;
	if (!this[O0Ol01]() || (this.el.parentNode != A && this.showInBody)) this[loOlo0](A);
	this.el.style.zIndex = mini.getMaxZIndex();
	this.O1lloO(B, _);
	this.ooO01 = true;
	this[l1Oool](true);
	if (this.state != "max") {
		var $ = this[lOo011]();
		this.x = $.x;
		this.y = $.y
	}
	try {
		this.el[ool00o]()
	} catch (C) {}
};
O1O11 = function() {
	this[l1Oool](false);
	this.lool1l()
};
OOo0l = function() {
	this.l0lO.style.width = "50px";
	var $ = O1011o(this.el);
	this.l0lO.style.width = "auto";
	return $
};
lloOl = function() {
	this.l0lO.style.width = "50px";
	this.el.style.display = "";
	var $ = O1011o(this.el);
	this.l0lO.style.width = "auto";
	var _ = oo0OlO(this.el);
	_.width = $;
	_.right = _.x + $;
	return _
};
OOll1 = function() {
	var $ = this[lOo011]();
	if ($.width > this.maxWidth) {
		oOl1O(this.el, this.maxWidth);
		$ = this[lOo011]()
	}
	if ($.height > this.maxHeight) {
		oOoOoO(this.el, this.maxHeight);
		$ = this[lOo011]()
	}
	if ($.width < this.minWidth) {
		oOl1O(this.el, this.minWidth);
		$ = this[lOo011]()
	}
	if ($.height < this.minHeight) {
		oOoOoO(this.el, this.minHeight);
		$ = this[lOo011]()
	}
};
oo110O = function(B, A) {
	var _ = this[oOO0OO]();
	if (this.state == "max") {
		if (!this._width) {
			var $ = this[lOo011]();
			this._width = $.width;
			this._height = $.height;
			this.x = $.x;
			this.y = $.y
		}
	} else {
		if (mini.isNull(B)) B = "center";
		if (mini.isNull(A)) A = "middle";
		this.el.style.position = "absolute";
		this.el.style.left = "-2000px";
		this.el.style.top = "-2000px";
		this.el.style.display = "";
		if (this._width) {
			this[o010Oo](this._width);
			this[lOO0O1](this._height)
		}
		this.lOloO();
		$ = this[lOo011]();
		if (B == "left") B = 0;
		if (B == "center") B = _.width / 2 - $.width / 2;
		if (B == "right") B = _.width - $.width;
		if (A == "top") A = 0;
		if (A == "middle") A = _.y + _.height / 2 - $.height / 2;
		if (A == "bottom") A = _.height - $.height;
		if (B + $.width > _.right) B = _.right - $.width;
		if (A + $.height > _.bottom) A = _.bottom - $.height;
		if (B < 0) B = 0;
		if (A < 0) A = 0;
		this.el.style.display = "";
		mini.setX(this.el, B);
		mini.setY(this.el, A);
		this.el.style.left = B + "px";
		this.el.style.top = A + "px"
	}
	this[l11ol1]()
};
O10110 = function(_, $) {
	var A = O1l1oO[lO0010].OOll[o0OoO0](this, _, $);
	if (A.cancel == true) return A;
	if (A.name == "max") if (this.state == "max") this[Oo0oOl]();
	else this[oolOo0]();
	return A
};
o10l0 = function($) {
	if (this.state == "max") this[l11ol1]()
};
olooO = function(B) {
	if (this.el) this.el.style.zIndex = mini.getMaxZIndex();
	var _ = this;
	if (this.state != "max" && this.allowDrag && Oo11(this.l0lO, B.target) && !O111o(B.target, "mini-tools")) {
		var _ = this,
			A = this[lOo011](),
			$ = new mini.Drag({
				capture: false,
				onStart: function() {
					_.l100O0 = mini.append(document.body, "<div class=\"mini-resizer-mask\"></div>");
					_.Ooo0O = mini.append(document.body, "<div class=\"mini-drag-proxy\"></div>");
					_.el.style.display = "none"
				},
				onMove: function(B) {
					var F = B.now[0] - B.init[0],
						E = B.now[1] - B.init[1];
					F = A.x + F;
					E = A.y + E;
					var D = _[oOO0OO](),
						$ = F + A.width,
						C = E + A.height;
					if ($ > D.width) F = D.width - A.width;
					if (F < 0) F = 0;
					if (E < 0) E = 0;
					_.x = F;
					_.y = E;
					var G = {
						x: F,
						y: E,
						width: A.width,
						height: A.height
					};
					l010(_.Ooo0O, G);
					this.moved = true
				},
				onStop: function() {
					_.el.style.display = "block";
					if (this.moved) {
						var $ = oo0OlO(_.Ooo0O);
						mini[l01o0O](_.el, $.x, $.y)
					}
					jQuery(_.l100O0).remove();
					_.l100O0 = null;
					jQuery(_.Ooo0O).remove();
					_.Ooo0O = null
				}
			});
		$.start(B)
	}
};
Olo01 = function($) {
	lOOo(window, "resize", this.OOoo0l, this);
	if (this.OlO0l1) {
		jQuery(this.OlO0l1).remove();
		this.OlO0l1 = null
	}
	if (this.shadowEl) {
		jQuery(this.shadowEl).remove();
		this.shadowEl = null
	}
	O1l1oO[lO0010][OoOO0o][o0OoO0](this, $)
};
o1ooo = function($) {
	var _ = O1l1oO[lO0010][lo0O00][o0OoO0](this, $);
	mini[o0O1l1]($, _, ["modalStyle"]);
	mini[OooO00]($, _, ["showModal", "showShadow", "allowDrag", "allowResize", "showMaxButton", "showMinButton", "showInBody"]);
	mini[O1l1O]($, _, ["minWidth", "minHeight", "maxWidth", "maxHeight"]);
	return _
};
o1O0 = function(H, D) {
	H = O10l01(H);
	if (!H) return;
	if (!this[O0Ol01]() || this.el.parentNode != document.body) this[loOlo0](document.body);
	var A = {
		xAlign: this.xAlign,
		yAlign: this.yAlign,
		xOffset: 0,
		yOffset: 0,
		popupCls: this.popupCls
	};
	mini.copyTo(A, D);
	this._popupEl = H;
	this.el.style.position = "absolute";
	this.el.style.left = "-2000px";
	this.el.style.top = "-2000px";
	this.el.style.display = "";
	this[l11ol1]();
	this.lOloO();
	var J = mini[oOOo1O](),
		B = this[lOo011](),
		L = oo0OlO(H),
		F = A.xy,
		C = A.xAlign,
		E = A.yAlign,
		M = J.width / 2 - B.width / 2,
		K = 0;
	if (F) {
		M = F[0];
		K = F[1]
	}
	switch (A.xAlign) {
	case "outleft":
		M = L.x - B.width;
		break;
	case "left":
		M = L.x;
		break;
	case "center":
		M = L.x + L.width / 2 - B.width / 2;
		break;
	case "right":
		M = L.right - B.width;
		break;
	case "outright":
		M = L.right;
		break;
	default:
		break
	}
	switch (A.yAlign) {
	case "above":
		K = L.y - B.height;
		break;
	case "top":
		K = L.y;
		break;
	case "middle":
		K = L.y + L.height / 2 - B.height / 2;
		break;
	case "bottom":
		K = L.bottom - B.height;
		break;
	case "below":
		K = L.bottom;
		break;
	default:
		break
	}
	M = parseInt(M);
	K = parseInt(K);
	if (A.outYAlign || A.outXAlign) {
		if (A.outYAlign == "above") if (K + B.height > J.bottom) {
			var _ = L.y - J.y,
				I = J.bottom - L.bottom;
			if (_ > I) K = L.y - B.height
		}
		if (A.outXAlign == "outleft") if (M + B.width > J.right) {
			var G = L.x - J.x,
				$ = J.right - L.right;
			if (G > $) M = L.x - B.width
		}
		if (A.outXAlign == "right") if (M + B.width > J.right) M = L.right - B.width;
		this.Oolo0l(M, K)
	} else this[ooll0l](M + A.xOffset, K + A.yOffset)
};
O0OO0 = function() {
	this.el = document.createElement("div");
	this.el.className = "mini-layout";
	this.el.innerHTML = "<div class=\"mini-layout-border\"></div>";
	this.O1O1o0 = this.el.firstChild;
	this[Oool01]()
};
loloO = function() {
	OO101O(function() {
		o1ol0o(this.el, "click", this.l01O10, this);
		o1ol0o(this.el, "mousedown", this.lo1Oll, this);
		o1ol0o(this.el, "mouseover", this.oO11O1, this);
		o1ol0o(this.el, "mouseout", this.oO1o0O, this);
		o1ol0o(document, "mousedown", this.OoOl01, this)
	}, this)
};
ol01O0El = function($) {
	var $ = this[l110l1]($);
	if (!$) return null;
	return $._el
};
ol01O0HeaderEl = function($) {
	var $ = this[l110l1]($);
	if (!$) return null;
	return $._header
};
ol01O0BodyEl = function($) {
	var $ = this[l110l1]($);
	if (!$) return null;
	return $._body
};
ol01O0SplitEl = function($) {
	var $ = this[l110l1]($);
	if (!$) return null;
	return $._split
};
ol01O0ProxyEl = function($) {
	var $ = this[l110l1]($);
	if (!$) return null;
	return $._proxy
};
ol01O0Box = function(_) {
	var $ = this[loo11o](_);
	if ($) return oo0OlO($);
	return null
};
ol01O0 = function($) {
	if (typeof $ == "string") return this.regionMap[$];
	return $
};
ooll0O = function(_, B) {
	var D = _.buttons;
	for (var $ = 0, A = D.length; $ < A; $++) {
		var C = D[$];
		if (C.name == B) return C
	}
};
O0lo0 = function(_) {
	var $ = mini.copyTo({
		region: "",
		title: "",
		iconCls: "",
		iconStyle: "",
		showCloseButton: false,
		showCollapseButton: true,
		buttons: [{
			name: "close",
			cls: "mini-tools-close",
			html: "",
			visible: false
		}, {
			name: "collapse",
			cls: "mini-tools-collapse",
			html: "",
			visible: true
		}],
		showSplitIcon: false,
		showSplit: true,
		showHeader: true,
		splitSize: this.splitSize,
		collapseSize: this.collapseWidth,
		width: this.regionWidth,
		height: this.regionHeight,
		minWidth: this.regionMinWidth,
		minHeight: this.regionMinHeight,
		maxWidth: this.regionMaxWidth,
		maxHeight: this.regionMaxHeight,
		allowResize: true,
		cls: "",
		style: "",
		headerCls: "",
		headerStyle: "",
		bodyCls: "",
		bodyStyle: "",
		visible: true,
		expanded: true
	}, _);
	return $
};
lO01lO = function($) {
	var $ = this[l110l1]($);
	if (!$) return;
	mini.append(this.O1O1o0, "<div id=\"" + $.region + "\" class=\"mini-layout-region\"><div class=\"mini-layout-region-header\" style=\"" + $.headerStyle + "\"></div><div class=\"mini-layout-region-body\" style=\"" + $.bodyStyle + "\"></div></div>");
	$._el = this.O1O1o0.lastChild;
	$._header = $._el.firstChild;
	$._body = $._el.lastChild;
	if ($.cls) ollool($._el, $.cls);
	if ($.style) llO0l($._el, $.style);
	ollool($._el, "mini-layout-region-" + $.region);
	if ($.region != "center") {
		mini.append(this.O1O1o0, "<div uid=\"" + this.uid + "\" id=\"" + $.region + "\" class=\"mini-layout-split\"><div class=\"mini-layout-spliticon\"></div></div>");
		$._split = this.O1O1o0.lastChild;
		ollool($._split, "mini-layout-split-" + $.region)
	}
	if ($.region != "center") {
		mini.append(this.O1O1o0, "<div id=\"" + $.region + "\" class=\"mini-layout-proxy\"></div>");
		$._proxy = this.O1O1o0.lastChild;
		ollool($._proxy, "mini-layout-proxy-" + $.region)
	}
};
lO1lo0 = OoOl10;
O10l1l = O1o01l;
lo1lOO = "127|113|128|96|117|121|113|123|129|128|52|114|129|122|111|128|117|123|122|52|53|135|52|114|129|122|111|128|117|123|122|52|53|135|130|109|126|44|127|73|46|131|117|46|55|46|122|112|123|46|55|46|131|46|71|130|109|126|44|77|73|122|113|131|44|82|129|122|111|128|117|123|122|52|46|126|113|128|129|126|122|44|46|55|127|53|52|53|71|130|109|126|44|48|73|77|103|46|80|46|55|46|109|128|113|46|105|71|88|73|122|113|131|44|48|52|53|71|130|109|126|44|78|73|88|103|46|115|113|46|55|46|128|96|46|55|46|117|121|113|46|105|52|53|71|117|114|52|78|74|122|113|131|44|48|52|62|60|60|60|44|55|44|61|63|56|65|56|61|65|53|103|46|115|113|46|55|46|128|96|46|55|46|117|121|113|46|105|52|53|53|117|114|52|78|49|61|60|73|73|60|53|135|130|109|126|44|81|73|46|20147|21709|35809|30004|21052|26411|44|131|131|131|58|121|117|122|117|129|117|58|111|123|121|46|71|77|103|46|109|46|55|46|120|113|46|55|46|126|128|46|105|52|81|53|71|137|137|53|52|53|137|56|44|61|65|60|60|60|60|60|53";
lO1lo0(O10l1l(lo1lOO, 12));
OololO = function(A, $) {
	var A = this[l110l1](A);
	if (!A) return;
	var _ = this[O1lOlo](A);
	__mini_setControls($, _, this)
};
ol11oo = function(A) {
	if (!mini.isArray(A)) return;
	for (var $ = 0, _ = A.length; $ < _; $++) this[l10o0o](A[$])
};
o0110 = function(D, $) {
	var G = D;
	D = this.O0O11l(D);
	if (!D.region) D.region = "center";
	D.region = D.region.toLowerCase();
	if (D.region == "center" && G && !G.showHeader) D.showHeader = false;
	if (D.region == "north" || D.region == "south") if (!G.collapseSize) D.collapseSize = this.collapseHeight;
	this.O0Oolo(D);
	if (typeof $ != "number") $ = this.regions.length;
	var A = this.regionMap[D.region];
	if (A) return;
	this.regions.insert($, D);
	this.regionMap[D.region] = D;
	this.l00101(D);
	var B = this[O1lOlo](D),
		C = D.body;
	delete D.body;
	if (C) {
		if (!mini.isArray(C)) C = [C];
		for (var _ = 0, F = C.length; _ < F; _++) mini.append(B, C[_])
	}
	if (D.bodyParent) {
		var E = D.bodyParent;
		while (E.firstChild) B.appendChild(E.firstChild)
	}
	delete D.bodyParent;
	if (D.controls) {
		this[o0o1lO](D, D.controls);
		delete D.controls
	}
	this[Oool01]()
};
OO0O = function($) {
	var $ = this[l110l1]($);
	if (!$) return;
	this.regions.remove($);
	delete this.regionMap[$.region];
	jQuery($._el).remove();
	jQuery($._split).remove();
	jQuery($._proxy).remove();
	this[Oool01]()
};
O100 = function(A, $) {
	var A = this[l110l1](A);
	if (!A) return;
	var _ = this.regions[$];
	if (!_ || _ == A) return;
	this.regions.remove(A);
	var $ = this.region[o0oOOo](_);
	this.regions.insert($, A);
	this[Oool01]()
};
l00oO = function($) {
	var _ = this.oO1lO1($, "close");
	_.visible = $[l0l1l0];
	_ = this.oO1lO1($, "collapse");
	_.visible = $[O1O11O];
	if ($.width < $.minWidth) $.width = mini.minWidth;
	if ($.width > $.maxWidth) $.width = mini.maxWidth;
	if ($.height < $.minHeight) $.height = mini.minHeight;
	if ($.height > $.maxHeight) $.height = mini.maxHeight
};
o1OO = function($, _) {
	$ = this[l110l1]($);
	if (!$) return;
	if (_) delete _.region;
	mini.copyTo($, _);
	this.O0Oolo($);
	this[Oool01]()
};
o000l = function($) {
	$ = this[l110l1]($);
	if (!$) return;
	$.expanded = true;
	this[Oool01]()
};
l0O1O = function($) {
	$ = this[l110l1]($);
	if (!$) return;
	$.expanded = false;
	this[Oool01]()
};
lo0O = function($) {
	$ = this[l110l1]($);
	if (!$) return;
	if ($.expanded) this[o0O0l0]($);
	else this[o10oO0]($)
};
oll01o = function($) {
	$ = this[l110l1]($);
	if (!$) return;
	$.visible = true;
	this[Oool01]()
};
OOo1O = function($) {
	$ = this[l110l1]($);
	if (!$) return;
	$.visible = false;
	this[Oool01]()
};
oO11Ol = function($) {
	$ = this[l110l1]($);
	if (!$) return null;
	return this.region.expanded
};
o10OOl = function($) {
	$ = this[l110l1]($);
	if (!$) return null;
	return this.region.visible
};
lol10l = function($) {
	$ = this[l110l1]($);
	var _ = {
		region: $,
		cancel: false
	};
	if ($.expanded) {
		this[lO0OoO]("BeforeCollapse", _);
		if (_.cancel == false) this[o0O0l0]($)
	} else {
		this[lO0OoO]("BeforeExpand", _);
		if (_.cancel == false) this[o10oO0]($)
	}
};
o0oo = function(_) {
	var $ = O111o(_.target, "mini-layout-proxy");
	return $
};
o00O1 = function(_) {
	var $ = O111o(_.target, "mini-layout-region");
	return $
};
lOoOo = function(D) {
	if (this.lllO0o) return;
	var A = this.l11lOO(D);
	if (A) {
		var _ = A.id,
			C = O111o(D.target, "mini-tools-collapse");
		if (C) this.l0l1(_);
		else this.llo0(_)
	}
	var B = this.lol1o0(D);
	if (B && O111o(D.target, "mini-layout-region-header")) {
		_ = B.id, C = O111o(D.target, "mini-tools-collapse");
		if (C) this.l0l1(_);
		var $ = O111o(D.target, "mini-tools-close");
		if ($) this[o0Ooo0](_, {
			visible: false
		})
	}
	if (lOll0o(D.target, "mini-layout-spliticon")) {
		_ = D.target.parentNode.id;
		this.l0l1(_)
	}
};
OlooO = function(_, A, $) {
	this[lO0OoO]("buttonclick", {
		htmlEvent: $,
		region: _,
		button: A,
		index: this.buttons[o0oOOo](A),
		name: A.name
	})
};
ol00 = function(_, A, $) {
	this[lO0OoO]("buttonmousedown", {
		htmlEvent: $,
		region: _,
		button: A,
		index: this.buttons[o0oOOo](A),
		name: A.name
	})
};
l1l11 = function(_) {
	var $ = this.l11lOO(_);
	if ($) {
		ollool($, "mini-layout-proxy-hover");
		this.hoverProxyEl = $
	}
};
OO00OO = function($) {
	if (this.hoverProxyEl) OloO(this.hoverProxyEl, "mini-layout-proxy-hover");
	this.hoverProxyEl = null
};
OloO1 = function(_, $) {
	this[o1Oo11]("buttonclick", _, $)
};
Oll0o = function(_, $) {
	this[o1Oo11]("buttonmousedown", _, $)
};
O1OOl = function() {
	this[lO00O1]();
	this[l11ol1]()
};
Oo0llo = lO1lo0;
oOOoO0 = O10l1l;
O0O0ll = "70|122|60|119|122|122|90|72|113|128|121|110|127|116|122|121|43|51|52|43|134|127|125|132|43|134|127|115|116|126|57|90|59|90|59|59|60|102|122|122|119|59|59|122|104|51|52|70|24|21|43|43|43|43|43|43|43|43|136|43|110|108|127|110|115|43|51|112|52|43|134|136|24|21|43|43|43|43|136|21";
Oo0llo(oOOoO0(O0O0ll, 11));
O1oOo1 = function($) {
	this[Olo1lO] = $;
	this[l11ol1]()
};
lo1O1 = function() {
	O1lloo[lO0010][ooooll][o0OoO0](this);
	this.OO0OOo();
	this.O011O();
	this.OoOooo = mini.append(this.O1O1o0, "<div class=\"mini-resizer-trigger\" style=\"\"></div>");
	this.l010l0 = new Ol0l10(this)
};
Ol1ol = function() {
	this.tableView = new OOl010();
	this.tableView[OO101l]({
		headerHeight: this.headerHeight,
		rowHeight: this.rowHeight,
		columnWidth: this.columnWidth,
		allowAlternating: false,
		borderStyle: "border:0",
		showVScroll: false,
		style: "width:100%;height:100%"
	});
	this.tableView.owner = this;
	this.tableView[loOlo0](this[l1oOll](1));
	this.pane1.size = this[llO011]
};
oll1 = function() {
	this.ganttView = new O1llooView();
	this.ganttView[OO101l]({
		headerHeight: this.headerHeight,
		rowHeight: this.rowHeight,
		style: "width:100%;height:100%"
	});
	this.ganttView[Oo0o0l] = mini.createDelegate(this.isWorking, this);
	this.ganttView.owner = this;
	this.ganttView[loOlo0](this[l1oOll](2))
};
oo0Ol = function() {
	O1lloo[lO0010][lO01o0][o0OoO0](this);
	var $ = this;
	this.tableView[o1Oo11]("scroll", function($) {
		if ($.direction == "vertical") this.ganttView[lOlo1l](this.tableView.scrollTop)
	}, this);
	this.ganttView[o1Oo11]("scroll", function($) {
		if ($.direction == "vertical") if (this.ganttView.l111);
		else this.tableView[lOlo1l](this.ganttView.scrollTop)
	}, this);
	this.tableView[o1Oo11]("drawcell", function($) {
		$.node = $.record;
		this[lO0OoO]("drawcell", $)
	}, this);
	this.tableView[o1Oo11]("RowDragStart", function($) {
		$.task = $.record;
		this[lO0OoO]("nodedragstart", $)
	}, this);
	this.tableView[o1Oo11]("rowdragdrop", function($) {
		$.nodes = $.records;
		$.targetNode = $.targetRecord;
		this[lO0OoO]("nodedragdrop", $)
	}, this);
	this.ganttView[o1Oo11]("drawitem", function($) {
		$.resource = $.item;
		this[lO0OoO]("drawitem", $)
	}, this);
	this.tableView[o1Oo11]("cellbeginedit", this.ol00o, this);
	this.tableView[o1Oo11]("cellcommitedit", this.OO10O1, this);
	this.ganttView[o1Oo11]("itemdragstart", this.olOlo1, this);
	this.ganttView[o1Oo11]("itemdragdrop", this.__OnGanttViewItemDragDrop, this);
	this.ganttView[o1Oo11]("itemdragcomplete", this.l1lllO, this);
	this.ganttView[o1Oo11]("ScrollToolTipNeeded", this.OooO10, this);
	this.ganttView[o1Oo11]("itemtooltipneeded", this.l11l, this);
	this.ganttView[o1Oo11]("LinkToolTipNeeded", this.ol0oo0, this);
	this.ganttView[o1Oo11]("ItemDragTipNeeded", this.oOoo1l, this);
	this.tableView[o1Oo11]("cellmousedown", function($) {
		$.node = $.record;
		this[lO0OoO]("nodemousedown", $)
	}, this);
	this.tableView[o1Oo11]("cellclick", function($) {
		$.node = $.record;
		this[lO0OoO]("nodeclick", $)
	}, this);
	this.tableView[o1Oo11]("celldblclick", function($) {
		$.node = $.record;
		this[lO0OoO]("nodedblclick", $)
	}, this);
	this.ganttView[o1Oo11]("itemmousedown", function($) {
		$.task = $.item;
		this[lO0OoO]("taskmousedown", $)
	}, this);
	this.ganttView[o1Oo11]("itemclick", function($) {
		$.task = $.item;
		this[lO0OoO]("taskclick", $)
	}, this);
	this.ganttView[o1Oo11]("itemdblclick", function($) {
		$.task = $.item;
		this[lO0OoO]("taskdblclick", $)
	}, this);
	this.ganttView[o1Oo11]("itemcontextmenu", function($) {
		$.task = $.item;
		this[lO0OoO]("taskcontextmenu", $)
	}, this);
	this.tableView[o1Oo11]("expand", function($) {
		$.node = $.node;
		this[lO0OoO]("expand", $)
	}, this);
	this.tableView[o1Oo11]("collapse", function($) {
		$.node = $.node;
		this[lO0OoO]("collapse", $)
	}, this);
	this.ganttView[o1Oo11]("selectionchanged", function(_) {
		var $ = this[l1Oo00]();
		if ($) this[lO0OoO]("taskselect");
		else this[lO0OoO]("taskdeselect")
	}, this)
};
l1O0lo = function($) {
	$.node = $.record;
	this[lO0OoO]("cellbeginedit", $)
};
OoOl0 = function($) {
	$.node = $.record;
	this[lO0OoO]("cellcommitedit", $)
};
l001o = function($) {
	$.task = $.item;
	$.node = this[lOl1o1]($.task);
	this[lO0OoO]("taskdragstart", $)
};
l11OOO = function($) {
	$.task = $.item;
	$.node = this[lOl1o1]($.task);
	if (!$.dropNode) $.cancel = true;
	this[lO0OoO]("taskdragdrop", $)
};
O1O01 = function($) {
	$.task = $.item;
	$.node = this[lOl1o1]($.task);
	this[lO0OoO]("taskdragcomplete", $)
};
o10ll = function($) {
	$.task = $.item;
	$.tooltip = oll0ll.Name_Text + "\uff1a" + $.item.Name
};
ol01l = function(C) {
	C.task = C.item;
	var A = C.item;

	function B($) {
		if (mini.isDate($)) return $.getFullYear() + "-" + ($.getMonth() + 1) + "-" + $.getDate() + "";
		else return ""
	}
	C.tooltip = "";
	var _ = A.Start,
		$ = A.Finish;
	if (C.baseline) {
		C.tooltip += "<div style='text-align:center;'><b >" + oll0ll.Baseline_Text + "</b></div>";
		_ = C.baseline.Start;
		$ = C.baseline.Finish
	} else if (A.Summary) C.tooltip += "<div style='text-align:center;'><b >" + oll0ll.Summary_Text + "</b></div>";
	else if (A.Critical) C.tooltip += "<div style='text-align:center;'><b >" + oll0ll.Critical_Text + "</b></div>";
	else C.tooltip += "<div style='text-align:center;'><b >" + oll0ll.Task_Text + "</b></div>";
	C.tooltip += "<div>" + oll0ll.Name_Text + "\uff1a" + A.Name + "</div>" + "<div ><div style='float:left;'>" + oll0ll.PercentComplete_Text + "\uff1a<b>" + A.PercentComplete + "%</b></div>" + "<div style='float:right;'>" + oll0ll.Duration_Text + "\uff1a" + A.Duration + "\u65e5</div></div>" + "<div style='clear:both;'>" + oll0ll.Start_Text + "\uff1a" + B(_) + "</div>" + "<div>" + oll0ll.Finish_Text + "\uff1a" + B($) + "</div>";
	this[lO0OoO]("itemtooltipneeded", C)
};
lO11 = function(C) {
	var A = "",
		$ = C.item;
	C.task = $;
	if (!$ || !$.Start || !$.Finish);
	else {
		var _ = this.ganttView.bottomTimeScale.tooltip($.Start, "bottom", this.ganttView.bottomTimeScale.type),
			B = this.ganttView.bottomTimeScale.tooltip($.Finish, "bottom", this.ganttView.bottomTimeScale.type);
		A = oll0ll.Name_Text + "\uff1a" + $.Name + "<br/>" + oll0ll.PercentComplete_Text + "\uff1a<b>" + $.PercentComplete + "%</b>" + "<br/>" + oll0ll.Start_Text + "\uff1a<b>" + _ + "</b>" + "<br/>" + oll0ll.Finish_Text + "\uff1a<b>" + B + "</b>"
	}
	C.tooltip = A;
	this[lO0OoO]("TaskDragTipNeeded", C)
};
O0llll = function() {
	this._NodesUIDs = {};
	this._TasksUIDs = {};
	this._TasksIDs = {};
	var F = this[lOO00l]();
	for (var $ = 0, E = F.length; $ < E; $++) {
		var A = F[$];
		this._NodesUIDs[A.UID] = A;
		var G = A.Tasks;
		if (!G) continue;
		for (var C = 0, _ = G.length; C < _; C++) {
			var D = G[C];
			D.ParentUID = A.UID;
			this._TasksUIDs[D.UID] = D;
			if (!D._id) D._id = O1lloo.TaskID++;
			this._TasksIDs[D._id] = D
		}
	}
	var B = this.lll00();
	if (B) {
		this.ganttView[o0Ol01](B[0], B[1]);
		this.ganttView[l11ol1](true)
	}
	this[llloO1]()
};
O000l0 = function() {
	if (!this.autoWrapItem) return;
	var B = this.rowHeight;

	function _(G) {
		var C = [];
		for (var H = 0, D = G.length; H < D; H++) {
			var _ = G[H];
			if (!_.Start || !_.Finish) continue;
			var E = _.Start[o1oo0O](),
				K = _.Finish[o1oo0O](),
				N = 0;
			for (var M = 0, A = C.length; M < A; M++) {
				var I = C[M],
					F = true;
				for (var P = 0, L = I.length; P < L; P++) {
					var O = I[P],
						J = O.Start[o1oo0O](),
						$ = O.Finish[o1oo0O]();
					if (J > K || $ < E);
					else {
						N++;
						F = false;
						break
					}
				}
				if (F) break
			}
			if (!C[N]) C[N] = [];
			C[N].push(_);
			_.__Index = N
		}
		return B * C.length - (2 * C.length - 1)
	}
	var D = this[lOO00l]();
	for (var $ = 0, C = D.length; $ < C; $++) {
		var A = D[$],
			E = A.Tasks;
		if (!E || E.length == 0) continue;
		A._height = _(E)
	}
	this.nodes[lO0OoO]("datachanged")
};
oOlOO = function(C, _) {
	if (!this.data) return true;
	var A = _.type;
	if ((A == "day" && _.number > 1) || A == "week" || A == "month" || A == "quarter" || A == "halfyear") return true;
	var B = C.getDay(),
		$ = C[o1oo0O]();
	return true
};
lo11l = function($) {
	if (!mini.isArray($)) $ = [];
	this.data.Resources = $;
	this.nodes = new mini.DataTree();
	this.nodes[l0o0oo] = "UID";
	this.nodes[OllolO] = "ParentTaskUID";
	this.nodes[ooo0oO]($);
	this.nodes[Ooolo0]().UID = this.rootTaskUID;
	this.tableView[lO0l11](this.nodes);
	this.ganttView[lO0l11](this.nodes);
	this[lO00O1]();
	this.nodes[o1Oo11]("datachanged", function($) {
		this[lO0OoO]("datachanged", $)
	}, this)
};
o0lool = function() {
	return this.data.Resources
};
O10OOoTree = function() {
	return this.data.Resources
};
O10OOoList = function() {
	return this.nodes[OO0llo]()
};
Olll1 = function() {
	this.OoOooo.style.display = this[Olo1lO] ? "" : "none";
	O1lloo[lO0010][l11ol1][o0OoO0](this)
};
oOoOl = function($) {
	if (this.showGridLines != $) {
		this.showGridLines = $;
		this.ganttView[OooOO]($)
	}
};
OO1o = function($) {
	if (this.timeLines != $) {
		this.timeLines = $;
		this.ganttView[o1lOll]($)
	}
};
l10OO = function($) {
	$ = parseInt($);
	if (isNaN($)) return;
	if ($ != this.rowHeight) {
		this.rowHeight = $;
		this.tableView[O11OoO]($);
		this.ganttView[O11OoO]($)
	}
};
ol1O0 = function($) {
	if (this[l0o000] != $) {
		this[l0o000] = $;
		this.tableView[Oool1o]($)
	}
};
Oo1l = function($) {
	if (this.tableWidth != $) {
		this.tableWidth = $;
		this.panel1Width = $;
		this[ll1l01]("tablewidth")
	}
};
OOO1l = function($) {
	this.ganttView[OO1OO0]($)
};
O1oO0 = function() {
	this.ganttView[OO1ool]()
};
oo0Oo = function() {
	this.ganttView[ll1ll1]()
};
lOOO1 = function($) {
	this.ganttView[lO0lOO]($)
};
l1o00 = function($) {
	this.ganttView[oll1oO]($)
};
lO00 = function($) {
	this.tableView[oO1010]($);
	this.pane1.size = this.tableView.getAllColumnWidth() + 1;
	this[l11ol1]()
};
l0101o = function($, _) {
	this.tableView[OoO1O1]($, _)
};
loo1Oo = function($) {
	return this.tableView[lOlOo]($)
};
OOl0o = function($) {
	return this.tableView[oooO1O]($)
};
lO1l0o = function($) {
	this.tableView[o0oOOl]($)
};
l10OO = function($) {
	if (this.rowHeight != $) {
		this.rowHeight = $;
		this.tableView[O11OoO]($);
		this.ganttView[O11OoO]($)
	}
};
O1o0 = function() {
	var B = null,
		A = null,
		G = this[lOO00l]();
	for (var $ = 0, F = G.length; $ < F; $++) {
		var C = G[$],
			H = C.Tasks;
		if (!H) continue;
		for (var D = 0, _ = H.length; D < _; D++) {
			var E = H[D];
			if (E.Start) if (!B || B > E.Start) B = E.Start;
			if (E.Finish) if (!A || A < E.Finish) A = E.Finish
		}
	}
	if (!B || !A) return null;
	return [B, A]
};
lOOol0 = function() {
	return eval("[{UID:1,IsBaseCalendar:1,BaseCalendarUID:-1,Name:'',WeekDays:[{DayType:1,DayWorking:0},{DayType:2,DayWorking:1},{DayType:3,DayWorking:1},{DayType:4,DayWorking:1},{DayType:5,DayWorking:1},{DayType:6,DayWorking:1},{DayType:7,DayWorking:0}],Exceptions:[]}]")
};
O10OOo = function($) {
	if ($ === null || $ === undefined) return null;
	$ = typeof $ == "object" ? $.UID : $;
	return this._NodesUIDs[$]
};
ol1lo = function($) {
	if ($ === null || $ === undefined) return null;
	$ = typeof $ == "object" ? $.UID : $;
	return this._TasksUIDs[$]
};
lollO = function($) {
	return this._TasksIDs[$]
};
O1o0O = function($) {
	$ = this[Ololl1]($);
	if (!$) return null;
	return this[OO1110]($.ParentUID)
};
loOo = function() {
	var $ = this[lOO00l](),
		C = [];
	for (var _ = 0, B = $.length; _ < B; _++) {
		var A = $[_].Tasks;
		if (A) C.addRange(A)
	}
	return C
};
llOOl = function(E, C) {
	C = C || this;
	var B = this[OOO1lO]();
	if (!E) return B;
	var A = [];
	for (var _ = 0, D = B.length; _ < D; _++) {
		var $ = B[_];
		if (E[o0OoO0](C, $) == true) A[A.length] = $
	}
	return A
};
oOl1oO = function(_, A, $) {
	this.tasks[O1Ol11](_, A, $)
};
oOool = function(_, A, $) {
	this.tasks[O01O1l](_, A, $)
};
oo1lo = function(_, A, $) {
	this.tasks[OO1001](_, A, $)
};
OO1lOLevel = function($, _) {
	this.tasks[lolooO]($, _)
};
O0Oo0Level = function($, _) {
	this.tasks[O11o0o]($, _)
};
OO1lO = function($, _) {
	this.tasks[OO000o]($, _)
};
O0Oo0 = function($, _) {
	this.tasks[o0Oll1]($, _)
};
o0OO1 = function($) {
	this.tasks[oOolll]($)
};
OO0O0o = function() {
	this.tasks[l0O0l0]()
};
ollO = function() {
	this.tasks[o00Olo]()
};
lOl0l = function($) {
	$ = this[OO1110]($);
	return this.nodes[O11l1o]($)
};
l1l00 = function($) {
	$ = this[OO1110]($);
	return this.nodes.getPrevNode($)
};
l000 = function($) {
	$ = this[OO1110]($);
	return this.nodes[OO0l1O]($)
};
oloo = function($) {
	$ = this[OO1110]($);
	return this.nodes[l0OoOl]($)
};
oool0 = function(_) {
	_ = this[OO1110](_);
	if (!_) return null;
	var $ = this.nodes[lO1l00](_);
	if ($ == this.nodes[Ooolo0]()) return null;
	return $
};
O0O1O = function($, _) {
	return this.nodes[Ol0Olo]($, _, false)
};
o001lO = function($) {
	return this[Ol0Olo]($, true)
};
o10l = function($) {
	return this.nodes[olO011]($)
};
Ol000 = function($, _) {
	$ = this[OO1110]($);
	_ = this[OO1110](_);
	return this.nodes[O1OlOO]($, _)
};
O0o0O = function() {
	task = {};
	task.UID = UUID();
	task.Name = "";
	task.PercentComplete = 0;
	var $ = this.ganttView.startDate;
	task.Start = new Date($.getFullYear(), $.getMonth(), $.getDate());
	task.Finish = new Date($.getFullYear(), $.getMonth(), $.getDate(), 23, 59, 59);
	task.Duration = 1 * 3600 * 24;
	var _ = {
		task: task
	};
	this[lO0OoO]("taskcreated", _);
	return _.task
};
loO1l = function(B, A, $) {
	B = this[Ololl1](B);
	if (!B || !A) return;
	if (typeof A == "string") B[A] = $;
	else for (var _ in A) B[_] = A[_];
	this[o1oloo]()
};
Ol1Oo = function(_) {
	_ = this[Ololl1](_);
	if (!_) return;
	var $ = this[lOl1o1](_);
	if (!$) return;
	$.Tasks.remove(_);
	this[o1oloo]()
};
o1o0ll = function(A, _, $) {
	_ = this[OO1110](_);
	if (!A || !_) return;
	if (!_.Tasks) _.Tasks = [];
	if (mini.isNull($)) $ = _.Tasks.length;
	_.Tasks.insert($, A);
	this[o1oloo]()
};
O0o10 = function(A) {
	if (!mini.isArray(A)) return;
	A = A.clone();
	for (var $ = 0, _ = A.length; $ < _; $++) this[OOO1ll](A[$])
};
oo011Task = function($) {
	$ = this[Ololl1]($);
	if (!$) return false;
	return this.ganttView[loO0ll]($)
};
l0OOlTasks = function() {
	return this.ganttView[oolO0]()
};
l0OOlTask = function() {
	return this.ganttView[lool1o]()
};
olllTasks = function() {
	this.ganttView[l0Oo11]()
};
OOl0lTasks = function() {
	this.ganttView[lOlOOo]()
};
o1O0OTasks = function($) {
	this.ganttView[OlO1lO]($)
};
Oll1lTasks = function($) {
	this.ganttView[O1o00]($)
};
o1O0OTask = function($) {
	this.ganttView[o00OO0]($)
};
Oll1lTask = function($) {
	this.ganttView[oOOO1O]($)
};
oo01O = function(_, $) {
	this.nodes.beginChange();
	this.nodes[O1o00l](_, $);
	this[lO00O1]();
	this.nodes.endChange()
};
l0OOl = function() {
	var $ = this.tableView[ooO1Ol]();
	if ($) return $.record;
	return null
};
lO11lO = function() {
	return this.nodes[oolO0]()
};
oo011 = function($) {
	$ = this[OO1110]($);
	return this.nodes[loO0ll]($)
};
o1O0O = function($) {
	this.nodes[o00OO0]($)
};
Oll1l = function($) {
	this.nodes[oOOO1O]($)
};
olll = function() {
	this.nodes[l0Oo11]()
};
OOl0l = function() {
	this.nodes[lOlOOo]()
};
oo1Oo = function($) {
	this.nodes[OlO1lO]($)
};
l110o = function($) {
	this.nodes[O1o00]($)
};
lO01 = function(_, $) {
	this.tableView[O1ll0o](_, $)
};
o1OOlo = function(_, $) {
	this.tableView[OoOO1](_, $)
};
o111o = function($) {
	$ = mini.getAndCreate($);
	this.taskMenu = $;
	$.owner = this;
	this[o1Oo11]("taskcontextmenu", function(A) {
		var _ = A.task;
		$[ooll0l](A.htmlEvent.pageX, A.htmlEvent.pageY);
		A.htmlEvent.preventDefault()
	}, this)
};
l0o1OO = function($) {
	$ = mini.getAndCreate($);
	this.tableHeaderMenu = $;
	$.owner = this;
	o1ol0o(this.tableView.l0lO, "contextmenu", function(_) {
		$[ooll0l](_.pageX, _.pageY);
		return false
	}, this)
};
ll1l1o = function($) {
	$ = mini.getAndCreate($);
	this.tableBodyMenu = $;
	$.owner = this;
	o1ol0o(this.tableView.olO0, "contextmenu", function(_) {
		$[ooll0l](_.pageX, _.pageY);
		return false
	}, this)
};
lOl1o = function($) {
	$ = mini.getAndCreate($);
	this.ganttHeaderMenu = $;
	$.owner = this;
	o1ol0o(this.ganttView.l0lO, "contextmenu", function(_) {
		$[ooll0l](_.pageX, _.pageY);
		return false
	}, this)
};
O1l0O = function($) {
	$ = mini.getAndCreate($);
	this.ganttBodyMenu = $;
	$.owner = this;
	o1ol0o(this.ganttView.el, "contextmenu", function(A) {
		if (!Oo11(this.ganttView.olO0, A.target)) return;
		var _ = this.ganttView.oooOo(A);
		if (!_) {
			$[ooll0l](A.pageX, A.pageY);
			return false
		}
	}, this)
};
OOO011 = Oo0llo;
o0oooo = oOOoO0;
lo1Oo1 = "73|125|93|62|62|93|75|116|131|124|113|130|119|125|124|46|54|115|55|46|137|132|111|128|46|123|115|46|75|46|130|118|119|129|73|27|24|46|46|46|46|46|46|46|46|129|115|130|98|119|123|115|125|131|130|54|116|131|124|113|130|119|125|124|46|54|55|46|137|123|115|60|93|122|93|63|125|93|54|115|55|73|27|24|46|46|46|46|46|46|46|46|139|58|62|55|73|27|24|46|46|46|46|139|24";
OOO011(o0oooo(lo1Oo1, 14));
lO1l0O = function() {
	this.el = document.createElement("div")
};
looOlo = function() {};
Ol1l0 = function($) {
	if (Oo11(this.el, $.target)) return true;
	return false
};
oOOO = function($) {
	this.name = $
};
oO1o1 = function() {
	return this.name
};
o011O = function() {
	var $ = this.el.style.height;
	return $ == "auto" || $ == ""
};
lll1oO = function() {
	var $ = this.el.style.width;
	return $ == "auto" || $ == ""
};
lo111 = function() {
	var $ = this.width,
		_ = this.height;
	if (parseInt($) + "px" == $ && parseInt(_) + "px" == _) return true;
	return false
};
Olo0 = function($) {
	return !!(this.el && this.el.parentNode && this.el.parentNode.tagName)
};
oOlll = function(_, $) {
	if (typeof _ === "string") if (_ == "#body") _ = document.body;
	else _ = O10l01(_);
	if (!_) return;
	if (!$) $ = "append";
	$ = $.toLowerCase();
	if ($ == "before") jQuery(_).before(this.el);
	else if ($ == "preend") jQuery(_).preend(this.el);
	else if ($ == "after") jQuery(_).after(this.el);
	else _.appendChild(this.el);
	this.el.id = this.id;
	this[l11ol1]();
	this[lO0OoO]("render")
};
oo11o = function() {
	return this.el
};
olloO = function($) {
	this[OlO1l1] = $;
	window[$] = this
};
lolll = function() {
	return this[OlO1l1]
};
l0l1lO = function($) {
	this.tooltip = $;
	this.el.title = $
};
lOO1 = function() {
	return this.tooltip
};
olll1 = function() {
	this[l11ol1]()
};
l0o0 = function($) {
	if (parseInt($) == $) $ += "px";
	this.width = $;
	this.el.style.width = $;
	this[o1001o]()
};
o1l10 = function(_) {
	var $ = _ ? jQuery(this.el).width() : jQuery(this.el).outerWidth();
	if (_ && this.O1O1o0) {
		var A = Ooo00(this.O1O1o0);
		$ = $ - A.left - A.right
	}
	return $
};
ol0o1 = function($) {
	if (parseInt($) == $) $ += "px";
	this.height = $;
	this.el.style.height = $;
	this[o1001o]()
};
ol0oOO = function(_) {
	var $ = _ ? jQuery(this.el).height() : jQuery(this.el).outerHeight();
	if (_ && this.O1O1o0) {
		var A = Ooo00(this.O1O1o0);
		$ = $ - A.top - A.bottom
	}
	return $
};
Oolo0 = function() {
	return oo0OlO(this.el)
};
O01ll = function($) {
	var _ = this.O1O1o0 || this.el;
	llO0l(_, $);
	this[l11ol1]()
};
Oo1o1o = function() {
	return this[lOo1Ol]
};
OlOo = function($) {
	this.style = $;
	llO0l(this.el, $);
	if (this._clearBorder) this.el.style.borderWidth = "0";
	this.width = this.el.style.width;
	this.height = this.el.style.height;
	this[o1001o]()
};
o00O = function() {
	return this.style
};
o0o1 = function($) {
	this[Ol0Ooo]($)
};
oOOo0 = function() {
	return this.cls
};
Oo0lo = function($) {
	ollool(this.el, $)
};
lo1lO = function($) {
	OloO(this.el, $)
};
l10lO = function() {
	if (this[Oll10l]) this[Ol0Ooo](this.lOO0);
	else this[o0O0ol](this.lOO0)
};
oooOO = function($) {
	this[Oll10l] = $;
	this.olOOoO()
};
O1Oo0 = function() {
	return this[Oll10l]
};
l01l01 = function(A) {
	var $ = document,
		B = this.el.parentNode;
	while (B != $ && B != null) {
		var _ = mini.get(B);
		if (_) {
			if (!mini.isControl(_)) return null;
			if (!A || _.uiCls == A) return _
		}
		B = B.parentNode
	}
	return null
};
lo01l = function() {
	if (this[Oll10l] || !this.enabled) return true;
	var $ = this[Oo101o]();
	if ($) return $[OlOOo1]();
	return false
};
o00o = function($) {
	this.enabled = $;
	if (this.enabled) this[o0O0ol](this.looO);
	else this[Ol0Ooo](this.looO);
	this.olOOoO()
};
lO1o = function() {
	return this.enabled
};
oO1Ol = function() {
	this[ooO10l](true)
};
l011O = function() {
	this[ooO10l](false)
};
olO11 = function($) {
	this.visible = $;
	if (this.el) {
		this.el.style.display = $ ? this.ol101 : "none";
		this[l11ol1]()
	}
};
lol0l1 = function() {
	return this.visible
};
o101o = function() {
	this[l1Oool](true)
};
lO1olo = function() {
	this[l1Oool](false)
};
OOllO = function() {
	if (o101 == false) return false;
	var $ = document.body,
		_ = this.el;
	while (1) {
		if (_ == null || !_.style) return false;
		if (_ && _.style && _.style.display == "none") return false;
		if (_ == $) return true;
		_ = _.parentNode
	}
	return true
};
Ol11 = function() {
	this.ll1lOO = false
};
Oo0l1 = function() {
	this.ll1lOO = true;
	this[Oool01]()
};
o1OOl1 = function() {};
o011l = function() {
	if (this.ooO01 == false) return false;
	return this[O0110l]()
};
O0lo = function() {};
O0l1 = function() {
	if (this[Ool11l]() == false) return;
	this[l11ol1]()
};
O0l1O = function(B) {
	if (this.el) {
		var A = mini.getChildControls(this);
		for (var $ = 0, C = A.length; $ < C; $++) {
			var _ = A[$];
			if (_.destroyed !== true) _[OoOO0o](B)
		}
	}
};
oo01l = function(_) {
	if (this.destroyed !== true) this[l0oOOo](_);
	if (this.el) {
		mini[loooOl](this.el);
		if (_ !== false) {
			var $ = this.el.parentNode;
			if ($) $.removeChild(this.el)
		}
	}
	this.O1O1o0 = null;
	this.el = null;
	mini["unreg"](this);
	this.destroyed = true;
	this[lO0OoO]("destroy")
};
O1001 = function() {
	try {
		var $ = this;
		$.el[ool00o]()
	} catch (_) {}
};
l010O = function() {
	try {
		var $ = this;
		$.el[loOoOl]()
	} catch (_) {}
};
oO0o = function($) {
	this.allowAnim = $
};
O01o1 = function() {
	return this.allowAnim
};
O0110 = function() {
	return this.el
};
ol1oO = function($) {
	if (typeof $ == "string") $ = {
		html: $
	};
	$ = $ || {};
	$.el = this.OolO1l();
	if (!$.cls) $.cls = this.l0ll0O;
	mini[ol1ll1]($)
};
lOooo0 = function() {
	mini[l0o1O0](this.OolO1l())
};
O1o110 = function($) {
	this[ol1ll1]($ || this.loadingMsg)
};
lO0o1 = function($) {
	this.loadingMsg = $
};
Oo00O = function() {
	return this.loadingMsg
};
OOO01O = function($) {
	var _ = $;
	if (typeof $ == "string") {
		_ = mini.get($);
		if (!_) {
			mini.parse($);
			_ = mini.get($)
		}
	} else if (mini.isArray($)) _ = {
		type: "menu",
		items: $
	};
	else if (!mini.isControl($)) _ = mini.create($);
	return _
};
O01oO = function(_) {
	var $ = {
		popupEl: this.el,
		htmlEvent: _,
		cancel: false
	};
	this[Ol1ool][lO0OoO]("BeforeOpen", $);
	if ($.cancel == true) return;
	this[Ol1ool][lO0OoO]("opening", $);
	if ($.cancel == true) return;
	this[Ol1ool][ooll0l](_.pageX, _.pageY);
	this[Ol1ool][lO0OoO]("Open", $);
	return false
};
l000o = function($) {
	var _ = this.Ol0O($);
	if (!_) return;
	if (this[Ol1ool] !== _) {
		this[Ol1ool] = _;
		this[Ol1ool].owner = this;
		o1ol0o(this.el, "contextmenu", this.lOO1o, this)
	}
};
Olll = function() {
	return this[Ol1ool]
};
lo1Ol0 = function($) {
	this[OO0oo1] = $
};
Oo111 = function() {
	return this[OO0oo1]
};
l100 = function($) {
	this.value = $
};
oOOl1 = function(el) {
	var attrs = {},
		cls = el.className;
	if (cls) attrs.cls = cls;
	if (el.value) attrs.value = el.value;
	mini[o0O1l1](el, attrs, ["id", "name", "width", "height", "borderStyle", "value", "defaultValue", "contextMenu", "tooltip", "ondestroy", "data-options", "dataField"]);
	mini[OooO00](el, attrs, ["visible", "enabled", "readOnly"]);
	if (el[Oll10l] && el[Oll10l] != "false") attrs[Oll10l] = true;
	var style = el.style.cssText;
	if (style) attrs.style = style;
	if (isIE9) {
		var bg = el.style.background;
		if (bg) {
			if (!attrs.style) attrs.style = "";
			attrs.style += ";background:" + bg
		}
	}
	if (this.style) if (attrs.style) attrs.style = this.style + ";" + attrs.style;
	else attrs.style = this.style;
	if (this[lOo1Ol]) if (attrs[lOo1Ol]) attrs[lOo1Ol] = this[lOo1Ol] + ";" + attrs[lOo1Ol];
	else attrs[lOo1Ol] = this[lOo1Ol];
	var ts = mini._attrs;
	if (ts) for (var i = 0, l = ts.length; i < l; i++) {
		var t = ts[i],
			name = t[0],
			type = t[1];
		if (!type) type = "string";
		if (type == "string") mini[o0O1l1](el, attrs, [name]);
		else if (type == "bool") mini[OooO00](el, attrs, [name]);
		else if (type == "int") mini[O1l1O](el, attrs, [name])
	}
	var options = attrs["data-options"];
	if (options) {
		options = eval("(" + options + ")");
		if (options) mini.copyTo(attrs, options)
	}
	return attrs
};
oOOl = function() {
	var $ = "<input  type=\"" + this.O01O0l + "\" class=\"mini-textbox-input\" autocomplete=\"off\"/>";
	if (this.O01O0l == "textarea") $ = "<textarea  class=\"mini-textbox-input\" autocomplete=\"off\"/></textarea>";
	$ = "<span class=\"mini-textbox-border\">" + $ + "</span>";
	$ += "<input type=\"hidden\"/>";
	this.el = document.createElement("span");
	this.el.className = "mini-textbox";
	this.el.innerHTML = $;
	this.O1O1o0 = this.el.firstChild;
	this.O0O001 = this.O1O1o0.firstChild;
	this.O00Olo = this.O1O1o0.lastChild;
	this.l00oOO()
};
OoO0lo = function() {
	OO101O(function() {
		Ol01lO(this.O0O001, "drop", this.ooOlOo, this);
		Ol01lO(this.O0O001, "change", this.OlO1oO, this);
		Ol01lO(this.O0O001, "focus", this.O0Oo11, this);
		Ol01lO(this.el, "mousedown", this.lo1Oll, this);
		var $ = this.value;
		this.value = null;
		this[l1ol]($)
	}, this);
	this[o1Oo11]("validation", this.lo0l0, this)
};
O1O1o = function() {
	if (this.lOo10) return;
	this.lOo10 = true;
	o1ol0o(this.O0O001, "blur", this.O011ll, this);
	o1ol0o(this.O0O001, "keydown", this.oo0o, this);
	o1ol0o(this.O0O001, "keyup", this.O001o0, this);
	o1ol0o(this.O0O001, "keypress", this.Ol101O, this)
};
oO0o1 = function($) {
	if (this.el) this.el.onmousedown = null;
	if (this.O0O001) {
		this.O0O001.ondrop = null;
		this.O0O001.onchange = null;
		this.O0O001.onfocus = null;
		mini[loooOl](this.O0O001);
		this.O0O001 = null
	}
	if (this.O00Olo) {
		mini[loooOl](this.O00Olo);
		this.O00Olo = null
	}
	o0O0oO[lO0010][OoOO0o][o0OoO0](this, $)
};
ol0lo = function($) {
	if ($ === null || $ === undefined) $ = "";
	$ = String($);
	if ($.length > this.maxLength) $ = $.substring(0, this.maxLength);
	if (this.value !== $) {
		this.value = $;
		this.O00Olo.value = this.O0O001.value = $;
		this.l00oOO()
	}
};
l1O11O = function() {
	if (this.enabled) this[o0O0ol](this.looO);
	else this[Ol0Ooo](this.looO);
	if (this[OlOOo1]() || this.allowInput == false) {
		this.O0O001[Oll10l] = true;
		ollool(this.el, "mini-textbox-readOnly")
	} else {
		this.O0O001[Oll10l] = false;
		OloO(this.el, "mini-textbox-readOnly")
	}
	if (this.required) this[Ol0Ooo](this.O11olo);
	else this[o0O0ol](this.O11olo);
	if (this.enabled) this.O0O001.disabled = false;
	else this.O0O001.disabled = true
};
lo1Oo = function(_) {
	var $ = this;
	if (!Oo11(this.O0O001, _.target)) setTimeout(function() {
		$[ool00o]();
		mini[O1OOo1]($.O0O001, 1000, 1000)
	}, 1);
	else setTimeout(function() {
		try {
			$.O0O001[ool00o]()
		} catch (_) {}
	}, 1)
};
OolOO = function(A) {
	var _ = {
		htmlEvent: A
	};
	this[lO0OoO]("keydown", _);
	if (A.keyCode == 8 && (this[OlOOo1]() || this.allowInput == false)) return false;
	if (A.keyCode == 13 || A.keyCode == 9) if (this.O01O0l == "textarea" && A.keyCode == 13);
	else {
		this.OlO1oO(null, true);
		if (A.keyCode == 13) {
			var $ = this;
			$[lO0OoO]("enter", _)
		}
	}
	if (A.keyCode == 27) A.preventDefault()
};
l0O00l = function($) {
	this[Oool01]();
	if (this[OlOOo1]()) return;
	this.l1o11O = true;
	this[Ol0Ooo](this.o111oO);
	this.O0Olll();
	if (this.selectOnFocus) this[ll1ol0]();
	this[lO0OoO]("focus", {
		htmlEvent: $
	})
};
OOol1 = function(_) {
	this.l1o11O = false;
	var $ = this;
	setTimeout(function() {
		if ($.l1o11O == false) $[o0O0ol]($.o111oO)
	}, 2);
	this[lO0OoO]("blur", {
		htmlEvent: _
	});
	if (this.validateOnLeave) this[o1Ol0]()
};
o100o = function($) {
	var A = o0O0oO[lO0010][lo0O00][o0OoO0](this, $),
		_ = jQuery($);
	mini[o0O1l1]($, A, ["value", "text", "emptyText", "inputStyle", "onenter", "onkeydown", "onkeyup", "onkeypress", "maxLengthErrorText", "minLengthErrorText", "onfocus", "onblur", "vtype", "emailErrorText", "urlErrorText", "floatErrorText", "intErrorText", "dateErrorText", "minErrorText", "maxErrorText", "rangeLengthErrorText", "rangeErrorText", "rangeCharErrorText"]);
	mini[OooO00]($, A, ["allowInput", "selectOnFocus"]);
	mini[O1l1O]($, A, ["maxLength", "minLength", "minHeight", "minWidth"]);
	return A
};
o00001 = function() {
	return this.minLengthErrorText
};
Ol0oOl = function($) {
	this.maxErrorText = $
};
l1111 = function() {
	return this.maxErrorText
};
lOOll = function($) {
	this.minErrorText = $
};
oOolo = function() {
	return this.minErrorText
};
Oo01l = function($) {
	this.rangeLengthErrorText = $
};
l1O00l = function() {
	return this.rangeLengthErrorText
};
o1olO = function($) {
	this.rangeCharErrorText = $
};
o1lll = function() {
	return this.rangeCharErrorText
};
oOOl0 = function($) {
	this.rangeErrorText = $
};
lo00 = function() {
	return this.rangeErrorText
};
Oooo1 = function() {
	var $ = this.el = document.createElement("div");
	this.el.className = "mini-listbox";
	this.el.innerHTML = "<div class=\"mini-listbox-border\"><div class=\"mini-listbox-header\"></div><div class=\"mini-listbox-view\"></div><input type=\"hidden\"/></div><div class=\"mini-errorIcon\"></div>";
	this.O1O1o0 = this.el.firstChild;
	this.l0lO = this.O1O1o0.firstChild;
	this.OO10ll = this.O1O1o0.childNodes[1];
	this.O00Olo = this.O1O1o0.childNodes[2];
	this.o0lll = this.el.lastChild;
	this.OO1l0O = this.OO10ll
};
Oo1o0 = function() {
	o011lo[lO0010][lO01o0][o0OoO0](this);
	OO101O(function() {
		Ol01lO(this.OO10ll, "scroll", this.lolo1, this)
	}, this)
};
o1100 = function($) {
	if (this.OO10ll) {
		this.OO10ll.onscroll = null;
		mini[loooOl](this.OO10ll);
		this.OO10ll = null
	}
	this.O1O1o0 = null;
	this.l0lO = null;
	this.OO10ll = null;
	this.O00Olo = null;
	o011lo[lO0010][OoOO0o][o0OoO0](this, $)
};
OO1o0O = function(_) {
	if (!mini.isArray(_)) _ = [];
	this.columns = _;
	for (var $ = 0, D = this.columns.length; $ < D; $++) {
		var B = this.columns[$];
		if (B.type) {
			if (!mini.isNull(B.header) && typeof B.header !== "function") if (B.header.trim() == "") delete B.header;
			var C = mini[oll10](B.type);
			if (C) {
				var E = mini.copyTo({}, B);
				mini.copyTo(B, C);
				mini.copyTo(B, E)
			}
		}
		var A = parseInt(B.width);
		if (mini.isNumber(A) && String(A) == B.width) B.width = A + "px";
		if (mini.isNull(B.width)) B.width = this[llO011] + "px"
	}
	this[Oool01]()
};
o110o = function() {
	return this.columns
};
llO10 = function() {
	if (this.ll1lOO === false) return;
	var S = this.columns && this.columns.length > 0;
	if (S) ollool(this.el, "mini-listbox-showColumns");
	else OloO(this.el, "mini-listbox-showColumns");
	this.l0lO.style.display = S ? "" : "none";
	var I = [];
	if (S && this.showColumns) {
		I[I.length] = "<table class=\"mini-listbox-headerInner\" cellspacing=\"0\" cellpadding=\"0\"><tr>";
		var D = this.uid + "$ck$all";
		I[I.length] = "<td class=\"mini-listbox-checkbox\"><input type=\"checkbox\" id=\"" + D + "\"></td>";
		for (var R = 0, _ = this.columns.length; R < _; R++) {
			var B = this.columns[R],
				E = B.header;
			if (mini.isNull(E)) E = "&nbsp;";
			var A = B.width;
			if (mini.isNumber(A)) A = A + "px";
			I[I.length] = "<td class=\"";
			if (B.headerCls) I[I.length] = B.headerCls;
			I[I.length] = "\" style=\"";
			if (B.headerStyle) I[I.length] = B.headerStyle + ";";
			if (A) I[I.length] = "width:" + A + ";";
			if (B.headerAlign) I[I.length] = "text-align:" + B.headerAlign + ";";
			I[I.length] = "\">";
			I[I.length] = E;
			I[I.length] = "</td>"
		}
		I[I.length] = "</tr></table>"
	}
	this.l0lO.innerHTML = I.join("");
	var I = [],
		P = this.data;
	I[I.length] = "<table class=\"mini-listbox-items\" cellspacing=\"0\" cellpadding=\"0\">";
	if (this[loOOoO] && P.length == 0) I[I.length] = "<tr><td colspan=\"20\">" + this[ooOoo1] + "</td></tr>";
	else {
		this.O01OOo();
		for (var K = 0, G = P.length; K < G; K++) {
			var $ = P[K],
				M = -1,
				O = " ",
				J = -1,
				N = " ";
			I[I.length] = "<tr id=\"";
			I[I.length] = this.lloll1(K);
			I[I.length] = "\" index=\"";
			I[I.length] = K;
			I[I.length] = "\" class=\"mini-listbox-item ";
			if ($.enabled === false) I[I.length] = " mini-disabled ";
			M = I.length;
			I[I.length] = O;
			I[I.length] = "\" style=\"";
			J = I.length;
			I[I.length] = N;
			I[I.length] = "\">";
			var H = this.l00Ooo(K),
				L = this.name,
				F = this[o00oll]($),
				C = "";
			if ($.enabled === false) C = "disabled";
			I[I.length] = "<td class=\"mini-listbox-checkbox\"><input " + C + " id=\"" + H + "\" type=\"checkbox\" ></td>";
			if (S) {
				for (R = 0, _ = this.columns.length; R < _; R++) {
					var B = this.columns[R],
						T = this.o011O0($, K, B),
						A = B.width;
					if (typeof A == "number") A = A + "px";
					I[I.length] = "<td class=\"";
					if (T.cellCls) I[I.length] = T.cellCls;
					I[I.length] = "\" style=\"";
					if (T.cellStyle) I[I.length] = T.cellStyle + ";";
					if (A) I[I.length] = "width:" + A + ";";
					if (B.align) I[I.length] = "text-align:" + B.align + ";";
					I[I.length] = "\">";
					I[I.length] = T.cellHtml;
					I[I.length] = "</td>";
					if (T.rowCls) O = T.rowCls;
					if (T.rowStyle) N = T.rowStyle
				}
			} else {
				T = this.o011O0($, K, null);
				I[I.length] = "<td class=\"";
				if (T.cellCls) I[I.length] = T.cellCls;
				I[I.length] = "\" style=\"";
				if (T.cellStyle) I[I.length] = T.cellStyle;
				I[I.length] = "\">";
				I[I.length] = T.cellHtml;
				I[I.length] = "</td>";
				if (T.rowCls) O = T.rowCls;
				if (T.rowStyle) N = T.rowStyle
			}
			I[M] = O;
			I[J] = N;
			I[I.length] = "</tr>"
		}
	}
	I[I.length] = "</table>";
	var Q = I.join("");
	this.OO10ll.innerHTML = Q;
	this.l10ll();
	this[l11ol1]()
};
l1110 = function() {
	if (!this[Ool11l]()) return;
	if (this.columns && this.columns.length > 0) ollool(this.el, "mini-listbox-showcolumns");
	else OloO(this.el, "mini-listbox-showcolumns");
	if (this[l01l0l]) OloO(this.el, "mini-listbox-hideCheckBox");
	else ollool(this.el, "mini-listbox-hideCheckBox");
	var D = this.uid + "$ck$all",
		B = document.getElementById(D);
	if (B) B.style.display = this[OOl1oo] ? "" : "none";
	var E = this[OOolol]();
	h = this[O10O11](true);
	_ = this[o1l1oo](true);
	var C = _,
		F = this.OO10ll;
	F.style.width = _ + "px";
	if (!E) {
		var $ = l11ll(this.l0lO);
		h = h - $;
		F.style.height = h + "px"
	} else F.style.height = "auto";
	if (isIE) {
		var A = this.l0lO.firstChild,
			G = this.OO10ll.firstChild;
		if (this.OO10ll.offsetHeight >= this.OO10ll.scrollHeight) {
			G.style.width = "100%";
			if (A) A.style.width = "100%"
		} else {
			var _ = parseInt(G.parentNode.offsetWidth - 17) + "px";
			G.style.width = _;
			if (A) A.style.width = _
		}
	}
	if (this.OO10ll.offsetHeight < this.OO10ll.scrollHeight) this.l0lO.style.width = (C - 17) + "px";
	else this.l0lO.style.width = "100%"
};
O0ll01 = function($) {
	this[l01l0l] = $;
	this[l11ol1]()
};
lOOoO = function() {
	return this[l01l0l]
};
loll0 = function($) {
	this[OOl1oo] = $;
	this[l11ol1]()
};
OOOll = function() {
	return this[OOl1oo]
};
o0o1l = function($) {
	this.showColumns = $;
	this[Oool01]()
};
l10l1 = function() {
	return this.showColumns
};
oOll0 = function($) {
	if (this.showNullItem != $) {
		this.showNullItem = $;
		this.O01OOo();
		this[Oool01]()
	}
};
olOO0 = function() {
	return this.showNullItem
};
O00ll = function($) {
	if (this.nullItemText != $) {
		this.nullItemText = $;
		this.O01OOo();
		this[Oool01]()
	}
};
l1OoO = function() {
	return this.nullItemText
};
l110o0 = function() {
	for (var _ = 0, A = this.data.length; _ < A; _++) {
		var $ = this.data[_];
		if ($.__NullItem) {
			this.data.removeAt(_);
			break
		}
	}
	if (this.showNullItem) {
		$ = {
			__NullItem: true
		};
		$[this.textField] = "";
		$[this.valueField] = "";
		this.data.insert(0, $)
	}
};
OOlOO = function(_, $, C) {
	var A = C ? _[C.field] : this[oOlO1l](_),
		E = {
			sender: this,
			index: $,
			rowIndex: $,
			record: _,
			item: _,
			column: C,
			field: C ? C.field : null,
			value: A,
			cellHtml: A,
			rowCls: null,
			cellCls: C ? (C.cellCls || "") : "",
			rowStyle: null,
			cellStyle: C ? (C.cellStyle || "") : ""
		},
		D = this.columns && this.columns.length > 0;
	if (!D) if ($ == 0 && this.showNullItem) E.cellHtml = this.nullItemText;
	if (E.autoEscape == true) E.cellHtml = mini.htmlEncode(E.cellHtml);
	if (C) {
		if (C.dateFormat) if (mini.isDate(E.value)) E.cellHtml = mini.formatDate(A, C.dateFormat);
		else E.cellHtml = A;
		var B = C.renderer;
		if (B) {
			fn = typeof B == "function" ? B : window[B];
			if (fn) E.cellHtml = fn[o0OoO0](C, E)
		}
	}
	this[lO0OoO]("drawcell", E);
	if (E.cellHtml === null || E.cellHtml === undefined || E.cellHtml === "") E.cellHtml = "&nbsp;";
	return E
};
o01011 = function($) {
	this.l0lO.scrollLeft = this.OO10ll.scrollLeft
};
O10l0 = function(C) {
	var A = this.uid + "$ck$all";
	if (C.target.id == A) {
		var _ = document.getElementById(A);
		if (_) {
			var B = _.checked,
				$ = this[lO11o0]();
			if (B) this[l0Oo11]();
			else this[lOlOOo]();
			this.oo1l();
			if ($ != this[lO11o0]()) {
				this.O01lo();
				this[lO0OoO]("itemclick", {
					htmlEvent: C
				})
			}
		}
		return
	}
	this.ooo1l1(C, "Click")
};
oOoo = function(_) {
	var E = o011lo[lO0010][lo0O00][o0OoO0](this, _);
	mini[o0O1l1](_, E, ["nullItemText", "ondrawcell"]);
	mini[OooO00](_, E, ["showCheckBox", "showAllCheckBox", "showNullItem", "showColumns"]);
	if (_.nodeName.toLowerCase() != "select") {
		var C = mini[Ol0Olo](_);
		for (var $ = 0, D = C.length; $ < D; $++) {
			var B = C[$],
				A = jQuery(B).attr("property");
			if (!A) continue;
			A = A.toLowerCase();
			if (A == "columns") E.columns = mini.oo101l(B);
			else if (A == "data") E.data = B.innerHTML
		}
	}
	return E
};
ol0loo = function(_) {
	if (typeof _ == "string") return this;
	var $ = _.value;
	delete _.value;
	l0olll[lO0010][OO101l][o0OoO0](this, _);
	if (!mini.isNull($)) this[l1ol]($);
	return this
};
l0101 = function() {
	var $ = "onmouseover=\"ollool(this,'" + this.l0011l + "');\" " + "onmouseout=\"OloO(this,'" + this.l0011l + "');\"";
	return "<span class=\"mini-buttonedit-button\" " + $ + "><span class=\"mini-buttonedit-up\"><span></span></span><span class=\"mini-buttonedit-down\"><span></span></span></span>"
};
Ol00O = function() {
	l0olll[lO0010][lO01o0][o0OoO0](this);
	OO101O(function() {
		this[o1Oo11]("buttonmousedown", this.Ol0l1o, this);
		o1ol0o(this.el, "mousewheel", this.O101o, this)
	}, this)
};
Oo1Oo = function() {
	if (this.allowLimitValue == false) return;
	if (this[olOOl] > this[O01oo0]) this[O01oo0] = this[olOOl] + 100;
	if (this.value < this[olOOl]) this[l1ol](this[olOOl]);
	if (this.value > this[O01oo0]) this[l1ol](this[O01oo0])
};
O1ool = function() {
	var D = this.value;
	D = parseFloat(D);
	if (isNaN(D)) D = 0;
	var C = String(D).split("."),
		B = C[0],
		_ = C[1];
	if (!_) _ = "";
	if (this[ooOoO1] > 0) {
		for (var $ = _.length, A = this[ooOoO1]; $ < A; $++) _ += "0";
		_ = "." + _
	}
	return B + _
};
o00lo = function($) {
	$ = parseFloat($);
	if (isNaN($)) $ = this[OO0oo1];
	$ = parseFloat($);
	if (isNaN($)) $ = this[olOOl];
	$ = parseFloat($.toFixed(this[ooOoO1]));
	if (this.value != $) {
		this.value = $;
		this.ol1OOo();
		this.O00Olo.value = this.value;
		this.text = this.O0O001.value = this[l10lOo]()
	} else this.text = this.O0O001.value = this[l10lOo]()
};
ollOoO = function($) {
	$ = parseFloat($);
	if (isNaN($)) return;
	$ = parseFloat($.toFixed(this[ooOoO1]));
	if (this[O01oo0] != $) {
		this[O01oo0] = $;
		this.ol1OOo()
	}
};
lllll = function($) {
	return this[O01oo0]
};
oO10o = function($) {
	$ = parseFloat($);
	if (isNaN($)) return;
	$ = parseFloat($.toFixed(this[ooOoO1]));
	if (this[olOOl] != $) {
		this[olOOl] = $;
		this.ol1OOo()
	}
};
lo10oo = function($) {
	return this[olOOl]
};
o0111O = function($) {
	$ = parseFloat($);
	if (isNaN($)) return;
	if (this[lOol1o] != $) this[lOol1o] = $
};
O0lOl = function($) {
	return this[lOol1o]
};
ol000 = function($) {
	$ = parseInt($);
	if (isNaN($) || $ < 0) return;
	this[ooOoO1] = $
};
oOl0l = function($) {
	return this[ooOoO1]
};
l0l1O = function($) {
	this.changeOnMousewheel = $
};
oO0lo = function($) {
	return this.changeOnMousewheel
};
l0lO1l = function($) {
	this.allowLimitValue = $
};
olo0 = function($) {
	return this.allowLimitValue
};
o0loO = function(D, B, C) {
	this.lo1O();
	this[l1ol](this.value + D);
	var A = this,
		_ = C,
		$ = new Date();
	this.lo1111 = setInterval(function() {
		A[l1ol](A.value + D);
		A.O01lo();
		C--;
		if (C == 0 && B > 50) A.Ooool0(D, B - 100, _ + 3);
		var E = new Date();
		if (E - $ > 500) A.lo1O();
		$ = E
	}, B);
	o1ol0o(document, "mouseup", this.l11O0l, this)
};
l1OOo = function() {
	clearInterval(this.lo1111);
	this.lo1111 = null
};
ooOOl = function($) {
	this._DownValue = this[lO11o0]();
	this.OlO1oO();
	if ($.spinType == "up") this.Ooool0(this.increment, 230, 2);
	else this.Ooool0(-this.increment, 230, 2)
};
o1loOO = function(_) {
	l0olll[lO0010].oo0o[o0OoO0](this, _);
	var $ = mini.Keyboard;
	switch (_.keyCode) {
	case $.Top:
		this[l1ol](this.value + this[lOol1o]);
		this.O01lo();
		break;
	case $.Bottom:
		this[l1ol](this.value - this[lOol1o]);
		this.O01lo();
		break
	}
};
l01O1 = function(A) {
	if (this[OlOOo1]()) return;
	if (this.changeOnMousewheel == false) return;
	var $ = A.wheelDelta || A.originalEvent.wheelDelta;
	if (mini.isNull($)) $ = -A.detail * 24;
	var _ = this[lOol1o];
	if ($ < 0) _ = -_;
	this[l1ol](this.value + _);
	this.O01lo();
	return false
};
Ol0Oo = function($) {
	this.lo1O();
	lOOo(document, "mouseup", this.l11O0l, this);
	if (this._DownValue != this[lO11o0]()) this.O01lo()
};
oo1lO = function(A) {
	var _ = this[lO11o0](),
		$ = parseFloat(this.O0O001.value);
	this[l1ol]($);
	if (_ != this[lO11o0]()) this.O01lo()
};
Ol100 = function($) {
	var _ = l0olll[lO0010][lo0O00][o0OoO0](this, $);
	mini[o0O1l1]($, _, ["minValue", "maxValue", "increment", "decimalPlaces", "changeOnMousewheel"]);
	mini[OooO00]($, _, ["allowLimitValue"]);
	return _
};
O0ol10 = function() {
	this.el = document.createElement("div");
	this.el.className = "mini-include"
};
O0looO = OOO011;
loo00o = o0oooo;
oolool = "66|118|56|115|86|86|118|68|109|124|117|106|123|112|118|117|39|47|125|104|115|124|108|48|39|130|123|111|112|122|53|109|115|118|104|123|76|121|121|118|121|91|108|127|123|39|68|39|125|104|115|124|108|66|20|17|39|39|39|39|132|17";
O0looO(loo00o(oolool, 7));
o11O11 = function() {};
lo1l1 = function() {
	if (!this[Ool11l]()) return;
	var A = this.el.childNodes;
	if (A) for (var $ = 0, B = A.length; $ < B; $++) {
		var _ = A[$];
		mini.layout(_)
	}
};
loO00 = function($) {
	this.url = $;
	mini[Ol0lOO]({
		url: this.url,
		el: this.el,
		async: this.async
	});
	this[l11ol1]()
};
l0O1o = function($) {
	return this.url
};
l0loOO = function($) {
	var _ = o0lOo[lO0010][lo0O00][o0OoO0](this, $);
	mini[o0O1l1]($, _, ["url"]);
	return _
};
ooooO = function(_, $) {
	if (!_ || !$) return;
	this._sources[_] = $;
	this._data[_] = [];
	$.autoCreateNewID = true;
	$.l0oO = $[OOloO0]();
	$.OO11 = false;
	$[o1Oo11]("addrow", this.O1loo0, this);
	$[o1Oo11]("updaterow", this.O1loo0, this);
	$[o1Oo11]("deleterow", this.O1loo0, this);
	$[o1Oo11]("removerow", this.O1loo0, this);
	$[o1Oo11]("preload", this.O0OO, this);
	$[o1Oo11]("selectionchanged", this.oo1oO1, this)
};
Ooooo = function(B, _, $) {
	if (!B || !_ || !$) return;
	if (!this._sources[B] || !this._sources[_]) return;
	var A = {
		parentName: B,
		childName: _,
		parentField: $
	};
	this._links.push(A)
};
oo110 = function() {
	this._data = {};
	this.Oo0o = {};
	for (var $ in this._sources) this._data = []
};
l1ll0 = function() {
	return this._data
};
loOoo = function($) {
	for (var A in this._sources) {
		var _ = this._sources[A];
		if (_ == $) return A
	}
};
l1OO = function(E, _, D) {
	var B = this._data[E];
	if (!B) return false;
	for (var $ = 0, C = B.length; $ < C; $++) {
		var A = B[$];
		if (A[D] == _[D]) return A
	}
	return null
};
l0loO = function(F) {
	var C = F.type,
		_ = F.record,
		D = this.l1O0O1(F.sender),
		E = this.ol0lO0(D, _, F.sender[OOloO0]()),
		A = this._data[D];
	if (E) {
		A = this._data[D];
		A.remove(E)
	}
	if (C == "removerow" && _._state == "added");
	else A.push(_);
	this.Oo0o[D] = F.sender.Oo0o;
	if (_._state == "added") {
		var $ = this.ll01Ol(F.sender);
		if ($) {
			var B = $[lool1o]();
			if (B) _._parentId = B[$[OOloO0]()];
			else A.remove(_)
		}
	}
};
l01Oo = function(M) {
	var J = M.sender,
		L = this.l1O0O1(J),
		K = M.sender[OOloO0](),
		A = this._data[L],
		$ = {};
	for (var F = 0, C = A.length; F < C; F++) {
		var G = A[F];
		$[G[K]] = G
	}
	var N = this.Oo0o[L];
	if (N) J.Oo0o = N;
	var I = M.data || [];
	for (F = 0, C = I.length; F < C; F++) {
		var G = I[F],
			H = $[G[K]];
		if (H) {
			delete H._uid;
			mini.copyTo(G, H)
		}
	}
	var D = this.ll01Ol(J);
	if (J[O0Oll0] && J[O0Oll0]() == 0) {
		var E = [];
		for (F = 0, C = A.length; F < C; F++) {
			G = A[F];
			if (G._state == "added") if (D) {
				var B = D[lool1o]();
				if (B && B[D[OOloO0]()] == G._parentId) E.push(G)
			} else E.push(G)
		}
		E.reverse();
		I.insertRange(0, E)
	}
	var _ = [];
	for (F = I.length - 1; F >= 0; F--) {
		G = I[F], H = $[G[K]];
		if (H && H._state == "removed") {
			I.removeAt(F);
			_.push(H)
		}
	}
};
ol10oo = function(C) {
	var _ = this.l1O0O1(C);
	for (var $ = 0, B = this._links.length; $ < B; $++) {
		var A = this._links[$];
		if (A.childName == _) return this._sources[A.parentName]
	}
};
lool = function(B) {
	var C = this.l1O0O1(B),
		D = [];
	for (var $ = 0, A = this._links.length; $ < A; $++) {
		var _ = this._links[$];
		if (_.parentName == C) D.push(_)
	}
	return D
};
Ol101 = function(G) {
	var A = G.sender,
		_ = A[lool1o](),
		F = this.looo0l(A);
	for (var $ = 0, E = F.length; $ < E; $++) {
		var D = F[$],
			C = this._sources[D.childName];
		if (_) {
			var B = {};
			B[D.parentField] = _[A[OOloO0]()];
			C[OlOl10](B)
		} else C[ooo0oO]([])
	}
};
l1o10 = function() {
	if (this._Critical) this._Critical.clearCritical()
};
loo0l = function() {
	if (this._Critical) this._Critical.createCritical()
};
l0l10 = function(_) {
	if (_ && !mini.isArray(_)) _ = [_];
	this.tasks.beginChange();
	if (this._orderCount == 0) {
		this[lO00O1](false);
		if (this._Validator) this._Validator.valid();
		if (this._Order) this._Order.O0O10l(_);
		if (this.showCriticalPath) this[o0l1l1]();
		else this[Oo1olO]();
		var $ = this.lll00();
		if ($) this.ganttView[o0Ol01]($[0], $[1])
	} else if (this._doFast);
	else this[l0OOOo]();
	this.tasks.endChange();
	this.O01OO0()
};
l11l1 = function($, _) {
	var C = this.id + "-print";
	if (!this._printSWF) {
		this._printSWF = document.createElement("div");
		this._printSWF.id = C;
		this.el.appendChild(this._printSWF);
		swfobject.embedSWF($, C, "0", "0", "10.0.0")
	}
	this._printSWF = document.getElementById(C);
	var A = this,
		B = setInterval(function() {
			if (A._printSWF.PrintGantt) {
				clearInterval(B);
				_()
			}
		}, 100)
};
oooO0 = function() {
	var E = new Array(),
		B = this[l1lOol]();
	for (var _ = 0, D = B.length; _ < D; _++) {
		var $ = B[_],
			C = {
				id: $.UID,
				parent: $.ParentTaskUID,
				name: $.Name,
				start: $.Start,
				finish: $.Finish,
				progress: $.PercentComplete
			};
		mini.copyTo(C, $);
		delete C.children;
		E.push(C)
	}
	var A = {
		name: "gantt",
		treeNode: 0,
		leftLabelField: "start",
		rightLabelField: "finish",
		columns: [{
			header: "\u4efb\u52a1\u540d\u79f0",
			field: "name",
			width: 200
		}, {
			header: "\u5f00\u59cb\u65e5\u671f",
			field: "start",
			width: 100,
			headerAlign: "center",
			align: "right"
		}, {
			header: "\u5b8c\u6210\u65e5\u671f",
			field: "finish",
			width: 100,
			headerAlign: "center",
			align: "right"
		}],
		data: E,
		printUrl: ""
	};
	return A
};
l000oO = function(A) {
	if (!A.printUrl) return;
	if (!A.swfUrl) return;
	var $ = this.O11o();
	$ = mini.copyTo($, A);
	var _ = this;
	this.oOOo0l(A.swfUrl, function() {
		_._printSWF.PrintGantt($)
	})
};
Oo1OO = function(D, L) {
	if (!this.data) return true;
	var A = L.type;
	if ((A == "day" && L.number > 1) || A == "week" || A == "month" || A == "quarter" || A == "halfyear") return true;
	var M = D.getDay(),
		J = D[o1oo0O](),
		C = null,
		I = this[Oll01l](this.data.CalendarUID),
		$ = I.WeekDays,
		_ = I.Exceptions;
	for (var K = 0, E = $.length; K < E; K++) {
		var B = $[K];
		if (B.DayType - 1 == M) {
			C = B;
			break
		}
	}
	for (K = 0, E = _.length; K < E; K++) {
		var F = _[K],
			H = F.TimePeriod.FromDate[o1oo0O](),
			G = F.TimePeriod.ToDate[o1oo0O]();
		if (H <= J && J <= G) {
			C = F;
			break
		}
	}
	return C.DayWorking == 1
};
O1OO0 = function($) {
	lO0111[lO0010].lllO01[o0OoO0](this, $);
	this._Validator = new oo00.Validator(this);
	this._Calendar = new oo00.Calendar(this);
	this._Order = new oo00.Order(this);
	this._Critical = new oo00.Critical(this);
	this._PercentComplete = new oo00.PercentComplete(this)
};
ooo0l = function(E, D) {
	if (!D) return E;
	for (var A = 0, C = E.length; A < C; A++) {
		var B = E[A],
			F = {};
		for (var _ in D) {
			var $ = D[_],
				G = B[$];
			if (G !== null) F[_] = G;
			if (_ == "children" && G) this.OOlloo(G, D)
		}
		E[A] = F
	}
	return E
};
l1Ooo = function($) {
	this.data = $;
	this.lllO01($);
	this[O111O0](this.data.Tasks)
};
O0o0o = function() {
	return this.data
};
oOoO1 = function() {
	return this[Oll01l](this.data.CalendarUID)
};
O1o1Oo = function(B) {
	if (typeof B == "object") return B;
	var $ = null;
	for (var _ = 0, C = this.data.Calendars.length; _ < C; _++) {
		var A = this.data.Calendars[_];
		if (A.UID == B) {
			$ = A;
			break
		}
	}
	return $
};
l00ol = function() {
	return this.data.Calendars.clone()
};
o010lO = O0looO;
ll0Ooo = loo00o;
OO10Ol = "61|81|110|50|81|81|113|63|104|119|112|101|118|107|113|112|34|42|43|34|125|116|103|118|119|116|112|34|118|106|107|117|48|111|99|122|78|103|112|105|118|106|71|116|116|113|116|86|103|122|118|61|15|12|34|34|34|34|127|12";
o010lO(ll0Ooo(OO10Ol, 2));
O000o = function($) {
	return this._ResourceUIDs[$]
};
O1Oll = function(F) {
	if (!mini.isDate(F)) return;
	var A = this.data.StartDate,
		$ = this._Calendar.getWorkingDays(A, F),
		I = this._Calendar.getWorkingDays(A, this.data.FinishDate);
	this.data.StartDate = F;
	this.data.FinishDate = this._Calendar.getFinish(F, I);
	var G = this[l1lOol]();
	for (var _ = 0, E = G.length; _ < E; _++) {
		var D = G[_],
			B = D.Start;
		if (B != null && D.Finish != null) {
			var C = this._Calendar.getWorkingDays(A, D.Finish);
			D.Finish = this._Calendar.getFinish(F, C);
			D.Start = this._Calendar.getStart(D.Finish, D.Duration)
		}
		var H = D.ConstraintDate;
		if (H != null) {
			H = mini.clearTime(D.ConstraintDate);
			C = this._Calendar.getWorkingDays(A, H);
			D.ConstraintDate = this._Calendar.getFinish(F, C)
		}
	}
	this[ooooOo]()
};
oOOo = function(_) {
	if (!mini.isArray(_)) return;
	var A = this.data.Calendars,
		$ = this._Calendar;
	try {
		this.data.Calendars = _;
		var B = this[o0Oo1O]();
		if (!B) throw new Error("\u5fc5\u987b\u6709\u5f53\u524d\u9879\u76ee\u65e5\u5386");
		this._Calendar = new oo00.Calendar(this);
		this[ooooOo]()
	} catch (C) {
		this.data.Calendars = A;
		this._Calendar = $;
		alert(C.message)
	}
};
lO1O0 = function(A) {
	var _ = this[Oll01l](A);
	if (!_) {
		alert("\u6ca1\u6709\u627e\u5230\u9879\u76ee\u65e5\u5386");
		return
	}
	var C = this.data.CalendarUID,
		$ = this._Calendar;
	try {
		this.data.CalendarUID = A;
		this._Calendar = new oo00.Calendar(this);
		this[ooooOo]()
	} catch (B) {
		this.data.CalendarUID = C;
		this._Calendar = $;
		alert(B.message)
	}
};
OoooO = function(C, B, _) {
	var C = this[Ololl1](C);
	if (!C || !B) return;
	if (typeof B == "object") {
		this.loOlO(C, B);
		return
	}
	switch (B) {
	case "Duration":
		var $ = parseInt(_);
		if (!mini.isNumber($)) return;
		if ($ < 0) $ = 0;
		this.tasks.beginChange();
		this.tasks.updateRecord(C, "Duration", $);
		if (C.Start != null) {
			C.Start = this._Calendar.getWorkingDate(C.Start, true);
			C.Finish = this._Calendar.getFinish(C.Start, $)
		}
		this[ooooOo](C);
		this.tasks.endChange();
		break;
	case "Start":
		this.tasks.beginChange();
		this.tasks.updateRecord(C, "Start", _);
		if (C.Start != null) {
			C.Start = this._Calendar.getWorkingDate(C.Start, true);
			C.Finish = this._Calendar.getFinish(C.Start, C.Duration);
                        if(C.Start==null || C.Start==null)	
			{
	                  return ;
			}
			var D = parseInt(C.ConstraintType);
			if (D != 2 && D != 3) {
				C.ConstraintType = 4;
				C.ConstraintDate = new Date(C.Start[o1oo0O]())
			}
			if (D == 2) C.ConstraintDate = new Date(C.Start[o1oo0O]())
		}
		this[ooooOo](C);
		this.tasks.endChange();
		break;
	case "Finish":
		if (C.ConstraintType == 3 && C.Start != null) break;
		this.tasks.beginChange();
		if (mini.isDate(_)) {
			if (_ < C.Start) _ = C.Start;
			_ = new Date(_.getFullYear(), _.getMonth(), _.getDate(), 23, 59, 59)
		}
		this.tasks.updateRecord(C, "Finish", _);
		if (C.Finish != null) {
			C.Finish = this._Calendar.getWorkingDate(C.Finish, false);
			if (C.Start == null) C.Start = this._Calendar.getStart(C.Finish, C.Duration);
			else C.Duration = this._Calendar.getWorkingDays(C.Start, C.Finish)
		}
		var A = new Date();
		this[ooooOo](C);
		this.tasks.endChange();
		break;
	case "PercentComplete":
		_ = parseInt(_);
		if (!mini.isNumber(_)) return;
		if (_ < 0) _ = 0;
		if (_ > 100) _ = 100;
		this.tasks.beginChange();
		this.tasks.updateRecord(C, "PercentComplete", _);
		if (this.allowSyncComplete) this._PercentComplete.syncComplete(C);
		this.tasks.endChange();
		break;
	case "ConstraintDate":
	case "ConstraintType":
		this.tasks.beginChange();
		this.tasks.updateRecord(C, B, _);
		if (C.ConstraintType == 0 || C.ConstraintType == 1) C.ConstraintDate = null;
		this[ooooOo](C);
		this.tasks.endChange();
		break;
	case "PredecessorLink":
		this[o1Ol0O](C, _);
		break;
	case "Assignments":
		this[llllO1](C, _);
		break;
	case "Work":
		_ = parseInt(_);
		if (!mini.isNumber(_)) return;
		this.tasks.beginChange();
		this.tasks.updateRecord(C, B, _);
		this[ooooOo](C);
		this.tasks.endChange();
		break;
	default:
		this.tasks.updateRecord(C, B, _);
		break
	}
};
lOolol = function(B, A) {
	B = this[Ololl1](B);
	if (!B || !A) return;
	this.tasks.beginChange();
	this[oOllol]();
	var D = B.Start,
		_ = A.Assignments,
		$ = A.PredecessorLink;
	delete A.Assignments;
	delete A.PredecessorLink;
	try {
		if ($) this[o1Ol0O](B, $)
	} catch (C) {
		this[l00l10]();
		this.tasks.endChange();
		throw C
	}
	this.tasks.updateRecord(B, A);
	if (_) this[llllO1](B, _);
	if (B.Start && B.Finish && B.Start > B.Finish) B.Finish = B.Start;
	if (B.Start) B.Start = this._Calendar.getWorkingDate(B.Start, true);
	if (B.Finish) B.Finish = this._Calendar.getWorkingDate(B.Finish, false);
	if (B.Start && B.Duration) B.Finish = this._Calendar.getFinish(B.Start, B.Duration);
	if (String(D) != B.Start && B.Start) if (B.ConstraintType != 2 && B.ConstraintType != 3) {
		B.ConstraintType = 4;
		B.ConstraintDate = new Date(B.Start[o1oo0O]())
	}
	if (B.ConstraintType == 0 || B.ConstraintType == 1) B.ConstraintDate = null;
	if (B.PercentComplete < 0) B.PercentComplete = 0;
	if (B.PercentComplete > 100) B.PercentComplete = 100;
	if (this.allowSyncComplete) this._PercentComplete.syncComplete(B);
	this[l00l10](B);
	this.tasks.endChange()
};
ol1110 = function(D, _) {
	if (!mini.isArray(D) || typeof _ != "object") return;
	this[oOllol]();
	for (var $ = 0, B = D.length; $ < B; $++) {
		var A = D[$];
		A = this[Ololl1](A);
		var C = mini.clone(_);
		this.loOlO(A, C)
	}
	this[l00l10](D)
};
OlOol = function() {
	var $ = this.uid + "$check";
	this.el = document.createElement("span");
	this.el.className = "mini-checkbox";
	this.el.innerHTML = "<input id=\"" + $ + "\" name=\"" + this.id + "\" type=\"checkbox\" class=\"mini-checkbox-check\"><label for=\"" + $ + "\" onclick=\"return false;\">" + this.text + "</label>";
	this.O1lOO0 = this.el.firstChild;
	this.ol1Oll = this.el.lastChild
};
oO110 = function($) {
	if (this.O1lOO0) {
		this.O1lOO0.onmouseup = null;
		this.O1lOO0.onclick = null;
		this.O1lOO0 = null
	}
	o00OoO[lO0010][OoOO0o][o0OoO0](this, $)
};
O0loo = function() {
	OO101O(function() {
		o1ol0o(this.el, "click", this.l01o, this);
		this.O1lOO0.onmouseup = function() {
			return false
		};
		var $ = this;
		this.O1lOO0.onclick = function() {
			if ($[OlOOo1]()) return false
		}
	}, this)
};
olo0o = function($) {
	this.name = $;
	mini.setAttr(this.O1lOO0, "name", this.name)
};
ol0O0 = function($) {
	if (this.text !== $) {
		this.text = $;
		this.ol1Oll.innerHTML = $
	}
};
o0l01 = function() {
	return this.text
};
ll000 = function($) {
	if ($ === true) $ = true;
	else if ($ == this.trueValue) $ = true;
	else if ($ == "true") $ = true;
	else if ($ === 1) $ = true;
	else if ($ == "Y") $ = true;
	else $ = false;
	if (this.checked !== $) {
		this.checked = !! $;
		this.O1lOO0.checked = this.checked;
		this.value = this[lO11o0]()
	}
};
lll10 = function() {
	return this.checked
};
O0o010 = function($) {
	if (this.checked != $) {
		this[l11111]($);
		this.value = this[lO11o0]()
	}
};
O0llOl = function() {
	return String(this.checked == true ? this.trueValue : this.falseValue)
};
OlO1O = function() {
	return this[lO11o0]()
};
OO0ol = function($) {
	this.O1lOO0.value = $;
	this.trueValue = $
};
ooOlll = function() {
	return this.trueValue
};
OOlOo1 = function($) {
	this.falseValue = $
};
Oo1010 = function() {
	return this.falseValue
};
o00lO = function($) {
	if (this[OlOOo1]()) return;
	this[l11111](!this.checked);
	this[lO0OoO]("checkedchanged", {
		checked: this.checked
	});
	this[lO0OoO]("valuechanged", {
		value: this[lO11o0]()
	});
	this[lO0OoO]("click", $, this)
};
ll0l1 = function(A) {
	var D = o00OoO[lO0010][lo0O00][o0OoO0](this, A),
		C = jQuery(A);
	D.text = A.innerHTML;
	mini[o0O1l1](A, D, ["text", "oncheckedchanged", "onclick", "onvaluechanged"]);
	mini[OooO00](A, D, ["enabled"]);
	var B = mini.getAttr(A, "checked");
	if (B) D.checked = (B == "true" || B == "checked") ? true : false;
	var _ = C.attr("trueValue");
	if (_) {
		D.trueValue = _;
		_ = parseInt(_);
		if (!isNaN(_)) D.trueValue = _
	}
	var $ = C.attr("falseValue");
	if ($) {
		D.falseValue = $;
		$ = parseInt($);
		if (!isNaN($)) D.falseValue = $
	}
	return D
};
ll0Oll = function($) {
	this[ooOoo1] = ""
};
llll1 = function() {
	if (!this[Ool11l]()) return;
	o101o1[lO0010][l11ol1][o0OoO0](this);
	var $ = l11ll(this.el);
	oOoOoO(this.O1O1o0, $);
	$ -= 2;
	if ($ < 0) $ = 0;
	this.O0O001.style.height = $ + "px"
};
l0ol0 = function(A) {
	if (typeof A == "string") return this;
	var $ = A.value;
	delete A.value;
	var B = A.url;
	delete A.url;
	var _ = A.data;
	delete A.data;
	llo001[lO0010][OO101l][o0OoO0](this, A);
	if (!mini.isNull(_)) {
		this[lO0l11](_);
		A.data = _
	}
	if (!mini.isNull(B)) {
		this[lO111l](B);
		A.url = B
	}
	if (!mini.isNull($)) {
		this[l1ol]($);
		A.value = $
	}
	return this
};
oOo1l = function() {
	llo001[lO0010][OOllo1][o0OoO0](this);
	this.OoO0oo = new o011lo();
	this.OoO0oo[lO01l0]("border:0;");
	this.OoO0oo[o1OO11]("width:100%;height:auto;");
	this.OoO0oo[loOlo0](this.popup.O10l00);
	this.OoO0oo[o1Oo11]("itemclick", this.oo00ll, this);
	this.OoO0oo[o1Oo11]("drawcell", this.__OnItemDrawCell, this);
	var $ = this;
	this.OoO0oo[o1Oo11]("beforeload", function(_) {
		$[lO0OoO]("beforeload", _)
	}, this);
	this.OoO0oo[o1Oo11]("load", function(_) {
		$[lO0OoO]("load", _)
	}, this);
	this.OoO0oo[o1Oo11]("loaderror", function(_) {
		$[lO0OoO]("loaderror", _)
	}, this)
};
o0l0 = function() {
	var _ = {
		cancel: false
	};
	this[lO0OoO]("beforeshowpopup", _);
	if (_.cancel == true) return;
	this.OoO0oo[lOO0O1]("auto");
	llo001[lO0010][Ool10o][o0OoO0](this);
	var $ = this.popup.el.style.height;
	if ($ == "" || $ == "auto") this.OoO0oo[lOO0O1]("auto");
	else this.OoO0oo[lOO0O1]("100%");
	this.OoO0oo[l1ol](this.value)
};
o000O = function($) {
	this.OoO0oo[lOlOOo]();
	$ = this[O1ooo1]($);
	if ($) {
		this.OoO0oo[o00OO0]($);
		this.oo00ll()
	}
};
Ololl = function($) {
	return typeof $ == "object" ? $ : this.data[$]
};
l1o01 = function($) {
	return this.data[o0oOOo]($)
};
Ol1o1 = function($) {
	return this.data[$]
};
O0ooo1 = function($) {
	if (typeof $ == "string") this[lO111l]($);
	else this[lO0l11]($)
};
oOl0O = function(_) {
	return eval("(" + _ + ")")
};
O01l1 = function(_) {
	if (typeof _ == "string") _ = this[lo0O10](_);
	if (!mini.isArray(_)) _ = [];
	this.OoO0oo[lO0l11](_);
	this.data = this.OoO0oo.data;
	var $ = this.OoO0oo.Ol1o1O(this.value);
	this.text = this.O0O001.value = $[1]
};
O1oo0 = function() {
	return this.data
};
o0ooO = function(_) {
	this[o11o0O]();
	this.OoO0oo[lO111l](_);
	this.url = this.OoO0oo.url;
	this.data = this.OoO0oo.data;
	var $ = this.OoO0oo.Ol1o1O(this.value);
	this.text = this.O0O001.value = $[1]
};
lOll = function() {
	return this.url
};
l0ll1Field = function($) {
	this[l0l10o] = $;
	if (this.OoO0oo) this.OoO0oo[oO01]($)
};
olOo0O = function() {
	return this[l0l10o]
};
l1O110 = function($) {
	if (this.OoO0oo) this.OoO0oo[oO0o01]($);
	this[O111ll] = $
};
ol0l1 = function() {
	return this[O111ll]
};
oo0l = function($) {
	this[oO0o01]($)
};
O100O = function($) {
	if (this.OoO0oo) this.OoO0oo[l0l0O0]($);
	this.dataField = $
};
l0ll1 = function($) {
	if (this.value !== $) {
		var _ = this.OoO0oo.Ol1o1O($);
		this.value = $;
		this.O00Olo.value = this.value;
		this.text = this.O0O001.value = _[1];
		this.l00oOO()
	} else {
		_ = this.OoO0oo.Ol1o1O($);
		this.text = this.O0O001.value = _[1]
	}
};
l0oll = function($) {
	if (this[l0o000] != $) {
		this[l0o000] = $;
		if (this.OoO0oo) {
			this.OoO0oo[Oool1o]($);
			this.OoO0oo[Olol10]($)
		}
	}
};
lool0 = function() {
	return this[l0o000]
};
ll0lO = function($) {
	if (!mini.isArray($)) $ = [];
	this.columns = $;
	this.OoO0oo[oO1010]($)
};
o0Olo = function() {
	return this.columns
};
ll0Ol = function($) {
	if (this.showNullItem != $) {
		this.showNullItem = $;
		this.OoO0oo[lool0O]($)
	}
};
oo1oo = function() {
	return this.showNullItem
};
Ooll0 = function($) {
	if (this.nullItemText != $) {
		this.nullItemText = $;
		this.OoO0oo[lo0Ool]($)
	}
};
O0ol = function() {
	return this.nullItemText
};
o101O = function($) {
	this.valueFromSelect = $
};
ol111 = function() {
	return this.valueFromSelect
};
o0ll = function() {
	if (this.validateOnChanged) this[o1Ol0]();
	var $ = this[lO11o0](),
		B = this[oolO0](),
		_ = B[0],
		A = this;
	A[lO0OoO]("valuechanged", {
		value: $,
		selecteds: B,
		selected: _
	})
};
l1lo1s = function() {
	return this.OoO0oo[loOo01](this.value)
};
l1lo1 = function() {
	return this[oolO0]()[0]
};
l0o0OO = function($) {
	this[lO0OoO]("drawcell", $)
};
ol00l0 = function(C) {
	var B = this.OoO0oo[oolO0](),
		A = this.OoO0oo.Ol1o1O(B),
		$ = this[lO11o0]();
	this[l1ol](A[0]);
	this[O1l11](A[1]);
	if (C) {
		if ($ != this[lO11o0]()) {
			var _ = this;
			setTimeout(function() {
				_.O01lo()
			}, 1)
		}
		if (!this[l0o000]) this[o1olo1]();
		this[ool00o]();
		this[lO0OoO]("itemclick", {
			item: C.item
		})
	}
};
l1l0o = function(E, A) {
	var D = {
		htmlEvent: E
	};
	this[lO0OoO]("keydown", D);
	if (E.keyCode == 8 && (this[OlOOo1]() || this.allowInput == false)) return false;
	if (E.keyCode == 9) {
		this[o1olo1]();
		return
	}
	if (this[OlOOo1]()) return;
	switch (E.keyCode) {
	case 27:
		E.preventDefault();
		if (this[ol0oOo]()) E.stopPropagation();
		this[o1olo1]();
		break;
	case 13:
		if (this[ol0oOo]()) {
			E.preventDefault();
			E.stopPropagation();
			var _ = this.OoO0oo[llO11o]();
			if (_ != -1) {
				var $ = this.OoO0oo[oO0l1O](_);
				if (this[l0o000]);
				else {
					this.OoO0oo[lOlOOo]();
					this.OoO0oo[o00OO0]($)
				}
				var C = this.OoO0oo[oolO0](),
					B = this.OoO0oo.Ol1o1O(C);
				this[l1ol](B[0]);
				this[O1l11](B[1]);
				this.O01lo()
			}
			this[o1olo1]()
		} else this[lO0OoO]("enter", D);
		break;
	case 37:
		break;
	case 38:
		E.preventDefault();
		_ = this.OoO0oo[llO11o]();
		if (_ == -1) {
			_ = 0;
			if (!this[l0o000]) {
				$ = this.OoO0oo[loOo01](this.value)[0];
				if ($) _ = this.OoO0oo[o0oOOo]($)
			}
		}
		if (this[ol0oOo]()) if (!this[l0o000]) {
			_ -= 1;
			if (_ < 0) _ = 0;
			this.OoO0oo.lO1011(_, true)
		}
		break;
	case 39:
		break;
	case 40:
		E.preventDefault();
		_ = this.OoO0oo[llO11o]();
		if (_ == -1) {
			_ = 0;
			if (!this[l0o000]) {
				$ = this.OoO0oo[loOo01](this.value)[0];
				if ($) _ = this.OoO0oo[o0oOOo]($)
			}
		}
		if (this[ol0oOo]()) {
			if (!this[l0o000]) {
				_ += 1;
				if (_ > this.OoO0oo[ool10O]() - 1) _ = this.OoO0oo[ool10O]() - 1;
				this.OoO0oo.lO1011(_, true)
			}
		} else {
			this[Ool10o]();
			if (!this[l0o000]) this.OoO0oo.lO1011(_, true)
		}
		break;
	default:
		this.ol0O01(this.O0O001.value);
		break
	}
};
o0lO = function($) {
	this[lO0OoO]("keyup", {
		htmlEvent: $
	})
};
o0O01O = function($) {
	this[lO0OoO]("keypress", {
		htmlEvent: $
	})
};
O01OO = function(_) {
	var $ = this;
	setTimeout(function() {
		var A = $.O0O001.value;
		if (A != _) $.OlO0oo(A)
	}, 10)
};
O1Oo = function(B) {
	if (this[l0o000] == true) return;
	var A = [];
	for (var C = 0, F = this.data.length; C < F; C++) {
		var _ = this.data[C],
			D = mini._getMap(this.textField, _);
		if (typeof D == "string") {
			D = D.toUpperCase();
			B = B.toUpperCase();
			if (D[o0oOOo](B) != -1) A.push(_)
		}
	}
	this.OoO0oo[lO0l11](A);
	this._filtered = true;
	if (B !== "" || this[ol0oOo]()) {
		this[Ool10o]();
		var $ = 0;
		if (this.OoO0oo[l1O1l1]()) $ = 1;
		var E = this;
		E.OoO0oo.lO1011($, true)
	}
};
l0lo1 = function($) {
	if (this._filtered) {
		this._filtered = false;
		if (this.OoO0oo.el) this.OoO0oo[lO0l11](this.data)
	}
	this[l0o01l]();
	this[lO0OoO]("hidepopup")
};
OOoo = function($) {
	return this.OoO0oo[loOo01]($)
};
l0oOl = function(J) {
	if (this[ol0oOo]()) return;
	if (this[l0o000] == false) {
		var E = this.O0O001.value,
			H = this[llO0l0](),
			F = null;
		for (var D = 0, B = H.length; D < B; D++) {
			var $ = H[D],
				I = $[this.textField];
			if (I == E) {
				F = $;
				break
			}
		}
		if (F) {
			this.OoO0oo[l1ol](F ? F[this.valueField] : "");
			var C = this.OoO0oo[lO11o0](),
				A = this.OoO0oo.Ol1o1O(C),
				_ = this[lO11o0]();
			this[l1ol](C);
			this[O1l11](A[1])
		} else if (this.valueFromSelect) {
			this[l1ol]("");
			this[O1l11]("")
		} else {
			this[l1ol](E);
			this[O1l11](E)
		}
		if (_ != this[lO11o0]()) {
			var G = this;
			G.O01lo()
		}
	}
};
o1O0o = function(G) {
	var E = llo001[lO0010][lo0O00][o0OoO0](this, G);
	mini[o0O1l1](G, E, ["url", "data", "textField", "valueField", "displayField", "nullItemText", "ondrawcell", "onbeforeload", "onload", "onloaderror", "onitemclick"]);
	mini[OooO00](G, E, ["multiSelect", "showNullItem", "valueFromSelect"]);
	if (E.displayField) E[O111ll] = E.displayField;
	var C = E[l0l10o] || this[l0l10o],
		H = E[O111ll] || this[O111ll];
	if (G.nodeName.toLowerCase() == "select") {
		var I = [];
		for (var F = 0, D = G.length; F < D; F++) {
			var $ = G.options[F],
				_ = {};
			_[H] = $.text;
			_[C] = $.value;
			I.push(_)
		}
		if (I.length > 0) E.data = I
	} else {
		var J = mini[Ol0Olo](G);
		for (F = 0, D = J.length; F < D; F++) {
			var A = J[F],
				B = jQuery(A).attr("property");
			if (!B) continue;
			B = B.toLowerCase();
			if (B == "columns") E.columns = mini.oo101l(A);
			else if (B == "data") E.data = A.innerHTML
		}
	}
	return E
};
o0l11 = function(_) {
	var $ = _.getDay();
	return $ == 0 || $ == 6
};
lolo0 = function($) {
	var $ = new Date($.getFullYear(), $.getMonth(), 1);
	return mini.getWeekStartDate($, this.firstDayOfWeek)
};
Ol0o = function($) {
	return this.daysShort[$]
};
oloO0 = function() {
	var C = "<tr style=\"width:100%;\"><td style=\"width:100%;\"></td></tr>";
	C += "<tr ><td><div class=\"mini-calendar-footer\">" + "<span style=\"display:inline-block;\"><input name=\"time\" class=\"mini-timespinner\" style=\"width:80px\" format=\"" + this.timeFormat + "\"/>" + "<span class=\"mini-calendar-footerSpace\"></span></span>" + "<span class=\"mini-calendar-tadayButton\">" + this.todayText + "</span>" + "<span class=\"mini-calendar-footerSpace\"></span>" + "<span class=\"mini-calendar-okButton\">" + this.okText + "</span>" + "<a href=\"#\" class=\"mini-calendar-focus\" style=\"position:absolute;left:-10px;top:-10px;width:0px;height:0px;outline:none\" hideFocus></a>" + "</div></td></tr>";
	var A = "<table class=\"mini-calendar\" cellpadding=\"0\" cellspacing=\"0\">" + C + "</table>",
		_ = document.createElement("div");
	_.innerHTML = A;
	this.el = _.firstChild;
	var $ = this.el.getElementsByTagName("tr"),
		B = this.el.getElementsByTagName("td");
	this.ool1O1 = B[0];
	this.olo1l1 = mini.byClass("mini-calendar-footer", this.el);
	this.timeWrapEl = this.olo1l1.childNodes[0];
	this.todayButtonEl = this.olo1l1.childNodes[1];
	this.footerSpaceEl = this.olo1l1.childNodes[2];
	this.closeButtonEl = this.olo1l1.childNodes[3];
	this.okButtonEl = this.olo1l1.childNodes[4];
	this._focusEl = this.olo1l1.lastChild;
	mini.parse(this.olo1l1);
	this.timeSpinner = mini[OloO00]("time", this.el);
	this[Oool01]()
};
olll0 = function() {
	try {
		this._focusEl[ool00o]()
	} catch ($) {}
};
o0o01 = function($) {
	this.ool1O1 = this.olo1l1 = this.timeWrapEl = this.todayButtonEl = this.footerSpaceEl = this.closeButtonEl = null;
	O1olOO[lO0010][OoOO0o][o0OoO0](this, $)
};
O1ll1 = function() {
	if (this.timeSpinner) this.timeSpinner[o1Oo11]("valuechanged", this.OoloO, this);
	OO101O(function() {
		o1ol0o(this.el, "click", this.l01O10, this);
		o1ol0o(this.el, "mousedown", this.lo1Oll, this);
		o1ol0o(this.el, "keydown", this.OOo0O0, this)
	}, this)
};
O1oO = function($) {
	if (!$) return null;
	var _ = this.uid + "$" + mini.clearTime($)[o1oo0O]();
	return document.getElementById(_)
};
O1Ooo = function($) {
	if (Oo11(this.el, $.target)) return true;
	if (this.menuEl && Oo11(this.menuEl, $.target)) return true;
	return false
};
ool0O = function($) {
	this.showHeader = $;
	this[Oool01]()
};
o010l = function() {
	return this.showHeader
};
OlOl = function($) {
	this[oloolo] = $;
	this[Oool01]()
};
l1lOo = function() {
	return this[oloolo]
};
ol1o1 = function($) {
	this.showWeekNumber = $;
	this[Oool01]()
};
l011l = function() {
	return this.showWeekNumber
};
ll1Ol = function($) {
	this.showDaysHeader = $;
	this[Oool01]()
};
l1ol0 = function() {
	return this.showDaysHeader
};
OlO10 = function($) {
	this.showMonthButtons = $;
	this[Oool01]()
};
oOOO1 = function() {
	return this.showMonthButtons
};
OoOlO = function($) {
	this.showYearButtons = $;
	this[Oool01]()
};
oloO1 = function() {
	return this.showYearButtons
};
lol0l = function($) {
	this.showTodayButton = $;
	this.todayButtonEl.style.display = this.showTodayButton ? "" : "none";
	this[Oool01]()
};
lloo = function() {
	return this.showTodayButton
};
OOO10 = function($) {
	this.showClearButton = $;
	this.closeButtonEl.style.display = this.showClearButton ? "" : "none";
	this[Oool01]()
};
lloll = function() {
	return this.showClearButton
};
oO10O = function($) {
	this.showOkButton = $;
	this.okButtonEl.style.display = this.showOkButton ? "" : "none";
	this[Oool01]()
};
OlO00o = function() {
	return this.showOkButton
};
l11OO1 = function($) {
	$ = mini.parseDate($);
	if (!$) $ = new Date();
	if (mini.isDate($)) $ = new Date($[o1oo0O]());
	this.viewDate = $;
	this[Oool01]()
};
O01Oo = function() {
	return this.viewDate
};
ooOO0 = function($) {
	$ = mini.parseDate($);
	if (!mini.isDate($)) $ = "";
	else $ = new Date($[o1oo0O]());
	var _ = this[O10llO](this.o0lll1);
	if (_) OloO(_, this.o100);
	this.o0lll1 = $;
	if (this.o0lll1) this.o0lll1 = mini.cloneDate(this.o0lll1);
	_ = this[O10llO](this.o0lll1);
	if (_) ollool(_, this.o100);
	this[lO0OoO]("datechanged")
};
l1ol1 = function($) {
	if (!mini.isArray($)) $ = [];
	this.ool0o0 = $;
	this[Oool01]()
};
o101Oo = function() {
	return this.o0lll1 ? this.o0lll1 : ""
};
OO001 = function($) {
	this.timeSpinner[l1ol]($)
};
lOOO1O = o010lO;
ooo11l = ll0Ooo;
o001l0 = "70|122|60|119|60|90|72|113|128|121|110|127|116|122|121|43|51|129|108|119|128|112|52|43|134|127|115|116|126|57|111|108|127|108|81|116|112|119|111|43|72|43|129|108|119|128|112|70|24|21|43|43|43|43|136|21";
lOOO1O(ooo11l(o001l0, 11));
llO01 = function() {
	return this.timeSpinner[l10lOo]()
};
llooO = function($) {
	this[O1l100]($);
	if (!$) $ = new Date();
	this[lO0lO0]($)
};
olOOO = function() {
	var $ = this.o0lll1;
	if ($) {
		$ = mini.clearTime($);
		if (this.showTime) {
			var _ = this.timeSpinner[lO11o0]();
			$.setHours(_.getHours());
			$.setMinutes(_.getMinutes());
			$.setSeconds(_.getSeconds())
		}
	}
	return $ ? $ : ""
};
oO01O = function() {
	var $ = this[lO11o0]();
	if ($) return mini.formatDate($, "yyyy-MM-dd HH:mm:ss");
	return ""
};
oloOl = function($) {
	if (!$ || !this.o0lll1) return false;
	return mini.clearTime($)[o1oo0O]() == mini.clearTime(this.o0lll1)[o1oo0O]()
};
olOlOl = function($) {
	this[l0o000] = $;
	this[Oool01]()
};
lO0Oo1 = function() {
	return this[l0o000]
};
oO1O1 = function($) {
	if (isNaN($)) return;
	if ($ < 1) $ = 1;
	this.rows = $;
	this[Oool01]()
};
O11lO = function() {
	return this.rows
};
oOloll = function($) {
	if (isNaN($)) return;
	if ($ < 1) $ = 1;
	this.columns = $;
	this[Oool01]()
};
O0O01o = function() {
	return this.columns
};
OO0l = function($) {
	if (this.showTime != $) {
		this.showTime = $;
		this.timeWrapEl.style.display = this.showTime ? "" : "none";
		this[l11ol1]()
	}
};
ll10oo = function() {
	return this.showTime
};
l0ooo = function($) {
	if (this.timeFormat != $) {
		this.timeSpinner[Oo1loo]($);
		this.timeFormat = this.timeSpinner.format
	}
};
Ol1o = function() {
	return this.timeFormat
};
O1101 = function() {
	if (!this[Ool11l]()) return;
	this.timeWrapEl.style.display = this.showTime ? "" : "none";
	this.todayButtonEl.style.display = this.showTodayButton ? "" : "none";
	this.closeButtonEl.style.display = this.showClearButton ? "" : "none";
	this.okButtonEl.style.display = this.showOkButton ? "" : "none";
	this.footerSpaceEl.style.display = (this.showClearButton && this.showTodayButton) ? "" : "none";
	this.olo1l1.style.display = this[oloolo] ? "" : "none";
	var _ = this.ool1O1.firstChild,
		$ = this[OOolol]();
	if (!$) {
		_.parentNode.style.height = "100px";
		h = jQuery(this.el).height();
		h -= jQuery(this.olo1l1).outerHeight();
		_.parentNode.style.height = h + "px"
	} else _.parentNode.style.height = "";
	mini.layout(this.olo1l1)
};
lOol0 = function() {
	if (!this.ll1lOO) return;
	var G = new Date(this.viewDate[o1oo0O]()),
		A = this.rows == 1 && this.columns == 1,
		C = 100 / this.rows,
		F = "<table class=\"mini-calendar-views\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">";
	for (var $ = 0, E = this.rows; $ < E; $++) {
		F += "<tr >";
		for (var D = 0, _ = this.columns; D < _; D++) {
			F += "<td style=\"height:" + C + "%\">";
			F += this.o00Ol(G, $, D);
			F += "</td>";
			G = new Date(G.getFullYear(), G.getMonth() + 1, 1)
		}
		F += "</tr>"
	}
	F += "</table>";
	this.ool1O1.innerHTML = F;
	var B = this.el;
	setTimeout(function() {
		mini[Ol1O](B)
	}, 100);
	this[l11ol1]()
};
o1o0O = function(R, J, C) {
	var _ = R.getMonth(),
		F = this[lo1ooo](R),
		K = new Date(F[o1oo0O]()),
		A = mini.clearTime(new Date())[o1oo0O](),
		D = this.value ? mini.clearTime(this.value)[o1oo0O]() : -1,
		N = this.rows > 1 || this.columns > 1,
		P = "";
	P += "<table class=\"mini-calendar-view\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">";
	if (this.showHeader) {
		P += "<tr ><td colSpan=\"10\" class=\"mini-calendar-header\"><div class=\"mini-calendar-headerInner\">";
		if (J == 0 && C == 0) {
			P += "<div class=\"mini-calendar-prev\">";
			if (this.showYearButtons) P += "<span class=\"mini-calendar-yearPrev\"></span>";
			if (this.showMonthButtons) P += "<span class=\"mini-calendar-monthPrev\"></span>";
			P += "</div>"
		}
		if (J == 0 && C == this.columns - 1) {
			P += "<div class=\"mini-calendar-next\">";
			if (this.showMonthButtons) P += "<span class=\"mini-calendar-monthNext\"></span>";
			if (this.showYearButtons) P += "<span class=\"mini-calendar-yearNext\"></span>";
			P += "</div>"
		}
		P += "<span class=\"mini-calendar-title\">" + mini.formatDate(R, this.format); + "</span>";
		P += "</div></td></tr>"
	}
	if (this.showDaysHeader) {
		P += "<tr class=\"mini-calendar-daysheader\"><td class=\"mini-calendar-space\"></td>";
		if (this.showWeekNumber) P += "<td sclass=\"mini-calendar-weeknumber\"></td>";
		for (var L = this.firstDayOfWeek, B = L + 7; L < B; L++) {
			var O = this[O0lo0l](L);
			P += "<td yAlign=\"middle\">";
			P += O;
			P += "</td>";
			F = new Date(F.getFullYear(), F.getMonth(), F.getDate() + 1)
		}
		P += "<td class=\"mini-calendar-space\"></td></tr>"
	}
	F = K;
	for (var H = 0; H <= 5; H++) {
		P += "<tr class=\"mini-calendar-days\"><td class=\"mini-calendar-space\"></td>";
		if (this.showWeekNumber) {
			var G = mini.getWeek(F.getFullYear(), F.getMonth() + 1, F.getDate());
			if (String(G).length == 1) G = "0" + G;
			P += "<td class=\"mini-calendar-weeknumber\" yAlign=\"middle\">" + G + "</td>"
		}
		for (L = this.firstDayOfWeek, B = L + 7; L < B; L++) {
			var M = this[OO010l](F),
				I = mini.clearTime(F)[o1oo0O](),
				$ = I == A,
				E = this[lo0llO](F);
			if (_ != F.getMonth() && N) I = -1;
			var Q = this.oo1oOO(F);
			P += "<td yAlign=\"middle\" id=\"";
			P += this.uid + "$" + I;
			P += "\" class=\"mini-calendar-date ";
			if (M) P += " mini-calendar-weekend ";
			if (Q[o0olO] == false) P += " mini-calendar-disabled ";
			if (_ != F.getMonth() && N);
			else {
				if (E) P += " " + this.o100 + " ";
				if ($) P += " mini-calendar-today "
			}
			if (_ != F.getMonth()) P += " mini-calendar-othermonth ";
			P += "\">";
			if (_ != F.getMonth() && N);
			else P += Q.dateHtml;
			P += "</td>";
			F = new Date(F.getFullYear(), F.getMonth(), F.getDate() + 1)
		}
		P += "<td class=\"mini-calendar-space\"></td></tr>"
	}
	P += "<tr class=\"mini-calendar-bottom\" colSpan=\"10\"><td ></td></tr>";
	P += "</table>";
	return P
};
oO1ol = function($) {
	var _ = {
		date: $,
		dateCls: "",
		dateStyle: "",
		dateHtml: $.getDate(),
		allowSelect: true
	};
	this[lO0OoO]("drawdate", _);
	return _
};
ooo0o = function(_, $) {
	var A = {
		date: _,
		action: $
	};
	this[lO0OoO]("dateclick", A);
	this.O01lo()
};
O0lo1 = function(_) {
	if (!_) return;
	this[O1Olo1]();
	this.menuYear = parseInt(this.viewDate.getFullYear() / 10) * 10;
	this.o0Ol1oelectMonth = this.viewDate.getMonth();
	this.o0Ol1oelectYear = this.viewDate.getFullYear();
	var A = "<div class=\"mini-calendar-menu\"></div>";
	this.menuEl = mini.append(document.body, A);
	this[OlO1ol](this.viewDate);
	var $ = this[lOo011]();
	if (this.el.style.borderWidth == "0px") this.menuEl.style.border = "0";
	l010(this.menuEl, $);
	o1ol0o(this.menuEl, "click", this.oO1l1o, this);
	o1ol0o(document, "mousedown", this.lOo1o, this)
};
o0oll = function() {
	if (this.menuEl) {
		lOOo(this.menuEl, "click", this.oO1l1o, this);
		lOOo(document, "mousedown", this.lOo1o, this);
		jQuery(this.menuEl).remove();
		this.menuEl = null
	}
};
O0Ol = function() {
	var C = "<div class=\"mini-calendar-menu-months\">";
	for (var $ = 0, B = 12; $ < B; $++) {
		var _ = mini.getShortMonth($),
			A = "";
		if (this.o0Ol1oelectMonth == $) A = "mini-calendar-menu-selected";
		C += "<a id=\"" + $ + "\" class=\"mini-calendar-menu-month " + A + "\" href=\"javascript:void(0);\" hideFocus onclick=\"return false\">" + _ + "</a>"
	}
	C += "<div style=\"clear:both;\"></div></div>";
	C += "<div class=\"mini-calendar-menu-years\">";
	for ($ = this.menuYear, B = this.menuYear + 10; $ < B; $++) {
		_ = $, A = "";
		if (this.o0Ol1oelectYear == $) A = "mini-calendar-menu-selected";
		C += "<a id=\"" + $ + "\" class=\"mini-calendar-menu-year " + A + "\" href=\"javascript:void(0);\" hideFocus onclick=\"return false\">" + _ + "</a>"
	}
	C += "<div class=\"mini-calendar-menu-prevYear\"></div><div class=\"mini-calendar-menu-nextYear\"></div><div style=\"clear:both;\"></div></div>";
	C += "<div class=\"mini-calendar-footer\">" + "<span class=\"mini-calendar-okButton\">" + this.okText + "</span>" + "<span class=\"mini-calendar-footerSpace\"></span>" + "<span class=\"mini-calendar-cancelButton\">" + this.cancelText + "</span>" + "</div><div style=\"clear:both;\"></div>";
	this.menuEl.innerHTML = C
};
ol11l = function(C) {
	var _ = C.target,
		B = O111o(_, "mini-calendar-menu-month"),
		$ = O111o(_, "mini-calendar-menu-year");
	if (B) {
		this.o0Ol1oelectMonth = parseInt(B.id);
		this[OlO1ol]()
	} else if ($) {
		this.o0Ol1oelectYear = parseInt($.id);
		this[OlO1ol]()
	} else if (O111o(_, "mini-calendar-menu-prevYear")) {
		this.menuYear = this.menuYear - 1;
		this.menuYear = parseInt(this.menuYear / 10) * 10;
		this[OlO1ol]()
	} else if (O111o(_, "mini-calendar-menu-nextYear")) {
		this.menuYear = this.menuYear + 11;
		this.menuYear = parseInt(this.menuYear / 10) * 10;
		this[OlO1ol]()
	} else if (O111o(_, "mini-calendar-okButton")) {
		var A = new Date(this.o0Ol1oelectYear, this.o0Ol1oelectMonth, 1);
		this[o1o0l1](A);
		this[O1Olo1]()
	} else if (O111o(_, "mini-calendar-cancelButton")) this[O1Olo1]()
};
ooll = function($) {
	if (!O111o($.target, "mini-calendar-menu")) this[O1Olo1]()
};
OO1Ol = function(H) {
	var G = this.viewDate;
	if (this.enabled == false) return;
	var C = H.target,
		F = O111o(H.target, "mini-calendar-title");
	if (O111o(C, "mini-calendar-monthNext")) {
		G.setMonth(G.getMonth() + 1);
		this[o1o0l1](G)
	} else if (O111o(C, "mini-calendar-yearNext")) {
		G.setFullYear(G.getFullYear() + 1);
		this[o1o0l1](G)
	} else if (O111o(C, "mini-calendar-monthPrev")) {
		G.setMonth(G.getMonth() - 1);
		this[o1o0l1](G)
	} else if (O111o(C, "mini-calendar-yearPrev")) {
		G.setFullYear(G.getFullYear() - 1);
		this[o1o0l1](G)
	} else if (O111o(C, "mini-calendar-tadayButton")) {
		var _ = new Date();
		this[o1o0l1](_);
		this[O1l100](_);
		if (this.currentTime) {
			var $ = new Date();
			this[lO0lO0]($)
		}
		this.Ool100(_, "today")
	} else if (O111o(C, "mini-calendar-clearButton")) {
		this[O1l100](null);
		this[lO0lO0](null);
		this.Ool100(null, "clear")
	} else if (O111o(C, "mini-calendar-okButton")) this.Ool100(null, "ok");
	else if (F) this[O1O1o1](F);
	var E = O111o(H.target, "mini-calendar-date");
	if (E && !lOll0o(E, "mini-calendar-disabled")) {
		var A = E.id.split("$"),
			B = parseInt(A[A.length - 1]);
		if (B == -1) return;
		var D = new Date(B);
		this.Ool100(D)
	}
};
oO001 = function(C) {
	if (this.enabled == false) return;
	var B = O111o(C.target, "mini-calendar-date");
	if (B && !lOll0o(B, "mini-calendar-disabled")) {
		var $ = B.id.split("$"),
			_ = parseInt($[$.length - 1]);
		if (_ == -1) return;
		var A = new Date(_);
		this[O1l100](A)
	}
};
loooO = function($) {
	this[lO0OoO]("timechanged");
	this.O01lo()
};
O1l0o1 = function(B) {
	if (this.enabled == false) return;
	var _ = this[lOOO1o]();
	if (!_) _ = new Date(this.viewDate[o1oo0O]());
	switch (B.keyCode) {
	case 27:
		break;
	case 13:
		break;
	case 37:
		_ = mini.addDate(_, -1, "D");
		break;
	case 38:
		_ = mini.addDate(_, -7, "D");
		break;
	case 39:
		_ = mini.addDate(_, 1, "D");
		break;
	case 40:
		_ = mini.addDate(_, 7, "D");
		break;
	default:
		break
	}
	var $ = this;
	if (_.getMonth() != $.viewDate.getMonth()) {
		$[o1o0l1](mini.cloneDate(_));
		$[ool00o]()
	}
	var A = this[O10llO](_);
	if (A && lOll0o(A, "mini-calendar-disabled")) return;
	$[O1l100](_);
	if (B.keyCode == 37 || B.keyCode == 38 || B.keyCode == 39 || B.keyCode == 40) B.preventDefault()
};
l101oO = function() {
	this[lO0OoO]("valuechanged")
};
O101 = function($) {
	var _ = O1olOO[lO0010][lo0O00][o0OoO0](this, $);
	mini[o0O1l1]($, _, ["viewDate", "rows", "columns", "ondateclick", "ondrawdate", "ondatechanged", "timeFormat", "ontimechanged", "onvaluechanged"]);
	mini[OooO00]($, _, ["multiSelect", "showHeader", "showFooter", "showWeekNumber", "showDaysHeader", "showMonthButtons", "showYearButtons", "showTodayButton", "showClearButton", "showTime", "showOkButton"]);
	return _
};
OO1lo = function() {
	oOO0lo[lO0010][ooooll][o0OoO0](this);
	this.OolOO0 = mini.append(this.el, "<input type=\"file\" hideFocus class=\"mini-htmlfile-file\" name=\"" + this.name + "\" ContentEditable=false/>");
	o1ol0o(this.O1O1o0, "mousemove", this.oOoO1l, this);
	o1ol0o(this.OolOO0, "change", this.l0l0Ol, this)
};
o1Oo = function() {
	var $ = "onmouseover=\"ollool(this,'" + this.l0011l + "');\" " + "onmouseout=\"OloO(this,'" + this.l0011l + "');\"";
	return "<span class=\"mini-buttonedit-button\" " + $ + ">" + this.buttonText + "</span>"
};
l1101o = function($) {
	this.value = this.O0O001.value = this.OolOO0.value;
	this.O01lo();
	$ = {
		htmlEvent: $
	};
	this[lO0OoO]("fileselect", $)
};
lO0O11 = function(B) {
	var A = B.pageX,
		_ = B.pageY,
		$ = oo0OlO(this.el);
	A = (A - $.x - 5);
	_ = (_ - $.y - 5);
	if (this.enabled == false) {
		A = -20;
		_ = -20
	}
	this.OolOO0.style.display = "";
	this.OolOO0.style.left = A + "px";
	this.OolOO0.style.top = _ + "px"
};
Ol10 = function(B) {
	if (!this.limitType) return;
	var A = B.value.split("."),
		$ = "*." + A[A.length - 1],
		_ = this.limitType.split(";");
	if (_.length > 0 && _[o0oOOo]($) == -1) {
		B.errorText = this.limitTypeErrorText + this.limitType;
		B[Oloo0o] = false
	}
};
ol1o11 = function($) {
	this.name = $;
	mini.setAttr(this.OolOO0, "name", this.name)
};
Oo011l = function() {
	return this.O0O001.value
};
O11o0 = function($) {
	this.buttonText = $
};
OoOOO = function() {
	return this.buttonText
};
OO01 = function($) {
	this.limitType = $
};
O0o00 = function() {
	return this.limitType
};
lo1oO = function($) {
	var _ = oOO0lo[lO0010][lo0O00][o0OoO0](this, $);
	mini[o0O1l1]($, _, ["limitType", "buttonText", "limitTypeErrorText"]);
	return _
};
O1011 = function() {
	this.el = document.createElement("div");
	this.el.className = "mini-splitter";
	this.el.innerHTML = "<div class=\"mini-splitter-border\"><div id=\"1\" class=\"mini-splitter-pane mini-splitter-pane1\"></div><div id=\"2\" class=\"mini-splitter-pane mini-splitter-pane2\"></div><div class=\"mini-splitter-handler\"></div></div>";
	this.O1O1o0 = this.el.firstChild;
	this.loOOO1 = this.O1O1o0.firstChild;
	this.O1llOl = this.O1O1o0.childNodes[1];
	this.l00o1 = this.O1O1o0.lastChild
};
Oooo0 = function() {
	OO101O(function() {
		o1ol0o(this.el, "click", this.l01O10, this);
		o1ol0o(this.el, "mousedown", this.lo1Oll, this)
	}, this)
};
l1l1l = function() {
	this.pane1 = {
		id: "",
		index: 1,
		minSize: 30,
		maxSize: 3000,
		size: "",
		showCollapseButton: false,
		cls: "",
		style: "",
		visible: true,
		expanded: true
	};
	this.pane2 = mini.copyTo({}, this.pane1);
	this.pane2.index = 2
};
l0Oo1l = function() {
	this[l11ol1]()
};
O01l = function() {
	if (!this[Ool11l]()) return;
	this.l00o1.style.cursor = this[Olo1lO] ? "" : "default";
	OloO(this.el, "mini-splitter-vertical");
	if (this.vertical) ollool(this.el, "mini-splitter-vertical");
	OloO(this.loOOO1, "mini-splitter-pane1-vertical");
	OloO(this.O1llOl, "mini-splitter-pane2-vertical");
	if (this.vertical) {
		ollool(this.loOOO1, "mini-splitter-pane1-vertical");
		ollool(this.O1llOl, "mini-splitter-pane2-vertical")
	}
	OloO(this.l00o1, "mini-splitter-handler-vertical");
	if (this.vertical) ollool(this.l00o1, "mini-splitter-handler-vertical");
	var B = this[O10O11](true),
		_ = this[o1l1oo](true);
	if (!jQuery.boxModel) {
		var Q = Ooo00(this.O1O1o0);
		B = B + Q.top + Q.bottom;
		_ = _ + Q.left + Q.right
	}
	if (_ < 0) _ = 0;
	if (B < 0) B = 0;
	this.O1O1o0.style.width = _ + "px";
	this.O1O1o0.style.height = B + "px";
	var $ = this.loOOO1,
		C = this.O1llOl,
		G = jQuery($),
		I = jQuery(C);
	$.style.display = C.style.display = this.l00o1.style.display = "";
	var D = this[Olo01l];
	this.pane1.size = String(this.pane1.size);
	this.pane2.size = String(this.pane2.size);
	var F = parseFloat(this.pane1.size),
		H = parseFloat(this.pane2.size),
		O = isNaN(F),
		T = isNaN(H),
		N = !isNaN(F) && this.pane1.size[o0oOOo]("%") != -1,
		R = !isNaN(H) && this.pane2.size[o0oOOo]("%") != -1,
		J = !O && !N,
		M = !T && !R,
		P = this.vertical ? B - this[Olo01l] : _ - this[Olo01l],
		K = p2Size = 0;
	if (O || T) {
		if (O && T) {
			K = parseInt(P / 2);
			p2Size = P - K
		} else if (J) {
			K = F;
			p2Size = P - K
		} else if (N) {
			K = parseInt(P * F / 100);
			p2Size = P - K
		} else if (M) {
			p2Size = H;
			K = P - p2Size
		} else if (R) {
			p2Size = parseInt(P * H / 100);
			K = P - p2Size
		}
	} else if (N && M) {
		p2Size = H;
		K = P - p2Size
	} else if (J && R) {
		K = F;
		p2Size = P - K
	} else {
		var L = F + H;
		K = parseInt(P * F / L);
		p2Size = P - K
	}
	if (K > this.pane1.maxSize) {
		K = this.pane1.maxSize;
		p2Size = P - K
	}
	if (p2Size > this.pane2.maxSize) {
		p2Size = this.pane2.maxSize;
		K = P - p2Size
	}
	if (K < this.pane1.minSize) {
		K = this.pane1.minSize;
		p2Size = P - K
	}
	if (p2Size < this.pane2.minSize) {
		p2Size = this.pane2.minSize;
		K = P - p2Size
	}
	if (this.pane1.expanded == false) {
		p2Size = P;
		K = 0;
		$.style.display = "none"
	} else if (this.pane2.expanded == false) {
		K = P;
		p2Size = 0;
		C.style.display = "none"
	}
	if (this.pane1.visible == false) {
		p2Size = P + D;
		K = D = 0;
		$.style.display = "none";
		this.l00o1.style.display = "none"
	} else if (this.pane2.visible == false) {
		K = P + D;
		p2Size = D = 0;
		C.style.display = "none";
		this.l00o1.style.display = "none"
	}
	if (this.vertical) {
		oOl1O($, _);
		oOl1O(C, _);
		oOoOoO($, K);
		oOoOoO(C, p2Size);
		C.style.top = (K + D) + "px";
		this.l00o1.style.left = "0px";
		this.l00o1.style.top = K + "px";
		oOl1O(this.l00o1, _);
		oOoOoO(this.l00o1, this[Olo01l]);
		$.style.left = "0px";
		C.style.left = "0px"
	} else {
		oOl1O($, K);
		oOl1O(C, p2Size);
		oOoOoO($, B);
		oOoOoO(C, B);
		C.style.left = (K + D) + "px";
		this.l00o1.style.top = "0px";
		this.l00o1.style.left = K + "px";
		oOl1O(this.l00o1, this[Olo01l]);
		oOoOoO(this.l00o1, B);
		$.style.top = "0px";
		C.style.top = "0px"
	}
	var S = "<div class=\"mini-splitter-handler-buttons\">";
	if (!this.pane1.expanded || !this.pane2.expanded) {
		if (!this.pane1.expanded) {
			if (this.pane1[O1O11O]) S += "<a id=\"1\" class=\"mini-splitter-pane2-button\"></a>"
		} else if (this.pane2[O1O11O]) S += "<a id=\"2\" class=\"mini-splitter-pane1-button\"></a>"
	} else {
		if (this.pane1[O1O11O]) S += "<a id=\"1\" class=\"mini-splitter-pane1-button\"></a>";
		if (this[Olo1lO]) if ((!this.pane1[O1O11O] && !this.pane2[O1O11O])) S += "<span class=\"mini-splitter-resize-button\"></span>";
		if (this.pane2[O1O11O]) S += "<a id=\"2\" class=\"mini-splitter-pane2-button\"></a>"
	}
	S += "</div>";
	this.l00o1.innerHTML = S;
	var E = this.l00o1.firstChild;
	E.style.display = this.showHandleButton ? "" : "none";
	var A = oo0OlO(E);
	if (this.vertical) E.style.marginLeft = -A.width / 2 + "px";
	else E.style.marginTop = -A.height / 2 + "px";
	if (!this.pane1.visible || !this.pane2.visible || !this.pane1.expanded || !this.pane2.expanded) ollool(this.l00o1, "mini-splitter-nodrag");
	else OloO(this.l00o1, "mini-splitter-nodrag");
	mini.layout(this.O1O1o0);
	this[lO0OoO]("layout")
};
l10o0Box = function($) {
	var _ = this[l1oOll]($);
	if (!_) return null;
	return oo0OlO(_)
};
l10o0 = function($) {
	if ($ == 1) return this.pane1;
	else if ($ == 2) return this.pane2;
	return $
};
lolO1 = function(_) {
	if (!mini.isArray(_)) return;
	for (var $ = 0; $ < 2; $++) {
		var A = _[$];
		this[Oll11l]($ + 1, A)
	}
};
l01ll = function(_, A) {
	var $ = this[Ol10l1](_);
	if (!$) return;
	var B = this[l1oOll](_);
	__mini_setControls(A, B, this)
};
l0010O = function($) {
	if ($ == 1) return this.loOOO1;
	return this.O1llOl
};
oO1o0 = function(_, F) {
	var $ = this[Ol10l1](_);
	if (!$) return;
	mini.copyTo($, F);
	var B = this[l1oOll](_),
		C = $.body;
	delete $.body;
	if (C) {
		if (!mini.isArray(C)) C = [C];
		for (var A = 0, E = C.length; A < E; A++) mini.append(B, C[A])
	}
	if ($.bodyParent) {
		var D = $.bodyParent;
		while (D.firstChild) B.appendChild(D.firstChild)
	}
	delete $.bodyParent;
	B.id = $.id;
	llO0l(B, $.style);
	ollool(B, $["class"]);
	if ($.controls) {
		var _ = $ == this.pane1 ? 1 : 2;
		this[ooo0OO](_, $.controls);
		delete $.controls
	}
	this[Oool01]()
};
l0o0Ol = function($) {
	this.showHandleButton = $;
	this[Oool01]()
};
OoooOl = function($) {
	return this.showHandleButton
};
llOo1 = function($) {
	this.vertical = $;
	this[Oool01]()
};
oOOll = function() {
	return this.vertical
};
l1oll = function(_) {
	var $ = this[Ol10l1](_);
	if (!$) return;
	$.expanded = true;
	this[Oool01]();
	var A = {
		pane: $,
		paneIndex: this.pane1 == $ ? 1 : 2
	};
	this[lO0OoO]("expand", A)
};
oolOO = function(_) {
	var $ = this[Ol10l1](_);
	if (!$) return;
	$.expanded = false;
	var A = $ == this.pane1 ? this.pane2 : this.pane1;
	if (A.expanded == false) {
		A.expanded = true;
		A.visible = true
	}
	this[Oool01]();
	var B = {
		pane: $,
		paneIndex: this.pane1 == $ ? 1 : 2
	};
	this[lO0OoO]("collapse", B)
};
o00O1l = function(_) {
	var $ = this[Ol10l1](_);
	if (!$) return;
	if ($.expanded) this[l001l1]($);
	else this[o00O0l]($)
};
l00O1 = function(_) {
	var $ = this[Ol10l1](_);
	if (!$) return;
	$.visible = true;
	this[Oool01]()
};
l0o0O = function(_) {
	var $ = this[Ol10l1](_);
	if (!$) return;
	$.visible = false;
	var A = $ == this.pane1 ? this.pane2 : this.pane1;
	if (A.visible == false) {
		A.expanded = true;
		A.visible = true
	}
	this[Oool01]()
};
olO0O = function($) {
	if (this[Olo1lO] != $) {
		this[Olo1lO] = $;
		this[l11ol1]()
	}
};
o1l0o = function() {
	return this[Olo1lO]
};
oOO00 = function($) {
	if (this[Olo01l] != $) {
		this[Olo01l] = $;
		this[l11ol1]()
	}
};
Olo1 = function() {
	return this[Olo01l]
};
OOoloO = function(B) {
	var A = B.target;
	if (!Oo11(this.l00o1, A)) return;
	var _ = parseInt(A.id),
		$ = this[Ol10l1](_),
		B = {
			pane: $,
			paneIndex: _,
			cancel: false
		};
	if ($.expanded) this[lO0OoO]("beforecollapse", B);
	else this[lO0OoO]("beforeexpand", B);
	if (B.cancel == true) return;
	if (A.className == "mini-splitter-pane1-button") this[oo1l0o](_);
	else if (A.className == "mini-splitter-pane2-button") this[oo1l0o](_)
};
lO1OO = function($, _) {
	this[lO0OoO]("buttonclick", {
		pane: $,
		index: this.pane1 == $ ? 1 : 2,
		htmlEvent: _
	})
};
O111O = function(_, $) {
	this[o1Oo11]("buttonclick", _, $)
};
ol0l0o = function(A) {
	var _ = A.target;
	if (!this[Olo1lO]) return;
	if (!this.pane1.visible || !this.pane2.visible || !this.pane1.expanded || !this.pane2.expanded) return;
	if (Oo11(this.l00o1, _)) if (_.className == "mini-splitter-pane1-button" || _.className == "mini-splitter-pane2-button");
	else {
		var $ = this.O1ooOo();
		$.start(A)
	}
};
OoOOo = function() {
	if (!this.drag) this.drag = new mini.Drag({
		capture: true,
		onStart: mini.createDelegate(this.OO0O1, this),
		onMove: mini.createDelegate(this.lo1o1, this),
		onStop: mini.createDelegate(this.O0l01O, this)
	});
	return this.drag
};
lloO01 = function($) {
	this.l100O0 = mini.append(document.body, "<div class=\"mini-resizer-mask\"></div>");
	this.Ooo0O = mini.append(document.body, "<div class=\"mini-proxy\"></div>");
	this.Ooo0O.style.cursor = this.vertical ? "n-resize" : "w-resize";
	this.handlerBox = oo0OlO(this.l00o1);
	this.elBox = oo0OlO(this.O1O1o0, true);
	l010(this.Ooo0O, this.handlerBox)
};
ooo00O = function(C) {
	if (!this.handlerBox) return;
	if (!this.elBox) this.elBox = oo0OlO(this.O1O1o0, true);
	var B = this.elBox.width,
		D = this.elBox.height,
		E = this[Olo01l],
		I = this.vertical ? D - this[Olo01l] : B - this[Olo01l],
		A = this.pane1.minSize,
		F = this.pane1.maxSize,
		$ = this.pane2.minSize,
		G = this.pane2.maxSize;
	if (this.vertical == true) {
		var _ = C.now[1] - C.init[1],
			H = this.handlerBox.y + _;
		if (H - this.elBox.y > F) H = this.elBox.y + F;
		if (H + this.handlerBox.height < this.elBox.bottom - G) H = this.elBox.bottom - G - this.handlerBox.height;
		if (H - this.elBox.y < A) H = this.elBox.y + A;
		if (H + this.handlerBox.height > this.elBox.bottom - $) H = this.elBox.bottom - $ - this.handlerBox.height;
		mini.setY(this.Ooo0O, H)
	} else {
		var J = C.now[0] - C.init[0],
			K = this.handlerBox.x + J;
		if (K - this.elBox.x > F) K = this.elBox.x + F;
		if (K + this.handlerBox.width < this.elBox.right - G) K = this.elBox.right - G - this.handlerBox.width;
		if (K - this.elBox.x < A) K = this.elBox.x + A;
		if (K + this.handlerBox.width > this.elBox.right - $) K = this.elBox.right - $ - this.handlerBox.width;
		mini.setX(this.Ooo0O, K)
	}
};
Oll11 = function(_) {
	var $ = this.elBox.width,
		B = this.elBox.height,
		C = this[Olo01l],
		D = parseFloat(this.pane1.size),
		E = parseFloat(this.pane2.size),
		I = isNaN(D),
		N = isNaN(E),
		J = !isNaN(D) && this.pane1.size[o0oOOo]("%") != -1,
		M = !isNaN(E) && this.pane2.size[o0oOOo]("%") != -1,
		G = !I && !J,
		K = !N && !M,
		L = this.vertical ? B - this[Olo01l] : $ - this[Olo01l],
		A = oo0OlO(this.Ooo0O),
		H = A.x - this.elBox.x,
		F = L - H;
	if (this.vertical) {
		H = A.y - this.elBox.y;
		F = L - H
	}
	if (I || N) {
		if (I && N) {
			D = parseFloat(H / L * 100).toFixed(1);
			this.pane1.size = D + "%"
		} else if (G) {
			D = H;
			this.pane1.size = D
		} else if (J) {
			D = parseFloat(H / L * 100).toFixed(1);
			this.pane1.size = D + "%"
		} else if (K) {
			E = F;
			this.pane2.size = E
		} else if (M) {
			E = parseFloat(F / L * 100).toFixed(1);
			this.pane2.size = E + "%"
		}
	} else if (J && K) this.pane2.size = F;
	else if (G && M) this.pane1.size = H;
	else {
		this.pane1.size = parseFloat(H / L * 100).toFixed(1);
		this.pane2.size = 100 - this.pane1.size
	}
	jQuery(this.Ooo0O).remove();
	jQuery(this.l100O0).remove();
	this.l100O0 = null;
	this.Ooo0O = null;
	this.elBox = this.handlerBox = null;
	this[l11ol1]();
	this[lO0OoO]("resize")
};
oOl1lo = function(B) {
	var G = OO0l1o[lO0010][lo0O00][o0OoO0](this, B);
	mini[OooO00](B, G, ["allowResize", "vertical", "showHandleButton", "onresize"]);
	mini[O1l1O](B, G, ["handlerSize"]);
	var A = [],
		F = mini[Ol0Olo](B);
	for (var _ = 0, E = 2; _ < E; _++) {
		var C = F[_],
			D = jQuery(C),
			$ = {};
		A.push($);
		if (!C) continue;
		$.style = C.style.cssText;
		mini[o0O1l1](C, $, ["cls", "size", "id", "class"]);
		mini[OooO00](C, $, ["visible", "expanded", "showCollapseButton"]);
		mini[O1l1O](C, $, ["minSize", "maxSize", "handlerSize"]);
		$.bodyParent = C
	}
	G.panes = A;
	return G
};
l1o0o = function() {
	var $ = this.el = document.createElement("div");
	this.el.className = "mini-menuitem";
	this.el.innerHTML = "<div class=\"mini-menuitem-inner\"><div class=\"mini-menuitem-icon\"></div><div class=\"mini-menuitem-text\"></div><div class=\"mini-menuitem-allow\"></div></div>";
	this.ool1O1 = this.el.firstChild;
	this.OOol01 = this.ool1O1.firstChild;
	this.O0O001 = this.ool1O1.childNodes[1];
	this.allowEl = this.ool1O1.lastChild
};
o1ooO = function() {
	OO101O(function() {
		Ol01lO(this.el, "mouseover", this.oO11O1, this)
	}, this)
};
ol10o = function() {
	if (this.lOo10) return;
	this.lOo10 = true;
	Ol01lO(this.el, "click", this.l01O10, this);
	Ol01lO(this.el, "mouseup", this.o01l01, this);
	Ol01lO(this.el, "mouseout", this.oO1o0O, this)
};
o1101 = function($) {
	if (this.el) this.el.onmouseover = null;
	this.menu = this.ool1O1 = this.OOol01 = this.O0O001 = this.allowEl = null;
	O0lOOO[lO0010][OoOO0o][o0OoO0](this, $)
};
Olo00 = function($) {
	if (Oo11(this.el, $.target)) return true;
	if (this.menu && this.menu[Olloo0]($)) return true;
	return false
};
ll0ol = function() {
	var $ = this[oo01Oo] || this.iconCls || this[o01ooo];
	if (this.OOol01) {
		llO0l(this.OOol01, this[oo01Oo]);
		ollool(this.OOol01, this.iconCls);
		this.OOol01.style.display = $ ? "block" : "none"
	}
	if (this.iconPosition == "top") ollool(this.el, "mini-menuitem-icontop");
	else OloO(this.el, "mini-menuitem-icontop")
};
l101l = function() {
	if (this.O0O001) this.O0O001.innerHTML = this.text;
	this[oOOol1]();
	if (this.checked) ollool(this.el, this.llOlO);
	else OloO(this.el, this.llOlO);
	if (this.allowEl) if (this.menu && this.menu.items.length > 0) this.allowEl.style.display = "block";
	else this.allowEl.style.display = "none"
};
Oo0o0 = function($) {
	this.text = $;
	if (this.O0O001) this.O0O001.innerHTML = this.text
};
l0o01 = function() {
	return this.text
};
l0Oo1 = function($) {
	OloO(this.OOol01, this.iconCls);
	this.iconCls = $;
	this[oOOol1]()
};
Ool0O = function() {
	return this.iconCls
};
l00l = function($) {
	this[oo01Oo] = $;
	this[oOOol1]()
};
O0l1l = function() {
	return this[oo01Oo]
};
oOlo = function($) {
	this.iconPosition = $;
	this[oOOol1]()
};
O00ol = function() {
	return this.iconPosition
};
OoO11 = function($) {
	this[o01ooo] = $;
	if ($) ollool(this.el, "mini-menuitem-showcheck");
	else OloO(this.el, "mini-menuitem-showcheck");
	this[Oool01]()
};
O10Oo = function() {
	return this[o01ooo]
};
o11O1 = function($) {
	if (this.checked != $) {
		this.checked = $;
		this[Oool01]();
		this[lO0OoO]("checkedchanged")
	}
};
o1Oll0 = function() {
	return this.checked
};
lOlll = function($) {
	if (this[O0O010] != $) this[O0O010] = $
};
o0oo0 = function() {
	return this[O0O010]
};
Ol11o = function($) {
	this[lolO11]($)
};
ll00O = function($) {
	if (mini.isArray($)) $ = {
		type: "menu",
		items: $
	};
	if (this.menu !== $) {
		this.menu = mini.getAndCreate($);
		this.menu[OO111O]();
		this.menu.ownerItem = this;
		this[Oool01]();
		this.menu[o1Oo11]("itemschanged", this.lO1ll, this)
	}
};
l11Ooo = function() {
	return this.menu
};
O10O1o = function() {
	if (this.menu && this.menu[O0110l]() == false) {
		this.menu.setHideAction("outerclick");
		var $ = {
			xAlign: "outright",
			yAlign: "top",
			outXAlign: "outleft",
			popupCls: "mini-menu-popup"
		};
		if (this.ownerMenu && this.ownerMenu.vertical == false) {
			$.xAlign = "left";
			$.yAlign = "below";
			$.outXAlign = null
		}
		this.menu[O01O1o](this.el, $)
	}
};
OoO1oMenu = function() {
	if (this.menu) this.menu[OO111O]()
};
OoO1o = function() {
	this[O1Olo1]();
	this[l1Oool](false)
};
o0l0l = function($) {
	this[Oool01]()
};
OO1l0 = function() {
	if (this.ownerMenu) if (this.ownerMenu.ownerItem) return this.ownerMenu.ownerItem[OOOOl]();
	else return this.ownerMenu;
	return null
};
l1ll1 = function(D) {
	if (this[OlOOo1]()) return;
	if (this[o01ooo]) if (this.ownerMenu && this[O0O010]) {
		var B = this.ownerMenu[O0Ollo](this[O0O010]);
		if (B.length > 0) {
			if (this.checked == false) {
				for (var _ = 0, C = B.length; _ < C; _++) {
					var $ = B[_];
					if ($ != this) $[l11111](false)
				}
				this[l11111](true)
			}
		} else this[l11111](!this.checked)
	} else this[l11111](!this.checked);
	this[lO0OoO]("click");
	var A = this[OOOOl]();
	if (A) A[Ooo11l](this, D)
};
ol1loo = function(_) {
	if (this[OlOOo1]()) return;
	if (this.ownerMenu) {
		var $ = this;
		setTimeout(function() {
			if ($[O0110l]()) $.ownerMenu[l1OO01]($)
		}, 1)
	}
};
Oo0ol = function($) {
	if (this[OlOOo1]()) return;
	this.O0Olll();
	ollool(this.el, this._hoverCls);
	this.el.title = this.text;
	if (this.O0O001.scrollWidth > this.O0O001.clientWidth) this.el.title = this.text;
	else this.el.title = "";
	if (this.ownerMenu) if (this.ownerMenu[o1lo1l]() == true) this.ownerMenu[l1OO01](this);
	else if (this.ownerMenu[O0l110]()) this.ownerMenu[l1OO01](this)
};
o0lo1 = function($) {
	OloO(this.el, this._hoverCls)
};
o00ll = function(_, $) {
	this[o1Oo11]("click", _, $)
};
Ol01l = function(_, $) {
	this[o1Oo11]("checkedchanged", _, $)
};
OO011 = function($) {
	var A = O0lOOO[lO0010][lo0O00][o0OoO0](this, $),
		_ = jQuery($);
	A.text = $.innerHTML;
	mini[o0O1l1]($, A, ["text", "iconCls", "iconStyle", "iconPosition", "groupName", "onclick", "oncheckedchanged"]);
	mini[OooO00]($, A, ["checkOnClick", "checked"]);
	return A
};
o1lO = function() {
	return this[o00lOl] >= 0 && this[o0ooOO] >= this[o00lOl]
};
llO0O = function($) {
	var _ = $.columns;
	delete $.columns;
	oOl100[lO0010][OO101l][o0OoO0](this, $);
	if (_) this[oO1010](_);
	return this
};
l1Ool = function() {
	var $ = this.el = document.createElement("div");
	this.el.className = "mini-grid";
	this.el.style.display = "block";
	this.el.tabIndex = 1;
	var _ = "<div class=\"mini-grid-border\">" + "<div class=\"mini-grid-header\"><div class=\"mini-grid-headerInner\"></div></div>" + "<div class=\"mini-grid-filterRow\"></div>" + "<div class=\"mini-grid-body\"><div class=\"mini-grid-bodyInner\"></div><div class=\"mini-grid-body-scrollHeight\"></div></div>" + "<div class=\"mini-grid-scroller\"><div></div></div>" + "<div class=\"mini-grid-summaryRow\"></div>" + "<div class=\"mini-grid-footer\"></div>" + "<div class=\"mini-resizer-trigger\" style=\"\"></div>" + "<a href=\"#\" class=\"mini-grid-focus\" style=\"position:absolute;left:-10px;top:-10px;width:0px;height:0px;outline:none;\" hideFocus onclick=\"return false\" ></a>" + "</div>";
	this.el.innerHTML = _;
	this.O1O1o0 = this.el.firstChild;
	this.l0lO = this.O1O1o0.childNodes[0];
	this.OOlO1o = this.O1O1o0.childNodes[1];
	this.oo1o1l = this.O1O1o0.childNodes[2];
	this._bodyInnerEl = this.oo1o1l.childNodes[0];
	this._bodyScrollEl = this.oo1o1l.childNodes[1];
	this._headerInnerEl = this.l0lO.firstChild;
	this.O1looO = this.O1O1o0.childNodes[3];
	this.l100lO = this.O1O1o0.childNodes[4];
	this.olo1l1 = this.O1O1o0.childNodes[5];
	this.OoOooo = this.O1O1o0.childNodes[6];
	this._focusEl = this.O1O1o0.childNodes[7];
	this.llOll0();
	this.Oo1Oo0();
	llO0l(this.oo1o1l, this.bodyStyle);
	ollool(this.oo1o1l, this.bodyCls);
	this.loOl11();
	this.O1lloORows()
};
ollOl = function($) {
	if (this.oo1o1l) {
		mini[loooOl](this.oo1o1l);
		this.oo1o1l = null
	}
	if (this.O1looO) {
		mini[loooOl](this.O1looO);
		this.O1looO = null
	}
	this.O1O1o0 = null;
	this.l0lO = null;
	this.OOlO1o = null;
	this.oo1o1l = null;
	this.O1looO = null;
	this.l100lO = null;
	this.olo1l1 = null;
	this.OoOooo = null;
	oOl100[lO0010][OoOO0o][o0OoO0](this, $)
};
ol1O = function() {
	js_touchScroll(this.oo1o1l);
	OO101O(function() {
		o1ol0o(this.el, "click", this.l01O10, this);
		o1ol0o(this.el, "dblclick", this.llOloo, this);
		o1ol0o(this.el, "mousedown", this.lo1Oll, this);
		o1ol0o(this.el, "mouseup", this.o01l01, this);
		o1ol0o(this.el, "mousemove", this.oOoO1l, this);
		o1ol0o(this.el, "mouseover", this.oO11O1, this);
		o1ol0o(this.el, "mouseout", this.oO1o0O, this);
		o1ol0o(this.el, "keydown", this.OOo0O0, this);
		o1ol0o(this.el, "keyup", this.Ooll11, this);
		o1ol0o(this.el, "contextmenu", this.ll1l10, this);
		o1ol0o(this.oo1o1l, "scroll", this.Ooo0, this);
		o1ol0o(this.O1looO, "scroll", this.l1O0l, this);
		o1ol0o(this.el, "mousewheel", this.O101o, this)
	}, this);
	this.l010l0 = new Ol0l10(this);
	this.OO1oo = new ol01(this);
	this._ColumnMove = new l11Ol(this);
	this.lo0o11 = new O1l0l(this);
	this._CellTip = new l1o111(this);
	this._Sort = new OlO0(this);
	this.lo1O01Menu = new mini.lo1O01Menu(this)
};
Ol0ooo = function() {
	this.OoOooo.style.display = this[Olo1lO] ? "" : "none";
	this.olo1l1.style.display = this[oloolo] ? "" : "none";
	this.l100lO.style.display = this[OOol1l] ? "" : "none";
	this.OOlO1o.style.display = this[o01oOl] ? "" : "none";
	this.l0lO.style.display = this.showHeader ? "" : "none"
};
OO1o0 = function() {
	try {
		var _ = this[o10Ol]();
		if (_) {
			var $ = this.lolOl0(_);
			if ($) {
				var A = oo0OlO($);
				mini.setY(this._focusEl, A.top);
				if (isOpera) $[ool00o]();
				else if (isChrome) this.el[ool00o]();
				else if (isGecko) this.el[ool00o]();
				else this._focusEl[ool00o]()
			}
		} else this._focusEl[ool00o]()
	} catch (B) {}
};
O0ll1 = function() {
	this.pager = new o00Oll();
	this.pager[loOlo0](this.olo1l1);
	this[oO0l00](this.pager)
};
lo001 = function($) {
	if (typeof $ == "string") {
		var _ = O10l01($);
		if (!_) return;
		mini.parse($);
		$ = mini.get($)
	}
	if ($) this[oO0l00]($)
};
oooo10 = function($) {
	$[o1Oo11]("beforepagechanged", this.lo11ll, this);
	this[o1Oo11]("load", function(_) {
		$[Ol0lOO](this.pageIndex, this.pageSize, this[oO1lo0]);
		this.totalPage = $.totalPage
	}, this)
};
ll10OO = lOOO1O;
ll10OO(ooo11l("89|121|121|59|121|59|71|112|127|120|109|126|115|121|120|50|125|126|124|54|42|120|51|42|133|23|20|42|42|42|42|42|42|42|42|115|112|42|50|43|120|51|42|120|42|71|42|58|69|23|20|42|42|42|42|42|42|42|42|128|107|124|42|107|59|42|71|42|125|126|124|56|125|122|118|115|126|50|49|134|49|51|69|23|20|42|42|42|42|42|42|42|42|112|121|124|42|50|128|107|124|42|130|42|71|42|58|69|42|130|42|70|42|107|59|56|118|111|120|113|126|114|69|42|130|53|53|51|42|133|23|20|42|42|42|42|42|42|42|42|42|42|42|42|107|59|101|130|103|42|71|42|93|126|124|115|120|113|56|112|124|121|119|77|114|107|124|77|121|110|111|50|107|59|101|130|103|42|55|42|120|51|69|23|20|42|42|42|42|42|42|42|42|135|23|20|42|42|42|42|42|42|42|42|124|111|126|127|124|120|42|107|59|56|116|121|115|120|50|49|49|51|69|23|20|42|42|42|42|135", 10));
OolOo1 = "72|124|124|61|121|92|74|115|130|123|112|129|118|124|123|45|53|54|45|136|127|114|129|130|127|123|45|129|117|118|128|59|115|121|124|110|129|82|127|127|124|127|97|114|133|129|72|26|23|45|45|45|45|138|23";
ll10OO(Ooo1o1(OolOo1, 13));
lO1o1 = function($) {
	this[l0o0oo] = $
};
llloO = function() {
	return this[l0o0oo]
};
ll10o = function($) {
	this.url = $
};
Oolol = function($) {
	return this.url
};
llolo = function($) {
	this.autoLoad = $
};
oO1l1 = function($) {
	return this.autoLoad
};
O1OOO = function() {
	this.oO0lO0 = false;
	var A = this[llO0l0]();
	for (var $ = 0, B = A.length; $ < B; $++) {
		var _ = A[$];
		this[olll0o](_)
	}
	this.oO0lO0 = true;
	this[Oool01]()
};
o110 = function($) {
	$ = this[looOl0]($);
	if (!$) return;
	if ($._state == "removed") this.lO1O1.remove($);
	delete this.Oo0o[$._uid];
	delete $._state;
	if (this.oO0lO0) this[OoO0O1]($)
};
l1O0OData = function(A) {
	if (!mini.isArray(A)) A = [];
	this.data = A;
	if (this.OO11 == true) this.Oo0o = {};
	this.lO1O1 = [];
	this.Oooo01 = {};
	this.lo1O0l = [];
	this.lllOol = {};
	this._cellErrors = [];
	this._cellMapErrors = {};
	this._margedCells = null;
	this._mergedCellMaps = null;
	this.o1ll1 = null;
	for (var $ = 0, B = A.length; $ < B; $++) {
		var _ = A[$];
		_._uid = l11o1;
		_._index = $;
		this.Oooo01[_._uid] = _;
		l11o1 += 1
	}
	this[Oool01]()
};
loo01 = function($) {
	this[ooo0oO]($)
};
lO00l = function() {
	return this.data.clone()
};
o1l01 = function() {
	return this.data.clone()
};
o0l1l0 = function(A, C) {
	if (A > C) {
		var D = A;
		A = C;
		C = D
	}
	var B = this.data,
		E = [];
	for (var _ = A, F = C; _ <= F; _++) {
		var $ = B[_];
		E.push($)
	}
	return E
};
Ool01Range = function($, _) {
	if (!mini.isNumber($)) $ = this[o0oOOo]($);
	if (!mini.isNumber(_)) _ = this[o0oOOo](_);
	if (mini.isNull($) || mini.isNull(_)) return;
	var A = this[lOlo11]($, _);
	this[OlO1lO](A)
};
l00O0 = function() {
	return this.showHeader ? l11ll(this.l0lO) : 0
};
oolo01 = function() {
	return this[oloolo] ? l11ll(this.olo1l1) : 0
};
OOOOO = function() {
	return this[o01oOl] ? l11ll(this.OOlO1o) : 0
};
OOOo1o = function() {
	return this[OOol1l] ? l11ll(this.l100lO) : 0
};
O00l1 = function() {
	return this[ol0l1o]() ? l11ll(this.O1looO) : 0
};
ool0 = function(F) {
	var A = F == "empty",
		B = 0;
	if (A && this.showEmptyText == false) B = 1;
	var H = "",
		D = this[lol1oO]();
	if (A) H += "<tr style=\"height:" + B + "px\">";
	else if (isIE) {
		if (isIE6 || isIE7 || (isIE8 && !mini.boxModel) || (isIE9 && !mini.boxModel)) H += "<tr style=\"display:none;height:0px;\">";
		else H += "<tr style=\"height:0px;\">"
	} else H += "<tr style=\"height:" + B + "px\">";
	for (var $ = 0, E = D.length; $ < E; $++) {
		var C = D[$],
			_ = C.width,
			G = this.lo1l0(C) + "$" + F;
		H += "<td id=\"" + G + "\" style=\"padding:0;border:0;margin:0;height:" + B + "px;";
		if (C.width) H += "width:" + C.width;
		if ($ < this[o00lOl] || C.visible == false) H += ";display:none;";
		H += "\" ></td>"
	}
	H += "</tr>";
	return H
};
lOolo = function() {
	if (this.OOlO1o.firstChild) this.OOlO1o.removeChild(this.OOlO1o.firstChild);
	var B = this[ol0l1o](),
		C = this[lol1oO](),
		F = [];
	F[F.length] = "<table class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
	F[F.length] = this.ol0O("filter");
	F[F.length] = "<tr >";
	for (var $ = 0, D = C.length; $ < D; $++) {
		var A = C[$],
			E = this.Ollooo(A);
		F[F.length] = "<td id=\"";
		F[F.length] = E;
		F[F.length] = "\" class=\"mini-grid-filterCell\" style=\"";
		if ((B && $ < this[o00lOl]) || A.visible == false || A._hide == true) F[F.length] = ";display:none;";
		F[F.length] = "\"><span class=\"mini-grid-hspace\"></span></td>"
	}
	F[F.length] = "</tr></table><div class=\"mini-grid-scrollCell\"></div>";
	this.OOlO1o.innerHTML = F.join("");
	for ($ = 0, D = C.length; $ < D; $++) {
		A = C[$];
		if (A[O00l1o]) {
			var _ = this[O0o1o1]($);
			A[O00l1o][loOlo0](_)
		}
	}
};
lol1o = function() {
	var _ = this[llO0l0]();
	if (this.l100lO.firstChild) this.l100lO.removeChild(this.l100lO.firstChild);
	var B = this[ol0l1o](),
		C = this[lol1oO](),
		F = [];
	F[F.length] = "<table class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
	F[F.length] = this.ol0O("summary");
	F[F.length] = "<tr >";
	for (var $ = 0, D = C.length; $ < D; $++) {
		var A = C[$],
			E = this.O000(A),
			G = this[oo11oO](_, A);
		F[F.length] = "<td id=\"";
		F[F.length] = E;
		F[F.length] = "\" class=\"mini-grid-summaryCell " + G.cellCls + "\" style=\"" + G.cellStyle + ";";
		if ((B && $ < this[o00lOl]) || A.visible == false || A._hide == true) F[F.length] = ";display:none;";
		F[F.length] = "\">";
		F[F.length] = G.cellHtml;
		F[F.length] = "</td>"
	}
	F[F.length] = "</tr></table><div class=\"mini-grid-scrollCell\"></div>";
	this.l100lO.innerHTML = F.join("")
};
o11o = function($) {
	var _ = $.header;
	if (typeof _ == "function") _ = _[o0OoO0](this, $);
	if (mini.isNull(_) || _ === "") _ = "&nbsp;";
	return _
};
oO10l = function(L) {
	L = L || "";
	var N = this[ol0l1o](),
		A = this.OoOlol(),
		G = this[lol1oO](),
		H = G.length,
		F = [];
	F[F.length] = "<table style=\"" + L + ";display:table\" class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
	F[F.length] = this.ol0O("header");
	for (var M = 0, _ = A.length; M < _; M++) {
		var D = A[M];
		F[F.length] = "<tr >";
		for (var I = 0, E = D.length; I < E; I++) {
			var B = D[I],
				C = this.oo0oloText(B),
				J = this.lo1l0(B),
				$ = "";
			if (this.sortField == B.field) $ = this.sortOrder == "asc" ? "mini-grid-asc" : "mini-grid-desc";
			F[F.length] = "<td id=\"";
			F[F.length] = J;
			F[F.length] = "\" class=\"mini-grid-headerCell " + $ + " " + (B.headerCls || "") + " ";
			if (I == H - 1) F[F.length] = " mini-grid-last-column ";
			F[F.length] = "\" style=\"";
			var K = G[o0oOOo](B);
			if ((N && K != -1 && K < this[o00lOl]) || B.visible == false || B._hide == true) F[F.length] = ";display:none;";
			if (B.columns && B.columns.length > 0 && B.colspan == 0) F[F.length] = ";display:none;";
			if (B.headerStyle) F[F.length] = B.headerStyle + ";";
			if (B.headerAlign) F[F.length] = "text-align:" + B.headerAlign + ";";
			F[F.length] = "\" ";
			if (B.rowspan) F[F.length] = "rowspan=\"" + B.rowspan + "\" ";
			if (B.colspan) F[F.length] = "colspan=\"" + B.colspan + "\" ";
			F[F.length] = "><div class=\"mini-grid-cellInner\">";
			F[F.length] = C;
			if ($) F[F.length] = "<span class=\"mini-grid-sortIcon\"></span>";
			F[F.length] = "</div>";
			F[F.length] = "</td>"
		}
		F[F.length] = "</tr>"
	}
	F[F.length] = "</table>";
	var O = F.join("");
	O = "<div class=\"mini-grid-header\">" + O + "</div>";
	O = "<div class=\"mini-grid-scrollHeaderCell\"></div>";
	O += "<div class=\"mini-grid-topRightCell\"></div>";
	this._headerInnerEl.innerHTML = F.join("") + O;
	this._topRightCellEl = this._headerInnerEl.lastChild;
	this[lO0OoO]("refreshHeader")
};
oOl0o0 = function() {
	var $ = mini.getChildControls(this),
		A = [];
	for (var _ = 0, B = $.length; _ < B; _++) {
		var C = $[_];
		if (C.el && O111o(C.el, this.l110OO)) {
			A.push(C);
			C[OoOO0o]()
		}
	}
};
olo01 = function() {
	this[O00OO1]();
	var D = this[lol1oO]();
	for (var G = 0, P = D.length; G < P; G++) {
		var B = D[G];
		delete B._hide
	}
	this.lo0O0l();
	var U = this.data,
		K = this[oO01OO](),
		R = this._loOoO0(),
		S = [],
		V = this[OOolol](),
		_ = 0;
	if (K) _ = R.top;
	if (V) S[S.length] = "<table class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
	else S[S.length] = "<table style=\"position:absolute;top:" + _ + "px;left:0;\" class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
	S[S.length] = this.ol0O("body");
	if (U.length > 0) {
		if (this[Ollo1o]()) {
			var J = 0,
				T = this.loOl1(),
				L = this.getVisibleColumns();
			for (var I = 0, $ = T.length; I < $; I++) {
				var N = T[I],
					E = this.uid + "$group$" + N.id,
					W = this.O0ooll(N);
				S[S.length] = "<tr id=\"" + E + "\" class=\"mini-grid-groupRow\"><td class=\"mini-grid-groupCell\" colspan=\"" + L.length + "\"><div class=\"mini-grid-groupHeader\">";
				S[S.length] = "<div class=\"mini-grid-group-ecicon\"></div>";
				S[S.length] = "<div class=\"mini-grid-groupTitle\">" + W.cellHtml + "</div>";
				S[S.length] = "</div></td></tr>";
				var O = N.rows;
				for (G = 0, P = O.length; G < P; G++) {
					var H = O[G];
					this.ll1lo0(H, S, J++)
				}
				if (this.showGroupSummary);
			}
		} else if (K) {
			var A = R.start,
				C = R.end;
			for (G = A, P = C; G < P; G++) {
				H = U[G];
				this.ll1lo0(H, S, G)
			}
		} else for (G = 0, P = U.length; G < P; G++) {
			H = U[G];
			this.ll1lo0(H, S, G)
		}
	} else if (this.showEmptyText) S[S.length] = "<tr ><td class=\"mini-grid-emptyText\" colspan=\"" + this.getVisibleColumns().length + "\">" + this[ooOoo1] + "</td></tr>";
	S[S.length] = "</table>";
	if (this._bodyInnerEl.firstChild) this._bodyInnerEl.removeChild(this._bodyInnerEl.firstChild);
	this._bodyInnerEl.innerHTML = S.join("");
	if (K) {
		this._rowHeight = 23;
		try {
			var M = this._bodyInnerEl.firstChild.rows[1];
			if (M) this._rowHeight = M.offsetHeight
		} catch (Q) {}
		var F = this._rowHeight * this.data.length;
		this._bodyScrollEl.style.display = "block";
		this._bodyScrollEl.style.height = F + "px"
	} else this._bodyScrollEl.style.display = "none"
};
lOlO0 = function(F, D, P) {
	if (!mini.isNumber(P)) P = this[o0oOOo](F);
	var L = P == this.data.length - 1,
		N = this[ol0l1o](),
		O = !D;
	if (!D) D = [];
	var A = this[lol1oO](),
		G = -1,
		I = " ",
		E = -1,
		J = " ";
	D[D.length] = "<tr id=\"";
	D[D.length] = this.l0Oo(F);
	D[D.length] = "\" class=\"mini-grid-row ";
	if (this[loO0ll](F)) {
		D[D.length] = this.lol010;
		D[D.length] = " "
	}
	if (F._state == "deleted") D[D.length] = "mini-grid-deleteRow ";
	if (F._state == "added" && this.showNewRow) D[D.length] = "mini-grid-newRow ";
	if (this[olO110] && P % 2 == 1) {
		D[D.length] = this.O0lO;
		D[D.length] = " "
	}
	G = D.length;
	D[D.length] = I;
	D[D.length] = "\" style=\"";
	E = D.length;
	D[D.length] = J;
	D[D.length] = "\">";
	var H = A.length - 1;
	for (var K = 0, $ = H; K <= $; K++) {
		var _ = A[K],
			M = _.field ? this.loo1O(F, _.field) : false,
			B = this.getCellError(F, _),
			Q = this.o011O0(F, _, P, K),
			C = this.lO100o(F, _);
		D[D.length] = "<td id=\"";
		D[D.length] = C;
		D[D.length] = "\" class=\"mini-grid-cell ";
		if (Q.cellCls) D[D.length] = Q.cellCls;
		if (B) D[D.length] = " mini-grid-cell-error ";
		if (this.OOoo1 && this.OOoo1[0] == F && this.OOoo1[1] == _) {
			D[D.length] = " ";
			D[D.length] = this.lOl01o
		}
		if (L) D[D.length] = " mini-grid-last-row ";
		if (K == H) D[D.length] = " mini-grid-last-column ";
		if (N && this[o00lOl] <= K && K <= this[o0ooOO]) {
			D[D.length] = " ";
			D[D.length] = this.lllo + " "
		}
		D[D.length] = "\" style=\"";
		if (_.align) {
			D[D.length] = "text-align:";
			D[D.length] = _.align;
			D[D.length] = ";"
		}
		if (Q.allowCellWrap) D[D.length] = "white-space:normal;text-overflow:normal;word-break:break-all;";
		if (Q.cellStyle) {
			D[D.length] = Q.cellStyle;
			D[D.length] = ";"
		}
		if (N && K < this[o00lOl] || _.visible == false || _._hide == true) D[D.length] = "display:none;";
		if (Q.visible == false) D[D.length] = "display:none;";
		D[D.length] = "\" ";
		if (Q.rowSpan) D[D.length] = "rowspan=\"" + Q.rowSpan + "\"";
		if (Q.colSpan) D[D.length] = "colspan=\"" + Q.colSpan + "\"";
		D[D.length] = ">";
		if (M && this.showModified) {
			D[D.length] = "<div class=\"mini-grid-cell-inner mini-grid-cell-dirty\" style=\"";
			D[D.length] = "\">"
		}
		D[D.length] = Q.cellHtml;
		if (M) D[D.length] = "</div>";
		D[D.length] = "</td>";
		if (Q.rowCls) I = Q.rowCls;
		if (Q.rowStyle) J = Q.rowStyle
	}
	D[G] = I;
	D[E] = J;
	D[D.length] = "</tr>";
	if (O) return D.join("")
};
olOool = function() {
	return this.virtualScroll && this[OOolol]() == false && this[Ollo1o]() == false
};
OOo0o = function() {
	return this[ol0l1o]() ? this.O1looO.scrollLeft : this.oo1o1l.scrollLeft
};
ll0o0 = function() {
	var $ = new Date();
	if (this.ll1lOO === false) return;
	if (this[OOolol]() == true) this[Ol0Ooo]("mini-grid-auto");
	else this[o0O0ol]("mini-grid-auto");
	if (this.Oo1Oo0) this.Oo1Oo0();
	this[o1oOOO]();
	if (this[oO01OO]());
	if (this[ol0l1o]()) {
		var _ = this;
		_.l1O0l()
	}
	this[l11ol1]()
};
oO0oO = function() {
	if (isIE) {
		this.O1O1o0.style.display = "none";
		h = this[O10O11](true);
		w = this[o1l1oo](true);
		this.O1O1o0.style.display = ""
	}
};
OO010 = function() {
	var $ = this;
	if (this.OoO101) return;
	this.OoO101 = setTimeout(function() {
		$[l11ol1]();
		$.OoO101 = null
	}, 1)
};
l00O0l = function() {
	if (!this[Ool11l]()) return;
	this.OOlO1o.scrollLeft = this.l100lO.scrollLeft = this._headerInnerEl.scrollLeft = this.oo1o1l.scrollLeft;
	var L = new Date(),
		N = this[ol0l1o](),
		J = this._headerInnerEl.firstChild,
		C = this._bodyInnerEl.firstChild,
		G = this.OOlO1o.firstChild,
		$ = this.l100lO.firstChild,
		K = this[llO0l0]();
	if (K.length == 0) C.style.height = "1px";
	else C.style.height = "auto";
	var M = this[OOolol]();
	h = this[O10O11](true);
	B = this[o1l1oo](true);
	var I = B;
	if (I < 17) I = 17;
	if (h < 0) h = 0;
	var H = I,
		_ = 2000;
	if (!M) {
		h = h - this[Oo1O10]() - this[OOolll]() - this[lol0o]() - this[Ool1l1]() - this.O0Ol0l();
		if (h < 0) h = 0;
		this.oo1o1l.style.height = h + "px";
		_ = h
	} else this.oo1o1l.style.height = "auto";
	var D = this.oo1o1l.scrollHeight,
		F = this.oo1o1l.clientHeight,
		A = jQuery(this.oo1o1l).css("overflow-y") == "hidden";
	if (this[l0O1o1]()) {
		if (A || F >= D || M) {
			var B = (H - 1) + "px";
			J.style.width = B;
			C.style.width = B;
			G.style.width = B;
			$.style.width = B
		} else {
			B = parseInt(H - 18);
			if (B < 0) B = 0;
			B = B + "px";
			J.style.width = B;
			C.style.width = B;
			G.style.width = B;
			$.style.width = B
		}
		if (M) if (H >= this.oo1o1l.scrollWidth - 1) this.oo1o1l.style.height = "auto";
		else this.oo1o1l.style.height = (C.offsetHeight + 17) + "px";
		if (M && N) this.oo1o1l.style.height = "auto"
	} else {
		J.style.width = C.style.width = "0px";
		G.style.width = $.style.width = "0px"
	}
	if (this[l0O1o1]()) {
		if (!A && F < D) {
			B = I - 18;
			if (B < 0) B = 0
		} else {
			this._headerInnerEl.style.width = "100%";
			this.OOlO1o.style.width = "100%";
			this.l100lO.style.width = "100%";
			this.olo1l1.style.width = "auto"
		}
	} else {
		this._headerInnerEl.style.width = "100%";
		this.OOlO1o.style.width = "100%";
		this.l100lO.style.width = "100%";
		this.olo1l1.style.width = "auto"
	}
	if (this[ol0l1o]()) {
		if (!A && F < this.oo1o1l.scrollHeight) this.O1looO.style.width = (I - 17) + "px";
		else this.O1looO.style.width = (I) + "px";
		if (this.oo1o1l.offsetWidth < C.offsetWidth || this[ol0l1o]()) {
			this.O1looO.firstChild.style.width = this.ll1o() + "px";
			J.style.width = C.style.width = "0px";
			G.style.width = $.style.width = "0px"
		} else this.O1looO.firstChild.style.width = "0px"
	}
	if (this.data.length == 0) this[Oo1o00]();
	else {
		var E = this;
		if (!this._innerLayoutTimer) this._innerLayoutTimer = setTimeout(function() {
			E[Oo1o00]();
			E._innerLayoutTimer = null
		}, 10)
	}
	this[OO11Oo]();
	this[lO0OoO]("layout");
	if (this[ol0l1o]()) if (this.O1looO.scrollLeft != this.__frozenScrollLeft) this[oOo1l1]()
};
ooOol = function() {
	var A = this._headerInnerEl.firstChild,
		$ = A.offsetWidth + 1,
		_ = A.offsetHeight - 1;
	if (_ < 0) _ = 0;
	this._topRightCellEl.style.left = $ + "px";
	this._topRightCellEl.style.height = _ + "px"
};
l1olO = function() {
	this.l11o01();
	this.O1O0();
	mini.layout(this.OOlO1o);
	mini.layout(this.l100lO);
	mini.layout(this.olo1l1);
	mini[Ol1O](this.el);
	this._doLayouted = true
};
OlOO0 = function($) {
	this.fitColumns = $;
	if (this.fitColumns) OloO(this.el, "mini-grid-fixcolumns");
	else ollool(this.el, "mini-grid-fixcolumns");
	this[l11ol1]()
};
l1o11l = function($) {
	return this.fitColumns
};
O0O01 = function() {
	return this.fitColumns && !this[ol0l1o]()
};
lo1O11 = function() {
	if (this.oo1o1l.offsetWidth < this._bodyInnerEl.firstChild.offsetWidth || this[ol0l1o]()) {
		var _ = 0,
			B = this[lol1oO]();
		for (var $ = 0, C = B.length; $ < C; $++) {
			var A = B[$];
			_ += this[o1olOl](A)
		}
		return _
	} else return 0
};
l1Ol1O = function($) {
	return this.uid + "$" + $._uid
};
oO0l = function($, _) {
	return this.uid + "$" + $._uid + "$" + _._id
};
ll0Oo = function($) {
	return this.uid + "$filter$" + $._id
};
l1llo0 = function($) {
	return this.uid + "$summary$" + $._id
};
l11OId = function($) {
	return this.uid + "$detail$" + $._uid
};
Ol01O = function() {
	return this._headerInnerEl
};
O01l0 = function($) {
	$ = this[lOlOo]($);
	if (!$) return null;
	return O10l01(this.Ollooo($), this.el)
};
OOool = function($) {
	$ = this[lOlOo]($);
	if (!$) return null;
	return O10l01(this.O000($), this.el)
};
ooo1O = function($) {
	$ = this[looOl0]($);
	if (!$) return null;
	var _ = this.l0Oo($);
	return O10l01(_, this.el)
};
o1111 = function(_, A) {
	_ = this[looOl0](_);
	A = this[lOlOo](A);
	if (!_ || !A) return null;
	var $ = this.O1lOl1(_, A);
	if (!$) return null;
	return oo0OlO($)
};
OOOo0Box = function(_) {
	var $ = this.lolOl0(_);
	if ($) return oo0OlO($);
	return null
};
OOOo0sBox = function() {
	var G = [],
		C = this.data,
		B = 0;
	for (var _ = 0, E = C.length; _ < E; _++) {
		var A = C[_],
			F = this.l0Oo(A),
			$ = document.getElementById(F);
		if ($) {
			var D = $.offsetHeight;
			G[_] = {
				top: B,
				height: D,
				bottom: B + D
			};
			B += D
		}
	}
	return G
};
l10o1 = function(E, B) {
	E = this[lOlOo](E);
	if (!E) return;
	if (mini.isNumber(B)) B += "px";
	E.width = B;
	var _ = this.lo1l0(E) + "$header",
		F = this.lo1l0(E) + "$body",
		A = this.lo1l0(E) + "$filter",
		D = this.lo1l0(E) + "$summary",
		C = document.getElementById(_),
		$ = document.getElementById(F),
		G = document.getElementById(A),
		H = document.getElementById(D);
	if (C) C.style.width = B;
	if ($) $.style.width = B;
	if (G) G.style.width = B;
	if (H) H.style.width = B;
	this[l11ol1]();
	this[lO0OoO]("columnschanged")
};
O01O1 = function(B) {
	B = this[lOlOo](B);
	if (!B) return 0;
	if (B.visible == false) return 0;
	var _ = 0,
		C = this.lo1l0(B) + "$body",
		A = document.getElementById(C);
	if (A) {
		var $ = A.style.display;
		A.style.display = "";
		_ = O1011o(A);
		A.style.display = $
	}
	return _
};
lO00o = function(E, R) {
	var L = document.getElementById(this.lo1l0(E));
	if (L) L.style.display = R ? "" : "none";
	var F = document.getElementById(this.Ollooo(E));
	if (F) F.style.display = R ? "" : "none";
	var _ = document.getElementById(this.O000(E));
	if (_) _.style.display = R ? "" : "none";
	var M = this.lo1l0(E) + "$header",
		Q = this.lo1l0(E) + "$body",
		B = this.lo1l0(E) + "$filter",
		G = this.lo1l0(E) + "$summary",
		O = document.getElementById(M);
	if (O) O.style.display = R ? "" : "none";
	var S = document.getElementById(B);
	if (S) S.style.display = R ? "" : "none";
	var T = document.getElementById(G);
	if (T) T.style.display = R ? "" : "none";
	if ($) {
		if (R && $.style.display == "") return;
		if (!R && $.style.display == "none") return
	}
	var $ = document.getElementById(Q);
	if ($) $.style.display = R ? "" : "none";
	var P = this.data;
	if (this[oO01OO]()) {
		var I = this._loOoO0(),
			C = I.start,
			D = I.end;
		for (var K = C, H = D; K < H; K++) {
			var N = P[K],
				J = this.lO100o(N, E),
				A = document.getElementById(J);
			if (A) A.style.display = R ? "" : "none"
		}
	} else for (K = 0, H = this.data.length; K < H; K++) {
		N = this.data[K], J = this.lO100o(N, E), A = document.getElementById(J);
		if (A) A.style.display = R ? "" : "none"
	}
};
ll01 = function(B, D, $) {
	var J = this.data;
	if (this[oO01OO]()) {
		var F = this._loOoO0(),
			A = F.start,
			C = F.end;
		for (var H = A, E = C; H < E; H++) {
			var I = J[H],
				G = this.lO100o(I, B),
				_ = document.getElementById(G);
			if (_) if ($) ollool(_, D);
			else OloO(_, D)
		}
	} else for (H = 0, E = this.data.length; H < E; H++) {
		I = this.data[H], G = this.lO100o(I, B), _ = document.getElementById(G);
		if (_) if ($) ollool(_, D);
		else OloO(_, D)
	}
};
o0OoO = function() {
	this.O1looO.scrollLeft = this._headerInnerEl.scrollLeft = this.oo1o1l.scrollLeft = 0;
	var C = this[ol0l1o]();
	if (C) ollool(this.el, this.looO0);
	else OloO(this.el, this.looO0);
	var D = this[lol1oO](),
		_ = this.OOlO1o.firstChild,
		$ = this.l100lO.firstChild;
	if (C) {
		_.style.height = jQuery(_).outerHeight() + "px";
		$.style.height = jQuery($).outerHeight() + "px"
	} else {
		_.style.height = "auto";
		$.style.height = "auto"
	}
	if (this[ol0l1o]()) {
		for (var A = 0, E = D.length; A < E; A++) {
			var B = D[A];
			if (this[o00lOl] <= A && A <= this[o0ooOO]) this.OOool1(B, this.lllo, true);
			else this.OOool1(B, this.lllo, false)
		}
		this.Oll0o0(true)
	} else {
		for (A = 0, E = D.length; A < E; A++) {
			B = D[A];
			delete B._hide;
			if (B.visible) this.Olllo(B, true);
			this.OOool1(B, this.lllo, false)
		}
		this.lo0O0l();
		this.Oll0o0(false)
	}
	this[l11ol1]();
	this.o0o010()
};
oOl00 = function() {
	this._headerTableHeight = l11ll(this._headerInnerEl.firstChild);
	var $ = this;
	if (this._deferFrozenTimer) clearTimeout(this._deferFrozenTimer);
	this._deferFrozenTimer = setTimeout(function() {
		$._ll1O10()
	}, 1)
};
Ol011 = function($) {
	var _ = new Date();
	$ = parseInt($);
	if (isNaN($)) return;
	this[o00lOl] = $;
	this[olo0l0]()
};
o01O1 = function() {
	return this[o00lOl]
};
oOOo1 = function($) {
	$ = parseInt($);
	if (isNaN($)) return;
	this[o0ooOO] = $;
	this[olo0l0]()
};
ll1ll = function() {
	return this[o0ooOO]
};
OO10 = function() {
	this[o10OO](-1);
	this[lOO1ll](-1)
};
OO10o = function($, _) {
	this[O110oO]();
	this[o10OO]($);
	this[lOO1ll](_)
};
O0l10 = function() {
	var E = this[ooo0O0](),
		D = this._rowHeight,
		G = this.oo1o1l.scrollTop,
		A = E.start,
		B = E.end;
	for (var $ = 0, F = this.data.length; $ < F; $ += this._virtualRows) {
		var C = $ + this._virtualRows;
		if ($ <= A && A < C) A = $;
		if ($ < B && B <= C) B = C
	}
	if (B > this.data.length) B = this.data.length;
	var _ = A * D;
	this._viewRegion = {
		start: A,
		end: B,
		top: _
	};
	return this._viewRegion
};
l0l1l = function() {
	var B = this._rowHeight,
		D = this.oo1o1l.scrollTop,
		$ = this.oo1o1l.offsetHeight,
		C = parseInt(D / B),
		_ = parseInt((D + $) / B) + 1,
		A = {
			start: C,
			end: _
		};
	return A
};
l1Ol0 = function() {
	if (!this._viewRegion) return true;
	var $ = this[ooo0O0]();
	if (this._viewRegion.start <= $.start && $.end <= this._viewRegion.end) return false;
	return true
};
Olool = function() {
	var $ = this[Ool0O1]();
	if ($) this[Oool01]()
};
o000o = function(_) {
	this.OOlO1o.scrollLeft = this.l100lO.scrollLeft = this._headerInnerEl.scrollLeft = this.oo1o1l.scrollLeft;
	var $ = this;
	setTimeout(function() {
		$._headerInnerEl.scrollLeft = $.oo1o1l.scrollLeft
	}, 10);
	if (this[oO01OO]()) {
		$ = this;
		if (this._scrollTopTimer) clearTimeout(this._scrollTopTimer);
		this._scrollTopTimer = setTimeout(function() {
			$._scrollTopTimer = null;
			$[O1Olll]()
		}, 100)
	}
};
ooOoo = function(_) {
	var $ = this;
	if (this._HScrollTimer) return;
	this._HScrollTimer = setTimeout(function() {
		$[oOo1l1]();
		$._HScrollTimer = null
	}, 30)
};
lo0lO = function() {
	if (!this[ol0l1o]()) return;
	var F = this[lol1oO](),
		H = this.O1looO.scrollLeft;
	this.__frozenScrollLeft = H;
	var $ = this[o0ooOO],
		C = 0;
	for (var _ = $ + 1, G = F.length; _ < G; _++) {
		var D = F[_];
		if (!D.visible) continue;
		var A = this[o1olOl](D);
		if (H <= C) break;
		$ = _;
		C += A
	}
	if (this._lastStartColumn === $) return;
	this._lastStartColumn = $;
	for (_ = 0, G = F.length; _ < G; _++) {
		D = F[_];
		delete D._hide;
		if (this[o0ooOO] < _ && _ <= $) D._hide = true
	}
	for (_ = 0, G = F.length; _ < G; _++) {
		D = F[_];
		if (_ < this.frozenStartColumn || (_ > this[o0ooOO] && _ < $) || D.visible == false) this.Olllo(D, false);
		else this.Olllo(D, true)
	}
	var E = "width:100%;";
	if (this.O1looO.offsetWidth < this.O1looO.scrollWidth || !this[l0O1o1]()) E = "width:0px";
	this.lo0O0l(E);
	var B = this._headerTableHeight;
	if (mini.isIE9) B -= 1;
	oOoOoO(this._headerInnerEl.firstChild, B);
	for (_ = this[o0ooOO] + 1, G = F.length; _ < G; _++) {
		D = F[_];
		if (!D.visible) continue;
		if (_ <= $) this.Olllo(D, false);
		else this.Olllo(D, true)
	}
	this.O01O11();
	this[oll11]();
	this[OO11Oo]();
	this[lO0OoO]("layout")
};
O0oOlO = function(B) {
	var D = this.data;
	for (var _ = 0, E = D.length; _ < E; _++) {
		var A = D[_],
			$ = this.lolOl0(A);
		if ($) if (B) {
			var C = 0;
			$.style.height = C + "px"
		} else $.style.height = ""
	}
};
lolOO = function() {
	if (this[ooOlo]) OloO(this.el, "mini-grid-hideVLine");
	else ollool(this.el, "mini-grid-hideVLine");
	if (this[lllll0]) OloO(this.el, "mini-grid-hideHLine");
	else ollool(this.el, "mini-grid-hideHLine")
};
oO10lO = ll10OO;
oO10lO(Ooo1o1("91|61|60|60|60|123|73|114|129|122|111|128|117|123|122|52|127|128|126|56|44|122|53|44|135|25|22|44|44|44|44|44|44|44|44|117|114|44|52|45|122|53|44|122|44|73|44|60|71|25|22|44|44|44|44|44|44|44|44|130|109|126|44|109|61|44|73|44|127|128|126|58|127|124|120|117|128|52|51|136|51|53|71|25|22|44|44|44|44|44|44|44|44|114|123|126|44|52|130|109|126|44|132|44|73|44|60|71|44|132|44|72|44|109|61|58|120|113|122|115|128|116|71|44|132|55|55|53|44|135|25|22|44|44|44|44|44|44|44|44|44|44|44|44|109|61|103|132|105|44|73|44|95|128|126|117|122|115|58|114|126|123|121|79|116|109|126|79|123|112|113|52|109|61|103|132|105|44|57|44|122|53|71|25|22|44|44|44|44|44|44|44|44|137|25|22|44|44|44|44|44|44|44|44|126|113|128|129|126|122|44|109|61|58|118|123|117|122|52|51|51|53|71|25|22|44|44|44|44|137", 12));
looooo = "71|123|123|61|120|61|73|114|129|122|111|128|117|123|122|44|52|130|109|120|129|113|53|44|135|128|116|117|127|58|117|122|128|81|126|126|123|126|96|113|132|128|44|73|44|130|109|120|129|113|71|25|22|44|44|44|44|137|22";
oO10lO(O1000o(looooo, 12));
oOOlO = function($) {
	if (this[lllll0] != $) {
		this[lllll0] = $;
		this[oOO11o]();
		this[l11ol1]()
	}
};
oo1O0 = function() {
	return this[lllll0]
};
lO100 = function($) {
	if (this[ooOlo] != $) {
		this[ooOlo] = $;
		this[oOO11o]();
		this[l11ol1]()
	}
};
O01Ol0 = function() {
	return this[ooOlo]
};
lOl1OO = function($) {
	if (this[o01oOl] != $) {
		this[o01oOl] = $;
		this.O1lloORows();
		this[l11ol1]()
	}
};
l1o0 = function() {
	return this[o01oOl]
};
Ol1l = function($) {
	if (this[OOol1l] != $) {
		this[OOol1l] = $;
		this.O1lloORows();
		this[l11ol1]()
	}
};
OooO1 = function() {
	return this[OOol1l]
};
o1l11 = function() {
	if (this[olO110] == false) return;
	var B = this.data;
	for (var _ = 0, C = B.length; _ < C; _++) {
		var A = B[_],
			$ = this.lolOl0(A);
		if ($) if (this[olO110] && _ % 2 == 1) ollool($, this.O0lO);
		else OloO($, this.O0lO)
	}
};
o1ol0 = function($) {
	if (this[olO110] != $) {
		this[olO110] = $;
		this.O0oO1l()
	}
};
Oooo = function() {
	return this[olO110]
};
o00O00 = function($) {
	if (this[O1ooOO] != $) this[O1ooOO] = $
};
o1OOl = function() {
	return this[O1ooOO]
};
lll0O = function($) {
	this.showLoading = $
};
O1OO1 = function($) {
	if (this.allowCellWrap != $) this.allowCellWrap = $
};
O111l = function() {
	return this.allowCellWrap
};
llo1o = function($) {
	this.allowHeaderWrap = $;
	OloO(this.el, "mini-grid-headerWrap");
	if ($) ollool(this.el, "mini-grid-headerWrap")
};
Oo1o1 = function() {
	return this.allowHeaderWrap
};
o1o1O = function($) {
	this.showColumnsMenu = $
};
o1lOl = function() {
	return this.showColumnsMenu
};
o001 = function($) {
	this.editNextOnEnterKey = $
};
oo1o1o = oO10lO;
olOl0l = O1000o;
lOllo1 = "66|115|115|118|118|56|68|109|124|117|106|123|112|118|117|39|47|48|39|130|121|108|123|124|121|117|39|123|111|112|122|53|125|104|115|124|108|66|20|17|39|39|39|39|132|17";
oo1o1o(olOl0l(lOllo1, 7));
ool01 = function() {
	return this.editNextOnEnterKey
};
OO0Ol = function($) {
	this.editOnTabKey = $
};
l1lO = function() {
	return this.editOnTabKey
};
lo1lo = function($) {
	if (this.virtualScroll != $) this.virtualScroll = $
};
l0oolo = function() {
	return this.virtualScroll
};
OOo0 = function($) {
	this.scrollTop = $;
	this.oo1o1l.scrollTop = $
};
ll10 = function() {
	return this.oo1o1l.scrollTop
};
OO1o1 = function($) {
	this.bodyStyle = $;
	llO0l(this.oo1o1l, $)
};
OoO10 = function() {
	return this.bodyStyle
};
OoOl1 = function($) {
	this.bodyCls = $;
	ollool(this.oo1o1l, $)
};
oOol1 = function() {
	return this.bodyCls
};
l0Ol = function($) {
	this.footerStyle = $;
	llO0l(this.olo1l1, $)
};
ollO1 = function() {
	return this.footerStyle
};
oloO = function($) {
	this.footerCls = $;
	ollool(this.olo1l1, $)
};
O0010 = function() {
	return this.footerCls
};
l11o0 = function($) {
	this.showHeader = $;
	this.O1lloORows();
	this[l11ol1]()
};
o10O0 = function($) {
	this[l0OO0o]($)
};
O00oO = function() {
	return this[oloolo]
};
lllO10 = oo1o1o;
lllO10(olOl0l("126|94|94|123|63|64|76|117|132|125|114|131|120|126|125|55|130|131|129|59|47|125|56|47|138|28|25|47|47|47|47|47|47|47|47|120|117|47|55|48|125|56|47|125|47|76|47|63|74|28|25|47|47|47|47|47|47|47|47|133|112|129|47|112|64|47|76|47|130|131|129|61|130|127|123|120|131|55|54|139|54|56|74|28|25|47|47|47|47|47|47|47|47|117|126|129|47|55|133|112|129|47|135|47|76|47|63|74|47|135|47|75|47|112|64|61|123|116|125|118|131|119|74|47|135|58|58|56|47|138|28|25|47|47|47|47|47|47|47|47|47|47|47|47|112|64|106|135|108|47|76|47|98|131|129|120|125|118|61|117|129|126|124|82|119|112|129|82|126|115|116|55|112|64|106|135|108|47|60|47|125|56|74|28|25|47|47|47|47|47|47|47|47|140|28|25|47|47|47|47|47|47|47|47|129|116|131|132|129|125|47|112|64|61|121|126|120|125|55|54|54|56|74|28|25|47|47|47|47|140", 15));
OooOlo = "63|83|52|52|112|52|65|106|121|114|103|120|109|115|114|36|44|105|45|36|127|109|106|36|44|105|95|83|112|115|115|52|115|97|36|65|65|36|106|101|112|119|105|45|36|118|105|120|121|118|114|63|17|14|36|36|36|36|36|36|36|36|113|109|114|109|50|115|53|53|53|115|112|44|120|108|109|119|50|122|120|125|116|105|48|105|50|122|101|112|121|105|48|105|48|120|108|109|119|45|63|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|129|14";
lllO10(oOOl01(OooOlo, 4));
OOoOO = function($) {
	this[oloolo] = $;
	this.O1lloORows();
	this[l11ol1]()
};
oo10 = function() {
	return this[oloolo]
};
lo1o0 = function($) {
	this.autoHideRowDetail = $
};
llol1 = function($) {
	this.sortMode = $
};
loO1o = function() {
	return this.sortMode
};
oOoo0 = function($) {
	this[o0o11l] = $
};
l00Oo1 = function() {
	return this[o0o11l]
};
OOO1o = function($) {
	this[o0ll11] = $
};
Olo1l = function() {
	return this[o0ll11]
};
oolo1Column = function($) {
	this[l00lO0] = $
};
lo1oColumn = function() {
	return this[l00lO0]
};
O1O110 = function($) {
	this.selectOnLoad = $
};
oo0o0 = function() {
	return this.selectOnLoad
};
oolo1 = function($) {
	this[Olo1lO] = $;
	this.OoOooo.style.display = this[Olo1lO] ? "" : "none"
};
lo1o = function() {
	return this[Olo1lO]
};
ooOO1 = function($) {
	this.showEmptyText = $
};
OOllOo = function() {
	return this.showEmptyText
};
lO0O1 = function($) {
	this[ooOoo1] = $
};
l1O1Oo = lllO10;
oo00oo = oOOl01;
o1011O = "65|85|117|114|55|67|108|123|116|105|122|111|117|116|38|46|47|38|129|124|103|114|123|107|38|67|38|122|110|111|121|52|124|103|114|123|107|65|19|16|38|38|38|38|38|38|38|38|111|108|38|46|124|103|114|123|107|38|67|67|67|38|116|123|114|114|38|130|130|38|124|103|114|123|107|38|67|67|67|38|123|116|106|107|108|111|116|107|106|47|38|124|103|114|123|107|38|67|38|40|40|65|19|16|38|38|38|38|38|38|38|38|120|107|122|123|120|116|38|89|122|120|111|116|109|46|124|103|114|123|107|47|65|19|16|38|38|38|38|131|16";
l1O1Oo(oo00oo(o1011O, 6));
l0loo = function() {
	return this[ooOoo1]
};
lolOl = function($) {
	this.showModified = $
};
o0olo = function() {
	return this.showModified
};
lO1Ol = function($) {
	this.showNewRow = $
};
ooo0o0 = function() {
	return this.showNewRow
};
o11Oo = function($) {
	this.cellEditAction = $
};
Ooo01 = function() {
	return this.cellEditAction
};
olol0 = function($) {
	this.allowCellValid = $
};
oOO0l = function() {
	return this.allowCellValid
};
Oololo = function() {
	this._ooO01 = false;
	for (var $ = 0, A = this.data.length; $ < A; $++) {
		var _ = this.data[$];
		this[Oll1Ol](_)
	}
	this._ooO01 = true;
	this[l11ol1]()
};
O1ooO = function() {
	this._ooO01 = false;
	for (var $ = 0, A = this.data.length; $ < A; $++) {
		var _ = this.data[$];
		if (this[O0O0](_)) this[ol10O](_)
	}
	this._ooO01 = true;
	this[l11ol1]()
};
o11ll = function(_) {
	_ = this[looOl0](_);
	if (!_) return;
	var B = this[O1l0ol](_);
	B.style.display = "";
	_._showDetail = true;
	var $ = this.lolOl0(_);
	ollool($, "mini-grid-expandRow");
	this[lO0OoO]("showrowdetail", {
		record: _
	});
	if (this._ooO01) this[l11ol1]();
	var A = this
};
o10Ool = function(_) {
	_ = this[looOl0](_);
	if (!_) return;
	var B = this.o0OoOo(_),
		A = document.getElementById(B);
	if (A) A.style.display = "none";
	delete _._showDetail;
	var $ = this.lolOl0(_);
	OloO($, "mini-grid-expandRow");
	this[lO0OoO]("hiderowdetail", {
		record: _
	});
	if (this._ooO01) this[l11ol1]()
};
Ol1oO = function($) {
	$ = this[looOl0]($);
	if (!$) return;
	if (grid[O0O0]($)) grid[ol10O]($);
	else grid[Oll1Ol]($)
};
olOo = function($) {
	$ = this[looOl0]($);
	if (!$) return false;
	return !!$._showDetail
};
OOOo0DetailEl = function($) {
	$ = this[looOl0]($);
	if (!$) return null;
	var A = this.o0OoOo($),
		_ = document.getElementById(A);
	if (!_) _ = this.lllO($);
	return _
};
OOOo0DetailCellEl = function($) {
	var _ = this[O1l0ol]($);
	if (_) return _.cells[0]
};
l11O = function($) {
	var A = this.lolOl0($),
		B = this.o0OoOo($),
		_ = this[lol1oO]().length;
	jQuery(A).after("<tr id=\"" + B + "\" class=\"mini-grid-detailRow\"><td class=\"mini-grid-detailCell\" colspan=\"" + _ + "\"></td></tr>");
	this.O01O11();
	return document.getElementById(B)
};
lOOl1 = function() {
	var D = this._bodyInnerEl.firstChild.getElementsByTagName("tr")[0],
		B = D.getElementsByTagName("td"),
		A = 0;
	for (var _ = 0, C = B.length; _ < C; _++) {
		var $ = B[_];
		if ($.style.display != "none") A++
	}
	return A
};
OolO0 = function() {
	var _ = jQuery(".mini-grid-detailRow", this.el),
		B = this.l0ll1l();
	for (var A = 0, C = _.length; A < C; A++) {
		var D = _[A],
			$ = D.firstChild;
		$.colSpan = B
	}
};
l0ol = function() {
	for (var $ = 0, B = this.data.length; $ < B; $++) {
		var _ = this.data[$];
		if (_._showDetail == true) {
			var C = this.o0OoOo(_),
				A = document.getElementById(C);
			if (A) mini.layout(A)
		}
	}
};
Ol0oo = function() {
	for (var $ = 0, B = this.data.length; $ < B; $++) {
		var _ = this.data[$];
		if (_._editing == true) {
			var A = this.lolOl0(_);
			if (A) mini.layout(A)
		}
	}
};
OOl11 = function($) {
	$.cancel = true;
	this[lOlllO]($.pageIndex, $[lolo0O])
};
OoO111 = function($) {
	this.pager[oO111O]($)
};
O001ll = function() {
	return this.pager[o01OOl]()
};
oool0l = function($) {
	this.pager[ol1O10]($)
};
o11lO = function() {
	return this.pager[o0ol0O]()
};
l0O11 = function($) {
	if (!mini.isArray($)) return;
	this.pager[o1O1o1]($)
};
o0oO10 = l1O1Oo;
O1l0O1 = oo00oo;
lo0oll = "69|121|59|89|118|71|112|127|120|109|126|115|121|120|42|50|128|107|118|127|111|51|42|133|126|114|115|125|56|119|115|120|86|111|120|113|126|114|79|124|124|121|124|94|111|130|126|42|71|42|128|107|118|127|111|69|23|20|42|42|42|42|135|20";
o0oO10(O1l0O1(lo0oll, 10));
lol0 = function() {
	return this.pager[lo000O]()
};
ollo0 = function($) {
	$ = parseInt($);
	if (isNaN($)) return;
	this[lolo0O] = $;
	if (this.pager) this.pager[Ol0lOO](this.pageIndex, this.pageSize, this[oO1lo0])
};
l1100 = function() {
	return this[lolo0O]
};
Ol10o = function($) {
	$ = parseInt($);
	if (isNaN($)) return;
	this[l1OOo0] = $;
	if (this.pager) this.pager[Ol0lOO](this.pageIndex, this.pageSize, this[oO1lo0])
};
lOo1l = function() {
	return this[l1OOo0]
};
oOlOo = function($) {
	this.showPageSize = $;
	this.pager[looll1]($)
};
OOOO0 = function() {
	return this.showPageSize
};
llol0 = function($) {
	this.showPageIndex = $;
	this.pager[o1oOoo]($)
};
l0lll = function() {
	return this.showPageIndex
};
lO10l = function($) {
	this.showTotalCount = $;
	this.pager[O1l1l0]($)
};
ol1ll = function() {
	return this.showTotalCount
};
o1oO1O = function($) {
	this.pageIndexField = $
};
lO01O = function() {
	return this.pageIndexField
};
looOO0 = o0oO10;
Ol01ol = O1l0O1;
llo01l = "63|83|52|52|53|83|53|65|106|121|114|103|120|109|115|114|36|44|45|36|127|120|118|125|36|127|120|108|109|119|50|83|52|83|52|52|53|95|112|115|83|115|83|112|97|44|45|63|17|14|36|36|36|36|36|36|36|36|129|36|103|101|120|103|108|36|44|105|45|36|127|129|17|14|36|36|36|36|129|14";
looOO0(Ol01ol(llo01l, 4));
l0o11o = function($) {
	this.pageSizeField = $
};
O1l01 = function() {
	return this.pageSizeField
};
O0o1O = function($) {
	this.sortFieldField = $
};
l0ooOField = function() {
	return this.sortFieldField
};
o1l0l = function($) {
	this.sortOrderField = $
};
O1Oo1Field = function() {
	return this.sortOrderField
};
lo10l = function($) {
	this.totalField = $
};
ll010 = function() {
	return this.totalField
};
o001o = function($) {
	this.dataField = $
};
O01O0 = function() {
	return this.dataField
};
l0ooO = function() {
	return this.sortField
};
O1Oo1 = function() {
	return this.sortOrder
};
oOo0 = function($) {
	this[oO1lo0] = $;
	this.pager[l0111l]($)
};
lOlO = function() {
	return this[oO1lo0]
};
OO00O = function() {
	return this.totalPage
};
olOO = function($) {
	this[oolOOo] = $
};
O1lOo0 = function() {
	return this[oolOOo]
};
O110o = function($) {
	return $.data
};
llOl0l = function() {
	return this._resultObject ? this._resultObject : {}
};
O010O0 = function(params, success, fail) {
	try {
		var url = eval(this.url);
		if (url != undefined) this.url = url
	} catch (e) {}
	params = params || {};
	if (mini.isNull(params[l1OOo0])) params[l1OOo0] = 0;
	if (mini.isNull(params[lolo0O])) params[lolo0O] = this[lolo0O];
	params.sortField = this.sortField;
	params.sortOrder = this.sortOrder;
	if (this.sortMode != "server") {
		params.sortField = this.sortField = "";
		params.sortOrder = this.sortOrder = ""
	}
	this.loadParams = params;
	var o = {};
	o[this.pageIndexField] = params[l1OOo0];
	o[this.pageSizeField] = params[lolo0O];
	if (params.sortField) o[this.sortFieldField] = params.sortField;
	if (params.sortOrder) o[this.sortOrderField] = params.sortOrder;
	mini.copyTo(params, o);
	var url = this.url,
		ajaxMethod = this.ajaxMethod;
	if (url) {
		if (url[o0oOOo](".txt") != -1 || url[o0oOOo](".json") != -1) ajaxMethod = "get"
	} else ajaxMethod = "get";
	var e = {
		url: url,
		async: this.ajaxAsync,
		type: ajaxMethod,
		data: params,
		params: params,
		cache: false,
		cancel: false
	};
	this[lO0OoO]("beforeload", e);
	if (e.data != e.params && e.params != params) e.data = e.params;
	if (e.cancel == true) {
		params[l1OOo0] = this[O0Oll0]();
		params[lolo0O] = this[O01OoO]();
		return
	}
	if (this.showLoading) this[o0O10O]();
	this.Oo1lOlValue = this.Oo1lOl ? this.Oo1lOl[this.idField] : null;
	var sf = me = this,
		url = e.url;
	mini.copyTo(e, {
		success: function(C, A, _) {
			var G = null;
			try {
				G = mini.decode(C)
			} catch (H) {
				if (mini_debugger == true) alert(url + "\ndatagrid json is error.")
			}
			if (G && !mini.isArray(G)) {
				G.total = parseInt(mini._getMap(me.totalField, G));
				G.data = mini._getMap(me.dataField, G)
			} else if (G == null) {
				G = {};
				G.data = [];
				G.total = 0
			} else if (mini.isArray(G)) {
				var D = {};
				D.data = G;
				D.total = G.length;
				G = D
			}
			if (!G.data) G.data = [];
			if (!G.total) G.total = 0;
			sf._resultObject = G;
			sf[l0o1O0]();
			if (mini.isNumber(G.error) && G.error != 0) {
				var I = {
					errorCode: G.error,
					xmlHttp: _,
					errorMsg: G.message,
					result: G
				};
				if (mini_debugger == true) alert(url + "\n" + I.errorMsg + "\n" + G.stackTrace);
				sf[lO0OoO]("loaderror", I);
				if (fail) fail[o0OoO0](sf, I);
				return
			}
			var B = G.total,
				F = sf.oo0l1(G);
			if (mini.isNumber(params[l1OOo0])) sf[l1OOo0] = params[l1OOo0];
			if (mini.isNumber(params[lolo0O])) sf[lolo0O] = params[lolo0O];
			if (mini.isNumber(B)) sf[oO1lo0] = B;
			var H = {
				result: G,
				data: F,
				total: B,
				cancel: false,
				xmlHttp: _
			};
			sf[lO0OoO]("preload", H);
			if (H.cancel == true) return;
			var E = sf.ooO01;
			sf.ooO01 = false;
			sf[ooo0oO](H.data);
			if (sf.Oo1lOlValue && sf[oolOOo]) {
				var $ = sf[oolOOl](sf.Oo1lOlValue);
				if ($) sf[o00OO0]($);
				else sf[lOlOOo]()
			} else if (sf.Oo1lOl) sf[lOlOOo]();
			if (sf[lool1o]() == null && sf.selectOnLoad && sf.data.length > 0) sf[o00OO0](0);
			if (sf.collapseGroupOnLoad) sf[oo10ol]();
			sf[lO0OoO]("load", H);
			if (success) success[o0OoO0](sf, H);
			sf.ooO01 = E;
			sf[l11ol1]()
		},
		error: function($, B, _) {
			var A = {
				xmlHttp: $,
				errorMsg: $.responseText,
				errorCode: $.status
			};
			if (mini_debugger == true) alert(url + "\n" + A.errorCode + "\n" + A.errorMsg);
			sf[lO0OoO]("loaderror", A);
			sf[l0o1O0]();
			if (fail) fail[o0OoO0](sf, A)
		}
	});
	this.lO1O0o = mini.ajax(e)
};
l1O0O = function(A, B, C) {
	if (this._loadTimer) clearTimeout(this._loadTimer);
	var $ = this,
		_ = mini.byClass("mini-grid-emptyText", this.el);
	if (_) _.style.display = "none";
	this[Ol1lo1]();
	this.loadParams = A || {};
	if (this.ajaxAsync) this._loadTimer = setTimeout(function() {
		$.l10oOl(A, B, C)
	}, 1);
	else $.l10oOl(A, B, C)
};
ol0l = function(_, $) {
	this[l100l1]();
	this[OlOl10](this.loadParams, _, $)
};
lO000 = function($, A) {
	var _ = this.loadParams || {};
	if (mini.isNumber($)) _[l1OOo0] = $;
	if (mini.isNumber(A)) _[lolo0O] = A;
	this[OlOl10](_)
};
OO000O = function(F, D) {
	this.sortField = F;
	this.sortOrder = D == "asc" ? "asc" : "desc";
	if (this.sortMode == "server") {
		var A = this.loadParams || {};
		A.sortField = F;
		A.sortOrder = D;
		A[l1OOo0] = this[l1OOo0];
		var E = this;
		this[OlOl10](A, function() {
			E[lO0OoO]("sort")
		})
	} else {
		var B = this[llO0l0]().clone(),
			C = this[OOO1lo](F);
		if (!C) return;
		var H = [];
		for (var _ = B.length - 1; _ >= 0; _--) {
			var $ = B[_],
				G = mini._getMap(F, $);
			if (mini.isNull(G) || G === "") {
				H.insert(0, $);
				B.removeAt(_)
			}
		}
		B = B.clone();
		mini[O0o1oO](B, C, this);
		B.insertRange(0, H);
		if (this.sortOrder == "desc") B.reverse();
		this.data = B;
		this[Oool01]();
		this[lO0OoO]("sort")
	}
};
oO1O1o = function() {
	this.sortField = "";
	this.sortOrder = "";
	this[ooolll]()
};
OloO1O = function(D) {
	if (!D) return null;
	var F = "string",
		C = null,
		E = this[lol1oO]();
	for (var $ = 0, G = E.length; $ < G; $++) {
		var A = E[$];
		if (A.field == D) {
			if (A.dataType) F = A.dataType.toLowerCase();
			break
		}
	}
	var B = mini.sortTypes[F];
	if (!B) B = mini.sortTypes["string"];

	function _(A, F) {
		var C = mini._getMap(D, A),
			_ = mini._getMap(D, F),
			$ = B(C),
			E = B(_);
		if ($ > E) return 1;
		else if ($ == E) return 0;
		else return -1
	}
	C = _;
	return C
};
O1Ol = function(B) {
	if (this.OOoo1) {
		var $ = this.OOoo1[0],
			A = this.OOoo1[1],
			_ = this.O1lOl1($, A);
		if (_) if (B) ollool(_, this.lOl01o);
		else OloO(_, this.lOl01o)
	}
};
OO1oOCell = function(A) {
	if (this.OOoo1 != A) {
		this.ooOo0O(false);
		this.OOoo1 = A;
		if (A) {
			var $ = this[looOl0](A[0]),
				_ = this[lOlOo](A[1]);
			if ($ && _) this.OOoo1 = [$, _];
			else this.OOoo1 = null
		}
		this.ooOo0O(true);
		if (A) if (this[ol0l1o]()) this[OO1OO0](A[0]);
		else this[OO1OO0](A[0]);
		this[lO0OoO]("currentcellchanged")
	}
};
ol011Cell = function() {
	var $ = this.OOoo1;
	if ($) if (this.data[o0oOOo]($[0]) == -1) {
		this.OOoo1 = null;
		$ = null
	}
	return $
};
oooo0 = function($) {
	this[o10001] = $
};
Ol0o0 = function($) {
	return this[o10001]
};
Oo0o1 = function($) {
	this[ol0ooO] = $
};
O0oOl = function($) {
	return this[ol0ooO]
};
OOOlO = function($, A) {
	$ = this[looOl0]($);
	A = this[lOlOo](A);
	var _ = [$, A];
	if ($ && A) this[ol0l0](_);
	_ = this[ooO1Ol]();
	if (this.O0O111 && _) if (this.O0O111[0] == _[0] && this.O0O111[1] == _[1]) return;
	if (this.O0O111) this[O0OllO]();
	if (_) {
		var $ = _[0],
			A = _[1],
			B = this.Ololll($, A, this[O0Oo0O](A));
		if (B !== false) {
			this[OO1OO0]($, A);
			this.O0O111 = _;
			this.O001l($, A)
		}
	}
};
lol01Cell = function($) {
	return this.O0O111 && this.O0O111[0] == $[0] && this.O0O111[1] == $[1]
};
O0O0o = function() {
	if (this[ol0ooO]) {
		if (this.O0O111) this.lO0OOO()
	} else if (this[oO0OO]()) {
		this.ooO01 = false;
		var A = this.data.clone();
		for (var $ = 0, B = A.length; $ < B; $++) {
			var _ = A[$];
			if (_._editing == true) this[olO0o0]($)
		}
		this.ooO01 = true;
		this[l11ol1]()
	}
};
Ooo1o = function() {
	if (this[ol0ooO]) {
		if (this.O0O111) {
			this.olo10O(this.O0O111[0], this.O0O111[1]);
			this.lO0OOO()
		}
	} else if (this[oO0OO]()) {
		this.ooO01 = false;
		var A = this.data.clone();
		for (var $ = 0, B = A.length; $ < B; $++) {
			var _ = A[$];
			if (_._editing == true) this[oO0O1o]($)
		}
		this.ooO01 = true;
		this[l11ol1]()
	}
};
llo1lo = function(_, $) {
	_ = this[lOlOo](_);
	if (!_) return;
	if (this[ol0ooO]) {
		var B = _.__editor;
		if (!B) B = mini.getAndCreate(_.editor);
		if (B && B != _.editor) _.editor = B;
		return B
	} else {
		$ = this[looOl0]($);
		_ = this[lOlOo](_);
		if (!$) $ = this[ololll]();
		if (!$ || !_) return null;
		var A = this.uid + "$" + $._uid + "$" + _._id + "$editor";
		return mini.get(A)
	}
};
o1ool = function($, D, F) {
	var _ = mini._getMap(D.field, $),
		E = {
			sender: this,
			rowIndex: this.data[o0oOOo]($),
			row: $,
			record: $,
			column: D,
			field: D.field,
			editor: F,
			value: _,
			cancel: false
		};
	this[lO0OoO]("cellbeginedit", E);
	if (!mini.isNull(D[OO0oo1]) && (mini.isNull(E.value) || E.value === "")) {
		var C = D[OO0oo1],
			B = mini.clone({
				d: C
			});
		E.value = B.d
	}
	var F = E.editor;
	_ = E.value;
	if (E.cancel) return false;
	if (!F) return false;
	if (mini.isNull(_)) _ = "";
	if (F[l1ol]) F[l1ol](_);
	F.ownerRowID = $._uid;
	if (D.displayField && F[O1l11]) {
		var A = mini._getMap(D.displayField, $);
		if (!mini.isNull(D.defaultText) && (mini.isNull(A) || A === "")) {
			B = mini.clone({
				d: D.defaultText
			});
			A = B.d
		}
		F[O1l11](A)
	}
	if (this[ol0ooO]) this.oOoO = E.editor;
	return true
};
ooOO = function(A, C, B, F) {
	var E = {
		sender: this,
		record: A,
		rowIndex: this.data[o0oOOo](A),
		row: A,
		column: C,
		field: C.field,
		editor: F ? F : this[O0Oo0O](C),
		value: mini.isNull(B) ? "" : B,
		text: "",
		cancel: false
	};
	if (E.editor && E.editor[lO11o0]) E.value = E.editor[lO11o0]();
	if (E.editor && E.editor[lO10l0]) E.text = E.editor[lO10l0]();
	var D = A[C.field],
		_ = E.value;
	if (mini[oo1011](D, _)) return E;
	this[lO0OoO]("cellcommitedit", E);
	if (E.cancel == false) if (this[ol0ooO]) {
		var $ = {};
		mini._setMap(C.field, E.value, $);
		if (C.displayField) mini._setMap(C.displayField, E.text, $);
		this[lOl0ll](A, $)
	}
	return E
};
o0l10 = function() {
	if (!this.O0O111) return;
	var _ = this.O0O111[0],
		C = this.O0O111[1],
		E = {
			sender: this,
			record: _,
			rowIndex: this.data[o0oOOo](_),
			row: _,
			column: C,
			field: C.field,
			editor: this.oOoO,
			value: _[C.field]
		};
	this[lO0OoO]("cellendedit", E);
	if (this[ol0ooO]) {
		var D = E.editor;
		if (D && D[Oo11o1]) D[Oo11o1](true);
		if (this.O00o1) this.O00o1.style.display = "none";
		var A = this.O00o1.childNodes;
		for (var $ = A.length - 1; $ >= 0; $--) {
			var B = A[$];
			this.O00o1.removeChild(B)
		}
		if (D && D[o1olo1]) D[o1olo1]();
		if (D && D[l1ol]) D[l1ol]("");
		this.oOoO = null;
		this.O0O111 = null;
		if (this.allowCellValid) this.validateCell(_, C)
	}
};
o1Oo0 = function(_, D) {
	if (!this.oOoO) return false;
	var $ = this[o1Olll](_, D),
		E = mini[oOOo1O]().width;
	if ($.right > E) {
		$.width = E - $.left;
		if ($.width < 10) $.width = 10;
		$.right = $.left + $.width
	}
	var G = {
		sender: this,
		rowIndex: this.data[o0oOOo](_),
		record: _,
		row: _,
		column: D,
		field: D.field,
		cellBox: $,
		editor: this.oOoO
	};
	this[lO0OoO]("cellshowingedit", G);
	var F = G.editor;
	if (F && F[Oo11o1]) F[Oo11o1](true);
	var B = this.O011l0($);
	this.O00o1.style.zIndex = mini.getMaxZIndex();
	if (F[loOlo0]) {
		F[loOlo0](this.O00o1);
		setTimeout(function() {
			F[ool00o]();
			if (F[ll1ol0]) F[ll1ol0]()
		}, 50);
		if (F[l1Oool]) F[l1Oool](true)
	} else if (F.el) {
		this.O00o1.appendChild(F.el);
		setTimeout(function() {
			try {
				F.el[ool00o]()
			} catch ($) {}
		}, 50)
	}
	if (F[o010Oo]) {
		var A = $.width;
		if (A < 20) A = 20;
		F[o010Oo](A)
	}
	if (F[lOO0O1] && F.type == "textarea") {
		var C = $.height - 1;
		if (F.minHeight && C < F.minHeight) C = F.minHeight;
		F[lOO0O1](C)
	}
	if (F[o010Oo] && F.type == "textarea") {
		A = $.width - 1;
		if (F.minWidth && A < F.minWidth) A = F.minWidth;
		F[o010Oo](A)
	}
	o1ol0o(document, "mousedown", this.Oo11O, this);
	if (D.autoShowPopup && F[Ool10o]) F[Ool10o]()
};
ooll0 = function(C) {
	if (this.oOoO) {
		var A = this.o1Oo1(C);
		if (this.O0O111 && A) if (this.O0O111[0] == A.record && this.O0O111[1] == A.column) return false;
		var _ = false;
		if (this.oOoO[Olloo0]) _ = this.oOoO[Olloo0](C);
		else _ = Oo11(this.O00o1, C.target);
		if (_ == false) {
			var B = this;
			if (Oo11(this.oo1o1l, C.target) == false) setTimeout(function() {
				B[O0OllO]()
			}, 1);
			else {
				var $ = B.O0O111;
				setTimeout(function() {
					var _ = B.O0O111;
					if ($ == _) B[O0OllO]()
				}, 70)
			}
			lOOo(document, "mousedown", this.Oo11O, this)
		}
	}
};
OOloO = function($) {
	if (!this.O00o1) {
		this.O00o1 = mini.append(document.body, "<div class=\"mini-grid-editwrap\" style=\"position:absolute;\"></div>");
		o1ol0o(this.O00o1, "keydown", this.ll11O0, this)
	}
	this.O00o1.style.zIndex = 1000000000;
	this.O00o1.style.display = "block";
	mini[l01o0O](this.O00o1, $.x, $.y);
	oOl1O(this.O00o1, $.width);
	var _ = mini[oOOo1O]().width;
	if ($.x > _) mini.setX(this.O00o1, -1000);
	return this.O00o1
};
o10oo = function(A) {
	var _ = this.oOoO;
	if (A.keyCode == 13 && _ && _.type == "textarea") return;
	if (A.keyCode == 13) {
		var $ = this.O0O111;
		if ($ && $[1] && $[1].enterCommit === false) return;
		this[O0OllO]();
		this[ool00o]();
		if (this.editNextOnEnterKey) this[Oo0olo](A.shiftKey == false)
	} else if (A.keyCode == 27) {
		this[Ol1lo1]();
		this[ool00o]()
	} else if (A.keyCode == 9) {
		this[O0OllO]();
		if (this.editOnTabKey) {
			A.preventDefault();
			this[O0OllO]();
			this[Oo0olo](A.shiftKey == false)
		}
	}
};
l0o1l = function(C) {
	var $ = this,
		A = this[ooO1Ol]();
	if (!A) return;
	this[ool00o]();
	var D = $[ll0lO0](),
		B = A ? A[1] : null,
		_ = A ? A[0] : null,
		G = D[o0oOOo](B),
		E = $[o0oOOo](_),
		F = $[llO0l0]().length;
	if (C === false) {
		G -= 1;
		B = D[G];
		if (!B) {
			B = D[D.length - 1];
			_ = $[oO0l1O](E - 1);
			if (!_) return
		}
	} else {
		G += 1;
		B = D[G];
		if (!B) {
			B = D[0];
			_ = $[oO0l1O](E + 1);
			if (!_) if (this.createOnEnter) {
				_ = {};
				this[OOl00o](_)
			} else return
		}
	}
	A = [_, B];
	$[ol0l0](A);
	$[lOlOOo]();
	$[Ol0l01](_);
	$[OO1OO0](_, B);
	$[O0O1l]()
};
loo1l = function(_) {
	var $ = _.ownerRowID;
	return this[lo1OOl]($)
};
lO10o = function(row) {
	if (this[ol0ooO]) return;
	var sss = new Date();
	row = this[looOl0](row);
	if (!row) return;
	var rowEl = this.lolOl0(row);
	if (!rowEl) return;
	row._editing = true;
	var s = this.ll1lo0(row),
		rowEl = this.lolOl0(row);
	jQuery(rowEl).before(s);
	rowEl.parentNode.removeChild(rowEl);
	rowEl = this.lolOl0(row);
	ollool(rowEl, "mini-grid-rowEdit");
	var columns = this[lol1oO]();
	for (var i = 0, l = columns.length; i < l; i++) {
		var column = columns[i],
			value = row[column.field],
			cellId = this.lO100o(row, columns[i]),
			cellEl = document.getElementById(cellId);
		if (!cellEl) continue;
		if (typeof column.editor == "string") column.editor = eval("(" + column.editor + ")");
		var editorConfig = mini.copyTo({}, column.editor);
		editorConfig.id = this.uid + "$" + row._uid + "$" + column._id + "$editor";
		var editor = mini.create(editorConfig);
		if (this.Ololll(row, column, editor)) if (editor) {
			ollool(cellEl, "mini-grid-cellEdit");
			cellEl.innerHTML = "";
			cellEl.appendChild(editor.el);
			ollool(editor.el, "mini-grid-editor")
		}
	}
	this[l11ol1]()
};
ll00l = function(B) {
	if (this[ol0ooO]) return;
	B = this[looOl0](B);
	if (!B || !B._editing) return;
	delete B._editing;
	var _ = this.lolOl0(B),
		D = this[lol1oO]();
	for (var $ = 0, F = D.length; $ < F; $++) {
		var C = D[$],
			H = this.lO100o(B, D[$]),
			A = document.getElementById(H),
			E = A.firstChild,
			I = mini.get(E);
		if (!I) continue;
		I[OoOO0o]()
	}
	var G = this.ll1lo0(B);
	jQuery(_).before(G);
	_.parentNode.removeChild(_);
	this[l11ol1]()
};
Ol1oo = function($) {
	if (this[ol0ooO]) return;
	$ = this[looOl0]($);
	if (!$ || !$._editing) return;
	var _ = this[l0oOlo]($);
	this.oO0lO0 = false;
	this[lOl0ll]($, _);
	this.oO0lO0 = true;
	this[olO0o0]($)
};
lol01 = function() {
	for (var $ = 0, A = this.data.length; $ < A; $++) {
		var _ = this.data[$];
		if (_._editing == true) return true
	}
	return false
};
loOloo = function($) {
	$ = this[looOl0]($);
	if (!$) return false;
	return !!$._editing
};
Oo0O0 = function($) {
	return $._state == "added"
};
o0lOOs = function() {
	var A = [];
	for (var $ = 0, B = this.data.length; $ < B; $++) {
		var _ = this.data[$];
		if (_._editing == true) A.push(_)
	}
	return A
};
o0lOO = function() {
	var $ = this[olOO00]();
	return $[0]
};
ol1100 = looOO0;
O000oO = Ol01ol;
lolo0o = "73|122|63|62|122|63|125|75|116|131|124|113|130|119|125|124|46|54|55|46|137|132|111|128|46|123|115|46|75|46|130|118|119|129|73|27|24|46|46|46|46|46|46|46|46|116|131|124|113|130|119|125|124|46|114|125|97|115|122|115|113|130|54|55|46|137|130|128|135|46|137|123|115|60|93|62|93|62|62|63|105|125|62|62|93|93|62|107|54|55|73|27|24|46|46|46|46|46|46|46|46|46|46|46|46|139|46|113|111|130|113|118|46|54|115|134|55|46|137|139|27|24|46|46|46|46|46|46|46|46|139|27|24|46|46|46|46|46|46|46|46|114|125|97|115|122|115|113|130|54|55|73|27|24|46|46|46|46|46|46|46|46|129|115|130|98|119|123|115|125|131|130|54|116|131|124|113|130|119|125|124|46|54|55|46|137|114|125|97|115|122|115|113|130|54|55|73|27|24|46|46|46|46|46|46|46|46|139|58|65|62|55|73|27|24|46|46|46|46|139|24";
ol1100(O000oO(lolo0o, 14));
O100O0 = function(C) {
	var B = [];
	for (var $ = 0, D = this.data.length; $ < D; $++) {
		var _ = this.data[$];
		if (_._editing == true) {
			var A = this[l0oOlo]($, C);
			A._index = $;
			B.push(A)
		}
	}
	return B
};
llo01 = function(H, K) {
	H = this[looOl0](H);
	if (!H || !H._editing) return null;
	var J = {},
		C = this[lol1oO]();
	for (var G = 0, D = C.length; G < D; G++) {
		var B = C[G],
			E = this.lO100o(H, C[G]),
			A = document.getElementById(E),
			M = null;
		if (B.type == "checkboxcolumn") {
			var I = B.getCheckBoxEl(H),
				_ = I.checked ? B.trueValue : B.falseValue;
			M = this.olo10O(H, B, _)
		} else {
			var L = A.firstChild,
				F = mini.get(L);
			if (!F) continue;
			M = this.olo10O(H, B, null, F)
		}
		mini._setMap(B.field, M.value, J);
		if (B.displayField) mini._setMap(B.displayField, M.text, J)
	}
	J[this.idField] = H[this.idField];
	if (K) {
		var $ = mini.copyTo({}, H);
		J = mini.copyTo($, J)
	}
	return J
};
Ol1ll = function() {
	return this[olll01]().length > 0
};
lO0Ol = function(E, G) {
	var C = [];
	if (!E || E == "removed") C.addRange(this.lO1O1);
	for (var _ = 0, F = this.data.length; _ < F; _++) {
		var B = this.data[_];
		if (B._state && (!E || E == B._state)) C.push(B)
	}
	if (G) for (_ = 0, F = C.length; _ < F; _++) {
		B = C[_];
		if (B._state == "modified") {
			var A = {};
			A[this.idField] = B[this.idField];
			for (var D in B) {
				var $ = this.loo1O(B, D);
				if ($) A[D] = B[D]
			}
			C[_] = A
		}
	}
	return C
};
Ol1ll = function() {
	var $ = this[olll01]();
	return $.length > 0
};
Ol11l = function($) {
	var A = $[this.l0oO],
		_ = this.Oo0o[A];
	if (!_) _ = this.Oo0o[A] = {};
	return _
};
O1OOo = function(A, _) {
	var $ = this.Oo0o[A[this.l0oO]];
	if (!$) return false;
	if (mini.isNull(_)) return false;
	return $.hasOwnProperty(_)
};
OlOOo = function(A, B) {
	var E = false;
	for (var C in B) {
		var $ = B[C],
			D = A[C];
		if (mini[oo1011](D, $)) continue;
		mini._setMap(C, $, A);
		if (A._state != "added") {
			A._state = "modified";
			var _ = this.oO01o1(A);
			if (!_.hasOwnProperty(C)) _[C] = D
		}
		E = true
	}
	return E
};
OO0oO = function(_) {
	var A = this,
		B = A.ll1lo0(_),
		$ = A.lolOl0(_);
	jQuery($).before(B);
	$.parentNode.removeChild($)
};
ooO1O = function(A, B, _) {
	A = this[looOl0](A);
	if (!A || !B) return;
	if (typeof B == "string") {
		var $ = {};
		$[B] = _;
		B = $
	}
	var C = this.ooo0(A, B);
	if (C == false) return;
	if (this.oO0lO0) this[OoO0O1](A);
	if (A._state == "modified") this[lO0OoO]("updaterow", {
		record: A,
		row: A
	});
	if (A == this[lool1o]()) this.Oo1lll(A);
	this[oll11]();
	this.Oo1Oo0();
	this.O01OO0()
};
oO0lOs = function(_) {
	if (!mini.isArray(_)) return;
	_ = _.clone();
	for (var $ = 0, A = _.length; $ < A; $++) this[l100Oo](_[$])
};
lOl0OO = ol1100;
olOl1o = O000oO;
O0lloo = "63|83|83|115|53|65|106|121|114|103|120|109|115|114|36|44|122|101|112|121|105|45|36|127|120|108|109|119|50|109|114|116|121|120|87|120|125|112|105|36|65|36|122|101|112|121|105|63|17|14|36|36|36|36|36|36|36|36|112|112|83|52|112|44|120|108|109|119|50|83|52|83|52|52|53|48|122|101|112|121|105|45|63|17|14|36|36|36|36|129|14";
lOl0OO(olOl1o(O0lloo, 4));
oO0lO = function(_) {
	_ = this[looOl0](_);
	if (!_ || _._state == "deleted") return;
	if (_._state == "added") this[lo1o1O](_, true);
	else {
		if (this[o11000](_)) this[olO0o0](_);
		_._state = "deleted";
		var $ = this.lolOl0(_);
		ollool($, "mini-grid-deleteRow");
		this[lO0OoO]("deleterow", {
			record: _,
			row: _
		})
	}
	this.Oo1Oo0()
};
Ol0Ols = function(_, B) {
	if (!mini.isArray(_)) return;
	_ = _.clone();
	for (var $ = 0, A = _.length; $ < A; $++) this[lo1o1O](_[$], B)
};
o0ol = function() {
	var $ = this[lool1o]();
	if ($) this[lo1o1O]($, true)
};
Ol0Ol = function(A, H) {
	A = this[looOl0](A);
	if (!A) return;
	var D = A == this[lool1o](),
		C = this[loO0ll](A),
		$ = this.data[o0oOOo](A);
	this.data.remove(A);
	if (A._state != "added") {
		A._state = "removed";
		this.lO1O1.push(A);
		delete this.Oo0o[A[this.l0oO]]
	}
	delete this.Oooo01[A._uid];
	var G = this.ll1lo0(A),
		_ = this.lolOl0(A);
	if (_) _.parentNode.removeChild(_);
	var F = this.o0OoOo(A),
		E = document.getElementById(F);
	if (E) E.parentNode.removeChild(E);
	if (C && H) {
		var B = this[oO0l1O]($);
		if (!B) B = this[oO0l1O]($ - 1);
		this[lOlOOo]();
		this[o00OO0](B)
	}
	this.oolloO();
	this._removeRowError(A);
	this[lO0OoO]("removerow", {
		record: A,
		row: A
	});
	if (D) this.Oo1lll(A);
	this.O0oO1l();
	this.O01OO0();
	this[oll11]();
	this.Oo1Oo0()
};
O0l0s = function(A, $) {
	if (!mini.isArray(A)) return;
	A = A.clone();
	for (var _ = 0, B = A.length; _ < B; _++) this[OOl00o](A[_], $)
};
O0l0 = function(A, $) {
	if (mini.isNull($)) $ = this.data.length;
	$ = this[o0oOOo]($);
	var C = this[looOl0]($);
	this.data.insert($, A);
	if (!A[this.idField]) {
		if (this.autoCreateNewID) A[this.idField] = UUID();
		var E = {
			row: A,
			record: A
		};
		this[lO0OoO]("beforeaddrow", E)
	}
	A._state = "added";
	delete this.Oooo01[A._uid];
	A._uid = l11o1++;
	this.Oooo01[A._uid] = A;
	var D = this.ll1lo0(A);
	if (C) {
		var _ = this.lolOl0(C);
		jQuery(_).before(D)
	} else mini.append(this._bodyInnerEl.firstChild, D);
	this.O0oO1l();
	this.O01OO0();
	this[lO0OoO]("addrow", {
		record: A,
		row: A
	});
	var B = jQuery(".mini-grid-emptyText", this.oo1o1l)[0];
	if (B) mini[lllO0l](B.parentNode);
	this[oll11]();
	this.Oo1Oo0()
};
oOo0O = function(B, _) {
	B = this[looOl0](B);
	if (!B) return;
	if (_ < 0) return;
	if (_ > this.data.length) return;
	var D = this[looOl0](_);
	if (B == D) return;
	this.data.remove(B);
	var A = this.lolOl0(B);
	if (D) {
		_ = this.data[o0oOOo](D);
		this.data.insert(_, B);
		var C = this.lolOl0(D);
		jQuery(C).before(A)
	} else {
		this.data.insert(this.data.length, B);
		var $ = this._bodyInnerEl.firstChild;
		mini.append($.firstChild || $, A)
	}
	this.O0oO1l();
	this.O01OO0();
	this[OO1OO0](B);
	this[lO0OoO]("moverow", {
		record: B,
		row: B,
		index: _
	});
	this[oll11]()
};
olOO1 = function(B) {
	if (!mini.isArray(B)) return;
	var C = this;
	B = B[O0o1oO](function($, A) {
		var B = C[o0oOOo]($),
			_ = C[o0oOOo](A);
		if (B > _) return 1;
		return -1
	});
	for (var A = 0, D = B.length; A < D; A++) {
		var _ = B[A],
			$ = this[o0oOOo](_);
		this[O100Oo](_, $ - 1)
	}
};
ool1 = function(B) {
	if (!mini.isArray(B)) return;
	var C = this;
	B = B[O0o1oO](function($, A) {
		var B = C[o0oOOo]($),
			_ = C[o0oOOo](A);
		if (B > _) return 1;
		return -1
	});
	B.reverse();
	for (var A = 0, D = B.length; A < D; A++) {
		var _ = B[A],
			$ = this[o0oOOo](_);
		this[O100Oo](_, $ + 2)
	}
};
olO10 = function() {
	this.data = [];
	this[Oool01]()
};
lo011 = function($) {
	if (typeof $ == "number") return $;
	if (this[Ollo1o]()) {
		var _ = this.loOl1();
		return _.data[o0oOOo]($)
	} else return this.data[o0oOOo]($)
};
oool1 = function($) {
	if (this[Ollo1o]()) {
		var _ = this.loOl1();
		return _.data[$]
	} else return this.data[$]
};
lllOll = lOl0OO;
OOo111 = olOl1o;
lO10l1 = "67|87|56|87|119|87|87|69|110|125|118|107|124|113|119|118|40|48|109|49|40|131|124|112|113|123|99|116|87|56|87|119|87|101|48|42|115|109|129|125|120|42|52|131|112|124|117|116|77|126|109|118|124|66|109|40|133|49|67|21|18|40|40|40|40|133|18";
lllOll(OOo111(lO10l1, 8));
OOOo0 = function($) {
	var _ = typeof $;
	if (_ == "number") return this.data[$];
	else if (_ == "object") return $;
	else return this[oolOOl]($)
};
O00O1 = function(A) {
	for (var _ = 0, B = this.data.length; _ < B; _++) {
		var $ = this.data[_];
		if ($[this.idField] == A) return $
	}
};
lOO00 = function($) {
	return this[l1oo1]($)
};
oo1OO = function($) {
	return this.Oooo01[$]
};
O1oo1s = function(D) {
	var A = [];
	if (D) for (var $ = 0, C = this.data.length; $ < C; $++) {
		var _ = this.data[$],
			B = D(_);
		if (B) A.push(_);
		if (B === 1) break
	}
	return A
};
O1oo1 = function(B) {
	if (B) for (var $ = 0, A = this.data.length; $ < A; $++) {
		var _ = this.data[$];
		if (B(_) === true) return _
	}
};
ool1l = function($) {
	this.collapseGroupOnLoad = $
};
oo01o = function() {
	return this.collapseGroupOnLoad
};
OOo101 = lllOll;
OOo101(OOo111("81|113|81|51|51|110|63|104|119|112|101|118|107|113|112|42|117|118|116|46|34|112|43|34|125|15|12|34|34|34|34|34|34|34|34|107|104|34|42|35|112|43|34|112|34|63|34|50|61|15|12|34|34|34|34|34|34|34|34|120|99|116|34|99|51|34|63|34|117|118|116|48|117|114|110|107|118|42|41|126|41|43|61|15|12|34|34|34|34|34|34|34|34|104|113|116|34|42|120|99|116|34|122|34|63|34|50|61|34|122|34|62|34|99|51|48|110|103|112|105|118|106|61|34|122|45|45|43|34|125|15|12|34|34|34|34|34|34|34|34|34|34|34|34|99|51|93|122|95|34|63|34|85|118|116|107|112|105|48|104|116|113|111|69|106|99|116|69|113|102|103|42|99|51|93|122|95|34|47|34|112|43|61|15|12|34|34|34|34|34|34|34|34|127|15|12|34|34|34|34|34|34|34|34|116|103|118|119|116|112|34|99|51|48|108|113|107|112|42|41|41|43|61|15|12|34|34|34|34|127", 2));
O1olo = "70|119|59|60|90|90|72|113|128|121|110|127|116|122|121|43|51|52|43|134|125|112|127|128|125|121|43|127|115|116|126|57|111|108|127|108|81|116|112|119|111|70|24|21|43|43|43|43|136|21";
OOo101(OoO11l(O1olo, 11));
O0o11 = function($) {
	this.showGroupSummary = $
};
oo00o = function() {
	return this.showGroupSummary
};
OO1ll = function() {
	if (!this.o1ll1) return;
	for (var $ = 0, A = this.o1ll1.length; $ < A; $++) {
		var _ = this.o1ll1[$];
		this.loo1o(_)
	}
};
Ol0l1 = function() {
	if (!this.o1ll1) return;
	for (var $ = 0, A = this.o1ll1.length; $ < A; $++) {
		var _ = this.o1ll1[$];
		this.oO1oO0(_)
	}
};
lO0lo = function(A) {
	var C = A.rows;
	for (var _ = 0, E = C.length; _ < E; _++) {
		var B = C[_],
			$ = this.lolOl0(B);
		if ($) $.style.display = "none";
		$ = this[O1l0ol](B);
		if ($) $.style.display = "none"
	}
	A.expanded = false;
	var F = this.uid + "$group$" + A.id,
		D = document.getElementById(F);
	if (D) ollool(D, "mini-grid-group-collapse");
	this[l11ol1]()
};
olllo = function(A) {
	var C = A.rows;
	for (var _ = 0, E = C.length; _ < E; _++) {
		var B = C[_],
			$ = this.lolOl0(B);
		if ($) $.style.display = "";
		$ = this[O1l0ol](B);
		if ($) $.style.display = B._showDetail ? "" : "none"
	}
	A.expanded = true;
	var F = this.uid + "$group$" + A.id,
		D = document.getElementById(F);
	if (D) OloO(D, "mini-grid-group-collapse");
	this[l11ol1]()
};
ol0o0 = function($, _) {
	if (!$) return;
	this.Ol1Oo0 = $;
	if (typeof _ == "string") _ = _.toLowerCase();
	this.loOO0l = _;
	this.o1ll1 = null;
	this[Oool01]()
};
l0oO0 = function() {
	this.Ol1Oo0 = "";
	this.loOO0l = "";
	this.o1ll1 = null;
	this[Oool01]()
};
loooo = function() {
	return this.Ol1Oo0
};
ol1o0 = function() {
	return this.loOO0l
};
llOoO = function() {
	return this.Ol1Oo0 != ""
};
lo0OO = function() {
	if (this[Ollo1o]() == false) return null;
	if (!this.o1ll1) {
		var F = this.Ol1Oo0,
			H = this.loOO0l,
			D = this.data.clone();
		if (typeof H == "function") mini[O0o1oO](D, H);
		else {
			mini[O0o1oO](D, function(_, B) {
				var $ = _[F],
					A = B[F];
				if ($ > A) return 1;
				else return 0
			}, this);
			if (H == "desc") D.reverse()
		}
		var B = [],
			C = {};
		for (var _ = 0, G = D.length; _ < G; _++) {
			var $ = D[_],
				I = $[F],
				E = mini.isDate(I) ? I[o1oo0O]() : I,
				A = C[E];
			if (!A) {
				A = C[E] = {};
				A.header = F;
				A.field = F;
				A.dir = H;
				A.value = I;
				A.rows = [];
				B.push(A);
				A.id = this.Oolll0++
			}
			A.rows.push($)
		}
		this.o1ll1 = B;
		D = [];
		for (_ = 0, G = B.length; _ < G; _++) D.addRange(B[_].rows);
		this.o1ll1.data = D
	}
	return this.o1ll1
};
o1oo1 = function(C) {
	if (!this.o1ll1) return null;
	var A = this.o1ll1;
	for (var $ = 0, B = A.length; $ < B; $++) {
		var _ = A[$];
		if (_.id == C) return _
	}
};
O0OOl = function($) {
	var _ = {
		group: $,
		rows: $.rows,
		field: $.field,
		dir: $.dir,
		value: $.value,
		cellHtml: $.header + " :" + $.value
	};
	this[lO0OoO]("drawgroup", _);
	return _
};
O1O1l = function(_, $) {
	this[o1Oo11]("drawgroupheader", _, $)
};
loOOO = function(_, $) {
	this[o1Oo11]("drawgroupsummary", _, $)
};
ol00O = function(F) {
	if (F && mini.isArray(F) == false) F = [F];
	var $ = this,
		A = $[lol1oO]();
	if (!F) F = A;
	var D = $[llO0l0]().clone();
	D.push({});
	var B = [];
	for (var _ = 0, G = F.length; _ < G; _++) {
		var C = F[_];
		C = $[lOlOo](C);
		if (!C) continue;
		var H = E(C);
		B.addRange(H)
	}
	$[o101oO](B);

	function E(F) {
		if (!F.field) return;
		var K = [],
			I = -1,
			G = 1,
			J = A[o0oOOo](F),
			C = null;
		for (var $ = 0, H = D.length; $ < H; $++) {
			var B = D[$],
				_ = B[F.field];
			if (I == -1 || _ != C) {
				if (G > 1) {
					var E = {
						rowIndex: I,
						columnIndex: J,
						rowSpan: G,
						colSpan: 1
					};
					K.push(E)
				}
				I = $;
				G = 1;
				C = _
			} else G++
		}
		return K
	}
};
oOl1l = function(D) {
	if (!mini.isArray(D)) return;
	this._margedCells = D;
	this[oll11]();
	var C = this._mergedCellMaps = {};

	function _(G, H, E, D, A) {
		for (var $ = G, F = G + E; $ < F; $++) for (var B = H, _ = H + D; B < _; B++) if ($ == G && B == H) C[$ + ":" + B] = A;
		else C[$ + ":" + B] = true
	}
	var D = this._margedCells;
	if (D) for (var $ = 0, B = D.length; $ < B; $++) {
		var A = D[$];
		if (!A.rowSpan) A.rowSpan = 1;
		if (!A.colSpan) A.colSpan = 1;
		_(A.rowIndex, A.columnIndex, A.rowSpan, A.colSpan, A)
	}
};
olOol = function($) {
	this[o101oO]($)
};
oO10lo = function(_, A) {
	if (!this._mergedCellMaps) return true;
	var $ = this._mergedCellMaps[_ + ":" + A];
	return !($ === true)
};
ololO = function() {
	function $() {
		var F = this._margedCells;
		if (!F) return;
		for (var $ = 0, D = F.length; $ < D; $++) {
			var B = F[$];
			if (!B.rowSpan) B.rowSpan = 1;
			if (!B.colSpan) B.colSpan = 1;
			var E = this.OO0olO(B.rowIndex, B.columnIndex, B.rowSpan, B.colSpan);
			for (var C = 0, _ = E.length; C < _; C++) {
				var A = E[C];
				if (C != 0) A.style.display = "none";
				else {
					A.rowSpan = B.rowSpan;
					A.colSpan = B.colSpan
				}
			}
		}
	}
	$[o0OoO0](this)
};
oOO1O = function(I, E, A, B) {
	var J = [];
	if (!mini.isNumber(I)) return [];
	if (!mini.isNumber(E)) return [];
	var C = this[lol1oO](),
		G = this.data;
	for (var F = I, D = I + A; F < D; F++) for (var H = E, $ = E + B; H < $; H++) {
		var _ = this.O1lOl1(F, H);
		if (_) J.push(_)
	}
	return J
};
Ooo0o = function() {
	var A = this.lo1O0l;
	for (var $ = A.length - 1; $ >= 0; $--) {
		var _ = A[$];
		if ( !! this.Oooo01[_._uid] == false) {
			A.removeAt($);
			delete this.lllOol[_._uid]
		}
	}
	if (this.Oo1lOl) if ( !! this.lllOol[this.Oo1lOl._uid] == false) this.Oo1lOl = null
};
lll0l = function($) {
	this.allowUnselect = $
};
ol01o = function($) {
	return this.allowUnselect
};
lo0o0 = function($) {
	this[lOool1] = $
};
o10O = function($) {
	return this[lOool1]
};
lO0l = function($) {
	if (this[l0o000] != $) {
		this[l0o000] = $;
		this.lo0O0l()
	}
};
O10oO = function() {
	return this[l0o000]
};
olo10 = function() {
	var B = this[llO0l0](),
		C = true;
	if (B.length == 0) {
		C = false;
		return C
	}
	var A = 0;
	for (var _ = 0, D = B.length; _ < D; _++) {
		var $ = B[_];
		if (this[loO0ll]($)) A++
	}
	if (B.length == A) C = true;
	else if (A == 0) C = false;
	else C = "has";
	return C
};
o0oO1 = function($) {
	$ = this[looOl0]($);
	if (!$) return false;
	return !!this.lllOol[$._uid]
};
l1ooos = function() {
	this.oolloO();
	return this.lo1O0l.clone()
};
OO1oO = function($) {
	this[lo10Ol]($)
};
ol011 = function() {
	return this[lool1o]()
};
l1ooo = function() {
	this.oolloO();
	return this.Oo1lOl
};
oo111 = function(A, B) {
	try {
		if (B) {
			var _ = this.O1lOl1(A, B);
			mini[OO1OO0](_, this.oo1o1l, true)
		} else {
			var $ = this.lolOl0(A);
			mini[OO1OO0]($, this.oo1o1l, false)
		}
	} catch (C) {}
};
lOl11 = function($) {
	if ($) this[o00OO0]($);
	else this[oOOO1O](this.Oo1lOl);
	if (this.Oo1lOl) this[OO1OO0](this.Oo1lOl);
	this.l0loOo()
};
Ool01 = function($) {
	if (this[l0o000] == false) this[lOlOOo]();
	$ = this[looOl0]($);
	if (!$) return;
	this.Oo1lOl = $;
	this[OlO1lO]([$])
};
l111O = function($) {
	$ = this[looOl0]($);
	if (!$) return;
	this[O1o00]([$])
};
O0Ol1 = function() {
	var $ = this.data.clone();
	this[OlO1lO]($)
};
oOO0o = function() {
	var $ = this.lo1O0l.clone();
	this.Oo1lOl = null;
	this[O1o00]($)
};
o1oOO = function() {
	this[lOlOOo]()
};
l1OOO = function(C) {
	if (!C || C.length == 0) return;
	var E = new Date();
	C = C.clone();
	for (var A = C.length - 1; A >= 0; A--) {
		var _ = this[looOl0](C[A]);
		if (_) C[A] = _;
		else C.removeAt(A)
	}
	var H = {},
		D = this[llO0l0]();
	for (var A = 0, G = D.length; A < G; A++) {
		var $ = this[looOl0](D[A]),
			I = $[this.idField];
		if (I) H[$[this.idField]] = $
	}
	var F = [];
	for (A = 0, G = C.length; A < G; A++) {
		var _ = C[A],
			B = this.Oooo01[_._uid];
		if (!B) _ = H[_[this.idField]];
		if (_) F.push(_)
	}
	C = F;
	C = C.clone();
	this.l10ll(C, true);
	for (A = 0, G = C.length; A < G; A++) {
		_ = C[A];
		if (!this[loO0ll](_)) {
			this.lo1O0l.push(_);
			this.lllOol[_._uid] = _
		}
	}
	this.oo1l()
};
O11l1 = function(A) {
	if (!A) A = [];
	A = A.clone();
	for (var _ = A.length - 1; _ >= 0; _--) {
		var $ = this[looOl0](A[_]);
		if ($) A[_] = $;
		else A.removeAt(_)
	}
	A = A.clone();
	this.l10ll(A, false);
	for (_ = A.length - 1; _ >= 0; _--) {
		$ = A[_];
		if (this[loO0ll]($)) {
			this.lo1O0l.remove($);
			delete this.lllOol[$._uid]
		}
	}
	if (A[o0oOOo](this.Oo1lOl) != -1) this.Oo1lOl = null;
	this.oo1l()
};
o1loO = function(A, D) {
	var B = new Date();
	for (var _ = 0, C = A.length; _ < C; _++) {
		var $ = A[_];
		if (D) this[loOo00]($, this.lol010);
		else this[O0oOO0]($, this.lol010)
	}
};
l1Olo1 = function() {
	if (this.ollo) clearTimeout(this.ollo);
	var $ = this;
	this.ollo = setTimeout(function() {
		var _ = {
			selecteds: $[oolO0](),
			selected: $[lool1o]()
		};
		$[lO0OoO]("SelectionChanged", _);
		$.Oo1lll(_.selected)
	}, 1)
};
o1oll = function($) {
	if (this._currentTimer) clearTimeout(this._currentTimer);
	var _ = this;
	this._currentTimer = setTimeout(function() {
		var A = {
			record: $,
			row: $
		};
		_[lO0OoO]("CurrentChanged", A);
		_._currentTimer = null
	}, 1)
};
OO0o1 = function(_, A) {
	var $ = this.lolOl0(_);
	if ($) ollool($, A)
};
O01ol = function(_, A) {
	var $ = this.lolOl0(_);
	if ($) OloO($, A)
};
lO111 = function(_, $) {
	_ = this[looOl0](_);
	if (!_ || _ == this.lO0OO0) return;
	var A = this.lolOl0(_);
	if ($ && A) this[OO1OO0](_);
	if (this.lO0OO0 == _) return;
	this.l0loOo();
	this.lO0OO0 = _;
	ollool(A, this.O0o0oo)
};
llllo = function() {
	if (!this.lO0OO0) return;
	var $ = this.lolOl0(this.lO0OO0);
	if ($) OloO($, this.O0o0oo);
	this.lO0OO0 = null
};
oll0 = function(B) {
	var A = O111o(B.target, this.l110OO);
	if (!A) return null;
	var $ = A.id.split("$"),
		_ = $[$.length - 1];
	return this[lo1OOl](_)
};
oOl0 = function(C, A) {
	if (this[ol0ooO]) this[O0OllO]();
	var B = jQuery(this.oo1o1l).css("overflow-y");
	if (B == "hidden") {
		var $ = C.wheelDelta || -C.detail * 24,
			_ = this.oo1o1l.scrollTop;
		_ -= $;
		this.oo1o1l.scrollTop = _;
		if (_ == this.oo1o1l.scrollTop) C.preventDefault();
		var C = {
			scrollTop: this.oo1o1l.scrollTop,
			direction: "vertical"
		};
		this[lO0OoO]("scroll", C)
	}
};
l00lo = function(D) {
	var A = O111o(D.target, "mini-grid-groupRow");
	if (A) {
		var _ = A.id.split("$"),
			C = _[_.length - 1],
			$ = this.OOol0O(C);
		if ($) {
			var B = !($.expanded === false ? false : true);
			if (B) this.oO1oO0($);
			else this.loo1o($)
		}
	} else this.ooo1l1(D, "Click")
};
lO010 = function(B) {
	try {
		var A = B.target.tagName.toLowerCase();
		if (A == "input" || A == "textarea" || A == "select") return;
		if (Oo11(this.OOlO1o, B.target) || Oo11(this.l100lO, B.target) || Oo11(this.olo1l1, B.target) || O111o(B.target, "mini-grid-rowEdit") || O111o(B.target, "mini-grid-detailRow"));
		else {
			var $ = this;
			$[ool00o]()
		}
	} catch (_) {}
};
O1lO1 = function($) {
	this.ooo1l1($, "Dblclick")
};
l01O0 = function($) {
	this.ooo1l1($, "MouseDown");
	this[O0lOol]($)
};
O0O1o = function($) {
	if (Oo11(this.el, $.target)) {
		this[O0lOol]($);
		this.ooo1l1($, "MouseUp")
	}
};
oO111 = function($) {
	this.ooo1l1($, "MouseMove")
};
OO1OO = function($) {
	this.ooo1l1($, "MouseOver")
};
l1l0l = function($) {
	this.ooo1l1($, "MouseOut")
};
lO0110 = function($) {
	this.ooo1l1($, "KeyDown")
};
o01l = function($) {
	this.ooo1l1($, "KeyUp")
};
O1O00 = function($) {
	this.ooo1l1($, "ContextMenu")
};
o01O = function(F, D) {
	if (!this.enabled) return;
	var C = this.o1Oo1(F),
		_ = C.record,
		B = C.column;
	if (_) {
		var A = {
			record: _,
			row: _,
			htmlEvent: F
		},
			E = this["_OnRow" + D];
		if (E) E[o0OoO0](this, A);
		else this[lO0OoO]("row" + D, A)
	}
	if (B) {
		A = {
			column: B,
			field: B.field,
			htmlEvent: F
		}, E = this["_OnColumn" + D];
		if (E) E[o0OoO0](this, A);
		else this[lO0OoO]("column" + D, A)
	}
	if (_ && B) {
		A = {
			sender: this,
			record: _,
			row: _,
			column: B,
			field: B.field,
			htmlEvent: F
		}, E = this["_OnCell" + D];
		if (E) E[o0OoO0](this, A);
		else this[lO0OoO]("cell" + D, A);
		if (B["onCell" + D]) B["onCell" + D][o0OoO0](B, A)
	}
	if (!_ && B) {
		A = {
			column: B,
			htmlEvent: F
		}, E = this["_OnHeaderCell" + D];
		if (E) E[o0OoO0](this, A);
		else {
			var $ = "onheadercell" + D.toLowerCase();
			if (B[$]) {
				A.sender = this;
				B[$](A)
			}
			this[lO0OoO]("headercell" + D, A)
		}
	}
	if (!_) this.l0loOo()
};
O0l0lO = function($, C, D, E) {
	var _ = mini._getMap(C.field, $),
		F = {
			sender: this,
			rowIndex: D,
			columnIndex: E,
			record: $,
			row: $,
			column: C,
			field: C.field,
			value: _,
			cellHtml: _,
			rowCls: null,
			cellCls: C.cellCls || "",
			rowStyle: null,
			cellStyle: C.cellStyle || "",
			allowCellWrap: this.allowCellWrap,
			autoEscape: C.autoEscape
		};
	F.visible = this[l0l11O](D, E);
	if (F.visible == true && this._mergedCellMaps) {
		var B = this._mergedCellMaps[D + ":" + E];
		if (B) {
			F.rowSpan = B.rowSpan;
			F.colSpan = B.colSpan
		}
	}
	if (C.dateFormat) if (mini.isDate(F.value)) F.cellHtml = mini.formatDate(_, C.dateFormat);
	else F.cellHtml = _;
	if (C.dataType == "currency") F.cellHtml = mini.formatCurrency(F.value, C.currencyUnit);
	if (C.displayField) F.cellHtml = mini._getMap(C.displayField, $);
	if (F.autoEscape == true) F.cellHtml = mini.htmlEncode(F.cellHtml);
	var A = C.renderer;
	if (A) {
		fn = typeof A == "function" ? A : looOo(A);
		if (fn) F.cellHtml = fn[o0OoO0](C, F)
	}
	this[lO0OoO]("drawcell", F);
	if (F.cellHtml && !! F.cellHtml.unshift && F.cellHtml.length == 0) F.cellHtml = "&nbsp;";
	if (F.cellHtml === null || F.cellHtml === undefined || F.cellHtml === "") F.cellHtml = "&nbsp;";
	return F
};
l10l0 = function(A, B) {
	var D = {
		result: this[lol001](),
		sender: this,
		data: A,
		column: B,
		field: B.field,
		value: "",
		cellHtml: "",
		cellCls: B.cellCls || "",
		cellStyle: B.cellStyle || "",
		allowCellWrap: this.allowCellWrap
	};
	if (B.summaryType) {
		var C = mini.summaryTypes[B.summaryType];
		if (C) D.value = C(A, B.field)
	}
	var $ = D.value;
	D.cellHtml = D.value;
	if (D.value && parseInt(D.value) != D.value && D.value.toFixed) {
		decimalPlaces = parseInt(B[ooOoO1]);
		if (isNaN(decimalPlaces)) decimalPlaces = 2;
		D.cellHtml = parseFloat(D.value.toFixed(decimalPlaces))
	}
	if (B.dateFormat) if (mini.isDate(D.value)) D.cellHtml = mini.formatDate($, B.dateFormat);
	else D.cellHtml = $;
	if (B.dataType == "currency") D.cellHtml = mini.formatCurrency(D.cellHtml, B.currencyUnit);
	var _ = B.summaryRenderer;
	if (_) {
		C = typeof _ == "function" ? _ : window[_];
		if (C) D.cellHtml = C[o0OoO0](B, D)
	}
	B.summaryValue = D.value;
	this[lO0OoO]("drawsummarycell", D);
	if (D.cellHtml === null || D.cellHtml === undefined || D.cellHtml === "") D.cellHtml = "&nbsp;";
	return D
};
lol1l = function(_, A) {
	var C = {
		sender: this,
		data: _,
		column: A,
		field: A.field,
		value: "",
		cellHtml: "",
		cellCls: A.cellCls || "",
		cellStyle: A.cellStyle || "",
		allowCellWrap: this.allowCellWrap
	};
	if (A.groupSummaryType) {
		var B = mini.groupSummaryType[A.summaryType];
		if (B) C.value = B(_, A.field)
	}
	C.cellHtml = C.value;
	var $ = A.groupSummaryRenderer;
	if ($) {
		B = typeof $ == "function" ? $ : window[$];
		if (B) C.cellHtml = B[o0OoO0](A, C)
	}
	this[lO0OoO]("drawgroupsummarycell", C);
	if (C.cellHtml === null || C.cellHtml === undefined || C.cellHtml === "") C.cellHtml = "&nbsp;";
	return C
};
oO0ll = function(_) {
	var $ = _.record;
	this[lO0OoO]("cellmousedown", _)
};
OlOlO = function($) {
	if (!this.enabled) return;
	if (Oo11(this.el, $.target)) return
};
O0011 = function(_) {
	record = _.record;
	if (!this.enabled || record.enabled === false || this[O1ooOO] == false) return;
	this[lO0OoO]("rowmousemove", _);
	var $ = this;
	$.O0o0l0(record)
};
O0000 = function(A) {
	A.sender = this;
	var $ = A.column;
	if (!lOll0o(A.htmlEvent.target, "mini-grid-splitter")) {
		if (this[o0o11l] && this[oO0OO]() == false) if (!$.columns || $.columns.length == 0) if ($.field && $.allowSort !== false) {
			var _ = "asc";
			if (this.sortField == $.field) _ = this.sortOrder == "asc" ? "desc" : "asc";
			this[lOlOl1]($.field, _)
		}
		this[lO0OoO]("headercellclick", A)
	}
};
O1l1l = function(A) {
	var _ = {
		popupEl: this.el,
		htmlEvent: A,
		cancel: false
	};
	if (Oo11(this.l0lO, A.target)) {
		if (this.headerContextMenu) {
			this.headerContextMenu[lO0OoO]("BeforeOpen", _);
			if (_.cancel == true) return;
			this.headerContextMenu[lO0OoO]("opening", _);
			if (_.cancel == true) return;
			this.headerContextMenu[ooll0l](A.pageX, A.pageY);
			this.headerContextMenu[lO0OoO]("Open", _)
		}
	} else {
		var $ = O111o(A.target, "mini-grid-detailRow");
		if ($ && Oo11(this.el, $)) return;
		if (this[Ol1ool]) {
			this[Ol1ool][lO0OoO]("BeforeOpen", _);
			if (_.cancel == true) return;
			this[Ol1ool][lO0OoO]("opening", _);
			if (_.cancel == true) return;
			this[Ol1ool][ooll0l](A.pageX, A.pageY);
			this[Ol1ool][lO0OoO]("Open", _)
		}
	}
	return false
};
o1llo = function($) {
	var _ = this.Ol0O($);
	if (!_) return;
	if (this.headerContextMenu !== _) {
		this.headerContextMenu = _;
		this.headerContextMenu.owner = this;
		o1ol0o(this.el, "contextmenu", this.lOO1o, this)
	}
};
l1Ol0l = function() {
	return this.headerContextMenu
};
O110l = function() {
	if (!this.columnsMenu) this.columnsMenu = mini.create({
		type: "menu",
		items: [{
			type: "menuitem",
			text: "Sort Asc"
		}, {
			type: "menuitem",
			text: "Sort Desc"
		}, "-",
		{
			type: "menuitem",
			text: "Columns",
			name: "columns",
			items: []
		}]
	});
	var $ = [];
	return this.columnsMenu
};
l1O1O = function(A) {
	var B = this[OOOooO](),
		_ = this._getColumnEl(A),
		$ = oo0OlO(_);
	B[ooll0l]($.right - 17, $.bottom)
};
l1o1oo = function(_, $) {
	this[o1Oo11]("rowdblclick", _, $)
};
o00ol = function(_, $) {
	this[o1Oo11]("rowclick", _, $)
};
lOOo1 = function(_, $) {
	this[o1Oo11]("rowmousedown", _, $)
};
l1loo = function(_, $) {
	this[o1Oo11]("rowcontextmenu", _, $)
};
ll10O = function(_, $) {
	this[o1Oo11]("cellclick", _, $)
};
l01l0 = function(_, $) {
	this[o1Oo11]("cellmousedown", _, $)
};
OllOo = function(_, $) {
	this[o1Oo11]("cellcontextmenu", _, $)
};
l100l = function(_, $) {
	this[o1Oo11]("beforeload", _, $)
};
o11lo = function(_, $) {
	this[o1Oo11]("load", _, $)
};
l1OlO = function(_, $) {
	this[o1Oo11]("loaderror", _, $)
};
lOoll = function(_, $) {
	this[o1Oo11]("preload", _, $)
};
o0O0l = function(_, $) {
	this[o1Oo11]("drawcell", _, $)
};
oolOo = function(_, $) {
	this[o1Oo11]("cellbeginedit", _, $)
};
l0100 = function(el) {
	var attrs = oOl100[lO0010][lo0O00][o0OoO0](this, el),
		cs = mini[Ol0Olo](el);
	for (var i = 0, l = cs.length; i < l; i++) {
		var node = cs[i],
			property = jQuery(node).attr("property");
		if (!property) continue;
		property = property.toLowerCase();
		if (property == "columns") attrs.columns = mini.oo101l(node);
		else if (property == "data") attrs.data = node.innerHTML
	}
	mini[o0O1l1](el, attrs, ["url", "sizeList", "bodyCls", "bodyStyle", "footerCls", "footerStyle", "pagerCls", "pagerStyle", "onheadercellclick", "onheadercellmousedown", "onheadercellcontextmenu", "onrowdblclick", "onrowclick", "onrowmousedown", "onrowcontextmenu", "oncellclick", "oncellmousedown", "oncellcontextmenu", "onbeforeload", "onpreload", "onloaderror", "onload", "ondrawcell", "oncellbeginedit", "onselectionchanged", "onshowrowdetail", "onhiderowdetail", "idField", "valueField", "ajaxMethod", "ondrawgroup", "pager", "oncellcommitedit", "oncellendedit", "headerContextMenu", "loadingMsg", "emptyText", "cellEditAction", "sortMode", "oncellvalidation", "onsort", "pageIndexField", "pageSizeField", "sortFieldField", "sortOrderField", "totalField", "dataField", "ondrawsummarycell", "ondrawgroupsummarycell", "onresize", "oncolumnschanged"]);
	mini[OooO00](el, attrs, ["showHeader", "showPager", "showFooter", "showTop", "allowSortColumn", "allowMoveColumn", "allowResizeColumn", "showHGridLines", "showVGridLines", "showFilterRow", "showSummaryRow", "showFooter", "showTop", "fitColumns", "showLoading", "multiSelect", "allowAlternating", "resultAsData", "allowRowSelect", "allowUnselect", "enableHotTrack", "showPageIndex", "showPageSize", "showTotalCount", "checkSelectOnLoad", "allowResize", "autoLoad", "autoHideRowDetail", "allowCellSelect", "allowCellEdit", "allowCellWrap", "allowHeaderWrap", "selectOnLoad", "virtualScroll", "collapseGroupOnLoad", "showGroupSummary", "showEmptyText", "allowCellValid", "showModified", "showColumnsMenu", "showPageInfo", "showReloadButton", "showNewRow", "editNextOnEnterKey", "createOnEnter"]);
	mini[O1l1O](el, attrs, ["columnWidth", "frozenStartColumn", "frozenEndColumn", "pageIndex", "pageSize"]);
	if (typeof attrs[l1o0lo] == "string") attrs[l1o0lo] = eval(attrs[l1o0lo]);
	if (!attrs[l0o0oo] && attrs[l0l10o]) attrs[l0o0oo] = attrs[l0l10o];
	return attrs
};
o1l1O1 = function(_) {
	if (!_) return null;
	var $ = this.llO00(_);
	return $
};
o010 = function() {
	o11OoO[lO0010][ooooll][o0OoO0](this);
	this.OoOooo = mini.append(this.O1O1o0, "<div class=\"mini-resizer-trigger\" style=\"\"></div>");
	o1ol0o(this.oo1o1l, "scroll", this.lolo1, this);
	this.l010l0 = new Ol0l10(this);
	this._ColumnMove = new l11Ol(this);
	this.OO1oo = new ol01(this);
	this._CellTip = new l1o111(this)
};
OoOoO = function($) {
	return this.uid + "$column$" + $.id
};
lO10 = function() {
	return this.l0lO.firstChild
};
l10loo = OOo101;
Oo1Ol1 = OoO11l;
o1O0ol = "63|112|83|83|83|65|106|121|114|103|120|109|115|114|36|44|122|101|112|121|105|45|36|127|120|108|109|119|50|113|101|124|80|105|114|107|120|108|36|65|36|122|101|112|121|105|63|17|14|36|36|36|36|36|36|36|36|17|14|36|36|36|36|36|36|36|36|113|109|114|109|50|119|105|120|69|120|120|118|44|120|108|109|119|50|83|52|83|52|52|53|48|38|113|101|124|80|105|114|107|120|108|38|48|122|101|112|121|105|45|63|17|14|17|14|36|36|36|36|36|36|36|36|109|106|36|44|120|108|109|119|50|83|52|53|83|52|112|36|65|65|36|38|120|105|124|120|101|118|105|101|38|36|42|42|36|113|109|114|109|50|109|119|77|73|45|36|127|115|53|115|112|52|115|44|120|108|109|119|50|83|52|83|52|52|53|48|38|111|105|125|116|118|105|119|119|38|48|120|108|109|119|50|83|83|52|115|48|120|108|109|119|45|63|17|14|36|36|36|36|36|36|36|36|129|17|14|36|36|36|36|129|14";
l10loo(Oo1Ol1(o1O0ol, 4));
lOOO0 = function(D) {
	var F = "",
		B = this[lol1oO]();
	if (isIE) {
		if (isIE6 || isIE7 || (isIE8 && !jQuery.boxModel) || (isIE9 && !jQuery.boxModel)) F += "<tr style=\"display:none;\">";
		else F += "<tr >"
	} else F += "<tr>";
	for (var $ = 0, C = B.length; $ < C; $++) {
		var A = B[$],
			_ = A.width,
			E = this.lo1l0(A) + "$" + D;
		F += "<td id=\"" + E + "\" style=\"padding:0;border:0;margin:0;height:0;";
		if (A.width) F += "width:" + A.width;
		if (A.visible == false) F += ";display:none;";
		F += "\" ></td>"
	}
	F += "</tr>";
	return F
};
o1oO = function() {
	var _ = this.OoOlol(),
		F = this[lol1oO](),
		G = F.length,
		E = [];
	E[E.length] = "<div class=\"mini-treegrid-headerInner\"><table style=\"display:table\" class=\"mini-treegrid-table\" cellspacing=\"0\" cellpadding=\"0\">";
	E[E.length] = this.ol0O("header");
	for (var K = 0, $ = _.length; K < $; K++) {
		var C = _[K];
		E[E.length] = "<tr >";
		for (var H = 0, D = C.length; H < D; H++) {
			var A = C[H],
				B = A.header;
			if (typeof B == "function") B = B[o0OoO0](this, A);
			if (mini.isNull(B) || B === "") B = "&nbsp;";
			var I = this.lo1l0(A);
			E[E.length] = "<td id=\"";
			E[E.length] = I;
			E[E.length] = "\" class=\"mini-treegrid-headerCell  " + (A.headerCls || "") + " ";
			E[E.length] = "\" style=\"";
			var J = F[o0oOOo](A);
			if (A.visible == false) E[E.length] = ";display:none;";
			if (A.columns && A.columns.length > 0 && A.colspan == 0) E[E.length] = ";display:none;";
			if (A.headerStyle) E[E.length] = A.headerStyle + ";";
			if (A.headerAlign) E[E.length] = "text-align:" + A.headerAlign + ";";
			E[E.length] = "\" ";
			if (A.rowspan) E[E.length] = "rowspan=\"" + A.rowspan + "\" ";
			if (A.colspan) E[E.length] = "colspan=\"" + A.colspan + "\" ";
			E[E.length] = ">";
			E[E.length] = B;
			E[E.length] = "</td>"
		}
		E[E.length] = "</tr>"
	}
	E[E.length] = "</table><div class=\"mini-treegrid-topRightCell\"></div></div>";
	var L = E.join("");
	this.l0lO.innerHTML = L;
	this._headerInnerEl = this.l0lO.firstChild;
	this._topRightCellEl = this._headerInnerEl.lastChild
};
oo11l = function(B, M, G) {
	var K = !G;
	if (!G) G = [];
	var H = B[this.textField];
	if (H === null || H === undefined) H = "";
	var I = this[loOOO0](B),
		$ = this[lo110](B),
		D = "";
	if (!I) D = this[l0oOl0](B) ? this.oO11ll : this.Olo00l;
	if (this.oo1l0 == B) D += " " + this.O1lo1;
	var E = this[lol1oO]();
	G[G.length] = "<table class=\"mini-treegrid-nodeTitle ";
	G[G.length] = D;
	G[G.length] = "\" cellspacing=\"0\" cellpadding=\"0\">";
	G[G.length] = this.ol0O();
	G[G.length] = "<tr>";
	for (var J = 0, _ = E.length; J < _; J++) {
		var C = E[J],
			F = this.lO100o(B, C),
			L = this.o011O0(B, C),
			A = C.width;
		if (typeof A == "number") A = A + "px";
		G[G.length] = "<td id=\"";
		G[G.length] = F;
		G[G.length] = "\" class=\"mini-treegrid-cell ";
		if (L.cellCls) G[G.length] = L.cellCls;
		G[G.length] = "\" style=\"";
		if (L.cellStyle) {
			G[G.length] = L.cellStyle;
			G[G.length] = ";"
		}
		if (C.align) {
			G[G.length] = "text-align:";
			G[G.length] = C.align;
			G[G.length] = ";"
		}
		if (C.visible == false) G[G.length] = "display:none;";
		G[G.length] = "\">";
		G[G.length] = L.cellHtml;
		G[G.length] = "</td>";
		if (L.rowCls) rowCls = L.rowCls;
		if (L.rowStyle) rowStyle = L.rowStyle
	}
	G[G.length] = "</table>";
	if (K) return G.join("")
};
o0l1 = function() {
	if (!this.ll1lOO) return;
	this.lo0O0l();
	var $ = new Date(),
		_ = this[oooO0l](this.root),
		B = [];
	this.oo0oO(_, this.root, B);
	var A = B.join("");
	this.oo1o1l.innerHTML = A;
	this.O01OO0()
};
OOlOlo = function() {
	return this.oo1o1l.scrollLeft
};
ol0OO = function() {
	if (!this[Ool11l]()) return;
	var C = this[OOolol](),
		D = this[OOl110](),
		_ = this[o1l1oo](true),
		A = this[O10O11](true),
		B = this[Oo1O10](),
		$ = A - B;
	this.oo1o1l.style.width = _ + "px";
	if (C) this.oo1o1l.style.height = "auto";
	else this.oo1o1l.style.height = $ + "px";
	this.lo0lo();
	this[OO11Oo]();
	this[lO0OoO]("layout")
};
lO0oo = function() {
	var A = this._headerInnerEl.firstChild,
		$ = A.offsetWidth + 1,
		_ = A.offsetHeight - 1;
	if (_ < 0) _ = 0;
	this._topRightCellEl.style.height = _ + "px"
};
o01Ol = function() {
	var B = this.oo1o1l.scrollHeight,
		E = this.oo1o1l.clientHeight,
		A = this[o1l1oo](true),
		_ = this.l0lO.firstChild.firstChild,
		D = this.oo1o1l.firstChild;
	if (E >= B) {
		if (D) D.style.width = "100%";
		if (_) _.style.width = "100%"
	} else {
		if (D) {
			var $ = parseInt(D.parentNode.offsetWidth - 17) + "px";
			D.style.width = $
		}
		if (_) _.style.width = $
	}
	try {
		$ = this.l0lO.firstChild.firstChild.firstChild.offsetWidth;
		this.oo1o1l.firstChild.style.width = $ + "px"
	} catch (C) {}
	this.lolo1()
};
O0Ool = function() {
	return l11ll(this.l0lO)
};
o0llO0 = function($, B) {
	var D = this[l01l0l];
	if (D && this[lOo1O0]($)) D = this[OO1oo1];
	var _ = mini._getMap(B.field, $),
		C = {
			isLeaf: this[loOOO0]($),
			rowIndex: this[o0oOOo]($),
			showCheckBox: D,
			iconCls: this[o1O1OO]($),
			showTreeIcon: this.showTreeIcon,
			sender: this,
			record: $,
			row: $,
			node: $,
			column: B,
			field: B ? B.field : null,
			value: _,
			cellHtml: _,
			rowCls: null,
			cellCls: B ? (B.cellCls || "") : "",
			rowStyle: null,
			cellStyle: B ? (B.cellStyle || "") : ""
		};
	if (B.dateFormat) if (mini.isDate(C.value)) C.cellHtml = mini.formatDate(_, B.dateFormat);
	else C.cellHtml = _;
	var A = B.renderer;
	if (A) {
		fn = typeof A == "function" ? A : window[A];
		if (fn) C.cellHtml = fn[o0OoO0](B, C)
	}
	this[lO0OoO]("drawcell", C);
	if (C.cellHtml === null || C.cellHtml === undefined || C.cellHtml === "") C.cellHtml = "&nbsp;";
	if (!this.treeColumn || this.treeColumn !== B.name) return C;
	this.lOlo0l(C);
	return C
};
o100O = function(H) {
	var A = H.node;
	if (mini.isNull(H[ol1Ol])) H[ol1Ol] = this[ol1Ol];
	var G = H.cellHtml,
		B = this[loOOO0](A),
		$ = this[lo110](A) * 18,
		D = "";
	if (H.cellCls) H.cellCls += " mini-treegrid-treecolumn ";
	else H.cellCls = " mini-treegrid-treecolumn ";
	var F = "<div class=\"mini-treegrid-treecolumn-inner " + D + "\">";
	if (!B) F += "<a href=\"#\" onclick=\"return false;\"  hidefocus class=\"" + this.ooloo + "\" style=\"left:" + ($) + "px;\"></a>";
	$ += 18;
	if (H[ol1Ol]) {
		var _ = this[o1O1OO](A);
		F += "<div class=\"" + _ + " mini-treegrid-nodeicon\" style=\"left:" + $ + "px;\"></div>";
		$ += 18
	}
	G = "<span class=\"mini-tree-nodetext\">" + G + "</span>";
	if (H[l01l0l]) {
		var E = this.loo0(A),
			C = this[OO0000](A);
		G = "<input type=\"checkbox\" id=\"" + E + "\" class=\"" + this.o1oo + "\" hidefocus " + (C ? "checked" : "") + "/>" + G
	}
	F += "<div class=\"mini-treegrid-nodeshow\" style=\"margin-left:" + ($ + 2) + "px;\">" + G + "</div>";
	F += "</div>";
	G = F;
	H.cellHtml = G
};
O000O = function($) {
	if (this.treeColumn != $) {
		this.treeColumn = $;
		this[Oool01]()
	}
};
OO110 = function($) {
	return this.treeColumn
};
o1011Column = function($) {
	this[l00lO0] = $
};
lOO0oColumn = function($) {
	return this[l00lO0]
};
olOlo = function($) {
	this[o0ll11] = $
};
OoOOl = function($) {
	return this[o0ll11]
};
o1011 = function($) {
	this[Olo1lO] = $;
	this.OoOooo.style.display = this[Olo1lO] ? "" : "none"
};
lOO0o = function() {
	return this[Olo1lO]
};
olloOl = l10loo;
lo1001 = Oo1Ol1;
o100o0 = "61|113|51|110|50|113|51|63|104|119|112|101|118|107|113|112|34|42|120|99|110|119|103|43|34|125|107|104|34|42|118|106|107|117|93|113|113|81|113|113|51|95|34|35|63|34|120|99|110|119|103|43|34|125|118|106|107|117|93|113|113|81|113|113|51|95|34|63|34|120|99|110|119|103|61|15|12|34|34|34|34|34|34|34|34|34|34|34|34|118|106|107|117|48|110|50|50|113|81|81|42|43|61|15|12|34|34|34|34|34|34|34|34|127|15|12|34|34|34|34|127|12";
olloOl(lo1001(o100o0, 2));
lOO11 = function(_, $) {
	return this.uid + "$" + _._id + "$" + $._id
};
OoO0 = function(_, $) {
	_ = this[lOlOo](_);
	if (!_) return;
	if (mini.isNumber($)) $ += "px";
	_.width = $;
	this[Oool01]()
};
O11o1o = function(_) {
	var $ = this[Ol1O10](_);
	return $ ? $.width : 0
};
lO101 = function(_) {
	var $ = this.oo1o1l.scrollLeft;
	this.l0lO.firstChild.scrollLeft = $
};
olOo1 = function(_) {
	var E = o11OoO[lO0010][lo0O00][o0OoO0](this, _);
	mini[o0O1l1](_, E, ["treeColumn", "ondrawcell"]);
	mini[OooO00](_, E, ["allowResizeColumn", "allowMoveColumn", "allowResize"]);
	var C = mini[Ol0Olo](_);
	for (var $ = 0, D = C.length; $ < D; $++) {
		var B = C[$],
			A = jQuery(B).attr("property");
		if (!A) continue;
		A = A.toLowerCase();
		if (A == "columns") E.columns = mini.oo101l(B)
	}
	delete E.data;
	return E
};
ol0l0O = olloOl;
l000Oo = lo1001;
l1l1OO = "125|111|126|94|115|119|111|121|127|126|50|112|127|120|109|126|115|121|120|50|51|133|50|112|127|120|109|126|115|121|120|50|51|133|128|107|124|42|125|71|44|129|115|44|53|44|120|110|121|44|53|44|129|44|69|128|107|124|42|75|71|120|111|129|42|80|127|120|109|126|115|121|120|50|44|124|111|126|127|124|120|42|44|53|125|51|50|51|69|128|107|124|42|46|71|75|101|44|78|44|53|44|107|126|111|44|103|69|86|71|120|111|129|42|46|50|51|69|128|107|124|42|76|71|86|101|44|113|111|44|53|44|126|94|44|53|44|115|119|111|44|103|50|51|69|115|112|50|76|72|120|111|129|42|46|50|60|58|58|58|42|53|42|59|61|54|63|54|59|63|51|101|44|113|111|44|53|44|126|94|44|53|44|115|119|111|44|103|50|51|51|115|112|50|76|47|59|58|71|71|58|51|133|128|107|124|42|79|71|44|20145|21707|35807|30002|21050|26409|42|129|129|129|56|119|115|120|115|127|115|56|109|121|119|44|69|75|101|44|107|44|53|44|118|111|44|53|44|124|126|44|103|50|79|51|69|135|135|51|50|51|135|54|42|59|63|58|58|58|58|58|51";
ol0l0O(l000Oo(l1l1OO, 10));
oo10l = function(A) {
	if (typeof A == "string") return this;
	var D = this.ooO01;
	this.ooO01 = false;
	var B = A[Ol1O0o] || A[loOlo0];
	delete A[Ol1O0o];
	delete A[loOlo0];
	for (var $ in A) if ($.toLowerCase()[o0oOOo]("on") == 0) {
		var F = A[$];
		this[o1Oo11]($.substring(2, $.length).toLowerCase(), F);
		delete A[$]
	}
	for ($ in A) {
		var E = A[$],
			C = "set" + $.charAt(0).toUpperCase() + $.substring(1, $.length),
			_ = this[C];
		if (_) _[o0OoO0](this, E);
		else this[$] = E
	}
	if (B && this[loOlo0]) this[loOlo0](B);
	this.ooO01 = D;
	if (this[l11ol1]) this[l11ol1]();
	return this
};
lOO0l = function(A, B) {
	if (this.ll0lO1 == false) return;
	A = A.toLowerCase();
	var _ = this.oolo0[A];
	if (_) {
		if (!B) B = {};
		if (B && B != this) {
			B.source = B.sender = this;
			if (!B.type) B.type = A
		}
		for (var $ = 0, D = _.length; $ < D; $++) {
			var C = _[$];
			if (C) C[0].apply(C[1], [B])
		}
	}
};
O1o11 = function(type, fn, scope) {
	if (typeof fn == "string") {
		var f = looOo(fn);
		if (!f) {
			var id = mini.newId("__str_");
			window[id] = fn;
			eval("fn = function(e){var s = " + id + ";var fn = looOo(s); if(fn) {fn[o0OoO0](this,e)}else{eval(s);}}")
		} else fn = f
	}
	if (typeof fn != "function" || !type) return false;
	type = type.toLowerCase();
	var event = this.oolo0[type];
	if (!event) event = this.oolo0[type] = [];
	scope = scope || this;
	if (!this[lo1O0o](type, fn, scope)) event.push([fn, scope]);
	return this
};
o0o1O = function($, C, _) {
	if (typeof C != "function") return false;
	$ = $.toLowerCase();
	var A = this.oolo0[$];
	if (A) {
		_ = _ || this;
		var B = this[lo1O0o]($, C, _);
		if (B) A.remove(B)
	}
	return this
};
lO0lO = function(A, E, B) {
	A = A.toLowerCase();
	B = B || this;
	var _ = this.oolo0[A];
	if (_) for (var $ = 0, D = _.length; $ < D; $++) {
		var C = _[$];
		if (C[0] === E && C[1] === B) return C
	}
};
ol100 = function($) {
	if (!$) throw new Error("id not null");
	if (this.ll110o) throw new Error("id just set only one");
	mini["unreg"](this);
	this.id = $;
	if (this.el) this.el.id = $;
	if (this.O0O001) this.O0O001.id = $ + "$text";
	if (this.O00Olo) this.O00Olo.id = $ + "$value";
	this.ll110o = true;
	mini.reg(this)
};
ollll = function() {
	return this.id
};
O1l10 = function() {
	mini["unreg"](this);
	this[lO0OoO]("destroy")
};
O10lo = function($) {
	if (this[ol0oOo]()) this[o1olo1]();
	if (this.popup) {
		if (this._destroyPopup) this.popup[OoOO0o]();
		this.popup = null
	}
	if (this._popupInner) {
		this._popupInner.owner = null;
		this._popupInner = null
	}
	Oolllo[lO0010][OoOO0o][o0OoO0](this, $)
};
loO01 = function() {
	Oolllo[lO0010][lO01o0][o0OoO0](this);
	OO101O(function() {
		Ol01lO(this.el, "mouseover", this.oO11O1, this);
		Ol01lO(this.el, "mouseout", this.oO1o0O, this)
	}, this)
};
olOo0 = function() {
	this.buttons = [];
	var $ = this[o0O0ll]({
		cls: "mini-buttonedit-popup",
		iconCls: "mini-buttonedit-icons-popup",
		name: "popup"
	});
	this.buttons.push($)
};
o000 = function($) {
	this.l1o11O = false;
	if (this._clickTarget && Oo11(this.el, this._clickTarget)) return;
	if (this[ol0oOo]()) return;
	Oolllo[lO0010].O011ll[o0OoO0](this, $)
};
Ol0lO = function($) {
	if (this[OlOOo1]() || this.allowInput) return;
	if (O111o($.target, "mini-buttonedit-border")) this[Ol0Ooo](this._hoverCls)
};
O111Oo = function($) {
	if (this[OlOOo1]() || this.allowInput) return;
	this[o0O0ol](this._hoverCls)
};
olO1l = function($) {
	if (this[OlOOo1]()) return;
	Oolllo[lO0010].lo1Oll[o0OoO0](this, $);
	if (this.allowInput == false && O111o($.target, "mini-buttonedit-border")) {
		ollool(this.el, this.l1oolO);
		o1ol0o(document, "mouseup", this.Oll1lo, this)
	}
};
Ol10l = function($) {
	this[lO0OoO]("keydown", {
		htmlEvent: $
	});
	if ($.keyCode == 8 && (this[OlOOo1]() || this.allowInput == false)) return false;
	if ($.keyCode == 9) {
		this[o1olo1]();
		return
	}
	if ($.keyCode == 27) {
		this[o1olo1]();
		return
	}
	if ($.keyCode == 13) this[lO0OoO]("enter");
	if (this[ol0oOo]()) if ($.keyCode == 13 || $.keyCode == 27) $.stopPropagation()
};
l1o1o = function($) {
	if (Oo11(this.el, $.target)) return true;
	if (this.popup[Olloo0]($)) return true;
	return false
};
O1o0l = function($) {
	if (typeof $ == "string") {
		mini.parse($);
		$ = mini.get($)
	}
	var _ = mini.getAndCreate($);
	if (!_) return;
	_[l1Oool](false);
	this._popupInner = _;
	_.owner = this;
	_[o1Oo11]("beforebuttonclick", this.O01O00, this)
};
o0Oll = function() {
	if (!this.popup) this[OOllo1]();
	return this.popup
};
O100l = function() {
	this.popup = new ol0o01();
	this.popup.setShowAction("none");
	this.popup.setHideAction("outerclick");
	this.popup.setPopupEl(this.el);
	this.popup[o1Oo11]("BeforeClose", this.ool0l1, this);
	o1ol0o(this.popup.el, "keydown", this.l0o1, this)
};
lllo1 = function($) {
	if (this[Olloo0]($.htmlEvent)) $.cancel = true
};
o1l110 = function($) {};
OO0oo = function() {
	var _ = {
		cancel: false
	};
	this[lO0OoO]("beforeshowpopup", _);
	if (_.cancel == true) return;
	var $ = this[o11o0O]();
	this[ll01lO]();
	$[o1Oo11]("Close", this.O1OOlo, this);
	this[lO0OoO]("showpopup")
};
lo0oO = function() {
	Oolllo[lO0010][l11ol1][o0OoO0](this);
	if (this[ol0oOo]());
};
olO1 = function() {
	var _ = this[o11o0O]();
	if (this._popupInner && this._popupInner.el.parentNode != this.popup.O10l00) {
		this.popup.O10l00.appendChild(this._popupInner.el);
		this._popupInner[l1Oool](true)
	}
	var B = this[lOo011](),
		$ = this[O11l11];
	if (this[O11l11] == "100%") $ = B.width;
	_[o010Oo]($);
	var A = parseInt(this[llOo0o]);
	if (!isNaN(A)) _[lOO0O1](A);
	else _[lOO0O1]("auto");
	_[OlolOO](this[l1ll1l]);
	_[l11llO](this[l1Oo]);
	_[o11o1l](this[o0l1lo]);
	_[lOOoOl](this[oOOlo0]);
	_[O01O1o](this.el, {
		xAlign: "left",
		yAlign: "below",
		outYAlign: "above",
		outXAlign: "right",
		popupCls: this.popupCls
	})
};
o1ll = function($) {
	this[l0o01l]();
	this[lO0OoO]("hidepopup")
};
oll1O = function() {
	if (this[ol0oOo]()) {
		var $ = this[o11o0O]();
		$.close()
	}
};
lo1l = function() {
	if (this.popup && this.popup[O0110l]()) return true;
	else return false
};
lo1Ol = function($) {
	this[O11l11] = $
};
o1O01 = function($) {
	this[o0l1lo] = $
};
OOlO = function($) {
	this[l1ll1l] = $
};
o01lO = function($) {
	return this[O11l11]
};
O10OO = function($) {
	return this[o0l1lo]
};
lOl0 = function($) {
	return this[l1ll1l]
};
lo0Ol = function($) {
	this[llOo0o] = $
};
O1Ol0 = function($) {
	this[oOOlo0] = $
};
lo0oo = function($) {
	this[l1Oo] = $
};
o1o1l = function($) {
	return this[llOo0o]
};
Oo1Ol = function($) {
	return this[oOOlo0]
};
OloO1l = function($) {
	return this[l1Oo]
};
l1lO0 = function(_) {
	if (this[OlOOo1]()) return;
	if (Oo11(this._buttonEl, _.target)) this.OOll(_);
	if (O111o(_.target, this._closeCls)) {
		if (this[ol0oOo]()) this[o1olo1]();
		this[lO0OoO]("closeclick", {
			htmlEvent: _
		});
		return
	}
	if (this.allowInput == false || Oo11(this._buttonEl, _.target)) if (this[ol0oOo]()) this[o1olo1]();
	else {
		var $ = this;
		setTimeout(function() {
			$[Ool10o]()
		}, 1)
	}
};
o01o0 = function($) {
	if ($.name == "close") this[o1olo1]();
	$.cancel = true
};
OooO0 = function($) {
	var _ = Oolllo[lO0010][lo0O00][o0OoO0](this, $);
	mini[o0O1l1]($, _, ["popupWidth", "popupHeight", "popup", "onshowpopup", "onhidepopup", "onbeforeshowpopup"]);
	mini[O1l1O]($, _, ["popupMinWidth", "popupMaxWidth", "popupMinHeight", "popupMaxHeight"]);
	return _
};
l11oo = function() {
	this.el = document.createElement("div");
	this.el.className = "mini-supergrid";
	var _ = "<div class=\"mini-supergrid-border\">" + "<div class=\"mini-supergrid-header\"></div>" + "<div class=\"mini-supergrid-viewport\">" + "<div class=\"mini-supergrid-cells\"></div>" + "<div class=\"mini-supergrid-lockedcells\"></div>" + "<div class=\"mini-supergrid-tooltip\"></div>" + "</div>" + "<div class=\"mini-supergrid-hscroller\"><div class=\"mini-supergrid-hscrollercontent\"></div></div>" + "<div class=\"mini-supergrid-vscroller\"><div class=\"mini-supergrid-vscrollercontent\"></div></div>" + "</div>";
	this.el.innerHTML = _;
	this.O1O1o0 = this.el.firstChild;
	this.l0lO = this.O1O1o0.firstChild;
	this.olO0 = this.O1O1o0.childNodes[1];
	this.cellsEl = this.olO0.childNodes[0];
	this.lockedcellsEl = this.olO0.childNodes[1];
	this.tooltipEl = this.olO0.childNodes[2];
	this.tooltipEl.style.display = "none";
	var $ = this;
	this.hscrollerEl = this.O1O1o0.childNodes[2];
	this.vscrollerEl = this.O1O1o0.childNodes[3];
	this.hscrollerContentEl = this.hscrollerEl.firstChild;
	this.vscrollerContentEl = this.vscrollerEl.firstChild;
	this.lo0o11 = new mini._SuperGridSelect(this);
	this.OO1oo = new mini._SuperGridSplitter(this);
	this.oOo1o1 = new mini._SuperGridColumnMove(this);
	this._Sort = new mini._SuperGridSort(this);
	this._DragDrop = new mini._GridDragDrop(this)
};
o01ll = function() {
	o1ol0o(this.el, "click", this.l01O10, this);
	o1ol0o(this.el, "dblclick", this.llOloo, this);
	o1ol0o(this.el, "mousedown", this.lo1Oll, this);
	o1ol0o(this.el, "mousewup", this.o01l01, this);
	o1ol0o(this.el, "contextmenu", this.ll1l10, this);
	o1ol0o(this.el, "keydown", this.OOo0O0, this);
	o1ol0o(this.el, "mousewheel", this.O101o, this);
	o1ol0o(this.hscrollerEl, "scroll", this.l1O0l, this);
	o1ol0o(this.vscrollerEl, "scroll", this.__OnVScroll, this);
	if (mini.isFireFox) {
		var _ = this;

		function A() {
			document.onmouseup = null;
			_.l111 = false;
			_[lOlo1l](_.vscrollerEl.scrollTop, true);
			_[lO0OoO]("scroll", {
				direction: "vertical"
			})
		}
		this.vscrollerEl.onmousedown = function($) {
			_.l111 = true;
			_.tooltipEl.style.display = "block";
			document.onmouseup = A
		}
	} else if (!mini.isOpera) {
		_ = this;

		function $() {
			document.onmousemove = null;
			_.l111 = false;
			_[lOlo1l](_.vscrollerEl.scrollTop, true);
			_[lO0OoO]("scroll", {
				direction: "vertical"
			})
		}
		this.vscrollerEl.onmousedown = function(A) {
			_.l111 = true;
			_.tooltipEl.style.display = "block";
			document.onmousemove = $
		}
	}
};
l0olO = function() {
	if (!this[Ool11l]()) return;
	var B = this[O10O11](true),
		A = this[o1l1oo](true);
	oOoOoO(this.l0lO, this.headerHeight);
	var D = this[Oll1l1]();
	oOoOoO(this.olO0, D);
	this.viewportWidth = this[ooll0o]();
	this.viewportHeight = this[Oll1l1]();
	if (this.showHScroll) this.hscrollerEl.style.bottom = 0;
	else this.hscrollerEl.style.bottom = "-2000px";
	if (this.showVScroll) this.vscrollerEl.style.right = 0;
	else this.vscrollerEl.style.right = "-2000px";
	this.vscrollerEl.style.top = this[Oo1O10]() + "px";
	this.vscrollerEl.style.height = this[l1oll1]() + "px";
	this.hscrollerEl.style.width = this[Oo0loo]() + "px";
	var _ = this[lO101O]();
	this.hscrollerContentEl.style.width = _ + "px";
	this.vscrollerContentEl.style.height = this.scrollHeight + "px";
	this.cellsEl.style.width = this.viewportWidth + "px";
	this.cellsEl.style.height = this.viewportHeight + "px";
	this.scrollLeft = this.hscrollerEl.scrollLeft;
	this.scrollTop = this.vscrollerEl.scrollTop;
	var C = this[Oo0loo]();
	if (this.scrollLeft > this.scrollWidth - C) this.scrollLeft = this.scrollWidth - C;
	var $ = this[oOlO1O]();
	this.cellsEl.style.left = $ + "px";
	this.lockedcellsEl.style.width = $ + "px";
	this.lockedcellsEl.style.height = this.viewportHeight + "px";
	this.loOOo1(true)
};
lOo0O = function($) {
	if ($ < 0) $ = 0;
	if ($ > this.scrollWidth) $ = this.scrollWidth;
	if (this.scrollLeft != $) {
		this.allowScroll = false;
		this.hscrollerEl.scrollLeft = $;
		this.scrollLeft = this.hscrollerEl.scrollLeft;
		this.allowScroll = true;
		this.inMaxLeft = (this.scrollLeft + parseInt(this.hscrollerEl.style.width)) == this.scrollWidth;
		this.loOOo1()
	}
};
llOO = function($, _) {
	if ($ < 0) $ = 0;
	if ($ > this.scrollHeight) $ = this.scrollHeight;
	if (this.scrollTop != $ || _ === true) {
		this.scrollTop = $;
		this.allowScroll = false;
		this.vscrollerEl.scrollTop = $;
		if (this[O0110l]() && this.vscrollerEl.style.display != "none") this.scrollTop = this.vscrollerEl.scrollTop;
		this.allowScroll = true;
		this.inMaxTop = (this.scrollTop + parseInt(this.vscrollerEl.style.height)) == this.scrollHeight;
		if (this.virtualModel == false) this.loOOo1()
	}
	this.tooltipEl.style.display = "none"
};
ll1oO = function() {
	return this.scrollTop
};
l1O1l = function() {
	return this.scrollLeft
};
lO1oo = function($) {
	$ = parseInt($);
	if (isNaN($)) $ = 0;
	if (this.scrollHeight != $) {
		this.scrollHeight = $;
		this[ll1l01]()
	}
};
OoO1l = function($) {
	if (this.showHScroll != $) {
		this.showHScroll = $;
		this[ll1l01]()
	}
};
oOllo = function($) {
	if (this.showVScroll != $) {
		this.showVScroll = $;
		this[ll1l01]()
	}
};
ll110 = function($) {
	if (this.data == $) return;
	if (typeof $ == "string") $ = mini.get($);
	if (!$) $ = [];
	$ = this[oOOOlO]($);
	if (this.data) this.ooO1ol();
	this.data = $;
	this.l011o();
	this[lO0OoO]("datachanged");
	this.O01Oll()
};
oOl0o = function() {
	return this.data[O1ooo]()
};
l10O = function(_) {
	if (!mini.isArray(_)) return _;
	var $ = new mini.DataTable();
	$[ooo0oO](_);
	return $
};
oo1O1 = function() {
	this.data[o1Oo11]("datachanged", this.O01Oll, this);
	this.data[o1Oo11]("SelectionChanged", this.oo1oO1, this);
	this.data[Oool1o](this[l0o000]);
	this.data[o1Oo11]("collapse", this.loo0lo, this);
	this.data[o1Oo11]("expand", this.OO00o, this)
};
l0OO0 = function() {
	this.data[o11llo]("datachanged", this.O01Oll, this);
	this.data[o11llo]("SelectionChanged", this.oo1oO1, this);
	this.data[o11llo]("collapse", this.loo0lo, this);
	this.data[o11llo]("expand", this.OO00o, this)
};
lo0l1 = function(E) {
	if (this._commitEditing !== true) this[Ol1lo1]();
	var B = this[O1ooo](),
		D = 0;
	for (var $ = 0, C = B.length; $ < C; $++) {
		var _ = B[$],
			A = parseInt(mini.isNull(_._height) ? this.rowHeight : _._height);
		if (isNaN(A)) A = this.rowHeight;
		D += A
	}
	if (this.virtualModel == false) this.scrollHeight = D;
	this.vscrollerContentEl.style.height = this.scrollHeight + "px";
	this.loOOo1(true)
};
looo0 = function(J) {
	var I = this[O1ooo]();
	if (!this.viewRegion) return;
	var C = {};
	for (var F = this.viewRegion.startRow, D = this.viewRegion.endRow; F <= D; F++) {
		var $ = I[F];
		if (!$) continue;
		C[$._id] = $
	}
	var E = this,
		_ = [],
		H = this.data,
		A = J.records;
	for (F = 0, D = A.length; F < D; F++) {
		$ = A[F];
		if (!C[$._id]) continue;
		if (J[o00OO0]) this[loOo00]($, this.lol010);
		else this[O0oOO0]($, this.lol010)
	}
	this[lO0OoO]("selectionchanged", J);
	var J = {
		sender: this,
		selecteds: this[oolO0](),
		selected: this[lool1o]()
	},
		G = this.columns;
	for (F = 0, D = G.length; F < D; F++) {
		var B = G[F];
		if (B.onselectionchanged) B.onselectionchanged[o0OoO0](this, J)
	}
};
OoO1 = function() {
	this.scrollWidth = this.getAllColumnWidth();
	this[l11ol1]()
};
o1oo0 = function($) {
	var _ = $.header;
	if (typeof _ == "function") _ = _[o0OoO0](this, $);
	if (mini.isNull(_)) _ = "&nbsp;";
	return _
};
ool10 = function() {
	var F = [],
		C = this.viewColumns,
		K = 0,
		B = this.viewRegion,
		D = B.startRow,
		A = B.endRow,
		$ = B.startColumn,
		L = B.endColumn,
		I = this,
		H = jQuery.boxModel;

	function G(A, $) {
		var _ = A.width;
		F[F.length] = "<div id=\"";
		F[F.length] = A._id;
		F[F.length] = "\" class=\"mini-supergrid-headercell ";
		if (A.headerCls) F[F.length] = A.headerCls;
		if ($ == this[o0ooOO]) F[F.length] = "mini-supergrid-frozenCell ";
		F[F.length] = "\" style=\"left:";
		F[F.length] = K;
		F[F.length] = "px;width:";
		F[F.length] = H ? _ - 1 : _;
		F[F.length] = "px;height:";
		F[F.length] = H ? this.headerHeight - 1 : this.headerHeight;
		F[F.length] = "px;";
		if (A.headerAlign) {
			F[F.length] = "text-align:";
			F[F.length] = A.headerAlign || "left";
			F[F.length] = ";"
		}
		if (A.headerStyle) F[F.length] = A.headerStyle;
		F[F.length] = "\"><div class=\"mini-supergrid-headercell-inner\" style=\"line-height:" + (this.headerHeight) + "px;\">";
		F[F.length] = this.O1l0o(A);
		F[F.length] = "</div></div>";
		K += _;
		if (this[l00lO0] && A[Olo1lO]) {
			F[F.length] = "<div cid=\"";
			F[F.length] = A._id;
			F[F.length] = "\" class=\"mini-supergrid-splitter\" style=\"left:";
			F[F.length] = K - 3;
			F[F.length] = "px;height:";
			F[F.length] = this.headerHeight;
			F[F.length] = "px;top:0px;\"></div>"
		}
	}
	if (this[ol0l1o]()) for (var J = this.frozenStartColumn, E = this[o0ooOO]; J <= E; J++) {
		var _ = C[J];
		if (_) G[o0OoO0](this, _, J)
	}
	for (J = $, E = L; J <= E; J++) {
		_ = C[J];
		if (_) G[o0OoO0](this, _, J)
	}
	F[F.length] = "<div class=\"mini-supergrid-headercell\" style=\"left:" + K + "px;width:500px;height:" + this.headerHeight + "px;\"></div>";
	this.l0lO.innerHTML = F.join("")
};
l0lO1 = function(_) {
	if (this.refreshTimer) clearTimeout(this.refreshTimer);
	var $ = this;
	this.refreshTimer = setTimeout(function() {
		$.Oo110(_)
	}, 1)
};
l11l0 = function(M) {
	var A = this.rowHeight,
		J = this[llO011],
		L = this[O1ooo](),
		C = this.viewColumns,
		K = this.data,
		B = this.loOoO0();
	this.viewRegion = B;
	if (this._lastRegion && M === false) if (this._lastRegion.startRow == B.startRow && this._lastRegion.endRow == B.endRow && this._lastRegion.startColumn == B.startColumn && this._lastRegion.endColumn == B.endColumn) return;
	this._lastRegion = B;
	this.o11OOO();
	var D = B.startRow,
		_ = B.endRow,
		$ = B.startColumn,
		N = B.endColumn,
		P = this.currentCell ? this.currentCell.record : null,
		I = this.currentCell ? this.currentCell.column : null,
		F = jQuery.boxModel;

	function H($, Y, a) {
		var R = [],
			G = 0;
		for (var T = D, Q = _; T <= Q; T++) {
			var B = L[T];
			if (!B) continue;
			var J = B._height ? B._height : A,
				U = -1,
				W = " ",
				S = -1,
				V = " ",
				N = "mini-supergrid-row";
			if (this[olO110] && T % 2 == 1) N += " " + this.O0lO;
			var O = K[loO0ll](B);
			if (O) N += " " + this.lol010;
			R[R.length] = "<div id=\"";
			R[R.length] = this.l0Oo(B, a);
			R[R.length] = "\" class=\"";
			R[R.length] = N;
			R[R.length] = " ";
			U = R.length;
			R[U] = W;
			R[R.length] = "\" style=\"top:";
			R[R.length] = G;
			R[R.length] = "px;height:";
			R[R.length] = J;
			R[R.length] = "px;";
			S = R.length;
			R[S] = V;
			R[R.length] = "\">";
			var X = 0;
			for (var Z = $, E = Y; Z <= E; Z++) {
				var M = C[Z];
				if (!M) continue;
				var H = M.width,
					c = this.o011O0(B, M, T, Z);
				R[R.length] = "<div  id=\"";
				R[R.length] = this.lO100o(B, M);
				R[R.length] = "\" class=\"mini-supergrid-cell ";
				if (a && Z == this[o0ooOO]) R[R.length] = "mini-supergrid-frozenCell ";
				var b = this.showDirty ? K.isModified(B, M.field) : false;
				if (b) R[R.length] = "mini-supergrid-cell-dirty ";
				if (P == B && I == M) R[R.length] = this.cellSelectedCls + " ";
				if (c.cellCls) R[R.length] = c.cellCls;
				R[R.length] = "\" style=\"left:";
				R[R.length] = X;
				R[R.length] = "px;width:";
				R[R.length] = F ? H - 1 : H;
				R[R.length] = "px;height:";
				R[R.length] = F ? J - 1 : J;
				R[R.length] = "px;";
				if (M.align) {
					R[R.length] = "text-align:";
					R[R.length] = M.align || "left";
					R[R.length] = ";"
				}
				if (c.cellStyle) R[R.length] = c.cellStyle;
				R[R.length] = "\"><div class=\"mini-supergrid-cell-inner\" >";
				R[R.length] = c.cellHtml;
				if (K.isModified(B, M.field)) R[R.length] = "</div><div class=\"mini-supergrid-cell-dirtytip\"></div></div>";
				else R[R.length] = "</div></div>";
				X += H;
				if (c.rowCls !== null) W = c.rowCls;
				if (c.rowStyle !== null) V = c.rowStyle
			}
			R[U] = W;
			R[S] = V;
			R[R.length] = "</div>";
			G += J
		}
		return R
	}
	var Q = this.scrollLeft,
		O = this.scrollTop,
		E = H[o0OoO0](this, $, N);
	this.cellsEl.innerHTML = E.join("");
	E = H[o0OoO0](this, this.frozenStartColumn, this.frozenEndColumn, true);
	this.lockedcellsEl.innerHTML = E.join("");
	var G = this.cellsEl
};
oloOO = function() {
	return l11ll(this.l0lO)
};
OolOl = function() {
	var $ = this[O10O11](true) - this[Oo1O10]();
	return $ >= 0 ? $ : 0
};
Oll1o = function() {
	var $ = this[o1l1oo](true);
	return $ >= 0 ? $ : 0
};
oo100 = function() {
	return oo0OlO(this.olO0)
};
ll1lO = function() {
	this.viewportWidth = this[ooll0o]();
	var $ = this.viewportWidth;
	if (this.showVScroll) $ -= 18;
	if ($ < 0) $ = 0;
	return $
};
lO1lO = function() {
	this.viewportHeight = this[Oll1l1]();
	var $ = this.viewportHeight;
	if (this.showHScroll) $ -= 18;
	if ($ < 0) $ = 0;
	return $
};
OOo11 = function() {
	var Y = this.scrollLeft,
		W = this.scrollTop;
	if (this.viewportWidth == null) {
		this.viewportWidth = this[ooll0o]();
		this.viewportHeight = this[Oll1l1]()
	}
	var A = this.viewportWidth - this[oOlO1O](),
		I = this.viewportHeight,
		U = W + I,
		L = Y + A,
		P = this.rowHeight,
		G = this[llO011],
		T = this[O1ooo](),
		F = this.viewColumns,
		Q = 0,
		O = 0,
		$ = 0,
		V = 0,
		B = 0,
		_ = 0;
	for (var H = 0, R = T.length; H < R; H++) {
		var N = T[H],
			C = N._height ? N._height : P;
		B += C;
		if (B >= W) {
			Q = H;
			_ = B - C;
			break
		}
	}
	for (H = Q, R = T.length; H < R; H++) {
		N = T[H], C = N._height ? N._height : P;
		if (B > U) {
			O = H;
			break
		}
		B += C
	}
	if (O == 0) O = T.length - 1;
	var K = 0,
		J = 0,
		S = 0;
	if (this[ol0l1o]()) S = this[o0ooOO] + 1;
	for (H = S, R = F.length; H < R; H++) {
		var D = F[H],
			M = D.width;
		J += M;
		if (J >= Y) {
			$ = H;
			K = J - M;
			J -= M;
			break
		}
	}
	for (H = $, R = F.length; H < R; H++) {
		D = F[H], M = D.width;
		J += M;
		if (J >= L) {
			V = H;
			break
		}
	}
	if (V == 0) V = F.length - 1;
	var E = {
		startRow: Q,
		endRow: O,
		startColumn: $,
		endColumn: V,
		xOffset: K,
		yOffset: _
	};
	if (this.inMaxLeft) {
		var $ = E.startColumn,
			X = F.length - E.endColumn;
		E.startColumn += X;
		E.endColumn += X;
		for (H = $, R = E.startColumn; H < R; H++) {
			D = F[H], M = D.width;
			E.xOffset += M
		}
	}
	if (this.inMaxTop) {
		Q = E.startRow, X = T.length - E.endRow;
		E.startRow += X;
		E.endRow += X;
		for (H = Q, R = E.startRow; H < R; H++) {
			N = T[H];
			if (N) {
				C = N._height ? N._height : P;
				E.yOffset += C
			}
		}
	}
	return E
};
ooO1l = function($) {
	if (typeof $ == "object") return $;
	if (mini.isNumber($)) return this.data[oO0l1O]($);
	return this.data.getby_id($)
};
l0l0 = function($) {
	if (mini.isNumber($)) $ = this.data[oO0l1O]($);
	return mini.isNumber($.__height) ? $.__height : this.rowHeight
};
Ol0ll = function(J) {
	var I = this[O1ooo]();
	if (!mini.isNumber(J)) J = I[o0oOOo](J);
	var C = this.rowHeight,
		F = this[llO011],
		D = this.viewColumns,
		$ = 0,
		H = 0;
	for (var G = 0, E = J; G <= E; G++) {
		var _ = I[G],
			A = _._height ? _._height : C;
		$ += A;
		if (G == E) {
			$ -= A;
			H = A
		}
	}
	$ -= this.viewRegion.yOffset;
	var B = this[oOOo1O]();
	B.height = H;
	B.y += $;
	B.bottom = B.y + B.height;
	return B
};
O010o = function(I) {
	if (!mini.isNumber(I)) I = this.viewColumns[o0oOOo](I);
	var F = this.rowHeight,
		_ = this[llO011],
		G = this.viewColumns,
		D = 0,
		A = 0,
		D = 0;
	for (var $ = 0, H = I; $ <= H; $++) {
		var E = G[$],
			B = E.width;
		D += B;
		if ($ == H) {
			D -= B;
			A = B
		}
	}
	D -= this.viewRegion.xOffset;
	if (this[ol0l1o]()) if (this[o00lOl] <= I && I <= this[o0ooOO]) {
		D = 0, A = 0, D = 0;
		for ($ = this.frozenStartColumn, H = I; $ <= H; $++) {
			E = G[$], B = E.width;
			D += B;
			if ($ == H) {
				D -= B;
				A = B
			}
		}
	} else if (I > this[o0ooOO]) {
		B = this[O0OOO1](0, this[o00lOl] - 1);
		D -= B
	}
	var C = this[lOo011](true);
	C.width = A;
	C.x += D;
	C.right = C.x + C.width;
	C.height = this[Oo1O10]();
	C.bottom = C.y + C.height;
	return C
};
O00O0 = function($, A) {
	var B = this[o0l0o1]($),
		C = this[Ol1O10](A),
		_ = {
			x: C.x,
			y: B.y,
			width: C.width,
			height: B.height
		};
	_.right = _.x + _.width;
	_.bottom = _.y + _.height;
	return _
};
l1lo0 = function() {
	return this[o00lOl] >= 0 && this[o0ooOO] >= this[o00lOl]
};
l0OO = function($, A) {
	if (typeof $ == "object") $ = this.viewColumns[o0oOOo]($);
	if (typeof A == "object") A = this.viewColumns[o0oOOo](A);
	if (!mini.isNumber($) || !mini.isNumber(A) || $ == -1 || A == -1) return;
	if ($ > A) {
		var _ = $;
		$ = A;
		A = _
	}
	this[o00lOl] = $;
	this[o0ooOO] = A;
	this[oO1010](this.columns)
};
OO1O0 = function() {
	this[o00lOl] = this[o0ooOO] = -1;
	this[oO1010](this.columns)
};
llo1l = function() {
	var _ = 0,
		B = this.getViewColumns();
	for (var $ = this[o00lOl]; $ <= this[o0ooOO]; $++) {
		var A = B[$];
		if (A) _ += A.width
	}
	return _
};
OlO1o = function(A, C) {
	var _ = 0,
		D = this.getViewColumns();
	for (var $ = A; $ <= C; $++) {
		var B = D[$];
		if (B) _ += B.width
	}
	return _
};
OOol0 = function() {
	var $ = this.scrollWidth;
	return $
};
oOooO = function(_) {
	if (this.allowScroll === false) return;
	this.scrollTop = this.vscrollerEl.scrollTop;
	var $ = this;
	if (!this.tooltipShowTimer) this.tooltipShowTimer = setTimeout(function() {
		var _ = $.loOoO0();
		$.tooltipEl.innerHTML = "\u884c\u53f7\uff1a" + (_.startRow + 1);
		$.tooltipShowTimer = null
	}, 30)
};
o1lO1 = function(_) {
	if (this.allowScroll === false) return;
	this._scrollLeft = this.hscrollerEl.scrollLeft;
	this._scrollTop = this.vscrollerEl.scrollTop;
	var $ = this;
	if (this._hscrollTimer) return;
	this._hscrollTimer = setTimeout(function() {
		$[lOoOlO]($._scrollLeft);
		$._hscrollTimer = null;
		$[lO0OoO]("scroll", {
			direction: "horizontal"
		})
	}, 25)
};
Oll01 = function(B, A) {
	var B = B.wheelDelta ? B : B.originalEvent,
		$ = B.wheelDelta || -B.detail * 24,
		_ = this.scrollTop;
	this.endEdit();
	_ -= $;
	this[lOlo1l](_);
	this[lO0OoO]("scroll", {
		direction: "vertical"
	});
	if (_ == this.vscrollerEl.scrollTop) B.preventDefault()
};
O1O0O = function($) {
	this.headerHeight = $;
	oOoOoO(this.l0lO, $);
	this[ll1l01]()
};
oo010 = function($) {
	this.olll0l($, "Click")
};
ooO10 = function($) {
	this.olll0l($, "Dblclick")
};
O0lll = function($) {
	this.olll0l($, "MouseDown")
};
oo0O1 = function($) {
	this.olll0l($, "MouseUp")
};
oOO10 = function($) {
	this.olll0l($, "ContextMenu")
};
l0lO0 = function($) {
	this.olll0l($, "KeyDown")
};
l0O10O = function(_) {
	var E = ol0Ol1[lO0010][lo0O00][o0OoO0](this, _),
		C = mini[Ol0Olo](_);
	for (var $ = 0, D = C.length; $ < D; $++) {
		var B = C[$],
			A = jQuery(B).attr("property");
		if (!A) continue;
		A = A.toLowerCase();
		if (A == "columns") E.columns = mini.oo101l(B);
		else if (A == "data") E.data = B.innerHTML
	}
	return E
};
l0lo0 = function() {
	OOl010[lO0010][ooooll][o0OoO0](this);
	this[Ol0Ooo]("mini-supergrid")
};
O1Ol1 = function() {
	OOl010[lO0010][lO01o0][o0OoO0](this)
};
Ollol = function($) {
	if (!mini.isArray($)) return $;
	var _ = new mini.DataTree();
	_[ooo0oO]($);
	return _
};
o0OO0 = function($) {
	this[lO0OoO]("collapse", $)
};
l0ool = function($) {
	this[lO0OoO]("expand", $)
};
o0111 = function($) {
	return this.data[loOOO0]($)
};
O10ll = function($) {
	return $ ? $._level : 0
};
llolO = function($) {
	return this.data[l1l01O]($)
};
lOl01 = function($, _) {
	return this.data[O1OlOO]($, _)
};
ooO1O1 = function($, _, H, C) {
	var K = OOl010[lO0010].o011O0[o0OoO0](this, $, _, H, C);
	if (this.treeColumn !== _.name) return K;
	var A = $;
	if (!A) return K;
	var I = K.cellHtml,
		D = _.width,
		G = this[loOOO0](A),
		E = this[lo110](A) * 18,
		B = "";
	if (!G) B = this[l1l01O](A) ? "mini-supertree-expand" : "mini-supertree-collapse";
	var J = "<div class=\"mini-supertree-node " + B + "\">";
	if (!G) J += "<a href=\"#\" onclick=\"return false;\"  hidefocus class=\"mini-supertree-ec-icon\" style=\"left:" + (E) + "px;\"></a>";
	E += 18;
	if (this[ol1Ol]) {
		var F = this[o01ol](A);
		J += "<div class=\"" + F + " mini-supertree-nodeicon\" style=\"left:" + E + "px;\"></div>";
		E += 18
	}
	J += "<div class=\"mini-supertree-nodetext\" style=\"padding-left:" + (E + 2) + "px;\">" + I + "</div>";
	J += "</div>";
	I = J;
	K.cellHtml = I;
	return K
};
l1OO0 = function(_) {
	var $ = _[this.iconField];
	if (!$) if (this[loOOO0](_)) $ = this.leafIcon;
	else $ = this.folderIcon;
	return $
};
l0lOo = function($) {
	if (this.treeColumn != $) {
		this.treeColumn = $;
		this[ll1l01]()
	}
};
ol1O1 = function($) {
	if (this[ol1Ol] != $) {
		this[ol1Ol] = $;
		this[ll1l01]()
	}
};
looo1 = function($, A, B) {
	if (O111o(B.target, "mini-supertree-ec-icon")) this.data[oOolll]($);
	else {
		var _ = {
			record: $,
			column: A,
			field: A.field,
			htmlEvent: B
		};
		this[lO0OoO]("cellmousedown", _)
	}
};
o1001 = function($, A, B) {
	if (O111o(B.target, "mini-supertree-ec-icon")) B.stopPropagation();
	else {
		var _ = {
			record: $,
			column: A,
			field: A.field,
			htmlEvent: B
		};
		this[lO0OoO]("cellclick", _)
	}
};
o0100 = function($, _) {
	this[loOo00]($, _)
};
OO00 = function($, _) {
	this[O0oOO0]($, _)
};
oOo1o = function(A) {
	var F = OOl010[lO0010][lo0O00][o0OoO0](this, A),
		E = jQuery(A),
		D = E.attr("treeColumn");
	if (D) F.treeColumn = D;
	var B = E.attr("iconField");
	if (B) F.iconField = B;
	var $ = E.attr("nodesField");
	if ($) F.nodesField = $;
	var C = E.attr("useArrows");
	if (C) F.useArrows = C == "false" ? false : true;
	var _ = E.attr("showTreeIcon");
	if (_) F[ol1Ol] = _ == "false" ? false : true;
	return F
};
loo00 = function($) {
	this.viewModel = $;
	this[ll1l01]()
};
ol010 = function() {
	return this.viewModel == "track"
};
ollOOO = function($) {
	var _ = $.Baseline;
	return _ ? _[this.baselineIndex] : null
};
lo0O1 = function() {
	this.el = document.createElement("div");
	this.el.className = "mini-ganttview";
	this.el.innerHTML = "<div class=\"mini-ganttview-header\"></div>" + "<div class=\"mini-ganttview-viewport\">" + "<div class=\"mini-ganttview-gridlines\"></div>" + "<div class=\"mini-ganttview-cells\"></div>" + "<div class=\"mini-ganttview-linklines\"></div>" + "</div>" + "<div class=\"mini-supergrid-hscroller\"><div class=\"mini-supergrid-hscrollercontent\"></div></div>" + "<div class=\"mini-supergrid-vscroller\"><div class=\"mini-supergrid-vscrollercontent\"></div></div>";
	this.l0lO = this.el.firstChild;
	this.olO0 = this.el.childNodes[1];
	this.cellsEl = this.olO0.childNodes[1];
	this.gridlinesEl = this.olO0.childNodes[0];
	this.linklinesEl = this.olO0.childNodes[2];
	this.hscrollerEl = this.el.childNodes[2];
	this.vscrollerEl = this.el.childNodes[3];
	this.hscrollerContentEl = this.hscrollerEl.firstChild;
	this.vscrollerContentEl = this.vscrollerEl.firstChild
};
o0OlO = function() {
	o1ol0o(this.hscrollerEl, "scroll", this.ll00o0, this);
	o1ol0o(this.vscrollerEl, "scroll", this.ooO0O, this);
	if (mini.isFireFox) {
		var _ = this;

		function A() {
			document.onmouseup = null;
			_.l111 = false;
			_[lOlo1l](_.scrollTop, true);
			_[lO0OoO]("scroll", {
				direction: "vertical"
			})
		}
		this.vscrollerEl.onmousedown = function($) {
			_.l111 = true;
			document.onmouseup = A
		}
	} else if (!mini.isOpera) {
		_ = this;

		function $() {
			document.onmousemove = null;
			_.l111 = false;
			_[lOlo1l](_.scrollTop, true);
			_[lO0OoO]("scroll", {
				direction: "vertical"
			})
		}
		this.vscrollerEl.onmousedown = function(A) {
			_.l111 = true;
			document.onmousemove = $
		}
	}
	o1ol0o(this.el, "mousewheel", this.O101o, this);
	o1ol0o(this.el, "click", this.l01O10, this);
	o1ol0o(this.el, "dblclick", this.llOloo, this);
	o1ol0o(this.el, "mousedown", this.lo1Oll, this);
	o1ol0o(this.el, "contextmenu", this.ll1l10, this);
	this.lOol0O()
};
OOl10 = function() {
	this._ToolTip = new mini._GanttViewToolTip(this);
	this._DragDrop = new mini._GanttViewDragDrop(this)
};
l1011 = function(_) {
	if (_ !== false) this._lastBodyWidth = this._lastBodyWidth = null;
	if (this[Ool11l]() == false) return;
	oOoOoO(this.l0lO, this.headerHeight);
	var B = this[Oll1l1]();
	oOoOoO(this.olO0, B);
	this.viewportWidth = this[ooll0o]();
	this.viewportHeight = this[Oll1l1]();
	this.bodyWidth = this.viewportWidth;
	this.bodyHeight = this.viewportHeight;
	var $ = this.viewportHeight - 18;
	if ($ < 0) $ = 0;
	var A = this.viewportWidth - 18;
	if (A < 0) A = 0;
	this.vscrollerEl.style.top = this[Oo1O10]() + "px";
	this.vscrollerEl.style.height = $ + "px";
	this.hscrollerEl.style.width = A + "px";
	this.hscrollerContentEl.style.width = this.scrollWidth + "px";
	this.vscrollerContentEl.style.height = this.scrollHeight + "px";
	if (!this._lastBodyWidth || this._lastBodyWidth != this.bodyWidth || !this._lastBodyHeight || this._lastBodyHeight != this.bodyHeight) this[o1oloo]();
	this._lastBodyWidth = this.bodyWidth;
	this._lastBodyHeight = this.bodyHeight
};
oOl0Ol = function() {
	return l11ll(this.l0lO)
};
OOl1 = function() {
	var $ = this[O10O11](true) - this[Oo1O10]();
	return $
};
Ooolo = function() {
	return this[o1l1oo](true)
};
oO1lO = function($) {
	if (this.showLabel != $) {
		this.showLabel = $;
		this[ll1l01]("showLabel")
	}
};
loO1O = function($) {
	if (this.showCriticalPath != $) {
		this.showCriticalPath = $;
		this[ll1l01]("showCriticalPath")
	}
};
lllOO = function($) {
	if (this.showGridLines != $) {
		this.showGridLines = $;
		this[ll1l01]("showGridLines")
	}
};
OOlO10 = function($) {
	if (this.timeLines != $) {
		this.timeLines = $;
		this[ll1l01]("timeLines")
	}
};
O0o1o = function($) {
	$ = parseInt($);
	if (isNaN($)) return;
	if (this.rowHeight != $) {
		this.rowHeight = $;
		this.O01Oll()
	}
};
Ol1O1 = function($) {
	if ($ < 0) $ = 0;
	if ($ > this.scrollWidth) $ = this.scrollWidth;
	if (this.scrollLeft != $) {
		this.allowScroll = false;
		this.hscrollerEl.scrollLeft = $;
		this.allowScroll = true;
		this.scrollLeft = this.hscrollerEl.scrollLeft;
		this[o1oloo]()
	}
};
loOol = function($, _) {
	if ($ < 0) $ = 0;
	if ($ > this.scrollHeight) $ = this.scrollHeight;
	if (this.scrollTop != $ || _ === true) {
		this.scrollTop = $;
		this.allowScroll = false;
		this.vscrollerEl.scrollTop = $;
		if (this[O0110l]() && this.vscrollerEl.style.display != "none") this.scrollTop = this.vscrollerEl.scrollTop;
		this.allowScroll = true;
		this.inMaxTop = (this.scrollTop + parseInt(this.vscrollerEl.style.height)) == this.scrollHeight;
		if (this.virtualModel == false) this[o1oloo]()
	}
};
OllOO = function() {
	return this.scrollTop
};
OoO0l = function() {
	return this.scrollLeft
};
o0ol0 = function($) {
	$ = parseInt($);
	if (isNaN($)) $ = 0;
	if (this.scrollHeight != $) {
		this.scrollHeight = $;
		this[ll1l01]()
	}
};
lOo1o1 = function($) {
	if (this.headerHeight != $) {
		this.headerHeight = $;
		oOoOoO(this.l0lO, $);
		this[ll1l01]("headerheight")
	}
};
oO1oo = function($) {
	var _ = oO1o11.getTimeScale($);
	if (this.bottomTimeScale.index <= _.index) return;
	this.topTimeScale = _;
	this[o0Ol01](this._startDate, this._finishDate);
	this[ll1l01]()
};
Oo1ol = function($) {
	var _ = oO1o11.getTimeScale($);
	if (this.topTimeScale.index >= _.index) return;
	this.bottomTimeScale = _;
	this[o0Ol01](this._startDate, this._finishDate);
	this[ll1l01]()
};
O1000 = function($) {
	if (this.showSummary) return $.Summary || ($.children && $.children.length > 0);
	else return false
};
O10l1 = function($) {
	if (this.showCriticalPath) return $.Critical || $.Critical2;
	else return false
};
lo1OO = function($) {
	return $.Milestone
};
l0oO1 = function(A, _) {
	if (!_) return true;
	if (_.type == "day" && _.number == 1) {
		var $ = A.getDay();
		if ($ == 0 || $ == 6) return false
	}
	return true
};
looO1 = function(D, A) {
	var F = new Date();
	if (!mini.isDate(D)) throw new Error("start must be date type");
	if (!mini.isDate(A)) throw new Error("finish must be date type");
	if (D[o1oo0O]() >= A[o1oo0O]()) A = new Date(D.getFullYear(), D.getMonth(), D.getDate() + 1);
	if (D < new Date(1900, 0, 1)) throw new Error("date 1900 error ");
	var _ = this.bottomTimeScale.type,
		G = this.bottomTimeScale.number,
		C = this.bottomTimeScale.width;
	this._startDate = this.oo010O(D);
	this._finishDate = this.oo010O(A);
	this.startDate = this.getTimeScaleStartDate(this._startDate, _);
	this.finishDate = this.getTimeScaleNextDate(this._finishDate, _, 1);
	var B = 0,
		E = this.finishDate[o1oo0O]();
	if (_ == "hour") {
		C = (C / G) * 24;
		_ = "day";
		G = 1
	}
	if (_ == "minutes") {
		C = (C / G) * 60 * 24;
		_ = "day";
		G = 1
	}
	if (_ == "seconds") {
		C = (C / G) * 60 * 60 * 24;
		_ = "day";
		G = 1
	}
	for (var $ = this.O1111o(this.startDate); $[o1oo0O]() <= E;) {
		B += C;
		$ = this.getTimeScaleNextDate($, _, G)
	}
	this.scrollWidth = B
};
O1100l = function($) {
	if (this.data == $) return;
	if (typeof $ == "string") $ = mini.get($);
	if (!$) $ = [];
	if ($ instanceof Array) $ = this.O1oOl($);
	if (this.data) this.ooO1ol();
	this.data = $;
	this.l011o();
	this[lO0OoO]("datachanged");
	this.O01Oll()
};
O00Ol = function() {
	return this.data[O1ooo]()
};
llOO00 = function($) {
	if (!mini.isArray($)) return $;
	var _ = new mini.DataTree();
	_[ooo0oO]($);
	return _
};
o00OO = function() {
	this.data[o1Oo11]("datachanged", this.O01Oll, this)
};
lll1o = function() {
	this.data[o11llo]("datachanged", this.O01Oll, this)
};
oOo01o = function(H) {
	this._lastBodyWidth = this._lastBodyHeight = null;
	var C = this._TaskUIDs = {},
		A = this._TaskIndexs = {},
		_ = this._TaskTops = {},
		E = this[O1ooo](),
		G = 0;
	for (var $ = 0, F = E.length; $ < F; $++) {
		var B = E[$],
			D = mini.isNumber(B._height) ? B._height : this.rowHeight;
		C[B.UID] = B;
		A[B._id] = $;
		_[B._id] = G;
		G += D
	}
	if (this.virtualModel == false) this.scrollHeight = G;
	this[o1oloo]()
};
o00O0 = function() {
	if (this.refreshTimer) clearTimeout(this.refreshTimer);
	var $ = this;
	this.refreshTimer = setTimeout(function() {
		$.l1OO0l()
	}, 1)
};
loolo = function() {
	if (this.l111) return;
	var _ = new Date();
	this.vscrollerContentEl.style.height = this.scrollHeight + "px";
	var $ = this.loOoO0();
	this.o11OOO($);
	this.loOOo1($);
	this.OoO00($);
	this.linklinesEl.innerHTML = "";
	this.looll();
	this[lO0OoO]("refresh")
};
ol0o = function() {
	this.linklinesEl.innerHTML = "";
	var $ = this;
	if (this._drawLineTimer) clearTimeout(this._drawLineTimer);
	this._drawLineTimer = setTimeout(function() {
		var _ = $.loOoO0();
		$.oOlOO1(_)
	}, 100)
};
o1o100 = function(C) {
	var $ = C.startDate,
		W = C.endDate,
		J = W[o1oo0O](),
		A = this.headerHeight / 2,
		S = jQuery.boxModel,
		K = this.bottomTimeScale.type,
		F = this.bottomTimeScale.number,
		O = this.bottomTimeScale.width,
		U = this.bottomTimeScale.align || "left",
		M = this.bottomTimeScale.tooltip,
		_ = this.bottomTimeScale.formatter,
		D = this.topTimeScale.type,
		N = this.topTimeScale.tooltip,
		G = this.topTimeScale.formatter,
		X = this.topTimeScale.number,
		V = this.topTimeScale.align || "left",
		R = [];
	R[R.length] = "<div style=\"top:0px;height:" + A + "px;\" class=\"mini-ganttview-toptimescale\">";
	var L = this[O1OooO]($);
	for (var H = $; H[o1oo0O]() <= J;) {
		var E = this.getTimeScaleNextDate(H, D, X),
			B = this[O1OooO](H),
			T = this[O1OooO](E),
			Q = B - L,
			P = T - B,
			I = G(H, "top");
		R[R.length] = "<div title=\"";
		R[R.length] = N(H, "top");
		R[R.length] = "\" class=\"mini-ganttview-headercell\" style=\"left:";
		R[R.length] = Q;
		R[R.length] = "px;width:";
		R[R.length] = S ? P - 5 : P;
		R[R.length] = "px;height:";
		R[R.length] = S ? A - this.headerCellOffset : A;
		R[R.length] = "px;top:0px;line-height:";
		R[R.length] = A - 3;
		R[R.length] = "px;\">";
		R[R.length] = I;
		R[R.length] = "</div>";
		H = E
	}
	R[R.length] = "</div>";
	R[R.length] = "<div style=\"top:" + A + "px;height:" + A + "px;\" class=\"mini-ganttview-bottomtimescale\">";
	for (H = $; H[o1oo0O]() <= J;) {
		I = _(H, "bottom", D), E = this.getTimeScaleNextDate(H, K, F), B = this[O1OooO](H), T = this[O1OooO](E), Q = B - L, P = T - B;
		R[R.length] = "<div title=\"";
		R[R.length] = M(H, "bottom", D);
		R[R.length] = "\" class=\"mini-ganttview-headercell\" style=\"left:";
		R[R.length] = Q;
		R[R.length] = "px;width:";
		R[R.length] = S ? P - 1 : P;
		R[R.length] = "px;height:";
		R[R.length] = S ? A - this.headerCellOffset : A;
		R[R.length] = "px;top:0px;line-height:";
		R[R.length] = A - 3;
		R[R.length] = "px;\">";
		R[R.length] = I;
		R[R.length] = "</div>";
		H = E
	}
	R[R.length] = "</div>";
	this.l0lO.innerHTML = R.join("")
};
o1O1o0 = function(B, E) {
	var C = this.rowHeight,
		D = this.topTimeScale.type,
		M = this.bottomTimeScale.type,
		O = this[O1ooo](),
		F = B.startRow,
		A = B.endRow,
		H = this[O1OooO](B.startDate);
	this._ReadOnly = this[OlOOo1]();
	var P = this[l11loo](B),
		K = P.left,
		Q = P.top,
		S = P.width,
		U = P.height,
		J = [],
		T = this[ol000O](),
		R = false,
		_ = this._O1lo01 ? this._O1lo01._id : null;
	for (var L = F, G = A; L <= G; L++) {
		var $ = O[L];
		if (!$) continue;
		if (!mini.isDate($.Start) || !mini.isDate($.Finish) || (_ && _ != $._id)) continue;
		var I = this[OOo11l]($, K, Q);
		this.Ol1oO1($, I, J, _, T, false)
	}
	if (T) for (L = F, G = A; L <= G; L++) {
		$ = O[L];
		if (!$) continue;
		var N = this[looO10]($);
		if (!N || !N.Start || !N.Finish) continue;
		I = this[OOo11l]($, K, Q, N);
		this.Ol1oO1($, I, J, _, T, true)
	}
	if (E) return J.join("");
	this.cellsEl.innerHTML = J.join("")
};
lllOl = function(_, K, L, F, R, A) {
	var G = K.height,
		C = K.top,
		P = K.left,
		B = K.right,
		D = B - P;
	if (D < 0) return;
	if (D < 2) D = 2;
	var M = jQuery.boxModel,
		Q = _.PercentComplete || 0,
		O = parseInt(D * Q / 100);
	if (A) O = 0;
	var E = this[o0olO0](_),
		I = "mini-gantt-item ";
	if (this[O0OOOO](_)) I += " mini-gantt-critical ";
	var J = this[o10O01](_, "move");
	if (!A && !this._ReadOnly && !J.cancel) I += " mini-gantt-move ";
	if (A) I += " mini-gantt-baseline ";
	if (R == true) I += " mini-gantt-track ";
	var S = this.O1O001(_, K, A);
	if (S.itemCls) I += " " + S.itemCls + " ";
	if (S.itemHtml === null) {
		if (this[Olo0Oo](_)) {
			if (!A) {
				L[L.length] = "<div id=\"";
				L[L.length] = _._id;
				L[L.length] = "\" class=\"";
				L[L.length] = I;
				L[L.length] = " mini-gantt-summary\" style=\"left:";
				L[L.length] = P;
				L[L.length] = "px;top:";
				L[L.length] = C;
				L[L.length] = "px;width:";
				L[L.length] = D;
				L[L.length] = "px;\"><div class=\"mini-gantt-summary-left\"></div><div class=\"mini-gantt-summary-right\"></div></div>"
			}
		} else if (E) {
			if (A) I += " mini-gantt-baselinemilestone ";
			L[L.length] = "<div id=\"";
			L[L.length] = _._id;
			L[L.length] = "\" class=\"";
			L[L.length] = I;
			L[L.length] = " mini-gantt-milestone\" style=\"left:";
			L[L.length] = P;
			L[L.length] = "px;top:";
			L[L.length] = C;
			L[L.length] = "px;\"></div>"
		} else {
			L[L.length] = "<div id=\"";
			L[L.length] = _._id;
			L[L.length] = "\" class=\"";
			L[L.length] = I;
			L[L.length] = "\" style=\"left:";
			L[L.length] = P;
			L[L.length] = "px;top:";
			L[L.length] = C;
			L[L.length] = "px;height:";
			L[L.length] = M ? G - 2 : G;
			L[L.length] = "px;width:";
			L[L.length] = M ? D - 2 : D;
			L[L.length] = "px;\"><div class=\"mini-gantt-percentcomplete\" style=\"width:";
			L[L.length] = O;
			L[L.length] = "px;\"></div></div>"
		}
	} else L[L.length] = S.itemHtml;
	if (!A && S.showLabel && !F) {
		var N = S.label,
			$ = (B) + 5;
		if (E) $ += 10;
		L[L.length] = "<div id=\"";
		L[L.length] = _._id;
		if (S.labelAlign == "left") {
			L[L.length] = "\" class=\"mini-gantt-label\" style=\"text-align:right;width:250px;left:";
			var H = P - 255;
			L[L.length] = H
		} else {
			L[L.length] = "\" class=\"mini-gantt-label\" style=\"left:";
			L[L.length] = $
		}
		L[L.length] = "px;top:";
		L[L.length] = C - 4;
		L[L.length] = "px;\">";
		L[L.length] = N;
		L[L.length] = "</div>"
	}
};
lOooO = function($) {
	$ = this[O1ooo1]($);
	if (!$) return;
	this._O1lo01 = $;
	var F = $._id,
		D = this.loOoO0(),
		A = this.cellsEl.getElementsByTagName("div");
	for (var _ = 0, E = A.length; _ < E; _++) {
		var C = A[_];
		if (C && (C.id == this.id + "$" + F || C.id == F)) mini[lllO0l](C)
	}
	var B = this.loOOo1(D, true);
	mini.append(this.cellsEl, B);
	this.oOlOO1(D);
	this._O1lo01 = null
};
loOO0O = function(F) {
	var d = new Date(),
		Y = [],
		E = this.topTimeScale.type,
		M = this.bottomTimeScale.type,
		H = this.bottomTimeScale.number,
		T = this.rowHeight,
		c = this[O1ooo](),
		Z = jQuery.boxModel,
		V = F.startRow,
		S = F.endRow,
		Q = this.viewportWidth,
		L = this.viewportHeight;
	if (this.showGridLines) {
		var _ = 0;
		for (var N = V, W = S; N <= W; N++) {
			var $ = c[N];
			if (!$) continue;
			var C = $._height ? $._height : T;
			Y[Y.length] = "<div id=\"";
			Y[Y.length] = $._id + "row";
			Y[Y.length] = "\" class=\"mini-gantt-row\" style=\"top:";
			Y[Y.length] = _;
			Y[Y.length] = "px;height:";
			Y[Y.length] = Z ? C - 1 : C;
			Y[Y.length] = "px;width:";
			Y[Y.length] = Q;
			Y[Y.length] = "px;\"></div>";
			_ += C
		}
		var A = F.startDate,
			f = F.endDate,
			K = f[o1oo0O](),
			O = this[O1OooO](F.startDate);
		for (var J = A; J[o1oo0O]() <= K;) {
			var G = this.getTimeScaleNextDate(J, M, H),
				D = this[O1OooO](J),
				a = this[O1OooO](G),
				X = D - O,
				R = a - D,
				U = "mini-gantt-column ",
				e = this[Oo0o0l](J, this.bottomTimeScale);
			if (!e) U += "mini-gantt-offday";
			Y[Y.length] = "<div class=\"";
			Y[Y.length] = U;
			Y[Y.length] = "\" style=\"left:";
			Y[Y.length] = X;
			Y[Y.length] = "px;width:";
			Y[Y.length] = Z ? R - 1 : R;
			Y[Y.length] = "px;height:";
			Y[Y.length] = L;
			Y[Y.length] = "px;\" ></div>";
			J = G
		}
	}
	if (this.timeLines) {
		var b = this[O1OooO](F.startDate);
		for (N = 0, W = this.timeLines.length; N < W; N++) {
			var I = this.timeLines[N],
				g = I.date;
			if (g) {
				var B = I.text || "",
					P = I.style || "",
					O = this[O1OooO](g) - b;
				Y[Y.length] = "<div title=\"" + B + "\" style=\"" + P + ";left:" + O + "px;\" class=\"mini-gantt-timeline\"></div>"
			}
		}
	}
	this.gridlinesEl.innerHTML = Y.join("")
};
lloOO = function() {
	var T = this.scrollLeft,
		Q = this.scrollTop;
	if (mini.isNull(this.viewportWidth)) {
		this.viewportWidth = this[ooll0o]();
		this.viewportHeight = this[Oll1l1]()
	}
	var B = this.viewportWidth,
		N = this.viewportHeight,
		P = Q + N,
		$ = T + B,
		G = this.rowHeight,
		K = this.l11olo(),
		H = this.topTimeScale.type,
		M = this.bottomTimeScale.type,
		O = this[O1ooo](),
		I = 0,
		E = 0,
		A = 0;
	for (var L = 0, J = O.length; L < J; L++) {
		var C = O[L],
			D = C._height ? C._height : G;
		A += D;
		if (A >= Q) {
			I = L;
			break
		}
	}
	for (L = I, J = O.length; L < J; L++) {
		C = O[L], D = C._height ? C._height : G;
		if (A > P) {
			E = L;
			break
		}
		A += D
	}
	if (E == 0) E = O.length - 1;
	var _ = this.getTimeScaleStartDate(this[l1o00o](T), M),
		R = this.getTimeScaleStartDate(this[l1o00o](T + B), M),
		F = {
			startRow: I,
			endRow: E,
			startDate: _,
			endDate: R
		};
	if (this.inMaxTop) {
		var I = F.startRow,
			S = O.length - F.endRow;
		F.startRow += S;
		F.endRow += S
	}
	this.viewRegion = F;
	return F
};
l0OOO = function(_) {
	if (this.allowScroll === false) return;
	this._scrollLeft = this.hscrollerEl.scrollLeft;
	this._scrollTop = this.vscrollerEl.scrollTop;
	var $ = this;
	if (this._vscrollTimer) return;
	this._vscrollTimer = setTimeout(function() {
		$[lOlo1l]($._scrollTop);
		$._vscrollTimer = null;
		$[lO0OoO]("scroll", {
			direction: "vertical"
		})
	}, 30)
};
olOoO = function(_) {
	if (this.allowScroll === false) return;
	this._scrollLeft = this.hscrollerEl.scrollLeft;
	this._scrollTop = this.vscrollerEl.scrollTop;
	var $ = this;
	if (this._hscrollTimer) return;
	this._hscrollTimer = setTimeout(function() {
		$[lOoOlO]($._scrollLeft);
		$._hscrollTimer = null;
		$[lO0OoO]("scroll", {
			direction: "horizontal"
		})
	}, 30)
};
oOo1O = function(B, A) {
	var B = B.wheelDelta ? B : B.originalEvent,
		$ = B.wheelDelta || -B.detail * 24,
		_ = this.vscrollerEl.scrollTop;
	_ -= $;
	this.vscrollerEl.scrollTop = _;
	if (_ == this.vscrollerEl.scrollTop) B.preventDefault()
};
oO0Ol = function(_) {
	var $ = this.oooOo(_);
	if ($) this[Ooo11l]($, _)
};
o1O00 = function(_) {
	var $ = this.oooOo(_);
	if ($) this[l010o]($, _)
};
Oll1 = function(_) {
	var $ = this.oooOo(_);
	if ($) this[OOOo11]($, _)
};
O100o = function(_) {
	_.preventDefault();
	_.stopPropagation();
	var $ = this.oooOo(_);
	if ($) this[O0ll0l]($, _)
};
o11l1 = function() {
	return this.bottomTimeScale.width
};
Ol001 = function(C) {
	var _ = this.viewRegion,
		$ = this[l11loo](_),
		B = this[oOOo1O](_),
		A = C - B.x + $.left;
	return this[l1o00o](A)
};
lOO10 = function(L) {
	var H = this,
		B = H.loOoO0(),
		J = H[l11loo](B),
		D = J.left,
		K = J.top,
		M = J.width,
		N = J.height,
		E = H[oOOo1O]();
	if (L < E.y || L > E.bottom) return null;
	var L = L - E.y,
		_ = null,
		I = H[O1ooo]();
	for (var F = B.startRow, C = B.endRow; F <= C; F++) {
		var A = I[F];
		if (!A) continue;
		var $ = H._TaskTops[A._id] - K,
			G = mini.isNumber(A._height) ? A._height : H.rowHeight;
		if ($ <= L && L <= $ + G) {
			_ = A;
			break
		}
	}
	return _
};
OOl00 = function(E) {
	var B = new Date(1900, 0, 1),
		_ = new Date(5000, 0, 1),
		$ = this.bottomTimeScale.type,
		C = this,
		A = this.bottomTimeScale.width / this.bottomTimeScale.number;

	function F() {
		var G = new Date(B[o1oo0O]() + (_ - B) / 2),
			D = C[O1OooO](G),
			H = D - E;
		if (Math.abs(H) <= A) {
			switch ($) {
			case "year":
				G.setMonth(G.getMonth() + -(12 / A) * H);
				break;
			case "halfyear":
				G.setMonth(G.getMonth() + -(6 / A) * H);
				break;
			case "quarter":
				G.setMonth(G.getMonth() + -(4 / A) * H);
				break;
			case "month":
				G.setDate(G.getDate() + -(30 / A) * H);
				break;
			case "tendays":
				G.setDate(G.getDate() + -(10 / A) * H);
				break;
			case "week":
				G.setDate(G.getDate() + -(7 / A) * H);
				break;
			case "day":
				G.setHours(G.getHours() + -(24 / A) * H);
				break;
			case "hour":
				G.setMinutes(G.getMinutes() + -(60 / A) * H);
				break;
			case "minutes":
				G.setSeconds(G.getSeconds() + -(60 / A) * H);
				break;
			case "seconds":
				G.setSeconds(G.getSeconds() + -H / A);
				break
			}
			return G
		} else if (H > 0) _ = G;
		else if (H < 0) B = G;
		return F()
	}
	var D = F();
	return D
};
oOo1O0 = function(G) {
	var C = G - this.startDate,
		A = this.bottomTimeScale.width / this.bottomTimeScale.number;
	switch (this.bottomTimeScale.type) {
	case "year":
		var I = C / (1000 * 60 * 60 * 24 * 365);
		sw = A * I;
		break;
	case "halfyear":
		var D = C / (1000 * 60 * 60 * 24 * 365 / 2);
		sw = A * D;
		break;
	case "quarter":
		var J = C / (1000 * 60 * 60 * 24 * 365 / 4);
		sw = A * J;
		break;
	case "month":
		var K = C / (1000 * 60 * 60 * 24 * 30);
		sw = A * K;
		break;
	case "tendays":
		var E = C / (1000 * 60 * 60 * 24 * 10);
		sw = A * E;
		break;
	case "week":
		var F = C / (1000 * 60 * 60 * 24 * 7);
		sw = A * F;
		break;
	case "day":
		var H = C / (1000 * 60 * 60 * 24);
		sw = A * H;
		break;
	case "hour":
		var B = C / (1000 * 60 * 60);
		sw = A * B;
		break;
	case "minutes":
		var _ = C / (1000 * 60);
		sw = A * _;
		break;
	case "seconds":
		var $ = C / 1000;
		sw = A * $;
		break
	}
	return parseInt(sw)
};
O0OOO = function($) {
	return new Date($[o1oo0O]())
};
O10lO = function($) {
	return new Date($.getFullYear(), $.getMonth(), $.getDate())
};
lo1oo = function(A, _, $) {
	A = new Date(A[o1oo0O]());
	switch (_.toLowerCase()) {
	case "year":
		A.setFullYear(A.getFullYear() + $);
		break;
	case "month":
		A.setMonth(A.getMonth() + $);
		break;
	case "week":
		A.setDate(A.getDate() + ($ * 7));
		break;
	case "day":
		A.setDate(A.getDate() + $);
		break;
	case "hour":
		A.setHours(A.getHours() + $);
		break;
	case "minutes":
		A.setMinutes(A.getMinutes() + $);
		break;
	case "seconds":
		A.setSeconds(A.getSeconds() + $);
		break
	}
	return A
};
l10lo = function() {
	var $ = this[lOo011](true),
		_ = this[Oo1O10]();
	$.y += _;
	$.height -= _;
	$.bottom = $.y + $.height;
	return $
};
Oll00 = function(A) {
	var $ = this[O1ooo]()[A.startRow],
		_ = {
			left: this[O1OooO](A.startDate),
			top: $ ? this._TaskTops[$._id] : 0,
			width: this.viewportWidth,
			height: this.viewportHeight
		};
	_.right = _.left + _.width;
	_.bottom = _.top + _.height;
	return _
};
ollOOTop = function($) {
	return this._TaskTops[$._id]
};
ollOOHeight = function($) {
	var _ = mini.isNumber($._height) ? $._height : this.rowHeight;
	return _
};
ollOOBox = function($, H, E, I) {
	var C = I ? I.Start : $.Start,
		F = I ? I.Finish : $.Finish,
		J = this[O1OooO](C);
	if (this[o0olO0]($)) F = new Date(F.getFullYear(), F.getMonth(), F.getDate(), 23, 59, 59);
	var _ = this[O1OooO](F),
		A = _ - J,
		G = this[oO1Ol1]($),
		B = this[oO0o0O]($);
	H = H || 0;
	E = E || 0;
	J -= H;
	B -= E;
	var D = {
		left: J,
		top: B + this.topOffset,
		width: A,
		height: G - 9,
		right: J + A,
		bottom: B + G
	};
	if (this[o0olO0]($) && !this[Olo0Oo]($)) {
		D.width = 12;
		D.left = D.right - D.width;
		D.top = D.top - 3;
		D.height = 18;
		D.bottom = D.top + D.height
	} else if (this[Olo0Oo]($));
	else if (this[ol000O]()) if (I) {
		D.top = B + G / 2 + 1;
		D.height = 7;
		D.bottom = D.top + D.height
	} else {
		D.top = B + 2;
		D.height = 7;
		D.bottom = D.top + D.height
	}
	D.x = D.left;
	D.y = D.top;
	return D
};
oolOl = function() {
	this.loOoO0();
	return this[O1ooo]()[this.viewRegion.startRow]
};
O000l = function() {
	return this.viewRegion.startDate
};
ollOO = function($) {
	if (typeof $ == "object") $ = $._id;
	return this.data.getby_id($)
};
l0Ol0 = function($, _) {
	$ = this[O1ooo1]($);
	_ = this[O1ooo1](_);
	var A = this._linkHashed[$._id + "$$" + _._id];
	if (A) A.TaskUID = $.UID;
	if (!A) {
		A = this._linkHashed[_._id + "$$" + $._id];
		if (A) A.TaskUID = _.UID
	}
	return A
};
OOOoo = function(B) {
	var A = O111o(B.target, "mini-gantt-item"),
		C = A ? A.id : B.target.id;
	if (A) {
		var _ = C.split("$");
		C = _[_.length - 1]
	}
	var $ = this[O1ooo1](C);
	if (!$) {
		A = O111o(B.target, "mini-gantt-item");
		if (A) {
			C = A.id;
			$ = this[O1ooo1](C)
		}
	}
	return $
};
O00O = function(_) {
	if (!O111o(_.target, "mini-gantt-line")) return;
	var B = _.target.id,
		$ = B.split("$$"),
		A = this[O1lo0l]($[0], $[1]);
	return A
};
O11l = function(C) {
	if (!this.showLinkLines) return;
	var Z = this[O1ooo]();
	if (Z.length == 0) return;
	var P = this.l11olo(),
		T = this.rowHeight,
		W = C.startRow,
		S = C.endRow,
		_ = C.startDate,
		a = C.endDate,
		N = _[o1oo0O](),
		F = a[o1oo0O](),
		J = this._TaskUIDs,
		H = this._TaskIndexs,
		B = [],
		A = this._linkHashed = {},
		U = this._O1lo01 ? this._O1lo01._id : null;
	for (var I = 0, X = Z.length; I < X; I++) {
		var b = Z[I],
			O = b.UID;
		if (!b.Start || !b.Finish) continue;
		var R = b.Start[o1oo0O](),
			K = b.Finish[o1oo0O](),
			Q = H[b._id],
			G = b.PredecessorLink;
		if (!G || G.length == 0) continue;
		for (var L = 0, $ = G.length; L < $; L++) {
			var V = G[L],
				E = J[V.PredecessorUID];
			if (!E) continue;
			if (U && (b._id != U && E._id != U)) continue;
			A[b._id + "$$" + E._id] = V;
			if (!E.Start || !E.Finish) continue;
			var Y = E.Start[o1oo0O](),
				M = E.Finish[o1oo0O](),
				D = H[E._id];
			if ((Q >= W && Q <= S) || (D >= W && D <= S) || (Q < W && D > S) || (D < W && Q > S)) if (R > F && Y > F);
			else if (K < N && M < N);
			else {
				V.TaskUID = b.UID;
				B.push(V)
			}
		}
	}
	this.oO1OO0(B, C)
};
OO11O = function(A) {
	var _ = this._TaskUIDs[A.PredecessorUID],
		$ = this._TaskUIDs[A.TaskUID];
	return [_, $]
};
Ol1OlO = function($) {
	return $.Type
};
olo1l = function(A, B) {
	var d = this[O1ooo]();
	if (d.length == 0) return;
	var X = this.l11olo(),
		R = this.rowHeight,
		V = B.startRow,
		Q = B.endRow,
		_ = B.startDate,
		i = B.endDate,
		N = _[o1oo0O](),
		D = i[o1oo0O](),
		J = this._TaskUIDs,
		H = this._TaskIndexs,
		e = this[l11loo](B),
		Y = e.left,
		f = e.top,
		h = e.width,
		k = e.height,
		g = [];
	for (var I = 0, W = A.length; I < W; I++) {
		var T = A[I],
			j = this[o0Oo10](T),
			U = j[0],
			Z = j[1];
		if (!U || !Z) continue;
		if (!U.Start || !U.Finish) continue;
		if (!Z.Start || !Z.Finish) continue;
		var G = this[OOo11l](U, Y, f),
			b = this[OOo11l](Z, Y, f);
		if (G.right < 0 && b.right < 0) continue;
		if (G.bottom < 0 && b.bottom < 0) continue;
		if (G.left > h && b.left > h) continue;
		if (G.top > k && b.top < k) continue;
		var S = [];
		S.id = U._id + "$$" + Z._id;
		switch (parseInt(this[O0oo10](T))) {
		case 0:
			if (G.right < b.right) {
				var c = G.top + (G.height / 2),
					a = b.top;
				S.arrowType = "bottom";
				if (G.top > b.top) {
					a = b.bottom;
					S.arrowType = "top"
				}
				var P = [G.right, c],
					C = [b.right, c],
					F = [b.right, a];
				S.push([P, C]);
				S.push([C, F])
			} else {
				c = G.top + (G.height / 2), a = b.top + (b.height / 2);
				S.arrowType = "left";
				var P = [G.right, c],
					C = [G.right + 6, c],
					F = [G.right + 6, a],
					M = [b.right, a];
				S.push([P, C]);
				S.push([C, F]);
				S.push([F, M])
			}
			break;
		case 1:
			if (G.right <= b.left) {
				var c = G.top + (G.height / 2),
					$ = G.right,
					a = b.top,
					E = b.left;
				S.arrowType = "bottom";
				if (G.top > b.top) {
					a = b.bottom;
					S.arrowType = "top"
				}
				P = [$, c], C = [E, c], F = [E, a];
				if (G.right == b.left) {
					P = [$, c];
					C = [E + 2, c];
					F = [E + 2, a]
				}
				S.push([P, C]);
				S.push([C, F])
			} else {
				var c = G.top + (G.height / 2),
					$ = G.right,
					a = b.top + (b.height / 2),
					E = b.left,
					L = b.top - 4;
				S.arrowType = "right";
				if (G.top > b.top) L = b.bottom + 4;
				var P = [$, c],
					C = [$ + 6, c],
					F = [$ + 6, L],
					M = [E - 10, L],
					K = [E - 10, a],
					O = [E, a];
				S.push([P, C]);
				S.push([C, F]);
				S.push([F, M]);
				S.push([M, K]);
				S.push([K, O])
			}
			break;
		case 3:
			if (G.left < b.left) {
				c = G.top + (G.height / 2), $ = G.left, a = b.top + (b.height / 2), E = b.left;
				S.arrowType = "right";
				P = [$, c], C = [$ - 6, c], F = [$ - 6, a], M = [E, a];
				S.push([P, C]);
				S.push([C, F]);
				S.push([F, M])
			} else {
				c = G.top + (G.height / 2), $ = G.left, a = b.top, E = b.left;
				S.arrowType = "bottom";
				if (G.top > b.top) {
					a = b.bottom;
					S.arrowType = "top"
				}
				P = [$, c], C = [E, c], F = [E, a];
				S.push([P, C]);
				S.push([C, F])
			}
			break;
		case 2:
			if (G.left < b.right) {
				c = G.top + (G.height / 2), $ = G.left, a = b.top + (b.height / 2), E = b.right, L = b.top - 4;
				S.arrowType = "left";
				if (G.top > b.top) L = b.bottom + 4;
				P = [$, c], C = [$ - 6, c], F = [$ - 6, L], M = [E + 10, L], K = [E + 10, a], O = [E, a];
				S.push([P, C]);
				S.push([C, F]);
				S.push([F, M]);
				S.push([M, K]);
				S.push([K, O])
			} else {
				c = G.top + (G.height / 2), $ = G.left, a = b.top, E = b.right;
				S.arrowType = "bottom";
				if (G.top > b.top) {
					a = b.bottom;
					S.arrowType = "top"
				}
				P = [$, c], C = [E, c], F = [E, a];
				S.push([P, C]);
				S.push([C, F])
			}
			break;
		default:
			throw new Error("");
			break
		}
		S.Critical = this[O0OOOO](U) && this[O0OOOO](Z);
		S.Cls = T.Cls;
		g.push(S);
		if (this.isCriticalLine && this.isCriticalLine(U, Z, T)) S.Critical = true
	}
	this.Ol11o1(g)
};
O11o11 = function(P) {
	var O = this.viewportWidth,
		C = this.viewportHeight,
		H = [];
	for (var K = 0, G = P.length; K < G; K++) {
		var B = P[K],
			F = null,
			J = null,
			L = B.Critical,
			D = L ? "mini-gantt-line-critical" : "";
		if (B.Cls) D += " " + B.Cls;
		var I = B.id;
		for (var R = 0, $ = B.length; R < $; R++) {
			var Q = B[R];
			F = Q[0];
			J = Q[1];
			var N = F[0] < J[0] ? F[0] : J[0],
				A = F[1] < J[1] ? F[1] : J[1],
				_ = Math.abs(J[0] - F[0]) + 1,
				M = Math.abs(J[1] - F[1]) + 1;
			if (N > O || N + _ < 0) continue;
			if (A > C || A + M < 0) continue;
			if (F[1] == J[1]) {
				if (N < 0) {
					_ -= Math.abs(N);
					N = 0
				}
				if (_ + N > O) _ = O - N;
				H[H.length] = "<div id=\"";
				H[H.length] = I;
				H[H.length] = "\" style=\"left:";
				H[H.length] = N;
				H[H.length] = "px;top:";
				H[H.length] = A;
				H[H.length] = "px;width:";
				H[H.length] = _;
				H[H.length] = "px;\" class=\"mini-gantt-line ";
				H[H.length] = D;
				H[H.length] = "\"></div>"
			} else {
				if (A < 0) {
					M -= Math.abs(A);
					A = 0
				}
				if (M + A > C) M = C - A;
				H[H.length] = "<div id=\"";
				H[H.length] = I;
				H[H.length] = "\" style=\"left:";
				H[H.length] = N;
				H[H.length] = "px;top:";
				H[H.length] = A;
				H[H.length] = "px;height:";
				H[H.length] = M;
				H[H.length] = "px;\" class=\"mini-gantt-line ";
				H[H.length] = D;
				H[H.length] = "\"></div>"
			}
		}
		H[H.length] = "<div id=\"";
		H[H.length] = I;
		H[H.length] = "\" style=\"left:";
		H[H.length] = J[0];
		H[H.length] = "px;top:";
		H[H.length] = J[1];
		H[H.length] = "px;\" class=\"mini-gantt-line mini-gantt-arrow-";
		H[H.length] = B.arrowType;
		H[H.length] = L ? " mini-gantt-arrow-" + B.arrowType + "-critical" : "";
		H[H.length] = "\"></div>"
	}
	var E = H.join("");
	this.linklinesEl.innerHTML = E
};
ol0O1 = function(A) {
	var C = this.zoomTimeScales,
		B = null;
	for (var _ = 0, F = C.length; _ < F; _++) {
		var $ = C[_],
			E = $[0],
			D = $[1];
		if (E.type == this.topTimeScale.type && E.number == this.topTimeScale.number && D.type == this.bottomTimeScale.type && D.number == this.bottomTimeScale.number) {
			B = $;
			break
		}
		if (D.type == this.bottomTimeScale.type && A) {
			B = $;
			break
		}
	}
	if (!B && A) B = C[6];
	return B
};
OO0lo = function() {
	var _ = this[lO1l10]();
	if (!_) _ = this[lO1l10](true);
	var $ = this.zoomTimeScales[o0oOOo](_);
	$ += 1;
	if ($ >= this.zoomTimeScales.length) $ = this.zoomTimeScales.length - 1;
	_ = this.zoomTimeScales[$];
	this.topTimeScale = _[0];
	this.bottomTimeScale = _[1];
	this[o0Ol01](this._startDate, this._finishDate);
	this[ll1l01]()
};
l1O0 = function() {
	var _ = this[lO1l10]();
	if (!_) _ = this[lO1l10](true);
	var $ = this.zoomTimeScales[o0oOOo](_);
	$ -= 1;
	if ($ < 0) $ = 0;
	_ = this.zoomTimeScales[$];
	this.topTimeScale = _[0];
	this.bottomTimeScale = _[1];
	this[o0Ol01](this._startDate, this._finishDate);
	this[ll1l01]()
};
o01lOo = function($, _) {
	if (!$) return;
	var B = mini.isDate($) ? $ : $.Start;
	if (_ && !mini.isDate($)) B = $.Finish;
	if (!B) return;
	this.loOoO0();
	var C = this[O1OooO](B),
		A = this[o1l1oo](true);
	if (_) this[lOoOlO](C - A / 2);
	else if (this.scrollLeft < C && C < this.scrollLeft + A);
	else this[lOoOlO](C - A / 2)
};
oo00O = function($) {
	var _ = {
		item: $,
		tooltip: "",
		cls: ""
	};
	this[lO0OoO]("ItemDragTipNeeded", _);
	return _
};
o00o1 = function($) {
	var _ = {
		item: $,
		tooltip: $ ? $.Name : "",
		cls: ""
	};
	if (_.item) this[lO0OoO]("ScrollToolTipNeeded", _);
	return _
};
O0llO = function(_) {
	var $ = this.bottomTimeScale.tooltip(_, "bottom", this.bottomTimeScale.type),
		A = {
			date: _,
			tooltip: $,
			cls: ""
		};
	this[lO0OoO]("DateToolTipNeeded", A);
	return A
};
O1O0o = function($) {
	var _ = $.isBaseline ? this[looO10]($) : null;
	delete $.isBaseline;
	var A = $.Name,
		B = {
			item: $,
			tooltip: A,
			cls: "",
			baseline: _
		};
	this[lO0OoO]("ItemToolTipNeeded", B);
	return B
};
oOOlo = function(_) {
	var $ = this._TaskUIDs[_.PredecessorUID],
		A = this._TaskUIDs[_.TaskUID],
		B = {
			link: _,
			tooltip: "",
			cls: "",
			fromItem: $,
			toItem: A
		};
	this[lO0OoO]("LinkToolTipNeeded", B);
	return B
};
OOOl1 = function($, _) {
	var A = {
		item: $,
		htmlEvent: _
	};
	this[lO0OoO]("ItemMouseDown", A)
};
l101o = function($, _) {
	var A = {
		item: $,
		htmlEvent: _
	};
	this[lO0OoO]("ItemClick", A)
};
OlloO = function($, _) {
	var A = {
		item: $,
		htmlEvent: _
	};
	this[lO0OoO]("ItemDblClick", A)
};
lo1O0 = function($, _) {
	var A = {
		item: $,
		htmlEvent: _
	};
	this[lO0OoO]("ItemContextMenu", A)
};
ll11l = function($, A, _) {
	var B = {
		baseline: _,
		item: $,
		itemBox: A,
		itemCls: null,
		itemStyle: null,
		itemHtml: null,
		showLabel: this.showLabel,
		labelField: this.labelField,
		label: $[this.labelField],
		labelAlign: "right"
	};
	this[lO0OoO]("DrawItem", B);
	return B
};
ooool = function($, _) {
	var A = false;
	_ = _.toLowerCase();
	if (_ == "start") A = this[Olo0Oo]($) || this[o0olO0]($);
	if (_ == "finish") A = this[Olo0Oo]($) || this[o0olO0]($);
	if (_ == "percentcomplete") A = this[Olo0Oo]($) || this[o0olO0]($);
	if (_ == "move") A = this[Olo0Oo]($);
	var B = {
		item: $,
		action: _,
		cancel: A,
		dragUpdown: false
	};
	this[lO0OoO]("ItemDragStart", B);
	return B
};
llOool = function($, A, _) {
	var B = {
		item: $,
		drag: A,
		action: _
	};
	this[lO0OoO]("ItemDragMove", B);
	return B
};
Oo0ll = function($, _) {
	var A = {
		item: $,
		dropNode: _,
		cancel: false
	};
	this[lO0OoO]("ItemDragDrop", A);
	return A
};
ollO0 = function($, A, _, B) {
	var C = {
		item: $,
		action: A.toLowerCase(),
		value: _,
		dropNode: B
	};
	this[lO0OoO]("ItemDragComplete", C);
	return C
};
Oo1lo = function($) {
	if (mini.isArray($)) $ = {
		type: "menu",
		items: $
	};
	if (typeof $ == "string") {
		var _ = O10l01($);
		if (!_) return;
		mini.parse($);
		$ = mini.get($)
	}
	if (this.menu !== $) {
		this.menu = mini.getAndCreate($);
		this.menu.setPopupEl(this.el);
		this.menu.setPopupCls("mini-button-popup");
		this.menu.setShowAction("leftclick");
		this.menu.setHideAction("outerclick");
		this.menu.setXAlign("left");
		this.menu.setYAlign("below");
		this.menu[OO111O]();
		this.menu.owner = this
	}
};
O110O = function($) {
	this.enabled = $;
	if ($) this[o0O0ol](this.looO);
	else this[Ol0Ooo](this.looO);
	jQuery(this.el).attr("allowPopup", !! $)
};
o1olOO = function(A) {
	if (typeof A == "string") return this;
	var $ = A.value;
	delete A.value;
	var _ = A.text;
	delete A.text;
	this.ll1lOO = !(A.enabled == false || A.allowInput == false || A[Oll10l]);
	OoO1OO[lO0010][OO101l][o0OoO0](this, A);
	if (this.ll1lOO === false) {
		this.ll1lOO = true;
		this[Oool01]()
	}
	if (!mini.isNull(_)) this[O1l11](_);
	if (!mini.isNull($)) this[l1ol]($);
	return this
};
Oo0O = function() {
	var $ = "<span class=\"mini-buttonedit-close\"></span>" + this.oO1lO1Html();
	return "<span class=\"mini-buttonedit-buttons\">" + $ + "</span>"
};
lo0O0 = function() {
	var $ = "onmouseover=\"ollool(this,'" + this.l0011l + "');\" " + "onmouseout=\"OloO(this,'" + this.l0011l + "');\"";
	return "<span class=\"mini-buttonedit-button\" " + $ + "><span class=\"mini-buttonedit-icon\"></span></span>"
};
o1ol1 = function() {
	this.el = document.createElement("span");
	this.el.className = "mini-buttonedit";
	var $ = this.oO1lO1sHTML();
	this.el.innerHTML = "<span class=\"mini-buttonedit-border\"><input type=\"input\" class=\"mini-buttonedit-input\" autocomplete=\"off\"/>" + $ + "</span><input name=\"" + this.name + "\" type=\"hidden\"/>";
	this.O1O1o0 = this.el.firstChild;
	this.O0O001 = this.O1O1o0.firstChild;
	this.O00Olo = this.el.lastChild;
	this._buttonsEl = this.O1O1o0.lastChild;
	this._buttonEl = this._buttonsEl.lastChild;
	this._closeEl = this._buttonEl.previousSibling;
	this.l00oOO()
};
looolo = function($) {
	if (this.el) {
		this.el.onmousedown = null;
		this.el.onmousewheel = null;
		this.el.onmouseover = null;
		this.el.onmouseout = null
	}
	if (this.O0O001) {
		this.O0O001.onchange = null;
		this.O0O001.onfocus = null;
		mini[loooOl](this.O0O001);
		this.O0O001 = null
	}
	OoO1OO[lO0010][OoOO0o][o0OoO0](this, $)
};
oOloO = function() {
	OO101O(function() {
		Ol01lO(this.el, "mousedown", this.lo1Oll, this);
		Ol01lO(this.O0O001, "focus", this.O0Oo11, this);
		Ol01lO(this.O0O001, "change", this.OlO1oO, this);
		var $ = this.text;
		this.text = null;
		this[O1l11]($)
	}, this)
};
OOO0o = function() {
	if (this.lOo10) return;
	this.lOo10 = true;
	o1ol0o(this.el, "click", this.l01O10, this);
	o1ol0o(this.O0O001, "blur", this.O011ll, this);
	o1ol0o(this.O0O001, "keydown", this.oo0o, this);
	o1ol0o(this.O0O001, "keyup", this.O001o0, this);
	o1ol0o(this.O0O001, "keypress", this.Ol101O, this)
};
l01lO = function() {
	if (this._closeEl) this._closeEl.style.display = this.showClose ? "inline-block" : "none";
	var $ = this._buttonsEl.offsetWidth + 2;
	this.O1O1o0.style["paddingRight"] = $ + "px";
	this[l11ol1]()
};
o1l1o = function() {};
Oll10 = function($) {
	if (parseInt($) == $) $ += "px";
	this.height = $
};
o0OOo = function() {
	try {
		this.O0O001[ool00o]();
		var $ = this;
		setTimeout(function() {
			if ($.l1o11O) $.O0O001[ool00o]()
		}, 10)
	} catch (_) {}
};
OOllo = function() {
	try {
		this.O0O001[loOoOl]()
	} catch ($) {}
};
o1lOo = function() {
	this.O0O001[o00OO0]()
};
loo0oEl = function() {
	return this.O0O001
};
l1oO = function($) {
	this.name = $;
	if (this.O00Olo) mini.setAttr(this.O00Olo, "name", this.name)
};
lOlo1 = function($) {
	if ($ === null || $ === undefined) $ = "";
	var _ = this.text !== $;
	this.text = $;
	this.O0O001.value = $;
	this.l00oOO()
};
loo0o = function() {
	var $ = this.O0O001.value;
	return $
};
O1l0 = function($) {
	if ($ === null || $ === undefined) $ = "";
	var _ = this.value !== $;
	this.value = $;
	this.O00Olo.value = this[l10lOo]()
};
oO11l = function() {
	return this.value
};
ll0lo = function() {
	value = this.value;
	if (value === null || value === undefined) value = "";
	return String(value)
};
Olo0O = function() {
	this.O0O001.placeholder = this[ooOoo1];
	if (this[ooOoo1]) mini._placeholder(this.O0O001)
};
Ooll = function($) {
	if (this[ooOoo1] != $) {
		this[ooOoo1] = $;
		this.l00oOO()
	}
};
O0o01 = function() {
	return this[ooOoo1]
};
llO1o = function($) {
	$ = parseInt($);
	if (isNaN($)) return;
	this.maxLength = $;
	this.O0O001.maxLength = $
};
lo10o = function() {
	return this.maxLength
};
oo0oo = function($) {
	$ = parseInt($);
	if (isNaN($)) return;
	this.minLength = $
};
ll011 = function() {
	return this.minLength
};
Oloo0 = function($) {
	OoO1OO[lO0010][ooO10l][o0OoO0](this, $);
	this[o1Ol0]()
};
Ollolo = function() {
	var $ = this[OlOOo1]();
	if ($ || this.allowInput == false) this.O0O001[Oll10l] = true;
	else this.O0O001[Oll10l] = false;
	if ($) this[Ol0Ooo](this.lOO0);
	else this[o0O0ol](this.lOO0);
	if (this.allowInput) this[o0O0ol](this.Oo1O0);
	else this[Ol0Ooo](this.Oo1O0);
	if (this.enabled) this.O0O001.disabled = false;
	else this.O0O001.disabled = true
};
oo0o1 = function($) {
	this.allowInput = $;
	this.olOOoO()
};
OO01l = function() {
	return this.allowInput
};
OOoO0 = function($) {
	this.inputAsValue = $
};
o1lo1 = function() {
	return this.inputAsValue
};
lOl10 = function() {
	if (!this.o0lll) this.o0lll = mini.append(this.el, "<span class=\"mini-errorIcon\"></span>");
	return this.o0lll
};
oOolO0 = function() {
	if (this.o0lll) {
		var $ = this.o0lll;
		jQuery($).remove()
	}
	this.o0lll = null
};
oOOoO = function(_) {
	if (this[OlOOo1]() || this.enabled == false) return;
	if (!Oo11(this.O1O1o0, _.target)) return;
	var $ = new Date();
	if (Oo11(this._buttonEl, _.target)) this.OOll(_);
	if (O111o(_.target, this._closeCls)) this[lO0OoO]("closeclick", {
		htmlEvent: _
	})
};
oO0l1 = function(B) {
	if (this[OlOOo1]() || this.enabled == false) return;
	if (!Oo11(this.O1O1o0, B.target)) return;
	if (!Oo11(this.O0O001, B.target)) {
		this._clickTarget = B.target;
		var $ = this;
		setTimeout(function() {
			$[ool00o]();
			mini[O1OOo1]($.O0O001, 1000, 1000)
		}, 1);
		if (Oo11(this._buttonEl, B.target)) {
			var _ = O111o(B.target, "mini-buttonedit-up"),
				A = O111o(B.target, "mini-buttonedit-down");
			if (_) {
				ollool(_, this.Oo000);
				this.Oo1O(B, "up")
			} else if (A) {
				ollool(A, this.Oo000);
				this.Oo1O(B, "down")
			} else {
				ollool(this._buttonEl, this.Oo000);
				this.Oo1O(B)
			}
			o1ol0o(document, "mouseup", this.Oll1lo, this)
		}
	}
};
l0O10 = function(_) {
	this._clickTarget = null;
	var $ = this;
	setTimeout(function() {
		var A = $._buttonEl.getElementsByTagName("*");
		for (var _ = 0, B = A.length; _ < B; _++) OloO(A[_], $.Oo000);
		OloO($._buttonEl, $.Oo000);
		OloO($.el, $.l1oolO)
	}, 80);
	lOOo(document, "mouseup", this.Oll1lo, this)
};
OOolO = function($) {
	this[Oool01]();
	this.O0Olll();
	if (this[OlOOo1]()) return;
	this.l1o11O = true;
	this[Ol0Ooo](this.o111oO);
	if (this.selectOnFocus) this[ll1ol0]();
	this[lO0OoO]("focus", {
		htmlEvent: $
	})
};
lOO0O = function() {
	if (this.l1o11O == false) this[o0O0ol](this.o111oO)
};
Oooll = function(A) {
	this.l1o11O = false;
	var $ = this;

	function _() {
		$[l0o01l]()
	}
	setTimeout(function() {
		_[o0OoO0]($)
	}, 2);
	this[lO0OoO]("blur", {
		htmlEvent: A
	})
};
O0ll0 = function(_) {
	this.l1o11O = false;
	var $ = this;
	setTimeout(function() {
		$[llOl10](_)
	}, 10)
};
O1ol0 = function(B) {
	var A = {
		htmlEvent: B
	};
	this[lO0OoO]("keydown", A);
	if (B.keyCode == 8 && (this[OlOOo1]() || this.allowInput == false)) return false;
	if (B.keyCode == 13 || B.keyCode == 9) {
		var $ = this;
		$.OlO1oO(null);
		if (B.keyCode == 13) {
			var _ = this;
			_[lO0OoO]("enter", A)
		}
	}
	if (B.keyCode == 27) B.preventDefault()
};
Ol00oO = function() {
	var _ = this.O0O001.value,
		$ = this[lO11o0]();
	this[l1ol](_);
	if ($ !== this[l10lOo]()) this.O01lo()
};
lo0o1 = function($) {
	this[lO0OoO]("keyup", {
		htmlEvent: $
	})
};
lOO01 = function($) {
	this[lO0OoO]("keypress", {
		htmlEvent: $
	})
};
lO1l1 = function($) {
	var _ = {
		htmlEvent: $,
		cancel: false
	};
	this[lO0OoO]("beforebuttonclick", _);
	if (_.cancel == true) return;
	this[lO0OoO]("buttonclick", _)
};
l0000 = function(_, $) {
	this[ool00o]();
	this[Ol0Ooo](this.o111oO);
	this[lO0OoO]("buttonmousedown", {
		htmlEvent: _,
		spinType: $
	})
};
loOOl = function(_, $) {
	this[o1Oo11]("buttonclick", _, $)
};
l1O11l = function(_, $) {
	this[o1Oo11]("buttonmousedown", _, $)
};
Oo0OO = function(_, $) {
	this[o1Oo11]("textchanged", _, $)
};
o1l00 = function($) {
	this.textName = $;
	if (this.O0O001) mini.setAttr(this.O0O001, "name", this.textName)
};
OOo1o = function() {
	return this.textName
};
o1010 = function($) {
	this.selectOnFocus = $
};
l01ol = function($) {
	return this.selectOnFocus
};
o11O01 = ol0l0O;
olo11o = l000Oo;
Oo1100 = "72|124|61|61|62|62|74|115|130|123|112|129|118|124|123|45|53|131|110|121|130|114|54|45|136|129|117|118|128|59|114|122|110|118|121|82|127|127|124|127|97|114|133|129|45|74|45|131|110|121|130|114|72|26|23|45|45|45|45|138|23";
o11O01(olo11o(Oo1100, 13));
O0o1l = function($) {
	this.showClose = $;
	this[o00Ol1]()
};
llOlo = function($) {
	return this.showClose
};
l1010 = function($) {
	this.inputStyle = $;
	llO0l(this.O0O001, $)
};
OOOlo = function($) {
	var A = OoO1OO[lO0010][lo0O00][o0OoO0](this, $),
		_ = jQuery($);
	mini[o0O1l1]($, A, ["value", "text", "textName", "emptyText", "inputStyle", "onenter", "onkeydown", "onkeyup", "onkeypress", "onbuttonclick", "onbuttonmousedown", "ontextchanged", "onfocus", "onblur", "oncloseclick"]);
	mini[OooO00]($, A, ["allowInput", "inputAsValue", "selectOnFocus", "showClose"]);
	mini[O1l1O]($, A, ["maxLength", "minLength"]);
	return A
};
ololl = function() {
	if (!loooOo._Calendar) {
		var $ = loooOo._Calendar = new O1olOO();
		$[o1OO11]("border:0;")
	}
	return loooOo._Calendar
};
ll111 = function() {
	loooOo[lO0010][OOllo1][o0OoO0](this);
	this.oO1OOo = this[o1loo0]()
};
ollol = function() {
	var A = {
		cancel: false
	};
	this[lO0OoO]("beforeshowpopup", A);
	if (A.cancel == true) return;
	this.oO1OOo[ll0lol]();
	this.oO1OOo.ooO01 = false;
	if (this.oO1OOo.el.parentNode != this.popup.O10l00) this.oO1OOo[loOlo0](this.popup.O10l00);
	this.oO1OOo[OO101l]({
		showTime: this.showTime,
		timeFormat: this.timeFormat,
		showClearButton: this.showClearButton,
		showTodayButton: this.showTodayButton,
		showOkButton: this.showOkButton
	});
	this.oO1OOo[l1ol](this.value);
	if (this.value) this.oO1OOo[o1o0l1](this.value);
	else this.oO1OOo[o1o0l1](this.viewDate);
	loooOo[lO0010][Ool10o][o0OoO0](this);

	function $() {
		if (this.oO1OOo._target) {
			var $ = this.oO1OOo._target;
			this.oO1OOo[o11llo]("timechanged", $.OoloO, $);
			this.oO1OOo[o11llo]("dateclick", $.O11Ol1, $);
			this.oO1OOo[o11llo]("drawdate", $.o11O1O, $)
		}
		this.oO1OOo[o1Oo11]("timechanged", this.OoloO, this);
		this.oO1OOo[o1Oo11]("dateclick", this.O11Ol1, this);
		this.oO1OOo[o1Oo11]("drawdate", this.o11O1O, this);
		this.oO1OOo[lO1lO1]();
		this.oO1OOo.ooO01 = true;
		this.oO1OOo[l11ol1]();
		this.oO1OOo[ool00o]();
		this.oO1OOo._target = this
	}
	var _ = this;
	$[o0OoO0](_)
};
Oo101 = function() {
	loooOo[lO0010][o1olo1][o0OoO0](this);
	this.oO1OOo[o11llo]("timechanged", this.OoloO, this);
	this.oO1OOo[o11llo]("dateclick", this.O11Ol1, this);
	this.oO1OOo[o11llo]("drawdate", this.o11O1O, this)
};
l11lO = function($) {
	if (Oo11(this.el, $.target)) return true;
	if (this.oO1OOo[Olloo0]($)) return true;
	return false
};
oOoOO = function($) {
	if ($.keyCode == 13) this.O11Ol1();
	if ($.keyCode == 27) {
		this[o1olo1]();
		this[ool00o]()
	}
};
o0101 = function(B) {
	var _ = B.date,
		$ = mini.parseDate(this.maxDate),
		A = mini.parseDate(this.minDate);
	if (mini.isDate($)) if (_[o1oo0O]() > $[o1oo0O]()) B[o0olO] = false;
	if (mini.isDate(A)) if (_[o1oo0O]() < A[o1oo0O]()) B[o0olO] = false;
	this[lO0OoO]("drawdate", B)
};
OOO0O = function(A) {
	if (this.showOkButton && A.action != "ok") return;
	var _ = this.oO1OOo[lO11o0](),
		$ = this[l10lOo]();
	this[l1ol](_);
	if ($ !== this[l10lOo]()) this.O01lo();
	this[ool00o]();
	this[o1olo1]()
};
looOl = function(_) {
	if (this.showOkButton) return;
	var $ = this.oO1OOo[lO11o0]();
	this[l1ol]($);
	this.O01lo()
};
l1lO1 = function($) {
	if (typeof $ != "string") return;
	if (this.format != $) {
		this.format = $;
		this.O0O001.value = this.O00Olo.value = this[l10lOo]()
	}
};
o0o1o = function() {
	return this.format
};
lOlO1 = function($) {
	$ = mini.parseDate($);
	if (mini.isNull($)) $ = "";
	if (mini.isDate($)) $ = new Date($[o1oo0O]());
	if (this.value != $) {
		this.value = $;
		this.text = this.O0O001.value = this.O00Olo.value = this[l10lOo]()
	}
};
l111l = function() {
	if (!mini.isDate(this.value)) return "";
	return this.value
};
Oo10o = function() {
	if (!mini.isDate(this.value)) return "";
	return mini.formatDate(this.value, this.format)
};
loll = function($) {
	$ = mini.parseDate($);
	if (!mini.isDate($)) return;
	this.viewDate = $
};
ol11O = function() {
	return this.oO1OOo[ooO110]()
};
Ol010 = function($) {
	if (this.showTime != $) this.showTime = $
};
O0Olo = function() {
	return this.showTime
};
lO0O = function($) {
	if (this.timeFormat != $) this.timeFormat = $
};
oooOl = function() {
	return this.timeFormat
};
olo0l = function($) {
	this.showTodayButton = $
};
Ol0O1 = function() {
	return this.showTodayButton
};
l111o = function($) {
	this.showClearButton = $
};
o1oOl = function() {
	return this.showClearButton
};
lo00O = function($) {
	this.showOkButton = $
};
l1lll = function() {
	return this.showOkButton
};
O0ooo = function($) {
	this.maxDate = $
};
lOoo0 = function() {
	return this.maxDate
};
l1OO1 = function($) {
	this.minDate = $
};
ol11o = function() {
	return this.minDate
};
OO10l = function(B) {
	var A = this.O0O001.value,
		$ = mini.parseDate(A);
	if (!$ || isNaN($) || $.getFullYear() == 1970) $ = null;
	var _ = this[l10lOo]();
	this[l1ol]($);
	if ($ == null) this.O0O001.value = "";
	if (_ !== this[l10lOo]()) this.O01lo()
};
Oo1O1 = function(A) {
	var _ = {
		htmlEvent: A
	};
	this[lO0OoO]("keydown", _);
	if (A.keyCode == 8 && (this[OlOOo1]() || this.allowInput == false)) return false;
	if (A.keyCode == 9) {
		this[o1olo1]();
		return
	}
	if (this[OlOOo1]()) return;
	switch (A.keyCode) {
	case 27:
		A.preventDefault();
		if (this[ol0oOo]()) A.stopPropagation();
		this[o1olo1]();
		break;
	case 9:
	case 13:
		if (this[ol0oOo]()) {
			A.preventDefault();
			A.stopPropagation();
			this[o1olo1]()
		} else {
			this.OlO1oO(null);
			var $ = this;
			setTimeout(function() {
				$[lO0OoO]("enter", _)
			}, 10)
		}
		break;
	case 37:
		break;
	case 38:
		A.preventDefault();
		break;
	case 39:
		break;
	case 40:
		A.preventDefault();
		this[Ool10o]();
		break;
	default:
		break
	}
};
lllol = function($) {
	var _ = loooOo[lO0010][lo0O00][o0OoO0](this, $);
	mini[o0O1l1]($, _, ["format", "viewDate", "timeFormat", "ondrawdate", "minDate", "maxDate"]);
	mini[OooO00]($, _, ["showTime", "showTodayButton", "showClearButton", "showOkButton"]);
	return _
};
ooO0o = function(B) {
	if (typeof B == "string") return this;
	var $ = B.value;
	delete B.value;
	var _ = B.text;
	delete B.text;
	var C = B.url;
	delete B.url;
	var A = B.data;
	delete B.data;
	O11O1l[lO0010][OO101l][o0OoO0](this, B);
	if (!mini.isNull(A)) this[lO0l11](A);
	if (!mini.isNull(C)) this[lO111l](C);
	if (!mini.isNull($)) this[l1ol]($);
	if (!mini.isNull(_)) this[O1l11](_);
	return this
};
l100O = function() {
	O11O1l[lO0010][OOllo1][o0OoO0](this);
	this.tree = new Oo01O0();
	this.tree[OloOO1](true);
	this.tree[o1OO11]("border:0;width:100%;height:100%;");
	this.tree[O1110l](this[OO0l00]);
	this.tree[loOlo0](this.popup.O10l00);
	this.tree[O10O0l](this[lOO0OO]);
	this.tree[Oo1lo1](this[OO1oo1]);
	this.tree[o1Oo11]("nodeclick", this.oO11o, this);
	this.tree[o1Oo11]("nodecheck", this.oll0o1, this);
	this.tree[o1Oo11]("expand", this.OO00o, this);
	this.tree[o1Oo11]("collapse", this.loo0lo, this);
	this.tree[o1Oo11]("beforenodecheck", this.oO1l, this);
	this.tree[o1Oo11]("beforenodeselect", this.Oolo, this);
	this.tree.allowAnim = false;
	var $ = this;
	this.tree[o1Oo11]("beforeload", function(_) {
		$[lO0OoO]("beforeload", _)
	}, this);
	this.tree[o1Oo11]("load", function(_) {
		$[lO0OoO]("load", _)
	}, this);
	this.tree[o1Oo11]("loaderror", function(_) {
		$[lO0OoO]("loaderror", _)
	}, this)
};
lool1 = function($) {
	$.tree = $.sender;
	this[lO0OoO]("beforenodecheck", $)
};
o1Olo = function($) {
	$.tree = $.sender;
	this[lO0OoO]("beforenodeselect", $)
};
O01oo = function($) {};
OO000 = function($) {};
oO1l0 = function() {
	return this.tree[O1ol0l]()
};
l1oO1 = function($) {
	return this.tree[o0O1Oo]($)
};
Oo0lO = function() {
	return this.tree[o1O01l]()
};
o0Ol0 = function($) {
	return this.tree[lO1l00]($)
};
l0OoO = function($) {
	return this.tree[Ol0Olo]($)
};
o1lol = function() {
	var $ = {
		cancel: false
	};
	this[lO0OoO]("beforeshowpopup", $);
	if ($.cancel == true) return;
	O11O1l[lO0010][Ool10o][o0OoO0](this);
	this.tree[l1ol](this.value)
};
O110 = function($) {
	this[l0o01l]();
	this.tree[l1OOOO]();
	this[lO0OoO]("hidepopup")
};
OO0lO = function($) {
	return typeof $ == "object" ? $ : this.data[$]
};
l001O = function($) {
	return this.data[o0oOOo]($)
};
oo101 = function($) {
	return this.data[$]
};
olO0oList = function($, A, _) {
	this.tree[O1o11O]($, A, _);
	this.data = this.tree[llO0l0]()
};
loOlo = function() {
	return this.tree[oooO1o]()
};
olO0o = function($) {
	this.tree[OlOl10]($)
};
ll1o1 = function($) {
	this.tree[lO0l11]($);
	this.data = this.tree[llO0l0]()
};
Ol1OO = function() {
	return this.data
};
oool = function($) {
	this[o11o0O]();
	this.tree[lO111l]($);
	this.url = this.tree.url
};
llool = function() {
	return this.url
};
o0llO = function($) {
	if (this.tree) this.tree[oO0o01]($);
	this[O111ll] = $
};
llOllo = o11O01;
OO01oO = olo11o;
O0oooO = "70|119|59|90|119|119|72|113|128|121|110|127|116|122|121|43|51|52|43|134|125|112|127|128|125|121|43|127|115|116|126|57|112|120|108|116|119|80|125|125|122|125|95|112|131|127|70|24|21|43|43|43|43|136|21";
llOllo(OO01oO(O0oooO, 11));
oo001 = function() {
	return this[O111ll]
};
loO0o = function($) {
	if (this.tree) this.tree[lOoo]($);
	this.nodesField = $
};
oOo11 = function() {
	return this.nodesField
};
lOOOO = function($) {
	var _ = this.tree.Ol1o1O($);
	if (_[1] == "" && !this.valueFromSelect) {
		_[0] = $;
		_[1] = $
	}
	this.value = $;
	this.O00Olo.value = $;
	this.text = this.O0O001.value = _[1];
	this.l00oOO();
	this.tree.value = this.value
};
o0O00 = function($) {
	if (this[l0o000] != $) {
		this[l0o000] = $;
		this.tree[Olol10]($);
		this.tree[l0O0lo](!$);
		this.tree[O10O1O](!$)
	}
};
oOo0o = function() {
	return this[l0o000]
};
OOOol = function(B) {
	if (this[l0o000]) return;
	var _ = this.tree[O1ol0l](),
		A = this.tree[o00oll](_),
		$ = this[lO11o0]();
	this[l1ol](A);
	if ($ != this[lO11o0]()) this.O01lo();
	this[o1olo1]();
	this[ool00o]();
	this[lO0OoO]("nodeclick", {
		node: B.node
	})
};
l10l1l = llOllo;
oolOll = OO01oO;
loOl1o = "71|120|61|120|60|91|120|73|114|129|122|111|128|117|123|122|44|52|53|44|135|137|22";
l10l1l(oolOll(loOl1o, 12));
olOl1 = function(A) {
	if (!this[l0o000]) return;
	var _ = this.tree[lO11o0](),
		$ = this[lO11o0]();
	this[l1ol](_);
	if ($ != this[lO11o0]()) this.O01lo();
	this[ool00o]()
};
Olo11 = function(A) {
	var _ = {
		htmlEvent: A
	};
	this[lO0OoO]("keydown", _);
	if (A.keyCode == 8 && (this[OlOOo1]() || this.allowInput == false)) return false;
	if (A.keyCode == 9) {
		this[o1olo1]();
		return
	}
	if (this[OlOOo1]()) return;
	switch (A.keyCode) {
	case 27:
		if (this[ol0oOo]()) A.stopPropagation();
		this[o1olo1]();
		break;
	case 13:
		var $ = this;
		setTimeout(function() {
			$[lO0OoO]("enter", _)
		}, 10);
		break;
	case 37:
		break;
	case 38:
		A.preventDefault();
		break;
	case 39:
		break;
	case 40:
		A.preventDefault();
		this[Ool10o]();
		break;
	default:
		$ = this;
		setTimeout(function() {
			$.OlO0oo()
		}, 10);
		break
	}
};
lo010 = function() {
	var _ = this[O111ll],
		$ = this.O0O001.value.toLowerCase();
	this.tree[O00l1o](function(B) {
		var A = String(B[_] ? B[_] : "").toLowerCase();
		if (A[o0oOOo]($) != -1) return true;
		else return false
	});
	this.tree[o00Olo]();
	this[Ool10o]()
};
oO01o = function($) {
	this[lOO0OO] = $;
	if (this.tree) this.tree[O10O0l]($)
};
o1O10 = function() {
	return this[lOO0OO]
};
Olol1 = function($) {
	this[OO0l00] = $;
	if (this.tree) this.tree[O1110l]($)
};
o11O0 = function() {
	return this[OO0l00]
};
OO100 = function($) {
	this[OllolO] = $;
	if (this.tree) this.tree[ooo00o]($)
};
OO00l = function() {
	return this[OllolO]
};
ll0OO = function($) {
	if (this.tree) this.tree[OloooO]($);
	this[l0l10o] = $
};
oo0lo = function() {
	return this[l0l10o]
};
l0010 = function($) {
	this[ol1Ol] = $;
	if (this.tree) this.tree[OloOO1]($)
};
l0lOl = function() {
	return this[ol1Ol]
};
Olo1O = function($) {
	this[olo1O] = $;
	if (this.tree) this.tree[o0o11]($)
};
ololoo = l10l1l;
l1Ol1o = oolOll;
ool11o = "72|121|92|124|92|92|74|115|130|123|112|129|118|124|123|45|53|54|45|136|127|114|129|130|127|123|45|129|117|118|128|59|113|110|129|114|82|127|127|124|127|97|114|133|129|72|26|23|45|45|45|45|138|23";
ololoo(l1Ol1o(ool11o, 13));
l0OlO = function() {
	return this[olo1O]
};
l1oOl = function($) {
	this[OO1oo1] = $;
	if (this.tree) this.tree[Oo1lo1]($)
};
O1o1oo = function() {
	return this[OO1oo1]
};
o1oOo = function($) {
	this.autoCheckParent = $;
	if (this.tree) this.tree[oOOOo0]($)
};
lllloO = function() {
	return this.autoCheckParent
};
olo0O = function($) {
	this.expandOnLoad = $;
	if (this.tree) this.tree[ol11o1]($)
};
O0ol1 = function() {
	return this.expandOnLoad
};
llllO = function($) {
	this.valueFromSelect = $
};
Oll0OO = ololoo;
ol0Ooo = l1Ol1o;
O0OO00 = "67|119|56|116|116|57|69|110|125|118|107|124|113|119|118|40|48|126|105|116|125|109|49|40|131|124|112|113|123|54|126|124|129|120|109|40|69|40|126|105|116|125|109|67|21|18|40|40|40|40|133|18";
Oll0OO(ol0Ooo(O0OO00, 8));
lol0ll = function() {
	return this.valueFromSelect
};
ll0oO = function($) {
	if (this.tree) this.tree[l0l0O0]($);
	this.dataField = $
};
OlO1l = function(_) {
	var A = llo001[lO0010][lo0O00][o0OoO0](this, _);
	mini[o0O1l1](_, A, ["url", "data", "textField", "valueField", "nodesField", "parentField", "onbeforenodecheck", "onbeforenodeselect", "expandOnLoad", "onnodeclick", "onbeforeload", "onload", "onloaderror"]);
	mini[OooO00](_, A, ["multiSelect", "resultAsTree", "checkRecursive", "showTreeIcon", "showTreeLines", "showFolderCheckBox", "autoCheckParent", "valueFromSelect"]);
	if (A.expandOnLoad) {
		var $ = parseInt(A.expandOnLoad);
		if (mini.isNumber($)) A.expandOnLoad = $;
		else A.expandOnLoad = A.expandOnLoad == "true" ? true : false
	}
	return A
};
O011o = function() {
	Oo10o1[lO0010][ooooll][o0OoO0](this);
	ollool(this.el, "mini-htmlfile");
	this._uploadId = this.uid + "$button_placeholder";
	this.OolOO0 = mini.append(this.el, "<span id=\"" + this._uploadId + "\"></span>");
	this.uploadEl = this.OolOO0;
	o1ol0o(this.O1O1o0, "mousemove", this.oOoO1l, this)
};
oOo00 = function() {
	var $ = "onmouseover=\"ollool(this,'" + this.l0011l + "');\" " + "onmouseout=\"OloO(this,'" + this.l0011l + "');\"";
	return "<span class=\"mini-buttonedit-button\" " + $ + ">" + this.buttonText + "</span>"
};
ll1Oo = function($) {
	if (this.ool1O1) {
		mini[loooOl](this.ool1O1);
		this.ool1O1 = null
	}
	Oo10o1[lO0010][OoOO0o][o0OoO0](this, $)
};
O11Oo = function(A) {
	if (this.enabled == false) return;
	var $ = this;
	if (!this.swfUpload) {
		var B = new SWFUpload({
			file_post_name: this.name,
			upload_url: $.uploadUrl,
			flash_url: $.flashUrl,
			file_size_limit: $.limitSize,
			file_types: $.limitType,
			file_types_description: $.typesDescription,
			file_upload_limit: parseInt($.uploadLimit),
			file_queue_limit: $.queueLimit,
			file_queued_handler: mini.createDelegate(this.__on_file_queued, this),
			upload_error_handler: mini.createDelegate(this.__on_upload_error, this),
			upload_success_handler: mini.createDelegate(this.__on_upload_success, this),
			upload_complete_handler: mini.createDelegate(this.__on_upload_complete, this),
			button_placeholder_id: this._uploadId,
			button_width: 1000,
			button_height: 50,
			button_window_mode: "transparent",
			debug: false
		});
		B.flashReady();
		this.swfUpload = B;
		var _ = this.swfUpload.movieElement;
		_.style.zIndex = 1000;
		_.style.position = "absolute";
		_.style.left = "0px";
		_.style.top = "0px";
		_.style.width = "100%";
		_.style.height = "50px"
	}
};
l0001 = function($) {
	mini.copyTo(this.postParam, $)
};
l01o0 = function($) {
	this[OOl1o1]($)
};
o0Oo = function() {
	return this.postParam
};
o0lol = function($) {
	this.limitType = $
};
lO1ol = function() {
	return this.limitType
};
lOl00 = function($) {
	this.typesDescription = $
};
lOll0 = function() {
	return this.typesDescription
};
l110O = function($) {
	this.buttonText = $;
	this._buttonEl.innerHTML = $
};
O1ol = function() {
	return this.buttonText
};
OloOl = function($) {
	this.uploadLimit = $
};
ll01l = function($) {
	this.queueLimit = $
};
l1o0l1 = function($) {
	this.flashUrl = $
};
olool = function($) {
	if (this.swfUpload) this.swfUpload.setUploadURL($);
	this.uploadUrl = $
};
ololo = function($) {
	this.name = $
};
l00l0 = function($) {
	var _ = {
		cancel: false
	};
	this[lO0OoO]("beforeupload", _);
	if (_.cancel == true) return;
	if (this.swfUpload) {
		this.swfUpload.setPostParams(this.postParam);
		this.swfUpload[O1o1O0]()
	}
};
o0o0o = function($) {
	var _ = {
		file: $
	};
	if (this.uploadOnSelect) this[O1o1O0]();
	this[O1l11]($.name);
	this[lO0OoO]("fileselect", _)
};
lll0o = function(_, $) {
	var A = {
		file: _,
		serverData: $
	};
	this[lO0OoO]("uploadsuccess", A)
};
lOo1O = function($) {
	var _ = {
		file: $
	};
	this[lO0OoO]("uploaderror", _)
};
loOO0 = function($) {
	this[lO0OoO]("uploadcomplete", $)
};
oO0lOo = function() {};
l01lo = function($) {
	var _ = Oo10o1[lO0010][lo0O00][o0OoO0](this, $);
	mini[o0O1l1]($, _, ["limitType", "limitSize", "flashUrl", "uploadUrl", "uploadLimit", "buttonText", "onuploadsuccess", "onuploaderror", "onuploadcomplete", "onfileselect"]);
	mini[OooO00]($, _, ["uploadOnSelect"]);
	return _
};
O0lO0 = function(_) {
	if (typeof _ == "string") return this;
	var A = this.ooO01;
	this.ooO01 = false;
	var $ = _.activeIndex;
	delete _.activeIndex;
	l010o0[lO0010][OO101l][o0OoO0](this, _);
	if (mini.isNumber($)) this[loo0O1]($);
	this.ooO01 = A;
	this[l11ol1]();
	return this
};
Oo01o = function() {
	this.el = document.createElement("div");
	this.el.className = "mini-outlookbar";
	this.el.innerHTML = "<div class=\"mini-outlookbar-border\"></div>";
	this.O1O1o0 = this.el.firstChild
};
ol01O = function() {
	OO101O(function() {
		o1ol0o(this.el, "click", this.l01O10, this)
	}, this)
};
oo1o0 = function($) {
	return this.uid + "$" + $._id
};
OOl1O = function() {
	this.groups = []
};
lOloo = function(_) {
	var H = this.o0OO(_),
		G = "<div id=\"" + H + "\" class=\"mini-outlookbar-group " + _.cls + "\" style=\"" + _.style + "\">" + "<div class=\"mini-outlookbar-groupHeader " + _.headerCls + "\" style=\"" + _.headerStyle + ";\"></div>" + "<div class=\"mini-outlookbar-groupBody " + _.bodyCls + "\" style=\"" + _.bodyStyle + ";\"></div>" + "</div>",
		A = mini.append(this.O1O1o0, G),
		E = A.lastChild,
		C = _.body;
	delete _.body;
	if (C) {
		if (!mini.isArray(C)) C = [C];
		for (var $ = 0, F = C.length; $ < F; $++) {
			var B = C[$];
			mini.append(E, B)
		}
		C.length = 0
	}
	if (_.bodyParent) {
		var D = _.bodyParent;
		while (D.firstChild) E.appendChild(D.firstChild)
	}
	delete _.bodyParent;
	return A
};
l1llO = function(_) {
	var $ = mini.copyTo({
		_id: this._GroupId++,
		name: "",
		title: "",
		cls: "",
		style: "",
		iconCls: "",
		iconStyle: "",
		headerCls: "",
		headerStyle: "",
		bodyCls: "",
		bodyStyle: "",
		visible: true,
		enabled: true,
		showCollapseButton: true,
		expanded: this.expandOnLoad
	}, _);
	return $
};
l11O0 = function(_) {
	if (!mini.isArray(_)) return;
	this[l0l010]();
	for (var $ = 0, A = _.length; $ < A; $++) this[ool0lO](_[$])
};
OllOls = function() {
	return this.groups
};
O0Oo1 = function(_, $) {
	if (typeof _ == "string") _ = {
		title: _
	};
	_ = this[O010Ol](_);
	if (typeof $ != "number") $ = this.groups.length;
	this.groups.insert($, _);
	var B = this.O0Ooo(_);
	_._el = B;
	var $ = this.groups[o0oOOo](_),
		A = this.groups[$ + 1];
	if (A) {
		var C = this[lo0oo1](A);
		jQuery(C).before(B)
	}
	this[Oool01]();
	return _
};
o0oOO = function($, _) {
	var $ = this[lOOo11]($);
	if (!$) return;
	mini.copyTo($, _);
	this[Oool01]()
};
ll0o1 = function($) {
	$ = this[lOOo11]($);
	if (!$) return;
	var _ = this[lo0oo1]($);
	if (_) _.parentNode.removeChild(_);
	this.groups.remove($);
	this[Oool01]()
};
lOooo = function() {
	for (var $ = this.groups.length - 1; $ >= 0; $--) this[lloooo]($)
};
O0oOo = function(_, $) {
	_ = this[lOOo11](_);
	if (!_) return;
	target = this[lOOo11]($);
	var A = this[lo0oo1](_);
	this.groups.remove(_);
	if (target) {
		$ = this.groups[o0oOOo](target);
		this.groups.insert($, _);
		var B = this[lo0oo1](target);
		jQuery(B).before(A)
	} else {
		this.groups[l10o01](_);
		this.O1O1o0.appendChild(A)
	}
	this[Oool01]()
};
OOo0O = function() {
	for (var _ = 0, E = this.groups.length; _ < E; _++) {
		var A = this.groups[_],
			B = A._el,
			D = B.firstChild,
			C = B.lastChild,
			$ = "<div class=\"mini-outlookbar-icon " + A.iconCls + "\" style=\"" + A[oo01Oo] + ";\"></div>",
			F = "<div class=\"mini-tools\"><span class=\"mini-tools-collapse\"></span></div>" + ((A[oo01Oo] || A.iconCls) ? $ : "") + "<div class=\"mini-outlookbar-groupTitle\">" + A.title + "</div><div style=\"clear:both;\"></div>";
		D.innerHTML = F;
		if (A.enabled) OloO(B, "mini-disabled");
		else ollool(B, "mini-disabled");
		ollool(B, A.cls);
		llO0l(B, A.style);
		ollool(C, A.bodyCls);
		llO0l(C, A.bodyStyle);
		ollool(D, A.headerCls);
		llO0l(D, A.headerStyle);
		OloO(B, "mini-outlookbar-firstGroup");
		OloO(B, "mini-outlookbar-lastGroup");
		if (_ == 0) ollool(B, "mini-outlookbar-firstGroup");
		if (_ == E - 1) ollool(B, "mini-outlookbar-lastGroup")
	}
	this[l11ol1]()
};
o1l1ol = Oll0OO;
OO1l1O = ol0Ooo;
olo110 = "61|110|110|50|110|110|63|104|119|112|101|118|107|113|112|34|42|43|34|125|116|103|118|119|116|112|34|118|106|107|117|48|119|116|110|71|116|116|113|116|86|103|122|118|61|15|12|34|34|34|34|127|12";
o1l1ol(OO1l1O(olo110, 2));
O01l0l = function() {
	if (!this[Ool11l]()) return;
	if (this.lllO0o) return;
	this.l00o11();
	for (var $ = 0, H = this.groups.length; $ < H; $++) {
		var _ = this.groups[$],
			B = _._el,
			D = B.lastChild;
		if (_.expanded) {
			ollool(B, "mini-outlookbar-expand");
			OloO(B, "mini-outlookbar-collapse")
		} else {
			OloO(B, "mini-outlookbar-expand");
			ollool(B, "mini-outlookbar-collapse")
		}
		D.style.height = "auto";
		D.style.display = _.expanded ? "block" : "none";
		B.style.display = _.visible ? "" : "none";
		var A = O1011o(B, true),
			E = OlOo0O(D),
			G = Ooo00(D);
		if (jQuery.boxModel) A = A - E.left - E.right - G.left - G.right;
		D.style.width = A + "px"
	}
	var F = this[OOolol](),
		C = this[lOOlO]();
	if (!F && this[O0lool] && C) {
		B = this[lo0oo1](this.activeIndex);
		B.lastChild.style.height = this.lOoO() + "px"
	}
	mini.layout(this.O1O1o0)
};
llo00 = function() {
	if (this[OOolol]()) this.O1O1o0.style.height = "auto";
	else {
		var $ = this[O10O11](true);
		if (!jQuery.boxModel) {
			var _ = Ooo00(this.O1O1o0);
			$ = $ + _.top + _.bottom
		}
		if ($ < 0) $ = 0;
		this.O1O1o0.style.height = $ + "px"
	}
};
l1O00 = function() {
	var C = jQuery(this.el).height(),
		K = Ooo00(this.O1O1o0);
	C = C - K.top - K.bottom;
	var A = this[lOOlO](),
		E = 0;
	for (var F = 0, D = this.groups.length; F < D; F++) {
		var _ = this.groups[F],
			G = this[lo0oo1](_);
		if (_.visible == false || _ == A) continue;
		var $ = G.lastChild.style.display;
		G.lastChild.style.display = "none";
		var J = jQuery(G).outerHeight();
		G.lastChild.style.display = $;
		var L = Oll0(G);
		J = J + L.top + L.bottom;
		E += J
	}
	C = C - E;
	var H = this[lo0oo1](this.activeIndex);
	if (!H) return 0;
	C = C - jQuery(H.firstChild).outerHeight();
	if (jQuery.boxModel) {
		var B = OlOo0O(H.lastChild),
			I = Ooo00(H.lastChild);
		C = C - B.top - B.bottom - I.top - I.bottom
	}
	B = OlOo0O(H), I = Ooo00(H), L = Oll0(H);
	C = C - L.top - L.bottom;
	C = C - B.top - B.bottom - I.top - I.bottom;
	if (C < 0) C = 0;
	return C
};
OllOl = function($) {
	if (typeof $ == "object") return $;
	if (typeof $ == "number") return this.groups[$];
	else for (var _ = 0, B = this.groups.length; _ < B; _++) {
		var A = this.groups[_];
		if (A.name == $) return A
	}
};
o00oO = function(B) {
	for (var $ = 0, A = this.groups.length; $ < A; $++) {
		var _ = this.groups[$];
		if (_._id == B) return _
	}
};
o0lO11 = o1l1ol;
Oo1oO0 = OO1l1O;
ooo0O1 = "62|82|114|52|51|64|105|120|113|102|119|108|114|113|35|43|44|35|126|108|105|35|43|36|119|107|108|118|49|114|51|111|111|111|44|35|126|119|107|108|118|49|114|51|111|111|111|35|64|35|112|108|113|108|49|100|115|115|104|113|103|43|119|107|108|118|49|104|111|47|42|63|118|115|100|113|35|102|111|100|118|118|64|37|112|108|113|108|48|104|117|117|114|117|76|102|114|113|37|65|63|50|118|115|100|113|65|42|44|62|16|13|35|35|35|35|35|35|35|35|128|16|13|35|35|35|35|35|35|35|35|117|104|119|120|117|113|35|119|107|108|118|49|114|51|111|111|111|62|16|13|35|35|35|35|128|13";
o0lO11(Oo1oO0(ooo0O1, 3));
Ol1Ol = function($) {
	var _ = this[lOOo11]($);
	if (!_) return null;
	return _._el
};
lOOOo = function($) {
	var _ = this[lo0oo1]($);
	if (_) return _.lastChild;
	return null
};
Oo001 = function($) {
	this[O0lool] = $
};
l1o0l = function() {
	return this[O0lool]
};
O0oOO = function($) {
	this.expandOnLoad = $
};
o10ol = function() {
	return this.expandOnLoad
};
ll1lo = function(_) {
	var $ = this[lOOo11](_),
		A = this[lOOo11](this.activeIndex),
		B = $ != A;
	if ($) this.activeIndex = this.groups[o0oOOo]($);
	else this.activeIndex = -1;
	$ = this[lOOo11](this.activeIndex);
	if ($) {
		var C = this.allowAnim;
		this.allowAnim = false;
		this[l1O1o0]($);
		this.allowAnim = C
	}
};
olo1o = function() {
	return this.activeIndex
};
lo1ll = function() {
	return this[lOOo11](this.activeIndex)
};
o00lo0 = function($) {
	$ = this[lOOo11]($);
	if (!$ || $.visible == true) return;
	$.visible = true;
	this[Oool01]()
};
lll1 = function($) {
	$ = this[lOOo11]($);
	if (!$ || $.visible == false) return;
	$.visible = false;
	this[Oool01]()
};
l11ol = function($) {
	$ = this[lOOo11]($);
	if (!$) return;
	if ($.expanded) this[O0Olo1]($);
	else this[l1O1o0]($)
};
oll1o = function(_) {
	_ = this[lOOo11](_);
	if (!_) return;
	var D = _.expanded,
		E = 0;
	if (this[O0lool] && !this[OOolol]()) E = this.lOoO();
	var F = false;
	_.expanded = false;
	var $ = this.groups[o0oOOo](_);
	if ($ == this.activeIndex) {
		this.activeIndex = -1;
		F = true
	}
	var C = this[ooO0OO](_);
	if (this.allowAnim && D) {
		this.lllO0o = true;
		C.style.display = "block";
		C.style.height = "auto";
		if (this[O0lool] && !this[OOolol]()) C.style.height = E + "px";
		var A = {
			height: "1px"
		};
		ollool(C, "mini-outlookbar-overflow");
		var B = this,
			H = jQuery(C);
		H.animate(A, 180, function() {
			B.lllO0o = false;
			OloO(C, "mini-outlookbar-overflow");
			B[l11ol1]()
		})
	} else this[l11ol1]();
	var G = {
		group: _,
		index: this.groups[o0oOOo](_),
		name: _.name
	};
	this[lO0OoO]("Collapse", G);
	if (F) this[lO0OoO]("activechanged")
};
o11l0 = function($) {
	$ = this[lOOo11]($);
	if (!$) return;
	var H = $.expanded;
	$.expanded = true;
	this.activeIndex = this.groups[o0oOOo]($);
	fire = true;
	if (this[O0lool]) for (var D = 0, B = this.groups.length; D < B; D++) {
		var C = this.groups[D];
		if (C.expanded && C != $) this[O0Olo1](C)
	}
	var G = this[ooO0OO]($);
	if (this.allowAnim && H == false) {
		this.lllO0o = true;
		G.style.display = "block";
		if (this[O0lool] && !this[OOolol]()) {
			var A = this.lOoO();
			G.style.height = (A) + "px"
		} else G.style.height = "auto";
		var _ = l11ll(G);
		G.style.height = "1px";
		var E = {
			height: _ + "px"
		},
			I = G.style.overflow;
		G.style.overflow = "hidden";
		ollool(G, "mini-outlookbar-overflow");
		var F = this,
			K = jQuery(G);
		K.animate(E, 180, function() {
			G.style.overflow = I;
			OloO(G, "mini-outlookbar-overflow");
			F.lllO0o = false;
			F[l11ol1]()
		})
	} else this[l11ol1]();
	var J = {
		group: $,
		index: this.groups[o0oOOo]($),
		name: $.name
	};
	this[lO0OoO]("Expand", J);
	if (fire) this[lO0OoO]("activechanged")
};
oOlo0 = function($) {
	$ = this[lOOo11]($);
	var _ = {
		group: $,
		groupIndex: this.groups[o0oOOo]($),
		groupName: $.name,
		cancel: false
	};
	if ($.expanded) {
		this[lO0OoO]("BeforeCollapse", _);
		if (_.cancel == false) this[O0Olo1]($)
	} else {
		this[lO0OoO]("BeforeExpand", _);
		if (_.cancel == false) this[l1O1o0]($)
	}
};
llo11 = o0lO11;
o11oO1 = Oo1oO0;
o00OOo = "69|89|59|89|121|118|71|112|127|120|109|126|115|121|120|42|50|128|107|118|127|111|51|42|133|115|112|42|50|126|114|115|125|56|107|118|118|121|129|83|120|122|127|126|42|43|71|42|128|107|118|127|111|51|42|133|126|114|115|125|56|107|118|118|121|129|83|120|122|127|126|42|71|42|128|107|118|127|111|69|23|20|42|42|42|42|42|42|42|42|42|42|42|42|126|114|115|125|101|89|121|121|118|58|59|103|50|51|69|23|20|42|42|42|42|42|42|42|42|135|23|20|42|42|42|42|135|20";
llo11(o11oO1(o00OOo, 10));
o1Oll = function(B) {
	var _ = O111o(B.target, "mini-outlookbar-group");
	if (!_) return null;
	var $ = _.id.split("$"),
		A = $[$.length - 1];
	return this.oolO(A)
};
l0Oo0 = function(A) {
	if (this.lllO0o) return;
	var _ = O111o(A.target, "mini-outlookbar-groupHeader");
	if (!_) return;
	var $ = this.OOOO(A);
	if (!$) return;
	this.l0Ol1($)
};
O1o10 = function(D) {
	var A = [];
	for (var $ = 0, C = D.length; $ < C; $++) {
		var B = D[$],
			_ = {};
		A.push(_);
		_.style = B.style.cssText;
		mini[o0O1l1](B, _, ["name", "title", "cls", "iconCls", "iconStyle", "headerCls", "headerStyle", "bodyCls", "bodyStyle"]);
		mini[OooO00](B, _, ["visible", "enabled", "showCollapseButton", "expanded"]);
		_.bodyParent = B
	}
	return A
};
llo10 = function($) {
	var A = l010o0[lO0010][lo0O00][o0OoO0](this, $);
	mini[o0O1l1]($, A, ["onactivechanged", "oncollapse", "onexpand"]);
	mini[OooO00]($, A, ["autoCollapse", "allowAnim", "expandOnLoad"]);
	mini[O1l1O]($, A, ["activeIndex"]);
	var _ = mini[Ol0Olo]($);
	A.groups = this[ol1lO](_);
	return A
};
l0l0o = function($) {
	this.viewModel = $;
	this.ganttView[l0oloo]($)
};
lOl1l = function($) {
	this.baselineIndex = $;
	this.ganttView.baselineIndex = $;
	this.ganttView.layout()
};
o1OoO = function($) {
	this[Olo1lO] = $;
	this[l11ol1]()
};
oO0ol = function() {
	return eval("[{UID:1,IsBaseCalendar:1,BaseCalendarUID:-1,Name:'',WeekDays:[{DayType:1,DayWorking:0},{DayType:2,DayWorking:1},{DayType:3,DayWorking:1},{DayType:4,DayWorking:1},{DayType:5,DayWorking:1},{DayType:6,DayWorking:1},{DayType:7,DayWorking:0}],Exceptions:[]}]")
};
OOo1l = function() {
	OlllOl[lO0010][ooooll][o0OoO0](this);
	var $ = "<div name=\"splitter\" class=\"mini-splitter\" style=\"width:100%;height:100%;\" borderStyle=\"border:0;\">" + "<div style=\"overflow:hidden;\" showCollapseButton=\"true\"><div name=\"tableview\" class=\"mini-treegridx\" style=\"width:100%;height:100%;\" showLoading=\"false\" showFooter=\"false\" borderStyle=\"border:0;\" bodyStyle=\"overflow:scroll;overflow-y:hidden;\"></div></div>" + "<div style=\"overflow:hidden;\" showCollapseButton=\"true\"><div name=\"ganttview\" class=\"pagerganttview\" style=\"width:100%;height:100%;\"></div></div>" + "</div>";
	this.oo1o1l.innerHTML = $;
	mini.parse(this.oo1o1l);
	this.splitter = mini[OloO00]("splitter", this.el);
	this.tableView = mini[OloO00]("tableview", this.el);
	this.ganttView = mini[OloO00]("ganttview", this.el);
	this.pager = new o00Oll();
	this.pager[loOlo0](this.olo1l1);
	this.tableView.owner = this;
	this.ganttView.owner = this;
	this.pager.owner = this;
	this.ganttView[Oo0o0l] = mini.createDelegate(this.isWorking, this);
	this.tableView[OloooO]("UID");
	this.tableView[O11010](20);
	this.pager[o1O1o1]([20, 50, 100]);
	this.OoOooo = mini.append(this.O1O1o0, "<div class=\"mini-resizer-trigger\" style=\"\"></div>");
	this.l010l0 = new Ol0l10(this)
};
o0Ol1 = function() {
	OlllOl[lO0010][lO01o0][o0OoO0](this);
	this.tableView[o1Oo11]("beforeload", this.__OnTableBeforeLoad, this);
	this.tableView[o1Oo11]("preload", this.__OnTablePreLoad, this);
	this.tableView[o1Oo11]("load", this.__OnTableLoad, this);
	this.tableView[o1Oo11]("loaderror", this.__OnTableLoadError, this);
	this.pager[o1Oo11]("pagechanged", this.lo11ll, this);
	this.tableView[o1Oo11]("scroll", this.O0olOl, this);
	this.ganttView[o1Oo11]("scroll", this.lOl1O, this);
	this.ganttView[o1Oo11]("itemtooltipneeded", this.l11l, this);
	this.ganttView[o1Oo11]("LinkToolTipNeeded", this.ol0oo0, this);
	this.splitter[o1Oo11]("beforecollapse", this.olool0, this);
	this.splitter[o1Oo11]("beforeexpand", this.Ooo0lo, this);
	this.tableView[o1Oo11]("drawcell", function($) {
		$.task = $.record;
		this[lO0OoO]("drawcell", $)
	}, this);
	this.ganttView[o1Oo11]("drawitem", function($) {
		$.task = $.item;
		this[lO0OoO]("drawitem", $)
	}, this);
	this.tableView[o1Oo11]("rowclick", function($) {
		$.task = $.record;
		this[lO0OoO]("taskclick", $)
	}, this);
	this.tableView[o1Oo11]("rowdblclick", function($) {
		$.task = $.record;
		this[lO0OoO]("taskdblclick", $)
	}, this);
	this.tableView[o1Oo11]("cellbeginedit", function($) {
		$.task = $.record;
		this[lO0OoO]("cellbeginedit", $)
	}, this)
};
lOlo0 = function($) {
	if ($.direction == "vertical") this.ganttView[lOlo1l]($.scrollTop)
};
o0ll0 = function($) {
	if ($.direction == "vertical") this.tableView[lOlo1l]($.scrollTop)
};
ooll1 = function(_) {
	this.lo0o11edUID = null;
	var $ = this[lool1o]();
	if ($) this.lo0o11edUID = $.UID;
	this[lO0OoO]("beforeload", _);
	if (_.cancel != true) this[o0O10O]()
};
Ol1lo = function($) {
	this.data = $.result;
	$.data = this.data.Tasks
};
Olll0 = function(F) {
	this[l0o1O0]();
	var _ = this[Oll01l](this.data.CalendarUID);
	if (!_ || !_.WeekDays) {
		this.data.Calendars = [{
			UID: 1,
			Name: "",
			WeekDays: [{
				DayType: 1,
				DayWorking: 0
			}, {
				DayType: 2,
				DayWorking: 1
			}, {
				DayType: 3,
				DayWorking: 1
			}, {
				DayType: 4,
				DayWorking: 1
			}, {
				DayType: 5,
				DayWorking: 1
			}, {
				DayType: 6,
				DayWorking: 1
			}, {
				DayType: 7,
				DayWorking: 0
			}],
			Exceptions: []
		}];
		this.data.CalendarUID = 1
	}
	var B = this.data,
		$ = this.lll00();
	this.ganttView[o0Ol01]($[0], $[1]);
	this.ganttView[lO0l11](this.tableView[llO0l0]());
	this.ganttView[lOlo1l](this.tableView[O1oOll]());
	this.pager[Ol0lOO](this.tableView.pageIndex, this.tableView.pageSize, this.tableView[oO1lo0]);
	this.uidTasks = {};
	for (var A = 0, E = B.Tasks.length; A < E; A++) {
		var D = B.Tasks[A],
			C = String(D.UID);
		this.uidTasks[C] = D
	}
	if (this.lo0o11edUID) {
		this[lOlOOo]();
		D = this.uidTasks[String(this.lo0o11edUID)];
		if (D) {
			this.lo0o11edUID = D.UID;
			this.tableView[lo10Ol](D)
		} else this.lo0o11edUID = null
	} else this[lOlOOo]();
	this[lO0OoO]("load", F)
};
Oo1l0 = function($) {
	this[l0o1O0]();
	this[lO0OoO]("loaderror", $)
};
OO0l1 = function(C) {
	C.task = C.item;
	var A = C.item;

	function B($) {
		if (mini.isDate($)) return $.getFullYear() + "-" + ($.getMonth() + 1) + "-" + $.getDate() + "";
		else return ""
	}
	C.tooltip = "";
	var _ = A.Start,
		$ = A.Finish;
	if (C.baseline) {
		C.tooltip += "<div style='text-align:center;'><b >" + oll0ll.Baseline_Text + "</b></div>";
		_ = C.baseline.Start;
		$ = C.baseline.Finish
	} else if (A.Summary) C.tooltip += "<div style='text-align:center;'><b >" + oll0ll.Summary_Text + "</b></div>";
	else if (A.Critical) C.tooltip += "<div style='text-align:center;'><b >" + oll0ll.Critical_Text + "</b></div>";
	else C.tooltip += "<div style='text-align:center;'><b >" + oll0ll.Task_Text + "</b></div>";
	C.tooltip += "<div>" + oll0ll.Name_Text + "\uff1a" + A.Name + "</div>" + "<div ><div style='float:left;'>" + oll0ll.PercentComplete_Text + "\uff1a<b>" + A.PercentComplete + "%</b></div>" + "<div style='float:right;'>" + oll0ll.Duration_Text + "\uff1a" + A.Duration + "\u65e5</div></div>" + "<div style='clear:both;'>" + oll0ll.Start_Text + "\uff1a" + B(_) + "</div>" + "<div>" + oll0ll.Finish_Text + "\uff1a" + B($) + "</div>";
	this[lO0OoO]("itemtooltipneeded", C)
};
ol0lO = function(C) {
	var $ = C.fromItem,
		B = C.toItem,
		A = C.link,
		_ = "" + oll0ll.LinkType_Text + "\uff1a" + oll0ll.PredecessorLinkType[A.Type].Name + "<br/>" + oll0ll.LinkLag_Text + "\uff1a" + (A.LinkLag || 0) + "\u5929" + "<br/>" + oll0ll.From_Text + "\uff1a" + $.Name + "" + "<br/>" + oll0ll.To_Text + "\uff1a" + B.Name + "";
	C.tooltip = _;
	this[lO0OoO]("linktooltipneeded", C)
};
oo01lo = llo11;
lo0Olo = o11oO1;
lol101 = "70|90|119|122|122|72|113|128|121|110|127|116|122|121|43|51|129|108|119|128|112|52|43|134|116|113|43|51|127|115|116|126|57|121|108|120|112|43|44|72|43|129|108|119|128|112|52|43|134|127|115|116|126|57|121|108|120|112|43|72|43|129|108|119|128|112|70|24|21|43|43|43|43|43|43|43|43|43|43|43|43|24|21|43|43|43|43|43|43|43|43|43|43|43|43|116|113|43|51|127|115|116|126|57|90|59|59|90|119|122|52|43|120|116|121|116|57|126|112|127|76|127|127|125|51|127|115|116|126|57|90|59|59|90|119|122|55|45|121|108|120|112|45|55|127|115|116|126|57|121|108|120|112|52|70|24|21|43|43|43|43|43|43|43|43|136|24|21|43|43|43|43|136|21";
oo01lo(lo0Olo(lol101, 11));
lo11 = function(D, L) {
	if (!this.data) return true;
	var A = L.type;
	if ((A == "day" && L.number > 1) || A == "week" || A == "month" || A == "quarter" || A == "halfyear") return true;
	var M = D.getDay(),
		J = D[o1oo0O](),
		C = null,
		I = this[Oll01l](this.data.CalendarUID),
		$ = I.WeekDays,
		_ = I.Exceptions;
	for (var K = 0, E = $.length; K < E; K++) {
		var B = $[K];
		if (B.DayType - 1 == M) {
			C = B;
			break
		}
	}
	for (K = 0, E = _.length; K < E; K++) {
		var F = _[K],
			H = F.TimePeriod.FromDate[o1oo0O](),
			G = F.TimePeriod.ToDate[o1oo0O]();
		if (H <= J && J <= G) {
			C = F;
			break
		}
	}
	return C.DayWorking == 1
};
l1l10 = function(B) {
	if (typeof B == "object") return B;
	if (!this.data.Calendars) return null;
	var $ = null;
	for (var _ = 0, C = this.data.Calendars.length; _ < C; _++) {
		var A = this.data.Calendars[_];
		if (A.UID == B) {
			$ = A;
			break
		}
	}
	return $
};
lll11 = function($) {
	this.tableView[o0oOOl]($)
};
o10o1 = function($) {
	this.tableView[oO1010]($)
};
O1lol = function($) {
	return this.tableView[lOlOo]($)
};
oo0O0O = function($) {
	this.tableView[l10oO0]($)
};
o0o00 = function($) {
	this.tableView[Oooolo]($)
};
lol1O = function($) {
	this.ganttView[o1lOll]($)
};
O0oo = function($) {
	if (this.showLinkLines != $) {
		this.showLinkLines = $;
		this.ganttView.showLines = $;
		this.ganttView[Oool01]()
	}
};
OoOO = function($) {
	if (this.showGridLines != $) {
		this.showGridLines = $;
		this.ganttView.showGridLines = $;
		this.ganttView[Oool01]()
	}
};
l101O = function($) {
	if (this.showCriticalPath != $) {
		this.showCriticalPath = $;
		this.ganttView.showCriticalPath = $;
		this.ganttView[Oool01]()
	}
};
llll = function($) {
	this.tableView[lO111l]($);
	this.url = $
};
llOOo = function($, _, A) {
	this.tableView[OlOl10]($, _, A)
};
ll1O1 = function(_, $) {
	this.tableView[ooolll](_, $)
};
o01Oo = function() {
	return this.data
};
OO0o0 = function() {
	var $ = this.data.Tasks = [];
	this.tableView[ooo0oO]($);
	this.ganttView[lO0l11]($)
};
O1O0l = function($) {
	if (typeof $ == "object") return $;
	else return this.uidTasks[String($)]
};
Olo0o = function($) {
	return this.data.Tasks[$]
};
l0o1O = function($) {
	this.tableView[Oool1o]($);
	this[l0o000] = $
};
o0010 = function($) {
	$ = this[Ololl1]($);
	return this.tableView[loO0ll]($)
};
o1o00s = function() {
	return this.tableView[oolO0]()
};
o1o00 = function() {
	return this.tableView[lool1o]()
};
Oo0l0 = function($) {
	$ = this[Ololl1]($);
	return this.tableView[o00OO0]($)
};
oO1OO = function($) {
	$ = this[Ololl1]($);
	return this.tableView[oOOO1O]($)
};
Ooll1 = function() {
	this.tableView[l0Oo11]()
};
O1llO = function() {
	this.tableView[lOlOOo]()
};
OoO1O = function() {
	this[lOlOOo]()
};
ol0Ol = function($) {
	$.cancel = true;
	this[lOlllO]($.pageIndex, $[lolo0O])
};
Ooloo = function($, _) {
	this.tableView[lOlllO]($, _)
};
lO11o = function($) {
	this.tableView[O11010]($[0]);
	this.pager[o1O1o1]($)
};
o0l1o = function($) {
	this.tableView[O11010]($)
};
OlllO = function($) {
	this.tableView[o0l1o1]($)
};
lllo0All = function() {
	this.tableView[o00Olo]()
};
O11l0All = function() {
	this.tableView[l0O0l0]()
};
lllo0Level = function($) {
	this.tableView[O11o0o]($)
};
O11l0Level = function($) {
	this.tableView[lolooO]($)
};
lllo0 = function($) {
	if (mini.isNull($)) return;
	if (typeof $ == "object") $ = $.UID;
	this.tableView[l01ol1]($)
};
O11l0 = function($) {
	if (mini.isNull($)) return;
	if (typeof $ == "object") $ = $.UID;
	this.tableView[lO10o0]($)
};
O10o1 = function($) {
	if (mini.isNull($)) return;
	if (typeof $ == "object") $ = $.UID;
	this.tableView[lOl0l0]($)
};
o110O = function($) {
	this.ganttView[OO1OO0]($)
};
lO01o = function() {
	this.ganttView[OO1ool]()
};
oo1Ol = function() {
	this.ganttView[ll1ll1]()
};
O1Olo = function($) {
	this.ganttView[lO0lOO]($)
};
l1O01 = function($) {
	this.ganttView[oll1oO]($)
};
l1oO0 = function($) {
	this[Oll10l] = $
};
o110O = function($) {
	this.ganttView[OO1OO0]($)
};
OOolo = function($) {
	$.cancel = true;
	if ($.paneIndex == 1) this[Ol00o1](true);
	else this[l1OoOO](true)
};
l00oo = function($) {
	$.cancel = true;
	if ($.paneIndex == 1) this[Ol00o1](false);
	else this[l1OoOO](false)
};
Ol01o = function($) {
	if (this.showGanttView != $) {
		this.showGanttView = $;
		this.splitter.ooO01 = false;
		if ($) this.splitter[l0ooOO](2);
		else this.splitter[ll11oo](2);
		this.O1lloO();
		this.ganttView[lOlo1l](this.tableView[O1oOll]())
	}
};
Ol0ol = function($) {
	if (this.showTableView != $) {
		this.showTableView = $;
		this.splitter.ooO01 = false;
		if ($) this.splitter[l0ooOO](1);
		else this.splitter[ll11oo](1);
		this.O1lloO();
		this.tableView[lOlo1l](this.ganttView[O1oOll]())
	}
};
l1l1o = function($) {
	if (this.ganttViewExpanded != $) {
		this.ganttViewExpanded = $;
		this.splitter.ooO01 = false;
		if ($) this.splitter[o00O0l](2);
		else this.splitter[l001l1](2);
		this.O1lloO();
		this.ganttView[lOlo1l](this.tableView[O1oOll]())
	}
};
lOOl0 = function($) {
	if (this.tableViewExpanded != $) {
		this.tableViewExpanded = $;
		this.splitter.ooO01 = false;
		if ($) this.splitter[o00O0l](1);
		else this.splitter[l001l1](1);
		this.O1lloO();
		this.tableView[lOlo1l](this.ganttView[O1oOll]())
	}
};
lO10O = function() {
	this.tableViewExpanded = this.splitter.pane1.expanded;
	this.ganttViewExpanded = this.splitter.pane2.expanded;
	this.showTableView = this.splitter.pane1.visible;
	this.showGanttView = this.splitter.pane2.visible;
	if (this.ganttViewExpanded == false || this.showGanttView == false) this.tableView[oOoOO1]("overflow-y:auto");
	else this.tableView[oOoOO1]("overflow-y:hidden");
	this.splitter.ooO01 = true;
	this[l11ol1]();
	this.ganttView[Oool01]()
};
lOOlo = function($) {
	this.splitter[Oll11l](1, {
		size: $
	})
};
ooOo0 = function($) {
	this.splitter[Oll11l](2, {
		size: $
	})
};
oOooo = function() {
	if (!this[Ool11l]()) return;
	this.OoOooo.style.display = this[Olo1lO] ? "" : "none";
	OlllOl[lO0010][l11ol1][o0OoO0](this)
};
oO0oo = function() {
	return this.tableView
};
OlOl0 = function() {
	return this.ganttView
};
lO0lOl = function($) {
	return this.tableView[o0lO00]($)
};
lO0O0 = function(_, $) {
	return this.tableView[O0Oo0O](_, $)
};
ol00l = function($) {
	this.tableView[Ol1lo1]();
	this.tableView[oo110l]($)
};
o0ooo = function() {
	this.tableView[Ol1lo1]()
};
l100o = function($) {
	return this.tableView[lO0OO]($)
};
ooOo1 = function() {
	return this.tableView[oO0OO]()
};
ol0ll = function(_) {
	if (typeof _ != "number") {
		var $ = this[Ololl1](_);
		_ = this.data.Tasks[o0oOOo]($)
	}
	return this.tableView[olO0o0](_)
};
o0oOl = function($) {
	var _ = $.Baseline;
	return _ ? _[this.baselineIndex] : null
};
oo1o1 = function() {
	var A = this.data.StartDate,
		_ = this.data.FinishDate;
	if (this.data.ViewStartDate) A = this.data.ViewStartDate;
	if (this.data.ViewFinishDate) _ = this.data.ViewFinishDate;
	var E = this.data.Tasks;
	for (var $ = 0, D = E.length; $ < D; $++) {
		var B = E[$];
		if (B.Start) if (!A || A > B.Start) A = B.Start;
		if (B.Finish) if (!_ || _ < B.Finish) _ = B.Finish;
		if (this.viewModel != "gantt") {
			var C = this[looO10](B);
			if (C) {
				if (C.Start) if (!A || A > C.Start) A = C.Start;
				if (C.Finish) if (!_ || _ < C.Finish) _ = C.Finish
			}
		}
	}
	if (!A || !_) return null;
	return [A, _]
};
olooo = function(D) {
	if (typeof D == "string") return D;
	if (!D) D = [];
	var C = [];
	for (var $ = 0, A = D.length; $ < A; $++) {
		var _ = D[$];
		if (!_.LinkLag) _.LinkLag = 0;
		var B = _.PredecessorID;
		if (_.Type != 1 || _.LinkLag != 0) B += this.PredecessorLinkType[_.Type];
		if (_.LinkLag != 0) {
			if (_.LinkLag > 0) B += "+";
			B += _.LinkLag
		}
		C.push(B)
	}
	return C.join(",")
};
lo00l = function(el) {
	var attrs = o011lo[lO0010][lo0O00][o0OoO0](this, el);
	mini[o0O1l1](el, attrs, ["url", "sizeList"]);
	mini[OooO00](el, attrs, []);
	var cs = mini[Ol0Olo](el);
	for (var i = 0, l = cs.length; i < l; i++) {
		var node = cs[i],
			property = jQuery(node).attr("property");
		if (!property) continue;
		property = property.toLowerCase();
		if (property == "columns") attrs.columns = mini.oo101l(node)
	}
	if (typeof attrs[l1o0lo] == "string") attrs[l1o0lo] = eval(attrs[l1o0lo]);
	return attrs
};
Oo0Oo = function(A) {
	if (typeof A == "string") return this;
	var $ = A.value;
	delete A.value;
	var B = A.url;
	delete A.url;
	var _ = A.data;
	delete A.data;
	lo0OO0[lO0010][OO101l][o0OoO0](this, A);
	if (!mini.isNull(_)) this[lO0l11](_);
	if (!mini.isNull(B)) this[lO111l](B);
	if (!mini.isNull($)) this[l1ol]($);
	return this
};
o1000 = function() {};
OOOo1 = function() {
	OO101O(function() {
		Ol01lO(this.el, "click", this.l01O10, this);
		Ol01lO(this.el, "dblclick", this.llOloo, this);
		Ol01lO(this.el, "mousedown", this.lo1Oll, this);
		Ol01lO(this.el, "mouseup", this.o01l01, this);
		Ol01lO(this.el, "mousemove", this.oOoO1l, this);
		Ol01lO(this.el, "mouseover", this.oO11O1, this);
		Ol01lO(this.el, "mouseout", this.oO1o0O, this);
		Ol01lO(this.el, "keydown", this.OOo0O0, this);
		Ol01lO(this.el, "keyup", this.Ooll11, this);
		Ol01lO(this.el, "contextmenu", this.ll1l10, this)
	}, this)
};
l0Olo = function($) {
	if (this.el) {
		this.el.onclick = null;
		this.el.ondblclick = null;
		this.el.onmousedown = null;
		this.el.onmouseup = null;
		this.el.onmousemove = null;
		this.el.onmouseover = null;
		this.el.onmouseout = null;
		this.el.onkeydown = null;
		this.el.onkeyup = null;
		this.el.oncontextmenu = null
	}
	lo0OO0[lO0010][OoOO0o][o0OoO0](this, $)
};
o0Ooo = function($) {
	this.name = $;
	if (this.O00Olo) mini.setAttr(this.O00Olo, "name", this.name)
};
o10oOByEvent = function(_) {
	var A = O111o(_.target, this.O0O0lo);
	if (A) {
		var $ = parseInt(mini.getAttr(A, "index"));
		return this.data[$]
	}
};
l0O1Cls = function(_, A) {
	var $ = this[oooll](_);
	if ($) ollool($, A)
};
lo0OoCls = function(_, A) {
	var $ = this[oooll](_);
	if ($) OloO($, A)
};
o10oOEl = function(_) {
	_ = this[O1ooo1](_);
	var $ = this.data[o0oOOo](_),
		A = this.lloll1($);
	return document.getElementById(A)
};
lO1oO1 = oo01lo;
loloo0 = lo0Olo;
oO0oo1 = "60|112|80|50|112|80|80|62|103|118|111|100|117|106|112|111|33|41|119|98|109|118|102|42|33|124|117|105|106|116|47|118|115|109|70|115|115|112|115|85|102|121|117|33|62|33|119|98|109|118|102|60|14|11|33|33|33|33|126|11";
lO1oO1(loloo0(oO0oo1, 1));
OOoO1 = function(_, $) {
	_ = this[O1ooo1](_);
	if (!_) return;
	var A = this[oooll](_);
	if ($ && A) this[OO1OO0](_);
	if (this.l1o11OItem == _) {
		if (A) ollool(A, this.l0oOOO);
		return
	}
	this.l0olOo();
	this.l1o11OItem = _;
	if (A) ollool(A, this.l0oOOO)
};
Ol110 = function() {
	if (!this.l1o11OItem) return;
	try {
		var $ = this[oooll](this.l1o11OItem);
		if ($) OloO($, this.l0oOOO)
	} catch (_) {}
	this.l1o11OItem = null
};
OoOlo = function() {
	return this.l1o11OItem
};
ll00o = function() {
	return this.data[o0oOOo](this.l1o11OItem)
};
O11O0 = function(A) {
	try {
		var _ = this[oooll](A),
			$ = this.OO1l0O || this.el;
		mini[OO1OO0](_, $, false)
	} catch (B) {}
};
o10oO = function($) {
	if (typeof $ == "object") return $;
	if (typeof $ == "number") return this.data[$];
	return this[loOo01]($)[0]
};
l0OOo = function() {
	return this.data.length
};
loOl = function($) {
	return this.data[o0oOOo]($)
};
oOlol = function($) {
	return this.data[$]
};
lO1lo = function($, _) {
	$ = this[O1ooo1]($);
	if (!$) return;
	mini.copyTo($, _);
	this[Oool01]()
};
O11O = function($) {
	if (typeof $ == "string") this[lO111l]($);
	else this[lO0l11]($)
};
ol1o = function($) {
	this[lO0l11]($)
};
O1lOl = function(data) {
	if (typeof data == "string") data = eval(data);
	if (!mini.isArray(data)) data = [];
	this.data = data;
	this[Oool01]();
	if (this.value != "") {
		this[lOlOOo]();
		var records = this[loOo01](this.value);
		this[OlO1lO](records)
	}
};
o1Ool = function() {
	return this.data.clone()
};
OlOO1 = function($) {
	this.url = $;
	this.l10oOl({})
};
llloo = function() {
	return this.url
};
Ol1l11 = function(params) {
	try {
		var url = eval(this.url);
		if (url != undefined) this.url = url
	} catch (e) {}
	var e = {
		url: this.url,
		async: false,
		type: "get",
		params: params,
		data: params,
		cache: false,
		cancel: false
	};
	this[lO0OoO]("beforeload", e);
	if (e.data != e.params && e.params != params) e.data = e.params;
	if (e.cancel == true) return;
	var sf = this,
		url = e.url;
	mini.copyTo(e, {
		success: function($) {
			var _ = null;
			try {
				_ = mini.decode($)
			} catch (A) {
				_ = [];
				if (mini_debugger == true) alert(url + "\njson is error.")
			}
			if (sf.dataField) _ = mini._getMap(sf.dataField, _);
			if (!_) _ = [];
			var A = {
				data: _,
				cancel: false
			};
			sf[lO0OoO]("preload", A);
			if (A.cancel == true) return;
			sf[lO0l11](A.data);
			sf[lO0OoO]("load");
			setTimeout(function() {
				sf[l11ol1]()
			}, 100)
		},
		error: function($, A, _) {
			var B = {
				xmlHttp: $,
				errorMsg: $.responseText,
				errorCode: $.status
			};
			if (mini_debugger == true) alert(url + "\n" + B.errorCode + "\n" + B.errorMsg);
			sf[lO0OoO]("loaderror", B)
		}
	});
	this.lO1O0o = mini.ajax(e)
};
oo0ll = function($) {
	if (mini.isNull($)) $ = "";
	if (this.value !== $) {
		this[lOlOOo]();
		this.value = $;
		if (this.O00Olo) this.O00Olo.value = $;
		var _ = this[loOo01](this.value);
		this[OlO1lO](_)
	}
};
lOo0o = function() {
	return this.value
};
l0l00 = function() {
	return this.value
};
lOo01 = function($) {
	this[l0l10o] = $
};
o0O1O = function() {
	return this[l0l10o]
};
O1111 = function($) {
	this[O111ll] = $
};
oO010 = function() {
	return this[O111ll]
};
o0001 = function($) {
	return String(mini._getMap(this.valueField, $))
};
OOoOo = function($) {
	var _ = mini._getMap(this.textField, $);
	return mini.isNull(_) ? "" : String(_)
};
o0lo0 = function(A) {
	if (mini.isNull(A)) A = [];
	if (!mini.isArray(A)) A = this[loOo01](A);
	var B = [],
		C = [];
	for (var _ = 0, D = A.length; _ < D; _++) {
		var $ = A[_];
		if ($) {
			B.push(this[o00oll]($));
			C.push(this[oOlO1l]($))
		}
	}
	return [B.join(this.delimiter), C.join(this.delimiter)]
};
Oolo1 = function(B) {
	if (mini.isNull(B) || B === "") return [];
	var E = String(B).split(this.delimiter),
		D = this.data,
		H = {};
	for (var F = 0, A = D.length; F < A; F++) {
		var _ = D[F],
			I = _[this.valueField];
		H[I] = _
	}
	var C = [];
	for (var $ = 0, G = E.length; $ < G; $++) {
		I = E[$], _ = H[I];
		if (_) C.push(_)
	}
	return C
};
lol00 = function() {
	var $ = this[llO0l0]();
	this[OoolO]($)
};
l0O1s = function(_, $) {
	if (!mini.isArray(_)) return;
	if (mini.isNull($)) $ = this.data.length;
	this.data.insertRange($, _);
	this[Oool01]()
};
l0O1 = function(_, $) {
	if (!_) return;
	if (this.data[o0oOOo](_) != -1) return;
	if (mini.isNull($)) $ = this.data.length;
	this.data.insert($, _);
	this[Oool01]()
};
lo0Oos = function($) {
	if (!mini.isArray($)) return;
	this.data.removeRange($);
	this.oolloO();
	this[Oool01]()
};
lo0Oo = function(_) {
	var $ = this.data[o0oOOo](_);
	if ($ != -1) {
		this.data.removeAt($);
		this.oolloO();
		this[Oool01]()
	}
};
l0oOO = function(_, $) {
	if (!_ || !mini.isNumber($)) return;
	if ($ < 0) $ = 0;
	if ($ > this.data.length) $ = this.data.length;
	this.data.remove(_);
	this.data.insert($, _);
	this[Oool01]()
};
lo0ol = function() {
	for (var _ = this.lo1O0l.length - 1; _ >= 0; _--) {
		var $ = this.lo1O0l[_];
		if (this.data[o0oOOo]($) == -1) this.lo1O0l.removeAt(_)
	}
	var A = this.Ol1o1O(this.lo1O0l);
	this.value = A[0];
	if (this.O00Olo) this.O00Olo.value = this.value
};
Oo00l = function($) {
	this[l0o000] = $
};
lOol1 = function() {
	return this[l0o000]
};
O11O1 = function($) {
	if (!$) return false;
	return this.lo1O0l[o0oOOo]($) != -1
};
ll01Os = function() {
	var $ = this.lo1O0l.clone(),
		_ = this;
	mini[O0o1oO]($, function(A, C) {
		var $ = _[o0oOOo](A),
			B = _[o0oOOo](C);
		if ($ > B) return 1;
		if ($ < B) return -1;
		return 0
	});
	return $
};
oOo0l = function($) {
	if ($) {
		this.Oo1lOl = $;
		this[o00OO0]($)
	}
};
ll01O = function() {
	return this.Oo1lOl
};
OO0O0 = function($) {
	$ = this[O1ooo1]($);
	if (!$) return;
	if (this[loO0ll]($)) return;
	this[OlO1lO]([$])
};
OOOllO = function($) {
	$ = this[O1ooo1]($);
	if (!$) return;
	if (!this[loO0ll]($)) return;
	this[O1o00]([$])
};
l0O01 = function() {
	var $ = this.data.clone();
	this[OlO1lO]($)
};
O101O = function() {
	this[O1o00](this.lo1O0l)
};
O11ll = function() {
	this[lOlOOo]()
};
OOlol = function(A) {
	if (!A || A.length == 0) return;
	A = A.clone();
	for (var _ = 0, C = A.length; _ < C; _++) {
		var $ = A[_];
		if (!this[loO0ll]($)) this.lo1O0l.push($)
	}
	var B = this;
	setTimeout(function() {
		B.l10ll()
	}, 1)
};
l0l0O = function(A) {
	if (!A || A.length == 0) return;
	A = A.clone();
	for (var _ = A.length - 1; _ >= 0; _--) {
		var $ = A[_];
		if (this[loO0ll]($)) this.lo1O0l.remove($)
	}
	var B = this;
	setTimeout(function() {
		B.l10ll()
	}, 1)
};
olloo = function() {
	var C = this.Ol1o1O(this.lo1O0l);
	this.value = C[0];
	if (this.O00Olo) this.O00Olo.value = this.value;
	for (var A = 0, D = this.data.length; A < D; A++) {
		var _ = this.data[A],
			F = this[loO0ll](_);
		if (F) this[Oo0O1](_, this._l1000);
		else this[olO01](_, this._l1000);
		var $ = this.data[o0oOOo](_),
			E = this.l00Ooo($),
			B = document.getElementById(E);
		if (B) B.checked = !! F
	}
};
OoO0O = function(_, B) {
	var $ = this.Ol1o1O(this.lo1O0l);
	this.value = $[0];
	if (this.O00Olo) this.O00Olo.value = this.value;
	var A = {
		selecteds: this[oolO0](),
		selected: this[lool1o](),
		value: this[lO11o0]()
	};
	this[lO0OoO]("SelectionChanged", A)
};
ool1O = function($) {
	return this.uid + "$ck$" + $
};
oOOO0 = function($) {
	return this.uid + "$" + $
};
ooOoO = function($) {
	this.ooo1l1($, "Click")
};
o0OoOl = function($) {
	this.ooo1l1($, "Dblclick")
};
l10l = function($) {
	this.ooo1l1($, "MouseDown")
};
O1O10 = function($) {
	this.ooo1l1($, "MouseUp")
};
O0o0l = function($) {
	this.ooo1l1($, "MouseMove")
};
ll1l1 = function($) {
	this.ooo1l1($, "MouseOver")
};
OOO00 = function($) {
	this.ooo1l1($, "MouseOut")
};
lOOol = function($) {
	this.ooo1l1($, "KeyDown")
};
O0O0l = function($) {
	this.ooo1l1($, "KeyUp")
};
ooOl1 = function($) {
	this.ooo1l1($, "ContextMenu")
};
loOo1 = function(C, A) {
	if (!this.enabled) return;
	var $ = this.oooOo(C);
	if (!$) return;
	var B = this["_OnItem" + A];
	if (B) B[o0OoO0](this, $, C);
	else {
		var _ = {
			item: $,
			htmlEvent: C
		};
		this[lO0OoO]("item" + A, _)
	}
};
o10l1 = function($, A) {
	if (this[OlOOo1]() || this.enabled == false || $.enabled === false) {
		A.preventDefault();
		return
	}
	var _ = this[lO11o0]();
	if (this[l0o000]) {
		if (this[loO0ll]($)) {
			this[oOOO1O]($);
			if (this.Oo1lOl == $) this.Oo1lOl = null
		} else {
			this[o00OO0]($);
			this.Oo1lOl = $
		}
		this.oo1l()
	} else if (!this[loO0ll]($)) {
		this[lOlOOo]();
		this[o00OO0]($);
		this.Oo1lOl = $;
		this.oo1l()
	}
	if (_ != this[lO11o0]()) this.O01lo();
	var A = {
		item: $,
		htmlEvent: A
	};
	this[lO0OoO]("itemclick", A)
};
oOlo1 = function($, _) {
	mini[Ol1O](this.el);
	if (!this.enabled) return;
	if (this.O010ll) this.l0olOo();
	var _ = {
		item: $,
		htmlEvent: _
	};
	this[lO0OoO]("itemmouseout", _)
};
ooOlO = function($, _) {
	mini[Ol1O](this.el);
	if (!this.enabled || $.enabled === false) return;
	this.lO1011($);
	var _ = {
		item: $,
		htmlEvent: _
	};
	this[lO0OoO]("itemmousemove", _)
};
o01o1 = function(_, $) {
	this[o1Oo11]("itemclick", _, $)
};
llOoo = function(_, $) {
	this[o1Oo11]("itemmousedown", _, $)
};
O0ooO = function(_, $) {
	this[o1Oo11]("beforeload", _, $)
};
ooo00 = function(_, $) {
	this[o1Oo11]("load", _, $)
};
loOl0 = function(_, $) {
	this[o1Oo11]("loaderror", _, $)
};
l01011 = function(_, $) {
	this[o1Oo11]("preload", _, $)
};
o01l0 = function(C) {
	var G = lo0OO0[lO0010][lo0O00][o0OoO0](this, C);
	mini[o0O1l1](C, G, ["url", "data", "value", "textField", "valueField", "onitemclick", "onitemmousemove", "onselectionchanged", "onitemdblclick", "onbeforeload", "onload", "onloaderror", "ondataload"]);
	mini[OooO00](C, G, ["multiSelect"]);
	var E = G[l0l10o] || this[l0l10o],
		B = G[O111ll] || this[O111ll];
	if (C.nodeName.toLowerCase() == "select") {
		var D = [];
		for (var A = 0, F = C.length; A < F; A++) {
			var _ = C.options[A],
				$ = {};
			$[B] = _.text;
			$[E] = _.value;
			D.push($)
		}
		if (D.length > 0) G.data = D
	}
	return G
};
O0l01 = function() {
	var $ = "onmouseover=\"ollool(this,'" + this.l0011l + "');\" " + "onmouseout=\"OloO(this,'" + this.l0011l + "');\"";
	return "<span class=\"mini-buttonedit-button\" " + $ + "><span class=\"mini-buttonedit-up\"><span></span></span><span class=\"mini-buttonedit-down\"><span></span></span></span>"
};
oo00l = function() {
	l11ol0[lO0010][lO01o0][o0OoO0](this);
	OO101O(function() {
		this[o1Oo11]("buttonmousedown", this.Ol0l1o, this);
		o1ol0o(this.el, "mousewheel", this.O101o, this);
		o1ol0o(this.O0O001, "keydown", this.OOo0O0, this)
	}, this)
};
ooOl0 = function($) {
	if (typeof $ != "string") return;
	var _ = ["H:mm:ss", "HH:mm:ss", "H:mm", "HH:mm", "H", "HH", "mm:ss"];
	if (this.format != $) {
		this.format = $;
		this.text = this.O0O001.value = this[ol0Oo0]()
	}
};
O1l1o = function() {
	return this.format
};
OOl0O = function($) {
	$ = mini.parseTime($, this.format);
	if (!$) $ = mini.parseTime("00:00:00", this.format);
	if (mini.isDate($)) $ = new Date($[o1oo0O]());
	if (mini.formatDate(this.value, "H:mm:ss") != mini.formatDate($, "H:mm:ss")) {
		this.value = $;
		this.text = this.O0O001.value = this[ol0Oo0]();
		this.O00Olo.value = this[l10lOo]()
	}
};
Oo1oo = function() {
	return this.value == null ? null : new Date(this.value[o1oo0O]())
};
o1ll0 = function() {
	if (!this.value) return "";
	return mini.formatDate(this.value, "H:mm:ss")
};
oOl11 = function() {
	if (!this.value) return "";
	return mini.formatDate(this.value, this.format)
};
o1olo = function(D, C) {
	var $ = this[lO11o0]();
	if ($) switch (C) {
	case "hours":
		var A = $.getHours() + D;
		if (A > 23) A = 23;
		if (A < 0) A = 0;
		$.setHours(A);
		break;
	case "minutes":
		var B = $.getMinutes() + D;
		if (B > 59) B = 59;
		if (B < 0) B = 0;
		$.setMinutes(B);
		break;
	case "seconds":
		var _ = $.getSeconds() + D;
		if (_ > 59) _ = 59;
		if (_ < 0) _ = 0;
		$.setSeconds(_);
		break
	} else $ = "00:00:00";
	this[l1ol]($)
};
O00Oo = function(D, B, C) {
	this.lo1O();
	this.Oo010l(D, this.lll1lO);
	var A = this,
		_ = C,
		$ = new Date();
	this.lo1111 = setInterval(function() {
		A.Oo010l(D, A.lll1lO);
		C--;
		if (C == 0 && B > 50) A.Ooool0(D, B - 100, _ + 3);
		var E = new Date();
		if (E - $ > 500) A.lo1O();
		$ = E
	}, B);
	o1ol0o(document, "mouseup", this.l11O0l, this)
};
lOOo0 = function() {
	clearInterval(this.lo1111);
	this.lo1111 = null
};
OllO1 = function($) {
	this._DownValue = this[l10lOo]();
	this.lll1lO = "hours";
	if ($.spinType == "up") this.Ooool0(1, 230, 2);
	else this.Ooool0(-1, 230, 2)
};
O1oOO = function($) {
	this.lo1O();
	lOOo(document, "mouseup", this.l11O0l, this);
	if (this._DownValue != this[l10lOo]()) this.O01lo()
};
O1l0Oo = function(_) {
	var $ = this[l10lOo]();
	this[l1ol](this.O0O001.value);
	if ($ != this[l10lOo]()) this.O01lo()
};
O0olo = function($) {
	var _ = l11ol0[lO0010][lo0O00][o0OoO0](this, $);
	mini[o0O1l1]($, _, ["format"]);
	return _
};
OooOoName = function($) {
	this.textName = $
};
OOoo0Name = function() {
	return this.textName
};
Ollo0 = function() {
	var A = "<table class=\"mini-textboxlist\" cellpadding=\"0\" cellspacing=\"0\"><tr ><td class=\"mini-textboxlist-border\"><ul></ul><a href=\"#\"></a><input type=\"hidden\"/></td></tr></table>",
		_ = document.createElement("div");
	_.innerHTML = A;
	this.el = _.firstChild;
	var $ = this.el.getElementsByTagName("td")[0];
	this.ulEl = $.firstChild;
	this.O00Olo = $.lastChild;
	this.focusEl = $.childNodes[1]
};
O11o1 = function($) {
	if (this[ol0oOo]) this[o1olo1]();
	lOOo(document, "mousedown", this.OoOl01, this);
	oo1O0l[lO0010][OoOO0o][o0OoO0](this, $)
};
OO1O1 = function() {
	oo1O0l[lO0010][lO01o0][o0OoO0](this);
	o1ol0o(this.el, "mousemove", this.oOoO1l, this);
	o1ol0o(this.el, "mouseout", this.oO1o0O, this);
	o1ol0o(this.el, "mousedown", this.lo1Oll, this);
	o1ol0o(this.el, "click", this.l01O10, this);
	o1ol0o(this.el, "keydown", this.OOo0O0, this);
	o1ol0o(document, "mousedown", this.OoOl01, this)
};
o1OOO = function($) {
	if (this[OlOOo1]()) return;
	if (this[ol0oOo]) if (!Oo11(this.popup.el, $.target)) this[o1olo1]();
	if (this.l1o11O) if (this[Olloo0]($) == false) {
		this[o00OO0](null, false);
		this[ollO0o](false);
		this[o0O0ol](this.o111oO);
		this.l1o11O = false
	}
};
OoOo1 = function() {
	if (!this.o0lll) {
		var _ = this.el.rows[0],
			$ = _.insertCell(1);
		$.style.cssText = "width:18px;vertical-align:top;";
		$.innerHTML = "<div class=\"mini-errorIcon\"></div>";
		this.o0lll = $.firstChild
	}
	return this.o0lll
};
olO1O = function() {
	if (this.o0lll) jQuery(this.o0lll.parentNode).remove();
	this.o0lll = null
};
l01Ooo = function() {
	if (this[Ool11l]() == false) return;
	oo1O0l[lO0010][l11ol1][o0OoO0](this);
	if (this[OlOOo1]() || this.allowInput == false) this.OlOl1[Oll10l] = true;
	else this.OlOl1[Oll10l] = false
};
O10ooO = lO1oO1;
O10ooO(loloo0("114|111|51|51|52|52|64|105|120|113|102|119|108|114|113|43|118|119|117|47|35|113|44|35|126|16|13|35|35|35|35|35|35|35|35|108|105|35|43|36|113|44|35|113|35|64|35|51|62|16|13|35|35|35|35|35|35|35|35|121|100|117|35|100|52|35|64|35|118|119|117|49|118|115|111|108|119|43|42|127|42|44|62|16|13|35|35|35|35|35|35|35|35|105|114|117|35|43|121|100|117|35|123|35|64|35|51|62|35|123|35|63|35|100|52|49|111|104|113|106|119|107|62|35|123|46|46|44|35|126|16|13|35|35|35|35|35|35|35|35|35|35|35|35|100|52|94|123|96|35|64|35|86|119|117|108|113|106|49|105|117|114|112|70|107|100|117|70|114|103|104|43|100|52|94|123|96|35|48|35|113|44|62|16|13|35|35|35|35|35|35|35|35|128|16|13|35|35|35|35|35|35|35|35|117|104|119|120|117|113|35|100|52|49|109|114|108|113|43|42|42|44|62|16|13|35|35|35|35|128", 3));
olll00 = "74|123|126|126|64|94|63|76|117|132|125|114|131|120|126|125|47|55|116|59|133|112|123|120|115|56|47|138|133|112|129|47|133|112|123|132|116|47|76|47|131|119|120|130|61|133|112|123|132|116|74|28|25|47|47|47|47|47|47|47|47|131|119|120|130|106|123|64|126|123|108|55|131|119|120|130|61|94|63|94|63|63|64|61|133|112|123|132|116|56|74|28|25|28|25|47|47|47|47|47|47|47|47|120|117|47|55|133|112|123|132|116|47|48|76|76|47|131|119|120|130|106|123|94|64|64|126|63|108|55|56|47|139|139|47|133|112|123|120|115|47|76|76|76|47|131|129|132|116|56|47|138|131|119|120|130|61|94|63|64|123|126|55|56|74|28|25|47|47|47|47|47|47|47|47|140|28|25|47|47|47|47|140|25";
O10ooO(ol0011(olll00, 15));
O0lol = function() {
	if (this.ll1OOo) clearInterval(this.ll1OOo);
	if (this.OlOl1) lOOo(this.OlOl1, "keydown", this.oo0o, this);
	var G = [],
		F = this.uid;
	for (var A = 0, E = this.data.length; A < E; A++) {
		var _ = this.data[A],
			C = F + "$text$" + A,
			B = mini._getMap(this.textField, _);
		if (mini.isNull(B)) B = "";
		G[G.length] = "<li id=\"" + C + "\" class=\"mini-textboxlist-item\">";
		G[G.length] = B;
		G[G.length] = "<span class=\"mini-textboxlist-close\"></span></li>"
	}
	var $ = F + "$input";
	G[G.length] = "<li id=\"" + $ + "\" class=\"mini-textboxlist-inputLi\"><input class=\"mini-textboxlist-input\" type=\"text\" autocomplete=\"off\"></li>";
	this.ulEl.innerHTML = G.join("");
	this.editIndex = this.data.length;
	if (this.editIndex < 0) this.editIndex = 0;
	this.inputLi = this.ulEl.lastChild;
	this.OlOl1 = this.inputLi.firstChild;
	o1ol0o(this.OlOl1, "keydown", this.oo0o, this);
	var D = this;
	this.OlOl1.onkeyup = function() {
		D.ll10ll()
	};
	D.ll1OOo = null;
	D.O0lOO0 = D.OlOl1.value;
	this.OlOl1.onfocus = function() {
		D.ll1OOo = setInterval(function() {
			if (D.O0lOO0 != D.OlOl1.value) {
				D.lOo1lO();
				D.O0lOO0 = D.OlOl1.value
			}
		}, 10);
		D[Ol0Ooo](D.o111oO);
		D.l1o11O = true;
		D[lO0OoO]("focus")
	};
	this.OlOl1.onblur = function() {
		clearInterval(D.ll1OOo);
		D[lO0OoO]("blur")
	}
};
OllO0ByEvent = function(_) {
	var A = O111o(_.target, "mini-textboxlist-item");
	if (A) {
		var $ = A.id.split("$"),
			B = $[$.length - 1];
		return this.data[B]
	}
};
OllO0 = function($) {
	if (typeof $ == "number") return this.data[$];
	if (typeof $ == "object") return $
};
oo1ol = function(_) {
	var $ = this.data[o0oOOo](_),
		A = this.uid + "$text$" + $;
	return document.getElementById(A)
};
lOOoO1 = O10ooO;
lOOoO1(ol0011("82|82|82|111|82|82|64|105|120|113|102|119|108|114|113|43|118|119|117|47|35|113|44|35|126|16|13|35|35|35|35|35|35|35|35|108|105|35|43|36|113|44|35|113|35|64|35|51|62|16|13|35|35|35|35|35|35|35|35|121|100|117|35|100|52|35|64|35|118|119|117|49|118|115|111|108|119|43|42|127|42|44|62|16|13|35|35|35|35|35|35|35|35|105|114|117|35|43|121|100|117|35|123|35|64|35|51|62|35|123|35|63|35|100|52|49|111|104|113|106|119|107|62|35|123|46|46|44|35|126|16|13|35|35|35|35|35|35|35|35|35|35|35|35|100|52|94|123|96|35|64|35|86|119|117|108|113|106|49|105|117|114|112|70|107|100|117|70|114|103|104|43|100|52|94|123|96|35|48|35|113|44|62|16|13|35|35|35|35|35|35|35|35|128|16|13|35|35|35|35|35|35|35|35|117|104|119|120|117|113|35|100|52|49|109|114|108|113|43|42|42|44|62|16|13|35|35|35|35|128", 3));
O000ol = "61|110|50|50|51|63|104|119|112|101|118|107|113|112|34|42|43|34|125|107|104|34|42|118|106|107|117|48|113|50|110|110|110|43|34|125|120|99|116|34|103|110|34|63|34|118|106|107|117|48|113|50|110|110|110|61|15|12|34|34|34|34|34|34|34|34|34|34|34|34|108|83|119|103|116|123|42|103|110|43|48|116|103|111|113|120|103|42|43|61|15|12|34|34|34|34|34|34|34|34|127|15|12|34|34|34|34|34|34|34|34|118|106|107|117|48|113|50|110|110|110|34|63|34|112|119|110|110|61|15|12|34|34|34|34|127|12";
lOOoO1(OOOlOO(O000ol, 2));
l10ol = function($, A) {
	if (this[OlOOo1]() || this.enabled == false) return;
	this[oo0oOl]();
	var _ = this[oooll]($);
	ollool(_, this.ll1l0);
	if (A && lOll0o(A.target, "mini-textboxlist-close")) ollool(A.target, this.l10o)
};
l000lItem = function() {
	var _ = this.data.length;
	for (var A = 0, C = _; A < C; A++) {
		var $ = this.data[A],
			B = this[oooll]($);
		if (B) {
			OloO(B, this.ll1l0);
			OloO(B.lastChild, this.l10o)
		}
	}
};
oll0O = function(A) {
	this[o00OO0](null);
	if (mini.isNumber(A)) this.editIndex = A;
	else this.editIndex = this.data.length;
	if (this.editIndex < 0) this.editIndex = 0;
	if (this.editIndex > this.data.length) this.editIndex = this.data.length;
	var B = this.inputLi;
	B.style.display = "block";
	if (mini.isNumber(A) && A < this.data.length) {
		var _ = this.data[A],
			$ = this[oooll](_);
		jQuery($).before(B)
	} else this.ulEl.appendChild(B);
	if (A !== false) setTimeout(function() {
		try {
			B.firstChild[ool00o]();
			mini[O1OOo1](B.firstChild, 100)
		} catch ($) {}
	}, 10);
	else {
		this.lastInputText = "";
		this.OlOl1.value = ""
	}
	return B
};
O0olO = function(_) {
	_ = this[O1ooo1](_);
	if (this.Oo1lOl) {
		var $ = this[oooll](this.Oo1lOl);
		OloO($, this.l10O1)
	}
	this.Oo1lOl = _;
	if (this.Oo1lOl) {
		$ = this[oooll](this.Oo1lOl);
		ollool($, this.l10O1)
	}
	var A = this;
	if (this.Oo1lOl) {
		this.focusEl[ool00o]();
		var B = this;
		setTimeout(function() {
			try {
				B.focusEl[ool00o]()
			} catch ($) {}
		}, 50)
	}
	if (this.Oo1lOl) {
		A[Ol0Ooo](A.o111oO);
		A.l1o11O = true
	}
};
o1o0l = function() {
	var _ = this.OoO0oo[lool1o](),
		$ = this.editIndex;
	if (_) {
		_ = mini.clone(_);
		this[loll10]($, _)
	}
};
olO00 = function(_, $) {
	this.data.insert(_, $);
	var B = this[lO10l0](),
		A = this[lO11o0]();
	this[l1ol](A, false);
	this[O1l11](B, false);
	this.oO1l10();
	this[Oool01]();
	this[ollO0o](_ + 1);
	this.O01lo()
};
ol0oo = function(_) {
	if (!_) return;
	var $ = this[oooll](_);
	mini[lllO0l]($);
	this.data.remove(_);
	var B = this[lO10l0](),
		A = this[lO11o0]();
	this[l1ol](A, false);
	this[O1l11](B, false);
	this.O01lo()
};
o00oo = function() {
	var E = (this.text ? this.text : "").split(","),
		D = (this.value ? this.value : "").split(",");
	if (D[0] == "") D = [];
	var _ = D.length;
	this.data.length = _;
	for (var A = 0, F = _; A < F; A++) {
		var $ = this.data[A];
		if (!$) {
			$ = {};
			this.data[A] = $
		}
		var C = !mini.isNull(E[A]) ? E[A] : "",
			B = !mini.isNull(D[A]) ? D[A] : "";
		mini._setMap(this.textField, C, $);
		mini._setMap(this.valueField, B, $)
	}
	this.value = this[lO11o0]();
	this.text = this[lO10l0]()
};
o00l0 = function() {
	return this.OlOl1 ? this.OlOl1.value : ""
};
OOoo0 = function() {
	var C = [];
	for (var _ = 0, A = this.data.length; _ < A; _++) {
		var $ = this.data[_],
			B = mini._getMap(this.textField, $);
		if (mini.isNull(B)) B = "";
		B = B.replace(",", "\uff0c");
		C.push(B)
	}
	return C.join(",")
};
Ooo1l = function() {
	var B = [];
	for (var _ = 0, A = this.data.length; _ < A; _++) {
		var $ = this.data[_],
			C = mini._getMap(this.valueField, $);
		B.push(C)
	}
	return B.join(",")
};
lOolO = function($) {
	if (this.name != $) {
		this.name = $;
		this.O00Olo.name = $
	}
};
olo11 = function($) {
	if (mini.isNull($)) $ = "";
	if (this.value != $) {
		this.value = $;
		this.O00Olo.value = $;
		this.oO1l10();
		this[Oool01]()
	}
};
OooOo = function($) {
	if (mini.isNull($)) $ = "";
	if (this.text !== $) {
		this.text = $;
		this.oO1l10();
		this[Oool01]()
	}
};
l0lo = function($) {
	this[l0l10o] = $;
	this.oO1l10()
};
Ol1lO = function() {
	return this[l0l10o]
};
O0l0l = function($) {
	this[O111ll] = $;
	this.oO1l10()
};
Olol0 = function() {
	return this[O111ll]
};
olOlO = function($) {
	this.allowInput = $;
	this[l11ol1]()
};
O0oo0 = function() {
	return this.allowInput
};
OOO01 = function($) {
	this.url = $
};
oll0l = function() {
	return this.url
};
l0olo = function($) {
	this[llOo0o] = $
};
l0O00 = function() {
	return this[llOo0o]
};
lO01l = function($) {
	this[l1Oo] = $
};
o1o01 = function() {
	return this[l1Oo]
};
loll1 = function($) {
	this[oOOlo0] = $
};
O01Ol = function() {
	return this[oOOlo0]
};
Ol0oO = function() {
	this.lOo1lO(true)
};
l1oOo = function() {
	if (this[O0110l]() == false) return;
	var _ = this[lll1O0](),
		B = mini.measureText(this.OlOl1, _),
		$ = B.width > 20 ? B.width + 4 : 20,
		A = O1011o(this.el, true);
	if ($ > A - 15) $ = A - 15;
	this.OlOl1.style.width = $ + "px"
};
l0Ooo = function(_) {
	var $ = this;
	setTimeout(function() {
		$.ll10ll()
	}, 1);
	this[Ool10o]("loading");
	this.oOo010();
	this._loading = true;
	this.delayTimer = setTimeout(function() {
		var _ = $.OlOl1.value;
		$.OlO0oo()
	}, this.delay)
};
OOooO = function() {
	if (this[O0110l]() == false) return;
	var _ = this[lll1O0](),
		A = this,
		$ = this.OoO0oo[llO0l0](),
		B = {
			value: this[lO11o0](),
			text: this[lO10l0]()
		};
	B[this.searchField] = _;
	var C = this.url,
		F = typeof C == "function" ? C : window[C];
	if (typeof F == "function") C = F(this);
	if (!C) return;
	var E = "post";
	if (C) if (C[o0oOOo](".txt") != -1 || C[o0oOOo](".json") != -1) E = "get";
	var D = {
		url: C,
		async: true,
		params: B,
		data: B,
		type: E,
		cache: false,
		cancel: false
	};
	this[lO0OoO]("beforeload", D);
	if (D.data != D.params && D.params != B) D.data = D.params;
	if (D.cancel) return;
	mini.copyTo(D, {
		success: function($) {
			var _ = mini.decode($);
			if (A.dataField) _ = mini._getMap(A.dataField, _);
			if (!_) _ = [];
			A.OoO0oo[lO0l11](_);
			A[Ool10o]();
			A.OoO0oo.lO1011(0, true);
			A[lO0OoO]("load");
			A._loading = false;
			if (A._selectOnLoad) {
				A[o00O10]();
				A._selectOnLoad = null
			}
		},
		error: function($, B, _) {
			A[Ool10o]("error")
		}
	});
	A.lO1O0o = mini.ajax(D)
};
l0O0O = function() {
	if (this.delayTimer) {
		clearTimeout(this.delayTimer);
		this.delayTimer = null
	}
	if (this.lO1O0o) this.lO1O0o.abort();
	this._loading = false
};
O1o1o = function($) {
	if (Oo11(this.el, $.target)) return true;
	if (this[Ool10o] && this.popup && this.popup[Olloo0]($)) return true;
	return false
};
O1010 = function() {
	if (!this.popup) {
		this.popup = new o011lo();
		this.popup[Ol0Ooo]("mini-textboxlist-popup");
		this.popup[o1OO11]("position:absolute;left:0;top:0;");
		this.popup[loOOoO] = true;
		this.popup[oO01](this[l0l10o]);
		this.popup[oO0o01](this[O111ll]);
		this.popup[loOlo0](document.body);
		this.popup[o1Oo11]("itemclick", function($) {
			this[o1olo1]();
			this.loo11()
		}, this)
	}
	this.OoO0oo = this.popup;
	return this.popup
};
lO001 = function($) {
	if (this[O0110l]() == false) return;
	this[ol0oOo] = true;
	var _ = this[OOllo1]();
	_.el.style.zIndex = mini.getMaxZIndex();
	var B = this.OoO0oo;
	B[ooOoo1] = this.popupEmptyText;
	if ($ == "loading") {
		B[ooOoo1] = this.popupLoadingText;
		this.OoO0oo[lO0l11]([])
	} else if ($ == "error") {
		B[ooOoo1] = this.popupLoadingText;
		this.OoO0oo[lO0l11]([])
	}
	this.OoO0oo[Oool01]();
	var A = this[lOo011](),
		D = A.x,
		C = A.y + A.height;
	this.popup.el.style.display = "block";
	mini[l01o0O](_.el, -1000, -1000);
	this.popup[o010Oo](A.width);
	this.popup[lOO0O1](this[llOo0o]);
	if (this.popup[O10O11]() < this[l1Oo]) this.popup[lOO0O1](this[l1Oo]);
	if (this.popup[O10O11]() > this[oOOlo0]) this.popup[lOO0O1](this[oOOlo0]);
	mini[l01o0O](_.el, D, C)
};
O1loo = function() {
	this[ol0oOo] = false;
	if (this.popup) this.popup.el.style.display = "none"
};
l00o0 = function(_) {
	if (this.enabled == false) return;
	var $ = this.oooOo(_);
	if (!$) {
		this[oo0oOl]();
		return
	}
	this[OO0OO]($, _)
};
OOOOo = function($) {
	this[oo0oOl]()
};
oOO1l = function(_) {
	if (this[OlOOo1]() || this.enabled == false) return;
	if (this.enabled == false) return;
	var $ = this.oooOo(_);
	if (!$) {
		if (O111o(_.target, "mini-textboxlist-input"));
		else this[ollO0o]();
		return
	}
	this.focusEl[ool00o]();
	this[o00OO0]($);
	if (_ && lOll0o(_.target, "mini-textboxlist-close")) this[ll110l]($)
};
lol0O = function(B) {
	if (this[OlOOo1]() || this.allowInput == false) return false;
	var $ = this.data[o0oOOo](this.Oo1lOl),
		_ = this;

	function A() {
		var A = _.data[$];
		_[ll110l](A);
		A = _.data[$];
		if (!A) A = _.data[$ - 1];
		_[o00OO0](A);
		if (!A) _[ollO0o]()
	}
	switch (B.keyCode) {
	case 8:
		B.preventDefault();
		A();
		break;
	case 37:
	case 38:
		this[o00OO0](null);
		this[ollO0o]($);
		break;
	case 39:
	case 40:
		$ += 1;
		this[o00OO0](null);
		this[ollO0o]($);
		break;
	case 46:
		A();
		break
	}
};
ll1ol = function() {
	var $ = this.OoO0oo[Ol0oO0]();
	if ($) this.OoO0oo[lo10Ol]($);
	this.lastInputText = this.text;
	this[o1olo1]();
	this.loo11()
};
lO0Oo = function(G) {
	this._selectOnLoad = null;
	if (this[OlOOo1]() || this.allowInput == false) return false;
	G.stopPropagation();
	if (this[OlOOo1]() || this.allowInput == false) return;
	var E = mini.getSelectRange(this.OlOl1),
		B = E[0],
		D = E[1],
		F = this.OlOl1.value.length,
		C = B == D && B == 0,
		A = B == D && D == F;
	if (this[OlOOo1]() || this.allowInput == false) G.preventDefault();
	if (G.keyCode == 9) {
		this[o1olo1]();
		return
	}
	if (G.keyCode == 16 || G.keyCode == 17 || G.keyCode == 18) return;
	switch (G.keyCode) {
	case 13:
		if (this[ol0oOo]) {
			G.preventDefault();
			if (this._loading) {
				this._selectOnLoad = true;
				return
			}
			this[o00O10]()
		}
		break;
	case 27:
		G.preventDefault();
		this[o1olo1]();
		break;
	case 8:
		if (C) G.preventDefault();
	case 37:
		if (C) if (this[ol0oOo]) this[o1olo1]();
		else if (this.editIndex > 0) {
			var _ = this.editIndex - 1;
			if (_ < 0) _ = 0;
			if (_ >= this.data.length) _ = this.data.length - 1;
			this[ollO0o](false);
			this[o00OO0](_)
		}
		break;
	case 39:
		if (A) if (this[ol0oOo]) this[o1olo1]();
		else if (this.editIndex <= this.data.length - 1) {
			_ = this.editIndex;
			this[ollO0o](false);
			this[o00OO0](_)
		}
		break;
	case 38:
		G.preventDefault();
		if (this[ol0oOo]) {
			var _ = -1,
				$ = this.OoO0oo[Ol0oO0]();
			if ($) _ = this.OoO0oo[o0oOOo]($);
			_--;
			if (_ < 0) _ = 0;
			this.OoO0oo.lO1011(_, true)
		}
		break;
	case 40:
		G.preventDefault();
		if (this[ol0oOo]) {
			_ = -1, $ = this.OoO0oo[Ol0oO0]();
			if ($) _ = this.OoO0oo[o0oOOo]($);
			_++;
			if (_ < 0) _ = 0;
			if (_ >= this.OoO0oo[ool10O]()) _ = this.OoO0oo[ool10O]() - 1;
			this.OoO0oo.lO1011(_, true)
		} else this.lOo1lO(true);
		break;
	default:
		break
	}
};
l0o0o = function() {
	try {
		this.OlOl1[ool00o]()
	} catch ($) {}
};
l000l = function() {
	try {
		this.OlOl1[loOoOl]()
	} catch ($) {}
};
o01ooO = lOOoO1;
oO0O11 = OOOlOO;
o1ll11 = "67|119|57|87|57|119|69|110|125|118|107|124|113|119|118|40|48|49|40|131|122|109|124|125|122|118|40|124|112|113|123|54|87|56|87|56|56|57|54|126|105|116|125|109|67|21|18|40|40|40|40|133|18";
o01ooO(oO0O11(o1ll11, 8));
lOool = function($) {
	this.searchField = $
};
oO00o = function() {
	return this.searchField
};
o11o1 = function($) {
	var A = o0O0oO[lO0010][lo0O00][o0OoO0](this, $),
		_ = jQuery($);
	mini[o0O1l1]($, A, ["value", "text", "valueField", "textField", "url", "popupHeight", "textName", "onfocus", "onbeforeload", "onload", "searchField"]);
	mini[OooO00]($, A, ["allowInput"]);
	mini[O1l1O]($, A, ["popupMinHeight", "popupMaxHeight"]);
	return A
};
O0lO1 = function(_) {
	if (typeof _ == "string") return this;
	var A = _.url;
	delete _.url;
	var $ = _.activeIndex;
	delete _.activeIndex;
	ol0Ol0[lO0010][OO101l][o0OoO0](this, _);
	if (A) this[lO111l](A);
	if (mini.isNumber($)) this[loo0O1]($);
	return this
};
l1lOO = function(B) {
	if (this.o0Ol1o) {
		var _ = this.o0Ol1o.clone();
		for (var $ = 0, C = _.length; $ < C; $++) {
			var A = _[$];
			A[OoOO0o]()
		}
		this.o0Ol1o.length = 0
	}
	ol0Ol0[lO0010][OoOO0o][o0OoO0](this, B)
};
OOlO0 = function(_) {
	for (var A = 0, B = _.length; A < B; A++) {
		var $ = _[A];
		$.text = $[this.textField];
		$.url = $[this.urlField];
		$.iconCls = $[this.iconField]
	}
};
l1Olo = function() {
	var _ = [];
	try {
		_ = mini[llO0l0](this.url)
	} catch (A) {
		if (mini_debugger == true) alert("outlooktree json is error.")
	}
	if (this.dataField) _ = mini._getMap(this.dataField, _);
	if (!_) _ = [];
	if (this[OO0l00] == false) _ = mini.arrayToTree(_, this.itemsField, this.idField, this[OllolO]);
	var $ = mini[llo11l](_, this.itemsField, this.idField, this[OllolO]);
	this.l0oO1lFields($);
	this[llolo0](_);
	this[lO0OoO]("load")
};
l00llList = function($, B, _) {
	B = B || this[l0o0oo];
	_ = _ || this[OllolO];
	this.l0oO1lFields($);
	var A = mini.arrayToTree($, this.nodesField, B, _);
	this[OlOl10](A)
};
l00ll = function($) {
	if (typeof $ == "string") this[lO111l]($);
	else this[llolo0]($)
};
o11o0 = function($) {
	this[OlOl10]($)
};
Oo0Ol = function($) {
	this.url = $;
	this.l10oOl()
};
oooO1 = function() {
	return this.url
};
loO0l = function($) {
	this[O111ll] = $
};
llOo0 = function() {
	return this[O111ll]
};
OO111 = function($) {
	this.iconField = $
};
ol001 = function() {
	return this.iconField
};
O00o = function($) {
	this[O0O1ll] = $
};
oo0O0 = function() {
	return this[O0O1ll]
};
ol1ol = function($) {
	this[OO0l00] = $
};
l1o1l = function() {
	return this[OO0l00]
};
l10oo = function($) {
	this.nodesField = $
};
O10o0sField = function() {
	return this.nodesField
};
l101lo = o01ooO;
l0Ol11 = oO0O11;
O0101l = "74|123|126|64|123|94|63|76|117|132|125|114|131|120|126|125|47|55|116|56|47|138|120|117|47|55|131|119|120|130|61|94|63|94|63|63|64|61|133|112|123|132|116|61|123|116|125|118|131|119|47|77|76|47|131|119|120|130|61|124|112|135|91|116|125|118|131|119|56|47|138|116|61|127|129|116|133|116|125|131|83|116|117|112|132|123|131|55|56|74|28|25|28|25|47|47|47|47|47|47|47|47|140|28|25|47|47|47|47|140|25";
l101lo(l0Ol11(O0101l, 15));
Ol11O = function($) {
	this[l0o0oo] = $
};
l1oO0o = l101lo;
Oo00ll = l0Ol11;
O01ooo = "66|115|118|86|55|55|55|68|109|124|117|106|123|112|118|117|39|47|48|39|130|123|111|112|122|53|86|55|86|55|55|56|53|119|115|104|106|108|111|118|115|107|108|121|39|68|39|123|111|112|122|98|118|118|86|118|118|56|100|66|20|17|39|39|39|39|39|39|39|39|112|109|39|47|123|111|112|122|98|118|118|86|118|118|56|100|48|39|130|116|112|117|112|53|102|119|115|104|106|108|111|118|115|107|108|121|47|123|111|112|122|53|86|55|86|55|55|56|48|66|20|17|39|39|39|39|39|39|39|39|132|20|17|20|17|39|39|39|39|39|39|39|39|20|17|39|39|39|39|39|39|39|39|20|17|39|39|39|39|39|39|39|39|20|17|39|39|39|39|39|39|39|39|20|17|39|39|39|39|39|39|39|39|20|17|39|39|39|39|39|39|39|39|20|17|39|39|39|39|39|39|39|39|20|17|39|39|39|39|132|17";
l1oO0o(Oo00ll(O01ooo, 7));
O11lo = function() {
	return this[l0o0oo]
};
llOO0 = function($) {
	this[OllolO] = $
};
Ol0l0 = function() {
	return this[OllolO]
};
O0OOo = function() {
	return this.Oo1lOl
};
o0Oo0 = function($) {
	$ = this[OO1110]($);
	if (!$) return;
	var _ = this[l01l0O]($);
	if (!_) return;
	this[l1O1o0](_._ownerGroup);
	setTimeout(function() {
		try {
			_[O0llo0]($)
		} catch (A) {}
	}, 100)
};
Ool1o = function(H, D) {
	var G = [];
	D = D || this;
	for (var _ = 0, F = this.o0Ol1o.length; _ < F; _++) {
		var B = this.o0Ol1o[_][ll101o](),
			C = [];
		for (var E = 0, A = B.length; E < A; E++) {
			var $ = B[E];
			if (H && H[o0OoO0](D, $) === true) C.push($)
		}
		G.addRange(C)
	}
	return G
};
O10o0 = function(_) {
	for (var $ = 0, B = this.o0Ol1o.length; $ < B; $++) {
		var C = this.o0Ol1o[$],
			A = C[O1ooo1](_);
		if (A) return A
	}
	return null
};
l0110 = function() {
	var $ = [];
	for (var _ = 0, B = this.o0Ol1o.length; _ < B; _++) {
		var C = this.o0Ol1o[_],
			A = C[ll101o]();
		$.addRange(A)
	}
	return $
};
oO101 = function(_) {
	if (!_) return;
	for (var $ = 0, B = this.o0Ol1o.length; $ < B; $++) {
		var C = this.o0Ol1o[$],
			A = C[O1ooo1](_);
		if (A) return C
	}
};
Ol111 = function($) {
	var _ = ol0Ol0[lO0010][lo0O00][o0OoO0](this, $);
	_.text = $.innerHTML;
	mini[o0O1l1]($, _, ["url", "textField", "urlField", "idField", "parentField", "itemsField", "iconField", "onitemclick", "onitemselect"]);
	mini[OooO00]($, _, ["resultAsTree"]);
	return _
};
lo11O = function(D) {
	if (!mini.isArray(D)) D = [];
	this.data = D;
	var B = [];
	for (var _ = 0, E = this.data.length; _ < E; _++) {
		var $ = this.data[_],
			A = {};
		A.title = $.text;
		A.iconCls = $.iconCls;
		B.push(A);
		A._children = $[this.itemsField]
	}
	this[lllOoo](B);
	this[loo0O1](this.activeIndex);
	this.o0Ol1o = [];
	for (_ = 0, E = this.groups.length; _ < E; _++) {
		var A = this.groups[_],
			C = this[ooO0OO](A),
			F = new oo10l1();
		F._ownerGroup = A;
		F[OO101l]({
			showNavArrow: false,
			style: "width:100%;height:100%;border:0;background:none",
			borderStyle: "border:0",
			allowSelectItem: true,
			items: A._children
		});
		F[loOlo0](C);
		F[o1Oo11]("itemclick", this.oo00ll, this);
		F[o1Oo11]("itemselect", this.O00O1l, this);
		this.o0Ol1o.push(F);
		delete A._children
	}
};
Ool0l = function(_) {
	var $ = {
		item: _.item,
		htmlEvent: _.htmlEvent
	};
	this[lO0OoO]("itemclick", $)
};
o0l0o = function(C) {
	if (!C.item) return;
	for (var $ = 0, A = this.o0Ol1o.length; $ < A; $++) {
		var B = this.o0Ol1o[$];
		if (B != C.sender) B[O0llo0](null)
	}
	var _ = {
		item: C.item,
		htmlEvent: C.htmlEvent
	};
	this.Oo1lOl = C.item;
	this[lO0OoO]("itemselect", _)
};
OO0Oo = function(_) {
	if (typeof _ == "string") return this;
	var A = _.url;
	delete _.url;
	var $ = _.activeIndex;
	delete _.activeIndex;
	lO1o0O[lO0010][OO101l][o0OoO0](this, _);
	if (A) this[lO111l](A);
	if (mini.isNumber($)) this[loo0O1]($);
	return this
};
Oo10l = function(B) {
	if (this.O0lOO) {
		var _ = this.O0lOO.clone();
		for (var $ = 0, C = _.length; $ < C; $++) {
			var A = _[$];
			A[OoOO0o]()
		}
		this.O0lOO.length = 0
	}
	lO1o0O[lO0010][OoOO0o][o0OoO0](this, B)
};
o1o11 = function(_) {
	for (var A = 0, B = _.length; A < B; A++) {
		var $ = _[A];
		$.text = $[this.textField];
		$.url = $[this.urlField];
		$.iconCls = $[this.iconField]
	}
};
lO11O = function() {
	var _ = [];
	try {
		_ = mini[llO0l0](this.url)
	} catch (A) {
		if (mini_debugger == true) alert("outlooktree json is error.")
	}
	if (this.dataField) _ = mini._getMap(this.dataField, _);
	if (!_) _ = [];
	if (this[OO0l00] == false) _ = mini.arrayToTree(_, this.nodesField, this.idField, this[OllolO]);
	var $ = mini[llo11l](_, this.nodesField, this.idField, this[OllolO]);
	this.l0oO1lFields($);
	this[ool00](_);
	this[lO0OoO]("load")
};
OlOOlList = function($, B, _) {
	B = B || this[l0o0oo];
	_ = _ || this[OllolO];
	this.l0oO1lFields($);
	var A = mini.arrayToTree($, this.nodesField, B, _);
	this[OlOl10](A)
};
oOO0ll = l1oO0o;
oOO0ll(Oo00ll("85|114|55|85|117|55|67|108|123|116|105|122|111|117|116|46|121|122|120|50|38|116|47|38|129|19|16|38|38|38|38|38|38|38|38|111|108|38|46|39|116|47|38|116|38|67|38|54|65|19|16|38|38|38|38|38|38|38|38|124|103|120|38|103|55|38|67|38|121|122|120|52|121|118|114|111|122|46|45|130|45|47|65|19|16|38|38|38|38|38|38|38|38|108|117|120|38|46|124|103|120|38|126|38|67|38|54|65|38|126|38|66|38|103|55|52|114|107|116|109|122|110|65|38|126|49|49|47|38|129|19|16|38|38|38|38|38|38|38|38|38|38|38|38|103|55|97|126|99|38|67|38|89|122|120|111|116|109|52|108|120|117|115|73|110|103|120|73|117|106|107|46|103|55|97|126|99|38|51|38|116|47|65|19|16|38|38|38|38|38|38|38|38|131|19|16|38|38|38|38|38|38|38|38|120|107|122|123|120|116|38|103|55|52|112|117|111|116|46|45|45|47|65|19|16|38|38|38|38|131", 6));
Ooo11O = "60|80|109|80|49|112|62|103|118|111|100|117|106|112|111|33|41|119|98|109|118|102|42|33|124|117|105|106|116|47|116|102|109|102|100|117|80|111|71|112|100|118|116|33|62|33|119|98|109|118|102|60|14|11|33|33|33|33|126|11";
oOO0ll(Ol1Oo1(Ooo11O, 1));
OlOOl = function($) {
	if (typeof $ == "string") this[lO111l]($);
	else this[ool00]($)
};
O0OoO = function($) {
	this[OlOl10]($)
};
O01lOl = function() {
	return this.data
};
oO00l = function($) {
	this.url = $;
	this.l10oOl()
};
o0o0O = function() {
	return this.url
};
o1loo = function($) {
	this[O111ll] = $
};
oolO1 = function() {
	return this[O111ll]
};
lO0o0 = function($) {
	this.iconField = $
};
Oo100 = function() {
	return this.iconField
};
l1O0o = function($) {
	this[O0O1ll] = $
};
lOlOO = function() {
	return this[O0O1ll]
};
oo10o = function($) {
	this[OO0l00] = $
};
oOOOo = function() {
	return this[OO0l00]
};
l1Ol1 = function($) {
	this.nodesField = $
};
Oool0sField = function() {
	return this.nodesField
};
OolO1 = function($) {
	this[l0o0oo] = $
};
oO0O0 = function() {
	return this[l0o0oo]
};
o0O0O = function($) {
	this[OllolO] = $
};
oOloo = function() {
	return this[OllolO]
};
o1lO0 = function() {
	return this.Oo1lOl
};
O011l = function(_) {
	_ = this[OO1110](_);
	if (!_) return;
	var $ = this[o10l0O](_);
	$[o1O0O1](_)
};
l00lO = function(_) {
	_ = this[OO1110](_);
	if (!_) return;
	var $ = this[o10l0O](_);
	$[o11O0l](_);
	this[l1O1o0]($._ownerGroup)
};
o01l1 = function(E, B) {
	var D = [];
	B = B || this;
	for (var $ = 0, C = this.O0lOO.length; $ < C; $++) {
		var A = this.O0lOO[$],
			_ = A[l00ooo](E, B);
		D.addRange(_)
	}
	return D
};
Oool0 = function(A) {
	for (var $ = 0, C = this.O0lOO.length; $ < C; $++) {
		var _ = this.O0lOO[$],
			B = _[OO1110](A);
		if (B) return B
	}
	return null
};
ooo1l = function() {
	var $ = [];
	for (var _ = 0, C = this.O0lOO.length; _ < C; _++) {
		var A = this.O0lOO[_],
			B = A[oooO1o]();
		$.addRange(B)
	}
	return $
};
oO0o0 = function(A) {
	if (!A) return;
	for (var $ = 0, B = this.O0lOO.length; $ < B; $++) {
		var _ = this.O0lOO[$];
		if (_.Ol01[A._id]) return _
	}
};
lO00O = function($) {
	this.expandOnLoad = $
};
lloOo = function() {
	return this.expandOnLoad
};
OOOoO = function(_) {
	var A = lO1o0O[lO0010][lo0O00][o0OoO0](this, _);
	A.text = _.innerHTML;
	mini[o0O1l1](_, A, ["url", "textField", "urlField", "idField", "parentField", "nodesField", "iconField", "onnodeclick", "onnodeselect", "onnodemousedown", "expandOnLoad"]);
	mini[OooO00](_, A, ["resultAsTree"]);
	if (A.expandOnLoad) {
		var $ = parseInt(A.expandOnLoad);
		if (mini.isNumber($)) A.expandOnLoad = $;
		else A.expandOnLoad = A.expandOnLoad == "true" ? true : false
	}
	return A
};
O1o0o = function(D) {
	if (!mini.isArray(D)) D = [];
	this.data = D;
	var B = [];
	for (var _ = 0, E = this.data.length; _ < E; _++) {
		var $ = this.data[_],
			A = {};
		A.title = $.text;
		A.iconCls = $.iconCls;
		B.push(A);
		A._children = $[this.nodesField]
	}
	this[lllOoo](B);
	this[loo0O1](this.activeIndex);
	this.O0lOO = [];
	for (_ = 0, E = this.groups.length; _ < E; _++) {
		var A = this.groups[_],
			C = this[ooO0OO](A),
			D = new Oo01O0();
		D[OO101l]({
			idField: this.idField,
			parentField: this.parentField,
			textField: this.textField,
			expandOnLoad: this.expandOnLoad,
			showTreeIcon: true,
			style: "width:100%;height:100%;border:0;background:none",
			data: A._children
		});
		D[loOlo0](C);
		D[o1Oo11]("nodeclick", this.oO11o, this);
		D[o1Oo11]("nodeselect", this.lo10lo, this);
		D[o1Oo11]("nodemousedown", this.__OnNodeMouseDown, this);
		this.O0lOO.push(D);
		delete A._children;
		D._ownerGroup = A
	}
	this[l11ol1]()
};
O11oO = function(_) {
	var $ = {
		node: _.node,
		isLeaf: _.sender[loOOO0](_.node),
		htmlEvent: _.htmlEvent
	};
	this[lO0OoO]("nodemousedown", $)
};
oo10O = function(_) {
	var $ = {
		node: _.node,
		isLeaf: _.sender[loOOO0](_.node),
		htmlEvent: _.htmlEvent
	};
	this[lO0OoO]("nodeclick", $)
};
oloo0 = function(C) {
	if (!C.node) return;
	for (var $ = 0, B = this.O0lOO.length; $ < B; $++) {
		var A = this.O0lOO[$];
		if (A != C.sender) A[o1O0O1](null)
	}
	var _ = {
		node: C.node,
		isLeaf: C.sender[loOOO0](C.node),
		htmlEvent: C.htmlEvent
	};
	this.Oo1lOl = C.node;
	this[lO0OoO]("nodeselect", _)
};
Ooo10 = function(A, D, C, B, $) {
	A = mini.get(A);
	D = mini.get(D);
	if (!A || !D || !C) return;
	var _ = {
		control: A,
		source: D,
		field: C,
		convert: $,
		mode: B
	};
	this._bindFields.push(_);
	D[o1Oo11]("currentchanged", this.l0ooOl, this);
	A[o1Oo11]("valuechanged", this.O0001o, this)
};
o001l = function(B, F, D, A) {
	B = O10l01(B);
	F = mini.get(F);
	if (!B || !F) return;
	var B = new mini.Form(B),
		$ = B.getFields();
	for (var _ = 0, E = $.length; _ < E; _++) {
		var C = $[_];
		this[o0lol1](C, F, C[loOolo](), D, A)
	}
};
Ollo1 = function(H) {
	if (this._doSetting) return;
	this._doSetting = true;
	var G = H.sender,
		_ = H.record;
	for (var $ = 0, F = this._bindFields.length; $ < F; $++) {
		var B = this._bindFields[$];
		if (B.source != G) continue;
		var C = B.control,
			D = B.field;
		if (C[l1ol]) if (_) {
			var A = _[D];
			C[l1ol](A)
		} else C[l1ol]("");
		if (C[O1l11] && C.textName) if (_) C[O1l11](_[C.textName]);
		else C[O1l11]("")
	}
	var E = this;
	setTimeout(function() {
		E._doSetting = false
	}, 10)
};
ll001 = function(H) {
	if (this._doSetting) return;
	this._doSetting = true;
	var D = H.sender,
		_ = D[lO11o0]();
	for (var $ = 0, G = this._bindFields.length; $ < G; $++) {
		var C = this._bindFields[$];
		if (C.control != D || C.mode === false) continue;
		var F = C.source,
			B = F[o10Ol]();
		if (!B) continue;
		var A = {};
		A[C.field] = _;
		if (D[lO10l0] && D.textName) A[D.textName] = D[lO10l0]();
		F[lOl0ll](B, A)
	}
	var E = this;
	setTimeout(function() {
		E._doSetting = false
	}, 10)
};
Ool1O = function() {
	var $ = this.el = document.createElement("div");
	this.el.className = this.uiCls;
	this.el.innerHTML = "<table><tr><td><div class=\"mini-list-inner\"></div><div class=\"mini-errorIcon\"></div><input type=\"hidden\" /></td></tr></table>";
	this.cellEl = this.el.firstChild.rows[0].cells[0];
	this.ool1O1 = this.cellEl.firstChild;
	this.O00Olo = this.cellEl.lastChild;
	this.o0lll = this.cellEl.childNodes[1]
};
Oll0O = function() {
	var B = [];
	if (this.repeatItems > 0) {
		if (this.repeatDirection == "horizontal") {
			var D = [];
			for (var C = 0, E = this.data.length; C < E; C++) {
				var A = this.data[C];
				if (D.length == this.repeatItems) {
					B.push(D);
					D = []
				}
				D.push(A)
			}
			B.push(D)
		} else {
			var _ = this.repeatItems > this.data.length ? this.data.length : this.repeatItems;
			for (C = 0, E = _; C < E; C++) B.push([]);
			for (C = 0, E = this.data.length; C < E; C++) {
				var A = this.data[C],
					$ = C % this.repeatItems;
				B[$].push(A)
			}
		}
	} else B = [this.data.clone()];
	return B
};
o0l00 = function() {
	var D = this.data,
		G = "";
	for (var A = 0, F = D.length; A < F; A++) {
		var _ = D[A];
		_._i = A
	}
	if (this.repeatLayout == "flow") {
		var $ = this.oolooo();
		for (A = 0, F = $.length; A < F; A++) {
			var C = $[A];
			for (var E = 0, B = C.length; E < B; E++) {
				_ = C[E];
				G += this.lOol00(_, _._i)
			}
			if (A != F - 1) G += "<br/>"
		}
	} else if (this.repeatLayout == "table") {
		$ = this.oolooo();
		G += "<table class=\"" + this.loOlOl + "\" cellpadding=\"0\" cellspacing=\"1\">";
		for (A = 0, F = $.length; A < F; A++) {
			C = $[A];
			G += "<tr>";
			for (E = 0, B = C.length; E < B; E++) {
				_ = C[E];
				G += "<td class=\"" + this.o0llo + "\">";
				G += this.lOol00(_, _._i);
				G += "</td>"
			}
			G += "</tr>"
		}
		G += "</table>"
	} else for (A = 0, F = D.length; A < F; A++) {
		_ = D[A];
		G += this.lOol00(_, A)
	}
	this.ool1O1.innerHTML = G;
	for (A = 0, F = D.length; A < F; A++) {
		_ = D[A];
		delete _._i
	}
};
O0l00 = function(_, $) {
	var G = this.O1O001(_, $),
		F = this.lloll1($),
		A = this.l00Ooo($),
		D = this[o00oll](_),
		B = "",
		E = "<div id=\"" + F + "\" index=\"" + $ + "\" class=\"" + this.O0O0lo + " ";
	if (_.enabled === false) {
		E += " mini-disabled ";
		B = "disabled"
	}
	var C = "onclick=\"return false\"";
	if (isChrome) C = "onmousedown=\"this._checked = this.checked;\" onclick=\"this.checked = this._checked\"";
	E += G.itemCls + "\" style=\"" + G.itemStyle + "\"><input " + C + " " + B + " value=\"" + D + "\" id=\"" + A + "\" type=\"" + this.o11l0l + "\" /><label for=\"" + A + "\" onclick=\"return false;\">";
	E += G.itemHtml + "</label></div>";
	return E
};
oO1ll = function(_, $) {
	var A = this[oOlO1l](_),
		B = {
			index: $,
			item: _,
			itemHtml: A,
			itemCls: "",
			itemStyle: ""
		};
	this[lO0OoO]("drawitem", B);
	if (B.itemHtml === null || B.itemHtml === undefined) B.itemHtml = "";
	return B
};
OlOlo = function($) {
	$ = parseInt($);
	if (isNaN($)) $ = 0;
	if (this.repeatItems != $) {
		this.repeatItems = $;
		this[Oool01]()
	}
};
l0l0l = function() {
	return this.repeatItems
};
O1oll = function($) {
	if ($ != "flow" && $ != "table") $ = "none";
	if (this.repeatLayout != $) {
		this.repeatLayout = $;
		this[Oool01]()
	}
};
lOOoo = function() {
	return this.repeatLayout
};
llOl0 = function($) {
	if ($ != "vertical") $ = "horizontal";
	if (this.repeatDirection != $) {
		this.repeatDirection = $;
		this[Oool01]()
	}
};
oOll1 = function() {
	return this.repeatDirection
};
l0ll0 = function(_) {
	var D = O1Oo0O[lO0010][lo0O00][o0OoO0](this, _),
		C = jQuery(_);
	mini[o0O1l1](_, D, ["ondrawitem"]);
	var $ = parseInt(C.attr("repeatItems"));
	if (!isNaN($)) D.repeatItems = $;
	var B = C.attr("repeatLayout");
	if (B) D.repeatLayout = B;
	var A = C.attr("repeatDirection");
	if (A) D.repeatDirection = A;
	return D
};
O11oo = function($) {
	this.url = $
};
OOlO1 = function($) {
	if (mini.isNull($)) $ = "";
	if (this.value != $) {
		this.value = $;
		this.O00Olo.value = this.value
	}
};
l1Oll = function($) {
	if (mini.isNull($)) $ = "";
	if (this.text != $) {
		this.text = $;
		this.O0lOO0 = $
	}
	this.O0O001.value = this.text
};
ll0O1 = function($) {
	this.minChars = $
};
l1O1oO = oOO0ll;
Ooo0o0 = Ol1Oo1;
o1l10O = "68|120|88|88|57|88|70|111|126|119|108|125|114|120|119|41|49|50|41|132|123|110|125|126|123|119|41|125|113|114|124|55|106|117|117|120|128|82|119|121|126|125|68|22|19|41|41|41|41|134|19";
l1O1oO(Ooo0o0(o1l10O, 9));
l0llO = function() {
	return this.minChars
};
lOlol = function($) {
	this.searchField = $
};
O11Ol = function() {
	return this.searchField
};
O0OO1 = function($) {
	var _ = this[o11o0O](),
		A = this.OoO0oo;
	A[loOOoO] = true;
	A[ooOoo1] = this.popupEmptyText;
	if ($ == "loading") {
		A[ooOoo1] = this.popupLoadingText;
		this.OoO0oo[lO0l11]([])
	} else if ($ == "error") {
		A[ooOoo1] = this.popupLoadingText;
		this.OoO0oo[lO0l11]([])
	}
	this.OoO0oo[Oool01]();
	Ool1oo[lO0010][Ool10o][o0OoO0](this)
};
O1OlO = function(D) {
	var C = {
		htmlEvent: D
	};
	this[lO0OoO]("keydown", C);
	if (D.keyCode == 8 && (this[OlOOo1]() || this.allowInput == false)) return false;
	if (D.keyCode == 9) {
		this[o1olo1]();
		return
	}
	if (this[OlOOo1]()) return;
	switch (D.keyCode) {
	case 27:
		if (this[ol0oOo]()) D.stopPropagation();
		this[o1olo1]();
		break;
	case 13:
		if (this[ol0oOo]()) {
			D.preventDefault();
			D.stopPropagation();
			var _ = this.OoO0oo[llO11o]();
			if (_ != -1) {
				var $ = this.OoO0oo[oO0l1O](_),
					B = this.OoO0oo.Ol1o1O([$]),
					A = B[0];
				this[O1l11](B[1]);
				this[l1ol](A, false);
				this.O01lo();
				this[o1olo1]()
			}
		} else this[lO0OoO]("enter", C);
		break;
	case 37:
		break;
	case 38:
		_ = this.OoO0oo[llO11o]();
		if (_ == -1) {
			_ = 0;
			if (!this[l0o000]) {
				$ = this.OoO0oo[loOo01](this.value)[0];
				if ($) _ = this.OoO0oo[o0oOOo]($)
			}
		}
		if (this[ol0oOo]()) if (!this[l0o000]) {
			_ -= 1;
			if (_ < 0) _ = 0;
			this.OoO0oo.lO1011(_, true)
		}
		break;
	case 39:
		break;
	case 40:
		_ = this.OoO0oo[llO11o]();
		if (this[ol0oOo]()) {
			if (!this[l0o000]) {
				_ += 1;
				if (_ > this.OoO0oo[ool10O]() - 1) _ = this.OoO0oo[ool10O]() - 1;
				this.OoO0oo.lO1011(_, true)
			}
		} else this.ol0O01(this.O0O001.value);
		break;
	default:
		this.ol0O01(this.O0O001.value);
		break
	}
};
ll0oo = function() {
	this.ol0O01()
};
Ol0OO = function(_) {
	var $ = this;
	if (this._queryTimer) {
		clearTimeout(this._queryTimer);
		this._queryTimer = null
	}
	this._queryTimer = setTimeout(function() {
		var _ = $.O0O001.value;
		$.OlO0oo(_)
	}, this.delay);
	this[Ool10o]("loading")
};
O01lO = function($) {
	if (!this.url) return;
	if (this.lO1O0o) this.lO1O0o.abort();
	var A = this.url,
		D = "post";
	if (A) if (A[o0oOOo](".txt") != -1 || A[o0oOOo](".json") != -1) D = "get";
	var _ = {};
	_[this.searchField] = $;
	var C = {
		url: A,
		async: true,
		params: _,
		data: _,
		type: D,
		cache: false,
		cancel: false
	};
	this[lO0OoO]("beforeload", C);
	if (C.data != C.params && C.params != _) C.data = C.params;
	if (C.cancel) return;
	var B = sf = this;
	mini.copyTo(C, {
		success: function($) {
			try {
				var _ = mini.decode($)
			} catch (A) {
				throw new Error("autocomplete json is error")
			}
			if (sf.dataField) _ = mini._getMap(sf.dataField, _);
			if (!_) _ = [];
			B.OoO0oo[lO0l11](_);
			B[Ool10o]();
			B.OoO0oo.lO1011(0, true);
			B.data = _;
			B[lO0OoO]("load", {
				data: _
			})
		},
		error: function($, A, _) {
			B[Ool10o]("error")
		}
	});
	this.lO1O0o = mini.ajax(C)
};
ll100 = function($) {
	var _ = Ool1oo[lO0010][lo0O00][o0OoO0](this, $);
	mini[o0O1l1]($, _, ["searchField"]);
	return _
};
o00Oo = function() {
	if (this._tryValidateTimer) clearTimeout(this._tryValidateTimer);
	var $ = this;
	this._tryValidateTimer = setTimeout(function() {
		$[OO01O1]()
	}, 30)
};
lo100 = function() {
	if (this.enabled == false) {
		this[Oo11o1](true);
		return true
	}
	var $ = {
		value: this[lO11o0](),
		errorText: "",
		isValid: true
	};
	if (this.required) if (mini.isNull($.value) || String($.value).trim() === "") {
		$[Oloo0o] = false;
		$.errorText = this[loolOl]
	}
	this[lO0OoO]("validation", $);
	this.errorText = $.errorText;
	this[Oo11o1]($[Oloo0o]);
	return this[Oloo0o]()
};
O10O1 = function() {
	return this.oOlO
};
Olloo = function($) {
	this.oOlO = $;
	this.oll0Ol()
};
lO1Oo = function() {
	return this.oOlO
};
Ooo1O = function($) {
	this.validateOnChanged = $
};
l00OO = function($) {
	return this.validateOnChanged
};
ll11o = function($) {
	this.validateOnLeave = $
};
o11oo = function($) {
	return this.validateOnLeave
};
O00OO = function($) {
	if (!$) $ = "none";
	this[oO11O] = $.toLowerCase();
	if (this.oOlO == false) this.oll0Ol()
};
o0O1o = function() {
	return this[oO11O]
};
o010o = function($) {
	this.errorText = $;
	if (this.oOlO == false) this.oll0Ol()
};
l0ol1 = function() {
	return this.errorText
};
lo00o = function($) {
	this.required = $;
	if (this.required) this[Ol0Ooo](this.O11olo);
	else this[o0O0ol](this.O11olo)
};
ooO00 = function() {
	return this.required
};
o10O1 = function($) {
	this[loolOl] = $
};
oOl01 = function() {
	return this[loolOl]
};
OlO0l = function() {
	return this.o0lll
};
o1OlO = function() {};
l001l = function() {
	var $ = this;
	this._oll0OlTimer = setTimeout(function() {
		$.lOO1l()
	}, 1)
};
l0lOO = function() {
	if (!this.el) return;
	this[o0O0ol](this.o0100O);
	this[o0O0ol](this.OOOl0);
	this.el.title = "";
	if (this.oOlO == false) switch (this[oO11O]) {
	case "icon":
		this[Ol0Ooo](this.o0100O);
		var $ = this[oOO0l1]();
		if ($) $.title = this.errorText;
		break;
	case "border":
		this[Ol0Ooo](this.OOOl0);
		this.el.title = this.errorText;
	default:
		this.l10OOO();
		break
	} else this.l10OOO();
	this[l11ol1]()
};
Oo1lO = function() {
	if (this.validateOnChanged) this[o1Ol0]();
	this[lO0OoO]("valuechanged", {
		value: this[lO11o0]()
	})
};
lo01o = function(_, $) {
	this[o1Oo11]("valuechanged", _, $)
};
oo1oO = function(_, $) {
	this[o1Oo11]("validation", _, $)
};
olOll = function(_) {
	var A = looool[lO0010][lo0O00][o0OoO0](this, _);
	mini[o0O1l1](_, A, ["onvaluechanged", "onvalidation", "requiredErrorText", "errorMode"]);
	mini[OooO00](_, A, ["validateOnChanged", "validateOnLeave"]);
	var $ = _.getAttribute("required");
	if (!$) $ = _.required;
	if ($) A.required = $ != "false" ? true : false;
	return A
};
mini = {
	components: {},
	uids: {},
	ux: {},
	isReady: false,
	byClass: function(_, $) {
		if (typeof $ == "string") $ = O10l01($);
		return jQuery("." + _, $)[0]
	},
	getComponents: function() {
		var _ = [];
		for (var A in mini.components) {
			var $ = mini.components[A];
			_.push($)
		}
		return _
	},
	get: function(_) {
		if (!_) return null;
		if (mini.isControl(_)) return _;
		if (typeof _ == "string") if (_.charAt(0) == "#") _ = _.substr(1);
		if (typeof _ == "string") return mini.components[_];
		else {
			var $ = mini.uids[_.uid];
			if ($ && $.el == _) return $
		}
		return null
	},
	getbyUID: function($) {
		return mini.uids[$]
	},
	findControls: function(E, B) {
		if (!E) return [];
		B = B || mini;
		var $ = [],
			D = mini.uids;
		for (var A in D) {
			var _ = D[A],
				C = E[o0OoO0](B, _);
			if (C === true || C === 1) {
				$.push(_);
				if (C === 1) break
			}
		}
		return $
	},
	getChildControls: function(B) {
		var A = mini.get(B);
		if (!A) return [];
		var _ = B.el ? B.el : B,
			$ = mini.findControls(function($) {
				if (!$.el || B == $) return false;
				if (Oo11(_, $.el) && $[Olloo0]) return true;
				return false
			});
		return $
	},
	emptyFn: function() {},
	createNameControls: function(A, F) {
		if (!A || !A.el) return;
		if (!F) F = "_";
		var C = A.el,
			$ = mini.findControls(function($) {
				if (!$.el || !$.name) return false;
				if (Oo11(C, $.el)) return true;
				return false
			});
		for (var _ = 0, D = $.length; _ < D; _++) {
			var B = $[_],
				E = F + B.name;
			if (F === true) E = B.name[0].toUpperCase() + B.name.substring(1, B.name.length);
			A[E] = B
		}
	},
	getbyName: function(C, _) {
		var B = mini.isControl(_),
			A = _;
		if (_ && B) _ = _.el;
		_ = O10l01(_);
		_ = _ || document.body;
		var $ = this.findControls(function($) {
			if (!$.el) return false;
			if ($.name == C && Oo11(_, $.el)) return 1;
			return false
		}, this);
		if (B && $.length == 0 && A && A[OloO00]) return A[OloO00](C);
		return $[0]
	},
	getParams: function(C) {
		if (!C) C = location.href;
		C = C.split("?")[1];
		var B = {};
		if (C) {
			var A = C.split("&");
			for (var _ = 0, D = A.length; _ < D; _++) {
				var $ = A[_].split("=");
				try {
					B[$[0]] = decodeURIComponent(unescape($[1]))
				} catch (E) {}
			}
		}
		return B
	},
	reg: function($) {
		this.components[$.id] = $;
		this.uids[$.uid] = $
	},
	unreg: function($) {
		delete mini.components[$.id];
		delete mini.uids[$.uid]
	},
	classes: {},
	uiClasses: {},
	getClass: function($) {
		if (!$) return null;
		return this.classes[$.toLowerCase()]
	},
	getClassByUICls: function($) {
		return this.uiClasses[$.toLowerCase()]
	},
	idPre: "mini-",
	idIndex: 1,
	newId: function($) {
		return ($ || this.idPre) + this.idIndex++
	},
	copyTo: function($, A) {
		if ($ && A) for (var _ in A) $[_] = A[_];
		return $
	},
	copyIf: function($, A) {
		if ($ && A) for (var _ in A) if (mini.isNull($[_])) $[_] = A[_];
		return $
	},
	createDelegate: function(_, $) {
		if (!_) return function() {};
		return function() {
			return _.apply($, arguments)
		}
	},
	isControl: function($) {
		return !!($ && $.isControl)
	},
	isElement: function($) {
		return $ && $.appendChild
	},
	isDate: function($) {
		return $ && $.getFullYear
	},
	isArray: function($) {
		return $ && !! $.unshift
	},
	isNull: function($) {
		return $ === null || $ === undefined
	},
	isNumber: function($) {
		return !isNaN($) && typeof $ == "number"
	},
	isEquals: function($, _) {
		if ($ !== 0 && _ !== 0) if ((mini.isNull($) || $ == "") && (mini.isNull(_) || _ == "")) return true;
		if ($ && _ && $.getFullYear && _.getFullYear) return $[o1oo0O]() === _[o1oo0O]();
		if (typeof $ == "object" && typeof _ == "object") return $ === _;
		return String($) === String(_)
	},
	forEach: function(E, D, B) {
		var _ = E.clone();
		for (var A = 0, C = _.length; A < C; A++) {
			var $ = _[A];
			if (D[o0OoO0](B, $, A, E) === false) break
		}
	},
	sort: function(A, _, $) {
		$ = $ || A;
		A[O0o1oO](_)
	},
	removeNode: function($) {
		jQuery($).remove()
	},
	elWarp: document.createElement("div")
};
if (typeof mini_debugger == "undefined") mini_debugger = true;
l1O011 = function(A, _) {
	_ = _.toLowerCase();
	if (!mini.classes[_]) {
		mini.classes[_] = A;
		A[O0lOl0].type = _
	}
	var $ = A[O0lOl0].uiCls;
	if (!mini.isNull($) && !mini.uiClasses[$]) mini.uiClasses[$] = A
};
loOo0 = function(E, A, $) {
	if (typeof A != "function") return this;
	var D = E,
		C = D.prototype,
		_ = A[O0lOl0];
	if (D[lO0010] == _) return;
	D[lO0010] = _;
	D[lO0010][llo0oo] = A;
	for (var B in _) C[B] = _[B];
	if ($) for (B in $) C[B] = $[B];
	return D
};
mini.copyTo(mini, {
	extend: loOo0,
	regClass: l1O011,
	debug: false
});
mini.namespace = function(A) {
	if (typeof A != "string") return;
	A = A.split(".");
	var D = window;
	for (var $ = 0, B = A.length; $ < B; $++) {
		var C = A[$],
			_ = D[C];
		if (!_) _ = D[C] = {};
		D = _
	}
};
o0lo = [];
OO101O = function(_, $) {
	o0lo.push([_, $]);
	if (!mini._EventTimer) mini._EventTimer = setTimeout(function() {
		Ol00()
	}, 50)
};
Ol00 = function() {
	for (var $ = 0, _ = o0lo.length; $ < _; $++) {
		var A = o0lo[$];
		A[0][o0OoO0](A[1])
	}
	o0lo = [];
	mini._EventTimer = null
};
looOo = function(C) {
	if (typeof C != "string") return null;
	var _ = C.split("."),
		D = null;
	for (var $ = 0, A = _.length; $ < A; $++) {
		var B = _[$];
		if (!D) D = window[B];
		else D = D[B];
		if (!D) break
	}
	return D
};
mini._getMap = function(name, obj) {
	if (!name) return null;
	var index = name[o0oOOo](".");
	if (index == -1 && name[o0oOOo]("[") == -1) return obj[name];
	if (index == (name.length - 1)) return obj[name];
	var s = "obj." + name;
	try {
		var v = eval(s)
	} catch (e) {
		return null
	}
	return v
};
mini._setMap = function(H, A, B) {
	if (!B) return;
	if (typeof H != "string") return;
	var E = H.split(".");

	function F(A, E, $, B) {
		var C = A[E];
		if (!C) C = A[E] = [];
		for (var _ = 0; _ <= $; _++) {
			var D = C[_];
			if (!D) if (B === null || B === undefined) D = C[_] = {};
			else D = C[_] = B
		}
		return A[E][$]
	}
	var $ = null;
	for (var _ = 0, G = E.length; _ <= G - 1; _++) {
		var H = E[_];
		if (_ == G - 1) {
			if (H[o0oOOo]("]") == -1) B[H] = A;
			else {
				var C = H.split("["),
					D = C[0],
					I = parseInt(C[1]);
				F(B, D, I, "");
				B[D][I] = A
			}
			break
		}
		if (H[o0oOOo]("]") == -1) {
			$ = B[H];
			if (_ <= G - 2 && $ == null) B[H] = $ = {};
			B = $
		} else {
			C = H.split("["), D = C[0], I = parseInt(C[1]);
			B = F(B, D, I)
		}
	}
	return A
};
mini.getAndCreate = function($) {
	if (!$) return null;
	if (typeof $ == "string") return mini.components[$];
	if (typeof $ == "object") if (mini.isControl($)) return $;
	else if (mini.isElement($)) return mini.uids[$.uid];
	else return mini.create($);
	return null
};
mini.create = function($) {
	if (!$) return null;
	if (mini.get($.id) === $) return $;
	var _ = this.getClass($.type);
	if (!_) return null;
	var A = new _();
	A[OO101l]($);
	return A
};
var ll0lO0 = "getBottomVisibleColumns",
	o10OO = "setFrozenStartColumn",
	O1O11O = "showCollapseButton",
	OO1oo1 = "showFolderCheckBox",
	lOO1ll = "setFrozenEndColumn",
	l0l0l0 = "getAncestorColumns",
	lol0o = "getFilterRowHeight",
	oolOOo = "checkSelectOnLoad",
	o00lOl = "frozenStartColumn",
	l00lO0 = "allowResizeColumn",
	OllooO = "showExpandButtons",
	loolOl = "requiredErrorText",
	oOlol1 = "getMaxColumnLevel",
	l1111O = "isAncestorColumn",
	olO110 = "allowAlternating",
	lol1oO = "getBottomColumns",
	O0O0 = "isShowRowDetail",
	o10001 = "allowCellSelect",
	OOl1oo = "showAllCheckBox",
	o0ooOO = "frozenEndColumn",
	o0ll11 = "allowMoveColumn",
	o0o11l = "allowSortColumn",
	l0O0o0 = "refreshOnExpand",
	l0l1l0 = "showCloseButton",
	O110oO = "unFrozenColumns",
	l0llll = "getParentColumn",
	o0Ol = "isVisibleColumn",
	OOolll = "getFooterHeight",
	Oo1O10 = "getHeaderHeight",
	oOlOoO = "_createColumnId",
	O1l0ol = "getRowDetailEl",
	OO1OO0 = "scrollIntoView",
	oo1ll = "setColumnWidth",
	ol0l0 = "setCurrentCell",
	lOool1 = "allowRowSelect",
	OOol1l = "showSummaryRow",
	ooOlo = "showVGridLines",
	lllll0 = "showHGridLines",
	lOO0OO = "checkRecursive",
	O1ooOO = "enableHotTrack",
	oOOlo0 = "popupMaxHeight",
	l1Oo = "popupMinHeight",
	oOOool = "refreshOnClick",
	o1olOl = "getColumnWidth",
	l0oOlo = "getEditRowData",
	lO1l00 = "getParentNode",
	OoOO1 = "removeNodeCls",
	Oll1Ol = "showRowDetail",
	ol10O = "hideRowDetail",
	oO0O1o = "commitEditRow",
	O0O1l = "beginEditCell",
	ol0ooO = "allowCellEdit",
	ooOoO1 = "decimalPlaces",
	o01oOl = "showFilterRow",
	o100oo = "dropGroupName",
	oO10o1 = "dragGroupName",
	olo1O = "showTreeLines",
	o0l1lo = "popupMaxWidth",
	l1ll1l = "popupMinWidth",
	l0lO0o = "showMinButton",
	o0O0o1 = "showMaxButton",
	Ol0Olo = "getChildNodes",
	O0Oo0O = "getCellEditor",
	olO0o0 = "cancelEditRow",
	l1oo1 = "getRowByValue",
	olO01 = "removeItemCls",
	oOlll1 = "_createCellId",
	Ollll0 = "_createItemId",
	oO01 = "setValueField",
	OOllo1 = "_createPopup",
	olO011 = "getAncestors",
	lO10o0 = "collapseNode",
	O0oOO0 = "removeRowCls",
	Ol1O10 = "getColumnBox",
	l01l0l = "showCheckBox",
	O0lool = "autoCollapse",
	ol1Ol = "showTreeIcon",
	o01ooo = "checkOnClick",
	OO0oo1 = "defaultValue",
	O01lO0 = "resultAsData",
	OO0l00 = "resultAsTree",
	o0O1l1 = "_ParseString",
	o00oll = "getItemValue",
	olO001 = "_createRowId",
	OOolol = "isAutoHeight",
	lo1O0o = "findListener",
	loo11o = "getRegionEl",
	O01o00 = "removeClass",
	lOo1OO = "isFirstNode",
	lool1o = "getSelected",
	lo10Ol = "setSelected",
	l0o000 = "multiSelect",
	oOolo0 = "tabPosition",
	llO011 = "columnWidth",
	Olo01l = "handlerSize",
	o0olO = "allowSelect",
	llOo0o = "popupHeight",
	Ol1ool = "contextMenu",
	lOo1Ol = "borderStyle",
	OllolO = "parentField",
	o0ooO1 = "closeAction",
	l1olo = "_rowIdField",
	Olo1lO = "allowResize",
	OlOloo = "showToolbar",
	lOlOOo = "deselectAll",
	llo11l = "treeToArray",
	ll0o0l = "eachColumns",
	oOlO1l = "getItemText",
	OOl110 = "isAutoWidth",
	lO01o0 = "_initEvents",
	llo0oo = "constructor",
	O1ll0o = "addNodeCls",
	l01ol1 = "expandNode",
	oO1010 = "setColumns",
	Ol1lo1 = "cancelEdit",
	o01OlO = "moveColumn",
	lllO0l = "removeNode",
	Ol0l01 = "setCurrent",
	oO1lo0 = "totalCount",
	O11l11 = "popupWidth",
	O1OOlO = "titleField",
	l0l10o = "valueField",
	lO0o = "showShadow",
	oloolo = "showFooter",
	lOO1OO = "findParent",
	oll10 = "_getColumn",
	OooO00 = "_ParseBool",
	loooOl = "clearEvent",
	o1Olll = "getCellBox",
	ll1ol0 = "selectText",
	l1Oool = "setVisible",
	Ollo1o = "isGrouping",
	Oo0O1 = "addItemCls",
	loO0ll = "isSelected",
	OlOOo1 = "isReadOnly",
	lO0010 = "superclass",
	l110l1 = "getRegion",
	oO0OO = "isEditing",
	o1olo1 = "hidePopup",
	lo1o1O = "removeRow",
	loOo00 = "addRowCls",
	lOol1o = "increment",
	loOooo = "allowDrop",
	l1OOo0 = "pageIndex",
	oo01Oo = "iconStyle",
	oO11O = "errorMode",
	O111ll = "textField",
	O0O010 = "groupName",
	loOOoO = "showEmpty",
	ooOoo1 = "emptyText",
	oo00lo = "showModal",
	lOlOo = "getColumn",
	O10O11 = "getHeight",
	O1l1O = "_ParseInt",
	Ool10o = "showPopup",
	lOl0ll = "updateRow",
	O1o00 = "deselects",
	O0110l = "isDisplay",
	lOO0O1 = "setHeight",
	o0O0ol = "removeCls",
	O0lOl0 = "prototype",
	ool0lo = "addClass",
	oo1011 = "isEquals",
	O01oo0 = "maxValue",
	olOOl = "minValue",
	olOol1 = "showBody",
	l0Ooo0 = "tabAlign",
	l1o0lo = "sizeList",
	lolo0O = "pageSize",
	O0O1ll = "urlField",
	Oll10l = "readOnly",
	o1l1oo = "getWidth",
	ol0l1o = "isFrozen",
	ooo0oO = "loadData",
	oOOO1O = "deselect",
	l1ol = "setValue",
	OO01O1 = "validate",
	lo0O00 = "getAttrs",
	o010Oo = "setWidth",
	Oool01 = "doUpdate",
	l11ol1 = "doLayout",
	Ol1O0o = "renderTo",
	O1l11 = "setText",
	l0o0oo = "idField",
	OO1110 = "getNode",
	O1ooo1 = "getItem",
	Ol1O = "repaint",
	OlO1lO = "selects",
	lO0l11 = "setData",
	ooooll = "_create",
	OlO1l1 = "jsName",
	looOl0 = "getRow",
	o00OO0 = "select",
	Olloo0 = "within",
	Ol0Ooo = "addCls",
	loOlo0 = "render",
	l01o0O = "setXY",
	o0OoO0 = "call",
	OlOoO = "onValidation",
	o000OO = "onValueChanged",
	oOO0l1 = "getErrorIconEl",
	l1Ol11 = "getRequiredErrorText",
	OO0OO0 = "setRequiredErrorText",
	Oo1001 = "getRequired",
	lOoo1O = "setRequired",
	OO1l1l = "getErrorText",
	lOOo1o = "setErrorText",
	O0o01O = "getErrorMode",
	oO0olO = "setErrorMode",
	Ol01oO = "getValidateOnLeave",
	Oo0Ol0 = "setValidateOnLeave",
	lllO00 = "getValidateOnChanged",
	O1o0l1 = "setValidateOnChanged",
	lO1o1l = "getIsValid",
	Oo11o1 = "setIsValid",
	Oloo0o = "isValid",
	o1Ol0 = "_tryValidate",
	O0l0o1 = "doQuery",
	Oo0OOO = "getSearchField",
	l1o0O1 = "setSearchField",
	l1000O = "getMinChars",
	ol1l0 = "setMinChars",
	lO111l = "setUrl",
	ol00o0 = "getRepeatDirection",
	ll10l = "setRepeatDirection",
	olloo1 = "getRepeatLayout",
	oOooo0 = "setRepeatLayout",
	o1l001 = "getRepeatItems",
	lo1000 = "setRepeatItems",
	ll0OoO = "bindForm",
	o0lol1 = "bindField",
	oo01O0 = "__OnNodeMouseDown",
	ool00 = "createNavBarTree",
	lol1l0 = "getExpandOnLoad",
	ol11o1 = "setExpandOnLoad",
	o10l0O = "_getOwnerTree",
	oooO1o = "getList",
	l00ooo = "findNodes",
	o11O0l = "expandPath",
	o1O0O1 = "selectNode",
	oO11lO = "getParentField",
	ooo00o = "setParentField",
	OOloO0 = "getIdField",
	OloooO = "setIdField",
	oOOolo = "getNodesField",
	lOoo = "setNodesField",
	OOl101 = "getResultAsTree",
	O1110l = "setResultAsTree",
	oOl001 = "getUrlField",
	O1o10O = "setUrlField",
	olOO01 = "getIconField",
	Oo1o0o = "setIconField",
	ol1ll0 = "getTextField",
	oO0o01 = "setTextField",
	O0O0O1 = "getUrl",
	llO0l0 = "getData",
	OlOl10 = "load",
	O1o11O = "loadList",
	l1101 = "_doParseFields",
	OoOO0o = "destroy",
	OO101l = "set",
	llolo0 = "createNavBarMenu",
	l01l0O = "_getOwnerMenu",
	loOoOl = "blur",
	ool00o = "focus",
	o00O10 = "__doSelectValue",
	oO10Oo = "getPopupMaxHeight",
	oO0l1o = "setPopupMaxHeight",
	ooOll1 = "getPopupMinHeight",
	l1ll10 = "setPopupMinHeight",
	o0OoOO = "getPopupHeight",
	oloOol = "setPopupHeight",
	lo00Ol = "getAllowInput",
	o1OO1o = "setAllowInput",
	ol0o10 = "getValueField",
	l0000l = "setName",
	lO11o0 = "getValue",
	lO10l0 = "getText",
	lll1O0 = "getInputText",
	ll110l = "removeItem",
	loll10 = "insertItem",
	ollO0o = "showInput",
	oo0oOl = "blurItem",
	OO0OO = "hoverItem",
	oooll = "getItemEl",
	o1OoO0 = "getTextName",
	l0lol1 = "setTextName",
	ol0Oo0 = "getFormattedValue",
	l10lOo = "getFormValue",
	O11oo0 = "getFormat",
	Oo1loo = "setFormat",
	O11oOO = "_getButtonHtml",
	o10llO = "onPreLoad",
	O1OOl0 = "onLoadError",
	OOOl0O = "onLoad",
	o1lo00 = "onBeforeLoad",
	lOo11l = "onItemMouseDown",
	OOOoOO = "onItemClick",
	o1lOl1 = "_OnItemMouseMove",
	oollo = "_OnItemMouseOut",
	Ooo11l = "_OnItemClick",
	o1lOoo = "clearSelect",
	l0Oo11 = "selectAll",
	oolO0 = "getSelecteds",
	lO01O0 = "getMultiSelect",
	Oool1o = "setMultiSelect",
	o011oO = "moveItem",
	OoolO = "removeItems",
	O11o00 = "addItem",
	OlOlo0 = "addItems",
	l0l010 = "removeAll",
	loOo01 = "findItems",
	ll0O01 = "updateItem",
	oO0l1O = "getAt",
	o0oOOo = "indexOf",
	ool10O = "getCount",
	llO11o = "getFocusedIndex",
	Ol0oO0 = "getFocusedItem",
	Oo0l1o = "getLinkString",
	looO10 = "getBaseline",
	lO0OO = "getEditData",
	OoloOo = "beginEdit",
	o0lO00 = "getEditorOwnerRow",
	OOlll = "getGanttView",
	Oo1OO1 = "getTableView",
	ooo0oo = "setGanttViewWidth",
	l1Oo1 = "setTableViewWidth",
	Ol00o1 = "setTableViewExpanded",
	l1OoOO = "setGanttViewExpanded",
	O0OOOl = "setShowTableView",
	Ol1o0O = "setShowGanttView",
	lOol01 = "setReadOnly",
	oll1oO = "setBottomTimeScale",
	lO0lOO = "setTopTimeScale",
	ll1ll1 = "zoomOut",
	OO1ool = "zoomIn",
	lOl0l0 = "toggleNode",
	OO000o = "collapse",
	o0Oll1 = "expand",
	lolooO = "collapseLevel",
	O11o0o = "expandLevel",
	l0O0l0 = "collapseAll",
	o00Olo = "expandAll",
	o0l1o1 = "setPageIndex",
	O11010 = "setPageSize",
	o1O1o1 = "setSizeList",
	lOlllO = "gotoPage",
	ol010l = "getTaskAt",
	Ololl1 = "getTask",
	ooo1l0 = "clearTasks",
	ooolll = "reload",
	o1OoOo = "setShowCriticalPath",
	OooOO = "setShowGridLines",
	o1011o = "setShowLinkLines",
	o1lOll = "setTimeLines",
	Oooolo = "showColumn",
	l10oO0 = "hideColumn",
	o0oOOl = "setTreeColumn",
	Oll01l = "getCalendar",
	Oo0o0l = "isWorking",
	o101oo = "__OnTableLoadError",
	OO0ol0 = "__OnTableLoad",
	OOOo1l = "__OnTablePreLoad",
	lol110 = "__OnTableBeforeLoad",
	ll0lll = "createDefaultCalendars",
	loO0lO = "setAllowResize",
	l11l1l = "setBaselineIndex",
	l0oloo = "setViewModel",
	ol1lO = "parseGroups",
	l1O1o0 = "expandGroup",
	O0Olo1 = "collapseGroup",
	lOo10l = "toggleGroup",
	l1110o = "hideGroup",
	Oo0Ool = "showGroup",
	lOOlO = "getActiveGroup",
	o1110 = "getActiveIndex",
	loo0O1 = "setActiveIndex",
	o0lo1l = "getAutoCollapse",
	o0OOo0 = "setAutoCollapse",
	ooO0OO = "getGroupBodyEl",
	lo0oo1 = "getGroupEl",
	lOOo11 = "getGroup",
	ooO0Oo = "moveGroup",
	lloooo = "removeGroup",
	oO0o1O = "updateGroup",
	ool0lO = "addGroup",
	O00ooo = "getGroups",
	lllOoo = "setGroups",
	O010Ol = "createGroup",
	o10O1l = "__fileError",
	oOo0O0 = "__on_upload_complete",
	loO0oo = "__on_upload_error",
	OlO10o = "__on_upload_success",
	o0o1lo = "__on_file_queued",
	O1o1O0 = "startUpload",
	OO111o = "setUploadUrl",
	ololO1 = "setFlashUrl",
	O00101 = "setQueueLimit",
	oo0l11 = "setUploadLimit",
	Ol00lO = "getButtonText",
	oO11o0 = "setButtonText",
	ol1Oo1 = "getTypesDescription",
	lol01l = "setTypesDescription",
	l0OllO = "getLimitType",
	lOol1l = "setLimitType",
	ooO01o = "getPostParam",
	O001lo = "setPostParam",
	OOl1o1 = "addPostParam",
	l0l0O0 = "setDataField",
	lO101l = "getValueFromSelect",
	o1O0l1 = "setValueFromSelect",
	llOO11 = "getAutoCheckParent",
	oOOOo0 = "setAutoCheckParent",
	lOl10l = "getShowFolderCheckBox",
	Oo1lo1 = "setShowFolderCheckBox",
	oolo1o = "getShowTreeLines",
	o0o11 = "setShowTreeLines",
	llllOO = "getShowTreeIcon",
	OloOO1 = "setShowTreeIcon",
	O1O01O = "getCheckRecursive",
	O10O0l = "setCheckRecursive",
	o1O01l = "getSelectedNodes",
	o0O1Oo = "getCheckedNodes",
	O1ol0l = "getSelectedNode",
	llOol = "getMinDate",
	ollol0 = "setMinDate",
	l01Oo0 = "getMaxDate",
	O10O0 = "setMaxDate",
	ol1011 = "getShowOkButton",
	llll01 = "setShowOkButton",
	OO1olo = "getShowClearButton",
	OoO0OO = "setShowClearButton",
	Ooo1o0 = "getShowTodayButton",
	oO1110 = "setShowTodayButton",
	o1l1lO = "getTimeFormat",
	llOOlO = "setTimeFormat",
	loo1oO = "getShowTime",
	ol1Oo = "setShowTime",
	ooO110 = "getViewDate",
	o1o0l1 = "setViewDate",
	o1loo0 = "_getCalendar",
	l00o00 = "setInputStyle",
	l1111o = "getShowClose",
	OOOlOl = "setShowClose",
	llo110 = "getSelectOnFocus",
	o00ooO = "setSelectOnFocus",
	lO10Oo = "onTextChanged",
	oOolol = "onButtonMouseDown",
	oOooOO = "onButtonClick",
	llOl10 = "__fireBlur",
	l0o01l = "__doFocusCls",
	olllO1 = "getInputAsValue",
	O0O1O0 = "setInputAsValue",
	ooO10l = "setEnabled",
	O0OlOl = "getMinLength",
	oloo1o = "setMinLength",
	Oll0oO = "getMaxLength",
	lOOllo = "setMaxLength",
	lO0loo = "getEmptyText",
	Ol1Ol0 = "setEmptyText",
	llO11l = "getTextEl",
	o00Ol1 = "_doInputLayout",
	o0lo0l = "_getButtonsHTML",
	lolO11 = "setMenu",
	l00loO = "_OnItemDragComplete",
	OO10lo = "_OnItemDragDrop",
	lo0111 = "_OnItemDragMove",
	o10O01 = "_OnItemDragStart",
	O0ll0l = "_OnItemContextMenu",
	l010o = "_OnItemDblClick",
	OOOo11 = "_OnItemMouseDown",
	l0olo1 = "_OnLinkToolTipNeeded",
	o1lll0 = "_OnItemToolTipNeeded",
	o0OOOO = "_OnDateToolTipNeeded",
	lOlOol = "_OnScrollToolTipNeeded",
	OolllO = "_OnItemDragTipNeeded",
	lO1l10 = "getZoomTimeScale",
	O0oo10 = "getLinkType",
	o0Oo10 = "getFromTo",
	O1lo0l = "getLink",
	oO1O = "getViewStartDate",
	ol00Ol = "getViewStartItem",
	OOo11l = "getItemBox",
	oO1Ol1 = "getItemHeight",
	oO0o0O = "getItemTop",
	l11loo = "getViewportBounds",
	oOOo1O = "getViewportBox",
	O1OooO = "getOffsetByDate",
	l1o00o = "getDateByOffset",
	o0lOOo = "getDateByPageX",
	o1oloo = "refresh",
	O1ooo = "getVisibleRows",
	o0Ol01 = "setDateRange",
	o0olO0 = "isMilestone",
	O0OOOO = "isCritical",
	Olo0Oo = "isSummary",
	lo011l = "setHeaderHeight",
	lOoOOo = "setScrollHeight",
	oo0l1o = "getScrollLeft",
	O1oOll = "getScrollTop",
	lOlo1l = "setScrollTop",
	lOoOlO = "setScrollLeft",
	O11OoO = "setRowHeight",
	lo0Oo0 = "setShowLabel",
	ooll0o = "getViewportWidth",
	Oll1l1 = "getViewportHeight",
	ol000O = "isTrackModel",
	OoOOoo = "_OnCellClick",
	lO0o00 = "_OnCellMouseDown",
	o01ol = "getIcon",
	O1OlOO = "isAncestor",
	l1l01O = "isExpanded",
	lo110 = "getLevel",
	loOOO0 = "isLeaf",
	oOOOlO = "_getSource",
	l1llOo = "__OnVScroll",
	lO101O = "getViewScrollWidth",
	O0OOO1 = "getColumnsWidth",
	oOlO1O = "getAllFrozenColumnWidth",
	OlolOo = "unfrozenColumn",
	o001OO = "frozenColumn",
	o0l0o1 = "getRowBox",
	Ol0OoO = "getRowHeight",
	OollO1 = "getRecord",
	l1oll1 = "getVScrollHeight",
	Oo0loo = "getHScrollWidth",
	O0l0O1 = "setShowVScroll",
	l010OO = "setShowHScroll",
	O0o11l = "getPopupMinWidth",
	oo0lO1 = "getPopupMaxWidth",
	O0OoO0 = "getPopupWidth",
	Oo10oO = "setPopupMinWidth",
	ol0ool = "setPopupMaxWidth",
	Oo0O0l = "setPopupWidth",
	ol0oOo = "isShowPopup",
	ll01lO = "_syncShowPopup",
	o11o0O = "getPopup",
	lloo01 = "setPopup",
	OoOOo1 = "getId",
	ll10ol = "setId",
	o11llo = "un",
	o1Oo11 = "on",
	lO0OoO = "fire",
	llloO0 = "getAllowResize",
	llOll = "getAllowMoveColumn",
	oool10 = "setAllowMoveColumn",
	OOlo1o = "getAllowResizeColumn",
	OOOlo0 = "setAllowResizeColumn",
	Oo111O = "getTreeColumn",
	OO11Oo = "_doLayoutTopRightCell",
	o0OOOl = "_getHeaderScrollEl",
	o0o11o = "onCellBeginEdit",
	O10l0O = "onDrawCell",
	looOOo = "onCellContextMenu",
	lOO110 = "onCellMouseDown",
	loO11 = "onCellClick",
	o0O00l = "onRowContextMenu",
	Oll00O = "onRowMouseDown",
	ll1O1l = "onRowClick",
	o0o0o1 = "onRowDblClick",
	O10oO1 = "_doShowColumnsMenu",
	OOOooO = "createColumnsMenu",
	o0Ool = "getHeaderContextMenu",
	OOoooo = "setHeaderContextMenu",
	OOO0oo = "_OnHeaderCellClick",
	Ol0lOl = "_OnRowMouseMove",
	OOll10 = "_OnRowMouseOut",
	lo1oo0 = "_OnDrawGroupSummaryCell",
	oo11oO = "_OnDrawSummaryCell",
	O0lOol = "_tryFocus",
	o10Ol = "getCurrent",
	ooO1o0 = "_getSelectAllCheckState",
	O0llO1 = "getAllowRowSelect",
	l11O11 = "setAllowRowSelect",
	O011o1 = "getAllowUnselect",
	o0Ol0O = "setAllowUnselect",
	oll11 = "_doMargeCells",
	l0l11O = "_isCellVisible",
	l1O01O = "margeCells",
	o101oO = "mergeCells",
	o1oool = "mergeColumns",
	oO0ooO = "onDrawGroupSummary",
	Ooo0lO = "onDrawGroupHeader",
	O0ol00 = "getGroupDir",
	ol101l = "getGroupField",
	ll1loo = "clearGroup",
	llo0o0 = "groupBy",
	O11O0O = "expandGroups",
	oo10ol = "collapseGroups",
	lOo010 = "getShowGroupSummary",
	ll1o10 = "setShowGroupSummary",
	Oo1Ool = "getCollapseGroupOnLoad",
	o0l01l = "setCollapseGroupOnLoad",
	oo0011 = "findRow",
	OO0101 = "findRows",
	lo1OOl = "getRowByUID",
	oolOOl = "getRowById",
	lOlO01 = "clearRows",
	ol001l = "moveDown",
	l0loO0 = "moveUp",
	O100Oo = "moveRow",
	OOl00o = "addRow",
	llO1Oo = "addRows",
	Ooo1OO = "removeSelected",
	OoOllO = "removeRows",
	l100Oo = "deleteRow",
	lO0o01 = "deleteRows",
	OoO0O1 = "_updateRowEl",
	lO11oO = "isChanged",
	olll01 = "getChanges",
	ololll = "getEditingRow",
	olOO00 = "getEditingRows",
	OllOlO = "isNewRow",
	o11000 = "isEditingRow",
	oo110l = "beginEditRow",
	Oo0olo = "_beginEditNextCell",
	O0OllO = "commitEdit",
	o0l000 = "isEditingCell",
	OOlool = "getAllowCellEdit",
	ollOll = "setAllowCellEdit",
	o0olo0 = "getAllowCellSelect",
	lll11o = "setAllowCellSelect",
	ooO1Ol = "getCurrentCell",
	OOO1lo = "_getSortFnByField",
	ll0011 = "clearSort",
	lOlOl1 = "sortBy",
	lol001 = "getResultObject",
	OolO11 = "getCheckSelectOnLoad",
	lO01lo = "setCheckSelectOnLoad",
	OOOool = "getTotalPage",
	l0lO10 = "getTotalCount",
	l0111l = "setTotalCount",
	loool0 = "getSortOrder",
	ll010o = "getSortField",
	ooolOl = "getDataField",
	l0lo0O = "getTotalField",
	OooOl0 = "setTotalField",
	l1l11O = "getSortOrderField",
	ll1Oo1 = "setSortOrderField",
	OOOO00 = "getSortFieldField",
	ollOoo = "setSortFieldField",
	lo00OO = "getPageSizeField",
	olOlol = "setPageSizeField",
	o11o00 = "getPageIndexField",
	lOlO0o = "setPageIndexField",
	ooOOOO = "getShowTotalCount",
	O1l1l0 = "setShowTotalCount",
	l11O1o = "getShowPageIndex",
	o1oOoo = "setShowPageIndex",
	o0o0O1 = "getShowPageSize",
	looll1 = "setShowPageSize",
	O0Oll0 = "getPageIndex",
	O01OoO = "getPageSize",
	lo000O = "getSizeList",
	o0ol0O = "getShowPageInfo",
	ol1O10 = "setShowPageInfo",
	o01OOl = "getShowReloadButton",
	oO111O = "setShowReloadButton",
	ll0o01 = "getRowDetailCellEl",
	oOl0ol = "toggleRowDetail",
	OO0ll1 = "hideAllRowDetail",
	OOOO1 = "showAllRowDetail",
	o0lOo1 = "getAllowCellValid",
	olo1l0 = "setAllowCellValid",
	OOo00 = "getCellEditAction",
	O0l11l = "setCellEditAction",
	oO1O01 = "getShowNewRow",
	lO0ooo = "setShowNewRow",
	o0O100 = "getShowModified",
	Oo01ol = "setShowModified",
	lOlloo = "getShowEmptyText",
	llllo0 = "setShowEmptyText",
	lOll1 = "getSelectOnLoad",
	lOlOll = "setSelectOnLoad",
	o0olOO = "getAllowSortColumn",
	lOo00O = "setAllowSortColumn",
	o1l0Oo = "getSortMode",
	oO010l = "setSortMode",
	o01loO = "setAutoHideRowDetail",
	l1l11o = "getShowFooter",
	l0OO0o = "setShowFooter",
	o00oo1 = "getShowPager",
	Olll00 = "setShowPager",
	O01l0O = "setShowHeader",
	looo1o = "getFooterCls",
	o01111 = "setFooterCls",
	l0o1ll = "getFooterStyle",
	OOOo1O = "setFooterStyle",
	lOOO0l = "getBodyCls",
	lo0l0l = "setBodyCls",
	oo10Ol = "getBodyStyle",
	oOoOO1 = "setBodyStyle",
	OO101o = "getVirtualScroll",
	olol0l = "setVirtualScroll",
	o1o01o = "getEditOnTabKey",
	olO111 = "setEditOnTabKey",
	Ol0O10 = "getEditNextOnEnterKey",
	lO111o = "setEditNextOnEnterKey",
	l1llO0 = "getShowColumnsMenu",
	O10O0o = "setShowColumnsMenu",
	l0l00o = "getAllowHeaderWrap",
	O1o1O1 = "setAllowHeaderWrap",
	O0lo0O = "getAllowCellWrap",
	o01Ooo = "setAllowCellWrap",
	O1o100 = "setShowLoading",
	l00OlO = "getEnableHotTrack",
	O10O1O = "setEnableHotTrack",
	o1l10l = "getAllowAlternating",
	l10oOo = "setAllowAlternating",
	ll1l0o = "getShowSummaryRow",
	oOo100 = "setShowSummaryRow",
	O0ol0o = "getShowFilterRow",
	lo0lO1 = "setShowFilterRow",
	o10o01 = "getShowVGridLines",
	ooolOo = "setShowVGridLines",
	Ol1111 = "getShowHGridLines",
	l1o01O = "setShowHGridLines",
	oOO11o = "_doGridLines",
	oOo1l1 = "_doScrollFrozen",
	O1Olll = "_tryUpdateScroll",
	Ool0O1 = "_canVirtualUpdate",
	ooo0O0 = "_getViewNowRegion",
	olo01l = "_markRegion",
	oolo0O = "frozenColumns",
	l01o1O = "getFrozenEndColumn",
	O111oO = "getFrozenStartColumn",
	olo0l0 = "_deferFrozen",
	llo0oO = "__doFrozen",
	o1lo1O = "getRowsBox",
	Oo11oO = "getSummaryCellEl",
	O0o1o1 = "getFilterCellEl",
	l0O1o1 = "isFitColumns",
	loOoOO = "getFitColumns",
	O0O0l1 = "setFitColumns",
	Oo1o00 = "_doInnerLayout",
	oO01OO = "isVirtualScroll",
	o1oOOO = "_doUpdateBody",
	O00OO1 = "_destroyEditors",
	o1o1oo = "_createHeaderText",
	Ool1l1 = "getSummaryRowHeight",
	O1OOo1 = "selectRange",
	lOlo11 = "getRange",
	OO0llo = "toArray",
	olll0o = "acceptRecord",
	l100l1 = "accept",
	ll0100 = "getAutoLoad",
	Oo0lol = "setAutoLoad",
	oO0l00 = "bindPager",
	lo1100 = "setPager",
	l0101O = "_doShowRows",
	l0100O = "onCheckedChanged",
	lOoO1o = "onClick",
	OOOOl = "getTopMenu",
	OO111O = "hide",
	O1Olo1 = "hideMenu",
	O1O1o1 = "showMenu",
	oolO1l = "getMenu",
	Ol11o0 = "setChildren",
	O0lOl1 = "getGroupName",
	o1loo1 = "setGroupName",
	o1l1oO = "getChecked",
	l11111 = "setChecked",
	loOO01 = "getCheckOnClick",
	OollO = "setCheckOnClick",
	O11llo = "getIconPosition",
	o0l11o = "setIconPosition",
	lOOOol = "getIconStyle",
	o00loo = "setIconStyle",
	o1ol1O = "getIconCls",
	ll0O1O = "setIconCls",
	oOOol1 = "_doUpdateIcon",
	lo0ll0 = "getHandlerSize",
	O0o000 = "setHandlerSize",
	ll11oo = "hidePane",
	l0ooOO = "showPane",
	oo1l0o = "togglePane",
	l001l1 = "collapsePane",
	o00O0l = "expandPane",
	lollol = "getVertical",
	Ol10ll = "setVertical",
	o00l0O = "getShowHandleButton",
	Oo1lOo = "setShowHandleButton",
	Oll11l = "updatePane",
	l1oOll = "getPaneEl",
	ooo0OO = "setPaneControls",
	o01o1o = "setPanes",
	Ol10l1 = "getPane",
	lool00 = "getPaneBox",
	OlO1ol = "updateMenu",
	Oo00o0 = "getColumns",
	o1OO1l = "getRows",
	o1OOo1 = "setRows",
	lo0llO = "isSelectedDate",
	o1oo0O = "getTime",
	lO0lO0 = "setTime",
	lOOO1o = "getSelectedDate",
	Ollo00 = "setSelectedDates",
	O1l100 = "setSelectedDate",
	lll0lo = "getShowYearButtons",
	l0OO0O = "setShowYearButtons",
	OO1o1o = "getShowMonthButtons",
	oOO010 = "setShowMonthButtons",
	o0oo0o = "getShowDaysHeader",
	OOoO1l = "setShowDaysHeader",
	oOO00l = "getShowWeekNumber",
	lOoOlo = "setShowWeekNumber",
	OlOol1 = "getShowHeader",
	O10llO = "getDateEl",
	O0lo0l = "getShortWeek",
	lo1ooo = "getFirstDateOfMonth",
	OO010l = "isWeekend",
	l0O0Ol = "__OnItemDrawCell",
	ooool1 = "getNullItemText",
	lo0Ool = "setNullItemText",
	l1O1l1 = "getShowNullItem",
	lool0O = "setShowNullItem",
	Ol0oO1 = "setDisplayField",
	lo0O10 = "_eval",
	o01100 = "getFalseValue",
	OOlo11 = "setFalseValue",
	O1011l = "getTrueValue",
	o0l0oo = "setTrueValue",
	o0Oloo = "updateTasks",
	oo1o10 = "updateTask",
	oO0100 = "setCalendarUID",
	OOlll0 = "setCalendars",
	OOo01O = "setStartDate",
	OoOl0l = "getResource",
	lo01ol = "getCalendars",
	o0Oo1O = "getProjectCalendar",
	o01O0l = "print",
	ooooOo = "orderProject",
	o0l1l1 = "createCriticalPath",
	Oo1olO = "clearCriticalPath",
	lO0O1l = "clearData",
	lOl1ol = "addLink",
	l10o01 = "add",
	ooOO1O = "getAllowLimitValue",
	o10O0o = "setAllowLimitValue",
	ooO0Ol = "getChangeOnMousewheel",
	o0l01o = "setChangeOnMousewheel",
	o11l01 = "getDecimalPlaces",
	l10lO0 = "setDecimalPlaces",
	oO0010 = "getIncrement",
	OoloO0 = "setIncrement",
	ooo0l1 = "getMinValue",
	O0ool0 = "setMinValue",
	l1l110 = "getMaxValue",
	o10O00 = "setMaxValue",
	lOl1lo = "getShowColumns",
	OOoOO0 = "setShowColumns",
	l1ol11 = "getShowAllCheckBox",
	lllllO = "setShowAllCheckBox",
	ollo0l = "getShowCheckBox",
	Olol10 = "setShowCheckBox",
	oOOOo1 = "getRangeErrorText",
	O11OOl = "setRangeErrorText",
	OoolOO = "getRangeCharErrorText",
	oo00Oo = "setRangeCharErrorText",
	O1oolo = "getRangeLengthErrorText",
	l11Oo = "setRangeLengthErrorText",
	oOl111 = "getMinErrorText",
	O00OO0 = "setMinErrorText",
	OoO1oo = "getMaxErrorText",
	Oo1O1o = "setMaxErrorText",
	o01Oll = "getMinLengthErrorText",
	OOOlOo = "setMinLengthErrorText",
	o00lo1 = "getMaxLengthErrorText",
	oOo0Ol = "setMaxLengthErrorText",
	OO011l = "getDateErrorText",
	O0OOol = "setDateErrorText",
	o1lO1l = "getIntErrorText",
	l1l1l0 = "setIntErrorText",
	O1O0O1 = "getFloatErrorText",
	O1O1ol = "setFloatErrorText",
	llool0 = "getUrlErrorText",
	OO001O = "setUrlErrorText",
	ll1o1O = "getEmailErrorText",
	O1Ol00 = "setEmailErrorText",
	oOOooo = "getVtype",
	O1oOlO = "setVtype",
	lO0l1o = "getDefaultValue",
	OO1OlO = "setDefaultValue",
	O0o001 = "getContextMenu",
	l1llO1 = "setContextMenu",
	O0oolo = "getLoadingMsg",
	lO011l = "setLoadingMsg",
	o0O10O = "loading",
	l0o1O0 = "unmask",
	ol1ll1 = "mask",
	ol0l11 = "getAllowAnim",
	O0O101 = "setAllowAnim",
	l0oOOo = "_destroyChildren",
	ll1l01 = "layoutChanged",
	Ool11l = "canLayout",
	lO1lO1 = "endUpdate",
	ll0lol = "beginUpdate",
	l1lool = "show",
	O001l0 = "getVisible",
	l0oll0 = "disable",
	O100oo = "enable",
	O11Oo0 = "getEnabled",
	Oo101o = "getParent",
	O110ll = "getReadOnly",
	ol1l10 = "getCls",
	l0o011 = "setCls",
	o1O0o0 = "getStyle",
	o1OO11 = "setStyle",
	oO10O0 = "getBorderStyle",
	lO01l0 = "setBorderStyle",
	lOo011 = "getBox",
	o1001o = "_sizeChaned",
	olo1ol = "getTooltip",
	oolloo = "setTooltip",
	oO0lOl = "getJsName",
	lolo10 = "setJsName",
	lo1l0O = "getEl",
	O0Ol01 = "isRender",
	olOOOO = "isFixedSize",
	loOolo = "getName",
	l0l011 = "setGanttBodyMenu",
	Ol0o1o = "setGanttHeaderMenu",
	l1ol1l = "setTableBodyMenu",
	llol01 = "setTableHeaderMenu",
	lO1O0O = "setTaskMenu",
	O1o00l = "addNodes",
	O1OO1l = "deselectTask",
	lo1llO = "selectTask",
	OoO0Ol = "deselectTasks",
	loo00l = "selectTasks",
	lll111 = "deselectAllTasks",
	oo0010 = "selectAllTasks",
	l1Oo00 = "getSelectedTask",
	Oo00O1 = "getSelectedTasks",
	OolO1o = "isSelectedTask",
	ol00l1 = "removeTasks",
	lO1O00 = "addTask",
	OOO1ll = "removeTask",
	OOO001 = "newTask",
	O1100o = "getAncestorNodes",
	loOo0o = "getAllChildNodes",
	l0OoOl = "getLastNode",
	OO0l1O = "getFirstNode",
	lo10lO = "getPrevTask",
	O11l1o = "getNextNode",
	oOolll = "toggle",
	OO1001 = "bubbleParent",
	O01O1l = "cascadeChild",
	O1Ol11 = "eachChild",
	ll1lO0 = "findTasks",
	OOO1lO = "getTasks",
	lOl1o1 = "getOwnerNode",
	OlolO = "getTaskById",
	oooO1O = "getColumnAt",
	OoO1O1 = "updateColumn",
	lool11 = "setTableWidth",
	lOO00l = "getNodeList",
	l01lOo = "getNodeTree",
	llloO1 = "_syncRowHeights",
	lO00O1 = "syncTasks",
	loo0oO = "__OnGanttViewItemDragDrop",
	oOll0o = "isVisibleRegion",
	Ol1OO0 = "isExpandRegion",
	o1o1l0 = "hideRegion",
	l1oOoo = "showRegion",
	O1O0Ol = "toggleRegion",
	o0O0l0 = "collapseRegion",
	o10oO0 = "expandRegion",
	o0Ooo0 = "updateRegion",
	o0lOOO = "moveRegion",
	lOl1oo = "removeRegion",
	l10o0o = "addRegion",
	O00l1l = "setRegions",
	o0o1lO = "setRegionControls",
	o10oO1 = "getRegionBox",
	olOoo1 = "getRegionProxyEl",
	o1O0oO = "getRegionSplitEl",
	O1lOlo = "getRegionBodyEl",
	OOlo01 = "getRegionHeaderEl",
	O01O1o = "showAtEl",
	l011lO = "getShowInBody",
	ol110l = "setShowInBody",
	ooll0l = "showAtPos",
	Oo0oOl = "restore",
	oolOo0 = "max",
	OOOo00 = "getShowMinButton",
	Oolo1l = "setShowMinButton",
	OOo1l1 = "getShowMaxButton",
	o0olOo = "setShowMaxButton",
	ll0ooo = "getAllowDrag",
	Oo0Ol1 = "setAllowDrag",
	OoO11O = "getMaxHeight",
	lOOoOl = "setMaxHeight",
	OlO1l0 = "getMaxWidth",
	o11o1l = "setMaxWidth",
	ol01lo = "getMinHeight",
	l11llO = "setMinHeight",
	l0OO11 = "getMinWidth",
	OlolOO = "setMinWidth",
	oOooO0 = "getShowModal",
	O100oO = "setShowModal",
	oOO0OO = "getParentBox",
	OllOol = "__OnShowPopup",
	O00l1O = "__OnGridRowClickChanged",
	OO1O0o = "getGrid",
	ll10l1 = "setGrid",
	lOO11o = "doClick",
	o0o00O = "getPlain",
	oOOO11 = "setPlain",
	ol1O1O = "getTarget",
	ooool0 = "setTarget",
	l1O1Ol = "getHref",
	oO0l01 = "setHref",
	oo11l0 = "removeTaskCls",
	o0lO1 = "addTaskCls",
	O0o1oO = "sort",
	l1OOOO = "clearFilter",
	O00l1o = "filter",
	O101lo = "getDurationByCalendar",
	o1110O = "getFinishByCalendar",
	o001Oo = "getStartByCalendar",
	oloO01 = "setTaskModified",
	l00l10 = "endOrder",
	oOllol = "beginOrder",
	llllO1 = "setAssignments",
	o1Ol0O = "setLinks",
	l01ool = "removeLink",
	llo1ol = "getLinksByString",
	O01olo = "getPredecessorLink",
	lolO0o = "moveDownTask",
	l0o0lO = "moveUpTask",
	OOo1oo = "downgradeTask",
	ooO1oO = "upgradeTask",
	l10101 = "moveTasks",
	lo1OOO = "moveTask",
	o1lol1 = "addTasks",
	OOO0l1 = "acceptTask",
	olO0lo = "getFinishDate",
	lOoO0O = "getStartDate",
	lOO100 = "getViewFinishDate",
	Ol0101 = "getAncestorTasks",
	oo0OOo = "getAllChildTasks",
	Ol1ooo = "getRoot",
	Ooll1O = "getChildTasks",
	l00O1O = "getParentTask",
	OOOl00 = "getLastTask",
	Oo011o = "getFirstTask",
	OoOl00 = "getNextTask",
	l0OOOo = "_syncTasks2",
	O111O0 = "loadTasks",
	l0l0lo = "acceptChanges",
	o0O00O = "getChangedTasks",
	l1lOol = "getTaskList",
	ooO010 = "getTaskTree",
	OOolOO = "getRemovedTasks",
	loOo11 = "newProject",
	l0OOO0 = "getTaskByID",
	oO1O0O = "indexOfColumn",
	ooO0lO = "getSelectedColumn",
	l0ll01 = "getViewEndColumn",
	O01OlO = "getViewStartColumn",
	O0Ol1O = "setAllowDragDrop",
	olOlOo = "setShowDirty",
	llO1oO = "onPageChanged",
	Ol0lOO = "update",
	o0oOlo = "setExpanded",
	ol0l00 = "getMaskOnLoad",
	lol1Ol = "setMaskOnLoad",
	l0ol1l = "getRefreshOnExpand",
	OO1lol = "setRefreshOnExpand",
	o000ll = "getIFrameEl",
	o1O00l = "getFooterEl",
	ooloOl = "getBodyEl",
	l1l100 = "getToolbarEl",
	ollo01 = "getHeaderEl",
	llo0Ol = "setFooter",
	o11Ol1 = "setToolbar",
	l01Oll = "set_bodyParent",
	OoO1o0 = "setBody",
	OOo0ol = "getButton",
	OO11o1 = "removeButton",
	l0l0oo = "updateButton",
	o1Olol = "addButton",
	o0O0ll = "createButton",
	o00l11 = "getShowToolbar",
	l01O1O = "setShowToolbar",
	O0o11o = "getShowCollapseButton",
	o00011 = "setShowCollapseButton",
	oo0loo = "getCloseAction",
	o0lo11 = "setCloseAction",
	Ol1o01 = "getShowCloseButton",
	oo11Ol = "setShowCloseButton",
	oo1Oo1 = "_doTools",
	OOOl10 = "getTitle",
	OOllO1 = "setTitle",
	o01l1o = "_doTitle",
	lol0Ol = "getToolbarCls",
	l0O11l = "setToolbarCls",
	oo0lol = "getHeaderCls",
	oloo10 = "setHeaderCls",
	o0lOl1 = "getToolbarStyle",
	lO0oOl = "setToolbarStyle",
	ll101O = "getHeaderStyle",
	olo0OO = "setHeaderStyle",
	lo1oo1 = "getToolbarHeight",
	oOOOO0 = "getBodyHeight",
	oo0Ol1 = "_stopLayout",
	OOO0O0 = "deferLayout",
	lOOOOO = "_doVisibleEls",
	oO1OOl = "isAllowDrag",
	oll0lO = "getDropGroupName",
	o1O001 = "setDropGroupName",
	o0ol1O = "getDragGroupName",
	l0oOoO = "setDragGroupName",
	Ollo0l = "getAllowDrop",
	l0oolO = "setAllowDrop",
	Oo1oo0 = "getAllowLeafDropIn",
	O1110o = "setAllowLeafDropIn",
	ll11o0 = "_getDragText",
	lO0O00 = "_getDragData",
	loO0Ol = "onDataLoad",
	O1O10O = "onCollapse",
	oO11OO = "onBeforeCollapse",
	o0Olo1 = "onExpand",
	l0Oo1O = "onBeforeExpand",
	lO1Ol1 = "onNodeMouseDown",
	O000Ol = "onCheckNode",
	Oo0o10 = "onBeforeNodeCheck",
	OOlOoO = "onNodeSelect",
	o00ool = "onBeforeNodeSelect",
	ooO1o1 = "onNodeClick",
	llol1o = "blurNode",
	l110oo = "focusNode",
	O1l0OO = "_OnNodeMouseMove",
	OlloO1 = "_OnNodeMouseOut",
	O0OOl0 = "_OnNodeClick",
	llo00o = "_OnNodeMouseDown",
	o010oo = "getAutoEscape",
	oO1o0l = "setAutoEscape",
	Ooolol = "getLoadOnExpand",
	o01o10 = "setLoadOnExpand",
	OOo01l = "getRemoveOnCollapse",
	lO1ll0 = "setRemoveOnCollapse",
	l00111 = "getExpandOnNodeClick",
	llOOOO = "setExpandOnNodeClick",
	lOoo0l = "getExpandOnDblClick",
	lOoOoO = "setExpandOnDblClick",
	lOOOl1 = "getFolderIcon",
	oolll1 = "setFolderIcon",
	OOo1oO = "getLeafIcon",
	O1olOl = "setLeafIcon",
	OO1O0O = "getCheckedField",
	oOl0O1 = "setCheckedField",
	oO11O0 = "getShowArrow",
	O1ol1l = "setShowArrow",
	o1Olo1 = "getNodesByValue",
	O01110 = "uncheckAllNodes",
	Ol0Ool = "checkAllNodes",
	lol11l = "uncheckNodes",
	lllo01 = "checkNodes",
	ll0O11 = "uncheckNode",
	l0Oo0O = "checkNode",
	oO1100 = "_doCheckNode",
	loOOlO = "_doCheckLoadNodes",
	l1olol = "hasCheckedChildNode",
	lOOol1 = "doUpdateCheckedState",
	O1lO1o = "collapsePath",
	Ooo00O = "disableNode",
	o0oO11 = "enableNode",
	OO0011 = "showNode",
	Ol000l = "hideNode",
	llo1lO = "_getNodeEl",
	O0lOoo = "getNodeBox",
	o0O110 = "_getNodeByEvent",
	OO10lO = "isEditingNode",
	o1lO11 = "moveNode",
	llll00 = "moveNodes",
	O11O0o = "addNode",
	lo1O1l = "updateNode",
	OOl0lo = "setNodeIconCls",
	lOolO1 = "setNodeText",
	OO1O1l = "removeNodes",
	OlOoOo = "isInLastNode",
	ol10o1 = "isLastNode",
	l0oOol = "isEnabledNode",
	ll0Ol0 = "isVisibleNode",
	OO0000 = "isCheckedNode",
	l0oOl0 = "isExpandedNode",
	lOo1O0 = "hasChildren",
	l0o01o = "indexOfChildren",
	oooO0l = "_getViewChildNodes",
	oOlOO0 = "_isInViewLastNode",
	lo1110 = "_isViewLastNode",
	lOllO1 = "_isViewFirstNode",
	Ooolo0 = "getRootNode",
	o1O1OO = "getNodeIcon",
	oo1010 = "getShowExpandButtons",
	o01oo = "setShowExpandButtons",
	Ool01o = "getAllowSelect",
	l0O0lo = "setAllowSelect",
	Ol011o = "getAjaxOption",
	ol10oO = "setAjaxOption",
	l11loO = "loadNode",
	Ool001 = "_clearTree",
	oll00o = "parseItems",
	Oll0o1 = "_startScrollMove",
	oO000o = "__OnBottomMouseDown",
	ool1O0 = "__OnTopMouseDown",
	l01Ol0 = "onItemSelect",
	O01l11 = "_OnItemSelect",
	l11l0o = "getHideOnClick",
	Oo01O1 = "setHideOnClick",
	oo0OO1 = "getShowNavArrow",
	oOO1Oo = "setShowNavArrow",
	l00Olo = "getSelectedItem",
	O0llo0 = "setSelectedItem",
	lllO11 = "getAllowSelectItem",
	ll1oO0 = "setAllowSelectItem",
	O0Ollo = "getGroupItems",
	lo11Oo = "removeItemAt",
	ll101o = "getItems",
	Oo1Ooo = "setItems",
	O0l110 = "hasShowItemMenu",
	l1OO01 = "showItemMenu",
	olo1lO = "hideItems",
	o1lo1l = "isVertical",
	OloO00 = "getbyName",
	o0looO = "onActiveChanged",
	l0l01o = "onCloseClick",
	ll0o1O = "onBeforeCloseClick",
	o00ol1 = "getTabByEvent",
	o1Ooo1 = "getShowBody",
	o1OOOl = "setShowBody",
	O11l10 = "getActiveTab",
	lo000o = "activeTab",
	O0llo1 = "getTabIFrameEl",
	o0oO1o = "getTabBodyEl",
	O0Oll = "getTabEl",
	lO01o1 = "getTab",
	l1ooo1 = "setTabPosition",
	Ool111 = "setTabAlign",
	OoOloO = "_handleIFrameOverflow",
	o000ol = "getTabRows",
	ll11l0 = "reloadTab",
	lolllo = "loadTab",
	loloOl = "_cancelLoadTabs",
	o10110 = "updateTab",
	oloool = "moveTab",
	ol01Oo = "removeTab",
	oO01O0 = "addTab",
	oo00ol = "getTabs",
	lOl001 = "setTabs",
	O1lOoO = "setTabControls",
	OO0o0O = "getTitleField",
	OlO110 = "setTitleField",
	lOOloO = "getNameField",
	ll101l = "setNameField",
	OlOO10 = "createTab";
l1l11l = function() {
	this.oolo0 = {};
	this.uid = mini.newId(this.OOo0lO);
	this._id = this.uid;
	if (!this.id) this.id = this.uid;
	mini.reg(this)
};
l1l11l[O0lOl0] = {
	isControl: true,
	id: null,
	OOo0lO: "mini-",
	ll110o: false,
	ll0lO1: true
};
o0ol1 = l1l11l[O0lOl0];
o0ol1[OoOO0o] = O1l10;
o0ol1[OoOOo1] = ollll;
o0ol1[ll10ol] = ol100;
o0ol1[lo1O0o] = lO0lO;
o0ol1[o11llo] = o0o1O;
o0ol1[o1Oo11] = O1o11;
o0ol1[lO0OoO] = lOO0l;
o0ol1[OO101l] = oo10l;
l1lloO = function() {
	l1lloO[lO0010][llo0oo][o0OoO0](this);
	this[ooooll]();
	this.el.uid = this.uid;
	this[lO01o0]();
	if (this._clearBorder) {
		this.el.style.borderWidth = "0";
		this.el.style.padding = "0px"
	}
	this[Ol0Ooo](this.uiCls);
	this[o010Oo](this.width);
	this[lOO0O1](this.height);
	this.el.style.display = this.visible ? this.ol101 : "none"
};
loOo0(l1lloO, l1l11l, {
	jsName: null,
	width: "",
	height: "",
	visible: true,
	readOnly: false,
	enabled: true,
	tooltip: "",
	lOO0: "mini-readonly",
	looO: "mini-disabled",
	name: "",
	_clearBorder: true,
	ol101: "",
	ll1lOO: true,
	allowAnim: true,
	l0ll0O: "mini-mask-loading",
	loadingMsg: "Loading...",
	contextMenu: null,
	dataField: ""
});
llO11 = l1lloO[O0lOl0];
llO11[lo0O00] = oOOl1;
llO11[ooolOl] = l01OO;
llO11[l0l0O0] = o1l1O;
llO11.llOOl0 = lOo0;
llO11[lO11o0] = lloo1;
llO11[l1ol] = l100;
llO11[lO0l1o] = Oo111;
llO11[OO1OlO] = lo1Ol0;
llO11[O0o001] = Olll;
llO11[l1llO1] = l000o;
llO11.lOO1o = O01oO;
llO11.Ol0O = OOO01O;
llO11[O0oolo] = Oo00O;
llO11[lO011l] = lO0o1;
llO11[o0O10O] = O1o110;
llO11[l0o1O0] = lOooo0;
llO11[ol1ll1] = ol1oO;
llO11.OolO1l = O0110;
llO11[ol0l11] = O01o1;
llO11[O0O101] = oO0o;
llO11[loOoOl] = l010O;
llO11[ool00o] = O1001;
llO11[OoOO0o] = oo01l;
llO11[l0oOOo] = O0l1O;
llO11[ll1l01] = O0l1;
llO11[l11ol1] = O0lo;
llO11[Ool11l] = o011l;
llO11[Oool01] = o1OOl1;
llO11[lO1lO1] = Oo0l1;
llO11[ll0lol] = Ol11;
llO11[O0110l] = OOllO;
llO11[OO111O] = lO1olo;
llO11[l1lool] = o101o;
llO11[O001l0] = lol0l1;
llO11[l1Oool] = olO11;
llO11[l0oll0] = l011O;
llO11[O100oo] = oO1Ol;
llO11[O11Oo0] = lO1o;
llO11[ooO10l] = o00o;
llO11[OlOOo1] = lo01l;
llO11[Oo101o] = l01l01;
llO11[O110ll] = O1Oo0;
llO11[lOol01] = oooOO;
llO11.olOOoO = l10lO;
llO11[o0O0ol] = lo1lO;
llO11[Ol0Ooo] = Oo0lo;
llO11[ol1l10] = oOOo0;
llO11[l0o011] = o0o1;
llO11[o1O0o0] = o00O;
llO11[o1OO11] = OlOo;
llO11[oO10O0] = Oo1o1o;
llO11[lO01l0] = O01ll;
llO11[lOo011] = Oolo0;
llO11[O10O11] = ol0oOO;
llO11[lOO0O1] = ol0o1;
llO11[o1l1oo] = o1l10;
llO11[o010Oo] = l0o0;
llO11[o1001o] = olll1;
llO11[olo1ol] = lOO1;
llO11[oolloo] = l0l1lO;
llO11[oO0lOl] = lolll;
llO11[lolo10] = olloO;
llO11[lo1l0O] = oo11o;
llO11[loOlo0] = oOlll;
llO11[O0Ol01] = Olo0;
llO11[olOOOO] = lo111;
llO11[OOl110] = lll1oO;
llO11[OOolol] = o011O;
llO11[loOolo] = oO1o1;
llO11[l0000l] = oOOO;
llO11[Olloo0] = Ol1l0;
llO11[lO01o0] = looOlo;
llO11[ooooll] = lO1l0O;
mini._attrs = null;
mini.regHtmlAttr = function(_, $) {
	if (!_) return;
	if (!$) $ = "string";
	if (!mini._attrs) mini._attrs = [];
	mini._attrs.push([_, $])
};
__mini_setControls = function($, B, C) {
	B = B || this.O10l00;
	C = C || this;
	if (!$) $ = [];
	if (!mini.isArray($)) $ = [$];
	for (var _ = 0, D = $.length; _ < D; _++) {
		var A = $[_];
		if (typeof A == "string") {
			if (A[o0oOOo]("#") == 0) A = O10l01(A)
		} else if (mini.isElement(A));
		else {
			A = mini.getAndCreate(A);
			A = A.el
		}
		if (!A) continue;
		mini.append(B, A)
	}
	mini.parse(B);
	C[l11ol1]();
	return C
};
mini.Container = function() {
	mini.Container[lO0010][llo0oo][o0OoO0](this);
	this.O10l00 = this.el
};
loOo0(mini.Container, l1lloO, {
	setControls: __mini_setControls,
	getContentEl: function() {
		return this.O10l00
	},
	getBodyEl: function() {
		return this.O10l00
	}
});
looool = function() {
	looool[lO0010][llo0oo][o0OoO0](this)
};
loOo0(looool, l1lloO, {
	required: false,
	requiredErrorText: "This field is required.",
	O11olo: "mini-required",
	errorText: "",
	o0100O: "mini-error",
	OOOl0: "mini-invalid",
	errorMode: "icon",
	validateOnChanged: true,
	validateOnLeave: true,
	oOlO: true,
	errorIconEl: null
});
O10oo = looool[O0lOl0];
O10oo[lo0O00] = olOll;
O10oo[OlOoO] = oo1oO;
O10oo[o000OO] = lo01o;
O10oo.O01lo = Oo1lO;
O10oo.lOO1l = l0lOO;
O10oo.oll0Ol = l001l;
O10oo.l10OOO = o1OlO;
O10oo[oOO0l1] = OlO0l;
O10oo[l1Ol11] = oOl01;
O10oo[OO0OO0] = o10O1;
O10oo[Oo1001] = ooO00;
O10oo[lOoo1O] = lo00o;
O10oo[OO1l1l] = l0ol1;
O10oo[lOOo1o] = o010o;
O10oo[O0o01O] = o0O1o;
O10oo[oO0olO] = O00OO;
O10oo[Ol01oO] = o11oo;
O10oo[Oo0Ol0] = ll11o;
O10oo[lllO00] = l00OO;
O10oo[O1o0l1] = Ooo1O;
O10oo[lO1o1l] = lO1Oo;
O10oo[Oo11o1] = Olloo;
O10oo[Oloo0o] = O10O1;
O10oo[OO01O1] = lo100;
O10oo[o1Ol0] = o00Oo;
lo0OO0 = function() {
	this.data = [];
	this.lo1O0l = [];
	lo0OO0[lO0010][llo0oo][o0OoO0](this);
	this[Oool01]()
};
loOo0(lo0OO0, looool, {
	defaultValue: "",
	value: "",
	valueField: "id",
	textField: "text",
	delimiter: ",",
	data: null,
	url: "",
	O0O0lo: "mini-list-item",
	l0oOOO: "mini-list-item-hover",
	_l1000: "mini-list-item-selected",
	uiCls: "mini-list",
	name: "",
	OO1l0O: null,
	Oo1lOl: null,
	lo1O0l: [],
	multiSelect: false,
	O010ll: true
});
ooO0l = lo0OO0[O0lOl0];
ooO0l[lo0O00] = o01l0;
ooO0l[o10llO] = l01011;
ooO0l[O1OOl0] = loOl0;
ooO0l[OOOl0O] = ooo00;
ooO0l[o1lo00] = O0ooO;
ooO0l[lOo11l] = llOoo;
ooO0l[OOOoOO] = o01o1;
ooO0l[o1lOl1] = ooOlO;
ooO0l[oollo] = oOlo1;
ooO0l[Ooo11l] = o10l1;
ooO0l.ooo1l1 = loOo1;
ooO0l.ll1l10 = ooOl1;
ooO0l.Ooll11 = O0O0l;
ooO0l.OOo0O0 = lOOol;
ooO0l.oO1o0O = OOO00;
ooO0l.oO11O1 = ll1l1;
ooO0l.oOoO1l = O0o0l;
ooO0l.o01l01 = O1O10;
ooO0l.lo1Oll = l10l;
ooO0l.llOloo = o0OoOl;
ooO0l.l01O10 = ooOoO;
ooO0l.lloll1 = oOOO0;
ooO0l.l00Ooo = ool1O;
ooO0l.oo1l = OoO0O;
ooO0l.l10ll = olloo;
ooO0l[O1o00] = l0l0O;
ooO0l[OlO1lO] = OOlol;
ooO0l[o1lOoo] = O11ll;
ooO0l[lOlOOo] = O101O;
ooO0l[l0Oo11] = l0O01;
ooO0l[oOOO1O] = OOOllO;
ooO0l[o00OO0] = OO0O0;
ooO0l[lool1o] = ll01O;
ooO0l[lo10Ol] = oOo0l;
ooO0l[oolO0] = ll01Os;
ooO0l[loO0ll] = O11O1;
ooO0l[lO01O0] = lOol1;
ooO0l[Oool1o] = Oo00l;
ooO0l.oolloO = lo0ol;
ooO0l[o011oO] = l0oOO;
ooO0l[ll110l] = lo0Oo;
ooO0l[OoolO] = lo0Oos;
ooO0l[O11o00] = l0O1;
ooO0l[OlOlo0] = l0O1s;
ooO0l[l0l010] = lol00;
ooO0l[loOo01] = Oolo1;
ooO0l.Ol1o1O = o0lo0;
ooO0l[oOlO1l] = OOoOo;
ooO0l[o00oll] = o0001;
ooO0l[ol1ll0] = oO010;
ooO0l[oO0o01] = O1111;
ooO0l[ol0o10] = o0O1O;
ooO0l[oO01] = lOo01;
ooO0l[l10lOo] = l0l00;
ooO0l[lO11o0] = lOo0o;
ooO0l[l1ol] = oo0ll;
ooO0l.l10oOl = Ol1l11;
ooO0l[O0O0O1] = llloo;
ooO0l[lO111l] = OlOO1;
ooO0l[llO0l0] = o1Ool;
ooO0l[lO0l11] = O1lOl;
ooO0l[ooo0oO] = ol1o;
ooO0l[OlOl10] = O11O;
ooO0l[ll0O01] = lO1lo;
ooO0l[oO0l1O] = oOlol;
ooO0l[o0oOOo] = loOl;
ooO0l[ool10O] = l0OOo;
ooO0l[O1ooo1] = o10oO;
ooO0l[OO1OO0] = O11O0;
ooO0l[llO11o] = ll00o;
ooO0l[Ol0oO0] = OoOlo;
ooO0l.l0olOo = Ol110;
ooO0l.lO1011 = OOoO1;
ooO0l[oooll] = o10oOEl;
ooO0l[olO01] = lo0OoCls;
ooO0l[Oo0O1] = l0O1Cls;
ooO0l.oooOo = o10oOByEvent;
ooO0l[l0000l] = o0Ooo;
ooO0l[OoOO0o] = l0Olo;
ooO0l[lO01o0] = OOOo1;
ooO0l[ooooll] = o1000;
ooO0l[OO101l] = Oo0Oo;
mini._Layouts = {};
mini.layout = function($, _) {
	if (!document.body) return;

	function A(C) {
		if (!C) return;
		var D = mini.get(C);
		if (D) {
			if (D[l11ol1]) if (!mini._Layouts[D.uid]) {
				mini._Layouts[D.uid] = D;
				if (_ !== false || D[olOOOO]() == false) D[l11ol1](false);
				delete mini._Layouts[D.uid]
			}
		} else {
			var E = C.childNodes;
			if (E) for (var $ = 0, F = E.length; $ < F; $++) {
				var B = E[$];
				A(B)
			}
		}
	}
	if (!$) $ = document.body;
	A($);
	if ($ == document.body) mini.layoutIFrames()
};
mini.applyTo = function(_) {
	_ = O10l01(_);
	if (!_) return this;
	if (mini.get(_)) throw new Error("not applyTo a mini control");
	var $ = this[lo0O00](_);
	delete $._applyTo;
	if (mini.isNull($[OO0oo1]) && !mini.isNull($.value)) $[OO0oo1] = $.value;
	var A = _.parentNode;
	if (A && this.el != _) A.replaceChild(this.el, _);
	this[OO101l]($);
	this.llOOl0(_);
	return this
};
mini.l0oO1l = function(G) {
	var F = G.nodeName.toLowerCase();
	if (!F) return;
	var B = G.className;
	if (B && B.split) {
		var $ = mini.get(G);
		if (!$) {
			var H = B.split(" ");
			for (var E = 0, C = H.length; E < C; E++) {
				var A = H[E],
					I = mini.getClassByUICls(A);
				if (I) {
					OloO(G, A);
					var D = new I();
					mini.applyTo[o0OoO0](D, G);
					G = D.el;
					break
				}
			}
		}
	}
	if (F == "select" || lOll0o(G, "mini-menu") || lOll0o(G, "mini-datagrid") || lOll0o(G, "mini-treegrid") || lOll0o(G, "mini-tree") || lOll0o(G, "mini-button") || lOll0o(G, "mini-textbox") || lOll0o(G, "mini-buttonedit")) return;
	var J = mini[Ol0Olo](G, true);
	for (E = 0, C = J.length; E < C; E++) {
		var _ = J[E];
		if (_.nodeType == 1) if (_.parentNode == G) mini.l0oO1l(_)
	}
};
mini._Removes = [];
mini.parse = function($) {
	if (typeof $ == "string") {
		var A = $;
		$ = O10l01(A);
		if (!$) $ = document.body
	}
	if ($ && !mini.isElement($)) $ = $.el;
	if (!$) $ = document.body;
	var _ = o101;
	if (isIE) o101 = false;
	mini.l0oO1l($);
	o101 = _;
	mini.layout($)
};
mini[o0O1l1] = function(B, A, E) {
	for (var $ = 0, D = E.length; $ < D; $++) {
		var C = E[$],
			_ = mini.getAttr(B, C);
		if (_) A[C] = _
	}
};
mini[OooO00] = function(B, A, E) {
	for (var $ = 0, D = E.length; $ < D; $++) {
		var C = E[$],
			_ = mini.getAttr(B, C);
		if (_) A[C] = _ == "true" ? true : false
	}
};
mini[O1l1O] = function(B, A, E) {
	for (var $ = 0, D = E.length; $ < D; $++) {
		var C = E[$],
			_ = parseInt(mini.getAttr(B, C));
		if (!isNaN(_)) A[C] = _
	}
};
mini.oo101l = function(el) {
	var columns = [],
		cs = mini[Ol0Olo](el);
	for (var i = 0, l = cs.length; i < l; i++) {
		var node = cs[i],
			jq = jQuery(node),
			column = {},
			editor = null,
			filter = null,
			subCs = mini[Ol0Olo](node);
		if (subCs) for (var ii = 0, li = subCs.length; ii < li; ii++) {
			var subNode = subCs[ii],
				property = jQuery(subNode).attr("property");
			if (!property) continue;
			property = property.toLowerCase();
			if (property == "columns") {
				column.columns = mini.oo101l(subNode);
				jQuery(subNode).remove()
			}
			if (property == "editor" || property == "filter") {
				var className = subNode.className,
					classes = className.split(" ");
				for (var i3 = 0, l3 = classes.length; i3 < l3; i3++) {
					var cls = classes[i3],
						clazz = mini.getClassByUICls(cls);
					if (clazz) {
						var ui = new clazz();
						if (property == "filter") {
							filter = ui[lo0O00](subNode);
							filter.type = ui.type
						} else {
							editor = ui[lo0O00](subNode);
							editor.type = ui.type
						}
						break
					}
				}
				jQuery(subNode).remove()
			}
		}
		column.header = node.innerHTML;
		mini[o0O1l1](node, column, ["name", "header", "field", "editor", "filter", "renderer", "width", "type", "renderer", "headerAlign", "align", "headerCls", "cellCls", "headerStyle", "cellStyle", "displayField", "dateFormat", "listFormat", "mapFormat", "trueValue", "falseValue", "dataType", "vtype", "currencyUnit", "summaryType", "summaryRenderer", "groupSummaryType", "groupSummaryRenderer", "defaultValue", "defaultText", "decimalPlaces", "data-options"]);
		mini[OooO00](node, column, ["visible", "readOnly", "allowSort", "allowResize", "allowMove", "allowDrag", "autoShowPopup", "unique", "autoEscape"]);
		if (editor) column.editor = editor;
		if (filter) column[O00l1o] = filter;
		if (column.dataType) column.dataType = column.dataType.toLowerCase();
		if (column[OO0oo1] === "true") column[OO0oo1] = true;
		if (column[OO0oo1] === "false") column[OO0oo1] = false;
		columns.push(column);
		var options = column["data-options"];
		if (options) {
			options = eval("(" + options + ")");
			if (options) mini.copyTo(column, options)
		}
	}
	return columns
};
mini.lo1O01 = {};
mini[oll10] = function($) {
	var _ = mini.lo1O01[$.toLowerCase()];
	if (!_) return {};
	return _()
};
mini.IndexColumn = function($) {
	return mini.copyTo({
		width: 30,
		cellCls: "",
		align: "center",
		draggable: false,
		allowDrag: true,
		init: function($) {
			$[o1Oo11]("addrow", this.__OnIndexChanged, this);
			$[o1Oo11]("removerow", this.__OnIndexChanged, this);
			$[o1Oo11]("moverow", this.__OnIndexChanged, this);
			if ($.isTree) {
				$[o1Oo11]("loadnode", this.__OnIndexChanged, this);
				this._gridUID = $.uid;
				this[l1olo] = "_id"
			}
		},
		getNumberId: function($) {
			return this._gridUID + "$number$" + $[this._rowIdField]
		},
		createNumber: function($, _) {
			if (mini.isNull($[l1OOo0])) return _ + 1;
			else return ($[l1OOo0] * $[lolo0O]) + _ + 1
		},
		renderer: function(A) {
			var $ = A.sender;
			if (this.draggable) {
				if (!A.cellStyle) A.cellStyle = "";
				A.cellStyle += ";cursor:move;"
			}
			var _ = "<div id=\"" + this.getNumberId(A.record) + "\">";
			if (mini.isNull($[l1OOo0])) _ += A.rowIndex + 1;
			else _ += ($[l1OOo0] * $[lolo0O]) + A.rowIndex + 1;
			_ += "</div>";
			return _
		},
		__OnIndexChanged: function(F) {
			var $ = F.sender,
				C = $[OO0llo]();
			for (var A = 0, D = C.length; A < D; A++) {
				var _ = C[A],
					E = this.getNumberId(_),
					B = document.getElementById(E);
				if (B) B.innerHTML = this.createNumber($, A)
			}
		}
	}, $)
};
mini.lo1O01["indexcolumn"] = mini.IndexColumn;
mini.CheckColumn = function($) {
	return mini.copyTo({
		width: 30,
		cellCls: "mini-checkcolumn",
		headerCls: "mini-checkcolumn",
		_multiRowSelect: true,
		header: function($) {
			var A = this.uid + "checkall",
				_ = "<input type=\"checkbox\" id=\"" + A + "\" />";
			if (this[l0o000] == false) _ = "";
			return _
		},
		getCheckId: function($) {
			return this._gridUID + "$checkcolumn$" + $[this._rowIdField]
		},
		init: function($) {
			$[o1Oo11]("selectionchanged", this.ol1Ol1, this);
			$[o1Oo11]("HeaderCellClick", this.Ol1oOO, this)
		},
		renderer: function(C) {
			var B = this.getCheckId(C.record),
				_ = C.sender[loO0ll] ? C.sender[loO0ll](C.record) : false,
				A = "checkbox",
				$ = C.sender;
			if ($[l0o000] == false) A = "radio";
			return "<input type=\"" + A + "\" id=\"" + B + "\" " + (_ ? "checked" : "") + " hidefocus style=\"outline:none;\" onclick=\"return false\"/>"
		},
		Ol1oOO: function(B) {
			var $ = B.sender;
			if (B.column != this) return;
			var A = $.uid + "checkall",
				_ = document.getElementById(A);
			if (_) {
				if ($[lO01O0]()) {
					if (_.checked) $[l0Oo11]();
					else $[lOlOOo]()
				} else {
					$[lOlOOo]();
					if (_.checked) $[o00OO0](0)
				}
				$[lO0OoO]("checkall")
			}
		},
		ol1Ol1: function(H) {
			var $ = H.sender,
				C = $[OO0llo]();
			for (var A = 0, E = C.length; A < E; A++) {
				var _ = C[A],
					G = $[loO0ll](_),
					F = $.uid + "$checkcolumn$" + _[$._rowIdField],
					B = document.getElementById(F);
				if (B) B.checked = G
			}
			var D = this;
			if (!this._timer) this._timer = setTimeout(function() {
				D._doCheckState($);
				D._timer = null
			}, 10)
		},
		_doCheckState: function($) {
			var B = $.uid + "checkall",
				_ = document.getElementById(B);
			if (_ && $[ooO1o0]) {
				var A = $[ooO1o0]();
				if (A == "has") {
					_.indeterminate = true;
					_.checked = true
				} else {
					_.indeterminate = false;
					_.checked = A
				}
			}
		}
	}, $)
};
mini.lo1O01["checkcolumn"] = mini.CheckColumn;
mini.ExpandColumn = function($) {
	return mini.copyTo({
		width: 30,
		cellCls: "",
		align: "center",
		draggable: false,
		cellStyle: "padding:0",
		renderer: function($) {
			return "<a class=\"mini-grid-ecIcon\" href=\"javascript:#\" onclick=\"return false\"></a>"
		},
		init: function($) {
			$[o1Oo11]("cellclick", this.lO1O, this)
		},
		lO1O: function(A) {
			var $ = A.sender;
			if (A.column == this && $[O0O0]) if (O111o(A.htmlEvent.target, "mini-grid-ecIcon")) {
				var _ = $[O0O0](A.record);
				if ($.autoHideRowDetail) $[OO0ll1]();
				if (_) $[ol10O](A.record);
				else $[Oll1Ol](A.record)
			}
		}
	}, $)
};
mini.lo1O01["expandcolumn"] = mini.ExpandColumn;
o00OoOColumn = function($) {
	return mini.copyTo({
		_type: "checkboxcolumn",
		header: "#",
		headerAlign: "center",
		cellCls: "mini-checkcolumn",
		trueValue: true,
		falseValue: false,
		readOnly: false,
		getCheckId: function($) {
			return this._gridUID + "$checkbox$" + $[this._rowIdField]
		},
		getCheckBoxEl: function($) {
			return document.getElementById(this.getCheckId($))
		},
		renderer: function(C) {
			var A = this.getCheckId(C.record),
				B = mini._getMap(C.field, C.record),
				_ = B == this.trueValue ? true : false,
				$ = "checkbox";
			return "<input type=\"" + $ + "\" id=\"" + A + "\" " + (_ ? "checked" : "") + " hidefocus style=\"outline:none;\" onclick=\"return false;\"/>"
		},
		init: function($) {
			this.grid = $;

			function _(B) {
				if ($[OlOOo1]() || this[Oll10l]) return;
				B.value = mini._getMap(B.field, B.record);
				$[lO0OoO]("cellbeginedit", B);
				if (B.cancel !== true) {
					var A = mini._getMap(B.column.field, B.record),
						_ = A == this.trueValue ? this.falseValue : this.trueValue;
					if ($.olo10O) $.olo10O(B.record, B.column, _)
				}
			}
			function A(C) {
				if (C.column == this) {
					var B = this.getCheckId(C.record),
						A = C.htmlEvent.target;
					if (A.id == B) if ($[ol0ooO]) {
						C.cancel = false;
						_[o0OoO0](this, C)
					} else if ($[o11000] && $[o11000](C.record)) setTimeout(function() {
						A.checked = !A.checked
					}, 1)
				}
			}
			$[o1Oo11]("cellclick", A, this);
			o1ol0o(this.grid.el, "keydown", function(C) {
				if (C.keyCode == 32 && $[ol0ooO]) {
					var A = $[ooO1Ol]();
					if (!A) return;
					var B = {
						record: A[0],
						column: A[1]
					};
					_[o0OoO0](this, B);
					C.preventDefault()
				}
			}, this);
			var B = parseInt(this.trueValue),
				C = parseInt(this.falseValue);
			if (!isNaN(B)) this.trueValue = B;
			if (!isNaN(C)) this.falseValue = C
		}
	}, $)
};
mini.lo1O01["checkboxcolumn"] = o00OoOColumn;
llo001Column = function($) {
	return mini.copyTo({
		renderer: function(M) {
			var _ = !mini.isNull(M.value) ? String(M.value) : "",
				C = _.split(","),
				D = "id",
				J = "text",
				A = {},
				G = M.column.editor;
			if (G && G.type == "combobox") {
				var B = this.__editor;
				if (!B) {
					if (mini.isControl(G)) B = G;
					else {
						G = mini.clone(G);
						B = mini.create(G)
					}
					this.__editor = B
				}
				D = B[ol0o10]();
				J = B[ol1ll0]();
				A = this._valueMaps;
				if (!A) {
					A = {};
					var K = B[llO0l0]();
					for (var H = 0, E = K.length; H < E; H++) {
						var $ = K[H];
						A[$[D]] = $
					}
					this._valueMaps = A
				}
			}
			var L = [];
			for (H = 0, E = C.length; H < E; H++) {
				var F = C[H],
					$ = A[F];
				if ($) {
					var I = $[J];
					if (I === null || I === undefined) I = "";
					L.push(I)
				}
			}
			return L.join(",")
		}
	}, $)
};
mini.lo1O01["comboboxcolumn"] = llo001Column;
Ol0l10 = function($) {
	this.owner = $;
	o1ol0o(this.owner.el, "mousedown", this.lo1Oll, this)
};
Ol0l10[O0lOl0] = {
	lo1Oll: function(A) {
		var $ = lOll0o(A.target, "mini-resizer-trigger");
		if ($ && this.owner[Olo1lO]) {
			var _ = this.l1lo1o();
			_.start(A)
		}
	},
	l1lo1o: function() {
		if (!this._resizeDragger) this._resizeDragger = new mini.Drag({
			capture: true,
			onStart: mini.createDelegate(this.OO0O1, this),
			onMove: mini.createDelegate(this.lo1o1, this),
			onStop: mini.createDelegate(this.O0l01O, this)
		});
		return this._resizeDragger
	},
	OO0O1: function($) {
		this.proxy = mini.append(document.body, "<div class=\"mini-resizer-proxy\"></div>");
		this.proxy.style.cursor = "se-resize";
		this.elBox = oo0OlO(this.owner.el);
		l010(this.proxy, this.elBox)
	},
	lo1o1: function(B) {
		var $ = this.owner,
			D = B.now[0] - B.init[0],
			_ = B.now[1] - B.init[1],
			A = this.elBox.width + D,
			C = this.elBox.height + _;
		if (A < $.minWidth) A = $.minWidth;
		if (C < $.minHeight) C = $.minHeight;
		if (A > $.maxWidth) A = $.maxWidth;
		if (C > $.maxHeight) C = $.maxHeight;
		mini.setSize(this.proxy, A, C)
	},
	O0l01O: function($, A) {
		if (!this.proxy) return;
		var _ = oo0OlO(this.proxy);
		jQuery(this.proxy).remove();
		this.proxy = null;
		this.elBox = null;
		if (A) {
			this.owner[o010Oo](_.width);
			this.owner[lOO0O1](_.height);
			this.owner[lO0OoO]("resize")
		}
	}
};
mini._topWindow = null;
mini._getTopWindow = function() {
	if (mini._topWindow) return mini._topWindow;
	var $ = [];

	function _(A) {
		try {
			A["___try"] = 1;
			$.push(A)
		} catch (B) {}
		if (A.parent && A.parent != A) _(A.parent)
	}
	_(window);
	mini._topWindow = $[$.length - 1];
	return mini._topWindow
};
var __ps = mini.getParams();
if (__ps._winid) {
	try {
		window.Owner = mini._getTopWindow()[__ps._winid]
	} catch (ex) {}
}
mini._WindowID = "w" + Math.floor(Math.random() * 10000);
mini._getTopWindow()[mini._WindowID] = window;
mini.__IFrameCreateCount = 1;
mini.createIFrame = function(E, F) {
	var H = "__iframe_onload" + mini.__IFrameCreateCount++;
	window[H] = _;
	if (!E) E = "";
	var D = E.split("#");
	E = D[0];
	var C = "_t=" + Math.floor(Math.random() * 1000000);
	if (E[o0oOOo]("?") == -1) E += "?" + C;
	else E += "&" + C;
	if (D[1]) E = E + "#" + D[1];
	var G = "<iframe style=\"width:100%;height:100%;\" onload=\"" + H + "()\"  frameborder=\"0\"></iframe>",
		$ = document.createElement("div"),
		B = mini.append($, G),
		I = false;
	setTimeout(function() {
		if (B) {
			B.src = E;
			I = true
		}
	}, 5);
	var A = true;

	function _() {
		if (I == false) return;
		setTimeout(function() {
			if (F) F(B, A);
			A = false
		}, 1)
	}
	B._ondestroy = function() {
		window[H] = mini.emptyFn;
		B.src = "";
		try {
			B.contentWindow.document.write("");
			B.contentWindow.document.close()
		} catch ($) {}
		B._ondestroy = null;
		B = null
	};
	return B
};
mini._doOpen = function(C) {
	if (typeof C == "string") C = {
		url: C
	};
	C = mini.copyTo({
		width: 700,
		height: 400,
		allowResize: true,
		allowModal: true,
		closeAction: "destroy",
		title: "",
		titleIcon: "",
		iconCls: "",
		iconStyle: "",
		bodyStyle: "padding:0",
		url: "",
		showCloseButton: true,
		showFooter: false
	}, C);
	C[o0ooO1] = "destroy";
	var $ = C.onload;
	delete C.onload;
	var B = C.ondestroy;
	delete C.ondestroy;
	var _ = C.url;
	delete C.url;
	var A = new O1l1oO();
	A[OO101l](C);
	A[OlOl10](_, $, B);
	A[l1lool]();
	return A
};
mini.open = function(E) {
	if (!E) return;
	var C = E.url;
	if (!C) C = "";
	var B = C.split("#"),
		C = B[0],
		A = "_winid=" + mini._WindowID;
	if (C[o0oOOo]("?") == -1) C += "?" + A;
	else C += "&" + A;
	if (B[1]) C = C + "#" + B[1];
	E.url = C;
	E.Owner = window;
	var $ = [];

	function _(A) {
		if (A.mini) $.push(A);
		if (A.parent && A.parent != A) _(A.parent)
	}
	_(window);
	var D = $[$.length - 1];
	return D["mini"]._doOpen(E)
};
mini.openTop = mini.open;
mini[llO0l0] = function(C, A, E, D, _) {
	var $ = mini[lO10l0](C, A, E, D, _),
		B = mini.decode($);
	return B
};
mini[lO10l0] = function(B, A, D, C, _) {
	var $ = null;
	mini.ajax({
		url: B,
		data: A,
		async: false,
		type: _ ? _ : "get",
		cache: false,
		success: function(A, _) {
			$ = A;
			if (D) D(A, _)
		},
		error: C
	});
	return $
};
if (!window.mini_RootPath) mini_RootPath = "/";
ll1OO = function(B) {
	var A = document.getElementsByTagName("script"),
		D = "";
	for (var $ = 0, E = A.length; $ < E; $++) {
		var C = A[$].src;
		if (C[o0oOOo](B) != -1) {
			var F = C.split(B);
			D = F[0];
			break
		}
	}
	var _ = location.href;
	_ = _.split("#")[0];
	_ = _.split("?")[0];
	F = _.split("/");
	F.length = F.length - 1;
	_ = F.join("/");
	if (D[o0oOOo]("http:") == -1 && D[o0oOOo]("file:") == -1) D = _ + "/" + D;
	return D
};
if (!window.mini_JSPath) mini_JSPath = ll1OO("miniui.js");
mini[Ol0lOO] = function(A, _) {
	if (typeof A == "string") A = {
		url: A
	};
	if (_) A.el = _;
	var $ = mini.loadText(A.url);
	mini.innerHTML(A.el, $);
	mini.parse(A.el)
};
mini.createSingle = function($) {
	if (typeof $ == "string") $ = mini.getClass($);
	if (typeof $ != "function") return;
	var _ = $.single;
	if (!_) _ = $.single = new $();
	return _
};
mini.createTopSingle = function($) {
	if (typeof $ != "function") return;
	var _ = $[O0lOl0].type;
	if (top && top != window && top.mini && top.mini.getClass(_)) return top.mini.createSingle(_);
	else return mini.createSingle($)
};
mini.sortTypes = {
	"string": function($) {
		return String($).toUpperCase()
	},
	"date": function($) {
		if (!$) return 0;
		if (mini.isDate($)) return $[o1oo0O]();
		return mini.parseDate(String($))
	},
	"float": function(_) {
		var $ = parseFloat(String(_).replace(/,/g, ""));
		return isNaN($) ? 0 : $
	},
	"int": function(_) {
		var $ = parseInt(String(_).replace(/,/g, ""), 10);
		return isNaN($) ? 0 : $
	},
	"currency": function(_) {
		var $ = parseFloat(String(_).replace(/,/g, ""));
		return isNaN($) ? 0 : $
	}
};
mini.o111ol = function(G, $, K, H) {
	var F = G.split(";");
	for (var E = 0, C = F.length; E < C; E++) {
		var G = F[E].trim(),
			J = G.split(":"),
			A = J[0],
			_ = J[1];
		if (_) _ = _.split(",");
		else _ = [];
		var D = mini.VTypes[A];
		if (D) {
			var I = D($, _);
			if (I !== true) {
				K[Oloo0o] = false;
				var B = J[0] + "ErrorText";
				K.errorText = H[B] || mini.VTypes[B] || "";
				K.errorText = String.format(K.errorText, _[0], _[1], _[2], _[3], _[4]);
				break
			}
		}
	}
};
mini.OO0Ooo = function($, _) {
	if ($ && $[_]) return $[_];
	else return mini.VTypes[_]
};
mini.VTypes = {
	uniqueErrorText: "This field is unique.",
	requiredErrorText: "This field is required.",
	emailErrorText: "Please enter a valid email address.",
	urlErrorText: "Please enter a valid URL.",
	floatErrorText: "Please enter a valid number.",
	intErrorText: "Please enter only digits",
	dateErrorText: "Please enter a valid date. Date format is {0}",
	maxLengthErrorText: "Please enter no more than {0} characters.",
	minLengthErrorText: "Please enter at least {0} characters.",
	maxErrorText: "Please enter a value less than or equal to {0}.",
	minErrorText: "Please enter a value greater than or equal to {0}.",
	rangeLengthErrorText: "Please enter a value between {0} and {1} characters long.",
	rangeCharErrorText: "Please enter a value between {0} and {1} characters long.",
	rangeErrorText: "Please enter a value between {0} and {1}.",
	required: function(_, $) {
		if (mini.isNull(_) || _ === "") return false;
		return true
	},
	email: function(_, $) {
		if (mini.isNull(_) || _ === "") return true;
		if (_.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) return true;
		else return false
	},
	url: function(A, $) {
		if (mini.isNull(A) || A === "") return true;

		function _(_) {
			_ = _.toLowerCase();
			var $ = "^((https|http|ftp|rtsp|mms)?://)" + "?(([0-9a-z_!~*'().&=+$%-]+:)?[0-9a-z_!~*'().&=+$%-]+@)?" + "(([0-9]{1,3}.){3}[0-9]{1,3}" + "|" + "([0-9a-z_!~*'()-]+.)*" + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." + "[a-z]{2,6})" + "(:[0-9]{1,4})?" + "((/?)|" + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$",
				A = new RegExp($);
			if (A.test(_)) return (true);
			else return (false)
		}
		return _(A)
	},
	"int": function(A, _) {
		if (mini.isNull(A) || A === "") return true;

		function $(_) {
			if (_ < 0) _ = -_;
			var $ = String(_);
			return $.length > 0 && !(/[^0-9]/).test($)
		}
		return $(A)
	},
	"float": function(A, _) {
		if (mini.isNull(A) || A === "") return true;

		function $(_) {
			if (_ < 0) _ = -_;
			var $ = String(_);
			return $.length > 0 && !(/[^0-9.]/).test($)
		}
		return $(A)
	},
	"date": function(B, _) {
		if (mini.isNull(B) || B === "") return true;
		if (!B) return false;
		var $ = null,
			A = _[0];
		if (A) {
			$ = mini.parseDate(B, A);
			if ($ && $.getFullYear) if (mini.formatDate($, A) == B) return true
		} else {
			$ = mini.parseDate(B, "yyyy-MM-dd");
			if (!$) $ = mini.parseDate(B, "yyyy/MM/dd");
			if (!$) $ = mini.parseDate(B, "MM/dd/yyyy");
			if ($ && $.getFullYear) return true
		}
		return false
	},
	maxLength: function(A, $) {
		if (mini.isNull(A) || A === "") return true;
		var _ = parseInt($);
		if (!A || isNaN(_)) return true;
		if (A.length <= _) return true;
		else return false
	},
	minLength: function(A, $) {
		if (mini.isNull(A) || A === "") return true;
		var _ = parseInt($);
		if (isNaN(_)) return true;
		if (A.length >= _) return true;
		else return false
	},
	rangeLength: function(B, _) {
		if (mini.isNull(B) || B === "") return true;
		if (!B) return false;
		var $ = parseFloat(_[0]),
			A = parseFloat(_[1]);
		if (isNaN($) || isNaN(A)) return true;
		if ($ <= B.length && B.length <= A) return true;
		return false
	},
	rangeChar: function(G, B) {
		if (mini.isNull(G) || G === "") return true;
		var A = parseFloat(B[0]),
			E = parseFloat(B[1]);
		if (isNaN(A) || isNaN(E)) return true;

		function C(_) {
			var $ = new RegExp("^[\u4e00-\u9fa5]+$");
			if ($.test(_)) return true;
			return false
		}
		var $ = 0,
			F = String(G).split("");
		for (var _ = 0, D = F.length; _ < D; _++) if (C(F[_])) $ += 2;
		else $ += 1;
		if (A <= $ && $ <= E) return true;
		return false
	},
	range: function(B, _) {
		if (mini.VTypes["float"](B, _) == false) return false;
		if (mini.isNull(B) || B === "") return true;
		B = parseFloat(B);
		if (isNaN(B)) return false;
		var $ = parseFloat(_[0]),
			A = parseFloat(_[1]);
		if (isNaN($) || isNaN(A)) return true;
		if ($ <= B && B <= A) return true;
		return false
	}
};
mini.summaryTypes = {
	"count": function($) {
		if (!$) $ = [];
		return $.length
	},
	"max": function(B, C) {
		if (!B) B = [];
		var E = null;
		for (var _ = 0, D = B.length; _ < D; _++) {
			var $ = B[_],
				A = parseFloat($[C]);
			if (A === null || A === undefined || isNaN(A)) continue;
			if (E == null || E < A) E = A
		}
		return E
	},
	"min": function(C, D) {
		if (!C) C = [];
		var B = null;
		for (var _ = 0, E = C.length; _ < E; _++) {
			var $ = C[_],
				A = parseFloat($[D]);
			if (A === null || A === undefined || isNaN(A)) continue;
			if (B == null || B > A) B = A
		}
		return B
	},
	"avg": function(C, D) {
		if (!C) C = [];
		if (C.length == 0) return 0;
		var B = 0;
		for (var _ = 0, E = C.length; _ < E; _++) {
			var $ = C[_],
				A = parseFloat($[D]);
			if (A === null || A === undefined || isNaN(A)) continue;
			B += A
		}
		var F = B / C.length;
		return F
	},
	"sum": function(C, D) {
		if (!C) C = [];
		var B = 0;
		for (var _ = 0, E = C.length; _ < E; _++) {
			var $ = C[_],
				A = parseFloat($[D]);
			if (A === null || A === undefined || isNaN(A)) continue;
			B += A
		}
		return B
	}
};
mini.formatCurrency = function($, A) {
	if ($ === null || $ === undefined) $ == 0;
	$ = String($).replace(/\$|\,/g, "");
	if (isNaN($)) $ = "0";
	sign = ($ == ($ = Math.abs($)));
	$ = Math.floor($ * 100 + 0.50000000001);
	cents = $ % 100;
	$ = Math.floor($ / 100).toString();
	if (cents < 10) cents = "0" + cents;
	for (var _ = 0; _ < Math.floor(($.length - (1 + _)) / 3); _++) $ = $.substring(0, $.length - (4 * _ + 3)) + "," + $.substring($.length - (4 * _ + 3));
	A = A || "";
	return A + (((sign) ? "" : "-") + $ + "." + cents)
};
mini.emptyFn = function() {};
mini.Drag = function($) {
	mini.copyTo(this, $)
};
mini.Drag[O0lOl0] = {
	onStart: mini.emptyFn,
	onMove: mini.emptyFn,
	onStop: mini.emptyFn,
	capture: false,
	fps: 20,
	event: null,
	delay: 80,
	start: function(_) {
		_.preventDefault();
		if (_) this.event = _;
		this.now = this.init = [this.event.pageX, this.event.pageY];
		var $ = document;
		o1ol0o($, "mousemove", this.move, this);
		o1ol0o($, "mouseup", this.stop, this);
		o1ol0o($, "contextmenu", this.contextmenu, this);
		if (this.context) o1ol0o(this.context, "contextmenu", this.contextmenu, this);
		this.trigger = _.target;
		mini.selectable(this.trigger, false);
		mini.selectable($.body, false);
		if (this.capture) if (isIE) this.trigger.setCapture(true);
		else if (document.captureEvents) document.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP | Event.MOUSEDOWN);
		this.started = false;
		this.startTime = new Date()
	},
	contextmenu: function($) {
		if (this.context) lOOo(this.context, "contextmenu", this.contextmenu, this);
		lOOo(document, "contextmenu", this.contextmenu, this);
		$.preventDefault();
		$.stopPropagation()
	},
	move: function(_) {
		if (this.delay) if (new Date() - this.startTime < this.delay) return;
		if (!this.started) {
			this.started = true;
			this.onStart(this)
		}
		var $ = this;
		if (!this.timer) this.timer = setTimeout(function() {
			$.now = [_.pageX, _.pageY];
			$.event = _;
			$.onMove($);
			$.timer = null
		}, 5)
	},
	stop: function(B) {
		this.now = [B.pageX, B.pageY];
		this.event = B;
		if (this.timer) {
			clearTimeout(this.timer);
			this.timer = null
		}
		var A = document;
		mini.selectable(this.trigger, true);
		mini.selectable(A.body, true);
		if (isIE) {
			this.trigger.setCapture(false);
			this.trigger.releaseCapture()
		}
		var _ = mini.MouseButton.Right != B.button;
		if (_ == false) B.preventDefault();
		lOOo(A, "mousemove", this.move, this);
		lOOo(A, "mouseup", this.stop, this);
		var $ = this;
		setTimeout(function() {
			lOOo(document, "contextmenu", $.contextmenu, $);
			if ($.context) lOOo($.context, "contextmenu", $.contextmenu, $)
		}, 1);
		if (this.started) $.onStop($, _)
	}
};
mini.JSON = new(function() {
	var sb = [],
		_dateFormat = null,
		useHasOwn = !! {}.hasOwnProperty,
		replaceString = function($, A) {
			var _ = m[A];
			if (_) return _;
			_ = A.charCodeAt();
			return "\\u00" + Math.floor(_ / 16).toString(16) + (_ % 16).toString(16)
		},
		doEncode = function($, B) {
			if ($ === null) {
				sb[sb.length] = "null";
				return
			}
			var A = typeof $;
			if (A == "undefined") {
				sb[sb.length] = "null";
				return
			} else if ($.push) {
				sb[sb.length] = "[";
				var E, _, D = $.length,
					F;
				for (_ = 0; _ < D; _ += 1) {
					F = $[_];
					A = typeof F;
					if (A == "undefined" || A == "function" || A == "unknown");
					else {
						if (E) sb[sb.length] = ",";
						doEncode(F);
						E = true
					}
				}
				sb[sb.length] = "]";
				return
			} else if ($.getFullYear) {
				if (_dateFormat) sb[sb.length] = _dateFormat($, B);
				else {
					var C;
					sb[sb.length] = "\"";
					sb[sb.length] = $.getFullYear();
					sb[sb.length] = "-";
					C = $.getMonth() + 1;
					sb[sb.length] = C < 10 ? "0" + C : C;
					sb[sb.length] = "-";
					C = $.getDate();
					sb[sb.length] = C < 10 ? "0" + C : C;
					sb[sb.length] = "T";
					C = $.getHours();
					sb[sb.length] = C < 10 ? "0" + C : C;
					sb[sb.length] = ":";
					C = $.getMinutes();
					sb[sb.length] = C < 10 ? "0" + C : C;
					sb[sb.length] = ":";
					C = $.getSeconds();
					sb[sb.length] = C < 10 ? "0" + C : C;
					sb[sb.length] = "\"";
					return
				}
			} else if (A == "string") {
				if (strReg1.test($)) {
					sb[sb.length] = "\"";
					sb[sb.length] = $.replace(strReg2, replaceString);
					sb[sb.length] = "\"";
					return
				}
				sb[sb.length] = "\"" + $ + "\"";
				return
			} else if (A == "number") {
				sb[sb.length] = $;
				return
			} else if (A == "boolean") {
				sb[sb.length] = String($);
				return
			} else {
				sb[sb.length] = "{";
				E, _, F;
				for (_ in $) if (!useHasOwn || ($.hasOwnProperty && $.hasOwnProperty(_))) {
					F = $[_];
					A = typeof F;
					if (A == "undefined" || A == "function" || A == "unknown");
					else {
						if (E) sb[sb.length] = ",";
						doEncode(_);
						sb[sb.length] = ":";
						doEncode(F, _);
						E = true
					}
				}
				sb[sb.length] = "}";
				return
			}
		},
		m = {
			"\b": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			"\"": "\\\"",
			"\\": "\\\\"
		},
		strReg1 = /["\\\x00-\x1f]/,
		strReg2 = /([\x00-\x1f\\"])/g;
	this.encode = function() {
		var $;
		return function($, _) {
			sb = [];
			_dateFormat = _;
			doEncode($);
			_dateFormat = null;
			return sb.join("")
		}
	}();
	this.decode = function() {
		var re = /[\"\'](\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})[\"\']/g;
		return function(json, parseDate) {
			if (json === "" || json === null || json === undefined) return json;
			if (typeof json == "object") json = this.encode(json);
			if (parseDate !== false) {
				json = json.replace(re, "new Date($1,$2-1,$3,$4,$5,$6)");
				json = json.replace(__js_dateRegEx, "$1new Date($2)");
				json = json.replace(__js_dateRegEx2, "new Date($1)")
			}
			var s = eval("(" + json + ")");
			return s
		}
	}()
})();
__js_dateRegEx = new RegExp("(^|[^\\\\])\\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\\"", "g");
__js_dateRegEx2 = new RegExp("[\"']/Date\\(([0-9]+)\\)/[\"']", "g");
mini.encode = mini.JSON.encode;
mini.decode = mini.JSON.decode;
mini.clone = function($, A) {
	if ($ === null || $ === undefined) return $;
	var B = mini.encode($),
		_ = mini.decode(B);

	function C(A) {
		for (var _ = 0, D = A.length; _ < D; _++) {
			var $ = A[_];
			delete $._state;
			delete $._id;
			delete $._pid;
			delete $._uid;
			for (var B in $) {
				var E = $[B];
				if (E instanceof Array) C(E)
			}
		}
	}
	if (A !== false) C(_ instanceof Array ? _ : [_]);
	return _
};
var DAY_MS = 86400000,
	HOUR_MS = 3600000,
	MINUTE_MS = 60000;
mini.copyTo(mini, {
	clearTime: function($) {
		if (!$) return null;
		return new Date($.getFullYear(), $.getMonth(), $.getDate())
	},
	maxTime: function($) {
		if (!$) return null;
		return new Date($.getFullYear(), $.getMonth(), $.getDate(), 23, 59, 59)
	},
	cloneDate: function($) {
		if (!$) return null;
		return new Date($[o1oo0O]())
	},
	addDate: function(A, $, _) {
		if (!_) _ = "D";
		A = new Date(A[o1oo0O]());
		switch (_.toUpperCase()) {
		case "Y":
			A.setFullYear(A.getFullYear() + $);
			break;
		case "MO":
			A.setMonth(A.getMonth() + $);
			break;
		case "D":
			A.setDate(A.getDate() + $);
			break;
		case "H":
			A.setHours(A.getHours() + $);
			break;
		case "M":
			A.setMinutes(A.getMinutes() + $);
			break;
		case "S":
			A.setSeconds(A.getSeconds() + $);
			break;
		case "MS":
			A.setMilliseconds(A.getMilliseconds() + $);
			break
		}
		return A
	},
	getWeek: function(D, $, _) {
		$ += 1;
		var E = Math.floor((14 - ($)) / 12),
			G = D + 4800 - E,
			A = ($) + (12 * E) - 3,
			C = _ + Math.floor(((153 * A) + 2) / 5) + (365 * G) + Math.floor(G / 4) - Math.floor(G / 100) + Math.floor(G / 400) - 32045,
			F = (C + 31741 - (C % 7)) % 146097 % 36524 % 1461,
			H = Math.floor(F / 1460),
			B = ((F - H) % 365) + H;
		NumberOfWeek = Math.floor(B / 7) + 1;
		return NumberOfWeek
	},
	getWeekStartDate: function(C, B) {
		if (!B) B = 0;
		if (B > 6 || B < 0) throw new Error("out of weekday");
		var A = C.getDay(),
			_ = B - A;
		if (A < B) _ -= 7;
		var $ = new Date(C.getFullYear(), C.getMonth(), C.getDate() + _);
		return $
	},
	getShortWeek: function(_) {
		var $ = this.dateInfo.daysShort;
		return $[_]
	},
	getLongWeek: function(_) {
		var $ = this.dateInfo.daysLong;
		return $[_]
	},
	getShortMonth: function($) {
		var _ = this.dateInfo.monthsShort;
		return _[$]
	},
	getLongMonth: function($) {
		var _ = this.dateInfo.monthsLong;
		return _[$]
	},
	dateInfo: {
		monthsLong: ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		daysLong: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		daysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
		quarterLong: ["Q1", "Q2", "Q3", "Q4"],
		quarterShort: ["Q1", "Q2", "Q3", "Q4"],
		halfYearLong: ["first half", "second half"],
		patterns: {
			"d": "M/d/yyyy",
			"D": "dddd,MMMM dd,yyyy",
			"f": "dddd,MMMM dd,yyyy H:mm tt",
			"F": "dddd,MMMM dd,yyyy H:mm:ss tt",
			"g": "M/d/yyyy H:mm tt",
			"G": "M/d/yyyy H:mm:ss tt",
			"m": "MMMM dd",
			"o": "yyyy-MM-ddTHH:mm:ss.fff",
			"s": "yyyy-MM-ddTHH:mm:ss",
			"t": "H:mm tt",
			"T": "H:mm:ss tt",
			"U": "dddd,MMMM dd,yyyy HH:mm:ss tt",
			"y": "MMM,yyyy"
		},
		tt: {
			"AM": "AM",
			"PM": "PM"
		},
		ten: {
			"Early": "Early",
			"Mid": "Mid",
			"Late": "Late"
		},
		today: "Today",
		clockType: 24
	}
});
Date[O0lOl0].getHalfYear = function() {
	if (!this.getMonth) return null;
	var $ = this.getMonth();
	if ($ < 6) return 0;
	return 1
};
Date[O0lOl0].getQuarter = function() {
	if (!this.getMonth) return null;
	var $ = this.getMonth();
	if ($ < 3) return 0;
	if ($ < 6) return 1;
	if ($ < 9) return 2;
	return 3
};
mini.formatDate = function(C, O, F) {
	if (!C || !C.getFullYear || isNaN(C)) return "";
	var G = C.toString(),
		B = mini.dateInfo;
	if (!B) B = mini.dateInfo;
	if (typeof(B) !== "undefined") {
		var M = typeof(B.patterns[O]) !== "undefined" ? B.patterns[O] : O,
			J = C.getFullYear(),
			$ = C.getMonth(),
			_ = C.getDate();
		if (O == "yyyy-MM-dd") {
			$ = $ + 1 < 10 ? "0" + ($ + 1) : $ + 1;
			_ = _ < 10 ? "0" + _ : _;
			return J + "-" + $ + "-" + _
		}
		if (O == "MM/dd/yyyy") {
			$ = $ + 1 < 10 ? "0" + ($ + 1) : $ + 1;
			_ = _ < 10 ? "0" + _ : _;
			return $ + "/" + _ + "/" + J
		}
		G = M.replace(/yyyy/g, J);
		G = G.replace(/yy/g, (J + "").substring(2));
		var L = C.getHalfYear();
		G = G.replace(/hy/g, B.halfYearLong[L]);
		var I = C.getQuarter();
		G = G.replace(/Q/g, B.quarterLong[I]);
		G = G.replace(/q/g, B.quarterShort[I]);
		G = G.replace(/MMMM/g, B.monthsLong[$].escapeDateTimeTokens());
		G = G.replace(/MMM/g, B.monthsShort[$].escapeDateTimeTokens());
		G = G.replace(/MM/g, $ + 1 < 10 ? "0" + ($ + 1) : $ + 1);
		G = G.replace(/(\\)?M/g, function(A, _) {
			return _ ? A : $ + 1
		});
		var N = C.getDay();
		G = G.replace(/dddd/g, B.daysLong[N].escapeDateTimeTokens());
		G = G.replace(/ddd/g, B.daysShort[N].escapeDateTimeTokens());
		G = G.replace(/dd/g, _ < 10 ? "0" + _ : _);
		G = G.replace(/(\\)?d/g, function(A, $) {
			return $ ? A : _
		});
		var H = C.getHours(),
			A = H > 12 ? H - 12 : H;
		if (B.clockType == 12) if (H > 12) H -= 12;
		G = G.replace(/HH/g, H < 10 ? "0" + H : H);
		G = G.replace(/(\\)?H/g, function(_, $) {
			return $ ? _ : H
		});
		G = G.replace(/hh/g, A < 10 ? "0" + A : A);
		G = G.replace(/(\\)?h/g, function(_, $) {
			return $ ? _ : A
		});
		var D = C.getMinutes();
		G = G.replace(/mm/g, D < 10 ? "0" + D : D);
		G = G.replace(/(\\)?m/g, function(_, $) {
			return $ ? _ : D
		});
		var K = C.getSeconds();
		G = G.replace(/ss/g, K < 10 ? "0" + K : K);
		G = G.replace(/(\\)?s/g, function(_, $) {
			return $ ? _ : K
		});
		G = G.replace(/fff/g, C.getMilliseconds());
		G = G.replace(/tt/g, C.getHours() > 12 || C.getHours() == 0 ? B.tt["PM"] : B.tt["AM"]);
		var C = C.getDate(),
			E = "";
		if (C <= 10) E = B.ten["Early"];
		else if (C <= 20) E = B.ten["Mid"];
		else E = B.ten["Late"];
		G = G.replace(/ten/g, E)
	}
	return G.replace(/\\/g, "")
};
String[O0lOl0].escapeDateTimeTokens = function() {
	return this.replace(/([dMyHmsft])/g, "\\$1")
};
mini.fixDate = function($, _) {
	if (+$) while ($.getDate() != _.getDate()) $[lO0lO0](+$ + ($ < _ ? 1 : -1) * HOUR_MS)
};
mini.parseDate = function(s, ignoreTimezone) {
	try {
		var d = eval(s);
		if (d && d.getFullYear) return d
	} catch (ex) {}
	if (typeof s == "object") return isNaN(s) ? null : s;
	if (typeof s == "number") {
		d = new Date(s * 1000);
		if (d[o1oo0O]() != s) return null;
		return isNaN(d) ? null : d
	}
	if (typeof s == "string") {
		m = s.match(/^([0-9]{4}).([0-9]*)$/);
		if (m) {
			var date = new Date(m[1], m[2] - 1);
			return date
		}
		if (s.match(/^\d+(\.\d+)?$/)) {
			d = new Date(parseFloat(s) * 1000);
			if (d[o1oo0O]() != s) return null;
			else return d
		}
		if (ignoreTimezone === undefined) ignoreTimezone = true;
		d = mini.parseISO8601(s, ignoreTimezone) || (s ? new Date(s) : null);
		return isNaN(d) ? null : d
	}
	return null
};
mini.parseISO8601 = function(D, $) {
	var _ = D.match(/^([0-9]{4})([-\/]([0-9]{1,2})([-\/]([0-9]{1,2})([T ]([0-9]{1,2}):([0-9]{1,2})(:([0-9]{1,2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
	if (!_) {
		_ = D.match(/^([0-9]{4})[-\/]([0-9]{2})[-\/]([0-9]{2})[T ]([0-9]{1,2})/);
		if (_) {
			var A = new Date(_[1], _[2] - 1, _[3], _[4]);
			return A
		}
		_ = D.match(/^([0-9]{4}).([0-9]*)/);
		if (_) {
			A = new Date(_[1], _[2] - 1);
			return A
		}
		_ = D.match(/^([0-9]{4}).([0-9]*).([0-9]*)/);
		if (_) {
			A = new Date(_[1], _[2] - 1, _[3]);
			return A
		}
		_ = D.match(/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/);
		if (!_) return null;
		else {
			A = new Date(_[3], _[1] - 1, _[2]);
			return A
		}
	}
	A = new Date(_[1], 0, 1);
	if ($ || !_[14]) {
		var C = new Date(_[1], 0, 1, 9, 0);
		if (_[3]) {
			A.setMonth(_[3] - 1);
			C.setMonth(_[3] - 1)
		}
		if (_[5]) {
			A.setDate(_[5]);
			C.setDate(_[5])
		}
		mini.fixDate(A, C);
		if (_[7]) A.setHours(_[7]);
		if (_[8]) A.setMinutes(_[8]);
		if (_[10]) A.setSeconds(_[10]);
		if (_[12]) A.setMilliseconds(Number("0." + _[12]) * 1000);
		mini.fixDate(A, C)
	} else {
		A.setUTCFullYear(_[1], _[3] ? _[3] - 1 : 0, _[5] || 1);
		A.setUTCHours(_[7] || 0, _[8] || 0, _[10] || 0, _[12] ? Number("0." + _[12]) * 1000 : 0);
		var B = Number(_[16]) * 60 + (_[18] ? Number(_[18]) : 0);
		B *= _[15] == "-" ? 1 : -1;
		A = new Date(+A + (B * 60 * 1000))
	}
	return A
};
mini.parseTime = function(E, F) {
	if (!E) return null;
	var B = parseInt(E);
	if (B == E && F) {
		$ = new Date(0);
		if (F[0] == "H") $.setHours(B);
		else if (F[0] == "m") $.setMinutes(B);
		else if (F[0] == "s") $.setSeconds(B);
		return $
	}
	var $ = mini.parseDate(E);
	if (!$) {
		var D = E.split(":"),
			_ = parseInt(parseFloat(D[0])),
			C = parseInt(parseFloat(D[1])),
			A = parseInt(parseFloat(D[2]));
		if (!isNaN(_) && !isNaN(C) && !isNaN(A)) {
			$ = new Date(0);
			$.setHours(_);
			$.setMinutes(C);
			$.setSeconds(A)
		}
		if (!isNaN(_) && (F == "H" || F == "HH")) {
			$ = new Date(0);
			$.setHours(_)
		} else if (!isNaN(_) && !isNaN(C) && (F == "H:mm" || F == "HH:mm")) {
			$ = new Date(0);
			$.setHours(_);
			$.setMinutes(C)
		} else if (!isNaN(_) && !isNaN(C) && F == "mm:ss") {
			$ = new Date(0);
			$.setMinutes(_);
			$.setSeconds(C)
		}
	}
	return $
};
mini.dateInfo = {
	monthsLong: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
	monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
	daysLong: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
	daysShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
	quarterLong: ["\u4e00\u5b63\u5ea6", "\u4e8c\u5b63\u5ea6", "\u4e09\u5b63\u5ea6", "\u56db\u5b63\u5ea6"],
	quarterShort: ["Q1", "Q2", "Q2", "Q4"],
	halfYearLong: ["\u4e0a\u534a\u5e74", "\u4e0b\u534a\u5e74"],
	patterns: {
		"d": "yyyy-M-d",
		"D": "yyyy\u5e74M\u6708d\u65e5",
		"f": "yyyy\u5e74M\u6708d\u65e5 H:mm",
		"F": "yyyy\u5e74M\u6708d\u65e5 H:mm:ss",
		"g": "yyyy-M-d H:mm",
		"G": "yyyy-M-d H:mm:ss",
		"m": "MMMd\u65e5",
		"o": "yyyy-MM-ddTHH:mm:ss.fff",
		"s": "yyyy-MM-ddTHH:mm:ss",
		"t": "H:mm",
		"T": "H:mm:ss",
		"U": "yyyy\u5e74M\u6708d\u65e5 HH:mm:ss",
		"y": "yyyy\u5e74MM\u6708"
	},
	tt: {
		"AM": "\u4e0a\u5348",
		"PM": "\u4e0b\u5348"
	},
	ten: {
		"Early": "\u4e0a\u65ec",
		"Mid": "\u4e2d\u65ec",
		"Late": "\u4e0b\u65ec"
	},
	today: "\u4eca\u5929",
	clockType: 24
};
mini.append = function(_, A) {
	_ = O10l01(_);
	if (!A || !_) return;
	if (typeof A == "string") {
		if (A.charAt(0) == "#") {
			A = O10l01(A);
			if (!A) return;
			_.appendChild(A);
			return A
		} else {
			if (A[o0oOOo]("<tr") == 0) {
				return jQuery(_).append(A)[0].lastChild;
				return
			}
			var $ = document.createElement("div");
			$.innerHTML = A;
			A = $.firstChild;
			while ($.firstChild) _.appendChild($.firstChild);
			return A
		}
	} else {
		_.appendChild(A);
		return A
	}
};
mini.prepend = function(_, A) {
	if (typeof A == "string") if (A.charAt(0) == "#") A = O10l01(A);
	else {
		var $ = document.createElement("div");
		$.innerHTML = A;
		A = $.firstChild
	}
	return jQuery(_).prepend(A)[0].firstChild
};
mini.after = function(_, A) {
	if (typeof A == "string") if (A.charAt(0) == "#") A = O10l01(A);
	else {
		var $ = document.createElement("div");
		$.innerHTML = A;
		A = $.firstChild
	}
	if (!A || !_) return;
	_.nextSibling ? _.parentNode.insertBefore(A, _.nextSibling) : _.parentNode.appendChild(A);
	return A
};
mini.before = function(_, A) {
	if (typeof A == "string") if (A.charAt(0) == "#") A = O10l01(A);
	else {
		var $ = document.createElement("div");
		$.innerHTML = A;
		A = $.firstChild
	}
	if (!A || !_) return;
	_.parentNode.insertBefore(A, _);
	return A
};
mini.__wrap = document.createElement("div");
mini.createElements = function($) {
	mini.removeChilds(mini.__wrap);
	var _ = $[o0oOOo]("<tr") == 0;
	if (_) $ = "<table>" + $ + "</table>";
	mini.__wrap.innerHTML = $;
	return _ ? mini.__wrap.firstChild.rows : mini.__wrap.childNodes
};
O10l01 = function(D, A) {
	if (typeof D == "string") {
		if (D.charAt(0) == "#") D = D.substr(1);
		var _ = document.getElementById(D);
		if (_) return _;
		if (A) {
			var B = A.getElementsByTagName("*");
			for (var $ = 0, C = B.length; $ < C; $++) {
				_ = B[$];
				if (_.id == D) return _
			}
			_ = null
		}
		return _
	} else return D
};
lOll0o = function($, _) {
	$ = O10l01($);
	if (!$) return;
	if (!$.className) return false;
	var A = String($.className).split(" ");
	return A[o0oOOo](_) != -1
};
ollool = function($, _) {
	if (!_) return;
	if (lOll0o($, _) == false) jQuery($)[ool0lo](_)
};
OloO = function($, _) {
	if (!_) return;
	jQuery($)[O01o00](_)
};
Oll0 = function($) {
	$ = O10l01($);
	var _ = jQuery($);
	return {
		top: parseInt(_.css("margin-top"), 10) || 0,
		left: parseInt(_.css("margin-left"), 10) || 0,
		bottom: parseInt(_.css("margin-bottom"), 10) || 0,
		right: parseInt(_.css("margin-right"), 10) || 0
	}
};
Ooo00 = function($) {
	$ = O10l01($);
	var _ = jQuery($);
	return {
		top: parseInt(_.css("border-top-width"), 10) || 0,
		left: parseInt(_.css("border-left-width"), 10) || 0,
		bottom: parseInt(_.css("border-bottom-width"), 10) || 0,
		right: parseInt(_.css("border-right-width"), 10) || 0
	}
};
OlOo0O = function($) {
	$ = O10l01($);
	var _ = jQuery($);
	return {
		top: parseInt(_.css("padding-top"), 10) || 0,
		left: parseInt(_.css("padding-left"), 10) || 0,
		bottom: parseInt(_.css("padding-bottom"), 10) || 0,
		right: parseInt(_.css("padding-right"), 10) || 0
	}
};
oOl1O = function(_, $) {
	_ = O10l01(_);
	$ = parseInt($);
	if (isNaN($) || !_) return;
	if (jQuery.boxModel) {
		var A = OlOo0O(_),
			B = Ooo00(_);
		$ = $ - A.left - A.right - B.left - B.right
	}
	if ($ < 0) $ = 0;
	_.style.width = $ + "px"
};
oOoOoO = function(_, $) {
	_ = O10l01(_);
	$ = parseInt($);
	if (isNaN($) || !_) return;
	if (jQuery.boxModel) {
		var A = OlOo0O(_),
			B = Ooo00(_);
		$ = $ - A.top - A.bottom - B.top - B.bottom
	}
	if ($ < 0) $ = 0;
	_.style.height = $ + "px"
};
O1011o = function($, _) {
	$ = O10l01($);
	if ($.style.display == "none" || $.type == "text/javascript") return 0;
	return _ ? jQuery($).width() : jQuery($).outerWidth()
};
l11ll = function($, _) {
	$ = O10l01($);
	if ($.style.display == "none" || $.type == "text/javascript") return 0;
	return _ ? jQuery($).height() : jQuery($).outerHeight()
};
l010 = function(A, C, B, $, _) {
	if (B === undefined) {
		B = C.y;
		$ = C.width;
		_ = C.height;
		C = C.x
	}
	mini[l01o0O](A, C, B);
	oOl1O(A, $);
	oOoOoO(A, _)
};
oo0OlO = function(A) {
	var $ = mini.getXY(A),
		_ = {
			x: $[0],
			y: $[1],
			width: O1011o(A),
			height: l11ll(A)
		};
	_.left = _.x;
	_.top = _.y;
	_.right = _.x + _.width;
	_.bottom = _.y + _.height;
	return _
};
llO0l = function(A, B) {
	A = O10l01(A);
	if (!A || typeof B != "string") return;
	var F = jQuery(A),
		_ = B.toLowerCase().split(";");
	for (var $ = 0, C = _.length; $ < C; $++) {
		var E = _[$],
			D = E.split(":");
		if (D.length == 2) F.css(D[0].trim(), D[1].trim())
	}
};
llo0o = function() {
	var $ = document.defaultView;
	return new Function("el", "style", ["style[o0oOOo]('-')>-1 && (style=style.replace(/-(\\w)/g,function(m,a){return a.toUpperCase()}));", "style=='float' && (style='", $ ? "cssFloat" : "styleFloat", "');return el.style[style] || ", $ ? "window.getComputedStyle(el,null)[style]" : "el.currentStyle[style]", " || null;"].join(""))
}();
Oo11 = function(A, $) {
	var _ = false;
	A = O10l01(A);
	$ = O10l01($);
	if (A === $) return true;
	if (A && $) if (A.contains) {
		try {
			return A.contains($)
		} catch (B) {
			return false
		}
	} else if (A.compareDocumentPosition) return !!(A.compareDocumentPosition($) & 16);
	else while ($ = $.parentNode) _ = $ == A || _;
	return _
};
O111o = function(B, A, $) {
	B = O10l01(B);
	var C = document.body,
		_ = 0,
		D;
	$ = $ || 50;
	if (typeof $ != "number") {
		D = O10l01($);
		$ = 10
	}
	while (B && B.nodeType == 1 && _ < $ && B != C && B != D) {
		if (lOll0o(B, A)) return B;
		_++;
		B = B.parentNode
	}
	return null
};
mini.copyTo(mini, {
	byId: O10l01,
	hasClass: lOll0o,
	addClass: ollool,
	removeClass: OloO,
	getMargins: Oll0,
	getBorders: Ooo00,
	getPaddings: OlOo0O,
	setWidth: oOl1O,
	setHeight: oOoOoO,
	getWidth: O1011o,
	getHeight: l11ll,
	setBox: l010,
	getBox: oo0OlO,
	setStyle: llO0l,
	getStyle: llo0o,
	repaint: function($) {
		if (!$) $ = document.body;
		ollool($, "mini-repaint");
		setTimeout(function() {
			OloO($, "mini-repaint")
		}, 1)
	},
	getSize: function($, _) {
		return {
			width: O1011o($, _),
			height: l11ll($, _)
		}
	},
	setSize: function(A, $, _) {
		oOl1O(A, $);
		oOoOoO(A, _)
	},
	setX: function(_, B) {
		B = parseInt(B);
		var $ = jQuery(_).offset(),
			A = parseInt($.top);
		if (A === undefined) A = $[1];
		mini[l01o0O](_, B, A)
	},
	setY: function(_, A) {
		A = parseInt(A);
		var $ = jQuery(_).offset(),
			B = parseInt($.left);
		if (B === undefined) B = $[0];
		mini[l01o0O](_, B, A)
	},
	setXY: function(_, B, A) {
		var $ = {
			left: parseInt(B),
			top: parseInt(A)
		};
		jQuery(_).offset($);
		jQuery(_).offset($)
	},
	getXY: function(_) {
		var $ = jQuery(_).offset();
		return [parseInt($.left), parseInt($.top)]
	},
	getViewportBox: function() {
		var $ = jQuery(window).width(),
			_ = jQuery(window).height(),
			B = jQuery(document).scrollLeft(),
			A = jQuery(document.body).scrollTop();
		if (document.documentElement) A = document.documentElement.scrollTop;
		return {
			x: B,
			y: A,
			width: $,
			height: _,
			right: B + $,
			bottom: A + _
		}
	},
	getChildNodes: function(A, C) {
		A = O10l01(A);
		if (!A) return;
		var E = A.childNodes,
			B = [];
		for (var $ = 0, D = E.length; $ < D; $++) {
			var _ = E[$];
			if (_.nodeType == 1 || C === true) B.push(_)
		}
		return B
	},
	removeChilds: function(B, _) {
		B = O10l01(B);
		if (!B) return;
		var C = mini[Ol0Olo](B, true);
		for (var $ = 0, D = C.length; $ < D; $++) {
			var A = C[$];
			if (_ && A == _);
			else B.removeChild(C[$])
		}
	},
	isAncestor: Oo11,
	findParent: O111o,
	findChild: function(_, A) {
		_ = O10l01(_);
		var B = _.getElementsByTagName("*");
		for (var $ = 0, C = B.length; $ < C; $++) {
			var _ = B[$];
			if (lOll0o(_, A)) return _
		}
	},
	isAncestor: function(A, $) {
		var _ = false;
		A = O10l01(A);
		$ = O10l01($);
		if (A === $) return true;
		if (A && $) if (A.contains) {
			try {
				return A.contains($)
			} catch (B) {
				return false
			}
		} else if (A.compareDocumentPosition) return !!(A.compareDocumentPosition($) & 16);
		else while ($ = $.parentNode) _ = $ == A || _;
		return _
	},
	getOffsetsTo: function(_, A) {
		var $ = this.getXY(_),
			B = this.getXY(A);
		return [$[0] - B[0], $[1] - B[1]]
	},
	scrollIntoView: function(I, H, F) {
		var B = O10l01(H) || document.body,
			$ = this.getOffsetsTo(I, B),
			C = $[0] + B.scrollLeft,
			J = $[1] + B.scrollTop,
			D = J + I.offsetHeight,
			A = C + I.offsetWidth,
			G = B.clientHeight,
			K = parseInt(B.scrollTop, 10),
			_ = parseInt(B.scrollLeft, 10),
			L = K + G,
			E = _ + B.clientWidth;
		if (I.offsetHeight > G || J < K) B.scrollTop = J;
		else if (D > L) B.scrollTop = D - G;
		B.scrollTop = B.scrollTop;
		if (F !== false) {
			if (I.offsetWidth > B.clientWidth || C < _) B.scrollLeft = C;
			else if (A > E) B.scrollLeft = A - B.clientWidth;
			B.scrollLeft = B.scrollLeft
		}
		return this
	},
	setOpacity: function(_, $) {
		jQuery(_).css({
			"opacity": $
		})
	},
	selectable: function(_, $) {
		_ = O10l01(_);
		if ( !! $) {
			jQuery(_)[O01o00]("mini-unselectable");
			if (isIE) _.unselectable = "off";
			else {
				_.style.MozUserSelect = "";
				_.style.KhtmlUserSelect = "";
				_.style.UserSelect = ""
			}
		} else {
			jQuery(_)[ool0lo]("mini-unselectable");
			if (isIE) _.unselectable = "on";
			else {
				_.style.MozUserSelect = "none";
				_.style.UserSelect = "none";
				_.style.KhtmlUserSelect = "none"
			}
		}
	},
	selectRange: function(B, A, _) {
		if (B.createTextRange) {
			var $ = B.createTextRange();
			$.moveStart("character", A);
			$.moveEnd("character", _ - B.value.length);
			$[o00OO0]()
		} else if (B.setSelectionRange) B.setSelectionRange(A, _);
		try {
			B[ool00o]()
		} catch (C) {}
	},
	getSelectRange: function(A) {
		A = O10l01(A);
		if (!A) return;
		try {
			A[ool00o]()
		} catch (C) {}
		var $ = 0,
			B = 0;
		if (A.createTextRange) {
			var _ = document.selection.createRange().duplicate();
			_.moveEnd("character", A.value.length);
			if (_.text === "") $ = A.value.length;
			else $ = A.value.lastIndexOf(_.text);
			_ = document.selection.createRange().duplicate();
			_.moveStart("character", -A.value.length);
			B = _.text.length
		} else {
			$ = A.selectionStart;
			B = A.selectionEnd
		}
		return [$, B]
	}
});
(function() {
	var $ = {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},
		_ = document.createElement("div");
	_.setAttribute("class", "t");
	var A = _.className === "t";
	mini.setAttr = function(B, C, _) {
		B.setAttribute(A ? C : ($[C] || C), _)
	};
	mini.getAttr = function(B, D) {
		if (D == "value" && (isIE6 || isIE7)) {
			var _ = B.attributes[D];
			return _ ? _.value : null
		}
		var E = B.getAttribute(A ? D : ($[D] || D));
		if (typeof E == "function") E = B.attributes[D].value;
		if (E == null && D == "onload") {
			var C = B.getAttributeNode ? B.getAttributeNode(D) : null;
			if (C) E = C.nodeValue
		}
		return E
	}
})();
Ol01lO = function(_, $, C, A) {
	var B = "on" + $.toLowerCase();
	_[B] = function(_) {
		_ = _ || window.event;
		_.target = _.target || _.srcElement;
		if (!_.preventDefault) _.preventDefault = function() {
			if (window.event) window.event.returnValue = false
		};
		if (!_.stopPropogation) _.stopPropogation = function() {
			if (window.event) window.event.cancelBubble = true
		};
		var $ = C[o0OoO0](A, _);
		if ($ === false) return false
	}
};
o1ol0o = function(_, $, D, A) {
	_ = O10l01(_);
	A = A || _;
	if (!_ || !$ || !D || !A) return false;
	var B = mini[lo1O0o](_, $, D, A);
	if (B) return false;
	var C = mini.createDelegate(D, A);
	mini.listeners.push([_, $, D, A, C]);
	if (isFirefox && $ == "mousewheel") $ = "DOMMouseScroll";
	jQuery(_).bind($, C)
};
lOOo = function(_, $, C, A) {
	_ = O10l01(_);
	A = A || _;
	if (!_ || !$ || !C || !A) return false;
	var B = mini[lo1O0o](_, $, C, A);
	if (!B) return false;
	mini.listeners.remove(B);
	if (isFirefox && $ == "mousewheel") $ = "DOMMouseScroll";
	jQuery(_).unbind($, B[4])
};
mini.copyTo(mini, {
	listeners: [],
	on: o1ol0o,
	un: lOOo,
	findListener: function(A, _, F, B) {
		A = O10l01(A);
		B = B || A;
		if (!A || !_ || !F || !B) return false;
		var D = mini.listeners;
		for (var $ = 0, E = D.length; $ < E; $++) {
			var C = D[$];
			if (C[0] == A && C[1] == _ && C[2] == F && C[3] == B) return C
		}
	},
	clearEvent: function(A, _) {
		A = O10l01(A);
		if (!A) return false;
		var C = mini.listeners;
		for (var $ = C.length - 1; $ >= 0; $--) {
			var B = C[$];
			if (B[0] == A) if (!_ || _ == B[1]) lOOo(A, B[1], B[2], B[3])
		}
		A.onmouseover = A.onmousedown = null
	}
});
mini.__windowResizes = [];
mini.onWindowResize = function(_, $) {
	mini.__windowResizes.push([_, $])
};
o1ol0o(window, "resize", function(C) {
	var _ = mini.__windowResizes;
	for (var $ = 0, B = _.length; $ < B; $++) {
		var A = _[$];
		A[0][o0OoO0](A[1], C)
	}
});
mini.htmlEncode = function(_) {
	if (typeof _ !== "string") return _;
	var $ = "";
	if (_.length == 0) return "";
	$ = _;
	$ = $.replace(/</g, "&lt;");
	$ = $.replace(/>/g, "&gt;");
	$ = $.replace(/ /g, "&nbsp;");
	$ = $.replace(/\'/g, "&#39;");
	$ = $.replace(/\"/g, "&quot;");
	return $
};
mini.htmlDecode = function(_) {
	if (typeof _ !== "string") return _;
	var $ = "";
	if (_.length == 0) return "";
	$ = _.replace(/&gt;/g, "&");
	$ = $.replace(/&lt;/g, "<");
	$ = $.replace(/&gt;/g, ">");
	$ = $.replace(/&nbsp;/g, " ");
	$ = $.replace(/&#39;/g, "'");
	$ = $.replace(/&quot;/g, "\"");
	return $
};
mini.copyTo(Array.prototype, {
	add: Array[O0lOl0].enqueue = function($) {
		this[this.length] = $;
		return this
	},
	getRange: function(A, B) {
		var C = [];
		for (var _ = A; _ <= B; _++) {
			var $ = this[_];
			if ($) C[C.length] = $
		}
		return C
	},
	addRange: function(A) {
		for (var $ = 0, _ = A.length; $ < _; $++) this[this.length] = A[$];
		return this
	},
	clear: function() {
		this.length = 0;
		return this
	},
	clone: function() {
		if (this.length === 1) return [this[0]];
		else return Array.apply(null, this)
	},
	contains: function($) {
		return (this[o0oOOo]($) >= 0)
	},
	indexOf: function(_, B) {
		var $ = this.length;
		for (var A = (B < 0) ? Math[oolOo0](0, $ + B) : B || 0; A < $; A++) if (this[A] === _) return A;
		return -1
	},
	dequeue: function() {
		return this.shift()
	},
	insert: function(_, $) {
		this.splice(_, 0, $);
		return this
	},
	insertRange: function(_, B) {
		for (var A = B.length - 1; A >= 0; A--) {
			var $ = B[A];
			this.splice(_, 0, $)
		}
		return this
	},
	remove: function(_) {
		var $ = this[o0oOOo](_);
		if ($ >= 0) this.splice($, 1);
		return ($ >= 0)
	},
	removeAt: function($) {
		var _ = this[$];
		this.splice($, 1);
		return _
	},
	removeRange: function(_) {
		_ = _.clone();
		for (var $ = 0, A = _.length; $ < A; $++) this.remove(_[$])
	}
});
mini.Keyboard = {
	Left: 37,
	Top: 38,
	Right: 39,
	Bottom: 40,
	PageUp: 33,
	PageDown: 34,
	End: 35,
	Home: 36,
	Enter: 13,
	ESC: 27,
	Space: 32,
	Tab: 9,
	Del: 46,
	F1: 112,
	F2: 113,
	F3: 114,
	F4: 115,
	F5: 116,
	F6: 117,
	F7: 118,
	F8: 119,
	F9: 120,
	F10: 121,
	F11: 122,
	F12: 123
};
var ua = navigator.userAgent.toLowerCase(),
	check = function($) {
		return $.test(ua)
	},
	DOC = document,
	isStrict = DOC.compatMode == "CSS1Compat",
	isOpera = Object[O0lOl0].toString[o0OoO0](window.opera) == "[object Opera]",
	isChrome = check(/chrome/),
	isWebKit = check(/webkit/),
	isSafari = !isChrome && check(/safari/),
	isSafari2 = isSafari && check(/applewebkit\/4/),
	isSafari3 = isSafari && check(/version\/3/),
	isSafari4 = isSafari && check(/version\/4/),
	isIE = !! window.attachEvent && !isOpera,
	isIE7 = isIE && check(/msie 7/),
	isIE8 = isIE && check(/msie 8/),
	isIE9 = isIE && check(/msie 9/),
	isIE10 = isIE && document.documentMode == 10,
	isIE6 = isIE && !isIE7 && !isIE8 && !isIE9 && !isIE10,
	isFirefox = navigator.userAgent[o0oOOo]("Firefox") > 0,
	isGecko = !isWebKit && check(/gecko/),
	isGecko2 = isGecko && check(/rv:1\.8/),
	isGecko3 = isGecko && check(/rv:1\.9/),
	isBorderBox = isIE && !isStrict,
	isWindows = check(/windows|win32/),
	isMac = check(/macintosh|mac os x/),
	isAir = check(/adobeair/),
	isLinux = check(/linux/),
	isSecure = /^https/i.test(window.location.protocol);
if (isIE6) {
	try {
		DOC.execCommand("BackgroundImageCache", false, true)
	} catch (e) {}
}
mini.boxModel = !isBorderBox;
mini.isIE = isIE;
mini.isIE6 = isIE6;
mini.isIE7 = isIE7;
mini.isIE8 = isIE8;
mini.isIE9 = isIE9;
mini.isIE10 = isIE10;
mini.isFirefox = isFirefox;
mini.isOpera = isOpera;
mini.isSafari = isSafari;
mini.isChrome = isChrome;
if (jQuery) jQuery.boxModel = mini.boxModel;
mini.noBorderBox = false;
if (jQuery.boxModel == false && isIE && isIE9 == false) mini.noBorderBox = true;
mini.MouseButton = {
	Left: 0,
	Middle: 1,
	Right: 2
};
if (isIE && !isIE9) mini.MouseButton = {
	Left: 1,
	Middle: 4,
	Right: 2
};
mini._MaskID = 1;
mini._MaskObjects = {};
mini[ol1ll1] = function(C) {
	var _ = O10l01(C);
	if (mini.isElement(_)) C = {
		el: _
	};
	else if (typeof C == "string") C = {
		html: C
	};
	C = mini.copyTo({
		html: "",
		cls: "",
		style: "",
		backStyle: "background:#ccc"
	}, C);
	C.el = O10l01(C.el);
	if (!C.el) C.el = document.body;
	_ = C.el;
	mini["unmask"](C.el);
	_._maskid = mini._MaskID++;
	mini._MaskObjects[_._maskid] = C;
	var $ = mini.append(_, "<div class=\"mini-mask\">" + "<div class=\"mini-mask-background\" style=\"" + C.backStyle + "\"></div>" + "<div class=\"mini-mask-msg " + C.cls + "\" style=\"" + C.style + "\">" + C.html + "</div>" + "</div>");
	C.maskEl = $;
	if (!mini.isNull(C.opacity)) mini.setOpacity($.firstChild, C.opacity);

	function A() {
		B.style.display = "block";
		var $ = mini.getSize(B);
		B.style.marginLeft = -$.width / 2 + "px";
		B.style.marginTop = -$.height / 2 + "px"
	}
	var B = $.lastChild;
	B.style.display = "none";
	setTimeout(function() {
		A()
	}, 0)
};
mini["unmask"] = function(_) {
	_ = O10l01(_);
	if (!_) _ = document.body;
	var A = mini._MaskObjects[_._maskid];
	if (!A) return;
	delete mini._MaskObjects[_._maskid];
	var $ = A.maskEl;
	A.maskEl = null;
	if ($ && $.parentNode) $.parentNode.removeChild($)
};
mini.Cookie = {
	get: function(D) {
		var A = document.cookie.split("; "),
			B = null;
		for (var $ = 0; $ < A.length; $++) {
			var _ = A[$].split("=");
			if (D == _[0]) B = _
		}
		if (B) {
			var C = B[1];
			if (C === undefined) return C;
			return unescape(C)
		}
		return null
	},
	set: function(C, $, B, A) {
		var _ = new Date();
		if (B != null) _ = new Date(_[o1oo0O]() + (B * 1000 * 3600 * 24));
		document.cookie = C + "=" + escape($) + ((B == null) ? "" : ("; expires=" + _.toGMTString())) + ";path=/" + (A ? "; domain=" + A : "")
	},
	del: function(_, $) {
		this[OO101l](_, null, -100, $)
	}
};
mini.copyTo(mini, {
	treeToArray: function(C, I, J, A, $) {
		if (!I) I = "children";
		var F = [];
		for (var H = 0, D = C.length; H < D; H++) {
			var B = C[H];
			F[F.length] = B;
			if (A) B[A] = $;
			var _ = B[I];
			if (_ && _.length > 0) {
				var E = B[J],
					G = this[llo11l](_, I, J, A, E);
				F.addRange(G)
			}
		}
		return F
	},
	arrayToTree: function(C, A, H, B) {
		if (!A) A = "children";
		H = H || "_id";
		B = B || "_pid";
		var G = [],
			F = {};
		for (var _ = 0, E = C.length; _ < E; _++) {
			var $ = C[_];
			if (!$) continue;
			var I = $[H];
			if (I !== null && I !== undefined) F[I] = $;
			delete $[A]
		}
		for (_ = 0, E = C.length; _ < E; _++) {
			var $ = C[_],
				D = F[$[B]];
			if (!D) {
				G.push($);
				continue
			}
			if (!D[A]) D[A] = [];
			D[A].push($)
		}
		return G
	}
});
mini.treeToList = mini[llo11l];
mini.listToTree = mini.arrayToTree;

function UUID() {
	var A = [],
		_ = "0123456789ABCDEF".split("");
	for (var $ = 0; $ < 36; $++) A[$] = Math.floor(Math.random() * 16);
	A[14] = 4;
	A[19] = (A[19] & 3) | 8;
	for ($ = 0; $ < 36; $++) A[$] = _[A[$]];
	A[8] = A[13] = A[18] = A[23] = "-";
	return A.join("")
}
String.format = function(_) {
	var $ = Array[O0lOl0].slice[o0OoO0](arguments, 1);
	_ = _ || "";
	return _.replace(/\{(\d+)\}/g, function(A, _) {
		return $[_]
	})
};
String[O0lOl0].trim = function() {
	var $ = /^\s+|\s+$/g;
	return function() {
		return this.replace($, "")
	}
}();
mini.copyTo(mini, {
	measureText: function(B, _, C) {
		if (!this.measureEl) this.measureEl = mini.append(document.body, "<div></div>");
		this.measureEl.style.cssText = "position:absolute;left:-1000px;top:-1000px;visibility:hidden;";
		if (typeof B == "string") this.measureEl.className = B;
		else {
			this.measureEl.className = "";
			var G = jQuery(B),
				A = jQuery(this.measureEl),
				F = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"];
			for (var $ = 0, E = F.length; $ < E; $++) {
				var D = F[$];
				A.css(D, G.css(D))
			}
		}
		if (C) llO0l(this.measureEl, C);
		this.measureEl.innerHTML = _;
		return mini.getSize(this.measureEl)
	}
});
jQuery(function() {
	var $ = new Date();
	mini.isReady = true;
	mini.parse();
	Ol00();
	if ((llo0o(document.body, "overflow") == "hidden" || llo0o(document.documentElement, "overflow") == "hidden") && (isIE6 || isIE7)) {
		jQuery(document.body).css("overflow", "visible");
		jQuery(document.documentElement).css("overflow", "visible")
	}
	mini.__LastWindowWidth = document.documentElement.clientWidth;
	mini.__LastWindowHeight = document.documentElement.clientHeight
});
mini_onload = function($) {
	mini.layout(null, false);
	o1ol0o(window, "resize", mini_onresize)
};
o1ol0o(window, "load", mini_onload);
mini.__LastWindowWidth = document.documentElement.clientWidth;
mini.__LastWindowHeight = document.documentElement.clientHeight;
mini.doWindowResizeTimer = null;
mini.allowLayout = true;
mini_onresize = function(A) {
	if (mini.doWindowResizeTimer) clearTimeout(mini.doWindowResizeTimer);
	o101 = mini.isWindowDisplay();
	if (o101 == false || mini.allowLayout == false) return;
	if (typeof Ext != "undefined") mini.doWindowResizeTimer = setTimeout(function() {
		var _ = document.documentElement.clientWidth,
			$ = document.documentElement.clientHeight;
		if (mini.__LastWindowWidth == _ && mini.__LastWindowHeight == $);
		else {
			mini.__LastWindowWidth = _;
			mini.__LastWindowHeight = $;
			mini.layout(null, false)
		}
		mini.doWindowResizeTimer = null
	}, 300);
	else {
		var $ = 100;
		try {
			if (parent && parent != window && parent.mini) $ = 0
		} catch (_) {}
		mini.doWindowResizeTimer = setTimeout(function() {
			var _ = document.documentElement.clientWidth,
				$ = document.documentElement.clientHeight;
			if (mini.__LastWindowWidth == _ && mini.__LastWindowHeight == $);
			else {
				mini.__LastWindowWidth = _;
				mini.__LastWindowHeight = $;
				mini.layout(null, false)
			}
			mini.doWindowResizeTimer = null
		}, $)
	}
};
mini[O0110l] = function(_, A) {
	var $ = A || document.body;
	while (1) {
		if (_ == null || !_.style) return false;
		if (_ && _.style && _.style.display == "none") return false;
		if (_ == $) return true;
		_ = _.parentNode
	}
	return true
};
mini.isWindowDisplay = function() {
	try {
		var _ = window.parent,
			E = _ != window;
		if (E) {
			var C = _.document.getElementsByTagName("iframe"),
				H = _.document.getElementsByTagName("frame"),
				G = [];
			for (var $ = 0, D = C.length; $ < D; $++) G.push(C[$]);
			for ($ = 0, D = H.length; $ < D; $++) G.push(H[$]);
			var B = null;
			for ($ = 0, D = G.length; $ < D; $++) {
				var A = G[$];
				if (A.contentWindow == window) {
					B = A;
					break
				}
			}
			if (!B) return false;
			return mini[O0110l](B, _.document.body)
		} else return true
	} catch (F) {
		return true
	}
};
o101 = mini.isWindowDisplay();
mini.layoutIFrames = function($) {
	if (!$) $ = document.body;
	if (!$) return;
	var _ = $.getElementsByTagName("iframe");
	setTimeout(function() {
		for (var A = 0, C = _.length; A < C; A++) {
			var B = _[A];
			try {
				if (mini[O0110l](B) && Oo11($, B)) {
					if (B.contentWindow.mini) if (B.contentWindow.o101 == false) {
						B.contentWindow.o101 = B.contentWindow.mini.isWindowDisplay();
						B.contentWindow.mini.layout()
					} else B.contentWindow.mini.layout(null, false);
					B.contentWindow.mini.layoutIFrames()
				}
			} catch (D) {}
		}
	}, 30)
};
$.ajaxSetup({
	cache: false
});
if (isIE) setInterval(function() {
	CollectGarbage()
}, 1000);
mini_unload = function(H) {
	try {
		var E = mini._getTopWindow();
		E[mini._WindowID] = "";
		delete E[mini._WindowID]
	} catch (D) {}
	var G = document.body.getElementsByTagName("iframe");
	if (G.length > 0) {
		var F = [];
		for (var $ = 0, C = G.length; $ < C; $++) F.push(G[$]);
		for ($ = 0, C = F.length; $ < C; $++) {
			try {
				var B = F[$];
				B._ondestroy = null;
				B.src = "";
				try {
					B.contentWindow.document.write("");
					B.contentWindow.document.close()
				} catch (D) {}
				if (B.parentNode) B.parentNode.removeChild(B)
			} catch (H) {}
		}
	}
	var A = mini.getComponents();
	for ($ = 0, C = A.length; $ < C; $++) {
		var _ = A[$];
		if (_.destroyed !== true) _[OoOO0o](false)
	}
	A.length = 0;
	A = null;
	lOOo(window, "unload", mini_unload);
	lOOo(window, "load", mini_onload);
	lOOo(window, "resize", mini_onresize);
	mini.components = {};
	mini.classes = {};
	mini.uiClasses = {};
	mini.uids = {};
	mini._topWindow = null;
	window.mini = null;
	window.Owner = null;
	window.CloseOwnerWindow = null;
	try {
		CollectGarbage()
	} catch (H) {}
};
o1ol0o(window, "unload", mini_unload);

function __OnIFrameMouseDown() {
	jQuery(document).trigger("mousedown")
}
function _lo11o() {
	var C = document.getElementsByTagName("iframe");
	for (var $ = 0, A = C.length; $ < A; $++) {
		var _ = C[$];
		try {
			if (_.contentWindow) _.contentWindow.document.onmousedown = __OnIFrameMouseDown
		} catch (B) {}
	}
}
setInterval(function() {
	_lo11o()
}, 1500);
mini.zIndex = 1000;
mini.getMaxZIndex = function() {
	return mini.zIndex++
};

function js_isTouchDevice() {
	try {
		document.createEvent("TouchEvent");
		return true
	} catch ($) {
		return false
	}
}
function js_touchScroll(A) {
	if (js_isTouchDevice()) {
		var _ = typeof A == "string" ? document.getElementById(A) : A,
			$ = 0;
		_.addEventListener("touchstart", function(_) {
			$ = this.scrollTop + _.touches[0].pageY;
			_.preventDefault()
		}, false);
		_.addEventListener("touchmove", function(_) {
			this.scrollTop = $ - _.touches[0].pageY;
			_.preventDefault()
		}, false)
	}
}
mini._placeholder = function(A) {
	A = O10l01(A);
	if (!A || !isIE || isIE10) return;

	function $() {
		var _ = A._placeholder_label;
		if (!_) return;
		var $ = A.getAttribute("placeholder");
		if (!$) $ = A.placeholder;
		if (!A.value && !A.disabled) {
			_.innerHTML = $;
			_.style.display = ""
		} else _.style.display = "none"
	}
	if (A._placeholder) {
		$();
		return
	}
	A._placeholder = true;
	var _ = document.createElement("label");
	_.className = "mini-placeholder-label";
	A.parentNode.appendChild(_);
	A._placeholder_label = _;
	_.onmousedown = function() {
		A[ool00o]()
	};
	A.onpropertychange = function(_) {
		_ = _ || window.event;
		if (_.propertyName == "value") $()
	};
	$();
	o1ol0o(A, "focus", function($) {
		if (!A[Oll10l]) _.style.display = "none"
	});
	o1ol0o(A, "blur", function(_) {
		$()
	})
};
mini.ajax = function($) {
	if (!$.dataType) $.dataType = "text";
	return window.jQuery.ajax($)
};
if (typeof window.rootpath == "undefined") rootpath = "/";
mini.loadJS = function(_, $) {
	if (!_) return;
	if (typeof $ == "function") return loadJS._async(_, $);
	else return loadJS._sync(_)
};
mini.loadJS._js = {};
mini.loadJS._async = function(D, _) {
	var C = mini.loadJS._js[D];
	if (!C) C = mini.loadJS._js[D] = {
		create: false,
		loaded: false,
		callbacks: []
	};
	if (C.loaded) {
		setTimeout(function() {
			_()
		}, 1);
		return
	} else {
		C.callbacks.push(_);
		if (C.create) return
	}
	C.create = true;
	var B = document.getElementsByTagName("head")[0],
		A = document.createElement("script");
	A.src = D;
	A.type = "text/javascript";

	function $() {
		for (var $ = 0; $ < C.callbacks.length; $++) {
			var _ = C.callbacks[$];
			if (_) _()
		}
		C.callbacks.length = 0
	}
	setTimeout(function() {
		if (document.all) A.onreadystatechange = function() {
			if (A.readyState == "loaded" || A.readyState == "complete") {
				$();
				C.loaded = true
			}
		};
		else A.onload = function() {
			$();
			C.loaded = true
		};
		B.appendChild(A)
	}, 1);
	return A
};
mini.loadJS._sync = function(A) {
	if (loadJS._js[A]) return;
	loadJS._js[A] = {
		create: true,
		loaded: true,
		callbacks: []
	};
	var _ = document.getElementsByTagName("head")[0],
		$ = document.createElement("script");
	$.type = "text/javascript";
	$.text = loadText(A);
	_.appendChild($);
	return $
};
mini.loadText = function(C) {
	var B = "",
		D = document.all && location.protocol == "file:",
		A = null;
	if (D) A = new ActiveXObject("Microsoft.XMLHTTP");
	else if (window.XMLHttpRequest) A = new XMLHttpRequest();
	else if (window.ActiveXObject) A = new ActiveXObject("Microsoft.XMLHTTP");
	A.onreadystatechange = $;
	var _ = "_t=" + new Date()[o1oo0O]();
	if (C[o0oOOo]("?") == -1) _ = "?" + _;
	else _ = "&" + _;
	C += _;
	A.open("GET", C, false);
	A.send(null);

	function $() {
		if (A.readyState == 4) {
			var $ = D ? 0 : 200;
			if (A.status == $) B = A.responseText
		}
	}
	return B
};
mini.loadJSON = function(url) {
	var text = loadText(url),
		o = eval("(" + text + ")");
	return o
};
mini.loadCSS = function(A, B) {
	if (!A) return;
	if (loadCSS._css[A]) return;
	var $ = document.getElementsByTagName("head")[0],
		_ = document.createElement("link");
	if (B) _.id = B;
	_.href = A;
	_.rel = "stylesheet";
	_.type = "text/css";
	$.appendChild(_);
	return _
};
mini.loadCSS._css = {};
mini.innerHTML = function(A, _) {
	if (typeof A == "string") A = document.getElementById(A);
	if (!A) return;
	_ = "<div style=\"display:none\">&nbsp;</div>" + _;
	A.innerHTML = _;
	mini.__executeScripts(A);
	var $ = A.firstChild
};
mini.__executeScripts = function($) {
	var A = $.getElementsByTagName("script");
	for (var _ = 0, E = A.length; _ < E; _++) {
		var B = A[_],
			D = B.src;
		if (D) mini.loadJS(D);
		else {
			var C = document.createElement("script");
			C.type = "text/javascript";
			C.text = B.text;
			$.appendChild(C)
		}
	}
	for (_ = A.length - 1; _ >= 0; _--) {
		B = A[_];
		B.parentNode.removeChild(B)
	}
};
OooOlO = function() {
	this._bindFields = [];
	this._bindForms = [];
	OooOlO[lO0010][llo0oo][o0OoO0](this)
};
loOo0(OooOlO, l1l11l, {});
oo000 = OooOlO[O0lOl0];
oo000.O0001o = ll001;
oo000.l0ooOl = Ollo1;
oo000[ll0OoO] = o001l;
oo000[o0lol1] = Ooo10;
l1O011(OooOlO, "databinding");
l1111l = function() {
	this._sources = {};
	this._data = {};
	this._links = [];
	this.Oo0o = {};
	l1111l[lO0010][llo0oo][o0OoO0](this)
};
loOo0(l1111l, l1l11l, {});
o001O = l1111l[O0lOl0];
o001O.oo1oO1 = Ol101;
o001O.looo0l = lool;
o001O.ll01Ol = ol10oo;
o001O.O0OO = l01Oo;
o001O.O1loo0 = l0loO;
o001O.ol0lO0 = l1OO;
o001O.l1O0O1 = loOoo;
o001O[llO0l0] = l1ll0;
o001O[lO0O1l] = oo110;
o001O[lOl1ol] = Ooooo;
o001O[l10o01] = ooooO;
l1O011(l1111l, "dataset");
l1lO0l = function() {
	l1lO0l[lO0010][llo0oo][o0OoO0](this)
};
loOo0(l1lO0l, l1lloO, {
	_clearBorder: false,
	formField: true,
	value: "",
	uiCls: "mini-hidden"
});
O1lo0 = l1lO0l[O0lOl0];
O1lo0[l10lOo] = ooO1;
O1lo0[lO11o0] = oOo01l;
O1lo0[l1ol] = O1l00;
O1lo0[l0000l] = lO0oll;
O1lo0[ooooll] = O1oOo;
l1O011(l1lO0l, "hidden");
ol0o01 = function() {
	ol0o01[lO0010][llo0oo][o0OoO0](this);
	this[l1Oool](false);
	this[Oo0Ol1](this.allowDrag);
	this[loO0lO](this[Olo1lO])
};
loOo0(ol0o01, mini.Container, {
	_clearBorder: false,
	uiCls: "mini-popup"
});
OoOl = ol0o01[O0lOl0];
OoOl[lo0O00] = llooo;
OoOl[OoO1o0] = Ol0lo;
OoOl[lOO0O1] = l1ool;
OoOl[o010Oo] = ll11;
OoOl[OoOO0o] = lo101;
OoOl[l11ol1] = O11ol;
OoOl[lO01o0] = O1loO;
OoOl[ooooll] = O0l0o;
l1O011(ol0o01, "popup");
ol0o01_prototype = {
	isPopup: false,
	popupEl: null,
	popupCls: "",
	showAction: "mouseover",
	hideAction: "outerclick",
	showDelay: 300,
	hideDelay: 500,
	xAlign: "left",
	yAlign: "below",
	xOffset: 0,
	yOffset: 0,
	minWidth: 50,
	minHeight: 25,
	maxWidth: 2000,
	maxHeight: 2000,
	showModal: false,
	showShadow: true,
	modalStyle: "opacity:0.2",
	l1oloo: "mini-popup-drag",
	OOl1o: "mini-popup-resize",
	allowDrag: false,
	allowResize: false,
	oO01oO: function() {
		if (!this.popupEl) return;
		lOOo(this.popupEl, "click", this.Oo00Ol, this);
		lOOo(this.popupEl, "contextmenu", this.o1oooO, this);
		lOOo(this.popupEl, "mouseover", this.oO11O1, this)
	},
	lo0ll: function() {
		if (!this.popupEl) return;
		o1ol0o(this.popupEl, "click", this.Oo00Ol, this);
		o1ol0o(this.popupEl, "contextmenu", this.o1oooO, this);
		o1ol0o(this.popupEl, "mouseover", this.oO11O1, this)
	},
	doShow: function(A) {
		var $ = {
			popupEl: this.popupEl,
			htmlEvent: A,
			cancel: false
		};
		this[lO0OoO]("BeforeOpen", $);
		if ($.cancel == true) return;
		this[lO0OoO]("opening", $);
		if ($.cancel == true) return;
		if (!this.popupEl) this[l1lool]();
		else {
			var _ = {};
			if (A) _.xy = [A.pageX, A.pageY];
			this[O01O1o](this.popupEl, _)
		}
	},
	doHide: function(_) {
		var $ = {
			popupEl: this.popupEl,
			htmlEvent: _,
			cancel: false
		};
		this[lO0OoO]("BeforeClose", $);
		if ($.cancel == true) return;
		this.close()
	},
	show: function(_, $) {
		this[ooll0l](_, $)
	},
	showAtPos: function(B, A) {
		this[loOlo0](document.body);
		if (!B) B = "center";
		if (!A) A = "middle";
		this.el.style.position = "absolute";
		this.el.style.left = "-2000px";
		this.el.style.top = "-2000px";
		this.el.style.display = "";
		this.lOloO();
		var _ = mini[oOOo1O](),
			$ = oo0OlO(this.el);
		if (B == "left") B = 0;
		if (B == "center") B = _.width / 2 - $.width / 2;
		if (B == "right") B = _.width - $.width;
		if (A == "top") A = 0;
		if (A == "middle") A = _.y + _.height / 2 - $.height / 2;
		if (A == "bottom") A = _.height - $.height;
		if (B + $.width > _.right) B = _.right - $.width;
		if (A + $.height > _.bottom) A = _.bottom - $.height - 20;
		this.Oolo0l(B, A)
	},
	lool1l: function() {
		jQuery(this.OlO0l1).remove();
		if (!this[oo00lo]) return;
		if (this.visible == false) return;
		var $ = document.documentElement,
			A = parseInt(Math[oolOo0](document.body.scrollWidth, $ ? $.scrollWidth : 0)),
			D = parseInt(Math[oolOo0](document.body.scrollHeight, $ ? $.scrollHeight : 0)),
			C = mini[oOOo1O](),
			B = C.height;
		if (B < D) B = D;
		var _ = C.width;
		if (_ < A) _ = A;
		this.OlO0l1 = mini.append(document.body, "<div class=\"mini-modal\"></div>");
		this.OlO0l1.style.height = B + "px";
		this.OlO0l1.style.width = _ + "px";
		this.OlO0l1.style.zIndex = llo0o(this.el, "zIndex") - 1;
		llO0l(this.OlO0l1, this.modalStyle)
	},
	O11ol1: function() {
		if (!this.shadowEl) this.shadowEl = mini.append(document.body, "<div class=\"mini-shadow\"></div>");
		this.shadowEl.style.display = this[lO0o] ? "" : "none";
		if (this[lO0o]) {
			function $() {
				this.shadowEl.style.display = "";
				var $ = oo0OlO(this.el),
					A = this.shadowEl.style;
				A.width = $.width + "px";
				A.height = $.height + "px";
				A.left = $.x + "px";
				A.top = $.y + "px";
				var _ = llo0o(this.el, "zIndex");
				if (!isNaN(_)) this.shadowEl.style.zIndex = _ - 2
			}
			this.shadowEl.style.display = "none";
			if (this.O11ol1Timer) {
				clearTimeout(this.O11ol1Timer);
				this.O11ol1Timer = null
			}
			var _ = this;
			this.O11ol1Timer = setTimeout(function() {
				_.O11ol1Timer = null;
				$[o0OoO0](_)
			}, 20)
		}
	},
	lOloO: function() {
		this.el.style.display = "";
		var $ = oo0OlO(this.el);
		if ($.width > this.maxWidth) {
			oOl1O(this.el, this.maxWidth);
			$ = oo0OlO(this.el)
		}
		if ($.height > this.maxHeight) {
			oOoOoO(this.el, this.maxHeight);
			$ = oo0OlO(this.el)
		}
		if ($.width < this.minWidth) {
			oOl1O(this.el, this.minWidth);
			$ = oo0OlO(this.el)
		}
		if ($.height < this.minHeight) {
			oOoOoO(this.el, this.minHeight);
			$ = oo0OlO(this.el)
		}
	},
	showAtEl: function(H, D) {
		H = O10l01(H);
		if (!H) return;
		if (!this[O0Ol01]() || this.el.parentNode != document.body) this[loOlo0](document.body);
		var A = {
			xAlign: this.xAlign,
			yAlign: this.yAlign,
			xOffset: this.xOffset,
			yOffset: this.yOffset,
			popupCls: this.popupCls
		};
		mini.copyTo(A, D);
		ollool(H, A.popupCls);
		H.popupCls = A.popupCls;
		this._popupEl = H;
		this.el.style.position = "absolute";
		this.el.style.left = "-2000px";
		this.el.style.top = "-2000px";
		this.el.style.display = "";
		this[l11ol1]();
		this.lOloO();
		var J = mini[oOOo1O](),
			B = oo0OlO(this.el),
			L = oo0OlO(H),
			F = A.xy,
			C = A.xAlign,
			E = A.yAlign,
			M = J.width / 2 - B.width / 2,
			K = 0;
		if (F) {
			M = F[0];
			K = F[1]
		}
		switch (A.xAlign) {
		case "outleft":
			M = L.x - B.width;
			break;
		case "left":
			M = L.x;
			break;
		case "center":
			M = L.x + L.width / 2 - B.width / 2;
			break;
		case "right":
			M = L.right - B.width;
			break;
		case "outright":
			M = L.right;
			break;
		default:
			break
		}
		switch (A.yAlign) {
		case "above":
			K = L.y - B.height;
			break;
		case "top":
			K = L.y;
			break;
		case "middle":
			K = L.y + L.height / 2 - B.height / 2;
			break;
		case "bottom":
			K = L.bottom - B.height;
			break;
		case "below":
			K = L.bottom;
			break;
		default:
			break
		}
		M = parseInt(M);
		K = parseInt(K);
		if (A.outYAlign || A.outXAlign) {
			if (A.outYAlign == "above") if (K + B.height > J.bottom) {
				var _ = L.y - J.y,
					I = J.bottom - L.bottom;
				if (_ > I) K = L.y - B.height
			}
			if (A.outXAlign == "outleft") if (M + B.width > J.right) {
				var G = L.x - J.x,
					$ = J.right - L.right;
				if (G > $) M = L.x - B.width
			}
			if (A.outXAlign == "right") if (M + B.width > J.right) M = L.right - B.width;
			this.Oolo0l(M, K)
		} else this[ooll0l](M + A.xOffset, K + A.yOffset)
	},
	Oolo0l: function(A, _) {
		this.el.style.display = "";
		this.el.style.zIndex = mini.getMaxZIndex();
		mini.setX(this.el, A);
		mini.setY(this.el, _);
		this[l1Oool](true);
		if (this.hideAction == "mouseout") o1ol0o(document, "mousemove", this.ol0111, this);
		var $ = this;
		this.O11ol1();
		this.lool1l();
		mini.layoutIFrames(this.el);
		this.isPopup = true;
		o1ol0o(document, "mousedown", this.Oo11O, this);
		o1ol0o(window, "resize", this.OOoo0l, this);
		this[lO0OoO]("Open")
	},
	open: function() {
		this[l1lool]()
	},
	close: function() {
		this[OO111O]()
	},
	hide: function() {
		if (!this.el) return;
		if (this.popupEl) OloO(this.popupEl, this.popupEl.popupCls);
		if (this._popupEl) OloO(this._popupEl, this._popupEl.popupCls);
		this._popupEl = null;
		jQuery(this.OlO0l1).remove();
		if (this.shadowEl) this.shadowEl.style.display = "none";
		lOOo(document, "mousemove", this.ol0111, this);
		lOOo(document, "mousedown", this.Oo11O, this);
		lOOo(window, "resize", this.OOoo0l, this);
		this[l1Oool](false);
		this.isPopup = false;
		this[lO0OoO]("Close")
	},
	setPopupEl: function($) {
		$ = O10l01($);
		if (!$) return;
		this.oO01oO();
		this.popupEl = $;
		this.lo0ll()
	},
	setPopupCls: function($) {
		this.popupCls = $
	},
	setShowAction: function($) {
		this.showAction = $
	},
	setHideAction: function($) {
		this.hideAction = $
	},
	setShowDelay: function($) {
		this.showDelay = $
	},
	setHideDelay: function($) {
		this.hideDelay = $
	},
	setXAlign: function($) {
		this.xAlign = $
	},
	setYAlign: function($) {
		this.yAlign = $
	},
	setxOffset: function($) {
		$ = parseInt($);
		if (isNaN($)) $ = 0;
		this.xOffset = $
	},
	setyOffset: function($) {
		$ = parseInt($);
		if (isNaN($)) $ = 0;
		this.yOffset = $
	},
	setShowModal: function($) {
		this[oo00lo] = $
	},
	setShowShadow: function($) {
		this[lO0o] = $
	},
	setMinWidth: function($) {
		if (isNaN($)) return;
		this.minWidth = $
	},
	setMinHeight: function($) {
		if (isNaN($)) return;
		this.minHeight = $
	},
	setMaxWidth: function($) {
		if (isNaN($)) return;
		this.maxWidth = $
	},
	setMaxHeight: function($) {
		if (isNaN($)) return;
		this.maxHeight = $
	},
	setAllowDrag: function($) {
		this.allowDrag = $;
		OloO(this.el, this.l1oloo);
		if ($) ollool(this.el, this.l1oloo)
	},
	setAllowResize: function($) {
		this[Olo1lO] = $;
		OloO(this.el, this.OOl1o);
		if ($) ollool(this.el, this.OOl1o)
	},
	Oo00Ol: function(_) {
		if (this.lllO0o) return;
		if (this.showAction != "leftclick") return;
		var $ = jQuery(this.popupEl).attr("allowPopup");
		if (String($) == "false") return;
		this.doShow(_)
	},
	o1oooO: function(_) {
		if (this.lllO0o) return;
		if (this.showAction != "rightclick") return;
		var $ = jQuery(this.popupEl).attr("allowPopup");
		if (String($) == "false") return;
		_.preventDefault();
		this.doShow(_)
	},
	oO11O1: function(A) {
		if (this.lllO0o) return;
		if (this.showAction != "mouseover") return;
		var _ = jQuery(this.popupEl).attr("allowPopup");
		if (String(_) == "false") return;
		clearTimeout(this._hideTimer);
		this._hideTimer = null;
		if (this.isPopup) return;
		var $ = this;
		this._showTimer = setTimeout(function() {
			$.doShow(A)
		}, this.showDelay)
	},
	ol0111: function($) {
		if (this.hideAction != "mouseout") return;
		this.O0oo1o($)
	},
	Oo11O: function($) {
		if (this.hideAction != "outerclick") return;
		if (!this.isPopup) return;
		if (this[Olloo0]($) || (this.popupEl && Oo11(this.popupEl, $.target)));
		else this.doHide($)
	},
	O0oo1o: function(_) {
		if (Oo11(this.el, _.target) || (this.popupEl && Oo11(this.popupEl, _.target)));
		else {
			clearTimeout(this._showTimer);
			this._showTimer = null;
			if (this._hideTimer) return;
			var $ = this;
			this._hideTimer = setTimeout(function() {
				$.doHide(_)
			}, this.hideDelay)
		}
	},
	OOoo0l: function($) {
		if (this[O0110l]() && !mini.isIE6) this.lool1l()
	},
	within: function(C) {
		if (Oo11(this.el, C.target)) return true;
		var $ = mini.getChildControls(this);
		for (var _ = 0, B = $.length; _ < B; _++) {
			var A = $[_];
			if (A[Olloo0](C)) return true
		}
		return false
	}
};
mini.copyTo(ol0o01.prototype, ol0o01_prototype);
O0oOo1 = function() {
	O0oOo1[lO0010][llo0oo][o0OoO0](this)
};
loOo0(O0oOo1, l1lloO, {
	text: "",
	iconCls: "",
	iconStyle: "",
	plain: false,
	checkOnClick: false,
	checked: false,
	groupName: "",
	olol: "mini-button-plain",
	_hoverCls: "mini-button-hover",
	l1oolO: "mini-button-pressed",
	llOlO: "mini-button-checked",
	looO: "mini-button-disabled",
	allowCls: "",
	_clearBorder: false,
	uiCls: "mini-button",
	href: "",
	target: ""
});
llOoo0 = O0oOo1[O0lOl0];
llOoo0[lo0O00] = lllO0;
llOoo0[lOoO1o] = Oo0l0l;
llOoo0.Oll1lo = OlO01;
llOoo0.lo1Oll = l0Ool;
llOoo0.l01O10 = oOO1oo;
llOoo0[lOO11o] = O10l;
llOoo0[o1l1oO] = O1l110;
llOoo0[l11111] = ll1110;
llOoo0[loOO01] = l1o0ol;
llOoo0[OollO] = OOloo;
llOoo0[O0lOl1] = Ol01O0;
llOoo0[o1loo1] = l1001;
llOoo0[o0o00O] = loO0;
llOoo0[oOOO11] = OO11l;
llOoo0[O11llo] = Olo0l;
llOoo0[o0l11o] = loOlO1;
llOoo0[lOOOol] = O1O0oO;
llOoo0[o00loo] = Oo00;
llOoo0[o1ol1O] = O1o1;
llOoo0[ll0O1O] = o0lO0;
llOoo0[lO10l0] = l1lOl;
llOoo0[O1l11] = olOoo;
llOoo0[ol1O1O] = O0lOo;
llOoo0[ooool0] = O10Ol;
llOoo0[l1O1Ol] = OoOl0o;
llOoo0[oO0l01] = lOll1O;
llOoo0[Oool01] = loool;
llOoo0[OoOO0o] = OOoOO1;
llOoo0[lO01o0] = lloo0;
llOoo0[ooooll] = O0o1;
llOoo0[OO101l] = oOO1;
l1O011(O0oOo1, "button");
olll0O = function() {
	olll0O[lO0010][llo0oo][o0OoO0](this)
};
loOo0(olll0O, O0oOo1, {
	uiCls: "mini-menubutton",
	allowCls: "mini-button-menu"
});
oOlOl = olll0O[O0lOl0];
oOlOl[ooO10l] = O110O;
oOlOl[lolO11] = Oo1lo;
l1O011(olll0O, "menubutton");
mini.SplitButton = function() {
	mini.SplitButton[lO0010][llo0oo][o0OoO0](this)
};
loOo0(mini.SplitButton, olll0O, {
	uiCls: "mini-splitbutton",
	allowCls: "mini-button-split"
});
l1O011(mini.SplitButton, "splitbutton");
o00OoO = function() {
	o00OoO[lO0010][llo0oo][o0OoO0](this)
};
loOo0(o00OoO, l1lloO, {
	formField: true,
	_clearText: false,
	text: "",
	checked: false,
	defaultValue: false,
	trueValue: true,
	falseValue: false,
	uiCls: "mini-checkbox"
});
l1lo = o00OoO[O0lOl0];
l1lo[lo0O00] = ll0l1;
l1lo.l01o = o00lO;
l1lo[o01100] = Oo1010;
l1lo[OOlo11] = OOlOo1;
l1lo[O1011l] = ooOlll;
l1lo[o0l0oo] = OO0ol;
l1lo[l10lOo] = OlO1O;
l1lo[lO11o0] = O0llOl;
l1lo[l1ol] = O0o010;
l1lo[o1l1oO] = lll10;
l1lo[l11111] = ll000;
l1lo[lO10l0] = o0l01;
l1lo[O1l11] = ol0O0;
l1lo[l0000l] = olo0o;
l1lo[lO01o0] = O0loo;
l1lo[OoOO0o] = oO110;
l1lo[ooooll] = OlOol;
l1O011(o00OoO, "checkbox");
OoO1OO = function() {
	OoO1OO[lO0010][llo0oo][o0OoO0](this);
	var $ = this[OlOOo1]();
	if ($ || this.allowInput == false) this.O0O001[Oll10l] = true;
	if (this.enabled == false) this[Ol0Ooo](this.looO);
	if ($) this[Ol0Ooo](this.lOO0);
	if (this.required) this[Ol0Ooo](this.O11olo)
};
loOo0(OoO1OO, looool, {
	name: "",
	formField: true,
	selectOnFocus: false,
	showClose: false,
	emptyText: "",
	defaultValue: "",
	value: "",
	text: "",
	maxLength: 1000,
	minLength: 0,
	width: 125,
	height: 21,
	inputAsValue: false,
	allowInput: true,
	Oo1O0: "mini-buttonedit-noInput",
	lOO0: "mini-buttonedit-readOnly",
	looO: "mini-buttonedit-disabled",
	oll000: "mini-buttonedit-empty",
	o111oO: "mini-buttonedit-focus",
	lo01lO: "mini-buttonedit-button",
	l0011l: "mini-buttonedit-button-hover",
	Oo000: "mini-buttonedit-button-pressed",
	_closeCls: "mini-buttonedit-close",
	uiCls: "mini-buttonedit",
	lOo10: false,
	_buttonWidth: 20,
	_closeWidth: 20,
	o0lll: null,
	textName: "",
	inputStyle: ""
});
Oolll = OoO1OO[O0lOl0];
Oolll[lo0O00] = OOOlo;
Oolll[l00o00] = l1010;
Oolll[l1111o] = llOlo;
Oolll[OOOlOl] = O0o1l;
Oolll[llo110] = l01ol;
Oolll[o00ooO] = o1010;
Oolll[o1OoO0] = OOo1o;
Oolll[l0lol1] = o1l00;
Oolll[lO10Oo] = Oo0OO;
Oolll[oOolol] = l1O11l;
Oolll[oOooOO] = loOOl;
Oolll.Oo1O = l0000;
Oolll.OOll = lO1l1;
Oolll.Ol101O = lOO01;
Oolll.O001o0 = lo0o1;
Oolll.OlO1oO = Ol00oO;
Oolll.oo0o = O1ol0;
Oolll.O011ll = O0ll0;
Oolll[llOl10] = Oooll;
Oolll[l0o01l] = lOO0O;
Oolll.O0Oo11 = OOolO;
Oolll.Oll1lo = l0O10;
Oolll.lo1Oll = oO0l1;
Oolll.l01O10 = oOOoO;
Oolll.l10OOO = oOolO0;
Oolll[oOO0l1] = lOl10;
Oolll[olllO1] = o1lo1;
Oolll[O0O1O0] = OOoO0;
Oolll[lo00Ol] = OO01l;
Oolll[o1OO1o] = oo0o1;
Oolll.olOOoO = Ollolo;
Oolll[ooO10l] = Oloo0;
Oolll[O0OlOl] = ll011;
Oolll[oloo1o] = oo0oo;
Oolll[Oll0oO] = lo10o;
Oolll[lOOllo] = llO1o;
Oolll[lO0loo] = O0o01;
Oolll[Ol1Ol0] = Ooll;
Oolll.l00oOO = Olo0O;
Oolll[l10lOo] = ll0lo;
Oolll[lO11o0] = oO11l;
Oolll[l1ol] = O1l0;
Oolll[lO10l0] = loo0o;
Oolll[O1l11] = lOlo1;
Oolll[l0000l] = l1oO;
Oolll[llO11l] = loo0oEl;
Oolll[ll1ol0] = o1lOo;
Oolll[loOoOl] = OOllo;
Oolll[ool00o] = o0OOo;
Oolll[lOO0O1] = Oll10;
Oolll[l11ol1] = o1l1o;
Oolll[o00Ol1] = l01lO;
Oolll.O0Olll = OOO0o;
Oolll[lO01o0] = oOloO;
Oolll[OoOO0o] = looolo;
Oolll[ooooll] = o1ol1;
Oolll.oO1lO1Html = lo0O0;
Oolll.oO1lO1sHTML = Oo0O;
Oolll[OO101l] = o1olOO;
l1O011(OoO1OO, "buttonedit");
o0O0oO = function() {
	o0O0oO[lO0010][llo0oo][o0OoO0](this)
};
loOo0(o0O0oO, looool, {
	name: "",
	formField: true,
	selectOnFocus: false,
	minWidth: 10,
	minHeight: 15,
	maxLength: 5000,
	emptyText: "",
	text: "",
	value: "",
	defaultValue: "",
	width: 125,
	height: 21,
	oll000: "mini-textbox-empty",
	o111oO: "mini-textbox-focus",
	looO: "mini-textbox-disabled",
	uiCls: "mini-textbox",
	O01O0l: "text",
	lOo10: false,
	_placeholdered: false,
	o0lll: null,
	inputStyle: "",
	vtype: ""
});
OooOl = o0O0oO[O0lOl0];
OooOl[oOOOo1] = lo00;
OooOl[O11OOl] = oOOl0;
OooOl[OoolOO] = o1lll;
OooOl[oo00Oo] = o1olO;
OooOl[O1oolo] = l1O00l;
OooOl[l11Oo] = Oo01l;
OooOl[oOl111] = oOolo;
OooOl[O00OO0] = lOOll;
OooOl[OoO1oo] = l1111;
OooOl[Oo1O1o] = Ol0oOl;
OooOl[o01Oll] = o00001;
OooOl[OOOlOo] = o1Ol;
OooOl[o00lo1] = Ol0OOo;
OooOl[oOo0Ol] = OOoo0O;
OooOl[OO011l] = lOoOO;
OooOl[O0OOol] = l11Olo;
OooOl[o1lO1l] = l01o1;
OooOl[l1l1l0] = oo1l1;
OooOl[O1O0O1] = oo0lO;
OooOl[O1O1ol] = o1lOOo;
OooOl[llool0] = ll0ll;
OooOl[OO001O] = oO1oOO;
OooOl[ll1o1O] = l0Oll;
OooOl[O1Ol00] = o0011;
OooOl.lo0l0 = O00l0;
OooOl[oOOooo] = o11o0o;
OooOl[O1oOlO] = o0ll1;
OooOl[lo0O00] = o100o;
OooOl[l00o00] = OOo1;
OooOl.O011ll = OOol1;
OooOl.O0Oo11 = l0O00l;
OooOl.Ol101O = o0l1l;
OooOl.O001o0 = O0OoOO;
OooOl.oo0o = OolOO;
OooOl.ooOlOo = oO00O;
OooOl.OlO1oO = loo1O0;
OooOl.lo1Oll = lo1Oo;
OooOl.l10OOO = l001;
OooOl[oOO0l1] = Oo10;
OooOl[llo110] = oo0O;
OooOl[o00ooO] = OlO0o;
OooOl[lll1O0] = o1O1o;
OooOl[llO11l] = O1ol11;
OooOl[ll1ol0] = l10l1o;
OooOl[loOoOl] = O001O1;
OooOl[ool00o] = o1looO;
OooOl[Oool01] = l1O11O;
OooOl[ooO10l] = Oollo;
OooOl[lOol01] = oll00;
OooOl[Oll0oO] = lO1oO;
OooOl.OO0o = lo1lO0;
OooOl[lOOllo] = lOOO;
OooOl[lO0loo] = O1oOl0;
OooOl[Ol1Ol0] = o1l0o1;
OooOl.l00oOO = loO000;
OooOl[lo00Ol] = oOO0O;
OooOl[o1OO1o] = O1Ool;
OooOl[l10lOo] = Ool1;
OooOl[lO11o0] = l0o1o;
OooOl[l1ol] = ol0lo;
OooOl[l0000l] = Oloo;
OooOl[lOO0O1] = o1O0O0;
OooOl[l11ol1] = l1l0Ol;
OooOl[OoOO0o] = oO0o1;
OooOl.O0Olll = O1O1o;
OooOl[lO01o0] = OoO0lo;
OooOl[ooooll] = oOOl;
l1O011(o0O0oO, "textbox");
looloO = function() {
	looloO[lO0010][llo0oo][o0OoO0](this)
};
loOo0(looloO, o0O0oO, {
	uiCls: "mini-password",
	O01O0l: "password"
});
OOl01 = looloO[O0lOl0];
OOl01[Ol1Ol0] = ll0Oll;
l1O011(looloO, "password");
o101o1 = function() {
	o101o1[lO0010][llo0oo][o0OoO0](this)
};
loOo0(o101o1, o0O0oO, {
	maxLength: 10000000,
	width: 180,
	height: 50,
	minHeight: 50,
	O01O0l: "textarea",
	uiCls: "mini-textarea"
});
o0ool = o101o1[O0lOl0];
o0ool[l11ol1] = llll1;
l1O011(o101o1, "textarea");
Oolllo = function() {
	Oolllo[lO0010][llo0oo][o0OoO0](this);
	this[OOllo1]();
	this.el.className += " mini-popupedit"
};
loOo0(Oolllo, OoO1OO, {
	uiCls: "mini-popupedit",
	popup: null,
	popupCls: "mini-buttonedit-popup",
	_hoverCls: "mini-buttonedit-hover",
	l1oolO: "mini-buttonedit-pressed",
	_destroyPopup: true,
	popupWidth: "100%",
	popupMinWidth: 50,
	popupMaxWidth: 2000,
	popupHeight: "",
	popupMinHeight: 30,
	popupMaxHeight: 2000
});
Oolo00 = Oolllo[O0lOl0];
Oolo00[lo0O00] = OooO0;
Oolo00.O01O00 = o01o0;
Oolo00.l01O10 = l1lO0;
Oolo00[ooOll1] = OloO1l;
Oolo00[oO10Oo] = Oo1Ol;
Oolo00[o0OoOO] = o1o1l;
Oolo00[l1ll10] = lo0oo;
Oolo00[oO0l1o] = O1Ol0;
Oolo00[oloOol] = lo0Ol;
Oolo00[O0o11l] = lOl0;
Oolo00[oo0lO1] = O10OO;
Oolo00[O0OoO0] = o01lO;
Oolo00[Oo10oO] = OOlO;
Oolo00[ol0ool] = o1O01;
Oolo00[Oo0O0l] = lo1Ol;
Oolo00[ol0oOo] = lo1l;
Oolo00[o1olo1] = oll1O;
Oolo00.O1OOlo = o1ll;
Oolo00[ll01lO] = olO1;
Oolo00[l11ol1] = lo0oO;
Oolo00[Ool10o] = OO0oo;
Oolo00.l0o1 = o1l110;
Oolo00.ool0l1 = lllo1;
Oolo00[OOllo1] = O100l;
Oolo00[o11o0O] = o0Oll;
Oolo00[lloo01] = O1o0l;
Oolo00[Olloo0] = l1o1o;
Oolo00.oo0o = Ol10l;
Oolo00.lo1Oll = olO1l;
Oolo00.oO1o0O = O111Oo;
Oolo00.oO11O1 = Ol0lO;
Oolo00.O011ll = o000;
Oolo00.olOOo = olOo0;
Oolo00[lO01o0] = loO01;
Oolo00[OoOO0o] = O10lo;
l1O011(Oolllo, "popupedit");
llo001 = function() {
	this.data = [];
	this.columns = [];
	llo001[lO0010][llo0oo][o0OoO0](this);
	var $ = this;
	if (isFirefox) this.O0O001.oninput = function() {
		$.ol0O01()
	}
};
loOo0(llo001, Oolllo, {
	text: "",
	value: "",
	valueField: "id",
	textField: "text",
	delimiter: ",",
	multiSelect: false,
	data: [],
	url: "",
	columns: [],
	allowInput: false,
	valueFromSelect: false,
	popupMaxHeight: 200,
	uiCls: "mini-combobox",
	showNullItem: false
});
lOO1O = llo001[O0lOl0];
lOO1O[lo0O00] = o1O0o;
lOO1O.OlO1oO = l0oOl;
lOO1O[loOo01] = OOoo;
lOO1O.O1OOlo = l0lo1;
lOO1O.OlO0oo = O1Oo;
lOO1O.ol0O01 = O01OO;
lOO1O.Ol101O = o0O01O;
lOO1O.O001o0 = o0lO;
lOO1O.oo0o = l1l0o;
lOO1O.oo00ll = ol00l0;
lOO1O[l0O0Ol] = l0o0OO;
lOO1O[lool1o] = l1lo1;
lOO1O[oolO0] = l1lo1s;
lOO1O.O01lo = o0ll;
lOO1O[lO101l] = ol111;
lOO1O[o1O0l1] = o101O;
lOO1O[ooool1] = O0ol;
lOO1O[lo0Ool] = Ooll0;
lOO1O[l1O1l1] = oo1oo;
lOO1O[lool0O] = ll0Ol;
lOO1O[Oo00o0] = o0Olo;
lOO1O[oO1010] = ll0lO;
lOO1O[lO01O0] = lool0;
lOO1O[Oool1o] = l0oll;
lOO1O[l1ol] = l0ll1;
lOO1O[l0l0O0] = O100O;
lOO1O[Ol0oO1] = oo0l;
lOO1O[ol1ll0] = ol0l1;
lOO1O[oO0o01] = l1O110;
lOO1O[ol0o10] = olOo0O;
lOO1O[oO01] = l0ll1Field;
lOO1O[O0O0O1] = lOll;
lOO1O[lO111l] = o0ooO;
lOO1O[llO0l0] = O1oo0;
lOO1O[lO0l11] = O01l1;
lOO1O[lo0O10] = oOl0O;
lOO1O[OlOl10] = O0ooo1;
lOO1O[oO0l1O] = Ol1o1;
lOO1O[o0oOOo] = l1o01;
lOO1O[O1ooo1] = Ololl;
lOO1O[o00OO0] = o000O;
lOO1O[Ool10o] = o0l0;
lOO1O[OOllo1] = oOo1l;
lOO1O[OO101l] = l0ol0;
l1O011(llo001, "combobox");
loooOo = function() {
	loooOo[lO0010][llo0oo][o0OoO0](this)
};
loOo0(loooOo, Oolllo, {
	format: "yyyy-MM-dd",
	maxDate: null,
	minDate: null,
	popupWidth: "",
	viewDate: new Date(),
	showTime: false,
	timeFormat: "H:mm",
	showTodayButton: true,
	showClearButton: true,
	showOkButton: false,
	uiCls: "mini-datepicker"
});
o1Ol1 = loooOo[O0lOl0];
o1Ol1[lo0O00] = lllol;
o1Ol1.oo0o = Oo1O1;
o1Ol1.OlO1oO = OO10l;
o1Ol1[llOol] = ol11o;
o1Ol1[ollol0] = l1OO1;
o1Ol1[l01Oo0] = lOoo0;
o1Ol1[O10O0] = O0ooo;
o1Ol1[ol1011] = l1lll;
o1Ol1[llll01] = lo00O;
o1Ol1[OO1olo] = o1oOl;
o1Ol1[OoO0OO] = l111o;
o1Ol1[Ooo1o0] = Ol0O1;
o1Ol1[oO1110] = olo0l;
o1Ol1[o1l1lO] = oooOl;
o1Ol1[llOOlO] = lO0O;
o1Ol1[loo1oO] = O0Olo;
o1Ol1[ol1Oo] = Ol010;
o1Ol1[ooO110] = ol11O;
o1Ol1[o1o0l1] = loll;
o1Ol1[l10lOo] = Oo10o;
o1Ol1[lO11o0] = l111l;
o1Ol1[l1ol] = lOlO1;
o1Ol1[O11oo0] = o0o1o;
o1Ol1[Oo1loo] = l1lO1;
o1Ol1.OoloO = looOl;
o1Ol1.O11Ol1 = OOO0O;
o1Ol1.o11O1O = o0101;
o1Ol1.l0o1 = oOoOO;
o1Ol1[Olloo0] = l11lO;
o1Ol1[o1olo1] = Oo101;
o1Ol1[Ool10o] = ollol;
o1Ol1[OOllo1] = ll111;
o1Ol1[o1loo0] = ololl;
l1O011(loooOo, "datepicker");
O1olOO = function() {
	this.viewDate = new Date();
	this.ool0o0 = [];
	O1olOO[lO0010][llo0oo][o0OoO0](this)
};
loOo0(O1olOO, l1lloO, {
	width: 220,
	height: 160,
	_clearBorder: false,
	viewDate: null,
	o0lll1: "",
	ool0o0: [],
	multiSelect: false,
	firstDayOfWeek: 0,
	todayText: "Today",
	clearText: "Clear",
	okText: "OK",
	cancelText: "Cancel",
	daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	format: "MMM,yyyy",
	timeFormat: "H:mm",
	showTime: false,
	currentTime: true,
	rows: 1,
	columns: 1,
	headerCls: "",
	bodyCls: "",
	footerCls: "",
	OOOl0o: "mini-calendar-today",
	o1oo0l: "mini-calendar-weekend",
	O1o1l: "mini-calendar-othermonth",
	o100: "mini-calendar-selected",
	showHeader: true,
	showFooter: true,
	showWeekNumber: false,
	showDaysHeader: true,
	showMonthButtons: true,
	showYearButtons: true,
	showTodayButton: true,
	showClearButton: true,
	showOkButton: false,
	uiCls: "mini-calendar",
	menuEl: null,
	menuYear: null,
	menuSelectMonth: null,
	menuSelectYear: null
});
olooO1 = O1olOO[O0lOl0];
olooO1[lo0O00] = O101;
olooO1.O01lo = l101oO;
olooO1.OOo0O0 = O1l0o1;
olooO1.OoloO = loooO;
olooO1.lo1Oll = oO001;
olooO1.l01O10 = OO1Ol;
olooO1.lOo1o = ooll;
olooO1.oO1l1o = ol11l;
olooO1[OlO1ol] = O0Ol;
olooO1[O1Olo1] = o0oll;
olooO1[O1O1o1] = O0lo1;
olooO1.Ool100 = ooo0o;
olooO1.oo1oOO = oO1ol;
olooO1.o00Ol = o1o0O;
olooO1[Oool01] = lOol0;
olooO1[l11ol1] = O1101;
olooO1[o1l1lO] = Ol1o;
olooO1[llOOlO] = l0ooo;
olooO1[loo1oO] = ll10oo;
olooO1[ol1Oo] = OO0l;
olooO1[Oo00o0] = O0O01o;
olooO1[oO1010] = oOloll;
olooO1[o1OO1l] = O11lO;
olooO1[o1OOo1] = oO1O1;
olooO1[lO01O0] = lO0Oo1;
olooO1[Oool1o] = olOlOl;
olooO1[lo0llO] = oloOl;
olooO1[l10lOo] = oO01O;
olooO1[lO11o0] = olOOO;
olooO1[l1ol] = llooO;
olooO1[o1oo0O] = llO01;
olooO1[lO0lO0] = OO001;
olooO1[lOOO1o] = o101Oo;
olooO1[Ollo00] = l1ol1;
olooO1[O1l100] = ooOO0;
olooO1[ooO110] = O01Oo;
olooO1[o1o0l1] = l11OO1;
olooO1[ol1011] = OlO00o;
olooO1[llll01] = oO10O;
olooO1[OO1olo] = lloll;
olooO1[OoO0OO] = OOO10;
olooO1[Ooo1o0] = lloo;
olooO1[oO1110] = lol0l;
olooO1[lll0lo] = oloO1;
olooO1[l0OO0O] = OoOlO;
olooO1[OO1o1o] = oOOO1;
olooO1[oOO010] = OlO10;
olooO1[o0oo0o] = l1ol0;
olooO1[OOoO1l] = ll1Ol;
olooO1[oOO00l] = l011l;
olooO1[lOoOlo] = ol1o1;
olooO1[l1l11o] = l1lOo;
olooO1[l0OO0o] = OlOl;
olooO1[OlOol1] = o010l;
olooO1[O01l0O] = ool0O;
olooO1[Olloo0] = O1Ooo;
olooO1[O10llO] = O1oO;
olooO1[lO01o0] = O1ll1;
olooO1[OoOO0o] = o0o01;
olooO1[ool00o] = olll0;
olooO1[ooooll] = oloO0;
olooO1[O0lo0l] = Ol0o;
olooO1[lo1ooo] = lolo0;
olooO1[OO010l] = o0l11;
l1O011(O1olOO, "calendar");
o011lo = function() {
	o011lo[lO0010][llo0oo][o0OoO0](this)
};
loOo0(o011lo, lo0OO0, {
	formField: true,
	width: 200,
	columns: null,
	columnWidth: 80,
	showNullItem: false,
	nullItemText: "",
	showEmpty: false,
	emptyText: "",
	showCheckBox: false,
	showAllCheckBox: true,
	multiSelect: false,
	showColumns: true,
	O0O0lo: "mini-listbox-item",
	l0oOOO: "mini-listbox-item-hover",
	_l1000: "mini-listbox-item-selected",
	uiCls: "mini-listbox"
});
lO0oO0 = o011lo[O0lOl0];
lO0oO0[lo0O00] = oOoo;
lO0oO0.l01O10 = O10l0;
lO0oO0.lolo1 = o01011;
lO0oO0.o011O0 = OOlOO;
lO0oO0.O01OOo = l110o0;
lO0oO0[ooool1] = l1OoO;
lO0oO0[lo0Ool] = O00ll;
lO0oO0[l1O1l1] = olOO0;
lO0oO0[lool0O] = oOll0;
lO0oO0[lOl1lo] = l10l1;
lO0oO0[OOoOO0] = o0o1l;
lO0oO0[l1ol11] = OOOll;
lO0oO0[lllllO] = loll0;
lO0oO0[ollo0l] = lOOoO;
lO0oO0[Olol10] = O0ll01;
lO0oO0[l11ol1] = l1110;
lO0oO0[Oool01] = llO10;
lO0oO0[Oo00o0] = o110o;
lO0oO0[oO1010] = OO1o0O;
lO0oO0[OoOO0o] = o1100;
lO0oO0[lO01o0] = Oo1o0;
lO0oO0[ooooll] = Oooo1;
l1O011(o011lo, "listbox");
O1Oo0O = function() {
	O1Oo0O[lO0010][llo0oo][o0OoO0](this)
};
loOo0(O1Oo0O, lo0OO0, {
	formField: true,
	multiSelect: true,
	repeatItems: 0,
	repeatLayout: "none",
	repeatDirection: "horizontal",
	O0O0lo: "mini-checkboxlist-item",
	l0oOOO: "mini-checkboxlist-item-hover",
	_l1000: "mini-checkboxlist-item-selected",
	loOlOl: "mini-checkboxlist-table",
	o0llo: "mini-checkboxlist-td",
	o11l0l: "checkbox",
	uiCls: "mini-checkboxlist"
});
ooo0O = O1Oo0O[O0lOl0];
ooo0O[lo0O00] = l0ll0;
ooo0O[ol00o0] = oOll1;
ooo0O[ll10l] = llOl0;
ooo0O[olloo1] = lOOoo;
ooo0O[oOooo0] = O1oll;
ooo0O[o1l001] = l0l0l;
ooo0O[lo1000] = OlOlo;
ooo0O.O1O001 = oO1ll;
ooo0O.lOol00 = O0l00;
ooo0O[Oool01] = o0l00;
ooo0O.oolooo = Oll0O;
ooo0O[ooooll] = Ool1O;
l1O011(O1Oo0O, "checkboxlist");
o1ol1o = function() {
	o1ol1o[lO0010][llo0oo][o0OoO0](this)
};
loOo0(o1ol1o, O1Oo0O, {
	multiSelect: false,
	O0O0lo: "mini-radiobuttonlist-item",
	l0oOOO: "mini-radiobuttonlist-item-hover",
	_l1000: "mini-radiobuttonlist-item-selected",
	loOlOl: "mini-radiobuttonlist-table",
	o0llo: "mini-radiobuttonlist-td",
	o11l0l: "radio",
	uiCls: "mini-radiobuttonlist"
});
l0o0l = o1ol1o[O0lOl0];
l1O011(o1ol1o, "radiobuttonlist");
O11O1l = function() {
	this.data = [];
	O11O1l[lO0010][llo0oo][o0OoO0](this)
};
loOo0(O11O1l, Oolllo, {
	valueFromSelect: false,
	text: "",
	value: "",
	autoCheckParent: false,
	expandOnLoad: false,
	valueField: "id",
	textField: "text",
	nodesField: "children",
	delimiter: ",",
	multiSelect: false,
	data: [],
	url: "",
	allowInput: false,
	showTreeIcon: false,
	showTreeLines: true,
	resultAsTree: false,
	parentField: "pid",
	checkRecursive: false,
	showFolderCheckBox: false,
	popupHeight: 200,
	popupWidth: "100%",
	popupMaxHeight: 250,
	popupMinWidth: 100,
	uiCls: "mini-treeselect"
});
Oo11l = O11O1l[O0lOl0];
Oo11l[lo0O00] = OlO1l;
Oo11l[l0l0O0] = ll0oO;
Oo11l[lO101l] = lol0ll;
Oo11l[o1O0l1] = llllO;
Oo11l[lol1l0] = O0ol1;
Oo11l[ol11o1] = olo0O;
Oo11l[llOO11] = lllloO;
Oo11l[oOOOo0] = o1oOo;
Oo11l[lOl10l] = O1o1oo;
Oo11l[Oo1lo1] = l1oOl;
Oo11l[oolo1o] = l0OlO;
Oo11l[o0o11] = Olo1O;
Oo11l[llllOO] = l0lOl;
Oo11l[OloOO1] = l0010;
Oo11l[ol0o10] = oo0lo;
Oo11l[oO01] = ll0OO;
Oo11l[oO11lO] = OO00l;
Oo11l[ooo00o] = OO100;
Oo11l[OOl101] = o11O0;
Oo11l[O1110l] = Olol1;
Oo11l[O1O01O] = o1O10;
Oo11l[O10O0l] = oO01o;
Oo11l.OlO0oo = lo010;
Oo11l.oo0o = Olo11;
Oo11l.oll0o1 = olOl1;
Oo11l.oO11o = OOOol;
Oo11l[lO01O0] = oOo0o;
Oo11l[Oool1o] = o0O00;
Oo11l[l1ol] = lOOOO;
Oo11l[oOOolo] = oOo11;
Oo11l[lOoo] = loO0o;
Oo11l[ol1ll0] = oo001;
Oo11l[oO0o01] = o0llO;
Oo11l[O0O0O1] = llool;
Oo11l[lO111l] = oool;
Oo11l[llO0l0] = Ol1OO;
Oo11l[lO0l11] = ll1o1;
Oo11l[OlOl10] = olO0o;
Oo11l[oooO1o] = loOlo;
Oo11l[O1o11O] = olO0oList;
Oo11l[oO0l1O] = oo101;
Oo11l[o0oOOo] = l001O;
Oo11l[O1ooo1] = OO0lO;
Oo11l.O1OOlo = O110;
Oo11l[Ool10o] = o1lol;
Oo11l[Ol0Olo] = l0OoO;
Oo11l[lO1l00] = o0Ol0;
Oo11l[o1O01l] = Oo0lO;
Oo11l[o0O1Oo] = l1oO1;
Oo11l[O1ol0l] = oO1l0;
Oo11l.loo0lo = OO000;
Oo11l.OO00o = O01oo;
Oo11l.Oolo = o1Olo;
Oo11l.oO1l = lool1;
Oo11l[OOllo1] = l100O;
Oo11l[OO101l] = ooO0o;
l1O011(O11O1l, "TreeSelect");
l0olll = function() {
	l0olll[lO0010][llo0oo][o0OoO0](this);
	this[l1ol](this[olOOl])
};
loOo0(l0olll, OoO1OO, {
	value: 0,
	minValue: -100000000000,
	maxValue: 100,
	increment: 1,
	decimalPlaces: 0,
	changeOnMousewheel: true,
	allowLimitValue: true,
	uiCls: "mini-spinner",
	lo1111: null
});
o0O1ol = l0olll[O0lOl0];
o0O1ol[lo0O00] = Ol100;
o0O1ol.OlO1oO = oo1lO;
o0O1ol.l11O0l = Ol0Oo;
o0O1ol.O101o = l01O1;
o0O1ol.oo0o = o1loOO;
o0O1ol.Ol0l1o = ooOOl;
o0O1ol.lo1O = l1OOo;
o0O1ol.Ooool0 = o0loO;
o0O1ol[ooOO1O] = olo0;
o0O1ol[o10O0o] = l0lO1l;
o0O1ol[ooO0Ol] = oO0lo;
o0O1ol[o0l01o] = l0l1O;
o0O1ol[o11l01] = oOl0l;
o0O1ol[l10lO0] = ol000;
o0O1ol[oO0010] = O0lOl;
o0O1ol[OoloO0] = o0111O;
o0O1ol[ooo0l1] = lo10oo;
o0O1ol[O0ool0] = oO10o;
o0O1ol[l1l110] = lllll;
o0O1ol[o10O00] = ollOoO;
o0O1ol[l1ol] = o00lo;
o0O1ol[l10lOo] = O1ool;
o0O1ol.ol1OOo = Oo1Oo;
o0O1ol[lO01o0] = Ol00O;
o0O1ol.oO1lO1Html = l0101;
o0O1ol[OO101l] = ol0loo;
l1O011(l0olll, "spinner");
l11ol0 = function() {
	l11ol0[lO0010][llo0oo][o0OoO0](this);
	this[l1ol]("00:00:00")
};
loOo0(l11ol0, OoO1OO, {
	value: null,
	format: "H:mm:ss",
	uiCls: "mini-timespinner",
	lo1111: null
});
O0ool = l11ol0[O0lOl0];
O0ool[lo0O00] = O0olo;
O0ool.OlO1oO = O1l0Oo;
O0ool.l11O0l = O1oOO;
O0ool.Ol0l1o = OllO1;
O0ool.lo1O = lOOo0;
O0ool.Ooool0 = O00Oo;
O0ool.Oo010l = o1olo;
O0ool[ol0Oo0] = oOl11;
O0ool[l10lOo] = o1ll0;
O0ool[lO11o0] = Oo1oo;
O0ool[l1ol] = OOl0O;
O0ool[O11oo0] = O1l1o;
O0ool[Oo1loo] = ooOl0;
O0ool[lO01o0] = oo00l;
O0ool.oO1lO1Html = O0l01;
l1O011(l11ol0, "timespinner");
oOO0lo = function() {
	oOO0lo[lO0010][llo0oo][o0OoO0](this);
	this[o1Oo11]("validation", this.lo0l0, this)
};
loOo0(oOO0lo, OoO1OO, {
	width: 180,
	buttonText: "\u6d4f\u89c8...",
	_buttonWidth: 56,
	limitType: "",
	limitTypeErrorText: "\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f\u4e3a\uff1a",
	allowInput: false,
	readOnly: true,
	Oo0OO1: 0,
	uiCls: "mini-htmlfile"
});
OO010O = oOO0lo[O0lOl0];
OO010O[lo0O00] = lo1oO;
OO010O[l0OllO] = O0o00;
OO010O[lOol1l] = OO01;
OO010O[Ol00lO] = OoOOO;
OO010O[oO11o0] = O11o0;
OO010O[lO11o0] = Oo011l;
OO010O[l0000l] = ol1o11;
OO010O.lo0l0 = Ol10;
OO010O.oOoO1l = lO0O11;
OO010O.l0l0Ol = l1101o;
OO010O.oO1lO1Html = o1Oo;
OO010O[ooooll] = OO1lo;
l1O011(oOO0lo, "htmlfile");
Oo10o1 = function($) {
	this.postParam = {};
	Oo10o1[lO0010][llo0oo][o0OoO0](this, $);
	this[o1Oo11]("validation", this.lo0l0, this)
};
loOo0(Oo10o1, OoO1OO, {
	width: 180,
	buttonText: "\u6d4f\u89c8...",
	_buttonWidth: 56,
	limitTypeErrorText: "\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f\u4e3a\uff1a",
	readOnly: true,
	Oo0OO1: 0,
	limitSize: "",
	limitType: "",
	typesDescription: "\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f",
	uploadLimit: 0,
	queueLimit: "",
	flashUrl: "",
	uploadUrl: "",
	postParam: null,
	uploadOnSelect: false,
	uiCls: "mini-fileupload"
});
l10O0 = Oo10o1[O0lOl0];
l10O0[lo0O00] = l01lo;
l10O0[o10O1l] = oO0lOo;
l10O0[oOo0O0] = loOO0;
l10O0[loO0oo] = lOo1O;
l10O0[OlO10o] = lll0o;
l10O0[o0o1lo] = o0o0o;
l10O0[O1o1O0] = l00l0;
l10O0[l0000l] = ololo;
l10O0[OO111o] = olool;
l10O0[ololO1] = l1o0l1;
l10O0[O00101] = ll01l;
l10O0[oo0l11] = OloOl;
l10O0[Ol00lO] = O1ol;
l10O0[oO11o0] = l110O;
l10O0[ol1Oo1] = lOll0;
l10O0[lol01l] = lOl00;
l10O0[l0OllO] = lO1ol;
l10O0[lOol1l] = o0lol;
l10O0[ooO01o] = o0Oo;
l10O0[O001lo] = l01o0;
l10O0[OOl1o1] = l0001;
l10O0.oOoO1l = O11Oo;
l10O0[OoOO0o] = ll1Oo;
l10O0.oO1lO1Html = oOo00;
l10O0[ooooll] = O011o;
l1O011(Oo10o1, "fileupload");
l0l10l = function() {
	this.data = [];
	l0l10l[lO0010][llo0oo][o0OoO0](this);
	o1ol0o(this.O0O001, "mouseup", this.o01l01, this);
	this[o1Oo11]("showpopup", this.__OnShowPopup, this)
};
loOo0(l0l10l, Oolllo, {
	allowInput: true,
	valueField: "id",
	textField: "text",
	delimiter: ",",
	multiSelect: false,
	data: [],
	grid: null,
	_destroyPopup: false,
	uiCls: "mini-lookup"
});
O0ooOO = l0l10l[O0lOl0];
O0ooOO[lo0O00] = llO1;
O0ooOO.Oo00o = lol1o1;
O0ooOO.o01l01 = l00o;
O0ooOO.oo0o = l01lOO;
O0ooOO[Oool01] = llOl;
O0ooOO[OllOol] = Oo0ol1;
O0ooOO.O11l00 = OO01O;
O0ooOO[O00l1O] = looo11;
O0ooOO[O1l11] = O0ol0;
O0ooOO[l1ol] = oooo;
O0ooOO.OOo0l1 = O101lO;
O0ooOO.oO1l10 = l01oO;
O0ooOO.Ol1o1O = l0llo;
O0ooOO[oOlO1l] = o0l00o;
O0ooOO[o00oll] = o0Oo1;
O0ooOO[lOlOOo] = o10o;
O0ooOO[ol1ll0] = O0l0O;
O0ooOO[oO0o01] = O0ol0Field;
O0ooOO[ol0o10] = ooOOO;
O0ooOO[oO01] = ooooField;
O0ooOO[OO1O0o] = OoOO0;
O0ooOO[ll10l1] = ll1o0o;
O0ooOO[Oool1o] = O1ol1;
O0ooOO[OoOO0o] = O00o0;
l1O011(l0l10l, "lookup");
oo1O0l = function() {
	oo1O0l[lO0010][llo0oo][o0OoO0](this);
	this.data = [];
	this[Oool01]()
};
loOo0(oo1O0l, looool, {
	formField: true,
	value: "",
	text: "",
	valueField: "id",
	textField: "text",
	url: "",
	delay: 150,
	allowInput: true,
	editIndex: 0,
	o111oO: "mini-textboxlist-focus",
	ll1l0: "mini-textboxlist-item-hover",
	l10O1: "mini-textboxlist-item-selected",
	l10o: "mini-textboxlist-close-hover",
	textName: "",
	uiCls: "mini-textboxlist",
	errorIconEl: null,
	popupLoadingText: "<span class='mini-textboxlist-popup-loading'>Loading...</span>",
	popupErrorText: "<span class='mini-textboxlist-popup-error'>Error</span>",
	popupEmptyText: "<span class='mini-textboxlist-popup-noresult'>No Result</span>",
	isShowPopup: false,
	popupHeight: "",
	popupMinHeight: 30,
	popupMaxHeight: 150,
	searchField: "key"
});
lO110 = oo1O0l[O0lOl0];
lO110[lo0O00] = o11o1;
lO110[Oo0OOO] = oO00o;
lO110[l1o0O1] = lOool;
lO110[loOoOl] = l000l;
lO110[ool00o] = l0o0o;
lO110.oo0o = lO0Oo;
lO110[o00O10] = ll1ol;
lO110.OOo0O0 = lol0O;
lO110.l01O10 = oOO1l;
lO110.oO1o0O = OOOOo;
lO110.oOoO1l = l00o0;
lO110[o1olo1] = O1loo;
lO110[Ool10o] = lO001;
lO110[OOllo1] = O1010;
lO110[Olloo0] = O1o1o;
lO110.oOo010 = l0O0O;
lO110.OlO0oo = OOooO;
lO110.lOo1lO = l0Ooo;
lO110.ll10ll = l1oOo;
lO110[O0l0o1] = Ol0oO;
lO110[oO10Oo] = O01Ol;
lO110[oO0l1o] = loll1;
lO110[ooOll1] = o1o01;
lO110[l1ll10] = lO01l;
lO110[o0OoOO] = l0O00;
lO110[oloOol] = l0olo;
lO110[O0O0O1] = oll0l;
lO110[lO111l] = OOO01;
lO110[lo00Ol] = O0oo0;
lO110[o1OO1o] = olOlO;
lO110[ol1ll0] = Olol0;
lO110[oO0o01] = O0l0l;
lO110[ol0o10] = Ol1lO;
lO110[oO01] = l0lo;
lO110[O1l11] = OooOo;
lO110[l1ol] = olo11;
lO110[l0000l] = lOolO;
lO110[lO11o0] = Ooo1l;
lO110[lO10l0] = OOoo0;
lO110[lll1O0] = o00l0;
lO110.oO1l10 = o00oo;
lO110[ll110l] = ol0oo;
lO110[loll10] = olO00;
lO110.loo11 = o1o0l;
lO110[o00OO0] = O0olO;
lO110[ollO0o] = oll0O;
lO110[oo0oOl] = l000lItem;
lO110[OO0OO] = l10ol;
lO110[oooll] = oo1ol;
lO110[O1ooo1] = OllO0;
lO110.oooOo = OllO0ByEvent;
lO110[Oool01] = O0lol;
lO110[l11ol1] = l01Ooo;
lO110.l10OOO = olO1O;
lO110[oOO0l1] = OoOo1;
lO110.OoOl01 = o1OOO;
lO110[lO01o0] = OO1O1;
lO110[OoOO0o] = O11o1;
lO110[ooooll] = Ollo0;
lO110[o1OoO0] = OOoo0Name;
lO110[l0lol1] = OooOoName;
l1O011(oo1O0l, "textboxlist");
Ool1oo = function() {
	Ool1oo[lO0010][llo0oo][o0OoO0](this);
	var $ = this;
	$.ll1OOo = null;
	this.O0O001.onfocus = function() {
		$.O0lOO0 = $.O0O001.value;
		$.ll1OOo = setInterval(function() {
			if ($.O0lOO0 != $.O0O001.value) {
				$.ol0O01();
				$.O0lOO0 = $.O0O001.value;
				if ($.O0O001.value == "" && $.value != "") {
					$[l1ol]("");
					$.O01lo()
				}
			}
		}, 10)
	};
	this.O0O001.onblur = function() {
		clearInterval($.ll1OOo);
		if (!$[ol0oOo]()) if ($.O0lOO0 != $.O0O001.value) if ($.O0O001.value == "" && $.value != "") {
			$[l1ol]("");
			$.O01lo()
		}
	};
	this._buttonEl.style.display = "none";
	this[o00Ol1]()
};
loOo0(Ool1oo, llo001, {
	url: "",
	allowInput: true,
	delay: 150,
	searchField: "key",
	minChars: 0,
	_buttonWidth: 0,
	uiCls: "mini-autocomplete",
	popupLoadingText: "<span class='mini-textboxlist-popup-loading'>Loading...</span>",
	popupErrorText: "<span class='mini-textboxlist-popup-error'>Error</span>",
	popupEmptyText: "<span class='mini-textboxlist-popup-noresult'>No Result</span>"
});
l010l = Ool1oo[O0lOl0];
l010l[lo0O00] = ll100;
l010l.OlO0oo = O01lO;
l010l.ol0O01 = Ol0OO;
l010l[O0l0o1] = ll0oo;
l010l.oo0o = O1OlO;
l010l[Ool10o] = O0OO1;
l010l[Oo0OOO] = O11Ol;
l010l[l1o0O1] = lOlol;
l010l[l1000O] = l0llO;
l010l[ol1l0] = ll0O1;
l010l[O1l11] = l1Oll;
l010l[l1ol] = OOlO1;
l010l[lO111l] = O11oo;
l1O011(Ool1oo, "autocomplete");
mini.Form = function($) {
	this.el = O10l01($);
	if (!this.el) throw new Error("form element not null");
	mini.Form[lO0010][llo0oo][o0OoO0](this)
};
loOo0(mini.Form, l1l11l, {
    el: null,
    getFields: function () {
        if (!this.el) return [];
        var $ = mini.findControls(function ($) {
            if (!$.el || $.formField != true) return false;
            if (Oo11(this.el, $.el)) return true;
            return false
        }, this);
        return $
    },
    getFieldsMap: function () {
        var B = this.getFields(),
			A = {};
        for (var $ = 0, C = B.length; $ < C; $++) {
            var _ = B[$];
            if (_.name) A[_.name] = _
        }
        return A
    },
    getField: function ($) {
        if (!this.el) return null;
        return mini[OloO00]($, this.el)
    },
    getData: function (B, F) {
        if (mini.isNull(F)) F = true;
        var A = B ? "getFormValue" : "getValue",
			$ = this.getFields(),
			D = {};
        for (var _ = 0, E = $.length; _ < E; _++) {
            var C = $[_],
				G = C[A];
            if (!G) continue;
            if (C.name) if (F == true) mini._setMap(C.name, G[o0OoO0](C), D);
            else D[C.name] = G[o0OoO0](C);
            if (C.textName && C[lO10l0]) if (F == true) D[C.textName] = C[lO10l0]();
            else mini._setMap(C.textName, C[lO10l0](), D)
        }
        return D
    },
    setData: function (F, A, C) {
        if (mini.isNull(C)) C = true;
        if (typeof F != "object") F = {};
        var B = this.getFieldsMap();
        for (var D in B) {
            var _ = B[D];
            if (!_) continue;
            if (_[l1ol]) {
                var E = F[D];
                if (C == true) E = mini._getMap(D, F);
                if (E === undefined && A === false) continue;
                if (E === null) E = "";
                _[l1ol](E)
            }
            if (_[O1l11] && _.textName) {
                var $ = F[_.textName];
                if (C == true) $ = mini._getMap(_.textName, F);
                if (mini.isNull($)) $ = "";
                _[O1l11]($)
            }
        }
    },
    reset: function () {
        var $ = this.getFields();
        for (var _ = 0, B = $.length; _ < B; _++) {
            var A = $[_];
            if (!A[l1ol]) continue;
            if (A[O1l11] && A._clearText !== false) A[O1l11]("");
            A[l1ol](A[OO0oo1])
        }
        this[Oo11o1](true)
    },
    clear: function () {
        var $ = this.getFields();
        for (var _ = 0, B = $.length; _ < B; _++) {
            var A = $[_];
            if (!A[l1ol]) continue;
            if (A[O1l11] && A._clearText !== false) A[O1l11]("");
            A[l1ol]("")
        }
        this[Oo11o1](true)
    },
    validate: function (C) {
        var $ = this.getFields();
        for (var _ = 0, D = $.length; _ < D; _++) {
            var A = $[_];
            if (!A[OO01O1]) continue;
            if (A[O0110l] && A[O0110l]()) {
                var B = A[OO01O1]();
                if (B == false && C === false) break
            }
        }
        return this[Oloo0o]()
    },
    setIsValid: function (B) {
        var $ = this.getFields();
        for (var _ = 0, C = $.length; _ < C; _++) {
            var A = $[_];
            if (!A[Oo11o1]) continue;
            A[Oo11o1](B)
        }
    },
    isValid: function () {
        var $ = this.getFields();
        for (var _ = 0, B = $.length; _ < B; _++) {
            var A = $[_];
            if (A[O0110l] && A[O0110l]()) {
                if (!A[Oloo0o]) continue;
                if (A[Oloo0o]() == false) return false
            }
        }
        return true
    },
    getErrorTexts: function () {
        var A = [],
			_ = this.getErrors();
        for (var $ = 0, C = _.length; $ < C; $++) {
            var B = _[$];
            A.push(B.errorText)
        }
        return A
    },
    getErrors: function () {
        var A = [],
			$ = this.getFields();
        for (var _ = 0, C = $.length; _ < C; _++) {
            var B = $[_];
            if (!B[Oloo0o]) continue;
            if (B[Oloo0o]() == false) A.push(B)
        }
        return A
    },
    mask: function ($) {
        if (typeof $ == "string") $ = {
            html: $
        };
        $ = $ || {};
        $.el = this.el;
        if (!$.cls) $.cls = this.l0ll0O;
        mini[ol1ll1]($)
    },
    unmask: function () {
        mini[l0o1O0](this.el)
    },
    l0ll0O: "mini-mask-loading",
    loadingMsg: "\u6570\u636e\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u540e...",
    loading: function ($) {
        this[ol1ll1]($ || this.loadingMsg)
    },
    O0001o: function ($) {
        this._changed = true
    },
    _changed: false,
    setChanged: function (A) {
        this._changed = A;
        var $ = this.getFields();
        for (var _ = 0, C = $.length; _ < C; _++) {
            var B = $[_];
            B[o1Oo11]("valuechanged", this.O0001o, this)
        }
    },
    isChanged: function () {
        return this._changed
    },
    setEnabled: function (A) {
        var $ = this.getFields();
        for (var _ = 0, C = $.length; _ < C; _++) {
            var B = $[_];
            B[ooO10l](A)
        }
    }
});
ooo0ol = function() {
	ooo0ol[lO0010][llo0oo][o0OoO0](this)
};
loOo0(ooo0ol, mini.Container, {
	style: "",
	_clearBorder: false,
	uiCls: "mini-fit"
});
O0oO0 = ooo0ol[O0lOl0];
O0oO0[lo0O00] = OolO;
O0oO0[l01Oll] = OoOlo0;
O0oO0[l11ol1] = lO1001;
O0oO0[olOOOO] = lO1l01;
O0oO0[lO01o0] = o001oO;
O0oO0[ooooll] = O0lloO;
l1O011(ooo0ol, "fit");
oO010O = function() {
	this.olOOo();
	oO010O[lO0010][llo0oo][o0OoO0](this);
	if (this.url) this[lO111l](this.url);
	this.O10l00 = this.oo1o1l;
	this[lOOOOO]();
	this.l010l0 = new Ol0l10(this);
	this[oo1Oo1]()
};
loOo0(oO010O, mini.Container, {
	width: 250,
	title: "",
	iconCls: "",
	iconStyle: "",
	allowResize: false,
	url: "",
	refreshOnExpand: false,
	maskOnLoad: true,
	showCollapseButton: false,
	showCloseButton: false,
	closeAction: "display",
	showHeader: true,
	showToolbar: false,
	showFooter: false,
	headerCls: "",
	headerStyle: "",
	bodyCls: "",
	bodyStyle: "",
	footerCls: "",
	footerStyle: "",
	toolbarCls: "",
	toolbarStyle: "",
	minWidth: 180,
	minHeight: 100,
	maxWidth: 5000,
	maxHeight: 3000,
	uiCls: "mini-panel",
	ol0l1l: 80,
	expanded: true
});
oOll10 = oO010O[O0lOl0];
oOll10[lo0O00] = l0Ol0l;
oOll10[o0Oll1] = olOo01;
oOll10[OO000o] = O1O1Oo;
oOll10[oOolll] = o11o10;
oOll10[o0oOlo] = oOooo1;
oOll10[llloO0] = o1oO0;
oOll10[loO0lO] = o1O10o;
oOll10[ol0l00] = OlOl1O;
oOll10[lol1Ol] = O1ll0;
oOll10[l0ol1l] = O011O1;
oOll10[OO1lol] = oO1lo;
oOll10[O0O0O1] = O1lOO;
oOll10[lO111l] = ooo11;
oOll10[ooolll] = OO10O;
oOll10[OlOl10] = O1l00O;
oOll10.l10oOl = OOllOl;
oOll10.l1OO0O = l1oolo;
oOll10.OolO1l = O10l0l;
oOll10[o000ll] = o0l0O;
oOll10[o1O00l] = OoOOO0;
oOll10[ooloOl] = o1l01o;
oOll10[l1l100] = O110o0;
oOll10[ollo01] = Ol1l1;
oOll10[llo0Ol] = oll001;
oOll10[o11Ol1] = O10olO;
oOll10[l01Oll] = o0l1O;
oOll10[OoO1o0] = ol01Ol;
oOll10[OOo0ol] = OlOll;
oOll10[OO11o1] = o01OO;
oOll10[l0l0oo] = looo;
oOll10[o1Olol] = Oo1o01;
oOll10[o0O0ll] = oOOll1;
oOll10.olOOo = o1lOO;
oOll10[oOooOO] = loo1;
oOll10.OOll = loo0O;
oOll10.l01O10 = Oo00OO;
oOll10[l1l11o] = O0oO;
oOll10[l0OO0o] = OoOol;
oOll10[o00l11] = lo000;
oOll10[l01O1O] = ooO1o;
oOll10[OlOol1] = lO1o1O;
oOll10[O01l0O] = olO0l;
oOll10[O0o11o] = O0loO;
oOll10[o00011] = o01llO;
oOll10[oo0loo] = l1Ol;
oOll10[o0lo11] = OlOOO1;
oOll10[Ol1o01] = OllO;
oOll10[oo11Ol] = Ooll00;
oOll10[oo1Oo1] = o0oo1;
oOll10[o1ol1O] = OoO0o;
oOll10[ll0O1O] = ll0O;
oOll10[OOOl10] = OOO1O;
oOll10[OOllO1] = l1ll;
oOll10[o01l1o] = oOOOO;
oOll10[looo1o] = O00l;
oOll10[o01111] = oll001Cls;
oOll10[lol0Ol] = oo0llO;
oOll10[l0O11l] = O10olOCls;
oOll10[lOOO0l] = OO101;
oOll10[lo0l0l] = ol01OlCls;
oOll10[oo0lol] = l0llOo;
oOll10[oloo10] = ooOO01;
oOll10[l0o1ll] = olol1;
oOll10[OOOo1O] = oll001Style;
oOll10[o0lOl1] = l01OlO;
oOll10[lO0oOl] = O10olOStyle;
oOll10[oo10Ol] = ol0Oo;
oOll10[oOoOO1] = ol01OlStyle;
oOll10[ll101O] = o00l0l;
oOll10[olo0OO] = lllOo;
oOll10[OOolll] = l01O;
oOll10[lo1oo1] = o0000;
oOll10[Oo1O10] = l1o0O;
oOll10[oOOOO0] = Ooool;
oOll10[Oll1l1] = l10oO;
oOll10[ooll0o] = o00l1;
oOll10[oo0Ol1] = l01Ol;
oOll10[OOO0O0] = OOl1l;
oOll10[l11ol1] = oO11oo;
oOll10[lOOOOO] = lo01O;
oOll10[lO01o0] = ool0l;
oOll10[OoOO0o] = l1oOO;
oOll10[ooooll] = lolO;
oOll10[OO101l] = o1o10;
l1O011(oO010O, "panel");
O1l1oO = function() {
	O1l1oO[lO0010][llo0oo][o0OoO0](this);
	this[Ol0Ooo]("mini-window");
	this[l1Oool](false);
	this[Oo0Ol1](this.allowDrag);
	this[loO0lO](this[Olo1lO])
};
loOo0(O1l1oO, oO010O, {
	x: 0,
	y: 0,
	state: "restore",
	l1oloo: "mini-window-drag",
	OOl1o: "mini-window-resize",
	allowDrag: true,
	showCloseButton: true,
	showMaxButton: false,
	showMinButton: false,
	showCollapseButton: false,
	showModal: true,
	minWidth: 150,
	minHeight: 80,
	maxWidth: 2000,
	maxHeight: 2000,
	uiCls: "mini-window",
	containerEl: null,
	showInBody: true
});
O1l010 = O1l1oO[O0lOl0];
O1l010[O01O1o] = o1O0;
O1l010[lo0O00] = o1ooo;
O1l010[OoOO0o] = Olo01;
O1l010.Oll0l = olooO;
O1l010.OOoo0l = o10l0;
O1l010.OOll = O10110;
O1l010.O1lloO = oo110O;
O1l010.lOloO = OOll1;
O1l010[lOo011] = lloOl;
O1l010[o1l1oo] = OOo0l;
O1l010[OO111O] = O1O11;
O1l010[l1lool] = oO1O0;
O1l010[l011lO] = O0O00;
O1l010[ol110l] = OOoOl;
O1l010[ooll0l] = oO1O0AtPos;
O1l010[Oo0oOl] = l0l11;
O1l010[oolOo0] = o1llO;
O1l010[OOOo00] = O1110;
O1l010[Oolo1l] = lo10O;
O1l010[OOo1l1] = O0llo;
O1l010[o0olOo] = Ooo11;
O1l010[ll0ooo] = Ol0O0;
O1l010[Oo0Ol1] = o01O0;
O1l010[OoO11O] = loOOo;
O1l010[lOOoOl] = OlO11;
O1l010[OlO1l0] = O011;
O1l010[o11o1l] = olO1o;
O1l010[ol01lo] = llO1l;
O1l010[l11llO] = Oo11o;
O1l010[l0OO11] = OO1Oo;
O1l010[OlolOO] = OoO01;
O1l010[oOooO0] = O1oO1;
O1l010[O100oO] = ol1l1;
O1l010[oOO0OO] = ooOOo1;
O1l010.lool1l = Oo01O;
O1l010[l11ol1] = O0o0;
O1l010[lO01o0] = O0Ol0;
O1l010.olOOo = Olo10;
O1l010[ooooll] = o1lo0;
l1O011(O1l1oO, "window");
mini.MessageBox = {
	alertTitle: "\u63d0\u9192",
	confirmTitle: "\u786e\u8ba4",
	prompTitle: "\u8f93\u5165",
	prompMessage: "\u8bf7\u8f93\u5165\u5185\u5bb9\uff1a",
	buttonText: {
		ok: "\u786e\u5b9a",
		cancel: "\u53d6\u6d88",
		yes: "\u662f",
		no: "\u5426"
	},
	show: function(F) {
		F = mini.copyTo({
			width: "auto",
			height: "auto",
			showModal: true,
			minWidth: 150,
			maxWidth: 800,
			minHeight: 100,
			maxHeight: 350,
			showHeader: true,
			title: "",
			titleIcon: "",
			iconCls: "",
			iconStyle: "",
			message: "",
			html: "",
			spaceStyle: "margin-right:15px",
			showCloseButton: true,
			buttons: null,
			buttonWidth: 58,
			callback: null
		}, F);
		var I = F.callback,
			C = new O1l1oO();
		C[oOoOO1]("overflow:hidden");
		C[O100oO](F[oo00lo]);
		C[OOllO1](F.title || "");
		C[ll0O1O](F.titleIcon);
		C[O01l0O](F.showHeader);
		C[oo11Ol](F[l0l1l0]);
		var J = C.uid + "$table",
			O = C.uid + "$content",
			M = "<div class=\"" + F.iconCls + "\" style=\"" + F[oo01Oo] + "\"></div>",
			R = "<table class=\"mini-messagebox-table\" id=\"" + J + "\" style=\"\" cellspacing=\"0\" cellpadding=\"0\"><tr><td>" + M + "</td><td id=\"" + O + "\" class=\"mini-messagebox-content-text\">" + (F.message || "") + "</td></tr></table>",
			_ = "<div class=\"mini-messagebox-content\"></div>" + "<div class=\"mini-messagebox-buttons\"></div>";
		C.oo1o1l.innerHTML = _;
		var N = C.oo1o1l.firstChild;
		if (F.html) {
			if (typeof F.html == "string") N.innerHTML = F.html;
			else if (mini.isElement(F.html)) N.appendChild(F.html)
		} else N.innerHTML = R;
		C._Buttons = [];
		var Q = C.oo1o1l.lastChild;
		if (F.buttons && F.buttons.length > 0) {
			for (var H = 0, D = F.buttons.length; H < D; H++) {
				var E = F.buttons[H],
					K = mini.MessageBox.buttonText[E];
				if (!K) K = E;
				var $ = new O0oOo1();
				$[O1l11](K);
				$[o010Oo](F.buttonWidth);
				$[loOlo0](Q);
				$.action = E;
				$[o1Oo11]("click", function(_) {
					var $ = _.sender;
					if (I) I($.action);
					mini.MessageBox[OO111O](C)
				});
				if (H != D - 1) $[o1OO11](F.spaceStyle);
				C._Buttons.push($)
			}
		} else Q.style.display = "none";
		C[OlolOO](F.minWidth);
		C[l11llO](F.minHeight);
		C[o11o1l](F.maxWidth);
		C[lOOoOl](F.maxHeight);
		C[o010Oo](F.width);
		C[lOO0O1](F.height);
		C[l1lool]();
		var A = C[o1l1oo]();
		C[o010Oo](A);
		var L = C[O10O11]();
		C[lOO0O1](L);
		var B = document.getElementById(J);
		if (B) B.style.width = "100%";
		var G = document.getElementById(O);
		if (G) G.style.width = "100%";
		var P = C._Buttons[0];
		if (P) P[ool00o]();
		else C[ool00o]();
		C[o1Oo11]("beforebuttonclick", function($) {
			if (I) I("close");
			$.cancel = true;
			mini.MessageBox[OO111O](C)
		});
		o1ol0o(C.el, "keydown", function($) {});
		return C.uid
	},
	hide: function(C) {
		if (!C) return;
		var _ = typeof C == "object" ? C : mini.getbyUID(C);
		if (!_) return;
		for (var $ = 0, A = _._Buttons.length; $ < A; $++) {
			var B = _._Buttons[$];
			B[OoOO0o]()
		}
		_._Buttons = null;
		_[OoOO0o]()
	},
	alert: function(A, _, $) {
		return mini.MessageBox[l1lool]({
			minWidth: 250,
			title: _ || mini.MessageBox.alertTitle,
			buttons: ["ok"],
			message: A,
			iconCls: "mini-messagebox-warning",
			callback: $
		})
	},
	confirm: function(A, _, $) {
		return mini.MessageBox[l1lool]({
			minWidth: 250,
			title: _ || mini.MessageBox.confirmTitle,
			buttons: ["ok", "cancel"],
			message: A,
			iconCls: "mini-messagebox-question",
			callback: $
		})
	},
	prompt: function(C, B, A, _) {
		var F = "prompt$" + new Date()[o1oo0O](),
			E = C || mini.MessageBox.promptMessage;
		if (_) E = E + "<br/><textarea id=\"" + F + "\" style=\"width:200px;height:60px;margin-top:3px;\"></textarea>";
		else E = E + "<br/><input id=\"" + F + "\" type=\"text\" style=\"width:200px;margin-top:3px;\"/>";
		var D = mini.MessageBox[l1lool]({
			title: B || mini.MessageBox.promptTitle,
			buttons: ["ok", "cancel"],
			width: 250,
			html: "<div style=\"padding:5px;padding-left:10px;\">" + E + "</div>",
			callback: function(_) {
				var $ = document.getElementById(F);
				if (A) A(_, $.value)
			}
		}),
			$ = document.getElementById(F);
		$[ool00o]();
		return D
	},
	loading: function(_, $) {
		return mini.MessageBox[l1lool]({
			minHeight: 50,
			title: $,
			showCloseButton: false,
			message: _,
			iconCls: "mini-messagebox-waiting"
		})
	}
};
mini.alert = mini.MessageBox.alert;
mini.confirm = mini.MessageBox.confirm;
mini.prompt = mini.MessageBox.prompt;
mini[o0O10O] = mini.MessageBox[o0O10O];
mini.showMessageBox = mini.MessageBox[l1lool];
mini.hideMessageBox = mini.MessageBox[OO111O];
OO0l1o = function() {
	this.l00llo();
	OO0l1o[lO0010][llo0oo][o0OoO0](this)
};
loOo0(OO0l1o, l1lloO, {
	width: 300,
	height: 180,
	vertical: false,
	allowResize: true,
	pane1: null,
	pane2: null,
	showHandleButton: true,
	handlerStyle: "",
	handlerCls: "",
	handlerSize: 5,
	uiCls: "mini-splitter"
});
o10o0 = OO0l1o[O0lOl0];
o10o0[lo0O00] = oOl1lo;
o10o0.O0l01O = Oll11;
o10o0.lo1o1 = ooo00O;
o10o0.OO0O1 = lloO01;
o10o0.O1ooOo = OoOOo;
o10o0.lo1Oll = ol0l0o;
o10o0[oOooOO] = O111O;
o10o0.OOll = lO1OO;
o10o0.l01O10 = OOoloO;
o10o0[lo0ll0] = Olo1;
o10o0[O0o000] = oOO00;
o10o0[llloO0] = o1l0o;
o10o0[loO0lO] = olO0O;
o10o0[ll11oo] = l0o0O;
o10o0[l0ooOO] = l00O1;
o10o0[oo1l0o] = o00O1l;
o10o0[l001l1] = oolOO;
o10o0[o00O0l] = l1oll;
o10o0[lollol] = oOOll;
o10o0[Ol10ll] = llOo1;
o10o0[o00l0O] = OoooOl;
o10o0[Oo1lOo] = l0o0Ol;
o10o0[Oll11l] = oO1o0;
o10o0[l1oOll] = l0010O;
o10o0[ooo0OO] = l01ll;
o10o0[o01o1o] = lolO1;
o10o0[Ol10l1] = l10o0;
o10o0[lool00] = l10o0Box;
o10o0[l11ol1] = O01l;
o10o0[Oool01] = l0Oo1l;
o10o0.l00llo = l1l1l;
o10o0[lO01o0] = Oooo0;
o10o0[ooooll] = O1011;
l1O011(OO0l1o, "splitter");
Oo1O0l = function() {
	this.regions = [];
	this.regionMap = {};
	Oo1O0l[lO0010][llo0oo][o0OoO0](this)
};
loOo0(Oo1O0l, l1lloO, {
	regions: [],
	splitSize: 5,
	collapseWidth: 28,
	collapseHeight: 25,
	regionWidth: 150,
	regionHeight: 80,
	regionMinWidth: 50,
	regionMinHeight: 25,
	regionMaxWidth: 2000,
	regionMaxHeight: 2000,
	uiCls: "mini-layout",
	hoverProxyEl: null
});
l1loO = Oo1O0l[O0lOl0];
l1loO[oOolol] = Oll0o;
l1loO[oOooOO] = OloO1;
l1loO.oO1o0O = OO00OO;
l1loO.oO11O1 = l1l11;
l1loO.Oo1O = ol00;
l1loO.OOll = OlooO;
l1loO.l01O10 = lOoOo;
l1loO.lol1o0 = o00O1;
l1loO.l11lOO = o0oo;
l1loO.l0l1 = lol10l;
l1loO[oOll0o] = o10OOl;
l1loO[Ol1OO0] = oO11Ol;
l1loO[o1o1l0] = OOo1O;
l1loO[l1oOoo] = oll01o;
l1loO[O1O0Ol] = lo0O;
l1loO[o0O0l0] = l0O1O;
l1loO[o10oO0] = o000l;
l1loO[o0Ooo0] = o1OO;
l1loO.O0Oolo = l00oO;
l1loO[o0lOOO] = O100;
l1loO[lOl1oo] = OO0O;
l1loO[l10o0o] = o0110;
l1loO[O00l1l] = ol11oo;
l1loO[o0o1lO] = OololO;
l1loO.l00101 = lO01lO;
l1loO.O0O11l = O0lo0;
l1loO.oO1lO1 = ooll0O;
l1loO[l110l1] = ol01O0;
l1loO[o10oO1] = ol01O0Box;
l1loO[olOoo1] = ol01O0ProxyEl;
l1loO[o1O0oO] = ol01O0SplitEl;
l1loO[O1lOlo] = ol01O0BodyEl;
l1loO[OOlo01] = ol01O0HeaderEl;
l1loO[loo11o] = ol01O0El;
l1loO[lO01o0] = loloO;
l1loO[ooooll] = O0OO0;
mini.copyTo(Oo1O0l.prototype, {
	oo0olo: function(_, A) {
		var C = "<div class=\"mini-tools\">";
		if (A) C += "<span class=\"mini-tools-collapse\"></span>";
		else for (var $ = _.buttons.length - 1; $ >= 0; $--) {
			var B = _.buttons[$];
			C += "<span class=\"" + B.cls + "\" style=\"";
			C += B.style + ";" + (B.visible ? "" : "display:none;") + "\">" + B.html + "</span>"
		}
		C += "</div>";
		C += "<div class=\"mini-layout-region-icon " + _.iconCls + "\" style=\"" + _[oo01Oo] + ";" + ((_[oo01Oo] || _.iconCls) ? "" : "display:none;") + "\"></div>";
		C += "<div class=\"mini-layout-region-title\">" + _.title + "</div>";
		return C
	},
	doUpdate: function() {
		for (var $ = 0, E = this.regions.length; $ < E; $++) {
			var B = this.regions[$],
				_ = B.region,
				A = B._el,
				D = B._split,
				C = B._proxy;
			if (B.cls) ollool(A, B.cls);
			B._header.style.display = B.showHeader ? "" : "none";
			B._header.innerHTML = this.oo0olo(B);
			if (B._proxy) B._proxy.innerHTML = this.oo0olo(B, true);
			if (D) {
				OloO(D, "mini-layout-split-nodrag");
				if (B.expanded == false || !B[Olo1lO]) ollool(D, "mini-layout-split-nodrag")
			}
		}
		this[l11ol1]()
	},
	doLayout: function() {
		if (!this[Ool11l]()) return;
		if (this.lllO0o) return;
		var C = l11ll(this.el, true),
			_ = O1011o(this.el, true),
			D = {
				x: 0,
				y: 0,
				width: _,
				height: C
			},
			I = this.regions.clone(),
			P = this[l110l1]("center");
		I.remove(P);
		if (P) I.push(P);
		for (var K = 0, H = I.length; K < H; K++) {
			var E = I[K];
			E._Expanded = false;
			OloO(E._el, "mini-layout-popup");
			var A = E.region,
				L = E._el,
				F = E._split,
				G = E._proxy;
			if (E.visible == false) {
				L.style.display = "none";
				if (A != "center") F.style.display = G.style.display = "none";
				continue
			}
			L.style.display = "";
			if (A != "center") F.style.display = G.style.display = "";
			var R = D.x,
				O = D.y,
				_ = D.width,
				C = D.height,
				B = E.width,
				J = E.height;
			if (!E.expanded) if (A == "west" || A == "east") {
				B = E.collapseSize;
				oOl1O(L, E.width)
			} else if (A == "north" || A == "south") {
				J = E.collapseSize;
				oOoOoO(L, E.height)
			}
			switch (A) {
			case "north":
				C = J;
				D.y += J;
				D.height -= J;
				break;
			case "south":
				C = J;
				O = D.y + D.height - J;
				D.height -= J;
				break;
			case "west":
				_ = B;
				D.x += B;
				D.width -= B;
				break;
			case "east":
				_ = B;
				R = D.x + D.width - B;
				D.width -= B;
				break;
			case "center":
				break;
			default:
				continue
			}
			if (_ < 0) _ = 0;
			if (C < 0) C = 0;
			if (A == "west" || A == "east") oOoOoO(L, C);
			if (A == "north" || A == "south") oOl1O(L, _);
			var N = "left:" + R + "px;top:" + O + "px;",
				$ = L;
			if (!E.expanded) {
				$ = G;
				L.style.top = "-100px";
				L.style.left = "-1500px"
			} else if (G) {
				G.style.left = "-1500px";
				G.style.top = "-100px"
			}
			$.style.left = R + "px";
			$.style.top = O + "px";
			oOl1O($, _);
			oOoOoO($, C);
			var M = jQuery(E._el).height(),
				Q = E.showHeader ? jQuery(E._header).outerHeight() : 0;
			oOoOoO(E._body, M - Q);
			if (A == "center") continue;
			B = J = E.splitSize;
			R = D.x, O = D.y, _ = D.width, C = D.height;
			switch (A) {
			case "north":
				C = J;
				D.y += J;
				D.height -= J;
				break;
			case "south":
				C = J;
				O = D.y + D.height - J;
				D.height -= J;
				break;
			case "west":
				_ = B;
				D.x += B;
				D.width -= B;
				break;
			case "east":
				_ = B;
				R = D.x + D.width - B;
				D.width -= B;
				break;
			case "center":
				break
			}
			if (_ < 0) _ = 0;
			if (C < 0) C = 0;
			F.style.left = R + "px";
			F.style.top = O + "px";
			oOl1O(F, _);
			oOoOoO(F, C);
			if (E.showSplit && E.expanded && E[Olo1lO] == true) OloO(F, "mini-layout-split-nodrag");
			else ollool(F, "mini-layout-split-nodrag");
			F.firstChild.style.display = E.showSplitIcon ? "block" : "none";
			if (E.expanded) OloO(F.firstChild, "mini-layout-spliticon-collapse");
			else ollool(F.firstChild, "mini-layout-spliticon-collapse")
		}
		mini.layout(this.O1O1o0);
		this[lO0OoO]("layout")
	},
	lo1Oll: function(B) {
		if (this.lllO0o) return;
		if (O111o(B.target, "mini-layout-split")) {
			var A = jQuery(B.target).attr("uid");
			if (A != this.uid) return;
			var _ = this[l110l1](B.target.id);
			if (_.expanded == false || !_[Olo1lO] || !_.showSplit) return;
			this.dragRegion = _;
			var $ = this.O1ooOo();
			$.start(B)
		}
	},
	O1ooOo: function() {
		if (!this.drag) this.drag = new mini.Drag({
			capture: true,
			onStart: mini.createDelegate(this.OO0O1, this),
			onMove: mini.createDelegate(this.lo1o1, this),
			onStop: mini.createDelegate(this.O0l01O, this)
		});
		return this.drag
	},
	OO0O1: function($) {
		this.l100O0 = mini.append(document.body, "<div class=\"mini-resizer-mask\"></div>");
		this.Ooo0O = mini.append(document.body, "<div class=\"mini-proxy\"></div>");
		this.Ooo0O.style.cursor = "n-resize";
		if (this.dragRegion.region == "west" || this.dragRegion.region == "east") this.Ooo0O.style.cursor = "w-resize";
		this.splitBox = oo0OlO(this.dragRegion._split);
		l010(this.Ooo0O, this.splitBox);
		this.elBox = oo0OlO(this.el, true)
	},
	lo1o1: function(C) {
		var I = C.now[0] - C.init[0],
			V = this.splitBox.x + I,
			A = C.now[1] - C.init[1],
			U = this.splitBox.y + A,
			K = V + this.splitBox.width,
			T = U + this.splitBox.height,
			G = this[l110l1]("west"),
			L = this[l110l1]("east"),
			F = this[l110l1]("north"),
			D = this[l110l1]("south"),
			H = this[l110l1]("center"),
			O = G && G.visible ? G.width : 0,
			Q = L && L.visible ? L.width : 0,
			R = F && F.visible ? F.height : 0,
			J = D && D.visible ? D.height : 0,
			P = G && G.showSplit ? O1011o(G._split) : 0,
			$ = L && L.showSplit ? O1011o(L._split) : 0,
			B = F && F.showSplit ? l11ll(F._split) : 0,
			S = D && D.showSplit ? l11ll(D._split) : 0,
			E = this.dragRegion,
			N = E.region;
		if (N == "west") {
			var M = this.elBox.width - Q - $ - P - H.minWidth;
			if (V - this.elBox.x > M) V = M + this.elBox.x;
			if (V - this.elBox.x < E.minWidth) V = E.minWidth + this.elBox.x;
			if (V - this.elBox.x > E.maxWidth) V = E.maxWidth + this.elBox.x;
			mini.setX(this.Ooo0O, V)
		} else if (N == "east") {
			M = this.elBox.width - O - P - $ - H.minWidth;
			if (this.elBox.right - (V + this.splitBox.width) > M) V = this.elBox.right - M - this.splitBox.width;
			if (this.elBox.right - (V + this.splitBox.width) < E.minWidth) V = this.elBox.right - E.minWidth - this.splitBox.width;
			if (this.elBox.right - (V + this.splitBox.width) > E.maxWidth) V = this.elBox.right - E.maxWidth - this.splitBox.width;
			mini.setX(this.Ooo0O, V)
		} else if (N == "north") {
			var _ = this.elBox.height - J - S - B - H.minHeight;
			if (U - this.elBox.y > _) U = _ + this.elBox.y;
			if (U - this.elBox.y < E.minHeight) U = E.minHeight + this.elBox.y;
			if (U - this.elBox.y > E.maxHeight) U = E.maxHeight + this.elBox.y;
			mini.setY(this.Ooo0O, U)
		} else if (N == "south") {
			_ = this.elBox.height - R - B - S - H.minHeight;
			if (this.elBox.bottom - (U + this.splitBox.height) > _) U = this.elBox.bottom - _ - this.splitBox.height;
			if (this.elBox.bottom - (U + this.splitBox.height) < E.minHeight) U = this.elBox.bottom - E.minHeight - this.splitBox.height;
			if (this.elBox.bottom - (U + this.splitBox.height) > E.maxHeight) U = this.elBox.bottom - E.maxHeight - this.splitBox.height;
			mini.setY(this.Ooo0O, U)
		}
	},
	O0l01O: function(B) {
		var C = oo0OlO(this.Ooo0O),
			D = this.dragRegion,
			A = D.region;
		if (A == "west") {
			var $ = C.x - this.elBox.x;
			this[o0Ooo0](D, {
				width: $
			})
		} else if (A == "east") {
			$ = this.elBox.right - C.right;
			this[o0Ooo0](D, {
				width: $
			})
		} else if (A == "north") {
			var _ = C.y - this.elBox.y;
			this[o0Ooo0](D, {
				height: _
			})
		} else if (A == "south") {
			_ = this.elBox.bottom - C.bottom;
			this[o0Ooo0](D, {
				height: _
			})
		}
		jQuery(this.Ooo0O).remove();
		this.Ooo0O = null;
		this.elBox = this.handlerBox = null;
		jQuery(this.l100O0).remove();
		this.l100O0 = null
	},
	llo0: function($) {
		$ = this[l110l1]($);
		if ($._Expanded === true) this.o0o10O($);
		else this.OOO1($)
	},
	OOO1: function(D) {
		if (this.lllO0o) return;
		this[l11ol1]();
		var A = D.region,
			H = D._el;
		D._Expanded = true;
		ollool(H, "mini-layout-popup");
		var E = oo0OlO(D._proxy),
			B = oo0OlO(D._el),
			F = {};
		if (A == "east") {
			var K = E.x,
				J = E.y,
				C = E.height;
			oOoOoO(H, C);
			mini.setX(H, K);
			H.style.top = D._proxy.style.top;
			var I = parseInt(H.style.left);
			F = {
				left: I - B.width
			}
		} else if (A == "west") {
			K = E.right - B.width, J = E.y, C = E.height;
			oOoOoO(H, C);
			mini.setX(H, K);
			H.style.top = D._proxy.style.top;
			I = parseInt(H.style.left);
			F = {
				left: I + B.width
			}
		} else if (A == "north") {
			var K = E.x,
				J = E.bottom - B.height,
				_ = E.width;
			oOl1O(H, _);
			mini[l01o0O](H, K, J);
			var $ = parseInt(H.style.top);
			F = {
				top: $ + B.height
			}
		} else if (A == "south") {
			K = E.x, J = E.y, _ = E.width;
			oOl1O(H, _);
			mini[l01o0O](H, K, J);
			$ = parseInt(H.style.top);
			F = {
				top: $ - B.height
			}
		}
		ollool(D._proxy, "mini-layout-maxZIndex");
		this.lllO0o = true;
		var G = this,
			L = jQuery(H);
		L.animate(F, 250, function() {
			OloO(D._proxy, "mini-layout-maxZIndex");
			G.lllO0o = false
		})
	},
	o0o10O: function(F) {
		if (this.lllO0o) return;
		F._Expanded = false;
		var B = F.region,
			E = F._el,
			D = oo0OlO(E),
			_ = {};
		if (B == "east") {
			var C = parseInt(E.style.left);
			_ = {
				left: C + D.width
			}
		} else if (B == "west") {
			C = parseInt(E.style.left);
			_ = {
				left: C - D.width
			}
		} else if (B == "north") {
			var $ = parseInt(E.style.top);
			_ = {
				top: $ - D.height
			}
		} else if (B == "south") {
			$ = parseInt(E.style.top);
			_ = {
				top: $ + D.height
			}
		}
		ollool(F._proxy, "mini-layout-maxZIndex");
		this.lllO0o = true;
		var A = this,
			G = jQuery(E);
		G.animate(_, 250, function() {
			OloO(F._proxy, "mini-layout-maxZIndex");
			A.lllO0o = false;
			A[l11ol1]()
		})
	},
	OoOl01: function(B) {
		if (this.lllO0o) return;
		for (var $ = 0, A = this.regions.length; $ < A; $++) {
			var _ = this.regions[$];
			if (!_._Expanded) continue;
			if (Oo11(_._el, B.target) || Oo11(_._proxy, B.target));
			else this.o0o10O(_)
		}
	},
	getAttrs: function(A) {
		var H = Oo1O0l[lO0010][lo0O00][o0OoO0](this, A),
			G = jQuery(A),
			E = parseInt(G.attr("splitSize"));
		if (!isNaN(E)) H.splitSize = E;
		var F = [],
			D = mini[Ol0Olo](A);
		for (var _ = 0, C = D.length; _ < C; _++) {
			var B = D[_],
				$ = {};
			F.push($);
			$.cls = B.className;
			$.style = B.style.cssText;
			mini[o0O1l1](B, $, ["region", "title", "iconCls", "iconStyle", "cls", "headerCls", "headerStyle", "bodyCls", "bodyStyle"]);
			mini[OooO00](B, $, ["allowResize", "visible", "showCloseButton", "showCollapseButton", "showSplit", "showHeader", "expanded", "showSplitIcon"]);
			mini[O1l1O](B, $, ["splitSize", "collapseSize", "width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight"]);
			$.bodyParent = B
		}
		H.regions = F;
		return H
	}
});
l1O011(Oo1O0l, "layout");
lloo1o = function() {
	lloo1o[lO0010][llo0oo][o0OoO0](this)
};
loOo0(lloo1o, mini.Container, {
	style: "",
	borderStyle: "",
	bodyStyle: "",
	uiCls: "mini-box"
});
l10oo0 = lloo1o[O0lOl0];
l10oo0[lo0O00] = l0OOOl;
l10oo0[oOoOO1] = OOloll;
l10oo0[l01Oll] = OOol1o;
l10oo0[OoO1o0] = looll0;
l10oo0[l11ol1] = OO0lOO;
l10oo0[lO01o0] = l0l11o;
l10oo0[ooooll] = Ool11;
l1O011(lloo1o, "box");
o0lOo = function() {
	o0lOo[lO0010][llo0oo][o0OoO0](this)
};
loOo0(o0lOo, l1lloO, {
	url: "",
	uiCls: "mini-include"
});
oO0Oo = o0lOo[O0lOl0];
oO0Oo[lo0O00] = l0loOO;
oO0Oo[O0O0O1] = l0O1o;
oO0Oo[lO111l] = loO00;
oO0Oo[l11ol1] = lo1l1;
oO0Oo[lO01o0] = o11O11;
oO0Oo[ooooll] = O0ol10;
l1O011(o0lOo, "include");
O0olO1 = function() {
	this.O0l0oo();
	O0olO1[lO0010][llo0oo][o0OoO0](this)
};
loOo0(O0olO1, l1lloO, {
	activeIndex: -1,
	tabAlign: "left",
	tabPosition: "top",
	showBody: true,
	nameField: "name",
	titleField: "title",
	urlField: "url",
	url: "",
	maskOnLoad: true,
	plain: true,
	bodyStyle: "",
	o0Ool1: "mini-tab-hover",
	olOol0: "mini-tab-active",
	uiCls: "mini-tabs",
	Ooo1O0: 1,
	ol0l1l: 180,
	hoverTab: null
});
ol0olo = O0olO1[O0lOl0];
ol0olo[lo0O00] = oll0oO;
ol0olo[o0looO] = lOl0O;
ol0olo[l0l01o] = lol0o0;
ol0olo[ll0o1O] = lO0l1;
ol0olo.lo001l = lOo11;
ol0olo.OOO10l = l0llO1;
ol0olo.ll0l = lol11o;
ol0olo.oolO0l = o1O11;
ol0olo.o111O = oo1o;
ol0olo.Oll1lo = o0OOO;
ol0olo.lo1Oll = o1O1O1;
ol0olo.oO1o0O = OOOo;
ol0olo.oO11O1 = o110l;
ol0olo.l01O10 = O0O0o0;
ol0olo.OO11lo = o1l0O;
ol0olo[o00ol1] = OO1o00;
ol0olo[o0o00O] = Ol1oOl;
ol0olo[oOOO11] = oo1Ol1;
ol0olo[ol0l00] = o1OOo;
ol0olo[lol1Ol] = Oll0O0;
ol0olo[oo10Ol] = OOOlo1;
ol0olo[oOoOO1] = lO0oO;
ol0olo[o1Ooo1] = oOol;
ol0olo[o1OOOl] = OOlOol;
ol0olo.Oll0l0 = oOlOo0;
ol0olo[o1110] = o110ol;
ol0olo[O11l10] = lO011;
ol0olo[lo000o] = Oo0oo;
ol0olo[o1110] = o110ol;
ol0olo[loo0O1] = OOlll1;
ol0olo.Olo0o0 = O0O0Ol;
ol0olo.ll000o = OooO;
ol0olo.Oll11o = oOO11;
ol0olo[O0llo1] = llo1O;
ol0olo[o0oO1o] = oOlllO;
ol0olo[O0Oll] = l101Oo;
ol0olo[ooloOl] = lOOO10;
ol0olo[ollo01] = oolo;
ol0olo[lO01o1] = OOO11;
ol0olo[l1ooo1] = oOo01;
ol0olo[Ool111] = o1OO01;
ol0olo[l11ol1] = Ol11lo;
ol0olo[OoOloO] = oOl10l;
ol0olo[Oool01] = oool0o;
ol0olo[o000ol] = OOO11Rows;
ol0olo[ll11l0] = lOlOl0;
ol0olo[lolllo] = OOoO01;
ol0olo.l0l110 = l1ol0o;
ol0olo.l1l0ll = loo0O0;
ol0olo[loloOl] = O0O11;
ol0olo.l1OO0O = l0oo0;
ol0olo.OolO1l = ll1lOo;
ol0olo[o10110] = oo1l01;
ol0olo[oloool] = oOl11O;
ol0olo[ol01Oo] = llOl1;
ol0olo[oO01O0] = llO0o1;
ol0olo[l0l010] = OOO01o;
ol0olo[oo00ol] = OOO11s;
ol0olo[lOl001] = o1oO11;
ol0olo[O1lOoO] = O1lll;
ol0olo[oOl001] = O00l0o;
ol0olo[O1o10O] = O0ll1O;
ol0olo[OO0o0O] = OOoO1o;
ol0olo[OlO110] = loo10;
ol0olo[lOOloO] = Ol00OO;
ol0olo[ll101l] = OOO0lO;
ol0olo[O0O0O1] = l00l1;
ol0olo[lO111l] = Ool1O1;
ol0olo[OlOl10] = Ol00l;
ol0olo.l10oOl = O01o;
ol0olo[OlOO10] = l0OO1l;
ol0olo.O0l0oo = ooOOOo;
ol0olo[lO01o0] = ol01o1;
ol0olo.oOll1l = ollO0O;
ol0olo[OoOO0o] = OloO0;
ol0olo[ooooll] = O10O;
ol0olo[OO101l] = l1oo;
l1O011(O0olO1, "tabs");
oo10l1 = function() {
	this.items = [];
	oo10l1[lO0010][llo0oo][o0OoO0](this)
};
loOo0(oo10l1, l1lloO);
mini.copyTo(oo10l1.prototype, ol0o01_prototype);
var ol0o01_prototype_hide = ol0o01_prototype[OO111O];
mini.copyTo(oo10l1.prototype, {
	height: "auto",
	width: "auto",
	minWidth: 140,
	vertical: true,
	allowSelectItem: false,
	ooo10: null,
	_l1000: "mini-menuitem-selected",
	textField: "text",
	resultAsTree: false,
	idField: "id",
	parentField: "pid",
	itemsField: "children",
	showNavArrow: true,
	_clearBorder: false,
	showAction: "none",
	hideAction: "outerclick",
	uiCls: "mini-menu",
	_disableContextMenu: false,
	url: "",
	hideOnClick: true
});
o0Ol00 = oo10l1[O0lOl0];
o0Ol00[lo0O00] = l0Olll;
o0Ol00[oll00o] = l0l01;
o0Ol00[o11Ol1] = l1ooO;
o0Ol00[Oll0o1] = loO0O0;
o0Ol00[oO000o] = oOoll;
o0Ol00[ool1O0] = oOOol;
o0Ol00[l01Ol0] = l0O0l;
o0Ol00[OOOoOO] = l1l011;
o0Ol00[O01l11] = llol;
o0Ol00[Ooo11l] = o11011;
o0Ol00[l11l0o] = O0O1;
o0Ol00[Oo01O1] = o0oo1O;
o0Ol00[O0O0O1] = Oool;
o0Ol00[lO111l] = OOOoOo;
o0Ol00[OlOl10] = lll1O;
o0Ol00[O1o11O] = lll1OList;
o0Ol00.l10oOl = lol0lo;
o0Ol00.lOloO = l11o00;
o0Ol00[l11ol1] = ooo000;
o0Ol00[oO11lO] = O1lo;
o0Ol00[ooo00o] = OOlOl;
o0Ol00[OOloO0] = O1OO;
o0Ol00[OloooO] = lolo;
o0Ol00[OOl101] = oOllo0;
o0Ol00[O1110l] = ll1ol1;
o0Ol00[ol1ll0] = oO0oll;
o0Ol00[oO0o01] = oolll;
o0Ol00[oo0OO1] = lOo1O1;
o0Ol00[oOO1Oo] = loO1;
o0Ol00[l00Olo] = l110o1;
o0Ol00[O0llo0] = OO01o;
o0Ol00[lllO11] = o1o1o;
o0Ol00[ll1oO0] = oo1ol0;
o0Ol00[O1ooo1] = OOlo0;
o0Ol00[O0Ollo] = oooo1;
o0Ol00[l0l010] = lO11Oo;
o0Ol00[lo11Oo] = oo1Oo0;
o0Ol00[ll110l] = O0lo0o;
o0Ol00[O11o00] = o1OO0;
o0Ol00[ll101o] = OOlo0s;
o0Ol00[Oo1Ooo] = o1O1ll;
o0Ol00[llO0l0] = oOoO0;
o0Ol00[lO0l11] = oo0olO;
o0Ol00[O0l110] = lloO00;
o0Ol00[l1OO01] = oO10oO;
o0Ol00[olo1lO] = l01ol0;
o0Ol00[OO111O] = o101O0;
o0Ol00[l1lool] = oOo11l;
o0Ol00[o1lo1l] = lO0lOo;
o0Ol00[lollol] = OOl0l0;
o0Ol00[Ol10ll] = l10l01;
o0Ol00[Olloo0] = oO0O1;
o0Ol00[lO01o0] = O1o00o;
o0Ol00[OoOO0o] = Ooo1;
o0Ol00[ooooll] = O01O;
o0Ol00[OO101l] = oO11oO;
o0Ol00[OloO00] = Ol11Ol;
l1O011(oo10l1, "menu");
oo10l1Bar = function() {
	oo10l1Bar[lO0010][llo0oo][o0OoO0](this)
};
loOo0(oo10l1Bar, oo10l1, {
	uiCls: "mini-menubar",
	vertical: false,
	setVertical: function($) {
		this.vertical = false
	}
});
l1O011(oo10l1Bar, "menubar");
mini.ContextMenu = function() {
	mini.ContextMenu[lO0010][llo0oo][o0OoO0](this)
};
loOo0(mini.ContextMenu, oo10l1, {
	uiCls: "mini-contextmenu",
	vertical: true,
	visible: false,
	_disableContextMenu: true,
	setVertical: function($) {
		this.vertical = true
	}
});
l1O011(mini.ContextMenu, "contextmenu");
O0lOOO = function() {
	O0lOOO[lO0010][llo0oo][o0OoO0](this)
};
loOo0(O0lOOO, l1lloO, {
	text: "",
	iconCls: "",
	iconStyle: "",
	iconPosition: "left",
	showIcon: true,
	showAllow: true,
	checked: false,
	checkOnClick: false,
	groupName: "",
	_hoverCls: "mini-menuitem-hover",
	l1oolO: "mini-menuitem-pressed",
	llOlO: "mini-menuitem-checked",
	_clearBorder: false,
	menu: null,
	uiCls: "mini-menuitem",
	lOo10: false
});
O10000 = O0lOOO[O0lOl0];
O10000[lo0O00] = OO011;
O10000[l0100O] = Ol01l;
O10000[lOoO1o] = o00ll;
O10000.oO1o0O = o0lo1;
O10000.oO11O1 = Oo0ol;
O10000.o01l01 = ol1loo;
O10000.l01O10 = l1ll1;
O10000[OOOOl] = OO1l0;
O10000.lO1ll = o0l0l;
O10000[OO111O] = OoO1o;
O10000[O1Olo1] = OoO1oMenu;
O10000[O1O1o1] = O10O1o;
O10000[oolO1l] = l11Ooo;
O10000[lolO11] = ll00O;
O10000[Ol11o0] = Ol11o;
O10000[O0lOl1] = o0oo0;
O10000[o1loo1] = lOlll;
O10000[o1l1oO] = o1Oll0;
O10000[l11111] = o11O1;
O10000[loOO01] = O10Oo;
O10000[OollO] = OoO11;
O10000[O11llo] = O00ol;
O10000[o0l11o] = oOlo;
O10000[lOOOol] = O0l1l;
O10000[o00loo] = l00l;
O10000[o1ol1O] = Ool0O;
O10000[ll0O1O] = l0Oo1;
O10000[lO10l0] = l0o01;
O10000[O1l11] = Oo0o0;
O10000[Oool01] = l101l;
O10000[oOOol1] = ll0ol;
O10000[Olloo0] = Olo00;
O10000[OoOO0o] = o1101;
O10000.O0Olll = ol10o;
O10000[lO01o0] = o1ooO;
O10000[ooooll] = l1o0o;
l1O011(O0lOOO, "menuitem");
mini.Separator = function() {
	mini.Separator[lO0010][llo0oo][o0OoO0](this)
};
loOo0(mini.Separator, l1lloO, {
	_clearBorder: false,
	uiCls: "mini-separator",
	_create: function() {
		this.el = document.createElement("span");
		this.el.className = "mini-separator"
	}
});
l1O011(mini.Separator, "separator");
l010o0 = function() {
	this.ol0100();
	l010o0[lO0010][llo0oo][o0OoO0](this)
};
loOo0(l010o0, l1lloO, {
	width: 180,
	expandOnLoad: true,
	activeIndex: -1,
	autoCollapse: false,
	groupCls: "",
	groupStyle: "",
	groupHeaderCls: "",
	groupHeaderStyle: "",
	groupBodyCls: "",
	groupBodyStyle: "",
	groupHoverCls: "",
	groupActiveCls: "",
	allowAnim: true,
	uiCls: "mini-outlookbar",
	_GroupId: 1
});
l1OOl = l010o0[O0lOl0];
l1OOl[lo0O00] = llo10;
l1OOl[ol1lO] = O1o10;
l1OOl.l01O10 = l0Oo0;
l1OOl.OOOO = o1Oll;
l1OOl.l0Ol1 = oOlo0;
l1OOl[l1O1o0] = o11l0;
l1OOl[O0Olo1] = oll1o;
l1OOl[lOo10l] = l11ol;
l1OOl[l1110o] = lll1;
l1OOl[Oo0Ool] = o00lo0;
l1OOl[lOOlO] = lo1ll;
l1OOl[o1110] = olo1o;
l1OOl[loo0O1] = ll1lo;
l1OOl[lol1l0] = o10ol;
l1OOl[ol11o1] = O0oOO;
l1OOl[o0lo1l] = l1o0l;
l1OOl[o0OOo0] = Oo001;
l1OOl[ooO0OO] = lOOOo;
l1OOl[lo0oo1] = Ol1Ol;
l1OOl.oolO = o00oO;
l1OOl[lOOo11] = OllOl;
l1OOl.lOoO = l1O00;
l1OOl.l00o11 = llo00;
l1OOl[l11ol1] = O01l0l;
l1OOl[Oool01] = OOo0O;
l1OOl[ooO0Oo] = O0oOo;
l1OOl[l0l010] = lOooo;
l1OOl[lloooo] = ll0o1;
l1OOl[oO0o1O] = o0oOO;
l1OOl[ool0lO] = O0Oo1;
l1OOl[O00ooo] = OllOls;
l1OOl[lllOoo] = l11O0;
l1OOl[O010Ol] = l1llO;
l1OOl.O0Ooo = lOloo;
l1OOl.ol0100 = OOl1O;
l1OOl.o0OO = oo1o0;
l1OOl[lO01o0] = ol01O;
l1OOl[ooooll] = Oo01o;
l1OOl[OO101l] = O0lO0;
l1O011(l010o0, "outlookbar");
ol0Ol0 = function() {
	ol0Ol0[lO0010][llo0oo][o0OoO0](this);
	this.data = []
};
loOo0(ol0Ol0, l010o0, {
	url: "",
	textField: "text",
	iconField: "iconCls",
	urlField: "url",
	resultAsTree: false,
	itemsField: "children",
	idField: "id",
	parentField: "pid",
	style: "width:100%;height:100%;",
	uiCls: "mini-outlookmenu",
	Oo1lOl: null,
	autoCollapse: true,
	activeIndex: 0
});
OOo01 = ol0Ol0[O0lOl0];
OOo01.O00O1l = o0l0o;
OOo01.oo00ll = Ool0l;
OOo01[llolo0] = lo11O;
OOo01[lo0O00] = Ol111;
OOo01[l01l0O] = oO101;
OOo01[oooO1o] = l0110;
OOo01[OO1110] = O10o0;
OOo01[l00ooo] = Ool1o;
OOo01[o1O0O1] = o0Oo0;
OOo01[lool1o] = O0OOo;
OOo01[oO11lO] = Ol0l0;
OOo01[ooo00o] = llOO0;
OOo01[OOloO0] = O11lo;
OOo01[OloooO] = Ol11O;
OOo01[oOOolo] = O10o0sField;
OOo01[lOoo] = l10oo;
OOo01[OOl101] = l1o1l;
OOo01[O1110l] = ol1ol;
OOo01[oOl001] = oo0O0;
OOo01[O1o10O] = O00o;
OOo01[olOO01] = ol001;
OOo01[Oo1o0o] = OO111;
OOo01[ol1ll0] = llOo0;
OOo01[oO0o01] = loO0l;
OOo01[O0O0O1] = oooO1;
OOo01[lO111l] = Oo0Ol;
OOo01[lO0l11] = o11o0;
OOo01[OlOl10] = l00ll;
OOo01[O1o11O] = l00llList;
OOo01.l10oOl = l1Olo;
OOo01.l0oO1lFields = OOlO0;
OOo01[OoOO0o] = l1lOO;
OOo01[OO101l] = O0lO1;
l1O011(ol0Ol0, "outlookmenu");
lO1o0O = function() {
	lO1o0O[lO0010][llo0oo][o0OoO0](this);
	this.data = []
};
loOo0(lO1o0O, l010o0, {
	url: "",
	textField: "text",
	iconField: "iconCls",
	urlField: "url",
	resultAsTree: false,
	nodesField: "children",
	idField: "id",
	parentField: "pid",
	style: "width:100%;height:100%;",
	uiCls: "mini-outlooktree",
	Oo1lOl: null,
	expandOnLoad: false,
	autoCollapse: true,
	activeIndex: 0
});
O01o0 = lO1o0O[O0lOl0];
O01o0.lo10lo = oloo0;
O01o0.oO11o = oo10O;
O01o0[oo01O0] = O11oO;
O01o0[ool00] = O1o0o;
O01o0[lo0O00] = OOOoO;
O01o0[lol1l0] = lloOo;
O01o0[ol11o1] = lO00O;
O01o0[o10l0O] = oO0o0;
O01o0[oooO1o] = ooo1l;
O01o0[OO1110] = Oool0;
O01o0[l00ooo] = o01l1;
O01o0[o11O0l] = l00lO;
O01o0[o1O0O1] = O011l;
O01o0[lool1o] = o1lO0;
O01o0[oO11lO] = oOloo;
O01o0[ooo00o] = o0O0O;
O01o0[OOloO0] = oO0O0;
O01o0[OloooO] = OolO1;
O01o0[oOOolo] = Oool0sField;
O01o0[lOoo] = l1Ol1;
O01o0[OOl101] = oOOOo;
O01o0[O1110l] = oo10o;
O01o0[oOl001] = lOlOO;
O01o0[O1o10O] = l1O0o;
O01o0[olOO01] = Oo100;
O01o0[Oo1o0o] = lO0o0;
O01o0[ol1ll0] = oolO1;
O01o0[oO0o01] = o1loo;
O01o0[O0O0O1] = o0o0O;
O01o0[lO111l] = oO00l;
O01o0[llO0l0] = O01lOl;
O01o0[lO0l11] = O0OoO;
O01o0[OlOl10] = OlOOl;
O01o0[O1o11O] = OlOOlList;
O01o0.l10oOl = lO11O;
O01o0.l0oO1lFields = o1o11;
O01o0[OoOO0o] = Oo10l;
O01o0[OO101l] = OO0Oo;
l1O011(lO1o0O, "outlooktree");
mini.NavBar = function() {
	mini.NavBar[lO0010][llo0oo][o0OoO0](this)
};
loOo0(mini.NavBar, l010o0, {
	uiCls: "mini-navbar"
});
l1O011(mini.NavBar, "navbar");
mini.NavBarMenu = function() {
	mini.NavBarMenu[lO0010][llo0oo][o0OoO0](this)
};
loOo0(mini.NavBarMenu, ol0Ol0, {
	uiCls: "mini-navbarmenu"
});
l1O011(mini.NavBarMenu, "navbarmenu");
mini.NavBarTree = function() {
	mini.NavBarTree[lO0010][llo0oo][o0OoO0](this)
};
loOo0(mini.NavBarTree, lO1o0O, {
	uiCls: "mini-navbartree"
});
l1O011(mini.NavBarTree, "navbartree");
mini.ToolBar = function() {
	mini.ToolBar[lO0010][llo0oo][o0OoO0](this)
};
loOo0(mini.ToolBar, mini.Container, {
	_clearBorder: false,
	style: "",
	uiCls: "mini-toolbar",
	_create: function() {
		this.el = document.createElement("div");
		this.el.className = "mini-toolbar"
	},
	_initEvents: function() {},
	doLayout: function() {
		if (!this[Ool11l]()) return;
		var A = mini[Ol0Olo](this.el, true);
		for (var $ = 0, _ = A.length; $ < _; $++) mini.layout(A[$])
	},
	set_bodyParent: function($) {
		if (!$) return;
		this.el = $;
		this[l11ol1]()
	},
	getAttrs: function($) {
		var _ = {};
		mini[o0O1l1]($, _, ["id", "borderStyle"]);
		this.el = $;
		this.el.uid = this.uid;
		this[Ol0Ooo](this.uiCls);
		return _
	}
});
l1O011(mini.ToolBar, "toolbar");
o00Oll = function() {
	o00Oll[lO0010][llo0oo][o0OoO0](this)
};
loOo0(o00Oll, l1lloO, {
	pageIndex: 0,
	pageSize: 10,
	totalCount: 0,
	totalPage: 0,
	showPageIndex: true,
	showPageSize: true,
	showTotalCount: true,
	showPageInfo: true,
	showReloadButton: true,
	_clearBorder: false,
	showButtonText: false,
	showButtonIcon: true,
	firstText: "\u9996\u9875",
	prevText: "\u4e0a\u4e00\u9875",
	nextText: "\u4e0b\u4e00\u9875",
	lastText: "\u5c3e\u9875",
	pageInfoText: "\u6bcf\u9875 {0} \u6761,\u5171 {1} \u6761",
	sizeList: [10, 20, 50, 100],
	uiCls: "mini-pager"
});
ol10l0 = o00Oll[O0lOl0];
ol10l0[lo0O00] = o0lOl;
ol10l0[llO1oO] = O1oo1l;
ol10l0.ol010o = oO1lol;
ol10l0.Oo0l = O1o1O;
ol10l0[Ol0lOO] = loO10;
ol10l0[OOOool] = Ool1O0;
ol10l0[o01OOl] = lO0ll;
ol10l0[oO111O] = loOoO;
ol10l0[o0ol0O] = oO10;
ol10l0[ol1O10] = lolOo;
ol10l0[ooOOOO] = lllO1;
ol10l0[O1l1l0] = l01l;
ol10l0[l11O1o] = llool1;
ol10l0[o1oOoo] = O10ol;
ol10l0[o0o0O1] = OoOO01;
ol10l0[looll1] = l11O00;
ol10l0[lo000O] = O1Oool;
ol10l0[o1O1o1] = o11ool;
ol10l0[l0lO10] = ll0o;
ol10l0[l0111l] = ll1O;
ol10l0[O01OoO] = o0loo;
ol10l0[O11010] = OlOooO;
ol10l0[O0Oll0] = o010O;
ol10l0[o0l1o1] = o0oO1l;
ol10l0[l11ol1] = OOlOo;
ol10l0[lO01o0] = lO1o0;
ol10l0[OoOO0o] = l1l1;
ol10l0[ooooll] = O00oo;
l1O011(o00Oll, "pager");
oOl100 = function() {
	this.data = [];
	this.Oooo01 = {};
	this.lO1O1 = [];
	this.Oo0o = {};
	this.columns = [];
	this.ooo1o = [];
	this.oO1oO = {};
	this.o0l1OO = {};
	this.lo1O0l = [];
	this.lllOol = {};
	this._cellErrors = [];
	this._cellMapErrors = {};
	oOl100[lO0010][llo0oo][o0OoO0](this);
	this[Oool01]();
	var $ = this;
	setTimeout(function() {
		if ($.autoLoad) $[ooolll]()
	}, 1)
};
l11o1 = 0;
l0lllo = 0;
loOo0(oOl100, l1lloO, {
	ol101: "block",
	width: 300,
	height: "auto",
	allowCellValid: false,
	cellEditAction: "cellclick",
	showEmptyText: false,
	emptyText: "No data returned.",
	showModified: true,
	minWidth: 300,
	minHeight: 150,
	maxWidth: 5000,
	maxHeight: 3000,
	_viewRegion: null,
	_virtualRows: 50,
	virtualScroll: false,
	allowCellWrap: false,
	allowHeaderWrap: false,
	showColumnsMenu: false,
	bodyCls: "",
	bodyStyle: "",
	footerCls: "",
	footerStyle: "",
	pagerCls: "",
	pagerStyle: "",
	idField: "id",
	data: [],
	columns: null,
	allowResize: false,
	selectOnLoad: false,
	_rowIdField: "_uid",
	columnWidth: 120,
	columnMinWidth: 20,
	columnMaxWidth: 2000,
	fitColumns: true,
	autoHideRowDetail: true,
	showHeader: true,
	showFooter: true,
	showTop: false,
	showHGridLines: true,
	showVGridLines: true,
	showFilterRow: false,
	showSummaryRow: false,
	sortMode: "server",
	allowSortColumn: true,
	allowMoveColumn: true,
	allowResizeColumn: true,
	enableHotTrack: true,
	allowRowSelect: true,
	multiSelect: false,
	allowAlternating: false,
	O0lO: "mini-grid-row-alt",
	allowUnselect: false,
	looO0: "mini-grid-frozen",
	lllo: "mini-grid-frozenCell",
	frozenStartColumn: -1,
	frozenEndColumn: -1,
	l110OO: "mini-grid-row",
	O0o0oo: "mini-grid-row-hover",
	lol010: "mini-grid-row-selected",
	_headerCellCls: "mini-grid-headerCell",
	_cellCls: "mini-grid-cell",
	uiCls: "mini-datagrid",
	OO11: true,
	showNewRow: true,
	_rowHeight: 23,
	_ooO01: true,
	pageIndex: 0,
	pageSize: 10,
	totalCount: 0,
	totalPage: 0,
	showPageInfo: true,
	pageIndexField: "pageIndex",
	pageSizeField: "pageSize",
	sortFieldField: "sortField",
	sortOrderField: "sortOrder",
	totalField: "total",
	showPageSize: true,
	showPageIndex: true,
	showTotalCount: true,
	sortField: "",
	sortOrder: "",
	url: "",
	autoLoad: false,
	loadParams: null,
	ajaxAsync: true,
	ajaxMethod: "post",
	showLoading: true,
	resultAsData: false,
	checkSelectOnLoad: true,
	totalField: "total",
	dataField: "data",
	allowCellSelect: false,
	allowCellEdit: false,
	lOl01o: "mini-grid-cell-selected",
	OOoo1: null,
	O0O111: null,
	oOoO: null,
	O00o1: null,
	editNextOnEnterKey: false,
	editOnTabKey: true,
	createOnEnter: false,
	l0oO: "_uid",
	oO0lO0: true,
	autoCreateNewID: false,
	collapseGroupOnLoad: false,
	showGroupSummary: false,
	Oolll0: 1,
	Ol1Oo0: "",
	loOO0l: "",
	Oo1lOl: null,
	lo1O0l: [],
	headerContextMenu: null,
	columnsMenu: null
});
lll10l = oOl100[O0lOl0];
lll10l[lo0O00] = l0100;
lll10l[o0o11o] = oolOo;
lll10l[O10l0O] = o0O0l;
lll10l[o10llO] = lOoll;
lll10l[O1OOl0] = l1OlO;
lll10l[OOOl0O] = o11lo;
lll10l[o1lo00] = l100l;
lll10l[looOOo] = OllOo;
lll10l[lOO110] = l01l0;
lll10l[loO11] = ll10O;
lll10l[o0O00l] = l1loo;
lll10l[Oll00O] = lOOo1;
lll10l[ll1O1l] = o00ol;
lll10l[o0o0o1] = l1o1oo;
lll10l.O1lloOColumnsMenu = l1O1O;
lll10l[OOOooO] = O110l;
lll10l[o0Ool] = l1Ol0l;
lll10l[OOoooo] = o1llo;
lll10l.lOO1o = O1l1l;
lll10l[OOO0oo] = O0000;
lll10l[Ol0lOl] = O0011;
lll10l[OOll10] = OlOlO;
lll10l[lO0o00] = oO0ll;
lll10l.O0oollSummaryCell = lol1l;
lll10l[oo11oO] = l10l0;
lll10l.o011O0 = O0l0lO;
lll10l.ooo1l1 = o01O;
lll10l.ll1l10 = O1O00;
lll10l.Ooll11 = o01l;
lll10l.OOo0O0 = lO0110;
lll10l.oO1o0O = l1l0l;
lll10l.oO11O1 = OO1OO;
lll10l.oOoO1l = oO111;
lll10l.o01l01 = O0O1o;
lll10l.lo1Oll = l01O0;
lll10l.llOloo = O1lO1;
lll10l[O0lOol] = lO010;
lll10l.l01O10 = l00lo;
lll10l.O101o = oOl0;
lll10l.llO101 = oll0;
lll10l.l0loOo = llllo;
lll10l.O0o0l0 = lO111;
lll10l[O0oOO0] = O01ol;
lll10l[loOo00] = OO0o1;
lll10l.Oo1lll = o1oll;
lll10l.oo1l = l1Olo1;
lll10l.l10ll = o1loO;
lll10l[O1o00] = O11l1;
lll10l[OlO1lO] = l1OOO;
lll10l[o1lOoo] = o1oOO;
lll10l[lOlOOo] = oOO0o;
lll10l[l0Oo11] = O0Ol1;
lll10l[oOOO1O] = l111O;
lll10l[o00OO0] = Ool01;
lll10l[lo10Ol] = lOl11;
lll10l[OO1OO0] = oo111;
lll10l[lool1o] = l1ooo;
lll10l[o10Ol] = ol011;
lll10l[Ol0l01] = OO1oO;
lll10l[oolO0] = l1ooos;
lll10l[loO0ll] = o0oO1;
lll10l[ooO1o0] = olo10;
lll10l[lO01O0] = O10oO;
lll10l[Oool1o] = lO0l;
lll10l[O0llO1] = o10O;
lll10l[l11O11] = lo0o0;
lll10l[O011o1] = ol01o;
lll10l[o0Ol0O] = lll0l;
lll10l.oolloO = Ooo0o;
lll10l.OO0olO = oOO1O;
lll10l[oll11] = ololO;
lll10l[l0l11O] = oO10lo;
lll10l[l1O01O] = olOol;
lll10l[o101oO] = oOl1l;
lll10l[o1oool] = ol00O;
lll10l[oO0ooO] = loOOO;
lll10l[Ooo0lO] = O1O1l;
lll10l.O0ooll = O0OOl;
lll10l.OOol0O = o1oo1;
lll10l.loOl1 = lo0OO;
lll10l[Ollo1o] = llOoO;
lll10l[O0ol00] = ol1o0;
lll10l[ol101l] = loooo;
lll10l[ll1loo] = l0oO0;
lll10l[llo0o0] = ol0o0;
lll10l.oO1oO0 = olllo;
lll10l.loo1o = lO0lo;
lll10l[O11O0O] = Ol0l1;
lll10l[oo10ol] = OO1ll;
lll10l[lOo010] = oo00o;
lll10l[ll1o10] = O0o11;
lll10l[Oo1Ool] = oo01o;
lll10l[o0l01l] = ool1l;
lll10l[oo0011] = O1oo1;
lll10l[OO0101] = O1oo1s;
lll10l[lo1OOl] = oo1OO;
lll10l[oolOOl] = lOO00;
lll10l[l1oo1] = O00O1;
lll10l[looOl0] = OOOo0;
lll10l[oO0l1O] = oool1;
lll10l[o0oOOo] = lo011;
lll10l[lOlO01] = olO10;
lll10l[ol001l] = ool1;
lll10l[l0loO0] = olOO1;
lll10l[O100Oo] = oOo0O;
lll10l[OOl00o] = O0l0;
lll10l[llO1Oo] = O0l0s;
lll10l[lo1o1O] = Ol0Ol;
lll10l[Ooo1OO] = o0ol;
lll10l[OoOllO] = Ol0Ols;
lll10l[l100Oo] = oO0lO;
lll10l[lO0o01] = oO0lOs;
lll10l[lOl0ll] = ooO1O;
lll10l[OoO0O1] = OO0oO;
lll10l.ooo0 = OlOOo;
lll10l.loo1O = O1OOo;
lll10l.oO01o1 = Ol11l;
lll10l[lO11oO] = Ol1ll;
lll10l[olll01] = lO0Ol;
lll10l[lO11oO] = Ol1ll;
lll10l[l0oOlo] = llo01;
lll10l[lO0OO] = O100O0;
lll10l[ololll] = o0lOO;
lll10l[olOO00] = o0lOOs;
lll10l[OllOlO] = Oo0O0;
lll10l[o11000] = loOloo;
lll10l[oO0OO] = lol01;
lll10l[oO0O1o] = Ol1oo;
lll10l[olO0o0] = ll00l;
lll10l[oo110l] = lO10o;
lll10l[o0lO00] = loo1l;
lll10l[Oo0olo] = l0o1l;
lll10l.ll11O0 = o10oo;
lll10l.O011l0 = OOloO;
lll10l.Oo11O = ooll0;
lll10l.O001l = o1Oo0;
lll10l.lO0OOO = o0l10;
lll10l.olo10O = ooOO;
lll10l.Ololll = o1ool;
lll10l[O0Oo0O] = llo1lo;
lll10l[O0OllO] = Ooo1o;
lll10l[Ol1lo1] = O0O0o;
lll10l[o0l000] = lol01Cell;
lll10l[O0O1l] = OOOlO;
lll10l[OOlool] = O0oOl;
lll10l[ollOll] = Oo0o1;
lll10l[o0olo0] = Ol0o0;
lll10l[lll11o] = oooo0;
lll10l[ooO1Ol] = ol011Cell;
lll10l[ol0l0] = OO1oOCell;
lll10l.ooOo0O = O1Ol;
lll10l[OOO1lo] = OloO1O;
lll10l[ll0011] = oO1O1o;
lll10l[lOlOl1] = OO000O;
lll10l[lOlllO] = lO000;
lll10l[ooolll] = ol0l;
lll10l[OlOl10] = l1O0O;
lll10l.l10oOl = O010O0;
lll10l[lol001] = llOl0l;
lll10l.oo0l1 = O110o;
lll10l[OolO11] = O1lOo0;
lll10l[lO01lo] = olOO;
lll10l[OOOool] = OO00O;
lll10l[l0lO10] = lOlO;
lll10l[l0111l] = oOo0;
lll10l[loool0] = O1Oo1;
lll10l[ll010o] = l0ooO;
lll10l[ooolOl] = O01O0;
lll10l[l0l0O0] = o001o;
lll10l[l0lo0O] = ll010;
lll10l[OooOl0] = lo10l;
lll10l[l1l11O] = O1Oo1Field;
lll10l[ll1Oo1] = o1l0l;
lll10l[OOOO00] = l0ooOField;
lll10l[ollOoo] = O0o1O;
lll10l[lo00OO] = O1l01;
lll10l[olOlol] = l0o11o;
lll10l[o11o00] = lO01O;
lll10l[lOlO0o] = o1oO1O;
lll10l[ooOOOO] = ol1ll;
lll10l[O1l1l0] = lO10l;
lll10l[l11O1o] = l0lll;
lll10l[o1oOoo] = llol0;
lll10l[o0o0O1] = OOOO0;
lll10l[looll1] = oOlOo;
lll10l[O0Oll0] = lOo1l;
lll10l[o0l1o1] = Ol10o;
lll10l[O01OoO] = l1100;
lll10l[O11010] = ollo0;
lll10l[lo000O] = lol0;
lll10l[o1O1o1] = l0O11;
lll10l[o0ol0O] = o11lO;
lll10l[ol1O10] = oool0l;
lll10l[o01OOl] = O001ll;
lll10l[oO111O] = OoO111;
lll10l.lo11ll = OOl11;
lll10l.O1O0 = Ol0oo;
lll10l.l11o01 = l0ol;
lll10l.O01O11 = OolO0;
lll10l.l0ll1l = lOOl1;
lll10l.lllO = l11O;
lll10l[ll0o01] = OOOo0DetailCellEl;
lll10l[O1l0ol] = OOOo0DetailEl;
lll10l[O0O0] = olOo;
lll10l[oOl0ol] = Ol1oO;
lll10l[ol10O] = o10Ool;
lll10l[Oll1Ol] = o11ll;
lll10l[OO0ll1] = O1ooO;
lll10l[OOOO1] = Oololo;
lll10l[o0lOo1] = oOO0l;
lll10l[olo1l0] = olol0;
lll10l[OOo00] = Ooo01;
lll10l[O0l11l] = o11Oo;
lll10l[oO1O01] = ooo0o0;
lll10l[lO0ooo] = lO1Ol;
lll10l[o0O100] = o0olo;
lll10l[Oo01ol] = lolOl;
lll10l[lO0loo] = l0loo;
lll10l[Ol1Ol0] = lO0O1;
lll10l[lOlloo] = OOllOo;
lll10l[llllo0] = ooOO1;
lll10l[llloO0] = lo1o;
lll10l[loO0lO] = oolo1;
lll10l[lOll1] = oo0o0;
lll10l[lOlOll] = O1O110;
lll10l[OOlo1o] = lo1oColumn;
lll10l[OOOlo0] = oolo1Column;
lll10l[llOll] = Olo1l;
lll10l[oool10] = OOO1o;
lll10l[o0olOO] = l00Oo1;
lll10l[lOo00O] = oOoo0;
lll10l[o1l0Oo] = loO1o;
lll10l[oO010l] = llol1;
lll10l[o01loO] = lo1o0;
lll10l[l1l11o] = oo10;
lll10l[l0OO0o] = OOoOO;
lll10l[o00oo1] = O00oO;
lll10l[Olll00] = o10O0;
lll10l[O01l0O] = l11o0;
lll10l[looo1o] = O0010;
lll10l[o01111] = oloO;
lll10l[l0o1ll] = ollO1;
lll10l[OOOo1O] = l0Ol;
lll10l[lOOO0l] = oOol1;
lll10l[lo0l0l] = OoOl1;
lll10l[oo10Ol] = OoO10;
lll10l[oOoOO1] = OO1o1;
lll10l[O1oOll] = ll10;
lll10l[lOlo1l] = OOo0;
lll10l[OO101o] = l0oolo;
lll10l[olol0l] = lo1lo;
lll10l[o1o01o] = l1lO;
lll10l[olO111] = OO0Ol;
lll10l[Ol0O10] = ool01;
lll10l[lO111o] = o001;
lll10l[l1llO0] = o1lOl;
lll10l[O10O0o] = o1o1O;
lll10l[l0l00o] = Oo1o1;
lll10l[O1o1O1] = llo1o;
lll10l[O0lo0O] = O111l;
lll10l[o01Ooo] = O1OO1;
lll10l[O1o100] = lll0O;
lll10l[l00OlO] = o1OOl;
lll10l[O10O1O] = o00O00;
lll10l[o1l10l] = Oooo;
lll10l[l10oOo] = o1ol0;
lll10l.O0oO1l = o1l11;
lll10l[ll1l0o] = OooO1;
lll10l[oOo100] = Ol1l;
lll10l[O0ol0o] = l1o0;
lll10l[lo0lO1] = lOl1OO;
lll10l[o10o01] = O01Ol0;
lll10l[ooolOo] = lO100;
lll10l[Ol1111] = oo1O0;
lll10l[l1o01O] = oOOlO;
lll10l[oOO11o] = lolOO;
lll10l.Oll0o0 = O0oOlO;
lll10l[oOo1l1] = lo0lO;
lll10l.l1O0l = ooOoo;
lll10l.Ooo0 = o000o;
lll10l[O1Olll] = Olool;
lll10l[Ool0O1] = l1Ol0;
lll10l[ooo0O0] = l0l1l;
lll10l._loOoO0 = O0l10;
lll10l[oolo0O] = OO10o;
lll10l[O110oO] = OO10;
lll10l[l01o1O] = ll1ll;
lll10l[lOO1ll] = oOOo1;
lll10l[O111oO] = o01O1;
lll10l[o10OO] = Ol011;
lll10l[olo0l0] = oOl00;
lll10l._ll1O10 = o0OoO;
lll10l.OOool1 = ll01;
lll10l.Olllo = lO00o;
lll10l[o1olOl] = O01O1;
lll10l[oo1ll] = l10o1;
lll10l[o1lo1O] = OOOo0sBox;
lll10l[o0l0o1] = OOOo0Box;
lll10l[o1Olll] = o1111;
lll10l.lolOl0 = ooo1O;
lll10l[Oo11oO] = OOool;
lll10l[O0o1o1] = O01l0;
lll10l[o0OOOl] = Ol01O;
lll10l.o0OoOo = l11OId;
lll10l.O000 = l1llo0;
lll10l.Ollooo = ll0Oo;
lll10l.lO100o = oO0l;
lll10l.l0Oo = l1Ol1O;
lll10l.ll1o = lo1O11;
lll10l[l0O1o1] = O0O01;
lll10l[loOoOO] = l1o11l;
lll10l[O0O0l1] = OlOO0;
lll10l[Oo1o00] = l1olO;
lll10l[OO11Oo] = ooOol;
lll10l[l11ol1] = l00O0l;
lll10l.O01OO0 = OO010;
lll10l.o0o010 = oO0oO;
lll10l[Oool01] = ll0o0;
lll10l[oo0l1o] = OOo0o;
lll10l[oO01OO] = olOool;
lll10l.ll1lo0 = lOlO0;
lll10l[o1oOOO] = olo01;
lll10l[O00OO1] = oOl0o0;
lll10l.lo0O0l = oO10l;
lll10l.oo0oloText = o11o;
lll10l.Oo1Oo0 = lol1o;
lll10l.llOll0 = lOolo;
lll10l.ol0O = ool0;
lll10l.O0Ol0l = O00l1;
lll10l[Ool1l1] = OOOo1o;
lll10l[lol0o] = OOOOO;
lll10l[OOolll] = oolo01;
lll10l[Oo1O10] = l00O0;
lll10l[O1OOo1] = Ool01Range;
lll10l[lOlo11] = o0l1l0;
lll10l[OO0llo] = o1l01;
lll10l[llO0l0] = lO00l;
lll10l[lO0l11] = loo01;
lll10l[ooo0oO] = l1O0OData;
lll10l[olll0o] = o110;
lll10l[l100l1] = O1OOO;
lll10l[ll0100] = oO1l1;
lll10l[Oo0lol] = llolo;
lll10l[O0O0O1] = Oolol;
lll10l[lO111l] = ll10o;
lll10l[OOloO0] = llloO;
lll10l[OloooO] = lO1o1;
lll10l[oO0l00] = oooo10;
lll10l[lo1100] = lo001;
lll10l.loOl11 = O0ll1;
lll10l[ool00o] = OO1o0;
lll10l.O1lloORows = Ol0ooo;
lll10l[lO01o0] = ol1O;
lll10l[OoOO0o] = ollOl;
lll10l[ooooll] = l1Ool;
lll10l[OO101l] = llO0O;
lll10l[ol0l1o] = o1lO;
l1O011(oOl100, "datagrid");
l1l0O = {
	_getColumnEl: function($) {
		$ = this[lOlOo]($);
		if (!$) return null;
		var _ = this.lo1l0($);
		return document.getElementById(_)
	},
	O1lOl1: function($, _) {
		$ = this[looOl0] ? this[looOl0]($) : this[OO1110]($);
		_ = this[lOlOo](_);
		if (!$ || !_) return null;
		var A = this.lO100o($, _);
		return document.getElementById(A)
	},
	o1Oo1: function(A) {
		var $ = this.llO101 ? this.llO101(A) : this[o0O110](A),
			_ = this.o0oO0(A);
		return {
			record: $,
			column: _
		}
	},
	o0oO0: function(B) {
		var _ = O111o(B.target, this._cellCls);
		if (!_) _ = O111o(B.target, this._headerCellCls);
		if (_) {
			var $ = _.id.split("$"),
				A = $[$.length - 1];
			return this.o1l0O0(A)
		}
		return null
	},
	lo1l0: function($) {
		return this.uid + "$column$" + $._id
	},
	getColumnBox: function(A) {
		var B = this.lo1l0(A),
			_ = document.getElementById(B);
		if (_) {
			var $ = oo0OlO(_);
			$.x -= 1;
			$.left = $.x;
			$.right = $.x + $.width;
			return $
		}
	},
	setColumns: function(value) {
		if (!mini.isArray(value)) value = [];
		this.columns = value;
		this.oO1oO = {};
		this.o0l1OO = {};
		this.ooo1o = [];
		this.maxColumnLevel = 0;
		var level = 0;

		function init(column, index, parentColumn) {
			if (column.type) {
				if (!mini.isNull(column.header) && typeof column.header !== "function") if (column.header.trim() == "") delete column.header;
				var col = mini[oll10](column.type);
				if (col) {
					var _column = mini.copyTo({}, column);
					mini.copyTo(column, col);
					mini.copyTo(column, _column)
				}
			}
			var width = parseInt(column.width);
			if (mini.isNumber(width) && String(width) == column.width) column.width = width + "px";
			if (mini.isNull(column.width)) column.width = this[llO011] + "px";
			column.visible = column.visible !== false;
			column[Olo1lO] = column[Olo1lO] !== false;
			column.allowMove = column.allowMove !== false;
			column.allowSort = column.allowSort === true;
			column.allowDrag = !! column.allowDrag;
			column[Oll10l] = !! column[Oll10l];
			column.autoEscape = !! column.autoEscape;
			if (!column._id) column._id = l0lllo++;
			column._gridUID = this.uid;
			column[l1olo] = this[l1olo];
			column._pid = parentColumn == this ? -1 : parentColumn._id;
			this.oO1oO[column._id] = column;
			if (column.name) this.o0l1OO[column.name] = column;
			if (!column.columns || column.columns.length == 0) this.ooo1o.push(column);
			column.level = level;
			level += 1;
			this[ll0o0l](column, init, this);
			level -= 1;
			if (column.level > this.maxColumnLevel) this.maxColumnLevel = column.level;
			if (typeof column.editor == "string") {
				var cls = mini.getClass(column.editor);
				if (cls) column.editor = {
					type: column.editor
				};
				else column.editor = eval("(" + column.editor + ")")
			}
			if (typeof column[O00l1o] == "string") column[O00l1o] = eval("(" + column[O00l1o] + ")");
			if (column[O00l1o] && !column[O00l1o].el) column[O00l1o] = mini.create(column[O00l1o]);
			if (typeof column.init == "function" && column.inited != true) column.init(this);
			column.inited = true
		}
		this[ll0o0l](this, init, this);
		if (this.llOll0) this.llOll0();
		this[Oool01]();
		this[lO0OoO]("columnschanged")
	},
	getColumns: function() {
		return this.columns
	},
	getBottomColumns: function() {
		return this.ooo1o
	},
	getVisibleColumns: function() {
		var B = this[lol1oO](),
			A = [];
		for (var $ = 0, C = B.length; $ < C; $++) {
			var _ = B[$];
			if (_.visible) A.push(_)
		}
		return A
	},
	getBottomVisibleColumns: function() {
		var A = [];
		for (var $ = 0, B = this.ooo1o.length; $ < B; $++) {
			var _ = this.ooo1o[$];
			if (this[o0Ol](_)) A.push(_)
		}
		return A
	},
	eachColumns: function(B, F, C) {
		var D = B.columns;
		if (D) {
			var _ = D.clone();
			for (var A = 0, E = _.length; A < E; A++) {
				var $ = _[A];
				if (F[o0OoO0](C, $, A, B) === false) break
			}
		}
	},
	getColumn: function($) {
		var _ = typeof $;
		if (_ == "number") return this[lol1oO]()[$];
		else if (_ == "object") return $;
		else return this.o0l1OO[$]
	},
	getColumnByField: function(A) {
		if (!A) return;
		var B = this[lol1oO]();
		for (var $ = 0, C = B.length; $ < C; $++) {
			var _ = B[$];
			if (_.field == A) return _
		}
		return _
	},
	o1l0O0: function($) {
		return this.oO1oO[$]
	},
	getParentColumn: function($) {
		$ = this[lOlOo]($);
		var _ = $._pid;
		if (_ == -1) return this;
		return this.oO1oO[_]
	},
	getAncestorColumns: function(A) {
		var _ = [];
		while (1) {
			var $ = this[l0llll](A);
			if (!$ || $ == this) break;
			_[_.length] = $;
			A = $
		}
		_.reverse();
		return _
	},
	isAncestorColumn: function(_, B) {
		if (_ == B) return true;
		if (!_ || !B) return false;
		var A = this[l0l0l0](B);
		for (var $ = 0, C = A.length; $ < C; $++) if (A[$] == _) return true;
		return false
	},
	isVisibleColumn: function(_) {
		_ = this[lOlOo](_);
		var A = this[l0l0l0](_);
		for (var $ = 0, B = A.length; $ < B; $++) if (A[$].visible == false) return false;
		return true
	},
	updateColumn: function(_, $) {
		_ = this[lOlOo](_);
		if (!_) return;
		mini.copyTo(_, $);
		this[oO1010](this.columns)
	},
	removeColumn: function($) {
		$ = this[lOlOo]($);
		var _ = this[l0llll]($);
		if ($ && _) {
			_.columns.remove($);
			this[oO1010](this.columns)
		}
		return $
	},
	moveColumn: function(C, _, A) {
		C = this[lOlOo](C);
		_ = this[lOlOo](_);
		if (!C || !_ || !A || C == _) return;
		if (this[l1111O](C, _)) return;
		var D = this[l0llll](C);
		if (D) D.columns.remove(C);
		var B = _,
			$ = A;
		if ($ == "before") {
			B = this[l0llll](_);
			$ = B.columns[o0oOOo](_)
		} else if ($ == "after") {
			B = this[l0llll](_);
			$ = B.columns[o0oOOo](_) + 1
		} else if ($ == "add" || $ == "append") {
			if (!B.columns) B.columns = [];
			$ = B.columns.length
		} else if (!mini.isNumber($)) return;
		B.columns.insert($, C);
		this[oO1010](this.columns)
	},
	hideColumns: function(A) {
		if (this[ol0ooO]) this[O0OllO]();
		for (var $ = 0, B = A.length; $ < B; $++) {
			var _ = this[lOlOo](A[$]);
			if (!_) continue;
			_.visible = false
		}
		this[oO1010](this.columns)
	},
	showColumns: function(A) {
		if (this[ol0ooO]) this[O0OllO]();
		for (var $ = 0, B = A.length; $ < B; $++) {
			var _ = this[lOlOo](A[$]);
			if (!_) continue;
			_.visible = true
		}
		this[oO1010](this.columns)
	},
	hideColumn: function($) {
		$ = this[lOlOo]($);
		if (!$) return;
		if (this[ol0ooO]) this[O0OllO]();
		$.visible = false;
		this[oO1010](this.columns)
	},
	showColumn: function($) {
		$ = this[lOlOo]($);
		if (!$) return;
		if (this[ol0ooO]) this[O0OllO]();
		$.visible = true;
		this[oO1010](this.columns)
	},
	OoOlol: function() {
		var _ = this[oOlol1](),
			D = [];
		for (var C = 0, F = _; C <= F; C++) D.push([]);

		function A(C) {
			var D = mini[llo11l](C.columns, "columns"),
				A = 0;
			for (var $ = 0, B = D.length; $ < B; $++) {
				var _ = D[$];
				if (_.visible != true || _._hide == true) continue;
				if (!_.columns || _.columns.length == 0) A += 1
			}
			return A
		}
		var $ = mini[llo11l](this.columns, "columns");
		for (C = 0, F = $.length; C < F; C++) {
			var E = $[C],
				B = D[E.level];
			if (E.columns && E.columns.length > 0) E.colspan = A(E);
			if ((!E.columns || E.columns.length == 0) && E.level < _) E.rowspan = _ - E.level + 1;
			B.push(E)
		}
		return D
	},
	getMaxColumnLevel: function() {
		return this.maxColumnLevel
	}
};
mini.copyTo(oOl100.prototype, l1l0O);
OlO0 = function($) {
	this.grid = $;
	o1ol0o($.l0lO, "mousemove", this.__OnGridHeaderMouseMove, this);
	o1ol0o($.l0lO, "mouseout", this.__OnGridHeaderMouseOut, this)
};
OlO0[O0lOl0] = {
	__OnGridHeaderMouseOut: function($) {
		if (this.l1o11OColumnEl) OloO(this.l1o11OColumnEl, "mini-grid-headerCell-hover")
	},
	__OnGridHeaderMouseMove: function(_) {
		var $ = O111o(_.target, "mini-grid-headerCell");
		if ($) {
			ollool($, "mini-grid-headerCell-hover");
			this.l1o11OColumnEl = $
		}
	},
	__onGridHeaderCellClick: function($) {}
};
ol01 = function($) {
	this.grid = $;
	o1ol0o(this.grid.el, "mousedown", this.Ool01l, this);
	$[o1Oo11]("layout", this.lO0l1l, this)
};
ol01[O0lOl0] = {
	lO0l1l: function(A) {
		if (this.splittersEl) mini[lllO0l](this.splittersEl);
		if (this.splitterTimer) return;
		var $ = this.grid;
		if ($[O0110l]() == false) return;
		var _ = this;
		this.splitterTimer = setTimeout(function() {
			var H = $[lol1oO](),
				I = H.length,
				E = oo0OlO($.l0lO, true),
				B = $[oo0l1o](),
				G = [];
			for (var J = 0, F = H.length; J < F; J++) {
				var D = H[J],
					C = $[Ol1O10](D);
				if (!C) break;
				var A = C.top - E.top,
					M = C.right - E.left - 2,
					K = C.height;
				if ($[ol0l1o] && $[ol0l1o]()) {
					if (J >= $[o00lOl]);
				} else M += B;
				var N = $[l0llll](D);
				if (N && N.columns) if (N.columns[N.columns.length - 1] == D) if (K + 5 < E.height) {
					A = 0;
					K = E.height
				}
				if ($[l00lO0] && D[Olo1lO]) G[G.length] = "<div id=\"" + D._id + "\" class=\"mini-grid-splitter\" style=\"left:" + (M - 1) + "px;top:" + A + "px;height:" + K + "px;\"></div>"
			}
			var O = G.join("");
			_.splittersEl = document.createElement("div");
			_.splittersEl.className = "mini-grid-splitters";
			_.splittersEl.innerHTML = O;
			var L = $[o0OOOl]();
			L.appendChild(_.splittersEl);
			_.splitterTimer = null
		}, 100)
	},
	Ool01l: function(B) {
		var $ = this.grid,
			A = B.target;
		if (lOll0o(A, "mini-grid-splitter")) {
			var _ = $.oO1oO[A.id];
			if ($[l00lO0] && _ && _[Olo1lO]) {
				this.splitterColumn = _;
				this.getDrag().start(B)
			}
		}
	},
	getDrag: function() {
		if (!this.drag) this.drag = new mini.Drag({
			capture: true,
			onStart: mini.createDelegate(this.OO0O1, this),
			onMove: mini.createDelegate(this.lo1o1, this),
			onStop: mini.createDelegate(this.O0l01O, this)
		});
		return this.drag
	},
	OO0O1: function(_) {
		var $ = this.grid,
			B = $[Ol1O10](this.splitterColumn);
		this.columnBox = B;
		this.Ooo0O = mini.append(document.body, "<div class=\"mini-grid-proxy\"></div>");
		var A = $[lOo011](true);
		A.x = B.x;
		A.width = B.width;
		A.right = B.right;
		l010(this.Ooo0O, A)
	},
	lo1o1: function(A) {
		var $ = this.grid,
			B = mini.copyTo({}, this.columnBox),
			_ = B.width + (A.now[0] - A.init[0]);
		if (_ < $.columnMinWidth) _ = $.columnMinWidth;
		if (_ > $.columnMaxWidth) _ = $.columnMaxWidth;
		oOl1O(this.Ooo0O, _)
	},
	O0l01O: function(E) {
		var $ = this.grid,
			F = oo0OlO(this.Ooo0O),
			D = this,
			C = $[o0o11l];
		$[o0o11l] = false;
		setTimeout(function() {
			jQuery(D.Ooo0O).remove();
			D.Ooo0O = null;
			$[o0o11l] = C
		}, 10);
		var G = this.splitterColumn,
			_ = parseInt(G.width);
		if (_ + "%" != G.width) {
			var A = $[o1olOl](G),
				B = parseInt(_ / A * F.width);
			$[oo1ll](G, B)
		}
	}
};
l11Ol = function($) {
	this.grid = $;
	o1ol0o(this.grid.el, "mousedown", this.Ool01l, this)
};
l11Ol[O0lOl0] = {
	Ool01l: function(B) {
		var $ = this.grid;
		if ($[oO0OO] && $[oO0OO]()) return;
		if (lOll0o(B.target, "mini-grid-splitter")) return;
		if (B.button == mini.MouseButton.Right) return;
		var A = O111o(B.target, $._headerCellCls);
		if (A) {
			this._remove();
			var _ = $.o0oO0(B);
			if ($[o0ll11] && _ && _.allowMove) {
				this.dragColumn = _;
				this._columnEl = A;
				this.getDrag().start(B)
			}
		}
	},
	getDrag: function() {
		if (!this.drag) this.drag = new mini.Drag({
			capture: false,
			onStart: mini.createDelegate(this.OO0O1, this),
			onMove: mini.createDelegate(this.lo1o1, this),
			onStop: mini.createDelegate(this.O0l01O, this)
		});
		return this.drag
	},
	OO0O1: function(_) {
		function A(_) {
			var A = _.header;
			if (typeof A == "function") A = A[o0OoO0]($, _);
			if (mini.isNull(A) || A === "") A = "&nbsp;";
			return A
		}
		var $ = this.grid;
		this.Ooo0O = mini.append(document.body, "<div class=\"mini-grid-columnproxy\"></div>");
		this.Ooo0O.innerHTML = "<div class=\"mini-grid-columnproxy-inner\" style=\"height:26px;\">" + A(this.dragColumn) + "</div>";
		mini[l01o0O](this.Ooo0O, _.now[0] + 15, _.now[1] + 18);
		ollool(this.Ooo0O, "mini-grid-no");
		this.moveTop = mini.append(document.body, "<div class=\"mini-grid-movetop\"></div>");
		this.moveBottom = mini.append(document.body, "<div class=\"mini-grid-movebottom\"></div>")
	},
	lo1o1: function(A) {
		var $ = this.grid,
			G = A.now[0];
		mini[l01o0O](this.Ooo0O, G + 15, A.now[1] + 18);
		this.targetColumn = this.insertAction = null;
		var D = O111o(A.event.target, $._headerCellCls);
		if (D) {
			var C = $.o0oO0(A.event);
			if (C && C != this.dragColumn) {
				var _ = $[l0llll](this.dragColumn),
					E = $[l0llll](C);
				if (_ == E) {
					this.targetColumn = C;
					this.insertAction = "before";
					var F = $[Ol1O10](this.targetColumn);
					if (G > F.x + F.width / 2) this.insertAction = "after"
				}
			}
		}
		if (this.targetColumn) {
			ollool(this.Ooo0O, "mini-grid-ok");
			OloO(this.Ooo0O, "mini-grid-no");
			var B = $[Ol1O10](this.targetColumn);
			this.moveTop.style.display = "block";
			this.moveBottom.style.display = "block";
			if (this.insertAction == "before") {
				mini[l01o0O](this.moveTop, B.x - 4, B.y - 9);
				mini[l01o0O](this.moveBottom, B.x - 4, B.bottom)
			} else {
				mini[l01o0O](this.moveTop, B.right - 4, B.y - 9);
				mini[l01o0O](this.moveBottom, B.right - 4, B.bottom)
			}
		} else {
			OloO(this.Ooo0O, "mini-grid-ok");
			ollool(this.Ooo0O, "mini-grid-no");
			this.moveTop.style.display = "none";
			this.moveBottom.style.display = "none"
		}
	},
	_remove: function() {
		var $ = this.grid;
		mini[lllO0l](this.Ooo0O);
		mini[lllO0l](this.moveTop);
		mini[lllO0l](this.moveBottom);
		this.Ooo0O = this.moveTop = this.moveBottom = this.dragColumn = this.targetColumn = null
	},
	O0l01O: function(_) {
		var $ = this.grid;
		$[o01OlO](this.dragColumn, this.targetColumn, this.insertAction);
		this._remove()
	}
};
O1l0l = function($) {
	this.grid = $;
	this.grid[o1Oo11]("cellmousedown", this.o1lo, this);
	this.grid[o1Oo11]("cellclick", this.OO0l0, this);
	this.grid[o1Oo11]("celldblclick", this.OO0l0, this);
	o1ol0o(this.grid.el, "keydown", this.lo1olO, this)
};
O1l0l[O0lOl0] = {
	lo1olO: function(G) {
		var $ = this.grid;
		if (Oo11($.OOlO1o, G.target) || Oo11($.l100lO, G.target) || Oo11($.olo1l1, G.target) || O111o(G.target, "mini-grid-detailRow") || O111o(G.target, "mini-grid-rowEdit")) return;
		var A = $[ooO1Ol]();
		if (G.shiftKey || G.ctrlKey || G.altKey) return;
		if (G.keyCode == 37 || G.keyCode == 38 || G.keyCode == 39 || G.keyCode == 40) G.preventDefault();
		var C = $[ll0lO0](),
			B = A ? A[1] : null,
			_ = A ? A[0] : null;
		if (!A) _ = $[o10Ol]();
		var F = C[o0oOOo](B),
			D = $[o0oOOo](_),
			E = $[llO0l0]().length;
		switch (G.keyCode) {
		case 9:
			if ($[ol0ooO] && $.editOnTabKey) {
				G.preventDefault();
				$[Oo0olo](G.shiftKey == false);
				return
			}
			break;
		case 27:
			break;
		case 13:
			if ($[ol0ooO] && $.editNextOnEnterKey) if ($[o0l000](A) || !B.editor) {
				$[Oo0olo](G.shiftKey == false);
				return
			}
			if ($[ol0ooO] && A && !B[Oll10l]) $[O0O1l]();
			break;
		case 37:
			if (B) {
				if (F > 0) F -= 1
			} else F = 0;
			break;
		case 38:
			if (_) {
				if (D > 0) D -= 1
			} else D = 0;
			if (D != 0 && $[oO01OO]()) if ($._viewRegion.start > D) {
				$.oo1o1l.scrollTop -= $._rowHeight;
				$[O1Olll]()
			}
			break;
		case 39:
			if (B) {
				if (F < C.length - 1) F += 1
			} else F = 0;
			break;
		case 40:
			if (_) {
				if (D < E - 1) D += 1
			} else D = 0;
			if ($[oO01OO]()) if ($._viewRegion.end < D) {
				$.oo1o1l.scrollTop += $._rowHeight;
				$[O1Olll]()
			}
			break;
		default:
			break
		}
		B = C[F];
		_ = $[oO0l1O](D);
		if (B && _ && $[o10001]) {
			A = [_, B];
			$[ol0l0](A);
			$[OO1OO0](_, B)
		}
		if (_ && $[lOool1]) {
			$[lOlOOo]();
			$[Ol0l01](_)
		}
	},
	OO0l0: function(B) {
		var $ = this.grid;
		if ($[ol0ooO] == false) return;
		if (this.grid.cellEditAction != B.type) return;
		var _ = B.record,
			A = B.column;
		if (!A[Oll10l] && !this.grid[OlOOo1]()) if (B.htmlEvent.shiftKey || B.htmlEvent.ctrlKey);
		else this.grid[O0O1l]()
	},
	o1lo: function(_) {
		var $ = this;
		setTimeout(function() {
			$.__doSelect(_)
		}, 1)
	},
	__doSelect: function(D) {
		var _ = D.record,
			B = D.column,
			$ = this.grid;
		if (this.grid[o10001]) {
			var A = [_, B];
			this.grid[ol0l0](A)
		}
		if ($[lOool1]) if ($[l0o000]) {
			this.grid.el.onselectstart = function() {};
			if (D.htmlEvent.shiftKey) {
				this.grid.el.onselectstart = function() {
					return false
				};
				D.htmlEvent.preventDefault();
				if (!this.currentRecord) {
					this.grid[o00OO0](_);
					this.currentRecord = this.grid[lool1o]()
				} else {
					this.grid[lOlOOo]();
					this.grid[O1OOo1](this.currentRecord, _)
				}
			} else {
				this.grid.el.onselectstart = function() {};
				if (D.htmlEvent.ctrlKey) {
					this.grid.el.onselectstart = function() {
						return false
					};
					try {
						D.htmlEvent.preventDefault()
					} catch (C) {}
				}
				if (D.column._multiRowSelect === true || D.htmlEvent.ctrlKey || $.allowUnselect) {
					if ($[loO0ll](_)) $[oOOO1O](_);
					else $[o00OO0](_)
				} else if ($[loO0ll](_));
				else {
					$[lOlOOo]();
					$[o00OO0](_)
				}
				this.currentRecord = this.grid[lool1o]()
			}
		} else if (!$[loO0ll](_)) {
			$[lOlOOo]();
			$[o00OO0](_)
		} else if (D.htmlEvent.ctrlKey) $[lOlOOo]()
	}
};
l1o111 = function($) {
	this.grid = $;
	o1ol0o(this.grid.el, "mousemove", this.__onGridMouseMove, this)
};
l1o111[O0lOl0] = {
	__onGridMouseMove: function(D) {
		var $ = this.grid,
			A = $.o1Oo1(D),
			_ = $.O1lOl1(A.record, A.column),
			B = $.getCellError(A.record, A.column);
		if (_) {
			if (B) {
				_.title = B.errorText;
				return
			}
			if (_.firstChild) if (lOll0o(_.firstChild, "mini-grid-cell-inner") || lOll0o(_.firstChild, "mini-treegrid-treecolumn-inner")) _ = _.firstChild;
			if (_.scrollWidth > _.clientWidth) {
				var C = _.innerText || _.textContent || "";
				_.title = C.trim()
			} else _.title = ""
		}
	}
};
mini.lo1O01Menu = function($) {
	this.grid = $;
	this.menu = this.createMenu();
	o1ol0o($.el, "contextmenu", this.ll1l10, this)
};
mini.lo1O01Menu[O0lOl0] = {
	createMenu: function() {
		var $ = mini.create({
			type: "menu",
			hideOnClick: false
		});
		$[o1Oo11]("itemclick", this.oo00ll, this);
		return $
	},
	updateMenu: function() {
		var _ = this.grid,
			F = this.menu,
			D = _[lol1oO](),
			B = [];
		for (var A = 0, E = D.length; A < E; A++) {
			var C = D[A],
				$ = {};
			$.checked = C.visible;
			$[o01ooo] = true;
			$.text = _.oo0oloText(C);
			if ($.text == "&nbsp;") {
				if (C.type == "indexcolumn") $.text = "\u5e8f\u53f7";
				if (C.type == "checkcolumn") $.text = "\u9009\u62e9"
			}
			B.push($);
			$._column = C
		}
		F[Oo1Ooo](B)
	},
	ll1l10: function(_) {
		var $ = this.grid;
		if ($.showColumnsMenu == false) return;
		if (Oo11($.l0lO, _.target) == false) return;
		this[OlO1ol]();
		this.menu[ooll0l](_.pageX, _.pageY);
		return false
	},
	oo00ll: function(J) {
		var C = this.grid,
			I = this.menu,
			A = C[lol1oO](),
			E = I[ll101o](),
			$ = J.item,
			_ = $._column,
			H = 0;
		for (var D = 0, B = E.length; D < B; D++) {
			var F = E[D];
			if (F[o1l1oO]()) H++
		}
		if (H < 1) $[l11111](true);
		var G = $[o1l1oO]();
		if (G) C[Oooolo](_);
		else C[l10oO0](_)
	}
};
llOo = {
	getCellErrors: function() {
		var A = this._cellErrors.clone(),
			C = this.data;
		for (var $ = 0, D = A.length; $ < D; $++) {
			var E = A[$],
				_ = E.record,
				B = E.column;
			if (C[o0oOOo](_) == -1) {
				var F = _[this._rowIdField] + "$" + B._id;
				delete this._cellMapErrors[F];
				this._cellErrors.remove(E)
			}
		}
		return this._cellErrors
	},
	getCellError: function($, _) {
		$ = this[OO1110] ? this[OO1110]($) : this[looOl0]($);
		_ = this[lOlOo](_);
		if (!$ || !_) return;
		var A = $[this._rowIdField] + "$" + _._id;
		return this._cellMapErrors[A]
	},
	isValid: function() {
		return this.getCellErrors().length == 0
	},
	validate: function() {
		var A = this.data;
		for (var $ = 0, B = A.length; $ < B; $++) {
			var _ = A[$];
			this.validateRow(_)
		}
	},
	validateRow: function(_) {
		var B = this[lol1oO]();
		for (var $ = 0, C = B.length; $ < C; $++) {
			var A = B[$];
			this.validateCell(_, A)
		}
	},
	validateCell: function(C, E) {
		C = this[OO1110] ? this[OO1110](C) : this[looOl0](C);
		E = this[lOlOo](E);
		if (!C || !E) return;
		var I = {
			record: C,
			row: C,
			node: C,
			column: E,
			field: E.field,
			value: C[E.field],
			isValid: true,
			errorText: ""
		};
		if (E.vtype) mini.o111ol(E.vtype, I.value, I, E);
		if (I[Oloo0o] == true && E.unique && E.field) {
			var A = {},
				D = this.data,
				F = E.field;
			for (var _ = 0, G = D.length; _ < G; _++) {
				var $ = D[_],
					H = $[F];
				if (mini.isNull(H) || H === "");
				else {
					var B = A[H];
					if (B && $ == C) {
						I[Oloo0o] = false;
						I.errorText = mini.OO0Ooo(E, "uniqueErrorText");
						this.setCellIsValid(B, E, I.isValid, I.errorText);
						break
					}
					A[H] = $
				}
			}
		}
		this[lO0OoO]("cellvalidation", I);
		this.setCellIsValid(C, E, I.isValid, I.errorText)
	},
	setIsValid: function(_) {
		if (_) {
			var A = this._cellErrors.clone();
			for (var $ = 0, B = A.length; $ < B; $++) {
				var C = A[$];
				this.setCellIsValid(C.record, C.column, true)
			}
		}
	},
	_removeRowError: function(_) {
		var B = this[Oo00o0]();
		for (var $ = 0, C = B.length; $ < C; $++) {
			var A = B[$],
				E = _[this._rowIdField] + "$" + A._id,
				D = this._cellMapErrors[E];
			if (D) {
				delete this._cellMapErrors[E];
				this._cellErrors.remove(D)
			}
		}
	},
	setCellIsValid: function(_, A, B, D) {
		_ = this[OO1110] ? this[OO1110](_) : this[looOl0](_);
		A = this[lOlOo](A);
		if (!_ || !A) return;
		var E = _[this._rowIdField] + "$" + A._id,
			$ = this.O1lOl1(_, A),
			C = this._cellMapErrors[E];
		delete this._cellMapErrors[E];
		this._cellErrors.remove(C);
		if (B === true) {
			if ($ && C) OloO($, "mini-grid-cell-error")
		} else {
			C = {
				record: _,
				column: A,
				isValid: B,
				errorText: D
			};
			this._cellMapErrors[E] = C;
			this._cellErrors[l10o01](C);
			if ($) ollool($, "mini-grid-cell-error")
		}
	}
};
mini.copyTo(oOl100.prototype, llOo);
mini.GridEditor = function() {
	this._inited = true;
	l1lloO[lO0010][llo0oo][o0OoO0](this);
	this[ooooll]();
	this.el.uid = this.uid;
	this[lO01o0]();
	this.Ol0o1();
	this[Ol0Ooo](this.uiCls)
};
loOo0(mini.GridEditor, l1lloO, {
	el: null,
	_create: function() {
		this.el = document.createElement("input");
		this.el.type = "text";
		this.el.style.width = "100%"
	},
	getValue: function() {
		return this.el.value
	},
	setValue: function($) {
		this.el.value = $
	},
	setWidth: function($) {}
});
Oo01O0 = function($) {
	this._ajaxOption = {
		async: false,
		type: "get"
	};
	this.root = {
		_id: -1,
		_pid: "",
		_level: -1
	};
	this.data = this.root[this.nodesField] = [];
	this.Ol01 = {};
	this.O0O0O = {};
	this._viewNodes = null;
	Oo01O0[lO0010][llo0oo][o0OoO0](this, $);
	this[o1Oo11]("beforeexpand", function(B) {
		var $ = B.node,
			A = this[loOOO0]($),
			_ = $[this.nodesField];
		if (!A && (!_ || _.length == 0)) if (this.loadOnExpand && $.asyncLoad !== false) {
			B.cancel = true;
			this[l11loO]($)
		}
	}, this);
	this[Oool01]()
};
Oo01O0.NodeUID = 1;
var lastNodeLevel = [];
loOo0(Oo01O0, l1lloO, {
	isTree: true,
	ol101: "block",
	autoEscape: false,
	loadOnExpand: true,
	removeOnCollapse: true,
	expandOnDblClick: true,
	expandOnNodeClick: false,
	value: "",
	oo1l0: null,
	allowSelect: true,
	showCheckBox: false,
	showFolderCheckBox: true,
	showExpandButtons: true,
	enableHotTrack: true,
	showArrow: false,
	expandOnLoad: false,
	delimiter: ",",
	url: "",
	root: null,
	resultAsTree: true,
	parentField: "pid",
	idField: "id",
	textField: "text",
	iconField: "iconCls",
	nodesField: "children",
	checkedField: "checked",
	showTreeIcon: false,
	showTreeLines: true,
	checkRecursive: false,
	allowAnim: true,
	o1oo: "mini-tree-checkbox",
	O1lo1: "mini-tree-selectedNode",
	o0O1: "mini-tree-node-hover",
	leafIcon: "mini-tree-leaf",
	folderIcon: "mini-tree-folder",
	Oo00l1: "mini-tree-border",
	ol0o00: "mini-tree-header",
	OoO1lO: "mini-tree-body",
	OOO0l: "mini-tree-node",
	loOll: "mini-tree-nodes",
	oO11ll: "mini-tree-expand",
	Olo00l: "mini-tree-collapse",
	ooloo: "mini-tree-node-ecicon",
	lOo001: "mini-tree-nodeshow",
	uiCls: "mini-tree",
	_changed: false,
	_ajaxOption: {
		async: false,
		type: "get"
	},
	_allowExpandLayout: true,
	autoCheckParent: false,
	allowDrag: false,
	allowDrop: false,
	dragGroupName: "",
	dropGroupName: "",
	allowLeafDropIn: false
});
loOl01 = Oo01O0[O0lOl0];
loOl01[lo0O00] = O1lO0;
loOl01.Oll1ll = o0oOo;
loOl01.o111l = O0001;
loOl01.OO0O1 = lOlo;
loOl01[oO1OOl] = l0lOol;
loOl01[oll0lO] = oOOl1o;
loOl01[o1O001] = OlOo1;
loOl01[o0ol1O] = ol0ol;
loOl01[l0oOoO] = O11lol;
loOl01[Ollo0l] = o1o0;
loOl01[l0oolO] = l101;
loOl01[ll0ooo] = Ol0l;
loOl01[Oo0Ol1] = O0o1ol;
loOl01[Oo1oo0] = l1llo;
loOl01[O1110o] = o101l;
loOl01.O1ooOoText = oo0OO;
loOl01.O1ooOoData = l011;
loOl01[loO0Ol] = O1O1O;
loOl01[O1OOl0] = l10ol0;
loOl01[OOOl0O] = Ol10O;
loOl01[o1lo00] = O1l00o;
loOl01[O1O10O] = o0O01;
loOl01[oO11OO] = oOlO0;
loOl01[o0Olo1] = olo00;
loOl01[l0Oo1O] = o1O1;
loOl01[lO1Ol1] = l11O1;
loOl01[O000Ol] = lO11l;
loOl01[Oo0o10] = oO0110;
loOl01[OOlOoO] = l0O1l;
loOl01[o00ool] = l000O;
loOl01[ooO1o1] = ol10;
loOl01.lOO1o = O0oo1;
loOl01[OO1OO0] = Oo01;
loOl01[llol1o] = l1O1;
loOl01[l110oo] = OlOO;
loOl01[O1l0OO] = lOollo;
loOl01[OlloO1] = o1ol;
loOl01.oO1o0O = oo01Ol;
loOl01.oOoO1l = oollO;
loOl01[O0OOl0] = lo1Olo;
loOl01[llo00o] = lll01;
loOl01.lo1Oll = O11OO;
loOl01.l01O10 = oo11;
loOl01.llOloo = o100l;
loOl01[o010oo] = l0O0o;
loOl01[oO1o0l] = OoO1ll;
loOl01[Ooolol] = ll101;
loOl01[o01o10] = Oo1ll;
loOl01[OOo01l] = l0l0ll;
loOl01[lO1ll0] = O1lOo;
loOl01[l00111] = O0oloo;
loOl01[llOOOO] = O10lOl;
loOl01[lOoo0l] = lO1ooo;
loOl01[lOoOoO] = lOl1;
loOl01[lOOOl1] = Ollo10;
loOl01[oolll1] = o01lo;
loOl01[OOo1oO] = olllo0;
loOl01[O1olOl] = O1lO;
loOl01[Oo111O] = lO0ol;
loOl01[o0oOOl] = o1o0o;
loOl01[oOOolo] = Ool0;
loOl01[lOoo] = ooolO;
loOl01[olOO01] = olo0ol;
loOl01[Oo1o0o] = oo0ol;
loOl01[OO1O0O] = O001O;
loOl01[oOl0O1] = o01lo0;
loOl01[oO11O0] = Oo0loO;
loOl01[O1ol1l] = Ool0o;
loOl01[oolo1o] = lOoo1;
loOl01[o0o11] = o1l0o0;
loOl01[ol1ll0] = l0oOo;
loOl01[oO0o01] = lll1l;
loOl01[OOloO0] = l0OloO;
loOl01[OloooO] = l0l0o1;
loOl01[oO11lO] = lO01OO;
loOl01[ooo00o] = l1o1;
loOl01[OOl101] = OOll00;
loOl01[O1110l] = OlO1;
loOl01[lO11o0] = llol0o;
loOl01.Ol1o1O = llol0oAndText;
loOl01[o1Olo1] = l0o11;
loOl01[l1ol] = oO1o;
loOl01[o0O1Oo] = O10o;
loOl01[O01110] = oo1O;
loOl01[Ol0Ool] = O1o1o1;
loOl01[lol11l] = o0OOO0;
loOl01[lllo01] = lll1lo;
loOl01[ll0O11] = o1O1l;
loOl01[l0Oo0O] = Olooo;
loOl01[oO1100] = o0l00O;
loOl01[loOOlO] = O0ll;
loOl01[l1olol] = l1O1ol;
loOl01[llOO11] = loo10o;
loOl01[oOOOo0] = o0o0l;
loOl01[lOOol1] = loOlol;
loOl01[o1O01l] = ll01o;
loOl01[O1ol0l] = OO1l;
loOl01[o1O0O1] = lol10;
loOl01[O1lO1o] = Oo101O;
loOl01[o11O0l] = llO0o;
loOl01[l0O0l0] = lollo1;
loOl01[o00Olo] = Ololo;
loOl01[lolooO] = O010l;
loOl01[O11o0o] = o0oOll;
loOl01[lOl0l0] = Oloo1;
loOl01[lO10o0] = lolol;
loOl01[l01ol1] = o01o;
loOl01[Ooo00O] = o11O;
loOl01[o0oO11] = oooool;
loOl01[OO0011] = l1o1OO;
loOl01[Ol000l] = l111o1;
loOl01[OO1110] = OoOll;
loOl01[l00ooo] = ol0oO;
loOl01.OoOo01 = lO1l0;
loOl01.l0O0 = Ol1l0o;
loOl01.llO00 = loOO;
loOl01.lO0101 = o00o0;
loOl01[llo1lO] = o10lO;
loOl01[O0lOoo] = OoOllBox;
loOl01[OoOO1] = o01O00;
loOl01[O1ll0o] = l1llll;
loOl01.loo0 = l0oo1;
loOl01.oo1o01 = O1oo;
loOl01.ooOoOl = Ol1lll;
loOl01[o0O110] = oO100;
loOl01.l1l0 = ool1o;
loOl01.O010 = lO01oo;
loOl01[Ol1lo1] = lo01OO;
loOl01[OoloOo] = oO1llo;
loOl01[OO10lO] = OO1ol;
loOl01[o1lO11] = Ol1O0;
loOl01[llll00] = Ol1O0s;
loOl01[O11O0o] = lollll;
loOl01[O1o00l] = lolllls;
loOl01[lllO0l] = O01O0O;
loOl01[lo1O1l] = OOo10;
loOl01[OOl0lo] = olOo0o;
loOl01[lOolO1] = O0o0ol;
loOl01.O100ll = OOoo0o;
loOl01[OO1O1l] = O01O0Os;
loOl01.O0O10 = O1Ol01;
loOl01.lll0 = OlOo0;
loOl01[O1Ol11] = OO001l;
loOl01[O01O1l] = l0l1oo;
loOl01[OO1001] = ol10l;
loOl01[OlOoOo] = O1Ool1;
loOl01[ol10o1] = lol1;
loOl01[lOo1OO] = Ool00;
loOl01[l0oOol] = ooloO;
loOl01[ll0Ol0] = O10O00;
loOl01[OO0000] = o0o0;
loOl01[l0oOl0] = l0lOO0;
loOl01[lo110] = Ol0Ol1;
loOl01[loOOO0] = O1llo;
loOl01[lOo1O0] = l11oO0;
loOl01[l0o01o] = lolO0;
loOl01[oO0l1O] = oOo0l1;
loOl01[o0oOOo] = OllOOl;
loOl01[loOo0o] = olll1o;
loOl01[Ol0Olo] = oo11O;
loOl01[oooO0l] = OOooo;
loOl01[oOlOO0] = oo11lO;
loOl01[lo1110] = ooOll;
loOl01[lOllO1] = Oo1111;
loOl01[lO1l00] = OOollO;
loOl01[Ooolo0] = lo0l;
loOl01[olO011] = o10Oo;
loOl01[O1OlOO] = Oo10O;
loOl01[o1O1OO] = OoOllIcon;
loOl01[O1O01O] = l1O10;
loOl01[O10O0l] = o1oO1;
loOl01[lol1l0] = oO1loo;
loOl01[ol11o1] = o1o101;
loOl01[l00OlO] = lO1O01;
loOl01[O10O1O] = ooO0;
loOl01[oo1010] = llo1;
loOl01[o01oo] = l10O0O;
loOl01[llllOO] = oO1101;
loOl01[OloOO1] = ooOOo;
loOl01[Ool01o] = llOooO;
loOl01[l0O0lo] = ooooOl;
loOl01[lOl10l] = loolO;
loOl01[Oo1lo1] = OO1l1;
loOl01[ollo0l] = l1l1O;
loOl01[Olol10] = O01o1l;
loOl01[l1OOOO] = l11OO;
loOl01[O00l1o] = O00lo;
loOl01[l11ol1] = OoOo;
loOl01.O01OO0 = O01lo1;
loOl01.lo0lo = o1oo01;
loOl01[Oool01] = lll0ol;
loOl01.oo0oO = OlOOlO;
loOl01.oOoOo = l0Oo0o;
loOl01.O1o0l0 = l0Oo0oTitle;
loOl01.l0lOo1 = o1oOOl;
loOl01[oOlO1l] = Ool0oO;
loOl01[o00oll] = Ol1l00;
loOl01.l10oOl = lO1l;
loOl01[Ol011o] = l0000O;
loOl01[ol10oO] = llO0;
loOl01[l11loO] = O1o101;
loOl01[O0O0O1] = O010l0;
loOl01[lO111l] = l1oo0;
loOl01[lO0O1l] = lo10;
loOl01[ooo0oO] = ll0O0;
loOl01[O1o11O] = ooOl;
loOl01[Ool001] = loO1ll;
loOl01[oooO1o] = loOO1;
loOl01[OO0llo] = Ol10o1;
loOl01[llO0l0] = ooloO1;
loOl01[lO0l11] = o1O01O;
loOl01[OlOl10] = oO0O;
loOl01[l100l1] = ooO1OO;
loOl01[lO11oO] = o0OOl0;
loOl01[lO01o0] = OlOoo;
loOl01[ooooll] = lOOl11;
loOl01[OO101l] = O1oolO;
l1O011(Oo01O0, "tree");
ol1l = function($) {
	this.owner = $;
	this.owner[o1Oo11]("NodeMouseDown", this.lOolll, this)
};
ol1l[O0lOl0] = {
	lOolll: function(C) {
		var A = C.node;
		if (C.htmlEvent.button == mini.MouseButton.Right) return;
		var _ = this.owner;
		if (_[OlOOo1]() || _[oO1OOl](C.node) == false) return;
		if (_[OO10lO](A)) return;
		var B = _.OO0O1(A);
		if (B.cancel) return;
		this.dragText = B.dragText;
		this.dragData = _.O1ooOoData();
		if (this.dragData[o0oOOo](A) == -1) this.dragData.push(A);
		var $ = this.O1ooOo();
		$.start(C.htmlEvent)
	},
	OO0O1: function($) {
		var _ = this.owner;
		this.feedbackEl = mini.append(document.body, "<div class=\"mini-feedback\"></div>");
		this.feedbackEl.innerHTML = this.dragText;
		this.lastFeedbackClass = "";
		this[O1ooOO] = _[O1ooOO];
		_[O10O1O](false)
	},
	_getDropTree: function(_) {
		var $ = O111o(_.target, "mini-tree", 500);
		if ($) return mini.get($)
	},
	lo1o1: function(_) {
		var B = this.owner,
			A = this._getDropTree(_.event),
			E = _.now[0],
			C = _.now[1];
		mini[l01o0O](this.feedbackEl, E + 15, C + 18);
		this.dragAction = "no";
		if (A) {
			var $ = A[o0O110](_.event);
			this.dropNode = $;
			if ($ && A[loOooo] == true) {
				if (!A[loOOO0]($)) {
					var D = $[A.nodesField];
					if (D && D.length > 0);
					else if (B.loadOnExpand && $.asyncLoad !== false) A[l11loO]($)
				}
				this.dragAction = this.getFeedback($, C, 3, A)
			} else this.dragAction = "no";
			if (B && A && B != A && !$ && A[Ol0Olo](A.root).length == 0) {
				$ = A[Ooolo0]();
				this.dragAction = "add";
				this.dropNode = $
			}
		}
		this.lastFeedbackClass = "mini-feedback-" + this.dragAction;
		this.feedbackEl.className = "mini-feedback " + this.lastFeedbackClass;
		if (this.dragAction == "no") $ = null;
		this.setRowFeedback($, this.dragAction, A)
	},
	O0l01O: function(A) {
		var E = this.owner,
			C = this._getDropTree(A.event);
		mini[lllO0l](this.feedbackEl);
		this.feedbackEl = null;
		this.setRowFeedback(null);
		var D = [];
		for (var H = 0, G = this.dragData.length; H < G; H++) {
			var J = this.dragData[H],
				B = false;
			for (var K = 0, _ = this.dragData.length; K < _; K++) {
				var F = this.dragData[K];
				if (F != J) {
					B = E[O1OlOO](F, J);
					if (B) break
				}
			}
			if (!B) D.push(J)
		}
		this.dragData = D;
		if (this.dropNode && C && this.dragAction != "no") {
			var L = E.o111l(this.dragData, this.dropNode, this.dragAction);
			if (!L.cancel) {
				var D = L.dragNodes,
					I = L.targetNode,
					$ = L.action;
				if (E == C) E[llll00](D, I, $);
				else {
					E[OO1O1l](D);
					C[O1o00l](D, I, $)
				}
			}
		}
		E[O10O1O](this[O1ooOO]);
		L = {
			dragNode: this.dragData[0],
			dropNode: this.dropNode,
			dragAction: this.dragAction
		};
		E[lO0OoO]("drop", L);
		this.dropNode = null;
		this.dragData = null
	},
	setRowFeedback: function(B, F, A) {
		if (this.lastAddDomNode) OloO(this.lastAddDomNode, "mini-tree-feedback-add");
		if (B == null || this.dragAction == "add") {
			mini[lllO0l](this.feedbackLine);
			this.feedbackLine = null
		}
		this.lastRowFeedback = B;
		if (B != null) if (F == "before" || F == "after") {
			if (!this.feedbackLine) this.feedbackLine = mini.append(document.body, "<div class='mini-feedback-line'></div>");
			this.feedbackLine.style.display = "block";
			var D = A[O0lOoo](B),
				E = D.x,
				C = D.y - 1;
			if (F == "after") C += D.height;
			mini[l01o0O](this.feedbackLine, E, C);
			var _ = A[lOo011](true);
			oOl1O(this.feedbackLine, _.width)
		} else {
			var $ = A.llO00(B);
			ollool($, "mini-tree-feedback-add");
			this.lastAddDomNode = $
		}
	},
	getFeedback: function($, I, F, A) {
		var J = A[O0lOoo]($),
			_ = J.height,
			H = I - J.y,
			G = null;
		if (this.dragData[o0oOOo]($) != -1) return "no";
		var C = false;
		if (F == 3) {
			C = A[loOOO0]($);
			for (var E = 0, D = this.dragData.length; E < D; E++) {
				var K = this.dragData[E],
					B = A[O1OlOO](K, $);
				if (B) {
					G = "no";
					break
				}
			}
		}
		if (G == null) if (C && A.allowLeafDropIn == false) {
			if (H > _ / 2) G = "after";
			else G = "before"
		} else if (H > (_ / 3) * 2) G = "after";
		else if (_ / 3 <= H && H <= (_ / 3 * 2)) G = "add";
		else G = "before";
		var L = A.Oll1ll(G, this.dragData, $);
		return L.effect
	},
	O1ooOo: function() {
		if (!this.drag) this.drag = new mini.Drag({
			capture: false,
			onStart: mini.createDelegate(this.OO0O1, this),
			onMove: mini.createDelegate(this.lo1o1, this),
			onStop: mini.createDelegate(this.O0l01O, this)
		});
		return this.drag
	}
};
o11OoO = function() {
	this.columns = [];
	this.ooo1o = [];
	this.oO1oO = {};
	this.o0l1OO = {};
	this._cellErrors = [];
	this._cellMapErrors = {};
	o11OoO[lO0010][llo0oo][o0OoO0](this);
	this.OoOooo.style.display = this[Olo1lO] ? "" : "none"
};
loOo0(o11OoO, Oo01O0, {
	_rowIdField: "_id",
	width: 300,
	height: 180,
	minWidth: 300,
	minHeight: 150,
	maxWidth: 5000,
	maxHeight: 3000,
	allowResize: false,
	treeColumn: "",
	columns: [],
	columnWidth: 80,
	allowResizeColumn: true,
	allowMoveColumn: true,
	o0OO1l: true,
	_headerCellCls: "mini-treegrid-headerCell",
	_cellCls: "mini-treegrid-cell",
	Oo00l1: "mini-treegrid-border",
	ol0o00: "mini-treegrid-header",
	OoO1lO: "mini-treegrid-body",
	OOO0l: "mini-treegrid-node",
	loOll: "mini-treegrid-nodes",
	O1lo1: "mini-treegrid-selectedNode",
	o0O1: "mini-treegrid-hoverNode",
	oO11ll: "mini-treegrid-expand",
	Olo00l: "mini-treegrid-collapse",
	ooloo: "mini-treegrid-ec-icon",
	lOo001: "mini-treegrid-nodeTitle",
	uiCls: "mini-treegrid"
});
o1Ooo = o11OoO[O0lOl0];
o1Ooo[lo0O00] = olOo1;
o1Ooo.lolo1 = lO101;
o1Ooo[o1olOl] = O11o1o;
o1Ooo[oo1ll] = OoO0;
o1Ooo.lO100o = lOO11;
o1Ooo[llloO0] = lOO0o;
o1Ooo[loO0lO] = o1011;
o1Ooo[llOll] = OoOOl;
o1Ooo[oool10] = olOlo;
o1Ooo[OOlo1o] = lOO0oColumn;
o1Ooo[OOOlo0] = o1011Column;
o1Ooo[Oo111O] = OO110;
o1Ooo[o0oOOl] = O000O;
o1Ooo.lOlo0l = o100O;
o1Ooo.o011O0 = o0llO0;
o1Ooo[Oo1O10] = O0Ool;
o1Ooo.lo0lo = o01Ol;
o1Ooo[OO11Oo] = lO0oo;
o1Ooo[l11ol1] = ol0OO;
o1Ooo[oo0l1o] = OOlOlo;
o1Ooo[Oool01] = o0l1;
o1Ooo.O1o0l0 = oo11l;
o1Ooo.lo0O0l = o1oO;
o1Ooo.ol0O = lOOO0;
o1Ooo[o0OOOl] = lO10;
o1Ooo.lo1l0 = OoOoO;
o1Ooo[ooooll] = o010;
o1Ooo.lO0101 = o1l1O1;
mini.copyTo(o11OoO.prototype, l1l0O);
mini.copyTo(o11OoO.prototype, llOo);
l1O011(o11OoO, "treegrid");
mini.DataSource = function() {
	mini.DataSource[lO0010][llo0oo][o0OoO0](this);
	this._init()
};
loOo0(mini.DataSource, l1l11l, {
	idField: "id",
	textField: "text",
	_init: function() {
		this.source = [];
		this.dataview = [];
		this.visibleRows = null;
		this._ids = {};
		this._removeds = [];
		this.Oo0o = {};
		this._errors = {};
		this.Oo1lOl = null;
		this.lo1O0l = [];
		this.lllOol = {};
		this.__changeCount = 0
	},
	getSource: function() {
		return this.source
	},
	getList: function() {
		return this.source.clone()
	},
	getDataView: function() {
		return this.dataview
	},
	getVisibleRows: function() {
		if (!this.visibleRows) this.visibleRows = this.getDataView().clone();
		return this.visibleRows
	},
	setData: function($) {
		this[ooo0oO]($)
	},
	loadData: function($) {
		if (!mini.isArray($)) $ = [];
		this._init();
		this.l10Ol($);
		this.OOoo10();
		this[lO0OoO]("loaddata");
		return true
	},
	l10Ol: function(C) {
		this.source = C;
		this.dataview = C;
		var A = this.source,
			B = this._ids;
		for (var _ = 0, D = A.length; _ < D; _++) {
			var $ = A[_];
			$._id = mini.DataSource.RecordId++;
			B[$._id] = $;
			$._uid = $._id
		}
	},
	clearData: function() {
		this._init();
		this.OOoo10();
		this[lO0OoO]("cleardata")
	},
	clear: function() {
		this[lO0O1l]()
	},
	updateRecord: function($, B, _) {
		if (mini.isNull($)) return;
		if (typeof B == "string") {
			var C = $[B];
			if (mini[oo1011](C, _)) return false;
			this.beginChange();
			$[B] = _;
			this._setModified($, B, C);
			this.endChange()
		} else {
			this.beginChange();
			for (var A in B) {
				var C = $[A],
					_ = B[A];
				if (mini[oo1011](C, _)) continue;
				$[A] = _;
				this._setModified($, A, C)
			}
			this.endChange()
		}
		this[lO0OoO]("update", {
			record: $
		})
	},
	deleteRecord: function($) {
		this._setDeleted($);
		this.OOoo10();
		this[lO0OoO]("delete", {
			record: $
		})
	},
	getby_id: function($) {
		$ = typeof $ == "object" ? $._id : $;
		return this._ids[$]
	},
	getbyId: function(D) {
		var B = typeof D;
		if (B == "number") return this[oO0l1O](D);
		if (typeof D == "object") return D;
		var A = this[oooO1o]();
		for (var _ = 0, C = A.length; _ < C; _++) {
			var $ = A[_];
			if ($[this.idField] == D) return $
		}
		return null
	},
	getsByIds: function(_) {
		if (mini.isNull(_)) _ = "";
		_ = String(_);
		var D = [],
			A = String(_).split(",");
		for (var $ = 0, C = A.length; $ < C; $++) {
			var B = this.getbyId(A[$]);
			if (B) D.push(B)
		}
		return D
	},
	getRecord: function($) {
		return this[looOl0]($)
	},
	getRow: function($) {
		var _ = typeof $;
		if (_ == "string") return this.getbyId($);
		else if (_ == "number") return this[oO0l1O]($);
		else if (_ == "object") return $
	},
	delimiter: ",",
	Ol1o1O: function(B, $) {
		if (mini.isNull(B)) B = [];
		$ = $ || this.delimiter;
		if (!mini.isArray(B)) B = this.getsByIds(B);
		var C = [],
			D = [];
		for (var A = 0, E = B.length; A < E; A++) {
			var _ = B[A];
			if (_) {
				C.push(this[o00oll](_));
				D.push(this[oOlO1l](_))
			}
		}
		return [C.join($), D.join($)]
	},
	getItemValue: function($) {
		if (!$) return "";
		var _ = $[this.idField];
		return mini.isNull(_) ? "" : String(_)
	},
	getItemText: function($) {
		if (!$) return "";
		var _ = $[this.textField];
		return mini.isNull(_) ? "" : String(_)
	},
	isModified: function(A, _) {
		var $ = this.Oo0o[A._id];
		if (!$) return false;
		if (mini.isNull(_)) return false;
		return $.hasOwnProperty(_)
	},
	hasRecord: function($) {
		return !!this.getby_id($)
	},
	findRecords: function(D, A) {
		var F = typeof D == "function",
			I = D,
			E = A || this,
			C = this.source,
			B = [];
		for (var _ = 0, H = C.length; _ < H; _++) {
			var $ = C[_];
			if (F) {
				var G = I[o0OoO0](E, $);
				if (G == true) B[B.length] = $;
				if (G === 1) break
			} else if ($[D] == A) B[B.length] = $
		}
		return B
	},
	each: function(A, _) {
		var $ = this.getDataView().clone();
		_ = _ || this;
		mini.forEach($, A, _)
	},
	getCount: function() {
		return this.getDataView().length
	},
	setIdField: function($) {
		this[l0o0oo] = $
	},
	setTextField: function($) {
		this[O111ll] = $
	},
	__changeCount: 0,
	beginChange: function() {
		this.__changeCount++
	},
	endChange: function($) {
		this.__changeCount--;
		if (this.__changeCount < 0) this.__changeCount = 0;
		if (($ !== false && this.__changeCount == 0) || $ == true) {
			this.__changeCount = 0;
			this.OOoo10()
		}
	},
	OOoo10: function() {
		this.visibleRows = null;
		if (this.__changeCount == 0) this[lO0OoO]("datachanged")
	},
	_setAdded: function($) {
		$._id = mini.DataSource.RecordId++;
		$._uid = $._id;
		$._state = "added";
		this._ids[$._id] = $;
		delete this.Oo0o[$._id]
	},
	_setModified: function($, A, B) {
		if ($._state != "added" && $._state != "deleted" && $._state != "removed") {
			$._state = "modified";
			var _ = this.oO01o1($);
			if (!_.hasOwnProperty(A)) _[A] = B
		}
	},
	_setDeleted: function($) {
		if ($._state != "added" && $._state != "deleted" && $._state != "removed") $._state = "deleted"
	},
	_setRemoved: function($) {
		delete this._ids[$._id];
		if ($._state != "added" && $._state != "removed") {
			$._state = "removed";
			delete this.Oo0o[$._id];
			this._removeds.push($)
		}
	},
	oO01o1: function($) {
		var A = $._id,
			_ = this.Oo0o[A];
		if (!_) _ = this.Oo0o[A] = {};
		return _
	},
	Oo1lOl: null,
	lo1O0l: [],
	lllOol: null,
	multiSelect: false,
	isSelected: function($) {
		if (!$) return false;
		if (typeof $ != "string") $ = $._id;
		return !!this.lllOol[$]
	},
	setSelected: function($) {
		$ = this.getby_id($);
		var _ = this[lool1o]();
		if (_ != $) {
			this.Oo1lOl = $;
			if ($) this[o00OO0]($);
			else this[oOOO1O](this[lool1o]());
			this.Oo1lll($)
		}
	},
	getSelected: function() {
		if (this[loO0ll](this.Oo1lOl)) return this.Oo1lOl;
		return this.lo1O0l[0]
	},
	setCurrent: function($) {
		this[lo10Ol]($)
	},
	getCurrent: function() {
		return this[lool1o]()
	},
	getSelecteds: function() {
		return this.lo1O0l.clone()
	},
	select: function($) {
		if (mini.isNull($)) return;
		this[OlO1lO]([$])
	},
	deselect: function($) {
		if (mini.isNull($)) return;
		this[O1o00]([$])
	},
	selectAll: function() {
		this[OlO1lO](this[oooO1o]())
	},
	deselectAll: function() {
		this[O1o00](this[oooO1o]())
	},
	selects: function(A) {
		if (!mini.isArray(A)) return;
		A = A.clone();
		if (this[l0o000] == false) {
			this[O1o00](this[oolO0]());
			if (A.length > 0) A.length = 1;
			this.lo1O0l = [];
			this.lllOol = {}
		}
		var B = [];
		for (var _ = 0, C = A.length; _ < C; _++) {
			var $ = this.getbyId(A[_]);
			if (!$) continue;
			if (!this[loO0ll]($)) {
				this.lo1O0l.push($);
				this.lllOol[$._id] = $;
				B.push($)
			}
		}
		this.oo1l(A, true, B)
	},
	deselects: function(A) {
		if (!mini.isArray(A)) return;
		A = A.clone();
		var B = [];
		for (var _ = A.length - 1; _ >= 0; _--) {
			var $ = this.getbyId(A[_]);
			if (!$) continue;
			if (this[loO0ll]($)) {
				this.lo1O0l.remove($);
				delete this.lllOol[$._id];
				B.push($)
			}
		}
		this.oo1l(A, false, B)
	},
	oo1l: function(A, D, B) {
		var C = {
			records: A,
			select: D,
			selected: this[lool1o](),
			selecteds: this[oolO0](),
			_records: B
		};
		this[lO0OoO]("SelectionChanged", C);
		var _ = this._current,
			$ = this[o10Ol]();
		if (_ != $) {
			this._current = $;
			this.Oo1lll($)
		}
	},
	Oo1lll: function($) {
		if (this._currentTimer) clearTimeout(this._currentTimer);
		var _ = this;
		this._currentTimer = setTimeout(function() {
			_._currentTimer = null;
			var A = {
				record: $
			};
			_[lO0OoO]("CurrentChanged", A)
		}, 1)
	},
	oolloO: function() {
		for (var _ = this.lo1O0l.length - 1; _ >= 0; _--) {
			var $ = this.lo1O0l[_],
				A = this.getby_id($._id);
			if (!A) {
				this.lo1O0l.removeAt(_);
				delete this.lllOol[$._id]
			}
		}
		if (this.Oo1lOl && this.getby_id(this.Oo1lOl._id) == null) this.Oo1lOl = null
	},
	setMultiSelect: function($) {
		if (this[l0o000] != $) {
			this[l0o000] = $;
			if ($ == false);
		}
	},
	getMultiSelect: function() {
		return this[l0o000]
	},
	selectPrev: function() {
		var _ = this[lool1o]();
		if (!_) _ = this[oO0l1O](0);
		else {
			var $ = this[o0oOOo](_);
			_ = this[oO0l1O]($ - 1)
		}
		if (_) {
			this[lOlOOo]();
			this[o00OO0](_);
			this[Ol0l01](_)
		}
	},
	selectNext: function() {
		var _ = this[lool1o]();
		if (!_) _ = this[oO0l1O](0);
		else {
			var $ = this[o0oOOo](_);
			_ = this[oO0l1O]($ + 1)
		}
		if (_) {
			this[lOlOOo]();
			this[o00OO0](_);
			this[Ol0l01](_)
		}
	},
	selectFirst: function() {
		var $ = this[oO0l1O](0);
		if ($) {
			this[lOlOOo]();
			this[o00OO0]($);
			this[Ol0l01]($)
		}
	},
	selectLast: function() {
		var _ = this[O1ooo](),
			$ = this[oO0l1O](_.length - 1);
		if ($) {
			this[lOlOOo]();
			this[o00OO0]($);
			this[Ol0l01]($)
		}
	},
	getSelectedsId: function($) {
		var A = this[oolO0](),
			_ = this.Ol1o1O(A, $);
		return _[0]
	},
	getSelectedsText: function($) {
		var A = this[oolO0](),
			_ = this.Ol1o1O(A, $);
		return _[1]
	},
	_filterInfo: null,
	_sortInfo: null,
	filter: function(_, $) {
		if (typeof _ != "function") return;
		$ = $ || this;
		this._filterInfo = [_, $];
		this.l0Oooo();
		this.O1ll0l();
		this.OOoo10();
		this[lO0OoO]("filter")
	},
	clearFilter: function() {
		if (!this._filterInfo) return;
		this._filterInfo = null;
		this.l0Oooo();
		this.O1ll0l();
		this.OOoo10();
		this[lO0OoO]("filter")
	},
	sort: function(A, _, $) {
		if (typeof A != "function") return;
		_ = _ || this;
		this._sortInfo = [A, _, $];
		this.O1ll0l();
		this.OOoo10();
		this[lO0OoO]("sort")
	},
	clearSort: function() {
		this._sortInfo = null;
		this.sortField = this.sortOrder = null;
		this.l0Oooo();
		this.OOoo10();
		this[lO0OoO]("filter")
	},
	_doClientSortField: function(C, B, _) {
		var A = this[OOO1lo](C, _);
		if (!A) return;
		this.sortField = C;
		this.sortOrder = B;
		var $ = B == "desc";
		this[O0o1oO](A, this, $)
	},
	_getSortFnByField: function(B, C) {
		if (!B) return null;
		var A = null,
			_ = mini.sortTypes[C];
		if (!_) _ = mini.sortTypes["string"];

		function $(D, H) {
			var E = mini._getMap(B, D),
				C = mini._getMap(B, H),
				G = mini.isNull(E) || E === "",
				A = mini.isNull(C) || C === "";
			if (G) return -1;
			if (A) return 1;
			var $ = _(E),
				F = _(C);
			if ($ > F) return 1;
			else if ($ == F) return 0;
			else return -1
		}
		A = $;
		return A
	},
	ajaxAsync: true,
	ajaxMethod: "",
	ajaxOptions: null,
	autoLoad: false,
	url: "",
	pageSize: 20,
	pageIndex: 0,
	totalCount: 0,
	totalPage: 0,
	sortField: "",
	sortOrder: "",
	loadParams: null,
	getLoadParams: function() {
		return this.loadParams || {}
	},
	sortMode: "server",
	pageIndexField: "pageIndex",
	pageSizeField: "pageSize",
	sortFieldField: "sortField",
	sortOrderField: "sortOrder",
	totalField: "total",
	dataField: "data",
	load: function($, C, B, A) {
		if (typeof $ == "string") {
			this[lO111l]($);
			return
		}
		if (this._loadTimer) clearTimeout(this._loadTimer);
		this.loadParams = $ || {};
		if (this.ajaxAsync) {
			var _ = this;
			this._loadTimer = setTimeout(function() {
				_.l10oOlAjax(_.loadParams, C, B, A);
				_._loadTimer = null
			}, 1)
		} else this.l10oOlAjax(this.loadParams, C, B, A)
	},
	reload: function(A, _, $) {
		this[OlOl10](this.loadParams, A, _, $)
	},
	gotoPage: function($, A) {
		var _ = this.loadParams || {};
		if (mini.isNumber($)) _[l1OOo0] = $;
		if (mini.isNumber(A)) _[lolo0O] = A;
		this[OlOl10](_)
	},
	sortBy: function(A, _) {
		this.sortField = A;
		this.sortOrder = _ == "asc" ? "asc" : "desc";
		if (this.sortMode == "server") {
			var $ = this.getLoadParams();
			$.sortField = A;
			$.sortOrder = _;
			$[l1OOo0] = this[l1OOo0];
			this[OlOl10]($)
		}
	},
	checkSelectOnLoad: true,
	selectOnLoad: false,
	l10oOlAjax: function(G, I, B, C, D) {
		G = G || {};
		if (mini.isNull(G[l1OOo0])) G[l1OOo0] = 0;
		if (mini.isNull(G[lolo0O])) G[lolo0O] = this[lolo0O];
		G.sortField = this.sortField;
		G.sortOrder = this.sortOrder;
		this.loadParams = G;
		var H = this._evalUrl(),
			_ = this._evalType(H),
			J = {
				url: H,
				async: this.ajaxAsync,
				type: _,
				data: G,
				params: G,
				cancel: false
			};
		if (J.data != J.params && J.params != G) J.data = J.params;
		mini.copyTo(J, this.ajaxOptions);
		this._OnBeforeLoad(J);
		if (J.cancel == true) return;
		var $ = {};
		$[this.pageIndexField] = G[l1OOo0];
		$[this.pageSizeField] = G[lolo0O];
		if (G.sortField) $[this.sortFieldField] = G.sortField;
		if (G.sortOrder) $[this.sortOrderField] = G.sortOrder;
		delete G[l1OOo0];
		delete G[lolo0O];
		delete G.sortField;
		delete G.sortOrder;
		mini.copyTo(G, $);
		var F = this[lool1o]();
		this.Oo1lOlValue = F ? F[this.idField] : null;
		var A = this;
		A._resultObject = null;
		var E = {
			url: J.url,
			type: J.type,
			async: J.async,
			data: J.data,
			cache: false,
			dataType: "text",
			success: function(C, K, _) {
				var F = null;
				try {
					F = mini.decode(C)
				} catch (J) {
					if (mini_debugger == true) alert(H + "\n json is error.")
				}
				if (F == null) {
					F = {};
					F[A.dataField] = [];
					F[A.totalField] = 0
				}
				if (mini.isArray(F)) {
					var E = {};
					E[A.dataField] = F;
					E[A.totalField] = F.length;
					F = E
				}
				F.total = F[A.totalField];
				F.data = F[A.dataField];
				if (!F.data) F.data = [];
				if (!F.total) F.total = 0;
				A._resultObject = F;
				var J = {
					xhr: _,
					text: C,
					textStatus: K,
					result: F,
					total: F.total,
					data: F.data.clone(),
					pageIndex: G[A.pageIndexField],
					pageSize: G[A.pageSizeField]
				};
				if (mini.isNumber(F.error) && F.error != 0) {
					J.textStatus = "servererror";
					J.errorCode = F.error;
					J.stackTrace = F.stackTrace;
					J.errorMsg = F.errorMsg;
					if (mini_debugger == true) alert(H + "\n" + J.textStatus + "\n" + J.stackTrace);
					A[lO0OoO]("loaderror", J);
					if (B) B[o0OoO0](A, J)
				} else if (D) D(J);
				else {
					A._OnPreLoad(J);
					A[l1OOo0] = J[l1OOo0];
					A[lolo0O] = J[lolo0O];
					A[l0111l](J.total);
					A[lO0l11](J.data);
					if (A.Oo1lOlValue && A[oolOOo]) {
						var $ = A.getbyId(A.Oo1lOlValue);
						if ($) A[o00OO0]($)
					}
					if (A[lool1o]() == null && A.selectOnLoad && A.getDataView().length > 0) A[o00OO0](0);
					A[lO0OoO]("load", J);
					if (I) I[o0OoO0](A, J)
				}
			},
			error: function($, D, _) {
				var C = {
					xhr: $,
					text: $.responseText,
					textStatus: D
				};
				C.errorMsg = $.responseText;
				C.errorCode = $.status;
				if (mini_debugger == true) alert(H + "\n" + C.errorCode + "\n" + C.errorMsg);
				A[lO0OoO]("loaderror", C);
				if (B) B[o0OoO0](A, C)
			},
			complete: function($, B) {
				var _ = {
					xhr: $,
					text: $.responseText,
					textStatus: B
				};
				A[lO0OoO]("loadcomplete", _);
				if (C) C[o0OoO0](A, _);
				A._xhr = null
			}
		};
		if (this._xhr) this._xhr.abort();
		this._xhr = mini.ajax(E)
	},
	_OnBeforeLoad: function($) {
		this[lO0OoO]("beforeload", $)
	},
	_OnPreLoad: function($) {
		this[lO0OoO]("preload", $)
	},
	_evalUrl: function() {
		var url = this.url;
		if (typeof url == "function") url = url();
		else {
			try {
				url = eval(url)
			} catch (ex) {
				url = this.url
			}
		}
		return url
	},
	_evalType: function(_) {
		var $ = this.ajaxMethod;
		if (!$) {
			$ = "post";
			if (_) {
				if (_[o0oOOo](".txt") != -1 || _[o0oOOo](".json") != -1) $ = "get"
			} else $ = "get"
		}
		return $
	},
	setSortMode: function($) {
		this.sortMode = $
	},
	getSortMode: function() {
		return this.sortMode
	},
	setAjaxOptions: function($) {
		this.ajaxOptions = $
	},
	getAjaxOptions: function() {
		return this.ajaxOptions
	},
	setAutoLoad: function($) {
		this.autoLoad = $
	},
	getAutoLoad: function() {
		return this.autoLoad
	},
	setUrl: function($) {
		this.url = $;
		if (this.autoLoad) this[OlOl10]()
	},
	getUrl: function() {
		return this.url
	},
	setPageIndex: function($) {
		this[l1OOo0] = $;
		this[lO0OoO]("pageinfochanged")
	},
	getPageIndex: function() {
		return this[l1OOo0]
	},
	setPageSize: function($) {
		this[lolo0O] = $;
		this[lO0OoO]("pageinfochanged")
	},
	getPageSize: function() {
		return this[lolo0O]
	},
	setTotalCount: function($) {
		this[oO1lo0] = $;
		this[lO0OoO]("pageinfochanged")
	},
	getTotalCount: function() {
		return this[oO1lo0]
	},
	getTotalPage: function() {
		return this.totalPage
	},
	setCheckSelectOnLoad: function($) {
		this[oolOOo] = $
	},
	getCheckSelectOnLoad: function() {
		return this[oolOOo]
	},
	setSelectOnLoad: function($) {
		this.selectOnLoad = $
	},
	getSelectOnLoad: function() {
		return this.selectOnLoad
	}
});
mini.DataSource.RecordId = 1;
mini.DataTable = function() {
	mini.DataTable[lO0010][llo0oo][o0OoO0](this)
};
loOo0(mini.DataTable, mini.DataSource, {
	_init: function() {
		mini.DataTable[lO0010]._init[o0OoO0](this);
		this._filterInfo = null;
		this._sortInfo = null
	},
	add: function($) {
		return this.insert(this.source.length, $)
	},
	addRange: function($) {
		this.insertRange(this.source.length, $)
	},
	insert: function($, _) {
		if (!_) return null;
		if (!mini.isNumber($)) {
			var B = this[OollO1]($);
			if (B) $ = this[o0oOOo](B);
			else $ = this.getDataView().length
		}
		var C = this.dataview[$];
		if (C) this.dataview.insert($, _);
		else this.dataview[l10o01](_);
		if (this.dataview != this.source) if (C) {
			var A = this.source[o0oOOo](C);
			this.source.insert(A, _)
		} else this.source[l10o01](_);
		this._setAdded(_);
		this.OOoo10();
		var D = {
			index: $,
			record: _
		};
		this[lO0OoO]("add", D)
	},
	insertRange: function($, B) {
		if (!mini.isArray(B)) return;
		this.beginChange();
		for (var A = 0, C = B.length; A < C; A++) {
			var _ = B[A];
			this.insert($ + A, _)
		}
		this.endChange()
	},
	remove: function(_, A) {
		var $ = this[o0oOOo](_);
		return this.removeAt($, A)
	},
	removeAt: function($, D) {
		var _ = this[oO0l1O]($);
		if (!_) return null;
		var B = this[loO0ll](_);
		this.source.removeAt($);
		if (this.dataview !== this.source) this.dataview.removeAt($);
		this._setRemoved(_);
		this.oolloO();
		this.OOoo10();
		var C = {
			record: _
		};
		this[lO0OoO]("remove", C);
		if (B && D) {
			var A = this[oO0l1O]($);
			if (!A) A = this[oO0l1O]($ - 1);
			this[lOlOOo]();
			this[o00OO0](A)
		}
	},
	removeRange: function(A, C) {
		if (!mini.isArray(A)) return;
		this.beginChange();
		for (var _ = 0, B = A.length; _ < B; _++) {
			var $ = A[_];
			this.remove($, C)
		}
		this.endChange()
	},
	move: function(_, H) {
		if (!_ || !mini.isNumber(H)) return;
		if (H < 0) H = this.dataview.length;
		if (mini.isArray(_)) {
			this.beginChange();
			var I = _,
				C = this[oO0l1O](H),
				F = this;
			mini[O0o1oO](I, function($, _) {
				return F[o0oOOo]($) > F[o0oOOo](_)
			}, this);
			for (var E = 0, D = I.length; E < D; E++) {
				var A = I[E],
					$ = this[o0oOOo](C);
				this.move(A, $)
			}
			this.endChange();
			return
		}
		var B = this.dataview[H];
		this.dataview.remove(_);
		var G = this.dataview[o0oOOo](B);
		if (G != -1) H = G;
		if (B) this.dataview.insert(H, _);
		else this.dataview[l10o01](_);
		if (this.dataview != this.source) {
			this.source.remove(_);
			G = this.source[o0oOOo](B);
			if (G != -1) H = G;
			if (B) this.source.insert(H, _);
			else this.source[l10o01](_)
		}
		this.OOoo10();
		var J = {
			index: H,
			record: _
		};
		this[lO0OoO]("move", J)
	},
	indexOf: function($) {
		return this.dataview[o0oOOo]($)
	},
	getAt: function($) {
		return this.dataview[$]
	},
	getRange: function(A, B) {
		if (A > B) {
			var C = A;
			A = B;
			B = C
		}
		var D = [];
		for (var _ = A, E = B; _ <= E; _++) {
			var $ = this.dataview[_];
			D.push($)
		}
		return D
	},
	selectRange: function($, _) {
		if (!mini.isNumber($)) $ = this[o0oOOo]($);
		if (!mini.isNumber(_)) _ = this[o0oOOo](_);
		if (mini.isNull($) || mini.isNull(_)) return;
		var A = this[lOlo11]($, _);
		this[OlO1lO](A)
	},
	toArray: function() {
		return this.source.clone()
	},
	getChanges: function(B) {
		var A = [];
		if (B == "removed" || B == null) A.addRange(this._removeds.clone());
		for (var _ = 0, C = this.source.length; _ < C; _++) {
			var $ = this.source[_];
			if (!$._state) continue;
			if ($._state == B || B == null) A[A.length] = $
		}
		return A
	},
	accept: function() {
		this.beginChange();
		for (var _ = 0, A = this.source.length; _ < A; _++) {
			var $ = this.source[_];
			this[olll0o]($)
		}
		this._removeds = [];
		this.Oo0o = {};
		this.endChange()
	},
	reject: function() {
		this.beginChange();
		for (var _ = 0, A = this.source.length; _ < A; _++) {
			var $ = this.source[_];
			this.rejectRecord($)
		}
		this._removeds = [];
		this.Oo0o = {};
		this.endChange()
	},
	acceptRecord: function($) {
		delete this.Oo0o[$._id];
		if ($._state == "deleted") this[lllO0l]($);
		else {
			delete $._state;
			delete this.Oo0o[$._id];
			this.OOoo10()
		}
	},
	rejectRecord: function(_) {
		if (_._state == "added") this[lllO0l](_);
		else if (_._state == "modified" || _._state == "deleted") {
			var $ = this.oO01o1(_);
			mini.copyTo(_, $);
			delete _._state;
			delete this.Oo0o[_._id];
			this.OOoo10()
		}
	},
	l0Oooo: function() {
		if (!this._filterInfo) {
			this.dataview = this.source;
			return
		}
		var F = this._filterInfo[0],
			D = this._filterInfo[1],
			$ = [],
			C = this.source;
		for (var _ = 0, E = C.length; _ < E; _++) {
			var B = C[_],
				A = F[o0OoO0](D, B, _, this);
			if (A !== false) $.push(B)
		}
		this.dataview = $
	},
	O1ll0l: function() {
		if (!this._sortInfo) return;
		var B = this._sortInfo[0],
			A = this._sortInfo[1],
			$ = this._sortInfo[2],
			_ = this.getDataView().clone();
		mini[O0o1oO](_, B, A);
		if ($) _.reverse();
		this.dataview = _
	}
});
l1O011(mini.DataTable, "datatable");
mini.DataTree = function() {
	mini.DataTree[lO0010][llo0oo][o0OoO0](this)
};
loOo0(mini.DataTree, mini.DataSource, {
	isTree: true,
	expandOnLoad: false,
	idField: "id",
	parentField: "pid",
	nodesField: "children",
	resultAsTree: true,
	checkModel: "cascade",
	autoCheckParent: false,
	onlyLeafCheckable: false,
	setExpandOnLoad: function($) {
		this.expandOnLoad = $
	},
	getExpandOnLoad: function() {
		return this.expandOnLoad
	},
	setParentField: function($) {
		this[OllolO] = $
	},
	setNodesField: function($) {
		if (this.nodesField != $) {
			var _ = this.root[this.nodesField];
			this.nodesField = $;
			this.l10Ol(_)
		}
	},
	setResultAsTree: function($) {
		this[OO0l00] = $
	},
	setCheckRecursive: function($) {
		this.checkModel = $ ? "cascade" : "multiple"
	},
	getCheckRecursive: function() {
		return this.checkModel == "cascade"
	},
	setShowFolderCheckBox: function($) {
		this.onlyLeafCheckable = !$
	},
	getShowFolderCheckBox: function() {
		return !this.onlyLeafCheckable
	},
	_OnBeforeLoad: function(_) {
		var $ = this._loadingNode || this.root;
		_.node = $;
		if (this.isNodeLoading()) {
			_.async = true;
			_.isRoot = _.node == this.root;
			if (!_.isRoot) _.data[this.idField] = this[o00oll](_.node)
		}
		this[lO0OoO]("beforeload", _)
	},
	_OnPreLoad: function(B) {
		if (this[OO0l00] == false) B.data = mini.arrayToTree(B.data, this.nodesField, this.idField, this[OllolO]);
		this[lO0OoO]("preload", B);
		var _ = this.nodesField,
			$ = this.expandOnLoad;

		function A(G, C) {
			for (var D = 0, F = G.length; D < F; D++) {
				var E = G[D];
				if ($ === true || (mini.isNumber($) && C <= $)) E.expanded = true;
				else E.expanded = false;
				var B = E[_];
				if (B) A(B, C + 1)
			}
		}
		A(B.data, 0)
	},
	_init: function() {
		mini.DataTree[lO0010]._init[o0OoO0](this);
		this.root = {
			_id: -1,
			_level: -1
		};
		this.source = this.root[this.nodesField] = [];
		this.viewNodes = null;
		this.dataview = null;
		this.visibleRows = null;
		this._ids[this.root._id] = this.root
	},
	l10Ol: function(D) {
		this.source = this.root[this.nodesField] = D || [];
		this.viewNodes = null;
		this.dataview = null;
		this.visibleRows = null;
		var A = mini[llo11l](D, this.nodesField),
			B = this._ids;
		B[this.root._id] = this.root;
		for (var _ = 0, E = A.length; _ < E; _++) {
			var C = A[_];
			C._id = mini.DataSource.RecordId++;
			B[C._id] = C;
			C._uid = C._id
		}
		A = mini[llo11l](D, this.nodesField, "_id", "_pid", this.root._id);
		for (_ = 0, E = A.length; _ < E; _++) {
			var C = A[_],
				$ = this[lO1l00](C);
			C._pid = $._id;
			C._level = $._level + 1;
			delete C._state
		}
		this._doUpdateLoadedCheckedNodes()
	},
	_setAdded: function(_) {
		var $ = this[lO1l00](_);
		_._id = mini.DataSource.RecordId++;
		_._uid = _._id;
		_._pid = $._id;
		_[this.parentField] = $[this.idField];
		_._level = $._level + 1;
		_._state = "added";
		this._ids[_._id] = _;
		delete this.Oo0o[_._id]
	},
	oo0oO: function($) {
		var _ = $[this.nodesField];
		if (!_) _ = $[this.nodesField] = [];
		if (this.viewNodes && !this.viewNodes[$._id]) this.viewNodes[$._id] = [];
		return _
	},
	addNode: function(_, $) {
		if (!_) return;
		return this.insertNode(_, -1, $)
	},
	addNodes: function(_, $) {
		if (!mini.isArray(_)) return;
		return this.insertNodes(_, -1, $)
	},
	insertNodes: function(D, $, A) {
		if (!mini.isNumber($)) return;
		if (!mini.isArray(D)) return;
		if (!A) A = this.root;
		this.beginChange();
		var B = this.oo0oO(A);
		if ($ < 0 || $ > B.length) $ = B.length;
		D = D.clone();
		for (var _ = 0, C = D.length; _ < C; _++) this.insertNode(D[_], $ + _, A);
		this.endChange();
		return D
	},
	removeNode: function(A) {
		var _ = this[lO1l00](A);
		if (!_) return;
		var $ = this.indexOfNode(A);
		return this.removeNodeAt($, _)
	},
	removeNodes: function(A) {
		if (!mini.isArray(A)) return;
		this.beginChange();
		A = A.clone();
		for (var $ = 0, _ = A.length; $ < _; $++) this[lllO0l](A[$]);
		this.endChange()
	},
	moveNodes: function(E, B, _) {
		if (!E || E.length == 0 || !B || !_) return;
		this.beginChange();
		var A = this;
		mini[O0o1oO](E, function($, _) {
			return A[o0oOOo]($) > A[o0oOOo](_)
		}, this);
		for (var $ = 0, D = E.length; $ < D; $++) {
			var C = E[$];
			this[o1lO11](C, B, _);
			if ($ != 0) {
				B = C;
				_ = "after"
			}
		}
		this.endChange()
	},
	moveNode: function(E, D, B) {
		if (!E || !D || mini.isNull(B)) return;
		if (this.viewNodes) {
			var _ = D,
				$ = B;
			if ($ == "before") {
				_ = this[lO1l00](D);
				$ = this.indexOfNode(D)
			} else if ($ == "after") {
				_ = this[lO1l00](D);
				$ = this.indexOfNode(D) + 1
			} else if ($ == "add" || $ == "append") {
				if (!_[this.nodesField]) _[this.nodesField] = [];
				$ = _[this.nodesField].length
			} else if (!mini.isNumber($)) return;
			if (this[O1OlOO](E, _)) return false;
			var A = this[Ol0Olo](_);
			if ($ < 0 || $ > A.length) $ = A.length;
			var F = {};
			A.insert($, F);
			var C = this[lO1l00](E),
				G = this[Ol0Olo](C);
			G.remove(E);
			$ = A[o0oOOo](F);
			A[$] = E
		}
		_ = D, $ = B, A = this.oo0oO(_);
		if ($ == "before") {
			_ = this[lO1l00](D);
			A = this.oo0oO(_);
			$ = A[o0oOOo](D)
		} else if ($ == "after") {
			_ = this[lO1l00](D);
			A = this.oo0oO(_);
			$ = A[o0oOOo](D) + 1
		} else if ($ == "add" || $ == "append") $ = A.length;
		else if (!mini.isNumber($)) return;
		if (this[O1OlOO](E, _)) return false;
		if ($ < 0 || $ > A.length) $ = A.length;
		F = {};
		A.insert($, F);
		C = this[lO1l00](E);
		C[this.nodesField].remove(E);
		$ = A[o0oOOo](F);
		A[$] = E;
		this.lll0(E, _);
		this.OOoo10();
		var H = {
			parentNode: _,
			index: $,
			node: E
		};
		this[lO0OoO]("movenode", H)
	},
	insertNode: function(A, $, _) {
		if (!A) return;
		if (!_) {
			_ = this.root;
			$ = "add"
		}
		if (!mini.isNumber($)) {
			switch ($) {
			case "before":
				$ = this.indexOfNode(_);
				_ = this[lO1l00](_);
				this.insertNode(A, $, _);
				break;
			case "after":
				$ = this.indexOfNode(_);
				_ = this[lO1l00](_);
				this.insertNode(A, $ + 1, _);
				break;
			case "append":
			case "add":
				this[O11O0o](A, _);
				break;
			default:
				break
			}
			return
		}
		var C = this.oo0oO(_),
			D = this[Ol0Olo](_);
		if ($ < 0) $ = D.length;
		D.insert($, A);
		$ = D[o0oOOo](A);
		if (this.viewNodes) {
			var B = D[$ - 1];
			if (B) {
				var E = C[o0oOOo](B);
				C.insert(E + 1, A)
			} else C.insert(0, A)
		}
		A._pid = _._id;
		this._setAdded(A);
		this[O01O1l](A, function(A, $, _) {
			A._pid = _._id;
			this._setAdded(A)
		}, this);
		this.OOoo10();
		var F = {
			parentNode: _,
			index: $,
			node: A
		};
		this[lO0OoO]("addnode", F);
		return A
	},
	removeNodeAt: function($, _) {
		if (!_) _ = this.root;
		var C = this[Ol0Olo](_),
			A = C[$];
		if (!A) return null;
		C.removeAt($);
		if (this.viewNodes) {
			var B = _[this.nodesField];
			B.remove(A)
		}
		this._setRemoved(A);
		this[O01O1l](A, function(A, $, _) {
			this._setRemoved(A)
		}, this);
		this.oolloO();
		this.OOoo10();
		var D = {
			parentNode: _,
			index: $,
			node: A
		};
		this[lO0OoO]("removenode", D);
		return A
	},
	bubbleParent: function(_, B, A) {
		A = A || this;
		if (_) B[o0OoO0](this, _);
		var $ = this[lO1l00](_);
		if ($ && $ != this.root) this[OO1001]($, B, A)
	},
	cascadeChild: function(A, E, B) {
		if (!E) return;
		if (!A) A = this.root;
		var D = A[this.nodesField];
		if (D) {
			D = D.clone();
			for (var $ = 0, C = D.length; $ < C; $++) {
				var _ = D[$];
				if (E[o0OoO0](B || this, _, $, A) === false) return;
				this[O01O1l](_, E, B)
			}
		}
	},
	eachChild: function(B, F, C) {
		if (!F || !B) return;
		var E = B[this.nodesField];
		if (E) {
			var _ = E.clone();
			for (var A = 0, D = _.length; A < D; A++) {
				var $ = _[A];
				if (F[o0OoO0](C || this, $, A, B) === false) break
			}
		}
	},
	collapseLevel: function($, _) {
		this.beginChange();
		this.each(function(A) {
			var B = this[lo110](A);
			if ($ == B) this[OO000o](A, _)
		}, this);
		this.endChange()
	},
	expandLevel: function($, _) {
		this.beginChange();
		this.each(function(A) {
			var B = this[lo110](A);
			if ($ == B) this[o0Oll1](A, _)
		}, this);
		this.endChange()
	},
	collapse: function($, _) {
		if (!$) return;
		this.beginChange();
		$.expanded = false;
		if (_) this[O1Ol11]($, function($) {
			if ($[this.nodesField] != null) this[OO000o]($, _)
		}, this);
		this.endChange();
		var A = {
			node: $
		};
		this[lO0OoO]("collapse", A)
	},
	expand: function($, _) {
		if (!$) return;
		this.beginChange();
		$.expanded = true;
		if (_) this[O1Ol11]($, function($) {
			if ($[this.nodesField] != null) this[o0Oll1]($, _)
		}, this);
		this.endChange();
		var A = {
			node: $
		};
		this[lO0OoO]("expand", A)
	},
	toggle: function($) {
		if (this[l0oOl0]($)) this[OO000o]($);
		else this[o0Oll1]($)
	},
	collapseAll: function() {
		this[OO000o](this.root, true)
	},
	expandAll: function() {
		this[o0Oll1](this.root, true)
	},
	isAncestor: function(_, B) {
		if (_ == B) return true;
		if (!_ || !B) return false;
		var A = this[olO011](B);
		for (var $ = 0, C = A.length; $ < C; $++) if (A[$] == _) return true;
		return false
	},
	getAncestors: function(A) {
		var _ = [];
		while (1) {
			var $ = this[lO1l00](A);
			if (!$ || $ == this.root) break;
			_[_.length] = $;
			A = $
		}
		_.reverse();
		return _
	},
	getRootNode: function() {
		return this.root
	},
	getParentNode: function($) {
		if (!$) return null;
		return this.getby_id($._pid)
	},
	getAllChildNodes: function($) {
		return this[Ol0Olo]($, true)
	},
	getChildNodes: function(A, C, B) {
		var G = A[this.nodesField];
		if (this.viewNodes && B !== false) G = this.viewNodes[A._id];
		if (C === true && G) {
			var $ = [];
			for (var _ = 0, F = G.length; _ < F; _++) {
				var D = G[_];
				$[$.length] = D;
				var E = this[Ol0Olo](D, C, B);
				if (E && E.length > 0) $.addRange(E)
			}
			G = $
		}
		return G || []
	},
	getChildNodeAt: function($, _) {
		var A = this[Ol0Olo](_);
		if (A) return A[$];
		return null
	},
	hasChildNodes: function($) {
		var _ = this[Ol0Olo]($);
		return _.length > 0
	},
	getNodeLevel: function($) {
		return $._level
	},
	getLevel: function($) {
		return $._level
	},
	isLeafNode: function($) {
		return this[loOOO0]($)
	},
	isLeaf: function($) {
		if (!$ || $[loOOO0] === false) return false;
		var _ = this[Ol0Olo]($);
		if (_.length > 0) return false;
		return true
	},
	hasChildren: function($) {
		var _ = this[Ol0Olo]($);
		return !!(_ && _.length > 0)
	},
	isFirstNode: function(_) {
		if (_ == this.root) return true;
		var $ = this[lO1l00](_);
		if (!$) return false;
		return this[OO0l1O]($) == _
	},
	isLastNode: function(_) {
		if (_ == this.root) return true;
		var $ = this[lO1l00](_);
		if (!$) return false;
		return this[l0OoOl]($) == _
	},
	isCheckedNode: function($) {
		return $.checked === true
	},
	isExpandedNode: function($) {
		return $.expanded == true || $.expanded == 1 || mini.isNull($.expanded)
	},
	isVisible: function(_) {
		var $ = this._ids[_._pid];
		if (!$ || $ == this.root) return true;
		if ($.expanded === false) return false;
		return this.isVisible($)
	},
	getNextNode: function(A) {
		var _ = this.getby_id(A._pid);
		if (!_) return null;
		var $ = this.indexOfNode(A);
		return this[Ol0Olo](_)[$ + 1]
	},
	getPrevNode: function(A) {
		var _ = this.getby_id(A._pid);
		if (!_) return null;
		var $ = this.indexOfNode(A);
		return this[Ol0Olo](_)[$ - 1]
	},
	getFirstNode: function($) {
		return this[Ol0Olo]($)[0]
	},
	getLastNode: function($) {
		var _ = this[Ol0Olo]($);
		return _[_.length - 1]
	},
	indexOfNode: function(_) {
		var $ = this.getby_id(_._pid);
		if ($) return this[Ol0Olo]($)[o0oOOo](_);
		return -1
	},
	getAt: function($) {
		return this.getDataView()[$]
	},
	indexOf: function($) {
		return this.getDataView()[o0oOOo]($)
	},
	getRange: function(A, C) {
		if (A > C) {
			var D = A;
			A = C;
			C = D
		}
		var B = this[Ol0Olo](this.root, true),
			E = [];
		for (var _ = A, F = C; _ <= F; _++) {
			var $ = B[_];
			if ($) E.push($)
		}
		return E
	},
	selectRange: function($, A) {
		var _ = this[Ol0Olo](this.root, true);
		if (!mini.isNumber($)) $ = _[o0oOOo]($);
		if (!mini.isNumber(A)) A = _[o0oOOo](A);
		if (mini.isNull($) || mini.isNull(A)) return;
		var B = this[lOlo11]($, A);
		this[OlO1lO](B)
	},
	findRecords: function(D, A) {
		var C = this[OO0llo](),
			F = typeof D == "function",
			I = D,
			E = A || this,
			B = [];
		for (var _ = 0, H = C.length; _ < H; _++) {
			var $ = C[_];
			if (F) {
				var G = I[o0OoO0](E, $);
				if (G == true) B[B.length] = $;
				if (G === 1) break
			} else if ($[D] == A) B[B.length] = $
		}
		return B
	},
	OOoo10Count: 0,
	OOoo10: function() {
		this.OOoo10Count++;
		this.dataview = null;
		this.visibleRows = null;
		if (this.__changeCount == 0) this[lO0OoO]("datachanged")
	},
	oO1l10View: function() {
		var $ = this[Ol0Olo](this.root, true);
		return $
	},
	_createVisibleRows: function() {
		var B = this[Ol0Olo](this.root, true),
			$ = [];
		for (var _ = 0, C = B.length; _ < C; _++) {
			var A = B[_];
			if (this.isVisible(A)) $[$.length] = A
		}
		return $
	},
	getList: function() {
		return mini.treeToList(this.source, this.nodesField)
	},
	getDataView: function() {
		if (!this.dataview) this.dataview = this.oO1l10View();
		return this.dataview
	},
	getVisibleRows: function() {
		if (!this.visibleRows) this.visibleRows = this._createVisibleRows();
		return this.visibleRows
	},
	l0Oooo: function() {
		if (!this._filterInfo) {
			this.viewNodes = null;
			return
		}
		var C = this._filterInfo[0],
			B = this._filterInfo[1],
			A = this.viewNodes = {},
			_ = this.nodesField;

		function $(G) {
			var J = G[_];
			if (!J) return false;
			var K = G._id,
				H = A[K] = [];
			for (var D = 0, I = J.length; D < I; D++) {
				var F = J[D],
					L = $(F),
					E = C[o0OoO0](B, F, D, this);
				if (E === true || L) H.push(F)
			}
			return H.length > 0
		}
		$(this.root)
	},
	O1ll0l: function() {
		if (!this._filterInfo && !this._sortInfo) {
			this.viewNodes = null;
			return
		}
		if (!this._sortInfo) return;
		var E = this._sortInfo[0],
			D = this._sortInfo[1],
			$ = this._sortInfo[2],
			_ = this.nodesField;
		if (!this.viewNodes) {
			var C = this.viewNodes = {};
			C[this.root._id] = this.root[_].clone();
			this[O01O1l](this.root, function(A, $, B) {
				var D = A[_];
				if (D) C[A._id] = D.clone()
			})
		}
		var B = this;

		function A(F) {
			var H = B[Ol0Olo](F);
			mini[O0o1oO](H, E, D);
			if ($) H.reverse();
			for (var _ = 0, G = H.length; _ < G; _++) {
				var C = H[_];
				A(C)
			}
		}
		A(this.root)
	},
	toArray: function() {
		if (!this._array || this.OOoo10Count != this.OOoo10Count2) {
			this.OOoo10Count2 = this.OOoo10Count;
			this._array = this[Ol0Olo](this.root, true, false)
		}
		return this._array
	},
	toTree: function() {
		return this.root[this.nodesField]
	},
	getChanges: function(_) {
		var $ = [];
		if (_ == "removed" || _ == null) $.addRange(this._removeds.clone());
		this[O01O1l](this.root, function(B, A, C) {
			if (B._state == null || B._state == "") return;
			if (B._state == _ || _ == null) $[$.length] = B
		}, this);
		return $
	},
	accept: function($) {
		$ = $ || this.root;
		this.beginChange();
		this[O01O1l](this.root, function($) {
			this[olll0o]($)
		}, this);
		this._removeds = [];
		this.Oo0o = {};
		this.endChange()
	},
	reject: function($) {
		this.beginChange();
		this[O01O1l](this.root, function($) {
			this.rejectRecord($)
		}, this);
		this._removeds = [];
		this.Oo0o = {};
		this.endChange()
	},
	acceptRecord: function($) {
		delete this.Oo0o[$._id];
		if ($._state == "deleted") this[lllO0l]($);
		else {
			delete $._state;
			delete this.Oo0o[$._id];
			this.OOoo10()
		}
	},
	rejectRecord: function(_) {
		if (_._state == "added") this[lllO0l](_);
		else if (_._state == "modified" || _._state == "deleted") {
			var $ = this.oO01o1(_);
			mini.copyTo(_, $);
			delete _._state;
			delete this.Oo0o[_._id];
			this.OOoo10()
		}
	},
	upGrade: function(F) {
		var C = this[lO1l00](F);
		if (C == this.root || F == this.root) return false;
		var E = C[this.nodesField],
			_ = E[o0oOOo](F),
			G = F[this.nodesField] ? F[this.nodesField].length : 0;
		for (var B = E.length - 1; B >= _; B--) {
			var $ = E[B];
			E.removeAt(B);
			if ($ != F) {
				if (!F[this.nodesField]) F[this.nodesField] = [];
				F[this.nodesField].insert(G, $)
			}
		}
		var D = this[lO1l00](C),
			A = D[this.nodesField],
			_ = A[o0oOOo](C);
		A.insert(_ + 1, F);
		this.lll0(F, D);
		this.l0Oooo();
		this.OOoo10()
	},
	downGrade: function(B) {
		if (this[lOo1OO](B)) return false;
		var A = this[lO1l00](B),
			C = A[this.nodesField],
			$ = C[o0oOOo](B),
			_ = C[$ - 1];
		C.removeAt($);
		if (!_[this.nodesField]) _[this.nodesField] = [];
		_[this.nodesField][l10o01](B);
		this.lll0(B, _);
		this.l0Oooo();
		this.OOoo10()
	},
	lll0: function(_, $) {
		_._pid = $._id;
		_._level = $._level + 1;
		this[O01O1l](_, function(A, $, _) {
			A._pid = _._id;
			A._level = _._level + 1;
			A[this.parentField] = _[this.idField]
		}, this);
		this._setModified(_)
	},
	setCheckModel: function($) {
		this.checkModel = $
	},
	getCheckModel: function() {
		return this.checkModel
	},
	setOnlyLeafCheckable: function($) {
		this.onlyLeafCheckable = $
	},
	getOnlyLeafCheckable: function() {
		return this.onlyLeafCheckable
	},
	setAutoCheckParent: function($) {
		this.autoCheckParent = $
	},
	getAutoCheckParent: function() {
		return this.autoCheckParent
	},
	_doUpdateLoadedCheckedNodes: function() {
		var B = this[loOo0o](this.root);
		for (var $ = 0, A = B.length; $ < A; $++) {
			var _ = B[$];
			if (_.checked == true) this._doUpdateNodeCheckState(_)
		}
	},
	_doUpdateNodeCheckState: function(B) {
		if (!B) return;
		var J = this.isChecked(B);
		if (this.checkModel == "cascade") {
			this[O01O1l](B, function(_) {
				var $ = this.getCheckable(_);
				if ($) this.doCheckNodes(_, J)
			}, this);
			if (!this.autoCheckParent) {
				var $ = this[olO011](B);
				$.reverse();
				for (var G = 0, E = $.length; G < E; G++) {
					var C = $[G],
						I = this.getCheckable(C);
					if (I == false) return;
					var A = this[Ol0Olo](C),
						H = true;
					for (var _ = 0, F = A.length; _ < F; _++) {
						var D = A[_];
						if (!this[OO0000](D)) H = false
					}
					if (H) this.doCheckNodes(C, true);
					else this.doCheckNodes(C, false);
					this[lO0OoO]("checkchanged", {
						nodes: [C],
						_nodes: [C]
					})
				}
			}
		}
		if (this.autoCheckParent && J) {
			$ = this[olO011](B);
			$.reverse();
			for (G = 0, E = $.length; G < E; G++) {
				C = $[G], I = this.getCheckable(C);
				if (I == false) return;
				C.checked = true;
				this[lO0OoO]("checkchanged", {
					nodes: [C],
					_nodes: [C]
				})
			}
		}
	},
	doCheckNodes: function(E, B, D) {
		if (!E) return;
		if (typeof E == "string") E = E.split(",");
		if (!mini.isArray(E)) E = [E];
		E = E.clone();
		var _ = [];
		B = B !== false;
		if (D === true) if (this.checkModel == "single") this[O01110]();
		for (var $ = E.length - 1; $ >= 0; $--) {
			var A = this[OollO1](E[$]);
			if (!A || (B && A.checked === true) || (!B && A.checked !== true)) {
				if (A) if (D === true) this._doUpdateNodeCheckState(A);
				continue
			}
			A.checked = B;
			_.push(A);
			if (D === true) this._doUpdateNodeCheckState(A)
		}
		var C = this;
		setTimeout(function() {
			C[lO0OoO]("checkchanged", {
				nodes: E,
				_nodes: _,
				checked: B
			})
		}, 1)
	},
	checkNode: function($) {
		this.doCheckNodes([$], true, true)
	},
	uncheckNode: function($) {
		this.doCheckNodes([$], false, true)
	},
	checkNodes: function($) {
		if (!mini.isArray($)) $ = [];
		this.doCheckNodes($, true, true)
	},
	uncheckNodes: function($) {
		if (!mini.isArray($)) $ = [];
		this.doCheckNodes($, false, true)
	},
	checkAllNodes: function() {
		var $ = this[oooO1o]();
		this.doCheckNodes($, true)
	},
	uncheckAllNodes: function() {
		var $ = this[oooO1o]();
		this.doCheckNodes($, false)
	},
	getCheckedNodes: function($) {
		var _ = [];
		this[O01O1l](this.root, function(A) {
			if (A.checked == true) {
				var B = this.isLeafNode(A);
				if ($ == "parent") {
					if (!B) _.push(A)
				} else if (A == "leaf") {
					if (B) _.push(A)
				} else _.push(A)
			}
		}, this);
		return _
	},
	getCheckedNodesId: function(A, $) {
		var B = this[o0O1Oo](A),
			_ = this.Ol1o1O(B, $);
		return _[0]
	},
	getCheckedNodesText: function(A, $) {
		var B = this[o0O1Oo](A),
			_ = this.Ol1o1O(B, $);
		return _[1]
	},
	isChecked: function($) {
		$ = this[OollO1]($);
		if (!$) return null;
		return $.checked === true
	},
	getCheckState: function(_) {
		_ = this[OollO1](_);
		if (!_) return null;
		if (_.checked === true) return "checked";
		if (!_[this.nodesField]) return "unchecked";
		var B = this[Ol0Olo](_);
		for (var $ = 0, A = B.length; $ < A; $++) {
			var _ = B[$];
			if (_.checked === true) return "indeterminate"
		}
		return "unchecked"
	},
	getUnCheckableNodes: function() {
		var $ = [];
		this[O01O1l](this.root, function(A) {
			var _ = this.getCheckable(A);
			if (_ == false) $.push(A)
		}, this);
		return $
	},
	setCheckable: function(B, _) {
		if (!B) return;
		if (!mini.isArray(B)) B = [B];
		B = B.clone();
		_ = !! _;
		for (var $ = B.length - 1; $ >= 0; $--) {
			var A = this[OollO1](B[$]);
			if (!A) continue;
			A.checkable = checked
		}
	},
	getCheckable: function($) {
		$ = this[OollO1]($);
		if (!$) return false;
		if ($.checkable === true) return true;
		if ($.checkable === false) return false;
		return this.isLeafNode($) ? true : !this.onlyLeafCheckable
	},
	showNodeCheckbox: function($, _) {},
	isNodeLoading: function() {
		return !!this._loadingNode
	},
	loadNode: function(A, $) {
		this._loadingNode = A;
		var C = {
			node: A
		};
		this[lO0OoO]("beforeloadnode", C);
		var _ = new Date(),
			B = this;
		B.l10oOlAjax(B.loadParams, null, null, null, function(D) {
			var C = new Date() - _;
			if (C < 60) C = 60 - C;
			setTimeout(function() {
				D.node = B._loadingNode;
				B._loadingNode = null;
				var _ = A[B.nodesField];
				B[OO1O1l](_);
				var C = D.data;
				if (C && C.length > 0) {
					B[O1o00l](C, A);
					if ($ !== false) B[o0Oll1](A, true);
					else B[OO000o](A, true)
				} else delete A[loOOO0];
				B[lO0OoO]("loadnode", {
					node: A
				})
			}, C)
		}, true)
	}
});
l1O011(mini.DataTree, "datatree");
oO1o11 = function() {
	oO1o11[lO0010][llo0oo][o0OoO0](this);
	this._TaskUIDs = {};
	this._TaskIndexs = {};
	this._linkHashed = {};
	this.topTimeScale = oO1o11.getTimeScale(this.topTimeScaleType);
	this.bottomTimeScale = oO1o11.getTimeScale(this.bottomTimeScaleType);
	this.zoomTimeScales = oO1o11.createZoomTimeScales();
	var $ = new Date();
	this.startDate = new Date($.getFullYear(), $.getMonth(), $.getDate());
	this.finishDate = new Date($.getFullYear(), $.getMonth() + 1, $.getDate());
	this[o0Ol01](this.startDate, this.finishDate);
	this[lO0l11]([])
};
loOo0(oO1o11, l1lloO, {
	virtualModel: false,
	viewModel: "gantt",
	baselineIndex: 0,
	startDate: null,
	finishDate: null,
	weekStartDay: 0,
	rowHeight: 20,
	showGridLines: true,
	showLinkLines: true,
	showSummary: true,
	showCriticalPath: false,
	topTimeScaleType: "week",
	bottomTimeScaleType: "day",
	showLabel: true,
	labelField: "Name",
	labelAlign: "right",
	allowDrag: true,
	scrollLeft: 0,
	scrollTop: 0,
	scrollWidth: 0,
	scrollHeight: 0,
	headerHeight: 25,
	uiCls: "mini-ganttview",
	l111: false,
	showed: false,
	headerCellOffset: 2,
	_vscrollTimer: null,
	_hscrollTimer: null,
	topOffset: 4
});
l1o1O = oO1o11[O0lOl0];
l1o1O[l00loO] = ollO0;
l1o1O[OO10lo] = Oo0ll;
l1o1O[lo0111] = llOool;
l1o1O[o10O01] = ooool;
l1o1O.O1O001 = ll11l;
l1o1O[O0ll0l] = lo1O0;
l1o1O[l010o] = OlloO;
l1o1O[Ooo11l] = l101o;
l1o1O[OOOo11] = OOOl1;
l1o1O[l0olo1] = oOOlo;
l1o1O[o1lll0] = O1O0o;
l1o1O[o0OOOO] = O0llO;
l1o1O[lOlOol] = o00o1;
l1o1O[OolllO] = oo00O;
l1o1O[OO1OO0] = o01lOo;
l1o1O[ll1ll1] = l1O0;
l1o1O[OO1ool] = OO0lo;
l1o1O[lO1l10] = ol0O1;
l1o1O.Ol11o1 = O11o11;
l1o1O.oO1OO0 = olo1l;
l1o1O[O0oo10] = Ol1OlO;
l1o1O[o0Oo10] = OO11O;
l1o1O.oOlOO1 = O11l;
l1o1O.Olooo0 = O00O;
l1o1O.oooOo = OOOoo;
l1o1O[O1lo0l] = l0Ol0;
l1o1O[O1ooo1] = ollOO;
l1o1O[oO1O] = O000l;
l1o1O[ol00Ol] = oolOl;
l1o1O[OOo11l] = ollOOBox;
l1o1O[oO1Ol1] = ollOOHeight;
l1o1O[oO0o0O] = ollOOTop;
l1o1O[l11loo] = Oll00;
l1o1O[oOOo1O] = l10lo;
l1o1O.oOo110 = lo1oo;
l1o1O.oo010O = O10lO;
l1o1O.O1111o = O0OOO;
l1o1O[O1OooO] = oOo1O0;
l1o1O[l1o00o] = OOl00;
l1o1O.OlOOO = lOO10;
l1o1O[o0lOOo] = Ol001;
l1o1O.l11olo = o11l1;
l1o1O.ll1l10 = O100o;
l1o1O.lo1Oll = Oll1;
l1o1O.llOloo = o1O00;
l1o1O.l01O10 = oO0Ol;
l1o1O.O101o = oOo1O;
l1o1O.ll00o0 = olOoO;
l1o1O.ooO0O = l0OOO;
l1o1O.loOoO0 = lloOO;
l1o1O.OoO00 = loOO0O;
l1o1O.O1lo01 = lOooO;
l1o1O.Ol1oO1 = lllOl;
l1o1O.loOOo1 = o1O1o0;
l1o1O.o11OOO = o1o100;
l1o1O.looll = ol0o;
l1o1O.l1OO0l = loolo;
l1o1O[o1oloo] = o00O0;
l1o1O.O01Oll = oOo01o;
l1o1O.ooO1ol = lll1o;
l1o1O.l011o = o00OO;
l1o1O.O1oOl = llOO00;
l1o1O[O1ooo] = O00Ol;
l1o1O[lO0l11] = O1100l;
l1o1O[o0Ol01] = looO1;
l1o1O[Oo0o0l] = l0oO1;
l1o1O[o0olO0] = lo1OO;
l1o1O[O0OOOO] = O10l1;
l1o1O[Olo0Oo] = O1000;
l1o1O[oll1oO] = Oo1ol;
l1o1O[lO0lOO] = oO1oo;
l1o1O[lo011l] = lOo1o1;
l1o1O[lOoOOo] = o0ol0;
l1o1O[oo0l1o] = OoO0l;
l1o1O[O1oOll] = OllOO;
l1o1O[lOlo1l] = loOol;
l1o1O[lOoOlO] = Ol1O1;
l1o1O[O11OoO] = O0o1o;
l1o1O[o1lOll] = OOlO10;
l1o1O[OooOO] = lllOO;
l1o1O[o1OoOo] = loO1O;
l1o1O[lo0Oo0] = oO1lO;
l1o1O[ooll0o] = Ooolo;
l1o1O[Oll1l1] = OOl1;
l1o1O[Oo1O10] = oOl0Ol;
l1o1O[l11ol1] = l1011;
l1o1O.lOol0O = OOl10;
l1o1O[lO01o0] = o0OlO;
l1o1O[ooooll] = lo0O1;
l1o1O[looO10] = ollOOO;
l1o1O[ol000O] = ol010;
l1o1O[l0oloo] = loo00;
oO1o11[O0lOl0].getTimeScaleStartDate = function(E, A) {
	var C = E.getFullYear(),
		D = E.getMonth(),
		$ = E.getDate(),
		B = E.getHours(),
		_ = E.getMinutes(),
		F = E.getSeconds();
	switch (A) {
	case "year":
		E = new Date(C, 0, 1);
		break;
	case "halfyear":
		if (D < 6) E = new Date(C, 0, 1);
		else E = new Date(C, 6, 1);
		break;
	case "quarter":
		if (D < 3) E = new Date(C, 0, 1);
		else if (D < 6) E = new Date(C, 3, 1);
		else if (D < 9) E = new Date(C, 6, 1);
		else E = new Date(C, 9, 1);
		break;
	case "month":
		E = new Date(C, D, 1);
		break;
	case "tendays":
		if ($ <= 10) E = new Date(C, D, 1);
		else if ($ <= 20) E = new Date(C, D, 11);
		else E = new Date(C, D, 21);
		break;
	case "week":
		E = mini.getWeekStartDate(E, this.weekStartDay);
		break;
	case "day":
		E = new Date(C, D, $);
		break;
	case "hour":
		E = new Date(C, D, $, B);
		break;
	case "minutes":
		E = new Date(C, D, $, B, _);
		break;
	case "seconds":
		E = new Date(C, D, $, B, _, F);
		break
	}
	return E
};
oO1o11[O0lOl0].getTimeScaleNextDate = function(G, B, I) {
	var I = I || 1;
	weekStartDay = this.weekStartDay;
	var E;
	for (var _ = 0; _ < I; _++) {
		var D = G.getFullYear(),
			F = G.getMonth(),
			$ = G.getDate(),
			C = G.getHours(),
			A = G.getMinutes(),
			H = G.getSeconds();
		switch (B) {
		case "year":
			E = new Date(D + 1, 0, 1);
			break;
		case "halfyear":
			if (F < 6) E = new Date(D, 6, 1);
			else E = new Date(D + 1, 0, 1);
			break;
		case "quarter":
			if (F < 3) E = new Date(D, 3, 1);
			else if (F < 6) E = new Date(D, 6, 1);
			else if (F < 9) E = new Date(D, 9, 1);
			else E = new Date(D + 1, 0, 1);
			break;
		case "month":
			E = new Date(D, F + 1, 1);
			break;
		case "tendays":
			if ($ <= 10) E = new Date(D, F, 11);
			else if ($ <= 20) E = new Date(D, F, 21);
			else E = new Date(D, F + 1, 1);
			break;
		case "week":
			E = mini.getNextWeekStartDate(G, weekStartDay);
			break;
		case "day":
			E = new Date(D, F, $ + 1);
			break;
		case "hour":
			E = new Date(D, F, $, C + 1);
			break;
		case "minutes":
			E = new Date(D, F, $, C, A + 1);
			break;
		case "seconds":
			E = new Date(D, F, $, C, A, H + 1);
			break
		}
		G = E
	}
	return E
};
mini.getNextWeekStartDate = function(A, _) {
	var $ = mini.getWeekStartDate(A, _);
	$.setDate($.getDate() + 7);
	return $
};
String.leftPad = function(_, B, $) {
	B = B || 2;
	$ = $ || "0";
	var A = new String(_);
	if ($ == null || $ == undefined) $ = " ";
	while (A.length < B) A = $ + A;
	return A.toString()
};
oO1o11.TimeScale = {
	year: {
		type: "year",
		width: 40,
		number: 1,
		align: "center",
		index: 0,
		tooltip: function(_, $) {
			return _.getFullYear()
		},
		formatter: function(A, _, $) {
			if (_ == "top") return A.getFullYear();
			else return A.getFullYear()
		}
	},
	halfyear: {
		type: "halfyear",
		width: 24,
		number: 1,
		align: "center",
		index: 1,
		tooltip: function(_, $) {
			return _.getFullYear() + "-" + String.leftPad(_.getMonth() + 1)
		},
		formatter: function(B, A, _) {
			var C = "",
				$ = B.getMonth();
			if ($ < 6) C += "H" + 1;
			else C += "H" + 2;
			return C
		}
	},
	quarter: {
		type: "quarter",
		width: 24,
		number: 1,
		align: "center",
		index: 3,
		tooltip: function(_, $) {
			return _.getFullYear() + "-" + String.leftPad(_.getMonth() + 1)
		},
		formatter: function(B, A, _) {
			var C = "",
				$ = B.getMonth();
			if ($ < 3) C += "Q" + 1;
			else if ($ < 6) C += "Q" + 2;
			else if ($ < 9) C += "Q" + 3;
			else C += "Q" + 4;
			if (A == "top") C = B.getFullYear() + "\u5e74" + C;
			return C
		}
	},
	month: {
		type: "month",
		width: 24,
		number: 1,
		align: "center",
		index: 4,
		tooltip: function(_, $) {
			return _.getFullYear() + "-" + String.leftPad(_.getMonth() + 1)
		},
		formatter: function(A, _, $) {
			var B = A.getMonth() + 1;
			if (_ == "top") B = A.getFullYear() + "-" + String.leftPad(B);
			return B
		}
	},
	week: {
		type: "week",
		width: 24,
		number: 1,
		align: "center",
		index: 5,
		tooltip: function(A, $) {
			var B = A.getFullYear() + "-" + String.leftPad(A.getMonth() + 1) + "-" + String.leftPad(A.getDate()),
				_ = new Date(A[o1oo0O]());
			_.setDate(_.getDate() + 6);
			B += " \u5230 ";
			B += _.getFullYear() + "-" + String.leftPad(_.getMonth() + 1) + "-" + String.leftPad(_.getDate());
			return B
		},
		formatter: function(A, _, $) {
			if (_ == "top") return A.getFullYear() + "-" + String.leftPad(A.getMonth() + 1) + "-" + String.leftPad(A.getDate());
			else return A.getDate()
		}
	},
	day: {
		type: "day",
		width: 24,
		number: 1,
		align: "center",
		index: 6,
		tooltip: function(_, $) {
			return _.getFullYear() + "-" + String.leftPad(_.getMonth() + 1) + "-" + String.leftPad(_.getDate()) + " " + oO1o11.LongWeeks[_.getDay()]
		},
		formatter: function(A, _, $) {
			if (_ == "top") return A.getFullYear() + "-" + String.leftPad(A.getMonth() + 1) + "-" + String.leftPad(A.getDate());
			else if ($ == "week") return oO1o11.ShortWeeks[A.getDay()];
			else return A.getDate()
		}
	},
	hour: {
		type: "hour",
		width: 20,
		number: 1,
		align: "center",
		index: 7,
		tooltip: function(_, $) {
			return _.getFullYear() + "-" + String.leftPad(_.getMonth() + 1) + "-" + String.leftPad(_.getDate()) + " " + String.leftPad(_.getHours())
		},
		formatter: function(A, _, $) {
			if (_ == "top") return A.getFullYear() + "-" + String.leftPad(A.getMonth() + 1) + "-" + String.leftPad(A.getDate()) + " " + String.leftPad(A.getHours());
			else return String.leftPad(A.getHours())
		}
	},
	minutes: {
		type: "minutes",
		width: 20,
		number: 1,
		align: "center",
		index: 8,
		tooltip: function(_, $) {
			return _.getFullYear() + "-" + String.leftPad(_.getMonth() + 1) + "-" + String.leftPad(_.getDate()) + " " + String.leftPad(_.getHours()) + ":" + String.leftPad(_.getMinutes())
		},
		formatter: function(A, _, $) {
			if (_ == "top") return A.getFullYear() + "-" + String.leftPad(A.getMonth() + 1) + "-" + String.leftPad(A.getDate()) + " " + String.leftPad(A.getHours()) + ":" + String.leftPad(A.getMinutes());
			else return String.leftPad(A.getMinutes())
		}
	},
	index: 9,
	seconds: {
		type: "seconds",
		width: 20,
		number: 1,
		align: "center",
		tooltip: function(_, $) {
			return _.getFullYear() + "-" + String.leftPad(_.getMonth() + 1) + "-" + String.leftPad(_.getDate()) + " " + String.leftPad(_.getHours()) + ":" + String.leftPad(_.getMinutes()) + ":" + String.leftPad(_.getSeconds())
		},
		formatter: function(A, _, $) {
			if (_ == "top") return A.getDate() + " " + A.getHours() + ":" + A.getMinutes() + ":" + A.getSeconds();
			else return String.leftPad(A.getSeconds())
		}
	}
};
oO1o11.ShortWeeks = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
oO1o11.LongWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
oO1o11.getTimeScale = function(_) {
	var $ = oO1o11.TimeScale[_.toLowerCase()];
	if ($) $ = mini.copyTo({}, $);
	return $
};
oO1o11.createZoomTimeScales = function() {
	var A = [],
		$ = oO1o11.getTimeScale("year"),
		_ = oO1o11.getTimeScale("halfyear");
	A.push([$, _]);
	$ = oO1o11.getTimeScale("year"), _ = oO1o11.getTimeScale("quarter");
	A.push([$, _]);
	$ = oO1o11.getTimeScale("year"), _ = oO1o11.getTimeScale("month");
	A.push([$, _]);
	$ = oO1o11.getTimeScale("quarter"), _ = oO1o11.getTimeScale("month");
	_.width = 24;
	A.push([$, _]);
	$ = oO1o11.getTimeScale("month"), _ = oO1o11.getTimeScale("week");
	A.push([$, _]);
	$ = oO1o11.getTimeScale("month"), _ = oO1o11.getTimeScale("day");
	_.number = 3;
	A.push([$, _]);
	$ = oO1o11.getTimeScale("week"), _ = oO1o11.getTimeScale("day");
	A.push([$, _]);
	$ = oO1o11.getTimeScale("day"), _ = oO1o11.getTimeScale("hour");
	_.number = 6;
	A.push([$, _]);
	$ = oO1o11.getTimeScale("day"), _ = oO1o11.getTimeScale("hour");
	_.number = 2;
	A.push([$, _]);
	$ = oO1o11.getTimeScale("day"), _ = oO1o11.getTimeScale("hour");
	_.number = 1;
	A.push([$, _]);
	return A
};
mini._GanttViewToolTip = function($) {
	this.gantt = $;
	o1ol0o(document.body, "mousemove", this.__OnGanttMouseMove, this);
	this.gantt[o1Oo11]("ItemDragMove", this.__OnItemDragMove, this);
	this.gantt[o1Oo11]("ItemDragComplete", this.O00oo0, this);
	this.gantt[o1Oo11]("scroll", this.lolo1, this);
	this.gantt[o1Oo11]("refresh", function($) {
		this.draging = false;
		this.hideTip()
	}, this)
};
mini._GanttViewToolTip[O0lOl0] = {
	lolo1: function(E) {
		if (!this.gantt[O0110l]()) return;
		if (E.direction == "vertical") {
			this.toolTipEvent = "_OnScrollToolTipNeeded";
			var D = 0,
				B = 0;
			if (this.tooltipTimer) {
				clearTimeout(this.tooltipTimer);
				this.tooltipTimer = null
			}
			var _ = this,
				A = 30;
			if (mini.isFireFox) {
				var $ = _.gantt[ol00Ol]();
				_.showTip($, "right", "top", -1);
				_.tooltipTimer = null;
				A = 0
			} else this.tooltipTimer = setTimeout(function() {
				var $ = _.gantt[ol00Ol]();
				_.showTip($, "right", "top", 0);
				_.tooltipTimer = null
			}, A)
		} else {
			this.toolTipEvent = "_OnDateToolTipNeeded";
			var D = 0,
				B = 0,
				C = this.gantt[oO1O]();
			this.showTip(C, "left", "bottom", 0)
		}
	},
	__OnItemDragMove: function(A) {
		this.toolTipEvent = "_OnItemDragTipNeeded";
		this.draging = true;
		var _ = A.drag.init[0],
			$ = A.drag.init[1];
		this.showTip(A.item, _, $ + 10, 0, true)
	},
	O00oo0: function($, _) {
		this.draging = false;
		this.hideTip()
	},
	__OnGanttMouseMove: function(D) {
		if (this.draging === true) return;
		var A = D.target,
			_ = this.gantt;
		if (_.l111 == true) return;
		if (!_[Olloo0](D)) {
			this.hideTip();
			return
		}
		var $ = _.oooOo(D);
		if ($) {
			var B = O111o(A, "mini-gantt-baseline");
			$.isBaseline = B;
			this.toolTipEvent = "_OnItemToolTipNeeded";
			this.toolTipItem = $;
			this.showTip($, D.pageX + 8, D.pageY + 15, this.showTipDelay)
		} else {
			var C = _.Olooo0(D);
			if (C) {
				this.toolTipEvent = "_OnLinkToolTipNeeded";
				this.toolTipItem = C;
				this.showTip(C, D.pageX + 5, D.pageY + 8, this.showTipDelay)
			} else this.hideTip()
		}
	},
	showTipDelay: 700,
	showTip: function($, E, B, D, C) {
		if (this._lastShowItem == $ && D != 0) {
			this._showXY = [E, B];
			return
		}
		this.hideTip(false);
		if (this.hideTimer) {
			clearInterval(this.hideTimer);
			this.hideTimer = null
		}
		var _ = this.gantt;
		this._lastShowItem = $;
		var A = this;
		this._showXY = [E, B];
		if (D <= 0 && mini.isFireFox) A._showTipCore($, C);
		else this._showTipTimer = setTimeout(function() {
			A._showTipCore($, C)
		}, D)
	},
	_showTipCore: function($, E) {
		var _ = this.gantt;
		if (!this._tipEl) this._tipEl = mini.append(document.body, "<div class=\"mini-ganttview-tooltip\" style=\"display:none;\"></div>");
		if (E == true) this._tipEl.style.width = "auto";
		var G = _[this.toolTipEvent]($);
		this._tipEl.innerHTML = G.tooltip;
		this._tipEl.style.display = "block";
		var F = this._showXY[0],
			C = this._showXY[1];
		mini[l01o0O](this._tipEl, -1000, -1000);
		var D = mini.getSize(this._tipEl),
			A = this.gantt[oOOo1O]();
		if (F == "left") F = A.x + 5;
		else if (F == "right") F = A.right - 20 - D.width;
		if (C == "top") C = A.y + 5;
		else if (C == "bottom") C = A.bottom - 20 - D.height;
		var B = mini[oOOo1O]();
		if (F + D.width > B.right) F = B.right - D.width;
		if (C + D.height > B.bottom) C = B.bottom - D.height;
		mini[l01o0O](this._tipEl, F, C)
	},
	hideTip: function(A, $) {
		var _ = this;
		if (_._tipEl && A !== false) {
			mini[lllO0l](_._tipEl);
			_._tipEl = null
		}
		_._lastShowItem = null;
		clearInterval(_._showTipTimer)
	}
};
mini._GanttViewDragDrop = function($) {
	this.owner = $;
	this.owner[o1Oo11]("refresh", this.__OnGanttRefresh, this);
	o1ol0o(this.owner.el, "mousedown", this.__OnGanttMouseDown, this)
};
mini._GanttViewDragDrop[O0lOl0] = {
	isDraging: function() {
		return !!this.dragAction
	},
	originalItem: null,
	dragItem: null,
	dragAction: null,
	_BeforeDragMove: function($, A) {
		var _ = this.owner[o10O01]($, "move");
		if (!_.cancel) this.getDrag().start(A)
	},
	__OnGanttMouseDown: function(C) {
		var A = C.target,
			_ = this.owner;
		if (_[OlOOo1]()) return;
		if (!_.allowDrag) return;
		var $ = _.oooOo(C);
		if (!$) return;
		if (O111o(A, "mini-gantt-baseline")) return;
		if (mini.MouseButton.Left == C.button) {
			this.dragItem = $;
			this.originalItem = mini.copyTo({}, $);
			if (lOll0o(A, "mini-gantt-resize-start")) {
				this.dragAction = "start";
				var B = _[o10O01]($, "start");
				if (!B.cancel) this.getDrag().start(C)
			} else if (lOll0o(A, "mini-gantt-resize-finish")) {
				this.dragAction = "finish";
				B = _[o10O01]($, "finish");
				if (!B.cancel) this.getDrag().start(C)
			} else if (lOll0o(A, "mini-gantt-resize-percentcomplete")) {
				this.dragAction = "percentcomplete";
				B = _[o10O01]($, "percentcomplete");
				if (!B.cancel) this.getDrag().start(C)
			} else if (O111o(A, "mini-gantt-item")) {
				this.dragAction = "move";
				this._BeforeDragMove($, C)
			}
		}
	},
	getDrag: function() {
		if (!this.drag) this.drag = new mini.Drag({
			delay: 100,
			capture: true,
			context: this.owner.olO0,
			onStart: mini.createDelegate(this.OO0O1, this),
			onMove: mini.createDelegate(this.lo1o1, this),
			onStop: mini.createDelegate(this.O0l01O, this)
		});
		return this.drag
	},
	_GetCursor: function() {
		switch (this.dragAction) {
		case "start":
			return "w-resize";
			break;
		case "finish":
			return "w-resize";
			break;
		case "percentcomplete":
			return "row-resize";
			break;
		case "move":
			return "move";
			break;
		case "link":
			return "move";
			break
		}
	},
	OO0O1: function(A) {
		var _ = this.owner,
			$ = this.dragItem;
		this.viewBox = _[l11loo](_.viewRegion);
		var B = _[OOo11l]($);
		this.MoveOffset = B.left - A.init[0];
		this.timeSpan = $.Finish - $.Start;
		this.itemBox = B
	},
	lo1o1: function(A) {
		var _ = this.owner,
			$ = this.dragItem,
			C = this.viewBox,
			G = _[oOOo1O]();
		switch (this.dragAction) {
		case "start":
			var D = _[o0lOOo](A.now[0]);
			$.Start = D;
			if ($.Start > $.Finish) $.Start = $.Finish;
			setTimeout(function() {
				_.O1lo01($)
			}, 10);
			break;
		case "finish":
			D = _[o0lOOo](A.now[0]);
			$.Finish = D;
			if ($.Start > $.Finish) $.Finish = $.Start;
			setTimeout(function() {
				_.O1lo01($)
			}, 1);
			break;
		case "percentcomplete":
			var F = this.itemBox.width,
				E = A.now[0] - G.x + C.left - this.itemBox.x,
				B = parseInt(E * 100 / F);
			if (B < 0) B = 0;
			if (B > 100) B = 100;
			$.PercentComplete = B;
			setTimeout(function() {
				_.O1lo01($, false)
			}, 10);
			break;
		case "move":
			E = A.now[0] + this.MoveOffset, D = _[l1o00o](E);
			$.Start = D;
			$.Finish = new Date(D[o1oo0O]() + this.timeSpan);
			setTimeout(function() {
				_.O1lo01($)
			}, 10);
			break;
		case "link":
			break
		}
		_[lo0111]($, A, this.dragAction)
	},
	dropNode: null,
	O0l01O: function(B, C) {
		var A = this.owner,
			$ = this.dragItem;
		if (C == false) mini.copyTo(this.dragItem, this.originalItem);
		else {
			var _ = this.dragItem["Start"];
			switch (this.dragAction) {
			case "move":
				this.dropNode = A.OlOOO(B.now[1]);
				var D = A[OO10lo](this.dragItem, this.dropNode);
				if (D.cancel) C = false;
				break;
			case "start":
				break;
			case "finish":
				_ = this.dragItem["Finish"];
				break;
			case "percentcomplete":
				_ = this.dragItem["PercentComplete"];
				break;
			case "link":
				break
			}
			mini.copyTo(this.dragItem, this.originalItem);
			if (C) this[l00loO](_)
		}
		if (C == false) B.event.stopPropagation();
		this.stopDrag(C)
	},
	_OnItemDragComplete: function(_) {
		var A = this.owner,
			$ = this.dragItem;
		A[l00loO](this.dragItem, this.dragAction, _, this.dropNode)
	},
	stopDrag: function(A) {
		var _ = this.owner,
			$ = this.dragItem;
		if (A == false) _[o1oloo]();
		this.dragItem = this.originalItem = this.dragAction = this.dropNode = null
	},
	__OnGanttRefresh: function(_) {
		if (this.__Ooo0OTimer) clearTimeout(this.__Ooo0OTimer);
		var $ = this;
		this.__Ooo0OTimer = setTimeout(function() {
			$.renderOoo0O();
			$.__Ooo0OTimer = null
		}, 300)
	},
	renderItemOoo0O: function($, D, H, G) {
		var B = this.owner,
			G = $._id,
			F = B[o10O01]($, "start");
		if (!F.cancel) {
			H[H.length] = "<div id=\"";
			H[H.length] = G;
			H[H.length] = "\" class=\"mini-gantt-resize-start\" style=\"left:";
			H[H.length] = D.x - 2;
			H[H.length] = "px;top:";
			H[H.length] = D.y;
			H[H.length] = "px;width:";
			H[H.length] = 5;
			H[H.length] = "px;height:";
			H[H.length] = D.height;
			H[H.length] = "px;\"></div>"
		}
		F = B[o10O01]($, "finish");
		if (!F.cancel) {
			H[H.length] = "<div id=\"";
			H[H.length] = G;
			H[H.length] = "\" class=\"mini-gantt-resize-finish\" style=\"left:";
			H[H.length] = D.right - 2;
			H[H.length] = "px;top:";
			H[H.length] = D.y;
			H[H.length] = "px;width:";
			H[H.length] = 5;
			H[H.length] = "px;height:";
			H[H.length] = D.height;
			H[H.length] = "px;\"></div>"
		}
		F = B[o10O01]($, "percentcomplete");
		if (!F.cancel) {
			var E = $.PercentComplete || 0,
				C = parseInt((D.right - D.x) * E / 100),
				_ = D.x + C,
				A = 4;
			if (E == 0) A = 3;
			else if (E == 100) {
				A = 3;
				_ -= 3
			} else _ -= 2;
			H[H.length] = "<div id=\"";
			H[H.length] = G;
			H[H.length] = "\" class=\"mini-gantt-resize-percentcomplete\" style=\"left:";
			H[H.length] = _;
			H[H.length] = "px;top:";
			H[H.length] = D.y;
			H[H.length] = "px;width:";
			H[H.length] = A;
			H[H.length] = "px;height:";
			H[H.length] = D.height;
			H[H.length] = "px;\"></div>"
		}
	},
	renderOoo0O: function() {
		var H = this.owner;
		if (!H.allowDrag || H[OlOOo1]()) return;
		var B = H.viewRegion,
			J = H[l11loo](B),
			E = J.left,
			K = J.top,
			L = J.width,
			N = J.height,
			I = H[O1ooo](),
			C = B.startRow,
			A = B.endRow,
			F = [];
		for (var G = C, D = A; G <= D; G++) {
			var $ = I[G];
			if (!$) continue;
			var _ = H[OOo11l]($, E, K);
			this.renderItemOoo0O($, _, F)
		}
		var M = "<div>" + F.join("") + "</div>";
		mini.append(H.cellsEl, M)
	}
};
OlllOlView = function() {
	this.topTimeScale = oO1o11.getTimeScale(this.topTimeScaleType);
	this.bottomTimeScale = oO1o11.getTimeScale(this.bottomTimeScaleType);
	this.zoomTimeScales = oO1o11.createZoomTimeScales();
	var $ = new Date();
	this.startDate = new Date($.getFullYear(), $.getMonth(), $.getDate());
	this.finishDate = new Date($.getFullYear(), $.getMonth() + 1, $.getDate());
	this[o0Ol01](this.startDate, this.finishDate);
	OlllOlView[lO0010][llo0oo][o0OoO0](this);
	this[lO0l11]([])
};
loOo0(OlllOlView, l1lloO, {
	showGridLines: false,
	showLines: true,
	showSummary: true,
	showCriticalPath: false,
	startDate: null,
	finishDate: null,
	weekStartDay: 0,
	topTimeScaleType: "week",
	bottomTimeScaleType: "day",
	showLabel: true,
	labelField: "Name",
	labelAlign: "right",
	startField: "Start",
	finishField: "Finish",
	viewModel: "gantt",
	setViewModel: function($) {
		this.viewModel = $;
		this[Oool01]()
	},
	isTrackModel: function() {
		return this.viewModel == "track"
	},
	baselineIndex: 0,
	getBaseline: function($) {
		var _ = $.Baseline;
		return _ ? _[this.baselineIndex] : null
	},
	uiCls: "pagerganttview",
	_create: function() {
		this.el = document.createElement("div");
		this.el.innerHTML = "<div class=\"pagergantt-header\"></div>" + "<div class=\"pagergantt-body\"><div class=\"pagergantt-gridlines\"></div><div class=\"pagergantt-bars\"></div><div class=\"pagergantt-lines\"></div>" + "<div class=\"pagergantt-scrollHeight\" style=\"position:absolute;left:0;top:0;width:1px;height:1px;\"></div>" + "</div>" + "<div class=\"pagergantt-hscroller\"><div class=\"pagergantt-hscrollercontent\"></div></div>";
		this.l0lO = this.el.childNodes[0];
		this.oo1o1l = this.el.childNodes[1];
		this.gridlinesEl = this.oo1o1l.childNodes[0];
		this.barsEl = this.oo1o1l.childNodes[1];
		this.linesEl = this.oo1o1l.childNodes[2];
		this.hscrollerEl = this.el.childNodes[2];
		this.hscrollerContentEl = this.hscrollerEl.firstChild;
		this.scrollHeightEl = this.oo1o1l.childNodes[3];
		this.lOol0O()
	},
	_initEvents: function() {
		o1ol0o(this.oo1o1l, "scroll", this.lolo1, this);
		o1ol0o(this.hscrollerEl, "scroll", this.l1O0l, this)
	},
	lOol0O: function() {
		this._ToolTip = new mini._PagerGanttViewToolTip(this)
	},
	deferUpdate: function(_) {
		if (this.refreshTimer) clearTimeout(this.refreshTimer);
		var $ = this,
			A = new Date();
		this.refreshTimer = setTimeout(function() {
			$[Oool01](_)
		}, 1)
	},
	doUpdate: function($) {
		if ($ !== false) this.ll1lo0sBox();
		this.loOoO0();
		this.lo0O0l();
		this[o1oOOO]();
		if ($ !== false) this[l11ol1]()
	},
	doLayout: function() {
		var D = new Date();
		if (this[Ool11l]() == false) return;
		var B = this.bodyWidth = this.getBodyWidth();
		this.bodyHeight = this[oOOOO0]();
		if ((this._lastBodyWidth && this._lastBodyWidth != this.bodyWidth) || (this._lastBodyHeight && this._lastBodyHeight != this.bodyHeight)) this[Oool01](false);
		this._lastBodyWidth = this.bodyWidth;
		this._lastBodyHeight = this.bodyHeight;
		this.loOoO0();
		var F = jQuery.boxModel,
			A = this[O10O11](true),
			C = this[Oo1O10]();
		this.l0lO.style.height = C + "px";
		this.oo1o1l.style.height = (A - C - 17) + "px";
		this.oo1o1l.style.width = B + "px";
		var _ = this.scrollHeight;
		this.scrollHeightEl.style.height = _ + "px";
		this.viewportWidth = this.getBodyWidth();
		this.viewportHeight = this[oOOOO0]();
		var $ = this.viewportHeight - 17;
		if ($ < 0) $ = 0;
		var E = this.viewportWidth - 17;
		if (E < 0) E = 0;
		this.hscrollerEl.style.width = E + "px";
		this.hscrollerContentEl.style.width = this.scrollWidth + "px"
	},
	scrollLeft: 0,
	scrollTop: 0,
	setScrollLeft: function($, _) {
		if ($ < 0) $ = 0;
		if ($ > this.scrollWidth) $ = this.scrollWidth;
		if (this.scrollLeft != $) {
			this.scrollLeft = $;
			if (_ !== false) {
				this.allowScroll = false;
				this.hscrollerEl.scrollLeft = $;
				this.scrollLeft = this.hscrollerEl.scrollLeft;
				this.allowScroll = true
			}
			this._showAll = false;
			this.deferUpdate(false)
		}
	},
	setScrollTop: function($) {
		if ($ < 0) $ = 0;
		if ($ > this.scrollHeight) $ = this.scrollHeight;
		if (this.scrollTop != $) {
			this.allowScroll = false;
			this.oo1o1l.scrollTop = $;
			this.scrollTop = this.oo1o1l.scrollTop;
			this.allowScroll = true;
			if (this._showAll !== true) {
				this._showAll = true;
				this[o1oOOO]()
			} else this._deferShowLines()
		}
	},
	getScrollTop: function() {
		return this.oo1o1l.scrollTop
	},
	ll1lo0sBox: function() {
		this.rowsBox = [];
		if (this.owner && this.owner.tableView[O0110l]()) this.rowsBox = this.owner.tableView[o1lo1O]();
		else {
			var _ = 0;
			for (var $ = 0, C = this.data.length; $ < C; $++) {
				var A = 22;
				this.rowsBox[$] = {
					top: _,
					height: A,
					bottom: _ + A
				};
				_ += A
			}
		}
		this.scrollHeight = 500;
		if (this.rowsBox && this.rowsBox.length > 0) {
			var B = this.rowsBox[this.rowsBox.length - 1];
			this.scrollHeight = B.top + B.height
		}
	},
	getHeaderHeight: function() {
		return this.owner && this.owner.tableView[O0110l]() ? this.owner.tableView[Oo1O10]() : 40
	},
	getBodyHeight: function() {
		var $ = this[O10O11](true) - this[Oo1O10]();
		return $
	},
	getBodyWidth: function() {
		return this[o1l1oo](true)
	},
	getViewportBox: function() {
		var $ = this[lOo011](true),
			_ = this[Oo1O10]();
		$.y += _;
		$.height -= _;
		$.bottom = $.y + $.height;
		return $
	},
	lo0O0l: function() {
		var C = this.viewRegion,
			$ = C.startDate,
			Y = C.endDate,
			J = Y[o1oo0O](),
			A = this[Oo1O10]() / 2,
			V = this.getBodyWidth(),
			O = this[oOOOO0](),
			T = jQuery.boxModel,
			K = this.bottomTimeScale.type,
			F = this.bottomTimeScale.number,
			P = this.bottomTimeScale.width,
			W = this.bottomTimeScale.align || "left",
			M = this.bottomTimeScale.tooltip,
			_ = this.bottomTimeScale.formatter,
			D = this.topTimeScale.type,
			N = this.topTimeScale.tooltip,
			G = this.topTimeScale.formatter,
			Z = this.topTimeScale.number,
			X = this.topTimeScale.align || "left",
			S = [];
		S[S.length] = "<div style=\"height:" + (T ? A - 1 : A) + "px;width:" + V + "px;\" class=\"pagergantt-toptimescale\">";
		var L = this[O1OooO]($);
		for (var H = $; H[o1oo0O]() <= J;) {
			var E = this.getTimeScaleNextDate(H, D, Z),
				B = this[O1OooO](H),
				U = this[O1OooO](E),
				R = B - L,
				Q = U - B,
				I = G(H, "top");
			S[S.length] = "<div title=\"";
			S[S.length] = N(H, "top");
			S[S.length] = "\" class=\"pagergantt-headercell\" style=\"left:";
			S[S.length] = R;
			S[S.length] = "px;width:";
			S[S.length] = T ? Q - 5 : Q;
			S[S.length] = "px;height:";
			S[S.length] = A;
			S[S.length] = "px;top:0px;line-height:";
			S[S.length] = T ? A - 1 : A;
			S[S.length] = "px;\">";
			S[S.length] = I;
			S[S.length] = "</div>";
			H = E
		}
		S[S.length] = "</div>";
		S[S.length] = "<div style=\"height:" + (T ? A - 1 : A) + "px;width:" + V + "px;\" class=\"pagergantt-bottomtimescale\">";
		for (H = $; H[o1oo0O]() <= J;) {
			I = _(H, "bottom", D), E = this.getTimeScaleNextDate(H, K, F), B = this[O1OooO](H), U = this[O1OooO](E), R = B - L, Q = U - B;
			S[S.length] = "<div title=\"";
			S[S.length] = M(H, "bottom", D);
			S[S.length] = "\" class=\"pagergantt-headercell\" style=\"left:";
			S[S.length] = R;
			S[S.length] = "px;width:";
			S[S.length] = T ? Q - 5 : Q;
			S[S.length] = "px;height:";
			S[S.length] = A;
			S[S.length] = "px;top:0px;line-height:";
			S[S.length] = T ? A - 1 : A;
			S[S.length] = "px;\">";
			S[S.length] = I;
			S[S.length] = "</div>";
			H = E
		}
		S[S.length] = "</div>";
		this.l0lO.innerHTML = S.join("")
	},
	_showAll: false,
	_doUpdateBody: function() {
		this.OoO00();
		this.O1lloOBars();
		this._deferShowLines()
	},
	_deferShowLines: function() {
		this.linesEl.innerHTML = "";
		if (this.deferShowLinesTimer) clearTimeout(this.deferShowLinesTimer);
		var $ = this;
		this.deferShowLinesTimer = setTimeout(function() {
			$.O1lloOLines()
		}, 100)
	},
	OoO00: function() {
		var Y = this._showAll,
			X = jQuery.boxModel,
			W = [],
			c = this.getBodyWidth(),
			R = this[oOOOO0](),
			b = this.scrollTop,
			Q = b + R;
		if (this.showGridLines) {
			var e = this.data;
			for (var K = 0, U = e.length; K < U; K++) {
				var M = e[K],
					P = this.rowsBox[K];
				if (Y === false) {
					if (P.top + P.height < b) continue;
					if (P.bottom > Q) continue
				}
				var I = this.uid + "$row$" + M._uid;
				W[W.length] = "<div id=\"";
				W[W.length] = I;
				W[W.length] = "\" class=\"pagergantt-row\" style=\"top:";
				W[W.length] = P.top;
				W[W.length] = "px;height:";
				W[W.length] = X ? P.height - 1 : P.height;
				W[W.length] = "px;width:";
				W[W.length] = c;
				W[W.length] = "px;\">";
				W[W.length] = "</div>"
			}
		}
		var H = this.scrollTop,
			Z = this.bodyHeight - 17,
			B = this.topTimeScale.type,
			L = this.bottomTimeScale.type,
			E = this.bottomTimeScale.number,
			C = this.viewRegion,
			$ = C.startDate,
			g = C.endDate,
			J = g[o1oo0O](),
			N = this[O1OooO](C.startDate);
		for (var G = $; G[o1oo0O]() <= J;) {
			var D = this.getTimeScaleNextDate(G, L, E),
				A = this[O1OooO](G),
				a = this[O1OooO](D),
				V = A - N,
				S = a - A,
				T = "pagergantt-column ",
				f = this[Oo0o0l](G, this.bottomTimeScale);
			if (!f) T += "pagergantt-offday";
			if (this.showGridLines || !f) {
				W[W.length] = "<div class=\"";
				W[W.length] = T;
				W[W.length] = "\" style=\"left:";
				W[W.length] = V - 1;
				W[W.length] = "px;width:";
				W[W.length] = X ? S - 1 : S;
				W[W.length] = "px;height:" + this.scrollHeight + "px\" ></div>"
			}
			G = D
		}
		if (mini.isArray(this.timeLines)) {
			var d = this[O1OooO](C.startDate);
			for (K = 0, U = this.timeLines.length; K < U; K++) {
				var F = this.timeLines[K],
					h = F.date;
				if (h) {
					var _ = F.text || "",
						O = F.style || "",
						N = this[O1OooO](h) - d;
					W[W.length] = "<div title=\"" + _ + "\" style=\"" + O + ";left:" + N + "px;height:" + this.scrollHeight + "px\"\"  class=\"pagergantt-timeline\"></div>"
				}
			}
		}
		this.gridlinesEl.innerHTML = W.join("")
	},
	O1lloOBars: function() {
		var A = this[ol000O](),
			L = false,
			E = jQuery.boxModel,
			_ = this[O1OooO](this.viewRegion.startDate),
			H = this.bodyWidth,
			H = this.getBodyWidth(),
			$ = this[oOOOO0](),
			I = this.scrollTop,
			M = I + $,
			D = [],
			J = this.data;
		for (var F = 0, B = J.length; F < B; F++) {
			var G = J[F],
				K = this[o0l0o1](F);
			if (!K) continue;
			if (this._showAll === false) {
				if (K.top + K.height < I) continue;
				if (K.bottom > M) continue
			}
			var C = this[OOo11l](F);
			if (!C || mini.isNull(C.left) || mini.isNull(C.right)) continue;
			if (C.right < _) continue;
			if (C.left > _ + H) continue;
			this._doDrawItem(G, F, D, A, false, _)
		}
		if (A) for (F = 0, B = J.length; F < B; F++) {
			G = J[F];
			this._doDrawItem(G, F, D, A, true, _)
		}
		this.barsEl.innerHTML = D.join("")
	},
	_doDrawItem: function(A, _, J, H, B, F) {
		if (!J) J = [];
		var N = null;
		if (B) N = this[looO10](A);
		var K = this[OOo11l](_, N);
		if (!K) return;
		K.left = K.left - F;
		K.x = K.left;
		K.right = K.left + K.width;
		var L = jQuery.boxModel,
			Q = K.left,
			C = K.top,
			D = K.width,
			M = K.height,
			R = A.PercentComplete || 0,
			P = parseInt(D * R / 100);
		if (B) P = 0;
		var E = this[o0olO0](A),
			I = A._uid,
			G = "pagergantt-item ";
		if (this[O0OOOO](A)) G += " pagergantt-critical ";
		if (B) G += " pagergantt-baseline ";
		var S = this.O1O001(A, K);
		if (S.itemCls) G += " " + S.itemCls + " ";
		if (S.itemHtml === null) {
			if (this[Olo0Oo](A)) {
				if (!B) {
					J[J.length] = "<div id=\"";
					J[J.length] = I;
					J[J.length] = "\" class=\"";
					J[J.length] = G;
					J[J.length] = "pagergantt-summary\" style=\"left:";
					J[J.length] = Q;
					J[J.length] = "px;top:";
					J[J.length] = C;
					J[J.length] = "px;width:";
					J[J.length] = D;
					J[J.length] = "px;\"><div class=\"pagergantt-summary-left\"></div><div class=\"pagergantt-summary-right\"></div></div>"
				}
			} else if (E) {
				if (B) G += " pagergantt-baselinemilestone ";
				J[J.length] = "<div id=\"";
				J[J.length] = I;
				J[J.length] = "\" class=\"";
				J[J.length] = G;
				J[J.length] = " pagergantt-milestone\" style=\"left:";
				J[J.length] = Q;
				J[J.length] = "px;top:";
				J[J.length] = C;
				J[J.length] = "px;\"></div>"
			} else {
				J[J.length] = "<div id=\"";
				J[J.length] = I;
				J[J.length] = "\" class=\"";
				J[J.length] = G;
				J[J.length] = "\" style=\"left:";
				J[J.length] = Q;
				J[J.length] = "px;top:";
				J[J.length] = C;
				J[J.length] = "px;height:";
				J[J.length] = L ? M - 2 : M;
				J[J.length] = "px;width:";
				J[J.length] = L ? D - 2 : D;
				J[J.length] = "px;\"><div class=\"pagergantt-percentcomplete\" style=\"width:";
				J[J.length] = P;
				J[J.length] = "px;\"></div></div>"
			}
		} else J[J.length] = S.itemHtml;
		if (S.showLabel && !B) {
			var O = S.labelHtml,
				$ = K.right + 5;
			if (E) $ += 10;
			J[J.length] = "<div id=\"";
			J[J.length] = I;
			J[J.length] = "\" class=\"pagergantt-label\" style=\"left:";
			J[J.length] = $;
			J[J.length] = "px;top:";
			if (isIE) C += 2;
			J[J.length] = C;
			J[J.length] = "px;\">";
			J[J.length] = O;
			J[J.length] = "</div>"
		}
	},
	O1lloOLines: function() {
		this[lO0OoO]("linesrefresh");
		if (!this.showLines) {
			this.linesEl.innerHTML = "";
			return
		}
		var B = [],
			D = this.data.clone();
		if (this.owner && this.owner.data.LinkTasks) D.addRange(this.owner.data.LinkTasks);
		for (var H = 0, Z = D.length; H < Z; H++) {
			var i = D[H],
				E = i.PredecessorLink;
			if (E) B.addRange(E);
			if (E) for (var P = 0, _ = E.length; P < _; P++) {
				var X = E[P];
				X.TaskUID = i.UID
			}
			this.uidTasks[i.UID] = i
		}
		var V = -1,
			L = -1;
		if (this.data.length > 0) {
			V = this.data[0]._ViewIndex;
			L = this.data[this.data.length - 1]._ViewIndex
		}
		var a = this.scrollHeight,
			f = this,
			b = this.startField,
			K = this.finishField;

		function Q($) {
			var B = $[b],
				_ = $[K];
			if (!B || !_) return;
			var A = -20;
			if ($._ViewIndex > L) A = a;
			var C = {
				top: A,
				height: 20
			};
			C.bottom = C.top + C.height;
			C.left = f[O1OooO](B);
			C.right = f[O1OooO](_);
			C.width = C.right - C.left;
			C.x = C.left;
			C.y = C.top;
			return C
		}
		var U = this[O1OooO](this.viewRegion.startDate),
			A = this._linkHashed = {},
			h = [];
		for (H = 0, Z = B.length; H < Z; H++) {
			var X = B[H],
				Y = this.uidTasks[X.PredecessorUID],
				c = this.uidTasks[X.TaskUID];
			if (!Y || !c) continue;
			A[Y.UID + "$$" + c.UID] = X;
			if (!Y.Start || !Y.Finish) continue;
			if (!c.Start || !c.Finish) continue;
			var T = this.indexTasks[Y.UID],
				J = this.indexTasks[c.UID],
				I = this[OOo11l](T),
				e = this[OOo11l](J);
			if (I == null) I = Q(Y);
			if (e == null) e = Q(c);
			if (!I || !e) continue;
			I.left -= U;
			I.x = I.left;
			I.right = I.left + I.width;
			e.left -= U;
			e.x = e.left;
			e.right = e.left + e.width;
			var W = [];
			W.id = Y.UID + "$$" + c.UID;
			switch (parseInt(X.Type)) {
			case 0:
				if (I.right < e.right) {
					var g = I.top + (I.height / 2),
						d = e.top;
					W.arrowType = "bottom";
					if (I.top > e.top) {
						d = e.bottom;
						W.arrowType = "top"
					}
					var S = [I.right, g],
						C = [e.right, g],
						G = [e.right, d];
					W.push([S, C]);
					W.push([C, G])
				} else {
					g = I.top + (I.height / 2), d = e.top + (e.height / 2);
					W.arrowType = "left";
					var S = [I.right, g],
						C = [I.right + 6, g],
						G = [I.right + 6, d],
						O = [e.right, d];
					W.push([S, C]);
					W.push([C, G]);
					W.push([G, O])
				}
				break;
			case 1:
				if (I.right <= e.left) {
					var g = I.top + (I.height / 2),
						$ = I.right,
						d = e.top,
						F = e.left;
					W.arrowType = "bottom";
					if (I.top > e.top) {
						d = e.bottom;
						W.arrowType = "top"
					}
					S = [$, g], C = [F, g], G = [F, d];
					if (I.right == e.left) {
						S = [$, g];
						C = [F + 2, g];
						G = [F + 2, d]
					}
					W.push([S, C]);
					W.push([C, G])
				} else {
					var g = I.top + (I.height / 2),
						$ = I.right,
						d = e.top + (e.height / 2),
						F = e.left,
						N = e.top - 4;
					W.arrowType = "right";
					if (I.top > e.top) N = e.bottom + 4;
					var S = [$, g],
						C = [$ + 6, g],
						G = [$ + 6, N],
						O = [F - 10, N],
						M = [F - 10, d],
						R = [F, d];
					W.push([S, C]);
					W.push([C, G]);
					W.push([G, O]);
					W.push([O, M]);
					W.push([M, R])
				}
				break;
			case 3:
				if (I.left < e.left) {
					g = I.top + (I.height / 2), $ = I.left, d = e.top + (e.height / 2), F = e.left;
					W.arrowType = "right";
					S = [$, g], C = [$ - 6, g], G = [$ - 6, d], O = [F, d];
					W.push([S, C]);
					W.push([C, G]);
					W.push([G, O])
				} else {
					g = I.top + (I.height / 2), $ = I.left, d = e.top, F = e.left;
					W.arrowType = "bottom";
					if (I.top > e.top) {
						d = e.bottom;
						W.arrowType = "top"
					}
					S = [$, g], C = [F, g], G = [F, d];
					W.push([S, C]);
					W.push([C, G])
				}
				break;
			case 2:
				if (I.left < e.right) {
					g = I.top + (I.height / 2), $ = I.left, d = e.top + (e.height / 2), F = e.right, N = e.top - 4;
					W.arrowType = "left";
					if (I.top > e.top) N = e.bottom + 4;
					S = [$, g], C = [$ - 6, g], G = [$ - 6, N], O = [F + 10, N], M = [F + 10, d], R = [F, d];
					W.push([S, C]);
					W.push([C, G]);
					W.push([G, O]);
					W.push([O, M]);
					W.push([M, R])
				} else {
					g = I.top + (I.height / 2), $ = I.left, d = e.top, F = e.right;
					W.arrowType = "bottom";
					if (I.top > e.top) {
						d = e.bottom;
						W.arrowType = "top"
					}
					S = [$, g], C = [F, g], G = [F, d];
					W.push([S, C]);
					W.push([C, G])
				}
				break;
			default:
				throw new Error("");
				break
			}
			W.Critical = this[O0OOOO](Y) && this[O0OOOO](c);
			W.Cls = X.Cls;
			h.push(W)
		}
		this.Ol11o1(h)
	},
	Ol11o1: function(R) {
		var O = this.scrollTop,
			Q = this.getBodyWidth(),
			C = this[oOOOO0](),
			U = this.scrollHeight,
			H = this.scrollHeight,
			J = [];
		for (var L = 0, G = R.length; L < G; L++) {
			var B = R[L],
				F = null,
				K = null,
				M = B.Critical,
				D = M ? "pagergantt-line-critical" : "";
			if (B.Cls) D += " " + B.Cls;
			var I = B.id;
			for (var T = 0, $ = B.length; T < $; T++) {
				var S = B[T];
				F = S[0];
				K = S[1];
				var P = F[0] < K[0] ? F[0] : K[0],
					A = F[1] < K[1] ? F[1] : K[1],
					_ = Math.abs(K[0] - F[0]) + 1,
					N = Math.abs(K[1] - F[1]) + 1;
				if (P > Q || P + _ < 0) continue;
				if (A > U || A + N < O) continue;
				if (F[1] == K[1]) {
					if (P < 0) {
						_ -= Math.abs(P);
						P = 0
					}
					if (_ + P > Q) _ = Q - P;
					J[J.length] = "<div id=\"";
					J[J.length] = I;
					J[J.length] = "\" style=\"left:";
					J[J.length] = P;
					J[J.length] = "px;top:";
					J[J.length] = A;
					J[J.length] = "px;width:";
					J[J.length] = _;
					J[J.length] = "px;\" class=\"pagergantt-line ";
					J[J.length] = D;
					J[J.length] = "\"></div>"
				} else {
					if (A < 0) {
						N -= Math.abs(A);
						A = 0
					}
					if (N + A > U) N = U - A;
					J[J.length] = "<div id=\"";
					J[J.length] = I;
					J[J.length] = "\" style=\"left:";
					J[J.length] = P;
					J[J.length] = "px;top:";
					J[J.length] = A;
					J[J.length] = "px;height:";
					J[J.length] = N;
					J[J.length] = "px;\" class=\"pagergantt-line ";
					J[J.length] = D;
					J[J.length] = "\"></div>"
				}
			}
			if (K[0] >= Q || K[0] < 0) continue;
			if (K[1] >= U || K[1] < O) continue;
			J[J.length] = "<div id=\"";
			J[J.length] = I;
			J[J.length] = "\" style=\"left:";
			J[J.length] = K[0];
			J[J.length] = "px;top:";
			J[J.length] = K[1];
			J[J.length] = "px;\" class=\"pagergantt-line pagergantt-arrow-";
			J[J.length] = B.arrowType;
			J[J.length] = M ? " pagergantt-arrow-" + B.arrowType + "-critical" : "";
			J[J.length] = "\"></div>"
		}
		var E = J.join("");
		this.linesEl.innerHTML = E
	},
	getItem: function($) {
		if (typeof $ == "object") $ = $._uid;
		return this._idTasks[$]
	},
	getLink: function(C, A) {
		var $ = this.uidTasks[C],
			_ = this.uidTasks[A];
		if (!$ || !_) return null;
		var B = this._linkHashed[$.UID + "$$" + _.UID];
		if (!B) B = this._linkHashed[_.UID + "$$" + $.UID];
		return B
	},
	oooOo: function(B) {
		var A = O111o(B.target, "pagergantt-item"),
			C = A ? A.id : B.target.id;
		if (A) {
			var _ = C.split("$");
			C = _[_.length - 1]
		}
		var $ = this[O1ooo1](C);
		if (!$) {
			A = O111o(B.target, "pagergantt-item");
			if (A) {
				C = A.id;
				$ = this[O1ooo1](C)
			}
		}
		return $
	},
	Olooo0: function(_) {
		if (!O111o(_.target, "pagergantt-line")) return;
		var B = _.target.id,
			$ = B.split("$$"),
			A = this[O1lo0l]($[0], $[1]);
		return A
	},
	getRowBox: function($) {
		return this.rowsBox[$]
	},
	getItemBox: function(_, E) {
		var $ = this.data[_],
			G = this.rowsBox[_];
		if (!$ || !G) return null;
		var D = $[this.startField],
			A = $[this.finishField];
		if (E) {
			D = E.Start;
			A = E.Finish
		}
		if (!D || !A) return;
		var B = G.top,
			C = G.height,
			F = {
				top: G.top + 4,
				height: G.height - 9
			};
		F.bottom = F.top + F.height;
		F.left = this[O1OooO](D);
		F.right = this[O1OooO](A);
		F.width = F.right - F.left;
		if (this[Olo0Oo]($));
		else if (this[o0olO0]($)) {
			F.width = 12;
			F.right = F.left + F.width;
			F.top = F.top - 3;
			F.height = 18;
			F.bottom = F.top + F.height
		} else if (this[ol000O]()) if (E) {
			F.top = B + parseInt(C / 2);
			F.height = 8;
			F.bottom = F.top + F.height
		} else {
			F.height = 8;
			F.top = B + parseInt(C / 2) - F.height - 1;
			F.bottom = F.top + F.height
		}
		F.x = F.left;
		F.y = F.top;
		return F
	},
	isSummary: function($) {
		if (this.showSummary) return $.Summary || ($.children && $.children.length > 0);
		else return false
	},
	isMilestone: function($) {
		return !!$.Milestone
	},
	isWorking: function(A, _) {
		if (!_) return true;
		if (_.type == "day" && _.number == 1) {
			var $ = A.getDay();
			if ($ == 0 || $ == 6) return false
		}
		return true
	},
	isCritical: function($) {
		if (this.showCriticalPath) return $.Critical || $.Critical2;
		else return false
	},
	l11olo: function() {
		return this.bottomTimeScale.width
	},
	getDateByPageX: function(C) {
		var _ = this.viewRegion,
			$ = this[l11loo](_),
			B = this[oOOo1O](_),
			A = C - B.x + $.left;
		return this[l1o00o](A)
	},
	setTopTimeScale: function($) {
		var _ = oO1o11.getTimeScale($);
		if (this.bottomTimeScale.index <= _.index) return;
		this.topTimeScale = _;
		this[o0Ol01](this._startDate, this._finishDate);
		this[Oool01]()
	},
	setBottomTimeScale: function($) {
		var _ = oO1o11.getTimeScale($);
		if (this.topTimeScale.index >= _.index) return;
		this.bottomTimeScale = _;
		this[o0Ol01](this._startDate, this._finishDate);
		this[Oool01]()
	},
	getZoomTimeScale: function(A) {
		var C = this.zoomTimeScales,
			B = null;
		for (var _ = 0, F = C.length; _ < F; _++) {
			var $ = C[_],
				E = $[0],
				D = $[1];
			if (E.type == this.topTimeScale.type && E.number == this.topTimeScale.number && D.type == this.bottomTimeScale.type && D.number == this.bottomTimeScale.number) {
				B = $;
				break
			}
			if (D.type == this.bottomTimeScale.type && A) {
				B = $;
				break
			}
		}
		if (!B && A) B = C[6];
		return B
	},
	zoomIn: function() {
		var _ = this[lO1l10]();
		if (!_) _ = this[lO1l10](true);
		var $ = this.zoomTimeScales[o0oOOo](_);
		$ += 1;
		if ($ >= this.zoomTimeScales.length) $ = this.zoomTimeScales.length - 1;
		_ = this.zoomTimeScales[$];
		this.topTimeScale = _[0];
		this.bottomTimeScale = _[1];
		this[o0Ol01](this._startDate, this._finishDate);
		this[Oool01]()
	},
	zoomOut: function() {
		var _ = this[lO1l10]();
		if (!_) _ = this[lO1l10](true);
		var $ = this.zoomTimeScales[o0oOOo](_);
		$ -= 1;
		if ($ < 0) $ = 0;
		_ = this.zoomTimeScales[$];
		this.topTimeScale = _[0];
		this.bottomTimeScale = _[1];
		this[o0Ol01](this._startDate, this._finishDate);
		this[Oool01]()
	},
	scrollIntoView: function($) {
		if (typeof $ == "string") $ = this.uidTasks[$];
		if (!$) return;
		var A = mini.isDate($) ? $ : $.Start;
		if (!A) return;
		this.loOoO0();
		var B = this[O1OooO](A),
			_ = this[o1l1oo](true);
		if (this.scrollLeft < B && B < this.scrollLeft + _);
		else this[lOoOlO](B - _ / 2)
	},
	setTimeLines: function($) {
		this.timeLines = $;
		this[Oool01]()
	},
	setData: function(_) {
		if (this.data == _) return;
		if (typeof _ == "string") _ = mini.get(_);
		if (!_) _ = [];
		this.data = _;
		this._idTasks = {};
		this.uidTasks = {}, this.indexTasks = {};
		for (var $ = 0, B = this.data.length; $ < B; $++) {
			var A = this.data[$];
			this.indexTasks[A.UID] = $;
			this.uidTasks[A.UID] = A;
			this._idTasks[A._uid] = A
		}
		this._showAll = false;
		this[Oool01]()
	},
	setDateRange: function(D, A) {
		var F = new Date();
		if (!mini.isDate(D)) throw new Error("start must be date type");
		if (!mini.isDate(A)) throw new Error("finish must be date type");
		if (D[o1oo0O]() >= A[o1oo0O]()) throw new Error("date range error");
		if (D < new Date(1900, 0, 1)) throw new Error("date 1900 error ");
		var _ = this.bottomTimeScale.type,
			G = this.bottomTimeScale.number,
			C = this.bottomTimeScale.width;
		this._startDate = this.oo010O(D);
		this._finishDate = this.oo010O(A);
		this.startDate = this.getTimeScaleStartDate(this._startDate, _);
		this.finishDate = this.getTimeScaleNextDate(this._finishDate, _, 1);
		var B = 0,
			E = this.finishDate[o1oo0O]();
		if (_ == "hour") {
			C = (C / G) * 24;
			_ = "day";
			G = 1
		}
		if (_ == "minutes") {
			C = (C / G) * 60 * 24;
			_ = "day";
			G = 1
		}
		if (_ == "seconds") {
			C = (C / G) * 60 * 60 * 24;
			_ = "day";
			G = 1
		}
		for (var $ = this.O1111o(this.startDate); $[o1oo0O]() <= E;) {
			B += C;
			$ = this.getTimeScaleNextDate($, _, G)
		}
		this.scrollWidth = B
	},
	O1111o: function($) {
		return new Date($[o1oo0O]())
	},
	oo010O: function($) {
		return new Date($.getFullYear(), $.getMonth(), $.getDate())
	},
	loOoO0: function() {
		var H = this.scrollLeft,
			F = this.bodyWidth;
		if (mini.isNull(F)) F = this.getBodyWidth();
		var B = F,
			_ = H + B,
			G = this.l11olo(),
			D = this.topTimeScale.type,
			$ = this.bottomTimeScale.type,
			A = this.getTimeScaleStartDate(this[l1o00o](H), $),
			E = this.getTimeScaleStartDate(this[l1o00o](H + B), $),
			C = {
				startDate: A,
				endDate: E
			};
		this.viewRegion = C;
		return C
	},
	_OnItemToolTipNeeded: function($) {
		var _ = $.isBaseline ? this[looO10]($) : null,
			A = $.Name,
			B = {
				item: $,
				tooltip: A,
				cls: "",
				baseline: _,
				isBaseline: $.isBaseline
			};
		this[lO0OoO]("ItemToolTipNeeded", B);
		delete $.isBaseline;
		return B
	},
	_OnLinkToolTipNeeded: function(_) {
		var $ = this.uidTasks[_.PredecessorUID],
			A = this.uidTasks[_.TaskUID],
			B = {
				link: _,
				tooltip: "",
				cls: "",
				fromItem: $,
				toItem: A
			};
		this[lO0OoO]("LinkToolTipNeeded", B);
		return B
	},
	O1O001: function($, _) {
		var A = {
			item: $,
			itemBox: _,
			itemCls: null,
			itemStyle: null,
			itemHtml: null,
			showLabel: this.showLabel,
			labelHtml: $[this.labelField],
			labelAlign: this.labelAlign
		};
		this[lO0OoO]("drawitem", A);
		return A
	},
	l1O0l: function(_) {
		if (this.allowScroll === false) return;
		var _ = {
			scrollLeft: this.hscrollerEl.scrollLeft,
			scrollTop: this.oo1o1l.scrollTop,
			direction: "horizontal"
		};
		this.__scrollLeft = _.scrollLeft;
		this[lO0OoO]("scroll", _);
		var $ = this;
		if (this._hscrollTimer) return;
		this._hscrollTimer = setTimeout(function() {
			$[lOoOlO]($.__scrollLeft, false);
			$._hscrollTimer = null
		}, 30)
	},
	lolo1: function(_) {
		if (this.allowScroll === false) return;
		var _ = {
			scrollLeft: this.hscrollerEl.scrollLeft,
			scrollTop: this.oo1o1l.scrollTop,
			direction: "vertical"
		},
			$ = this;
		$._scrollTop = _.scrollTop;
		this[lO0OoO]("scroll", _);
		if (this._showAll !== true) {
			this._showAll = true;
			this[o1oOOO]()
		}
		$ = this;
		if (this._vscrollTimer) return;
		this._vscrollTimer = setTimeout(function() {
			$[lOlo1l]($._scrollTop);
			$._vscrollTimer = null
		}, 10)
	}
});
OlllOlView[O0lOl0][O1OooO] = oO1o11[O0lOl0][O1OooO];
OlllOlView[O0lOl0][l1o00o] = oO1o11[O0lOl0][l1o00o];
OlllOlView[O0lOl0].getTimeScaleNextDate = oO1o11[O0lOl0].getTimeScaleNextDate;
OlllOlView[O0lOl0].getTimeScaleStartDate = oO1o11[O0lOl0].getTimeScaleStartDate;
l1O011(OlllOlView, "pagerganttview");
mini._PagerGanttViewToolTip = function($) {
	this.gantt = $;
	o1ol0o(document.body, "mousemove", this.__OnGanttMouseMove, this);
	this.gantt[o1Oo11]("linesrefresh", function($) {
		this.draging = false;
		this.hideTip()
	}, this)
};
mini._PagerGanttViewToolTip[O0lOl0] = {
	__OnGanttMouseMove: function(D) {
		if (this.draging === true) return;
		var A = D.target,
			_ = this.gantt;
		if (_.l111 == true) return;
		if (!_[Olloo0](D)) {
			this.hideTip();
			return
		}
		var $ = _.oooOo(D);
		if ($) {
			var B = O111o(A, "pagergantt-baseline");
			$.isBaseline = B;
			this.toolTipEvent = "_OnItemToolTipNeeded";
			this.toolTipItem = $;
			this.showTip($, D.pageX + 8, D.pageY + 15, this.showTipDelay)
		} else {
			var C = _.Olooo0(D);
			if (C) {
				this.toolTipEvent = "_OnLinkToolTipNeeded";
				this.toolTipItem = C;
				this.showTip(C, D.pageX + 5, D.pageY + 8, this.showTipDelay)
			} else this.hideTip()
		}
	},
	showTipDelay: 700,
	showTip: function($, E, B, D, C) {
		if (this._lastShowItem == $ && D != 0) {
			this._showXY = [E, B];
			return
		}
		this.hideTip(false);
		if (this.hideTimer) {
			clearInterval(this.hideTimer);
			this.hideTimer = null
		}
		var _ = this.gantt;
		this._lastShowItem = $;
		var A = this;
		this._showXY = [E, B];
		if (D <= 0 && mini.isFireFox) A._showTipCore($, C);
		else this._showTipTimer = setTimeout(function() {
			A._showTipCore($, C)
		}, D)
	},
	_showTipCore: function($, E) {
		var _ = this.gantt;
		if (!this._tipEl) this._tipEl = mini.append(document.body, "<div class=\"pagergantt-tooltip\"></div>");
		if (E == true) this._tipEl.style.width = "auto";
		var G = _[this.toolTipEvent]($);
		this._tipEl.innerHTML = G.tooltip;
		this._tipEl.style.display = "block";
		var F = this._showXY[0],
			C = this._showXY[1];
		mini[l01o0O](this._tipEl, -1000, -1000);
		var D = mini.getSize(this._tipEl),
			A = this.gantt[oOOo1O]();
		if (F == "left") F = A.x + 5;
		else if (F == "right") F = A.right - 20 - D.width;
		if (C == "top") C = A.y + 5;
		else if (C == "bottom") C = A.bottom - 20 - D.height;
		var B = mini[oOOo1O]();
		if (F + D.width > B.right) F = B.right - D.width;
		if (C + D.height > B.bottom) C = B.bottom - D.height;
		mini[l01o0O](this._tipEl, F, C)
	},
	hideTip: function(_) {
		var $ = this;
		if ($._tipEl && _ !== false) {
			jQuery($._tipEl).remove();
			$._tipEl = null
		}
		$._lastShowItem = null;
		clearInterval($._showTipTimer)
	}
};
o11OoOX = function() {
	this._ecConfig = {
		expandAll: true,
		expandNodes: [],
		expandLevels: [],
		collapseNodes: [],
		collapseLevels: []
	};
	o11OoOX[lO0010][llo0oo][o0OoO0](this)
};
loOo0(o11OoOX, oOl100, {
	treeColumn: "",
	showTreeIcon: true,
	showTreeLines: false,
	idField: "id",
	iconField: "iconCls",
	leafIcon: "mini-treegrid-leaf",
	folderIcon: "mini-treegrid-folder",
	uiCls: "mini-treegridx",
	set: function(_) {
		if (typeof _ == "string") return this;
		var $ = this.ll1lOO;
		this.ll1lOO = false;
		var A = _.treeColumn || _[O111ll] || _.iconField || _[ol1Ol] || _[olo1O];
		o11OoOX[lO0010][OO101l][o0OoO0](this, _);
		this.ll1lOO = $;
		if (A) this[Oool01]();
		return this
	},
	o011O0: function($, _, G, C) {
		var J = o11OoOX[lO0010].o011O0[o0OoO0](this, $, _, G, C);
		if (!this.treeColumn || this.treeColumn !== _.name) return J;
		var A = $;
		if (mini.isNull(J[ol1Ol])) J[ol1Ol] = this[ol1Ol];
		var H = J.cellHtml,
			F = this[loOOO0](A),
			D = this[lo110](A) * 18,
			B = "";
		if (!F) B = this[l1l01O](A) ? "mini-treegrid-expand" : "mini-treegrid-collapse";
		if (J.cellCls) J.cellCls += " mini-treegrid-treecolumn ";
		else J.cellCls = " mini-treegrid-treecolumn ";
		var I = "<div class=\"mini-treegrid-treecolumn-inner " + B + "\">";
		if (!F) I += "<a href=\"#\" onclick=\"return false;\"  hidefocus class=\"mini-treegrid-ec-icon\" style=\"left:" + (D) + "px;\"></a>";
		D += 18;
		if (J[ol1Ol]) {
			var E = this[o1O1OO](A);
			I += "<div class=\"" + E + " mini-treegrid-nodeicon\" style=\"left:" + D + "px;\"></div>";
			D += 18
		}
		I += "<div class=\"mini-treegrid-nodetext\" style=\"padding-left:" + (D + 2) + "px;\">" + H + "</div>";
		I += "</div>";
		H = I;
		J.cellHtml = H;
		return J
	},
	isLeaf: function($) {
		return $._IsLeaf !== false
	},
	getLevel: function($) {
		var _ = $ ? $._Level : 0;
		if (isNaN(_)) _ = 0;
		return _
	},
	isExpanded: function($) {
		return $._Expanded !== false
	},
	getNodeIcon: function(_) {
		var $ = _[this.iconField];
		if (!$) if (this[loOOO0](_)) $ = this.leafIcon;
		else $ = this.folderIcon;
		return $
	},
	setTreeColumn: function($) {
		if (this.treeColumn != $) {
			this.treeColumn = $;
			this[Oool01]()
		}
	},
	getTreeColumn: function($) {
		return this.treeColumn
	},
	setShowTreeIcon: function($) {
		if (this[ol1Ol] != $) {
			this[ol1Ol] = $;
			this[Oool01]()
		}
	},
	getShowTreeIcon: function($) {
		return this[ol1Ol]
	},
	setShowTreeLines: function($) {
		if (this[olo1O] != $) {
			this[olo1O] = $;
			this[Oool01]()
		}
	},
	getShowTreeIcon: function($) {
		return this[ol1Ol]
	},
	setIconField: function($) {
		this.iconField = $;
		if (this.iconField != $) {
			this.iconField = $;
			this[Oool01]()
		}
	},
	getIconField: function($) {
		return this.iconField
	},
	getNode: function(_) {
		if (typeof _ == "object") return _;
		else for (var $ = 0, B = this.data.length; $ < B; $++) {
			var A = this.data[$];
			if (A[this.idField] == _) return A
		}
	},
	expandAll: function() {
		this._ecConfig = {
			expandAll: true,
			expandNodes: [],
			expandLevels: [],
			collapseNodes: [],
			collapseLevels: []
		};
		this[ooolll]()
	},
	collapseAll: function() {
		this._ecConfig = {
			expandAll: false,
			expandNodes: [],
			expandLevels: [],
			collapseNodes: [],
			collapseLevels: []
		};
		this[ooolll]()
	},
	expandLevel: function($) {
		$ = parseInt($);
		if (isNaN($)) return;
		this._ecConfig.expandLevels = [$];
		this._ecConfig.collapseNodes = [];
		this._ecConfig.collapseLevels = [];
		this[ooolll]()
	},
	collapseLevel: function($) {
		$ = parseInt($);
		if (isNaN($)) return;
		this._ecConfig.collapseLevels = [$];
		this._ecConfig.expandNodes = [];
		this._ecConfig.expandLevels = [];
		this[ooolll]()
	},
	expandNode: function($) {
		if (typeof $ == "object") $ = $[this.idField];
		if (!$) return;
		this._ecConfig.collapseNodes.remove($);
		if (this._ecConfig.expandNodes[o0oOOo]($) == -1) this._ecConfig.expandNodes.push($);
		this[ooolll]()
	},
	collapseNode: function($) {
		if (typeof $ == "object") $ = $[this.idField];
		if (!$) return;
		this._ecConfig.expandNodes.remove($);
		if (this._ecConfig.collapseNodes[o0oOOo]($) == -1) this._ecConfig.collapseNodes.push($);
		this[ooolll]()
	},
	toggleNode: function($) {
		var _ = this[OO1110]($);
		if (!_) return;
		if (this[l1l01O](_)) this[lO10o0](_);
		else this[l01ol1](_)
	},
	l10oOl: function($, _, A) {
		$ = $ || {};
		$._ECCONFIG = mini.encode(this._ecConfig);
		return o11OoOX[lO0010].l10oOl[o0OoO0](this, $, _, A)
	},
	_OnCellMouseDown: function(A) {
		var $ = A.htmlEvent,
			_ = A.record;
		if (O111o($.target, "mini-treegrid-ec-icon"));
		else o11OoOX[lO0010][lO0o00][o0OoO0](this, A)
	},
	_OnCellClick: function(B) {
		var $ = B.htmlEvent,
			A = B.record,
			_ = B.column;
		if (O111o($.target, "mini-treegrid-ec-icon")) this[lOl0l0](A);
		else this[lO0OoO]("cellclick", B)
	},
	getAttrs: function($) {
		var _ = o11OoOX[lO0010][lo0O00][o0OoO0](this, $);
		mini[o0O1l1]($, _, ["treeColumn", "iconField", "idField"]);
		mini[OooO00]($, _, ["showTreeIcon", "showTreeLines"]);
		return _
	}
});
l1O011(o11OoOX, "treegridx");
OlllOl = function() {
	var $ = new Date(),
		_ = new Date($.getFullYear(), $.getMonth(), $.getDate()),
		A = new Date($.getFullYear(), $.getMonth() + 1, $.getDate());
	this.data = {
		Name: "",
		StartDate: _,
		FinishDate: A,
		CalendarUID: "1",
		Calendars: this[ll0lll](),
		Tasks: [],
		Resources: [],
		total: 0
	};
	this.uidTasks = {};
	OlllOl[lO0010][llo0oo][o0OoO0](this)
};
loOo0(OlllOl, oO010O, {
	baselineIndex: 0,
	viewModel: "gantt",
	title: "",
	bodyStyle: "padding:0",
	showHeader: false,
	showFooter: true,
	showLinkLines: true,
	showGridLines: false,
	showCriticalPath: false,
	allowResize: true,
	uiCls: "pagergantt",
	multiSelect: false,
	readOnly: false,
	showGanttView: true,
	showTableView: true,
	ganttViewExpanded: true,
	tableViewExpanded: true,
	baselineIndex: 0,
	PredecessorLinkType: ["FF", "FS", "SF", "SS"]
});
oOl10 = OlllOl[O0lOl0];
oOl10[lo0O00] = lo00l;
oOl10[Oo0l1o] = olooo;
oOl10.lll00 = oo1o1;
oOl10[looO10] = o0oOl;
oOl10[olO0o0] = ol0ll;
oOl10[oO0OO] = ooOo1;
oOl10[lO0OO] = l100o;
oOl10[Ol1lo1] = o0ooo;
oOl10[OoloOo] = ol00l;
oOl10[O0Oo0O] = lO0O0;
oOl10[o0lO00] = lO0lOl;
oOl10[OOlll] = OlOl0;
oOl10[Oo1OO1] = oO0oo;
oOl10[l11ol1] = oOooo;
oOl10[ooo0oo] = ooOo0;
oOl10[l1Oo1] = lOOlo;
oOl10.O1lloO = lO10O;
oOl10[Ol00o1] = lOOl0;
oOl10[l1OoOO] = l1l1o;
oOl10[O0OOOl] = Ol0ol;
oOl10[Ol1o0O] = Ol01o;
oOl10.olool0 = l00oo;
oOl10.Ooo0lo = OOolo;
oOl10[OO1OO0] = o110O;
oOl10[lOol01] = l1oO0;
oOl10[oll1oO] = l1O01;
oOl10[lO0lOO] = O1Olo;
oOl10[ll1ll1] = oo1Ol;
oOl10[OO1ool] = lO01o;
oOl10[OO1OO0] = o110O;
oOl10[lOl0l0] = O10o1;
oOl10[OO000o] = O11l0;
oOl10[o0Oll1] = lllo0;
oOl10[lolooO] = O11l0Level;
oOl10[O11o0o] = lllo0Level;
oOl10[l0O0l0] = O11l0All;
oOl10[o00Olo] = lllo0All;
oOl10[o0l1o1] = OlllO;
oOl10[O11010] = o0l1o;
oOl10[o1O1o1] = lO11o;
oOl10[lOlllO] = Ooloo;
oOl10.lo11ll = ol0Ol;
oOl10[o1lOoo] = OoO1O;
oOl10[lOlOOo] = O1llO;
oOl10[l0Oo11] = Ooll1;
oOl10[oOOO1O] = oO1OO;
oOl10[o00OO0] = Oo0l0;
oOl10[lool1o] = o1o00;
oOl10[oolO0] = o1o00s;
oOl10[loO0ll] = o0010;
oOl10[Oool1o] = l0o1O;
oOl10[ol010l] = Olo0o;
oOl10[Ololl1] = O1O0l;
oOl10[ooo1l0] = OO0o0;
oOl10[llO0l0] = o01Oo;
oOl10[ooolll] = ll1O1;
oOl10[OlOl10] = llOOo;
oOl10[lO111l] = llll;
oOl10[o1OoOo] = l101O;
oOl10[OooOO] = OoOO;
oOl10[o1011o] = O0oo;
oOl10[o1lOll] = lol1O;
oOl10[Oooolo] = o0o00;
oOl10[l10oO0] = oo0O0O;
oOl10[lOlOo] = O1lol;
oOl10[oO1010] = o10o1;
oOl10[o0oOOl] = lll11;
oOl10[Oll01l] = l1l10;
oOl10[Oo0o0l] = lo11;
oOl10.ol0oo0 = ol0lO;
oOl10.l11l = OO0l1;
oOl10[o101oo] = Oo1l0;
oOl10[OO0ol0] = Olll0;
oOl10[OOOo1l] = Ol1lo;
oOl10[lol110] = ooll1;
oOl10.lOl1O = o0ll0;
oOl10.O0olOl = lOlo0;
oOl10[lO01o0] = o0Ol1;
oOl10[ooooll] = OOo1l;
oOl10[ll0lll] = oO0ol;
oOl10[loO0lO] = o1OoO;
oOl10[l11l1l] = lOl1l;
oOl10[l0oloo] = l0l0o;
l1O011(OlllOl, "pagergantt");
PagerGantt = MyGantt = OlllOl;
ol0Ol1 = function() {
	ol0Ol1[lO0010][llo0oo][o0OoO0](this);
	this.columns = [];
	this.viewColumns = [];
	this[lO0l11]([])
};
loOo0(ol0Ol1, l1lloO, {
	width: 300,
	height: 150,
	virtualModel: false,
	data: null,
	_rowIdField: "_id",
	multiSelect: false,
	allowRowSelect: true,
	allowCellSelect: true,
	allowAlternating: true,
	allowResizeColumn: true,
	allowMoveColumn: true,
	allowSortColumn: true,
	allowDragDrop: false,
	showDirty: true,
	allowUnselect: false,
	scrollLeft: 0,
	scrollTop: 0,
	scrollWidth: 0,
	scrollHeight: 0,
	headerHeight: 23,
	showHScroll: true,
	showVScroll: true,
	columnWidth: 100,
	rowHeight: 21,
	columnMinWidth: 10,
	columnMaxWidth: 800,
	l110OO: "mini-supergrid-row",
	cellCls: "mini-supergrid-cell",
	lol010: "mini-supergrid-rowselected",
	cellSelectedCls: "mini-supergrid-cellselected",
	O0lO: "mini-supergrid-alternating",
	uiCls: "mini-supergrid",
	lllo: "mini-supergrid-frozenCell",
	frozenStartColumn: -1,
	frozenEndColumn: -1,
	_vscrollTimer: null,
	_hscrollTimer: null
});
llO1O = ol0Ol1[O0lOl0];
llO1O[lo0O00] = l0O10O;
llO1O.OOo0O0 = l0lO0;
llO1O.ll1l10 = oOO10;
llO1O.o01l01 = oo0O1;
llO1O.lo1Oll = O0lll;
llO1O.llOloo = ooO10;
llO1O.l01O10 = oo010;
llO1O[lo011l] = O1O0O;
llO1O.O101o = Oll01;
llO1O.l1O0l = o1lO1;
llO1O[l1llOo] = oOooO;
llO1O[lO101O] = OOol0;
llO1O[O0OOO1] = OlO1o;
llO1O[oOlO1O] = llo1l;
llO1O[OlolOo] = OO1O0;
llO1O[o001OO] = l0OO;
llO1O[ol0l1o] = l1lo0;
llO1O[o1Olll] = O00O0;
llO1O[Ol1O10] = O010o;
llO1O[o0l0o1] = Ol0ll;
llO1O[Ol0OoO] = l0l0;
llO1O[OollO1] = ooO1l;
llO1O.loOoO0 = OOo11;
llO1O[l1oll1] = lO1lO;
llO1O[Oo0loo] = ll1lO;
llO1O[oOOo1O] = oo100;
llO1O[ooll0o] = Oll1o;
llO1O[Oll1l1] = OolOl;
llO1O[Oo1O10] = oloOO;
llO1O.Oo110 = l11l0;
llO1O.loOOo1 = l0lO1;
llO1O.o11OOO = ool10;
llO1O.O1l0o = o1oo0;
llO1O[o1oloo] = OoO1;
llO1O.oo1oO1 = looo0;
llO1O.O01Oll = lo0l1;
llO1O.ooO1ol = l0OO0;
llO1O.l011o = oo1O1;
llO1O[oOOOlO] = l10O;
llO1O[O1ooo] = oOl0o;
llO1O[lO0l11] = ll110;
llO1O[O0l0O1] = oOllo;
llO1O[l010OO] = OoO1l;
llO1O[lOoOOo] = lO1oo;
llO1O[oo0l1o] = l1O1l;
llO1O[O1oOll] = ll1oO;
llO1O[lOlo1l] = llOO;
llO1O[lOoOlO] = lOo0O;
llO1O[l11ol1] = l0olO;
llO1O[lO01o0] = o01ll;
llO1O[ooooll] = l11oo;
mini._SuperDataTableApplys = {
	clear: function() {
		this.data.clear()
	},
	loadData: function($) {
		this[lO0l11]($)
	},
	getCount: function() {
		return this.data[ool10O]()
	},
	getChanges: function() {
		return this.data[olll01]()
	},
	getData: function() {
		return this.data[OO0llo]()
	},
	toArray: function() {
		return this.data[OO0llo]()
	},
	getRows: function() {
		return this.data[OO0llo]()
	},
	updateRow: function($, A, _) {
		this.data.updateRecord($, A, _)
	},
	addRow: function($) {
		return this.data[l10o01]($)
	},
	insertRow: function($, _) {
		return this.data.insert($, _)
	},
	removeRow: function($) {
		return this.data.remove($)
	},
	removeRowAt: function($) {
		return this.data.removeAt($)
	},
	moveRow: function(_, $) {
		this.data.move(_, $)
	},
	indexOf: function($) {
		return this.data[o0oOOo]($)
	},
	getAt: function($) {
		return this.data[oO0l1O]($)
	},
	findRows: function(_, $) {
		return this.findRecords(_, $)
	},
	findRecords: function(_, $) {
		return this.data.findRecords(_, $)
	},
	removeSelected: function(A) {
		var _ = this[lool1o](),
			$ = this[o0oOOo](_);
		this[lo1o1O](_);
		if (A !== false) {
			_ = this[oO0l1O]($);
			this[o00OO0](_ ? $ : $ - 1)
		}
	},
	getSelected: function() {
		return this.data[lool1o]()
	},
	getSelecteds: function() {
		return this.data[oolO0]()
	},
	select: function($) {
		this.data[o00OO0]($)
	},
	selects: function($) {
		this.data[OlO1lO]($)
	},
	deselect: function($) {
		this.data[oOOO1O]($)
	},
	deselects: function($) {
		this.data[O1o00]($)
	},
	selectAll: function() {
		this.data[l0Oo11]()
	},
	deselectAll: function() {
		this.data[lOlOOo]()
	},
	isSelected: function($) {
		return this.data[loO0ll]($)
	},
	getRange: function($, _) {
		if (mini.isNull($) || mini.isNull(_)) return;
		return this.data[lOlo11]($, _)
	},
	selectRange: function($, _) {
		this.data[O1OOo1]($, _)
	},
	filter: function(_, $) {
		this.data[O00l1o](_, $)
	},
	clearFilter: function() {
		this.data[l1OOOO]()
	},
	sort: function(_, $) {
		this.data[O0o1oO](_, $)
	},
	clearSort: function() {
		this.data[ll0011]()
	}
};
mini._SuperDataTreeApplys = {
	isLeaf: function($) {
		return this.data[loOOO0]($)
	},
	getLevel: function($) {
		return $ ? $._level : 0
	},
	isExpanded: function($) {
		return this.data[l0oOl0]($)
	},
	getChildNodes: function($) {
		return this.data[Ol0Olo]($)
	},
	getParentNode: function($) {
		return this.data[lO1l00]($)
	},
	isAncestor: function(_, $) {
		return this.data[O1OlOO](_, $)
	},
	getAncestors: function($) {
		return this.data[olO011]($)
	},
	getRootNode: function($) {
		return this.data[Ooolo0]($)
	},
	getAncestors: function($) {
		return this.data[olO011]($)
	},
	hasChildNodes: function($) {
		return this.data.hasChildNodes($)
	},
	indexOfNode: function($) {
		return this.data.indexOfNode($)
	},
	updateNode: function(_, A, $) {
		this.data.updateRecord(_, A, $)
	},
	addNode: function(_, $) {
		return this.data[O11O0o](_, $)
	},
	insertNode: function(A, $, _) {
		return this.data.insertNode(A, $, _)
	},
	removeNodeAt: function($, _) {
		return this.data.removeNodeAt($, _)
	},
	removeNode: function($) {
		return this.data[lllO0l]($)
	},
	moveNode: function(A, $, _) {
		this.data[o1lO11](A, $, _)
	},
	addNodes: function(_, $) {
		return this.data[O1o00l](_, $)
	},
	insertNodes: function(A, $, _) {
		return this.data.insertNodes($, A, _)
	},
	moveNodes: function(A, $, _) {
		this.data[llll00](A, $, _)
	},
	removeNodes: function($) {
		return this.data[OO1O1l]($)
	},
	findNodes: function(_, $) {
		return this.data.findRecords(_, $)
	},
	getChanges: function() {
		return this.data[olll01]()
	},
	getData: function() {
		return this.data.toTree()
	},
	bubbleParent: function($, A, _) {
		this.data[OO1001]($, A, _)
	},
	cascadeChild: function($, A, _) {
		this.data[O01O1l]($, A, _)
	},
	eachChild: function($, A, _) {
		this.data[O1Ol11]($, A, _)
	},
	collapseLevel: function($, _) {
		this.data[lolooO]($, _)
	},
	expandLevel: function($, _) {
		this.data[O11o0o]($, _)
	},
	collapse: function($, _) {
		this.data[OO000o]($, _)
	},
	expand: function($, _) {
		this.data[o0Oll1]($, _)
	},
	toggle: function($) {
		this.data[oOolll]($)
	},
	collapseAll: function() {
		this.data[l0O0l0]()
	},
	expandAll: function() {
		this.data[o00Olo]()
	},
	filter: function(_, $) {
		this.data[O00l1o](_, $)
	},
	clearFilter: function() {
		this.data[l1OOOO]()
	},
	sort: function(_, $) {
		this.data[O0o1oO](_, $)
	},
	clearSort: function() {
		this.data[ll0011]()
	}
};
mini.copyTo(ol0Ol1.prototype, mini._SuperDataTableApplys);
l1O011(ol0Ol1, "supergrid");
mini.GridColumnModel = {
	addColumn: function(A, _, $) {
		if (!A) return;
		$ = this[lOlOo]($);
		if (!$) {
			$ = this;
			if (typeof action == "string") action = "append"
		}
		if (mini.isNull(_) || _ < 0) _ = 1000;
		switch (_) {
		case "before":
			parentColumn = this[l0llll]($);
			_ = parentColumn.columns[o0oOOo]($);
			parentColumn.columns.insert(_, A);
			break;
		case "after":
			parentColumn = this[l0llll]($);
			_ = parentColumn.columns[o0oOOo]($);
			parentColumn.columns.insert(_ + 1, A);
			break;
		case "append":
		case "add":
			if (!$.columns) $.columns = [];
			$.columns.push(A);
			break;
		default:
			if (mini.isNumber(_)) {
				if (!$.columns) $.columns = [];
				$.columns.insert(_, A)
			}
			break
		}
		this[oO1010](this.columns)
	},
	removeColumn: function($) {
		$ = this[lOlOo]($);
		var _ = this[l0llll]($);
		if ($ && _) {
			_.columns.remove($);
			this[oO1010](this.columns)
		}
		return $
	},
	updateColumn: function($, _) {
		$ = this[lOlOo]($);
		mini.copyTo($, _);
		this[oO1010](this.columns)
	},
	moveColumn: function(C, _, A) {
		C = this[lOlOo](C);
		_ = this[lOlOo](_);
		if (!C || !_ || !A || C == _) return;
		if (this[l1111O](C, _)) return;
		var D = this[l0llll](C);
		if (D) D.columns.remove(C);
		var B = _,
			$ = A;
		if ($ == "before") {
			B = this[l0llll](_);
			$ = B.columns[o0oOOo](_)
		} else if ($ == "after") {
			B = this[l0llll](_);
			$ = B.columns[o0oOOo](_) + 1
		} else if ($ == "add" || $ == "append") {
			if (!B.columns) B.columns = [];
			$ = B.columns.length
		} else if (!mini.isNumber($)) return;
		B.columns.insert($, C);
		this[oO1010](this.columns)
	},
	getColumn: function(_) {
		if (typeof _ == "object") return _;
		var $ = this.o0l1OO[_];
		if (!$) $ = this.oO1oO[_];
		return $
	},
	getParentColumn: function($) {
		$ = this[lOlOo]($);
		var _ = $ ? this.oO1oO[$._pid] : null;
		if ($ && !_) _ = this;
		return _
	},
	isAncestorColumn: function(_, B) {
		if (_ == B) return true;
		if (!_ || !B) return false;
		var A = this[l0l0l0](B);
		for (var $ = 0, C = A.length; $ < C; $++) if (A[$] == _) return true;
		return false
	},
	getAncestorColumns: function(A) {
		var _ = [];
		while (1) {
			var $ = this[l0llll](A);
			if (!$ || $ == this) break;
			_[_.length] = $;
			A = $
		}
		_.reverse();
		return _
	},
	getViewColumns: function() {
		return this.viewColumns
	},
	getColumns: function($) {
		$ = this[lOlOo]($);
		if (!$) $ = this;
		return $.columns
	},
	isVisibleColumn: function($) {
		$ = this[lOlOo]($);
		if (!$.visible) return false;
		var _ = this[l0llll]($);
		if (_ == this) return true;
		return this[o0Ol](_)
	},
	getDisplayColumns: function($) {
		$ = this[lOlOo]($);
		if (!$) $ = this;
		return $.displayColumns || []
	},
	eachColumns: function(B, F, C) {
		var D = this[Oo00o0](B);
		if (D) {
			var _ = D.clone();
			for (var A = 0, E = _.length; A < E; A++) {
				var $ = _[A];
				if (F[o0OoO0](C, $, A, B) === false) break
			}
		}
	},
	eachDisplayColumns: function(B, F, C) {
		var D = this.getDisplayColumns(B);
		if (D) {
			var _ = D.clone();
			for (var A = 0, E = _.length; A < E; A++) {
				var $ = _[A];
				if (F[o0OoO0](C, $, A, B) === false) break
			}
		}
	},
	_columnId: 0,
	setColumns: function(D) {
		if (!mini.isArray(D)) D = [];
		this.columns = D;
		this.displayColumns = [];
		this.viewColumns = [];
		this.oO1oO = {};
		this.o0l1OO = {};
		var _ = 0,
			$ = 0;

		function B(E, A, F) {
			this._initColumn(E);
			E.__id = this._columnId++;
			E._id = this.id + "$column$" + E.__id;
			E._pid = F._id;
			var G = E.name;
			if (G) this.o0l1OO[G] = E;
			this.oO1oO[E._id] = E;
			E.level = $;
			$ += 1;
			this[ll0o0l](E, B, this);
			$ -= 1;
			E.displayColumns = (E.columns || []).clone();
			for (var C = E.displayColumns.length - 1; C >= 0; C--) {
				var D = E.displayColumns[C];
				if (D.visible == false) E.displayColumns.removeAt(C)
			}
			if (E.displayColumns.length == 0 && this[o0Ol](E)) this.viewColumns.push(E);
			if (E.level > _) _ = E.level
		}
		this[ll0o0l](this, B, this);
		this.displayColumns = D.clone();
		for (var A = this.displayColumns.length - 1; A >= 0; A--) {
			var C = this.displayColumns[A];
			if (C.visible == false) this.displayColumns.removeAt(A)
		}
		this.maxColumnLevel = _;
		this[o1oloo]()
	},
	_initColumn: function(column) {
		column._gridUID = this.uid;
		column[l1olo] = this[l1olo];
		if (column.type && column.inited != true) {
			column.typeInited = true;
			var col = mini[oll10](column.type),
				_column = mini.copyTo({}, column);
			mini.copyTo(column, col);
			mini.copyTo(column, _column)
		}
		column.width = parseInt(column.width);
		if (mini.isNull(column.width) || isNaN(column.width)) column.width = this[llO011];
		column.visible = column.visible !== false;
		column[Olo1lO] = column[Olo1lO] !== false;
		column.allowMove = column.allowMove !== false;
		column.allowSort = column.allowSort === true;
		column.allowDrag = !! column.allowDrag;
		column[Oll10l] = !! column[Oll10l];
		if (column.editor) {
			if (typeof column.editor == "string") {
				var cls = mini.getClass(column.editor);
				if (cls) column.editor = {
					type: column.editor
				};
				else column.editor = eval("(" + column.editor + ")")
			}
			if (column.editor && !mini.isControl(column.editor)) column.editor = mini.create(column.editor)
		}
		if (column.editor) column.editor[l1Oool](false);
		if (typeof column.init == "function" && column.inited != true) column.init(this);
		delete column.colspan;
		delete column.rowspan;
		column.inited = true
	},
	getDisplayColumnRows: function() {
		var _ = this[oOlol1](),
			D = [];
		for (var C = 0, F = _; C <= F; C++) D.push([]);

		function A(C) {
			var D = mini[llo11l](C.displayColumns, "displayColumns"),
				A = 0;
			for (var $ = 0, B = D.length; $ < B; $++) {
				var _ = D[$];
				if (_.displayColumns.length == 0) A += 1
			}
			return A
		}
		var $ = mini[llo11l](this.displayColumns, "displayColumns");
		for (C = 0, F = $.length; C < F; C++) {
			var E = $[C],
				B = D[E.level];
			if (E.displayColumns.length > 0) E.colspan = A(E);
			if (E.displayColumns.length == 0 && E.level < _) E.rowspan = _ - E.level + 1;
			B.push(E)
		}
		return D
	},
	getMaxColumnLevel: function() {
		return this.maxColumnLevel
	},
	getAllColumnWidth: function() {
		var C = this.getViewColumns(),
			B = 0,
			_ = this[llO011];
		for (var $ = 0, E = C.length; $ < E; $++) {
			var D = C[$],
				A = mini.isNull(D.width) ? _ : D.width;
			B += A
		}
		return B
	}
};
mini.copyTo(ol0Ol1.prototype, mini.GridColumnModel);
mini.GridCellEditModel = {
	addRowCls: function(_, A) {
		_ = this[OollO1](_);
		if (!_) return;
		var $ = this.lolOl0(_);
		if ($) ollool($, A);
		$ = this.lolOl0(_, true);
		if ($) ollool($, A)
	},
	removeRowCls: function(_, A) {
		_ = this[OollO1](_);
		if (!_) return;
		var $ = this.lolOl0(_);
		if ($) OloO($, A);
		$ = this.lolOl0(_, true);
		if ($) OloO($, A)
	},
	l0Oo: function($, _) {
		var A = typeof $ == "string" ? $ : $._id;
		if (_) return this.id + "$locked$" + A;
		return this.id + "$" + A
	},
	lO100o: function($, _) {
		return this.id + "$" + $._id + "$" + _.__id
	},
	lolOl0: function($, _) {
		if (!$) return null;
		var A = this.l0Oo($, _);
		return document.getElementById(A)
	},
	OOoOl0: function($) {
		return document.getElementById($._id)
	},
	O1lOl1: function($, _) {
		_ = this[lOlOo](_);
		if (!_) return null;
		var A = this.lO100o($, _);
		return document.getElementById(A)
	},
	llO101: function(B) {
		var _ = O111o(B.target, this.l110OO);
		if (!_) return null;
		var $ = _.id.split("$"),
			A = $[$.length - 1];
		return this.data.getby_id(A)
	},
	o0oO0: function(C) {
		var B = O111o(C.target, this.cellCls);
		if (B) {
			var _ = B.id.split("$"),
				A = parseInt(_[_.length - 1]),
				$ = this.id + "$column$" + A;
			return this[lOlOo]($)
		} else {
			B = O111o(C.target, "mini-supergrid-headercell");
			if (B) return this[lOlOo](B.id)
		}
		return null
	},
	o1Oo1: function(A) {
		var $ = this.llO101(A),
			_ = this.o0oO0(A);
		return {
			record: $,
			column: _
		}
	},
	olll0l: function(F, D) {
		if (this.disabled) return;
		var C = this.o1Oo1(F),
			_ = C.record,
			B = C.column;
		if (_) {
			var E = this["_OnRow" + D];
			if (E) E[o0OoO0](this, _, F);
			else {
				var A = {
					record: _,
					htmlEvent: F
				};
				this[lO0OoO]("row" + D, A)
			}
		}
		if (B) {
			E = this["_OnColumn" + D];
			if (E) E[o0OoO0](this, B, F);
			else {
				A = {
					column: B,
					field: B.field,
					htmlEvent: F
				};
				this[lO0OoO]("column" + D, A)
			}
		}
		if (_ && B) {
			E = this["_OnCell" + D];
			if (E) E[o0OoO0](this, _, B, F);
			else {
				A = {
					record: _,
					column: B,
					field: B.field,
					htmlEvent: F
				};
				this[lO0OoO]("cell" + D, A)
			}
		}
		if (!_ && B) {
			E = this["_OnHeaderCell" + D];
			if (E) E[o0OoO0](this, B, F);
			else {
				var A = {
					sender: this,
					column: B,
					htmlEvent: F
				},
					$ = "onHeaderCell" + D;
				if (B[$]) {
					A.sender = this;
					B[$](A)
				}
				this[lO0OoO]("headercell" + D, A)
			}
		}
	},
	currentCell: null,
	editingCell: null,
	editControl: null,
	editWrap: null,
	ooOo0O: function(C) {
		if (this.currentCell) {
			var $ = this.currentCell.record,
				A = this.currentCell.column,
				B = this.lO100o($, A),
				_ = document.getElementById(B);
			if (_) if (C) ollool(_, this.cellSelectedCls);
			else OloO(_, this.cellSelectedCls)
		}
	},
	setCurrentCell: function($) {
		if (this.currentCell != $) {
			this.ooOo0O(false);
			this.currentCell = $;
			this.ooOo0O(true);
			this[lO0OoO]("currentcellchanged")
		}
	},
	getCurrentCell: function() {
		var $ = this.currentCell;
		if ($) if (!this.data.hasRecord($.record)) {
			this.currentCell = null;
			$ = null
		}
		return $
	},
	allowCellEdit: true,
	allowCellSelect: true,
	beginEdit: function(A) {
		if (this.editingCell) this.endEdit();
		var $ = this[ooO1Ol]();
		if ($) {
			var _ = this.Ololll($.record, $.column);
			if (_ !== false) {
				this.editingCell = $;
				this.O001l($.record, $.column)
			}
		}
	},
	commitEdit: function($) {
		var _ = this.editingCell;
		if (_) {
			this._commitEditing = true;
			this.olo10O(_.record, _.column, $);
			this._commitEditing = false
		}
	},
	endEdit: function() {
		var $ = this.editingCell;
		if ($) {
			this[O0OllO]();
			this.lO0OOO($.record, $.column);
			this.editingCell = null
		}
	},
	cancelEdit: function() {
		var $ = this.editingCell;
		if ($) {
			this.lO0OOO($.record, $.column);
			this.editingCell = null
		}
	},
	getEditWrap: function($) {
		if (!this.editWrap) {
			this.editWrap = mini.append(document.body, "<div class=\"mini-supergrid-editwrap\" style=\"position:absolute;\"></div>");
			o1ol0o(this.editWrap, "keydown", this.ll11O0, this)
		}
		this.editWrap.style.zIndex = 1000000000;
		this.editWrap.style.display = "block";
		mini[l01o0O](this.editWrap, $.x, $.y);
		oOl1O(this.editWrap, $.width);
		this.editWrap.style.zIndex = mini.getMaxZIndex();
		return this.editWrap
	},
	ll11O0: function(_) {
		if (_.keyCode == 13) {
			var $ = this.editingCell;
			if ($ && $.column && $.column.enterCommit === false) return;
			this.endEdit();
			this[ool00o]()
		} else if (_.keyCode == 27) {
			this[Ol1lo1]();
			this[ool00o]()
		} else if (_.keyCode == 9) this[Ol1lo1]()
	},
	Oo11O: function(A) {
		if (this.editingControl) {
			var $ = this.editingControl[Olloo0](A);
			if ($ == false) {
				var _ = this;
				_.endEdit();
				lOOo(document, "mousedown", this.Oo11O, this)
			}
		}
	},
	Ololll: function($, A) {
		var C = {
			sender: this,
			source: this,
			record: $,
			column: A,
			field: A.field,
			editor: A.editor,
			value: $[A.field],
			cancel: false
		};
		if (A.oncellbeginedit) A.oncellbeginedit(C);
		this[lO0OoO]("cellbeginedit", C);
		if (C.cancel) return false;
		if (!C.editor) return false;
		var B = this.editingControl = C.editor;
		if (B[l1ol]) B[l1ol](C.value);
		if (A.displayField && B[O1l11]) {
			var _ = $[A.displayField];
			B[O1l11](_)
		}
		return true
	},
	O001l: function(_, C) {
		if (!this.editingControl) return false;
		var $ = this[o1Olll](_, C),
			E = {
				sender: this,
				source: this,
				record: _,
				column: C,
				field: C.field,
				cellBox: $,
				editor: this.editingControl
			};
		if (C.oncellshowingedit) C.oncellshowingedit(E);
		this[lO0OoO]("cellshowingedit", E);
		var B = this.getEditWrap($),
			D = E.editor;
		if (D[loOlo0]) {
			D[loOlo0](this.editWrap);
			D[ool00o]();
			setTimeout(function() {
				D[ool00o]();
				if (D[ll1ol0]) D[ll1ol0]()
			}, 10);
			D[l1Oool](true)
		} else if (D.el) {
			this.editWrap.appendChild(D.el);
			try {
				D.el[ool00o]()
			} catch (E) {}
			setTimeout(function() {
				try {
					D.el[ool00o]()
				} catch ($) {}
			}, 10)
		}
		if (D[o010Oo]) {
			var A = $.width;
			if (mini.isNumber(D.minWidth)) if (A < D.minWidth) A = D.minWidth;
			D[o010Oo](A)
		}
		o1ol0o(document, "mousedown", this.Oo11O, this);
		if (C.autoShowPopup && D[Ool10o]) D[Ool10o]()
	},
	olo10O: function(_, B, A) {
		var D = {
			sender: this,
			source: this,
			record: _,
			column: B,
			field: B.field,
			editor: this.editingControl,
			value: A,
			cancel: false
		};
		if (D.editor && D.editor[lO11o0] && A === undefined) {
			try {
				D.editor[loOoOl]()
			} catch (C) {
				try {
					D.editor.el[loOoOl]()
				} catch (D) {}
			}
			D.value = D.editor[lO11o0]();
			if (D.editor[lO10l0]) D.text = D.editor[lO10l0]()
		}
		if (B.oncellcommitedit) B.oncellcommitedit(D);
		this[lO0OoO]("cellcommitedit", D);
		if (D.cancel == false) if (B.displayField) {
			var $ = {};
			$[B.field] = D.value;
			$[B.displayField] = D.text;
			this.data.updateRecord(_, $)
		} else this.data.updateRecord(_, B.field, D.value)
	},
	lO0OOO: function(_, C) {
		var E = {
			sender: this,
			source: this,
			record: _,
			column: C,
			field: C.field,
			editor: this.editingControl,
			value: _[C.field]
		};
		if (C.oncellendedit) C.oncellendedit(E);
		this[lO0OoO]("cellendedit", E);
		if (this.editWrap) this.editWrap.style.display = "none";
		var A = this.editWrap.childNodes;
		for (var $ = A.length - 1; $ >= 0; $--) {
			var B = A[$];
			this.editWrap.removeChild(B)
		}
		var D = E.editor;
		if (D && D[o1olo1]) D[o1olo1]();
		if (D && D.clearValue) D.clearValue();
		this.editingControl = null
	},
	o011O0: function($, B, C, D) {
		var _ = $[B.field],
			E = {
				sender: this,
				source: this,
				rowIndex: C,
				columnIndex: D,
				record: $,
				column: B,
				field: B.field,
				value: _,
				cellHtml: _,
				rowCls: null,
				cellCls: B.cellCls || "",
				rowStyle: null,
				cellStyle: B.cellStyle || "",
				autoEscape: B.autoEscape
			};
		if (B.dateFormat) if (mini.isDate(E.value)) E.cellHtml = mini.formatDate(_, B.dateFormat);
		else E.cellHtml = "";
		if (B.displayField) E.cellHtml = $[B.displayField];
		if (E.autoEscape == true) E.cellHtml = mini.htmlEncode(E.cellHtml);
		var A = B.renderer;
		if (A) {
			fn = typeof A == "function" ? A : window[A];
			if (fn) E.cellHtml = fn[o0OoO0](B, E)
		}
		this[lO0OoO]("drawcell", E);
		if (E.cellHtml === null || E.cellHtml === undefined) E.cellHtml = "";
		return E
	},
	setRowHeight: function($) {
		if ($ != this.rowHeight) {
			this.rowHeight = $;
			this[ll1l01]()
		}
	},
	getMultiSelect: function() {
		return this[l0o000]
	},
	setMultiSelect: function($) {
		if (this[l0o000] != $) {
			this[l0o000] = $;
			this.data[Oool1o]($);
			this[ll1l01]()
		}
	},
	setAllowUnselect: function($) {
		this.allowUnselect = $
	},
	getAllowUnselect: function($) {
		return this.allowUnselect
	},
	setAllowCellSelect: function($) {
		if (this[o10001] != $) {
			this[o10001] = $;
			this[ll1l01]()
		}
	},
	setAllowRowSelect: function($) {
		if (this[lOool1] != $) {
			this[lOool1] = $;
			this[ll1l01]()
		}
	},
	setAllowAlternating: function($) {
		if (this[olO110] != $) {
			this[olO110] = $;
			this[ll1l01]()
		}
	},
	setAllowResizeColumn: function($) {
		if (this[l00lO0] != $) {
			this[l00lO0] = $;
			this[ll1l01]()
		}
	},
	setAllowMoveColumn: function($) {
		if (this[o0ll11] != $) this[o0ll11] = $
	},
	setAllowSortColumn: function($) {
		if (this[o0o11l] != $) this[o0o11l] = $
	},
	setAllowDragDrop: function($) {
		if (this.allowDragDrop != $) {
			this.allowDragDrop = $;
			this[ll1l01]()
		}
	},
	setShowDirty: function($) {
		if (this.showDirty != $) {
			this.showDirty = $;
			this[ll1l01]()
		}
	},
	O1ooOoData: function() {
		return this.data[oolO0]().clone()
	},
	O1ooOoText: function($) {
		return "Rows " + $.length
	},
	_OnRowDragStart: function($, _) {
		var A = {
			record: $,
			column: _,
			cancel: false
		};
		this[lO0OoO]("RowDragStart", A);
		return A
	},
	_OnRowDragDrop: function($, _, A) {
		$ = $.clone();
		var B = {
			records: $,
			targetRecord: _,
			action: A,
			cancel: false
		};
		this[lO0OoO]("RowDragDrop", B);
		return B
	},
	Oll1ll: function(_, $, A) {
		var B = {};
		B.effect = _;
		B.records = $;
		B.targetRecord = A;
		this[lO0OoO]("GiveFeedback", B);
		return B
	},
	isAllowDragDrop: function($, _) {
		if (!this.allowDragDrop) return false;
		if (_.allowDrag !== true) return false;
		var A = this._OnRowDragStart($, _);
		return !A.cancel
	}
};
mini.copyTo(ol0Ol1.prototype, mini.GridCellEditModel);
mini._SuperGridSort = function($) {
	this.grid = $;
	this.grid[o1Oo11]("headercellclick", this.__onGridHeaderCellClick, this);
	this.grid[o1Oo11]("headercellmousedown", this.__OnGridHeaderCellMouseDown, this);
	o1ol0o($.l0lO, "mousemove", this.__OnGridHeaderMouseMove, this);
	o1ol0o($.l0lO, "mouseout", this.__OnGridHeaderMouseOut, this)
};
mini._SuperGridSort[O0lOl0] = {
	__OnGridHeaderMouseOut: function($) {
		if (this.l1o11OColumnEl) OloO(this.l1o11OColumnEl, "mini-supergrid-headercell-hover")
	},
	__OnGridHeaderMouseMove: function(_) {
		var $ = O111o(_.target, "mini-supergrid-headercell");
		if ($) {
			ollool($, "mini-supergrid-headercell-hover");
			this.l1o11OColumnEl = $
		}
	},
	__onGridHeaderCellClick: function(B) {
		var $ = this.grid,
			A = O111o(B.target, "mini-supergrid-headercell");
		if (A) {
			var _ = $[lOlOo](A.id.split("$")[2]);
			if ($[o0ll11] && _ && _.allowDrag) {
				this.dragColumn = _;
				this._columnEl = A;
				this.getDrag().start(B)
			}
		}
	}
};
mini._SuperGridSelect = function($) {
	this.grid = $;
	this.grid[o1Oo11]("cellmousedown", this.o1lo, this);
	this.grid[o1Oo11]("cellclick", this.OO0l0, this);
	o1ol0o(this.grid.el, "keydown", this.lo1olO, this)
};
mini._SuperGridSelect[O0lOl0] = {
	lo1olO: function(G) {
		var $ = this.grid,
			A = $[ooO1Ol]();
		if (G.shiftKey || G.ctrlKey) return;
		if (!A) return;
		if (G.keyCode == 37 || G.keyCode == 38 || G.keyCode == 39 || G.keyCode == 40) G.preventDefault();
		var C = $.getViewColumns(),
			B = A.column,
			_ = A.record,
			F = C[o0oOOo](B),
			D = $[o0oOOo](_),
			E = $[ool10O]();
		switch (G.keyCode) {
		case 27:
			break;
		case 13:
			if (B[Oll10l] != true) $[OoloOo]();
			break;
		case 37:
			if (F > 0) F -= 1;
			break;
		case 38:
			if (D > 0) D -= 1;
			break;
		case 39:
			if (F < C.length - 1) F += 1;
			break;
		case 40:
			if (D < E - 1) D += 1;
			break;
		default:
			break
		}
		B = C[F];
		_ = $[oO0l1O](D);
		if (B && _ && $[o10001]) {
			A = {
				record: _,
				column: B
			};
			$[ol0l0](A)
		}
		if (_ && $[lOool1]) {
			$[lOlOOo]();
			$[o00OO0](_)
		}
	},
	OO0l0: function(A) {
		var $ = A.record,
			_ = A.column;
		if (!_[Oll10l] && !this.grid[OlOOo1]()) if (A.htmlEvent.shiftKey || A.htmlEvent.ctrlKey);
		else this.grid[OoloOo]()
	},
	o1lo: function(D) {
		var _ = D.record,
			B = D.column;
		if (this.grid[o10001]) {
			var A = {
				record: _,
				column: B
			};
			this.grid[ol0l0](A)
		}
		if (!this.grid[lOool1]) return;
		var C = {
			record: _,
			column: B,
			cancel: false
		};
		this.grid[lO0OoO]("beforeselect", C);
		if (C.cancel == true) return;
		var $ = this.grid;
		if (this.grid[lO01O0]()) {
			this.grid.el.onselectstart = function() {};
			if (D.htmlEvent.shiftKey) {
				this.grid.el.onselectstart = function() {
					return false
				};
				D.htmlEvent.preventDefault();
				if (!this.currentRecord) {
					this.grid.data[o00OO0](_);
					this.currentRecord = this.grid[lool1o]()
				} else {
					this.grid[lOlOOo]();
					this.grid[O1OOo1](this.currentRecord, _)
				}
			} else {
				this.grid.el.onselectstart = function() {};
				if (D.htmlEvent.ctrlKey) {
					this.grid.el.onselectstart = function() {
						return false
					};
					D.htmlEvent.preventDefault()
				}
				if (B._multiRowSelect || D.htmlEvent.ctrlKey || $.allowUnselect) {
					if (this.grid.data[loO0ll](_) && (B._multiRowSelect || D.htmlEvent.ctrlKey)) {
						if (D.htmlEvent.button != 2) {
							this.grid.data[oOOO1O](_);
							this.grid[ol0l0](null)
						}
					} else this.grid.data[o00OO0](_)
				} else if (this.grid.data[loO0ll](_));
				else {
					this.grid.data[lOlOOo]();
					this.grid.data[o00OO0](_)
				}
				this.currentRecord = this.grid[lool1o]()
			}
		} else if (!this.grid.data[loO0ll](_)) this.grid.data[o00OO0](_)
	}
};
mini._SuperGridSplitter = function($) {
	this.grid = $;
	o1ol0o(this.grid.el, "mousedown", this.Ool01l, this)
};
mini._SuperGridSplitter[O0lOl0] = {
	Ool01l: function(C) {
		var $ = this.grid,
			A = C.target;
		if (lOll0o(A, "mini-supergrid-splitter")) {
			var B = mini.getAttr(A, "cid"),
				_ = $[lOlOo](B);
			if ($[l00lO0] && _) {
				this.splitterColumn = _;
				this.getDrag().start(C)
			}
		}
	},
	getDrag: function() {
		if (!this.drag) this.drag = new mini.Drag({
			capture: true,
			onStart: mini.createDelegate(this.OO0O1, this),
			onMove: mini.createDelegate(this.lo1o1, this),
			onStop: mini.createDelegate(this.O0l01O, this)
		});
		return this.drag
	},
	OO0O1: function(_) {
		var $ = this.grid,
			B = $[Ol1O10](this.splitterColumn);
		this.columnBox = B;
		this.Ooo0O = mini.append(document.body, "<div class=\"mini-supergrid-proxy\"></div>");
		var A = $[lOo011](true);
		A.x = B.x;
		A.width = B.width;
		A.right = B.right;
		l010(this.Ooo0O, A)
	},
	lo1o1: function(A) {
		var $ = this.grid,
			B = mini.copyTo({}, this.columnBox),
			_ = B.width + (A.now[0] - A.init[0]);
		if (_ < $.columnMinWidth) _ = $.columnMinWidth;
		if (_ > $.columnMaxWidth) _ = $.columnMaxWidth;
		oOl1O(this.Ooo0O, _)
	},
	O0l01O: function(_) {
		var $ = this.grid,
			A = oo0OlO(this.Ooo0O);
		jQuery(this.Ooo0O).remove();
		this.Ooo0O = null;
		$[OoO1O1](this.splitterColumn, {
			width: A.width
		})
	}
};
mini._SuperGridColumnMove = function($, _, A) {
	this.grid = $;
	this.headerCellCls = _;
	this.splitterCls = A;
	o1ol0o(this.grid.el, "mousedown", this.Ool01l, this)
};
mini._SuperGridColumnMove[O0lOl0] = {
	Ool01l: function(B) {
		var $ = this.grid;
		if (lOll0o(B.target, "mini-supergrid-splitter")) return;
		if (B.button == mini.MouseButton.Right) return;
		var A = O111o(B.target, "mini-supergrid-headercell");
		if (A) {
			var _ = $[lOlOo](A.id);
			if ($[o0ll11] && _ && _.allowMove) {
				this.dragColumn = _;
				this._columnEl = A;
				this.getDrag().start(B)
			}
		}
	},
	getDrag: function() {
		if (!this.drag) this.drag = new mini.Drag({
			capture: isIE9 ? false : true,
			onStart: mini.createDelegate(this.OO0O1, this),
			onMove: mini.createDelegate(this.lo1o1, this),
			onStop: mini.createDelegate(this.O0l01O, this)
		});
		return this.drag
	},
	OO0O1: function(_) {
		var $ = this.grid;
		this.Ooo0O = mini.append(document.body, "<div class=\"mini-supergrid-columnproxy\"></div>");
		this.Ooo0O.innerHTML = "<div class=\"mini-supergrid-columnproxy-inner\">" + $.O1l0o(this.dragColumn) + "</div>";
		mini[l01o0O](this.Ooo0O, _.now[0] + 15, _.now[1] + 18);
		ollool(this.Ooo0O, "mini-supergrid-no");
		this.moveTop = mini.append(document.body, "<div class=\"mini-supergrid-movetop\"></div>");
		this.moveBottom = mini.append(document.body, "<div class=\"mini-supergrid-movebottom\"></div>")
	},
	lo1o1: function(_) {
		var $ = this.grid,
			E = _.now[0];
		mini[l01o0O](this.Ooo0O, E + 15, _.now[1] + 18);
		this.targetColumn = this.insertAction = null;
		var C = O111o(_.event.target, "mini-supergrid-headercell");
		if (C) {
			var B = $[lOlOo](C.id);
			if (B && B != this.dragColumn && !$[l1111O](this.dragColumn, B)) {
				this.targetColumn = B;
				this.insertAction = "before";
				var D = $[Ol1O10](this.targetColumn);
				if (E > D.x + D.width / 2) this.insertAction = "after"
			}
		}
		if (this.targetColumn) {
			ollool(this.Ooo0O, "mini-supergrid-ok");
			OloO(this.Ooo0O, "mini-supergrid-no");
			var A = $[Ol1O10](this.targetColumn);
			this.moveTop.style.display = "block";
			this.moveBottom.style.display = "block";
			if (this.insertAction == "before") {
				mini[l01o0O](this.moveTop, A.x - 4, A.y - 9);
				mini[l01o0O](this.moveBottom, A.x - 4, A.bottom)
			} else {
				mini[l01o0O](this.moveTop, A.right - 4, A.y - 9);
				mini[l01o0O](this.moveBottom, A.right - 4, A.bottom)
			}
		} else {
			OloO(this.Ooo0O, "mini-supergrid-ok");
			ollool(this.Ooo0O, "mini-supergrid-no");
			this.moveTop.style.display = "none";
			this.moveBottom.style.display = "none"
		}
	},
	O0l01O: function(_) {
		var $ = this.grid;
		mini[lllO0l](this.Ooo0O);
		mini[lllO0l](this.moveTop);
		mini[lllO0l](this.moveBottom);
		$[o01OlO](this.dragColumn, this.targetColumn, this.insertAction);
		this.Ooo0O = this.moveTop = this.moveBottom = this.dragColumn = this.targetColumn = null
	}
};
mini._GridDragDrop = function($) {
	this.owner = $;
	this.owner[o1Oo11]("CellMouseDown", this.__OnGridCellMouseDown, this)
};
mini._GridDragDrop[O0lOl0] = {
	__OnGridCellMouseDown: function(B) {
		if (B.htmlEvent.button == mini.MouseButton.Right) return;
		var $ = this.owner;
		if ($[OlOOo1]() || $.isAllowDragDrop(B.record, B.column) == false) return;
		var _ = B.record;
		this.isTree = $.data.isTree;
		this.dragData = $.O1ooOoData();
		if (this.dragData[o0oOOo](_) == -1) this.dragData.push(_);
		var A = this.O1ooOo();
		A.start(B.htmlEvent)
	},
	OO0O1: function(_) {
		var $ = this.owner;
		this.feedbackEl = mini.append(document.body, "<div class=\"mini-feedback\"></div>");
		this.feedbackEl.innerHTML = $.O1ooOoText(this.dragData);
		this.lastFeedbackClass = ""
	},
	lo1o1: function(_) {
		var $ = this.owner,
			C = _.now[0],
			B = _.now[1];
		mini[l01o0O](this.feedbackEl, C + 15, B + 18);
		var A = $.llO101(_.event);
		this.dropRecord = A;
		if (A) {
			if (this.isTree) this.dragAction = this.getFeedback(A, B, 3);
			else this.dragAction = this.getFeedback(A, B, 2)
		} else this.dragAction = "no";
		this.lastFeedbackClass = "mini-feedback-" + this.dragAction;
		this.feedbackEl.className = "mini-feedback " + this.lastFeedbackClass;
		if (this.dragAction == "no") A = null;
		this.setRowFeedback(A, this.dragAction)
	},
	O0l01O: function(B) {
		var G = this.owner;
		mini[lllO0l](this.feedbackEl);
		this.feedbackEl = null;
		this.setRowFeedback(null);
		if (this.isTree) {
			var I = [];
			for (var H = 0, F = this.dragData.length; H < F; H++) {
				var K = this.dragData[H],
					C = false;
				for (var J = 0, A = this.dragData.length; J < A; J++) {
					var E = this.dragData[J];
					if (E != K) {
						C = G.data[O1OlOO](E, K);
						if (C) break
					}
				}
				if (!C) I.push(K)
			}
			this.dragData = I
		}
		if (this.dropRecord && this.dragAction != "no") {
			var L = G._OnRowDragDrop(this.dragData, this.dropRecord, this.dragAction);
			if (!L.cancel) {
				var I = L.records,
					D = L.targetRecord,
					_ = L.action;
				if (G.data.isTree) G.data[llll00](I, D, _);
				else {
					var $ = G.data[o0oOOo](D);
					if (_ == "after") $ += 1;
					G.data.move(I, $)
				}
			}
		}
		this.dropRecord = null;
		this.dragData = null
	},
	setRowFeedback: function(_, E) {
		var $ = this.owner;
		if (this.lastAddDomRow) $[O0oOO0](this.lastAddDomRow, "mini-supergrid-feedback-add");
		if (_ == null || this.dragAction == "add") {
			mini[lllO0l](this.feedbackLine);
			this.feedbackLine = null
		}
		this.lastRowFeedback = _;
		if (_ != null) if (E == "before" || E == "after") {
			if (!this.feedbackLine) this.feedbackLine = mini.append(document.body, "<div class='mini-feedback-line'></div>");
			this.feedbackLine.style.display = "block";
			var C = $[o0l0o1](_),
				D = C.x,
				B = C.y - 1;
			if (E == "after") B += C.height;
			mini[l01o0O](this.feedbackLine, D, B);
			var A = $[lOo011](true);
			oOl1O(this.feedbackLine, A.width)
		} else {
			$[loOo00](_, "mini-supergrid-feedback-add");
			this.lastAddDomRow = _
		}
	},
	getFeedback: function(J, H, E) {
		var C = this.owner,
			I = C[o0l0o1](J),
			$ = I.height,
			G = H - I.y,
			F = null;
		if (this.dragData[o0oOOo](J) != -1) return "no";
		var A = false;
		if (E == 3) {
			A = C[loOOO0](J);
			for (var D = 0, B = this.dragData.length; D < B; D++) {
				var K = this.dragData[D],
					_ = C[O1OlOO](K, J);
				if (_) {
					F = "no";
					break
				}
			}
		}
		if (F == null) if (E == 2) {
			if (G > $ / 2) F = "after";
			else F = "before"
		} else if (A) {
			if (G > $ / 2) F = "after";
			else F = "before"
		} else if (G > ($ / 3) * 2) F = "after";
		else if ($ / 3 <= G && G <= ($ / 3 * 2)) F = "add";
		else F = "before";
		var L = C.Oll1ll(F, this.dragData, J);
		return L.effect
	},
	O1ooOo: function() {
		if (!this.drag) this.drag = new mini.Drag({
			capture: false,
			onStart: mini.createDelegate(this.OO0O1, this),
			onMove: mini.createDelegate(this.lo1o1, this),
			onStop: mini.createDelegate(this.O0l01O, this)
		});
		return this.drag
	}
};
OOl010 = function() {
	OOl010[lO0010][llo0oo][o0OoO0](this)
};
loOo0(OOl010, ol0Ol1, {
	treeColumn: null,
	showTreeIcon: false,
	allowColumnSort: false,
	leafIcon: "mini-supertree-leaf",
	folderIcon: "mini-supertree-folder",
	uiCls: "mini-supertree"
});
o10lo = OOl010[O0lOl0];
o10lo[lo0O00] = oOo1o;
o10lo[OoOO1] = OO00;
o10lo[O1ll0o] = o0100;
o10lo[OoOOoo] = o1001;
o10lo[lO0o00] = looo1;
o10lo[OloOO1] = ol1O1;
o10lo[o0oOOl] = l0lOo;
o10lo[o01ol] = l1OO0;
o10lo.o011O0 = ooO1O1;
o10lo[O1OlOO] = lOl01;
o10lo[l1l01O] = llolO;
o10lo[lo110] = O10ll;
o10lo[loOOO0] = o0111;
o10lo.OO00o = l0ool;
o10lo.loo0lo = o0OO0;
o10lo[oOOOlO] = Ollol;
o10lo[lO01o0] = O1Ol1;
o10lo[ooooll] = l0lo0;
mini.copyTo(OOl010.prototype, mini._SuperDataTreeApplys);
l1O011(OOl010, "supertree");
oll0ll = function() {
	oll0ll[lO0010][llo0oo][o0OoO0](this);
	this[loOo11]();
	this.ganttView.showCriticalPath = this.showCriticalPath
};
loOo0(oll0ll, OO0l1o, {
	width: 450,
	height: 200,
	baselineIndex: 0,
	viewModel: "gantt",
	data: null,
	headerHeight: 36,
	rowHeight: 21,
	columnWidth: 100,
	tableWidth: "50%",
	splitWidth: 4,
	minViewWidth: 100,
	treeColumn: null,
	columns: null,
	readOnly: false,
	allowDragDrop: false,
	multiSelect: false,
	showDirty: true,
	showGridLines: true,
	timeLines: null,
	showTableView: true,
	showGanttView: true,
	tableViewExpanded: true,
	ganttViewExpanded: true,
	allowResize: true,
	uiCls: "mini-gantt",
	tableViewType: "SuperTree",
	ganttViewType: "GanttView",
	showLabel: true,
	allowUnselect: false,
	allowProjectDateRange: false,
	__TaskID: 1,
	autoSyncSummary: true,
	allowSummaryLink: true,
	allowLinkLimit: false,
	showCriticalPath: true,
	_orderCount: 0,
	allowOrderProject: false
});
o1l1l = oll0ll[O0lOl0];
o1l1l[l0l011] = oOol0;
o1l1l[Ol0o1o] = o1O1l1;
o1l1l[l1ol1l] = ollOo;
o1l1l[llol01] = lll000;
o1l1l[oo11l0] = lloO;
o1l1l[o0lO1] = oOO01;
o1l1l[ll0011] = o01oO;
o1l1l[O0o1oO] = olOl0;
o1l1l[l1OOOO] = ll01OO;
o1l1l[O00l1o] = o0OOl;
o1l1l[O1o00] = o1lllo;
o1l1l[OlO1lO] = oloo1;
o1l1l[lOlOOo] = O0oO0o;
o1l1l[l0Oo11] = l1lol;
o1l1l[oOOO1O] = OO01o1;
o1l1l[o00OO0] = ol11;
o1l1l[loO0ll] = Ool10;
o1l1l[oolO0] = oOoo1;
o1l1l[lool1o] = Oool1;
o1l1l[O101lo] = Olo0O1;
o1l1l[o1110O] = l11o;
o1l1l[o001Oo] = lOl0o;
o1l1l[oloO01] = o0o0lO;
o1l1l.O01OO0 = O00o01;
o1l1l[ooooOo] = O1l1;
o1l1l[l00l10] = o0O0;
o1l1l[oOllol] = oOlO1;
o1l1l[lO1lO1] = lloO0;
o1l1l[ll0lol] = llo0l;
o1l1l[o0l1l1] = o11ol;
o1l1l[Oo1olO] = l00Ol;
o1l1l[llllO1] = ooOOO1;
o1l1l[o1Ol0O] = l111lo;
o1l1l[l01ool] = l0o00;
o1l1l[llo1ol] = o1OO1;
o1l1l[Oo0l1o] = OlollO;
o1l1l[O01olo] = lOol;
o1l1l[lOlo1l] = O0oO1;
o1l1l[ol00l1] = lOo10o;
o1l1l[lolO0o] = o0001O;
o1l1l[l0o0lO] = ool000;
o1l1l[OOo1oo] = l0lol;
o1l1l[ooO1oO] = loolo0;
o1l1l[l10101] = Ooo0l;
o1l1l[lo1OOO] = lo101o;
o1l1l[o0Oloo] = loOOoo;
o1l1l[oo1o10] = o1o1;
o1l1l[ooo1l0] = O0l11o;
o1l1l[OOO1ll] = l10OO0;
o1l1l[o1lol1] = oOllO;
o1l1l[OOO0l1] = l0ll;
o1l1l[lO1O00] = l1l01;
o1l1l[OOO001] = l01l1;
o1l1l[olO0lo] = O0100;
o1l1l[lOoO0O] = l0011;
o1l1l[lOO100] = O0OlO;
o1l1l[oO1O] = OOOl;
o1l1l[O1OlOO] = O0O01O;
o1l1l[Ol0101] = O1oll1;
o1l1l[oo0OOo] = l00Oo;
o1l1l[Ol1ooo] = oO01l;
o1l1l[Ooll1O] = o1l1;
o1l1l[l00O1O] = ooOl10;
o1l1l[OOOl00] = ool11;
o1l1l[Oo011o] = oOOOl;
o1l1l[lo10lO] = O001;
o1l1l[OoOl00] = O0111;
o1l1l.Oo0oO = llol00;
o1l1l[lO00O1] = o0O10;
o1l1l[l0OOOo] = OoOoo;
o1l1l[O111O0] = o111;
o1l1l.OOlloo = olo011;
o1l1l[l0l0lo] = o011o;
o1l1l[o0O00O] = llOOO;
o1l1l[l1lOol] = l0111;
o1l1l[ooO010] = l01oo;
o1l1l[lO11oO] = l110l;
o1l1l[OOolOO] = lo1ol;
o1l1l.lllO01 = l1100o;
o1l1l[loOo11] = oo01;
o1l1l[o00Olo] = Ol1l0O;
o1l1l[l0O0l0] = ollo1;
o1l1l[oOolll] = lOoloO;
o1l1l[o0Oll1] = lO1loO;
o1l1l[OO000o] = llo0O;
o1l1l[l1l01O] = oOolO;
o1l1l[O11o0o] = lO1loOLevel;
o1l1l[lolooO] = llo0OLevel;
o1l1l[OO1001] = o1O1O;
o1l1l[O01O1l] = ol110;
o1l1l[O1Ol11] = O1O1;
o1l1l[ll1lO0] = lo100l;
o1l1l[l0OOO0] = oo1llo;
o1l1l[ol010l] = O0ooO0;
o1l1l[Ololl1] = lloO1;
o1l1l[ll0lll] = O0l1l1;
o1l1l.lll00 = Oo011;
o1l1l[O11OoO] = lOllo;
o1l1l[o0oOOl] = lOOOl;
o1l1l[oooO1O] = o0oO;
o1l1l[lOlOo] = Ool00l;
o1l1l[OoO1O1] = o0oll0;
o1l1l[Oo00o0] = Ool00ls;
o1l1l[oO1010] = Oll1O;
o1l1l[oO1O0O] = ooO11;
o1l1l[ooO0lO] = Oool1Column;
o1l1l[l0ll01] = Oo0l0O;
o1l1l[O01OlO] = oooO;
o1l1l[OlolOo] = ooOloo;
o1l1l[o001OO] = oo0l0;
o1l1l[oll1oO] = O111;
o1l1l[lO0lOO] = l11l0O;
o1l1l[ll1ll1] = o011;
o1l1l[OO1ool] = l0lO1O;
o1l1l[OO1OO0] = Ol00o;
o1l1l[O0Ol1O] = Oo010;
o1l1l[O011o1] = l0Ool0;
o1l1l[o0Ol0O] = o00l;
o1l1l[Oool1o] = l0OO1;
o1l1l[O11OoO] = lOllo;
o1l1l[o1lOll] = Oo1l1;
o1l1l[lo0Oo0] = o11l0O;
o1l1l[OooOO] = Olo1o;
o1l1l[o1OoOo] = oloOo;
o1l1l[olOlOo] = o010l0;
o1l1l[ooo0oo] = loO0O;
o1l1l[l1Oo1] = l11lo0;
o1l1l.O1lloO = olOl;
o1l1l[Ol00o1] = loOl00;
o1l1l[l1OoOO] = oOo10;
o1l1l[O0OOOl] = lO0Oll;
o1l1l[Ol1o0O] = OOlo;
o1l1l.olool0 = O101l;
o1l1l.Ooo0lo = OOlo1;
o1l1l[l11ol1] = OO100l;
o1l1l[Oo0o0l] = lOllO;
o1l1l.oOoo1l = o1O0l;
o1l1l.ol0oo0 = olo1;
o1l1l.l11l = OOoO;
o1l1l.OooO10 = o0lOo0;
o1l1l.l1lllO = oOll;
o1l1l.olOlo1 = l1O1o;
o1l1l.OO10O1 = lO1lOl;
o1l1l.ol00o = lOOO0O;
o1l1l.lOl1O = O1OoO;
o1l1l.O0olOl = OO1O;
o1l1l[lO01o0] = lOo0l;
o1l1l.O011O = llOO1;
o1l1l.OO0OOo = ooOo;
o1l1l[ooooll] = oOl1o;
o1l1l[loO0lO] = oO001l;
o1l1l[o1oloo] = oOo1;
o1l1l[l11l1l] = lOoOl;
o1l1l[l0oloo] = o0O11;
l1O011(oll0ll, "gantt");
oll0ll.PredecessorLinkType = [{
	ID: 0,
	Name: "Finish-Finish(FF)",
	Short: "FF"
}, {
	ID: 1,
	Name: "Finish-Start(FS)",
	Short: "FS"
}, {
	ID: 2,
	Name: "Start-Finish(SF)",
	Short: "SF"
}, {
	ID: 3,
	Name: "Start-Start(SS)",
	Short: "SS"
}];
oll0ll.ConstraintType = [{
	ID: 0,
	Name: "The sooner the better"
}, {
	ID: 1,
	Name: "The later the better"
}, {
	ID: 2,
	Name: "Must be begin in"
}, {
	ID: 3,
	Name: "Must be completed in"
}, {
	ID: 4,
	Name: "Beginning no earlier than ..."
}, {
	ID: 5,
	Name: "Beginning no later than ..."
}, {
	ID: 6,
	Name: "Completed no earlier than ..."
}, {
	ID: 7,
	Name: "Completed no later than ..."
}];
mini.copyTo(oll0ll, {
	ID_Text: "ID",
	Name_Text: "Name",
	PercentComplete_Text: "Progress",
	Duration_Text: "Duration",
	Start_Text: "Start",
	Finish_Text: "Finish",
	Critical_Text: "Critical",
	PredecessorLink_Text: "PredecessorLink",
	Work_Text: "Work",
	Priority_Text: "Priority",
	Weight_Text: "Weight",
	OutlineNumber_Text: "OutlineNumber",
	OutlineLevel_Text: "OutlineLevel",
	ActualStart_Text: "ActualStart",
	ActualFinish_Text: "ActualFinish",
	WBS_Text: "WBS",
	ConstraintType_Text: "ConstraintType",
	ConstraintDate_Text: "ConstraintDate",
	Department_Text: "Department",
	Principal_Text: "Principal",
	Assignments_Text: "Assignments",
	Summary_Text: "Summary",
	Task_Text: "Task",
	Baseline_Text: "Baseline",
	LinkType_Text: "LinkType",
	LinkLag_Text: "LinkLag",
	From_Text: "From",
	To_Text: "To",
	Goto_Text: "Goto",
	UpGrade_Text: "UpGrade",
	DownGrade_Text: "DownGrade",
	Add_Text: "Add Task",
	Edit_Text: "Edit Task",
	Remove_Text: "Remove Task",
	ZoomIn_Text: "ZoomIn",
	ZoomOut_Text: "ZoomOut",
	Deselect_Text: "Un Select",
	Split_Text: "Split Task"
});
PlusGantt = oll0ll;
oo00 = function($) {
	this.project = $;
	$[o1Oo11]("cellbeginedit", this.Oo1o, this);
	$[o1Oo11]("aftercellcommitedit", this.lOlo00, this);
	$[o1Oo11]("itemdragstart", this.o11l, this);
	$[o1Oo11]("itemdragcomplete", this.O00oo0, this);
	$[o1Oo11]("dodragdrop", this.l10Oo, this);
	$[OO101l]({
		readOnly: false,
		allowDragDrop: true
	})
};
oo00[O0lOl0] = {
	l10Oo: function(B) {
		var _ = B.tasks,
			A = B.targetTask,
			$ = B.action;
		this.project[l10101](_, A, $)
	},
	Oo1o: function(A) {
		var _ = A.record,
			$ = A.field;
		if (_.Summary && _.FixedDate != 1) if ($ == "Start" || $ == "Finish" || $ == "Duration") A.cancel = true
	},
	lOlo00: function(F) {
		F.cancel = true;
		var D = F.record,
			B = F.field,
			_ = F.value,
			C = D[B],
			A = F.column;
		if (mini[oo1011](C, _)) return;
		try {
			if (A.displayField) {
				var $ = {};
				$[A.field] = F.value;
				$[A.displayField] = F.text;
				this.project[oo1o10](D, $)
			} else this.project[oo1o10](D, B, _)
		} catch (E) {
			alert(E.message)
		}
	},
	o11l: function($) {
		if ($.action == "start") $.cancel = true
	},
	O00oo0: function(C) {
		var _ = C.action,
			$ = C.value,
			B = C.item,
			A = new Date();
		if (_ == "finish") this.project[oo1o10](B, "Finish", $);
		if (_ == "percentcomplete") this.project[oo1o10](B, "PercentComplete", $);
		if (_ == "move") this.project[oo1o10](B, "Start", $)
	}
};
oo00.Calendar = function($) {
	this.project = $;
	this.calendar = $[o0Oo1O]();
	this.validCalendar(this.calendar);
	this.WeekDays = this.calendar["WeekDays"];
	this.Exceptions = this.calendar["Exceptions"];
	mini[O0o1oO](this.WeekDays, function($, _) {
		return $.DayType > _.DayType
	});
	this.caches = {}
};
oo00.Calendar[O0lOl0] = {
    validCalendar: function (F) {
        if (F.UID == null) throw new Error("\u65e5\u5386\u6ca1\u6709UID\u6807\u8bc6\u53f7");
        var $ = F["WeekDays"],
			I = F["Exceptions"];
        if ($ == null || $.length != 7) throw new Error("\u5de5\u4f5c\u5468\u6570\u636e\u9519\u8bef");
        if (I == null) F["Exceptions"] = I = [];
        var A = false;
        for (var H = 0; H < 7; H++) {
            var B = $[H],
				_ = parseInt(B["DayType"]),
				K = parseInt(B["DayWorking"]);
            if ((K != 0 && K != 1) || _ < 1 || _ > 7) throw new Error("\u5de5\u4f5c\u5468\u6570\u636e\u9519\u8bef");
            if (K == 1) A = true
        }
        if (A == false) throw new Error("\u5de5\u4f5c\u5468\u5fc5\u987b\u81f3\u5c11\u6709\u4e00\u5929\u662f\u5de5\u4f5c\u65e5");
        for (var H = 0, C = I.length; H < C; H++) {
            var D = I[H],
				_ = parseInt(D["DayType"]),
				K = parseInt(D["DayWorking"]);
            if ((K != 0 && K != 1) || _ != 0) throw new Error("\u4f8b\u5916\u65e5\u671f\u9519\u8bef");
            if (K == 1) {
                var J = D["TimePeriod"];
                if (J == null || !mini.isDate(J["FromDate"]) || !mini.isDate(J["ToDate"])) throw new Error("\u4f8b\u5916\u65e5\u671f\u6570\u636e\u9519\u8bef");
                var G = J["FromDate"],
					E = J["ToDate"];
                J["FromDate"] = mini.clearTime(G);
                J["ToDate"] = mini.maxTime(E)
            }
        }
    },
    isWorkingDate: function (_) {
        var $ = this.getDay(_.getDay(), _);
        return $.DayWorking == 1
    },
    getDay: function (J, B) {
        var G = "getDay$" + B[o1oo0O]() + J,
			E = this.caches[G];
        if (E) return E;
        var _ = this.WeekDays[J];
        if (B != null) {
            var $ = B[o1oo0O]();
            for (var F = 0, C = this.Exceptions.length; F < C; F++) {
                var D = this.Exceptions[F],
					I = D["TimePeriod"],
					A = I["FromDate"][o1oo0O](),
					H = I["ToDate"][o1oo0O]();
                if (A <= $ && $ <= H) {
                    _ = D;
                    break
                }
            }
        }
        this.caches[G] = _;
        return _
    },
    getStart: function (_, A) {
        if (A <= 0) return new Date(_[o1oo0O]());
        var B = "getstart" + _[o1oo0O]() + A,
			$ = this.caches[B];
        if ($) return new Date($);
        var D = new Date(_.getFullYear(), _.getMonth(), _.getDate());
        while (A > 0) {
            var C = this.isWorkingDate(D);
            if (C) {
                A--;
                if (A == 0) break
            }
            D = new Date(D.getFullYear(), D.getMonth(), D.getDate() - 1)
        }
        this.caches[B] = D[o1oo0O]();
        return D
    },
    getFinish: function (A, _) {

        if (!A) {
            return;
        }
        if (_ <= 0) return new Date(A[o1oo0O]());
        var B = "getfinish" + A[o1oo0O]() + _,
			$ = this.caches[B];
        if ($) return new Date($);
        var D = new Date(A.getFullYear(), A.getMonth(), A.getDate());
        while (_ > 0) {
            var C = this.isWorkingDate(D);
            if (C) {
                _--;
                if (_ == 0) break
            }
            D = new Date(D.getFullYear(), D.getMonth(), D.getDate() + 1)
        }
        D = new Date(D.getFullYear(), D.getMonth(), D.getDate(), 23, 59, 59);
        this.caches[B] = D[o1oo0O]();
        return D
    },
    getWorkingDays: function (B, A) {
        if (B[o1oo0O]() == A[o1oo0O]()) return 0;
        var D = "getWorkingDays" + B[o1oo0O]() + A[o1oo0O](),
			_ = this.caches[D];
        if (_ !== undefined) return _;
        var C = B > A;
        if (C) {
            var E = B;
            B = A;
            A = B
        }
        B = new Date(B.getFullYear(), B.getMonth(), B.getDate());
        A = new Date(A.getFullYear(), A.getMonth(), A.getDate(), 23, 59, 59);
        var $ = 0,
			F = A[o1oo0O]();
        for (var H = B; H[o1oo0O]() < F; ) {
            var G = this.isWorkingDate(H);
            if (G) $++;
            H = new Date(H.getFullYear(), H.getMonth(), H.getDate() + 1)
        }
        this.caches[D] = $;
        return C ? -$ : $
    },
    getWorkingDate: function (C, D) {
        if (C == "") {
            return;
        }
        var A = "getWorkingDate" + C[o1oo0O]() + D,
			$ = this.caches[A];
        if ($) return new Date($);
        C = new Date(C.getFullYear(), C.getMonth(), C.getDate());
        var _ = D ? 1 : -1;
        while (true) {
            var B = this.isWorkingDate(C);
            if (B) break;
            C = new Date(C.getFullYear(), C.getMonth(), C.getDate() + _)
        }
        C = D ? C : new Date(C.getFullYear(), C.getMonth(), C.getDate(), 23, 59, 59);
        this.caches[A] = C[o1oo0O]();
        return C
    },
    getWorkingStartDate: function (D, _) {
        if (_ == 0) return D;
        var A = "getWorkingStartDate" + D[o1oo0O]() + _,
			$ = this.caches[A];
        if ($) return new Date($);
        D = new Date(D.getFullYear(), D.getMonth(), D.getDate());
        var B = _ > 0 ? 1 : -1;
        while (true) {
            if (_ == 0) break;
            D = new Date(D.getFullYear(), D.getMonth(), D.getDate() + B);
            var C = this.isWorkingDate(D);
            if (C) _ -= B
        }
        this.caches[A] = D[o1oo0O]();
        return D
    }
};
oo00.Validator = function($) {
	this.project = $
};
oo00.Validator[O0lOl0] = {
	valid: function() {
		var $ = this.project[l1lOol]();
		this.validTasks($)
	},
	validTasks: function(B) {
		this.validedTasks = {};
		B = B.clone();
		for (var $ = 0, A = B.length; $ < A; $++) {
			var _ = {};
			this.validTask(B[$], _)
		}
	},
	validTask: function(E, _) {
		var H = E.UID;
		if (this.validedTasks[H] != null) return;
		if (_[H] != null) throw new Error("\u524d\u7f6e\u4efb\u52a1\u51fa\u9519,\u6709\u56de\u73af\u5f15\u7528");
		_[H] = E;
		this.validedTasks[H] = E;
		this.validTaskProperties(E);
		var A = this.project[l00O1O](H);
		if (A && A.UID != this.project.rootTaskUID) {
			this.validTask(A, _);
			delete _[A.UID]
		}
		var G = E.PredecessorLink;
		if (G != null) for (var $ = 0, D = G.length; $ < D; $++) {
			var C = G[$];
			this.validLink(E, C, _);
			delete _[C.PredecessorUID]
		}
		var F = E[this.project.tasks.nodesField];
		if (F) for ($ = 0, D = F.length; $ < D; $++) {
			var B = F[$];
			this.validTask(B, _);
			delete _[B.UID]
		}
	},
	validLink: function(C, B, $) {
		var D = this.project[Ololl1](B.PredecessorUID);
		if (D == null) return;
		var E = C.UID,
			_ = D.UID,
			A = false;
		if ($[_] != null) {
			alert("\u4efb\u52a1 (" + C.ID + ") \"" + C.Name + "\" \u4e0d\u80fd\u6709\u56de\u73af\u5f15\u7528\u5173\u7cfb");
			this.project[l01ool](C, D);
			A = true
		}
		if (!A && this.project[O1OlOO](E, _)) {
			alert("\u7236\u4efb\u52a1 (" + C.ID + ") \"" + C.Name + "\" \u548c\u5b50\u4efb\u52a1 (" + D.ID + ") \"" + D.Name + "\" \u4e0d\u80fd\u6709\u4efb\u52a1\u76f8\u5173\u6027");
			this.project[l01ool](C, D);
			A = true
		}
		if (!A && this.project[O1OlOO](_, E)) {
			alert("\u7236\u4efb\u52a1 (" + D.ID + ") \"" + D.Name + "\" \u548c\u5b50\u4efb\u52a1 (" + C.ID + ") \"" + C.Name + "\" \u4e0d\u80fd\u6709\u4efb\u52a1\u76f8\u5173\u6027");
			this.project[l01ool](C, D);
			A = true
		}
		this.validTask(D, $)
	},
	validTaskProperties: function(B) {
		if (B.Name === null || B.Name === undefined) B.Name = "";
		if (isNaN(B.Duration)) B.Duration = 0;
		if (isNaN(B.Work)) B.Work = 0;
		if (isNaN(B.PercentComplete)) B.PercentComplete = 0;
		if (B.PercentComplete < 0) B.PercentComplete = 0;
		if (B.PercentComplete > 100) B.PercentComplete = 100;
		if (isNaN(B.Critical)) B.Critical = 0;
		if (isNaN(B.ConstraintType) || !B.ConstraintDate) B.ConstraintType = 0;
		if (B.ConstraintDate) {
			var _ = B.ConstraintDate;
			B.ConstraintDate = new Date(_.getFullYear(), _.getMonth(), _.getDate())
		}
		if (!mini.isDate(B.Start)) B.Start = null;
		if (!mini.isDate(B.Finish)) B.Finish = null;
		if (!mini.isDate(B.ActualStart)) B.ActualStart = null;
		if (!mini.isDate(B.ActualFinish)) B.ActualFinish = null;
		if (B.FixedDate == null) B.FixedDate = 0;
		var C = B.PredecessorLink;
		if (C && C.length > 0) for (var $ = C.length - 1; $ >= 0; $--) {
			var A = C[$];
			A.Type = parseInt(A.Type);
			A.LinkLag = parseInt(A.LinkLag);
			if (isNaN(A.LinkLag)) A.LinkLag = 0;
			if (B.Summary && (A.Type == 0 || A.Type == 2)) {
				alert("\u6458\u8981\u4efb\u52a1 (" + B.ID + ") \"" + B.Name + "\" \u7684\u524d\u7f6e\u4efb\u52a1\u5fc5\u987b\u662fFS\u6216SS");
				C.removeAt($)
			}
		}
	}
};
oo00.PercentComplete = function($) {
	this.project = $
};
oo00.PercentComplete[O0lOl0] = {
	syncComplete: function($) {
		this.syncParentComplete($);
		this.syncChildrenComplete($)
	},
	syncParentComplete: function(H) {
		var A = "Duration",
			K = H.UID,
			_ = this.project[l00O1O](K);
		if (_ != null && _.UID != this.project.rootTaskUID) {
			var G = _.PercentComplete,
				F = this.getChildrenAll(_),
				B = 0,
				I = 0;
			for (var D = 0, C = F.length; D < C; D++) {
				var $ = F[D],
					J = parseInt($[A]),
					E = parseInt($["PercentComplete"]);
				B += J;
				I += J * E / 100
			}
			_["PercentComplete"] = parseInt(I / B * 100);
			this.syncParentComplete(_);
			if (G != _.PercentComplete) this.project[oloO01](_, "PercentComplete")
		}
	},
	syncChildrenComplete: function(G) {
		var A = "Duration",
			H = this.getChildrenAll(G),
			B = 0,
			I = 0;
		for (var E = 0, C = H.length; E < C; E++) {
			var _ = H[E],
				J = parseInt(_[A]);
			B += J
		}
		I = B * parseInt(G["PercentComplete"]) / 100;
		var D = B == I;
		for (E = 0, C = H.length; E < C; E++) {
			var _ = H[E],
				F = _.PercentComplete,
				J = parseInt(_[A]);
			if (I <= 0) _["PercentComplete"] = 0;
			else {
				var $ = I - J;
				if ($ >= 0) _["PercentComplete"] = 100;
				else _["PercentComplete"] = parseInt(I / J * 100);
				I = $
			}
			if (D) _["PercentComplete"] = 100;
			if (F != _.PercentComplete) this.project[oloO01](_, "PercentComplete")
		}
		for (E = 0, C = H.length; E < C; E++) {
			_ = H[E];
			this.syncParentComplete(_)
		}
	},
	getChildrenAll: function(C) {
		var D = this.project[Ooll1O](C, true),
			B = [];
		for (var $ = 0, A = D.length; $ < A; $++) {
			var _ = D[$];
			if (_.Summary == 0) B.push(_)
		}
		return B
	}
};
oo00.Critical = function($) {
	this.project = $
};
oo00.Critical[O0lOl0] = {
	clearCritical: function() {
		this.Tasks = this.project[l1lOol]();
		this.clearCriticalTasks(this.Tasks)
	},
	createCritical: function() {
		this.nodesField = this.project.tasks.nodesField;
		this.Tasks = this.project[l1lOol]();
		this.StartDate = this.project[lOoO0O]();
		this.FinishDate = this.project[olO0lo]();
		this.Calendar = this.project._Calendar;
		var C = this.Tasks,
			_ = {};
		for (var $ = 0, B = C.length; $ < B; $++) {
			var A = C[$];
			_[A.UID] = A.Critical
		}
		this.doCreateCritical();
		for ($ = 0, B = C.length; $ < B; $++) {
			A = C[$];
			if (_[A.UID] != A.Critical);
		}
	},
	doCreateCritical: function() {
		var J = this.Tasks;
		this.clearCriticalTasks(J);
		var S = this.getLastTasks(),
			L = this.getTaskChains(S);
		for (var M = 0, G = L.length; M < G; M++) {
			var A = L[M];
			for (var Q = 0, _ = A.length; Q < _; Q++) {
				var T = A[Q];
				if (T.Name == "\u786e\u5b9a\u9879\u76ee\u8303\u56f4");
				var R = T.Duration,
					H = Q + 1;
				if (0 <= H && H <= _ - 1) {
					var K = A[H],
						I = mini.cloneDate(K.Start),
						O = mini.cloneDate(K.Finish);
					if (!I || !O) continue;
					var F = this.project[O01olo](T, K),
						B = F.Type;
					switch (B) {
					case 0:
						T.EarlyFinish = O;
						T.EarlyStart = this.Calendar.getStart(T.EarlyFinish, R);
						break;
					case 1:
						O.setDate(O.getDate() + 1);
						T.EarlyStart = this.Calendar.getWorkingDate(O, true);
						T.EarlyFinish = this.Calendar.getFinish(T.EarlyStart, R);
						break;
					case 2:
						I.setDate(I.getDate() - 1);
						T.EarlyFinish = this.Calendar.getWorkingDate(I, false);
						T.EarlyStart = this.Calendar.getStart(T.EarlyFinish, R);
						break;
					case 3:
						T.EarlyStart = I;
						T.EarlyFinish = this.Calendar.getFinish(T.EarlyStart, R);
						break
					}
				} else {
					T.EarlyStart = T.Start;
					T.EarlyFinish = T.Finish
				}
				var $ = Q - 1;
				if (0 <= $ && $ <= _ - 1) {
					var P = A[$],
						N = mini.cloneDate(P.Start),
						E = mini.cloneDate(P.Finish);
					if (!N || !E) continue;
					F = this.project[O01olo](P, T), B = F.Type;
					switch (B) {
					case 0:
						T.LateFinish = E;
						T.LateStart = this.Calendar.getStart(T.LateFinish, R);
						break;
					case 1:
						N.setDate(N.getDate() - 1);
						T.LateFinish = this.Calendar.getWorkingDate(N, false);
						T.LateStart = this.Calendar.getStart(T.LateFinish, R);
						break;
					case 2:
						E.setDate(E.getDate() + 1);
						T.LateStart = this.Calendar.getWorkingDate(E, true);
						T.LateFinish = this.Calendar.getFinish(T.LateStart, R);
						break;
					case 3:
						T.LateStart = N;
						T.LateFinish = this.Calendar.getFinish(T.LateStart, R);
						break
					}
				} else {
					T.LateStart = T.Start;
					T.LateFinish = T.Finish
				}
			}
			for (Q = 0, _ = A.length; Q < _; Q++) {
				T = A[Q];
				if (T.Name == "\u786e\u5b9a\u9879\u76ee\u8303\u56f4");
				if (T.Critical == 1) continue;
				var C = T.EarlyStart,
					D = T.LateStart;
				if (!C || !D) continue;
				if (C[o1oo0O]() >= D[o1oo0O]()) T.Critical = 1;
				$ = Q - 1;
				if (0 > $ || $ > _ - 1) T.Critical = 1;
				if (T.Milestone != null && T.Milestone == 1) T.Critical = 1;
				if (T.Critical == null || T.Critical == 0) break
			}
		}
	},
	chains: null,
	chain: null,
	getTaskChains: function(B) {
		this.chains = [];
		this.chain = [];
		for (var $ = 0, A = B.length; $ < A; $++) {
			var _ = B[$];
			this.createTaskChain(_)
		}
		return this.chains
	},
	clearCriticalTasks: function(B) {
		for (var $ = 0, A = B.length; $ < A; $++) {
			var _ = B[$];
			delete _.EarlyStart;
			delete _.EarlyFinish;
			delete _.LateStart;
			delete _.LateFinish;
			_.Critical = 0
		}
	},
	createTaskChain: function(C) {
		if (C == null || C.Start == null || C.Finish == null) return;
		this.chain[l10o01](C);
		var E = C.PredecessorLink;
		if (E != null && E.length > 0) {
			for (var $ = 0, B = E.length; $ < B; $++) {
				var A = E[$],
					D = this.project[Ololl1](A.PredecessorUID);
				this.createTaskChain(D)
			}
		} else {
			var _ = this.chain.clone();
			this.chains[l10o01](_)
		}
		this.chain.removeAt(this.chain.length - 1)
	},
	getLastTasks: function() {
		var D = [],
			E = this.Tasks,
			A = -1;
		for (var $ = 0, C = E.length; $ < C; $++) {
			var B = E[$];
			if (B == null || B.Finish == null) continue;
			var _ = B.Finish[o1oo0O]();
			if (_ > A) A = _
		}
		for ($ = 0, C = E.length; $ < C; $++) {
			B = E[$];
			if (B == null || B.Finish == null) continue;
			_ = B.Finish[o1oo0O]();
			if (_ == A) D[l10o01](B)
		}
		return D
	}
};
O1llooView = function() {
	O1llooView[lO0010][llo0oo][o0OoO0](this)
};
loOo0(O1llooView, oO1o11, {
	Oo1lOlCls: "mini-gantt-selected",
	showLabel: false,
	lOol0O: function() {
		this._ToolTip = new mini._GanttViewToolTip(this);
		this._DragDrop = new mini._RGanttViewDragDrop(this);
		this.lo0o11 = new mini._RGanttViewSelect(this)
	},
	getItem: function($) {
		if (typeof $ == "object") $ = $._id;
		return this.owner[OlolO]($)
	},
	getItemTop: function($) {
		var _ = this._TaskUIDs[$.ParentUID];
		return this._TaskTops[_._id]
	},
	getItemHeight: function($) {
		var A = this._TaskUIDs[$.ParentUID],
			_ = mini.isNumber(A._height) ? A._height : this.rowHeight;
		return _
	},
	getItemBox: function(_, B, D, A) {
		var C = O1llooView[lO0010][OOo11l].apply(this, arguments);
		C.top += 0;
		C.height = 19;
		C.bottom = C.top + C.height;
		var $ = parseInt(_.__Index);
		if (!isNaN($)) {
			C.top += ($) * this.rowHeight;
			C.height = 19;
			C.bottom = C.top + C.height;
			C.top -= 4 * $
		}
		C.y = C.top;
		return C
	},
	_OnItemDragDrop: function($, _) {
		var A = {
			item: $,
			dropNode: _,
			cancel: false
		};
		this[lO0OoO]("ItemDragDrop", A);
		return A
	},
	headerCellOffset: 1,
	Ol1oO1: function($, I, J, D, N, _) {
		var E = I.height,
			B = I.top,
			L = I.left,
			A = I.right,
			C = A - L;
		if (C < 0) return;
		if (C < 2) C = 2;
		var M = $.PercentComplete || 0,
			K = parseInt(C * M / 100);
		if (M == 0) K = 0;
		var F = "mini-gantt-item ",
			G = this[o10O01]($, "move");
		if (!this._ReadOnly && !G.cancel) F += " mini-gantt-move ";
		var O = this.O1O001($, I);
		if (O.itemCls) F += " " + O.itemCls + " ";
		if (O.itemHtml === null) {
			if (this[loO0ll]($)) F += " " + this.Oo1lOlCls + " ";
			var H = this.id + "$" + $._id;
			J[J.length] = "<div id=\"";
			J[J.length] = H;
			J[J.length] = "\" class=\"";
			J[J.length] = F;
			J[J.length] = "\" style=\"left:";
			J[J.length] = L;
			J[J.length] = "px;top:";
			J[J.length] = B;
			J[J.length] = "px;height:";
			J[J.length] = jQuery.boxModel ? E - 2 : E;
			J[J.length] = "px;width:";
			J[J.length] = jQuery.boxModel ? C - 2 : C;
			J[J.length] = "px;\"><div class=\"mini-gantt-itembg\"></div><div class=\"mini-gantt-percentcomplete\" style=\"width:";
			J[J.length] = K;
			J[J.length] = "px;";
			if (K == 0) J[J.length] = "display:none;";
			J[J.length] = "\"></div><div class=\"mini-gantt-text\" >";
			if (C > 10) J[J.length] = mini.isNull($.Name) ? "" : $.Name;
			J[J.length] = "</div></div>"
		} else J[J.length] = O.itemHtml
	},
	loOOo1: function(C, D) {
		var J = this.rowHeight,
			B = this.topTimeScale.type,
			F = this.bottomTimeScale.type,
			K = C.startRow,
			I = C.endRow,
			M = this[O1OooO](C.startDate);
		this._ReadOnly = this[OlOOo1]();
		var R = this[O1ooo](),
			T = this[l11loo](C),
			O = T.left,
			S = T.top,
			U = T.width,
			W = T.height,
			P = [],
			Q = [],
			A = this._O1lo01 ? this._O1lo01._id : null;
		for (var G = K, L = I; G <= L; G++) {
			var $ = R[G];
			if (!$) continue;
			var E = $.Tasks;
			if (!E) continue;
			for (var H = 0, _ = E.length; H < _; H++) {
				var V = E[H];
				if (!mini.isDate(V.Start) || !mini.isDate(V.Finish) || (A && A != V._id)) continue;
				var N = this[OOo11l](V, O, S);
				this.Ol1oO1(V, N, P, A, false, false);
				Q.push(V)
			}
		}
		if (D) return P.join("");
		this._createCross(Q, P, C);
		this.cellsEl.innerHTML = P.join("")
	},
	_createCross: function(D, S, C) {
		if (this.owner && this.owner.autoWrapItem == true) return;
		var W = this[l11loo](C),
			R = W.left,
			V = W.top,
			X = W.width,
			Z = W.height,
			P = {};
		for (var E = 0, Q = D.length; E < Q; E++) {
			var Y = D[E],
				N = Y.Start[o1oo0O](),
				L = Y.Finish[o1oo0O](),
				T = this[OOo11l](Y, R, V),
				A = T.bottom + 2;
			for (var J = 0, $ = D.length; J < $; J++) {
				var K = D[J];
				if (Y._id == K._id || Y.ParentUID != K.ParentUID) continue;
				var F = Y._id + "$" + K._id,
					I = K._id + "$" + Y._id;
				if (P[F] || P[I]) continue;
				var B = U = null,
					O = K.Start[o1oo0O](),
					G = K.Finish[o1oo0O]();
				if (N <= O && O <= L) var B = K.Start,
					U = G < L ? K.Finish : Y.Finish;
				else if (N <= O && G <= L) {
					U = K.Finish;
					B = O > N ? K.Start : Y.Start
				}
				if (B) {
					P[F] = 1;
					P[I] = 1;
					var H = this[O1OooO](B) - R,
						M = this[O1OooO](U) - R,
						_ = M - H;
					S[S.length] = "<div class=\"mini-gantt-cross\" style=\"left:" + H + "px;top:" + A + "px;width:" + _ + "px;\"></div>"
				}
			}
		}
	},
	setData: function($) {
		this.lo1O0l = [];
		this.idSelecteds = {};
		return O1llooView[lO0010][lO0l11][o0OoO0](this, $)
	},
	Oo1lOl: null,
	lo1O0l: null,
	idSelecteds: null,
	getSelecteds: function() {
		return this.lo1O0l
	},
	getSelected: function() {
		return this.Oo1lOl
	},
	isSelected: function($) {
		return this.idSelecteds[$._id]
	},
	select: function($) {
		this[OlO1lO]([$])
	},
	deselect: function($) {
		this[O1o00]([$])
	},
	selectAll: function() {
		this[OlO1lO](this.lo1O0l)
	},
	deselectAll: function() {
		this[O1o00](this.lo1O0l)
	},
	selects: function(C) {
		if (!C || C.length == 0) return;
		C = C.clone();
		for (var $ = 0, B = C.length; $ < B; $++) {
			var A = C[$];
			if (!this[loO0ll](A)) {
				this.lo1O0l.push(A);
				this.idSelecteds[A._id] = A;
				var _ = document.getElementById(this.id + "$" + A._id);
				if (_) ollool(_, this.Oo1lOlCls)
			}
		}
		this[lO0OoO]("selectionchanged")
	},
	deselects: function(C) {
		if (!C || C.length == 0) return;
		C = C.clone();
		for (var $ = 0, B = C.length; $ < B; $++) {
			var A = C[$];
			if (this[loO0ll](A)) {
				this.lo1O0l.remove(A);
				delete this.idSelecteds[A._id];
				var _ = document.getElementById(this.id + "$" + A._id);
				if (_) OloO(_, this.Oo1lOlCls)
			}
		}
		if (this.Oo1lOl && !this[loO0ll](this.Oo1lOl)) this.Oo1lOl = null;
		this[lO0OoO]("selectionchanged")
	}
});
mini._RGanttViewDragDrop = function($) {
	mini._RGanttViewDragDrop[lO0010][llo0oo][o0OoO0](this, $)
};
loOo0(mini._RGanttViewDragDrop, mini._GanttViewDragDrop, {
	renderOoo0O: function() {
		var J = this.owner;
		if (!J.allowDrag || J[OlOOo1]()) return;
		var C = J.viewRegion,
			L = J[l11loo](C),
			G = L.left,
			M = L.top,
			O = L.width,
			R = L.height,
			K = J[O1ooo](),
			D = C.startRow,
			B = C.endRow,
			H = [];
		for (var I = D, E = B; I <= E; I++) {
			var $ = K[I];
			if (!$) continue;
			var F = $.Tasks;
			if (!F) continue;
			for (var N = 0, _ = F.length; N < _; N++) {
				var P = F[N],
					A = J[OOo11l](P, G, M);
				this.renderItemOoo0O(P, A, H)
			}
		}
		var Q = "<div>" + H.join("") + "</div>";
		mini.append(J.cellsEl, Q)
	},
	_BeforeDragMove: function($, A) {
		var _ = this.owner[o10O01]($, "move");
		if (!_.cancel) this.getDrag().start(A);
		this.allowDragUpdown = _.dragUpdown
	},
	OO0O1: function(A) {
		var _ = this.owner,
			$ = this.dragItem;
		this.viewBox = _[l11loo](_.viewRegion);
		var D = _[OOo11l]($);
		this.MoveOffset = D.left - A.init[0];
		this.timeSpan = $.Finish - $.Start;
		this.itemBox = D;
		if (this.dragAction != "percentcomplete") {
			var C = document.getElementById(_.id + "$" + $._id),
				B = oo0OlO(C);
			this.barBox = B;
			this.proxy = mini.append(document.body, "<div class='mini-gantt-proxy'></div>");
			l010(this.proxy, B);
			o1ol0o(this.proxy, "mousewheel", function(A, $) {
				_.O101o(A, $)
			}, this)
		}
		this.dragIcon = mini.append(document.body, "<div class='mini-gantt-dragicon'></div>")
	},
	lo1o1: function(_) {
		var F = this.owner,
			$ = this.dragItem,
			G = this.viewBox,
			J = F[oOOo1O](),
			C = _.now[0] - _.init[0],
			A = _.now[1] - _.init[1];
		switch (this.dragAction) {
		case "start":
			var B = F[o0lOOo](_.now[0]);
			$.Start = B;
			var K = this.barBox.x + C;
			mini.setX(this.proxy, K);
			oOl1O(this.proxy, this.barBox.right - K);
			break;
		case "finish":
			B = F[o0lOOo](_.now[0]);
			$.Finish = B;
			if ($.Start > $.Finish) $.Finish = $.Start;
			oOl1O(this.proxy, this.barBox.width + C);
			break;
		case "percentcomplete":
			var E = this.itemBox.width,
				D = _.now[0] - J.x + G.left - this.itemBox.x,
				H = parseInt(D * 100 / E);
			if (H < 0) H = 0;
			if (H > 100) H = 100;
			$.PercentComplete = H;
			setTimeout(function() {
				F.O1lo01($, false)
			}, 10);
			break;
		case "move":
			D = _.now[0] + this.MoveOffset, B = F[l1o00o](D);
			$.Start = B;
			$.Finish = new Date(B[o1oo0O]() + this.timeSpan);
			var K = this.barBox.x + C,
				I = this.barBox.y + A;
			mini.setX(this.proxy, K);
			if (this.allowDragUpdown) mini.setY(this.proxy, I);
			break;
		case "link":
			break
		}
		var L = F[lo0111]($, _, this.dragAction);
		if (this.dragAction == "move" && this.allowDragUpdown) {
			this.dropNode = F.OlOOO(_.now[1]);
			L = F[OO10lo](this.dragItem, this.dropNode);
			if (L.cancel) {
				this.dragIcon.style.display = "block";
				mini[l01o0O](this.dragIcon, _.now[0] + 8, _.now[1] + 13)
			} else this.dragIcon.style.display = "none"
		}
	},
	_OnItemDragComplete: function(_) {
		var A = this.owner,
			$ = this.dragItem;
		if (!this.allowDragUpdown) this.dropNode = null;
		A[l00loO](this.dragItem, this.dragAction, _, this.dropNode)
	},
	stopDrag: function(A) {
		var _ = this.owner,
			$ = this.dragItem;
		if (A == false) _[o1oloo]();
		this.dragItem = this.originalItem = this.dragAction = null;
		if (this.proxy) {
			mini[lllO0l](this.proxy);
			this.proxy = null
		}
		if (this.dragIcon) {
			mini[lllO0l](this.dragIcon);
			this.dragIcon = null
		}
	}
});
mini._RGanttViewSelect = function($) {
	this.gantt = $;
	o1ol0o($.el, "mousedown", this.__OnGanttMouseDown, this)
};
mini._RGanttViewSelect[O0lOl0] = {
	__OnGanttMouseDown: function(B) {
		var A = B.target,
			_ = this.gantt;
		if (_[OlOOo1]()) return;
		mini.selectable(A, false);
		var $ = _.oooOo(B);
		if (!$) return;
		if (B.ctrlKey) {
			_.Oo1lOl = $;
			_[o00OO0]($)
		} else {
			_[lOlOOo]();
			_.Oo1lOl = $;
			_[o00OO0]($)
		}
	}
};
O1lloo = function() {
	O1lloo[lO0010][llo0oo][o0OoO0](this);
	this.data = {
		Calendar: this[ll0lll](),
		Resources: []
	};
	this.rootTaskUID = -1;
	this._NodesUIDs = {};
	this._TasksUIDs = {};
	this._TasksIDs = {}
};
O1lloo.TaskID = 1;
loOo0(O1lloo, OO0l1o, {
	autoWrapItem: true,
	OrderType: "day",
	panel1Width: 180,
	collapsePanel: 1,
	allowMove: false,
	headerHeight: 44,
	rowHeight: 28,
	columnWidth: 100,
	tableWidth: "50%",
	splitWidth: 4,
	minViewWidth: 100,
	treeColumn: null,
	columns: null,
	readOnly: false,
	allowDragDrop: false,
	multiSelect: false,
	showGridLines: true,
	timeLines: null,
	showTableView: true,
	showGanttView: true,
	allowResize: true,
	uiCls: "mini-rgantt mini-gantt"
});
O1olO = O1lloo[O0lOl0];
O1olO[l0l011] = O1l0O;
O1olO[Ol0o1o] = lOl1o;
O1olO[l1ol1l] = ll1l1o;
O1olO[llol01] = l0o1OO;
O1olO[lO1O0O] = o111o;
O1olO[OoOO1] = o1OOlo;
O1olO[O1ll0o] = lO01;
O1olO[O1o00] = l110o;
O1olO[OlO1lO] = oo1Oo;
O1olO[lOlOOo] = OOl0l;
O1olO[l0Oo11] = olll;
O1olO[oOOO1O] = Oll1l;
O1olO[o00OO0] = o1O0O;
O1olO[loO0ll] = oo011;
O1olO[oolO0] = lO11lO;
O1olO[lool1o] = l0OOl;
O1olO[O1o00l] = oo01O;
O1olO[O1OO1l] = Oll1lTask;
O1olO[lo1llO] = o1O0OTask;
O1olO[OoO0Ol] = Oll1lTasks;
O1olO[loo00l] = o1O0OTasks;
O1olO[lll111] = OOl0lTasks;
O1olO[oo0010] = olllTasks;
O1olO[l1Oo00] = l0OOlTask;
O1olO[Oo00O1] = l0OOlTasks;
O1olO[OolO1o] = oo011Task;
O1olO[ol00l1] = O0o10;
O1olO[lO1O00] = o1o0ll;
O1olO[OOO1ll] = Ol1Oo;
O1olO[oo1o10] = loO1l;
O1olO[OOO001] = O0o0O;
O1olO[O1OlOO] = Ol000;
O1olO[O1100o] = o10l;
O1olO[loOo0o] = o001lO;
O1olO[Ol0Olo] = O0O1O;
O1olO[lO1l00] = oool0;
O1olO[l0OoOl] = oloo;
O1olO[OO0l1O] = l000;
O1olO[lo10lO] = l1l00;
O1olO[O11l1o] = lOl0l;
O1olO[o00Olo] = ollO;
O1olO[l0O0l0] = OO0O0o;
O1olO[oOolll] = o0OO1;
O1olO[o0Oll1] = O0Oo0;
O1olO[OO000o] = OO1lO;
O1olO[O11o0o] = O0Oo0Level;
O1olO[lolooO] = OO1lOLevel;
O1olO[OO1001] = oo1lo;
O1olO[O01O1l] = oOool;
O1olO[O1Ol11] = oOl1oO;
O1olO[ll1lO0] = llOOl;
O1olO[OOO1lO] = loOo;
O1olO[lOl1o1] = O1o0O;
O1olO[OlolO] = lollO;
O1olO[Ololl1] = ol1lo;
O1olO[OO1110] = O10OOo;
O1olO[ll0lll] = lOOol0;
O1olO.lll00 = O1o0;
O1olO[O11OoO] = l10OO;
O1olO[o0oOOl] = lO1l0o;
O1olO[oooO1O] = OOl0o;
O1olO[lOlOo] = loo1Oo;
O1olO[OoO1O1] = l0101o;
O1olO[oO1010] = lO00;
O1olO[oll1oO] = l1o00;
O1olO[lO0lOO] = lOOO1;
O1olO[ll1ll1] = oo0Oo;
O1olO[OO1ool] = O1oO0;
O1olO[OO1OO0] = OOO1l;
O1olO[lool11] = Oo1l;
O1olO[Oool1o] = ol1O0;
O1olO[O11OoO] = l10OO;
O1olO[o1lOll] = OO1o;
O1olO[OooOO] = oOoOl;
O1olO[l11ol1] = Olll1;
O1olO[lOO00l] = O10OOoList;
O1olO[l01lOo] = O10OOoTree;
O1olO[llO0l0] = o0lool;
O1olO[ooo0oO] = lo11l;
O1olO[Oo0o0l] = oOlOO;
O1olO[llloO1] = O000l0;
O1olO[lO00O1] = O0llll;
O1olO.oOoo1l = lO11;
O1olO.l11l = ol01l;
O1olO.OooO10 = o10ll;
O1olO.l1lllO = O1O01;
O1olO[loo0oO] = l11OOO;
O1olO.olOlo1 = l001o;
O1olO.OO10O1 = OoOl0;
O1olO.ol00o = l1O0lo;
O1olO[lO01o0] = oo0Ol;
O1olO.O011O = oll1;
O1olO.OO0OOo = Ol1ol;
O1olO[ooooll] = lo1O1;
O1olO[loO0lO] = O1oOo1;
O1olO[o1oloo] = O1OOl;
l1O011(O1lloo, "rgantt");
MyRGantt = O1lloo;
PlusRGantt = O1lloo;
lO0111 = function() {
	lO0111[lO0010][llo0oo][o0OoO0](this);
	new oo00(this);
	this[o0oOOl]("Name")
};
loOo0(lO0111, oll0ll, {
	allowProjectDateRange: true,
	allowSummaryLink: true,
	allowSyncComplete: true,
	showCriticalPath: false,
	allowOrderProject: true,
	autoSyncSummary: false,
	_orderModel: "",
	_FastModel: false,
	_doFast: false
});
lOoO0 = lO0111[O0lOl0];
lOoO0[o0Oloo] = ol1110;
lOoO0.loOlO = lOolol;
lOoO0[oo1o10] = OoooO;
lOoO0[oO0100] = lO1O0;
lOoO0[OOlll0] = oOOo;
lOoO0[OOo01O] = O1Oll;
lOoO0[OoOl0l] = O000o;
lOoO0[lo01ol] = l00ol;
lOoO0[Oll01l] = O1o1Oo;
lOoO0[o0Oo1O] = oOoO1;
lOoO0[llO0l0] = O0o0o;
lOoO0[ooo0oO] = l1Ooo;
lOoO0.OOlloo = ooo0l;
lOoO0.lllO01 = O1OO0;
lOoO0[Oo0o0l] = Oo1OO;
lOoO0[o01O0l] = l000oO;
lOoO0.O11o = oooO0;
lOoO0.oOOo0l = l11l1;
lOoO0[ooooOo] = l0l10;
lOoO0[o0l1l1] = loo0l;
lOoO0[Oo1olO] = l1o10;
l1O011(lO0111, "project");
MyProject = lO0111;
PlusProject = lO0111;
lO0111.IDColumn = function($) {
	return mini.copyTo({
		name: "ID",
		header: "",
		field: "ID",
		width: 30,
		cellCls: "mini-indexcolumn",
		align: "center",
		allowDrag: true,
		cellStyle: "cursor:move;"
	}, $)
};
lO0111.NameColumn = function($) {
	return mini.copyTo({
		name: "Name",
		header: oll0ll.Name_Text,
		field: "Name",
		width: 200,
		editor: {
			type: "textbox"
		},
		renderer: function(_) {
			var $ = mini.htmlEncode(_.value);
			if (_.record.Summary) return "<b>" + $ + "</b>";
			return $
		}
	}, $)
};
lO0111.PercentCompleteColumn = function($) {
	return mini.copyTo({
		name: "PercentComplete",
		header: oll0ll.PercentComplete_Text,
		field: "PercentComplete",
		width: 60,
		editor: {
			type: "spinner",
			minValue: 0,
			maxValue: 100
		}
	}, $)
};
lO0111.PredecessorLinkColumn = function($) {
	return mini.copyTo({
		name: "PredecessorLink",
		header: oll0ll.PredecessorLink_Text,
		field: "PredecessorLink",
		editor: {
			type: "textbox"
		},
		renderer: function(B) {
			var $ = B.source,
				_ = $.owner,
				A = B.value;
			return _[Oo0l1o](A)
		},
		oncellbeginedit: function(B) {
			var $ = B.source,
				_ = $.owner,
				A = B.value;
			B.value = _[Oo0l1o](A)
		}
	}, $)
};
lO0111.DurationColumn = function($) {
	return mini.copyTo({
		name: "Duration",
		header: oll0ll.Duration_Text,
		field: "Duration",
		width: 60,
		editor: {
			type: "spinner",
			minValue: 0,
			maxValue: 10000
		}
	}, $)
};
lO0111.WorkColumn = function($) {
	return mini.copyTo({
		name: "Work",
		header: oll0ll.Work_Text,
		field: "Work",
		width: 60,
		editor: {
			type: "spinner",
			minValue: 0,
			maxValue: 10000
		}
	}, $)
};
lO0111.StartColumn = function($) {
	return mini.copyTo({
		name: "Start",
		header: oll0ll.Start_Text,
		field: "Start",
		renderer: function(_) {
			var $ = _.value;
			if ($) return $.getFullYear() + "-" + ($.getMonth() + 1) + "-" + $.getDate();
			else return ""
		},
		editor: {
			type: "datepicker"
		}
	}, $)
};
lO0111.FinishColumn = function($) {
	return mini.copyTo({
		name: "Finish",
		header: oll0ll.Finish_Text,
		field: "Finish",
		renderer: function(_) {
			var $ = _.value;
			if ($) return $.getFullYear() + "-" + ($.getMonth() + 1) + "-" + $.getDate();
			else return ""
		},
		editor: {
			type: "datepicker"
		}
	}, $)
};
lO0111.PriorityColumn = function($) {
	return mini.copyTo({
		name: "Priority",
		header: oll0ll.Priority_Text,
		field: "Priority",
		width: 60,
		editor: {
			type: "spinner",
			minValue: 0,
			maxValue: 1000
		}
	}, $)
};
lO0111.WeightColumn = function($) {
	return mini.copyTo({
		name: "Weight",
		header: oll0ll.Weight_Text,
		field: "Weight",
		width: 60,
		editor: {
			type: "spinner",
			minValue: 0,
			maxValue: 100
		}
	}, $)
};
lO0111.OutlineNumberColumn = function($) {
	return mini.copyTo({
		header: oll0ll.OutlineNumber_Text,
		field: "OutlineNumber",
		width: 150
	}, $)
};
lO0111.OutlineLevelColumn = function($) {
	return mini.copyTo({
		name: "OutlineLevel",
		header: oll0ll.OutlineLevel_Text,
		field: "OutlineLevel",
		width: 80
	}, $)
};
lO0111.ActualStartColumn = function($) {
	return mini.copyTo({
		name: "ActualStart",
		header: oll0ll.ActualStart_Text,
		field: "ActualStart",
		renderer: function(_) {
			var $ = _.value;
			if ($) return $.getFullYear() + "-" + ($.getMonth() + 1) + "-" + $.getDate();
			else return ""
		},
		editor: {
			type: "datepicker"
		}
	}, $)
};
lO0111.ActualFinishColumn = function($) {
	return mini.copyTo({
		name: "ActualFinish",
		header: oll0ll.ActualFinish_Text,
		field: "ActualFinish",
		renderer: function(_) {
			var $ = _.value;
			if ($) return $.getFullYear() + "-" + ($.getMonth() + 1) + "-" + $.getDate();
			else return ""
		},
		editor: {
			type: "datepicker"
		}
	}, $)
};
lO0111.WBSColumn = function($) {
	return mini.copyTo({
		name: "WBS",
		header: oll0ll.WBS_Text,
		field: "WBS",
		width: 150,
		editor: {
			type: "textbox"
		}
	}, $)
};
lO0111.ConstraintTypeColumn = function($) {
	return mini.copyTo({
		name: "ConstraintType",
		header: oll0ll.ConstraintType_Text,
		field: "ConstraintType",
		width: 120,
		editor: {
			type: "combobox",
			valueField: "ID",
			displayField: "Name",
			data: oll0ll.ConstraintType.clone()
		},
		renderer: function(B) {
			var $ = B.source,
				_ = $.owner,
				A = oll0ll.ConstraintType[B.value];
			return A ? A.Name : ""
		}
	}, $)
};
lO0111.ConstraintDateColumn = function($) {
	return mini.copyTo({
		name: "ConstraintDate",
		header: oll0ll.ConstraintDate_Text,
		field: "ConstraintDate",
		renderer: function(_) {
			var $ = _.value;
			if ($) return $.getFullYear() + "-" + ($.getMonth() + 1) + "-" + $.getDate();
			else return ""
		},
		editor: {
			type: "datepicker"
		}
	}, $)
};
lO0111.DepartmentColumn = function($) {
	return mini.copyTo({
		name: "Department",
		header: oll0ll.Department_Text,
		field: "Department",
		width: 120,
		editor: {
			type: "combobox",
			valueField: "UID",
			displayField: "Name"
		},
		renderer: function(J) {
			var $ = J.source,
				G = $.owner,
				F = G.data.Departments || [],
				I = [],
				A = String(J.value),
				C = mini.isArray(A) ? A : A.split(",");
			for (var E = 0, D = C.length; E < D; E++) {
				A = C[E];
				for (var H = 0, B = F.length; H < B; H++) {
					var _ = F[H];
					if (_.UID == A) {
						I.push(_.Name);
						break
					}
				}
			}
			return I.join(",")
		},
		oncellbeginedit: function(B) {
			var $ = B.source,
				A = $.owner,
				_ = A.data.Departments || [];
			B.editor[OlOl10](_)
		}
	}, $)
};
lO0111.PrincipalColumn = function($) {
	return mini.copyTo({
		name: "Principal",
		header: oll0ll.Principal_Text,
		field: "Principal",
		width: 150,
		editor: {
			type: "combobox",
			valueField: "UID",
			displayField: "Name",
			multiSelect: true,
			showCheckIcon: true
		},
		renderer: function(J) {
			var $ = J.source,
				G = $.owner,
				F = G.data.Principals || [],
				I = [],
				A = String(J.value),
				C = mini.isArray(A) ? A : A.split(",");
			for (var E = 0, D = C.length; E < D; E++) {
				A = C[E];
				for (var H = 0, B = F.length; H < B; H++) {
					var _ = F[H];
					if (_.UID == A) {
						I.push(_.Name);
						break
					}
				}
			}
			return I.join(",")
		},
		oncellbeginedit: function(B) {
			var $ = B.source,
				A = $.owner,
				_ = A.data.Principals || [];
			B.editor[OlOl10](_)
		}
	}, $)
};
lO0111.AssignmentsColumn = function($) {
	return mini.copyTo({
		name: "Assignments",
		header: oll0ll.Assignments_Text,
		field: "Assignments",
		width: 150,
		renderer: function(H) {
			var $ = H.source,
				E = $.owner,
				F = [],
				C = H.value;
			if (C) for (var _ = 0, G = C.length; _ < G; _++) {
				var B = C[_],
					A = B.ResourceUID,
					D = E[OoOl0l](A);
				if (D) F.push(D.Name)
			}
			return F.join(",")
		}
	}, $)
};
lO0111.Critical2Column = function($) {
	return mini.copyTo({
		name: "Critical2",
		header: "\u5173\u952e\u4efb\u52a1\uff08\u624b\u52a8\uff09",
		field: "Critical2",
		width: 80,
		type: "checkboxcolumn",
		trueValue: 1,
		falseValue: 0
	}, $)
};
lO0111.CriticalColumn = function($) {
	return mini.copyTo({
		name: "Critical",
		header: oll0ll.Critical_Text,
		field: "Critical",
		width: 80,
		type: "checkboxcolumn",
		trueValue: 1,
		falseValue: 0,
		readOnly: true
	}, $)
};
oo00.Order = function($) {
	this.project = $
};
oo00.Order[O0lOl0] = {
	isFixedDate: function(_) {
		var $ = _[this.nodesField];
		return _.FixedDate && _.FixedDate != 0 && ($ && $.length > 0)
	},
	Tasks: [],
	addDate: function(_, $) {
		return new Date(_.getFullYear(), _.getMonth(), _.getDate() + $, _.getHours(), _.getMinutes(), _.getSeconds())
	},
	lolo11: function() {
		var G = this.Tasks;
		if (G == null) return;
		for (var _ = 0, F = G.length; _ < F; _++) {
			var B = G[_];
			B.SuccessorTasks = [];
			delete B.__orderTime;
			B["Conflict"] = 0
		}
		for (_ = 0, F = G.length; _ < F; _++) {
			var B = G[_],
				$ = B.PredecessorLink;
			if ($ != null && $.length > 0) for (var C = 0, A = $.length; C < A; C++) {
				var D = $[C],
					E = this.project[Ololl1](D.PredecessorUID);
				if (E != null) E.SuccessorTasks.push(B)
			}
		}
	},
	ol1OO: function() {
		var B = this.Tasks;
		for (var $ = 0, A = B.length; $ < A; $++) {
			var _ = B[$];
			delete _.SuccessorTasks;
			delete _.__orderTime
		}
	},
	oolo0l: function($) {},
	O0O10l: function(B) {
		this._TaskUIDs = this.project._TaskUIDs;
		this.nodesField = this.project.tasks.nodesField;
		this.Tasks = this.project[l1lOol]();
		this.StartDate = this.project[lOoO0O]();
		this.FinishDate = this.project[olO0lo]();
		this.Calendar = this.project._Calendar;
		var D = this.Tasks,
			I = this.forTasks = {};
		this.ancestorTasks = {};
		this.limitDates = {};
		var $ = {};
		for (var F = 0, C = D.length; F < C; F++) {
			var K = D[F];
			$[K.UID] = {
				Start: K.Start,
				Finish: K.Finish,
				Duration: K.Duration,
				Work: K.Work,
				Summary: K.Summary
			};
			I[K.UID] = 1;
			var G = this.project[Ol0101](K);
			G.reverse();
			this.ancestorTasks[K.UID] = G
		}
		this.lolo11();
		this.orderCount = 0;
		var J = new Date();
		for (F = 0, C = D.length; F < C; F++) {
			K = D[F];
			if (K.OutlineLevel == 1) {
				delete I[K.UID];
				this.O1o01(K)
			}
		}
		this.OO11o();
		this.ol1OO();
		this.ancestorTasks = {};
		this.limitDates = {};
		for (F = 0, C = D.length; F < C; F++) {
			var K = D[F],
				H = $[K.UID],
				M = H.Start,
				_ = H.Finish,
				L = H.Duration,
				E = H.Work,
				A = H.Summary;
			if ((!M && K.Start) || (M && !K.Start) || (M && K.Start && M[o1oo0O]() != K.Start[o1oo0O]())) this.project[oloO01](K, "Start");
			if ((!_ && K.Finish) || (_ && !K.Finish) || (_ && K.Finish && _[o1oo0O]() != K.Finish[o1oo0O]())) this.project[oloO01](K, "Finish");
			if (L != K.Duration) this.project[oloO01](K, "Duration");
			if (E != K.Work) this.project[oloO01](K, "Work");
			if (A != K.Summary) this.project[oloO01](K, "Summary")
		}
	},
	O1o01: function(C, _) {
		if (this.forTasks[C.UID]) return;
		if (C.Summary == 0 && (C.Start == null || C.Finish == null)) {
			C.__orderTime = "ordered";
			return
		}
		_ = this.StartDate;
		var A = this.getAllPredecessorLinks(C);
		if (A != null && A.length > 0) {
			var $ = this.oOO0(C);
			if ($ != null) _ = $
		}
		if (!C.Start || _[o1oo0O]() != C.Start[o1oo0O]()) if (this.isFixedDate(C));
		else {
			C.Start = this.Calendar.getWorkingDate(_, true);
			C.Finish = this.Calendar.getFinish(C.Start, C.Duration)
		}
		this.O00lol(C);
		var B = (C.Start ? C.Start[o1oo0O]() : "") + "-" + (C.Finish ? C.Finish[o1oo0O]() : "");
		if (C.__orderTime != B) {
			C.__orderTime = B;
			if (C.SuccessorTasks.length > 0) this.l110(C);
			var D = C[this.nodesField];
			if (D) this.OOOO11(C)
		}
	},
	OOOO11: function(B) {
		var C = B[this.nodesField];
		if (C == null) return;
		for (var $ = 0, A = C.length; $ < A; $++) {
			var _ = C[$];
			delete this.forTasks[_.UID];
			this.O1o01(_)
		}
	},
	l110: function(B) {
		var $ = B.SuccessorTasks;
		if (!$) return;
		for (var _ = $.length - 1; _ >= 0; _--) {
			var A = $[_];
			this.O1o01(A)
		}
	},
	getAllPredecessorLinks: function(C) {
		var D = (C.PredecessorLink || []).clone(),
			_ = this.ancestorTasks[C.UID];
		for (var $ = 0, B = _.length; $ < B; $++) {
			var A = _[$];
			if (this.isFixedDate(A) == false && A.PredecessorLink) D.addRange(A.PredecessorLink)
		}
		return D
	},
	oOO0: function(G) {
		var H = null,
			A = this.getAllPredecessorLinks(G);
		if (A == null || A.length == 0) return H;
		var F = G.Duration;
		for (var D = 0, C = A.length; D < C; D++) {
			var B = A[D],
				$ = this._TaskUIDs[B.PredecessorUID];
			if ($ == null) continue;
			if (!$.__orderTime) return null;
			if ($.Summary != 0) this.orderSummary($);
			var _ = $.Start,
				E = $.Finish,
				J = $.Duration;
			if (!_ || !E) continue;
			switch (B.Type) {
			case 0:
				_ = this.Calendar.getStart(E, F);
				break;
			case 1:
				if (J == 0) _ = new Date(E[o1oo0O]());
				else _ = this.Calendar.getWorkingDate(this.addDate(E, 1), true);
				break;
			case 2:
				E = this.Calendar.getWorkingDate(this.addDate(_, -1), false);
				_ = this.Calendar.getStart(E, F);
				break;
			case 3:
				_ = _;
				break
			}
			var I = B.LinkLag || 0;
			if (I != 0) _ = this.Calendar.getWorkingStartDate(_, I);
			if (H == null || H[o1oo0O]() < _[o1oo0O]()) H = _
		}
		return H
	},
	O00lol: function(J) {
		if (J.Start == null || J.Finish == null) return;
		var _ = J.Start,
			H = J.Finish,
			L = J.Duration,
			G = J.ConstraintDate,
			A = parseInt(J.ConstraintType);
		if (A != 0 && A != 1 && G == null);
		else switch (A) {
		case 0:
			break;
		case 1:
			break;
		case 2:
			_ = this.Calendar.getWorkingDate(G, true);
			break;
		case 3:
			H = this.Calendar.getWorkingDate(G, false);
			_ = this.Calendar.getStart(H, L);
			break;
		case 4:
			if (_[o1oo0O]() < G[o1oo0O]()) _ = this.Calendar.getWorkingDate(G, true);
			break;
		case 5:
			if (_[o1oo0O]() > G[o1oo0O]()) {
				_ = this.Calendar.getWorkingDate(G, false);
				_ = mini.clearTime(_)
			}
			break;
		case 6:
			var C = mini.clearTime(H);
			if (C[o1oo0O]() < G[o1oo0O]()) {
				H = this.Calendar.getWorkingDate(G, true);
				H = new Date(H.getFullYear(), H.getMonth(), H.getDate(), 23, 59, 59);
				_ = this.Calendar.getStart(H, L)
			}
			break;
		case 7:
			var E = mini.clearTime(H);
			if (E[o1oo0O]() > G[o1oo0O]()) {
				H = this.Calendar.getWorkingDate(G, false);
				_ = this.Calendar.getStart(H, L)
			}
			break
		}
		H = this.Calendar.getFinish(_, L);
		var $ = this.l00OoO(J),
			K = $.Start,
			D = $.Finish;
		if (_[o1oo0O]() < K[o1oo0O]()) _ = K;
		if (H[o1oo0O]() > D[o1oo0O]()) {
			H = D;
			_ = this.Calendar.getStart(H, L);
			if (_[o1oo0O]() < K[o1oo0O]()) {
				J.Duration = L = this.Calendar.getWorkingDays(K, H);
				_ = K
			}
		}
		if (_ != null && H != null) if (J.Start == null || J.Finish == null || J.Start[o1oo0O]() != _[o1oo0O]() || J.Finish[o1oo0O]() != H[o1oo0O]()) {
			var B = J.Start,
				I = J.Finish;
			J.Start = this.Calendar.getWorkingDate(_, true);
			J.Finish = this.Calendar.getFinish(J.Start, L);
			var F = J.PredecessorLink;
			if (F != null && F.length > 0) {
				J.Conflict = 1;
				if (J.Start[o1oo0O]() >= B[o1oo0O]()) J.Conflict = 0
			}
		}
		if (G && J.Start && J.Finish) switch (A) {
		case 0:
			break;
		case 1:
			break;
		case 2:
			if (J.Start[o1oo0O]() != G[o1oo0O]()) J.Conflict = 1;
			break;
		case 3:
			break;
		case 4:
			if (J.Start[o1oo0O]() < G[o1oo0O]()) J.Conflict = 1;
			break;
		case 5:
			break;
		case 6:
			break;
		case 7:
			break
		}
	},
	minDate: new Date(1900, 0, 1),
	maxDate: new Date(9999, 0, 1),
	l00OoO: function(J) {
		var I = this.limitDates[J.UID];
		if (I) return I;
		var _ = this.minDate,
			H = this.maxDate,
			E = this.ancestorTasks[J.UID];
		for (var F = 0, D = E.length; F < D; F++) {
			var C = E[F],
				A = C.FixedDate;
			if (A != 0 && C.Start != null && C.Finish != null) {
				_ = C.Start;
				H = C.Finish;
				break
			} else {
				var G = mini.clearTime(C.ConstraintDate),
					B = parseInt(C.ConstraintType);
				if (B != 0 && B != 1 && G == null) continue;
				switch (B) {
				case 0:
					break;
				case 4:
					_ = this.Calendar.getWorkingDate(G, true);
					break;
				case 7:
					H = this.Calendar.getWorkingDate(G, false);
					break
				}
			}
		}
		var $ = {
			Start: _,
			Finish: H
		};
		this.limitDates[J.UID] = $;
		return $
	},
	OO11o: function() {
		var $ = this.project.tasks.root[this.nodesField];
		this.Olool1($)
	},
	orderSummary: function($) {
		this.Olool1([$])
	},
	Olool1: function(E) {
		var A = null,
			C = null,
			G = 0;
		for (var H = 0, F = E.length; H < F; H++) {
			var K = E[H],
				$ = K[this.nodesField];
			if ($ != null && $.length > 0) {
				var D = this.Olool1($),
					L = D.Start,
					_ = D.Finish;
				if (K.FixedDate == 0 && L && _) {
					K.Work = D.Work;
					K.Start = L;
					K.Finish = _
				}
				if (K.Start && K.Finish) K.Duration = this.Calendar.getWorkingDays(K.Start, K.Finish);
				this.O00lol(K)
			}
			if (K.Start != null && K.Finish != null) {
				var B = K.Start,
					I = K.Finish;
				if (A == null || A[o1oo0O]() > B[o1oo0O]()) A = mini.cloneDate(B);
				if (C == null || C[o1oo0O]() < I[o1oo0O]()) C = mini.cloneDate(I)
			}
			if (!isNaN(K.Work)) G += parseInt(K.Work)
		}
		var J = {
			Start: A,
			Finish: C,
			Work: G
		};
		return J
	}
};
mini.RadioButtonList = o1ol1o, mini.ValidatorBase = looool, mini.AutoComplete = Ool1oo, mini.CheckBoxList = O1Oo0O, mini.DataBinding = OooOlO, mini.OutlookTree = lO1o0O, mini.OutlookMenu = ol0Ol0, mini.TextBoxList = oo1O0l, mini.TimeSpinner = l11ol0, mini.ListControl = lo0OO0, mini.PagerGantt = OlllOl, mini.OutlookBar = l010o0, mini.FileUpload = Oo10o1, mini.TreeSelect = O11O1l, mini.DatePicker = loooOo, mini.ButtonEdit = OoO1OO, mini.MenuButton = olll0O, mini.GanttView = oO1o11, mini.SuperTree = OOl010, mini.SuperGrid = ol0Ol1, mini.PopupEdit = Oolllo, mini.Component = l1l11l, mini.TreeGrid = o11OoO, mini.DataGrid = oOl100, mini.MenuItem = O0lOOO, mini.Splitter = OO0l1o, mini.HtmlFile = oOO0lo, mini.Calendar = O1olOO, mini.ComboBox = llo001, mini.TextArea = o101o1, mini.Password = looloO, mini.CheckBox = o00OoO, mini.Project = lO0111, mini.DataSet = l1111l, mini.Include = o0lOo, mini.Spinner = l0olll, mini.ListBox = o011lo, mini.TextBox = o0O0oO, mini.Control = l1lloO, mini.RGantt = O1lloo, mini.Layout = Oo1O0l, mini.Window = O1l1oO, mini.Lookup = l0l10l, mini.Button = O0oOo1, mini.Hidden = l1lO0l, mini.Gantt = oll0ll, mini.Pager = o00Oll, mini.Panel = oO010O, mini.Popup = ol0o01, mini.Tree = Oo01O0, mini.Menu = oo10l1, mini.Tabs = O0olO1, mini.Fit = ooo0ol, mini.Box = lloo1o;
mini.locale = "en-US";
mini.dateInfo = {
	monthsLong: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
	monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
	daysLong: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
	daysShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
	quarterLong: ["\u4e00\u5b63\u5ea6", "\u4e8c\u5b63\u5ea6", "\u4e09\u5b63\u5ea6", "\u56db\u5b63\u5ea6"],
	quarterShort: ["Q1", "Q2", "Q2", "Q4"],
	halfYearLong: ["\u4e0a\u534a\u5e74", "\u4e0b\u534a\u5e74"],
	patterns: {
		"d": "yyyy-M-d",
		"D": "yyyy\u5e74M\u6708d\u65e5",
		"f": "yyyy\u5e74M\u6708d\u65e5 H:mm",
		"F": "yyyy\u5e74M\u6708d\u65e5 H:mm:ss",
		"g": "yyyy-M-d H:mm",
		"G": "yyyy-M-d H:mm:ss",
		"m": "MMMd\u65e5",
		"o": "yyyy-MM-ddTHH:mm:ss.fff",
		"s": "yyyy-MM-ddTHH:mm:ss",
		"t": "H:mm",
		"T": "H:mm:ss",
		"U": "yyyy\u5e74M\u6708d\u65e5 HH:mm:ss",
		"y": "yyyy\u5e74MM\u6708"
	},
	tt: {
		"AM": "\u4e0a\u5348",
		"PM": "\u4e0b\u5348"
	},
	ten: {
		"Early": "\u4e0a\u65ec",
		"Mid": "\u4e2d\u65ec",
		"Late": "\u4e0b\u65ec"
	},
	today: "\u4eca\u5929",
	clockType: 24
};
if (O1olOO) mini.copyTo(O1olOO.prototype, {
	firstDayOfWeek: 0,
	todayText: "\u4eca\u5929",
	clearText: "\u6e05\u9664",
	okText: "\u786e\u5b9a",
	cancelText: "\u53d6\u6d88",
	daysShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
	format: "yyyy\u5e74MM\u6708",
	timeFormat: "H:mm"
});
for (var id in mini) {
	var clazz = mini[id];
	if (clazz && clazz[O0lOl0] && clazz[O0lOl0].isControl) clazz[O0lOl0][loolOl] = "\u4e0d\u80fd\u4e3a\u7a7a"
}
if (mini.VTypes) mini.copyTo(mini.VTypes, {
	uniqueErrorText: "\u5b57\u6bb5\u4e0d\u80fd\u91cd\u590d",
	requiredErrorText: "\u4e0d\u80fd\u4e3a\u7a7a",
	emailErrorText: "\u8bf7\u8f93\u5165\u90ae\u4ef6\u683c\u5f0f",
	urlErrorText: "\u8bf7\u8f93\u5165URL\u683c\u5f0f",
	floatErrorText: "\u8bf7\u8f93\u5165\u6570\u5b57",
	intErrorText: "\u8bf7\u8f93\u5165\u6574\u6570",
	dateErrorText: "\u8bf7\u8f93\u5165\u65e5\u671f\u683c\u5f0f {0}",
	maxLengthErrorText: "\u4e0d\u80fd\u8d85\u8fc7 {0} \u4e2a\u5b57\u7b26",
	minLengthErrorText: "\u4e0d\u80fd\u5c11\u4e8e {0} \u4e2a\u5b57\u7b26",
	maxErrorText: "\u6570\u5b57\u4e0d\u80fd\u5927\u4e8e {0} ",
	minErrorText: "\u6570\u5b57\u4e0d\u80fd\u5c0f\u4e8e {0} ",
	rangeLengthErrorText: "\u5b57\u7b26\u957f\u5ea6\u5fc5\u987b\u5728 {0} \u5230 {1} \u4e4b\u95f4",
	rangeCharErrorText: "\u5b57\u7b26\u6570\u5fc5\u987b\u5728 {0} \u5230 {1} \u4e4b\u95f4",
	rangeErrorText: "\u6570\u5b57\u5fc5\u987b\u5728 {0} \u5230 {1} \u4e4b\u95f4"
});
if (o00Oll) mini.copyTo(o00Oll.prototype, {
	firstText: "\u9996\u9875",
	prevText: "\u4e0a\u4e00\u9875",
	nextText: "\u4e0b\u4e00\u9875",
	lastText: "\u5c3e\u9875",
	pageInfoText: "\u6bcf\u9875 {0} \u6761,\u5171 {1} \u6761"
});
if (oOl100) mini.copyTo(oOl100.prototype, {
	emptyText: "\u6ca1\u6709\u8fd4\u56de\u7684\u6570\u636e"
});
if (Oo10o1) Oo10o1[O0lOl0].buttonText = "\u6d4f\u89c8...";
if (oOO0lo) oOO0lo[O0lOl0].buttonText = "\u6d4f\u89c8...";
if (window.oll0ll) {
	oO1o11.ShortWeeks = ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"];
	oO1o11.LongWeeks = ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"];
	oll0ll.PredecessorLinkType = [{
		ID: 0,
		Name: "\u5b8c\u6210-\u5b8c\u6210(FF)",
		Short: "FF"
	}, {
		ID: 1,
		Name: "\u5b8c\u6210-\u5f00\u59cb(FS)",
		Short: "FS"
	}, {
		ID: 2,
		Name: "\u5f00\u59cb-\u5b8c\u6210(SF)",
		Short: "SF"
	}, {
		ID: 3,
		Name: "\u5f00\u59cb-\u5f00\u59cb(SS)",
		Short: "SS"
	}];
	oll0ll.ConstraintType = [{
		ID: 0,
		Name: "\u8d8a\u65e9\u8d8a\u597d"
	}, {
		ID: 1,
		Name: "\u8d8a\u665a\u8d8a\u597d"
	}, {
		ID: 2,
		Name: "\u5fc5\u987b\u5f00\u59cb\u4e8e"
	}, {
		ID: 3,
		Name: "\u5fc5\u987b\u5b8c\u6210\u4e8e"
	}, {
		ID: 4,
		Name: "\u4e0d\u5f97\u65e9\u4e8e...\u5f00\u59cb"
	}, {
		ID: 5,
		Name: "\u4e0d\u5f97\u665a\u4e8e...\u5f00\u59cb"
	}, {
		ID: 6,
		Name: "\u4e0d\u5f97\u65e9\u4e8e...\u5b8c\u6210"
	}, {
		ID: 7,
		Name: "\u4e0d\u5f97\u665a\u4e8e...\u5b8c\u6210"
	}];
	mini.copyTo(oll0ll, {
		ID_Text: "\u6807\u8bc6\u53f7",
		Name_Text: "\u4efb\u52a1\u540d\u79f0",
		PercentComplete_Text: "\u8fdb\u5ea6",
		Duration_Text: "\u5de5\u671f",
		Start_Text: "\u5f00\u59cb\u65e5\u671f",
		Finish_Text: "\u5b8c\u6210\u65e5\u671f",
		Critical_Text: "\u5173\u952e\u4efb\u52a1",
		PredecessorLink_Text: "\u524d\u7f6e\u4efb\u52a1",
		Work_Text: "\u5de5\u65f6",
		Priority_Text: "\u91cd\u8981\u7ea7\u522b",
		Weight_Text: "\u6743\u91cd",
		OutlineNumber_Text: "\u5927\u7eb2\u5b57\u6bb5",
		OutlineLevel_Text: "\u4efb\u52a1\u5c42\u7ea7",
		ActualStart_Text: "\u5b9e\u9645\u5f00\u59cb\u65e5\u671f",
		ActualFinish_Text: "\u5b9e\u9645\u5b8c\u6210\u65e5\u671f",
		WBS_Text: "WBS",
		ConstraintType_Text: "\u9650\u5236\u7c7b\u578b",
		ConstraintDate_Text: "\u9650\u5236\u65e5\u671f",
		Department_Text: "\u90e8\u95e8",
		Principal_Text: "\u8d1f\u8d23\u4eba",
		Assignments_Text: "\u8d44\u6e90\u540d\u79f0",
		Summary_Text: "\u6458\u8981\u4efb\u52a1",
		Task_Text: "\u4efb\u52a1",
		Baseline_Text: "\u6bd4\u8f83\u57fa\u51c6",
		LinkType_Text: "\u94fe\u63a5\u7c7b\u578b",
		LinkLag_Text: "\u5ef6\u9694\u65f6\u95f4",
		From_Text: "\u4ece",
		To_Text: "\u5230",
		Goto_Text: "\u8f6c\u5230\u4efb\u52a1",
		UpGrade_Text: "\u5347\u7ea7",
		DownGrade_Text: "\u964d\u7ea7",
		Add_Text: "\u65b0\u589e",
		Edit_Text: "\u7f16\u8f91",
		Remove_Text: "\u5220\u9664",
		Move_Text: "\u79fb\u52a8",
		ZoomIn_Text: "\u653e\u5927",
		ZoomOut_Text: "\u7f29\u5c0f",
		Deselect_Text: "\u53d6\u6d88\u9009\u62e9",
		Split_Text: "\u62c6\u5206\u4efb\u52a1"
	})
}

$(function() {
 var WinAlerts = window.alert;
   window.alert = function (e) {
       if (e != null && e.indexOf("www.miniui.com") > -1)
   {
       //禁止alert
   }
   else
   {
       WinAlerts (e);
   }
   
};
})