<template>
       <section id="contact" class="s-contact">

        <div class="overlay"></div>
        <div class="contact__line"></div>

        <div class="row section-header" data-aos="fade-up">
            <div class="col-full">
                <h3 class="subhead">Contact Us</h3>
                <h1 class="display-2 display-2--light">Reach out for a new project or just say hello</h1>
            </div>
        </div>

        <div class="row contact-content" data-aos="fade-up">
            
            <div class="contact-primary">

                <h3 class="h6">Send Us A Message</h3>

                <form name="contactForm" id="contactForm" method="post" action="" novalidate="novalidate">
                    <fieldset>
    
                    <div class="form-field">
                        <input name="contactName" type="text" id="contactName" placeholder="Your Name" value="" minlength="2" required="" aria-required="true" class="full-width">
                    </div>
                    <div class="form-field">
                        <input name="contactEmail" type="email" id="contactEmail" placeholder="Your Email" value="" required="" aria-required="true" class="full-width">
                    </div>
                    <div class="form-field">
                        <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value="" class="full-width">
                    </div>
                    <div class="form-field">
                        <textarea name="contactMessage" id="contactMessage" placeholder="Your Message" rows="10" cols="50" required="" aria-required="true" class="full-width"></textarea>
                    </div>
                    <div class="form-field">
                        <button class="full-width btn--primary">Submit</button>
                        <div class="submit-loader">
                            <div class="text-loader">Sending...</div>
                            <div class="s-loader">
                                <div class="bounce1"></div>
                                <div class="bounce2"></div>
                                <div class="bounce3"></div>
                            </div>
                        </div>
                    </div>
    
                    </fieldset>
                </form>

                <!-- contact-warning -->
                <div class="message-warning">
                    Something went wrong. Please try again.
                </div> 
            
                <!-- contact-success -->
                <div class="message-success">
                    Your message was sent, thank you!<br>
                </div>

            </div> <!-- end contact-primary -->

            <div class="contact-secondary">
                <div class="contact-info">

                    <h3 class="h6 hide-on-fullwidth">Contact Info</h3>

                    <div class="cinfo">
                        <h5>Where to Find Us</h5>
                        <p>
                            1600 Amphitheatre Parkway<br>
                            Mountain View, CA<br>
                            94043 US
                        </p>
                    </div>

                    <div class="cinfo">
                        <h5>Email Us At</h5>
                        <p>
                            contact@creativenation.com
                    
                        </p>
                    </div>

                    <div class="cinfo">
                        <h5>Call Us At</h5>
                        <p>
                            Phone: (+63) 555 1212<br>
                            Whatsapp: (+63) 555 0100<br>
                        </p>
                    </div>

                    <ul class="contact-social">
                        <li>
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                        </li>
                       
                    </ul> <!-- end contact-social -->

                </div> <!-- end contact-info -->
            </div> <!-- end contact-secondary -->

        </div> <!-- end contact-content -->
    <!-- footer
        ================================================== -->
        <footer>
                <div class="col-twelve">
                    <div class="copyright">
                        <span>© Copyright Creative Nation 2018</span> 
                            
                    </div>

                    <div class="go-top">
                        <a class="smoothscroll" title="Back to Top" href="#top"><i class="icon-arrow-up" aria-hidden="true"></i></a>
                    </div>
                </div>

        </footer> <!-- end footer -->
    </section> <!-- end s-contact -->


</template>

<script>
export default {

}
</script>

<style>
.s-contact {
    background-color: #151515;
    background-image: url("../../images/contact-bg.jpg");
    background-repeat: no-repeat;
    background-position: center, center;
    padding-top: 15rem;
    padding-bottom: 12rem;
    color: rgba(255, 255, 255, 0.5);
    position: relative;
}

.s-contact .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .8;
    background-color: #151515;
}

.s-contact .form-field {
    position: relative;
}

.s-contact .form-field:after {
    content: "";
    display: table;
    clear: both;
}

.s-contact .form-field label {
    font-family: "montserrat-light", sans-serif;
    font-size: 1rem;
    line-height: 2.4rem;
    position: absolute;
    bottom: -0.3rem;
    right: .6rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
    padding: 0 2rem;
    margin: 0;
    color: #FFFFFF;
    background: #ff6163;
}

.s-contact .form-field label::after {
    content: "";
    position: absolute;
    left: -5px;
    top: 50%;
    margin-top: -6px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid #ff6163;
}

.contact__line {
    display: block;
    width: 2px;
    height: 20.4rem;
    background-color: #ff6163;
    position: absolute;
    left: 50%;
    top: -10.2rem;
    margin-left: -1px;
}

.contact-content {
    max-width: 1000px;
    background-color: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.4);
    padding-top: 6rem;
    padding-bottom: 6rem;
    font-family: "montserrat-light", sans-serif;
    font-size: 1.5rem;
    line-height: 2;
    position: relative;
}

.contact-content h3 {
    margin-top: 0;
    margin-bottom: 6.6rem;
    color:#ff6163;
}

.contact-content h5 {
    margin-top: 0;
    color: #ff6163;
}

.contact-content input[type="email"],
.contact-content input[type="number"],
.contact-content input[type="search"],
.contact-content input[type="text"],
.contact-content input[type="tel"],
.contact-content input[type="url"],
.contact-content input[type="password"],
.contact-content textarea,
.contact-content select {
    color: rgba(255, 255, 255, 0.6);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    margin-bottom: .9rem;
}

