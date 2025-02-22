import { Globe, Code, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600 dark:text-blue-400 navy-blue:text-blue-300" />,
      title: "Multi-language Support",
      description: "Works with a wide range of programming languages, from Python to JavaScript and beyond.",
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600 dark:text-blue-400 navy-blue:text-blue-300" />,
      title: "Expert-level Suggestions",
      description: "Provides code improvements and suggestions as if written by experienced developers.",
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600 dark:text-blue-400 navy-blue:text-blue-300" />,
      title: "Fast and Efficient",
      description: "Quick analysis and instant feedback to improve your coding productivity.",
    },
  ]

  return (
    <section id="features" className="py-16 bg-gradient-to-r from-[#120744] via-[#7637be] to-[#319ae2] ">
      <h2 style={{ fontFamily: "var(--font-bruno)" }} className="text-3xl font-bold mb-8 text-center text-white navy-blue:text-gray-100">
        Features
      </h2>
      <div className="grid md:grid-cols-3  px-10 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#120744] duration-700 ease-out  md:hover:scale-110 text-white transition-allnavy-blue:bg-navy-700 p-6 rounded-lg shadow-md">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white navy-blue:text-gray-100">
              {feature.title}
            </h3>
            <p className=" navy-blue:text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

