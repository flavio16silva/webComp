class CardNews extends HTMLElement {
  //Classe que herda de HTMLElement, é responsável por criar o elemento customizado.
  //Construtor da Classe
  constructor() {
    //Metodo Contrutor, primeiro a ser executado na classe.
    super() //Invocar o metodo construtor de quem estamos herdando.

    const shadow = this.attachShadow({ mode: 'open' }) //Criando um escopo para os elementos internos do componente, onde outros códigos JS podem influenciar.
    //shadow.innerHTML = '<h1>Hello Flávio</h1>' //Dentro desse HTML interno dessa sombra coloca um h1.
    shadow.appendChild(this.build())
    shadow.appendChild(this.styles())
  }

  //Construir os elementos em conjunto
  build() {
    const componentRoot = document.createElement('div')
    componentRoot.setAttribute('class', 'card') //setando uma propriedade classe com valor card

    const cardLeft = document.createElement('div')
    cardLeft.setAttribute('class', 'card__left')

    const autor = document.createElement('span')
    autor.textContent = 'By ' + (this.getAttribute('autor') || 'Anonymous') //pegando o atributo AUTOR e colocando no texto do span.

    const linkTitle = document.createElement('a')
    linkTitle.textContent = this.getAttribute('title')
    linkTitle.href = this.getAttribute('link-url') || '#'

    const newsContent = document.createElement('p')
    newsContent.textContent = this.getAttribute('content')

    //Filhos do CardLeft
    cardLeft.appendChild(autor)
    cardLeft.appendChild(linkTitle)
    cardLeft.appendChild(newsContent)

    const cardRight = document.createElement('div')
    cardRight.setAttribute('class', 'card__right')

    //Filhos do CardRight
    const newsImage = document.createElement('img')
    newsImage.src = this.getAttribute("photo") || 'assets/default.jpg'
    newsImage.alt = 'Foto de Noticia'
    cardRight.appendChild(newsImage)

    //Filhas do ComponentRoot
    componentRoot.appendChild(cardLeft)
    componentRoot.appendChild(cardRight)

    return componentRoot
  }

  //Aplicar todo o estilo do 'componente'
  styles() {
    const style = document.createElement('style')
    style.textContent = `
    .card {
      width: 80%;  
      -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
      box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    .card__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    
    .card__left span {
      font-weight: 400;
    }
    
    .card__left a {
      text-decoration: none;
      margin-top: 15px;
      color: black;
      font-size: 25px;
      font-weight: bold;
    }
    
    .card__left p {
      color: rgba(70, 70, 70);
    }
    `

    return style
  }
}

customElements.define('card-news', CardNews) //(elemento customizado - seletor, classe de molde - construtor )

/*
O que é um Component? 
É um conjunto de elementos, que são tags isoladas. 
È um JS que vai retornar HTML, CSS e mais JS
*/
