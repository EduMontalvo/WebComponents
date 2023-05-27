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
            <div href="#" class="nav_bar-menu">
                <img src="/assets/menu.svg" alt="menu">
            </div>
            <div class="nav_bar-logo">
                <p>Little</p>
                <p>Lemmon</p>
            </div>
            <div class="nav_bar-login-icon">
                <a href="#">Login</a>
                <a href="#">
                    <img class = "icon_style" src="/assets/cart.svg" alt="cart shop">
                </a>
            </div>
        </nav>
        ${this.getStyle()}
        `;

    }
    getStyle() {
        return `
        <style>
            .nav_bar{
                font-size: 1.5rem;
                /* padding: 1rem; */
                width: 100vw;
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid black;
            }
            .nav_bar-menu{
                display: flex;
                justify-content: center;
                padding-left: 1rem;
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
            @media screen and (min-width:768px) {
                .nav_bar-login-icon{
                    width: 12%;
                }
                .nav_bar-logo{
                    width: 20%;
                }
            }
        </style>
        `;
    }
}


class Banner extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.render();
    }
    render() {
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
    getStyle() {
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

class IntermedioBtns extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = `
            <section class="seccion_intermedia">
                <button class="seccion_intermedia-btn">Vegetable</button>
                <button class="seccion_intermedia-btn">Meat</button>
                <button class="seccion_intermedia-btn">Asian</button>
            </section>
            ${this.getStyle()};
        `;
    }
    getStyle() {
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
            @media screen and (min-width:768px) {
                .seccion_intermedia-btn{
                    margin: auto;
                }
            }  
        </style>
        `;
    }

}

class SeccionFinal extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this._shadowRoot.innerHTML = `
            <section class="seccion_final">
                <article class="seccion_final-bloque">
                    <img src="/assets/vegetable.jpg" alt="">
                    <div class="seccion_final-texto">
                        <p>Test the flawor of the best vegetables in town</p>
                    </div>
                </article>
                <article class="seccion_final-bloque">
                    <img src="/assets/meat.jpg" alt="">
                    <div class="seccion_final-texto">
                        <p>Test the flawor of the best meat in town</p>
                    </div>
                </article>
                <article class="seccion_final-bloque">
                    <img src="/assets/asian.jpg" alt="">
                    <div class="seccion_final-texto">
                        <p>Test the flawor of the best asian food in town</p>
                    </div>
                </article>
            </section>
            ${this.getStyle()}
        `;
    }
    getStyle() {
        return `
        <style>
            .seccion_final{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                width: 100vw;
                height: 45vh;
                
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
            @media screen and (min-width:768px) {
                .seccion_final{
                    flex-direction: row;
                }
                .seccion_final-bloque{
                    width: 100%;
                    height: 45vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .seccion_final-bloque img{
                    height: 20vh;
                    width: 25vw;
                    border:1px solid black;
                    object-fit: cover;
                }
                .seccion_final-texto{
                    width: 25vw;
                    display: flex;
                    align-items: center;
                    padding: 1rem;
                    border:1px solid black;
                    margin-top: 2rem;
                }
                .seccion_final-texto p{
                    display: inline;
                    font-size: 2rem;
                }
            }
        </style>
        `;
    }
}

class NavBar_Secundario extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this._shadowRoot.innerHTML = `
        <header>
            <nav class="nav_bar">
                <div class="nav_bar-back">
                    <a href="#">
                    <img class = "icon_style" src="/assets/arrow.svg" alt="back arrow">
                        <span>Back</span>
                    </a>
                </div>
                <div class="nav_bar-logo">
                    <p>Little</p>
                    <p>Lemmon</p>
                </div>
                <div class="nav_bar-login-icon">
                    <!-- <a href="#">Login</a> -->
                    <a href="#">
                        <img class = "icon_style" src="/assets/cart.svg" alt="cart shop">
                    </a>
                </div>
            </nav>
        </header>
        ${this.getStyle()}
        `;
    }
    getStyle() {
        return `
            <style>
                .nav_bar{
                    font-size: 1.5rem;
                    padding: 1rem;
                    height: 4vh;
                    display: flex;
                    justify-content: space-between;
                }
                .nav_bar-back a{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.6rem;
                    text-decoration: none;
                }
                .nav_bar-back{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                /* a{
                    font-size: 2rem;
                    display: inline;
                } */
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
                    width: 10%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                .icon_style{
                    /* color: #0073f1; */
                }
            </style>
        `;
    }
}
class Titulo extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this._shadowRoot.innerHTML = `
        <div class="contenedor_titulo">
            <h2>Bienvenido a</h2>
            <h2>Pequeño Limon</h2>
        </div>
        ${this.getStyle()}
        `;
    }
    getStyle() {
        return `
        <style>
            .contenedor{
                height: 93.98vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                border: 1px solid black;
            }
            .contenedor_titulo h2{
                width: 28.5rem;
                font-size: 4rem;
            }
            .contenedor_titulo h2:nth-child(1){
                color: #01c2b9;
            }
            .contenedor_titulo h2:nth-child(2){
                color: #0073f1;
            }
            @media screen and (min-width:768px){
                .contenedor_titulo{
                    text-align: center;
                }
                .contenedor_titulo h2{
                    width: auto;
                }
            }
        </style>
        `;
    }
}

