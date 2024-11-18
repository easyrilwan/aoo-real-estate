import Home_1 from "../../../assets/images/home/home-1.jpeg";

export default function ImageGrid() {
  return (
    <div className="h-full w-full">
      <img
        src={Home_1}
        alt="Home Image 1"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
