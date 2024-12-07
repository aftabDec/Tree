import Lists from "./Lists.jsx";
import Profile from "./Profile.jsx";

function App() {
  const items = [
    {
      image: "/github.png",
      name: "GitHub",
      link: "https://github.com/aftabDec",
    },
    {
      image: "/discord.png",
      name: "Discord",
      link: "https://discord.com/users/tartaglia_9",
    },
    {
      image: "/twitter.png",
      name: "Twitter",
      link: "https://x.com/aftab6th",
    },
    {
      image: "/instagram.png",
      name: "Instagram",
      link: "https://www.instagram.com/aaaftab_/",
    },
  ];

  return (
    <div className="flex p-5 backdrop-blur-md backdrop-brightness-150 flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#160c06] to-[#000000] text-white">
      <Profile
        name="Tartaglia (Aftab)"
        bio="Video Editor | I edit stuff, make it look cool, and then take a nap"
        img="/tar.jpg"
      />
      <Lists items={items} />
      <footer className="mt-8 text-gray-400 text-center">
        <p>Developed by: Meeee, baby!</p>
      </footer>
    </div>
  );
}

export default App;
