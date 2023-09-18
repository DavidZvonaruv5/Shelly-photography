import Banner from "@/components/Banner"
import About from "@/components/About"

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="relative z-10">
        <About />
      </div>

    </div>
  )
}
