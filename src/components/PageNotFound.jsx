import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-3 p-5">
      <button
        onClick={() => navigate(-1)}
        className="rounded-lg bg-black px-3 py-2 text-white"
      >
        &larr; Go back
      </button>
      <h1 className="text-4xl">The Page Not Found</h1>
    </div>
  );
}
