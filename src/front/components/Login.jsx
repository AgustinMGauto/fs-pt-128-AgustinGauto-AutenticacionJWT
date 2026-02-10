export const Login = () => {

    return(
        <>
			<div className="card position-absolute top-50 start-50 translate-middle invi">
				<div className="card-body">
					<p className="position-absolute top-0 start-50 translate-middle-x mt-2">Registro de Usuario</p>
					<div className="position-absolute top-50 start-50 translate-middle mt-2">
						<label className="form-label fw-bold">Email</label>
					<div class="input-group mb-2">
						<input 
						type="email" 
						className="form-control invi" 
						placeholder="Email" 
						aria-label="Recipient's username" 
						aria-describedby="basic-addon2" 
						/>
					</div>
						<label className="form-label fw-bold">Password</label>
					<div className="input-group passw">
						<input 
						type="password" 
						className="form-control invi" 
						placeholder="Password" 
						aria-label="Recipient's username" 
						aria-describedby="basic-addon2" 
						/>
					</div>
					<div className="d-flex justify-content-between mt-2">
					<p className="text-center mt-3" >Ya tienes cuenta? <a href="/Login">Login</a></p>
					<button type="button" class="btn btn-outline-light btn-unsubmit mt-2">Ingresar</button>
					</div>
					</div>
				</div>
			</div>
		</>
    );


}