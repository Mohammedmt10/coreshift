export const NavBar = () => {
  return (
    <div className="mx-auto flex max-w-2xl items-center justify-between rounded-2xl border-2 border-neutral-300 px-5 py-2 font-zalando text-sm leading-tight">
      <div>Logo</div>
      <div className="flex gap-4">
        <a>Product</a>
        <a>Features</a>
        <a>Pricing</a>
        <a>Resources</a>
      </div>
      <div className="flex gap-2">
        <button className="rounded-lg bg-neutral-50 bg-linear-to-b from-neutral-100 via-white to-neutral-100 px-4 py-2 shadow-[0px_0px_2px_rgba(0,0,0,0.25)]">
          Sign in
        </button>
        <button className="rounded-lg bg-neutral-900 px-4 py-1.5 text-neutral-100">
          Request a Demo
        </button>
      </div>
    </div>
  );
};
