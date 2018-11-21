<template>
   <div class="wrap col-9">
		<div class="menu col-9">
			<header><h1>Portfolio</h1></header>
		</div>
		<div >
			<figure class="img-wrap col-5">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Beetle_macro.jpg/640px-Beetle_macro.jpg" alt="" title="macro"></figure>
			<figure class="img-wrap col-5">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Bee_crocus_macro_2.jpg/640px-Bee_crocus_macro_2.jpg" alt="" title="macro"></figure>
			<figure class="img-wrap col-5">
				<img src="http://www.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/09/30/Pictures/collection-manhattan-fashion-presents-spring-creation-summer_b6ae7d52-8715-11e6-ad59-fe0cd67003de.jpg" alt="" title="fashion"></figure>
			<figure class="img-wrap col-5">
				<img src="https://cdn.shopmined.com/content/PyBzc92-s.jpg" alt="" title="fashion"></figure>
			<figure class="img-wrap col-5">
				<img src="http://2013.neutralmagazine.com/wp-content/uploads/2013/04/GEDC0564.jpg" alt="" title="architecture"></figure>
			<figure class="img-wrap col-5">
				<img src="http://s3.amazonaws.com/libapps/accounts/35327/images/Baltimore_architecture.jpg" alt="" title="architecture"></figure>

		</div>

	</div>	

</template>

<script>
export default {

}
</script>

<style>
html,body,div,figure,img,header,ul,li,a{
	margin: 0;
	padding: 0;
	border: 0;
}
/*layout*/
.col-10{
	max-width: 1000px;
	width: 100%;
	margin: 0px;
	box-sizing: border-box;
}
.col-5{
	max-width: 400px;
	width: 33.333333%;
	margin: 0px;
	box-sizing: border-box;
}
/*items*/
.portfolio{
	padding-top: 2em;
	clear: both;
}
.menu{
	padding: .3em .3em;
}
.wrap{
	padding: 0px;
}
img{width: 110%;
	opacity: 1;
	transition: opacity .4s;
    z-index: -1;}

figure{
	float: left;
	position: relative;
	line-height: 0;
	padding: .3em;
	cursor: pointer;
}
.img-wrap:before{
	content: '';
	position: absolute;
	top: .3em;
	left: .3em;
	right: .3em;
	bottom: .3em;
	background-color: rgba(255,255,255,.7);
	opacity: 0.5;
	transition: opacity 1s,	background-color .4s; 
}
.img-wrap:hover:before{
	background-color: rgba(251,11,63,1);
	opacity: 0;

}

h1{color: #444;
	font-size: 44px;
	font-family: 'Open Sans Condensed', sans-serif;}
nav{
	margin-top: 45px;
}
nav ul li {
	display: inline;
}
nav ul li a{
	text-decoration: none;
	padding: .5em 1.5em.5em;
	color: #444;
	font-size: 18px;
	font-family: 'Open Sans Condensed', sans-serif;
	transition: color .6s, background-color .2s;
}
nav ul li a:hover{
	background-color: #FB0B3F;
	color: #fff;
}
.active a{
	border: solid 1px #FB0B3F;
	color: #FB0B3F;
}

@media only screen and (min-width: 600px) {
	header{float: left}
	nav{float: right;
		text-align: right;}
}

</style>
