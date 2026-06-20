// components/sections/Cover.tsx
import Image from "next/image";

interface CoverProps {
  namaTamu: string;
}

export default function Cover({ namaTamu }: CoverProps) {
  return (
    <section className="relative w-full flex flex-col items-center">
      <Image 
        src="/bg-cover.png" 
        alt="Cover Undangan Khitan" 
        width={1080} 
        height={1920} 
        className="w-full h-auto"
        priority 
      />
      
      {/* ================================================================
          FRAME PEMBATAS NAMA TAMU
          ================================================================ */}
      {/* Trik: Saya menambahkan "bg-red-500/50" (merah transparan).
        Ini agar kamu bisa MELIHAT ukuran frame-nya. 
        Jika bingkai merahnya sudah pas menutupi kotak putih, HAPUS tulisan "bg-red-500/50".
      */}
      <div className="absolute bg-red-500/0 overflow-hidden flex items-center justify-center px-4
                      bottom-[3.5%] h-[12%] left-[12%] right-[12%]">
        
        {/* Teks di dalam frame */}
        {/* text-balance akan membuat baris atas dan bawah seimbang jika teksnya panjang */}
        <p className="font-serif text-[#4a402d] text-lg sm:text-xl md:text-2xl font-bold text-center capitalize leading-tight w-full text-balance">
          {namaTamu}
        </p>
        
      </div>
    </section>
  );
}