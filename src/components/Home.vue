<template>
    <v-content id="parallax" @scroll.native="scroll()" style="background-position-y: 0">
        <div id="overlay__parallax"></div>
        <div class="position">
            
            <!-- Top bar -->
            <nav class="level is-mobile">
                <!-- Icône of site -->
                <div class="level-left">
                    <img class="ma-3" src="../assets/logo.png" alt="HomePage" height="70" width="70">
                </div>

                <!-- Menu of site -->
                <div class="level-right">
                    <v-btn class="ma-3" color="rgba(255, 0, 0, 0.0)" dark depressed 
                      @click.stop="drawer = !drawer">
                        MENU<v-icon dark right>menu</v-icon>
                    </v-btn>
                    <v-navigation-drawer v-model="drawer" absolute temporary right dark
                      width="250" style="background-color: #0C0C0C">
                        <v-list>
                            <v-list-tile>
                                <v-list-tile-title>Navigation</v-list-tile-title>
                            </v-list-tile>
                        </v-list>

                        <v-list dense>

                            <v-list-tile v-for="item in items" :key="item.title">
                                <v-list-tile-action>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-navigation-drawer>
                </div>
            </nav>
        </div>
    </v-content>
</template>

<script>
export default {
    data (){
        return{
            color: 'white',
            items: [
                { title: 'Home', icon: 'dashboard' },
                { title: 'About', icon: 'question_answer' },
                { title: 'Service', icon: 'question_answer' }
            ],
            drawer: null
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
    background: url("http://www.bricho.com/demo/brian/with-particles/img/hero8.jpg") no-repeat center fixed;
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
