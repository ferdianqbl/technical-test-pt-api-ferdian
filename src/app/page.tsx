import ListAnime from "@/components/pages/home/list-anime";
import Navbar from "@/components/ui/navbar";

export default async function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-center">
          Welcome to <span className="text-blue-500">Anime</span> World
        </h1>
        <small className="text-gray-500 text-center block mb-8">
          You can find all anime here and know more about it. Enjoy!
        </small>

        <h2 className="text-xl font-bold mb-2">Top Anime</h2>
        <small className="text-gray-500 mb-4 block">
          This is a list of the top 10 anime.
        </small>
        <ListAnime />
      </div>
    </main>
  );
}
