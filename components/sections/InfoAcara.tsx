import Image from "next/image";

export default function InfoAcara() {
  return (
    <section className="w-full flex flex-col relative">
      {/* Gambar Background Info Acara */}
      <Image 
        src="/bg-info.png" 
        alt="Informasi Acara Khitan" 
        width={1080} 
        height={1920} 
        className="w-full h-auto block"
      />
    </section>
  );
}