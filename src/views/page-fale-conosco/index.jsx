import './style.css';
import Header from '../components/header';
import Footer from "../components/footer";
import Envio from "../assets/img/envio.png";
import WhatsappLogo from "../assets/img/whtasap-logo.png";
import SuporteLogo from "../assets/img/suporte-logo.png";
import SacLogo from "../assets/img/sac-logo.png";
import VendasLogo from "../assets/img/vendas-logo.png";
import SetaOption from "../assets/img/seta-opition.png";

function FaleConosco() {
    const msg= (e) =>{
        alert('Mensagem não enviada, entre em contato pelo whatsapp');
       }
    return(
        <>
        
        <Header />
        <div className='principal'>
            <div className='formulario'>
                <div className='col1'>
                    <div className='tex-formulario'>
                        <h1 className='white-bold'>Tem alguma dúvida ou quer conversar com a gente?</h1>
                        <h3 className='grey-text'>Preencha o formulário ou entre em contato conosco através das nossas centrais:</h3>
                    </div>
                </div>

                <div className='col2'>
                <img className="seta-opition" src={SetaOption}/>
                    <select name="assunto" className="assunto" >
                        <option value="assunto">Assunto</option>
                        <option value="2">Elogio</option>
                        <option value="3">Indicação de Rede</option>
                        <option value="3">Reclamação</option>
                        <option value="3">Outros</option>
                  </select>
                    <input type="text" name="nome"placeholder= 'Nome'className="nome"/>
                    <input type="email" name="email" placeholder= 'E-mail'className="email"/>
                    <input type="number" name="number" placeholder= 'Telefone'className="number"/>
                    <input type="text" name="mensagem" placeholder= 'Mensagem'className="mensagem"/>
                    <div  onClick={msg} className="send-bottom">Enviar mensagem<img className="envio"src={Envio}/> </div>   
                </div>
                <div className='col3'>
                    <img className="whtasap-logo" src={WhatsappLogo}/>
                    <div id="linha-vertical"></div>
                    
                    <div className="contato-zap">
                        <h1 className='chamar-zap'>Chame a gente no <span>WhatsApp</span>, através do Atendimento Digital:</h1>
                        <h3 className='save-text'>Salve o nosso número</h3>
                        <div className='envio-tel'>
                            <h3 className='num-text'><div className='telefone-envio'>(21) 3952-9119</div> e envie um "Oi".</h3>
                        </div>
                        <h3 className='numero-text'>Agora é só digitar a opção desejada, e falar conosco.</h3>
                        <h3 className='numero-text'>Atendimento de segunda a sexta-feira das 7 às 19h.</h3>
                    </div>
                </div>
            </div> 
                    <h4 className='altorizacao'>*Ao enviar uma mensagem através do nosso site, você está autorizando a Klini entrar em contato com você."</h4>
                    
                    <div className='canais-klini'>
                        <h1 className='tex-canais'>Canais de atendimento Klini</h1>
                        
                        <div className='atendimento-klini'>
                            <div className='suporte'>
                                <img className='suporte-logo' src={SuporteLogo}/>
                                <h2 className='text-atendimento'>Suporte ao cliente:</h2>
                                <h3 className='contatos-tel'> <div className='tel'>(21) 3952-9190</div></h3>
                                <h5 className='text-duvida'>Dúvidas sobre planos, rede credenciada<br></br> e outros serviços para beneficiários Klini.</h5>
                            </div>
                            <div className='sac'>
                                <img className='sac-logo' src={SacLogo}/>
                                <h2 className='text-atendimento'>Sac 24h:</h2>
                                <h3 className='contatos-tel'>(21) 3952-9191</h3>
                                <h5 className='text-duvida'>Demais localidades: 0800-941-7920</h5>
                            </div>
                            <div className='vendas'>
                                <img className='vendas-logo' src={VendasLogo}/>
                                <h2 className='text-atendimento'>Central de Vendas:</h2>
                                <h3 className='contatos-tel'>(21) 3952-9150</h3>
                                <h5 className='text-duvida'>Dúvidas e aquisição de planos.<br></br>
                                Fale com nossa equipe de saúde online.</h5>                         
                            </div>
                        </div>    
                    </div>   
        </div>    
            
            
            

        <Footer/>
        
        </>
        
    )
}

export default FaleConosco