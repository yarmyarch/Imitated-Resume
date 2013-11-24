//滑动效果通用组件
var SlideUtil = {};

(function() {
	
//缓存数据
var sliderList = {};
sliderList.length = 0;

/**
 *参数传递顺序：target, styleAttribute, initValue, targetAttribute, speed, callback, always, escaper
 *可以为独立参数，也可以为许多个数组。
 */
SlideUtil.slide = function() {
	
	//参数初始化。统一辨识为数组进行处理
	var _target = [],
		_styleAttribute = [],
		_initValue = [],
		_targetAttribute = [],
		_speed = [],
		_callback = [],
		_always = [],
		_escaper = [],
		len, tmp, i, j, _lastValue = [];
	tmp = (arguments[0] instanceof Array) ? arguments : [arguments];
	len = tmp.length;
	
	for (i = 0; i < len; ++i) {
		_target.push(tmp[i][0]);
		_styleAttribute.push(tmp[i][1]);
		_initValue.push(tmp[i][2] + "");
		_targetAttribute.push(tmp[i][3] + "");
		_speed.push(tmp[i][4]);
		_callback.push(tmp[i][5]);
		_always.push(tmp[i][6]);
		_escaper.push(tmp[i][7]);
	}
	
	//业务相关变量列表
	var attrValue = [],
		numberReg = /((-\d+\.\d+)|(\d+\.\d+))|((-\d+)|(\d+))/,
		range = [],
		objectAttribute = [],
		targetObject = [],
		endFlag = [];
	//初始化attrValue。该属性用于标记当前属性值
	len = _initValue.length;
	tmp = false;
	for (i = 0; i < len; ++i) {
		//做数据匹配
		attrValue.push(_initValue[i].match(numberReg)[0] - 0);
		objectAttribute.push(_styleAttribute[i].split("."));
		targetObject.push(_target[i]);
		for (j = 0; j < objectAttribute[i].length - 1; ++j) {
			targetObject[i] = targetObject[i][objectAttribute[i][j]]
		}
		objectAttribute[i] = objectAttribute[i][objectAttribute[i].length - 1];
		if (!_target[i].id || _target[i].id == "")  {
			_target[i].id = "_SliderTmp_" + sliderList.length;
			++sliderList.length;
		}
		
		//重复性判断，clearInterval策略：如果当前传入的一组对象中存在之前已有的对象，则clear并且更新setInterval。
		//此处tmp用于作（是否有重复interval的）标记位，endFlag用于暂时缓存id列表。
		//一旦发现了历史记录，则tmp将指向历史interval
		if (tmp == false) {
			for (j in sliderList) {
				if (j == "length") continue;
				if (j.match(_target[i].id + "_" + _styleAttribute[i])) {
					clearInterval(sliderList[j]);
					//定位当前的interval
					tmp = j;
					break;
				}
			}
			endFlag.push(_target[i].id + "_" + _styleAttribute[i]);
		}
	}
	if (tmp == false) tmp = endFlag.join("&");
	//开整！此处需重置endFlag。
	endFlag = [];
	
	sliderList[tmp] = setInterval(function(){
		
		//临时数据，记录当前元素样式值
		var tmpCurrentValue,
		//记录当前元素目标值
			tmpTargetValue,
		//当前元素样式是否已经处理结束标志位
			isEnd;
		//计算偏移量
		for (i = 0; i < len; ++i) {
			//精确至20倍，当attrValue[i]与target[i]十分接近时跳出
			tmpTargetValue = _targetAttribute[i].match(numberReg)[0] - 0;
			isEnd = Math.round((attrValue[i] - tmpTargetValue) * 50);
			if (isEnd * endFlag[i] != 0) {
				//初始值只用一次，以后每次均从当前元素属性取值
				//~ tmpValue = eval("_target[i]." + _styleAttribute[i]) + "";
				//~ tmpValue = _lastValue[i];
				if (_initValue[i]) {
					_initValue[i] = false;
				//~ } else if (!!tmpValue) {
				} else {
					//非兼容的属性有可能在执行过属性修正之后仍然为空，因此需要判断
					//~ attrValue[i] = tmpValue.match(numberReg)[0] - 0;
					attrValue[i] = _lastValue[i];
				//~ } else {
					//~ //如果发现当前属性为非兼容属性，直接将endFlag置为0并不再执行后续操作
					//~ endFlag[i] = 0;
					//~ continue;
				}
				endFlag[i] = tmpTargetValue - attrValue[i];
				if (endFlag[i] == 0) continue;
				//如果目标状态是浮点数，则取浮点数，否则取整；
				range[i] = (endFlag[i] + "").match(/\./) ? (endFlag[i] * _speed[i]) : (Math.round(endFlag[i] * _speed[i]));
				endFlag[i] = endFlag[i] / Math.abs(endFlag[i]);
				//对于整数，设置最小range为1；对于浮点数不设置最小range；
				if (!(range[i] + "").match(/\./)) {
					if (Math.abs(range[i]) < Math.abs(endFlag[i])) range[i] = endFlag[i];
				}
			//否则将endFlag清零
			} else endFlag[i] = isEnd;
		}
		
		//判断endFlag是否全为0。如果是，则执行clear并且执行callback。
		if (!(endFlag.join("").match(/[^0]/))) {
			for (i = 0; i < len; ++i) {
				if (_callback[i]) _callback[i]();
			}
			clearInterval(sliderList[tmp]);
			return;
		}
		
		//统一执行属性修正
		for (i = 0; i < len; ++i) {
			if (endFlag[i] != 0) {
				targetObject[i][objectAttribute[i]] = _targetAttribute[i].replace((numberReg), 
					(_escaper[i] ? _escaper[i](_lastValue[i] = attrValue[i] + range[i]) : (_lastValue[i] = attrValue[i] + range[i]))
				);
				if (!!_callback[i] && !!_always[i]) {
					_callback[i](range[i]);
				}
			}
		}
	}, 1);
}

})();