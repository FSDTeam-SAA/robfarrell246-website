import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SuccessfullyApprovedModal = () => {
  return (
    <section
      className="auth-card auth-success-card"
      aria-labelledby="password-success-title"
      aria-describedby="password-success-description"
    >
      <div className="flex justify-center">
        <Image
          src="/assets/images/logo.png"
          alt="Vision Before Lease"
          width={250}
          height={46}
          priority
          className="h-auto w-[220px] sm:w-[250px]"
        />
      </div>

      <div className="mt-7 flex justify-center">
        <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#ECFDF3]">
          <Check className="h-9 w-9 text-[#12B76A]" strokeWidth={2.5} aria-hidden="true" />
        </div>
      </div>

      <h1
        id="password-success-title"
        className="mt-5 text-center text-[16px] font-bold uppercase leading-tight text-[#101828]"
      >
        You&apos;re All Set
      </h1>
      <p
        id="password-success-description"
        className="mt-2 text-center text-[11px] text-[#667085]"
      >
        Your password is changed and ready to go.
      </p>

      <Link
        href="/login"
        className="mt-5 flex h-8 w-full items-center justify-center rounded-[2px] bg-[#2563EB] text-[10px] font-medium uppercase text-white transition hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
      >
        Continue to Sign In
      </Link>
    </section>
  );
};

export default SuccessfullyApprovedModal;
