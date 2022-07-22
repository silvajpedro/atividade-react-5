import React, { Component }  from 'react'

class Salada extends Component {

state = {

	ingrediente: [{quantidade:1, legume: "Alface"},

        {quantidade:3, legume: "Tomate"},

        {quantidade:"200g", legume: "milho"},

        {quantidade:"110g", legume: "azeitonas"},

        {quantidade:"150g", legume: "palmito"},

        {quantidade:1,
          legume: "pepino"},       
      ]
}
  render() {
    return(
<div>
{this.state.ingrediente.map ((item) =>(
<div>
  <p>Lista de itens da Salada {item.quantidade} {item.legume}</p>
  </div>
))}
      </div>
    )
  }
}
export default Salada