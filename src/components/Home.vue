<template>
    <v-content id="parallax" @scroll.native="scroll()" style="background-position-y: 0">
        <div id="overlay__parallax"></div>
        <div class="position">
            <h1 class="title" :class="color">
                Hello World
            </h1>
        </div>
    </v-content>
</template>

<script>
export default {
    data (){
        return{
            color: 'white'
        }
    },
    methods : {
        scroll () {
            this.color = 'blue'
            var elem = document.getElementById('parallax')
            elem.style.backgroundPositionY = - (window.scrollY / 2) + 'px'
        }
    },
    mounted (){
        window.addEventListener("scroll", this.scroll)
    },
    destroyed (){
        window.removeEventListener("scroll", this.scroll)
    }
};
</script>

<style scoped>
#overlay__parallax{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .6;
    background-color: #000000;
    z-index: 0;
}
#parallax{
    margin: 0;
    padding: 0;
    background: url("../assets/hero-bg.jpg") no-repeat fixed;
    background-size: cover;
    height: 100%;
}
.position{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
}
</style>
