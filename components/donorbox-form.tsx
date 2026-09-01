import Script from "next/script";
import { site } from "@/lib/site";

/* Donorbox's widget.js is what resizes the iframe as the visitor moves through
   the form — without it the frame stays at its initial height and the last
   step gets cut off. */
export function DonorboxForm() {
  return (
    <>
      <Script src="https://donorbox.org/widget.js" strategy="lazyOnload" />
      <iframe
        className="donorbox-frame"
        src={`${site.donorboxEmbedUrl}?language=en`}
        name="donorbox"
        title="IBM Peru giving form"
        height="900px"
        width="100%"
        scrolling="no"
        allow="payment"
      />
    </>
  );
}
