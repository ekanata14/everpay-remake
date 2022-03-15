// Header
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


// What Client Says
class whatClientSays extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <section class="what-client-says flex-row">
            <div class="half">
            <div class="what-client-says-desc flex-col">
                <div class="div margin-bottom"><h6 class="h6-edited">What Client Says</h6></div>
                <div class="div margin-bottom"><h3 class="h3-edited">Best Feedback From Clients</h3></div>
                <div class="margin-bottom"><p class="text-edited-16 p-def">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud xercitation ullamco dolore.</p></div>
                <div class="testimonials">
                <div class="testimonial-item">
                    <div class="testimonial-box flex-col bg-white">
                    <div class="testimonial-stars flex-row">
                        <ul class="rating-stars">
                        <li class="star"><i class="fa fa-solid fa-star"></i></li>
                        <li class="star"><i class="fa fa-solid fa-star"></i></li>
                        <li class="star"><i class="fa fa-solid fa-star"></i></li>
                        <li class="star"><i class="fa fa-solid fa-star"></i></li>
                        <li class="star"><i class="fa fa-solid fa-star"></i></li>
                        </ul>
                    </div>
                    <div class="testimonial-bio flex-row">
                        <div class="bio-details flex-row flex-center">
                        <div class="image-bio"><img class="image-bio" src="images/LZHZBNZ-150x150.jpg"></div>
                        <span class="profile-info">
                            <strong class="profile-name text-18">Michael Doe</strong>
                            <p class="profile-des text-edited-14">Client</p>
                        </span>
                        </div>
                    </div>
                    <div class="testimonial-content">
                        <p class="text-edited-16 p-def">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    </div>
                </div>
                <div class="testimonial-item">
                    <div class="testimonial-box flex-col bg-white">
                    <div class="testimonial-stars flex-row">
                        <ul class="rating-stars">
                        <li class="star"><i class="fa fa-solid fa-star"></i></li>
                        <li class="star"><i class="fa fa-solid fa-star"></i></li>
                        <li class="star"><i class="fa fa-solid fa-star"></i></li>
                        <li class="star"><i class="fa fa-solid fa-star"></i></li>
                        <li class="star"><i class="fa fa-solid fa-star"></i></li>
                        </ul>
                    </div>
                    <div class="testimonial-bio flex-row">
                        <div class="bio-details flex-row flex-center">
                        <div class="image-bio"><img class="image-bio" src="images/B3R7EGZ-150x150.jpg"></div>
                        <span class="profile-info">
                            <strong class="profile-name text-18">Christin Jerre</strong>
                            <p class="profile-des text-edited-14">Client</p>
                        </span>
                        </div>
                    </div>
                    <div class="testimonial-content">
                        <p class="text-edited-16 p-def">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="half what-client-says-img"></div>
        </section>
        `
    }
}

customElements.define('what-client-says-template', whatClientSays)