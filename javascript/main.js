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
                            <li class="dropdown">
                                <button class="dropbtn">
                                    Services
                                </button>
                                    <div class="dropdown-content">
                                        <a href="services.html" font-weight: normal;">Services</a>
                                        <a href="serviceDetails.html"  font-weight: normal;">Service Details</a>
                                    </div>
                            </li>
                            <li>Features</li>
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


class OurServicesTemplate extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 
        `
        <div class="container"> 
        <section class="smart-payment flex-col">
        <div class="divh6 margin-bottom"><h6 class="h6-edited">Our Services</h6></div>
        <div class="divh3 margin-bottom"><h3 class="h3-edited">We Provide Best Payment Services</h3></div>
        <div class="margin-bottom"><p class="text-edited-16 text-custom p-def">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  condimentum.</p></div>
        <section class="content-wrapper payment-services-wrapper">
            <div class="payment-services-container payser-active">
                <div class="icon-box-container">    
                    <div class="icon-box">
                        <p>An icon</p>
                    </div>
                </div>
                <div class="payser-body">
                    <h5 class="h5-edited">Ecommerce Integrations</h5>
                    <p>Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Aenean comodo ligula eget dolor. Aenean massa. Cum sociis natoque et magnis.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div class="payment-services-container">
                <div class="icon-box-container">    
                    <div class="icon-box">
                        <p>An icon</p>
                    </div>
                </div>
                <div class="payser-body">
                    <h5 class="h5-edited">Online Payments</h5>
                    <p>Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Aenean comodo ligula eget dolor. Aenean massa. Cum sociis natoque et magnis.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div class="payment-services-container">
                <div class="icon-box-container">    
                    <div class="icon-box">
                        <p>An icon</p>
                    </div>
                </div>
                <div class="payser-body">
                    <h5 class="h5-edited">Automatic Transfers</h5>
                    <p>Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Aenean comodo ligula eget dolor. Aenean massa. Cum sociis natoque et magnis.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div class="payment-services-container">
                <div class="icon-box-container">    
                    <div class="icon-box">
                        <p>An icon</p>
                    </div>
                </div>
                <div class="payser-body">
                    <h5 class="h5-edited">Onsite Payments</h5>
                    <p>Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Aenean comodo ligula eget dolor. Aenean massa. Cum sociis natoque et magnis.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div class="payment-services-container">
                <div class="icon-box-container">    
                    <div class="icon-box">
                        <p>An icon</p>
                    </div>
                </div>
                <div class="payser-body">
                    <h5 class="h5-edited">Mobile Support</h5>
                    <p>Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Aenean comodo ligula eget dolor. Aenean massa. Cum sociis natoque et magnis.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div class="payment-services-container">
                <div class="icon-box-container">    
                    <div class="icon-box">
                        <p>An icon</p>
                    </div>
                </div>
                <div class="payser-body">
                    <h5 class="h5-edited">Secure Transactions</h5>
                    <p>Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Aenean comodo ligula eget dolor. Aenean massa. Cum sociis natoque et magnis.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            
            
        </section>`
    }
}
customElements.define('our-services-template',OurServicesTemplate);

