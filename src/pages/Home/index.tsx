import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { toogleValue } from '../../redux/sliceFormWhitResult';
import { useToogleValue } from '../../redux/sliceFormWhitResult';
import { useFormData } from '../../redux/sliceForm';
import { useDataResult } from '../../redux/sliceResult';
import { Container } from "./style"

export const Home = () =>{
  const dispatch = useDispatch();
  const formWhitResult = useSelector(useToogleValue);
  const formData = useSelector(useFormData);
  const resultData = useSelector(useDataResult);

  useEffect(()=>{
    if(formWhitResult){
      dispatch(toogleValue());
      console.log(formData);
      console.log(resultData);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[formWhitResult])
  return (
    <Container className="container">
      <h1>Collaboration Proposal</h1>
      <Link to={'/forms'}> 
        Fill the form
        <MdOutlineNavigateNext size={35} color="#129BA8"/>
      </Link>
    </Container>
  )
}