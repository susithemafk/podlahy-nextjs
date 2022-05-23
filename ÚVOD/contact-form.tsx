import { useState } from 'react'
import ButtonSmall from '../components/buttons/button-small'
import styles from './contact-form.module.css'

const ContactForm = () => {

    const [jmeno, setJmeno] = useState("")
    const [prijmeni, setPrijmeni] = useState("")
    const [email, setEmail] = useState("")
    const [telcislo, setTelcislo] = useState("")
    const [adresa, setAdresa] = useState("")
    const [datum, setDatum] = useState("")


    const handleSubmit = () => {
        console.log({
            "jmeno": jmeno, 
            "prijmeni": prijmeni, 
            "email": email, 
            "telcislo": telcislo, 
            "adresa": adresa, 
            "datumm": datum
        })
    }

  return (
    <div className = {styles.contactForm}>
        <section className = {styles.container}>
            <h3 className = "h3">Kontaktní formulář</h3>
            <form className = {styles.form}>
                {/* LEFT */}
                <div className = {styles.formLeft}>
                    <input type = "text" placeholder = "Jméno" value = {jmeno} onChange = {a => setJmeno(a.target.value)} />
                    <input type = "text" placeholder = "Příjmení" value = {prijmeni} onChange = {a => setPrijmeni(a.target.value)} />
                    <input type = "text" placeholder = "Email" value = {email} onChange = {a => setEmail(a.target.value)} />
                    <input type = "text" placeholder = "Telefonní číslo" value = {telcislo} onChange = {a => setTelcislo(a.target.value)} />
                    <input type = "text" placeholder = "Adresa" value = {adresa} onChange = {a => setAdresa(a.target.value)} />
                    <input type = "text" placeholder = "Představa o datu např.: duben 2022" value = {datum} onChange = {a => setDatum(a.target.value)} />

                    <select name = "prostor" required>
                        <option selected disabled>Prostor - vyberte</option>
                        <option value = "Rodinný dům">Rodinný dům</option>
                        <option value = "Kancelář">Kancelář</option>
                        <option value = "Byt">Byt</option>
                        <option value = "Prodejna">Prodejna</option>
                        <option value = "Jiné">Jiné</option>
                    </select>
                    <select name = "druh-podlahy" required>
                        <option value = 'Koberec'>Druh podlahy - vyberte</option>
                        <option value = "Koberec">Koberec</option>
                        <option value = "PVC">PVC</option>
                        <option value = "Vinyl">Vinyl</option>
                        <option value = "Jiné">Jiné</option>
                    </select>
                </div>
                {/* RIGHT */}
                <textarea className = {styles.formRight} placeholder = "Podrobnější informace, například: Do kuchyně... " />
           </form>
           <button className = {styles.button} type = "submit" onClick = {handleSubmit}>dfd</button>
           <p>{jmeno}</p>
           <p>{prijmeni}</p>
           <p>{datum}</p>
        </section>
    </div>
  )
}

export default ContactForm
