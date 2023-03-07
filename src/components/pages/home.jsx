import React, { Component } from 'react'

export default class home extends Component {
  render() {
    return (

   <div>
    
        <header className="header">
            <div className="container">
            <nav className="navbar">
                <a href="#">
                <img className="navbar-logo" src="assets/img/spotify-logo.png" alt="navbar-logo" />
                </a>
                <ul className="navbar-menu">
                <li className="navbar-item">
                    <a href="#sec_premium">Premium</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Help</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Download</a>
                </li>
                <li className="navbar-item">
                    <div className="divider" />
                </li>
                <li className="navbar-item">
                    <a href="#">Sign up</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Log In</a>
                </li>
                </ul>
                <button className="burger-menu">
                <div className="bars" />
                <div className="bars" />
                <div className="bars" />
                </button>
            </nav>
            </div>
        </header>
        {/* Section Banner */}
        <section id="sec_banner" className="banner">
            <div className="container">
            <div className="banner-row">
                <div className="banner-text">
                <h1 className="banner-title">2 months of Premium for ₱149 with mobile load.</h1>
                <p className="banner-subtitle">Only ₱149/month after, cancel anytime.</p>
                <a href="#sec_plans" className="btn-green">GO TO PLANS</a>
                <p className="banner-legal">Open only to users who haven't already tried Premium. 
                    <a class="terms" href="https://www.spotify.com/legal/premium-promotional-offer-terms/">
                    Terms and conditions apply.
                    </a>
                </p>
                </div>
            </div>
            <div className="scroll-me">
                <span>Scroll</span>
                <div className="scroll-bar" />
            </div>
            </div>
        </section>
        <section id="sec_features" className="sec-features">
            <div className="container">
            <div className="header-wrapper">
                <h2 className="blue-header">Why go Premium?</h2>
            </div>
            <div className="features">
                <div className="features-container">
                <div className="feature">
                    <img src="assets/img/icon-offline.jpg" alt="On Demand" />
                    <div className="text-wrapper">
                    <div>
                        <h3>Offline Listening</h3>
                    </div>
                    <p className="feature-summary">Whether you’re on the plane, train or have a lack of Wi-Fi, take our tunes offline and to-go.</p>
                    </div>	
                </div>
                </div>
                <div className="features-container">
                <div className="feature">
                    <img src="assets/img/icon-adfree.jpg" alt="On Demand" />
                    <div className="text-wrapper">
                    <div>
                        <h3>Ad-free Music on Demand</h3>
                    </div>
                    <p className="feature-summary">Ad-free access to 50 millions songs, all on your phone. Play, skip or put on loop any song you want.</p>
                    </div>	
                </div>
                </div>
                <div className="features-container">
                <div className="feature">
                    <img src="assets/img/icon-hqsound.jpg" alt="On Demand" />
                    <div className="text-wrapper">
                    <div>
                        <h3>HQ Sound</h3>
                    </div>
                    <p className="feature-summary">Stream at 320 kbps – it’s as good as listening live.</p>
                    </div>	
                </div>
                </div>
                <div className="features-container">
                <div className="feature">
                    <img src="assets/img/icon-flxible.jpg" alt="On Demand" />
                    <div className="text-wrapper">
                    <div>
                        <h3>Flexible Plans</h3>
                    </div>
                    <p className="feature-summary">With flexible plans, you can enjoy high quality Premium music daily, weekly, monthly anytime.</p>
                    </div>	
                </div>
                </div>
            </div>
            </div>
        </section>
        <section id="sec_premium" className="sec-premium">
            <div className="container">
            <h2 className="p-title">Let's go Premium</h2>
            <p className="p-text">Uninterrupted, high quality music from ₱15 a day.</p>
            <div className="plans">
                <div className="plan-container">
                <div className="plan-title">
                    <img src="assets/img/auto-renew.png" alt='auto-renew.png'/>
                    <h4>AUTO-RENEW PLANS</h4>
                </div>
                <div className="plan-card">
                    <a data-target="#renew-plans" id="collapsebutton" href="#collapsebutton">
                    <strong className="plan-card-title">1 Month Free</strong>
                    <p className="plan-card-text">Recurring plans, better value. Cancel anytime.</p>
                    <img src="assets/img/arrow.png" alt='arrow.png'/>
                    </a>
                    <div className="card-collapse" id="renew-plans"> {/* plans */}
                    <div className="plan">
                        <h4 className="plan-name">Individual (1 Account)</h4>
                        <div className="plan-rates">
                        <a className="rate">
                            <h6>First month free</h6>
                            <p><strong>₱129/month</strong> after</p>
                            <img className="right-arrow" src="assets/img/arrow.png" alt='arrow.png' />
                            <div className="pay-via">
                            <img src="assets/img/cartao-master-100.png" alt='cartao-master-100.png' />
                            </div>
                        </a>
                        <a className="rate">
                            <h6>2 Months for ₱149</h6>
                            <p><strong>₱149/month</strong> after</p>
                            <img className="right-arrow" src="assets/img/arrow.png" alt='arrow.png' />
                            <div className="pay-via">
                            <img src="assets/img/smart-logo-png-100.png" alt='smart-logo-png-100.png'/>
                            <img src="assets/img/Globe-Corporate-100.png" alt='Globe-Corporate-100.png'/>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="plan">
                        <h4 className="plan-name">Family (6 Accounts)</h4>
                        <div className="plan-rates">
                        <a className="rate">
                            <h6>First month free. Family mix</h6>
                            <p><strong>₱196/month</strong> after</p>
                            <img className="right-arrow" src="assets/img/arrow.png" />
                            <div className="pay-via">
                            <img src="assets/img/cartao-master-100.png" alt='cartao-master-100.png'/>
                            <img src="assets/img/smart-logo-png-100.png" alt='smart-logo-png-100.pn'/>
                            <img src="assets/img/Globe-Corporate-100.png" alt='Globe-Corporate-100.png'/>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="plan">
                        <h4 className="plan-name">Student Plan (1 Account)</h4>
                        <div className="plan-rates">
                        <a className="rate">
                            <h6>First month free.</h6>
                            <p><strong>₱49/month</strong> after</p>
                            <img className="right-arrow" src="img/arrow.png" alt='arrow.png'/>
                            <div className="pay-via">
                            <img src="assets/img/cartao-master-100.png" alt='cartao-master-100.png'/>
                            </div>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="plan-container">
                <div className="plan-title">
                    <img src="assets/img/one-time.png" alt='one-time.png'/>
                    <h4>ONE-TIME PLANS</h4>
                </div>
                <div className="plan-card">
                    <a data-target="#onetime-plans" id="collapsebutton" href="#collapsebutton">
                    <strong className="plan-card-title">From ₱15 a day</strong>
                    <p className="plan-card-text">Flexible plans, pay as you need.</p>
                    <img src="assets/img/arrow.png" alt='arrow.png'/>
                    </a>
                    <div className="card-collapse" id="onetime-plans">
                    <div className="plan">
                        <div className="pay-via">
                        <img src="assets/img/cartao-master-100.png" alt='cartao-master-100.png'/>
                        <img src="assets/img/smart-logo-png-100.png" alt='smart-logo-png-100.png'/>
                        <img src="assets/img/Globe-Corporate-100.png" alt='Globe-Corporate-100.png'/>
                        <img src="assets/img/bdo-100.png" alt='bdo-100.png'/>
                        <img src="assets/img/m-lhuillier-logo-png-100.png" alt='m-lhuillier-logo-png-100.png'/>
                        <img src="assets/img/bayadcenter-100.png" alt='ayadcenter-100.png'/>
                        </div>
                        <div className="plan-rates">
                        <a className="rate">
                            <p>1 day <strong>₱15</strong></p>
                            <img className="right-arrow" src="assets/img/arrow.png" alt='assets/img/arrow.png'/>
                        </a>
                        <a className="rate">
                            <p>1 week <strong>₱49</strong></p>
                            <img className="right-arrow" src="assets/img/arrow.png" alt='assets/img/arrow.png'/>
                        </a>
                        <a className="rate">
                            <p>1 Month <strong>₱149</strong></p>
                            <img className="right-arrow" src="assets/img/arrow.png" alt='arrow.png'/>
                        </a>
                        <a className="rate">
                            <p>3 Months <strong>₱447</strong></p>
                            <img className="right-arrow" src="assets/img/arrow.png" alt='arrow.png'/>
                        </a>
                        <a className="rate">
                            <p>6 Months <strong>₱774</strong></p>
                            <img className="right-arrow" src="assets/img/arrow.png" alt='arrow.png'/>
                        </a>
                        <a className="rate">
                            <p>12 Months <strong>₱1290</strong></p>
                            <img className="right-arrow" src="assets/img/arrow.png" alt='arrow.png'/>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div> {/* plans */}
            <a href="#" className="terms-condition">Terms and conditions apply.</a>
            </div>
        </section>
        <div className="footer">
            <div className="container">
            <footer>
                <a className="fn-anchor" href="#">
                <img className="navbar-logo" src="assets/img/spotify-logo.png" alt='potify-logo.png' />
                </a>
                <nav>
                <ul className="footer-ul">
                    <li>COMPANY</li>
                    <li>
                    <a href="#">About</a>
                    </li>
                    <li>
                    <a href="#">Jobs</a>
                    </li>
                    <li>
                    <a href="#">For the Record</a>
                    </li>
                </ul>
                <ul className="footer-ul">
                    <li>COMMUNITIES</li>
                    <li>
                    <a href="#">For Artists</a>
                    </li>
                    <li>
                    <a href="#">Developers</a>
                    </li>
                    <li>
                    <a href="#">Brands</a>
                    </li>
                    <li>
                    <a href="#">Investors</a>
                    </li>
                    <li>
                    <a href="#">Vendors</a>
                    </li>
                </ul>
                <ul className="footer-ul">
                    <li>USEFUL LINKS</li>
                    <li>
                    <a href="#">Help</a>
                    </li>
                    <li>
                    <a href="#">Web Player</a>
                    </li>
                    <li>
                    <a href="#">Free Mobile App</a>
                    </li>
                </ul>
                </nav>
                <ul className="social-media">
                <li>
                    <a href="#">
                    <i className="fa fa-instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="fa fa-twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="fa fa-facebook" />
                    </a>
                </li>
                </ul>
            </footer>
            <div className="bottom-links">
                <ul>
                <li>
                    <a href="#">Legal</a>
                </li>
                <li>
                    <a href="#">Privacy Center</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li>
                    <a href="#">Cookies</a>
                </li>
                <li>
                    <a href="#">About Ads</a>
                </li>
                </ul>
                <span className="copyright">© 2020 Spotify AB</span>
            </div>
            </div>
        </div>
</div>

    )
  }
}
