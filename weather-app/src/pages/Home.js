"use client";
import { useEffect } from "react";
import getData from "../services/getData";

export default function Home() {
  useEffect(()=>{
    getData();
  })
  return (
    <>
    <h1> Hello next</h1>
    </>
  )
}