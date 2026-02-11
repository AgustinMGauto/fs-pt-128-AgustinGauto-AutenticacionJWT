export const register = async (user, navigate) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json"
        }
    }) 
    const data = await response.json();
    if(response.ok){
        alert("Te has registrado correctamente !");
        navigate("/login");
    } else {
            alert("Error al registrase");
            return
        }
}

export const login = async (user, navigate) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json"
        }
    })
    const data = await response.json()
    if(!response.ok){
        alert(data.error);
        return
    }
    localStorage.setItem("token", data.token)
    navigate("/profile")
}

export const getProfile = async () => {
     const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/profile`,{
        headers: {
            "Authorization" : `Bearer ${localStorage.getItem("token")}`,
        },
     })
     if(!response.ok){
        return false;
     }
     const data = await response.json();
     return data
}