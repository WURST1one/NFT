import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link
import axios from 'axios'; // Importe Axios
import './Login.css'; 

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3001/posts', {
                username,
                password
            });
            
            if (response && response.data) {
                console.log('Usuário autenticado:', response.data);
                window.location.href = '/Arte'; 
            } else {
                console.error('Resposta inválida do servidor:', response);
            }
        } catch (error) {
            console.error('Erro ao autenticar usuário:', error.response.data);
        }
    };
    
    return (
        <section className="page-container">
            <div id="container" className="Logi-IN">
                <img width={"250px"} src="https://onedrive.live.com/embed?resid=F8587DFB6DC2AE2F%21142&authkey=%21AFF4uoa1cFZ6JzI&width=500&height=500" alt="imagem-login"/>
                <p style={{color: '#fff', fontWeight: 400}}>
                    Seja bem vindo, acesse e aproveite todo o conteúdo,
                    somos uma equipe de profissionais empenhados em
                    trazer o melhor conteúdo direcionado a você, usuário. 
                </p>
            </div>

            <div className="box-login">
                <div className="login-container">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <h1>
                                Olá! Seja bem vindo de volta.
                            </h1>
                            <label htmlFor="username">Usuário:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Senha:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
                    <Link to="/Arte">Entrar sem Login</Link>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
