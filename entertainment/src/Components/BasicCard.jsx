import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
/*
function BasicCard() {
  return (
    <Card style={{ width: 300,
        height: 400,
        border: "1px solid rgb(49, 54, 61)",
        backgroundColor: "#0d1117",
        color: "rgba(255, 255, 255, 0.5)", }}>
      <Card.Img variant="top" src="https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-0-1z5264082/app_cover/1440x8109a1f1b76b86749d68affac9a166ce03e.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
*/

function BasicCard({item}) {
    return (
      <Card style={{ width: 1000,
          height: 450,
          margin:" 0 16px",
          // border: "1px solid rgb(49, 54, 61)",
          backgroundColor: "#0d1117",
          color: "rgba(255, 255, 255, 0.5)", 
          borderRadius:"0px"}}>
        <Card.Img style={{height: 450,width: 1000,}} variant="top" src={item.image} />
      </Card>
    );
  }
  

export default BasicCard;