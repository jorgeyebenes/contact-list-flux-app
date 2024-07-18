import React, { useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Home = () => {

	const {actions, store} = useContext(Context)

	useEffect (()=>{
		actions.createAgenda()
	},[])

	return (
		<h1>Contact List</h1>
	)
}
