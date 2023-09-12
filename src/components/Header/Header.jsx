import profile from "../../assets/profile.png";
const Header = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-yellow-500 mb-8">
      <header className="container mx-auto flex justify-between py-2">
        <h1 className="text-4xl font-bold text-white">Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </header>
    </div>
  );
};

export default Header;
