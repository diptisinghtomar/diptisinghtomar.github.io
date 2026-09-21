const asset = (src) => `${import.meta.env.BASE_URL}${src}`;

export default function FeaturedMediaCard({ post }) {
  const external = post.url !== "#TODO";
  const media = post.type === "video" ? (
    <video className="block h-auto w-full" controls playsInline poster={post.poster ? asset(post.poster) : undefined}>
      <source src={asset(post.media)} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img src={asset(post.media)} alt={post.alt} className="block h-auto w-full" />
  );

  return (
    <a
      href={post.url}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block overflow-hidden border border-site bg-site transition hover:-translate-y-1"
    >
      {media}
    </a>
  );
}
