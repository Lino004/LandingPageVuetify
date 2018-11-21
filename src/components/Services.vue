<template>

<section id="services">
    <div class="container">
        <div class="section-title col-xs-6 col-sm-3 col-md-2 col-lg-2">
            <h4><span class="accent-text">What We Do</span></h4>
        </div>
        
        <div class="row center-xs center-sm center-md center-lg trigger"><!--Row 1-->
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 hb vb">
                <div class="service-block">
                    <i class="icon fa fa-code"></i>
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula quis lectus rhoncus porttitor ac ut quam.</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 hb vb">
                <div class="service-block">
                    <i class="fa fa-laptop"></i>
                    <h3>Web Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula quis lectus rhoncus porttitor ac ut quam.</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 hb vb">
                <div class="service-block">
                    <i class="icon fas fa-mobile-alt"></i>
                    <h3>Fully Responsive</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula quis lectus rhoncus porttitor ac ut quam.</p>
                </div>
            </div>  
        
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 hb vb">
                <div class="service-block">
                    <i class="icon far fa-file-alt" ></i>
                    <h3>Well Documented</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula quis lectus rhoncus porttitor ac ut quam.</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 hb vb">
                <div class="service-block">
                    <i class="icon far fa-copy"></i>
                    <h3>Clean Code</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula quis lectus rhoncus porttitor ac ut quam.</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 hb vb">
                <div class="service-block">
                    <i class="icon fas fa-cogs"></i>
                    <h3>Custom Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula quis lectus rhoncus porttitor ac ut quam.</p>
                </div>
            </div>
        </div>
        
    </div>
</section>

</template>

<script>
export default {

}
</script>

<style>
#services {
    background:#000000;
    width: 100%;
   }

.service-block {
  padding: 20px; }
  .service-block .icon {
    color: #FB0B3F;
    font-size: 40px;
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
    -webkit-transition: all .3s ease-out;
    -o-transition: all .3s ease-out;
    transition: all .3s ease-out; }
  .service-block .service-icon-animate {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0); }

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0; }

img {
  width: 100%; 
}

.container {
  margin: auto;
  padding-top: 80px;
  padding-bottom: 80px; }

/***********************************UNIVERSAL STYLES***********************************/

@media screen and (max-width: 760px) {
  .container {
    padding-right: 25px;
    padding-left: 25px; } }

.section-title {
  font-size: 36px;
  text-align: center;
  margin-bottom: 50px; }

.accent-text {
  font-family: "Dancing Script", cursive;
  color: rgb(255, 255, 255); 
  left: 2;}

h2 {
  margin-bottom: 20px; }

h3 {
  margin-top: 20px;
  margin-bottom: 10px; 
  color: #ffffff;
  text-align: center;
  }
p {
  font-size: 12px;
  line-height: 1.6;
  color: #ffffff;
  text-align: justify; }

ul {
  list-style: none; }

li {
  display: inline-block; }

a {
  text-decoration: none; }

</style>
