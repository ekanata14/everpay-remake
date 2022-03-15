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

class ourExperienceSection extends HTMLElement {
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

customElements.define('our-experience-template', ourExperienceSection);