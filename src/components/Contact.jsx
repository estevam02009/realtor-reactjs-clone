import { doc, getDoc } from "firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "../firebase"
import { toast } from "react-toastify"

export default function Contact({ userRef, listing}) {

    const [landlord, setLandlord] = useState(null)
    const [message, setMessage] = useState("")

    useEffect(() => {
        async function getLandlord() {
            const docRef = doc(db, 'users', userRef)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists()) {
                setLandlord(docSnap.data())
            } else {
                toast.error('Não foi possível obter os dados do proprietário')
            }
        }

        getLandlord()
    }, [userRef])

    function onChange(e) {
        setMessage(e.target.value)
    }

    return (
        <>
            {landlord !== null && (
                <div className="flex flex-col w-full">
                    <p>
                        Contato {landlord.name} para o {listing.name.toLowerCase()}:
                    </p>
                    <div className="mb-6 mt-3">
                        <textarea
                            name="message"
                            id="message"
                            rows="2"
                            value={message}
                            onChange={onChange}
                            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                        ></textarea>
                    </div>

                    <a
                        href={`mailto:${landlord.email}?Subject=${listing.name}&body=${message}`}
                    >
                        <button
                            type="button"
                            className="px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out w-full"
                        >
                            Enviar Mensagem
                        </button>
                    </a>
                </div>
            )}
        </>
    )
}