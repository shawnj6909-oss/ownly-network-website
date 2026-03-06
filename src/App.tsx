import { ArrowRight, Mail, MapPin, CheckCircle, Users, Zap, Target, Shield, RefreshCw, XCircle, AlertTriangle, Tag, Download } from 'lucide-react';
import { AnimatedLogo } from './components/AnimatedLogo';

function App() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/ownly-network-dist.zip';
    link.download = 'ownly-network-dist.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex flex-col items-center">
              <AnimatedLogo size="small" />
              <h1 className="text-xs font-semibold text-slate-700 tracking-wide -mt-1">Ownly</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition">Services</a>
              <a href="#process" className="text-slate-600 hover:text-slate-900 transition">Process</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition">About</a>
              <a href="#policies" className="text-slate-600 hover:text-slate-900 transition">Policies</a>
              <button onClick={handleDownload} className="text-slate-600 hover:text-slate-900 transition flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
              <a href="#contact" className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            AI Automation
            <span className="block mt-2 text-blue-600">Scale without increasing headcount.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Turn your everyday bottlenecks into done-for-you AI workflows that actually ship and make money, without you becoming a tech expert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition text-lg font-medium flex items-center justify-center gap-2">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="mailto:admin@ownly.network" className="bg-white text-slate-900 px-8 py-4 rounded-lg border-2 border-slate-900 hover:bg-slate-50 transition text-lg font-medium">
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">What We Offer</h3>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">AI Automation Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive consulting and setup to transform your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Process Automation</h3>
              <p className="text-slate-600">
                Automate repetitive tasks and workflows to free up your team for high-value work. From data entry to complex business logic.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom AI Solutions</h3>
              <p className="text-slate-600">
                Tailored AI implementations designed specifically for your business needs, tech stack, and goals.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Training & Support</h3>
              <p className="text-slate-600">
                Comprehensive training for your team and ongoing support to ensure your AI systems continue to deliver results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">How We Work</h3>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A methodical, low-risk approach that starts with understanding your business - not jumping straight into tools.
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                    01
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Discover & Diagnose</h3>
                  <p className="text-lg text-slate-600 mb-4">Understand first, automate second.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">We learn how your business actually works: goals, constraints, handoffs, and what a 'win' looks like.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">We map your tech stack and where data lives: CRMs, inboxes, spreadsheets, internal tools.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">We audit processes to find real bottlenecks and decide what should and shouldn't be automated.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                    02
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Design, Build & Validate</h3>
                  <p className="text-lg text-slate-600 mb-4">Custom solutions, tested before launch.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">We prioritize high-impact opportunities and decide where AI helps, and where it doesn't.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">We design and build custom workflows, test different approaches on real data, and explain our choices in plain language.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">We run evaluations in a real-world environment before full rollout.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                    03
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Launch, Monitor & Optimize</h3>
                  <p className="text-lg text-slate-600 mb-4">Continuous improvement, not a one-off project.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">We launch into production with clear success metrics and safeguards.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">We monitor performance, collect feedback from your team and customers, and fix issues quickly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">We continuously refine prompts, logic, and models so the system improves as your business evolves.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-slate-600 mb-6">Ready to see where AI can help your business?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition text-lg font-medium">
                Get in Touch
              </a>
              <a href="mailto:admin@ownly.network" className="bg-white text-slate-900 px-8 py-4 rounded-lg border-2 border-slate-900 hover:bg-slate-50 transition text-lg font-medium">
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">About</h3>
            <h2 className="text-4xl font-bold text-slate-900">Ownly</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-8">
              <p className="text-lg text-slate-600 mb-6">
                Ownly specializes in AI automation consulting and setup, helping businesses scale their operations without increasing headcount. Based in New York, we work with companies across industries to identify automation opportunities, implement custom AI solutions, and provide ongoing support.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our approach is methodical and low-risk. We take the time to understand your business before recommending solutions, ensuring that every automation we implement delivers real value and integrates seamlessly with your existing processes.
              </p>
              <p className="text-lg text-slate-600">
                Whether you're looking to automate repetitive tasks, implement intelligent workflows, or leverage AI to unlock new capabilities, we're here to help you navigate the complexity and achieve measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section id="policies" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Policies</h3>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Terms & Policies</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Clear policies to ensure transparency and trust in our business relationship
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Return Policy</h3>
              </div>
              <div className="space-y-3 text-slate-600">
                <p className="font-semibold text-slate-900">Physical Goods</p>
                <p>Eligible items can be returned within 30 days of delivery, provided they are unused and in original packaging.</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Email us with your order number and reason for return</li>
                  <li>We will provide return instructions and shipping address</li>
                  <li>Upon inspection, we will confirm approval or denial</li>
                </ul>
                <p className="text-sm italic">If an item arrives damaged or incorrect, contact us within 7 days of delivery.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Refunds & Disputes</h3>
              </div>
              <div className="space-y-3 text-slate-600">
                <p><strong>Refund Timing:</strong> Approved refunds are issued back to the original payment method within 5-10 business days.</p>
                <p><strong>Non-refundable Items:</strong> Some items or services may be non-refundable if clearly marked at purchase.</p>
                <p><strong>Chargebacks/Disputes:</strong> If you believe a charge is incorrect, please contact us first so we can resolve it quickly. If needed, you may also initiate a dispute with your payment provider.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Cancellation Policy</h3>
              </div>
              <div className="space-y-3 text-slate-600">
                <p><strong>Subscriptions:</strong> You can cancel at any time. Access will continue through the end of the current billing period unless otherwise stated at signup.</p>
                <p><strong>One-time Purchases:</strong> If cancellation is possible, requests must be submitted before fulfillment or delivery.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Legal / Export Restrictions</h3>
              </div>
              <div className="space-y-3 text-slate-600">
                <p>If applicable, products or services may be subject to local laws and export restrictions.</p>
                <p>We do not provide products or services where prohibited by law.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Promotions — Terms and Conditions</h3>
            </div>
            <div className="space-y-3 text-slate-600">
              <p>Promotions, discounts, and coupon codes are subject to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Availability for a limited time and may be modified or ended at any time</li>
                <li>One redemption per customer unless otherwise stated</li>
                <li>Exclusions for certain products, services, or plans</li>
                <li>No cash value and not transferable unless otherwise stated</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Contact</h3>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              For help with orders, billing, account access, or technical issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
              <a href="mailto:admin@ownly.network" className="text-blue-600 hover:text-blue-700 transition">
                admin@ownly.network
              </a>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600">New York, NY 10018</p>
              <p className="text-slate-600">United States</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ownly</h3>
              <p className="text-slate-400">AI automation consulting and setup to help your business scale.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-slate-400 hover:text-white transition">Services</a></li>
                <li><a href="#process" className="text-slate-400 hover:text-white transition">Process</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-white transition">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#policies" className="text-slate-400 hover:text-white transition">Policies</a></li>
                <li><a href="https://ownly.network" className="text-slate-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">Website</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>admin@ownly.network</li>
                <li>+1 917-742-9110</li>
                <li>New York, NY 10018</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2026 Ownly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
