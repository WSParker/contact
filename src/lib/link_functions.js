export function clickHandler(e, href) {
    let theLink = document.createElement("a");
    theLink.href = href;
    theLink.click();
}
export function keyHandler(e, href) {
    if (e.key == "Enter") {
        clickHandler(e, href);
    }
}