const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