class Bloque extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this._shadowRoot.innerHTML = `
            <div class="usuario_contrasenha">
                <section class="contenedor_usuario">
                    <label for="usuario">Usuario</label>
                    <input type="text" name="" id="usuario">
                </section>
                <section class="contenedor_contraseña">
                    <label for="contraseña">Contraseña</label>
                    <input type="password" name="" id="contraseña">
                </section>
            </div>
            ${this.getStyle()}
        `;
    }
    getStyle() {
        return `
        <style>
            .usuario_contrasenha{
                width: 94vw;
                height: 28vh;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .contenedor_usuario{
                width: 90vw;
                height: 10vh;
                background-color: #01c2b9;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1rem;
                border-radius: 0.6rem;
            }
            .contenedor_usuario label{
                font-size: 2rem;
                font-weight: bold;
                color: #fff;
            }
            .contenedor_usuario input{
                width: 50vw;
                height: 5rem;
                border:none;
                border-radius: 0.6rem;
            }
            .contenedor_contraseña{
                width: 90vw;
                height: 10vh;
                background-color: #01c2b9;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1rem;
                border-radius: 0.6rem;
            }
            .contenedor_contraseña label{
                font-size: 2rem;
                font-weight: bold;
                color: #fff;
            }
            .contenedor_contraseña input{
                width: 50vw;
                height: 5rem;
                border:none;
                border-radius: 0.6rem;
            }
            @media screen and (min-width:768px){
                .usuario_contrasenha{
                    justify-content: space-evenly;
                    align-items: center;
                }
                .contenedor_usuario{
                    width: 50%;
                    height: 7vh;
                    justify-content: space-around;
                }
                .contenedor_usuario label{
                    font-weight: normal;
                }
                .contenedor_usuario input{
                    width: 60%;
                    height: 4rem;
                }
                .contenedor_contraseña{
                    width: 50%;
                    height: 7vh;
                    justify-content: space-around;
                }
                .contenedor_contraseña label{
                    font-weight: normal;
                }
                .contenedor_contraseña input{
                    width: 60%;
                    height: 4rem;
                }
            }
        </style>
        `
    }
}

class Boton extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this._shadowRoot.innerHTML = `
            <button class="btn_login">LOGIN</button>
            ${this.getStyle()}
        `;
    }
    getStyle() {
        return `
            <style>
                .btn_login{
                    font-size: 2rem;
                    color: #fff;
                    background-color: #0073f1;
                    width: 25vw;
                    padding: 1rem;
                    border:none;
                    border-radius: 0.6rem;
                    cursor: pointer;
                    transition: 1s;
                }
                .btn_login:hover{
                    background-color: #01c2b9;
                }
                @media screen and (min-width:768px){
                    .btn_login{
                        border-radius: 4rem;
                        width: 8rem;
                        height: 8rem;
                    }
                }
            </style>
        `;
    }
}


class Registro extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this._shadowRoot.innerHTML = `
            <p class="crearAcc">Sin cuenta? , create una <a href="#">Aqui</a></p>
            ${this.getStyle()}
        `;
    }
    getStyle() {
        return `
            <style>
                .crearAcc{
                    font-size: 2rem;
                    color: #01c2b9;
                    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }
            </style>
        `;
    }
}

class ResumenBloque extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this._shadowRoot.innerHTML = `
        <section class="contenedor">
            <h1 class="titulo">Reservación</h1>
            <section class="texto">
                <p>Querido , <strong>usuario</strong> , tu reservación para la mesa 1 , el 23 de abril , ha sido realizada</p>
            </section>
            <button class="btn_inicio">INICIO</button>
        </section>}
        ${this.getStyle()}
        `;
    }
    getStyle(){
        return `
            <style>
                .contenedor{
                    height: 64rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                }
                
                .titulo{
                    font-size: 3rem;
                    margin: 8rem 0 0 0;
                    color: #01c2b9;
                }
                .texto{
                    width: 80vw;
                    height: 40vh;
                }
                .texto p{
                    display: inline;
                    font-size: 2.5rem;
                    color: #01c2b9;
                }
                .texto strong{
                    color: #0073f1;
                }
                .btn_inicio{
                    width: 40vw;
                    padding: 0.2rem 1rem;
                    border:none;
                    font-size: 3.5rem;
                    background-color: transparent;
                    border: 1px #0073f1 solid;
                    color: #0073f1;
                }
                @media screen and (min-width:768px){
                    .btn_inicio{
                        width: 20vw;
                        font-size: 2.5rem;
                    }
                }
            </style>
        `;
    }
}

customElements.define('mi-navbar', NavBar);
customElements.define('mi-banner', Banner);
customElements.define('mis-btns', IntermedioBtns);
customElements.define("mi-seccion", SeccionFinal);
customElements.define('mi-navbarsec', NavBar_Secundario);
customElements.define('mi-titulo', Titulo);
customElements.define('mi-bloque', Bloque);
customElements.define('mi-boton', Boton);
customElements.define('mi-registro', Registro);
customElements.define('mi-resumenbloque',ResumenBloque)
