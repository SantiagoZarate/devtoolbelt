import { FloatingImages } from "./FloatingImages"
import "./heroSection.css"

export function HeroSection() {
  return (
    <section className="relative border-b border-border w-full overflow-hidden">
      <div className="w-full absolute z-40 blur-2xl -top-11 pointer-events-none">
        <img
          className="w-full h-full saturate-0 bg-blend-lighten mix-blend-multiply object-cover opacity-30"
          src="images/lightbeam.avif"
          alt="hero section image" />
      </div>
      <article className="mx-auto max-w-screen-xl py-48 grid grid-cols-4">
        <div className="z-40 flex flex-col gap-4 col-span-3">
          <span className="text-xs font-bold rounded-full px-3 py-1 bg-secondary w-fit">More than 100 resources</span>
          <h1 className="text-6xl font-bold">All the <span className="outlined">tools</span> that you would ever need</h1>
          <p className="text-xl text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis veritatis maiores, dolorem aspernatur autem?</p>
        </div>
        <FloatingImages />
      </article>
    </section>
  )
}
