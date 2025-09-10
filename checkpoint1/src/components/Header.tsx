type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <header className="bg-blue-600 text-white p-4 text-center text-2xl">
      {title}
    </header>
  );
}

export default Header;
