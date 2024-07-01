export function ToolLoader() {
  return (
    <article className="animate-pulse hover:shadow-md transition-shadow duration-300 shadow-sm rounded-xl overflow-hidden border border-border">
      <div className="w-full grid grid-rows-5">
        <div className="row-span-3 border-b border-border"></div>
        <section className="row-span-2 p-4 items-start flex flex-col gap-2">
          <div className="h-4 rounded-lg bg-secondary" />
          <div className="flex gap-2">
            <span className="h-4 w-12 rounded-lg bg-secondary"></span>
            <span className="h-4 w-12 rounded-lg bg-secondary"></span>
          </div>
        </section>
      </div>
      <footer className="flex border-t divide-x border-border">
        <div className="group flex-1 justify-center group flex items-center gap-1 px-4 py-4 hover:bg-secondary transition">
          <span className="h-4 w-full bg-secondary rounded-lg" />
        </div>
        <div className="group flex-1 justify-center group flex items-center gap-1 px-4 py-4 hover:bg-secondary transition">
          <span className="h-4 w-full bg-secondary rounded-lg" />
        </div>
      </footer>
    </article>
  )
}

export function ToolsListLoader() {
  return (
    <ul className="w-full grid grid-cols-responsive gap-6 p-6">
      {
        [1, 2, 3, 4, 5].map(n => <ToolLoader />)
      }
    </ul>
  )
}