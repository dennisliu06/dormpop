import { CardWrapper } from '../../_components/cardwrapper';

export default function LoginForm(){
    return(
        <CardWrapper
            headerLabel='Welcome back'
            backButtonLabel="Don't have an account?"
            backButtonHref='/signup'
        >
            Login Page
        </CardWrapper>
    )
}