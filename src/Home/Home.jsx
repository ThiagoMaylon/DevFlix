import { useState } from "react"
import { Header } from "../components/Header"
import { MenuMobile } from "../components/MenuMobile"

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <MenuMobile isVisible={isVisible} setIsVisible={setIsVisible}/>
      <Header setIsVisible={setIsVisible}/>
    </>
  )
}

