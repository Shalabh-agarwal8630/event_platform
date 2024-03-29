import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>Made By <a href="https://www.linkedin.com/in/shalabh-agarwal-84035121b/" target="blank" className="text-blue-500 hover:underline">Shalabh Agarwal</a></p>
        <p>2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer