$(document).ready(function() {
    $('#texto').keypress(function( e ) {
        if ( e.which == 13 )
        {
            var texto = this.value

            AddMensagem('pessoa', texto)

            setTimeout( () => {
                botFala(texto)
            }, 2000)
        }
    })
})

var p_atual = "-1"

function botFala(resposta)
{
    if (p_atual == "-1" )
    {
        var resp = perguntas[0][1]
        p_atual = "0"
    }
    else 
    {
        var resp = perguntas.filter( linha => {
            if (linha[0] == resposta)
                return linha[1]
        })
    }
    AddMensagem('bot', resp)
}

function AddMensagem(classe, texto)
{
    var div = document.createElement("div") 
    $(div).addClass(classe)
        .html(texto)
        
    $('#mensagens').append(div)
}

var perguntas = [
    [ "0", "Olá sou o bot da ITE<br>Escolha uma das" +
            "opções abaixo<br>" +
            "1 - Coordenação<br>" +
            "2 - Secretarias<br>" +
            "3 - Flávio Toledo<br>" 
    ],
    [ "1", "Escolha o coordenador<br>"+
            "1 - Talon<br>" +            
            "2 - Edson Mitsuya<br>" +            
            "3 - Marcão<br>" +            
            "4 - Salete<br>"             
    ],
    [ "1.1", "Sobre o Talon, você quer?<br>"+
            "1 - Telefone<br>" +            
            "2 - Whataspp<br>" +            
            "3 - Telegram<br>" +            
            "4 - E-mail<br>"             
    ],
    [ "1.2", "Sobre o Talon, você quer?<br>"+
            "1 - Telefone<br>" +            
            "2 - Whataspp<br>" +            
            "3 - Telegram<br>" +            
            "4 - E-mail<br>"             
        ]

]