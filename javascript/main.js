class header extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <header>
            <div class="container"> 
                <div class="navbar-wrapper">
                    <div class="nav-title">
                        <img src="images/everpay-logo.png" alt="everpay-logo">
                    </div>
                    <div class="nav-control">
                        <ul>
                            <li><a href="index.html" style="color: #fff;font-weight: normal;">Home</a></li>
                            <li>About</li>
                            <li><a href="services.html" style="color: #fff; font-weight: normal;">Services</a></li>
                            <li>Features</li    >
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div class="nav-right">
                        <img src="images/assets/icon/noun-search-1120387 1.svg" alt="search-icon">
                        <div class="btn btn-comp bg-white">
                            <a href="#" style="color:#053874">Get Free Trial</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        `
    }
}

customElements.define('header-template', header)