.contact-content input[type="email"]:focus,
.contact-content input[type="number"]:focus,
.contact-content input[type="search"]:focus,
.contact-content input[type="text"]:focus,
.contact-content input[type="tel"]:focus,
.contact-content input[type="url"]:focus,
.contact-content input[type="password"]:focus,
.contact-content textarea:focus,
.contact-content select:focus {
    color: #FFFFFF;
    border-bottom: 1px solid #ff6163;
}

.contact-content button,
.contact-content .btn {
    margin-top: 3.6rem;
}
.contact-content input::-webkit-input-placeholder,
.contact-content select::-webkit-input-placeholder,
.contact-content textarea::-webkit-input-placeholder {
    color: #4f4f4f;
}

.contact-content input:-moz-placeholder,
.contact-content select:-moz-placeholder,
.contact-content textarea:-moz-placeholder {
    color: #4f4f4f;    /* Firefox 18- */
}

.contact-content input::-moz-placeholder,
.contact-content select::-moz-placeholder,
.contact-content textarea::-moz-placeholder {
    color: #4f4f4f;    /* Firefox 19+ */
}

.contact-content input:-ms-input-placeholder,
.contact-content select:-ms-input-placeholder,
.contact-content textarea:-ms-input-placeholder {
    color: #4f4f4f;
}

.contact-content input.placeholder,
.contact-content select.placeholder,
.contact-content textarea.placeholder {
    color: #4f4f4f !important;
}
.contact-primary, .contact-secondary {
    float: left;
    padding: 0 5rem;
}

.contact-primary {
    width: 65%;
}

.contact-primary #contactForm {
    margin-top: -1.5rem;
}

.contact-secondary {
    width: 35%;
}

.contact-secondary::before {
    content: "";
    display: block;
    width: 35%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #121212;
}

.contact-secondary .contact-info {
    position: relative;
}

.contact-secondary .cinfo {
    margin-bottom: 4.8rem;
}

.contact-social {
    list-style: none;
    display: inline-block;
    margin: 0;
    font-size: 2rem;
}

.contact-social li {
    margin-right: 15px;
    padding-left: 0;
    display: inline-block;
}

.contact-social li a {
    color: white;
}

.contact-social li a:hover, 
.contact-social li a:focus {
    color: #ff6163;
}

.contact-social li:last-child {
    margin: 0;
}

.message-warning, 
.message-success {
    display: none;
    background: #111111;
    font-size: 1.5rem;
    line-height: 2;
    padding: 3rem;
    margin-bottom: 3.6rem;
    width: 100%;
}

.message-warning {
    color: #ff6163;
}

.message-success {
    color: #ff6163;
}

.message-warning i, .message-success i {
    margin-right: 10px;
    font-size: 1.2rem;
}


/* form loader
 * ----------------------------------------------- */
.submit-loader {
    display: none;
    position: relative;
    left: 0;
    top: 1.8rem;
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;
}

.submit-loader .text-loader {
    display: none;
    font-family: "montserrat-regular", sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.846;
    color: #FFFFFF;
    letter-spacing: .2rem;
    text-transform: uppercase;
}

.oldie .submit-loader .s-loader {
    display: none;
}

.oldie .submit-loader .text-loader {
    display: block;
}


/* --------------------------------------------------------------- 
 * ## loader animation 
 * --------------------------------------------------------------- */
.s-loader {
    margin: 1.2rem auto 3rem;
    width: 70px;
    text-align: center;
    -webkit-transform: translateX(0.45rem);
    -ms-transform: translateX(0.45rem);
    transform: translateX(0.45rem);
}

.s-loader > div {
    width: 9px;
    height: 9px;
    background-color: #FFFFFF;
    border-radius: 100%;
    display: inline-block;
    margin-right: .9rem;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out both;
    animation: bouncedelay 1.4s infinite ease-in-out both;
}

.s-loader .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

.s-loader .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

@-webkit-keyframes bouncedelay {
    0%, 80%, 100% {
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0);
    }
    40% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes bouncedelay {
    0%, 80%, 100% {
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0);
    }
    40% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }
}


/* ------------------------------------------------------------------- 
 * responsive:
 * contact
 * ------------------------------------------------------------------- */
@media only screen and (max-width: 1200px) {
    .contact-content {
        max-width: 900px;
    }
}

@media only screen and (max-width: 1000px) {
    .contact-content {
        max-width: 700px;
    }
    .contact-primary, .contact-secondary {
        float: none;
        width: 100%;
    }
    .contact-primary #contactForm {
        margin-top: -1.5rem;
        margin-bottom: 7.2rem;
    }
    .contact-secondary .hide-on-fullwidth {
        display: none;
    }
    .contact-secondary::before {
        display: none;
    }
    .message-warning, .message-success {
        margin-bottom: 6rem;
    }
}

@media only screen and (max-width: 800px) {
    .contact-content h3 {
        color: #ff6163;
        text-align: center;
    }
}

@media only screen and (max-width: 600px) {
    .s-contact {
        padding-top: 12rem;
        padding-bottom: 0;
    }
    .contact__line {
        height: 14.4rem;
        top: -7.2rem;
    }
    .contact-content {
        padding-bottom: 12rem;
        text-align: center;
    }
    .contact-primary, .contact-secondary {
        padding: 0 20px;
    }
}

@media only screen and (max-width: 400px) {
    .contact-primary, .contact-secondary {
        padding: 0 5px;
    }
}

</style>
