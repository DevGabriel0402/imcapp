import { useState } from 'react'
import { Container, Result, Loading } from './styles/styles'


function App() {

  // Definindo o estado inicial do componente utilizando o Hook useState
  const [resultado, setResultado] = useState({
    peso: '',
    altura: '',
    imc: '',
    classificacao: '',
  })


  // Função chamada quando há uma mudança no valor dos campos de entrada (onChange)
  const handleChange = (event) => {
    const { id, value } = event.target;

    // Remove caracteres não numéricos usando uma expressão regular
    const valorNumerico = value.replace(/[^0-9]/g, '');

    // Atualiza o estado com os novos valores numéricos
    setResultado((prevState) => ({
      ...prevState,
      [id]: valorNumerico,
    }));
  };

  // Função chamada quando uma tecla é pressionada nos campos de entrada (onKeyPress)
  const handleKeyPress = (event) => {
    // Permite apenas números e teclas de controle (como backspace)
    const isNumber = /[0-9]/.test(event.key);
    const isControlKey = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'].includes(event.key);

    // Impede a entrada de caracteres não numéricos
    if (!isNumber && !isControlKey) {
      event.preventDefault();
    }
  };



  // Função chamada ao clicar no botão "Calcular IMC"
  const calcularIMC = () => {
    // Obtém os valores dos campos de peso e altura
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Seleciona elementos do DOM para manipulação futura
    const divResultado = document.querySelector('.result-imc')
    const bar = document.querySelector('.bar')
    const paragrafo = document.querySelector('.info-result')
    const loading = document.querySelector('.loading')
    const toast = document.getElementById('toast')



    bar.classList.add('hidden')
    divResultado.classList.add('hidden')

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      alert('Insira valores numéricos válidos!');
      return;
    }

    // Calcula o IMC
    const imc = (peso / ((altura / 100) * (altura / 100))).toFixed(2);
    console.log(imc)

    // Atualiza o estado com os resultados do IMC
    setResultado({
      peso,
      altura,
      imc,
      classificacao: obterClassificacaoIMC(imc),
    });

    // Esconde o parágrafo informativo e exibe o indicador de carregamento
    paragrafo.classList.add('hidden')
    loading.classList.remove('hidden')

    // Aguarda 3 segundos antes de realizar ações adicionais
    setTimeout(() => {

      // Esconde o indicador de carregamento e exibe o resultado do IMC
      loading.classList.add('hidden')

      bar.classList.remove('hidden')
      divResultado.classList.remove('hidden')

      // Limpa os campos de peso e altura
      document.getElementById("peso").value = ""
      document.getElementById("altura").value = ""



    }, 3000)

    setTimeout(() => {

      // Esconde o indicador de carregamento e exibe o resultado do IMC
      paragrafo.classList.remove('hidden')

      bar.classList.add('hidden')
      divResultado.classList.add('hidden')


    }, 8000)




  }

  // Definindo a tabela com classificações de IMC
  const table = [
    {
      classname: "title impar",
      firstColumn: "IMC",
      secondtColumn: "Classificação",
    },
    {
      classname: "description par",
      firstColumn: "Menos de 17",
      secondtColumn: "Muito abaixo do peso",
    },
    {
      classname: "description impar",
      firstColumn: "Entre 17 e 18,49",
      secondtColumn: "Abaixo do peso",
    },
    {
      classname: "description par",
      firstColumn: "Entre 18,5 e 24,99",
      secondtColumn: "Peso normal",
    },
    {
      classname: "description impar",
      firstColumn: "Entre 25 e 29,99",
      secondtColumn: "Acima do peso",
    },
    {
      classname: "description par",
      firstColumn: "Entre 30 e 34,99",
      secondtColumn: "Obesidade I",
    },
    {
      classname: "description impar",
      firstColumn: "Entre 35 e 39,99",
      secondtColumn: "Obesidade II (severa)",
    },
    {
      classname: "description par",
      firstColumn: "Acima de 40",
      secondtColumn: "Obesidade III (mórbida)",
    }
  ]

  // Definindo os resultados a serem exibidos
  const result = [
    {
      name: 'Peso',
      value: resultado.peso,
      id: 'peso-value'
    },
    {
      name: 'Altura',
      value: resultado.altura,
      id: 'altura-value'
    },
    {
      name: 'IMC',
      value: resultado.imc,
      id: 'imc-value'
    },
    {
      name: 'Resultado',
      value: resultado.classificacao,
      id: 'result-value'
    },
  ]


  // Função que recebe o valor do IMC como parâmetro e retorna a classificação
  const obterClassificacaoIMC = (imc) => {

    // Verifica se o IMC é menor que 17
    if (imc < 17) {
      return 'Muito abaixo do peso';
    }
    // Verifica se o IMC está entre 17 (inclusive) e 18.5 (exclusive)
    else if (imc >= 17 && imc < 18.5) {
      return 'Abaixo do peso';
    }
    // Verifica se o IMC está entre 18.5 (inclusive) e 25 (exclusive)
    else if (imc >= 18.5 && imc < 25) {
      return 'Peso normal';
    }
    // Verifica se o IMC está entre 25 (inclusive) e 30 (exclusive)
    else if (imc >= 25 && imc < 30) {
      return 'Acima do peso';
    }
    // Verifica se o IMC está entre 30 (inclusive) e 35 (exclusive)
    else if (imc >= 30 && imc < 35) {
      return 'Obesidade I';
    }
    // Verifica se o IMC está entre 35 (inclusive) e 40 (exclusive)
    else if (imc >= 35 && imc < 40) {
      return 'Obesidade II (severa)';
    }
    // Se nenhuma das condições anteriores for atendida, retorna 'Obesidade III (mórbida)'
    else {
      return 'Obesidade III (mórbida)';
    }
  };



  // Renderização da interface do usuário usando JSX
  return (
    <Container>
      <div className='group-image'>
        <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple5/v4/fb/f8/5c/fbf85c9c-cc29-4e54-f016-5434152eb133/source/512x512bb.jpg" alt="imc icon" />
        <div className='shadow'></div>
      </div>
      <div className='info'>
        <label>Peso <span>(ex: 76)</span></label>
        <input type="text" id='peso' placeholder='kg' onChange={handleChange} onKeyPress={handleKeyPress} required />
      </div>
      <div className='info'>
        <label>Altura <span>(ex: 170)</span></label>
        <input type="text" id='altura' placeholder='cm' onChange={handleChange} onKeyPress={handleKeyPress} required />
      </div>
      <button onClick={calcularIMC}>Calcular</button>

      {/* Componente Result que contém os elementos da interface */}
      <Result>
        <Loading className='loading hidden'></Loading>
        <div className="bar hidden"></div>
        <p className='info-result'>Saiba agora se está no seu peso ideal!</p>
        <div className='result-imc hidden'>

          {/* Mapeia os resultados e os exibe em divs separadas */}
          {result.map((item, index) => (
            <div className='item' key={index}>
              <p className='name'>{item.name}</p>
              <p className='value' id={item.id}>{item.value}</p>

            </div>
          ))}
        </div>
      </Result>

      {/* Tabela de classificação do IMC */}
      <table>
        <tbody>
          {table.map((item, index) => (
            <tr key={index}>

              <th className={item.classname}>{item.firstColumn}</th>
              <th className={item.classname}>{item.secondtColumn}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default App
