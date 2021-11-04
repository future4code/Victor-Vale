import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fgvr3-1.fna.fbcdn.net/v/t31.18172-8/18623666_1564491636957391_4841639208783113531_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_eui2=AeG0UoL4WS4gtvw-DR2lX8oLo6sg41w7uIKjqyDjXDu4gm0ROa_mrrddiadk2JDqd-OvETks6gPqZlqumjPGVSBZ&_nc_ohc=H1wOfOvufmYAX_ze7v4&_nc_ht=scontent.fgvr3-1.fna&oh=0a08c04180eeb5f65d0095c8939dc2cd&oe=61A6F25A" 
          nome="Victor Ferreira do Vale" 
          descricao="Olá! Meu nome é Victor Ferreira do Vale e sou formado em engenharia mecânica. Fui estagiário numa oficina de usinagem e atualmente faço curso na área de desenvolvimento full stack, gosto bastante de programação e de cieências exatas."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div>
        <h3>Email</h3>
      <CardPequeno 
          imagem="https://s.manualdousuario.net/wp-content/uploads/2018/02/Logo-do-Gmail-960x540.png" 
          texto=" vferreiradovale@gmail.com " 
        />
        <h3>Endereço</h3>
        <CardPequeno 
          imagem="data:image/png;base64,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" 
          texto="Avenida Brasil, 2067, Gov. Valadares - MG" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://engenha.com/noticias/75946.jpg" 
          nome="Estagiário" 
          descricao="Estagiário de Engenharia Mecânica na JJ retífica de motores - Vendedor - atualmemnte programador " 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E22AQEJ1NGuOuP_-g/feedshare-shrink_1280/0/1596584184395?e=1639008000&v=beta&t=NwOd8J7HT-0mayfysV17ugMWQNB-0GLKzH_Ci48MA6c" 
          nome="Engenheiro autônomo" 
          descricao="Desenvolvimento de projetos mecânicos para diversos setores da indústira metal/mecânica ." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
