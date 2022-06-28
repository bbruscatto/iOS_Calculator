import { SetStateAction, useState } from "react";


interface CalculatorProps {
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  digito: number;

}

export default function App({ onClick }: CalculatorProps) {
  const [input, setInput] = useState("0");
  const [secondInput, setSecondInput] = useState("0");
  const [math, setMath] = useState("");

  const addNumber = (digito: any) => {
    if (input === "0" || secondInput === "0") {
      return (
        setInput(digito)
      )
    }
    else {
      return (
        setInput(`${input}${digito}`)
      )
    }
  }

  const operator = (operador: string) => {
    return (
      setSecondInput(input),
      setInput("0"),
      setMath(operador)
    )
  }

  function equal(math: string) {
    switch (math) {
      case "+": return setInput((Number(secondInput) + Number(input)).toString())
      case "-": return setInput((Number(secondInput) - Number(input)).toString())
      case "*": return setInput((Number(input) * Number(secondInput)).toString())
      case "/": return setInput((Number(secondInput) / Number(input)).toString())
    }
  }

  const percentage = () => {
    return (
      setInput((Number(input) / 100).toString())
    )
  }


  const invert = () => {
    return (
      setInput((Number(input) * (-1)).toString())
    )
  }

  const clear = () => {
    return (
      setInput("0"),
      setSecondInput("0"),
      setMath("")
    )
  }



  const decimal = () => {
    if (input.toString().includes(".")) {
      return
    }
    else {
      setInput(`${input}${"."}`)
    }
  }

  console.log(`${input} input`)
  console.log(`${secondInput} secinput`)


  return (
    <div className="App">
      <div className="display">{input}</div>
      <div className="row">
        <button className="grey" onClick={() => clear()}>AC</button>
        <button className="grey" onClick={() => invert()}>+/-</button>
        <button className="grey" onClick={() => percentage()}>%</button>
        <button className="orange" onClick={() => operator("/")}>÷</button>
      </div>
      <div className="row">
        <button onClick={() => addNumber(7)}>7</button>
        <button onClick={() => addNumber(8)}>8</button>
        <button onClick={() => addNumber(9)}>9</button>
        <button className="orange" onClick={() => operator("*")}>x</button>
      </div>
      <div className="row">
        <button onClick={() => addNumber(4)}>4</button>
        <button onClick={() => addNumber(5)}>5</button>
        <button onClick={() => addNumber(6)}>6</button>
        <button className="orange" onClick={() => operator("-")}>-</button>
      </div>
      <div className="row">
        <button onClick={() => addNumber(1)}>1</button>
        <button onClick={() => addNumber(2)}>2</button>
        <button onClick={() => addNumber(3)}>3</button>
        <button className="orange" onClick={() => operator("+")}>+</button>
      </div>
      <div className="row">
        <button className="zero" onClick={() => addNumber(0)}>0</button>
        <button onClick={() => decimal()}>.</button>
        <button className="orange" onClick={() => equal(math)}>=</button>
      </div>
    </div>
  );
}

