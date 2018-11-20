<template>
    <section id='about' class="s-about">

        <div class="row section-header has-bottom-sep" data-aos="fade-up">
            <div class="col-full">
                <h3 class="subhead subhead--dark">Hello There</h3>
                <h1 class="display-1 display-1--light">We Are Creative Nation</h1>
            </div>
        </div> <!-- end section-header -->

        <div class="row about-desc" data-aos="fade-up">
            <div class="col-full">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt. 
                </p>
            </div>
        </div> <!-- end about-desc -->

        <div class="row about-stats stats block-1-4 block-m-1-2 block-mob-full" data-aos="fade-up">
                
            <div class="col-block stats__col ">
                <div class="stats__count">127</div>
                <h5>Awards Received</h5>
            </div>
            <div class="col-block stats__col">
                <div class="stats__count">1505</div>
                <h5>Cups of Coffee</h5>
            </div>
            <div class="col-block stats__col">
                <div class="stats__count">109</div>
                <h5>Projects Completed</h5>
            </div>
            <div class="col-block stats__col">
                <div class="stats__count">102</div>
                <h5>Happy Clients</h5> 
            </div>

        </div> <!-- end about-stats -->

        <div class="about__line"></div>

    </section> <!-- end s-about -->

</template>

<script>
export default {

}
</script>

<style>
.s-about {
    padding-top: 16.2rem;
    padding-bottom: 9rem;
    background-color: #ff0000a2;
    color: #010507;
    position: relative;
    text-align: center;
}

.s-about .section-header.has-bottom-sep::before {
    background-color: rgba(255, 255, 255, 0.25);
    
}

.about-desc {
    font-size: 2.4rem;
    line-height: 1.75;
    text-align: center;
    max-width: 1024px;
}


/* ------------------------------------------------------------------- 
 * ## about stats
 * ------------------------------------------------------------------- */
.about-stats {
    text-align: center;
}

.stats__col {
    margin: 5.4rem 0;
    padding: 0 2rem;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    border-right: 1px solid rgba(255, 255, 255, 0.25);
}

.stats__col:last-child {
    border-right: none;
}

.stats__count {
    font-family: "montserrat-bold", sans-serif;
    font-size: 8.4rem;
    line-height: 1;
    color: #FFFFFF;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.stats h5 {
    font-family: "montserrat-semibold", sans-serif;
    margin-top: 1.8rem;
    color: #000000;
    font-size: 1.8rem;
    line-height: 1.333;
    position: relative;
}

.about__line {
    display: block;
    width: 2px;
    height: 10.2rem;
    background-color: #FFFFFF;
    position: absolute;
    right: 7.2rem;
    top: 0;
}


/* ------------------------------------------------------------------- 
 * responsive:
 * about
 * ------------------------------------------------------------------- */
@media only screen and (max-width: 1200px) {
    .about-desc {
        font-size: 2.2rem;
        max-width: 940px;
    }
    .about-stats {
        padding-top: 3rem;
        padding-bottom: 3.9rem;
    }
    .about-stats {
        max-width: 800px;
    }
    .stats__col {
        margin: 1.5rem 0;
    }
    .stats__col:nth-child(n) {
        border: none;
    }
    .stats__col:nth-child(2n+1) {
        border-right: 1px solid rgba(255, 255, 255, 0.25);
    }
}

@media only screen and (max-width: 800px) {
    .about-desc {
        font-size: 2rem;
        max-width: 600px;
    }
    .stats__count {
        font-size: 8rem;
    }
    .stats h5 {
        margin-top: 1.2rem;
    }
}

@media only screen and (max-width: 700px) {
    .about__line {
        right: 5.5rem;
    }
}

@media only screen and (max-width: 600px) {
    .s-about {
        padding-top: 12rem;
    }
    .about-desc {
        font-size: 1.9rem;
    }
    .about-stats {
        padding-top: 0;
    }
    .stats__col {
        margin: 0;
        padding-top: 3rem;
        padding-bottom: 3rem;
        position: relative;
    }
    .stats__col::after {
        content: "";
        display: block;
        height: 1px;
        width: 250px;
        background-color: rgba(255, 255, 255, 0.25);
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -125px;
    }
    .stats__col:last-child::after {
        display: none;
    }
    .stats__col:nth-child(n) {
        border: none;
    }
    .about__line {
        height: 7.2rem;
    }
}

@media only screen and (max-width: 400px) {
    .about-desc {
        font-size: 1.8rem;
    }
    .stats__count {
        font-size: 7.8rem;
    }
}

</style>
