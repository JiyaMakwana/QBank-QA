// import { useState } from 'react'
import './App.css'
import Calculator from "./Lifting State/calculator/Calculator";
import Counter from "./Lifting State/Counter/Counter";
import CartPage from "./Lifting State/Cart/CartPage";
import LikePage from "./Lifting State/Like System/LikePage";
import LivePreview from "./Lifting State/LEVEL 1/Uname Live Preview/LivePreview";
import ColorPage from "./Lifting State/LEVEL 1/Color Picker/ColorPage";

function App() {
  return (
    <>
      {/* <Calculator/>
      <Counter/>
      <CartPage/>
      <LikePage/> */}
      <LivePreview/>
      <ColorPage/>
    </>
  )
}

export default App
