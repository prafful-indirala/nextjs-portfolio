"use client"
import { useState } from "react";
import Main from "../components/Main";
import Header from "../components/Header";

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? 'dark' : ""}>
      <Header isDark={isDark} setIsDark={val => setIsDark(val)} />
      <Main />
    </div>
  );
}
