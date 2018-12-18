
var app = new Vue({

    el : '#app' ,
    data:{

        message : 'Bonjour'
    },

    methods : {



        reverseMessage : function() {


            return this.message.split('').reverse().join('')
        }
    }


});
