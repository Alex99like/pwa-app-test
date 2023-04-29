import React from 'react'
import styles from './Home.module.scss'
import Image from 'next/image'

import LisIcon from '../../assets/image/lisichca.png'
import BorIcon from '../../assets/image/borovik.png'
import CheIcon from '../../assets/image/blueberry.png'
import CluIcon from '../../assets/image/berries.png'

const prices = [
  { name: 'ЛИСИЧКА', price: '4.2', icon: LisIcon },
  { name: 'БОРОВИК', price: '4.2', icon: BorIcon },
  { name: 'ЧЕРНИКА', price: '2.2', icon: CheIcon },
  { name: 'КЛЮКВА', price: '3.2', icon: CluIcon },
]

export const Home = () => {
  return (
    <section className={styles.wrapper}>
      {prices.map(el => (
        <div className={styles.element}>
          <Image 
            src={el.icon}
            width={50}
            height={50}
            alt={el.name}
          />
          <span>{el.name}</span>
          <strong>{el.price} РУБ</strong>
        </div>
      ))}
    </section>
  )
}
