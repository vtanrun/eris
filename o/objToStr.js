/* Alias of Object.prototype.toString.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |value|*|The source value|
 * |return|string|String representation of the given value|
 */

var ObjToStr = Object.prototype.toString;

objToStr = function (val)
{
    return ObjToStr.call(val);
};