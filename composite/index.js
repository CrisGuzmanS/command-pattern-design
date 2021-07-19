/**
 * In this case i implemented abstract class because leafs are items
 * and they don't have community name, or collection name, so that we
 * need to throw error when you want to acces to a method that
 * doesn't correspond to the class.
 *
 * In the case leafs could be parents, it is good to implement
 * interface, for example, when you have a set of html tags.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *
 */
var TreeElement = /** @class */ (function () {
    function TreeElement() {
    }
    TreeElement.prototype.add = function (treeElement) {
        throw new Error("Unsupported Operation Exception");
    };
    TreeElement.prototype.remove = function (treeElement) {
        throw new Error("Unsupported Operation Exception");
    };
    TreeElement.prototype.getElement = function (index) {
        throw new Error("Unsupported Operation Exception");
    };
    TreeElement.prototype.showName = function () {
        throw new Error("Unsupported Operation Exception");
    };
    TreeElement.prototype.display = function () {
        throw new Error("Unsupported Operation Exception");
    };
    return TreeElement;
}());
var Community = /** @class */ (function (_super) {
    __extends(Community, _super);
    function Community(name) {
        var _this = _super.call(this) || this;
        _this.collections = [];
        _this.name = name;
        return _this;
    }
    Community.prototype.add = function (treeElement) {
        this.collections.push(treeElement);
    };
    Community.prototype.showName = function () {
        console.log(this.name);
    };
    Community.prototype.display = function () {
        console.log("Community: " + this.name);
        this.collections.forEach(function (child) {
            child.display();
        });
    };
    return Community;
}(TreeElement));
var Collection = /** @class */ (function (_super) {
    __extends(Collection, _super);
    function Collection(name) {
        var _this = _super.call(this) || this;
        _this.items = [];
        _this.name = name;
        return _this;
    }
    Collection.prototype.add = function (treeElement) {
        this.items.push(treeElement);
    };
    Collection.prototype.showName = function () {
        console.log(this.name);
    };
    Collection.prototype.display = function () {
        console.log("Collection: " + this.name);
        this.items.forEach(function (child) {
            child.display();
        });
    };
    return Collection;
}(TreeElement));
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Item.prototype.showName = function () {
        console.log(this.name);
    };
    Item.prototype.display = function () {
        console.log("Item: " + this.name);
    };
    return Item;
}(TreeElement));
var community = new Community("Maths");
var algebra = new Collection("Algebra");
var integrals = new Collection("integrals");
var item_01 = new Item("A brief about algebra");
var item_02 = new Item("History of algebra");
var item_03 = new Item("Integral exercises");
community.add(algebra);
community.add(integrals);
algebra.add(item_01);
algebra.add(item_02);
integrals.add(item_03);
community.display();
