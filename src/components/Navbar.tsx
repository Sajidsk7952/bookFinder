import React from "react";
// import logo from "@/components/mainLogo.svg";
import Image from "next/image";
import Link from "next/link";
function Navbar({className} : {className : string}):  JSX.Element{
  const LOGIN_STATE = false;
  return (
    <nav className={`${className} flex justify-between items-center my-4 py-2 mx-4 border-b border-b-white`}>
      <Image src={'/mainLogo.svg'} alt="navLogo" height="44" width="70" className="bg-white" priority={true}/>
      <ul className="flex gap-6">
        <li className="text-lg navLink"><Link href='/anime'>Anime</Link></li>
        <li className="text-lg navLink"><Link href='/novel'>Novels</Link></li>
        <li className="text-lg navLink"><Link href='/manga'>Manga</Link></li>
      </ul>
      {LOGIN_STATE ? (
        <ul className="flex gap-4">
          <li>
            <button>Profile</button>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      ) : (
        <ul className="flex gap-4">
          <li>
            <button>Login</button>
          </li>
          <li>
            <button>Sign Up</button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
