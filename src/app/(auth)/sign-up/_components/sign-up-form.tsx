"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Building2, Eye, EyeOff, Store } from "lucide-react";
import logo from "../../../../../public/assets/images/logo.png";

type AccountType = "broker" | "business-owner";

const SignupForm = () => {
  const [accountType, setAccountType] = useState<AccountType>("business-owner");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      className="auth-card auth-signup-card"
      aria-labelledby="signup-title"
    >
      <div className="flex w-full items-center justify-center">
        <Link href="/" aria-label="Vision Before Lease home">
          <Image
            src={logo}
            alt="Vision Before Lease"
            width={500}
            height={500}
            priority
          />
        </Link>
      </div>

      <h3 id="signup-title" className="text-center">
        Create an Account
      </h3>
      <p className="text-center">Access the Vision Before Lease platform.</p>

      <button type="button" className="auth-google-button">
        <span className="auth-google-mark" aria-hidden="true">
          G
        </span>
        Continue with Google
      </button>

      <div className="auth-divider" aria-hidden="true">
        <span>Or continue with email</span>
      </div>

      <form
        className="auth-signup-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <fieldset>
          <legend className="auth-field-label">Select primary function</legend>
          <div className="mt-1.5 grid grid-cols-2 gap-2">
            <button
              type="button"
              aria-pressed={accountType === "broker"}
              onClick={() => setAccountType("broker")}
              className={`auth-role-option ${accountType === "broker" ? "is-selected" : ""}`}
            >
              <Building2 aria-hidden="true" />
              <span className="auth-role-title">Landlord / Broker</span>
              <span className="auth-role-description">
                Analyze the best business fit for a vacant retail location
              </span>
            </button>
            <button
              type="button"
              aria-pressed={accountType === "business-owner"}
              onClick={() => setAccountType("business-owner")}
              className={`auth-role-option ${accountType === "business-owner" ? "is-selected" : ""}`}
            >
              <Store aria-hidden="true" />
              <span className="auth-role-title">Tenant / Business Owner</span>
              <span className="auth-role-description">
                Analyze a business in a vacant retail space
              </span>
            </button>
          </div>
        </fieldset>

        <label className="auth-signup-field">
          Full name
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="E.g. Alex Morgan"
            required
          />
        </label>
        <label className="auth-signup-field">
          Company / Brokerage
          <input
            type="text"
            name="company"
            autoComplete="organization"
            placeholder="E.g. Cushman & Wakefield"
            required
          />
        </label>
        <label className="auth-signup-field">
          Work email
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="alex@firm.com"
            required
          />
        </label>
        <label className="auth-signup-field">
          Password
          <span className="auth-signup-password">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="new-password"
              placeholder="At least 8 characters"
              minLength={8}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <Eye aria-hidden="true" />
              ) : (
                <EyeOff aria-hidden="true" />
              )}
            </button>
          </span>
        </label>

        <label className="auth-terms-row">
          <input type="checkbox" required />
          <span>
            I agree to the <a href="/terms">Terms &amp; Conditions</a> and{" "}
            <a href="/privacy">Privacy Policy</a>
          </span>
        </label>

        <button type="submit" className="auth-primary-button">
          Create Account
        </button>
      </form>

      <div className="auth-signup-footer">
        Already have an account? <Link href="/login">Sign in</Link>
      </div>
    </section>
  );
};

export default SignupForm;
