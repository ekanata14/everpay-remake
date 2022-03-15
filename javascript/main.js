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

customElements.define('header-template', header);


// What We Offer
class whatWeOffer extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <!-- Section What We Offer -- Start -->
        <section class="smart-payment flex-col">
          <div class="divh6 margin-bottom"><h6 class="h6-edited">What We Offer</h6></div>
          <div class="divh3 margin-bottom"><h3 class="h3-edited">Smart Payment Gateway Solution</h3></div>
          <div class="margin-bottom"><p class="text-edited-16 text-custom p-def">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  condimentum.</p></div>
          <div class="flex-row">
            <div class="smart-payment-selection">
              <div class="payment-selection selection-left flex-col">
                <div class="flex-row header-payment">
                  <div><div class="icon-padding bg-blue"><div class="icon"><i class=" fa fa-solid fa-dollar-sign"></i></div></div></div>
                  <div class="head margin-bottom">
                    <h6 class="h6-edited h6-custom">Online Payment</h6>
                    <p class="text-edited-16 p-desc">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div class="none margin-bottom"></div>
                <div class="list-icon flex-row text-edited-16">
                  <div class="icon-item-hover"><i class="icon-item fa fa-brands fa-cc-visa"></i></div>
                  <div class="icon-item-hover"><i class="icon-item fa fa-brands fa-cc-mastercard"></i></div>
                  <div class="icon-item-hover"><i class="icon-item fab fa-brands fa-cc-apple-pay"></i></div>
                  <div class="icon-item-hover"><i class="icon-item fab fa-cc-paypal"></i></div>
                </div>
              </div>
            </div>
            <div class="smart-payment-selection">
              <div class="payment-selection selection-center flex-col">
                <div class="flex-row header-payment">
                  <div><div class="icon-padding bg-white"><div class="icon"><i class="fas fa-tablet-alt"></i></div></div></div>
                  <div class="head margin-bottom">
                    <h6 class="h6-custom">Platform Support</h6>
                    <p class="text-edited-16 p-desc">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div class="none margin-bottom"></div>
                <div class="list-icon flex-row">
                  <div class="list-icon-custom"><span class="flex-row flex-center"><i class="bg-blue icon-item-21 fab fa-apple"></i>IOs</span></div>
                  <div class="list-icon-custom"><span class="flex-row flex-center"><i class="bg-blue icon-item-21 fab fa-android"></i>Android</span></div>
                </div>
              </div>
            </div>
            <div class="smart-payment-selection">
              <div class="payment-selection selection-right flex-col">
                <div class="flex-row header-payment">
                  <div><div class="icon-padding bg-blue"><div class="icon"><i class="fa fa-solid fa-shield"></i></div></div></div>
                  <div class="head margin-bottom">
                    <h6 class="h6-edited h6-custom">Secure Transaction</h6>
                    <p class="text-edited-16 p-desc">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div class="none margin-bottom"></div>
                <div class="list-icon flex-row">
                  <div><span class="flex-row"><i class="icon-item-21 fas fa-money-check-alt"></i><p class="text-edited-16">Ready Refund</p></span></div>
                  <div><span class="flex-row"><i class="icon-item-21 fa fa-fax"></i><p class="text-edited-16">24/7 Support</p></span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
<!-- Section What We Offer -- End -->
        `
    }
}

customElements.define('what-we-offer-template', whatWeOffer);


// Our Experience
class ourExperience extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <!--  Section Our Experience -- Start -->
        <div class="experience-background">
            <div class="experience-left-container">

            </div>
            <div class="experience-right-container">
                <h6 class="h6">Our Experience</h6>
                <h4 class="h4">Our Roadmap To Reach Your Easy Payment Solution</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud xercitation ullamco dolore.</p>
                <div class="circle-wrap">
                    <!-- <h6 class="h6">Progress circle</h6> -->
                    <div class="circle">
                        Test
                    </div>
                    <div class="circle">
                        Test
                    </div>
                </div>
                <div class="btn btn-comp bg-white">
                    <a href="#" style="color:#053874">Get Free Trial</a>
                </div>
            </div>
        </div>
    <!--  Section Our Experience -- End -->
        `
    }
}

