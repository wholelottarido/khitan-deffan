import Cover from "../components/sections/Cover";
import InfoAcara from "../components/sections/InfoAcara";
import PetaLokasi from "../components/sections/PetaLokasi";

// 1. Wajib ada kata 'async' di depan function
export default async function Page({
  searchParams,
}: {
  // 2. Tipe datanya harus dibungkus dengan Promise
  searchParams: Promise<{ to?: string }>;
}) {
  
  // 3. Wajib gunakan 'await' untuk membuka nilai dari URL
  const params = await searchParams;
  
  // 4. Baru kita bisa mengambil variabel 'to' dengan aman
  const namaTamu = params.to || "Nama Tamu Undangan";

  return (
    <main className="min-h-screen bg-gray-200 flex justify-center font-sans">
      <div className="w-full max-w-md bg-white shadow-2xl flex flex-col overflow-hidden">
        
        <Cover namaTamu={namaTamu} />
        <InfoAcara />
        <PetaLokasi />
        
      </div>
    </main>
  );
}