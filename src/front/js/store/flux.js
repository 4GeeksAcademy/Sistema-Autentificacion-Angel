const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: [],
			token: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			login: (email, password, navigate) => {
				fetch(process.env.BACKEND_URL + '/api/login',
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ email, password }),
					}
				)
				.then(response => response.json())
				.then((data) => {
					if (data.error) alert(data.error)
					//faltan cosas aqui
					else (
						localStorage.setItem("token", data.token),
						navigate('/private')
					)
				})
					.catch((error) => {
						console.log(error);
					});
			},

			signup: (email, password) => {
				fetch(process.env.BACKEND_URL + '/api/signup',
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ email, password }),
					}
				)
					.then(response => response.json())
					.then((data) => {
						if (data.error) alert(data.error)
						else Navigate('/login')
					})

					.catch((error) => {
						console.log(error);
					});

				alert("Usuario creado con éxito")
			},

			syncToken: () => {
                 let token = localStorage.getItem('token')
				 if (token) setStore({ token: token });
			},

			logout: () => {
				sessionStorage.removeItem('token');
				setStore({
					token: null,
				});
			},

			getUserData: async (user_id) => {
				try {
				  const response = await fetch(
					`${process.env.BACKEND_URL}/private/${user_id}`,
					{
					  method: "GET",
					  headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
					  },
					}
				  );
		
				  if (response.status === 200) {
					const data = await response.json();
					return data;
				  } else {
					throw new Error("Error al obtener datos del usuario");
				  }
				} catch (error) {
				  throw new Error(`Error fetching user data: ${error.message}`);
				}
			  },
		},
	};
};


export default getState;
