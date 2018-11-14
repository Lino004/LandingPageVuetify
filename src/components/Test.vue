<template>
    <section>
        <v-parallax :src="require('@/assets/hero-bg-r1.jpg')" height="900" jumbotron>

            <v-toolbar color="rgba(0, 0, 0, 0.0)" class="elevation-0" dark>

                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Title</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn flat>Link One</v-btn>
                    <v-btn flat>Link Two</v-btn>
                    <v-btn flat>Link Three</v-btn>
                </v-toolbar-items>

            </v-toolbar>
            <div id="overlay__parallax"></div>
            <v-layout align-start justify-center column fill-height>

                <div style="height: 30%">
                    <h1 class="display-2 font-weight-thin mb-3">
                    We are a creative group 
                    of people who design 
                    influential brands and 
                    digital experiences.
                </h1>
                <h4 class="subheading">Build your application today!</h4>
                </div>

            </v-layout>
            
        </v-parallax>
    </section>
</template>

<script>
export default {};
</script>

<style>
#overlay__parallax{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .6;
    background-color: #000000;
    z-index: -1;
}
</style>
