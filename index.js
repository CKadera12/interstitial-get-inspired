(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,750,480],[0,482,320,480]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.interstitialgetinspiredtable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.interstitialtracejpgcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whiterectanglefade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ege2AqlMAAAhVJMA9tAAAMAAABVJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whiterectanglefade, new cjs.Rectangle(-197.4,-272.4,395,545), null);


(lib.recipes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Recipes", "44px 'Cooper BT for WFM Medium'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 56;
	this.text.lineWidth = 164;
	this.text.parent = this;
	this.text.setTransform(0,-26.8);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.recipes, new cjs.Rectangle(-101,-45.8,206,94), null);


(lib.more = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("More", "44px 'Cooper BT for WFM Medium'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 56;
	this.text.lineWidth = 108;
	this.text.parent = this;
	this.text.setTransform(0,-26.8);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.more, new cjs.Rectangle(-73,-45.8,150,94), null);


(lib.makedeliciousmemories = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("MAKE DELICIOUS MEMORIES", "20px 'Rescue'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 268;
	this.text.parent = this;
	this.text.setTransform(0,-9.3);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.makedeliciousmemories, new cjs.Rectangle(-153,-28.3,310,60), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.holidaytips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Holiday Tips,", "44px 'Cooper BT for WFM Medium'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 56;
	this.text.lineWidth = 272;
	this.text.parent = this;
	this.text.setTransform(0,-28.1);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaytips, new cjs.Rectangle(-155,-47.1,314,98), null);


(lib.getinspiredtable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.interstitialgetinspiredtable();
	this.instance.parent = this;
	this.instance.setTransform(-375,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredtable, new cjs.Rectangle(-375,-240,750,480), null);


(lib.getinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("GET INSPIRED", "14px 'Avenir Next For WFM Medium'", "#D63900");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspired, new cjs.Rectangle(-52,-10.3,104,20.6), null);


(lib.ctarectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqeCqIAAlTIU+AAIAAFTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectangle, new cjs.Rectangle(-67.1,-17,134.3,34), null);


(lib.blackrectangleinbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgkQMAu3AAAMAAABIhMgu3AAAg");
	this.shape.setTransform(0,0,1.063,1.032);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.5,-240.5,321,481);


(lib.blackrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EghRAubMAAAhc1MBCkAAAMAAABc1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackrectangle, new cjs.Rectangle(-213,-297,426.1,594.2), null);


(lib.and = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("and", "44px 'Cooper BT for WFM Medium'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 56;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-26.8);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.and, new cjs.Rectangle(-69,-45.8,142,94), null);


// stage content:
(lib.interstitialgetinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_48 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(131).call(this.frame_179).wait(6));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(160.4,240.1,1.553,0.731,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(185));

	// black-rectangle
	this.instance = new lib.blackrectangleinbox("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(185));

	// fade-from-white
	this.instance_1 = new lib.whiterectanglefade();
	this.instance_1.parent = this;
	this.instance_1.setTransform(172.5,253.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(176));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4rLaIAAocMA1HAAAIAAIcg");
	mask.setTransform(182,73);

	// make-delicious-memories
	this.instance_2 = new lib.makedeliciousmemories();
	this.instance_2.parent = this;
	this.instance_2.setTransform(160,118);
	this.instance_2.alpha = 0;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({x:-94.6,y:115.4},0).to({x:170,y:118,alpha:1},10,cjs.Ease.get(1)).to({x:160},8,cjs.Ease.get(1)).wait(113));

	// holiday tips
	this.instance_3 = new lib.holidaytips();
	this.instance_3.parent = this;
	this.instance_3.setTransform(162,156.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(72).to({alpha:1},10).wait(103));

	// recipes
	this.instance_4 = new lib.recipes();
	this.instance_4.parent = this;
	this.instance_4.setTransform(115.1,205.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82).to({alpha:1},10).wait(93));

	// and
	this.instance_5 = new lib.and();
	this.instance_5.parent = this;
	this.instance_5.setTransform(248.1,205.7);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(92).to({alpha:1},10).wait(83));

	// more
	this.instance_6 = new lib.more();
	this.instance_6.parent = this;
	this.instance_6.setTransform(160,255.7);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({alpha:1},10).wait(77));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AirbKIAAocIXRAAIAAIcg");
	mask_1.setTransform(131.8,173.8);

	// get-inspired
	this.instance_7 = new lib.getinspired();
	this.instance_7.parent = this;
	this.instance_7.setTransform(160,303.9);
	this.instance_7.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(112).to({x:3},0).to({x:170,alpha:1},10,cjs.Ease.get(1)).to({x:160},8,cjs.Ease.get(1)).wait(55));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AqfalIAApsMAjfAAAIAAJsg");
	mask_2.setTransform(160,170.1);

	// cta-rectangle
	this.instance_8 = new lib.ctarectangle();
	this.instance_8.parent = this;
	this.instance_8.setTransform(160,304.8);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(112).to({x:3},0).to({x:170,alpha:1},10,cjs.Ease.get(1)).to({x:160},8,cjs.Ease.get(1)).wait(55));

	// black-fade
	this.instance_9 = new lib.blackrectangle();
	this.instance_9.parent = this;
	this.instance_9.setTransform(160.2,239.7,0.75,0.807);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({alpha:0.301},10).wait(146));

	// trace
	this.instance_10 = new lib.interstitialtracejpgcopy();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(185));

	// table
	this.instance_11 = new lib.getinspiredtable();
	this.instance_11.parent = this;
	this.instance_11.setTransform(375,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:-55},59,cjs.Ease.sineInOut).wait(126));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(135.1,221.1,775,545);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;