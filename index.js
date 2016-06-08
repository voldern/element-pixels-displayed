module.exports = function pixelsVisible(element) {
    const rect = element.getBoundingClientRect();

    // IE8 does not have window.innerHeight
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // The element is below the viewport
    if (rect.top >= windowHeight) {
        return 0;
    }

    if (rect.top <= 0) {
        // The top of the node is at or above the top of the viewport,
        // so the top plus its height would be how much is shown.
        // However, we never want to provide a negative number for amount visible.
        const visible = Math.max(rect.top + element.offsetHeight, 0);

        // Never return more then the window height
        return Math.min(visible, windowHeight);
    }

    // We can determine the maximum possible amount visible rather easily,
    // by determining how much distance there is between the top of the bounding
    // rectangle and the viewport's height. However, if this is larger than our
    // DOM node, we don't want to report more visible than the node's full height
    return Math.min(windowHeight - rect.top, element.offsetHeight);
};
