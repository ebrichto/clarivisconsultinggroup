import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { SEOWrapper } from "@/components/SEOWrapper";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnjjajdj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success("Thank you for your inquiry. We will be in touch shortly.");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article>
      <SEOWrapper path="/contact" />

      {/* Hero */}
      <section aria-labelledby="contact-heading" className="bg-gradient-hero py-16 md:py-24">
        <div className="container-narrow mx-auto px-6 text-center">
          <h1 id="contact-heading" className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Schedule a Free Consultation
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Ready to discuss your accreditation, compliance, or consulting needs? We are here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section aria-labelledby="form-heading" className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <aside className="lg:col-span-2" aria-label="Contact information">
              <h2 id="form-heading" className="font-display text-2xl font-bold text-foreground">
                Get in Touch
              </h2>
              <p className="mt-4 text-muted-foreground">
                Complete the form or reach out directly. We typically respond within one business day.
              </p>

              <address className="mt-8 space-y-6 not-italic">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent" aria-hidden="true">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:ebrichto@clarivisgroup.com"
                      className="text-muted-foreground hover:text-accent focus:outline-none focus:underline"
                    >
                      ebrichto@clarivisgroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent" aria-hidden="true">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+1-508-446-4592"
                      className="text-muted-foreground hover:text-accent focus:outline-none focus:underline"
                    >
                      (508) 446-4592
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent" aria-hidden="true">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">
                      Serving clients nationwide
                    </p>
                  </div>
                </div>
              </address>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card lg:p-8">
                {submitted ? (
                  <div className="py-12 text-center" role="status" aria-live="polite">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10" aria-hidden="true">
                      <CheckCircle2 className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-card-foreground">
                      Thank You
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      We have received your inquiry and will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          First Name <span aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          aria-required="true"
                          placeholder="John"
                          autoComplete="given-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          Last Name <span aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          aria-required="true"
                          placeholder="Smith"
                          autoComplete="family-name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        aria-required="true"
                        placeholder="john.smith@organization.com"
                        autoComplete="email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        name="organization"
                        placeholder="Your Organization Name"
                        autoComplete="organization"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">
                        How Can We Help? <span aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        aria-required="true"
                        placeholder="e.g., Accreditation Readiness Support"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Please share any additional context about your needs..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Schedule Free Consultation"}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="underline hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                        privacy policy
                      </a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
