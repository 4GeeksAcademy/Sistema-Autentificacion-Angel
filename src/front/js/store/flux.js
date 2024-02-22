const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
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

			signup: (email, password) => {
				fetch(
				  `https://improved-space-journey-5gqg6p99pvpp2v5x7-3000.app.github.dev/signup`,
				  {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password }),
				  }
				)
				  .then((response) => {
					if (!response.ok) {
					  throw Error(response.status);
					}
					return response.json();
				  })
				  .then((data) => {
					setStore({ user: data });
				  })
				  .catch((error) => {
					console.log(error);
				  });
		
				alert("Usuario creado con éxito")
			  },
			},
		  };
		};


export default getState;
