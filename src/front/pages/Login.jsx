import React, { useEffect, useState } from "react"
import { login } from "../services/APIservices";
import { useNavigate } from "react-router-dom";

export const Login = () => {


    useEffect(() => {
    }, [])
    const [error, setError] = useState("");
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
       setError("");
       
		if (!user.email.trim() || !user.password.trim()) {
			setError("Todos los campos son obligatorios");
			return
		}
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
                            <div>
                            <div className="d-flex justify-content-between">
                                <p className="text-center mt-3" >No tienes cuenta? <a href="/">Crea una cuenta</a></p>
                                <button type="submit" className="btn btn-outline-light btn-unsubmit mt-2">Ingresar</button>
                            </div>
                            <div className="">
									{error && (
										<div className="alert alert-danger py-2" role="alert">
											{error}
										</div>
									)}
								</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
