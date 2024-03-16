import Form from 'react-bootstrap/Form';

export default function SelectWash() {
  return (
    <Form.Select aria-label="Default select example" style={{borderColor:"black", borderWidth:"2px",borderRadius:"50px", fontSize:"100%"}}  >
        <option value="1">Basic interior</option>
        <option value="2">Basic wash</option>
        <option value="3">Basic package</option>
        <option value="4">Deep interior</option>
        <option value="5">Wash, Decontamination, Clay and Seal</option>
        <option value="6">One step polish</option>
        <option value="7">2 step paint correction</option>
        <option value="8">1 year ceramic coating</option>
        <option value="9">3-5 year ceramic coating</option>


    </Form.Select>
  );
}


