class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 10px;
                border-radius: 5px;
                display: flex;
                position: sticky;
                top: 10px;
                border-radius: 50px;
                background-color: white;

                width: 90% ;
                max-width: 800px;
                margin: 32px auto;
            }

            .search-container > img {
                height: 20px;
                margin: auto 0 auto 20px;
            }

            .search-container > input {
                width: 75% ;
                padding: 20px;
                border: 0;
                font-weight: bold;
            }

            .search-container > input:focus {
                outline: 0;
                font-size: 15 px;
            }

            .search-container > input:focus::placeholder {
                font-weight: bold;
                font-size: 15 px;
            }

            .search-container > input::placeholder {
                color: black;
                font-weight: normal;
                font-size: 15px;
            }

            .search-container > button {
                width: 23% ;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: black;
                color: white;
                border: 0;
                border-radius: 50px;
                font-size: 15px;
            }

            .search-container > button:focus {
                background-color: rgb(41, 41, 41);
            }

        @media screen and(max-width: 550px) {
            .search-container {
                    position: static;
                }

                .search-container > input {
                    width: 100% ;
                }

                .search-container >button {
                    width: 50% ;
                }
        }
        </style>
        
        <div id="search-container" class="search-container">
            <img src="https://image.flaticon.com/icons/svg/483/483356.svg" alt = "search icon">
            <input placeholder="Search Cocktail Recipe" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>`;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);