import { collection, doc, setDoc } from 'firebase/firestore'
import { firestore } from '../../firebase'

const emailCollection = collection(firestore, 'emails')

export function addEmail(email: string) {
    const emailDoc = doc(firestore, 'emails', email)
    return setDoc(emailDoc, {
        email,
    })
}
