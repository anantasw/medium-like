import React from 'react'

function Hero() {
  return (
    <section className="bg-yellow-400 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-10 px-5 lg:py-0">
        <div className="space-y-3">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline">Medium</span> is a place to write, read,
            and connect.
          </h1>
          <h2 className="text-xl">
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>

        <img
          className="hidden md:inline-flex md:h-64 lg:h-full"
          src="https://miro.medium.com/max/1400/1*psYl0y9DUzZWtHzFJLIvTw.png"
          alt="Medium Logo Hero"
        />
      </div>
    </section>
  )
}

export default Hero
