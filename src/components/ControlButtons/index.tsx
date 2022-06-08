import { Link } from 'react-router-dom';

import { ContainerButtons } from "./style"

interface ControlButtonsProps{
  next: string;
  prev: string;
}

export const ControlButtons = ({next, prev}:ControlButtonsProps) =>{

  return (
    <ContainerButtons>
      <button type='submit'>Next</button>
      <button type='submit'>Prev</button>
      <button type='reset'>Cancel</button>
    </ContainerButtons>
  )

}