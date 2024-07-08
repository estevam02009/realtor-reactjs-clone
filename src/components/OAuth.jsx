import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function OAuth() {

    const navigate = useNavigate();

    async function onGoogleClick() {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // check for the user
            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }

            navigate('/');
        } catch (error) {
            toast.error('Algo deu errado!');
        }
    }

    return (
        <button 
            type="button"
            onClick={onGoogleClick}
            className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-900"
        >
            <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
            Continue com Google
        </button>
    )
}