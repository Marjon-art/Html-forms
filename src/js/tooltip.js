export class Tooltip {
    constructor() {
        this._tooltips = [];
    }

showTooltip() {
    const tooltipElement = document.createElement('div');
    tooltipElement.classList.add("popover");
    let p1 = document.createElement('p');
    p1.textContent = 'Title popover';
    let p2 = document.createElement('p');
    p2.textContent = 'Popover content';
    const button = document.createElement('button');
    button.classList.add('mypopoverBtn');
    button.textContent = 'the popover';
}
}
new Tooltip().showTooltip();



