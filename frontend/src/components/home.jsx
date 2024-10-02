import { Container, Alert } from "react-bootstrap";


const Home=(()=>{
    return(
        <Container>
    {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
        </Container>
    )
})

export default Home;