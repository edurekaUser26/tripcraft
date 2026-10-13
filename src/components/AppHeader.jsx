import Button from "./Button.jsx";
function AppHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <p className="text-2xl font-bold text-sky-700">TripCraft</p>
        <Button>New trip</Button>
      </div>
    </header>
  );
}

export default AppHeader;
