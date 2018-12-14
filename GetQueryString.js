/*
 * ahthor : clearlove
 * aim : 获取URL中的参数
 * usetype:直接引用该js，直接调取GetQueryString函数➕需要的参数名字。
 * listtyle：tools of js
 */
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	/*
	 * 这里有两种写法
	 * 第一种：unescape(r[2])这种写法是不支持中文的，也就是说浏览器默认会将您传递的参数进行转码
	 * 		  存在的问题就是当您截取了该参数以后其实是乱码的，但是这个是完全支持英文和数字的
	 * 第二种：decodeURI(r[2])这种写法是支持中文的，它会将浏览器转码后的参数进行还原，所以URL中
	 *        存在中文参数的还是尽量使用这种写法比较稳妥！
	 */
	if(r != null) return decodeURI(r[2]);
	return null;
}