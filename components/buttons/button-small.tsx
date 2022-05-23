import { useState, useEffect } from "react";
import styles from "./button-small.module.css"

<<<<<<< HEAD
const ButtonSmall = ({ val }: { val: String }) => {
  
=======
const ButtonSmall: NextPage = () => {
>>>>>>> 618d1143eb414c7169fb0ab10e87406d5c72de09
  return (
      <button className = {styles.button}>{val}</button>
  )
}

export default ButtonSmall
