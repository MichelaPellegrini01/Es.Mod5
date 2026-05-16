import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <Alert variant="success" className='my-4'>
      <Alert.Heading>Welcome Epicbooker</Alert.Heading>
      <p>
        we are grateful that you are here!
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  );
}

export default Welcome