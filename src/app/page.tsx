'use client';

import Camera from "@/components/Camera/camera";
import CameraControl from "@/components/CameraControl/cameraControl";
import Header from "@/components/Header/header";
import { useState } from "react";
import { FaEye, FaCircle } from "react-icons/fa";


export default function Home() {

  const [cameraAtiva, setCameraAtiva] = useState(false);

  return (
    <main
    className="flex flex-col min-h-screen bg-[var(--background)]">
      <Header/>
      <section className="flex flex-col items-center justify-center lg:flex-row p-8 gap-8 lg:gap-15">
        <article className="w-full h-full max-w-2xl">
          <div
          className="flex gap-4 justify-between items-center bg-[#0a0e13] p-6 rounded-lg shadow-md max-w-2xl w-full">
            <div
            className="flex items-center gap-2 text-[13px] sm:text-[16px] md:text-[20px] text-[var(--neural-blue)]">
              <FaEye className="text-[var(--neural-blue)] inline-block mr-2" />
              <p> CÂMERA DE RECONHECIMENTO FACIAL</p>
            </div>

            <div
            className="hidden md:flex items-center gap-2">
              <FaCircle className="text-red-500 w-3 h-3" />
              <p
              className="text-[var(--text-secondary)] text-sm">
                Offline
              </p>
            </div>
          </div>

            <Camera
            cameraAtiva={cameraAtiva}
            />

        </article>

        <article className="w-full h-full max-w-2xl">
          <CameraControl
          cameraAtiva={cameraAtiva}
          onAtivar={() => setCameraAtiva(true)}
          onDesligar={() => setCameraAtiva(false)}
          />
        </article>
      </section>
    </main>
  );
}
