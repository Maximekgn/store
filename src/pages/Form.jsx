import React from 'react';

const Form = () => {
    // State pour le mode de connexion
    const [loginMode, setLoginMode] = React.useState(true); 
    
    // State des données du formulaire
    const [data, setData] = React.useState({
        email: '',
        phoneNumber :'' ,
        username: '',
        password: '',
        passwordConfirmation: '',
    });

    // Fonction pour changer de mode de connexion
    const handleChangeloginMode = (e) => {
        e.preventDefault();
        setLoginMode(!loginMode);
    };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e) => { // j'ai utiliser l'api de fakestore api
        e.preventDefault(); 

        // Si le mode de connexion est actif, on effectue une requête de connexion
        if (loginMode) {
            try {
                const response = await fetch('https://fakestoreapi.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: data.username,
                        password: data.password
                    })
                });
                const json = await response.text();
                console.log(json);
            } catch (error) {
                console.error(error);
            }
        }
        // Sinon, on effectue une requête d'inscription
        else {
            try {
                const response = await fetch('https://fakestoreapi.com/users',{
                    method:"POST",
                    body:JSON.stringify(
                        {
                            email:data.email,
                            username:data.username,
                            password:data.password,
                            phone:data.phoneNumber
                        }
                    )
                });
                const json = await response.text();
                console.log(json);
            } catch (error) {
                console.error(error);
            }
        }


    };
    

    // Fonction pour gérer les changements des champs du formulaire
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    };

    return (
        <>
            {/* Formulaire */}
            <form 
                onSubmit={handleSubmit} 
                className={`flex flex-col items-center border border-black w-[500px] p-4 space-y-4 ${loginMode ? 'h-[500px]' : 'h-[700px]'}`}
            >
                {/* Titre du formulaire */}
                <h1 className="text-2xl font-bold mb-12">{loginMode ? "loginMode" : "Inscription"}</h1>

                {/* Champs email */}
                <div className={`${loginMode ? 'hidden' : 'block w-full'}`}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={data.email} 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
                        onChange={handleChange} 
                    />
                </div>

                {/* Champs numéro de téléphone */}
                <div className={`${loginMode ? 'hidden' : 'block w-full'}`}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input 
                        type="number" 
                        id="phoneNumber" 
                        value={data.phoneNumber} 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
                        onChange={handleChange} 
                    />
                </div>

                {/* Champs nom d'utilisateur */}
                <div className="w-full">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={data.username} 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
                        onChange={handleChange} 
                    />
                </div>

                {/* Champs mot de passe */}
                <div className="w-full">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={data.password} 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
                        onChange={handleChange} 
                    />
                </div>

                {/* Champs de confirmation du mot de passe */}
                <div className={`${loginMode ? 'hidden' : 'block w-full'}`}>
                    <label htmlFor="passwordConfirmation" className="block text-sm font-medium text-gray-700">Confirmez le mot de passe</label>
                    <input 
                        type="password" 
                        id="passwordConfirmation" 
                        value={data.passwordConfirmation} 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
                        onChange={handleChange} 
                    />
                </div>

                {/* Bouton de soumission */}
                <div className="w-full">
                    <button 
                        type="submit" 
                        className="w-full border border-black bg-gray-200 rounded-md p-2 hover:bg-gray-300"
                    >
                        {loginMode ? "Connexion" : "Inscription"}
                    </button>
                </div>

                {/* Lien pour passer en mode de connexion */}
                <p className="text-sm text-gray-600 mt-4">
                    {loginMode ? "Vous n'avez pas encore de compte ? " : "Vous avez déjà un compte ? "} 
                    <a href="#" className='underline' onClick={handleChangeloginMode}>
                        {loginMode ? "Inscription" : "Connexion"}
                    </a>
                </p>
            </form>
        </>
    );
};

export default Form;

