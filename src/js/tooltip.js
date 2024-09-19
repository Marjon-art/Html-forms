export class Tooltip {
    constructor() {
this._tooltips = [];
    }
    showTooltip(message, elemnt) {

        //Чтобы удалить элемент 
        const tooltipElement = document.createElement("div");

        tooltipElement.classList.add("form-error");
        tooltipElement.textContent = message;
        const id = performance.now();

        this._tooltips.push({
            id,
            element: tooltipElement
        });

        document.body.appendChild(tooltipElement);
        console.log(element.getBoundingClientRect())
        return id; 
    }

    removeTooltip(id) {
        const tooltip = this._tooltips.find(t => t.id === id); 

        tooltip.element.remove();
        this._tooltips = this._tooltips.filter(t => t.id === id);
    }

}