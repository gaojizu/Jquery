/*
 * ahthor : clearlove
 * aim : 遍历arraylist数据是否存在
 * usetype:直接引用该js，将需要遍历的数组调取in_array方法，如果存在会返回true，否则返回false
 * listtyle：tools of js
 */
Array.prototype.in_array = function(element) {
	for(var i = 0; i < this.length; i++) {
		if(this[i] == element) {
			return true;
		}
	}
	return false;
}