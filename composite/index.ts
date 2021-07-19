
/**
 * In this case i implemented abstract class because leafs are items
 * and they don't have community name, or collection name, so that we
 * need to throw error when you want to acces to a method that
 * doesn't correspond to the class.
 * 
 * In the case leafs could be parents, it is good to implement 
 * interface, for example, when you have a set of html tags.
 */

/**
 * 
 */
abstract class TreeElement {
    add(treeElement: TreeElement): void {
        throw new Error("Unsupported Operation Exception")
    }

    remove(treeElement: TreeElement): void {
        throw new Error("Unsupported Operation Exception")
    }
    getElement(index: number): TreeElement {
        throw new Error("Unsupported Operation Exception")
    }

    showName() {
        throw new Error("Unsupported Operation Exception")
    }

    display(): void {
        throw new Error("Unsupported Operation Exception")
    }
}

class Community extends TreeElement {

    collections: TreeElement[] = []

    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    add(treeElement: TreeElement) {
        this.collections.push(treeElement)
    }

    showName() {
        console.log(this.name)
    }

    display() {
        console.log("Community: " + this.name)
        this.collections.forEach(child => {
            child.display()
        });
    }
}

class Collection extends TreeElement {

    items: TreeElement[] = []

    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    add(treeElement: TreeElement) {
        this.items.push(treeElement)
    }

    showName() {
        console.log(this.name)
    }

    display() {
        console.log("Collection: " + this.name)
        this.items.forEach(child => {
            child.display()
        });
    }
}

class Item extends TreeElement {

    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    showName() {
        console.log(this.name)
    }

    display() {
        console.log("Item: " + this.name)
    }
}

const community = new Community("Maths")
const algebra = new Collection("Algebra")
const integrals = new Collection("integrals")
const item_01 = new Item("A brief about algebra")
const item_02 = new Item("History of algebra")
const item_03 = new Item("Integral exercises")

community.add(algebra)
community.add(integrals)

algebra.add(item_01)
algebra.add(item_02)
integrals.add(item_03)

community.display()