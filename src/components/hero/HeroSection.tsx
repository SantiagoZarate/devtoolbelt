import "./heroSection.css"

export function HeroSection() {
  return (
    <section className="relative border-b border-border w-full">
      <div className="w-full absolute z-40 blur-2xl -top-11 pointer-events-none">
        <img className="w-full h-full object-cover" src="images/lightbeam.avif" alt="" />
      </div>
      <article className="mx-auto max-w-screen-xl py-48 grid grid-cols-4">
        <div className="flex flex-col gap-4 col-span-3">
          <h1 className="text-6xl font-bold">All the <span className="outlined">tools</span> that you would ever need</h1>
          <p className="text-xl text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis veritatis maiores, dolorem aspernatur autem?</p>
        </div>
        <div>
          unused
        </div>
      </article>
    </section>
  )
}
