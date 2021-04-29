    import {useState, useContext, useEffect} from 'react';
    import {Link, useHistory} from "react-router-dom";
    import FirebaseContext from '../context/firebase'

    export default function Login(){
    const history = useHistory();
    const{firebase} = useContext (FirebaseContext);

    const [emailAddress, setemailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, serError] = useState('');
    const isInvalid = password === '' || emailAddress ==='';

    const handleLogin = () => {};

    useEffect(() =>{
        document.title = 'Login - CBIT NTWK';
    },[] );

    return ( 
        <div className="container py-48 flex-col mx-auto max-w-screen-md items-center">
                    <div className ="flex mx-auto">
                        <h7 className="flex flex-col mx-auto max-w-screen-md items-center">
                            <img class="object-contain md:object-scale-down" src="/images/logo.png" alt="CSOC" className="mt-2 w-6/12 mb-4" />
                        </h7>

                        {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                        <form className="flex flex-col  mx-auto max-w-screen-md items-center" onSubmit={handleLogin} method="POST">
                            <input
                                aria-label="Enter your email address"
                                type="text"
                                placeholder="Email address"
                                className="text-sm text-gray-base mr-3 py-5 px-4 h-2 border 
                                border-gray-primary rounder mb-2"
                                onChange={({ target }) => setemailAddress(target.value)}
                            />
                            <input
                                aria-label="Enter your email password"
                                type="password"
                                placeholder="Password"
                                className="text-sm text-gray-base mr-3 py-5 px-4 h-2 border 
                                border-gray-primary rounder mb-2"
                                onChange={({ target }) => setPassword(target.value)}
                            />
                            <button
                                disabled={isInvalid}
                                type="submit"
                                className={`bg-blue-500 text-white w-full rounded h-8 font-bold
                                ${isInvalid && 'opacity-50'}`}
                                >
                                Login
                                </button>
                        </form>
                    </div>
                    <div className="flex justify-center items-center flex-col  p-4 ">
                        <p className="text-sm"> Don't have an account?{` `}
                            <Link to="/signup" className="font-bold text-blue-medium">
                                Sign Up
                            </Link>
                        </p>
                    </div>
        </div>
    );
    } 

    //colors
    //text-red-primary ->
    //text-gray-base   ->
    //border-gray-primary
    //bg-blue-medium