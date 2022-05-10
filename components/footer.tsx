import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Footer: NextPage = () => {
  return (
    <div className={styles.container}>
        <section id = "section-kontakt">
            <h3 id = "seckontakt-kontakt" className = "b">KONTAKT</h3>
            <p id = "seckontakt-paragraph" className = "p">Podívejte se na naše další sítě nebo nás kontaktujte s jakýmkoli dotazem!</p>
            <div id = "seckontakt-odkazy-a-legalinfo-div">
                <ul id = "seckontakt-odkazy" className = "p">
                    <li id = "phone">kkt</li>
                    <li id = "phone">kkt</li>
                    <li id = "phone">kkt</li>
                    <li id = "phone">kkt</li>
                </ul>
                <ul id = "seckontakt-nazev-odkazu">
                    <li id = "phone">INSTAGRAM</li>
                    <li id = "phone">INSTAGRAM</li>
                    <li id = "phone">INSTAGRAM</li>
                    <li id = "phone">INSTAGRAM</li>
                </ul>
                <ul id = "seckontakt-legalinfo" className = "p">
                    <li><p>Lukáš Sucharda</p></li>
                    <li><p>Hvozdnice 000</p></li>
                    <li><p>252 05</p></li>
                    <li><p>IČ: 123456789</p></li>
                    <li><p>DIČ: CZ123456789</p></li>
                </ul>
                <ul id = "seckontakt-legalinfo2" className = "p">
                    <li><p>Sídlo firmy: </p></li>
                    <li><p>Hvozdnice 000</p></li>
                    <li><p>702 123 123</p></li>
                </ul>
            </div>
            <div>
                <svg />
            </div>
            <p>@podlahy-sucharda</p>
            <li id = "fb" />


        </section>

    </div>
  )
}

export default Footer
