import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {
  

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Edgard Finotti Neto"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ad eius, enim facilis et ducimus iste libero exercitationem sint, est dolore minus explicabo, dicta animi. Magnam quae dolor quasi deleniti!"
          />
          <Post 
            author="Melina Losnak Moreno"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ad eius, enim facilis et ducimus iste libero exercitationem sint, est dolore minus explicabo, dicta animi. Magnam quae dolor quasi deleniti!"
          />
        </main>
      </div>
    </div>
  )
}


