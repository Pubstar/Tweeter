import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#A1C349] h-screen">
      <nav className="bg-[#243010] text-[#CAD593] flex justify-between py-4 px-12">
        <div>
          <a className="font-extrabold text-2xl">Tweeter</a>
        </div>
        <div className="gap-4 flex">
          <span>Login</span>
          <span>Register</span>
        </div>
      </nav>
      <div className="flex justify-center py-12">
        Hello World
      </div>
    </main>
  );
}
