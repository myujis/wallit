import { 
    Root,
    Form,
    Input,
    Button,
    Title,

} from './styled';
import Logo from '../../images/wallitverde.png'

function Login() {
    return (
    <Root>
        <Form>
        <Title src={Logo}/>
            <Input 
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required/>
            <Input 
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required/>
            <Button type="submit" value="Confirm">Login</Button>
        </Form>
    </Root>
    );
}
export default Login;