import { useSyncExternalStore, type ReactNode } from "react";
import { contactEmailAddress, mailtoHref } from "../lib/contact";

interface ContactEmailProps {
  /** Pre-filled subject line for the mail client. */
  subject?: string;
  className?: string;
  /** Link label. Defaults to the address itself once it's available. */
  children?: ReactNode;
}

// "Is this running in a browser yet?" as a store rather than an effect: the
// snapshot simply differs between server and client, and it never changes
// afterwards, so nothing ever needs to notify a subscriber.
const neverChanges = () => () => {};
const onClient = () => true;
const onServer = () => false;

// The address is assembled only after hydration. During prerender this
// renders an anchor with no href and no address, so the static HTML that
// crawlers and harvesters fetch never contains the email — real visitors get
// the working link the moment the page scripts run.
export function ContactEmail({ subject, className, children }: ContactEmailProps) {
  const hydrated = useSyncExternalStore(neverChanges, onClient, onServer);
  const href = hydrated ? mailtoHref(subject) : undefined;
  const address = hydrated ? contactEmailAddress() : undefined;

  return (
    <a href={href} className={className}>
      {children ?? address ?? (
        <>
          <span className="en_inline">Email</span>
          <span className="tr_inline">E-posta</span>
        </>
      )}
    </a>
  );
}
