import React, { useEffect, useState } from "react"
import { login } from "../services/APIservices";
import { useNavigate } from "react-router-dom";

export const Login = () => {


    useEffect(() => {
    }, [])

    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const changeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const unSubmit = async (e) => {
       e.preventDefault();
        login(user, navigate);
    }

    return (
        <>
            <div className="card position-absolute top-50 start-50 translate-middle invi">
                <div className="card-body">
                    <p className="position-absolute top-0 start-50 translate-middle-x mt-2">Inicio de session</p>
                    <form onSubmit={unSubmit}>
                        <div className="position-absolute top-50 start-50 translate-middle mt-2">
                            <label className="form-label fw-bold">Email</label>
                            <div className="input-group mb-2">
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    className="form-control invi"
                                    placeholder="Email"
                                    onChange={changeInput}
                                />
                            </div>
                            <label className="form-label fw-bold">Password</label>
                            <div className="input-group passw">
                                <input
                                    type="password"
                                    name="password"
                                    value={user.password}
                                    className="form-control invi"
                                    placeholder="Password"
                                    onChange={changeInput}
                                />
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <p className="text-center mt-3" >No tienes cuenta? <a href="/Home">Crea una cuenta</a></p>
                                <button type="submit" className="btn btn-outline-light btn-unsubmit mt-2">Ingresar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
