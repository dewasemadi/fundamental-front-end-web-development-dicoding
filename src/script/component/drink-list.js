import "./drink-item.js";

class DrinkList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }
    set drinks(drinks) {
        this._drinks = drinks;
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = "";
        this._drinks.forEach(drink => {
            const drinkItemElement = document.createElement("drink-item");
            drinkItemElement.drink = drink;
            this.shadowDOM.appendChild(drinkItemElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
         <style>
             .placeholder {
                 font-weight: normal;
                 color: rgba(0, 0, 0, 0.5); 
                 -webkit-user-select: none; 
                 -moz-user-select: none; 
                 -ms-user-select: none;
                 user-select: none;
                 text-align: center;
             } 

             .not-found{
                 display: block;
                 width: 80px;
                 margin-left: auto;
                 margin-right: auto;
                 margin-top: 30px;
             }
        </style>`;
        this.shadowDOM.innerHTML += `<img src="https://image.flaticon.com/icons/svg/1147/1147129.svg" class="not-found"><h2 class = "placeholder"> ${message} </h2>`;
    }
}

customElements.define("drink-list", DrinkList);