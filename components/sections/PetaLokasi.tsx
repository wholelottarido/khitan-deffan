import Image from "next/image";

export default function PetaLokasi() {
  return (
    <section className="w-full flex flex-col relative">
      {/* Gambar Background Peta Lokasi */}
      <Image 
        src="/bg-map1.png" 
        alt="Peta Lokasi Khitan" 
        width={1080} 
        height={1920} 
        className="w-full h-auto block"
      />
    </section>
  );
}