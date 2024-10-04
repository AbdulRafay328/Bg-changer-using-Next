"use client";

import { useState } from "react";

function Bg() {
  const [color, setColor] = useState("grey");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div
        className=" nav flex flex-wrap justify-around items-center h-14"
        style={{ backgroundColor: "black" }}
      >
        <button
          onClick={() => {
            setColor("red");
          }}
          style={{ backgroundColor: "red" }}
          className="w-16 h-8 rounded-xl text-lg border text-white border-solid border-white"
        >
          Red
        </button>

        <button
          onClick={() => {
            setColor("blue");
          }}
          style={{ backgroundColor: "blue" }}
          className="w-16 h-8 rounded-xl text-lg border text-white border-solid border-white"
        >
          Blue
        </button>

        <button
          onClick={() => {
            setColor("green");
          }}
          style={{ backgroundColor: "green" }}
          className="w-16 h-8 rounded-xl text-lg border text-white border-solid border-white"
        >
          Green
        </button>

        <button
          onClick={() => {
            setColor("yellow");
          }}
          style={{ backgroundColor: "yellow" }}
          className="w-16 h-8 rounded-xl text-lg border text-white border-solid border-white"
        >
          Yellow
        </button>

        <button
          onClick={() => {
            setColor("purple");
          }}
          style={{ backgroundColor: "purple" }}
          className="w-16 h-8 rounded-xl text-lg border text-white border-solid border-white"
        >
          Purple
        </button>

        <button
          onClick={() => {
            setColor("orange");
          }}
          style={{ backgroundColor: "Orange" }}
          className="w-16 h-8 rounded-xl text-lg border text-white border-solid border-white"
        >
          Orange
        </button>

        <button
          onClick={() => {
            setColor("black");
          }}
          style={{ backgroundColor: "black" }}
          className="w-16 h-8 rounded-xl text-lg border text-white border-solid border-white"
        >
          Black
        </button>
      </div>
    </div>
  );
}
export default Bg;
