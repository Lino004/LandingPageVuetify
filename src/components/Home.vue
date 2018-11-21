<template>
 
<section id="hero">
    <div class="overlay"></div>
    <div id="particles-js">
        <div class="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
            <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <div class="hero-content">
                    <div class="row home-content__main">

                <h4>Welcom to Creative Nation</h4>

                <h1>
                    We are a creative group <br>
                    of people who design <br>
                    influential brands and <br>
                    digital experiences.
                </h1>

                <div class="home-content__buttons">
                    <a href="#contact" class="smoothscroll btn btn--stroke">
                        Start a Project
                    </a>
                    <a href="#about" class="smoothscroll btn btn--stroke">
                        More About Us
                    </a>
                </div>

            </div>

            <div class="home-content__scroll">
                <a href="#about" class="scroll-link smoothscroll">
                    <span>Scroll Down</span>
                </a>
            </div>

                </div>
            </div>
        </div>
        <div>
            <ul class="home-social">
                <li>
                  <a href="#0"><i class="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></a>
                </li>
                <li>
                  <a href="#0"><i class="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></a>
                </li>
                <li>
                  <a href="#0"><i class="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></a>
                </li>
                <li>
                    <a href="#0"><i class="fa fa-whatsapp" aria-hidden="true"></i><span>Whatsapp</span></a>
                </li>
                
            </ul> 
        </div>
    </div>
</section>
    
</template>

<script>
var count_particles, stats, update;
export default {
    data() {
        return {
           
        }
    },
    methods: {
        //ma fonction
        ma_methode () {
            // instruction
        }
    }
};
</script>

<style>
#hero {
  background: url("http://www.bricho.com/demo/brian/with-particles/img/hero8.jpg") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  height: 20%;
  position: relative;
  z-index: 1; 
  padding-top: 18em;}
#hero .overlay{
     position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.603);
}
#particles-js {
  width: 100%;
  height: 100%; }

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); }
  .hero-content h1 {
    font-size: 50px;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 10px; }
  .hero-content h4 {
    font-size: 30px;
    color: #bfbfbf; }

      ul {
    list-style: disc;
}
ul.disc li {
    display: list-item;
    list-style: none;
    padding: 0 0 0 .8rem;
    position: relative;
}
.btn--stroke{
    margin-top:12em;
    margin-right: 4em;
    border: #bfbfbf solid 1px;
}

</style>
