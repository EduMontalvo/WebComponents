class NavBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this._shadowRoot.innerHTML = `
        <nav class="nav_bar">
            <a href="#" class="nav_bar-menu">
                <span class="material-symbols-outlined">menu</span>
            </a>
            <div class="nav_bar-logo">
                <p>Little</p>
                <p>Lemmon</p>
            </div>
            <div class="nav_bar-login-icon">
                <a href="#">Login</a>
                <a href="#">
                    <span class="material-symbols-outlined">shopping_cart
                    </span>
                </a>
            </div>
        </nav>

        ${this.getStyle()}
        `;

    }
    getStyle(){
        return `
        <style>
            .nav_bar{
                font-size: 1.5rem;
                padding: 1rem;
                width: 100vw;
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid black;
            }
            .nav_bar-menu{
                width: 15%;
                color: #0073f1;
            }
            .nav_bar-logo{
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 35%;
            }
            .nav_bar-logo p:first-child{
                color: #0073f1;
                font-weight: bold;
                font-size: 1.5rem;
            }
            .nav_bar-logo p:nth-child(2){
                color: #01c2b9;
                font-weight: bold;
                font-size: 2rem;
            }
            .nav_bar-login-icon{
                width: 25%;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            .nav_bar-login-icon a{
                text-decoration: none;
                color: #0073f1;
            }
            
            .seccion_intermedia{
                width: 100vw;
                height: 9vh;
                border: 1px solid black;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            .seccion_intermedia-btn{
                width: 20vw;
                height: 3.8vh; 
                font-size: 1.6rem;
                color: #fff;
                background-color:#01c2b9;
                border:none;
                border-radius: 0.8rem;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: 1s;
            }
            .seccion_intermedia-btn:hover{
                background-color: #0073f1;
            }
            
            .seccion_final{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                width: 100vw;
                height: 45vh;
                padding: 1rem;
            }
            .seccion_final-bloque{
                width: 100%;
                height: 13vh;
                display: flex;
            }
            .seccion_final-bloque img{
                width: 40%;
                border:1px solid black;
                object-fit: cover;
            }
            .seccion_final-texto{
                width: 60%;
                display: flex;
                align-items: center;
                padding: 1rem;
                border:1px solid black;
            }
            .seccion_final-texto p{
                display: inline;
                font-size: 2rem;
            }
            
        </style>
        `;
    }
}


class Banner extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this._shadowRoot.innerHTML = `
        <section class="seccion_banner">
            <img src="assets/background.jpg" alt="Imagen de un postre">
            <h2>Meal</h2>
            <p>Delicious</p>
            <button>Reserva</button>
        </section>
        ${this.getStyle()}
        `;
    }
    getStyle(){
        return `
        <style>
            .seccion_banner{
                height: 40vh;
                width: 100vw;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: start;
                border:1px solid black;
            }
            .seccion_banner img{
                position: absolute;
                /* object-fit: contain; */
                width: 100%;
                height: 40vh;
                object-fit: cover;
                /* opacity: 0.5; */
                z-index: 0;
            }
            .seccion_banner h2{
                color: #fff;
                margin-left: 1rem;
                font-size: 3rem;
                z-index: 1;
            }
            .seccion_banner p{
                color: #fff;
                margin-left: 1rem;
                font-size: 2rem;
                z-index: 1;
            }
            .seccion_banner button{
                background-color: #01c2b9;
                color:#fff;
                margin-left: 1rem;
                z-index: 1;
                font-size: 2rem;
                border:none;
                border-radius: 0.6rem;
                width: 11rem;
                height: 2.8rem;
                cursor: pointer;
                transition: 1s;
            }
            .seccion_banner button:hover{
                background-color: #0073f1;
            }
        </style>
        `;
    }
}

class IntermedioBtns extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
            <section class="seccion_intermedia">
                <button class="seccion_intermedia-btn">Vegetable</button>
                <button class="seccion_intermedia-btn">Meat</button>
                <button class="seccion_intermedia-btn">Asian</button>
            </section>
            ${this.getStyle()};
        `;
    }
    getStyle(){
        return `
        <style>
            .seccion_intermedia{
                width: 100vw;
                height: 9vh;
                border: 1px solid black;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            .seccion_intermedia-btn{
                width: 20vw;
                height: 3.8vh; 
                font-size: 1.6rem;
                color: #fff;
                background-color:#01c2b9;
                border:none;
                border-radius: 0.8rem;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: 1s;
            }
            .seccion_intermedia-btn:hover{
                background-color: #0073f1;
            }
        </style>
        `;
    }
    
}


customElements.define('mis-btns',IntermedioBtns)
customElements.define('mi-banner', Banner);
customElements.define('mi-navbar', NavBar);

