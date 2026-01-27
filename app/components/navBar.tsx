export const NavBar = () => {
  return (
    <div className="mx-auto bg-white flex max-w-2xl items-center justify-between rounded-2xl border-2 border-neutral-300 px-2 py-1.5 pl-5 font-inter font-medium text-sm leading-tight fixed gap-10 z-100">
      <div>Logo</div>
      <div className="flex gap-4">
        <a>Product</a>
        <a>Features</a>
        <a>Pricing</a>
        <a>Resources</a>
      </div>
      <div className="flex gap-2">
        <button className="rounded-lg bg-neutral-50 bg-linear-to-b from-neutral-100 via-white to-neutral-100 px-4 py-2 shadow-[0px_0px_2px_rgba(0,0,0,0.25)] cursor-pointer">
          Sign in
        </button>
        <button className="rounded-lg bg-neutral-900 px-4 py-1.5 text-neutral-100 cursor-pointer">
          Request a Demo
        </button>
      </div>
    </div>
  );
};