class OurBlogTemplate extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 
        `<div class="container">
        <section class="container-top-header">
            <h6 class="h6">Our Blog</h6>
                <div class="section-top">
                    <!-- tombol  -->
                    <h5 class="h5">Latest Blog</h5>
                    <div class="btn btn-comp bg-blue">
                    <a href="#" style="color:#ffffff">View all blog</a>
                </div>
            </div>
        </section>
        <br>
        <!-- container untuk content utama -->
        <div class="container-main-content">
            <article class=" article-wrapper post-1 article-box"> <!--content post article 1-->
            <img width="1440" height="961" src="https://templatekit.jegtheme.com/everpay/wp-content/uploads/sites/228/2022/01/calculating-the-expenses-e1643027983776.jpg" class="blog-img" alt="Calculating the expenses" loading="lazy">
                <div class="container-link-header-post"><!--link untuk menuju artikel-->
                <a href="https://templatekit.jegtheme.com/everpay/2022/01/21/inflation-is-now-the-right-time-to-get-more-worried/">
                    Inflation Is Now The Right Time To Get More Worried</a>
                </div>
            <div class="container-post">
            <p class="content-article">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Praesentium, assumenda consectetur exercitationem dolorum sit adipisci enim vel. 
                Est dolorem repellat neque fugiat? Quisquam fugit nemo aspernatur enim omnis illo aliquid.
            </p>
            </div>
            <div class="read-more">
                <a href="https://templatekit.jegtheme.com/everpay/2022/01/21/inflation-is-now-the-right-time-to-get-more-worried/"class="jkit-readmore">
                    Read More</a>
            </div>
            <!--end article 1-->
            </article>
        <br>
            <article class=" article-wrapper post-2 article-box"><!--content post article 2-->
                <img width="1440" height="960" src="https://templatekit.jegtheme.com/everpay/wp-content/uploads/sites/228/2022/01/contactless-and-cashless-payment-through-mobile-banking-e1643027976473.jpg" class="attachment-full size-full wp-post-image" alt="Contactless and cashless payment through mobile banking" loading="lazy">
            <div> <!--linke menuju article-->
                <h4><a href="https://templatekit.jegtheme.com/everpay/2022/01/21/few-dare-to-follow-as-france-bank-fbva-lifts-bet/">
                    Few Dare To Follow As France Bank FBVA Lifts Bet</a></h4>
            </div>
            <div class="container-post">
                <p class="content-article">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Numquam magni praesentium nam provident labore consequuntur 
                    dignissimos hic aliquid nesciunt
                    maxime quo enim mollitia, in sed, quas ipsum ad ullam libero?
                </p >
            </div>
            <div class="read-more">
                <h4><a href="https://templatekit.jegtheme.com/everpay/2022/01/21/few-dare-to-follow-as-france-bank-fbva-lifts-bet/"class="jkit-readmore">Read More</a></h4>
            </div>
        </article>
            <!--end article 2-->
        <br>
        <article class="article-wrapper post-3 article-box"> <!--artikel 3-->
            <img width="1440" height="961" src="https://templatekit.jegtheme.com/everpay/wp-content/uploads/sites/228/2022/01/hand-using-smart-phone-mobile-p-payments-online-shopping-omni-channel-digital-tablet--e1643027970727.jpg" class="attachment-full size-full wp-post-image" alt="Hand using smart phone, mobile p payments online shopping, omni channel, digital tablet." loading="lazy">
            <div>
                <h4><a href="https://templatekit.jegtheme.com/everpay/2022/01/21/trusted-digital-identity-is-the-key-to-digital-future/">
                Trusted Digital Identity Is The Key To Digital Future</a>
                </h4>
            </div>
            <div>
                <p class="content-article">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Magnam, iure! Accusantium maxime officiis libero minus, culpa, 
                quidem magni nam autem inventore aliquam pariatur voluptatum 
                nesciunt id voluptatibus ut ab quo!
                </p>
            </div>
            <div>
                <h4>
                    <a href="https://templatekit.jegtheme.com/everpay/2022/01/21/trusted-digital-identity-is-the-key-to-digital-future/" class="jkit-readmore">
                Read More</a>
                </h4>
            </div><!--end post article 3-->
        </article>
    </div><!--end dari container post-->
</div>`
    }
}
customElements.define('our-blog-template',OurBlogTemplate);

