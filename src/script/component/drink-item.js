class DrinkItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set drink(drink) {
        this._drink = drink;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
             <style>
                 *{
                     margin: 0;
                     padding: 0;
                     box-sizing: border-box;
                 }
                 :host {
                     display: block;
                     margin-bottom: 18px;
                     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                     border-radius: 30px;
                     overflow: hidden;
                 }

                 .picture {
                     max-height: 400px;
                     object-fit: cover;
                     object-position: center;
                     width: 100%;
                 }

                 .drink-info {
                     padding: 24px;
                 }

                 .drink-info>h2 {
                     font-weight: bold;
                 }

                 .drink-info>p {
                     margin-top: 10px;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     display: -webkit-box; 
                     text-align: justify;
                     -webkit-box-orient: vertical; 
                     -webkit-line-clamp: 10; /* number of lines to show */
                 } 
                 </style>
            <img class = "picture" src = "${this._drink.strDrinkThumb}" alt = "picture">
            <div class="drink-info">
                <h2>${this._drink.strDrink}</h2>
                <p>${this._drink.strInstructions}</p>
            </div>`;
    }
}

customElements.define("drink-item", DrinkItem);