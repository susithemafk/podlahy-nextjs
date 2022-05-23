import { useState, useEffect } from "react";
import styles from "./button-small.module.css"

const ButtonSmall = ({ val }: { val: String }) => {
  
  return (
      <button className = {styles.button}>{val}</button>
  )
}

export default ButtonSmall
