export const NavBar = () => {
  return (
    <div className="fixed z-100 mx-auto flex max-w-2xl items-center justify-between gap-10 rounded-2xl border-2 border-neutral-300 bg-white px-2 py-1.5 pl-5 font-inter text-sm leading-tight font-medium">
      <div>Logo</div>
      <div className="flex gap-4">
        <a>Product</a>
        <a>Features</a>
        <a>Pricing</a>
        <a>Resources</a>
      </div>
      <div className="flex gap-2">
        <button className="cursor-pointer rounded-lg bg-neutral-50 bg-linear-to-b from-neutral-100 via-white to-neutral-100 px-4 py-2 shadow-[0px_0px_2px_rgba(0,0,0,0.25)]">
          Sign in
        </button>
        <button className="cursor-pointer rounded-lg bg-neutral-900 px-4 py-1.5 text-neutral-100">
          Request a Demo
        </button>
      </div>
    </div>
  );
};
