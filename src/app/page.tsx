import ListAnime from "@/components/pages/home/list-anime";
import Navbar from "@/components/ui/navbar";

export default async function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="container py-4">
        <h1 className="text-3xl font-bold text-center mt-8">
          Welcome to <span className="text-blue-500">Anime</span> World
        </h1>
        <small className="text-gray-500 text-center block mb-8">
          You can find all anime here and know more about it. Enjoy!
        </small>
        <ListAnime />
      </div>
    </main>
  );
}
