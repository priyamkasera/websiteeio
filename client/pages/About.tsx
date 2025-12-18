import Layout from "@/components/Layout";
import { Users, Target, Heart, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering projects with highest quality standards and precision"
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Building a collaborative environment where expertise and innovation thrive"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Operating with transparency, honesty, and accountability in all dealings"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Embracing modern technologies and methodologies for project excellence"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">About Agroha Infrastructure</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A new infrastructure company ready to tackle projects of any scale with expertise, innovation, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 text-lg">
                <p>
                  Agroha Infrastructure was founded with a clear vision: to bring world-class infrastructure expertise to complex project challenges.
                </p>
                <p>
                  Led by Mukesh Gupta, our company combines strategic vision with operational excellence. While we're new to the market, our team brings decades of combined experience from leading infrastructure companies.
                </p>
                <p>
                  We're ready to take on projects of any scale - from planning and design through execution and completion. Our commitment is not just to build structures, but to build trust through exceptional delivery.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white space-y-6">
              <div>
                <p className="text-4xl font-bold mb-2">0</p>
                <p className="text-blue-100">Completed Projects</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-blue-100">Project Ready</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">+10</p>
                <p className="text-blue-100">Expert Team Members</p>
              </div>
              <div className="border-t border-blue-400 pt-6">
                <p className="font-semibold mb-2">Our Commitment</p>
                <p className="text-blue-100">Delivering infrastructure solutions that exceed expectations and drive positive impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership</h2>
            <p className="text-lg text-slate-600">
              Visionary leadership driving excellence in infrastructure development
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-12 border border-blue-200">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto flex items-center justify-center mb-6">
                  <span className="text-white text-4xl font-bold">MG</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Mukesh Gupta</h3>
                <p className="text-lg text-blue-600 font-semibold mt-2">Founder & Chief</p>
              </div>
              <p className="text-slate-700 text-center text-lg leading-relaxed">
                Mukesh Gupta brings strategic vision and operational excellence to Agroha Infrastructure. With a passion for infrastructure development and commitment to innovation, he leads the company with focus on delivering excellence in every project undertaken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Let's discuss how we can help bring your infrastructure vision to life
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all hover:shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </Layout>
  );
}
