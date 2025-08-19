const ImageCard = ({
  label,
  title,
  imageUrl,
}: {
  label: string;
  title: string;
  imageUrl: string;
}) => (
  <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg group">
    <img
      src={imageUrl}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
    <div className="absolute bottom-4 left-4 right-4 text-white">
      <div className="text-xs font-semibold uppercase tracking-wide opacity-80">
        {label}
      </div>
      <div className="text-lg font-bold mt-1 leading-tight">{title}</div>
    </div>
  </div>
);

export default ImageCard;
