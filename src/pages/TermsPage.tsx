import { Helmet } from "react-helmet-async";

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Clarivis Consulting Group</title>
        <meta name="description" content="Terms of service for Clarivis Consulting Group. Read our terms and conditions for using our website and services." />
      </Helmet>

      <main className="py-16 lg:py-24">
        <div className="container-narrow mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 2025
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the website of Clarivis Consulting Group, LLC ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Use of Our Website
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may use our website for lawful purposes only. You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use the website in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any part of the website</li>
                  <li>Interfere with or disrupt the website's functionality</li>
                  <li>Use automated systems to access the website without our permission</li>
                  <li>Transmit any harmful code or malware</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The content on this website, including text, graphics, logos, images, and software, is the property of Clarivis Consulting Group, LLC and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Services Description
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We provide consulting services for health sector education programs, including accreditation readiness, compliance consulting, site visit preparation, and government contract support. The information provided on this website is for general informational purposes only and does not constitute professional advice. Specific consulting engagements are governed by separate service agreements.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  No Professional Advice
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information on this website is provided for general informational purposes only and should not be construed as professional advice. You should consult with qualified professionals regarding your specific situation before making any decisions based on the information provided here.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Clarivis Consulting Group, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses, resulting from your use of or inability to use our website or services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Disclaimer of Warranties
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the website will be uninterrupted, secure, or error-free.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Third-Party Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of linked sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Indemnification
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless Clarivis Consulting Group, LLC, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorney's fees) arising out of your use of our website or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Massachusetts, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the website after any changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p><strong>Clarivis Consulting Group, LLC</strong></p>
                  <p>Email: <a href="mailto:ebrichto@clarivisgroup.com" className="text-primary hover:underline">ebrichto@clarivisgroup.com</a></p>
                  <p>Phone: <a href="tel:+1-508-446-4592" className="text-primary hover:underline">(508) 446-4592</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsPage;
