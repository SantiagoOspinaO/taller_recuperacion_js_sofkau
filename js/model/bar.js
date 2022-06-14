
class bar {

    constructor(width, height, color, borderColor) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.borderColor = borderColor;
        this.keyPress = false;
        this.key = null;
        this.movementBar = 20;
    }

    setAtributes(bardom) {
        bardom.style.backgroundColor = this.color;
        bardom.style.borderColor = this.borderColor;
        bardom.style.width = this.width + "px";
        bardom.style.height = this.height + "px";
    }

    moveBar(key, key2, bardom, height) {
        if (this.keyPress) {
            if (this.key == key && bardom.offsetTop >= 0)
                bardom.style.top = (bardom.offsetTop - this.movementBar) + "px";
            if (this.key == key2 && (bardom.offsetTop + bardom.clientHeight) <= height)
                bardom.style.top = (bardom.offsetTop + this.movementBar) + "px";
        }
    }
}

export { bar }