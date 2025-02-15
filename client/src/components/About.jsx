export default function About() {
  return (
    <section id="about" className="py-16 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 style={{ fontFamily: "var(--font-bruno)" }} className="text-3xl  font-bold mb-4 text-gray-800  dark:text-white navy-blue:text-gray-100">
          About CodeReviewer
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 navy-blue:text-gray-200">
          CodeReviewer is an advanced tool that analyzes and improves code in any programming language. Our AI-powered
          system reviews your code and provides suggestions as if written by an experienced developer, helping you write
          cleaner, more efficient, and more maintainable code.
        </p>
      </div>
    </section>
  )
}

