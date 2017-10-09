(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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
	this.initialize(img.interstitialgetinspiredtable);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,480);// helper functions:

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQB1IgZgEIgHAEIgGACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAAKASIAJAOQAHAJALAFQAMAFANAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgSgMgNQgNgPAAgWQAAgdAUgSQAVgTAhAAIAPABIAQADIAKgFIAIgBQALAAAKASQALASgBATQAAAIgDAFQgEAEgGAAQgFAAgFgEQgFgEgHgLQgJgOgIgGQgJgFgNAAQgMAAgIAHQgJAHABAMQAAALAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAVQgZAWgjAAg");
	this.shape.setTransform(71.3,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgwQAAg0AhgjQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgDAAgHQAAgFAEgEQAEgDAHAAIAvAAIALgBQADgDAAgFQAAgWgPgOQgOgPgVAAQgbAAgNAXQgNAYAAAhQAAAiASAaQASAaAcAAQARAAALgDQAMgFALgHIAIgGQALgKAHABQAFAAADADQADADAAAFQAAAFgFAIQgGAIgKAHQgTARgTAHQgSAHgVAAQgwAAggghg");
	this.shape_1.setTransform(49.7,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhtCaQgMgDAAgKQAAgHAKgEIALgGQAFgFACgSQABgRAAg5IAAgkQAAg9gBgSQgDgSgFgDIgKgEQgOgEAAgIQAAgFAEgEQAEgEAJgDIAggKQAPgEAIAAQAGAAADADQADAEAAAHIAAALIAAAFIABABIAJgGIAJgGQAOgLAMgFQANgFANAAQAqAAAbAfQAbAfAAAxQAAA1geAjQgfAjguAAQgTAAgHgFQgHgGAAgJQAAgFADgDQAEgEAHAAIAFABIAIABQAZAAAPgVQAPgVAAgiQAAgngQgXQgRgYgZAAQgXAAgOANQgNANAAAiIAACPIABAXQABAJADADQADADAKADIAJADIAFAEIABAHQAAAIgNADQgNAEggAAQghAAgLgEg");
	this.shape_2.setTransform(23.8,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnChQgMgDAAgKQAAgIALgEIAGgCQAGgDACgIQADgHAAgSIAAgPIgBgTIAAgXQAAgkgBgJQgCgLgFgDIgKgDQgOgFAAgIQAAgEAEgEQAFgFAJgDIAigLIAXgEQAHgBACAFQADAEAAALIAAANIAAAKIgCA5IAAABIgBA4QAAAVACAKQACAIAFADIAIADQAMAFAAAJQAAAIgLADQgLAEgeAAQghAAgLgEgAgbhxQgKgIAAgMQAAgMALgKQAKgJAQAAQANAAAKAJQAKAIAAAMQAAAMgLAJQgKAIgPAAQgPAAgJgHg");
	this.shape_3.setTransform(4.6,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHBVQggghAAgwQAAg0AigjQAigiAyAAQAlAAAaATQAaAUAAAaQAAAKgHAHQgHAGgMAAQgLAAgHgFQgHgFgIgSQgHgRgJgGQgIgHgOABQgaAAgOATQgPATAAAjQAAAoAVAZQAVAZAfAAQAMAAAKgDQAKgDAIgFIAJgHQAMgKAHAAQAFAAADADQACADAAAFQAAAFgFAIQgEAIgIAGQgRAQgUAIQgTAHgWAAQgvAAggghg");
	this.shape_4.setTransform(-13.2,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgwQAAg0AhgjQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgDAAgHQAAgFAEgEQAEgDAHAAIAvAAIALgBQADgDAAgFQAAgWgPgOQgOgPgVAAQgbAAgNAXQgNAYAAAhQAAAiASAaQASAaAcAAQARAAALgDQAMgFALgHIAIgGQALgKAHABQAFAAADADQADADAAAFQAAAFgFAIQgGAIgKAHQgTARgTAHQgSAHgVAAQgwAAggghg");
	this.shape_5.setTransform(-36.9,5.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxBxQgWhIgQgPQgPgPgXAAQgSAAAAgOQAAgNAPAAQAlAAASgPQASgPAAgfQAAgegSgPQgSgOgjAAQgSAAgGACQgHACgCAHIgCATIgBAtIAABkIABBEQABAPAFAEIAKAEQAOAGAAAJQAAAKgNAEQgMADgkABQgjgBgNgDQgNgEAAgKQAAgJAOgGIAKgEQAFgFACgbQACgaAAhHIgBhVQgCgggDgFQgDgDgMgFQgMgFAAgJQAAgIAHgEQAHgDAOAAIAyAAIAtgBIAkgCQAxAAAaAWQAaAUAAApQAAAdgRAWQgRAWggAJIAAACQAZAEAOAPQANAQALAkIAGAXQAJAjANAAIAHgBIAIAAQAEAAADAEQAEADAAAFQAAAKgNAHQgNAGgVAAQgtABgPg1g");
	this.shape_6.setTransform(-64.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.recipes, new cjs.Rectangle(-84,-28.8,168.1,57.7), null);


(lib.more = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgwQAAg0AhgjQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgDAAgHQAAgFAEgEQAEgDAHAAIAvAAIALgBQADgDAAgFQAAgWgPgOQgOgPgVAAQgbAAgNAXQgNAYAAAhQAAAiASAaQASAaAcAAQARAAALgDQAMgFALgHIAIgGQALgKAHABQAFAAADADQADADAAAFQAAAFgFAIQgGAIgKAHQgTARgTAHQgSAHgVAAQgwAAggghg");
	this.shape.setTransform(41.7,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEBwQgLgDAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgTIAAgNQAAgpgBgMQgCgNgFgDIgLgEQgNgEAAgIQAAgFAEgEQAEgEAKgDIAfgKIAUgEQALAAADAeIABAFIABABQAMgTAMgJQANgKANAAQAPAAAKAKQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgCIgKgHIgFgJQgCgGgDAAQgQAAgGAWQgFAVAABEQAAAUACAKQACAKAGADIAJADQAOAEAAAJQAAAJgNADQgMAEgeAAQgjAAgLgEg");
	this.shape_1.setTransform(21.7,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhSBVQgggiAAgyQAAgyAigiQAigiAxAAQAxAAAfAgQAgAgAAAxQAAA0giAiQghAkgxAAQgxAAggghgAgrhDQgNASAAAfQAAAsATAeQATAeAaAAQAWAAAOgSQAOgTAAgfQAAgrgTgeQgUgegaAAQgWAAgOASg");
	this.shape_2.setTransform(-0.1,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABVCfQgNgDAAgLQAAgIAOgGIAKgFQAEgDACgKQABgKAAgfIAAgLIAAhgIgBg5IgcBKQhDCugOAAQgIAAgNgYQgMgXghhLIgwhxIgCBZIgBA9IABAqQACAKADADIAKAFQAOAFAAAJQAAAKgLAEQgMAEgcAAQgZAAgLgEQgLgEAAgKQAAgIAMgFQAMgGACgFQADgLAEg6QACg6AAhGIAAgIQAAgYgBgIQgCgIgFgDIgLgEQgPgGAAgJQAAgKALgCQAKgEAhAAIAgAAIAJACQAEAEAQAoIANAgIAGAQQA3CHAFAAQAEAAAVgxQAUgvAchQIAEgNQAIgZAHgIQAEgEAJgCIAfgBQAeAAAKAEQALACAAAKQAAAKgOADIgGAEQgHADgCAJQgCAJgBAiIADCBQADA6ACAIQABAGAKADIAFACIAJAGQACADAAAEQAAALgMADQgNAEgmAAQgiAAgLgEg");
	this.shape_3.setTransform(-33.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.more, new cjs.Rectangle(-56,-28.8,112,57.7), null);


(lib.makedeliciousmemories = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcA+QgOgGgKgJIgBgDIgBgCIACgEIAEgFIAEgDIAFgBQACAAAEACIAIAGIALAFQAGACAIAAIAJAAIAKgDQAFgCADgEQADgEAAgGQAAgFgEgDQgDgDgGgCIgNgCIgOgCIgPgEQgIgCgFgDQgGgDgEgHQgDgGAAgKQAAgKAFgHQAFgIAHgEQAIgFAKgCQAJgDAIAAIAMABIANADIAMAFQAGAEAEAEIABACIAAACQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABIgEAEIgFADIgFABIgDgBQgHgGgIgDQgHgEgJAAIgIABIgJADQgEACgDADQgDAEAAAFQAAAHAHADQAGADAJACIATACQAKABAJAEQAKAEAGAGQAGAHAAANQAAALgFAIQgGAIgIAFQgIAGgKACQgKADgJAAQgNAAgOgFg");
	this.shape.setTransform(127.7,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBAIgEgCQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAh1QAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAEgBIBZAAIACACIACAEIAAAFIAAAEIgBAEIgDAEIhDAAIgDACIgBADIAAASQAAAAAAABQAAABAAAAQAAABAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIApAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAIABAFIAAAFIAAADQAAAFgFACIgpAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIAAAUQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIBBAAQADACAAAFIAAAEIAAAFIgBAEQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(116,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABCIgEAAQgFAAgCgEIAAh7QAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAIADgBIAFAAIAEAAQAFAAACAEIAAB7IgDACIgFACg");
	this.shape_2.setTransform(106.3,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgBBIgDgBIgDgBIgBgBIgWgiIgDgFQgDgBgDAAIgQAAQgCAAgDACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIAAAgQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgFACIgFAAIgFAAQgDAAgCgCQgCgBAAgEIAAh1QAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIADgBIA2AAQAKAAAIADQAJADAGAGQAGAFAEAIQADAIAAAKQAAALgEAHQgEAGgFAEIgJAHQgEACAAADIAAADIAFAHIAIAKIAGALQADAEAAACIgBAEIgFADIgEACIgFAAgAgagoQgDABAAAEIAAAcQAAAEADACQADABADAAIAaAAQAFAAAEgBQAEgBAEgDQADgCABgEQACgEABgGQgBgKgGgGQgEgCgEgBQgEgCgFAAIgaAAQgDAAgDACg");
	this.shape_3.setTransform(97.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBBIgNgDQgGgDgGgEIgKgIQgJgIgGgNIgEgNIAAgNIAAgNIAEgMQAGgMAJgJQAFgFAFgDQAGgEAGgDIANgDQAGgBAHAAQAHAAAHABQAHABAFACQANAGAKAJQAJAJAFAMQAFAMAAANQABAHgCAGIgEANQgFANgJAIQgKAJgNAGIgMADIgOABIgNgBgAgPgoQgIAEgHAFQgGAGgEAIQgDAJAAAIQAAAJADAJQAEAHAGAGQAHAHAIADQAHADAIAAQAJAAAHgDQAIgDAHgHQAFgGAEgHQAEgJgBgJQABgIgEgJQgEgIgFgGQgHgFgIgEQgHgDgJAAQgIAAgHADg");
	this.shape_4.setTransform(82.8,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArBBIgGgBQgEgCAAgDIAAg6IgBgDIgDgBQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABIgVAgQgCADgDAAIgEgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgSggQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAAAAAIgBADIAAA4QgCAFgEABIgIABIgDAAIgDgCIgDgCIgBgDIAAh0QACgDADgBIAHgBIAFABQAAAAABABQAAAAABAAQAAABABAAQAAAAAAABIAfAzQACADADABIAEgBIADgDIAfgyQADgFAGgBIAGABQACABACADIAAB1QAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgDACIgFABg");
	this.shape_5.setTransform(68.1,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrBAIgEgCQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAh1QAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIADgBIBZAAIADACIACAEIAAAFIAAAEIgBAEIgEAEIhBAAIgEACIgCADIAAASQAAAAABABQAAABAAAAQAAABAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIAqAAQAAAAAAAAQABABAAAAQABAAAAAAQAAABABAAIABAFIAAAFIAAADQAAAFgEACIgqAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIAAAUQAAAAABABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIBAAAQAEACABAFIAAAEIAAAFIgCAEQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_6.setTransform(55.4,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AArBBIgGgBQgEgCAAgDIAAg6IgBgDIgDgBQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABIgVAgQgCADgDAAIgEgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgSggQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgBADIAAA4QgCAFgEABIgIABIgDAAIgDgCIgDgCIgBgDIAAh0QACgDADgBIAHgBIAFABQAAAAABABQAAAAABAAQAAABABAAQAAAAAAABIAfAzQACADADABIAEgBIADgDIAfgyQADgFAGgBIAGABQACABACADIAAB1QAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgDACIgFABg");
	this.shape_7.setTransform(41.4,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcA+QgOgGgKgJIgBgDIgBgCIACgEIAEgFIAEgDIAFgBQACAAAEACIAIAGIALAFQAGACAIAAIAJAAIAKgDQAFgCADgEQADgEAAgGQAAgFgEgDQgDgDgGgCIgNgCIgOgCIgPgEQgIgCgFgDQgGgDgEgHQgDgGAAgKQAAgKAFgHQAFgIAHgEQAIgFAKgCQAJgDAIAAIAMABIANADIAMAFQAGAEAEAEIABACIAAACQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABIgEAEIgFADIgFABIgDgBQgHgGgIgDQgHgEgJAAIgIABIgJADQgEACgDADQgDAEAAAFQAAAHAHADQAGADAJACIATACQAKABAJAEQAKAEAGAGQAGAHAAANQAAALgFAIQgGAIgIAFQgIAGgKACQgKADgJAAQgNAAgOgFg");
	this.shape_8.setTransform(22.6,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVA+QgKgEgIgHQgIgIgEgKQgCgEgCgGIgBgLIAAgjIAAgjQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAFgCIAEgBIAFAAIAFACQABAAAAABQABAAAAABQABAAAAABQAAAAAAABIAABBQAAAIACAHQACAHAFAEQAEAGAGADQAGADAHAAQAIAAAHgDQAFgDAFgFQAEgGACgGQACgHAAgIIAAhAQABgEACgCIAGgBIAEgBIAFABIAEACQAAABABAAQAAABAAAAQAAABAAAAQABABAAABIAABGIgCALQgBAGgCAEQgFAKgHAIQgHAHgLAEQgKAFgMAAQgLAAgKgFg");
	this.shape_9.setTransform(9.3,-0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNBBIgNgDQgGgDgGgEIgKgIQgJgIgGgNIgEgNIAAgNIAAgNIAEgMQAGgMAJgJQAFgFAFgDQAGgEAGgDIANgDQAGgBAHAAQAHAAAGABQAIABAFACQANAGAKAJQAJAJAFAMQAFAMAAANQABAHgCAGIgEANQgFANgJAIQgKAJgNAGIgNADIgNABIgNgBgAgPgoQgIAEgHAFQgGAGgEAIQgDAJAAAIQAAAJADAJQAEAHAGAGQAHAHAIADQAHADAIAAQAJAAAHgDQAIgDAHgHQAFgGAEgHQAEgJgBgJQABgIgEgJQgEgIgFgGQgHgFgIgEQgHgDgJAAQgIAAgHADg");
	this.shape_10.setTransform(-5.4,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAABCIgEAAQgFAAgCgEIAAh7QAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAIADgBIAFAAIAEAAQAFAAACAEIAAB7IgDACIgFACg");
	this.shape_11.setTransform(-15.7,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFBBIgNgDQgGgDgFgEIgLgIIgIgJQgEgGgCgFQgGgMAAgPQAAgOAGgMQACgFAEgGIAIgJQAKgKAMgFIANgDIANgBIAOABQAIABAHADQAHADAGAFQAGAEAEAGIABADQAAAEgCABIgGAEIgDADQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgCAAgDgCIgHgHIgKgGQgGgCgJAAQgIAAgIADQgIAEgGAGQgGAGgDAIQgEAIAAAIQAAAJAEAIQADAIAGAGQAGAGAIADQAIAEAIAAQAKAAAIgEQAJgEAGgHIAFgBIAEABIAFAEIAEADIACAEIgBADQgFAGgGAFIgMAHIgOAEQgHABgIAAIgNgBg");
	this.shape_12.setTransform(-25.4,-0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAABCIgEAAQgFAAgCgEIAAh7QAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAFgBIADAAIAFAAQAFAAACAEIAAB7IgDACIgEACg");
	this.shape_13.setTransform(-34.9,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsBBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAIgBgEIAAh0QAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAEgCIAEAAIAFAAQADAAADABQACABACAEIAABaIAAAEIACADQAEAEAEAAIA6AAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIACADIABAFIAAAEQAAAEgBACQgCADgFAAg");
	this.shape_14.setTransform(-43.2,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgrBAIgEgCQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAh1QAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIADgBIBZAAIADACIACAEIAAAFIAAAEIgBAEIgEAEIhBAAIgEACIgCADIAAASQABAAAAABQAAABAAAAQAAABAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIApAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAIABAFIAAAFIAAADQAAAFgFACIgpAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIAAAUQABAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIBAAAQAEACAAAFIAAAEIAAAFIgBAEQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_15.setTransform(-55.4,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag1BAIgFgBQgCgCAAgDIAAhzQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAwAAIAMABIANAEQANAEAJAIQAJAJAGAMQADAFABAHQABAHAAAGQAAAOgFAMQgDAGgEAFQgDAFgFAEQgFAFgFADIgMAFQgMAFgNAAgAgigmQgDACAAADIAABFQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAEACIAYAAQAIAAAIgDQAIgDAGgGQAHgFADgIQAEgHAAgKQAAgIgEgIQgDgIgHgFQgGgGgIgCQgIgDgIAAIgXAAQgDAAgCACg");
	this.shape_16.setTransform(-69,-0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgrBAIgEgCQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAh1QAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAEgBIBZAAIACACIACAEIAAAFIAAAEIgBAEIgDAEIhDAAIgDACIgBADIAAASQAAAAAAABQAAABAAAAQAAABAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIApAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAIABAFIAAAFIAAADQAAAFgFACIgpAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIAAAUQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIBBAAQADACAAAFIAAAEIAAAFIgBAEQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_17.setTransform(-87.9,-0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAeBCQgEgBgBgCIgggwQgBgCgDgBIgFgBIgHABQgDACAAAEIAAAoQAAAAgBABQAAABAAAAQAAABgBAAQAAABgBAAIgDACIgGABIgFAAQgGAAgBgGIAAh4IADgDIAEgBIAEgBIAFABQAFAAADAEIAAAoQAAADACACIAFABQADAAADgDIAjgrIADgBIADgBIADABIAGADIADADIACAEIgBADIgfAkIgCADIgBAEIABADIABADIAoA3IABABIAAACIgCAEIgDACIgGACIgEABg");
	this.shape_18.setTransform(-100.2,-0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAvBAIgHAAQgEgBgBgDIgHgSIgCgCIgEgCIgqAAIgCABIgCABIgCABIgBABIgHASIgCACIgEABIgEABIgDAAIgEAAIgEAAIgDgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIA0h4QAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIAEgBIAFABQAEAAABADIAyB3IAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgEABIgFABgAgBgTIgBABIgBADIgDAHIgDAHIgDAGIgDAGIAAADIABACQAAABAAAAQABAAAAAAQAAABABAAQAAAAAAAAIAZAAIADgBIABgDIgCgGIgFgJIgEgLIgDgHIgDgBg");
	this.shape_19.setTransform(-113.3,-0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AArBBIgGgBQgEgCAAgDIAAg6IgBgDIgDgBQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABIgVAgQgCADgDAAIgEgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgSggQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgBADIAAA4QgCAFgEABIgIABIgDAAIgDgCIgDgCIgBgDIAAh0QACgDADgBIAHgBIAFABQAAAAABABQAAAAABAAQAAABABAAQAAAAAAABIAfAzQACADADABIAEgBIADgDIAfgyQADgFAGgBIAGABQACABACADIAAB1QAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgDACIgFABg");
	this.shape_20.setTransform(-126.7,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.makedeliciousmemories, new cjs.Rectangle(-136,-11.3,272.1,22.7), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBFQgEgDAAgCIAEgJIAFgHIANgZQAFgLAAgFIgCgFIgHgFQgMgEgFgIQgGgIAAgNQAAgPAJgJQAKgKAOAAQAOAAAKANQAKANAAAVQAAAPgGAPQgGARgPAYIgLASQgFAFgEAAQgHAAgEgCg");
	this.shape.setTransform(130.3,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQB1IgZgEIgHAEIgGACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAAKASIAJAOQAHAJALAFQAMAFANAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgSgMgNQgNgPAAgWQAAgdAUgSQAVgTAhAAIAPABIAQADIAKgFIAIgBQALAAAKASQALASgBATQAAAIgDAFQgEAEgGAAQgFAAgFgEQgFgEgHgLQgJgOgIgGQgJgFgNAAQgMAAgIAHQgJAHABAMQAAALAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAVQgZAWgjAAg");
	this.shape_1.setTransform(113.6,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhtCaQgMgDAAgKQAAgHAKgEIALgGQAFgFACgSQABgRAAg5IAAgkQAAg9gBgSQgDgSgFgDIgKgEQgOgEAAgIQAAgFAEgEQAEgEAJgDIAggKQAPgEAIAAQAGAAADADQADAEAAAHIAAALIAAAFIABABIAJgGIAJgGQAOgLAMgFQANgFANAAQAqAAAbAfQAbAfAAAxQAAA1geAjQgfAjguAAQgTAAgHgFQgHgGAAgJQAAgFADgDQAEgEAHAAIAFABIAIABQAZAAAPgVQAPgVAAgiQAAgngQgXQgRgYgZAAQgXAAgOANQgNANAAAiIAACPIABAXQABAJADADQADADAKADIAJADIAFAEIABAHQAAAIgNADQgNAEggAAQghAAgLgEg");
	this.shape_2.setTransform(89.9,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnCiQgMgEAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgSIAAgYQAAgkgBgJQgCgLgFgCIgKgFQgOgEAAgHQAAgFAEgEQAFgEAJgEIAigLIAXgFQAHABACAEQADAFAAAJIAAAOIAAAKIgCA5IAAACIgBA3QAAAVACAJQACAJAFADIAIAEQAMAEAAAIQAAAJgLAEQgLADgeAAQghAAgLgDgAgbhxQgKgIAAgMQAAgNALgJQAKgJAQAAQANAAAKAIQAKAJAAAMQAAANgLAIQgKAJgPAAQgPAAgJgIg");
	this.shape_3.setTransform(70.7,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvChQgNgEAAgKQAAgJANgFQAMgEACgEQACgEACglIABhqIgBg8IgBgkQgBgGgEgCQgEgCgJAAIgKAAQgQAAgIADQgJAFgGAJIgHAOIgHAPIgHAIQgDADgFgBQgGABgEgHQgCgGAAgOQgBgdAIgSQAGgSAMAAIACAAQASACAbAAICFAAQAbAAASgCIADAAQAKAAAIASQAHASAAAdQAAAOgEAGQgDAHgHgBIgIgCIgGgIIgHgPIgHgOQgGgJgJgFQgJgDgPAAIgKAAQgJAAgEACQgEACAAAGIgCAkIgCA8IACBqQABAlADAEQACAEANAEQAMAFgBAJQABAKgNAEQgNADgjAAQgjAAgMgDg");
	this.shape_4.setTransform(49.8,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhoCVQgLgJAAgOQAAgMAIgIQAIgIAMAAIAJACIAHAFIAHAIQAFAJAFAAQALAAAMgQQAMgRAAgSQAAgTgQgkIgCgFIgkhPIgVgsQgEgIgNgFIgBgBQgHgDgDgDQgDgDAAgFQAAgKAMgEQAMgEAhAAQAhAAALAEQALAEAAAJIgBAHIgEAEIgIAEQgJADAAAEIAEARIATAtIARArQAGAKAEAAQACAAAFgKIAPgkIAQgtQAGgQAAgFQAAgHgNgHQgNgHAAgGQAAgIALgDQAKgEAaAAQAbAAAJAEQAKAEAAAJQAAAIgNADIgJADQgNAHgPAnIgGARIgdBIQglBegXAcQgYAdghAAQgRAAgLgKg");
	this.shape_5.setTransform(11.5,8.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoBrIgMgNIgKAGQgbASgcAAQghAAgUgTQgVgTAAgfQAAglAagTQAbgUAvAAQALAAAGADQAFAEAAAIQAAANgPAAQgWAAgOAKQgOAMAAASQAAATAMALQAMAKAUABQAVAAAKgKQAJgKAAgYIAAhVQAAgUgJgLQgIgLgPABQgLAAgKAEQgJAFgJAKIgFAHQgOARgPAAQgJAAgFgGQgGgGAAgKQAAgVAbgPQAagOApAAQAYAAASAHQASAGAKANQAHAJADANQADAPAAAfIAABIQAAANACAGQACAHAEABIAHADQAPADAAAIQAAAKgPAJQgQAJgUAAQgKAAgLgLg");
	this.shape_6.setTransform(-11.8,3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhiCJQgbgfAAgxQAAg3AfghQAegjAwAAIAQACQAHACAEAFQADAFABAGQAAAMgPAAIgGgBIgGAAQgaAAgOAUQgPAUAAAjQAAAmAQAYQARAYAZAAQAXAAANgNQANgNAAgZIAAg+IAAhnQAAgQgDgGQgDgHgIgDIgHgBQgNgEAAgIQAAgGAFgFQAFgEASgGIAZgIIAVgCQAIAAADAEQAEAEAAAKIgBAMIgCCLIACBeQABAWADADIAQAFQAMADAAAIQAAAKggALIgXAGIgSACQgFAAgEgEQgCgDAAgIIAAgLIgBgEIgBgCIgHAFIgKAHQgNALgMAEQgNAFgOAAQgrAAgageg");
	this.shape_7.setTransform(-36.7,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnCiQgMgEAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgSIAAgYQAAgkgBgJQgCgLgFgCIgKgFQgOgEAAgHQAAgFAEgEQAFgEAJgEIAigLIAXgFQAHABACAEQADAFAAAJIAAAOIAAAKIgCA5IAAACIgBA3QAAAVACAJQACAJAFADIAIAEQAMAEAAAIQAAAJgLAEQgLADgeAAQghAAgLgDgAgbhxQgKgIAAgMQAAgNALgJQAKgJAQAAQANAAAKAIQAKAJAAAMQAAANgLAIQgKAJgPAAQgPAAgJgIg");
	this.shape_8.setTransform(-57.4,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglCjQgMgEAAgKQAAgHAKgEIALgHQAEgDACgOIABgtIAAgjIAAgqIAAgRQAAg5gCgRQgCgQgFgDIgOgEQgOgFAAgIQAAgFAFgEQAEgEAQgFIAegJIAXgDQAHAAACAFQADADAAALIAAARQgDBRAABRIACBNQABAQAEAFIANAHQAKAEAAAIQAAAJgLAEQgMADgdAAQgiAAgKgDg");
	this.shape_9.setTransform(-70.4,-1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhSBUQggggAAgzQAAgyAigiQAigiAxAAQAxAAAfAgQAgAfAAAyQAAAzgiAjQghAkgxAAQgxAAgggigAgrhDQgNASAAAfQAAAsATAeQATAeAaAAQAWAAAOgTQAOgSAAgfQAAgrgTgeQgUgegaAAQgWAAgOASg");
	this.shape_10.setTransform(-89.1,3.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAyCgQgMgFAAgJQAAgKAOgFIAKgFQAEgDABgOIACg1IgBgfIgBgJQgDgFgLgBQgLgCgqAAIgwABQgMABgEADIgDAHIgBARIAAATIACA1QACAOADADIAKAFQAOAFAAAKQAAAJgMAFQgNADgkAAQgjAAgMgDQgNgFAAgJQAAgKAOgFIAKgFQAFgEACgdQACgcAAhDIgChVQgCghgDgEQgCgEgMgFQgMgEAAgKQAAgIAKgEQAKgDApAAQAnAAALADQAKAEAAAIQAAAJgOAGIgKAFQgEADgBAOIgCBDQAAAJAJADQAIAEAhAAIASAAIAwgCQANgBAFgEIACgEIABgJIAAgKIgCg4QgBgMgEgCIgKgFQgOgGAAgJQAAgIAKgEQALgDAoAAQAoAAAKADQAKAEAAAIQAAAKgOAFIgKAFQgEADgDAfQgCAfAAA8IACBXQACAiADAFQACADAMAEQAMAGAAAJQAAAJgMAFQgNADgjAAQgkAAgNgDg");
	this.shape_11.setTransform(-118.9,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaytips, new cjs.Rectangle(-138,-30.1,276.1,57.7), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AgpAwIAAhfIAhAAQAIAAAJADQAJADAIAFQAHAGAFAJIADAKIABALIgBALIgDAKIgGAIIgGAHQgIAGgJADQgLADgGAAgAgcAkIARAAQAJAAAGgCQAHgDAGgEQAFgFADgHIACgHIABgIIgBgHIgCgIQgDgGgFgFQgGgEgHgDQgGgCgJAAIgRAAg");
	this.shape.setTransform(39.9,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63900").s().p("AgfAwIAAhfIA9AAIAAAMIgvAAIAAAdIAsAAIAAAKIgsAAIAAAgIAxAAIAAAMg");
	this.shape_1.setTransform(30.7,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D63900").s().p("AASAwIgXgrIgPAAIAAArIgNAAIAAhfIAfAAIAMACQAGABAEADQAFADADAFQADAFAAAIQAAAKgHAHIgHAEIgKADIAbAsgAgUgFIAQAAIAHgBIAHgCQAEgCABgDQACgDAAgEQAAgFgCgDIgEgEIgHgDIgHAAIgRAAg");
	this.shape_2.setTransform(22.7,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D63900").s().p("AgGAwIAAhfIANAAIAABfg");
	this.shape_3.setTransform(16.3,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63900").s().p("AgfAwIAAhfIAdAAQAHAAAHACQAGABAEADQAFAEACAFQADAFAAAHQAAAHgDAFQgDAFgEADQgFADgGABQgHACgGAAIgPAAIAAAqgAgRgFIAOAAIAIAAQAEgBADgCQADgCACgDQABgDAAgEQAAgFgCgCQgBgDgDgCIgHgDIgIAAIgOAAg");
	this.shape_4.setTransform(10.8,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D63900").s().p("AgRAvQgJgEgFgHIAKgIQAEAFAFADQAGADAGAAIAGgBIAGgDQADgCACgDQACgDAAgFQAAgEgCgDQgCgDgDgCIgHgDIgIgDIgJgDIgIgEQgEgDgCgFQgCgEAAgHQAAgHADgFQADgFAFgEQAEgDAGgCIALgBIAIAAIAIADQAHADAEAFIgJAJQgDgEgFgDQgFgCgGAAIgFABIgGADQgDACgCADQgBACAAAEQAAAEABADIAEAFIAHADIAGACIAKAEIAJAEQAEADADAEQACAFAAAHQAAAIgCAFQgDAGgFADQgEAEgGABQgGACgGAAQgJAAgIgDg");
	this.shape_5.setTransform(2.6,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63900").s().p("AAYAwIgyhNIAABNIgOAAIAAhfIASAAIAxBMIAAhMIANAAIAABfg");
	this.shape_6.setTransform(-6.3,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D63900").s().p("AgGAwIAAhfIANAAIAABfg");
	this.shape_7.setTransform(-13.4,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D63900").s().p("AgGAwIAAhTIgeAAIAAgMIBJAAIAAAMIgeAAIAABTg");
	this.shape_8.setTransform(-22.4,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D63900").s().p("AgfAwIAAhfIA9AAIAAAMIgvAAIAAAdIAsAAIAAAKIgsAAIAAAgIAxAAIAAAMg");
	this.shape_9.setTransform(-30,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D63900").s().p("AgMAuQgJgDgHgHQgHgHgDgJQgEgJgBgLQABgKAEgKQAEgJAGgGIAIgGIAJgFQAJgDAJAAIALABQAGAAAEACQAJAEAGAFIgKAKQgEgFgGgDIgIgCIgHgBQgIAAgHADQgGAEgFAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAFAFAHADQAGADAIAAQAHAAAGgBQAFgBAFgDIAAgaIgWAAIAAgLIAiAAIAAAuQgHAEgJACIgTACQgKAAgKgEg");
	this.shape_10.setTransform(-39.8,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiCJQgbgfAAgxQAAg3AeghQAfgjAxAAIAQACQAGACAEAFQAEAFgBAGQAAAMgOAAIgGgBIgGAAQgaAAgOAUQgPAUAAAjQAAAmAQAYQAQAYAaAAQAXAAANgNQANgNAAgZIAAg+IAAhnQAAgQgCgGQgEgHgIgDIgGgBQgOgEAAgIQAAgGAFgFQAGgEARgGIAZgIIAWgCQAHAAAEAEQACAEAAAKIAAAMIgCCLIABBeQACAWAEADIAPAFQAMADAAAIQAAAKghALIgWAGIgRACQgHAAgCgEQgEgDAAgIIAAgLIAAgEIgBgCIgHAFIgKAHQgOALgMAEQgNAFgOAAQgqAAgageg");
	this.shape.setTransform(26.3,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhuBwQgMgDAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgTIAAgWQAAgkgBgKQgCgLgFgDIgKgEQgOgEAAgIQAAgFAEgDQAFgFAJgDIAhgLIAXgEQAHAAACAEQADADAAAIIAAAPIABACIABAAIABAAIABgBIAFgEIAFgFQAZgXAbAAQARAAAPAIQAPAGAKANQALAMAEARQAEARAAAlIAAAdIAAAPIAAANQAAAQACAHQACAGAGADIAGADQALAEAAAIQAAAJgKAEQgLADgjAAQgfAAgLgDQgLgDAAgJQAAgJALgEIAJgDQAFgDACgKQACgKAAgZQAAhHgJgSQgJgSgYAAQgLAAgLAHQgLAIgGAMQgFAJgCASQgCARAAAtQAAAVACAIQACAHAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgeAAQgiAAgLgEg");
	this.shape_1.setTransform(-1.4,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoBqIgMgLIgKAEQgbATgcAAQghAAgUgTQgVgTAAgfQAAgkAagUQAbgUAvAAQALAAAGAEQAFACAAAKQAAAMgPAAQgWAAgOALQgOAKAAAUQAAARAMALQAMALAUAAQAVAAAKgKQAJgJAAgYIAAhVQAAgUgJgKQgIgMgPAAQgLABgKAFQgJAEgJALIgFAFQgOARgPAAQgJAAgFgFQgGgGAAgJQAAgWAbgOQAagPApAAQAYAAASAHQASAHAKAMQAHAIADAPQADANAAAhIAABIQAAAMACAHQACAGAEACIAHACQAPADAAAIQAAALgPAIQgQAJgUAAQgKAAgLgMg");
	this.shape_2.setTransform(-26.6,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.and, new cjs.Rectangle(-52,-28.8,104,57.7), null);


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

	// table
	this.instance_10 = new lib.getinspiredtable();
	this.instance_10.parent = this;
	this.instance_10.setTransform(375,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:-55},59,cjs.Ease.sineInOut).wait(126));

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
		{src:"images/interstitialgetinspiredtable.jpg", id:"interstitialgetinspiredtable"}
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