import React, { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { register } from "../services/APIservices";
import { useNavigate } from "react-router-dom";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

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
		e.preventDefault()
		if (!user.email || !user.password) {
			alert("Todos los cmapos son obligatorios")
			return
		}
		await register(user, navigate)
	}


	return (
		<>
			<div className="card position-absolute top-50 start-50 translate-middle invi">
				<div className="card-body">
					<p className="position-absolute top-0 start-50 translate-middle-x mt-2">Registro de Usuario</p>
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
								<p className="text-center mt-3" >Ya tienes cuenta? <a href="/Login">Login</a></p>
								<button type="submit" className="btn btn-outline-light btn-unsubmit mt-2">Crear cuenta</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
