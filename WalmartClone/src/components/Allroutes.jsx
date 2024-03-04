import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Cart } from "./Cart";
import Signin from "./Signin";
import { AuthContext } from "../AuthContext/AuthProvider";
import AccountCreateForm from "../form/AccountCreateForm";
import OtpForm from "../form/OtpForm";
import Pin from "../form/Pin";
import { Checkout } from "./Checkout";
import SearchProduct from "./SearchProduct";
import { ProductDetails } from "./ProductDetails";
import Login from "../form/Login";


export const Allroutes = () => {
  const {search}=useState("")
  return (
    <>
      <Routes>
        {/* {setSign()} */}
        <Route path="/" element={<Home />} />
        <Route path="/home/cart" element={<Cart />} />
        <Route path="/account/signUp" element={<Signin/>} />
        <Route path="/account/create" element={<AccountCreateForm/>}/>
        <Route path="/account/otp" element={<OtpForm/>}/>
        <Route path="/account/login" element={<Login/>}/>
        <Route path="/account/verify" element={<Pin/>}/>
        <Route path="/product/checkout" element={<Checkout/>}/>
        <Route path={`/product/:id`} element={<SearchProduct/>}/>
        <Route path={"/product/details"} element={<ProductDetails/>}/>
      </Routes>
    </>
  );
};
