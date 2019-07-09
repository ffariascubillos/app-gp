//app
var App = {
    todo: function(){
        //todo acá
        console.log("Hola");
        //menu mobil
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {
                //options
            });
        });
    }
};
//inicia toda la app
App.todo();