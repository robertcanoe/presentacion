'use client';
import { useState } from 'react';
import Button from './Button';

const Contando = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h3>Contando</h3>
      <p>Contador: {contador}</p>
      <Button incremento={1} onClick={(inc) => setContador(contador + inc)} />
      <Button incremento={10} onClick={(inc) => setContador(contador + inc)} />
      <Button incremento={100} onClick={(inc) => setContador(contador + inc)} />
      <Button incremento={1000} onClick={(inc) => setContador(contador + inc)} />
    </div>
  );
};

export default Contando;