customElements.define('our-experience-template', ourExperience);


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

customElements.define('what-client-says-template', whatClientSays);

//Footer Template
class FooterTemplate extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 
        `<div class="main-container contact">
        <div class="container-contact">
        
            <div class="call">
                <div class="call-title">
                    <h4>Give Us A Call</h4>
                </div>
                <div class="call-description">
                    <p>(+62)81 122 4121</p>
                </div>
            </div>
    
            <div class="email">
                <div class="email-title">
                    <h4>Email Address</h4>
                </div>
                <div class="email-description">
                    <p>support@domain.com</p>
                </div>
            </div>
    
            <div class="location">
                <div class="location-title">
                    <h4>Office Location</h4>
                </div>
                <div class="location-description">
                    <p>Jl. Sunset Road 46</p>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="container-bot-footer">
        <div class="sub-container ">
            <div class="section-1 logo-social content-footer ">
                <div class="satu">
                <div class="bot-footer-logo">
                    <div class="bot-footer-img">
                    <img width="800" height="229" src="https://templatekit.jegtheme.com/everpay/wp-content/uploads/sites/228/2022/01/logo2-2BD9KK-1024x293.png" class="attachment-large size-large" alt="" loading="lazy" srcset="https://templatekit.jegtheme.com/everpay/wp-content/uploads/sites/228/2022/01/logo2-2BD9KK-1024x293.png 1024w, https://templatekit.jegtheme.com/everpay/wp-content/uploads/sites/228/2022/01/logo2-2BD9KK-300x86.png 300w, https://templatekit.jegtheme.com/everpay/wp-content/uploads/sites/228/2022/01/logo2-2BD9KK-768x220.png 768w, https://templatekit.jegtheme.com/everpay/wp-content/uploads/sites/228/2022/01/logo2-2BD9KK-1536x440.png 1536w, https://templatekit.jegtheme.com/everpay/wp-content/uploads/sites/228/2022/01/logo2-2BD9KK-2048x586.png 2048w, https://templatekit.jegtheme.com/everpay/wp-content/uploads/sites/228/2022/01/logo2-2BD9KK-800x229.png 800w, https://templatekit.jegtheme.com/everpay/wp-content/uploads/sites/228/2022/01/logo2-2BD9KK-e1643027848928.png 1000w" sizes="(max-width: 800px) 100vw, 800px">
                </div></div> <br>
                <div class="bot-footer-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quasi veritatis numquam reprehenderit totam accusamus molestiae.
                </div><br><br><br>
                <div class="container-socmed">
                    <div class="wrapper">
                        <div class="icon facebook">
                            <span><i class="fa fa-facebook-f"></i></span>
                        </div>
                        <div class="icon twitter">
                            <span><i class="fa fa-twitter"></i></span>
                        </div>
                        <div class="icon instagram">
                            <span><i class="fa fa-instagram"></i></span>
                        </div>
                        <div class="icon youtube">
                            <span><i class="fa fa-youtube"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="bot-footer-quick-links content-footer ">
            <div class="dua">
        <h3>Quick Links</h3> <br> 
        <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
        </ul>
            </div>
        </div><br> 
        <div class="bot-footer-useful-links content-footer">
            <div class="tiga">
            <h3>Useful Links</h3>
            <br>
            <ul>
                <li><a href="">Privacy Polisi</a></li>
                <li><a href="">Terms & Condition</a></li>
                <li><a href="">Disclaimer</a></li>
                <li><a href="">Support</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
            </div>
        </div> <br>
        <div class="bot-footer-newslater content-footer">
            <div class="empat">
        <h3>NewsLetter</h3><br>
        <div class="subscription">
            <span>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipisci.</span>
            <br><br>
            <input type="email" name="email" placeholder="Email Adress"><br>
            <button>Subscibe</button>
        </div>
        </div>
        <br><br>
        </div>
    </div>
    <hr>
    <div class="bot-footer-copyright">
        <div class="allign-copyright">
        <span>Payment Gateway Services Template Kit by Jegtheme</span>
        <br>
        <span><p>Copyright © 2021. All rights reserved.<p></span>
    </div>
    </div>`
    }
}
customElements.define('footer-template',FooterTemplate);