var users = [
    {
    name: 'Lucy',
    gender: 'F',
    hobby: 'pets, programming, wine',
    avatar: 'avatar1.png'
    },
    {
    name: 'Maria',
    gender: 'F',
    hobby: 'pets, dance, outdoor',
    avatar: 'avatar2.png'
    },
    {
    name: 'Luna',
    gender: 'F',
    hobby: 'pets',
    avatar: 'avatar5.png'
    },
    {
    name: 'Jossie',
    gender: 'F',
    hobby: 'xbox, series, movies',
    avatar: 'avatar4.png'
    },
    {
    name: 'Dany',
    gender: 'M',
    hobby: 'hiking, dance, outdoor',
    avatar: 'avatar3.png'
    },
    {
    name: 'Mike',
    gender: 'M',
    hobby: 'painting, running, pets',
    avatar: 'avatar6.png'
    },
    {
    name: 'Richard',
    gender: 'M',
    hobby: 'xbox, series, movies',
    avatar: 'avatar7.png'
    }
];

window.addEventListener('load', () => { //cuando la pagina ya esta cargada
    console.log('ya se cargo la pagina');

    function search(){
        
        results.innerHTML = '';

        var hobbyField = document.getElementById('hobby');//obtengo el campo de hobby
        var hobby = hobbyField.value;//obtengo el contenido del campo hobby
        console.log(hobby);

        var genderField = document.getElementById('gender');
        var selected = genderField.selectedIndex;
        var gender = genderField.options[selected].value;
        console.log(gender);

        var resultsHTML = '';
        var numberUsers = users.length;
        

        for(var i = 0; i < numberUsers; i++){
            if(gender == 'A' || gender == users[i].gender && hobby == '' || hobby == users[i].hobby){
                resultsHTML += '<div class="person-row">\
                                 <img src="images/' + users[i].avatar + '" alt="persona" />\
                                 <div class="person-info">\
                                 <div>' + users[i].name + '</div>\
                                 <div>' + users[i].hobby +'</div></div>\
                                 <button>Add as friend</button></div>';
            }
        }
        results.innerHTML = resultsHTML;
    };

    var results = document.getElementById('results');
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
    search();

})
