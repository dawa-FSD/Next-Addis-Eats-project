import SignInForm from "../components/SignInForm";

export const metadata = { title: "Sign in | Addis Eats" };

export default function SignInPage() {
  return (
    <section className="page-section container signin-page">
      <div className="page-heading compact-heading">
        <span className="eyebrow">WELCOME BACK</span>
        <h1>
          Sign <em>in.</em>
        </h1>
        <p>Demonstration form for the capstone project.</p>
      </div>
      <SignInForm />
    </section>
  );
}
