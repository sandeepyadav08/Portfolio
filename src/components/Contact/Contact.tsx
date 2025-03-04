import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact </h2>
        <p>We’d Love to Hear from You</p>
        <p>Feel Free to Reach Out.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:Hello@sandeepyadav.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:Hello@sandeepyadav.com">Hello@sandeepyadav.com</a>
        </div>
        <div>
        <a href="tel:+918209599454"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918209599454">(+91) 8209599454</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}