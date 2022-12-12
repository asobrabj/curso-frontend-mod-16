    /* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('form-1');

if(formulario1)
    formulario1.addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopPropagation();

        if( this.getAttribute('class').match(/erro/) ) {
            return false;
        }
        
        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if(!isNaN(numero)) {
                notas.push(numero);
            }

        }

        texto = 'Cadastro feito com sucesso!';

        document.getElementById('resultado').innerHTML = texto;

    });

    /* validando campos */
    function validaCampo(elemento){

        elemento.addEventListener('focusout', function(event) {
    
            event.preventDefault();
    
            if(this.value == ""){
                document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
                this.classList.add('erro');
                this.parentNode.classList.add('erro');
                return false;
            } else {
                document.querySelector('.mensagem').innerHTML = "";
                this.classList.remove('erro');
                this.parentNode.classList.remove('erro');
            }
    
        });
    
    }


    function validaEmail(elemento){

        elemento.addEventListener('focusout', function(event) {
    
            event.preventDefault();
            
            const emailValido = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
            //console.log(this.value.match(emailValido));
                                              
            if( this.value.match(emailValido) ){
                document.querySelector('.mensagem').innerHTML = "";
                this.classList.remove('erro');
                this.parentNode.classList.remove('erro');
            } else {
                document.querySelector('.mensagem').innerHTML = "verifique o preenchimento do campos e-mail";
                this.classList.add('erro');
                this.parentNode.classList.add('erro');
                return false;
            }
    
        });
    
    }

 
    /* validando campos pecorrendo os inputs */
    let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
    let camposEmail = document.querySelectorAll('input.email');
    
    for( let emFoco of camposObrigatorios) {
        validaCampo(emFoco);
    }
    
    for( let emFoco of camposEmail) {
        validaEmail(emFoco);
    }

