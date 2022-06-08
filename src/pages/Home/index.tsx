import { Link } from 'react-router-dom';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { Container } from "./style"

export const Home = () =>{
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