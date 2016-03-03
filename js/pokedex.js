$(document).ready(function()  {
  carga()
})

baseUrlService = 'http://pokeapi.co/api/v2/';
allPokemons = [];



var carga = function() {
    $listPokemons = $('#list-pokemons');

    // get all pokemons
    $.ajax({
        type: 'GET',
        url: baseUrlService + 'pokemon/'
    }).done(function(response) {
        allPokemons = response;
        // list all pokemons
        $.each(allPokemons, function(i, pokemon) {
            $listPokemons
                .append('<button class="list-group-item" id="'+(i + 1)+'" OnClick="mostrar(this)" data-url="' + pokemon.url + '"> '+ pokemon.name + '</button>');
        });
    }).fail(function() {
        console.log('Ups¡ Something wrong happens.');
    });
};

var mostrar = function(btn)  {
  $('#habilidades').empty()
  
  var ruta = baseUrlService + 'pokemon/' + btn.id

  $.get(ruta, function (res) {
    $('#nombre').text(res.name)
    $('#no').text(res.id)
    $('#exp').text(res.base_experience)
    $('#alt').text(res.height)
    $('#peso').text(res.weight)

    habilidades(res.abilities)

  })
}

  var habilidades = function(h)  {
    $.each(h, function(i, habilidad) {
      var hab = habilidad.ability.name
      $('#habilidades').append('<li>'+habilidad.ability.name+'</li>')
    })
  }
