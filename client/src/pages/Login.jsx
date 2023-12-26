import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
const Login = () => {
    return (
    <>
        <Form>
            <Row style={{
                height:"100",
                justifyContent:"center",
                paddingTop : "20%",
            }}>
                <Col xs={6}>
                    <Stack gap={3}>
                        <h2>Login</h2>
                            <Form.Control type="text" placeholder="Name" />
                            <Form.Control type="text" placeholder="Email" />
                            <Form.Control type="text" placeholder="password" />
                            <Button variant="primary" type="submit">
                            Login
                            </Button>

                            <Alert variant="danger"><p>An Error occured</p></Alert>
                    </Stack>
                </Col>
            </Row>
        </Form>
    </> 
    );
};
export default Login;