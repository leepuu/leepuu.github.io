import Link from "next/link";

export default function Header() {
  return(
    <header className="bg-white sticky top-0 px-25">
      <h1>
        <Link href="/">푸다닥 개발뽀개기</Link>
      </h1>
    </header>
  )
}