import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Styles from './Style.module.css';

function Mycard({image}) {
  return (
    <Card className={`${Styles.bgdark} ${Styles.size} ${Styles.card}`}>
      <Card.Img variant="top" src={ image } />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Mycard;