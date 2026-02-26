// import { useState } from 'react'
import './App.css'
import Calculator from "./Lifting State/calculator/Calculator";
import Counter from "./Lifting State/Counter/Counter";
import CartPage from "./Lifting State/Cart/CartPage";
import LikePage from "./Lifting State/Like System/LikePage";
import LivePreview from "./Lifting State/LEVEL 1/Uname Live Preview/LivePreview";
import ColorPage from "./Lifting State/LEVEL 1/Color Picker/ColorPage";
import ParentShowHide from "./Lifting State/LEVEL 1/Show Hide/ParentShowHide";
import UserList from "./MOCKING API/components/UserList";
import ProductList from "./MOCKING API/components/ProductList";
import DashboardData from "./PARALLEL API/components/DashboardData";
function App() {
  return (
    <>
      {/* <Calculator/>
      <Counter/>
      <CartPage/>
      <LikePage/> */}
      {/* <LivePreview/>
      <ColorPage/> */}
      {/* <ParentShowHide/> */}
      {/* <UserList/>
      <ProductList/> */}
      <DashboardData/>
    </>
  )
}

export default App
