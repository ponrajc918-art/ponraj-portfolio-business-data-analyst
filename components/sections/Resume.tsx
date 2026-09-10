/*import { ArrowDownToLine, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PERSONAL } from "@/lib/data";

export function Resume() {
  return (
    <section id="resume" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading eyebrow="Resume" title="The full picture, on one page" />

        <Reveal delay={0.15} className="mt-12">
          <div className="glass overflow-hidden rounded-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-6 py-4">
              <p className="text-sm text-muted">Ponraj-C-Resume.pdf</p>
              <div className="flex gap-3">
                <a
                  href={PERSONAL.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm text-text transition-colors hover:border-gold/40"
                >
                  <ExternalLink className="size-3.5" /> Open in new tab
                </a>
                <a
                  href={PERSONAL.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-[#0a0a0a] transition-transform hover:scale-[1.03]"
                >
                  <ArrowDownToLine className="size-3.5" /> Download
                </a>
              </div>
            </div>

            <div className="hidden bg-black/40 sm:block">
              <object
                data={PERSONAL.resumeUrl}
                type="application/pdf"
                className="h-[820px] w-full"
                aria-label="Ponraj C resume preview"
              >
                <p className="p-8 text-center text-muted">
                  Preview unavailable in this browser —{" "}
                  <a href={PERSONAL.resumeUrl} className="text-gold underline">
                    open the PDF directly
                  </a>
                  .
                </p>
              </object>
            </div>

            <div className="flex flex-col items-center gap-4 px-6 py-14 text-center sm:hidden">
              <p className="text-sm text-muted">
                Inline preview works best on desktop — open or download the PDF to view it here.
              </p>
              <a
                href={PERSONAL.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-[#0a0a0a]"
              >
                <ExternalLink className="size-3.5" /> View Resume
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
*/