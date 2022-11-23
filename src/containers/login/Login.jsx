import React from 'react'
import { Main, DivContenedor,Form } from '../../style-components/login/Components'
import {GroupLabel, ButtonAutenticar, ButtonLogin, ButtonRegister, DivForgotPassword} from '../../components/login/index'
import { Player } from '@lottiefiles/react-lottie-player';

const Login = () => {
  return (
    <Main>
        <div className=' flex justify-center items-center h-[100vh]'>
            <DivContenedor>
                    <h1 className="text-4xl font-medium">Login</h1>
                    <p className="text-slate-500">Hi, Welcome back 👋</p>

                    <ButtonAutenticar urlImg="https://www.svgrepo.com/show/355037/google.svg" textSpan="Login with Google"/>
                    <ButtonAutenticar urlImg="https://www.svgrepo.com/show/355037/google.svg" textSpan="Login with Facebook"/>

                    <Form action="">
                        <GroupLabel textP="Email address" type="email" placeholder="Enter email address"/>
                        <GroupLabel textP="Password" type="password" placeholder="Enter your password"/>

                        <DivForgotPassword textA="Forgot Password?" textInput="Remenber me"/>

                        <ButtonLogin textSpan="Login" />
                        <ButtonRegister textP="Not registered yet" textSpan="Register now"/>
                    </Form>
            </DivContenedor>
            <div>
                <Player
                    src='https://assets7.lottiefiles.com/packages/lf20_tpnk0wok.json'
                    className="player"
                    loop
                    autoplay
                />
            </div> 
        </div>
    </Main>
  )
}

export default Login