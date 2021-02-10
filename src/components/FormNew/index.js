import React from "react";
import {useState} from "react";
import Form from "../Form";
import Input from "../Input";
import { useForm } from 'react-hook-form';
import Button from "../Button"
import Div from "../Div"




const FormNew = () => {
  const { register, handleSubmit } = useForm();
  const [valor, setvalor] = useState('');
  const [list,setLista] = useState([]);

  const submit = (event) => {

    let num= valor;
    let zeta=0, newvalue;
    let lista = [0,1,1,2];

    for (var i = 4; i < 50; i++) {
      lista[i]=lista[i-1]+lista[i-2];
    }

    for (var i = 49; i >= 0; i--) {

      if (num >= lista[i]) {
        newvalue = num-lista[i];
        num = newvalue;
        zeta++;

        if (num == 0) {
          setLista(zeta);
          break;
        }
      }
    }
  };

  return (

    <Div>
      <Form onSubmit={handleSubmit(submit)}>
        <input type="number" name="valor" placeholder="Valor"  onChange={event => setvalor(event.target.value)} />
        <Button>Enviar</Button>
      </Form>

      <ul><li>{list}</li></ul>

    </Div>

  );

};
export default FormNew;