// Our Experience
class specialOffer extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <!-- Special Offer Start -->
    <section class="smart-payment flex-col">
        <div class="divh6 margin-bottom"><h6 class="h6-edited">Special Offer
        </h6></div>
        <div class="divh3 margin-bottom"><h3 class="h3-edited">Our Plans & Packages
        </h3></div>
        <div class="margin-bottom"><p class="text-edited-16 text-custom p-def">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  condimentum.</p></div>
        <section class="content-wrapper special-offer-wrapper flex-center">
            <div class="flex-row">
                <div class="smart-payment-selection">
                  <div class="special-offer-selection selection-left flex-col">
                    <div class="flex-col header-payment">
                        <h6 class="h6-edited-special-offer h6-custom bold">Silver</h6>
                      <div class="head margin-bottom flex-row flex-align-end">
                        <h4 class="h4 bold">$29.9</h4>
                        <p class="text-edited-16 p-desc">/Month</p>
                      </div>
                    </div>
                    <div class="none margin-bottom"></div>
                    <div class="list-what-you-get flex-col text-edited-16">
                      <ul>
                          <li><i class="fa fa-check blue"></i> Personal Account</li>
                          <li><i class="fa fa-check blue"></i> No Monthly Fees</li>
                          <li><i class="fa fa-check blue"></i> Cashback Guarantee
                          </li>
                          <li><i class="fa fa-check blue"></i> No transaction limit
                          </li>
                          <li><i class="fa fa-check blue"></i> Online 24/7 support
                          </li>
                          <li><i class="fa fa-check blue"></i> Monthly Gifts
                          </li>
                      </ul>
                    <div class="btn btn-comp bg-blue btn-special-offer">
                        <a href="#" style="color:#fff">Get Free Trial</a>
                    </div>
                    </div>
                  </div>
                </div>
                <div class="smart-payment-selection">
                  <div class="special-offer-selection selection-center flex-col">
                    <div class="flex-col header-payment">
                        <h6 class="h6-edited-special-offer h6-custom bold">Gold</h6>
                      <div class="head margin-bottom flex-row flex-align-end">
                        <h4 class="h4 bold">$59.9</h4>
                        <p class="text-edited-16 p-desc">/Month</p>
                      </div>
                    </div>
                    <div class="none margin-bottom"></div>
                    <div class="list-what-you-get flex-col text-edited-16">
                        <ul>
                            <li><i class="fa fa-check white"></i> Personal Account</li>
                            <li><i class="fa fa-check white"></i> No Monthly Fees</li>
                            <li><i class="fa fa-check white"></i> Cashback Guarantee
                            </li>
                            <li><i class="fa fa-check white"></i> No transaction limit
                            </li>
                            <li><i class="fa fa-check white"></i> Online 24/7 support
                            </li>
                            <li><i class="fa fa-check white"></i> Monthly Gifts
                            </li>
                        </ul>
                        <div class="btn btn-comp bg-white btn-special-offer">
                            <a href="#" style="color:#053874">Get Free Trial</a>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="smart-payment-selection">
                  <div class="special-offer-selection selection-right flex-col">
                    <div class="flex-col header-payment">
                        <h6 class="h6-edited-special-offer h6-custom bold">Paltinum</h6>
                      <div class="head margin-bottom flex-row flex-align-end">
                        <h4 class="h4 bold">$79.9</h4>
                        <p class="text-edited-16 p-desc">/Month</p>
                      </div>
                    </div>
                    <div class="none margin-bottom"></div>
                    <div class="list-what-you-get flex-col text-edited-16">
                        <ul>
                            <li><i class="fa fa-check blue"></i> Personal Account</li>
                            <li><i class="fa fa-check blue"></i> No Monthly Fees</li>
                            <li><i class="fa fa-check blue"></i> Cashback Guarantee
                            </li>
                            <li><i class="fa fa-check blue"></i> No transaction limit
                            </li>
                            <li><i class="fa fa-check blue"></i> Online 24/7 support
                            </li>
                            <li><i class="fa fa-check blue"></i> Monthly Gifts
                            </li>
                        </ul>
                        <div class="btn btn-comp bg-blue btn-special-offer">
                            <a href="#" style="color:#fff">Get Free Trial</a>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
    </section>
    <!-- Special Offer End -->
        `
    }
}

customElements.define('special-offer-template', specialOffer);