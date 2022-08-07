import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

const DImport = dynamic(() => import('../components/DClone'), {ssr: false});


export default function Home() {
  return (
    <div style={{display:"flex", minHeight: "100vh", alignItems: "center"}}>
      <DImport></DImport>
    </div>
  )
}
