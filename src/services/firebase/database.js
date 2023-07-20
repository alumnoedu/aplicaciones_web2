import {etfirestore, getFirestore} from "firebase/firestore";
import conexion from "./";
import {doc, setboc } from "firebase/firestore";

const db = getFirestore(conexion);
function login(email, password)
