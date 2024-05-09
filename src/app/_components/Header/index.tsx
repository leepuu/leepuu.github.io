import Link from 'next/link';

export default function Header() {
  return (
    <header className='px-25 sticky top-0 bg-white'>
      <h1>
        <Link href='/'>푸다닥 개발뽀개기</Link>
      </h1>
    </header>
  );
}
