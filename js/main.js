        //chamando o jquery
        $(document).ready(function(){
            //fazendo o carroçel das imagens presentes no parametro #carrosel-img (slick)
            $('#carrosel-img').slick({
                //para a rolagem acontecer automaticamente
                autoplay:true
            })
            

            //slick
            $('.menu-hamburger').click(function(){
                /*O elemente slideToggle() ele faz uma verificação automatica se tem o slideDown ou SlideUp aplicado 
                no nosso elemento, se tiver aplicado o slideDown, quando clicado no elemento ele vai aplicar o slideUp
                e vice versa*/
                $('nav').slideToggle();
            })


            //mask
            $('#telefone').mask("(00)00000-0000", {
                placeholder:"(00)00000-0000"})
            $('#data-nascimento').mask("00/00/0000", {
                placeholder: "__/__/____"});
            
            
            //validate
            $('form').validate({
                rules:{
                    //o validate trabalha com o name dos objetos 
                    nome:{
                        required:true,
                        minlength:2
                    }, // <=== virgula em todos os campos 
                    email:{
                        required:true
                    },
                    telefone:{
                        required:true

                    },
                    veiculoDeInterrese:{
                        required:false
                    }
                },  // <=== virgula em todos os campos 
            messages: {
                nome:{
                    required:'este campo é obrigatorio ',
                    minlength:'adicione seu nome completo'
                },
                telefone:'adicione seu telefone ',
                email:'adicione seu email '

            },
            //quando o formulario for enviado com sucesso => submitHandler(): function(campo onde a validação acontece)
            //tudo que estiver dentro da function do submitHandler() sera exibido quando o formulario for enviado com sucesso
            //biblioteca validate
            submitHandler: function(form){
                console.log(form)
            },
            //quando o formulario nao conseguir ser validado com sucesso
            //tudo que estiver dentro da function do invalidHandler() sera exibido quando der errado
            //a function do invalidHandler vai pedir um evendo e um validador
            invalidHandler:function(evento,validador){
                //pegando o numero de campos invalidos
                let camposIncorretos = validador.numberOfInvalids();
                if(camposIncorretos){
                    alert(`existem ${camposIncorretos} campos incorretos`)
                }   
                }
            })

        $('.lista-veiculos button').click(function(){
            const contato = $('#contato')
            const nomeVeiuculo = $(this).parant().find('h3').text()
            $('#veiculo-interrese').val(nomeVeiuculo)
            $('html').animate({
                scrollTop: contato.offset().top
            },1000)
        })

        })